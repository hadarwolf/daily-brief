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
     "competition": "Serie A",
     "kickoff_utc": "2026-11-27T19:45:00Z",
     "home": "Venezia FC",
     "away": "Bologna",
     "status": "FINISHED",
     "score": "0-0"
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Levante",
     "away": "Santander",
     "status": "FINISHED",
     "score": "1-3"
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
     "competition": "Championship",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Southampton",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "2-0"
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
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T12:30:00Z",
     "home": "Lincoln City",
     "away": "Wolverhampton",
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
     "competition": "Championship",
     "kickoff_utc": "2026-11-28T15:00:00Z",
     "home": "Millwall",
     "away": "Burnley",
     "status": "SCHEDULED",
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T15:15:00Z",
     "home": "Málaga",
     "away": "Athletic",
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
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-28T15:30:00Z",
     "home": "Excelsior",
     "away": "Telstar",
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
     "competition": "Premier League",
     "kickoff_utc": "2026-11-28T17:30:00Z",
     "home": "Ipswich Town",
     "away": "Aston Villa",
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
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-28T17:30:00Z",
     "home": "Stuttgart",
     "away": "Frankfurt",
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
     "home": "Le Mans",
     "away": "Lille",
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-28T20:00:00Z",
     "home": "Real Madrid",
     "away": "Alavés",
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
    "score": "95-106",
    "status": "4th Qtr"
   },
   {
    "home": "Phoenix Suns",
    "away": "Dallas Mavericks",
    "score": "73-62",
    "status": "3rd Qtr"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Los Angeles Lakers",
    "score": "36-54",
    "status": "2nd Qtr"
   },
   {
    "home": "Utah Jazz",
    "away": "Denver Nuggets",
    "score": "53-52",
    "status": "2nd Qtr"
   },
   {
    "home": "LA Clippers",
    "away": "New Orleans Pelicans",
    "score": "50-54",
    "status": "2nd Qtr"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Golden State Warriors",
    "score": "62-39",
    "status": "2nd Qtr"
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
     "title": "Wilshere v Ramsey - Arsenal legends treading similar managerial paths",
     "published": "2026-11-27T22:58:49+00:00",
     "summary": "Eighteen years after making their Premier League debuts two minutes apart, Jack Wilshere and Aaron Ramsey meet as managers."
    },
    {
     "ref": "bbc_football#1",
     "title": "Ayr beat Largs to book place in Scottish Cup fourth round",
     "published": "2026-11-27T22:57:03+00:00",
     "summary": "Watch the goals from Ayr United's Scottish Cup win over Largs Thistle."
    },
    {
     "ref": "bbc_football#2",
     "title": "Glasner praises 'smart' Igor Jesus after Chelsea win",
     "published": "2026-11-27T22:47:57+00:00",
     "summary": "Nottingham Forest head coach Oliver Glasnerpraises the perfomance of striker Igor Thiago impressive 3-2 home win against a struggling Chelsea in the Premier League."
    },
    {
     "ref": "bbc_football#3",
     "title": "Chelsea must stick together in 'difficult moment' - Alonso",
     "published": "2026-11-27T22:45:22+00:00",
     "summary": "Chelsea manager Xabi Alonso's calls for togetherness after his side fall to a third defeat in a row against a Nottingham Forest side that has struggled for form this season in the Premier League."
    },
    {
     "ref": "bbc_football#4",
     "title": "Bremen fight back to earn draw in six-goal thriller",
     "published": "2026-11-27T22:37:16+00:00",
     "summary": "Bundesliga bottom side Borussia M'gladbach miss out on a much needed three points after surrendering a 3-1 lead at Werder Bremen."
    },
    {
     "ref": "bbc_football#5",
     "title": "Gibbs-White scores twice as Forest beat struggling Chelsea",
     "published": "2026-11-27T22:30:22+00:00",
     "summary": "Igor Jesus' stunning volley and two goals from Morgan Gibbs-White help Nottingham Forest beat a struggling Chelsea side, who lose their third Premier League game in a row."
    },
    {
     "ref": "bbc_football#6",
     "title": "Gibbs-White stars, Fofana struggles - player ratings for Forest v Chelsea",
     "published": "2026-11-27T21:59:48+00:00",
     "summary": "Morgan Gibbs-White scored twice as Nottingham Forest beat Chelsea 3-2 at the City Ground for the first time since 1997."
    },
    {
     "ref": "bbc_football#7",
     "title": "Celtic defend head of security amid Green Brigade row",
     "published": "2026-11-27T21:50:01+00:00",
     "summary": "Celtic defend their head of security Mark Hargreaves and the action taken against the Green Brigade last season."
    },
    {
     "ref": "bbc_football#8",
     "title": "Celtic defend head of security amid Green Brigade row",
     "published": "2026-11-27T21:50:01+00:00",
     "summary": "Celtic defend their head of security Mark Hargreaves and the action taken against the Green Brigade last season."
    },
    {
     "ref": "bbc_football#9",
     "title": "'You're not welcome here' - Chelsea fans turn on Fofana",
     "published": "2026-11-27T21:31:54+00:00",
     "summary": "Chelsea defender Wesley Fofana is booed by his own fans during the Premier League defeat at Nottingham Forest after a controversial interview."
    },
    {
     "ref": "bbc_football#10",
     "title": "Champions League to be a factor in Paz move - Saturday's gossip",
     "published": "2026-11-27T21:19:27+00:00",
     "summary": "Manchester United may lose the chance to sign Nico Paz without Champions League qualification, Arsenal also want the Como midfielder and Liverpool eye Lamine Camara."
    },
    {
     "ref": "bbc_football#11",
     "title": "Football Daily",
     "published": "2026-11-27T20:47:00+00:00",
     "summary": "Everton welcome Liverpool in the 249th derby and Steven Gerrard gives his thoughts."
    },
    {
     "ref": "bbc_football#12",
     "title": "Emery praises Garnacho attitude after Villa selection snub",
     "published": "2026-11-27T17:42:00+00:00",
     "summary": "Aston Villa boss Unai Emery praises Alejandro Garnacho's \"fantastic attitude\" but suggests other players rank ahead of him for selection."
    },
    {
     "ref": "bbc_football#13",
     "title": "Head coach Slegers leaves Arsenal 18 months after Champions League win",
     "published": "2026-11-27T16:14:34+00:00",
     "summary": "Arsenal part company with head coach Renee Slegers by mutual consent after a disappointing start to the season."
    },
    {
     "ref": "bbc_football#14",
     "title": "Head coach Slegers leaves Arsenal 18 months after Champions League win",
     "published": "2026-11-27T16:14:34+00:00",
     "summary": "Arsenal part company with head coach Renee Slegers by mutual consent after a disappointing start to the season."
    },
    {
     "ref": "bbc_football#15",
     "title": "Spurs' Savio to miss festive fixtures after injury setback",
     "published": "2026-11-27T16:05:30+00:00",
     "summary": "Tottenham winger Savio will miss the club's Christmas fixtures with injury and could be out for up to 80 days, manager Roberto de Zerbi confirms."
    },
    {
     "ref": "bbc_football#16",
     "title": "Man Utd trigger Fernandes' one-year contract extension",
     "published": "2026-11-27T15:08:41+00:00",
     "summary": "Manchester United activate an option on captain Bruno Fernandes' contract, extending it until 2028."
    },
    {
     "ref": "bbc_football#17",
     "title": "What happens now for Bayern Munich and Musiala?",
     "published": "2026-11-27T15:03:12+00:00",
     "summary": "Bayern Munich's Jamal Musiala might never return to his previous level and will deal with a medical condition for the rest of his life. What happens next?"
    },
    {
     "ref": "bbc_football#18",
     "title": "'I am not a magician' - what can Maresca's Man City learn from watertight Arsenal?",
     "published": "2026-11-27T14:37:58+00:00",
     "summary": "Manchester City's leaky defence faces one of the most difficult games of the season with a trip to watertight Arsenal, aiming to put right their patchy recent form."
    },
    {
     "ref": "bbc_football#19",
     "title": "Falkirk chase seven in a row at Rangers & Celtic visit Hearts",
     "published": "2026-11-27T14:37:51+00:00",
     "summary": "Falkirk's trip to Ibrox and Hearts' home match with Celtic stand out in another crucial Scottish Premiership weekend."
    },
    {
     "ref": "bbc_football#20",
     "title": "Falkirk chase seven in a row at Rangers & Celtic visit Hearts - Premiership key issues",
     "published": "2026-11-27T14:37:51+00:00",
     "summary": "Falkirk's trip to Ibrox and Hearts' home match with Celtic stand out in another crucial Scottish Premiership weekend."
    },
    {
     "ref": "bbc_football#21",
     "title": "Iordanescu ready for Watford 'challenge'",
     "published": "2026-11-27T13:58:15+00:00",
     "summary": "What we learned from new Watford manager Edward Iordanescu's first press conference."
    },
    {
     "ref": "bbc_football#22",
     "title": "The local boy aiming to be at the heart of Cardiff's derby aims",
     "published": "2026-11-27T13:16:05+00:00",
     "summary": "The Wales midfielder, central to Cardiff's change in fortunes, grew up in a Swansea-supporting area and has been the focal point of a Wales debate."
    },
    {
     "ref": "bbc_football#23",
     "title": "Ipswich Women sign Ademiluyi for record fee",
     "published": "2026-11-27T12:10:39+00:00",
     "summary": "Ipswich Town Women confirm the permanent signing of England youth international Princess Ademiluyi for a club record fee."
    },
    {
     "ref": "bbc_football#24",
     "title": "McInnes tempers 'anxiety' as Rangers seek top spot",
     "published": "2026-11-27T11:57:24+00:00",
     "summary": "Rangers should not experience any anxiety about the prospect of going top of the Premiership as they look to extend their winning run, says Derek McInnes."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "HIGHLIGHTS: Columbus Crew vs. Inter Miami CF | November 27, 2026 - MLSsoccer.com",
     "published": "2026-11-28T03:31:16+00:00",
     "summary": "HIGHLIGHTS: Columbus Crew vs. Inter Miami CF | November 27, 2026 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Columbus dumps Miami, Messi from MLS playoffs with extra-time winner - ESPN La Crosse 105.5",
     "published": "2026-11-28T03:30:30+00:00",
     "summary": "Columbus dumps Miami, Messi from MLS playoffs with extra-time winner ESPN La Crosse 105.5"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi, Inter Miami sent crashing out of MLS playoffs by Columbus Crew - The New York Times",
     "published": "2026-11-28T03:28:37+00:00",
     "summary": "Messi, Inter Miami sent crashing out of MLS playoffs by Columbus Crew The New York Times"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "MLS playoff notebook: What we learned from every Round 1 rematch - Backheeled",
     "published": "2026-11-28T03:28:25+00:00",
     "summary": "MLS playoff notebook: What we learned from every Round 1 rematch Backheeled"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-28T03:27:02+00:00",
     "summary": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi finishes sour 2026 as Inter Miami suffers early MLS Cup Playoffs exit in challenging year for ... - World Soccer Talk",
     "published": "2026-11-28T03:25:23+00:00",
     "summary": "Lionel Messi finishes sour 2026 as Inter Miami suffers early MLS Cup Playoffs exit in challenging year for ... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Miami vs. Columbus (3 Dec, 2026) Live Score - ESPN",
     "published": "2026-11-28T03:25:21+00:00",
     "summary": "Miami vs. Columbus (3 Dec, 2026) Live Score ESPN"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus eliminates Miami, Messi from MLS playoffs with extra-time winner - ESPN",
     "published": "2026-11-28T03:25:01+00:00",
     "summary": "Columbus eliminates Miami, Messi from MLS playoffs with extra-time winner ESPN"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Columbus Crew eliminate Inter Miami in playoff shocker - MLSsoccer.com",
     "published": "2026-11-28T03:24:38+00:00",
     "summary": "Columbus Crew eliminate Inter Miami in playoff shocker MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-11-28T03:23:37+00:00",
     "summary": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-11-28T03:20:32+00:00",
     "summary": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "End of the line for Messi? Inter Miami eliminated from MLS playoffs by Columbus - USA Today",
     "published": "2026-11-28T03:19:00+00:00",
     "summary": "End of the line for Messi? Inter Miami eliminated from MLS playoffs by Columbus USA Today"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi, Inter Miami Eliminated by Crew, Updated MLS Playoff Bracket and Highlights from Upset - Bleacher Report",
     "published": "2026-11-28T03:18:24+00:00",
     "summary": "Lionel Messi, Inter Miami Eliminated by Crew, Updated MLS Playoff Bracket and Highlights from Upset Bleacher Report"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "How does Lionel Messi’s 2026 compare to Cristiano Ronaldo after Inter Miami’s MLS Cup Playoffs elimination? - World Soccer Talk",
     "published": "2026-11-28T03:16:49+00:00",
     "summary": "How does Lionel Messi’s 2026 compare to Cristiano Ronaldo after Inter Miami’s MLS Cup Playoffs elimination? World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi, Miami ousted from MLS playoffs with dramatic loss to Columbus - theScore",
     "published": "2026-11-28T03:16:06+00:00",
     "summary": "Messi, Miami ousted from MLS playoffs with dramatic loss to Columbus theScore"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Resumen: Columbus Crew 1-0 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-11-28T03:15:39+00:00",
     "summary": "Resumen: Columbus Crew 1-0 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Highlights MLS: Columbus Crew 1-0 Inter Miami CF - OneFootball",
     "published": "2026-11-28T03:15:34+00:00",
     "summary": "Highlights MLS: Columbus Crew 1-0 Inter Miami CF OneFootball"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Santiago Rodriguez nets winner as Columbus Crew knocks out Inter Miami - ESPN",
     "published": "2026-11-28T03:15:17+00:00",
     "summary": "Santiago Rodriguez nets winner as Columbus Crew knocks out Inter Miami ESPN"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) - Yahoo Sports",
     "published": "2026-11-28T03:14:25+00:00",
     "summary": "Highlights: Columbus Crew 1-0 Inter Miami CF (MLS) Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi, Inter Miami crash out of MLS playoffs in first round with 1-0 loss to Columbus Crew - AOL.co.uk",
     "published": "2026-11-28T03:13:46+00:00",
     "summary": "Lionel Messi, Inter Miami crash out of MLS playoffs in first round with 1-0 loss to Columbus Crew AOL.co.uk"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Catch Up with Highlights - FOX Sports",
     "published": "2026-11-28T03:12:42+00:00",
     "summary": "Catch Up with Highlights FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami Fans Build Distinctive Culture Through Stadium Chants - www.suaralandak.co.id",
     "published": "2026-11-28T02:43:37+00:00",
     "summary": "Inter Miami Fans Build Distinctive Culture Through Stadium Chants www.suaralandak.co.id"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF Columbus Crew Soccer - chronicleonline.com",
     "published": "2026-11-28T02:36:17+00:00",
     "summary": "Inter Miami CF Columbus Crew Soccer chronicleonline.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-28T02:17:10+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "See photos from Columbus Crew vs. Inter Miami MLS playoff showdown - The Columbus Dispatch",
     "published": "2026-11-28T02:14:00+00:00",
     "summary": "See photos from Columbus Crew vs. Inter Miami MLS playoff showdown The Columbus Dispatch"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Golden State Warriors @ Portland Trail Blazers Odds - FanDuel Sportsbook",
     "published": "2026-11-27T20:37:56+00:00",
     "summary": "Golden State Warriors @ Portland Trail Blazers Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers vs. Warriors Prediction: Preview, Injury Report, Advantages, X-Factors - Fadeaway World",
     "published": "2026-11-27T17:40:14+00:00",
     "summary": "Trail Blazers vs. Warriors Prediction: Preview, Injury Report, Advantages, X-Factors Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists - SportsRation",
     "published": "2026-11-27T13:17:54+00:00",
     "summary": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-27T05:40:49+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 - Yahoo Sports",
     "published": "2026-11-27T05:32:00+00:00",
     "summary": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Barkley Questions Wizards Decision to Trade Deni Avdija - Limapagi",
     "published": "2026-11-27T04:32:02+00:00",
     "summary": "Barkley Questions Wizards Decision to Trade Deni Avdija Limapagi"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Watch: Shaq surprises Deni Avdija with Hebrew greetings - Israel National News",
     "published": "2026-11-27T02:55:00+00:00",
     "summary": "Watch: Shaq surprises Deni Avdija with Hebrew greetings Israel National News"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs - ClutchPoints",
     "published": "2026-11-26T23:29:06+00:00",
     "summary": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs - Yahoo Sports",
     "published": "2026-11-26T23:28:34+00:00",
     "summary": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "News from Israel and the Jewish world in Spanish - Aurora Israel",
     "published": "2026-11-26T21:23:30+00:00",
     "summary": "News from Israel and the Jewish world in Spanish Aurora Israel"
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
     "title": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night - FirstSportz",
     "published": "2026-11-26T16:31:00+00:00",
     "summary": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night FirstSportz"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Nets' Ben Saraf: Recalled to NBA - CBS Sports",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Nets' Ben Saraf: Recalled to NBA CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Ben Saraf News: Recalled to NBA - RotoWire",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Ben Saraf News: Recalled to NBA RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija - The Times of Israel",
     "published": "2026-11-26T15:01:00+00:00",
     "summary": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Highlights From Deni Avdija 33-Point Game - NBA.com",
     "published": "2026-11-26T14:39:40+00:00",
     "summary": "Highlights From Deni Avdija 33-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion - NDTV Sports",
     "published": "2026-11-26T14:36:56+00:00",
     "summary": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season - Sportskeeda",
     "published": "2026-11-26T13:39:00+00:00",
     "summary": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew - Heavy.com",
     "published": "2026-11-26T12:48:00+00:00",
     "summary": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night - Haaretz",
     "published": "2026-11-26T10:47:00+00:00",
     "summary": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night Haaretz"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs - Basketball Network",
     "published": "2026-11-26T10:26:31+00:00",
     "summary": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "3 Takeaways as Spurs stumble late in Portland thanks to Deni Avdija's dagger - Yahoo Sports",
     "published": "2026-11-26T10:11:54+00:00",
     "summary": "3 Takeaways as Spurs stumble late in Portland thanks to Deni Avdija's dagger Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs - NDTV Sports",
     "published": "2026-11-26T09:36:01+00:00",
     "summary": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs NDTV Sports"
    }
   ]
  }
 ]
}
</input>