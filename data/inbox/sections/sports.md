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
    "score": "76-77",
    "status": "3rd Qtr"
   },
   {
    "home": "Houston Rockets",
    "away": "Golden State Warriors",
    "score": "54-51",
    "status": "2nd Qtr"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Oklahoma City Thunder",
    "score": "28-32",
    "status": "2nd Qtr"
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
     "title": "Euro Leagues",
     "published": "2026-11-11T23:08:00+00:00",
     "summary": "John Bennett is joined by Rafa Honigstein and Julien Laurens"
    },
    {
     "ref": "bbc_football#1",
     "title": "Arsenal join Scott chase - Thursday's gossip",
     "published": "2026-11-11T21:38:01+00:00",
     "summary": "Arsenal contact Bournemouth about midfielder Alex Scott, Manchester United add two defenders to list of potential targets, Aston Villa weigh up move for Chelsea midfielder Romeo Lavia, plus more."
    },
    {
     "ref": "bbc_football#2",
     "title": "Football Daily",
     "published": "2026-11-11T20:53:00+00:00",
     "summary": "Mauricio Pochettino could replace Michael Carrick at Manchester United."
    },
    {
     "ref": "bbc_football#3",
     "title": "Football Daily",
     "published": "2026-11-11T18:15:00+00:00",
     "summary": "Harry Kane will make his 126th appearance for England on Thursday"
    },
    {
     "ref": "bbc_football#4",
     "title": "Shrewsbury 'hit all the boxes' for new owners - Friedel",
     "published": "2026-11-11T17:44:42+00:00",
     "summary": "In an exclusive interview with BBC Radio Shropshire new Shrewsbury Town sporting director Brad Friedel says the club is a perfect fit for the new owners."
    },
    {
     "ref": "bbc_football#5",
     "title": "Legally restrict heading a football in training, says MP",
     "published": "2026-11-11T17:38:18+00:00",
     "summary": "An MP is calling for legal safeguards to limit repetitive heading in football training, amid growing concerns about the risk of brain injury."
    },
    {
     "ref": "bbc_football#6",
     "title": "O'Shea proud of how team-mates handled Israel games",
     "published": "2026-11-11T17:33:37+00:00",
     "summary": "Republic of Ireland defender Dara O'Shea is \"proud\" of how he and his team-mates came through a trying October international window."
    },
    {
     "ref": "bbc_football#7",
     "title": "Leader, role model, extraordinary - how Kane's 'fairytale' came true",
     "published": "2026-11-11T16:44:58+00:00",
     "summary": "From 21-year-old who scored 79 seconds into his debut to being on the brink of breaking his nation's appearance record, BBC Sport looks at Harry Kane's England career."
    },
    {
     "ref": "bbc_football#8",
     "title": "No excuses as Pocognoli seeks first Hampden victory",
     "published": "2026-11-11T16:38:14+00:00",
     "summary": "Having lost his first two home matches, Scotland head coach Sebastien Pocognoli needs to deliver a convincing win against North Macedonia, writes Tom English."
    },
    {
     "ref": "bbc_football#9",
     "title": "Referee observer banned for discriminatory comments",
     "published": "2026-11-11T16:26:24+00:00",
     "summary": "A Pro Ref referee observer is banned for nine weeks and fined £200 for making discriminatory remarks after a match he was working at."
    },
    {
     "ref": "bbc_football#10",
     "title": "Pochettino ready to accept Man Utd offer to replace Carrick",
     "published": "2026-11-11T16:03:02+00:00",
     "summary": "Mauricio Pochettino is ready to accept an offer from Manchester United to become their next head coach."
    },
    {
     "ref": "bbc_football#11",
     "title": "Bristol City give Skubala opportunity to improve form",
     "published": "2026-11-11T15:52:30+00:00",
     "summary": "Bristol City chief executive Charlie Boss says head coach Michael Skubala will be given more time to improve their results."
    },
    {
     "ref": "bbc_football#12",
     "title": "Turkey-based Bates replaces Binks in Scotland squad",
     "published": "2026-11-11T13:37:08+00:00",
     "summary": "David Bates has been called up to the Scotland squad as fellow defender Luis Binks drops out for the matches against North Macedonia and Switzerland."
    },
    {
     "ref": "bbc_football#13",
     "title": "Turkey-based Bates replaces Binks in Scotland squad",
     "published": "2026-11-11T13:37:08+00:00",
     "summary": "David Bates has been called up to the Scotland squad as fellow defender Luis Binks drops out for the matches against North Macedonia and Switzerland."
    },
    {
     "ref": "bbc_football#14",
     "title": "Pochettino a decade in Man Utd's making - but Carrick deserves better",
     "published": "2026-11-11T12:58:17+00:00",
     "summary": "Mauricio Pochettino looks set to turn a decade-long courtship with Man Utd into a full-blown relationship, says chief football writer Phil McNulty."
    },
    {
     "ref": "bbc_football#15",
     "title": "How promotion, relegation and knockouts work in Nations League",
     "published": "2026-11-11T12:09:22+00:00",
     "summary": "With more than half of the 2026-27 Nations League group stage completed, BBC Sport looks at what will happen next in the competition."
    },
    {
     "ref": "bbc_football#16",
     "title": "Scotland without captain Weir for World Cup play-off",
     "published": "2026-11-11T11:59:18+00:00",
     "summary": "Scotland will be without Caroline Weir for the World Cup play-off final with Sweden following a setback in the influential midfielder's recovery from a muscle injury."
    },
    {
     "ref": "bbc_football#17",
     "title": "Scotland without captain Weir for World Cup play-off",
     "published": "2026-11-11T11:59:18+00:00",
     "summary": "Scotland will be without Caroline Weir for the World Cup play-off final with Sweden following a setback in the influential midfielder's recovery from a muscle injury."
    },
    {
     "ref": "bbc_football#18",
     "title": "Scotland without captain Weir for World Cup play-off",
     "published": "2026-11-11T11:59:18+00:00",
     "summary": "Scotland will be without Caroline Weir for the World Cup play-off final with Sweden following a setback in the influential midfielder's recovery from a muscle injury."
    },
    {
     "ref": "bbc_football#19",
     "title": "Assessing the reasons for Man City's decline in form under Maresca",
     "published": "2026-11-11T11:47:09+00:00",
     "summary": "The ongoing international break gives manager Enzo Maresca much-needed time to fix the growing issues in his Man City squad."
    },
    {
     "ref": "bbc_football#20",
     "title": "You are Scotland boss Pocognoli - what would you do?",
     "published": "2026-11-11T11:33:55+00:00",
     "summary": "Put yourself in the shoes of Scotland head coach Sebastien Pocognoli as he picks his starting XI for the home game with North Macedonia."
    },
    {
     "ref": "bbc_football#21",
     "title": "Bromley signings 'not good enough' - ex-boss Woodman",
     "published": "2026-11-11T10:32:23+00:00",
     "summary": "Ex-Bromley boss Andy Woodman criticises the club's summer recruitment and says he is looking forward to his next challenge."
    },
    {
     "ref": "bbc_football#22",
     "title": "Shirt pull on Isak should have been penalty - panel",
     "published": "2026-11-11T10:23:37+00:00",
     "summary": "Liverpool should have been awarded a penalty against Arsenal for Jurrien Timber's shirt pull on Alexander Isak, says a Premier League panel."
    },
    {
     "ref": "bbc_football#23",
     "title": "Robinson unfazed by Pochettino departure talk",
     "published": "2026-11-11T09:54:38+00:00",
     "summary": "Defender Antonee Robinson says speculation over USA manager Mauricio Pochettino's future has not affected the team's preparations for their Concacaf Nations League campaign."
    },
    {
     "ref": "bbc_football#24",
     "title": "NI can draw on strong club form in key window",
     "published": "2026-11-11T08:09:02+00:00",
     "summary": "Northern Ireland manager Michael O'Neill believes there are players in his squad who have the ability to become Premier League regulars."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Supercomputer Ignores Lionel Messi Factor to Predict 2026 MLS Cup Winner - Sports Illustrated",
     "published": "2026-11-12T02:00:00+00:00",
     "summary": "Supercomputer Ignores Lionel Messi Factor to Predict 2026 MLS Cup Winner Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "The Messi Effect Continues: Inter Miami Breaks MLS Attendance Records - beIN SPORTS",
     "published": "2026-11-12T01:36:00+00:00",
     "summary": "The Messi Effect Continues: Inter Miami Breaks MLS Attendance Records beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Developer overcomes hurdle to move forward with development behind historic Miami church - CBS News",
     "published": "2026-11-12T00:08:00+00:00",
     "summary": "Developer overcomes hurdle to move forward with development behind historic Miami church CBS News"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Fort Lauderdale holds Veterans Day ceremony to honor and celebrate those who served - CBS News",
     "published": "2026-11-11T23:49:00+00:00",
     "summary": "Fort Lauderdale holds Veterans Day ceremony to honor and celebrate those who served CBS News"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Man bonds out of jail after arrest for \"gas bomb on wheels\" - CBS News",
     "published": "2026-11-11T23:00:00+00:00",
     "summary": "Man bonds out of jail after arrest for \"gas bomb on wheels\" CBS News"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi Upstaged by Masterful Performance From Eight-Year-Old Son - Sports Illustrated",
     "published": "2026-11-11T21:30:00+00:00",
     "summary": "Lionel Messi Upstaged by Masterful Performance From Eight-Year-Old Son Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF Drives Record Crowds Across MLS During Historic 2026 Season - Inter Miami CF",
     "published": "2026-11-11T21:04:15+00:00",
     "summary": "Inter Miami CF Drives Record Crowds Across MLS During Historic 2026 Season Inter Miami CF"
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
     "title": "Does Lionel Messi Deserve to Win a Historic Third Consecutive MLS MVP Award? - Sports Illustrated",
     "published": "2026-11-11T19:00:02+00:00",
     "summary": "Does Lionel Messi Deserve to Win a Historic Third Consecutive MLS MVP Award? Sports Illustrated"
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
     "title": "Messi scores twice, Inter Miami beats DC United 4-0 - WJLA",
     "published": "2026-11-11T15:21:20+00:00",
     "summary": "Messi scores twice, Inter Miami beats DC United 4-0 WJLA"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return - Yahoo",
     "published": "2026-11-11T14:30:27+00:00",
     "summary": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return Yahoo"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return - USA Today",
     "published": "2026-11-11T14:30:00+00:00",
     "summary": "Ex-Inter Miami boss Mascherano ready to coach again, open to MLS return USA Today"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Global Child “Travel & Purpose” filming in Miami Beach - CBS News",
     "published": "2026-11-11T14:04:00+00:00",
     "summary": "Global Child “Travel & Purpose” filming in Miami Beach CBS News"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inside Lionel Messi and Inter Miami’s Whirlwind Week - Yahoo Sports",
     "published": "2026-11-11T12:11:28+00:00",
     "summary": "Inside Lionel Messi and Inter Miami’s Whirlwind Week Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Video shows moment man accused of raping women in New York City is arrested in Miami Beach - CBS News",
     "published": "2026-11-11T11:37:00+00:00",
     "summary": "Video shows moment man accused of raping women in New York City is arrested in Miami Beach CBS News"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "‘MVP’ – Fans react to Lionel Messi’s 2026 goal contribution record vs other MLS stars - Yahoo",
     "published": "2026-11-11T11:15:00+00:00",
     "summary": "‘MVP’ – Fans react to Lionel Messi’s 2026 goal contribution record vs other MLS stars Yahoo"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Charlotte Inter Miami Soccer - Bluefield Daily Telegraph",
     "published": "2026-11-11T06:00:00+00:00",
     "summary": "Charlotte Inter Miami Soccer Bluefield Daily Telegraph"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios - Inter Miami CF",
     "published": "2026-11-10T20:05:51+00:00",
     "summary": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi Set for Emotional Return to Argentina for Career-First Milestone - Sports Illustrated",
     "published": "2026-11-10T18:08:56+00:00",
     "summary": "Lionel Messi Set for Emotional Return to Argentina for Career-First Milestone Sports Illustrated"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Oklahoma City Thunder @ Portland Trail Blazers Odds - FanDuel Sportsbook",
     "published": "2026-11-12T00:42:22+00:00",
     "summary": "Oklahoma City Thunder @ Portland Trail Blazers Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ - Hoops Wire",
     "published": "2026-11-11T21:32:59+00:00",
     "summary": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City - NBC Sports",
     "published": "2026-11-11T17:55:19+00:00",
     "summary": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers' Deni Avdija: Powers Portland to victory - CBS Sports",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Powers Portland to victory CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija News: Powers Portland to victory - RotoWire",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Deni Avdija News: Powers Portland to victory RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him - Basketball Network",
     "published": "2026-11-11T11:26:00+00:00",
     "summary": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-11T07:45:52+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Belleville News-Democrat",
     "published": "2026-11-11T06:51:00+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Belleville News-Democrat"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija with the And-1!, 11/10/2026 - Yahoo Sports",
     "published": "2026-11-11T06:40:42+00:00",
     "summary": "Deni Avdija with the And-1!, 11/10/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-11T06:01:11+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-11T05:03:49+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Avdija Nominated for Western Conference Player of the Week - Blazer's Edge",
     "published": "2026-11-10T03:16:09+00:00",
     "summary": "Avdija Nominated for Western Conference Player of the Week Blazer's Edge"
    }
   ]
  }
 ]
}
</input>