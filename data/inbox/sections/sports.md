Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- No favorite team plays today.
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
    "home": "Indiana Pacers",
    "away": "Washington Wizards",
    "score": "114-101",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Cleveland Cavaliers",
    "score": "107-115",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Boston Celtics",
    "score": "93-98",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "San Antonio Spurs",
    "score": "119-124",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Denver Nuggets",
    "score": "118-123",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Los Angeles Lakers",
    "score": "112-123",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Brooklyn Nets",
    "score": "111-145",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Orlando Magic",
    "score": "108-123",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Golden State Warriors",
    "score": "115-108",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Oklahoma City Thunder",
    "score": "118-108",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Philadelphia 76ers",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-13T00:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-13T00:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-13T01:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-11-13T02:00:00Z"
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
     "title": "Six matches that defined Carrick's Man Utd tenure",
     "published": "2026-11-12T10:39:54+00:00",
     "summary": "BBC Sport looks back at the six Premier League matches that defined the highs and lows of Michael Carrick's 10-month spell in charge of Manchester United."
    },
    {
     "ref": "bbc_football#1",
     "title": "The chaos that took Carrick from two-year deal to sacked within 15 games",
     "published": "2026-11-12T10:21:29+00:00",
     "summary": "Michael Carrick becomes the third Manchester United manager to be sacked in three seasons - where did it go wrong?"
    },
    {
     "ref": "bbc_football#2",
     "title": "'Unfinished business' - Tuchel committed to England",
     "published": "2026-11-12T08:42:47+00:00",
     "summary": "England head coach Thomas Tuchel says he has \"no intention\" of leaving the job before Euro 2028 regardless of any offers from major clubs."
    },
    {
     "ref": "bbc_football#3",
     "title": "Young duo at heart of Nations League's meanest defence",
     "published": "2026-11-12T08:17:52+00:00",
     "summary": "With Northern Ireland yet to concede a goal in the 2026-27 Nations League, young defenders Ruairi McConville and Tom Atcheson have been impressing for Michael O'Neill's side."
    },
    {
     "ref": "bbc_football#4",
     "title": "Podcast: What kind of boss do Aberdeen need & have Hibs turned a corner?",
     "published": "2026-11-12T08:00:00+00:00",
     "summary": "Scotland face North Macedonia, Aberdeen seek a manager and Hibs find form."
    },
    {
     "ref": "bbc_football#5",
     "title": "Aberdeen speak to seven managerial candidates - gossip",
     "published": "2026-11-12T07:44:49+00:00",
     "summary": "Aberdeen speak to managerial candidates and in-form Rangers forward attracts attention from English Championship."
    },
    {
     "ref": "bbc_football#6",
     "title": "USA withdraw from U17 World Cup",
     "published": "2026-11-12T07:44:21+00:00",
     "summary": "The USA pull out of the Under-17 World Cup, which starts in Qatar next week, because of the risk of armed conflict."
    },
    {
     "ref": "bbc_football#7",
     "title": "Robertson set to make history but his hero Dalglish will always be King",
     "published": "2026-11-12T07:19:57+00:00",
     "summary": "Ties bind Scotland captain Andy Robertson and the man whose caps record he's about to equal, Kenny Dalglish, in more ways than one, writes Tom English."
    },
    {
     "ref": "bbc_football#8",
     "title": "Robertson set to make history but his hero Dalglish will always be King",
     "published": "2026-11-12T07:19:57+00:00",
     "summary": "Ties bind Scotland captain Andy Robertson and the man whose caps record he's about to equal, Kenny Dalglish, in more ways than one, writes Tom English."
    },
    {
     "ref": "bbc_football#9",
     "title": "England's Blues brothers - how the Bellinghams helped save Birmingham",
     "published": "2026-11-12T07:12:41+00:00",
     "summary": "Boyhood Birmingham City fans Jude and Jobe Bellingham could become the first brothers to play for England for 19 years."
    },
    {
     "ref": "bbc_football#10",
     "title": "How 'Barca way' continues despite big-name exits",
     "published": "2026-11-12T06:41:09+00:00",
     "summary": "Arsenal face a much-changed Barcelona in the Women's Champions League on Thursday - but how have the Spanish giants coped so well with losing key players?"
    },
    {
     "ref": "bbc_football#11",
     "title": "How 'Barca way' continues despite big-name exits",
     "published": "2026-11-12T06:41:09+00:00",
     "summary": "Arsenal face a much-changed Barcelona in the Women's Champions League on Thursday - but how have the Spanish giants coped so well with losing key players?"
    },
    {
     "ref": "bbc_football#12",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-12T06:29:12+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "Kane's top 10 England moments - which was your favourite?",
     "published": "2026-11-12T06:25:26+00:00",
     "summary": "BBC Sport looks at 10 of Harry Kane's most iconic England moments as he prepares to break his country's caps record."
    },
    {
     "ref": "bbc_football#14",
     "title": "Wales' James warns of Norwegian revenge in Oslo",
     "published": "2026-11-12T04:32:42+00:00",
     "summary": "Winger Dan James says Wales proved a point when they beat Norway – but is wary Erling Haaland's team will now want to do the same to them."
    },
    {
     "ref": "bbc_football#15",
     "title": "Euro Leagues",
     "published": "2026-11-11T23:08:00+00:00",
     "summary": "John Bennett is joined by Rafa Honigstein and Julien Laurens"
    },
    {
     "ref": "bbc_football#16",
     "title": "Arsenal join Scott chase - Thursday's gossip",
     "published": "2026-11-11T21:38:01+00:00",
     "summary": "Arsenal contact Bournemouth about midfielder Alex Scott, Manchester United add two defenders to list of potential targets, Aston Villa weigh up move for Chelsea midfielder Romeo Lavia, plus more."
    },
    {
     "ref": "bbc_football#17",
     "title": "Football Daily",
     "published": "2026-11-11T20:53:00+00:00",
     "summary": "Mauricio Pochettino could replace Michael Carrick at Manchester United."
    },
    {
     "ref": "bbc_football#18",
     "title": "Football Daily",
     "published": "2026-11-11T18:15:00+00:00",
     "summary": "Harry Kane will make his 126th appearance for England on Thursday"
    },
    {
     "ref": "bbc_football#19",
     "title": "Shrewsbury 'hit all the boxes' for new owners - Friedel",
     "published": "2026-11-11T17:44:42+00:00",
     "summary": "In an exclusive interview with BBC Radio Shropshire new Shrewsbury Town sporting director Brad Friedel says the club are a perfect fit."
    },
    {
     "ref": "bbc_football#20",
     "title": "Legally restrict heading a football in training, says MP",
     "published": "2026-11-11T17:38:18+00:00",
     "summary": "An MP is calling for legal safeguards to limit repetitive heading in football training, amid growing concerns about the risk of brain injury."
    },
    {
     "ref": "bbc_football#21",
     "title": "O'Shea proud of how team-mates handled Israel games",
     "published": "2026-11-11T17:33:37+00:00",
     "summary": "Republic of Ireland defender Dara O'Shea is \"proud\" of how he and his team-mates came through a trying October international window."
    },
    {
     "ref": "bbc_football#22",
     "title": "Leader, role model, extraordinary - how Kane's 'fairytale' came true",
     "published": "2026-11-11T16:44:58+00:00",
     "summary": "From the 21-year-old who scored 79 seconds into his debut to being on the brink of breaking his nation's appearance record, BBC Sport looks at Harry Kane's England career."
    },
    {
     "ref": "bbc_football#23",
     "title": "No excuses as Pocognoli seeks first Hampden victory",
     "published": "2026-11-11T16:38:14+00:00",
     "summary": "Having lost his first two home matches, Scotland head coach Sebastien Pocognoli needs to deliver a convincing win against North Macedonia, writes Tom English."
    },
    {
     "ref": "bbc_football#24",
     "title": "Referee observer banned for discriminatory comments",
     "published": "2026-11-11T16:26:24+00:00",
     "summary": "A Pro Ref referee observer is banned for nine weeks and fined £200 for making discriminatory remarks after a match he was working at."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi effect continues to shatter MLS records as Inter Miami feature in eight of the top 10 highest-attended regular season matches of 2026 - Goal.com",
     "published": "2026-11-12T08:00:10+00:00",
     "summary": "Lionel Messi effect continues to shatter MLS records as Inter Miami feature in eight of the top 10 highest-attended regular season matches of 2026 Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi set for emotional return to Argentina as Inter Miami plan River Plate friendly - Free Press Kashmir",
     "published": "2026-11-12T05:22:57+00:00",
     "summary": "Lionel Messi set for emotional return to Argentina as Inter Miami plan River Plate friendly Free Press Kashmir"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Supercomputer Ignores Lionel Messi Factor to Predict 2026 MLS Cup Winner - Sports Illustrated",
     "published": "2026-11-12T02:00:00+00:00",
     "summary": "Supercomputer Ignores Lionel Messi Factor to Predict 2026 MLS Cup Winner Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "The Messi Effect Continues: Inter Miami Breaks MLS Attendance Records - beIN SPORTS",
     "published": "2026-11-12T01:36:00+00:00",
     "summary": "The Messi Effect Continues: Inter Miami Breaks MLS Attendance Records beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Upstaged by Masterful Performance From Eight-Year-Old Son - Sports Illustrated",
     "published": "2026-11-11T21:30:00+00:00",
     "summary": "Lionel Messi Upstaged by Masterful Performance From Eight-Year-Old Son Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami CF Drives Record Crowds Across MLS During Historic 2026 Season - Inter Miami CF",
     "published": "2026-11-11T21:04:15+00:00",
     "summary": "Inter Miami CF Drives Record Crowds Across MLS During Historic 2026 Season Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Charlotte Inter Miami Soccer - Bluefield Daily Telegraph",
     "published": "2026-11-11T20:49:31+00:00",
     "summary": "Charlotte Inter Miami Soccer Bluefield Daily Telegraph"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS sets new attendance and audience records powered by Messi and Inter Miami - Diario AS",
     "published": "2026-11-11T19:52:38+00:00",
     "summary": "MLS sets new attendance and audience records powered by Messi and Inter Miami Diario AS"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "CBS News Miami gets behind the scenes look at Inter Miami's new stadium - CBS News",
     "published": "2026-11-11T19:27:00+00:00",
     "summary": "CBS News Miami gets behind the scenes look at Inter Miami's new stadium CBS News"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Does Lionel Messi Deserve to Win a Historic Third Consecutive MLS MVP Award? - LiveScore",
     "published": "2026-11-11T19:14:58+00:00",
     "summary": "Does Lionel Messi Deserve to Win a Historic Third Consecutive MLS MVP Award? LiveScore"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS attendance essentially flat in World Cup year - Sports Business Journal",
     "published": "2026-11-11T17:00:47+00:00",
     "summary": "MLS attendance essentially flat in World Cup year Sports Business Journal"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi's 113 to 115 Goals and Assists in 2012: Checking the Viral Record List - The False 9",
     "published": "2026-11-11T16:51:58+00:00",
     "summary": "Messi's 113 to 115 Goals and Assists in 2012: Checking the Viral Record List The False 9"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi beaten to MLS award by Orlando City rival just days before he leads Inter Miami playoff charge - The Sun",
     "published": "2026-11-11T16:31:58+00:00",
     "summary": "Lionel Messi beaten to MLS award by Orlando City rival just days before he leads Inter Miami playoff charge The Sun"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami dominates MLS with 80 goals and the league's most powerful attack in 2026 - Pasión Fútbol",
     "published": "2026-11-11T16:25:00+00:00",
     "summary": "Inter Miami dominates MLS with 80 goals and the league's most powerful attack in 2026 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Cristiano Ronaldo And Lionel Messi Together At Inter Miami? Beckham Link Fuels January Transfer Speculation - The Sunday Guardian",
     "published": "2026-11-11T15:27:49+00:00",
     "summary": "Cristiano Ronaldo And Lionel Messi Together At Inter Miami? Beckham Link Fuels January Transfer Speculation The Sunday Guardian"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami vs Columbus Prediction and Picks: MLS Playoffs Round One, Game 1 (Nov 21) - VegasOdds.com",
     "published": "2026-11-11T15:23:00+00:00",
     "summary": "Inter Miami vs Columbus Prediction and Picks: MLS Playoffs Round One, Game 1 (Nov 21) VegasOdds.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi scores twice, Inter Miami beats DC United 4-0 - WJLA",
     "published": "2026-11-11T15:21:20+00:00",
     "summary": "Messi scores twice, Inter Miami beats DC United 4-0 WJLA"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return - Yahoo",
     "published": "2026-11-11T14:30:27+00:00",
     "summary": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return Yahoo"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return - USA Today",
     "published": "2026-11-11T14:30:00+00:00",
     "summary": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return USA Today"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Global Child “Travel & Purpose” filming in Miami Beach - CBS News",
     "published": "2026-11-11T14:04:00+00:00",
     "summary": "Global Child “Travel & Purpose” filming in Miami Beach CBS News"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inside Lionel Messi and Inter Miami’s Whirlwind Week - Yahoo Sports",
     "published": "2026-11-11T12:11:28+00:00",
     "summary": "Inside Lionel Messi and Inter Miami’s Whirlwind Week Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "South Florida to stay warm until approaching cold front ushers in chilly morning temperatures - CBS News",
     "published": "2026-11-11T12:01:00+00:00",
     "summary": "South Florida to stay warm until approaching cold front ushers in chilly morning temperatures CBS News"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Video shows moment man accused of raping women in New York City is arrested in Miami Beach - CBS News",
     "published": "2026-11-11T11:37:00+00:00",
     "summary": "Video shows moment man accused of raping women in New York City is arrested in Miami Beach CBS News"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Generating fast cash can be simple no matter the circumstance by following some easy tips - CBS News",
     "published": "2026-11-11T11:31:00+00:00",
     "summary": "Generating fast cash can be simple no matter the circumstance by following some easy tips CBS News"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios - Inter Miami CF",
     "published": "2026-11-10T20:05:51+00:00",
     "summary": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios Inter Miami CF"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija leads Trail Blazers with 28 points - NBC Sports",
     "published": "2026-11-12T07:03:38+00:00",
     "summary": "Deni Avdija leads Trail Blazers with 28 points NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija drops 28 points Wednesday - FantasyPros",
     "published": "2026-11-12T07:00:00+00:00",
     "summary": "Deni Avdija drops 28 points Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija, Damian Lillard rally Blazers past Thunder - TalkBasket.net",
     "published": "2026-11-12T06:45:22+00:00",
     "summary": "Deni Avdija, Damian Lillard rally Blazers past Thunder TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija, Blazers complete two-game sweep of Thunder - 98.1 The Sports Animal",
     "published": "2026-11-12T06:23:05+00:00",
     "summary": "Deni Avdija, Blazers complete two-game sweep of Thunder 98.1 The Sports Animal"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers sweep Thunder behind Deni Avdija's 28 points - CBS Sports",
     "published": "2026-11-12T05:56:00+00:00",
     "summary": "Trail Blazers sweep Thunder behind Deni Avdija's 28 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija - Ynetnews",
     "published": "2026-11-12T05:44:18+00:00",
     "summary": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija slams it home, 11/11/2026 - Yahoo Sports",
     "published": "2026-11-12T05:39:51+00:00",
     "summary": "Deni Avdija slams it home, 11/11/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-12T05:37:52+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-12T05:30:17+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ - Hoops Wire",
     "published": "2026-11-11T21:32:59+00:00",
     "summary": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City - NBC Sports",
     "published": "2026-11-11T17:55:19+00:00",
     "summary": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija News: Powers Portland to victory - RotoWire",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Deni Avdija News: Powers Portland to victory RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Trail Blazers' Deni Avdija: Powers Portland to victory - CBS Sports",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Powers Portland to victory CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him - Basketball Network",
     "published": "2026-11-11T11:26:00+00:00",
     "summary": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-11T07:45:52+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Hilton Head Island Packet",
     "published": "2026-11-11T06:51:00+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Hilton Head Island Packet"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija with the And-1!, 11/10/2026 - Yahoo Sports",
     "published": "2026-11-11T06:40:42+00:00",
     "summary": "Deni Avdija with the And-1!, 11/10/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score - ESPN Singapore",
     "published": "2026-11-11T05:37:22+00:00",
     "summary": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN India",
     "published": "2026-11-11T05:03:49+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN India"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Avdija Nominated for Western Conference Player of the Week - Blazer's Edge",
     "published": "2026-11-10T03:16:09+00:00",
     "summary": "Avdija Nominated for Western Conference Player of the Week Blazer's Edge"
    }
   ]
  }
 ]
}
</input>