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
  "home": "Atleti",
  "away": "Barça",
  "kickoff_utc": "2026-11-08T20:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Dallas Mavericks",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-09T00:30:00.000Z"
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
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Wrexham",
     "away": "Wolverhampton",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Bristol City",
     "away": "Norwich",
     "status": "FINISHED",
     "score": "0-5"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Leeds United",
     "away": "Tottenham",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Portsmouth",
     "away": "Stoke",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T13:00:00Z",
     "home": "Málaga",
     "away": "Santander",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T14:00:00Z",
     "home": "Torino",
     "away": "Lecce",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T14:00:00Z",
     "home": "Cagliari",
     "away": "Frosinone",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "SC Paderborn",
     "away": "Frankfurt",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "RB Leipzig",
     "away": "Augsburg",
     "status": "FINISHED",
     "score": "5-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "Dortmund",
     "away": "Elversberg",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "Mainz",
     "away": "Bayern",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Blackburn",
     "away": "West Ham",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Cardiff",
     "away": "Burnley",
     "status": "FINISHED",
     "score": "5-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Preston NE",
     "away": "Southampton",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Fulham",
     "away": "Newcastle",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Arsenal",
     "away": "Hull City",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Birmingham",
     "away": "Swansea",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "West Brom",
     "away": "Millwall",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Charlton",
     "away": "Sheffield Utd",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Watford",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "QPR",
     "away": "Lincoln City",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T15:15:00Z",
     "home": "Espanyol",
     "away": "Deportivo",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T15:30:00Z",
     "home": "Sittard",
     "away": "Telstar",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T17:00:00Z",
     "home": "Parma",
     "away": "Bologna",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Nottingham",
     "away": "Man City",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Stuttgart",
     "away": "Bremen",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Osasuna",
     "away": "Athletic",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T17:45:00Z",
     "home": "Den Haag",
     "away": "Sparta",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-07T18:00:00Z",
     "home": "Alverca",
     "away": "Casa Pia",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-07T18:00:00Z",
     "home": "Auxerre",
     "away": "Paris FC",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T19:45:00Z",
     "home": "Roma",
     "away": "Sassuolo",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T20:00:00Z",
     "home": "Excelsior",
     "away": "Go Ahead",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T20:00:00Z",
     "home": "Valencia",
     "away": "Real Madrid",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-07T20:05:00Z",
     "home": "PSG",
     "away": "Troyes",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-07T20:30:00Z",
     "home": "Sporting CP",
     "away": "Moreirense",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
   "today": [
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T00:00:00Z",
     "home": "Estoril Praia",
     "away": "Marítimo",
     "status": "POSTPONED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T11:15:00Z",
     "home": "Heerenveen",
     "away": "Feyenoord",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T11:30:00Z",
     "home": "Napoli",
     "away": "Lazio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T13:00:00Z",
     "home": "Elche",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T13:30:00Z",
     "home": "Twente",
     "away": "Ajax",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Sunderland",
     "away": "Chelsea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Monza",
     "away": "Atalanta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Brighton Hove",
     "away": "Brentford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Genoa",
     "away": "Milan",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Ipswich Town",
     "away": "Bournemouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Stade Rennais",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Crystal Palace",
     "away": "Liverpool",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T14:30:00Z",
     "home": "1. FC Köln",
     "away": "Leverkusen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T15:15:00Z",
     "home": "Real Sociedad",
     "away": "Rayo Vallecano",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T15:30:00Z",
     "home": "Santa Clara",
     "away": "Gil Vicente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T15:30:00Z",
     "home": "CD Nacional",
     "away": "Acad. Viseu",
     "status": "TIMED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T15:45:00Z",
     "home": "AZ",
     "away": "Groningen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T15:45:00Z",
     "home": "Cambuur",
     "away": "PSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Le Mans",
     "away": "Monaco",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Le Havre",
     "away": "Lorient",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Angers SCO",
     "away": "Nice",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Brest",
     "away": "Olympique Lyon",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T16:30:00Z",
     "home": "Freiburg",
     "away": "Union Berlin",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T16:30:00Z",
     "home": "Man United",
     "away": "Aston Villa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T17:00:00Z",
     "home": "Inter",
     "away": "Como 1907",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T17:30:00Z",
     "home": "Villarreal",
     "away": "Getafe",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T17:30:00Z",
     "home": "Celta",
     "away": "Levante",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T18:00:00Z",
     "home": "Vitória SC",
     "away": "Porto",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T18:30:00Z",
     "home": "Hoffenheim",
     "away": "Schalke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T19:00:00Z",
     "home": "Utrecht",
     "away": "NEC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T19:45:00Z",
     "home": "Fiorentina",
     "away": "Juventus",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T19:45:00Z",
     "home": "RC Lens",
     "away": "Marseille",
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
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T20:30:00Z",
     "home": "Rio Ave",
     "away": "Braga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T20:30:00Z",
     "home": "Amadora",
     "away": "SL Benfica",
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
     "team": "Arsenal",
     "played": 10,
     "pts": 27,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Man City",
     "played": 10,
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
     "team": "Everton",
     "played": 10,
     "pts": 16,
     "gd": 2
    },
    {
     "pos": 6,
     "team": "Liverpool",
     "played": 9,
     "pts": 15,
     "gd": 2
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
     "team": "Real Madrid",
     "played": 12,
     "pts": 30,
     "gd": 21
    },
    {
     "pos": 3,
     "team": "Atleti",
     "played": 11,
     "pts": 28,
     "gd": 14
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
     "played": 11,
     "pts": 19,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 12,
     "pts": 18,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 9,
     "pts": 21,
     "gd": 20
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 9,
     "pts": 21,
     "gd": 9
    },
    {
     "pos": 3,
     "team": "RB Leipzig",
     "played": 9,
     "pts": 18,
     "gd": 14
    },
    {
     "pos": 4,
     "team": "Freiburg",
     "played": 8,
     "pts": 16,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Bremen",
     "played": 9,
     "pts": 15,
     "gd": 2
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
     "played": 10,
     "pts": 28,
     "gd": 16
    },
    {
     "pos": 2,
     "team": "Roma",
     "played": 11,
     "pts": 27,
     "gd": 21
    },
    {
     "pos": 3,
     "team": "Inter",
     "played": 10,
     "pts": 25,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 10,
     "pts": 23,
     "gd": 10
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 10,
     "pts": 21,
     "gd": 9
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
     "played": 10,
     "pts": 23,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Paris FC",
     "played": 10,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 9,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 9,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Stade Rennais",
     "played": 9,
     "pts": 16,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Marseille",
     "played": 9,
     "pts": 15,
     "gd": 7
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "1-2"
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-07T15:00:00Z",
      "home": "Arsenal",
      "away": "Hull City",
      "status": "FINISHED",
      "score": "1-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-21T17:30:00Z",
      "home": "Newcastle",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-08T20:00:00Z",
      "home": "Atleti",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-22T13:00:00Z",
      "home": "Barça",
      "away": "Villarreal",
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
    "home": "Indiana Pacers",
    "away": "Denver Nuggets",
    "score": "102-114",
    "status": "Final"
   },
   {
    "home": "Atlanta Hawks",
    "away": "Brooklyn Nets",
    "score": "124-121",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "New York Knicks",
    "score": "97-109",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Washington Wizards",
    "score": "114-75",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Orlando Magic",
    "score": "126-119",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Houston Rockets",
    "score": "102-99",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "San Antonio Spurs",
    "score": "103-125",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Chicago Bulls",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-08T20:30:00Z"
   },
   {
    "home": "Detroit Pistons",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-08T23:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-09T00:00:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-09T00:30:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-09T01:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-09T02:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-09T02:00:00Z"
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
     "kickoff_utc": "2026-11-07T21:00:00",
     "home": "Inter Miami",
     "away": "Charlotte FC",
     "score": "3-3"
    }
   ],
   "upcoming": []
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
     "title": "'I can't believe he is one of us' - inside Salah's life in Trabzon",
     "published": "2026-11-08T07:30:01+00:00",
     "summary": "BBC Sport travels to Turkey to watch Mohamed Salah play for Trabzonspor and discover how the 'Egyptian King' is settling into life by the Black Sea."
    },
    {
     "ref": "bbc_football#1",
     "title": "Messi makes history with MLS Golden Boot",
     "published": "2026-11-08T07:23:50+00:00",
     "summary": "Inter Miami forward Lionel Messi becomes the first player in MLS history to win the Golden Boot in consecutive seasons."
    },
    {
     "ref": "bbc_football#2",
     "title": "Who am I? Guess WSL star No 11",
     "published": "2026-11-08T06:51:06+00:00",
     "summary": "Work out the identity of today's player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-08T06:47:58+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#4",
     "title": "Why unique Brighton defence is so tricky to unpick",
     "published": "2026-11-08T06:41:37+00:00",
     "summary": "Brighton's unique defensive shape has provided the platform for the Seagulls' superb start to the Premier League season."
    },
    {
     "ref": "bbc_football#5",
     "title": "The oldest club in London making FA Cup history",
     "published": "2026-11-08T06:28:56+00:00",
     "summary": "Cray Wanderers host Stockport County in the FA Cup first round, with 112 league places separating the two sides."
    },
    {
     "ref": "bbc_football#6",
     "title": "'The worst conditions in my 35-year career' - commentating in the FA Cup fog",
     "published": "2026-11-08T00:17:56+00:00",
     "summary": "BBC Sport commentator Steve Bower gives an insight into trying to commentate when thick fog engulfs a stadium and you can barely see the action."
    },
    {
     "ref": "bbc_football#7",
     "title": "'It's Savage junior's night' - Charlie scores against dad Robbie's side",
     "published": "2026-11-08T00:13:34+00:00",
     "summary": "Robbie Savage's son Charlie scores for Reading against Peterborough United, the side his father manages in the first round of the FA Cup."
    },
    {
     "ref": "bbc_football#8",
     "title": "Charlie Savage shines for Reading to beat dad Robbie's Peterborough",
     "published": "2026-11-08T00:12:24+00:00",
     "summary": "Charlie Savage scores his first goal of the season and puts in a man-of-the-match performance for Reading who knock out dad Robbie's Peterborough United in the FA Cup first round."
    },
    {
     "ref": "bbc_football#9",
     "title": "'Wonderful goal' - Crewe's McNeill scores from halfway line",
     "published": "2026-11-08T00:07:11+00:00",
     "summary": "Charlie McNeill scores from the halfway line in the 12th minute to open the scoring for Crewe Alexandra against AFC Wimbledon in the first round of the FA Cup."
    },
    {
     "ref": "bbc_football#10",
     "title": "'Curtains for Robinson' or can floundering Aberdeen boss survive?",
     "published": "2026-11-08T00:04:00+00:00",
     "summary": "Will the \"unacceptable\" 4-0 home defeat to fellow strugglers Hibernian signal the end of Stephen Robinson's Aberdeen tenure?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Was Leeds' Bogle lucky to escape red card?",
     "published": "2026-11-08T00:00:26+00:00",
     "summary": "Match of the Day's Steph Houghton and Danny Murphy assess whether a challenge from Leeds United's Jayden Bogle on Tottenham's Mathys Tel was worthy of a red card."
    },
    {
     "ref": "bbc_football#12",
     "title": "Forest win over Man City 'a turning point' - Murphy",
     "published": "2026-11-08T00:00:14+00:00",
     "summary": "Match of the Day's Danny Murphy breaks down Nottingham Forest's impressive 3-1 win over Manchester City, a victory that he believes could be \"a turning point\" in Forest's first season under Oliver Glasner."
    },
    {
     "ref": "bbc_football#13",
     "title": "Arsenal should have been awarded penalty against Hull - Cann",
     "published": "2026-11-08T00:00:09+00:00",
     "summary": "Former Premier League assistant referee Darren Cann explains why Arsenal should have been awarded a penalty for a foul on Kai Havertz in the Premier League champions' 1-0 win over Hull City."
    },
    {
     "ref": "bbc_football#14",
     "title": "York score after 10 seconds against Northampton following unique kick-off",
     "published": "2026-11-07T23:38:38+00:00",
     "summary": "Ollie Pearce scores after 10 seconds as York City see off Northampton Town in a 4-0 win to reach the second round of the FA Cup."
    },
    {
     "ref": "bbc_football#15",
     "title": "Listen: Premiership reaction as pressure mounts on Robinson",
     "published": "2026-11-07T23:15:00+00:00",
     "summary": "Big wins for Rangers, St Johnstone and Hibs as Robinson's Aberdeen ship 4 goals at home."
    },
    {
     "ref": "bbc_football#16",
     "title": "Highlights: Exeter shock League One leaders Huddersfield",
     "published": "2026-11-07T23:08:32+00:00",
     "summary": "League Two Exeter City pull off an upset 2-1 win away to League One leaders Huddersfield Town to progress into the second round of the FA Cup."
    },
    {
     "ref": "bbc_football#17",
     "title": "McNeill's superb halfway goal sparks Crewe upset over Wimbledon",
     "published": "2026-11-07T23:05:36+00:00",
     "summary": "Charlie McNeill's strike from the halfway line helps League Two frontrunners Crewe progress to the second round of the FA Cup, with a 2-1 win over League One AFC Wimbledon."
    },
    {
     "ref": "bbc_football#18",
     "title": "'Bruno's as good as ever' - Carrick backs Man Utd captain",
     "published": "2026-11-07T22:44:20+00:00",
     "summary": "Manchester United head coach Michael Carrick says captain Bruno Fernandes' commitment to the club is \"undoubted\" and the midfielder is \"as good as ever\"."
    },
    {
     "ref": "bbc_football#19",
     "title": "Liverpool considering Verbruggen move - Sunday's gossip",
     "published": "2026-11-07T22:05:40+00:00",
     "summary": "Liverpool consider move for Brighton keeper Bart Verbruggen, Bayern Munich remain in talks with Rio Ngumoha's camp, Tottenham midfielder Conor Gallagher monitored by rival Premier League clubs, plus more."
    },
    {
     "ref": "bbc_football#20",
     "title": "Glasner glee and Delap double - win could be lift-off for Forest",
     "published": "2026-11-07T21:42:59+00:00",
     "summary": "Oliver Glasner's celebrations and two goals for Liam Delap bode well for a Nottingham Forest team looking to kick on after their first home Premier League win of the season."
    },
    {
     "ref": "bbc_football#21",
     "title": "Notts County beat Altrincham in incredible fog-filled spectacle",
     "published": "2026-11-07T21:25:19+00:00",
     "summary": "Notts County find a way to get past National League Altrincham in incredible conditions."
    },
    {
     "ref": "bbc_football#22",
     "title": "Maresca's dream start turns into nightmare as title hopes hit",
     "published": "2026-11-07T20:54:12+00:00",
     "summary": "Enzo Maresca left the City Ground on Saturday evening with chants of \"can we play you every week?\" ringing in his ears - the Italian's dream start as Manchester City manager is rapidly turning into a nightmare."
    },
    {
     "ref": "bbc_football#23",
     "title": "Delap double inspires Forest to stunning win over Man City",
     "published": "2026-11-07T20:02:25+00:00",
     "summary": "Liam Delap scores a superb double as Nottingham Forest stun Manchester City 3-1 for their first Premier League win at the City Ground this season."
    },
    {
     "ref": "bbc_football#24",
     "title": "Muniz strike denies Newcastle and Jaissle much-needed win",
     "published": "2026-11-07T19:59:37+00:00",
     "summary": "Rodrigo Muniz scores his first goal since the opening day of last season as Fulham deny Newcastle and head coach Matthias Jaissle a much-needed win at Craven Cottage."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi makes MLS History with second consecutive Golden Boot award - t2ONLINE",
     "published": "2026-11-08T08:01:00+00:00",
     "summary": "Lionel Messi makes MLS History with second consecutive Golden Boot award t2ONLINE"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami star Lionel Messi makes MLS history with incredible back-to-back Golden Boot awards - Yahoo Sports",
     "published": "2026-11-08T07:33:00+00:00",
     "summary": "Inter Miami star Lionel Messi makes MLS history with incredible back-to-back Golden Boot awards Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Video: result and goals of Inter Miami's match: Lionel Messi makes history | Goal.com South Africa - Goal.com",
     "published": "2026-11-08T07:26:10+00:00",
     "summary": "Video: result and goals of Inter Miami's match: Lionel Messi makes history | Goal.com South Africa Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi makes history with MLS Golden Boot - BBC",
     "published": "2026-11-08T07:23:50+00:00",
     "summary": "Messi makes history with MLS Golden Boot BBC"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi makes MLS history with back-to-back Golden Boot awards - Latest news from Azerbaijan",
     "published": "2026-11-08T07:12:36+00:00",
     "summary": "Messi makes MLS history with back-to-back Golden Boot awards Latest news from Azerbaijan"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami vs Charlotte: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-08T06:51:11+00:00",
     "summary": "Inter Miami vs Charlotte: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Full-Time Clip: Three Goal Second Half Propel Charlotte FC to 3-3 Draw Versus Inter Miami CF - Charlotte FC",
     "published": "2026-11-08T05:09:08+00:00",
     "summary": "Full-Time Clip: Three Goal Second Half Propel Charlotte FC to 3-3 Draw Versus Inter Miami CF Charlotte FC"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi becomes first player to win MLS Golden Boot in consecutive seasons - Sportstar",
     "published": "2026-11-08T05:04:41+00:00",
     "summary": "Lionel Messi becomes first player to win MLS Golden Boot in consecutive seasons Sportstar"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami’s Lionel Messi Makes MLS History as Golden Boot Winner - Heavy.com",
     "published": "2026-11-08T04:32:00+00:00",
     "summary": "Inter Miami’s Lionel Messi Makes MLS History as Golden Boot Winner Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi scripts MLS history with second straight Golden Boot - Rediff",
     "published": "2026-11-08T03:46:14+00:00",
     "summary": "Messi scripts MLS history with second straight Golden Boot Rediff"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi claims second straight Golden Boot as Nashville sets points record on MLS Decision Day - The Guardian",
     "published": "2026-11-08T03:32:00+00:00",
     "summary": "Messi claims second straight Golden Boot as Nashville sets points record on MLS Decision Day The Guardian"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi wins MLS Golden Boot for second consecutive time - Yahoo Sports",
     "published": "2026-11-08T03:10:00+00:00",
     "summary": "Lionel Messi wins MLS Golden Boot for second consecutive time Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi becomes first to win MLS Golden Boot in consecutive seasons - Reuters",
     "published": "2026-11-08T03:06:00+00:00",
     "summary": "Messi becomes first to win MLS Golden Boot in consecutive seasons Reuters"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi wins MLS Golden Boot for second straight year with 26 goals for Inter Miami - Yahoo Sports",
     "published": "2026-11-08T03:06:00+00:00",
     "summary": "Lionel Messi wins MLS Golden Boot for second straight year with 26 goals for Inter Miami Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami ends regular season with 3-3 tie vs. Charlotte FC - Miami Herald",
     "published": "2026-11-08T02:56:25+00:00",
     "summary": "Inter Miami ends regular season with 3-3 tie vs. Charlotte FC Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami's Lionel Messi wins 2026 MLS Golden Boot presented by Audi - MLSsoccer.com",
     "published": "2026-11-08T02:22:03+00:00",
     "summary": "Inter Miami's Lionel Messi wins 2026 MLS Golden Boot presented by Audi MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF Forward Lionel Messi Wins 2026 MLS Golden Boot Presented by Audi - MLSsoccer.com",
     "published": "2026-11-08T02:19:07+00:00",
     "summary": "Inter Miami CF Forward Lionel Messi Wins 2026 MLS Golden Boot Presented by Audi MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Leo Messi Adds Another Milestone by Becoming First Player in MLS History to Secure the Golden Boot in Consecutive Seasons - Inter Miami CF",
     "published": "2026-11-08T02:16:01+00:00",
     "summary": "Leo Messi Adds Another Milestone by Becoming First Player in MLS History to Secure the Golden Boot in Consecutive Seasons Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi makes history as 1st back-to-back MLS Golden Boot winner - ESPN",
     "published": "2026-11-08T02:15:44+00:00",
     "summary": "Lionel Messi makes history as 1st back-to-back MLS Golden Boot winner ESPN"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi’s Miami survive defensive horror show to clinch playoff advantage - Malay Mail",
     "published": "2026-11-08T01:36:57+00:00",
     "summary": "Messi’s Miami survive defensive horror show to clinch playoff advantage Malay Mail"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami dropped an incredible 3-0 lead, but Messi is still close to setting a US soccer record. - Vietnam.vn",
     "published": "2026-11-08T01:26:54+00:00",
     "summary": "Inter Miami dropped an incredible 3-0 lead, but Messi is still close to setting a US soccer record. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus Crew earn playoff date with Leo Messi & Inter Miami - Yahoo Sports",
     "published": "2026-11-08T01:24:00+00:00",
     "summary": "Columbus Crew earn playoff date with Leo Messi & Inter Miami Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Nashville SC dethrones Messi's Miami with best-ever MLS regular season - USA Today",
     "published": "2026-11-08T01:13:00+00:00",
     "summary": "Nashville SC dethrones Messi's Miami with best-ever MLS regular season USA Today"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "MIAMI, United States — Lionel Messi's Inter Miami clung on for second place in the Eastern Conference with a wasteful 3-3 draw against Charlotte on the final day of the MLS regular season Saturday. Read more: https://tmt.news/2464624 - LinkedIn",
     "published": "2026-11-08T01:03:01+00:00",
     "summary": "MIAMI, United States — Lionel Messi's Inter Miami clung on for second place in the Eastern Conference with a wasteful 3-3 draw against Charlotte on the final day of the MLS regular season Saturday. Read more: https://tmt.news/2464624 LinkedIn"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi's Miami cling to second spot on dramatic final MLS day - The Manila Times",
     "published": "2026-11-08T00:45:00+00:00",
     "summary": "Messi's Miami cling to second spot on dramatic final MLS day The Manila Times"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija with the 2 Pt, 11/07/2026 - Yahoo Sports",
     "published": "2026-11-08T05:42:48+00:00",
     "summary": "Deni Avdija with the 2 Pt, 11/07/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro - NetsDaily",
     "published": "2026-11-08T04:14:00+00:00",
     "summary": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Lakers showcase early resolve for best start since 2019 - Orange County Register",
     "published": "2026-11-07T23:40:40+00:00",
     "summary": "Lakers showcase early resolve for best start since 2019 Orange County Register"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward - Rip City Project",
     "published": "2026-11-07T19:48:16+00:00",
     "summary": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija flirts with triple-double in Friday's loss to Lakers - FantasyPros",
     "published": "2026-11-07T15:33:22+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's loss to Lakers FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss - CBS Sports",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija News: Sniffs triple-double in loss - RotoWire",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Deni Avdija News: Sniffs triple-double in loss RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out - San Antonio Express-News",
     "published": "2026-11-07T10:11:09+00:00",
     "summary": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out San Antonio Express-News"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet - Rip City Project",
     "published": "2026-11-07T07:22:10+00:00",
     "summary": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija records 22 points, 11 assists vs. LAL - NBC Sports",
     "published": "2026-11-07T06:30:39+00:00",
     "summary": "Deni Avdija records 22 points, 11 assists vs. LAL NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija finishes through contact, 11/06/2026 - Yahoo Sports",
     "published": "2026-11-07T06:16:38+00:00",
     "summary": "Deni Avdija finishes through contact, 11/06/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-07T05:44:08+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija gets the and-1 for the Trail Blazers - ESPN",
     "published": "2026-11-07T03:56:34+00:00",
     "summary": "Deni Avdija gets the and-1 for the Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija gets the and-1 for the Trail Blazers - ESPN",
     "published": "2026-11-07T03:56:34+00:00",
     "summary": "Deni Avdija gets the and-1 for the Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija is at it again - Jewish Telegraphic Agency",
     "published": "2026-11-06T16:18:37+00:00",
     "summary": "Deni Avdija is at it again Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-11-06T08:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers - Rip City Project",
     "published": "2026-11-06T00:05:00+00:00",
     "summary": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start - Blazer's Edge",
     "published": "2026-11-05T21:02:47+00:00",
     "summary": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish - roundtable.io",
     "published": "2026-11-05T18:20:17+00:00",
     "summary": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ - ClutchPoints",
     "published": "2026-11-05T16:40:40+00:00",
     "summary": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double against Suns - CBS Sports",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double against Suns CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija News: Teases triple-double against Suns - RotoWire",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Deni Avdija News: Teases triple-double against Suns RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija approaches a triple-double Wednesday night - FantasyPros",
     "published": "2026-11-05T14:59:31+00:00",
     "summary": "Deni Avdija approaches a triple-double Wednesday night FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists - SportsRation",
     "published": "2026-11-05T08:55:46+00:00",
     "summary": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists SportsRation"
    }
   ]
  }
 ]
}
</input>