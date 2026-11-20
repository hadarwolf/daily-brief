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
  "home": "Brooklyn Nets",
  "away": "Orlando Magic",
  "kickoff_utc": "2026-11-21T00:30:00.000Z"
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
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Grêmio",
     "away": "Bahia",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Corinthians",
     "away": "Botafogo",
     "status": "FINISHED",
     "score": "4-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T22:30:00Z",
     "home": "Vasco da Gama",
     "away": "Internacional",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T22:30:00Z",
     "home": "Vitória",
     "away": "Bragantino",
     "status": "FINISHED",
     "score": "2-1"
    },
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
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-20T19:45:00Z",
     "home": "Troyes",
     "away": "Le Havre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-20T20:00:00Z",
     "home": "Athletic",
     "away": "Espanyol",
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
    "home": "Memphis Grizzlies",
    "away": "Golden State Warriors",
    "score": "126-98",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Portland Trail Blazers",
    "score": "114-124",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "New York Knicks",
    "score": "99-102",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "LA Clippers",
    "score": "124-112",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-11-21T00:00:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-21T00:30:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-21T00:30:00Z"
   },
   {
    "home": "Detroit Pistons",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-21T00:30:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-21T01:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-21T01:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-21T02:30:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-11-21T03:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-11-21T03:00:00Z"
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
     "title": "EFL preview: Evans' gripes & unexpected departures",
     "published": "2026-11-20T08:24:38+00:00",
     "summary": "BBC Sport explores five things to capture your attention this EFL weekend."
    },
    {
     "ref": "bbc_football#1",
     "title": "'Milan, Real & Man Utd eye Napoli's McTominay' - gossip",
     "published": "2026-11-20T08:07:48+00:00",
     "summary": "AC Milan, Manchester United and Real Madrid are reportedly interested in Napoli's Scott McTominay, while it is claimed Celtic would be interested in Aston Villa's John McGinn."
    },
    {
     "ref": "bbc_football#2",
     "title": "Listen: Premiership preview - can Falkirk really finish third?",
     "published": "2026-11-20T08:00:00+00:00",
     "summary": "Can Falkirk finish third and will Rangers keep their unbeaten run going?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Inside the rise of 'humble' Nyoni and why Iraola trusts him",
     "published": "2026-11-20T07:42:04+00:00",
     "summary": "Teenage midfielder Trey Nyoni backed himself in the summer to play regular football for Liverpool. He is doing exactly that and thriving under Andoni Iraola."
    },
    {
     "ref": "bbc_football#4",
     "title": "Moore eyes Kane shirt as Spurs' past and future stars meet",
     "published": "2026-11-20T07:26:36+00:00",
     "summary": "Cologne loanee Mikey Moore says he hopes to exchange shirts with former Spurs team-mate Harry Kane when they face Bayern Munich on Friday."
    },
    {
     "ref": "bbc_football#5",
     "title": "Too late for Jackson? - FPL gameweek 11 dilemmas",
     "published": "2026-11-20T07:08:51+00:00",
     "summary": "BBC Sport's Fantasy Premier League expert Gianni Buttice gives his answers to some of the biggest dilemmas facing managers in gameweek 11."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-20T06:43:38+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "'I felt like I was a ghost' - when players miss a season through injury",
     "published": "2026-11-20T06:13:23+00:00",
     "summary": "Not pleasant to be around and staring at a wall for hours after being told you are not going to the World Cup - what's it like for footballers when they miss a season due to serious injury?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Arsenal 'have ingredients' but Europe's elite on another level",
     "published": "2026-11-19T23:57:54+00:00",
     "summary": "In a difficult defeat by French giants Lyon, Arsenal were shown the gap they need to bridge to challenge for the Champions League."
    },
    {
     "ref": "bbc_football#9",
     "title": "Arsenal 'have ingredients' but Europe's elite on another level",
     "published": "2026-11-19T23:57:54+00:00",
     "summary": "In a difficult defeat by French giants Lyon, Arsenal were shown the gap they need to bridge to challenge for the Champions League."
    },
    {
     "ref": "bbc_football#10",
     "title": "Lyon outclass Arsenal for Champions League win",
     "published": "2026-11-19T22:56:07+00:00",
     "summary": "Arsenal fall to a 2-0 defeat against a superior Lyon side in the Women's Champions League, dealing a blow to their hopes of automatic quarter-final qualification."
    },
    {
     "ref": "bbc_football#11",
     "title": "Barcelona target Man Utd's Martinez - Friday's gossip",
     "published": "2026-11-19T21:57:22+00:00",
     "summary": "Barcelona interested in Lisandro Martinez, while Manchester United target Fulham defensive pair and Liverpool scout Serie A top scorer, plus more."
    },
    {
     "ref": "bbc_football#12",
     "title": "Shevchenko accuses Mudryk camp of 'baseless slander'",
     "published": "2026-11-19T20:44:11+00:00",
     "summary": "Ukraine great Andriy Shevchenko accuses Mykhailo Mudryk of a \"baseless slander\" after the on-loan Tottenham winger blamed his failed drugs test on the nation's football association."
    },
    {
     "ref": "bbc_football#13",
     "title": "Frank happy to be 'back in the circus' at Palace",
     "published": "2026-11-19T20:16:10+00:00",
     "summary": "Thomas Frank is happy to be \"back in the circus\" after speaking at his first news conference as Crystal Palace manager."
    },
    {
     "ref": "bbc_football#14",
     "title": "New manager Frick to take Aberdeen back to basics",
     "published": "2026-11-19T19:11:26+00:00",
     "summary": "Head coach Mario Frick says his track record proves he can produce exciting football - but a back-to-basics approach is needed at Aberdeen."
    },
    {
     "ref": "bbc_football#15",
     "title": "New manager Frick to take Aberdeen back to basics",
     "published": "2026-11-19T19:11:26+00:00",
     "summary": "Head coach Mario Frick says his track record proves he can produce exciting football - but a back-to-basics approach is needed at Aberdeen."
    },
    {
     "ref": "bbc_football#16",
     "title": "England fined for fans' anti-Catholic chants in Spain",
     "published": "2026-11-19T19:11:03+00:00",
     "summary": "England are punished by Uefa following anti-Catholic chanting from the away fans during their Nations League victory in Spain."
    },
    {
     "ref": "bbc_football#17",
     "title": "Sutton's predictions v world champion boxer Lauren Price",
     "published": "2026-11-19T18:52:00+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on world champion boxer Lauren Price, plus the BBC readers and AI, with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#18",
     "title": "Pochettino's first Man Utd training session filmed by drone operator",
     "published": "2026-11-19T18:45:56+00:00",
     "summary": "Mauricio Pochettino's first Manchester United training session has been filmed by fan with a drone from outside the club's Carrington training ground."
    },
    {
     "ref": "bbc_football#19",
     "title": "All done deals from September-November 2026",
     "published": "2026-11-19T17:54:30+00:00",
     "summary": "Check out the significant signings and departures in the Premier League, Scottish Premiership, EFL and Women's Super League."
    },
    {
     "ref": "bbc_football#20",
     "title": "We'll only sell if offer makes club blink - McInnes",
     "published": "2026-11-19T17:11:51+00:00",
     "summary": "Manager Derek McInnes says Rangers will only sell players in January if they receive offers that \"makes the club blink\"."
    },
    {
     "ref": "bbc_football#21",
     "title": "We'll only sell if offer makes club blink - McInnes",
     "published": "2026-11-19T17:11:51+00:00",
     "summary": "Manager Derek McInnes says Rangers will only sell players in January if they receive offers that \"makes the club blink\"."
    },
    {
     "ref": "bbc_football#22",
     "title": "Manager ins and outs - 2026-27",
     "published": "2026-11-19T16:45:46+00:00",
     "summary": "BBC Sport tracks all the manager ins and outs in the Premier League, Scottish Premiership, Women's Super League, English Football League and National League."
    },
    {
     "ref": "bbc_football#23",
     "title": "Football Daily",
     "published": "2026-11-19T16:42:00+00:00",
     "summary": "Ellen White joins Rick & Lloyd to discuss the BBC Men’s Footballer of the Year shortlist."
    },
    {
     "ref": "bbc_football#24",
     "title": "Crawley keep Blackwell as boss until end of season",
     "published": "2026-11-19T16:40:30+00:00",
     "summary": "Crawley Town appoint Kevin Blackwell as manager until the end of the season after the 67-year-old's spell in temporary charge."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 - Sportskeeda",
     "published": "2026-11-20T10:26:40+00:00",
     "summary": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Argentine star Lionel Messi earns $28.3 million, more than most MLS teams - Billionaires.Africa",
     "published": "2026-11-20T10:24:53+00:00",
     "summary": "Argentine star Lionel Messi earns $28.3 million, more than most MLS teams Billionaires.Africa"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Nashville SC-Cincinnati - beIN SPORTS",
     "published": "2026-11-20T09:38:43+00:00",
     "summary": "Nashville SC-Cincinnati beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi tops MLS salaries with Lewandowski next - eNCA",
     "published": "2026-11-20T09:35:57+00:00",
     "summary": "Messi tops MLS salaries with Lewandowski next eNCA"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Suarez planning longer stay with Miami alongside Messi - beIN SPORTS",
     "published": "2026-11-20T09:33:02+00:00",
     "summary": "Suarez planning longer stay with Miami alongside Messi beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Son Heung-min Ranks Fourth in MLS Salary with $11.15 Million - 조선일보",
     "published": "2026-11-20T08:44:15+00:00",
     "summary": "Son Heung-min Ranks Fourth in MLS Salary with $11.15 Million 조선일보"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi of Inter Miami tops Major League Soccer salaries - Al Jazeera",
     "published": "2026-11-20T07:47:46+00:00",
     "summary": "Lionel Messi of Inter Miami tops Major League Soccer salaries Al Jazeera"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs - Eagle-Tribune",
     "published": "2026-11-20T07:16:03+00:00",
     "summary": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs Eagle-Tribune"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs - FOX Sports",
     "published": "2026-11-20T07:03:53+00:00",
     "summary": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami vs Columbus Crew Prediction, Betting Tips, Lineups & Odds | 21 Nov 2026 - Sportsgambler",
     "published": "2026-11-20T06:35:58+00:00",
     "summary": "Inter Miami vs Columbus Crew Prediction, Betting Tips, Lineups & Odds | 21 Nov 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi is the highest-paid player in MLS: How much do Lewandowski and Griezmann earn? - Zamin.uz",
     "published": "2026-11-20T05:12:00+00:00",
     "summary": "Messi is the highest-paid player in MLS: How much do Lewandowski and Griezmann earn? Zamin.uz"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "MLS 2026 salaries announced: How much is Messi getting paid in Major League Soccer? Who is highest paid? - Sportstar",
     "published": "2026-11-20T03:23:46+00:00",
     "summary": "MLS 2026 salaries announced: How much is Messi getting paid in Major League Soccer? Who is highest paid? Sportstar"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "It’s Miami Time: Get Ready for Inter Miami CF’s Playoffs Opener This Saturday Presented by Nu - Inter Miami CF",
     "published": "2026-11-20T01:19:18+00:00",
     "summary": "It’s Miami Time: Get Ready for Inter Miami CF’s Playoffs Opener This Saturday Presented by Nu Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "What to know about the 2026 MLS playoffs: Bracket, schedule and more - NBC 6 South Florida",
     "published": "2026-11-20T00:36:39+00:00",
     "summary": "What to know about the 2026 MLS playoffs: Bracket, schedule and more NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami CF, Levi's partner on collection - The Business Journals",
     "published": "2026-11-20T00:33:00+00:00",
     "summary": "Inter Miami CF, Levi's partner on collection The Business Journals"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Toronto vs. Inter Miami CF - Live Score - May 08, 2027 - FOX Sports",
     "published": "2026-11-20T00:09:45+00:00",
     "summary": "Toronto vs. Inter Miami CF - Live Score - May 08, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF vs. Montreal - Live Score - May 01, 2027 - FOX Sports",
     "published": "2026-11-20T00:08:39+00:00",
     "summary": "Inter Miami CF vs. Montreal - Live Score - May 01, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? - thepress.net",
     "published": "2026-11-19T23:13:18+00:00",
     "summary": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? thepress.net"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? - CBS Sports",
     "published": "2026-11-19T23:12:00+00:00",
     "summary": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? CBS Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami vs Columbus Crew Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-11-19T23:00:00+00:00",
     "summary": "Inter Miami vs Columbus Crew Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi's MLS salary is more than double Philadelphia Union's total payroll - PhillyVoice",
     "published": "2026-11-19T22:56:21+00:00",
     "summary": "Lionel Messi's MLS salary is more than double Philadelphia Union's total payroll PhillyVoice"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi makes more than all but 3 other MLS teams, records show - The Palm Beach Post",
     "published": "2026-11-19T22:02:00+00:00",
     "summary": "Lionel Messi makes more than all but 3 other MLS teams, records show The Palm Beach Post"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi still rules the money league! Inter Miami superstar leads MLS salaries as five players break the $10m barrier - Goal.com",
     "published": "2026-11-19T21:54:29+00:00",
     "summary": "Lionel Messi still rules the money league! Inter Miami superstar leads MLS salaries as five players break the $10m barrier Goal.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Prediction Inter Miami vs Columbus Crew: analysis, odds and betting tips - BetMines",
     "published": "2026-11-19T21:36:27+00:00",
     "summary": "Prediction Inter Miami vs Columbus Crew: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Crew Embraces Playoff Challenge against Messi - WSYX",
     "published": "2026-11-19T21:02:58+00:00",
     "summary": "Crew Embraces Playoff Challenge against Messi WSYX"
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
     "published": "2026-11-20T06:24:46+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises - The Times of Israel",
     "published": "2026-11-20T04:26:00+00:00",
     "summary": "Deni Avdija, Latkes, and a Menorah: Portland’s Latest Zionist Complicity Crises The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija (foot) out Thursday vs. Bucks - NBC Sports",
     "published": "2026-11-20T03:46:07+00:00",
     "summary": "Deni Avdija (foot) out Thursday vs. Bucks NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers Rule Deni Avdija Out Against Bucks - Peradaban.id",
     "published": "2026-11-20T01:24:47+00:00",
     "summary": "Trail Blazers Rule Deni Avdija Out Against Bucks Peradaban.id"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers vs. Bucks Injury Report: Deni Avdija, Toumani Camara Questionable; Myles Turner, Kyle Kuzma Out - SSBCrack",
     "published": "2026-11-20T01:04:17+00:00",
     "summary": "Trail Blazers vs. Bucks Injury Report: Deni Avdija, Toumani Camara Questionable; Myles Turner, Kyle Kuzma Out SSBCrack"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija (foot) ruled out Thursday - FantasyPros",
     "published": "2026-11-20T00:54:00+00:00",
     "summary": "Deni Avdija (foot) ruled out Thursday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers news: Deni Avdija will miss Bucks game with foot injury - ClutchPoints",
     "published": "2026-11-20T00:52:00+00:00",
     "summary": "Blazers news: Deni Avdija will miss Bucks game with foot injury ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Blazers say Deni Avdija is out for tonight’s game @ … - Yahoo Sports",
     "published": "2026-11-20T00:35:00+00:00",
     "summary": "Blazers say Deni Avdija is out for tonight’s game @ … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Portland Trail Blazers Injury Update: Is Deni Avdija Playing Tonight vs. Bucks? - Heavy.com",
     "published": "2026-11-20T00:26:00+00:00",
     "summary": "Portland Trail Blazers Injury Update: Is Deni Avdija Playing Tonight vs. Bucks? Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers' Deni Avdija: Remains sidelined Thursday - CBS Sports",
     "published": "2026-11-20T00:21:37+00:00",
     "summary": "Trail Blazers' Deni Avdija: Remains sidelined Thursday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija Injury: Remains sidelined Thursday - RotoWire",
     "published": "2026-11-20T00:21:37+00:00",
     "summary": "Deni Avdija Injury: Remains sidelined Thursday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Final Injury Report for Trail Blazers-Bucks: Will Deni Avdija, Toumani Camara Play? - Yahoo Sports",
     "published": "2026-11-19T21:00:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Bucks: Will Deni Avdija, Toumani Camara Play? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija Injury Update: Is Avdija Playing Tonight vs. Bucks? - PrizePicks",
     "published": "2026-11-19T18:48:56+00:00",
     "summary": "Deni Avdija Injury Update: Is Avdija Playing Tonight vs. Bucks? PrizePicks"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Bucks injury report - Yahoo Sports",
     "published": "2026-11-19T16:04:28+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Bucks injury report Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Nets' Ben Saraf: Recalled by Brooklyn - CBS Sports",
     "published": "2026-11-19T15:55:38+00:00",
     "summary": "Nets' Ben Saraf: Recalled by Brooklyn CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) - Sports Illustrated",
     "published": "2026-11-19T13:53:58+00:00",
     "summary": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) - Sports Illustrated",
     "published": "2026-11-19T13:27:01+00:00",
     "summary": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Ben Saraf leads Long Island Nets to 123-112 revenge win over Delaware - NetsDaily",
     "published": "2026-11-19T12:40:58+00:00",
     "summary": "Ben Saraf leads Long Island Nets to 123-112 revenge win over Delaware NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 - DraftKings Network",
     "published": "2026-11-19T04:15:00+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija (foot) listed questionable Thursday - FantasyPros",
     "published": "2026-11-18T23:02:09+00:00",
     "summary": "Deni Avdija (foot) listed questionable Thursday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks - Sports Illustrated",
     "published": "2026-11-18T22:56:26+00:00",
     "summary": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers' Deni Avdija: Questionable versus Bucks - CBS Sports",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Questionable versus Bucks CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija Injury: Questionable versus Bucks - RotoWire",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Deni Avdija Injury: Questionable versus Bucks RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija (foot) questionable Thursday vs. MIL - NBC Sports",
     "published": "2026-11-18T22:52:00+00:00",
     "summary": "Deni Avdija (foot) questionable Thursday vs. MIL NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Wizards continue to be proven wrong for trading away Deni Avdija - Wiz of Awes",
     "published": "2026-11-18T11:00:00+00:00",
     "summary": "Wizards continue to be proven wrong for trading away Deni Avdija Wiz of Awes"
    }
   ]
  }
 ]
}
</input>