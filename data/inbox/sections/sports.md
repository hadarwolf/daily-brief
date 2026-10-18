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
  "home": "Nottingham",
  "away": "Arsenal",
  "kickoff_utc": "2026-10-18T15:30:00Z"
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
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Millwall",
     "away": "Lincoln City",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Middlesbrough",
     "away": "Cardiff",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Watford",
     "away": "Charlton",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Everton",
     "away": "Chelsea",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T12:00:00Z",
     "home": "Espanyol",
     "away": "Atleti",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T13:00:00Z",
     "home": "Venezia FC",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "HSV",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Schalke",
     "away": "Mainz",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Elversberg",
     "away": "Augsburg",
     "status": "FINISHED",
     "score": "4-3"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Bremen",
     "away": "SC Paderborn",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Union Berlin",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Norwich",
     "away": "Portsmouth",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Wrexham",
     "away": "Preston NE",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Brentford",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Derby County",
     "away": "Stoke",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Fulham",
     "away": "Hull City",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Swansea",
     "away": "West Ham",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Birmingham",
     "away": "QPR",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Man City",
     "away": "Ipswich Town",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Southampton",
     "away": "Bolton",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Bristol City",
     "away": "Sheffield Utd",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "West Brom",
     "away": "Blackburn",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T14:15:00Z",
     "home": "Villarreal",
     "away": "Elche",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T14:30:00Z",
     "home": "Den Haag",
     "away": "PSV",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T15:15:00Z",
     "home": "Strasbourg",
     "away": "PSG",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T16:00:00Z",
     "home": "Bologna",
     "away": "Inter",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T16:30:00Z",
     "home": "Newcastle",
     "away": "Aston Villa",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T16:30:00Z",
     "home": "Bayern",
     "away": "RB Leipzig",
     "status": "FINISHED",
     "score": "6-1"
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
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T18:00:00Z",
     "home": "Telstar",
     "away": "Feyenoord",
     "status": "FINISHED",
     "score": "3-4"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Troyes",
     "away": "RC Lens",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Roma",
     "away": "Genoa",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Lille",
     "away": "Brest",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T19:00:00Z",
     "home": "Valencia",
     "away": "Athletic",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T19:00:00Z",
     "home": "Sparta",
     "away": "Willem II",
     "status": "FINISHED",
     "score": "3-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T21:00:00Z",
     "home": "Botafogo",
     "away": "Chapecoense",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T21:30:00Z",
     "home": "Mineiro",
     "away": "Coritiba",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T22:30:00Z",
     "home": "Paranaense",
     "away": "Palmeiras",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T00:00:00Z",
     "home": "São Paulo",
     "away": "Vasco da Gama",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T10:15:00Z",
     "home": "Zwolle",
     "away": "Go Ahead",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T10:30:00Z",
     "home": "Udinese",
     "away": "Lecce",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T12:00:00Z",
     "home": "Osasuna",
     "away": "Santander",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T12:30:00Z",
     "home": "Cambuur",
     "away": "AZ",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Bournemouth",
     "away": "Sunderland",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Angers SCO",
     "away": "Marseille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Brighton Hove",
     "away": "Crystal Palace",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Leeds United",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Fiorentina",
     "away": "Como 1907",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-18T13:30:00Z",
     "home": "Leverkusen",
     "away": "Freiburg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T14:15:00Z",
     "home": "Celta",
     "away": "Alavés",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T14:45:00Z",
     "home": "Groningen",
     "away": "Ajax",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Lorient",
     "away": "Monaco",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Le Havre",
     "away": "Auxerre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Paris FC",
     "away": "Stade Rennais",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-18T15:30:00Z",
     "home": "M'gladbach",
     "away": "Hoffenheim",
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
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T16:00:00Z",
     "home": "Milan",
     "away": "Atalanta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T16:30:00Z",
     "home": "Málaga",
     "away": "Real Sociedad",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T18:00:00Z",
     "home": "Twente",
     "away": "Utrecht",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T18:00:00Z",
     "home": "NEC",
     "away": "Sittard",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T18:45:00Z",
     "home": "Juventus",
     "away": "Lazio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T18:45:00Z",
     "home": "Olympique Lyon",
     "away": "Nice",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Fluminense",
     "away": "Santos",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Real Madrid",
     "away": "Sevilla FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Grêmio",
     "away": "Cruzeiro",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T21:30:00Z",
     "home": "Bahia",
     "away": "Flamengo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T22:30:00Z",
     "home": "Clube do Remo",
     "away": "Bragantino",
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
     "team": "Real Betis",
     "played": 9,
     "pts": 19,
     "gd": 2
    },
    {
     "pos": 4,
     "team": "Real Madrid",
     "played": 8,
     "pts": 18,
     "gd": 11
    },
    {
     "pos": 5,
     "team": "Sevilla FC",
     "played": 8,
     "pts": 14,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Real Sociedad",
     "played": 8,
     "pts": 13,
     "gd": -3
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
     "played": 5,
     "pts": 13,
     "gd": 10
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
     "team": "Roma",
     "played": 7,
     "pts": 17,
     "gd": 13
    },
    {
     "pos": 3,
     "team": "Lazio",
     "played": 6,
     "pts": 16,
     "gd": 7
    },
    {
     "pos": 4,
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Cagliari",
     "played": 6,
     "pts": 13,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Milan",
     "played": 6,
     "pts": 12,
     "gd": 6
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 2,
     "team": "Monaco",
     "played": 6,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Stade Rennais",
     "played": 6,
     "pts": 13,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Olympique Lyon",
     "played": 6,
     "pts": 11,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Paris FC",
     "played": 6,
     "pts": 11,
     "gd": 4
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-21T19:00:00Z",
      "home": "Bayern",
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
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-20T19:00:00Z",
      "home": "PSG",
      "away": "Barça",
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
     "title": "How 'dangerous' Man City maintained 100 per cent record",
     "published": "2026-10-17T23:00:53+00:00",
     "summary": "Match of the Day's Joe Hart and Danny Murphy analyse how Manchester City made it seven wins from seven in the Premier League with a 3-2 victory against Ipswich."
    },
    {
     "ref": "bbc_football#1",
     "title": "Why Liverpool are still 'too easy' to play against",
     "published": "2026-10-17T23:00:48+00:00",
     "summary": "Match of the Day's Danny Murphy analyses how Liverpool are still to \"easy\" to play against despite their 2-1 victory over Brentford."
    },
    {
     "ref": "bbc_football#2",
     "title": "Rangers 'pop balloon' as Neil gift wastes chance to go top",
     "published": "2026-10-17T22:29:15+00:00",
     "summary": "Rangers were full of positive energy as they made the trip to Dundee on the back of seven straight wins. However, a Dan Neil error felt \"like a balloon popping\", says Derek McInnes."
    },
    {
     "ref": "bbc_football#3",
     "title": "Can Hearts prove credentials at scene of title heartbreak?",
     "published": "2026-10-17T21:55:44+00:00",
     "summary": "Hearts' last trip to Parkhead ended with their title dream being crushed in the space of 11 minutes. They return to face Celtic on Sunday refreshed and reshaped."
    },
    {
     "ref": "bbc_football#4",
     "title": "Can Hearts prove credentials at scene of title heartbreak?",
     "published": "2026-10-17T21:55:44+00:00",
     "summary": "Hearts' last trip to Parkhead ended with their title dream being crushed in the space of 11 minutes. They return to face Celtic on Sunday refreshed and reshaped."
    },
    {
     "ref": "bbc_football#5",
     "title": "'Sick feeling in stomach' - are Reedijk's Hibs in relegation fight?",
     "published": "2026-10-17T21:37:38+00:00",
     "summary": "Two games in, no points gathered and a chorus of boos greeting him at full-time at Easter Road. The honeymoon is well and truly over for Marink Reedijk."
    },
    {
     "ref": "bbc_football#6",
     "title": "Reedijk has 'sick feeling in stomach' - are his Hibs team in relegation fight?",
     "published": "2026-10-17T21:37:38+00:00",
     "summary": "Two games in, no points gathered and a chorus of boos greeting him at full-time at Easter Road. The honeymoon is well and truly over for Marink Reedijk."
    },
    {
     "ref": "bbc_football#7",
     "title": "Villa's Manzambi shows Newcastle what they missed out on",
     "published": "2026-10-17T21:18:26+00:00",
     "summary": "Aston Villa are a side back in form, with Johan Manzambi scoring the winner against a Newcastle team he turned down to move to Villa Park."
    },
    {
     "ref": "bbc_football#8",
     "title": "Diaz hat-trick fires Bayern to win in Kane's 100th Bundesliga game",
     "published": "2026-10-17T20:55:25+00:00",
     "summary": "Harry Kane scored on his 100th Bundesliga appearance while Luis Diaz netted a hat-trick as Bayern Munich thrashed RB Leipzig 6-1 to go top of the table."
    },
    {
     "ref": "bbc_football#9",
     "title": "Lamine Yamal opens scoring as Barcelona beat Real Betis",
     "published": "2026-10-17T20:49:36+00:00",
     "summary": "Lamine Yamal, Rodri, Gabriel Jesus, Eric Garcia and Dani Olmo all scored for Barcelona as they swept aside Real Betis in a seven-goal thriller to stay five points clear at the top of La Liga."
    },
    {
     "ref": "bbc_football#10",
     "title": "Gyokeres pushing for Arsenal exit - Sunday's gossip",
     "published": "2026-10-17T20:37:25+00:00",
     "summary": "Viktor Gyokeres wants to leave Arsenal, Xabi Alonso eyes Barcelona duo and Liverpool target Dortmund's Felix Nmecha."
    },
    {
     "ref": "bbc_football#11",
     "title": "Wirtz delivers but remains Liverpool's conundrum",
     "published": "2026-10-17T20:07:40+00:00",
     "summary": "Florian Wirtz is instrumental as Liverpool return to winning ways in the Premier League, but does he remain boss Andoni Iraola's great conundrum?"
    },
    {
     "ref": "bbc_football#12",
     "title": "West Ham unstoppable, Norwich in trouble - Aaron McLean's EFL takeaways",
     "published": "2026-10-17T19:43:05+00:00",
     "summary": "BBC Final Score pundit Aaron McLean looks at the weekend's talking points in the EFL, including West Ham win over in-form Swansea City and Norwich City's woes."
    },
    {
     "ref": "bbc_football#13",
     "title": "Emery praises Manzambi's 'skills and intelligence'",
     "published": "2026-10-17T19:29:21+00:00",
     "summary": "Aston Villa manager Unai Emery reacts to his 100th Premier League win after victory against Newcastle at St James Park."
    },
    {
     "ref": "bbc_football#14",
     "title": "Manzambi heads Villa to victory at Newcastle",
     "published": "2026-10-17T19:12:02+00:00",
     "summary": "Johan Manzambi heads the winner for Aston Villa against Newcastle, marking manager Unai Emery's 100th Premier League victory."
    },
    {
     "ref": "bbc_football#15",
     "title": "Liverpool come from behind to beat nine-man Brentford",
     "published": "2026-10-17T19:00:13+00:00",
     "summary": "Liverpool come from behind to beat Brentford 2-1 at the Gtech Community Stadium as the hosts finish with nine men after red cards for Yehor Yarmoliuk and Vitaly Janelt."
    },
    {
     "ref": "bbc_football#16",
     "title": "Haaland nets double as Man City go six points clear at the top",
     "published": "2026-10-17T19:00:09+00:00",
     "summary": "Manchester City go six points clear at the top of the Premier League as Enzo Maresca's side record a seventh straight league victory with a 3-2 win over Ipswich at the Etihad."
    },
    {
     "ref": "bbc_football#17",
     "title": "Iwobi delivers Fulham's first win of season",
     "published": "2026-10-17T19:00:06+00:00",
     "summary": "Alex Iwobi fires Fulham to their first Premier League win of the season against Hull."
    },
    {
     "ref": "bbc_football#18",
     "title": "Neto scores twice as Chelsea win at Everton",
     "published": "2026-10-17T19:00:03+00:00",
     "summary": "Pedro Neto scores twice for Chelsea as they beat Everton 2-0 at the Hill Dickinson Stadium, in a game overshadowed by a nasty head injury to Emiliano Martinez."
    },
    {
     "ref": "bbc_football#19",
     "title": "Wrexham had to block outside noise - Parkinson",
     "published": "2026-10-17T18:41:33+00:00",
     "summary": "Wrexham had to \"block everything out\" says Phil Parkinson as they responded to recent criticism with a victory over Preston North End."
    },
    {
     "ref": "bbc_football#20",
     "title": "Boos and bananas on day of defiance at Man City",
     "published": "2026-10-17T18:02:39+00:00",
     "summary": "Manchester City fans boo the Premier League anthem before watching their side move six points clear at the top of the table."
    },
    {
     "ref": "bbc_football#21",
     "title": "Swansea must use West Ham defeat as fuel - Matos",
     "published": "2026-10-17T17:47:22+00:00",
     "summary": "Vitor Matos tells Swansea City to use the frustration of defeat to West Ham United as fuel in their bid to keep pace in the Championship promotion race."
    },
    {
     "ref": "bbc_football#22",
     "title": "Arsenal held at home by Birmingham",
     "published": "2026-10-17T17:46:41+00:00",
     "summary": "Arsenal continue to struggle in the Women's Super League after having to come from behind to draw 1-1 with Birmingham at the Emirates."
    },
    {
     "ref": "bbc_football#23",
     "title": "Yarmoliuk red card changed game dynamic - Andrews",
     "published": "2026-10-17T17:14:21+00:00",
     "summary": "Brentford manager Keith Andrews says Yehor Yarmoliuk's first-half red card changed the dynamic of their game against Liverpool which ended in a 2-1 defeat for the Bees."
    },
    {
     "ref": "bbc_football#24",
     "title": "Man City's Maresca 'very happy' after Ipswich win",
     "published": "2026-10-17T17:08:01+00:00",
     "summary": "Manchester City manager Enzo Maresca praises his side after their beat Ipswich Town at home in the Premier League."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Atlanta United vs Inter Miami Lineups - MLS 2025/26 - BeSoccer Livescore",
     "published": "2026-10-18T03:18:57+00:00",
     "summary": "Atlanta United vs Inter Miami Lineups - MLS 2025/26 BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami 3-1 Atlanta: Messi gets Sofascore Rating 10 - Sofascore",
     "published": "2026-10-18T03:10:28+00:00",
     "summary": "Inter Miami 3-1 Atlanta: Messi gets Sofascore Rating 10 Sofascore"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi brace, 10 Sofascore Rating in Miami's 3-1 win - Sofascore",
     "published": "2026-10-18T03:10:26+00:00",
     "summary": "Messi brace, 10 Sofascore Rating in Miami's 3-1 win Sofascore"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "VIDEO: Enjoy the latest Messi highlights in Miami’s latest win - Front Row Soccer",
     "published": "2026-10-18T03:06:25+00:00",
     "summary": "VIDEO: Enjoy the latest Messi highlights in Miami’s latest win Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "=+🧲[𝐋𝐈𝐕𝐄@STREAM]$ Atlanta United FC vs Inter Miami CF Match 25695 - Universidad de Córdoba (UCO)",
     "published": "2026-10-18T02:59:50+00:00",
     "summary": "=+🧲[𝐋𝐈𝐕𝐄@STREAM]$ Atlanta United FC vs Inter Miami CF Match 25695 Universidad de Córdoba (UCO)"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "ANOTHER MESSI MILESTONE: He scores twice, becomes1st MLS player to record15 assists in 3 successive seasons - Front Row Soccer",
     "published": "2026-10-18T02:57:15+00:00",
     "summary": "ANOTHER MESSI MILESTONE: He scores twice, becomes1st MLS player to record15 assists in 3 successive seasons Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi brace lifts Inter Miami to 3-1 win in Atlanta - The Daily Star",
     "published": "2026-10-18T02:52:01+00:00",
     "summary": "Messi brace lifts Inter Miami to 3-1 win in Atlanta The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Starting XI: Atlanta United vs. Inter Miami CF - Inter Miami CF",
     "published": "2026-10-18T02:47:11+00:00",
     "summary": "Starting XI: Atlanta United vs. Inter Miami CF Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi makes MLS history in latest Inter Miami masterpiece - MLSsoccer.com",
     "published": "2026-10-18T02:38:21+00:00",
     "summary": "Lionel Messi makes MLS history in latest Inter Miami masterpiece MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi dismantles Atlanta United, playoff hopes dwindle - The Atlanta Journal-Constitution",
     "published": "2026-10-18T02:31:54+00:00",
     "summary": "Lionel Messi dismantles Atlanta United, playoff hopes dwindle The Atlanta Journal-Constitution"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "HIGHLIGHTS: Atlanta United vs. Inter Miami CF | October 17, 2026 - MLSsoccer.com",
     "published": "2026-10-18T02:30:34+00:00",
     "summary": "HIGHLIGHTS: Atlanta United vs. Inter Miami CF | October 17, 2026 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Atlanta United - Inter Miami CF 0 - 2 | GOAL - Leo Messi, Major League Soccer - Forza Football",
     "published": "2026-10-18T02:24:16+00:00",
     "summary": "Atlanta United - Inter Miami CF 0 - 2 | GOAL - Leo Messi, Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MATCH RECAP: Inter Miami CF Collects Third Straight Victory in 3-1 Road Win Over Atlanta United FC - Inter Miami CF",
     "published": "2026-10-18T02:22:51+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Collects Third Straight Victory in 3-1 Road Win Over Atlanta United FC Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Atlanta United vs Inter Miami: Hello darkness my old friend - Scarves and Spikes",
     "published": "2026-10-18T02:19:32+00:00",
     "summary": "Atlanta United vs Inter Miami: Hello darkness my old friend Scarves and Spikes"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami CF at Atlanta United - MLS Game Summary - Oct 17, 2026 - USA Today",
     "published": "2026-10-18T02:15:56+00:00",
     "summary": "Inter Miami CF at Atlanta United - MLS Game Summary - Oct 17, 2026 USA Today"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "ATLvsMIA 10-17-2026 | MLS Match Recap - MLSsoccer.com",
     "published": "2026-10-18T02:14:44+00:00",
     "summary": "ATLvsMIA 10-17-2026 | MLS Match Recap MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-18T02:12:27+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Atlanta United - Inter Miami CF 0 - 3 | TOR - Leo Messi - OneFootball",
     "published": "2026-10-18T02:10:07+00:00",
     "summary": "Atlanta United - Inter Miami CF 0 - 3 | TOR - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "ATLvsMIA 10-17-2026 - Inter Miami CF",
     "published": "2026-10-18T02:04:30+00:00",
     "summary": "ATLvsMIA 10-17-2026 Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi magic! Inter Miami star scores twice in four-minute span - ESPN",
     "published": "2026-10-18T02:04:08+00:00",
     "summary": "Messi magic! Inter Miami star scores twice in four-minute span ESPN"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi scores two goals in 4 minutes, Inter Miami wins 3-1 - Laodong.vn",
     "published": "2026-10-18T01:58:26+00:00",
     "summary": "Messi scores two goals in 4 minutes, Inter Miami wins 3-1 Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi continues run at third straight MLS MVP with two-goal masterclass - The New York Times",
     "published": "2026-10-18T01:58:17+00:00",
     "summary": "Lionel Messi continues run at third straight MLS MVP with two-goal masterclass The New York Times"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Highlights: Atlanta United 1-3 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-10-18T01:56:03+00:00",
     "summary": "Highlights: Atlanta United 1-3 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Luis Suárez becomes second Inter Miami player to reach 100 goal contributions - OneFootball",
     "published": "2026-10-18T01:56:03+00:00",
     "summary": "Luis Suárez becomes second Inter Miami player to reach 100 goal contributions OneFootball"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Highlights MLS: Atlanta United 1-3 Inter Miami CF - OneFootball",
     "published": "2026-10-18T01:56:02+00:00",
     "summary": "Highlights MLS: Atlanta United 1-3 Inter Miami CF OneFootball"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Finding The Solution To The Trail Blazers’ Forward Problem - Last Word On Sports",
     "published": "2026-10-17T13:34:32+00:00",
     "summary": "Finding The Solution To The Trail Blazers’ Forward Problem Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers Show Offensive Promise Despite Preseason Finale Loss - roundtable.io",
     "published": "2026-10-17T11:23:48+00:00",
     "summary": "Trail Blazers Show Offensive Promise Despite Preseason Finale Loss roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 - New York Daily News",
     "published": "2026-10-17T11:00:36+00:00",
     "summary": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 New York Daily News"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija posts 12/4/3/2/1 line vs. Warriors - NBC Sports",
     "published": "2026-10-17T10:44:46+00:00",
     "summary": "Deni Avdija posts 12/4/3/2/1 line vs. Warriors NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Game Highlights: Portland Trail Blazers 118, Golden State Warriors 128 | Oct. 16, 2026 - NBA.com",
     "published": "2026-10-17T05:53:40+00:00",
     "summary": "Game Highlights: Portland Trail Blazers 118, Golden State Warriors 128 | Oct. 16, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Portland Trail Blazers at Golden State Warriors - NBA Game Summary - Oct 16, 2026 - USA Today",
     "published": "2026-10-17T02:31:44+00:00",
     "summary": "Portland Trail Blazers at Golden State Warriors - NBA Game Summary - Oct 16, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Golden State Warriors vs Portland Trail Blazers Box Score - October 16, 2026 - The Athletic - The New York Times",
     "published": "2026-10-17T02:25:22+00:00",
     "summary": "Golden State Warriors vs Portland Trail Blazers Box Score - October 16, 2026 - The Athletic The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Trail Blazers vs. Warriors Prediction, Spread, NBA Preseason Picks – Friday, October 16 - PrizePicks",
     "published": "2026-10-16T22:03:56+00:00",
     "summary": "Trail Blazers vs. Warriors Prediction, Spread, NBA Preseason Picks – Friday, October 16 PrizePicks"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "PORTLAND TRAIL BLAZERS NEW ERA | 2026/27 Projected Roster & Starting 5 Grades Humber Bridge (c7kpS8F3Tv) - Unisba Media",
     "published": "2026-10-16T19:21:54+00:00",
     "summary": "PORTLAND TRAIL BLAZERS NEW ERA | 2026/27 Projected Roster & Starting 5 Grades Humber Bridge (c7kpS8F3Tv) Unisba Media"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "A Jewish NBA season preview - Jewish Telegraphic Agency",
     "published": "2026-10-16T15:00:00+00:00",
     "summary": "A Jewish NBA season preview Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-16T12:22:36+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "2026-27 Fantasy Basketball: Best Players to Target for Free Throw Percentage - FantraxHQ",
     "published": "2026-10-16T10:08:22+00:00",
     "summary": "2026-27 Fantasy Basketball: Best Players to Target for Free Throw Percentage FantraxHQ"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Trail Blazers vs. Warriors - Final Score - October 16, 2026 - FOX Sports",
     "published": "2026-10-16T07:00:00+00:00",
     "summary": "Trail Blazers vs. Warriors - Final Score - October 16, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Ben Saraf last 10 games: stats and game log - BasketNews.com",
     "published": "2026-10-15T20:18:50+00:00",
     "summary": "Ben Saraf last 10 games: stats and game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Ben Saraf vs Bahcesehir Koleji Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-15T15:17:26+00:00",
     "summary": "Ben Saraf vs Bahcesehir Koleji Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija vs Iceland: stats, game log - BasketNews.com",
     "published": "2026-10-15T07:17:36+00:00",
     "summary": "Deni Avdija vs Iceland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-15T07:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija vs Poland: stats, game log - BasketNews.com",
     "published": "2026-10-15T06:12:30+00:00",
     "summary": "Deni Avdija vs Poland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija last 5 games: stats and game log - BasketNews.com",
     "published": "2026-10-15T05:29:27+00:00",
     "summary": "Deni Avdija last 5 games: stats and game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija playoff stats: averages by season and series - BasketNews.com",
     "published": "2026-10-15T04:39:24+00:00",
     "summary": "Deni Avdija playoff stats: averages by season and series BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija vs Oklahoma City Thunder: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:27:20+00:00",
     "summary": "Deni Avdija vs Oklahoma City Thunder: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija vs Los Angeles Lakers: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:25:14+00:00",
     "summary": "Deni Avdija vs Los Angeles Lakers: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Ben Saraf vs Buducnost VOLI Podgorica: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:17:25+00:00",
     "summary": "Ben Saraf vs Buducnost VOLI Podgorica: stats, game log BasketNews.com"
    }
   ]
  }
 ]
}
</input>