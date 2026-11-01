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
     "home": "Norwich",
     "away": "Watford",
     "status": "FINISHED",
     "score": "3-2"
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
     "home": "Augsburg",
     "away": "Freiburg",
     "status": "FINISHED",
     "score": "1-2"
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Real Betis",
     "away": "Málaga",
     "status": "FINISHED",
     "score": "2-1"
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Barça",
     "away": "Alavés",
     "status": "FINISHED",
     "score": "6-1"
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
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Strasbourg",
     "away": "Auxerre",
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
     "title": "How 'brave & balanced' Brighton beat Man City",
     "published": "2026-10-31T23:59:24+00:00",
     "summary": "Match of the Day pundits Danny Murphy and Stephan Warnock analyse Brighton's impressive 1-0 victory over Manchester City, with Warnock praising the balance of the Seagulls squad."
    },
    {
     "ref": "bbc_football#1",
     "title": "Has Martinez become a liability for Man Utd?",
     "published": "2026-10-31T23:59:22+00:00",
     "summary": "Match of the Day pundits Danny Murphy and Stephan Warnock analyse Lisandro Martinez's performance in Manchester United's 2-0 defeat to Chelsea, where the Argentinian defender was sent off."
    },
    {
     "ref": "bbc_football#2",
     "title": "Are Manchester United really at risk of a relegation scrap?",
     "published": "2026-10-31T23:52:28+00:00",
     "summary": "Manchester United's current tally of nine points from seven games would not even get them 30 points if it was continued for the full season."
    },
    {
     "ref": "bbc_football#3",
     "title": "Coventry, Ipswich, Hull - promoted trio enjoy positive starts",
     "published": "2026-10-31T23:08:07+00:00",
     "summary": "The three teams have collected a respectable 31 points in total after nine games, and all currently sit above the relegation zone."
    },
    {
     "ref": "bbc_football#4",
     "title": "Kane misses Bayern penalty before late Dortmund goal earns draw",
     "published": "2026-10-31T23:05:55+00:00",
     "summary": "Harry Kane misses from the spot as Bayern Muich are held to a 2-2 draw with Borussia Dortmund in Der Klassiker after Fabio Silva's late equaliser."
    },
    {
     "ref": "bbc_football#5",
     "title": "McInnes demands more after delivering Rangers' trophy chance",
     "published": "2026-10-31T22:40:38+00:00",
     "summary": "Derek McInnes knows there is room for improvement as he steers in-form Rangers to the Premier Sports Cup final with a 1-0 win over Aberdeen."
    },
    {
     "ref": "bbc_football#6",
     "title": "Chelsea beat 10-man Man Utd to pile more pressure on Carrick",
     "published": "2026-10-31T22:30:16+00:00",
     "summary": "Lisandro Martinez is sent off for Manchester United as they suffer a 2-0 defeat against Chelsea at Stamford Bridge to pile more pressure on under-fire manager Michael Carrick."
    },
    {
     "ref": "bbc_football#7",
     "title": "Brighton pick up first away league victory over Man City",
     "published": "2026-10-31T22:30:05+00:00",
     "summary": "Brighton pick up their first away league victory at Manchester City, winning 1-0 to condemn City to a second successive Premier League defeat."
    },
    {
     "ref": "bbc_football#8",
     "title": "Coventry out of bottom three after win over struggling Sunderland",
     "published": "2026-10-31T22:29:50+00:00",
     "summary": "Frank Lampard's Coventry City lift themselves out of the relegation zone after beating struggling Sunderland, who remain rooted to the bottom of the Premier League table."
    },
    {
     "ref": "bbc_football#9",
     "title": "Enciso's stunning goal earns Ipswich draw at Hull",
     "published": "2026-10-31T22:29:40+00:00",
     "summary": "Julio Enciso scores the equalising goal for Ipswich as they draw 2-2 with Hull at the MKM Stadium."
    },
    {
     "ref": "bbc_football#10",
     "title": "Spurs revival continues with victory over 10-man Crystal Palace",
     "published": "2026-10-31T22:29:29+00:00",
     "summary": "Jean-Philippe Mateta was shown an early red card as Crystal Palace lose 2-0 at Tottenham to increase the pressure on manager Pierre Sage."
    },
    {
     "ref": "bbc_football#11",
     "title": "Evanilson scores again as Bournemouth beat Leeds",
     "published": "2026-10-31T22:29:21+00:00",
     "summary": "Forward Evanilson continues his fine goalscoring form by netting in a fourth Premier League match in a row to help Bournemouth defeat Leeds United at the Vitality Stadium."
    },
    {
     "ref": "bbc_football#12",
     "title": "Thiago on target as Brentford beat Forest",
     "published": "2026-10-31T22:29:11+00:00",
     "summary": "Igor Thiago's second-half goal helps Brentford to their first win in five as they beat Nottingham Forest 2-0 at the Gtech Community Stadium."
    },
    {
     "ref": "bbc_football#13",
     "title": "Suzuki mistake gifts Fulham point at Villa",
     "published": "2026-10-31T22:29:02+00:00",
     "summary": "Aston Villa goalkeeper Zion Suzuki's second-half mistake sees Fulham secure a 1-1 draw at Villa Park after Nicolas Jackson had given the hosts the lead."
    },
    {
     "ref": "bbc_football#14",
     "title": "Man Utd enquire about Toney - Sunday's gossip",
     "published": "2026-10-31T22:14:36+00:00",
     "summary": "Manchester United enquire about Ivan Toney's availability, Barcelona are tracking Chelsea winger Estevao Willian, Jean-Philippe Mateta is set to leave Crystal Palace in January, plus more."
    },
    {
     "ref": "bbc_football#15",
     "title": "AC Milan score three first-half goals to seal derby victory over Inter",
     "published": "2026-10-31T21:58:09+00:00",
     "summary": "Christian Pulisic, Adrien Rabiot and Diego Moreira score in the first-half to help AC Milan to a 3-1 victory over city rivals Inter Milan in the first Milan derby of the season in Serie A."
    },
    {
     "ref": "bbc_football#16",
     "title": "Are De Zerbi's Spurs finding elusive consistency?",
     "published": "2026-10-31T21:16:11+00:00",
     "summary": "Are Spurs finally finding elusive consistency under Roberto de Zerbi after a third successive Premier League win, asks chief football writer Phil McNulty?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Watch Saturday's Sportscene highlights on iPlayer",
     "published": "2026-10-31T20:51:42+00:00",
     "summary": "Highlights from Kilmarnock v St Johnstone and Motherwell v St Mirren."
    },
    {
     "ref": "bbc_football#18",
     "title": "Verbruggen spreads belief as impressive Brighton beat Man City",
     "published": "2026-10-31T20:36:26+00:00",
     "summary": "Goalkeeper Bart Verbruggen was the man of the moment on Saturday afternoon as he produced an impressive individual display to help Brighton beat Manchester City"
    },
    {
     "ref": "bbc_football#19",
     "title": "Glasner fears he will be next Forest sacking if wins don't follow",
     "published": "2026-10-31T20:26:15+00:00",
     "summary": "Nottingham Forest head coach Oliver Glasner warns he will be the fifth sacking in just over a year by the club, unless results improve soon."
    },
    {
     "ref": "bbc_football#20",
     "title": "More goals for Lankshear, home woes for Hammers - Aaron McLean's EFL Takeaways",
     "published": "2026-10-31T20:24:50+00:00",
     "summary": "BBC Final Score pundit Aaron McLean looks at the weekend's talking points in the EFL, including Middlesbrough and West Ham United."
    },
    {
     "ref": "bbc_football#21",
     "title": "Tottenham mood 'totally different' - De Zerbi",
     "published": "2026-10-31T20:13:33+00:00",
     "summary": "Tottenham manager Roberto De Zerbi said the mood at the club is \"totally different\" after picking up a third straight league victory with a 2-0 win over Crystal Palace."
    },
    {
     "ref": "bbc_football#22",
     "title": "Sage looking for solutions to Palace form",
     "published": "2026-10-31T20:13:28+00:00",
     "summary": "Crystal Palace manger Pierre Sage reacts as his side loses a third consecutive league game following their 2-0 defeat by Tottenham."
    },
    {
     "ref": "bbc_football#23",
     "title": "Sunderland's paradox - San Siro trip amid relegation battle",
     "published": "2026-10-31T20:03:10+00:00",
     "summary": "Sunderland were last season's surprise package in the Premier League, but this time they are struggling after Coventry handed them their sixth defeat."
    },
    {
     "ref": "bbc_football#24",
     "title": "'Always under pressure' - patience for Nuno wanes at West Ham",
     "published": "2026-10-31T19:23:02+00:00",
     "summary": "West Ham United head coach Nuno Espirito Santo says he is under pressure every day as West Brom win intensifies criticism of him."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi's only vote: he surprises Ibrahim Maza in the Ballon d'Or voting - Goal.com",
     "published": "2026-11-01T03:03:55+00:00",
     "summary": "Lionel Messi's only vote: he surprises Ibrahim Maza in the Ballon d'Or voting Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Revolution host Messi, Inter Miami as they try to seal second place in East - Big News Network.com",
     "published": "2026-11-01T01:55:00+00:00",
     "summary": "Revolution host Messi, Inter Miami as they try to seal second place in East Big News Network.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) - revolutionsoccer.net",
     "published": "2026-11-01T01:45:09+00:00",
     "summary": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Revolution host Messi, Inter Miami as they try to seal second place in East - The Lufkin Daily News",
     "published": "2026-11-01T01:42:06+00:00",
     "summary": "Revolution host Messi, Inter Miami as they try to seal second place in East The Lufkin Daily News"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-01T01:19:58+00:00",
     "summary": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-01T01:11:54+00:00",
     "summary": "Inter Miami vs Charlotte FC: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-11-01T01:07:33+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "New England Revolution v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-01T00:29:46+00:00",
     "summary": "New England Revolution v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "How to watch New England vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season - World Soccer Talk",
     "published": "2026-11-01T00:06:03+00:00",
     "summary": "How to watch New England vs Inter Miami match in the USA: Live stream and TV for 2026 MLS season World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "A strange rule prevents Messi from being suspended despite receiving 5 yellow cards - Goal.com",
     "published": "2026-10-31T23:38:06+00:00",
     "summary": "A strange rule prevents Messi from being suspended despite receiving 5 yellow cards Goal.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi’s Inter Miami can clinch 2027 Concacaf Champions Cup spot with a win vs New England - World Soccer Talk",
     "published": "2026-10-31T23:29:59+00:00",
     "summary": "Lionel Messi’s Inter Miami can clinch 2027 Concacaf Champions Cup spot with a win vs New England World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Cristiano Ronaldo vs Lionel Messi: Carlos Tevez reveals how Argentina’s legend predicts his own goals and w... - World Soccer Talk",
     "published": "2026-10-31T23:11:04+00:00",
     "summary": "Cristiano Ronaldo vs Lionel Messi: Carlos Tevez reveals how Argentina’s legend predicts his own goals and w... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-31T22:36:10+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "The Wild Rule That Helped Lionel Messi Escape Suspension for Fifth MLS Yellow Card - Sports Illustrated",
     "published": "2026-10-31T21:30:00+00:00",
     "summary": "The Wild Rule That Helped Lionel Messi Escape Suspension for Fifth MLS Yellow Card Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "New England Revolution vs Inter Miami Prediction and Betting Tips | November 1st 2026 - Sportskeeda",
     "published": "2026-10-31T20:04:30+00:00",
     "summary": "New England Revolution vs Inter Miami Prediction and Betting Tips | November 1st 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami visit New England Revolution on Sunday, kick-off seven p.m. ET - OneFootball",
     "published": "2026-10-31T19:50:23+00:00",
     "summary": "Inter Miami visit New England Revolution on Sunday, kick-off seven p.m. ET OneFootball"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi expected to start in Miami’s crucial Cincinnati clash - The Daily Star",
     "published": "2026-10-31T19:46:41+00:00",
     "summary": "Messi expected to start in Miami’s crucial Cincinnati clash The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi's Miami stumble to draw against Cincinnati - The Daily Star",
     "published": "2026-10-31T18:47:57+00:00",
     "summary": "Messi's Miami stumble to draw against Cincinnati The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MATCH PREVIEW: Inter Miami CF Visits the New England Revolution on Sunday - Inter Miami CF",
     "published": "2026-10-31T18:22:41+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Visits the New England Revolution on Sunday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "A fleeting joy and a sad ending! Messi joins a Brazilian club in a stunning surprise - Goal.com",
     "published": "2026-10-31T17:39:49+00:00",
     "summary": "A fleeting joy and a sad ending! Messi joins a Brazilian club in a stunning surprise Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "MLS Prepares Its 18 Representatives for the 2027 Leagues Cup! Inter Miami, LAFC and the Teams Fighting for ... - Pasión Fútbol",
     "published": "2026-10-31T17:30:56+00:00",
     "summary": "MLS Prepares Its 18 Representatives for the 2027 Leagues Cup! Inter Miami, LAFC and the Teams Fighting for ... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami Wants Its Leagues Cup Crown Back! Lionel Messi and Kily González Lead MLS Title Ambitions for 2... - Pasión Fútbol",
     "published": "2026-10-31T17:24:33+00:00",
     "summary": "Inter Miami Wants Its Leagues Cup Crown Back! Lionel Messi and Kily González Lead MLS Title Ambitions for 2... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "New England Revolution - Inter Miami CF prediction & tips 02.11.2026 - Transfermarkt",
     "published": "2026-10-31T17:24:25+00:00",
     "summary": "New England Revolution - Inter Miami CF prediction & tips 02.11.2026 Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Rodrigo De Paul Is on Fire Ahead of New England Revolution! The Numbers That Give Inter Miami Hope Before a... - Pasión Fútbol",
     "published": "2026-10-31T17:20:57+00:00",
     "summary": "Rodrigo De Paul Is on Fire Ahead of New England Revolution! The Numbers That Give Inter Miami Hope Before a... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Casemiro Faces a Crucial Test With Inter Miami! The Brazilian's Impressive Form Could Be Key Against New En... - Pasión Fútbol",
     "published": "2026-10-31T17:18:44+00:00",
     "summary": "Casemiro Faces a Crucial Test With Inter Miami! The Brazilian's Impressive Form Could Be Key Against New En... Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija scores 24 and Damian Lillard has 22 as Portland Trail Blazers roll over Utah Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Deni Avdija scores 24 and Damian Lillard has 22 as Portland Trail Blazers roll over Utah Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - NST Online",
     "published": "2026-11-01T00:29:35+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined NST Online"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 - NBA.com",
     "published": "2026-10-31T22:03:10+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Portland Dominates Utah for Fourth Win of Season - roundtable.io",
     "published": "2026-10-31T21:56:50+00:00",
     "summary": "Portland Dominates Utah for Fourth Win of Season roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Avdija scores 24 and Lillard has 22 as Portland rolls over Utah 112-90 - Newsday",
     "published": "2026-10-31T21:55:18+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Portland rolls over Utah 112-90 Newsday"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-31T21:36:33+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-10-31T01:59:28+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
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
     "title": "Nets pick up 2027-28 options on five young players - TalkBasket.net",
     "published": "2026-10-30T07:25:39+00:00",
     "summary": "Nets pick up 2027-28 options on five young players TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores game-high 24 points vs. Utah - NBC Sports",
     "published": "2026-10-30T07:00:00+00:00",
     "summary": "Deni Avdija scores game-high 24 points vs. Utah NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-30T07:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season - Ynetnews",
     "published": "2026-10-30T06:19:28+00:00",
     "summary": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Portland Trail Blazers vs. Memphis Grizzlies: Oct. 29, 2026 - OregonLive.com",
     "published": "2026-10-30T04:55:46+00:00",
     "summary": "Portland Trail Blazers vs. Memphis Grizzlies: Oct. 29, 2026 OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija with the And-1!, 10/29/2026 - Yahoo Sports",
     "published": "2026-10-30T04:31:22+00:00",
     "summary": "Deni Avdija with the And-1!, 10/29/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies - Sports Illustrated",
     "published": "2026-10-30T04:24:46+00:00",
     "summary": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Should I Trade Ben Saraf for Johnny Furphy? | Fantasy Basketball - FantasyPros",
     "published": "2026-10-30T02:18:27+00:00",
     "summary": "Should I Trade Ben Saraf for Johnny Furphy? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-29T22:31:10+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Nets' Ben Saraf: Option picked up - CBS Sports",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Nets' Ben Saraf: Option picked up CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Ben Saraf News: Option picked up - RotoWire",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Ben Saraf News: Option picked up RotoWire"
    }
   ]
  }
 ]
}
</input>