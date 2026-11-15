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
   "yesterday": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-14T21:30:00Z",
     "home": "Mirassol",
     "away": "Mineiro",
     "status": "FINISHED",
     "score": "0-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-14T23:30:00Z",
     "home": "Chapecoense",
     "away": "Vasco da Gama",
     "status": "IN_PLAY",
     "score": "0-1"
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
    "home": "New Orleans Pelicans",
    "away": "Denver Nuggets",
    "score": "108-116",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Dallas Mavericks",
    "score": "127-117",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Detroit Pistons",
    "score": "137-117",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Brooklyn Nets",
    "score": "129-110",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Chicago Bulls",
    "score": "106-117",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Philadelphia 76ers",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-15T18:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-15T21:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-11-15T21:30:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-15T22:00:00Z"
   },
   {
    "home": "Boston Celtics",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-15T23:00:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-15T23:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-11-16T00:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-16T01:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-16T02:00:00Z"
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
     "kickoff_utc": "2026-11-17T19:45:00",
     "home": "Israel",
     "away": "Austria",
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
     "title": "How Spain's humble superstar Simon became world's best keeper",
     "published": "2026-11-15T07:29:30+00:00",
     "summary": "As Spain prepare to host England in the Nations League, BBC Sport columnist Guillem Balague charts the rise of Unai Simon to become the world's best keeper."
    },
    {
     "ref": "bbc_football#1",
     "title": "How Aston Villa are reclaiming their identity",
     "published": "2026-11-15T07:12:05+00:00",
     "summary": "Aston Villa Women are celebrating an important 30-year milestone on Sunday - but how are they trying to reclaim their identity?"
    },
    {
     "ref": "bbc_football#2",
     "title": "How Aston Villa are reclaiming their identity",
     "published": "2026-11-15T07:12:05+00:00",
     "summary": "Aston Villa Women are celebrating an important 30-year milestone on Sunday - but how are they trying to reclaim their identity?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Guess WSL star No 12",
     "published": "2026-11-15T07:01:31+00:00",
     "summary": "Work out the identity of today's Women's Super League player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who am I? Guess WSL star No 12",
     "published": "2026-11-15T07:01:31+00:00",
     "summary": "Work out the identity of today's Women's Super League player in as few attempts as possible."
    },
    {
     "ref": "bbc_football#5",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-15T06:47:10+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#6",
     "title": "Respect? Exposure? Why England's star names are going abroad",
     "published": "2026-11-15T06:25:41+00:00",
     "summary": "Harry Kane, Jude Bellingham and Anthony Gordon are three of England's current biggest stars, but all have chosen to play their club football abroad."
    },
    {
     "ref": "bbc_football#7",
     "title": "The 'manager's dream' who has put NI one game from history",
     "published": "2026-11-14T23:21:45+00:00",
     "summary": "After scoring his first international goal in the 1-0 win over Ukraine, Northern Ireland boss Michael O'Neill says Terry Devlin is \"a bit of a dream\" to manage."
    },
    {
     "ref": "bbc_football#8",
     "title": "Liverpool put three past Brighton to end winless run",
     "published": "2026-11-14T23:00:29+00:00",
     "summary": "A Beata Olsson double helps Liverpool to an impressive 3-0 victory away to Brighton to end their five-game winless run in the Women's Super League."
    },
    {
     "ref": "bbc_football#9",
     "title": "Hallgrimsson rues 'painful' defeat for Republic of Ireland",
     "published": "2026-11-14T22:40:02+00:00",
     "summary": "Republic of Ireland boss Heimir Hallgrimsson says their 1-0 defeat against Austria in their penultimate Nations League game was \"painful\"."
    },
    {
     "ref": "bbc_football#10",
     "title": "Devlin nets winner as NI top Nations League group",
     "published": "2026-11-14T22:38:02+00:00",
     "summary": "Watch highlights as Northern Ireland beat Ukraine 1-0 at Windsor Park in the Nations League."
    },
    {
     "ref": "bbc_football#11",
     "title": "White has 'exciting future' despite boos - Rice",
     "published": "2026-11-14T22:26:56+00:00",
     "summary": "Midfielder Declan Rice has defended his Arsenal team-mate Ben White after he was booed during England's win over Croatia at Wembley."
    },
    {
     "ref": "bbc_football#12",
     "title": "Arsenal target Nusa could cost £66m - Sunday's gossip",
     "published": "2026-11-14T21:48:45+00:00",
     "summary": "Arsenal could have to pay £66m for RB Leipzig's Antonio Nusa, Real Betis reject Chelsea's bid for Jose Morante, plus more."
    },
    {
     "ref": "bbc_football#13",
     "title": "Spurs held to a draw by Everton in the WSL",
     "published": "2026-11-14T20:56:46+00:00",
     "summary": "Tottenham and Everton play out a hard-fought goalless draw in the Women's Super League."
    },
    {
     "ref": "bbc_football#14",
     "title": "What Wales need to stay in Nations League top tier",
     "published": "2026-11-14T20:52:48+00:00",
     "summary": "BBC Sport Wales explains how Wales can stay in the Nations League top tier despite finishing bottom of their group."
    },
    {
     "ref": "bbc_football#15",
     "title": "'No racism in Spain' – De la Fuente message for Tuchel",
     "published": "2026-11-14T20:43:57+00:00",
     "summary": "Spain manager Luis de la Fuente says \"there is no racism in Spain\" and England boss Thomas Tuchel reiterates that he does not believe it will be an issue at Sunday's Nations League meeting in Madrid."
    },
    {
     "ref": "bbc_football#16",
     "title": "Spain test will reveal if Tuchel and England have learned World Cup lessons",
     "published": "2026-11-14T20:22:00+00:00",
     "summary": "England's game with world champions Spain will reveal if head coach Thomas Tuchel has learned from summer disappointment, says chief football writer Phil McNulty."
    },
    {
     "ref": "bbc_football#17",
     "title": "Haaland helps Norway to win over Wales in Nations League",
     "published": "2026-11-14T19:23:13+00:00",
     "summary": "Watch the best of the action as Norway beat Wales in the Nations League in Oslo."
    },
    {
     "ref": "bbc_football#18",
     "title": "Bompastor's risks pay off as Chelsea go top of WSL",
     "published": "2026-11-14T18:55:34+00:00",
     "summary": "In any big encounter you will often hear managers say it is the \"fine margins\" that decide a game. In this case, it was Sonia Bompastor's decisions."
    },
    {
     "ref": "bbc_football#19",
     "title": "Bompastor's risks pay off as Chelsea go top of WSL",
     "published": "2026-11-14T18:55:34+00:00",
     "summary": "In any big encounter you will often hear managers say it is the \"fine margins\" that decide a game. In this case, it was Sonia Bompastor's decisions."
    },
    {
     "ref": "bbc_football#20",
     "title": "Le Tissier stars as Man Utd beat Crystal Palace to extend unbeaten run",
     "published": "2026-11-14T18:27:23+00:00",
     "summary": "Maya le Tissier scores a stunning strike on her 150th appearance for Manchester United to help her side beat Crystal Palace 2-0 in the WSL, as the home side extend their unbeaten run in all competitions to 12 matches."
    },
    {
     "ref": "bbc_football#21",
     "title": "Tenerife boss says Owono's 12-match ban 'feels light'",
     "published": "2026-11-14T16:26:49+00:00",
     "summary": "Tenerife boss Alvaro Cervera reacts to goalkeeper Jesus Owono's 12-match ban as the club prepare for their first game since the death of Jesus de Miguel."
    },
    {
     "ref": "bbc_football#22",
     "title": "'I just play where the manager tells me to play!' - Walsh",
     "published": "2026-11-14T16:17:49+00:00",
     "summary": "Keira Walsh reacts after Chelsea go top of the Women's Super League with a 1-0 win against Manchester City."
    },
    {
     "ref": "bbc_football#23",
     "title": "Chelsea go top with 1-0 win against Man City",
     "published": "2026-11-14T15:50:34+00:00",
     "summary": "Chelsea return to the top of the Women's Super League with a crucial victory over rivals Manchester City who went down to 10 players in the second half."
    },
    {
     "ref": "bbc_football#24",
     "title": "Chelsea go top with 1-0 win against Man City",
     "published": "2026-11-14T15:50:34+00:00",
     "summary": "Chelsea return to the top of the Women's Super League with a crucial victory over rivals Manchester City who went down to 10 players in the second half."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs Columbus Crew: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-11-15T07:15:56+00:00",
     "summary": "Inter Miami vs Columbus Crew: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami CF v Columbus Odds - FanDuel Sportsbook",
     "published": "2026-11-15T01:55:39+00:00",
     "summary": "Inter Miami CF v Columbus Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-15T00:40:52+00:00",
     "summary": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Why is Haiti 'hosting' USMNT game in Miami? Les Grenadiers feel right at home - USA Today",
     "published": "2026-11-14T21:20:00+00:00",
     "summary": "Why is Haiti 'hosting' USMNT game in Miami? Les Grenadiers feel right at home USA Today"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inside Inter Miami: Messi, The Fans & NU Stadium! 🇺🇸🐐 - Celtic news now - Celtic FC News",
     "published": "2026-11-14T18:24:02+00:00",
     "summary": "Inside Inter Miami: Messi, The Fans & NU Stadium! 🇺🇸🐐 Celtic news now - Celtic FC News"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi will play in Argentina in a friendly match between River Plate and Inter Miami - CiberCuba",
     "published": "2026-11-14T17:42:25+00:00",
     "summary": "Messi will play in Argentina in a friendly match between River Plate and Inter Miami CiberCuba"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MLS Cup defense, Messi's MVP bid top Inter Miami's postseason storylines - LiveScore",
     "published": "2026-11-14T17:27:08+00:00",
     "summary": "MLS Cup defense, Messi's MVP bid top Inter Miami's postseason storylines LiveScore"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Felipe Melo Claims Neymar Could Join Inter Miami in 2027 | News | Football.com Nigeria - Football.com",
     "published": "2026-11-14T17:00:00+00:00",
     "summary": "Felipe Melo Claims Neymar Could Join Inter Miami in 2027 | News | Football.com Nigeria Football.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami CF and Tradeify Sign Multi-Year Partnership Focused on Fan Engagement - Sportscape Magazine",
     "published": "2026-11-14T16:32:56+00:00",
     "summary": "Inter Miami CF and Tradeify Sign Multi-Year Partnership Focused on Fan Engagement Sportscape Magazine"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi set for Monumental return as River Plate host Inter Miami to kick off 2027 - BeSoccer Livescore",
     "published": "2026-11-14T11:18:12+00:00",
     "summary": "Messi set for Monumental return as River Plate host Inter Miami to kick off 2027 BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "GOAL: Robbie Robinson, Inter Miami CF - 71st minute - MLSsoccer.com",
     "published": "2026-11-14T10:29:01+00:00",
     "summary": "GOAL: Robbie Robinson, Inter Miami CF - 71st minute MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi Shocks Buenos Aires With Monumental Return In Inter Miami vs River Plate - Sportscape Magazine",
     "published": "2026-11-14T07:55:06+00:00",
     "summary": "Lionel Messi Shocks Buenos Aires With Monumental Return In Inter Miami vs River Plate Sportscape Magazine"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi to return to Estadio Monumental on January 19 as Inter Miami face River Plate in historic Buenos Aires preseason friendly - Goal.com",
     "published": "2026-11-14T06:30:06+00:00",
     "summary": "Lionel Messi to return to Estadio Monumental on January 19 as Inter Miami face River Plate in historic Buenos Aires preseason friendly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "2026 MLS Cup Odds: Nashville SC Leads Inter Miami and Vancouver - Time Magazine",
     "published": "2026-11-13T23:50:42+00:00",
     "summary": "2026 MLS Cup Odds: Nashville SC Leads Inter Miami and Vancouver Time Magazine"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi Set to Play in Argentina Again as Inter Miami Schedule River Plate Friendly - Террикон",
     "published": "2026-11-13T20:32:00+00:00",
     "summary": "Lionel Messi Set to Play in Argentina Again as Inter Miami Schedule River Plate Friendly Террикон"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi is coming back to Argentina: Inter Miami to face River Plate at the Monumental in 2027 - Diario AS",
     "published": "2026-11-13T19:49:11+00:00",
     "summary": "Lionel Messi is coming back to Argentina: Inter Miami to face River Plate at the Monumental in 2027 Diario AS"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "After an emotional farewell: Messi prepares to return to the Monumental stadium - Goal.com",
     "published": "2026-11-13T19:42:33+00:00",
     "summary": "After an emotional farewell: Messi prepares to return to the Monumental stadium Goal.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi to Make Historic Argentina Return as Inter Miami Confirm Friendly Against River Plate - Pasión Fútbol",
     "published": "2026-11-13T19:11:14+00:00",
     "summary": "Lionel Messi to Make Historic Argentina Return as Inter Miami Confirm Friendly Against River Plate Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly - Soy Futbol",
     "published": "2026-11-13T18:25:23+00:00",
     "summary": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi and Inter Miami to Face River Plate at the Monumental - beIN SPORTS",
     "published": "2026-11-13T18:02:21+00:00",
     "summary": "Messi and Inter Miami to Face River Plate at the Monumental beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly - ESPN",
     "published": "2026-11-13T17:53:00+00:00",
     "summary": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly ESPN"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate - World Soccer Talk",
     "published": "2026-11-13T17:37:05+00:00",
     "summary": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi, Inter Miami to Face River Plate in 2027 - Yahoo Sports",
     "published": "2026-11-13T16:50:00+00:00",
     "summary": "Messi, Inter Miami to Face River Plate in 2027 Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi to make return to Estadio Monumental in Buenos Aires - USA Today",
     "published": "2026-11-13T16:42:00+00:00",
     "summary": "Lionel Messi to make return to Estadio Monumental in Buenos Aires USA Today"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi Wins Second Consecutive MLS Golden Boot - Yahoo Sports",
     "published": "2026-11-13T16:26:29+00:00",
     "summary": "Lionel Messi Wins Second Consecutive MLS Golden Boot Yahoo Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland - Basketball Network",
     "published": "2026-11-15T09:14:17+00:00",
     "summary": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija leads Portland to second straight Win Over OKC - The Jerusalem Post",
     "published": "2026-11-15T07:03:25+00:00",
     "summary": "Deni Avdija leads Portland to second straight Win Over OKC The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-15T04:26:47+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Damian Lillard Makes Surprising Admission About Deni Avdija - Heavy.com",
     "published": "2026-11-15T02:04:00+00:00",
     "summary": "Damian Lillard Makes Surprising Admission About Deni Avdija Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career - Hoops Wire",
     "published": "2026-11-14T23:48:56+00:00",
     "summary": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start - Fadeaway World",
     "published": "2026-11-14T23:14:02+00:00",
     "summary": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start - Yahoo Sports",
     "published": "2026-11-14T23:09:33+00:00",
     "summary": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Lillard Praises Avdija, Mutual Trust in Their Partnership - Blazer's Edge",
     "published": "2026-11-14T22:18:08+00:00",
     "summary": "Lillard Praises Avdija, Mutual Trust in Their Partnership Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Highlights From Deni Avdija 34-Point Game - NBA.com",
     "published": "2026-11-14T15:20:38+00:00",
     "summary": "Highlights From Deni Avdija 34-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars - Yahoo Sports",
     "published": "2026-11-14T12:25:31+00:00",
     "summary": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers' Deni Avdija: Scores team-high 34 points - CBS Sports",
     "published": "2026-11-14T11:29:36+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores team-high 34 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija News: Scores team-high 34 points - RotoWire",
     "published": "2026-11-14T11:29:36+00:00",
     "summary": "Deni Avdija News: Scores team-high 34 points RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 - The Times of Israel",
     "published": "2026-11-14T07:48:46+00:00",
     "summary": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Kings - TalkBasket.net",
     "published": "2026-11-14T07:14:02+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Kings TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings - Field Level Media",
     "published": "2026-11-14T06:38:24+00:00",
     "summary": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:25:51+00:00",
     "summary": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season - Rip City Project",
     "published": "2026-11-14T06:25:45+00:00",
     "summary": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "NBA Cup: Deni Avdija Scores 34 Points as Portland Trail Blazers Beat Sacramento Kings 120-107, Extend Winning Streak to Three Games - The Sunday Guardian",
     "published": "2026-11-14T06:24:39+00:00",
     "summary": "NBA Cup: Deni Avdija Scores 34 Points as Portland Trail Blazers Beat Sacramento Kings 120-107, Extend Winning Streak to Three Games The Sunday Guardian"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:08:44+00:00",
     "summary": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija scores 34, 9-of-9 from the FT line - NBC Sports",
     "published": "2026-11-14T06:01:31+00:00",
     "summary": "Deni Avdija scores 34, 9-of-9 from the FT line NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-14T05:57:15+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-11-14T05:55:02+00:00",
     "summary": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "NBA Cup: Trail Blazers beat Kings for third straight win - Inquirer.net",
     "published": "2026-11-14T05:55:00+00:00",
     "summary": "NBA Cup: Trail Blazers beat Kings for third straight win Inquirer.net"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija with 34 points vs. Sacramento Kings, 11/13/2026 - Yahoo Sports",
     "published": "2026-11-14T05:49:58+00:00",
     "summary": "Deni Avdija with 34 points vs. Sacramento Kings, 11/13/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija finishes through contact, 11/13/2026 - Yahoo Sports",
     "published": "2026-11-14T05:49:42+00:00",
     "summary": "Deni Avdija finishes through contact, 11/13/2026 Yahoo Sports"
    }
   ]
  }
 ]
}
</input>