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
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Wemby debuts 'shunk,' part jump shot, part dunk done with reason",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Victor Wembanyama said his new-look \"shunk\" was done because of a blister former from actually dunking."
    },
    {
     "ref": "espn_nba#1",
     "title": "Lillard scores 33 points in Milwaukee return as Blazers beat Bucks",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Portland's Damian Lillard played at Milwaukee for the first time since the Bucks waived him in 2025 and gave Bucks fans a taste of what they're missing by scoring a season-high 33 points in the Trail Blazers' 124-114 victory on Thursday night."
    },
    {
     "ref": "espn_nba#2",
     "title": "Timberwolves' Edwards has 'no clue' on timetable for return",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Timberwolves guard Anthony Edwards said he has \"no clue\" when he will return to play from right knee surgery weeks ago, but was optimistic about his long-term prognosis."
    },
    {
     "ref": "espn_nba#3",
     "title": "Sources: Spurs' Harper avoids major injury, out 1-3 weeks with hip strain",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Spurs guard Dylan Harper has been diagnosed with a left hip rotator strain, avoiding any major injury, sources told ESPN's Shams Charania on Thursday."
    },
    {
     "ref": "espn_nba#4",
     "title": "Giannis, Bam put Bucks drama aside, 'on to the next thing' after Heat win",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Heat star Giannis Antetokounmpo said Wednesday night's win over the Bucks was like any other night, while Bam Adebayo said he has moved past his issues with Tyler Herro."
    },
    {
     "ref": "espn_nba#5",
     "title": "Redick cites fatigue as Luka's shot goes cold, Lakers' win streak ends at 9",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "Luka Doncic said his performance in Wednesday's loss to Utah, in which he shot 10-of-28 and had nine turnovers, was \"unacceptable\" as the Lakers' win streak ended at nine."
    },
    {
     "ref": "espn_nba#6",
     "title": "'I love the clutch': 76ers rally, improve to 11-0 in tight games",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "The 76ers improved to 11-0 in clutch games after overcoming a 17-point deficit to beat the Magic on Wednesday night."
    },
    {
     "ref": "espn_nba#7",
     "title": "👀 What the first month has revealed about all 30 teams",
     "published": "2026-11-20T06:00:56+00:00",
     "summary": "With the season's first month nearly in the books, Ben Golliver examines the biggest storyline so far for all 30 teams."
    },
    {
     "ref": "espn_nba#8",
     "title": "Reflective Lillard advised Giannis 'grass isn't always greener' before Heat trade",
     "published": "2026-11-20T02:10:57+00:00",
     "summary": "Damian Lillard, ahead of his return to Milwaukee, said his two years with the Bucks were something he needed to experience but he's happy to be back in Portland."
    },
    {
     "ref": "espn_nba#9",
     "title": "Goes together like Cooper Flagg and PB&J: Mavs announce pop-up for sandwiches",
     "published": "2026-11-19T23:25:59+00:00",
     "summary": "The Dallas Mavericks' pop-up includes creamy peanut butter and grape jelly on white sourdough bread."
    },
    {
     "ref": "espn_nba#10",
     "title": "Athletes, coaches are just as hyped for 'Grand Theft Auto VI' as everyone else",
     "published": "2026-11-19T23:25:59+00:00",
     "summary": "The latest entry in the Grand Theft Auto series is tied with \"The Legend of Zelda: Ocarina of Time\" with a 99 rating on Metacritic."
    },
    {
     "ref": "espn_nba#11",
     "title": "NBA Power Rankings: One wild stat for all 30 teams",
     "published": "2026-11-19T22:56:25+00:00",
     "summary": "Here's where every team ranks this week -- along with one remarkable stat that has fueled each franchise through one month of the season."
    },
    {
     "ref": "espn_nba#12",
     "title": "Updated NBA championship and MVP odds: Heat on the rise, Wemby moves ahead of Luka",
     "published": "2026-11-19T17:27:27+00:00",
     "summary": "The Heat have bounced back from a rough start to the season, while Victor Wembanyama is now the leader for MVP just ahead of Luka Doncic."
    },
    {
     "ref": "espn_nba#13",
     "title": "Fantasy adds, bets to make for Thursday in the NBA: Spencer, Champagnie worth playing",
     "published": "2026-11-19T17:27:27+00:00",
     "summary": "Eric Moody breaks down Thursday's NBA slate, highlighting the fantasy streamers to add and his favorite bets."
    },
    {
     "ref": "espn_nba#14",
     "title": "Steph Curry confronts his 'basketball mortality'",
     "published": "2026-11-19T14:52:30+00:00",
     "summary": "At 38, Curry is still brilliant -- but managing his body has become the biggest battle of his career."
    },
    {
     "ref": "espn_nba#15",
     "title": "The hidden danger behind Luka Doncic's historic start﻿",
     "published": "2026-11-19T13:46:53+00:00",
     "summary": "Doncic is pushing the boundaries of basketball production. But could that actually hurt the Lakers' title hopes?"
    },
    {
     "ref": "espn_nba#16",
     "title": "16 roto and category league stars who can help",
     "published": "2026-11-18T19:52:37+00:00",
     "summary": "Use the Player Rater to your advantage and fill out your fantasy basketball lineup with these roto and category stars."
    },
    {
     "ref": "espn_nba#17",
     "title": "Eric Karabell's notebook: Trade Walker Kessler? Klay Thompson worth rostering?",
     "published": "2026-11-18T19:52:37+00:00",
     "summary": "Eric Karabell empties out the notebook with all that he's noticing around the NBA and what it means for fantasy."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Transfer rumors, news: Arsenal want World Cup winner Williams",
     "published": "2026-11-20T09:03:57+00:00",
     "summary": "Arsenal have reignited their interest in Athletic Club winger Nico Williams. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#1",
     "title": "Estêvão is Brazil's brightest young talent. Is Chelsea the right place for him?",
     "published": "2026-11-20T09:03:57+00:00",
     "summary": "Estêvão is widely regarded as Brazil's brightest young talent, but he has struggled for playing time at Chelsea this season. What's behind his lack of minutes?"
    },
    {
     "ref": "espn_soccer#2",
     "title": "Pochettino's 1st Man United training session filmed by drone, posted online",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "The operator of the drone that filmed Mauricio Pochettino's first training session at Manchester United accepts it was \"unethical.\""
    },
    {
     "ref": "espn_soccer#3",
     "title": "Messi leads way as MLS salaries rise; Union's Sullivan checks in at $614K",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Inter Miami CF star Lionel Messi remains the highest-paid player in MLS, though the number of players making at least $10 million grew to five."
    },
    {
     "ref": "espn_soccer#4",
     "title": "FIFA presidential challenger Tashima open to joining forces against Infantino",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Kohzo Tashima announced in Tokyo on Friday that he is staying in the FIFA presidential race, adding that he may join forces with fellow challenger Philippe Diallo to unseat Gianni Infantino."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Frank eager to avoid repeat of Arsenal coffee cup controversy at Palace",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Thomas Frank said he hopes never to get caught drinking from a Brighton coffee cup after he was reminded of his famous gaffe from his time at Tottenham."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Rodman eyes 'full-circle moment' with NWSL title: 'Would mean everything'",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Washington Spirit forward Trinity Rodman said it would mean \"everything\" to win another NWSL Championship on home soil at Audi Field on Saturday."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Cincinnati knocks out Orlando as Dike suffers injury minutes after subbing in",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "FC Cincinnati rallied to eliminate Orlando City 3-1 in MLS Cup Eastern Conference wild card match on Thursday."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Barça's Deco keen for Liverpool to sign on-loan Araujo in $60M permanent deal",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Barcelona sporting director Deco has said the Spanish champions would welcome the money if Liverpool decide to sign Ronald Araújo beyond his loan spell."
    },
    {
     "ref": "espn_soccer#9",
     "title": "Leader in his own way Haaland making 'natural' progression as City veteran",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "Erling Haaland said it is \"natural\" for him to take on more responsibility as one of Manchester City's captains this season, but wants to do it in his own way."
    },
    {
     "ref": "espn_soccer#10",
     "title": "⚽ Last time GTA was released: Peak Messi vs. Ronaldo, Moyes at Man Utd",
     "published": "2026-11-20T08:58:50+00:00",
     "summary": "As Grand Theft Auto VI is finally unleashed, here is what was happening in the world of soccer when the previous game was released 13 years ago"
    },
    {
     "ref": "espn_soccer#11",
     "title": "Pochettino's Man United squad audit: Big calls to make on stars like Fernandes, Rashford",
     "published": "2026-11-20T08:54:56+00:00",
     "summary": "New Manchester United manager Mauricio Pochettino inherits a squad built by his six predecessors. Which players have a future at the club, and which should go?"
    },
    {
     "ref": "espn_soccer#12",
     "title": "Liverpool are terrible at Anfield this season, but will it matter vs. Man United?",
     "published": "2026-11-20T08:54:56+00:00",
     "summary": "Anfield has a power to propel Liverpool to greatness, but the team are struggling for form there this season."
    },
    {
     "ref": "espn_soccer#13",
     "title": "Which USMNT fringe players stand to benefit from Pochettino's exit?",
     "published": "2026-11-20T08:53:26+00:00",
     "summary": "With Mauricio Pochettino now at Manchester United, there are a host of midfielders primed for a revival in fortunes with the U.S. men's national team."
    },
    {
     "ref": "espn_soccer#14",
     "title": "Pochettino gets a fitting, emotional send-off from USMNT",
     "published": "2026-11-20T08:53:26+00:00",
     "summary": "No USMNT coach has ever left quite like this. Loved by players, celebrated by fans and gone on his own terms."
    },
    {
     "ref": "espn_soccer#15",
     "title": "The NWSL has more money than ever, yet its biggest problems remain",
     "published": "2026-11-20T08:44:17+00:00",
     "summary": "As the NWSL approaches its season climax, the league still has to deal with the same problems."
    },
    {
     "ref": "espn_soccer#16",
     "title": "Has Vini Jr. finally put summer transfer saga behind him? Real Madrid need him at his best",
     "published": "2026-11-20T08:42:11+00:00",
     "summary": "After a summer of transfer uncertainty and a sluggish start to the season, Vinícius Junior is on the comeback trail with Real Madrid and Brazil."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Who will win the NWSL Championship? Predicting Washington Spirit vs. Kansas City Current",
     "published": "2026-11-20T08:39:56+00:00",
     "summary": "The NWSL Championship on Saturday pits the Washington Spirit vs. the Kansas City Current. Is Trinity Rodman the player to watch? Who will win? And more!"
    },
    {
     "ref": "espn_soccer#18",
     "title": "Predicting the rest of the Premier League season: How all 20 teams will finish",
     "published": "2026-11-20T02:05:27+00:00",
     "summary": "After 10 games, we have enough data to predict every Premier League team's final spot in the standings for the 2026-27 season."
    },
    {
     "ref": "espn_soccer#19",
     "title": "Reranked: Who is the MVP for each of the top Premier League clubs?",
     "published": "2026-11-20T02:05:27+00:00",
     "summary": "Based on ability and tactical importance, we've reranked the best players at the top Premier League clubs."
    },
    {
     "ref": "espn_soccer#20",
     "title": "Arsenal's Champions League defense given a reality check",
     "published": "2026-11-19T23:16:34+00:00",
     "summary": "Arsenal's 2-0 defeat to Lyonnes exposed familiar problems in the UEFA Women's Champions League, as their season continues to disappoint."
    },
    {
     "ref": "espn_soccer#21",
     "title": "Chelsea's defense shines, but will scoring woes be their undoing in UWCL?",
     "published": "2026-11-19T23:16:34+00:00",
     "summary": "Chelsea have scored just four goals in five Champions League matches, though they remain in strong position."
    },
    {
     "ref": "espn_soccer#22",
     "title": "After a decade of near misses, Man United finally get their man in Pochettino",
     "published": "2026-11-19T23:02:52+00:00",
     "summary": "After years of near misses and missed opportunities, Mauricio Pochettino is finally taking charge at Manchester United following a decade-long pursuit."
    },
    {
     "ref": "espn_soccer#23",
     "title": "World Cup 2030 Early Power Rankings: Spain still No. 1? No USMNT in top 15",
     "published": "2026-11-18T14:02:00+00:00",
     "summary": "England's statement win over Spain has shaken up ESPN's World Cup Power Rankings, but our experts still back La Roja as the team to beat."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Nashville SC-Cincinnati - beIN SPORTS",
     "published": "2026-11-20T09:38:43+00:00",
     "summary": "Nashville SC-Cincinnati beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Messi tops MLS salaries with Lewandowski next - eNCA",
     "published": "2026-11-20T09:35:57+00:00",
     "summary": "Messi tops MLS salaries with Lewandowski next eNCA"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Suarez planning longer stay with Miami alongside Messi - www.soccernews.com",
     "published": "2026-11-20T09:35:40+00:00",
     "summary": "Suarez planning longer stay with Miami alongside Messi www.soccernews.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 - Sportskeeda",
     "published": "2026-11-20T08:45:56+00:00",
     "summary": "Inter Miami CF vs Columbus Crew Prediction and Betting Tips | November 21st 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Son Heung-min Ranks Fourth in MLS Salary with $11.15 Million - 조선일보",
     "published": "2026-11-20T08:44:15+00:00",
     "summary": "Son Heung-min Ranks Fourth in MLS Salary with $11.15 Million 조선일보"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi of Inter Miami tops Major League Soccer salaries - Al Jazeera",
     "published": "2026-11-20T07:47:46+00:00",
     "summary": "Lionel Messi of Inter Miami tops Major League Soccer salaries Al Jazeera"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs - Herald Bulletin",
     "published": "2026-11-20T07:16:03+00:00",
     "summary": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs Herald Bulletin"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs - FOX Sports",
     "published": "2026-11-20T07:03:53+00:00",
     "summary": "Columbus Crew visit Inter Miami in first round of MLS Cup Playoffs FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami vs Columbus Crew Prediction, Betting Tips, Lineups & Odds | 21 Nov 2026 - Sportsgambler",
     "published": "2026-11-20T06:35:58+00:00",
     "summary": "Inter Miami vs Columbus Crew Prediction, Betting Tips, Lineups & Odds | 21 Nov 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi is the highest-paid player in MLS: How much do Lewandowski and Griezmann earn? - Zamin.uz",
     "published": "2026-11-20T05:12:00+00:00",
     "summary": "Messi is the highest-paid player in MLS: How much do Lewandowski and Griezmann earn? Zamin.uz"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS 2026 salaries announced: How much is Messi getting paid in Major League Soccer? Who is highest paid? - Sportstar",
     "published": "2026-11-20T03:23:46+00:00",
     "summary": "MLS 2026 salaries announced: How much is Messi getting paid in Major League Soccer? Who is highest paid? Sportstar"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "It’s Miami Time: Get Ready for Inter Miami CF’s Playoffs Opener This Saturday Presented by Nu - Inter Miami CF",
     "published": "2026-11-20T01:19:18+00:00",
     "summary": "It’s Miami Time: Get Ready for Inter Miami CF’s Playoffs Opener This Saturday Presented by Nu Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "What to know about the 2026 MLS playoffs: Bracket, schedule and more - NBC 6 South Florida",
     "published": "2026-11-20T00:36:39+00:00",
     "summary": "What to know about the 2026 MLS playoffs: Bracket, schedule and more NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami CF, Levi's partner on collection - The Business Journals",
     "published": "2026-11-20T00:33:00+00:00",
     "summary": "Inter Miami CF, Levi's partner on collection The Business Journals"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Toronto vs. Inter Miami CF - Live Score - May 08, 2027 - FOX Sports",
     "published": "2026-11-20T00:09:45+00:00",
     "summary": "Toronto vs. Inter Miami CF - Live Score - May 08, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami CF vs. Montreal - Live Score - May 01, 2027 - FOX Sports",
     "published": "2026-11-20T00:08:39+00:00",
     "summary": "Inter Miami CF vs. Montreal - Live Score - May 01, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? - thepress.net",
     "published": "2026-11-19T23:13:18+00:00",
     "summary": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? thepress.net"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? - CBS Sports",
     "published": "2026-11-19T23:12:00+00:00",
     "summary": "MLS Cup bracket predictions: Lionel Messi's Inter Miami set for repeat? CBS Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami vs Columbus Crew Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-11-19T23:00:00+00:00",
     "summary": "Inter Miami vs Columbus Crew Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi's MLS salary is more than double Philadelphia Union's total payroll - PhillyVoice",
     "published": "2026-11-19T22:56:21+00:00",
     "summary": "Lionel Messi's MLS salary is more than double Philadelphia Union's total payroll PhillyVoice"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi makes more than all but 3 other MLS teams, records show - The Palm Beach Post",
     "published": "2026-11-19T22:02:00+00:00",
     "summary": "Lionel Messi makes more than all but 3 other MLS teams, records show The Palm Beach Post"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi still rules the money league! Inter Miami superstar leads MLS salaries as five players break the $10m barrier - Goal.com",
     "published": "2026-11-19T21:54:29+00:00",
     "summary": "Lionel Messi still rules the money league! Inter Miami superstar leads MLS salaries as five players break the $10m barrier Goal.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Prediction Inter Miami vs Columbus Crew: analysis, odds and betting tips - BetMines",
     "published": "2026-11-19T21:36:27+00:00",
     "summary": "Prediction Inter Miami vs Columbus Crew: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Crew Embraces Playoff Challenge against Messi - WSYX",
     "published": "2026-11-19T21:02:58+00:00",
     "summary": "Crew Embraces Playoff Challenge against Messi WSYX"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "How Lionel Messi's 2026 Inter Miami Contract Compared to Payrolls of Entire MLS Teams - Bleacher Report",
     "published": "2026-11-19T20:17:33+00:00",
     "summary": "How Lionel Messi's 2026 Inter Miami Contract Compared to Payrolls of Entire MLS Teams Bleacher Report"
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
     "title": "Ben Saraf News: Recalled by Brooklyn - RotoWire",
     "published": "2026-11-19T15:55:38+00:00",
     "summary": "Ben Saraf News: Recalled by Brooklyn RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) - Sports Illustrated",
     "published": "2026-11-19T13:53:58+00:00",
     "summary": "Best NBA Prop Bets Today (Predictions for Karl-Anthony Towns, Stephon Castle, Deni Avdija, Warriors Guard) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) - Sports Illustrated",
     "published": "2026-11-19T13:27:01+00:00",
     "summary": "Is Deni Avdija Playing Tonight? (Injury Update, Betting Impact for Blazers vs. Bucks) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Ben Saraf leads Long Island Nets to 123-112 revenge win over Delaware - NetsDaily",
     "published": "2026-11-19T12:40:58+00:00",
     "summary": "Ben Saraf leads Long Island Nets to 123-112 revenge win over Delaware NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 - DraftKings Network",
     "published": "2026-11-19T04:15:00+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Nets 123-112 Blue Coats (Nov 18, 2026) Play-by-Play - ESPN",
     "published": "2026-11-19T02:57:33+00:00",
     "summary": "Nets 123-112 Blue Coats (Nov 18, 2026) Play-by-Play ESPN"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija (foot) listed questionable Thursday - FantasyPros",
     "published": "2026-11-18T23:02:09+00:00",
     "summary": "Deni Avdija (foot) listed questionable Thursday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks - Sports Illustrated",
     "published": "2026-11-18T22:56:26+00:00",
     "summary": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Trail Blazers' Deni Avdija: Questionable versus Bucks - CBS Sports",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Questionable versus Bucks CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Injury: Questionable versus Bucks - RotoWire",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Deni Avdija Injury: Questionable versus Bucks RotoWire"
    }
   ]
  }
 ]
}
</input>