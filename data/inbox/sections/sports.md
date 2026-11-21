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
  "home": "Newcastle",
  "away": "Arsenal",
  "kickoff_utc": "2026-11-21T17:30:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "New York Knicks",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-22T00:30:00.000Z"
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
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-20T00:30:00Z",
     "home": "São Paulo",
     "away": "Fluminense",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-20T19:30:00Z",
     "home": "Bayern",
     "away": "1. FC Köln",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-20T19:45:00Z",
     "home": "Troyes",
     "away": "Le Havre",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-20T20:00:00Z",
     "home": "Athletic",
     "away": "Espanyol",
     "status": "FINISHED",
     "score": "0-1"
    }
   ],
   "today": [
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Southampton",
     "away": "Derby County",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Man City",
     "away": "Fulham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Norwich",
     "away": "Cardiff",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T12:30:00Z",
     "home": "Millwall",
     "away": "QPR",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T13:00:00Z",
     "home": "Alavés",
     "away": "Deportivo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T14:00:00Z",
     "home": "Como 1907",
     "away": "Cagliari",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T14:00:00Z",
     "home": "Lazio",
     "away": "Lecce",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Frankfurt",
     "away": "Hoffenheim",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Leverkusen",
     "away": "SC Paderborn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Union Berlin",
     "away": "RB Leipzig",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "Elversberg",
     "away": "Freiburg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T14:30:00Z",
     "home": "M'gladbach",
     "away": "Dortmund",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Stoke",
     "away": "Birmingham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Aston Villa",
     "away": "Sunderland",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Swansea",
     "away": "West Brom",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Lincoln City",
     "away": "Wrexham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Tottenham",
     "away": "Ipswich Town",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Chelsea",
     "away": "Leeds United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "West Ham",
     "away": "Preston NE",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Sheffield Utd",
     "away": "Watford",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Wolverhampton",
     "away": "Charlton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Bournemouth",
     "away": "Nottingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Middlesbrough",
     "away": "Bristol City",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Coventry City",
     "away": "Crystal Palace",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-21T15:00:00Z",
     "home": "Bolton",
     "away": "Portsmouth",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T15:15:00Z",
     "home": "Rayo Vallecano",
     "away": "Valencia",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T15:30:00Z",
     "home": "NEC",
     "away": "PSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T16:15:00Z",
     "home": "Nice",
     "away": "PSG",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T17:00:00Z",
     "home": "Parma",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Newcastle",
     "away": "Arsenal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Schalke",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T17:30:00Z",
     "home": "Sevilla FC",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T17:45:00Z",
     "home": "Utrecht",
     "away": "Cambuur",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T17:45:00Z",
     "home": "Feyenoord",
     "away": "Excelsior",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-21T19:30:00Z",
     "home": "Palmeiras",
     "away": "Flamengo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Lille",
     "away": "Olympique Lyon",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Napoli",
     "away": "Torino",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "RC Lens",
     "away": "Toulouse",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Strasbourg",
     "away": "Brest",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-21T19:45:00Z",
     "home": "Monaco",
     "away": "Auxerre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Real Madrid",
     "away": "Celta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Telstar",
     "away": "Zwolle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-21T20:00:00Z",
     "home": "Groningen",
     "away": "Heerenveen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-21T20:30:00Z",
     "home": "Bahia",
     "away": "Coritiba",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T00:00:00Z",
     "home": "Chapecoense",
     "away": "Cruzeiro",
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
     "played": 10,
     "pts": 27,
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
     "played": 10,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Liverpool",
     "played": 10,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Chelsea",
     "played": 10,
     "pts": 16,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Everton",
     "played": 10,
     "pts": 16,
     "gd": 2
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
     "played": 12,
     "pts": 30,
     "gd": 21
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
     "played": 12,
     "pts": 26,
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
     "played": 12,
     "pts": 18,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 10,
     "pts": 22,
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
     "team": "Freiburg",
     "played": 9,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 9,
     "pts": 18,
     "gd": 14
    },
    {
     "pos": 5,
     "team": "Leverkusen",
     "played": 9,
     "pts": 16,
     "gd": 3
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
     "played": 11,
     "pts": 29,
     "gd": 16
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 11,
     "pts": 28,
     "gd": 15
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 11,
     "pts": 27,
     "gd": 21
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 11,
     "pts": 24,
     "gd": 10
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 11,
     "pts": 23,
     "gd": 8
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
     "team": "Lille",
     "played": 10,
     "pts": 21,
     "gd": 7
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
     "team": "Marseille",
     "played": 10,
     "pts": 18,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Olympique Lyon",
     "played": 10,
     "pts": 17,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Nice",
     "played": 10,
     "pts": 17,
     "gd": 3
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
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
    "home": "Atlanta Hawks",
    "away": "Charlotte Hornets",
    "score": "111-97",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Orlando Magic",
    "score": "111-113",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Indiana Pacers",
    "score": "128-119",
    "status": "Final"
   },
   {
    "home": "Detroit Pistons",
    "away": "Toronto Raptors",
    "score": "102-105",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "Washington Wizards",
    "score": "94-98",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "New Orleans Pelicans",
    "score": "126-120",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Phoenix Suns",
    "score": "47-61",
    "status": "2nd Qtr"
   },
   {
    "home": "Denver Nuggets",
    "away": "Houston Rockets",
    "score": "31-33",
    "status": "1st Qtr"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Sacramento Kings",
    "score": "28-26",
    "status": "1st Qtr"
   }
  ],
  "games_today": [
   {
    "home": "Philadelphia 76ers",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-21T18:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-22T00:30:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-22T01:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-22T01:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-22T01:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-22T03:00:00Z"
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
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-21T23:00:00",
     "home": "Inter Miami",
     "away": "Columbus Crew",
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
     "title": "Cost of Man Utd hiring and firing managers nears £100m",
     "published": "2026-11-20T23:18:16+00:00",
     "summary": "Manchester United borrowed £10m three days after confirming Mauricio Pochettino would be their new head coach, which will cost them £7.5m in compensation to US Soccer."
    },
    {
     "ref": "bbc_football#1",
     "title": "First defeat and first red for Ferguson as Glentoran falter",
     "published": "2026-11-20T22:54:43+00:00",
     "summary": "BBC Sport Northern Ireland looks at Duncan Ferguson's first red card and defeat as Glentoran manager as they are edged out 3-2 by Cliftonville on Friday."
    },
    {
     "ref": "bbc_football#2",
     "title": "NFL great Brady could buy Chelsea stake",
     "published": "2026-11-20T22:36:35+00:00",
     "summary": "American football great Tom Brady is looking to invest in Chelsea through ownership group Clearlake Capital."
    },
    {
     "ref": "bbc_football#3",
     "title": "Lampard calls for fairness after Coventry penalty row",
     "published": "2026-11-20T22:04:19+00:00",
     "summary": "Coventry boss Frank Lampard wants officials to spend time ensuring they get decisions correct in the wake of his side being denied a penalty at Everton."
    },
    {
     "ref": "bbc_football#4",
     "title": "Shevchenko lying about drugs test claims - Mudryk",
     "published": "2026-11-20T21:54:17+00:00",
     "summary": "Mykhailo Mudryk accuses Ukraine legend Andriy Shevchenko of lying about the circumstances surrounding the winger's positive drugs test as his dispute with the country's football federation continues."
    },
    {
     "ref": "bbc_football#5",
     "title": "Watch: Inverness and Ayr play out goalless draw",
     "published": "2026-11-20T21:47:58+00:00",
     "summary": "Inverness Caledonian Thistle and Ayr United play out a goalless draw in the chilly Highlands."
    },
    {
     "ref": "bbc_football#6",
     "title": "Watch: Inverness and Ayr play out goalless draw",
     "published": "2026-11-20T21:47:58+00:00",
     "summary": "Inverness Caledonian Thistle and Ayr United play out a goalless draw in the chilly Highlands."
    },
    {
     "ref": "bbc_football#7",
     "title": "Osimhen keen on Man Utd move - Saturday's gossip",
     "published": "2026-11-20T20:06:51+00:00",
     "summary": "Victor Osimhen is keen on a move to Manchester United, Aston Villa are interested in Amad Diallo and Ivan Toney is a target for Crystal Palace, plus more."
    },
    {
     "ref": "bbc_football#8",
     "title": "Sarr focused on Palace return after Liverpool interest",
     "published": "2026-11-20T18:41:33+00:00",
     "summary": "Crystal Palace forward Ismaila Sarr says he has moved on from Liverpool's interest in signing him and is keen for a \"fresh start\" under Thomas Frank."
    },
    {
     "ref": "bbc_football#9",
     "title": "Chelsea fined £150,000 for discriminatory chanting",
     "published": "2026-11-20T17:52:50+00:00",
     "summary": "Chelsea are fined £150,000 by the FA for anti-Catholic and anti-Irish chants during their FA Cup third-round win at Charlton in January."
    },
    {
     "ref": "bbc_football#10",
     "title": "Johnstone no longer need to play twice in one day",
     "published": "2026-11-20T17:16:28+00:00",
     "summary": "Scottish fifth-tier club Johnstone Burgh are forced to play two cup ties on the same day, with the kick-offs only half an hour apart."
    },
    {
     "ref": "bbc_football#11",
     "title": "Johnstone Burgh no longer required to play twice on Saturday",
     "published": "2026-11-20T17:16:28+00:00",
     "summary": "Scottish fifth-tier club Johnstone Burgh are forced to play two cup ties on the same day, with the kick-offs only half an hour apart."
    },
    {
     "ref": "bbc_football#12",
     "title": "Matos accepts Swansea fans' anger over shock exit",
     "published": "2026-11-20T16:57:06+00:00",
     "summary": "Vitor Matos addresses his unexpected departure from Swansea City at his first press conference as RC Strasbourg boss."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man Utd fan criticism has gone too far at times - Berrada",
     "published": "2026-11-20T16:55:11+00:00",
     "summary": "Manchester United chief executive Omar Berrada says some of the recent criticism of the club's hierarchy has \"crossed a line\"."
    },
    {
     "ref": "bbc_football#14",
     "title": "Football Daily",
     "published": "2026-11-20T16:53:00+00:00",
     "summary": "The team look at Mauricio Pochettino's opening match as Manchester United head coach"
    },
    {
     "ref": "bbc_football#15",
     "title": "Mowbray support no surprise, says interim boss Johnson",
     "published": "2026-11-20T16:27:19+00:00",
     "summary": "Blackburn Rovers interim boss Damien Johnson says the support shown for head coach Tony Mowbray shows the high regard he is held in."
    },
    {
     "ref": "bbc_football#16",
     "title": "10 games, 0 points & 30 goals conceded - why Charlton are struggling",
     "published": "2026-11-20T16:00:04+00:00",
     "summary": "BBC Sport looks at why promoted Charlton Athletic have had one of the worst starts in Women's Super League history."
    },
    {
     "ref": "bbc_football#17",
     "title": "10 games, 0 points & 30 goals conceded - why Charlton are struggling",
     "published": "2026-11-20T16:00:04+00:00",
     "summary": "BBC Sport looks at why promoted Charlton Athletic have had one of the worst starts in Women's Super League history."
    },
    {
     "ref": "bbc_football#18",
     "title": "Why injured Joao Pedro may be Chelsea's most important player",
     "published": "2026-11-20T15:18:42+00:00",
     "summary": "With Joao Pedro missing again for Chelsea on Saturday, BBC Sport looks at the importance of the Brazilian to the Blues."
    },
    {
     "ref": "bbc_football#19",
     "title": "Filming training by drones should be illegal - Iraola",
     "published": "2026-11-20T15:08:51+00:00",
     "summary": "Liverpool head coach Andoni Iraola says filming with drones around training grounds should be illegal."
    },
    {
     "ref": "bbc_football#20",
     "title": "Celtic's Baur out for 10 weeks, says O'Neill",
     "published": "2026-11-20T14:47:54+00:00",
     "summary": "Germany midfielder Mika Baur will be out for around 10 weeks with ankle ligament damage, Celtic manager Martin O'Neill says."
    },
    {
     "ref": "bbc_football#21",
     "title": "Celtic's Baur out for 10 weeks, says O'Neill",
     "published": "2026-11-20T14:47:54+00:00",
     "summary": "Germany midfielder Mika Baur will be out for around 10 weeks with ankle ligament damage, Celtic manager Martin O'Neill says."
    },
    {
     "ref": "bbc_football#22",
     "title": "SFA should not change to pander to clubs - McLeish",
     "published": "2026-11-20T14:09:07+00:00",
     "summary": "St Mirren manager Craig McLeish says it's \"damning\" that Scottish FA chief football officer Craig Mulholland should have to \"pander to clubs\" as he attempts to bring in reforms."
    },
    {
     "ref": "bbc_football#23",
     "title": "SFA should not change to pander to clubs - McLeish",
     "published": "2026-11-20T14:09:07+00:00",
     "summary": "St Mirren manager Craig McLeish says it's \"damning\" that Scottish FA chief football officer Craig Mulholland should have to \"pander to clubs\" as he attempts to bring in reforms."
    },
    {
     "ref": "bbc_football#24",
     "title": "Arteta warns Arsenal players over FPL team news leak",
     "published": "2026-11-20T14:08:55+00:00",
     "summary": "Mikel Arteta says his Arsenal players have been warned against inadvertently leaking team news via Fantasy Premier League."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs. Columbus Crew, Whitecaps vs. Real Salt Lake Livestream: How to Watch the MLS Cup Playoffs - PCMag",
     "published": "2026-11-21T02:41:27+00:00",
     "summary": "Inter Miami vs. Columbus Crew, Whitecaps vs. Real Salt Lake Livestream: How to Watch the MLS Cup Playoffs PCMag"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "How GTA’s Vice City became the heartbeat of Lionel Messi’s Inter Miami stands - Diario AS",
     "published": "2026-11-21T01:28:03+00:00",
     "summary": "How GTA’s Vice City became the heartbeat of Lionel Messi’s Inter Miami stands Diario AS"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Columbus Crew vs. Inter Miami CF - November 21, 2026 - Bleacher Report",
     "published": "2026-11-21T00:00:40+00:00",
     "summary": "Columbus Crew vs. Inter Miami CF - November 21, 2026 Bleacher Report"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Watch Inter Miami CF vs Columbus Crew live today: Who is broadcasting the match on TV and via live stream? - Goal.com",
     "published": "2026-11-20T23:39:07+00:00",
     "summary": "Watch Inter Miami CF vs Columbus Crew live today: Who is broadcasting the match on TV and via live stream? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "MATCH PREVIEW: Inter Miami CF Hosts Columbus Crew in Game 1 of Best-of-3-Series - Inter Miami CF",
     "published": "2026-11-20T23:36:02+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Hosts Columbus Crew in Game 1 of Best-of-3-Series Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Kily González Explains How Inter Miami Will Adapt to Messi Ahead of MLS Cup Playoff Clash With Columbus - Pasión Fútbol",
     "published": "2026-11-20T22:49:03+00:00",
     "summary": "Kily González Explains How Inter Miami Will Adapt to Messi Ahead of MLS Cup Playoff Clash With Columbus Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Red-hot Crew face playoff test from Inter Miami, Lionel Messi - Miami Herald",
     "published": "2026-11-20T22:32:06+00:00",
     "summary": "Red-hot Crew face playoff test from Inter Miami, Lionel Messi Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "2026 MLS Cup Playoffs: Full Bracket, Schedule, Key Matches for Round One - LiveScore",
     "published": "2026-11-20T22:13:22+00:00",
     "summary": "2026 MLS Cup Playoffs: Full Bracket, Schedule, Key Matches for Round One LiveScore"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "A USMNT Fan's Guide to the 2026 MLS Cup Playoffs (Eastern Conference First Round Edition) - LiveScore",
     "published": "2026-11-20T21:40:27+00:00",
     "summary": "A USMNT Fan's Guide to the 2026 MLS Cup Playoffs (Eastern Conference First Round Edition) LiveScore"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi's Salary 2.5x Son's, Star 4th in MLS - 조선일보",
     "published": "2026-11-20T21:31:01+00:00",
     "summary": "Messi's Salary 2.5x Son's, Star 4th in MLS 조선일보"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi tops MLS salary rankings as Son Heung-min places fourth - Chosunbiz",
     "published": "2026-11-20T21:30:00+00:00",
     "summary": "Messi tops MLS salary rankings as Son Heung-min places fourth Chosunbiz"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami coach: When Messi in form, the team performs better‍‍‌⁠‌‌‍‌​​‌‌​⁠​‌​⁠​​​⁠​​​⁠​​​⁠​‌‌ - AllFootball",
     "published": "2026-11-20T21:18:56+00:00",
     "summary": "Inter Miami coach: When Messi in form, the team performs better‍‍‌⁠‌‌‍‌​​‌‌​⁠​‌​⁠​​​⁠​​​⁠​​​⁠​‌‌ AllFootball"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Miami vs. Charlotte (Apr 10, 2027) Live Score - ESPN",
     "published": "2026-11-20T20:54:34+00:00",
     "summary": "Miami vs. Charlotte (Apr 10, 2027) Live Score ESPN"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 - Sportskeeda",
     "published": "2026-11-20T20:42:57+00:00",
     "summary": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Philadelphia Union vs Inter Miami: Form Meets the Table | News | Football.com Ghana - Football.com",
     "published": "2026-11-20T20:00:00+00:00",
     "summary": "Philadelphia Union vs Inter Miami: Form Meets the Table | News | Football.com Ghana Football.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Philadelphia Union Host Inter Miami as Messi Status Looms | News | Football.com Ghana - Football.com",
     "published": "2026-11-20T20:00:00+00:00",
     "summary": "Philadelphia Union Host Inter Miami as Messi Status Looms | News | Football.com Ghana Football.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami vs. Columbus Crew: Lineups, Stats, Kickoff Time, and Where to Watch - news.bet365.com",
     "published": "2026-11-20T19:55:20+00:00",
     "summary": "Inter Miami vs. Columbus Crew: Lineups, Stats, Kickoff Time, and Where to Watch news.bet365.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Cristiano Ronaldo reaches 986 career goals: Where is Lionel Messi standing in the race to 1,000? - Bolavip US",
     "published": "2026-11-20T19:37:17+00:00",
     "summary": "Cristiano Ronaldo reaches 986 career goals: Where is Lionel Messi standing in the race to 1,000? Bolavip US"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami coach Kily González reveals game plan for Messi and Suárez ahead of crucial MLS playoff - Diario AS",
     "published": "2026-11-20T19:29:28+00:00",
     "summary": "Inter Miami coach Kily González reveals game plan for Messi and Suárez ahead of crucial MLS playoff Diario AS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Columbus Crew vs. Miami: free picks & statistics 11/21/2026 - RealGM",
     "published": "2026-11-20T19:08:53+00:00",
     "summary": "Columbus Crew vs. Miami: free picks & statistics 11/21/2026 RealGM"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Who will Inter Miami play next in MLS playoffs? - The Sun",
     "published": "2026-11-20T19:07:30+00:00",
     "summary": "Who will Inter Miami play next in MLS playoffs? The Sun"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus Crew look to thwart Messi, Miami bid for 2nd straight MLS Cup - The Columbus Dispatch",
     "published": "2026-11-20T18:23:00+00:00",
     "summary": "Columbus Crew look to thwart Messi, Miami bid for 2nd straight MLS Cup The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF Academy U-13s in International Action at Newell’s Cup in Rosario, Argentina - Inter Miami CF",
     "published": "2026-11-20T18:10:49+00:00",
     "summary": "Inter Miami CF Academy U-13s in International Action at Newell’s Cup in Rosario, Argentina Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi's wife Antonella shows off curves in figure hugging gym gear - www.the-sun.com",
     "published": "2026-11-20T17:36:19+00:00",
     "summary": "Lionel Messi's wife Antonella shows off curves in figure hugging gym gear www.the-sun.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami Decide Against Keeping Matías Acevedo as Racing Weigh Up His Return to Argentina - Pasión Fútbol",
     "published": "2026-11-20T17:30:00+00:00",
     "summary": "Inter Miami Decide Against Keeping Matías Acevedo as Racing Weigh Up His Return to Argentina Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija (foot) questionable vs. New York - NBC Sports",
     "published": "2026-11-21T02:15:25+00:00",
     "summary": "Deni Avdija (foot) questionable vs. New York NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game - Heavy.com",
     "published": "2026-11-21T01:14:00+00:00",
     "summary": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Avdija Questionable to Play vs Knicks - Blazer's Edge",
     "published": "2026-11-21T00:10:00+00:00",
     "summary": "Avdija Questionable to Play vs Knicks Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers' Deni Avdija: Iffy for Saturday - CBS Sports",
     "published": "2026-11-20T22:08:31+00:00",
     "summary": "Trail Blazers' Deni Avdija: Iffy for Saturday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija Injury: Iffy for Saturday - RotoWire",
     "published": "2026-11-20T22:08:31+00:00",
     "summary": "Deni Avdija Injury: Iffy for Saturday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-11-20T14:03:47+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Trail Blazers Rule Out Deni Avdija vs. Bucks - Wisevoter",
     "published": "2026-11-20T09:34:41+00:00",
     "summary": "Trail Blazers Rule Out Deni Avdija vs. Bucks Wisevoter"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises - The Times of Israel",
     "published": "2026-11-20T04:26:00+00:00",
     "summary": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija (foot) out Thursday vs. Bucks - NBC Sports",
     "published": "2026-11-20T03:46:07+00:00",
     "summary": "Deni Avdija (foot) out Thursday vs. Bucks NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers Rule Deni Avdija Out Against Bucks - Peradaban.id",
     "published": "2026-11-20T01:24:47+00:00",
     "summary": "Trail Blazers Rule Deni Avdija Out Against Bucks Peradaban.id"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers vs. Bucks Injury Report: Deni Avdija, Toumani Camara Questionable; Myles Turner, Kyle Kuzma Out - SSBCrack",
     "published": "2026-11-20T01:04:17+00:00",
     "summary": "Trail Blazers vs. Bucks Injury Report: Deni Avdija, Toumani Camara Questionable; Myles Turner, Kyle Kuzma Out SSBCrack"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija (foot) ruled out Thursday - FantasyPros",
     "published": "2026-11-20T00:54:00+00:00",
     "summary": "Deni Avdija (foot) ruled out Thursday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Blazers news: Deni Avdija will miss Bucks game with foot injury - ClutchPoints",
     "published": "2026-11-20T00:52:00+00:00",
     "summary": "Blazers news: Deni Avdija will miss Bucks game with foot injury ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Blazers say Deni Avdija is out for tonight’s game @ … - Yahoo Sports",
     "published": "2026-11-20T00:35:00+00:00",
     "summary": "Blazers say Deni Avdija is out for tonight’s game @ … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Portland Trail Blazers Injury Update: Is Deni Avdija Playing Tonight vs. Bucks? - Heavy.com",
     "published": "2026-11-20T00:26:00+00:00",
     "summary": "Portland Trail Blazers Injury Update: Is Deni Avdija Playing Tonight vs. Bucks? Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers' Deni Avdija: Remains sidelined Thursday - CBS Sports",
     "published": "2026-11-20T00:21:37+00:00",
     "summary": "Trail Blazers' Deni Avdija: Remains sidelined Thursday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Injury: Remains sidelined Thursday - RotoWire",
     "published": "2026-11-20T00:21:37+00:00",
     "summary": "Deni Avdija Injury: Remains sidelined Thursday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-20T00:03:30+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Final Injury Report for Trail Blazers-Bucks: Will Deni Avdija, Toumani Camara Play? - Yahoo Sports",
     "published": "2026-11-19T21:00:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Bucks: Will Deni Avdija, Toumani Camara Play? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Injury Update: Is Avdija Playing Tonight vs. Bucks? - PrizePicks",
     "published": "2026-11-19T18:48:56+00:00",
     "summary": "Deni Avdija Injury Update: Is Avdija Playing Tonight vs. Bucks? PrizePicks"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Bucks injury report - Yahoo Sports",
     "published": "2026-11-19T16:04:28+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Bucks injury report Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Nets' Ben Saraf: Recalled by Brooklyn - CBS Sports",
     "published": "2026-11-19T15:55:38+00:00",
     "summary": "Nets' Ben Saraf: Recalled by Brooklyn CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Ben Saraf News: Recalled by Brooklyn - RotoWire",
     "published": "2026-11-19T15:55:38+00:00",
     "summary": "Ben Saraf News: Recalled by Brooklyn RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) - Sports Illustrated",
     "published": "2026-11-19T13:53:58+00:00",
     "summary": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) - Sports Illustrated",
     "published": "2026-11-19T13:27:01+00:00",
     "summary": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) Sports Illustrated"
    }
   ]
  }
 ]
}
</input>