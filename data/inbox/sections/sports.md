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
  "home": "Sacramento Kings",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-14T03:00:00.000Z"
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
   "yesterday": [],
   "today": [],
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
     },
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
    "home": "Philadelphia 76ers",
    "away": "Toronto Raptors",
    "score": "123-112",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Detroit Pistons",
    "score": "140-144",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Dallas Mavericks",
    "score": "133-94",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Charlotte Hornets",
    "score": "101-96",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Indiana Pacers",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-14T00:00:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-14T00:00:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-14T01:30:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-14T02:30:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-14T03:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-14T03:30:00Z"
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
     "title": "The club preparing to play again after the death of a player",
     "published": "2026-11-13T10:00:46+00:00",
     "summary": "Non-league Hendon are preparing to return to action for the first time since midfielder Ezekiel Williams died earlier this month."
    },
    {
     "ref": "bbc_football#1",
     "title": "Fernandes rejects second Man Utd contract offer",
     "published": "2026-11-13T09:55:01+00:00",
     "summary": "Manchester United captain Bruno Fernandes rejects the club's second contract offer, with his current deal due to expire at the end of the season."
    },
    {
     "ref": "bbc_football#2",
     "title": "How Ferguson-inspired Pochettino can succeed where Carrick failed at Man Utd",
     "published": "2026-11-13T09:24:45+00:00",
     "summary": "With Mauricio Pochettino set to become Man Utd manager, we analyse if he can clear the tactical hurdles others haven't."
    },
    {
     "ref": "bbc_football#3",
     "title": "Beckham to be inducted into US Soccer Hall of Fame",
     "published": "2026-11-13T08:22:34+00:00",
     "summary": "Former England captain David Beckham is set to be inducted into the United States' National Soccer Hall of Fame as part of its 2027 class."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who makes your Northern Ireland XI against Ukraine?",
     "published": "2026-11-13T08:21:40+00:00",
     "summary": "Ahead of Northern Ireland's Nations League outing with Ukraine in Belfast, who would you pick in your starting team at Windsor Park?"
    },
    {
     "ref": "bbc_football#5",
     "title": "From postcards to texts, the different ways a manager gets the sack - Pulis",
     "published": "2026-11-13T08:13:19+00:00",
     "summary": "BBC Sport columnist Tony Pulis explains some of the different ways a manager can leave a club, whether they have been sacked or resigned."
    },
    {
     "ref": "bbc_football#6",
     "title": "How do you stop Haaland? Wales show how it's done",
     "published": "2026-11-13T08:05:12+00:00",
     "summary": "Erling Haaland can seem unstoppable - but Wales managed it a month ago. In Norway on Saturday, they hope the plan will work again."
    },
    {
     "ref": "bbc_football#7",
     "title": "Podcast: Domination from start to finish required as Scots face North Macedonia",
     "published": "2026-11-13T08:00:00+00:00",
     "summary": "Scotland v North Macedonia preview"
    },
    {
     "ref": "bbc_football#8",
     "title": "Pocognoli courts potential new Scotland players - gossip",
     "published": "2026-11-13T07:48:33+00:00",
     "summary": "Scotland head coach Sebastien Pocognoli attempts to increase player pool as former Aberdeen player hints at Pittodrie return."
    },
    {
     "ref": "bbc_football#9",
     "title": "How big a problem is central defence for Pocognoli?",
     "published": "2026-11-13T07:23:18+00:00",
     "summary": "Amy Canavan assesses Scotland's central defensive dilemmas before Friday evening's must-win match against North Macedonia."
    },
    {
     "ref": "bbc_football#10",
     "title": "How big a problem is central defence for Pocognoli?",
     "published": "2026-11-13T07:23:18+00:00",
     "summary": "Amy Canavan assesses Scotland's central defensive dilemmas before Friday evening's must-win match against North Macedonia."
    },
    {
     "ref": "bbc_football#11",
     "title": "Liverpool and Van Dijk have a decision to make",
     "published": "2026-11-13T06:57:25+00:00",
     "summary": "Virgil van Dijk says he is in no panic about his contract situation at Liverpool - BBC Sport takes a look at what could happen with his future."
    },
    {
     "ref": "bbc_football#12",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-13T06:42:18+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "Football Daily",
     "published": "2026-11-12T23:37:00+00:00",
     "summary": "Harry Kane becomes the most-capped England men's player in history."
    },
    {
     "ref": "bbc_football#14",
     "title": "'A lie' & 'nonsense' - Palmer committed to England, says Rogers",
     "published": "2026-11-12T23:09:07+00:00",
     "summary": "Morgan Rogers says any suggestion Cole Palmer is not committed to England \"is a lie\" and \"nonsense\"."
    },
    {
     "ref": "bbc_football#15",
     "title": "Grealish apologises for absence after breach of discipline",
     "published": "2026-11-12T22:10:13+00:00",
     "summary": "Jack Grealish issues an apology to Everton fans for his recent absence due to a disciplinary issue."
    },
    {
     "ref": "bbc_football#16",
     "title": "Where does Kane rank among all-time England greats?",
     "published": "2026-11-12T22:09:59+00:00",
     "summary": "Harry Kane is England's all-time top scorer and record appearance maker, but where does he rank among the Three Lions' greatest players?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Gritty Arsenal show different side in Barcelona draw",
     "published": "2026-11-12T21:50:59+00:00",
     "summary": "Could a resilient draw against European champions Barcelona be a turning point in Arsenal's season?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Gritty Arsenal show different side in Barcelona draw",
     "published": "2026-11-12T21:50:59+00:00",
     "summary": "Could a resilient draw against European champions Barcelona be a turning point in Arsenal's season?"
    },
    {
     "ref": "bbc_football#19",
     "title": "Kane scores winner but who else made an impression? England player ratings",
     "published": "2026-11-12T21:47:36+00:00",
     "summary": "How did England's players fare in the Nations League match against Croatia? Senior football correspondent Sami Mokbel gives his verdict."
    },
    {
     "ref": "bbc_football#20",
     "title": "Ghana kick-start Afcon 2027 bid despite Ayew penalty miss",
     "published": "2026-11-12T21:28:06+00:00",
     "summary": "Ghana kick-start their Afcon 2027 qualifying campaign despite Jordan Ayew having a penalty saved, while Cameroon, Ivory Coast and Senegal register wins."
    },
    {
     "ref": "bbc_football#21",
     "title": "SFA in talks with Boston officials over biennial friendly match",
     "published": "2026-11-12T21:16:56+00:00",
     "summary": "Discussions take place between Scottish football governing's body and a delegation of state senators to build on bonds forged during the World Cup."
    },
    {
     "ref": "bbc_football#22",
     "title": "SFA in talks with Boston officials over biennial friendly match",
     "published": "2026-11-12T21:16:56+00:00",
     "summary": "Discussions take place between Scottish football governing's body and a delegation of state senators to build on bonds forged during the World Cup."
    },
    {
     "ref": "bbc_football#23",
     "title": "Man Utd & Man City in Gusto battle - Friday's gossip",
     "published": "2026-11-12T21:13:59+00:00",
     "summary": "Manchester United and Manchester City are going head-to-head for Chelsea defender Malo Gusto and Leeds United pursue Will Lankshear, plus more."
    },
    {
     "ref": "bbc_football#24",
     "title": "Arsenal dig in for draw at Barcelona to extend unbeaten start",
     "published": "2026-11-12T20:09:07+00:00",
     "summary": "Arsenal extend their unbeaten start to four matches in the Uefa Women's Champions League, as they produce a dogged display to hold Barcelona to a 1-1 draw at the Camp Nou. The point moves Renee Slegers' side into the top four, putting them in a great position to automatically qualify for the knockout stages."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Rapinoe, Ertz and Beckham make National Soccer Hall of Fame - SABC News",
     "published": "2026-11-13T09:22:30+00:00",
     "summary": "Rapinoe, Ertz and Beckham make National Soccer Hall of Fame SABC News"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi eyes historic third straight MLS MVP award - Minute Mirror",
     "published": "2026-11-13T09:21:48+00:00",
     "summary": "Lionel Messi eyes historic third straight MLS MVP award Minute Mirror"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Tradeify targets global exposure through Inter Miami CF partnership - SportsMint Media",
     "published": "2026-11-13T08:30:00+00:00",
     "summary": "Tradeify targets global exposure through Inter Miami CF partnership SportsMint Media"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "David Beckham, Megan Rapinoe, and Jozy Altidore among legends elected to National Soccer Hall of Fame - Goal.com",
     "published": "2026-11-13T07:01:04+00:00",
     "summary": "David Beckham, Megan Rapinoe, and Jozy Altidore among legends elected to National Soccer Hall of Fame Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi a finalist for third straight MLS MVP award - Citizen Digital",
     "published": "2026-11-13T05:31:10+00:00",
     "summary": "Lionel Messi a finalist for third straight MLS MVP award Citizen Digital"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi finalist for third straight MLS MVP award - eNCA",
     "published": "2026-11-13T04:17:43+00:00",
     "summary": "Messi finalist for third straight MLS MVP award eNCA"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award - beIN SPORTS",
     "published": "2026-11-13T03:11:00+00:00",
     "summary": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi named finalist for third straight MVP award in Major League Soccer - Malay Mail",
     "published": "2026-11-13T02:33:38+00:00",
     "summary": "Messi named finalist for third straight MVP award in Major League Soccer Malay Mail"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame - Sun Sentinel",
     "published": "2026-11-13T01:50:53+00:00",
     "summary": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame Sun Sentinel"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS Records Third Consecutive Season Above 11.2 Million Fans as Inter Miami Drives Historic Crowds - Ministry of Sport",
     "published": "2026-11-12T23:51:05+00:00",
     "summary": "MLS Records Third Consecutive Season Above 11.2 Million Fans as Inter Miami Drives Historic Crowds Ministry of Sport"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi Targets Third Straight MLS MVP - 조선일보",
     "published": "2026-11-12T23:40:47+00:00",
     "summary": "Messi Targets Third Straight MLS MVP 조선일보"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami CF and Central Coast Mariners Women Announce Club Commercial Partnerships on November 12, 2026 - Ministry of Sport",
     "published": "2026-11-12T22:28:54+00:00",
     "summary": "Inter Miami CF and Central Coast Mariners Women Announce Club Commercial Partnerships on November 12, 2026 Ministry of Sport"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "USMNT to Face Haiti at Miami’s Nu Stadium, Cincinnati’s TQL Stadium in Concacaf Nations League - Yahoo Sports",
     "published": "2026-11-12T21:58:00+00:00",
     "summary": "USMNT to Face Haiti at Miami’s Nu Stadium, Cincinnati’s TQL Stadium in Concacaf Nations League Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "How a young boy's viral soccer videos led to an unforgettable day with David Beckham and Lionel Messi - Upworthy",
     "published": "2026-11-12T21:37:51+00:00",
     "summary": "How a young boy's viral soccer videos led to an unforgettable day with David Beckham and Lionel Messi Upworthy"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "David Beckham Elected to National Soccer Hall of Fame - National Soccer Hall of Fame",
     "published": "2026-11-12T21:00:00+00:00",
     "summary": "David Beckham Elected to National Soccer Hall of Fame National Soccer Hall of Fame"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "How to watch Inter Miami vs. Charlotte FC streaming live for free today: MLS Decision Day start time, odds - OregonLive.com",
     "published": "2026-11-12T20:45:00+00:00",
     "summary": "How to watch Inter Miami vs. Charlotte FC streaming live for free today: MLS Decision Day start time, odds OregonLive.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi is aiming to win his third MLS MVP award - voz.us",
     "published": "2026-11-12T20:35:43+00:00",
     "summary": "Messi is aiming to win his third MLS MVP award voz.us"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi named finalist for 2026 MLS MVP award after record Golden Boot season - Head Topics",
     "published": "2026-11-12T20:29:00+00:00",
     "summary": "Lionel Messi named finalist for 2026 MLS MVP award after record Golden Boot season Head Topics"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MLS Cup: Why each Eastern Conference playoff team will (or won't) win it all - Yahoo Sports",
     "published": "2026-11-12T20:16:00+00:00",
     "summary": "MLS Cup: Why each Eastern Conference playoff team will (or won't) win it all Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Vancouver Whitecaps up for two MLS year-end awards, Messi finalist for MVP - TSN",
     "published": "2026-11-12T19:52:44+00:00",
     "summary": "Vancouver Whitecaps up for two MLS year-end awards, Messi finalist for MVP TSN"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi could achieve incredible MLS record no player has ever reached after dominant 2026 Inter Miami... - World Soccer Talk",
     "published": "2026-11-12T18:59:02+00:00",
     "summary": "Lionel Messi could achieve incredible MLS record no player has ever reached after dominant 2026 Inter Miami... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Hip-Hop Albums & Songs Dropping Tonight, November 13, 2026 - HotNewHipHop",
     "published": "2026-11-12T18:45:00+00:00",
     "summary": "Hip-Hop Albums & Songs Dropping Tonight, November 13, 2026 HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Telasco Segovia Amongst Finalists for 2026 MLS Humanitarian of the Year - Inter Miami CF",
     "published": "2026-11-12T18:24:51+00:00",
     "summary": "Telasco Segovia Amongst Finalists for 2026 MLS Humanitarian of the Year Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Tradeify becomes Inter Miami CF’s Official Trading Partner - LeapRate",
     "published": "2026-11-12T18:18:34+00:00",
     "summary": "Tradeify becomes Inter Miami CF’s Official Trading Partner LeapRate"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Leo Messi Amongst Finalists for 2026 Landon Donovan MLS MVP Award - Inter Miami CF",
     "published": "2026-11-12T18:04:51+00:00",
     "summary": "Leo Messi Amongst Finalists for 2026 Landon Donovan MLS MVP Award Inter Miami CF"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-13T07:07:57+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija is at it again - New Jersey Jewish News",
     "published": "2026-11-12T17:33:38+00:00",
     "summary": "Deni Avdija is at it again New Jersey Jewish News"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday - CBS Sports",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija News: Stuffs stat sheet Wednesday - RotoWire",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Deni Avdija News: Stuffs stat sheet Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke - Rip City Project",
     "published": "2026-11-12T15:51:13+00:00",
     "summary": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' - The Jerusalem Post",
     "published": "2026-11-12T15:40:00+00:00",
     "summary": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija drops 28 points Wednesday - FantasyPros",
     "published": "2026-11-12T07:00:50+00:00",
     "summary": "Deni Avdija drops 28 points Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Damian Lillard rally Blazers past Thunder - TalkBasket.net",
     "published": "2026-11-12T06:45:22+00:00",
     "summary": "Deni Avdija, Damian Lillard rally Blazers past Thunder TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija, Blazers complete two-game sweep of Thunder - Reuters",
     "published": "2026-11-12T06:06:00+00:00",
     "summary": "Deni Avdija, Blazers complete two-game sweep of Thunder Reuters"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers sweep Thunder behind Deni Avdija's 28 points - CBS Sports",
     "published": "2026-11-12T05:56:00+00:00",
     "summary": "Trail Blazers sweep Thunder behind Deni Avdija's 28 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija - Ynetnews",
     "published": "2026-11-12T05:44:18+00:00",
     "summary": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija slams it home - Yahoo Sports",
     "published": "2026-11-12T05:39:51+00:00",
     "summary": "Deni Avdija slams it home Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-12T05:30:17+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City - NBC Sports",
     "published": "2026-11-12T05:25:49+00:00",
     "summary": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ - Hoops Wire",
     "published": "2026-11-11T21:32:59+00:00",
     "summary": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers' Deni Avdija: Powers Portland to victory - CBS Sports",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Powers Portland to victory CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija News: Powers Portland to victory - RotoWire",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Deni Avdija News: Powers Portland to victory RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him - Basketball Network",
     "published": "2026-11-11T11:26:00+00:00",
     "summary": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-11T07:45:52+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Hilton Head Island Packet",
     "published": "2026-11-11T06:51:00+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Hilton Head Island Packet"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija with the And-1!, 11/10/2026 - Yahoo Sports",
     "published": "2026-11-11T06:40:42+00:00",
     "summary": "Deni Avdija with the And-1!, 11/10/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score - ESPN Singapore",
     "published": "2026-11-11T05:37:22+00:00",
     "summary": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-11T05:03:49+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    }
   ]
  }
 ]
}
</input>