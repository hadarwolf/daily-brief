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
  "away": "Alavés",
  "kickoff_utc": "2026-10-31T20:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Utah Jazz",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-10-31T19:00:00.000Z"
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
     "kickoff_utc": "2026-10-30T00:30:00Z",
     "home": "Grêmio",
     "away": "Paranaense",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T18:00:00Z",
     "home": "Nice",
     "away": "Stade Rennais",
     "status": "FINISHED",
     "score": "5-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T18:00:00Z",
     "home": "Le Havre",
     "away": "PSG",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-30T19:30:00Z",
     "home": "Elversberg",
     "away": "Mainz",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-30T20:00:00Z",
     "home": "Sheffield Utd",
     "away": "Wrexham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-30T20:00:00Z",
     "home": "Villarreal",
     "away": "Espanyol",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T20:05:00Z",
     "home": "Lille",
     "away": "RC Lens",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-30T20:15:00Z",
     "home": "Casa Pia",
     "away": "Sporting CP",
     "status": "FINISHED",
     "score": "0-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-30T23:00:00Z",
     "home": "Corinthians",
     "away": "Mirassol",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Stoke",
     "away": "Preston NE",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Chelsea",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Norwich",
     "away": "Watford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T12:30:00Z",
     "home": "Lincoln City",
     "away": "Birmingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T13:00:00Z",
     "home": "Levante",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T14:00:00Z",
     "home": "Bologna",
     "away": "Monza",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "M'gladbach",
     "away": "SC Paderborn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Leverkusen",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Augsburg",
     "away": "Freiburg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Schalke",
     "away": "RB Leipzig",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T14:30:00Z",
     "home": "Bremen",
     "away": "Hoffenheim",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "West Ham",
     "away": "West Brom",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Burnley",
     "away": "Portsmouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Bournemouth",
     "away": "Leeds United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Brentford",
     "away": "Nottingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Southampton",
     "away": "QPR",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Middlesbrough",
     "away": "Charlton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Man City",
     "away": "Brighton Hove",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Swansea",
     "away": "Blackburn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Hull City",
     "away": "Ipswich Town",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Millwall",
     "away": "Derby County",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Coventry City",
     "away": "Sunderland",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Bolton",
     "away": "Bristol City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-31T15:00:00Z",
     "home": "Wolverhampton",
     "away": "Cardiff",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T15:15:00Z",
     "home": "Rayo Vallecano",
     "away": "Celta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-31T15:30:00Z",
     "home": "Moreirense",
     "away": "Amadora",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T15:30:00Z",
     "home": "Feyenoord",
     "away": "Sittard",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T17:00:00Z",
     "home": "Udinese",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Bayern",
     "away": "Dortmund",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Tottenham",
     "away": "Crystal Palace",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-31T17:30:00Z",
     "home": "Real Betis",
     "away": "Málaga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T17:45:00Z",
     "home": "PSV",
     "away": "Willem II",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T17:45:00Z",
     "home": "Heerenveen",
     "away": "NEC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-31T19:00:00Z",
     "home": "Coritiba",
     "away": "Vitória",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-31T19:45:00Z",
     "home": "Troyes",
     "away": "Le Mans",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-31T19:45:00Z",
     "home": "Milan",
     "away": "Inter",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Aston Villa",
     "away": "Fulham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Ajax",
     "away": "AZ",
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
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-31T20:00:00Z",
     "home": "Cambuur",
     "away": "Go Ahead",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-31T20:30:00Z",
     "home": "Porto",
     "away": "Estoril Praia",
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
     "played": 8,
     "pts": 16,
     "gd": 16
    },
    {
     "pos": 4,
     "team": "Liverpool",
     "played": 8,
     "pts": 15,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Chelsea",
     "played": 8,
     "pts": 13,
     "gd": 2
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 8,
     "pts": 11,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 10,
     "pts": 27,
     "gd": 29
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
     "played": 10,
     "pts": 24,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 10,
     "pts": 20,
     "gd": 2
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
     "played": 7,
     "pts": 17,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 7,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 7,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Elversberg",
     "played": 8,
     "pts": 13,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "RB Leipzig",
     "played": 7,
     "pts": 12,
     "gd": 9
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 9,
     "pts": 25,
     "gd": 15
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 9,
     "pts": 25,
     "gd": 15
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 9,
     "pts": 21,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 9,
     "pts": 20,
     "gd": 9
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 9,
     "pts": 18,
     "gd": 7
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
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "FINISHED",
      "score": "1-2"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
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
    "home": "Washington Wizards",
    "away": "Charlotte Hornets",
    "score": "95-79",
    "status": "Final"
   },
   {
    "home": "Boston Celtics",
    "away": "Chicago Bulls",
    "score": "125-111",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Detroit Pistons",
    "score": "94-110",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "New York Knicks",
    "score": "98-93",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Orlando Magic",
    "score": "114-121",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Indiana Pacers",
    "score": "145-125",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Houston Rockets",
    "score": "116-111",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "LA Clippers",
    "score": "127-101",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Los Angeles Lakers",
    "score": "112-95",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Denver Nuggets",
    "score": "120-127",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Utah Jazz",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-10-31T19:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-10-31T22:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-10-31T23:00:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-11-01T00:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-01T00:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-11-01T00:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-01T00:30:00Z"
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
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-31T06:54:52+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#1",
     "title": "AC Milan v Inter and the tale of an iconic image",
     "published": "2026-10-31T06:44:38+00:00",
     "summary": "AC Milan versus Inter will be shown live on the BBC on Saturday - this is the story of the fixture's most iconic image."
    },
    {
     "ref": "bbc_football#2",
     "title": "Shearer discusses scoring record, MOTD & a brush with Cardiff",
     "published": "2026-10-31T06:23:58+00:00",
     "summary": "Alan Shearer discusses his love of Newcastle, almost continuing his managerial career and swapping the pitch for the commentary box in The Football Interview."
    },
    {
     "ref": "bbc_football#3",
     "title": "Man Utd target Barcelona's Lopez - Saturday's gossip",
     "published": "2026-10-30T23:08:16+00:00",
     "summary": "Manchester United target Barcelona's Fermin Lopez, Lisandro Martinez is attracting interest from the La Liga side, Arsenal eye Club Brugge striker Nicolo Tresoldi, plus more."
    },
    {
     "ref": "bbc_football#4",
     "title": "Villa to sue Carragher over 'unacceptable insults'",
     "published": "2026-10-30T23:05:45+00:00",
     "summary": "Aston Villa say they will initiate legal action against Jamie Carragher over what the club branded as \"unacceptable insults\"."
    },
    {
     "ref": "bbc_football#5",
     "title": "From WiFi to 'relief' - how was Ferguson's Irish League debut?",
     "published": "2026-10-30T22:52:32+00:00",
     "summary": "After a 1-1 draw in his first match as Glentoran manager, Duncan Ferguson speaks of his \"relief\" in a week filled with WiFi and homework."
    },
    {
     "ref": "bbc_football#6",
     "title": "Can Robinson work Hampden magic against McInnes' Rangers?",
     "published": "2026-10-30T21:26:10+00:00",
     "summary": "Under-pressure Aberdeen manager Stephen Robinson has an excellent record in Hampden semi-finals. But is Saturday's meeting with Rangers a bridge too far?"
    },
    {
     "ref": "bbc_football#7",
     "title": "Can Robinson work Hampden magic against McInnes' Rangers?",
     "published": "2026-10-30T21:26:10+00:00",
     "summary": "Under-pressure Aberdeen manager Stephen Robinson has an excellent record in Hampden semi-finals. But is Saturday's meeting with Rangers a bridge too far?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Hearts & Hibs brace for 'all or nothing' semi-final",
     "published": "2026-10-30T18:26:20+00:00",
     "summary": "Hearts and Hibernian are braced for a winner-takes-all League Cup semi-final. But the Edinburgh rivals arrive at Hampden in very different moods."
    },
    {
     "ref": "bbc_football#9",
     "title": "Why has Caf abandoned plans to hold Afcon every four years?",
     "published": "2026-10-30T17:33:02+00:00",
     "summary": "The Africa Cup of Nations will remain on a two-year cycle after the Confederation of African Football performed a U-turn on a decision taken last December."
    },
    {
     "ref": "bbc_football#10",
     "title": "What Howe could bring to Man Utd - and what are the challenges?",
     "published": "2026-10-30T16:27:13+00:00",
     "summary": "Eddie Howe is being linked with the Manchester United job, but what are some of the considerations for him and the club?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Fears Chelsea's Lacroix could be out until January",
     "published": "2026-10-30T16:21:10+00:00",
     "summary": "Chelsea fear Maxence Lacroix will have a lengthy lay-off having suffered a serious hamstring injury."
    },
    {
     "ref": "bbc_football#12",
     "title": "Spurs' Maddison fit to face Palace - De Zerbi",
     "published": "2026-10-30T15:49:28+00:00",
     "summary": "Tottenham midfielder James Maddison is available to face Crystal Palace on Saturday says manager Roberto De Zerbi, despite an injury scare last week."
    },
    {
     "ref": "bbc_football#13",
     "title": "Arteta warns Dowman 'we are not in Disneyland' after red card",
     "published": "2026-10-30T15:41:43+00:00",
     "summary": "Mikel Arteta says \"we are not in Disneyland\" and that he will hold Max Dowman to the same standards as other first-team players after the teenager's red card against Fleetwood."
    },
    {
     "ref": "bbc_football#14",
     "title": "Items stolen from Man Utd Munich air disaster memorial",
     "published": "2026-10-30T15:03:12+00:00",
     "summary": "The foundation has urged the return of stolen items, saying they mean so much to bereaved families."
    },
    {
     "ref": "bbc_football#15",
     "title": "O'Neill agrees with McGregor about Celtic issues",
     "published": "2026-10-30T14:22:18+00:00",
     "summary": "Manager Martin O'Neill says he is in \"full agreement\" with captain Callum McGregor's assessment of Celtic's issues, but insisted they will \"sort it out\"."
    },
    {
     "ref": "bbc_football#16",
     "title": "O'Neill agrees with McGregor about Celtic issues",
     "published": "2026-10-30T14:22:18+00:00",
     "summary": "Manager Martin O'Neill says he is in \"full agreement\" with captain Callum McGregor's assessment of Celtic's issues, but insisted they will \"sort it out\"."
    },
    {
     "ref": "bbc_football#17",
     "title": "Britain's first £100m man facing defining moment",
     "published": "2026-10-30T13:42:15+00:00",
     "summary": "Is it 'now or never' for Jack Grealish after he was dropped by Everton for a breach of club discipline, asks chief football writer Phil McNulty?"
    },
    {
     "ref": "bbc_football#18",
     "title": "'I know how to motivate teams' - Robinson urges Aberdeen to seize Hampden chance",
     "published": "2026-10-30T13:10:06+00:00",
     "summary": "Saturday's Premier Sports Cup semi-final with Rangers would be the perfect place for Aberdeen to ease the tension of a disappointing start to the season, says head coach Stephen Robinson."
    },
    {
     "ref": "bbc_football#19",
     "title": "Forest Green launch £2m lawsuit over Savage approach",
     "published": "2026-10-30T12:18:28+00:00",
     "summary": "Forest Green chairman Dale Vince announces the club is taking legal action against Peterborough United following their approach for manager Robbie Savage."
    },
    {
     "ref": "bbc_football#20",
     "title": "Families v loyal fans - women's football's attendance dilemma",
     "published": "2026-10-30T11:07:04+00:00",
     "summary": "Average Women's Super League attendances surged by 192% in the season after the Lionesses' Euro 2022 triumph, but the boom has stalled."
    },
    {
     "ref": "bbc_football#21",
     "title": "How to follow the Premier League on the BBC this weekend",
     "published": "2026-10-30T10:50:44+00:00",
     "summary": "Our Ask Me Anything team explains how to follow matches from week nine of the Premier League season on the BBC this weekend."
    },
    {
     "ref": "bbc_football#22",
     "title": "Calvert-Lewin set for new Leeds deal",
     "published": "2026-10-30T10:26:53+00:00",
     "summary": "England striker Dominic Calvert-Lewin is set to sign a new contract at Leeds United."
    },
    {
     "ref": "bbc_football#23",
     "title": "Ronaldo closes in on 1,000th goal with hat-trick",
     "published": "2026-10-30T10:22:08+00:00",
     "summary": "Cristiano Ronaldo scores the 67th hat-trick of his career in Al-Nassr's 5-3 win against Al-Kholood in the Saudi Pro League."
    },
    {
     "ref": "bbc_football#24",
     "title": "Carrick says there are 'no issues' with captain Fernandes",
     "published": "2026-10-30T09:58:41+00:00",
     "summary": "Manchester United manager Michael Carrick says there are \"no issues\" with captain Bruno Fernandes after he was dropped from the team against Bournemouth."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Fabrizio Romano Confirms Lionel Messi’s Future Amid Inter Miami Exit Talk - Heavy.com",
     "published": "2026-10-31T07:33:55+00:00",
     "summary": "Fabrizio Romano Confirms Lionel Messi’s Future Amid Inter Miami Exit Talk Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Will Lionel Messi Play Today for Inter Miami vs. New England? MLS Decision Explained - Heavy.com",
     "published": "2026-10-31T07:25:48+00:00",
     "summary": "Will Lionel Messi Play Today for Inter Miami vs. New England? MLS Decision Explained Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "New England Revolution aim to extend win streak in matchup with Inter Miami - FOX Sports",
     "published": "2026-10-31T06:03:45+00:00",
     "summary": "New England Revolution aim to extend win streak in matchup with Inter Miami FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami Adidas Jersey - khorasantimes.com",
     "published": "2026-10-31T03:45:49+00:00",
     "summary": "Inter Miami Adidas Jersey khorasantimes.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Prediction New England vs Inter Miami: analysis, odds and betting tips - BetMines",
     "published": "2026-10-31T03:45:17+00:00",
     "summary": "Prediction New England vs Inter Miami: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) - revolutionsoccer.net",
     "published": "2026-10-31T03:40:17+00:00",
     "summary": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums - RealGM",
     "published": "2026-10-31T02:58:55+00:00",
     "summary": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums RealGM"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Utah 5-year-old with Down syndrome walks Messi on the field, scores goals with Beckham - KSL News",
     "published": "2026-10-31T01:12:37+00:00",
     "summary": "Utah 5-year-old with Down syndrome walks Messi on the field, scores goals with Beckham KSL News"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami Receive Classic U.S. Honor, but Without Lionel Messi - Heavy.com",
     "published": "2026-10-30T23:32:50+00:00",
     "summary": "Inter Miami Receive Classic U.S. Honor, but Without Lionel Messi Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Turner previews Miami | \"We've been up to the task for those really intense moments\" - revolutionsoccer.net",
     "published": "2026-10-30T21:40:18+00:00",
     "summary": "Turner previews Miami | \"We've been up to the task for those really intense moments\" revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "New England Revolution evolve into MLS Cup contender: \"Never satisfied\" - MLSsoccer.com",
     "published": "2026-10-30T21:37:53+00:00",
     "summary": "New England Revolution evolve into MLS Cup contender: \"Never satisfied\" MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "FC Cincinnati seeks playoff clincher when it hosts Philadelphia - Miami Herald",
     "published": "2026-10-30T20:31:07+00:00",
     "summary": "FC Cincinnati seeks playoff clincher when it hosts Philadelphia Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "The Rondo: Can Lionel Messi and Inter Miami repeat as champions? Will Nashville fall short? Are Cavan Sullivan, Julian Hall and the kids taking over MLS? - Goal.com",
     "published": "2026-10-30T20:23:08+00:00",
     "summary": "The Rondo: Can Lionel Messi and Inter Miami repeat as champions? Will Nashville fall short? Are Cavan Sullivan, Julian Hall and the kids taking over MLS? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Why was Lionel Messi not banned for his fifth MLS yellow card? A unique rule helped him - The New York Times",
     "published": "2026-10-30T20:02:23+00:00",
     "summary": "Why was Lionel Messi not banned for his fifth MLS yellow card? A unique rule helped him The New York Times"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Preview | Revs close regular season home slate against Inter Miami CF on Sunday night - revolutionsoccer.net",
     "published": "2026-10-30T19:38:47+00:00",
     "summary": "Preview | Revs close regular season home slate against Inter Miami CF on Sunday night revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Real Madrid Had a Chance to Sign Lionel Messi - Heavy.com",
     "published": "2026-10-30T19:00:42+00:00",
     "summary": "Real Madrid Had a Chance to Sign Lionel Messi Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "New England Revolution vs. Inter Miami: Lineups, Stats, Schedule, and How to Watch - news.bet365.com",
     "published": "2026-10-30T18:30:27+00:00",
     "summary": "New England Revolution vs. Inter Miami: Lineups, Stats, Schedule, and How to Watch news.bet365.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi could extend his Inter Miami contract beyond 2028 despite reports of a return to Argentina - World Soccer Talk",
     "published": "2026-10-30T17:15:30+00:00",
     "summary": "Lionel Messi could extend his Inter Miami contract beyond 2028 despite reports of a return to Argentina World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Cristiano Ronaldo Hits 8 Hat-Tricks with Al-Nassr and Doubles Messi’s Tally at Inter Miami: How Many Does the Argentine Have? - Soy Futbol",
     "published": "2026-10-30T16:26:04+00:00",
     "summary": "Cristiano Ronaldo Hits 8 Hat-Tricks with Al-Nassr and Doubles Messi’s Tally at Inter Miami: How Many Does the Argentine Have? Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "No, Messi Isn’t Coming to Newell’s—And He Might Just Stick Around in Miami: Will He Stay in the USA? - Soy Futbol",
     "published": "2026-10-30T16:25:54+00:00",
     "summary": "No, Messi Isn’t Coming to Newell’s—And He Might Just Stick Around in Miami: Will He Stay in the USA? Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi has no Newell's talks and wants to stay at Inter Miami until 2028, maybe longer - https://www.footballmuse.com/",
     "published": "2026-10-30T16:14:00+00:00",
     "summary": "Lionel Messi has no Newell's talks and wants to stay at Inter Miami until 2028, maybe longer https://www.footballmuse.com/"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi reaches five yellows, but won't be banned: how MLS works - Yahoo Sports",
     "published": "2026-10-30T16:04:00+00:00",
     "summary": "Messi reaches five yellows, but won't be banned: how MLS works Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Fifth yellow, no ban: Curious MLS rule saves Messi - The Daily Star",
     "published": "2026-10-30T15:27:49+00:00",
     "summary": "Fifth yellow, no ban: Curious MLS rule saves Messi The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "‘At Least’—Lionel Messi’s Future Takes New Twist Amid Shock Inter Miami Exit Talk - Sports Illustrated",
     "published": "2026-10-30T15:15:00+00:00",
     "summary": "‘At Least’—Lionel Messi’s Future Takes New Twist Amid Shock Inter Miami Exit Talk Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "New England Revolution vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 - Khel Now",
     "published": "2026-10-30T15:00:00+00:00",
     "summary": "New England Revolution vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 Khel Now"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-31T04:13:18+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-10-31T01:59:29+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Blazers vs. Jazz Game Preview: Portland Looks to Bounce Back Despite Morant Injury - Sports Illustrated",
     "published": "2026-10-31T01:00:01+00:00",
     "summary": "Blazers vs. Jazz Game Preview: Portland Looks to Bounce Back Despite Morant Injury Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Ja Morant injury makes it clear Blazers need Point Deni back - Rip City Project",
     "published": "2026-10-30T19:59:33+00:00",
     "summary": "Ja Morant injury makes it clear Blazers need Point Deni back Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Ja Morant Injury Forces Blazers to Rethink Offense After 3-0 Start - roundtable.io",
     "published": "2026-10-30T19:50:26+00:00",
     "summary": "Ja Morant Injury Forces Blazers to Rethink Offense After 3-0 Start roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers' Deni Avdija: Strong start continues - CBS Sports",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Trail Blazers' Deni Avdija: Strong start continues CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija News: Strong start continues - RotoWire",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Deni Avdija News: Strong start continues RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Nets exercise Egor Demin and four others’ options - TalkBasket.net",
     "published": "2026-10-30T17:04:40+00:00",
     "summary": "Nets exercise Egor Demin and four others’ options TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija leads Blazers in loss to Memphis - FantasyPros",
     "published": "2026-10-30T13:52:16+00:00",
     "summary": "Deni Avdija leads Blazers in loss to Memphis FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blazers Loss to Grizzlies a Learning Experience on Team Ball - Yahoo Sports",
     "published": "2026-10-30T13:00:07+00:00",
     "summary": "Blazers Loss to Grizzlies a Learning Experience on Team Ball Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf - RealGM",
     "published": "2026-10-30T12:34:00+00:00",
     "summary": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf RealGM"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks - Hoops Wire",
     "published": "2026-10-30T07:38:51+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Nets pick up 2027-28 options on five young players - TalkBasket.net",
     "published": "2026-10-30T07:25:39+00:00",
     "summary": "Nets pick up 2027-28 options on five young players TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season - Ynetnews",
     "published": "2026-10-30T06:19:28+00:00",
     "summary": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija Postgame Interview | Portland Trail Blazers 103, Memphis Grizzlies 124 | Oct. 29, 2026 - NBA.com",
     "published": "2026-10-30T06:05:19+00:00",
     "summary": "Deni Avdija Postgame Interview | Portland Trail Blazers 103, Memphis Grizzlies 124 | Oct. 29, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Grizzlies 124-103 Trail Blazers (30 Oct, 2026) Final Score - ESPN Singapore",
     "published": "2026-10-30T05:54:27+00:00",
     "summary": "Grizzlies 124-103 Trail Blazers (30 Oct, 2026) Final Score ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Blazers Suffer First Loss of Season in Blowout Against Grizzlies - roundtable.io",
     "published": "2026-10-30T05:49:58+00:00",
     "summary": "Blazers Suffer First Loss of Season in Blowout Against Grizzlies roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "NBA: Cameron Boozer tallies first triple-double, Grizzlies remain unbeaten - GMA Network",
     "published": "2026-10-30T05:13:01+00:00",
     "summary": "NBA: Cameron Boozer tallies first triple-double, Grizzlies remain unbeaten GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Trail Blazers fall to Memphis, suffer first loss of season - KATU",
     "published": "2026-10-30T05:11:27+00:00",
     "summary": "Trail Blazers fall to Memphis, suffer first loss of season KATU"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Portland Trail Blazers vs. Memphis Grizzlies: Oct. 29, 2026 - OregonLive.com",
     "published": "2026-10-30T04:55:46+00:00",
     "summary": "Portland Trail Blazers vs. Memphis Grizzlies: Oct. 29, 2026 OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija puts up 24/9/7 line in loss to Memphis - NBC Sports",
     "published": "2026-10-30T04:38:44+00:00",
     "summary": "Deni Avdija puts up 24/9/7 line in loss to Memphis NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "NBA Roundup: Iisalo, Grizzlies stay perfect, Sabonis passes Divac - Eurohoops",
     "published": "2026-10-30T04:36:00+00:00",
     "summary": "NBA Roundup: Iisalo, Grizzlies stay perfect, Sabonis passes Divac Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija with the And-1!, 10/29/2026 - Yahoo Sports",
     "published": "2026-10-30T04:31:22+00:00",
     "summary": "Deni Avdija with the And-1!, 10/29/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies - Sports Illustrated",
     "published": "2026-10-30T04:24:46+00:00",
     "summary": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Should I Trade Ben Saraf for Johnny Furphy? | Fantasy Basketball - FantasyPros",
     "published": "2026-10-30T02:18:27+00:00",
     "summary": "Should I Trade Ben Saraf for Johnny Furphy? | Fantasy Basketball FantasyPros"
    }
   ]
  }
 ]
}
</input>