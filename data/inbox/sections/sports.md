Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "American Major League Soccer",
  "home": "Columbus Crew",
  "away": "Inter Miami",
  "kickoff_utc": "2026-11-28T01:00:00"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Charlotte Hornets",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-28T23:00:00.000Z"
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
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-27T19:00:00Z",
     "home": "Groningen",
     "away": "Willem II",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-27T19:30:00Z",
     "home": "Bremen",
     "away": "M'gladbach",
     "status": "FINISHED",
     "score": "3-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-27T19:45:00Z",
     "home": "Brest",
     "away": "Paris FC",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-27T19:45:00Z",
     "home": "Venezia FC",
     "away": "Bologna",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Southampton",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Nottingham",
     "away": "Chelsea",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Levante",
     "away": "Santander",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-27T20:15:00Z",
     "home": "Marítimo",
     "away": "CD Nacional",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-27T23:00:00Z",
     "home": "Fluminense",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-11-28T00:00:00Z",
     "home": null,
     "away": null,
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T12:30:00Z",
     "home": "Lincoln City",
     "away": "Wolverhampton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T12:30:00Z",
     "home": "Preston NE",
     "away": "Norwich",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T12:30:00Z",
     "home": "Blackburn",
     "away": "Charlton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T13:00:00Z",
     "home": "Real Betis",
     "away": "Rayo Vallecano",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-28T14:00:00Z",
     "home": "Frosinone",
     "away": "Parma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T14:30:00Z",
     "home": "1. FC Köln",
     "away": "Elversberg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T14:30:00Z",
     "home": "SC Paderborn",
     "away": "Schalke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T14:30:00Z",
     "home": "HSV",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T14:30:00Z",
     "home": "Mainz",
     "away": "Union Berlin",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Birmingham",
     "away": "Bolton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "QPR",
     "away": "Sheffield Utd",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Leeds United",
     "away": "Coventry City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "West Ham",
     "away": "Stoke",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Man United",
     "away": "Brentford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Wrexham",
     "away": "Portsmouth",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "West Brom",
     "away": "Bristol City",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Derby County",
     "away": "Watford",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Millwall",
     "away": "Burnley",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T15:15:00Z",
     "home": "Málaga",
     "away": "Athletic",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-28T15:30:00Z",
     "home": "Excelsior",
     "away": "Telstar",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-28T15:30:00Z",
     "home": "Moreirense",
     "away": "Santa Clara",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-28T15:30:00Z",
     "home": "Arouca",
     "away": "Rio Ave",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-28T16:15:00Z",
     "home": "Angers SCO",
     "away": "RC Lens",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-28T17:00:00Z",
     "home": "Torino",
     "away": "Lazio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T17:30:00Z",
     "home": "Stuttgart",
     "away": "Frankfurt",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T17:30:00Z",
     "home": "Elche",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-28T17:30:00Z",
     "home": "Ipswich Town",
     "away": "Aston Villa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-28T17:45:00Z",
     "home": "PSV",
     "away": "Go Ahead",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-28T18:00:00Z",
     "home": "Acad. Viseu",
     "away": "Alverca",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-28T19:45:00Z",
     "home": "Nice",
     "away": "Troyes",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-28T19:45:00Z",
     "home": "Inter",
     "away": "Genoa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-28T19:45:00Z",
     "home": "Le Havre",
     "away": "Strasbourg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-28T19:45:00Z",
     "home": "PSG",
     "away": "Lorient",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-28T19:45:00Z",
     "home": "Le Mans",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T20:00:00Z",
     "home": "Real Madrid",
     "away": "Alavés",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-11-28T20:00:00Z",
     "home": "Palmeiras",
     "away": "Estudiantes LP",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-28T20:00:00Z",
     "home": "Cambuur",
     "away": "Sparta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-28T20:30:00Z",
     "home": "Vitória SC",
     "away": "Amadora",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-29T00:00:00Z",
     "home": "Botafogo",
     "away": "Bahia",
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
     "played": 11,
     "pts": 22,
     "gd": 17
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
     "team": "Liverpool",
     "played": 11,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Bournemouth",
     "played": 11,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 11,
     "pts": 17,
     "gd": 9
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 13,
     "pts": 36,
     "gd": 36
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
     "played": 13,
     "pts": 31,
     "gd": 16
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
     "played": 13,
     "pts": 22,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Santander",
     "played": 14,
     "pts": 20,
     "gd": -10
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
     "played": 11,
     "pts": 19,
     "gd": 6
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
     "played": 12,
     "pts": 29,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 12,
     "pts": 27,
     "gd": 14
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 12,
     "pts": 26,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Juventus",
     "played": 12,
     "pts": 21,
     "gd": 7
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
     "team": "Paris FC",
     "played": 12,
     "pts": 23,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Brest",
     "played": 12,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 11,
     "pts": 21,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "Olympique Lyon",
     "played": 11,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Marseille",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "FINISHED",
      "score": "1-1"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-12-02T20:15:00Z",
      "home": "Brentford",
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
      "kickoff_utc": "2026-11-22T13:00:00Z",
      "home": "Barça",
      "away": "Villarreal",
      "status": "FINISHED",
      "score": "3-2"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-12-02T20:30:00Z",
      "home": "Barça",
      "away": "Atleti",
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
    "home": "New York Knicks",
    "away": "Miami Heat",
    "score": "105-108",
    "status": "Final"
   },
   {
    "home": "Detroit Pistons",
    "away": "Milwaukee Bucks",
    "score": "113-98",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Philadelphia 76ers",
    "score": "87-111",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Brooklyn Nets",
    "score": "124-100",
    "status": "Final"
   },
   {
    "home": "Boston Celtics",
    "away": "Atlanta Hawks",
    "score": "86-87",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Memphis Grizzlies",
    "score": "109-114",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Dallas Mavericks",
    "score": "109-113",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Los Angeles Lakers",
    "score": "99-96",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Denver Nuggets",
    "score": "107-120",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "New Orleans Pelicans",
    "score": "104-105",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Golden State Warriors",
    "score": "116-94",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Washington Wizards",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-28T22:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-28T23:00:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-29T01:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-29T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-29T01:30:00Z"
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
     "score": "1-0"
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
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2027-03-25T19:45:00",
     "home": "Belarus",
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
     "title": "Man Utd trigger Fernandes' one-year contract extension",
     "published": "2026-11-28T10:28:36+00:00",
     "summary": "Manchester United activate an option on captain Bruno Fernandes' contract, extending it until 2028."
    },
    {
     "ref": "bbc_football#1",
     "title": "How Cardiff are changing Swansea derby narrative",
     "published": "2026-11-28T10:07:52+00:00",
     "summary": "Cardiff City used to be the dysfunctional poor relations in south Wales derbies, but they are changing the narrative with their rivals Swansea City."
    },
    {
     "ref": "bbc_football#2",
     "title": "Sheffield United scout Hearts' McPake - gossip",
     "published": "2026-11-28T08:36:34+00:00",
     "summary": "Hearts winger linked with Sheffield United as former St Johnstone chairman reveals 49ers approach."
    },
    {
     "ref": "bbc_football#3",
     "title": "Ranking the Premier League's ultimate free-kick specialists",
     "published": "2026-11-28T08:14:24+00:00",
     "summary": "Who are the greatest free-kick specialists in Premier League history? BBC Sport delves into the stats and ranks the top 10."
    },
    {
     "ref": "bbc_football#4",
     "title": "I watched every Brighton game at Dortmund - Gross",
     "published": "2026-11-28T07:29:50+00:00",
     "summary": "Brighton's Pascal Gross shares why he returned after getting his move to Borussia Dortmund."
    },
    {
     "ref": "bbc_football#5",
     "title": "How dad's embarrassment was making of Gross at Brighton",
     "published": "2026-11-28T07:25:04+00:00",
     "summary": "Pascal Gross says his dad 'embarrassment' at him looking for free-kicks played an important part in him becoming the player he is today at Brighton."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-28T07:04:56+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "'It doesn't come from me' - Eckert irked by Southampton's jibes at Boro",
     "published": "2026-11-28T06:54:09+00:00",
     "summary": "Southampton head coach Tonda Eckert stresses that taunts from the club aimed at Championship opponents Middlesbrough do not come from him."
    },
    {
     "ref": "bbc_football#8",
     "title": "How a football team rebuilt after 19 players died in plane crash",
     "published": "2026-11-28T06:30:34+00:00",
     "summary": "How a Brazilian football team rose again after a plane crash that killed most of their players and staff on the way to what should have been the biggest match of their lives."
    },
    {
     "ref": "bbc_football#9",
     "title": "Wilshere v Ramsey - Arsenal legends treading similar managerial paths",
     "published": "2026-11-27T22:58:49+00:00",
     "summary": "Eighteen years after making their Premier League debuts two minutes apart, Jack Wilshere and Aaron Ramsey meet as managers."
    },
    {
     "ref": "bbc_football#10",
     "title": "Ayr beat Largs to book place in Scottish Cup fourth round",
     "published": "2026-11-27T22:57:03+00:00",
     "summary": "Watch the goals from Ayr United's Scottish Cup win over Largs Thistle."
    },
    {
     "ref": "bbc_football#11",
     "title": "Glasner praises 'smart' Igor Jesus after Chelsea win",
     "published": "2026-11-27T22:47:57+00:00",
     "summary": "Nottingham Forest head coach Oliver Glasnerpraises the perfomance of striker Igor Thiago impressive 3-2 home win against a struggling Chelsea in the Premier League."
    },
    {
     "ref": "bbc_football#12",
     "title": "Chelsea must stick together in 'difficult moment' - Alonso",
     "published": "2026-11-27T22:45:22+00:00",
     "summary": "Chelsea manager Xabi Alonso's calls for togetherness after his side fall to a third defeat in a row against a Nottingham Forest side that has struggled for form this season in the Premier League."
    },
    {
     "ref": "bbc_football#13",
     "title": "Bremen fight back to earn draw in six-goal thriller",
     "published": "2026-11-27T22:37:16+00:00",
     "summary": "Bundesliga bottom side Borussia M'gladbach miss out on a much needed three points after surrendering a 3-1 lead at Werder Bremen."
    },
    {
     "ref": "bbc_football#14",
     "title": "Gibbs-White scores twice as Forest beat struggling Chelsea",
     "published": "2026-11-27T22:30:22+00:00",
     "summary": "Igor Jesus' stunning volley and two goals from Morgan Gibbs-White help Nottingham Forest beat a struggling Chelsea side, who lose their third Premier League game in a row."
    },
    {
     "ref": "bbc_football#15",
     "title": "Gibbs-White stars, Fofana struggles - player ratings for Forest v Chelsea",
     "published": "2026-11-27T21:59:48+00:00",
     "summary": "Morgan Gibbs-White scored twice as Nottingham Forest beat Chelsea 3-2 at the City Ground for the first time since 1997."
    },
    {
     "ref": "bbc_football#16",
     "title": "Celtic defend head of security amid Green Brigade row",
     "published": "2026-11-27T21:50:01+00:00",
     "summary": "Celtic defend their head of security Mark Hargreaves and the action taken against the Green Brigade last season."
    },
    {
     "ref": "bbc_football#17",
     "title": "Celtic defend head of security amid Green Brigade row",
     "published": "2026-11-27T21:50:01+00:00",
     "summary": "Celtic defend their head of security Mark Hargreaves and the action taken against the Green Brigade last season."
    },
    {
     "ref": "bbc_football#18",
     "title": "'You're not welcome here' - fans turn on Fofana as Chelsea lose again",
     "published": "2026-11-27T21:31:54+00:00",
     "summary": "Chelsea defender Wesley Fofana is booed by his own fans during the Premier League defeat at Nottingham Forest after a controversial interview."
    },
    {
     "ref": "bbc_football#19",
     "title": "Champions League to be a factor in Paz move - Saturday's gossip",
     "published": "2026-11-27T21:19:27+00:00",
     "summary": "Manchester United may lose the chance to sign Nico Paz without Champions League qualification, Arsenal also want the Como midfielder and Liverpool eye Lamine Camara."
    },
    {
     "ref": "bbc_football#20",
     "title": "Football Daily",
     "published": "2026-11-27T20:47:00+00:00",
     "summary": "Everton welcome Liverpool in the 249th derby and Steven Gerrard gives his thoughts."
    },
    {
     "ref": "bbc_football#21",
     "title": "Emery praises Garnacho attitude after Villa selection snub",
     "published": "2026-11-27T17:42:00+00:00",
     "summary": "Aston Villa boss Unai Emery praises Alejandro Garnacho's \"fantastic attitude\" but suggests other players rank ahead of him for selection."
    },
    {
     "ref": "bbc_football#22",
     "title": "Head coach Slegers leaves Arsenal 18 months after Champions League win",
     "published": "2026-11-27T16:14:34+00:00",
     "summary": "Arsenal part company with head coach Renee Slegers by mutual consent after a disappointing start to the season."
    },
    {
     "ref": "bbc_football#23",
     "title": "Head coach Slegers leaves Arsenal 18 months after Champions League win",
     "published": "2026-11-27T16:14:34+00:00",
     "summary": "Arsenal part company with head coach Renee Slegers by mutual consent after a disappointing start to the season."
    },
    {
     "ref": "bbc_football#24",
     "title": "Spurs' Savio to miss festive fixtures after injury setback",
     "published": "2026-11-27T16:05:30+00:00",
     "summary": "Tottenham winger Savio will miss the club's Christmas fixtures with injury and could be out for up to 80 days, manager Roberto de Zerbi confirms."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Late goal sparked by Crew's late transfers sends Messi, Inter Miami packing - The Columbus Dispatch",
     "published": "2026-11-28T11:16:00+00:00",
     "summary": "Late goal sparked by Crew's late transfers sends Messi, Inter Miami packing The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Defending champions Inter Miami eliminated from MLS Cup playoffs - Citi Sports Online",
     "published": "2026-11-28T11:05:42+00:00",
     "summary": "Defending champions Inter Miami eliminated from MLS Cup playoffs Citi Sports Online"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Columbus Crew vs Inter Miami - beIN SPORTS",
     "published": "2026-11-28T10:54:34+00:00",
     "summary": "Columbus Crew vs Inter Miami beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi Booed as Inter Miami Crash Out of MLS Cup Play-Offs - Real Broadcasting Network",
     "published": "2026-11-28T10:23:32+00:00",
     "summary": "Messi Booed as Inter Miami Crash Out of MLS Cup Play-Offs Real Broadcasting Network"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Appears Upset as Reigning MLS Cup Champions Inter Miami Crash Out of Playoffs - شبكة تواصل الإخبارية",
     "published": "2026-11-28T10:06:51+00:00",
     "summary": "Lionel Messi Appears Upset as Reigning MLS Cup Champions Inter Miami Crash Out of Playoffs شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Columbus Crew 1-0 Inter Miami: No MLS Cup defence for Messi - beIN SPORTS",
     "published": "2026-11-28T10:05:02+00:00",
     "summary": "Columbus Crew 1-0 Inter Miami: No MLS Cup defence for Messi beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi Appears Upset as Reigning MLS Cup Champions Inter Miami Crash Out of Playoffs - EssentiallySports",
     "published": "2026-11-28T10:02:00+00:00",
     "summary": "Lionel Messi Appears Upset as Reigning MLS Cup Champions Inter Miami Crash Out of Playoffs EssentiallySports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus vs. Inter Miami CF - Final Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-28T09:32:46+00:00",
     "summary": "Columbus vs. Inter Miami CF - Final Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-28T09:32:06+00:00",
     "summary": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi's title defence ends in disaster as Inter Miami fail to score in two games - Nogomania",
     "published": "2026-11-28T09:13:35+00:00",
     "summary": "Lionel Messi's title defence ends in disaster as Inter Miami fail to score in two games Nogomania"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS: Messi and Inter Miami knocked out in the first round of play-offs! - OneFootball",
     "published": "2026-11-28T09:06:44+00:00",
     "summary": "MLS: Messi and Inter Miami knocked out in the first round of play-offs! OneFootball"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami loses MLS crown, Messi faces a disappointing season - Laodong.vn",
     "published": "2026-11-28T08:37:01+00:00",
     "summary": "Inter Miami loses MLS crown, Messi faces a disappointing season Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Columbus Crew 1 - 0 Inter Miami CF: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-28T08:36:31+00:00",
     "summary": "Columbus Crew 1 - 0 Inter Miami CF: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi Fails Early with Inter Miami - blue News",
     "published": "2026-11-28T08:27:12+00:00",
     "summary": "Messi Fails Early with Inter Miami blue News"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Columbus Crew Eliminates Inter Miami from MLS Cup Playoffs - India News Network",
     "published": "2026-11-28T08:25:07+00:00",
     "summary": "Columbus Crew Eliminates Inter Miami from MLS Cup Playoffs India News Network"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "After Son Heung-min, even the \"God of Football\" could not hold on: \"MLS Cup Playoff Upset\"... Messi's Inter Miami Suffers Last-Minute Loss to Columbus, \"Retirement Rumors Surface\" - 스타뉴스",
     "published": "2026-11-28T08:11:36+00:00",
     "summary": "After Son Heung-min, even the \"God of Football\" could not hold on: \"MLS Cup Playoff Upset\"... Messi's Inter Miami Suffers Last-Minute Loss to Columbus, \"Retirement Rumors Surface\" 스타뉴스"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi's Inter Miami crash out of MLS Cup play-offs in shock defeat - Flashscore UK",
     "published": "2026-11-28T08:10:13+00:00",
     "summary": "Messi's Inter Miami crash out of MLS Cup play-offs in shock defeat Flashscore UK"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi's MLS season over as Inter Miami fall to Columbus Crew - Pulse Nigeria",
     "published": "2026-11-28T08:07:53+00:00",
     "summary": "Messi's MLS season over as Inter Miami fall to Columbus Crew Pulse Nigeria"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Watch Columbus Crew vs Inter Miami Live Today: Streaming, TV Channel & Start Time - FOX One",
     "published": "2026-11-28T08:06:05+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami Live Today: Streaming, TV Channel & Start Time FOX One"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami with Messi ends season after loss to Columbus Crew — Interia Sport - UA.NEWS",
     "published": "2026-11-28T07:45:01+00:00",
     "summary": "Inter Miami with Messi ends season after loss to Columbus Crew — Interia Sport UA.NEWS"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Kily González explains what went wrong for Messi and Inter Miami after MLS playoff exit - Diario AS",
     "published": "2026-11-28T07:25:55+00:00",
     "summary": "Kily González explains what went wrong for Messi and Inter Miami after MLS playoff exit Diario AS"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus Crew eliminate Inter Miami in playoff shocker - MLSsoccer.com",
     "published": "2026-11-28T07:06:44+00:00",
     "summary": "Columbus Crew eliminate Inter Miami in playoff shocker MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "MLS: Messi’s Inter Miami dumped out in playoff first round · SNA - Sport News Africa",
     "published": "2026-11-28T07:02:38+00:00",
     "summary": "MLS: Messi’s Inter Miami dumped out in playoff first round · SNA Sport News Africa"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "See photos from Columbus Crew vs. Inter Miami MLS playoff showdown - The Columbus Dispatch",
     "published": "2026-11-28T07:01:35+00:00",
     "summary": "See photos from Columbus Crew vs. Inter Miami MLS playoff showdown The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) - Yahoo Sports",
     "published": "2026-11-28T06:59:30+00:00",
     "summary": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) Yahoo Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Blazers Top Warriors As Deni Avdija Scores 26 At Moda Center - Yardbarker",
     "published": "2026-11-28T07:56:31+00:00",
     "summary": "Blazers Top Warriors As Deni Avdija Scores 26 At Moda Center Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija, Blazers best Warriors, finish atop NBA Cup group - KQSM-FM",
     "published": "2026-11-28T06:10:29+00:00",
     "summary": "Deni Avdija, Blazers best Warriors, finish atop NBA Cup group KQSM-FM"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Highlights From Deni Avdija 26-Point Game - NBA.com",
     "published": "2026-11-28T05:59:24+00:00",
     "summary": "Highlights From Deni Avdija 26-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija leads Portland into NBA Cup quarterfinals with dominant win over Golden State - Ynetnews",
     "published": "2026-11-28T05:56:19+00:00",
     "summary": "Deni Avdija leads Portland into NBA Cup quarterfinals with dominant win over Golden State Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Leads Blazers to victory - CBS Sports",
     "published": "2026-11-28T05:27:14+00:00",
     "summary": "Trail Blazers' Deni Avdija: Leads Blazers to victory CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers beat the Warriors 116-94 to advance to the NBA Cup quarterfinals - News4JAX",
     "published": "2026-11-28T05:21:40+00:00",
     "summary": "Trail Blazers beat the Warriors 116-94 to advance to the NBA Cup quarterfinals News4JAX"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija finishes through contact, 11/27/2026 - Yahoo Sports",
     "published": "2026-11-28T05:12:06+00:00",
     "summary": "Deni Avdija finishes through contact, 11/27/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Trail Blazers vs. Warriors Prediction: Preview, Injury Report, Advantages, X-Factors - Fadeaway World",
     "published": "2026-11-27T17:40:14+00:00",
     "summary": "Trail Blazers vs. Warriors Prediction: Preview, Injury Report, Advantages, X-Factors Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 - Yahoo Sports",
     "published": "2026-11-27T05:32:00+00:00",
     "summary": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Barkley Questions Wizards Decision to Trade Deni Avdija - Limapagi",
     "published": "2026-11-27T04:32:02+00:00",
     "summary": "Barkley Questions Wizards Decision to Trade Deni Avdija Limapagi"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful - Hoops Habit",
     "published": "2026-11-26T20:00:00+00:00",
     "summary": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful Hoops Habit"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double in win - CBS Sports",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija News: Teases triple-double in win - RotoWire",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Deni Avdija News: Teases triple-double in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Nets' Ben Saraf: Recalled to NBA - CBS Sports",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Nets' Ben Saraf: Recalled to NBA CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija - The Times of Israel",
     "published": "2026-11-26T15:01:00+00:00",
     "summary": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Highlights From Deni Avdija 33-Point Game - NBA.com",
     "published": "2026-11-26T14:39:40+00:00",
     "summary": "Highlights From Deni Avdija 33-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion - NDTV Sports",
     "published": "2026-11-26T14:36:56+00:00",
     "summary": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season - Sportskeeda",
     "published": "2026-11-26T13:39:00+00:00",
     "summary": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew - Heavy.com",
     "published": "2026-11-26T12:48:00+00:00",
     "summary": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night - Haaretz",
     "published": "2026-11-26T10:47:00+00:00",
     "summary": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night Haaretz"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs - Basketball Network",
     "published": "2026-11-26T10:26:31+00:00",
     "summary": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "3 Takeaways as Spurs stumble late in Portland thanks to Deni Avdija's dagger - Yahoo Sports",
     "published": "2026-11-26T10:11:54+00:00",
     "summary": "3 Takeaways as Spurs stumble late in Portland thanks to Deni Avdija's dagger Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs - NDTV Sports",
     "published": "2026-11-26T09:36:01+00:00",
     "summary": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ - Heavy.com",
     "published": "2026-11-26T09:12:34+00:00",
     "summary": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch - Ynetnews",
     "published": "2026-11-26T08:32:58+00:00",
     "summary": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch Ynetnews"
    }
   ]
  }
 ]
}
</input>