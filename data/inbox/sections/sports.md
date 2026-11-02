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
  "home": "New England Revolution",
  "away": "Inter Miami",
  "kickoff_utc": "2026-11-02T00:00:00"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "New York Knicks",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-03T00:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Denver Nuggets",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-03T02:00:00.000Z"
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
     "kickoff_utc": "2026-11-01T11:15:00Z",
     "home": "Zwolle",
     "away": "Den Haag",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T11:30:00Z",
     "home": "Como 1907",
     "away": "Venezia FC",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T13:00:00Z",
     "home": "Getafe",
     "away": "Sevilla FC",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T13:30:00Z",
     "home": "Telstar",
     "away": "Utrecht",
     "status": "FINISHED",
     "score": "4-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T13:30:00Z",
     "home": "Excelsior",
     "away": "Twente",
     "status": "FINISHED",
     "score": "0-9"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Frosinone",
     "away": "Torino",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Lazio",
     "away": "Cagliari",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T14:00:00Z",
     "home": "Strasbourg",
     "away": "Auxerre",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-01T14:30:00Z",
     "home": "Union Berlin",
     "away": "1. FC Köln",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T15:15:00Z",
     "home": "Santander",
     "away": "Real Madrid",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T15:30:00Z",
     "home": "Arouca",
     "away": "CD Nacional",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-01T15:45:00Z",
     "home": "Groningen",
     "away": "Sparta",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T16:15:00Z",
     "home": "Olympique Lyon",
     "away": "Angers SCO",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T16:15:00Z",
     "home": "Paris FC",
     "away": "Monaco",
     "status": "FINISHED",
     "score": "3-1"
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
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-01T16:30:00Z",
     "home": "Frankfurt",
     "away": "HSV",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T17:00:00Z",
     "home": "Lecce",
     "away": "Genoa",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T17:30:00Z",
     "home": "Elche",
     "away": "Valencia",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T18:00:00Z",
     "home": "Acad. Viseu",
     "away": "Rio Ave",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T18:00:00Z",
     "home": "Marítimo",
     "away": "Santa Clara",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-01T19:45:00Z",
     "home": "Juventus",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-01T19:45:00Z",
     "home": "Marseille",
     "away": "Toulouse",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-01T20:00:00Z",
     "home": "Athletic",
     "away": "Real Sociedad",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-01T20:30:00Z",
     "home": "Braga",
     "away": "Famalicão",
     "status": "FINISHED",
     "score": "3-0"
    }
   ],
   "today": [
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-02T17:30:00Z",
     "home": "Sassuolo",
     "away": "Fiorentina",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-02T19:45:00Z",
     "home": "Atalanta",
     "away": "Parma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-02T19:45:00Z",
     "home": "Lorient",
     "away": "Brest",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-02T20:00:00Z",
     "home": "Deportivo",
     "away": "Osasuna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-02T20:00:00Z",
     "home": "Newcastle",
     "away": "Everton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "Gil Vicente",
     "away": "Vitória SC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "SL Benfica",
     "away": "Alverca",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-02T23:00:00Z",
     "home": "Bragantino",
     "away": "Santos",
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
     "team": "Liverpool",
     "played": 9,
     "pts": 15,
     "gd": 2
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
     "played": 11,
     "pts": 17,
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
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-07T15:00:00Z",
      "home": "Arsenal",
      "away": "Hull City",
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
    "home": "Orlando Magic",
    "away": "Boston Celtics",
    "score": "97-108",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Brooklyn Nets",
    "score": "90-98",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "LA Clippers",
    "score": "124-112",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Toronto Raptors",
    "score": "131-125",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Cleveland Cavaliers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-03T00:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-03T00:30:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-03T00:30:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-03T00:30:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-03T00:30:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-03T00:30:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-11-03T01:00:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-03T01:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-03T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-03T01:30:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-03T01:30:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-03T02:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-03T03:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-03T03:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-03T03:00:00Z"
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
     "score": "1-2"
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
     "title": "Falkirk brick wall Bain boosts Scotland chances",
     "published": "2026-11-02T08:22:20+00:00",
     "summary": "Scott Bain proved unbeatable as he helped Falkirk defeat his former club, Celtic, just in time for the goalkeeper to push his case for inclusion in the latest Scotland squad."
    },
    {
     "ref": "bbc_football#1",
     "title": "Falkirk brick wall Bain boosts Scotland chances",
     "published": "2026-11-02T08:22:20+00:00",
     "summary": "Scott Bain proved unbeatable as he helped Falkirk defeat his former club, Celtic, just in time for the goalkeeper to push his case for inclusion in the latest Scotland squad."
    },
    {
     "ref": "bbc_football#2",
     "title": "Watch: Best of Scottish Championship & Leagues 1 & 2 action",
     "published": "2026-11-02T08:01:32+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#3",
     "title": "Listen: Derby delight for Hibs, fresh questions for Celtic",
     "published": "2026-11-02T08:00:00+00:00",
     "summary": "A huge weekend of League Cup drama and a significant twist in the Premiership title race."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Dundee Utd want permanent Cameron signing' - gossip",
     "published": "2026-11-02T07:50:54+00:00",
     "summary": "Dundee United are reportedly keen to keep Rangers' Lyall Cameron permanently, while Scott McKenna looks certain to miss Scotland's next Nations League games through injury."
    },
    {
     "ref": "bbc_football#5",
     "title": "No Grealish, no cry - the rise of Everton's youngsters",
     "published": "2026-11-02T07:19:35+00:00",
     "summary": "BBC Sport examines the growing influence of Everton's youngsters on their chances of success this season."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-02T06:24:40+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "The pathway promise: Why Scottish football is struggling to produce young talent",
     "published": "2026-11-02T06:05:57+00:00",
     "summary": "Scottish football is wrestling with a growing concern over the number of homegrown players who are making to the top of the game."
    },
    {
     "ref": "bbc_football#8",
     "title": "The pathway promise: Why Scottish football is struggling to produce young talent",
     "published": "2026-11-02T06:05:57+00:00",
     "summary": "Scottish football is wrestling with a growing concern over the number of homegrown players who are making to the top of the game."
    },
    {
     "ref": "bbc_football#9",
     "title": "Football Daily",
     "published": "2026-11-02T00:59:00+00:00",
     "summary": "Rick Edwards is joined by Luke Kempner to reflect on Arsenal’s 1-0 win at Anfield."
    },
    {
     "ref": "bbc_football#10",
     "title": "Rice is a rounded midfielder, but could be more selfish - Murphy",
     "published": "2026-11-02T00:00:21+00:00",
     "summary": "BBC Sport's Kelly Cates and Micah Richards discuss how rounded Declan Rice has become in Arsenal's midfield, while Danny Murphy argues that if he was more selfish he would score more goals."
    },
    {
     "ref": "bbc_football#11",
     "title": "'He's been fantastic' - how Konsa has fitted in seamlessly at Arsenal",
     "published": "2026-11-02T00:00:11+00:00",
     "summary": "BBC Sport's Kelly Cates, Danny Murphy and Micah Richards analyse how good Ezri Konsa has been for Arsenal after signing from Aston Villa in the summer, especially in their 1-0 Premier League win against Liverpool at Anfield."
    },
    {
     "ref": "bbc_football#12",
     "title": "Were Arsenal 'lucky' not to concede penalty at Liverpool?",
     "published": "2026-11-02T00:00:03+00:00",
     "summary": "BBC Sport's Kelly Cates, Danny Murphy and Micah Richards discuss Liverpool's denied penalty claim for a pull on Alexander Isak's shirt by Arsenal defender Jurrien Timber and whether the Reds can feel hard done by."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man Utd eye Barcelona's Balde - Monday's gossip",
     "published": "2026-11-01T23:00:21+00:00",
     "summary": "Alejandro Balde could leave Barcelona, sparking interest from Manchester United, Liverpool shortlist want Murillo and Nico Schlotterbeck, Real Madrid eye Bart Verbruggen, plus more."
    },
    {
     "ref": "bbc_football#14",
     "title": "Rice relishing title race 'anxiety' after win at Liverpool",
     "published": "2026-11-01T22:50:05+00:00",
     "summary": "Declan Rice joins BBC Sport's Kelly Cates, Danny Murphy and Micah Richards to analyse how Arsenal earned their first Premier League victory at Liverpool in 14 years."
    },
    {
     "ref": "bbc_football#15",
     "title": "I'll tell my players to dive in future - Iraola",
     "published": "2026-11-01T21:00:26+00:00",
     "summary": "Andoni Iraola says that he will tell his players to go down in future after Liverpool were denied a penalty in Sunday's defeat by Arsenal."
    },
    {
     "ref": "bbc_football#16",
     "title": "Warnock hid seizures from Liverpool as a youngster",
     "published": "2026-11-01T20:32:44+00:00",
     "summary": "Former Premier League footballer Stephen Warnock says he hid seizures from Liverpool as a youngster because he feared he would be released."
    },
    {
     "ref": "bbc_football#17",
     "title": "From Fleetwood embarrassment to 'magical' Anfield win 14 years in making",
     "published": "2026-11-01T20:16:46+00:00",
     "summary": "Arsenal bounce back from the low of defeat at League Two Fleetwood to secure their first win in 14 years at Anfield - and open up a three-point lead at the top of the Premier League."
    },
    {
     "ref": "bbc_football#18",
     "title": "Boy, 14, hands himself in to police over Bradley Lowery video",
     "published": "2026-11-01T20:15:52+00:00",
     "summary": "A 14-year-old has handed himself into West Midlands Police after Coventry City said they were investigating a video appearing to show a fan taunting Sunderland supporters with a picture of Bradley Lowery."
    },
    {
     "ref": "bbc_football#19",
     "title": "Arsenal move clear at the top with a rare win at Liverpool",
     "published": "2026-11-01T20:00:18+00:00",
     "summary": "Arsenal win at Anfield for the first time since 2012 to earn a three-point lead at the top of the Premier League table following an end-to-end match that leaves Liverpool frustrated to have taken nothing."
    },
    {
     "ref": "bbc_football#20",
     "title": "Watch: Falkirk v Celtic highlights on Sportscene",
     "published": "2026-11-01T19:45:11+00:00",
     "summary": "Extended highlights of Falkirk v Celtic, and a look back at Saturday's action."
    },
    {
     "ref": "bbc_football#21",
     "title": "'Everyone saw it' - Iraola confused by Isak penalty decision",
     "published": "2026-11-01T19:37:44+00:00",
     "summary": "Liverpool manager Andoni Iraola reacts to his side's defeat at home to league leaders Arsenal, saying he \"doesn't understand\" why Alexander Isak was not awarded a penalty."
    },
    {
     "ref": "bbc_football#22",
     "title": "Arteta credits Fleetwood loss for spirited win at Anfield",
     "published": "2026-11-01T19:21:49+00:00",
     "summary": "Arsenal manager Mikel Arteta believes their loss in the League Cup by Fleetwood spurred his side on to their first victory at Anfield in 14 years."
    },
    {
     "ref": "bbc_football#23",
     "title": "Giant curiosity Hibs finally liberated from Hearts sucker punch",
     "published": "2026-11-01T18:45:49+00:00",
     "summary": "Hibernian, for once, avoid late heartbreak to set up League Cup final with Rangers, writes Tom English."
    },
    {
     "ref": "bbc_football#24",
     "title": "Giant curiosity Hibs finally liberated from the sucker punch",
     "published": "2026-11-01T18:45:49+00:00",
     "summary": "Hibernian, for once, avoid late heartbreak to set up League Cup final with Rangers, writes Tom English."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi's latest moment of genius is why we'll never get bored watching him - Planet Football",
     "published": "2026-11-02T09:22:00+00:00",
     "summary": "Lionel Messi's latest moment of genius is why we'll never get bored watching him Planet Football"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Messi scores and assists in Inter Miami’s win over New England in the MLS (video) - صوت الإمارات",
     "published": "2026-11-02T09:20:04+00:00",
     "summary": "Messi scores and assists in Inter Miami’s win over New England in the MLS (video) صوت الإمارات"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "With a stunning goal: Messi leads Inter Miami to the CONCACAF Champions Cup - Goal.com",
     "published": "2026-11-02T09:19:22+00:00",
     "summary": "With a stunning goal: Messi leads Inter Miami to the CONCACAF Champions Cup Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "With a sensational goal: Messi leads Inter Miami to the CONCACAF Champions Cup | Goal.com India - Goal.com",
     "published": "2026-11-02T09:19:22+00:00",
     "summary": "With a sensational goal: Messi leads Inter Miami to the CONCACAF Champions Cup | Goal.com India Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "New England vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-02T09:19:07+00:00",
     "summary": "New England vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi reaches 937 career goals in Inter Miami 2-1 victory - The Sun Nigeria",
     "published": "2026-11-02T09:11:15+00:00",
     "summary": "Messi reaches 937 career goals in Inter Miami 2-1 victory The Sun Nigeria"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MLS: Lionel Messi Sends Inter Miami Second With 2-1 Win Over New England - Deccan Chronicle",
     "published": "2026-11-02T08:12:45+00:00",
     "summary": "MLS: Lionel Messi Sends Inter Miami Second With 2-1 Win Over New England Deccan Chronicle"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "How Many Goals Lionel Messi Needs to Catch Cristiano Ronaldo After Inter Miami Beat New England? - Heavy.com",
     "published": "2026-11-02T08:09:59+00:00",
     "summary": "How Many Goals Lionel Messi Needs to Catch Cristiano Ronaldo After Inter Miami Beat New England? Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Messi scores a stunning winner for Inter Miami in a moment of pure magic - Mundo Deportivo",
     "published": "2026-11-02T08:09:51+00:00",
     "summary": "Messi scores a stunning winner for Inter Miami in a moment of pure magic Mundo Deportivo"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi heroics lead Inter Miami to Champions Cup - MLSsoccer.com",
     "published": "2026-11-02T07:52:30+00:00",
     "summary": "Lionel Messi heroics lead Inter Miami to Champions Cup MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami Secures Crucial Win Following Record-Breaking Goal - BGNES",
     "published": "2026-11-02T07:46:05+00:00",
     "summary": "Inter Miami Secures Crucial Win Following Record-Breaking Goal BGNES"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi scores game-winner as Inter Miami edges Revs 2-1 - nashuatelegraph.com",
     "published": "2026-11-02T07:23:52+00:00",
     "summary": "Messi scores game-winner as Inter Miami edges Revs 2-1 nashuatelegraph.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi hits 937 career goals in Inter Miami 2-1 win - Punch Newspapers",
     "published": "2026-11-02T07:17:25+00:00",
     "summary": "Messi hits 937 career goals in Inter Miami 2-1 win Punch Newspapers"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi Scores As Inter Miami Beat New England, Seal Champions Cup Qualification - TVC News",
     "published": "2026-11-02T06:45:00+00:00",
     "summary": "Messi Scores As Inter Miami Beat New England, Seal Champions Cup Qualification TVC News"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi’s late goal lifts Inter Miami to second in MLS Eastern Conference - TheReport.live",
     "published": "2026-11-02T06:39:14+00:00",
     "summary": "Messi’s late goal lifts Inter Miami to second in MLS Eastern Conference TheReport.live"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi scores and assists as Inter Miami beat New England Revolution 2-1 - Telangana Today",
     "published": "2026-11-02T06:29:06+00:00",
     "summary": "Lionel Messi scores and assists as Inter Miami beat New England Revolution 2-1 Telangana Today"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi magic leads Inter Miami comeback against New England Revolution to secure 2027 Champions Cup berth - Goal.com",
     "published": "2026-11-02T05:26:40+00:00",
     "summary": "Lionel Messi magic leads Inter Miami comeback against New England Revolution to secure 2027 Champions Cup berth Goal.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi Scores Winner as Inter Miami Beats New England 2-1 - https://www.businesstimes-bd.com/",
     "published": "2026-11-02T05:11:50+00:00",
     "summary": "Messi Scores Winner as Inter Miami Beats New England 2-1 https://www.businesstimes-bd.com/"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "4 takeaways as Messi magic the difference in the Revolution’s 2-1 loss vs. Inter Miami - Boston.com",
     "published": "2026-11-02T04:09:41+00:00",
     "summary": "4 takeaways as Messi magic the difference in the Revolution’s 2-1 loss vs. Inter Miami Boston.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Aksi Brilian Messi Menangkan Inter Miami di Kandang New England - OneFootball",
     "published": "2026-11-02T04:01:26+00:00",
     "summary": "Aksi Brilian Messi Menangkan Inter Miami di Kandang New England OneFootball"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "New England Revolution vs Inter Miami Lineups - MLS 2025/26 - BeSoccer Livescore",
     "published": "2026-11-02T03:58:03+00:00",
     "summary": "New England Revolution vs Inter Miami Lineups - MLS 2025/26 BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami CF at New England Revolution - MLS Game Summary - Nov 01, 2026 - USA Today",
     "published": "2026-11-02T03:33:45+00:00",
     "summary": "Inter Miami CF at New England Revolution - MLS Game Summary - Nov 01, 2026 USA Today"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi's solo goal propels Inter Miami to second place in the MLS standings. - Vietnam.vn",
     "published": "2026-11-02T03:31:01+00:00",
     "summary": "Messi's solo goal propels Inter Miami to second place in the MLS standings. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi delivers game-winner as Inter Miami edges Revolution in front of 54,112 fans - MassLive.com",
     "published": "2026-11-02T03:24:00+00:00",
     "summary": "Messi delivers game-winner as Inter Miami edges Revolution in front of 54,112 fans MassLive.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi’s brilliance lifts Inter Miami over Revolution in Foxboro - Boston Herald",
     "published": "2026-11-02T03:20:09+00:00",
     "summary": "Lionel Messi’s brilliance lifts Inter Miami over Revolution in Foxboro Boston Herald"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "3 Winners, 2 Losers From Blazers' Big Win Over Jazz - Sports Illustrated",
     "published": "2026-11-02T02:00:00+00:00",
     "summary": "3 Winners, 2 Losers From Blazers' Big Win Over Jazz Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers crush Jazz, 112-90, despite Morant absence - Panay News",
     "published": "2026-11-01T16:42:00+00:00",
     "summary": "Blazers crush Jazz, 112-90, despite Morant absence Panay News"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija leads offense in Saturday's win over Jazz - FantasyPros",
     "published": "2026-11-01T13:35:00+00:00",
     "summary": "Deni Avdija leads offense in Saturday's win over Jazz FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Europeans in the NBA: Deni Avdija leads the way as Mario Hezonja makes his mark - basketballsphere.com",
     "published": "2026-11-01T07:56:57+00:00",
     "summary": "Europeans in the NBA: Deni Avdija leads the way as Mario Hezonja makes his mark basketballsphere.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers crush Jazz behind Avdija’s 24 points - TalkBasket.net",
     "published": "2026-11-01T06:56:15+00:00",
     "summary": "Trail Blazers crush Jazz behind Avdija’s 24 points TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "NBA: Trail Blazers bounce back, roll over Jazz - Inquirer.net",
     "published": "2026-11-01T06:49:24+00:00",
     "summary": "NBA: Trail Blazers bounce back, roll over Jazz Inquirer.net"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win - CBS Sports",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija News: Hits for game-high 24 in win - RotoWire",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Deni Avdija News: Hits for game-high 24 in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - NST Online",
     "published": "2026-11-01T00:29:35+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined NST Online"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers Play A Tune On The Jazz - Rip City Radio 620 Portland",
     "published": "2026-10-31T22:06:00+00:00",
     "summary": "Trail Blazers Play A Tune On The Jazz Rip City Radio 620 Portland"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 - NBA.com",
     "published": "2026-10-31T22:03:10+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-31T21:36:33+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija scores game-high 24 points vs. Utah - NBC Sports",
     "published": "2026-10-31T21:33:00+00:00",
     "summary": "Deni Avdija scores game-high 24 points vs. Utah NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers vs. Nuggets - Live Score - November 02, 2026 - FOX Sports",
     "published": "2026-10-31T20:09:45+00:00",
     "summary": "Trail Blazers vs. Nuggets - Live Score - November 02, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Trail Blazers 112-90 Jazz (31 Oct, 2026) Final Score - ESPN",
     "published": "2026-10-31T09:07:15+00:00",
     "summary": "Trail Blazers 112-90 Jazz (31 Oct, 2026) Final Score ESPN"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-10-31T01:59:28+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Ja Morant injury makes it clear Blazers need Point Deni back - Rip City Project",
     "published": "2026-10-30T19:59:33+00:00",
     "summary": "Ja Morant injury makes it clear Blazers need Point Deni back Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Ja Morant Injury Forces Blazers to Rethink Offense After 3-0 Start - roundtable.io",
     "published": "2026-10-30T19:50:26+00:00",
     "summary": "Ja Morant Injury Forces Blazers to Rethink Offense After 3-0 Start roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Strong start continues - CBS Sports",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Trail Blazers' Deni Avdija: Strong start continues CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija News: Strong start continues - RotoWire",
     "published": "2026-10-30T17:10:52+00:00",
     "summary": "Deni Avdija News: Strong start continues RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija leads Blazers in loss to Memphis - FantasyPros",
     "published": "2026-10-30T13:52:16+00:00",
     "summary": "Deni Avdija leads Blazers in loss to Memphis FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf - RealGM",
     "published": "2026-10-30T12:34:00+00:00",
     "summary": "Nets Exercise Options For Egor Demin, Drake Powell, Ben Saraf, Nolan Traore, Danny Wolf RealGM"
    }
   ]
  }
 ]
}
</input>