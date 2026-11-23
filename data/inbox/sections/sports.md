Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Philadelphia 76ers",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-24T00:00:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Minnesota Timberwolves",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-24T00:30:00.000Z"
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
     "kickoff_utc": "2026-11-22T00:00:00Z",
     "home": "Chapecoense",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T11:15:00Z",
     "home": "Twente",
     "away": "Willem II",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T11:30:00Z",
     "home": "Juventus",
     "away": "Venezia FC",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-22T12:00:00Z",
     "home": "Burnley",
     "away": "Blackburn",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T13:00:00Z",
     "home": "Barça",
     "away": "Villarreal",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T13:30:00Z",
     "home": "Ajax",
     "away": "Den Haag",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T13:30:00Z",
     "home": "Sparta",
     "away": "AZ",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Hull City",
     "away": "Brighton Hove",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Bologna",
     "away": "Udinese",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Sassuolo",
     "away": "Genoa",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T14:00:00Z",
     "home": "Paris FC",
     "away": "Angers SCO",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-22T14:30:00Z",
     "home": "Augsburg",
     "away": "Mainz",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T15:15:00Z",
     "home": "Santander",
     "away": "Real Sociedad",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-22T15:45:00Z",
     "home": "Go Ahead",
     "away": "Sittard",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T16:15:00Z",
     "home": "Lorient",
     "away": "Stade Rennais",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-22T16:30:00Z",
     "home": "Bremen",
     "away": "HSV",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-22T16:30:00Z",
     "home": "Liverpool",
     "away": "Man United",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T17:00:00Z",
     "home": "Milan",
     "away": "Frosinone",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T17:30:00Z",
     "home": "Osasuna",
     "away": "Málaga",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T19:00:00Z",
     "home": "Paranaense",
     "away": "Clube do Remo",
     "status": "FINISHED",
     "score": "4-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-22T19:45:00Z",
     "home": "Atalanta",
     "away": "Inter",
     "status": "FINISHED",
     "score": "4-4"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-22T19:45:00Z",
     "home": "Marseille",
     "away": "Le Mans",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-22T20:00:00Z",
     "home": "Getafe",
     "away": "Atleti",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T21:30:00Z",
     "home": "Fluminense",
     "away": "Mirassol",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-22T22:30:00Z",
     "home": "Bragantino",
     "away": "Vasco da Gama",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-23T19:45:00Z",
     "home": "Monza",
     "away": "Fiorentina",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-23T20:00:00Z",
     "home": "Levante",
     "away": "Elche",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-23T20:00:00Z",
     "home": "Brentford",
     "away": "Everton",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-23T22:30:00Z",
     "home": "Internacional",
     "away": "Vitória",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-23T23:00:00Z",
     "home": "Botafogo",
     "away": "São Paulo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-24T00:00:00Z",
     "home": "Santos",
     "away": "Grêmio",
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
     "team": "Leeds United",
     "played": 11,
     "pts": 17,
     "gd": 5
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
     "team": "Sevilla FC",
     "played": 13,
     "pts": 19,
     "gd": -2
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
     "played": 10,
     "pts": 18,
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
     "played": 11,
     "pts": 23,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 11,
     "pts": 21,
     "gd": 6
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 11,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Marseille",
     "played": 11,
     "pts": 18,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Brest",
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
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
    "away": "Detroit Pistons",
    "score": "107-97",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Oklahoma City Thunder",
    "score": "123-113",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Orlando Magic",
    "score": "116-96",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "Denver Nuggets",
    "score": "145-151",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Dallas Mavericks",
    "score": "114-116",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Indiana Pacers",
    "score": "113-106",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Boston Celtics",
    "score": "88-87",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Charlotte Hornets",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-24T00:00:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-24T00:00:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-24T00:30:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-24T00:30:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-24T00:30:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-24T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-24T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-24T01:30:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-24T03:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-24T03:00:00Z"
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
     "title": "Which Premier League players are set for yellow card suspensions?",
     "published": "2026-11-23T10:36:38+00:00",
     "summary": "Eighteen players are on the brink of a one-match ban in the 2026-27 Premier League season."
    },
    {
     "ref": "bbc_football#1",
     "title": "Every goal from the Women's Super League - matchweek 11",
     "published": "2026-11-23T09:34:52+00:00",
     "summary": "Watch all the goals from matchweek 11 in the WSL, including Annabelle Blanchard's delightful volley against London City Lionesses and Lee Geum-Min's thumping finish for Birmingham City."
    },
    {
     "ref": "bbc_football#2",
     "title": "Pioneer or coach-eater? The complex world of Pozzo's Watford",
     "published": "2026-11-23T08:55:36+00:00",
     "summary": "Pioneering or problematic? Why Gino Pozzo's 14-year Watford ownership is at a crossroads as the club search for their 26th managerial appointment on his watch."
    },
    {
     "ref": "bbc_football#3",
     "title": "Holloway sacked by Swindon after two seasons",
     "published": "2026-11-23T08:44:53+00:00",
     "summary": "Swindon sack manager Ian Holloway following their poor start to the League Two season."
    },
    {
     "ref": "bbc_football#4",
     "title": "Watch highlights of the weekend's SPFL action",
     "published": "2026-11-23T08:14:17+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#5",
     "title": "Rangers plan January exit for Cifuentes - gossip",
     "published": "2026-11-23T08:09:49+00:00",
     "summary": "Rangers plan January exit for midfielder as Hibs captain speaks of \"shame\" after 4-0 home loss."
    },
    {
     "ref": "bbc_football#6",
     "title": "Three years on NI Women finally have friendlies again",
     "published": "2026-11-23T08:06:02+00:00",
     "summary": "Michael McArdle tells BBC Sport NI of the importance of Northern Ireland having a double-header of friendlies against Greece, three and a half years on from NI's last friendly game."
    },
    {
     "ref": "bbc_football#7",
     "title": "Three years on NI Women finally have friendlies again",
     "published": "2026-11-23T08:06:02+00:00",
     "summary": "Michael McArdle tells BBC Sport NI of the importance of Northern Ireland having a double-header of friendlies against Greece, three and a half years on from NI's last friendly game."
    },
    {
     "ref": "bbc_football#8",
     "title": "Listen: An all-action Premiership weekend in review",
     "published": "2026-11-23T08:00:00+00:00",
     "summary": "Hearts run riot at Dens, Dundee Utd dismantle Hibs and Frick's off to a flier at Aberdeen."
    },
    {
     "ref": "bbc_football#9",
     "title": "'Our Super Bowl moment' - what can WSL learn from booming US league?",
     "published": "2026-11-23T07:52:55+00:00",
     "summary": "The National Women's Soccer League in the USA is booming, so what is it getting right - and what can the Women's Super League learn?"
    },
    {
     "ref": "bbc_football#10",
     "title": "'Our Super Bowl moment' - what can WSL learn from booming US league?",
     "published": "2026-11-23T07:52:55+00:00",
     "summary": "The National Women's Soccer League in the USA is booming, so what is it getting right - and what can the Women's Super League learn?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-23T06:31:21+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#12",
     "title": "One of football's most-hyped 16-year-olds - what next for JJ Gabriel?",
     "published": "2026-11-23T06:17:59+00:00",
     "summary": "BBC Sport looks at why JJ Gabriel's move from Manchester United to Real Madrid has caused such a stir."
    },
    {
     "ref": "bbc_football#13",
     "title": "Did Liverpool 'get lucky' with red card decision?",
     "published": "2026-11-22T23:59:59+00:00",
     "summary": "Match of the Day pundits Danny Murphy and Ashley Young believe that Liverpool were perhaps \"lucky\" when Manchester United's Leny Yoro was sent off in the 8th-minute at Anfield."
    },
    {
     "ref": "bbc_football#14",
     "title": "How 'outstanding' Tzolakis kept Brighton at bay",
     "published": "2026-11-22T23:59:57+00:00",
     "summary": "Match of the Day pundit Danny Murphy looks at how Hull goalkeeper Konstantinos Tzolakis was able to thwart high-flying Brighton in their 2-0 win over the Seagulls at the MKM Stadium."
    },
    {
     "ref": "bbc_football#15",
     "title": "A 'wow' player - why Ngumoha is already a Liverpool game-changer",
     "published": "2026-11-22T23:20:16+00:00",
     "summary": "Match of the Day pundit Danny Murphy explains how Rio Ngumoha showed everyone what he is capable of in Liverpool's 4-0 win over Manchester United."
    },
    {
     "ref": "bbc_football#16",
     "title": "Football Daily",
     "published": "2026-11-22T23:14:00+00:00",
     "summary": "Dale Johnson & Umir Irfan join Rick & Lloyd after Man Utd’s 4-0 defeat at Liverpool."
    },
    {
     "ref": "bbc_football#17",
     "title": "Fifa to confirm UK as host for 2035 Women's World Cup",
     "published": "2026-11-22T21:44:37+00:00",
     "summary": "Fifa is set to confirm on Monday that a first football World Cup will be hosted in the United Kingdom since 1966."
    },
    {
     "ref": "bbc_football#18",
     "title": "Fifa to confirm Scotland as 2035 Women's World Cup co-hosts",
     "published": "2026-11-22T21:44:37+00:00",
     "summary": "Fifa is set to confirm on Monday that a first football World Cup will be hosted in the United Kingdom since 1966."
    },
    {
     "ref": "bbc_football#19",
     "title": "Fifa to confirm UK as host for 2035 Women's World Cup",
     "published": "2026-11-22T21:44:37+00:00",
     "summary": "Fifa is set to confirm on Monday that a first football World Cup will be hosted in the United Kingdom since 1966."
    },
    {
     "ref": "bbc_football#20",
     "title": "'World's best could've lost 4-0' - but should Man Utd have done more at Anfield?",
     "published": "2026-11-22T21:36:00+00:00",
     "summary": "Mauricio Pochettino believes even the best team in the world could have conceded four goals at Liverpool in Manchester United's circumstances - but should the Red Devils have done more in defeat?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Chaotic week, nightmare start and huge reality check for Pochettino",
     "published": "2026-11-22T21:22:10+00:00",
     "summary": "Mauricio Pochettino's reign as Manchester United boss could barely have got off to a more chastening start, writes Simon Stone."
    },
    {
     "ref": "bbc_football#22",
     "title": "Pepe did not injure eyes staring at sun, say Villarreal",
     "published": "2026-11-22T21:04:55+00:00",
     "summary": "Villarreal say reports striker Nicolas Pepe needed eye surgery because he stared directly at the solar eclipse are \"completely false\"."
    },
    {
     "ref": "bbc_football#23",
     "title": "Man Utd plotting Toney move - Monday's gossip",
     "published": "2026-11-22T21:04:15+00:00",
     "summary": "Manchester United eye move for Al-Ahli striker Ivan Toney, Fulham hold contract talks with Calvin Bassey and PSG could step up pursuit of Eli Junior Kroupi."
    },
    {
     "ref": "bbc_football#24",
     "title": "McBurnie stoppage-time double earns Hull win over 10-man Brighton",
     "published": "2026-11-22T19:59:38+00:00",
     "summary": "Oli McBurnie's stoppage-time double earns victory for Hull City against second-placed Brighton in the Premier League."
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Vocal Green swats back at online critics, fuels Warriors' victory over Celtics",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "After reinforcing his career​ accolades earlier in the day on social media, Golden State Warriors forward Draymond Green closed out an 88-87 win over the Boston Celtics on Sunday with a last-second defensive stop and rousing celebration from the veteran."
    },
    {
     "ref": "espn_nba#1",
     "title": "With Giannis out, Adebayo authors triple-double in Heat's win over Thunder",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "In a game that did not feature Oklahoma City's Shai Gilgeous-Alexander or Miami's Giannis Antetokounmpo, Bam Adebayo swiped the spotlight, scoring 24 points en route to a triple-double, as the surging Heat defeated the Thunder 123-113 on Sunday night."
    },
    {
     "ref": "espn_nba#2",
     "title": "Sources: Kings set to boost backcourt depth with Vincent signing",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "Gabe Vincent is finalizing a deal with the Kings to fill their 15th roster spot, league sources told ESPN's Shams Charania."
    },
    {
     "ref": "espn_nba#3",
     "title": "Bulls G Powell sidelined by hamstring injury, to be checked later in week",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "Bulls guard Norman Powell was ruled out against the Nuggets and will be reevaluated later in the week because of a mild right hamstring strain."
    },
    {
     "ref": "espn_nba#4",
     "title": "Wemby makes history in 18 minutes, finishes game with 50 points",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "Victor Wembanyama had his third career 50-point outing during a win over the Pelicans to go along with 19 rebounds, five blocks and four steals."
    },
    {
     "ref": "espn_nba#5",
     "title": "Bridges shakes off slump, hits buzzer-beating 3 to save Knicks from collapse",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "Mired in a shooting slump, Mikal Bridges delivered a buzzer-beating 3-pointer to lift the Knicks past the Trail Blazers after they squandered a 26-point lead."
    },
    {
     "ref": "espn_nba#6",
     "title": "👀 What the first month has revealed about all 30 teams",
     "published": "2026-11-23T06:19:33+00:00",
     "summary": "With the season's first month nearly in the books, Ben Golliver examines the biggest storyline so far for all 30 teams."
    },
    {
     "ref": "espn_nba#7",
     "title": "What NBA insiders see from Boozer, Dybantsa and seven other top rookies",
     "published": "2026-11-23T02:59:41+00:00",
     "summary": "How has the first month unfolded for nine first-year stars? Brian Windhorst and Tim MacMahon canvass the league."
    },
    {
     "ref": "espn_nba#8",
     "title": "How a season without their 'admiral' showed the Rockets what they were missing",
     "published": "2026-11-22T22:16:49+00:00",
     "summary": "A healthy Fred VanVleet is commanding the surging Rockets after an ACL injury derailed his 2025-26 season. Here's why he's so important."
    },
    {
     "ref": "espn_nba#9",
     "title": "Has Nikola Jokic been overtaken as the top player in fantasy basketball?",
     "published": "2026-11-22T16:37:10+00:00",
     "summary": "Nikola Jokic's numbers are down from his typical norm, but has he been passed by Wemby or Luka as the top player in fantasy?"
    },
    {
     "ref": "espn_nba#10",
     "title": "Sunday's fantasy basketball adds and NBA bets",
     "published": "2026-11-22T16:37:10+00:00",
     "summary": "Jim McCormick breaks down Sunday's NBA slate, highlighting the fantasy streamers to add and bets to make."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Boca Juniors win Copa Sudamericana, but can they keep budding stars?",
     "published": "2026-11-23T10:04:40+00:00",
     "summary": "Boca Juniors had gone almost 20 years without a continental trophy. That ended on Saturday with success in the Copa Sudamericana, but an exodus could follow."
    },
    {
     "ref": "espn_soccer#1",
     "title": "Leandro Paredes faints during post-match interview after Boca Juniors triumph",
     "published": "2026-11-23T10:04:40+00:00",
     "summary": "Boca Juniors captain Leandro Paredes thanked fans for their well wishes after he fainted during a post-match interview following his team's Copa Sudamericana final triumph over Atlético Mineiro."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Cincinnati stuns Shield-winners Nashville to start best-of-3 series",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Roman Celentano made six saves for his fourth clean sheet of the season as FC Cincinnati took advantage of an early own goal to earn a 1-0 victory over Nashville SC on Sunday."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Poch blames 'circumstances' in painful Man United loss to Liverpool",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Mauricio Pochettino called for understanding of the \"circumstances\" that led to Manchester United suffering a 4-0 defeat Sunday against Liverpool in his first game as head coach."
    },
    {
     "ref": "espn_soccer#4",
     "title": "Yamal out of Barcelona's Champions League game at Sabah",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Lamine Yamal will miss Barcelona's Champions League game in Azerbaijan against Sabah this week with an ankle injury, the Spanish champions have confirmed."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Milan into top four as classy Pulisic solo goal caps Serie A rout",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "AC Milan racked up their biggest win of the season under Ruben Amorim as Frosinone were beaten 5-1 at San Siro on Sunday."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Villarreal refute claims Pépé's eye surgery result of viewing solar eclipse",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Villarreal have denied that Nicolas Pépé underwent eye surgery as a result of viewing the solar eclipse."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Columbus coach says Messi should've got red card: 'Everyone knows'",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Columbus Crew head coach Laurent Courtois said Lionel Messi should have received a red card for taking a throw-in straight into the face of Gonzalo Tapia."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Rodman on 3rd straight NWSL Championship loss: 'This one hurts way worse'",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Trinity Rodman said she was proud of the Washington Spirit's season after a third straight NWSL Championship loss but acknowledged that this one hurt the most."
    },
    {
     "ref": "espn_soccer#9",
     "title": "⚽DiBernardo joins Rapinoe, Pulisic in pantheon of great Olimpicos",
     "published": "2026-11-23T09:47:55+00:00",
     "summary": "Vanessa DiBernardo joined an elite list on Saturday, scoring for Kansas City direct from a corner. Known in soccer circles as an Olimpico, here are some of the very best."
    },
    {
     "ref": "espn_soccer#10",
     "title": "Liverpool trounce 10-man United in Pochettino's first game in charge",
     "published": "2026-11-23T09:47:54+00:00",
     "summary": "Mauricio Pochettino's Manchester United reign got off to a miserable start as Liverpool punished Leny Yoro's red card with a pair of early goals on their way to a comprehensive 4-0 win against their relegation-threatened rivals."
    },
    {
     "ref": "espn_soccer#11",
     "title": "Man United will need big January transfer spend to avoid relegation",
     "published": "2026-11-23T09:46:53+00:00",
     "summary": "Manchester United have a choice: spend £150 million on new players in January, or lose £300 million if they get relegated at the end of the Premier League season."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Arsenal's near-collapse at Newcastle a wake-up call -- and a missed opportunity",
     "published": "2026-11-23T08:18:05+00:00",
     "summary": "Arsenal could have moved eight points clear at the top of the Premier League. Instead, they completely lost their way in the second half vs. Newcastle."
    },
    {
     "ref": "espn_soccer#13",
     "title": "Man City at a crossroads as a shell of themselves",
     "published": "2026-11-23T08:18:04+00:00",
     "summary": "When Man City can't beat Fulham -- a team they had beaten 20 times in a row entering Saturday -- you know they're struggling."
    },
    {
     "ref": "espn_soccer#14",
     "title": "Transfer rumors, news: Milan to land Liverpool defender Van Dijk?",
     "published": "2026-11-23T08:17:36+00:00",
     "summary": "AC Milan are monitoring the situation of Liverpool defender Virgil van Dijk. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#15",
     "title": "Kansas City's NWSL title shows investing in women's soccer pays off",
     "published": "2026-11-22T22:21:24+00:00",
     "summary": "Only a small group of clubs now truly compete for the NWSL Championship. Kansas City Current is one of them, and now it's a champion for the first time."
    },
    {
     "ref": "espn_soccer#16",
     "title": "KC finally, and deservedly, breaks NWSL title drought",
     "published": "2026-11-22T22:21:24+00:00",
     "summary": "Kansas City Current's first title was a story of conviction and resilience."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Under pressure: Is time running out for Arsenal boss Renee Slegers?",
     "published": "2026-11-22T22:18:53+00:00",
     "summary": "After Arsenal again failed to win at home, pressure is building on manager Renee Slegers."
    },
    {
     "ref": "espn_soccer#18",
     "title": "Mauricio Pochettino gets reality check as Liverpool ruin his Man United debut",
     "published": "2026-11-22T21:58:50+00:00",
     "summary": "Mauricio Pochettino began his Manchester United career with a nightmare as his Red Devils went to Anfield and were routed 4-0 by Liverpool on Sunday."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Tapia's Brace Puts Messi's Inter Miami on Brink of Elimination - Yahoo Sports",
     "published": "2026-11-23T07:00:00+00:00",
     "summary": "Tapia's Brace Puts Messi's Inter Miami on Brink of Elimination Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Columbus boss Laurent Courtois claims Lionel Messi escaped blatant red card for hitting Gonzalo Tapia with ball in Inter Miami defeat - LiveScore",
     "published": "2026-11-23T05:28:56+00:00",
     "summary": "Columbus boss Laurent Courtois claims Lionel Messi escaped blatant red card for hitting Gonzalo Tapia with ball in Inter Miami defeat LiveScore"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami superstar Lionel Messi's actions during the game were on the cutting board.Messi threw t.. - 매일경제",
     "published": "2026-11-23T03:47:08+00:00",
     "summary": "Inter Miami superstar Lionel Messi's actions during the game were on the cutting board.Messi threw t.. 매일경제"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Unravelling Messi sees red but only given a yellow as Columbus thump Inter Miami - Inside World Football",
     "published": "2026-11-23T03:01:00+00:00",
     "summary": "Unravelling Messi sees red but only given a yellow as Columbus thump Inter Miami Inside World Football"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi Faces Scrutiny After Inter Miami Playoff Defeat - SuaraGarut.ID",
     "published": "2026-11-23T01:54:40+00:00",
     "summary": "Messi Faces Scrutiny After Inter Miami Playoff Defeat SuaraGarut.ID"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi Avoids Red Card in Inter Miami-Columbus Playoff Clash - Hoodline",
     "published": "2026-11-23T00:54:58+00:00",
     "summary": "Messi Avoids Red Card in Inter Miami-Columbus Playoff Clash Hoodline"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-23T00:54:53+00:00",
     "summary": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi Avoids Red Card as Columbus Crew Upset Inter Miami 3-0 in Playoff Opener - Yahoo Sports",
     "published": "2026-11-23T00:45:00+00:00",
     "summary": "Messi Avoids Red Card as Columbus Crew Upset Inter Miami 3-0 in Playoff Opener Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "It Looks Like Messi Is Running Inter Miami — Out Of The MLS Playoffs - Forbes",
     "published": "2026-11-22T22:00:05+00:00",
     "summary": "It Looks Like Messi Is Running Inter Miami — Out Of The MLS Playoffs Forbes"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "November 27, 2026: Columbus Crew vs Inter Miami CF: Spread Prediction Market - Robinhood",
     "published": "2026-11-22T21:33:26+00:00",
     "summary": "November 27, 2026: Columbus Crew vs Inter Miami CF: Spread Prediction Market Robinhood"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Germán Berterame on the Brink: Will Inter Miami Crash Out Before Rayados Even Get Started? - Soy Futbol",
     "published": "2026-11-22T20:25:34+00:00",
     "summary": "Germán Berterame on the Brink: Will Inter Miami Crash Out Before Rayados Even Get Started? Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Take a tour inside Inter Miami's home stadium as the team prepares for the MLS Cup Playoffs - WPTV",
     "published": "2026-11-22T20:12:09+00:00",
     "summary": "Take a tour inside Inter Miami's home stadium as the team prepares for the MLS Cup Playoffs WPTV"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi loses his cool during Inter Miami defeat and throws ball at opposition player’s face. The referee chose not to show him a red card - Operation Sports",
     "published": "2026-11-22T19:30:00+00:00",
     "summary": "Lionel Messi loses his cool during Inter Miami defeat and throws ball at opposition player’s face. The referee chose not to show him a red card Operation Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Canada keeper Dayne St. Clair, Messi’s Inter Miami shocked at home by Columbus Crew - Waking The Red",
     "published": "2026-11-22T17:14:27+00:00",
     "summary": "Canada keeper Dayne St. Clair, Messi’s Inter Miami shocked at home by Columbus Crew Waking The Red"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami Faces Elimination After Crushing Loss in MLS Playoffs - CubaHeadlines",
     "published": "2026-11-22T16:54:04+00:00",
     "summary": "Inter Miami Faces Elimination After Crushing Loss in MLS Playoffs CubaHeadlines"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Columbus Crew rout Messi, Inter Miami: 'The green rectangle doesn't lie' - The Columbus Dispatch",
     "published": "2026-11-22T16:43:00+00:00",
     "summary": "Columbus Crew rout Messi, Inter Miami: 'The green rectangle doesn't lie' The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Columbus coach says 'eveyone knows' Lionel Messi dodged red card after throwing ball into opponent's face - New York Post",
     "published": "2026-11-22T16:19:00+00:00",
     "summary": "Columbus coach says 'eveyone knows' Lionel Messi dodged red card after throwing ball into opponent's face New York Post"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Controversy in MLS! Messi Throws Ball at Opponent's Face, Avoids Red Card as Inter Miami Loses 0-3 - Telecom Asia Sport",
     "published": "2026-11-22T15:39:13+00:00",
     "summary": "Controversy in MLS! Messi Throws Ball at Opponent's Face, Avoids Red Card as Inter Miami Loses 0-3 Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami, al borde del abismo: \"Toca morderse la lengua...\" - OneFootball",
     "published": "2026-11-22T15:09:48+00:00",
     "summary": "Inter Miami, al borde del abismo: \"Toca morderse la lengua...\" OneFootball"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Should Messi have been sent off for throwing ball at opponent in Miami MLS playoff loss? - The Athletic - The New York Times",
     "published": "2026-11-22T14:53:00+00:00",
     "summary": "Should Messi have been sent off for throwing ball at opponent in Miami MLS playoff loss? - The Athletic The New York Times"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "USMNT MLS Recap (November 21): Peyton Miller gives Revs Game 1 win, Taha Habroune helps Crew upset Inter Miami - LiveScore",
     "published": "2026-11-22T14:06:01+00:00",
     "summary": "USMNT MLS Recap (November 21): Peyton Miller gives Revs Game 1 win, Taha Habroune helps Crew upset Inter Miami LiveScore"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi at center of red-card controversy as Inter Miami face early MLS playoff exit - The Guardian",
     "published": "2026-11-22T12:56:00+00:00",
     "summary": "Lionel Messi at center of red-card controversy as Inter Miami face early MLS playoff exit The Guardian"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "How to Watch Inter Miami vs. Columbus Crew MLS Play-off Game? Live Streaming & TV Channels - Athlon Sports",
     "published": "2026-11-22T12:30:47+00:00",
     "summary": "How to Watch Inter Miami vs. Columbus Crew MLS Play-off Game? Live Streaming & TV Channels Athlon Sports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi Throw-In Sparks Red-Card Row as Miami Face Playoff Exit - The Eastern Herald",
     "published": "2026-11-22T11:52:13+00:00",
     "summary": "Messi Throw-In Sparks Red-Card Row as Miami Face Playoff Exit The Eastern Herald"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi throws ball in opponent’s face, avoids red card as Inter Miami lose - Al Jazeera",
     "published": "2026-11-22T11:10:29+00:00",
     "summary": "Messi throws ball in opponent’s face, avoids red card as Inter Miami lose Al Jazeera"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija flirts with triple-double in Saturday's loss to Knicks - FantasyPros",
     "published": "2026-11-22T18:40:22+00:00",
     "summary": "Deni Avdija flirts with triple-double in Saturday's loss to Knicks FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf News: Heading to Long Island - RotoWire",
     "published": "2026-11-22T16:47:08+00:00",
     "summary": "Ben Saraf News: Heading to Long Island RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Postgame Interview | Portland Trail Blazers 96, New York Knicks 97 | Nov. 21, 2026 - NBA.com",
     "published": "2026-11-22T06:06:38+00:00",
     "summary": "Deni Avdija Postgame Interview | Portland Trail Blazers 96, New York Knicks 97 | Nov. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes - CBS Sports",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija News: Scores 20 points with five dimes - RotoWire",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Deni Avdija News: Scores 20 points with five dimes RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija finishes through contact, 11/21/2026 - Yahoo Sports",
     "published": "2026-11-22T03:04:18+00:00",
     "summary": "Deni Avdija finishes through contact, 11/21/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-22T01:17:59+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-22T01:17:59+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija questionable as Knicks Vs Trail Blazers matchup arrives at Madison Square Garden - شبكة تواصل الإخبارية",
     "published": "2026-11-22T00:15:48+00:00",
     "summary": "Deni Avdija questionable as Knicks Vs Trail Blazers matchup arrives at Madison Square Garden شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Watch | Knicks head coach praises Deni Avdija: You're not going to stop him - Israel National News",
     "published": "2026-11-22T00:06:20+00:00",
     "summary": "Watch | Knicks head coach praises Deni Avdija: You're not going to stop him Israel National News"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija cleared to return after missing last two games - Yahoo Sports",
     "published": "2026-11-21T23:27:13+00:00",
     "summary": "Deni Avdija cleared to return after missing last two games Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija (foot) back in lineup Saturday - FantasyPros",
     "published": "2026-11-21T22:37:53+00:00",
     "summary": "Deni Avdija (foot) back in lineup Saturday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Trail Blazers' Deni Avdija: Returning Saturday - CBS Sports",
     "published": "2026-11-21T22:23:53+00:00",
     "summary": "Trail Blazers' Deni Avdija: Returning Saturday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija News: Returning Saturday - RotoWire",
     "published": "2026-11-21T22:23:53+00:00",
     "summary": "Deni Avdija News: Returning Saturday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija (foot) upgraded to available Saturday - NBC Sports",
     "published": "2026-11-21T22:22:00+00:00",
     "summary": "Deni Avdija (foot) upgraded to available Saturday NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija cleared to return after missing last two games - HoopsHype",
     "published": "2026-11-21T22:20:00+00:00",
     "summary": "Deni Avdija cleared to return after missing last two games HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Final Injury Report for Trail Blazers-Knicks: Will Karl-Anthony Towns, Deni Avdija Play? - Yahoo Sports",
     "published": "2026-11-21T20:30:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Knicks: Will Karl-Anthony Towns, Deni Avdija Play? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Are Karl-Anthony Towns, Deni Avdija playing tonight? Blazers vs. Knicks injury report - Yahoo Sports",
     "published": "2026-11-21T19:56:40+00:00",
     "summary": "Are Karl-Anthony Towns, Deni Avdija playing tonight? Blazers vs. Knicks injury report Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed - Yahoo Sports",
     "published": "2026-11-21T17:54:28+00:00",
     "summary": "Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Video - Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed - roundtable.io",
     "published": "2026-11-21T17:54:28+00:00",
     "summary": "Video - Knicks vs Trail Blazers Injury Report: OG Anunoby, Deni Avdija Statuses Revealed roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game - Yahoo Sports",
     "published": "2026-11-21T04:14:00+00:00",
     "summary": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-21T01:23:15+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game - Heavy.com",
     "published": "2026-11-21T01:14:00+00:00",
     "summary": "Trail Blazers Announce Deni Avdija’s Injury Status for Knicks Game Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Avdija Questionable to Play vs Knicks - Blazer's Edge",
     "published": "2026-11-21T00:10:00+00:00",
     "summary": "Avdija Questionable to Play vs Knicks Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija (foot) questionable vs. New York - NBC Sports",
     "published": "2026-11-20T22:15:00+00:00",
     "summary": "Deni Avdija (foot) questionable vs. New York NBC Sports"
    }
   ]
  }
 ]
}
</input>