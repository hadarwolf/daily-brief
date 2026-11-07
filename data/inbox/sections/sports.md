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
  "away": "Hull City",
  "kickoff_utc": "2026-11-07T15:00:00Z"
 },
 {
  "sport": "soccer",
  "competition": "American Major League Soccer",
  "home": "Inter Miami",
  "away": "Charlotte FC",
  "kickoff_utc": "2026-11-07T21:00:00"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Atlanta Hawks",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-08T00:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Portland Trail Blazers",
  "away": "San Antonio Spurs",
  "kickoff_utc": "2026-11-08T03:00:00.000Z"
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
     "kickoff_utc": "2026-11-06T00:30:00Z",
     "home": "Cruzeiro",
     "away": "Bahia",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-06T19:00:00Z",
     "home": "Willem II",
     "away": "Zwolle",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-06T19:30:00Z",
     "home": "HSV",
     "away": "M'gladbach",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-06T19:45:00Z",
     "home": "Venezia FC",
     "away": "Udinese",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-06T19:45:00Z",
     "home": "Toulouse",
     "away": "Strasbourg",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Everton",
     "away": "Coventry City",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Sevilla FC",
     "away": "Alavés",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Derby County",
     "away": "Bolton",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-06T20:45:00Z",
     "home": "Famalicão",
     "away": "Arouca",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-06T23:00:00Z",
     "home": "Vitória",
     "away": "Fluminense",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Leeds United",
     "away": "Tottenham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Wrexham",
     "away": "Wolverhampton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Bristol City",
     "away": "Norwich",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T12:30:00Z",
     "home": "Portsmouth",
     "away": "Stoke",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T13:00:00Z",
     "home": "Málaga",
     "away": "Santander",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T14:00:00Z",
     "home": "Cagliari",
     "away": "Frosinone",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T14:00:00Z",
     "home": "Torino",
     "away": "Lecce",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "RB Leipzig",
     "away": "Augsburg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "Dortmund",
     "away": "Elversberg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "SC Paderborn",
     "away": "Frankfurt",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T14:30:00Z",
     "home": "Mainz",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Preston NE",
     "away": "Southampton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "QPR",
     "away": "Lincoln City",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Blackburn",
     "away": "West Ham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Charlton",
     "away": "Sheffield Utd",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "West Brom",
     "away": "Millwall",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Fulham",
     "away": "Newcastle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Watford",
     "away": "Middlesbrough",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Cardiff",
     "away": "Burnley",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Birmingham",
     "away": "Swansea",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T15:00:00Z",
     "home": "Arsenal",
     "away": "Hull City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T15:15:00Z",
     "home": "Espanyol",
     "away": "Deportivo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-07T15:30:00Z",
     "home": "CD Nacional",
     "away": "Acad. Viseu",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T15:30:00Z",
     "home": "Sittard",
     "away": "Telstar",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T17:00:00Z",
     "home": "Parma",
     "away": "Bologna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Nottingham",
     "away": "Man City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Osasuna",
     "away": "Athletic",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-07T17:30:00Z",
     "home": "Stuttgart",
     "away": "Bremen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T17:45:00Z",
     "home": "Den Haag",
     "away": "Sparta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-07T18:00:00Z",
     "home": "Alverca",
     "away": "Casa Pia",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-07T18:00:00Z",
     "home": "Auxerre",
     "away": "Paris FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-07T19:45:00Z",
     "home": "Roma",
     "away": "Sassuolo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-07T20:00:00Z",
     "home": "Valencia",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-07T20:00:00Z",
     "home": "Excelsior",
     "away": "Go Ahead",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-07T20:05:00Z",
     "home": "PSG",
     "away": "Troyes",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-07T20:30:00Z",
     "home": "Sporting CP",
     "away": "Moreirense",
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
     "played": 9,
     "pts": 24,
     "gd": 9
    },
    {
     "pos": 2,
     "team": "Man City",
     "played": 9,
     "pts": 21,
     "gd": 10
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
     "team": "Atleti",
     "played": 11,
     "pts": 28,
     "gd": 14
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 11,
     "pts": 27,
     "gd": 18
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
     "played": 10,
     "pts": 28,
     "gd": 16
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
     "played": 10,
     "pts": 20,
     "gd": 10
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
     "team": "Olympique Lyon",
     "played": 9,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Paris FC",
     "played": 9,
     "pts": 17,
     "gd": 6
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
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "FINISHED",
      "score": "2-0"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-07T15:00:00Z",
      "home": "Arsenal",
      "away": "Hull City",
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
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [
   {
    "home": "Atlanta Hawks",
    "away": "Washington Wizards",
    "score": "139-132",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Boston Celtics",
    "score": "80-119",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Philadelphia 76ers",
    "score": "119-95",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Utah Jazz",
    "score": "112-100",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Oklahoma City Thunder",
    "score": "97-128",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Toronto Raptors",
    "score": "107-121",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Minnesota Timberwolves",
    "score": "109-115",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Portland Trail Blazers",
    "score": "124-118",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "San Antonio Spurs",
    "score": "109-124",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Indiana Pacers",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-07T22:00:00Z"
   },
   {
    "home": "Atlanta Hawks",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-08T00:30:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-08T01:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-08T01:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-08T01:30:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-11-08T02:00:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-08T03:00:00Z"
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
     "kickoff_utc": "2026-11-07T21:00:00",
     "home": "Inter Miami",
     "away": "Charlotte FC",
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
     "title": "I had to play regularly for my mental wellbeing - Trafford on summer move",
     "published": "2026-11-07T07:27:40+00:00",
     "summary": "Leeds United's James Trafford opens up on his struggles at Manchester City last season that were behind his summer transfer."
    },
    {
     "ref": "bbc_football#1",
     "title": "Not playing at Man City 'horrendous' - Trafford",
     "published": "2026-11-07T07:16:37+00:00",
     "summary": "James Trafford says not playing for Manchester City last season was \"horrendous\" and left him with no choice but to leave the club and join Leeds United in the summer."
    },
    {
     "ref": "bbc_football#2",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-07T06:53:35+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#3",
     "title": "Non-league's greatest giant-killers eye another scalp",
     "published": "2026-11-07T06:45:56+00:00",
     "summary": "Non-league Altrincham aim to make Notts County number 18 on their list of FA Cup scalps, and breathe new life into their tag of English football's ultimate giant-killers."
    },
    {
     "ref": "bbc_football#4",
     "title": "England 'disappointment' fuels Dewsbury-Hall's Everton heroics",
     "published": "2026-11-06T23:53:06+00:00",
     "summary": "Kiernan Dewsbury-Hall responds to his England omission by scoring a stunning goal to inspire Everton's 3-1 comeback victory over Coventry City."
    },
    {
     "ref": "bbc_football#5",
     "title": "Leicester hold nerve to knock out sixth-tier Oxford City",
     "published": "2026-11-06T23:37:23+00:00",
     "summary": "League One side, and 2021 champions, Leicester City avoid an upset as they beat sixth-tier Oxford City 4-2 at the MGroup Stadium, to reach the second round of the FA Cup."
    },
    {
     "ref": "bbc_football#6",
     "title": "Bristol Rovers shock Cambridge United to reach round two",
     "published": "2026-11-06T23:26:39+00:00",
     "summary": "League Two side Bristol Rovers end a run of six matches without a win, as they shock League One side Cambridge United, beating them 2-0 at the Memorial Stadium, to reach the second round of the FA Cup."
    },
    {
     "ref": "bbc_football#7",
     "title": "Lampard feels hair pull should have led to Coventry penalty",
     "published": "2026-11-06T23:22:21+00:00",
     "summary": "Coventry had a trio of decisions go against them in defeat at Everton, with Frank Lampard suggesting a hair pull should have been a penalty."
    },
    {
     "ref": "bbc_football#8",
     "title": "'Big decisions' affected the game - Lampard",
     "published": "2026-11-06T22:40:58+00:00",
     "summary": "Coventry City head coach Frank Lampard is frustrated after three \"big decisions\" went against his side in their 3-1 defeat by Everton at the Hill Dickinson Stadium."
    },
    {
     "ref": "bbc_football#9",
     "title": "Not a good performance, but we got a result - Moyes",
     "published": "2026-11-06T22:40:56+00:00",
     "summary": "Everton manager David Moyes is pleased with his side's reaction to turn around a one goal deficit to win 3-1 against Coventry, but isn't pleased with their overall performance."
    },
    {
     "ref": "bbc_football#10",
     "title": "Barry scores twice as Everton fight back to beat Coventry",
     "published": "2026-11-06T22:30:12+00:00",
     "summary": "In-form Thierno Barry scores twice as Everton came from behind to beat Coventry as the Toffees move into fifth in the Premier League table."
    },
    {
     "ref": "bbc_football#11",
     "title": "Raith Rovers go top with Dunfermline draw",
     "published": "2026-11-06T22:06:01+00:00",
     "summary": "Watch highlights as Raith Rovers take over at the top of the Scottish Championship from Partick Thistle on goal difference, with visitors Dunfermline Athletic third on the same points as the Fife derby ends goalless."
    },
    {
     "ref": "bbc_football#12",
     "title": "Watch: Raith Rovers go top with Dunfermline draw",
     "published": "2026-11-06T22:06:01+00:00",
     "summary": "Watch highlights as Raith Rovers take over at the top of the Scottish Championship from Partick Thistle on goal difference, with visitors Dunfermline Athletic third on the same points as the Fife derby ends goalless."
    },
    {
     "ref": "bbc_football#13",
     "title": "Real Madrid and PSG keen on Suzuki - Saturday's gossip",
     "published": "2026-11-06T21:08:04+00:00",
     "summary": "Paris St-Germain and Real Madrid interested in Aston Villa keeper Zion Suzuki, Inter Milan weighing up move for Crystal Palace's Chris Richards, plus more."
    },
    {
     "ref": "bbc_football#14",
     "title": "Football Daily",
     "published": "2026-11-06T19:52:00+00:00",
     "summary": "John, Ian and Ali tell us what makes a good radio football summariser"
    },
    {
     "ref": "bbc_football#15",
     "title": "James out for minimum of five games - Bompastor",
     "published": "2026-11-06T16:44:44+00:00",
     "summary": "Sonia Bompastor says Lauren James is out for at least the next few weeks, casting doubt on her availability for England's World Cup qualifying play-off matches."
    },
    {
     "ref": "bbc_football#16",
     "title": "James out for minimum of five games - Bompastor",
     "published": "2026-11-06T16:44:44+00:00",
     "summary": "Sonia Bompastor says Lauren James is out for at least the next few weeks, casting doubt on her availability for England's World Cup qualifying play-off matches."
    },
    {
     "ref": "bbc_football#17",
     "title": "Is Palmer's England career over under Tuchel?",
     "published": "2026-11-06T16:30:03+00:00",
     "summary": "Cole Palmer faces a fight to save his England career after he was excluded from Thomas Tuchel's latest squad, says chief football writer Phil McNulty."
    },
    {
     "ref": "bbc_football#18",
     "title": "Euro Leagues",
     "published": "2026-11-06T16:00:00+00:00",
     "summary": "HJK assistant coach Erkka Lehtola ahead of a fascinating final weekend in Finland."
    },
    {
     "ref": "bbc_football#19",
     "title": "The Fifa hopeful hoping to take Infantino down with 'samurai spirit'",
     "published": "2026-11-06T15:21:40+00:00",
     "summary": "Gianni Infantino's first challenger for the presidency tells BBC Sport why he is standing in the election."
    },
    {
     "ref": "bbc_football#20",
     "title": "Portugal coach 'knew nothing' about Ronaldo retiring",
     "published": "2026-11-06T14:25:41+00:00",
     "summary": "Portugal coach Jorge Jesus says he \"found out when we all did\" about Cristiano Ronaldo's retirement from international football."
    },
    {
     "ref": "bbc_football#21",
     "title": "'A beautiful story' as Bellingham brothers called up",
     "published": "2026-11-06T14:16:34+00:00",
     "summary": "It may be a surprise to some but Jobe Bellingham's call up to the England senior side has been a long time coming."
    },
    {
     "ref": "bbc_football#22",
     "title": "Harborough sign 6ft 9in striker Hudlin before FA Cup tie",
     "published": "2026-11-06T13:54:50+00:00",
     "summary": "Non-league Harborough Town sign striker Kyle Hudlin, one of the world's tallest professional players, in time for their FA Cup trip to Leyton Orient."
    },
    {
     "ref": "bbc_football#23",
     "title": "Talking points as Premiership prepares for international break",
     "published": "2026-11-06T13:44:22+00:00",
     "summary": "Celtic and Hearts return to Scottish Premiership action with contrasting European fortunes, so what are the key talking points in the last fixtures before the November international break?"
    },
    {
     "ref": "bbc_football#24",
     "title": "Talking points as Premiership prepares for international break",
     "published": "2026-11-06T13:44:22+00:00",
     "summary": "Celtic and Hearts return to Scottish Premiership action with contrasting European fortunes, so what are the key talking points in the last fixtures before the November international break?"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami CF vs. Charlotte FC - Live Score - November 07, 2026 - FOX Sports",
     "published": "2026-11-07T08:13:18+00:00",
     "summary": "Inter Miami CF vs. Charlotte FC - Live Score - November 07, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Union’s Bruno Damiani gets Uruguay call; Malik Jakupovic to U17 World Cup - Scranton Times-Tribune",
     "published": "2026-11-07T08:01:48+00:00",
     "summary": "Union’s Bruno Damiani gets Uruguay call; Malik Jakupovic to U17 World Cup Scranton Times-Tribune"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "A trendsetter? Messi shows off a personalized bag PSG fans won't appreciate! - Dailysports",
     "published": "2026-11-07T07:18:32+00:00",
     "summary": "A trendsetter? Messi shows off a personalized bag PSG fans won't appreciate! Dailysports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi humiliates PSG?! One detail sparks controversy among football fans - Dailysports",
     "published": "2026-11-07T07:05:16+00:00",
     "summary": "Messi humiliates PSG?! One detail sparks controversy among football fans Dailysports"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi is close to setting another MLS record on Decision Day - Diario AS",
     "published": "2026-11-07T07:05:06+00:00",
     "summary": "Lionel Messi is close to setting another MLS record on Decision Day Diario AS"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Watch Inter Miami CF vs. Charlotte FC live today: Who is broadcasting the match on TV and via live stream? - Goal.com",
     "published": "2026-11-07T06:25:15+00:00",
     "summary": "Watch Inter Miami CF vs. Charlotte FC live today: Who is broadcasting the match on TV and via live stream? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Nashville SC strives for MLS history during visit to Cincinnati - Miami Herald",
     "published": "2026-11-07T03:04:55+00:00",
     "summary": "Nashville SC strives for MLS history during visit to Cincinnati Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi puts an end to rumors of leaving Inter Miami, Ronaldo to leave Al Nassr in 2027. - Vietnam.vn",
     "published": "2026-11-07T02:40:00+00:00",
     "summary": "Messi puts an end to rumors of leaving Inter Miami, Ronaldo to leave Al Nassr in 2027. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami vs Charlotte: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-07T02:14:10+00:00",
     "summary": "Inter Miami vs Charlotte: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi, Inter Miami chase No. 2 seed against Charlotte FC - Field Level Media",
     "published": "2026-11-07T02:13:42+00:00",
     "summary": "Lionel Messi, Inter Miami chase No. 2 seed against Charlotte FC Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami vs. Charlotte FC MLS Betting Odds, Picks: Herons heavy favourites in regular season finale - Sports Interaction",
     "published": "2026-11-07T00:16:06+00:00",
     "summary": "Inter Miami vs. Charlotte FC MLS Betting Odds, Picks: Herons heavy favourites in regular season finale Sports Interaction"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi’s Inter Miami confirm two absences for the regular season finale vs Charlotte - World Soccer Talk",
     "published": "2026-11-06T23:14:48+00:00",
     "summary": "Lionel Messi’s Inter Miami confirm two absences for the regular season finale vs Charlotte World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami vs Charlotte Hornets Prediction: The Hornets Are Not Easy Opponents - Even For Miami - Telecom Asia Sport",
     "published": "2026-11-06T22:59:33+00:00",
     "summary": "Inter Miami vs Charlotte Hornets Prediction: The Hornets Are Not Easy Opponents - Even For Miami Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi chases two unprecedented MLS records on the final day of the regular season - World Soccer Talk",
     "published": "2026-11-06T22:27:46+00:00",
     "summary": "Lionel Messi chases two unprecedented MLS records on the final day of the regular season World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MATCH PREVIEW: Inter Miami CF Closes Out 2026 MLS Regular Season with Home Game Against Charlotte FC - Inter Miami CF",
     "published": "2026-11-06T22:19:35+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Closes Out 2026 MLS Regular Season with Home Game Against Charlotte FC Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi settles his decision: will he move to the Argentine league? - Goal.com",
     "published": "2026-11-06T21:31:19+00:00",
     "summary": "Messi settles his decision: will he move to the Argentine league? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Revolution chase second place spot on decision day - Fall River Herald News",
     "published": "2026-11-06T20:55:00+00:00",
     "summary": "Revolution chase second place spot on decision day Fall River Herald News"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Bombshell in Argentina! Is Messi Leaving Inter Miami to Play for Newell's in 2027? - Soy Futbol",
     "published": "2026-11-06T20:25:09+00:00",
     "summary": "Bombshell in Argentina! Is Messi Leaving Inter Miami to Play for Newell's in 2027? Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi isn't planning to leave! Romano reveals the Argentine's plans beyond 2028 - Dailysports",
     "published": "2026-11-06T19:54:46+00:00",
     "summary": "Messi isn't planning to leave! Romano reveals the Argentine's plans beyond 2028 Dailysports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi makes final decision on Inter Miami future as Neymar reunion speculation intensifies - Goal.com",
     "published": "2026-11-06T19:03:49+00:00",
     "summary": "Lionel Messi makes final decision on Inter Miami future as Neymar reunion speculation intensifies Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi stance on potential loan switch to Argentine side comes to light: Reports - Sportskeeda",
     "published": "2026-11-06T18:46:00+00:00",
     "summary": "Lionel Messi stance on potential loan switch to Argentine side comes to light: Reports Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lil Durk’s Attorneys Slam Prosecutors Over Bond Package Pushback - HotNewHipHop",
     "published": "2026-11-06T18:43:45+00:00",
     "summary": "Lil Durk’s Attorneys Slam Prosecutors Over Bond Package Pushback HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi Not Considering Leaving Inter Miami For Newell's Old Boys - RealGM",
     "published": "2026-11-06T18:31:30+00:00",
     "summary": "Lionel Messi Not Considering Leaving Inter Miami For Newell's Old Boys RealGM"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Is Rodrigo De Paul Drifting Away from Argentina? Uncertainty Looms with Scaloni - Soy Futbol",
     "published": "2026-11-06T17:25:59+00:00",
     "summary": "Is Rodrigo De Paul Drifting Away from Argentina? Uncertainty Looms with Scaloni Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "The Levi’s® Brand and Inter Miami CF Team Up for a Collection Built for the Club and its Fans, Marking the Expansion of Their Multiyear Partnership - WebWire",
     "published": "2026-11-06T16:54:08+00:00",
     "summary": "The Levi’s® Brand and Inter Miami CF Team Up for a Collection Built for the Club and its Fans, Marking the Expansion of Their Multiyear Partnership WebWire"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija records 22 points, 11 assists vs. LAL - NBC Sports",
     "published": "2026-11-07T07:44:05+00:00",
     "summary": "Deni Avdija records 22 points, 11 assists vs. LAL NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet - Rip City Project",
     "published": "2026-11-07T07:22:10+00:00",
     "summary": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-11-07T06:16:38+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija gets the and-1 for the Trail Blazers - ESPN",
     "published": "2026-11-07T03:56:34+00:00",
     "summary": "Deni Avdija gets the and-1 for the Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Lakers 124-118 Trail Blazers (7 Nov, 2026) Play-by-Play - ESPN",
     "published": "2026-11-07T03:42:55+00:00",
     "summary": "Lakers 124-118 Trail Blazers (7 Nov, 2026) Play-by-Play ESPN"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija is at it again - Jewish Telegraphic Agency",
     "published": "2026-11-06T16:18:37+00:00",
     "summary": "Deni Avdija is at it again Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers - Rip City Project",
     "published": "2026-11-06T00:05:00+00:00",
     "summary": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-05T23:32:57+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start - Blazer's Edge",
     "published": "2026-11-05T21:02:47+00:00",
     "summary": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish - roundtable.io",
     "published": "2026-11-05T18:20:17+00:00",
     "summary": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ - Yahoo Sports",
     "published": "2026-11-05T17:39:50+00:00",
     "summary": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double against Suns - CBS Sports",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double against Suns CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija News: Teases triple-double against Suns - RotoWire",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Deni Avdija News: Teases triple-double against Suns RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija approaches a triple-double Wednesday night - FantasyPros",
     "published": "2026-11-05T14:59:31+00:00",
     "summary": "Deni Avdija approaches a triple-double Wednesday night FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists - SportsRation",
     "published": "2026-11-05T08:55:46+00:00",
     "summary": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Highlights (21 Points, 12 Assists) Trail Blazers 132, Suns 119 | Nov. 4, 2026 - NBA.com",
     "published": "2026-11-05T05:34:22+00:00",
     "summary": "Deni Avdija Highlights (21 Points, 12 Assists) Trail Blazers 132, Suns 119 | Nov. 4, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija with the And-1! - Yahoo Sports",
     "published": "2026-11-05T04:51:53+00:00",
     "summary": "Deni Avdija with the And-1! Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija’s 23.8-point, 6.2-rebound, 5.5-assist start is powering Portland Trail Blazers Vs Phoenix Suns Player Stats - شبكة تواصل الإخبارية",
     "published": "2026-11-05T04:45:41+00:00",
     "summary": "Deni Avdija’s 23.8-point, 6.2-rebound, 5.5-assist start is powering Portland Trail Blazers Vs Phoenix Suns Player Stats شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant - Fadeaway World",
     "published": "2026-11-04T18:23:06+00:00",
     "summary": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions - roundtable.io",
     "published": "2026-11-04T13:00:11+00:00",
     "summary": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Video - Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions - roundtable.io",
     "published": "2026-11-04T13:00:11+00:00",
     "summary": "Video - Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Blazers storm back to beat Nuggets, remain perfect on the road - Field Level Media",
     "published": "2026-11-04T08:53:14+00:00",
     "summary": "Blazers storm back to beat Nuggets, remain perfect on the road Field Level Media"
    }
   ]
  }
 ]
}
</input>