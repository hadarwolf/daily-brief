Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "UEFA Champions League",
  "home": "Slavia Praha",
  "away": "Arsenal",
  "kickoff_utc": "2026-11-04T20:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Brooklyn Nets",
  "away": "Charlotte Hornets",
  "kickoff_utc": "2026-11-05T00:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Phoenix Suns",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-05T02:00:00.000Z"
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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T17:45:00Z",
     "home": "Galatasaray",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T17:45:00Z",
     "home": "Shaktar",
     "away": "Sporting CP",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Derby County",
     "away": "Norwich",
     "status": "FINISHED",
     "score": "0-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Preston NE",
     "away": "Sheffield Utd",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "QPR",
     "away": "Burnley",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Blackburn",
     "away": "Stoke",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Portsmouth",
     "away": "Swansea",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Charlton",
     "away": "Bolton",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Watford",
     "away": "Lincoln City",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Bodø/Glimt",
     "away": "Lille",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Barça",
     "away": "Aston Villa",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Birmingham",
     "away": "Millwall",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "West Brom",
     "away": "Southampton",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Villarreal",
     "away": "PSG",
     "status": "FINISHED",
     "score": "0-6"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Man United",
     "away": "Roma",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Feyenoord",
     "away": "Inter",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "LASK",
     "away": "Sl. Bratislava",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Atleti",
     "away": "Bayern",
     "status": "FINISHED",
     "score": "0-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-03T22:30:00Z",
     "home": "Chapecoense",
     "away": "Mirassol",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-04T00:30:00Z",
     "home": "Internacional",
     "away": "Coritiba",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T17:45:00Z",
     "home": "PAE AEK",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T17:45:00Z",
     "home": "Fenerbahçe",
     "away": "Liverpool",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T19:45:00Z",
     "home": "Cardiff",
     "away": "West Ham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T19:45:00Z",
     "home": "Wrexham",
     "away": "Middlesbrough",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "RB Leipzig",
     "away": "Man City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Viking",
     "away": "Sabah FK",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "PSV",
     "away": "Club Brugge",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Porto",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "RC Lens",
     "away": "Como 1907",
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
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Bristol City",
     "away": "Wolverhampton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Dortmund",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-04T22:30:00Z",
     "home": "Flamengo",
     "away": "Grêmio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-04T22:30:00Z",
     "home": "Paranaense",
     "away": "Vasco da Gama",
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
  "games_last_night": [],
  "games_today": [
   {
    "home": "Detroit Pistons",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-05T00:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-05T00:00:00Z"
   },
   {
    "home": "Boston Celtics",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-05T00:30:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-11-05T00:30:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-05T00:30:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-05T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-05T01:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-05T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-11-05T01:30:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-05T02:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-05T02:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-05T02:30:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-05T03:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-05T03:30:00Z"
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
     "title": "Palace lose appeal against Mateta red card",
     "published": "2026-11-04T10:23:14+00:00",
     "summary": "Crystal Palace lose their appeal against Jean-Philippe Mateta's red card in the defeat by Tottenham on Saturday."
    },
    {
     "ref": "bbc_football#1",
     "title": "West Ham confirm Parker as boss",
     "published": "2026-11-04T10:03:25+00:00",
     "summary": "West Ham confirm the appointment of former midfielder Scott Parker as their head coach on a two-and-a-half-year deal."
    },
    {
     "ref": "bbc_football#2",
     "title": "How Carpenter has become Chelsea's surprise star",
     "published": "2026-11-04T09:55:26+00:00",
     "summary": "Ellie Carpenter has become a surprise star for Chelsea this season after a strong start to the Women's Super League campaign."
    },
    {
     "ref": "bbc_football#3",
     "title": "How Carpenter has become Chelsea's surprise star",
     "published": "2026-11-04T09:55:26+00:00",
     "summary": "Ellie Carpenter has become a surprise star for Chelsea this season after a strong start to the Women's Super League campaign."
    },
    {
     "ref": "bbc_football#4",
     "title": "Real Madrid confident of signing Man Utd's Gabriel",
     "published": "2026-11-04T09:15:15+00:00",
     "summary": "Real Madrid head the list of clubs trying to sign 16-year-old Manchester United forward JJ Gabriel."
    },
    {
     "ref": "bbc_football#5",
     "title": "From Derby to Champions League - Brown's journey to face Reds",
     "published": "2026-11-04T08:58:24+00:00",
     "summary": "Fenerbahce's Archie Brown on his unorthodox journey to Istanbul, the moment of madness against Galatasaray and what Liverpool can expect in Turkey on Wednesday evening."
    },
    {
     "ref": "bbc_football#6",
     "title": "Recovering Murray hopes to earn Dundee deal - gossip",
     "published": "2026-11-04T08:14:53+00:00",
     "summary": "Veteran Scottish Premiership striker targets new contract on long road back to fitness as former Celtic player has advice on how to get the best out of record signing..."
    },
    {
     "ref": "bbc_football#7",
     "title": "Scottish Football Podcast",
     "published": "2026-11-04T08:00:00+00:00",
     "summary": "Leaky defences, the enigma of Kasper Høgh and can Pogcognoli get his system to work?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-04T07:06:19+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#9",
     "title": "New strategy launched to transform Scottish women's football over 10 years",
     "published": "2026-11-04T07:03:05+00:00",
     "summary": "The strategy aims to double the number of registered female players in Scotland, while also quadrupling attendances and audiences for matches."
    },
    {
     "ref": "bbc_football#10",
     "title": "Fernandes critical of media 'lies' about Carrick relationship",
     "published": "2026-11-04T00:45:33+00:00",
     "summary": "Bruno Fernandes says \"a lot of lies\" have been reported about his relationship with Manchester United head coach Michael Carrick."
    },
    {
     "ref": "bbc_football#11",
     "title": "A half-time speech, a retaken penalty - and a win to save Carrick's job?",
     "published": "2026-11-04T00:27:37+00:00",
     "summary": "At 2-0 down Michael Carrick's position as Manchester United head coach looked terminal - but will the win over Roma prove a turning point?"
    },
    {
     "ref": "bbc_football#12",
     "title": "Emery takes positives, but Villa 'have work to do' to reach Barca level",
     "published": "2026-11-03T23:58:22+00:00",
     "summary": "Aston Villa boss Unai Emery says his team have \"work to do\" to reach Barcelona's level after a 3-0 Champions League defeat at the Nou Camp."
    },
    {
     "ref": "bbc_football#13",
     "title": "Football world mourns Tenerife striker De Miguel",
     "published": "2026-11-03T23:37:12+00:00",
     "summary": "Tributes were paid across Tuesday's Champions League fixtures to Tenerife striker Jesus de Miguel, who died following collision on the pitch."
    },
    {
     "ref": "bbc_football#14",
     "title": "Man Utd beat Roma - the other great Champions League comebacks",
     "published": "2026-11-03T23:25:20+00:00",
     "summary": "Manchester United come from two goals down to beat Roma 3-2 - but what are the other best fightbacks in Champions League history?"
    },
    {
     "ref": "bbc_football#15",
     "title": "Man Utd eye Man City's Ait-Nouri - Wednesday's gossip",
     "published": "2026-11-03T22:55:00+00:00",
     "summary": "Manchester City defender Rayan Ait-Nouri a surprise target for Manchester United, Crystal Palace could turn to England assistant boss Anthony Barry if they sack Pierre Sage, Barcelona keen on Arsenal centre-back Piero Hincapie, plus more."
    },
    {
     "ref": "bbc_football#16",
     "title": "Kenny's background 'not that important' to O'Neill",
     "published": "2026-11-03T18:26:55+00:00",
     "summary": "Northern Ireland manager Michael O'Neill says new call-up Eoin Kenny's family connection to the Republic of Ireland is not something he considered before bringing him into the senior squad for this month's Nations League fixtures against Ukraine and Hungary."
    },
    {
     "ref": "bbc_football#17",
     "title": "Pocognoli focus on Scotland tidy-up as Euros loom",
     "published": "2026-11-03T16:54:35+00:00",
     "summary": "The Scotland head coach insists radical change is not required to improve his team after a mixed maiden camp."
    },
    {
     "ref": "bbc_football#18",
     "title": "Pocognoli focus on Scotland tidy-up as Euros loom",
     "published": "2026-11-03T16:54:35+00:00",
     "summary": "The Scotland head coach insists radical change is not required to improve his team after a mixed maiden camp."
    },
    {
     "ref": "bbc_football#19",
     "title": "How to follow the Champions League on the BBC",
     "published": "2026-11-03T16:11:06+00:00",
     "summary": "The Champions League returns this week and you will be able to listen to commentary and watch highlights of the best of the action on the BBC."
    },
    {
     "ref": "bbc_football#20",
     "title": "How sporting events are being affected by Middle East conflict",
     "published": "2026-11-03T16:01:24+00:00",
     "summary": "BBC Sport takes a look at how the ongoing conflict in the Middle East has affected sporting events in Saudi Arabia, Qatar, Bahrain and the wider area."
    },
    {
     "ref": "bbc_football#21",
     "title": "Lionesses to face France and Portugal in Nations League",
     "published": "2026-11-03T15:39:21+00:00",
     "summary": "England have been drawn to face France, Austria and Portugal in next year's Women's Nations League."
    },
    {
     "ref": "bbc_football#22",
     "title": "Lionesses to face France and Portugal in Nations League",
     "published": "2026-11-03T15:39:21+00:00",
     "summary": "England have been drawn to face France, Austria and Portugal in next year's Women's Nations League."
    },
    {
     "ref": "bbc_football#23",
     "title": "Former Rangers player Kyle Hutton to stand trial over road death",
     "published": "2026-11-03T15:10:54+00:00",
     "summary": "Victoria Cairns died four days after the crash in Rutherglen in November 2024."
    },
    {
     "ref": "bbc_football#24",
     "title": "Saliba's back for Arsenal - how does Arteta solve his defensive dilemma?",
     "published": "2026-11-03T15:07:49+00:00",
     "summary": "William Saliba returning to first-team training before Arsenal's game with Slavia Prague in the Champions League is a huge boost for the club but now presents Mikel Arteta with a selection headache."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "'I don't see why not' - Paul Scholes backs David Beckham consortium to buy Manchester United and oust the Glazers and Sir Jim Ratcliffe - Yahoo Sports",
     "published": "2026-11-04T07:50:00+00:00",
     "summary": "'I don't see why not' - Paul Scholes backs David Beckham consortium to buy Manchester United and oust the Glazers and Sir Jim Ratcliffe Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-11-04T06:45:39+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi is about to set a series of new records in American soccer. - Vietnam.vn",
     "published": "2026-11-04T04:45:18+00:00",
     "summary": "Messi is about to set a series of new records in American soccer. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Cincinnati vs. New England (Apr 10, 2027) Live Score - ESPN",
     "published": "2026-11-04T04:16:28+00:00",
     "summary": "Cincinnati vs. New England (Apr 10, 2027) Live Score ESPN"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Thomas Müller Returns From Injury as Vancouver Whitecaps Prepare for MLS Cup Playoffs - Pasión Fútbol",
     "published": "2026-11-04T00:54:42+00:00",
     "summary": "Thomas Müller Returns From Injury as Vancouver Whitecaps Prepare for MLS Cup Playoffs Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi Remains the MLS's Biggest Commercial Star! - beIN SPORTS",
     "published": "2026-11-04T00:32:00+00:00",
     "summary": "Lionel Messi Remains the MLS's Biggest Commercial Star! beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Do German Fans Know Dutch Football? , Fiago - Forza Football",
     "published": "2026-11-04T00:26:04+00:00",
     "summary": "Do German Fans Know Dutch Football? , Fiago Forza Football"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS’ biggest stars top 2026 jersey rankings: Messi, Lewandowski, Sullivan and more - Diario AS",
     "published": "2026-11-03T23:15:42+00:00",
     "summary": "MLS’ biggest stars top 2026 jersey rankings: Messi, Lewandowski, Sullivan and more Diario AS"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Dayne St. Clair Remains Focused on Inter Miami as He Waits for European Offers - Pasión Fútbol",
     "published": "2026-11-03T23:00:00+00:00",
     "summary": "Dayne St. Clair Remains Focused on Inter Miami as He Waits for European Offers Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Argentina's first squad without Lionel Messi also leaves out his Inter Miami teammate Rodrigo De Paul - Football Addict",
     "published": "2026-11-03T22:09:02+00:00",
     "summary": "Argentina's first squad without Lionel Messi also leaves out his Inter Miami teammate Rodrigo De Paul Football Addict"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Uzochukwu Akunedozi Foundation holds annual meet and greet with her scholarship beneficiaries - The Sun Nigeria",
     "published": "2026-11-03T21:59:36+00:00",
     "summary": "Uzochukwu Akunedozi Foundation holds annual meet and greet with her scholarship beneficiaries The Sun Nigeria"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Royal Caribbean Brings a Legendary Night to Fans this Saturday for Final 2026 Regular Season Match - Inter Miami CF",
     "published": "2026-11-03T21:28:14+00:00",
     "summary": "Royal Caribbean Brings a Legendary Night to Fans this Saturday for Final 2026 Regular Season Match Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Second Edition of Messi Cup Wraps Up Following Week of International Competition - Inter Miami CF",
     "published": "2026-11-03T21:13:11+00:00",
     "summary": "Second Edition of Messi Cup Wraps Up Following Week of International Competition Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Argentina’s first squad without Lionel Messi also leaves out his Inter Miami teammate Rodrigo De Paul - World Soccer Talk",
     "published": "2026-11-03T21:03:29+00:00",
     "summary": "Argentina’s first squad without Lionel Messi also leaves out his Inter Miami teammate Rodrigo De Paul World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "New England Revolution vs Club Internacional de Fútbol Miami | November 2, 2026 | MLS Matchup - theScore",
     "published": "2026-11-03T20:56:10+00:00",
     "summary": "New England Revolution vs Club Internacional de Fútbol Miami | November 2, 2026 | MLS Matchup theScore"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Germán Berterame joins Carlos Vela and Giovani dos Santos in exclusive MLS history with Inter Miami - Pasión Fútbol",
     "published": "2026-11-03T20:36:41+00:00",
     "summary": "Germán Berterame joins Carlos Vela and Giovani dos Santos in exclusive MLS history with Inter Miami Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi closing in on back-to-back MLS Golden Boots as Inter Miami star chases another scoring record - Pasión Fútbol",
     "published": "2026-11-03T20:24:54+00:00",
     "summary": "Lionel Messi closing in on back-to-back MLS Golden Boots as Inter Miami star chases another scoring record Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi Tops MLS Jersey Sales for the Fourth Year in a Row—Again! - Soy Futbol",
     "published": "2026-11-03T19:26:28+00:00",
     "summary": "Messi Tops MLS Jersey Sales for the Fourth Year in a Row—Again! Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lewandowski's jersey outselling Messi's since Chicago arrival - ESPN India",
     "published": "2026-11-03T19:16:00+00:00",
     "summary": "Lewandowski's jersey outselling Messi's since Chicago arrival ESPN India"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami CF v Charlotte FC Odds - FanDuel Sportsbook",
     "published": "2026-11-03T19:12:13+00:00",
     "summary": "Inter Miami CF v Charlotte FC Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Kily González Will Not Rest His Stars as Inter Miami Fight to Secure Second Place in the East - Pasión Fútbol",
     "published": "2026-11-03T18:51:34+00:00",
     "summary": "Kily González Will Not Rest His Stars as Inter Miami Fight to Secure Second Place in the East Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi tops most popular MLS jersey for fourth-straight season - x - SBI Soccer",
     "published": "2026-11-03T18:40:28+00:00",
     "summary": "Lionel Messi tops most popular MLS jersey for fourth-straight season - x SBI Soccer"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Big chances missed - Nashville SC stats for MLS 2026 - FotMob",
     "published": "2026-11-03T18:37:51+00:00",
     "summary": "Big chances missed - Nashville SC stats for MLS 2026 FotMob"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami Vs Atlanta United 8-0 Highlights & All Goals ⚽🔥 | Messi Masterclass! Lamine Yamal (oSXFykam5U) - Unisba Media",
     "published": "2026-11-03T18:19:54+00:00",
     "summary": "Inter Miami Vs Atlanta United 8-0 Highlights & All Goals ⚽🔥 | Messi Masterclass! Lamine Yamal (oSXFykam5U) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi, international stars top MLS jersey sales in 2026 - Sports Business Journal",
     "published": "2026-11-03T18:10:53+00:00",
     "summary": "Messi, international stars top MLS jersey sales in 2026 Sports Business Journal"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level - ynetnews",
     "published": "2026-11-04T09:12:43+00:00",
     "summary": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' - Yahoo Sports",
     "published": "2026-11-03T23:27:59+00:00",
     "summary": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders - Rip City Project",
     "published": "2026-11-03T21:13:17+00:00",
     "summary": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers Coach Micah Nori Integrating Deni Avdija with Style - Blazer's Edge",
     "published": "2026-11-03T19:10:16+00:00",
     "summary": "Blazers Coach Micah Nori Integrating Deni Avdija with Style Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start - The New York Times",
     "published": "2026-11-03T13:00:52+00:00",
     "summary": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija scores team-high 28 points in win - NBC Sports",
     "published": "2026-11-03T11:04:57+00:00",
     "summary": "Deni Avdija scores team-high 28 points in win NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome - kare11.com",
     "published": "2026-11-03T07:42:52+00:00",
     "summary": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome kare11.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome - fox61.com",
     "published": "2026-11-03T07:38:00+00:00",
     "summary": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "DENVER — Deni Avdija scored nine of his 28 points in the fourth quarter and the Portland Trail Blazers beat the Denver Nuggets 118-110 on Monday night, extending their road winning streak to begin the season. Read more: https://rebrand.ly/2460269 - LinkedIn",
     "published": "2026-11-03T07:32:49+00:00",
     "summary": "DENVER — Deni Avdija scored nine of his 28 points in the fourth quarter and the Portland Trail Blazers beat the Denver Nuggets 118-110 on Monday night, extending their road winning streak to begin the season. Read more: https://rebrand.ly/2460269 LinkedIn"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija powers Trail Blazers past Nuggets - TalkBasket.net",
     "published": "2026-11-03T07:09:07+00:00",
     "summary": "Deni Avdija powers Trail Blazers past Nuggets TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija drops 28 points Monday - FantasyPros",
     "published": "2026-11-03T07:06:06+00:00",
     "summary": "Deni Avdija drops 28 points Monday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - The Manila Times",
     "published": "2026-11-03T07:00:00+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets The Manila Times"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Blazers storm back to beat Nuggets, remain perfect on the road - Field Level Media",
     "published": "2026-11-03T06:56:11+00:00",
     "summary": "Blazers storm back to beat Nuggets, remain perfect on the road Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Highlights From Deni Avdija 28-Point Game - NBA.com",
     "published": "2026-11-03T06:42:46+00:00",
     "summary": "Highlights From Deni Avdija 28-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Damian Lillard already looks like the co-star Deni Avdija was missing - Rip City Project",
     "published": "2026-11-03T05:17:11+00:00",
     "summary": "Damian Lillard already looks like the co-star Deni Avdija was missing Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets - The Journal",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets The Journal"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - The Killeen Daily Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - Oskaloosa Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets Oskaloosa Herald"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - LancasterOnline",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets LancasterOnline"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - Eagle-Tribune",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets Eagle-Tribune"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win - CBS Sports",
     "published": "2026-11-03T04:45:41+00:00",
     "summary": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija News: Drops season-high 28 points in win - RotoWire",
     "published": "2026-11-03T04:45:41+00:00",
     "summary": "Deni Avdija News: Drops season-high 28 points in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija finishes through contact, 11/02/2026 - Yahoo Sports",
     "published": "2026-11-03T04:37:25+00:00",
     "summary": "Deni Avdija finishes through contact, 11/02/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija gets the basket plus the foul - ESPN",
     "published": "2026-11-03T04:24:08+00:00",
     "summary": "Deni Avdija gets the basket plus the foul ESPN"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija gets the and-1 to fall - ESPN",
     "published": "2026-11-03T02:50:02+00:00",
     "summary": "Deni Avdija gets the and-1 to fall ESPN"
    }
   ]
  }
 ]
}
</input>