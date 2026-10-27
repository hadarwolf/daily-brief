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
  "home": "Boston Celtics",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-10-27T23:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Los Angeles Lakers",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-10-28T03:00:00.000Z"
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
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-26T18:45:00Z",
     "home": "Santa Clara",
     "away": "SL Benfica",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-26T19:30:00Z",
     "home": "PSG",
     "away": "Olympique Lyon",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-26T20:00:00Z",
     "home": "Sevilla FC",
     "away": "Osasuna",
     "status": "FINISHED",
     "score": "2-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-26T22:30:00Z",
     "home": "Coritiba",
     "away": "Grêmio",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-26T23:00:00Z",
     "home": "Flamengo",
     "away": "Mineiro",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T17:30:00Z",
     "home": "Sassuolo",
     "away": "Lazio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T19:45:00Z",
     "home": "Roma",
     "away": "Cagliari",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T19:45:00Z",
     "home": "Torino",
     "away": "Como 1907",
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
     "team": "RB Leipzig",
     "played": 7,
     "pts": 12,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 7,
     "pts": 12,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 8,
     "pts": 22,
     "gd": 13
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 8,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 8,
     "pts": 18,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 8,
     "pts": 18,
     "gd": 9
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 8,
     "pts": 17,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 8,
     "pts": 14,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 8,
     "pts": 17,
     "gd": 7
    },
    {
     "pos": 2,
     "team": "Stade Rennais",
     "played": 8,
     "pts": 16,
     "gd": 4
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 8,
     "pts": 15,
     "gd": 5
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
    "home": "Charlotte Hornets",
    "away": "Washington Wizards",
    "score": "110-103",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Minnesota Timberwolves",
    "score": "127-125",
    "status": "Final"
   },
   {
    "home": "Boston Celtics",
    "away": "Chicago Bulls",
    "score": "134-99",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Dallas Mavericks",
    "score": "109-113",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Indiana Pacers",
    "score": "110-102",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Phoenix Suns",
    "score": "125-114",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Atlanta Hawks",
    "score": "120-110",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Memphis Grizzlies",
    "score": "105-110",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "Golden State Warriors",
    "score": "114-134",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Boston Celtics",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-10-27T23:30:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-10-28T00:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-10-28T00:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-10-28T03:00:00Z"
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
     "kickoff_utc": "2026-10-14T23:30:00",
     "home": "Inter Miami",
     "away": "New York City FC",
     "score": "2-0"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-28T23:30:00",
     "home": "Inter Miami",
     "away": "FC Cincinnati",
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
     "title": "No Saliba, no problem - Konsa stepping up for Arsenal",
     "published": "2026-10-27T07:22:04+00:00",
     "summary": "Arsenal's defensive form is testament to the performances of Ezri Konsa, who has stepped up in William Saliba's absence and been given his chance to shine."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-27T06:57:27+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#2",
     "title": "Ranking England's Ballon d'Or winners - how does Kane compare?",
     "published": "2026-10-27T06:20:58+00:00",
     "summary": "From Stanley Matthews to Harry Kane, how do England's Ballon d'Or winners rank?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Kane prematurely announced as Ballon d'Or winner - but he wasn't only one",
     "published": "2026-10-26T23:35:27+00:00",
     "summary": "Harry Kane's dream of winning the Ballon d'Or came true on Monday, but a few hours earlier organisers prematurely released an article claiming he had clinched the award."
    },
    {
     "ref": "bbc_football#4",
     "title": "Putellas wins record-equalling third Ballon d'Or to extend Spanish dominance",
     "published": "2026-10-26T23:14:39+00:00",
     "summary": "Barcelona and Spain midfielder Alexia Putellas wins the Ballon d'Or Feminin for a record-equalling third time."
    },
    {
     "ref": "bbc_football#5",
     "title": "Putellas wins record-equalling third Ballon d'Or",
     "published": "2026-10-26T23:14:39+00:00",
     "summary": "Barcelona and Spain midfielder Alexia Putellas wins the Ballon d'Or Feminin for a record-equalling third time."
    },
    {
     "ref": "bbc_football#6",
     "title": "Hearts chairman calls for greater transparency on key decisions",
     "published": "2026-10-26T23:11:28+00:00",
     "summary": "Reflecting on last season's final-day title disappointment, Hearts chairman Calum Paterson calls for \"greater transparency and consistency around key decisions in Scottish football\"."
    },
    {
     "ref": "bbc_football#7",
     "title": "Kane ends England's 25-year Ballon d'Or wait - how he bucked the trend",
     "published": "2026-10-26T23:10:59+00:00",
     "summary": "Harry Kane becomes the first English player to win the Ballon d'Or since Michael Owen in 2001 after being crowned the world's best player at a ceremony in London."
    },
    {
     "ref": "bbc_football#8",
     "title": "Arsenal eye Monza striker Varela - Tuesday's gossip",
     "published": "2026-10-26T21:38:42+00:00",
     "summary": "Portuguese striker Gustavo Varela is on Arsenal's radar, Crystal Palace want to keep winger Ismaila Sarr, Brighton defender Luka Vuskovic receives admiring glances from some of Europe's biggest clubs, plus more."
    },
    {
     "ref": "bbc_football#9",
     "title": "Football Daily",
     "published": "2026-10-26T21:18:00+00:00",
     "summary": "Mark Chapman is joined by Chris Sutton, Andros Townsend and Adam Crafton."
    },
    {
     "ref": "bbc_football#10",
     "title": "Ballon d'Or winner Kane's best Bundesliga goals",
     "published": "2026-10-26T19:29:35+00:00",
     "summary": "Watch Harry Kane's best goals from the 2025/26 Bundesliga season with Bayern, as the England striker is crowned the men's 2026 Ballon d'Or winner."
    },
    {
     "ref": "bbc_football#11",
     "title": "Donovan backed for big future on signing new Celtic deal",
     "published": "2026-10-26T18:37:36+00:00",
     "summary": "Manager Martin O'Neill is sure Colby Donovan is destined for \"very big future\" as the Celtic full-back extends his contract until 2031."
    },
    {
     "ref": "bbc_football#12",
     "title": "England-Republic of Ireland U15 World Cup game ends over alleged racism",
     "published": "2026-10-26T18:17:25+00:00",
     "summary": "The Under-15 World Cup Group C match between England and Republic of Ireland is abandoned after England allege an opposition player made a racist comment."
    },
    {
     "ref": "bbc_football#13",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-26T17:18:00+00:00",
     "summary": "Arsenal have relieved the pressure with a north London derby win - can they kick on now?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Celtic & Rangers wait for stadium closures ruling",
     "published": "2026-10-26T17:16:14+00:00",
     "summary": "Rangers and Celtic submit appeals against a ruling that they must play their next home Scottish Cup ties behind closed doors following scenes of disorder in last season's competition."
    },
    {
     "ref": "bbc_football#15",
     "title": "Weir 25th in Ballon d'Or and joins Olid & Cuthbert in award shortlist",
     "published": "2026-10-26T16:59:33+00:00",
     "summary": "Caroline Weir is ranked the 25th best women footballer in the world on the day she also joined fellow Scotland midfielder Erin Cuthbert and Manchester United head coach Eva Olid on the shortlist for the Scottish Women's Football Awards 2026."
    },
    {
     "ref": "bbc_football#16",
     "title": "Weir 25th in Ballon d'Or and joins Olid & Cuthbert in award shortlist",
     "published": "2026-10-26T16:59:33+00:00",
     "summary": "Caroline Weir is ranked the 25th best women footballer in the world on the day she also joined fellow Scotland midfielder Erin Cuthbert and Manchester United head coach Eva Olid on the shortlist for the Scottish Women's Football Awards 2026."
    },
    {
     "ref": "bbc_football#17",
     "title": "Weir 25th in Ballon d'Or and joins Olid & Cuthbert in award shortlist",
     "published": "2026-10-26T16:59:33+00:00",
     "summary": "Caroline Weir is ranked the 25th best women footballer in the world on the day she also joined fellow Scotland midfielder Erin Cuthbert and Manchester United head coach Eva Olid on the shortlist for the Scottish Women's Football Awards 2026."
    },
    {
     "ref": "bbc_football#18",
     "title": "FAW sets ambitious 10-year plan but seeks more money",
     "published": "2026-10-26T16:58:55+00:00",
     "summary": "The Football Association of Wales has called for greater funding for Welsh football after setting out ambitious targets for the next decade."
    },
    {
     "ref": "bbc_football#19",
     "title": "Howe and Nagelsmann high on Man Utd's list if Carrick sacked",
     "published": "2026-10-26T15:34:23+00:00",
     "summary": "BBC Sport looks at who could replace Michael Carrick at Manchester United if the head coach is sacked."
    },
    {
     "ref": "bbc_football#20",
     "title": "Why is Wilcox in line of fire from Man Utd fans?",
     "published": "2026-10-26T15:24:12+00:00",
     "summary": "With Michael Carrick's position as Man Utd boss under scrutiny, focus has also turned to director of football Jason Wilcox."
    },
    {
     "ref": "bbc_football#21",
     "title": "Which game will Chelsea's Palmer miss after red card?",
     "published": "2026-10-26T14:12:43+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains why Cole Palmer's red card suspension will not rule him out of Chelsea's Premier League match against Manchester United."
    },
    {
     "ref": "bbc_football#22",
     "title": "Fans assist Penicuik clear-up for Clyde cup tie",
     "published": "2026-10-26T14:09:24+00:00",
     "summary": "Penicuik Athletic are sure Tuesday's Scottish Cup tie with Clyde will go ahead in as the community rallies to clear storm debris from the pitch at Montgomery Park."
    },
    {
     "ref": "bbc_football#23",
     "title": "All the goals from the Women's Super League - matchweek seven",
     "published": "2026-10-26T12:02:22+00:00",
     "summary": "Watch every goal from matchweek seven of the Women's Super League 2026-27 season."
    },
    {
     "ref": "bbc_football#24",
     "title": "Bayern continue unbeaten start in Kompany's absence",
     "published": "2026-10-26T11:35:11+00:00",
     "summary": "Bayern Munich beat Freiburg to return to the top of the Bundesliga, as the German champions paid tribute to absent manager Vincent Kompany who is recovering in hospital after he collapsed while watching Bayern's second team train."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs FC Cincinnati Prediction, Betting Tips, Lineups & Odds | 28 Oct 2026 - Sportsgambler",
     "published": "2026-10-27T07:09:30+00:00",
     "summary": "Inter Miami vs FC Cincinnati Prediction, Betting Tips, Lineups & Odds | 28 Oct 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "New England Revolution vs Inter Miami: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-27T07:04:21+00:00",
     "summary": "New England Revolution vs Inter Miami: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Cincinnati visits Inter Miami after shutout victory - FOX Sports",
     "published": "2026-10-27T06:03:50+00:00",
     "summary": "Cincinnati visits Inter Miami after shutout victory FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums - RealGM",
     "published": "2026-10-27T04:40:34+00:00",
     "summary": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums RealGM"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Why Did Lionel Messi Miss Ballon d'Or 2026 Ceremony in London? Here's What We Know - LatestLY",
     "published": "2026-10-27T04:03:26+00:00",
     "summary": "Why Did Lionel Messi Miss Ballon d'Or 2026 Ceremony in London? Here's What We Know LatestLY"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Why did Lionel Messi skip Ballon d'Or ceremony despite finishing fifth at 39 - Gulf News",
     "published": "2026-10-27T03:48:37+00:00",
     "summary": "Why did Lionel Messi skip Ballon d'Or ceremony despite finishing fifth at 39 Gulf News"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-27T03:05:00+00:00",
     "summary": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Ballon d'Or 2026: Inter Miami star Lionel Messi finishes ahead of Erling Haaland, Ousmane Dembele in top 10 - Sports Mole",
     "published": "2026-10-27T02:00:00+00:00",
     "summary": "Ballon d'Or 2026: Inter Miami star Lionel Messi finishes ahead of Erling Haaland, Ousmane Dembele in top 10 Sports Mole"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Germán Berterame scores goal for Inter Miami CF - ESPN",
     "published": "2026-10-27T01:44:33+00:00",
     "summary": "Germán Berterame scores goal for Inter Miami CF ESPN"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Video: a special tournament: the secret behind Messi's absence from the Ballon d'Or ceremony - Goal.com",
     "published": "2026-10-27T01:36:07+00:00",
     "summary": "Video: a special tournament: the secret behind Messi's absence from the Ballon d'Or ceremony Goal.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Where Did Lionel Messi Finish in the 2026 Ballon d'Or? - beIN SPORTS",
     "published": "2026-10-27T01:05:00+00:00",
     "summary": "Where Did Lionel Messi Finish in the 2026 Ballon d'Or? beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi secures remarkable Ballon d’Or finish as Inter Miami superstar defies age in 2026 rankings - Goal.com",
     "published": "2026-10-27T00:50:22+00:00",
     "summary": "Lionel Messi secures remarkable Ballon d’Or finish as Inter Miami superstar defies age in 2026 rankings Goal.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "New England Revolution vs Inter Miami CF Prediction, 11/1/2026 Soccer Pick, Tips and Odds - Doc's Sports",
     "published": "2026-10-27T00:49:53+00:00",
     "summary": "New England Revolution vs Inter Miami CF Prediction, 11/1/2026 Soccer Pick, Tips and Odds Doc's Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Prediction Inter Miami vs Cincinnati: analysis, odds and betting tips - BetMines",
     "published": "2026-10-27T00:34:22+00:00",
     "summary": "Prediction Inter Miami vs Cincinnati: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "New England Revolution vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-27T00:25:54+00:00",
     "summary": "New England Revolution vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Se Atlético de Madrid vs. Inter Miami CF | Disney+ - Disney Plus",
     "published": "2026-10-27T00:13:41+00:00",
     "summary": "Se Atlético de Madrid vs. Inter Miami CF | Disney+ Disney Plus"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi opts to attend Messi Cup rather than Ballon d'Or ceremony - USA Today",
     "published": "2026-10-26T22:04:00+00:00",
     "summary": "Lionel Messi opts to attend Messi Cup rather than Ballon d'Or ceremony USA Today"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Why Lionel Messi Isn’t Attending 2026 Ballon d’Or Ceremony - LiveScore",
     "published": "2026-10-26T21:14:51+00:00",
     "summary": "Why Lionel Messi Isn’t Attending 2026 Ballon d’Or Ceremony LiveScore"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi follows in Buffon's footsteps in the Ballon d'Or race - Goal.com",
     "published": "2026-10-26T19:54:08+00:00",
     "summary": "Messi follows in Buffon's footsteps in the Ballon d'Or race Goal.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami vs Cincinnati Prediction and Betting Tips | October 28th 2026 - Sportskeeda",
     "published": "2026-10-26T19:29:00+00:00",
     "summary": "Inter Miami vs Cincinnati Prediction and Betting Tips | October 28th 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "MIAvsCIN 10-28-2026 - Inter Miami CF",
     "published": "2026-10-26T18:16:49+00:00",
     "summary": "MIAvsCIN 10-28-2026 Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi to Miss 2026 Ballon d’Or Ceremony Due to Inter Miami Commitments - Morocco World News",
     "published": "2026-10-26T16:32:38+00:00",
     "summary": "Lionel Messi to Miss 2026 Ballon d’Or Ceremony Due to Inter Miami Commitments Morocco World News"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Details Revealed for Wednesday’s Unified Night presented by Florida Blue at Nu Stadium - Inter Miami CF",
     "published": "2026-10-26T16:26:12+00:00",
     "summary": "Details Revealed for Wednesday’s Unified Night presented by Florida Blue at Nu Stadium Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami Falls 2-0 to Red Bulls, Nashville Wins Supporters’ Shield - MundoNOW",
     "published": "2026-10-26T16:23:02+00:00",
     "summary": "Inter Miami Falls 2-0 to Red Bulls, Nashville Wins Supporters’ Shield MundoNOW"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Why did Lionel Messi not attend the 2026 Ballon d’Or gala today? - World Soccer Talk",
     "published": "2026-10-26T16:16:25+00:00",
     "summary": "Why did Lionel Messi not attend the 2026 Ballon d’Or gala today? World Soccer Talk"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Trail Blazers' Hot Start Earns Great Recognition Through First Week Of The Season - roundtable.io",
     "published": "2026-10-27T02:17:58+00:00",
     "summary": "Trail Blazers' Hot Start Earns Great Recognition Through First Week Of The Season roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time - Ynetnews",
     "published": "2026-10-27T01:32:22+00:00",
     "summary": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Fantasy basketball points league rankings update: George, Jerome on the rise - ESPN",
     "published": "2026-10-26T23:09:00+00:00",
     "summary": "Fantasy basketball points league rankings update: George, Jerome on the rise ESPN"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Nuggets Have $125 Million Problem - Yahoo Sports",
     "published": "2026-10-26T21:13:42+00:00",
     "summary": "Nuggets Have $125 Million Problem Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Avdija shines as Lillard and Morant embrace new roles in Portland - The Jerusalem Post",
     "published": "2026-10-26T20:56:46+00:00",
     "summary": "Avdija shines as Lillard and Morant embrace new roles in Portland The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) - Howl.Link",
     "published": "2026-10-26T18:48:57+00:00",
     "summary": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) Howl.Link"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers' Sidy Cissoko Shows His Value Long After the Points Stop - roundtable.io",
     "published": "2026-10-26T18:24:24+00:00",
     "summary": "Blazers' Sidy Cissoko Shows His Value Long After the Points Stop roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Nets' Ben Saraf: Sent to Long Island - CBS Sports",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Nets' Ben Saraf: Sent to Long Island CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Ben Saraf News: Sent to Long Island - RotoWire",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Ben Saraf News: Sent to Long Island RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "NBA: Grizzlies stay unblemished with victory at winless Kings - GMA Network",
     "published": "2026-10-26T04:17:51+00:00",
     "summary": "NBA: Grizzlies stay unblemished with victory at winless Kings GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "How Do the Blazers Stop Luka Doncic? - roundtable.io",
     "published": "2026-10-26T03:41:56+00:00",
     "summary": "How Do the Blazers Stop Luka Doncic? roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Nets Rookie Brown Jr. Will Sit Pacers Half of Back-To-Back - Yahoo",
     "published": "2026-10-25T21:24:11+00:00",
     "summary": "Nets Rookie Brown Jr. Will Sit Pacers Half of Back-To-Back Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-10-25T20:30:09+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster - Yahoo Sports",
     "published": "2026-10-25T14:15:25+00:00",
     "summary": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "'Deni Avdija on track to become one of the greatest in Portland history' - The Jerusalem Post",
     "published": "2026-10-25T08:30:04+00:00",
     "summary": "'Deni Avdija on track to become one of the greatest in Portland history' The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Video - Trail Blazers' Future Looks Uncertain After Disappointing Ranking - roundtable.io",
     "published": "2026-10-25T03:42:45+00:00",
     "summary": "Video - Trail Blazers' Future Looks Uncertain After Disappointing Ranking roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija's 26 propels Portland past Sacramento - NBA.com",
     "published": "2026-10-24T21:25:32+00:00",
     "summary": "Deni Avdija's 26 propels Portland past Sacramento NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "How to watch Cavs vs. Nets home opener on DAZN tonight for free - Cleveland.com",
     "published": "2026-10-24T21:00:00+00:00",
     "summary": "How to watch Cavs vs. Nets home opener on DAZN tonight for free Cleveland.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Should the Nets be worried about most of their 2025 NBA draft class? - AOL.ca",
     "published": "2026-10-24T19:33:27+00:00",
     "summary": "Should the Nets be worried about most of their 2025 NBA draft class? AOL.ca"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Acuff scores 33 in home debut as Sacramento Kings fall to Portland - Sacramento Bee",
     "published": "2026-10-24T18:06:57+00:00",
     "summary": "Acuff scores 33 in home debut as Sacramento Kings fall to Portland Sacramento Bee"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ja Morant posts near double-double Friday against Kings - FantasyPros",
     "published": "2026-10-24T15:31:39+00:00",
     "summary": "Ja Morant posts near double-double Friday against Kings FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Damian Lillard fills stat sheet in Friday's win over Kings - FantasyPros",
     "published": "2026-10-24T15:27:01+00:00",
     "summary": "Damian Lillard fills stat sheet in Friday's win over Kings FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija flirts with triple-double in Friday's win over Kings - FantasyPros",
     "published": "2026-10-24T15:23:15+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's win over Kings FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more - Rip City Project",
     "published": "2026-10-24T15:20:36+00:00",
     "summary": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Portland Trail Blazers Futures odds: Can this roster take the next step? - OregonLive.com",
     "published": "2026-10-24T14:15:00+00:00",
     "summary": "Portland Trail Blazers Futures odds: Can this roster take the next step? OregonLive.com"
    }
   ]
  }
 ]
}
</input>