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
     "status": "FINISHED",
     "score": "0-2"
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
    "score": "121-104",
    "status": "4th Qtr"
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
     "title": "The 'manager's dream' who has put NI one game from history",
     "published": "2026-11-14T23:21:45+00:00",
     "summary": "After scoring his first international goal in the 1-0 win over Ukraine, Northern Ireland boss Michael O'Neill says Terry Devlin is \"a bit of a dream\" to manage."
    },
    {
     "ref": "bbc_football#1",
     "title": "Liverpool put three past Brighton to end winless run",
     "published": "2026-11-14T23:00:29+00:00",
     "summary": "A Beata Olsson double helps Liverpool to an impressive 3-0 victory away to Brighton to end their five-game winless run in the Women's Super League."
    },
    {
     "ref": "bbc_football#2",
     "title": "Hallgrimsson rues 'painful' defeat for Republic of Ireland",
     "published": "2026-11-14T22:40:02+00:00",
     "summary": "Republic of Ireland boss Heimir Hallgrimsson says their 1-0 defeat against Austria in their penultimate Nations League game was \"painful\"."
    },
    {
     "ref": "bbc_football#3",
     "title": "Devlin nets winner as NI top Nations League group",
     "published": "2026-11-14T22:38:02+00:00",
     "summary": "Watch highlights as Northern Ireland beat Ukraine 1-0 at Windsor Park in the Nations League."
    },
    {
     "ref": "bbc_football#4",
     "title": "White has 'exciting future' despite boos - Rice",
     "published": "2026-11-14T22:26:56+00:00",
     "summary": "Midfielder Declan Rice has defended his Arsenal team-mate Ben White after he was booed during England's win over Croatia at Wembley."
    },
    {
     "ref": "bbc_football#5",
     "title": "Arsenal target Nusa could cost £66m - Sunday's gossip",
     "published": "2026-11-14T21:48:45+00:00",
     "summary": "Arsenal could have to pay £66m for RB Leipzig's Antonio Nusa, Real Betis reject Chelsea's bid for Jose Morante, plus more."
    },
    {
     "ref": "bbc_football#6",
     "title": "Spurs held to a draw by Everton in the WSL",
     "published": "2026-11-14T20:56:46+00:00",
     "summary": "Tottenham and Everton play out a hard-fought goalless draw in the Women's Super League."
    },
    {
     "ref": "bbc_football#7",
     "title": "What Wales need to stay in Nations League top tier",
     "published": "2026-11-14T20:52:48+00:00",
     "summary": "BBC Sport Wales explains how Wales can stay in the Nations League top tier despite finishing bottom of their group."
    },
    {
     "ref": "bbc_football#8",
     "title": "'No racism in Spain' – De la Fuente message for Tuchel",
     "published": "2026-11-14T20:43:57+00:00",
     "summary": "Spain manager Luis de la Fuente says \"there is no racism in Spain\" and England boss Thomas Tuchel reiterates that he does not believe it will be an issue at Sunday's Nations League meeting in Madrid."
    },
    {
     "ref": "bbc_football#9",
     "title": "Spain test will reveal if Tuchel and England have learned World Cup lessons",
     "published": "2026-11-14T20:22:00+00:00",
     "summary": "England's game with world champions Spain will reveal if head coach Thomas Tuchel has learned from summer disappointment, says chief football writer Phil McNulty."
    },
    {
     "ref": "bbc_football#10",
     "title": "Haaland helps Norway to win over Wales in Nations League",
     "published": "2026-11-14T19:23:13+00:00",
     "summary": "Watch the best of the action as Norway beat Wales in the Nations League in Oslo."
    },
    {
     "ref": "bbc_football#11",
     "title": "Bompastor's risks pay off as Chelsea go top of WSL",
     "published": "2026-11-14T18:55:34+00:00",
     "summary": "In any big encounter you will often hear managers say it is the \"fine margins\" that decide a game. In this case, it was Sonia Bompastor's decisions."
    },
    {
     "ref": "bbc_football#12",
     "title": "Bompastor's risks pay off as Chelsea go top of WSL",
     "published": "2026-11-14T18:55:34+00:00",
     "summary": "In any big encounter you will often hear managers say it is the \"fine margins\" that decide a game. In this case, it was Sonia Bompastor's decisions."
    },
    {
     "ref": "bbc_football#13",
     "title": "Le Tissier stars as Man Utd beat Crystal Palace to extend unbeaten run",
     "published": "2026-11-14T18:27:23+00:00",
     "summary": "Maya le Tissier scores a stunning strike on her 150th appearance for Manchester United to help her side beat Crystal Palace 2-0 in the WSL, as the home side extend their unbeaten run in all competitions to 12 matches."
    },
    {
     "ref": "bbc_football#14",
     "title": "Tenerife boss says Owono's 12-match ban 'feels light'",
     "published": "2026-11-14T16:26:49+00:00",
     "summary": "Tenerife boss Alvaro Cervera reacts to goalkeeper Jesus Owono's 12-match ban as the club prepare for their first game since the death of Jesus de Miguel."
    },
    {
     "ref": "bbc_football#15",
     "title": "'I just play where the manager tells me to play!' - Walsh",
     "published": "2026-11-14T16:17:49+00:00",
     "summary": "Keira Walsh reacts after Chelsea go top of the Women's Super League with a 1-0 win against Manchester City."
    },
    {
     "ref": "bbc_football#16",
     "title": "Chelsea go top with 1-0 win against Man City",
     "published": "2026-11-14T15:50:34+00:00",
     "summary": "Chelsea return to the top of the Women's Super League with a crucial victory over rivals Manchester City who went down to 10 players in the second half."
    },
    {
     "ref": "bbc_football#17",
     "title": "Chelsea go top with 1-0 win against Man City",
     "published": "2026-11-14T15:50:34+00:00",
     "summary": "Chelsea return to the top of the Women's Super League with a crucial victory over rivals Manchester City who went down to 10 players in the second half."
    },
    {
     "ref": "bbc_football#18",
     "title": "Former Stoke City manager Thordarson dies aged 71",
     "published": "2026-11-14T15:04:59+00:00",
     "summary": "Gudjon Thordarson, who led Stoke City to promotion from the third tier in 2002 and managed three other English clubs, dies aged 71."
    },
    {
     "ref": "bbc_football#19",
     "title": "Tuchel to remind England of anti-racism protocols before Spain game",
     "published": "2026-11-14T09:13:30+00:00",
     "summary": "Manager Thomas Tuchel will remind England's players of Uefa's anti-racism protocols before Sunday's Nations League fixture against Spain in Madrid."
    },
    {
     "ref": "bbc_football#20",
     "title": "Who would make your England-Spain combined XI?",
     "published": "2026-11-14T08:57:49+00:00",
     "summary": "How many England players do you think would make the Spain team?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Clough's longevity: landmark achievement or indictment on football?",
     "published": "2026-11-14T08:35:00+00:00",
     "summary": "Mansfield boss Nigel Clough discusses his longevity and staying power as he becomes a club's longest-serving manager for a second time in his career."
    },
    {
     "ref": "bbc_football#22",
     "title": "Titz and Clarke on Aberdeen shortlist - gossip",
     "published": "2026-11-14T08:28:16+00:00",
     "summary": "Steve Clarke and Christian Titz are reportedly on Aberdeen's shortlist to replace Stephen Robinson as manager."
    },
    {
     "ref": "bbc_football#23",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    },
    {
     "ref": "bbc_football#24",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "FAA ground stop throws sports world into travel chaos ahead of weekend games",
     "published": "2026-11-15T03:25:48+00:00",
     "summary": "Travel plans for teams in multiple sports were disrupted by the FAA's nationwide ground stop of all flights because of communications problems."
    },
    {
     "ref": "espn_nba#1",
     "title": "Cavaliers without starting five vs. Mavs after flight delay",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "The Cavaliers were without their entire starting lineup Saturday against the Mavericks after four players were ruled out following travel difficulties."
    },
    {
     "ref": "espn_nba#2",
     "title": "Embiid to sit vs. Pacers due to plantar fascia management",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "The Philadelphia 76ers ruled out center Joel Embiid for Sunday's game against the Indiana Pacers with right foot plantar fascia management, the team announced Saturday."
    },
    {
     "ref": "espn_nba#3",
     "title": "Lakers' Reaves to sit out vs. Suns due to left heel bruise",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "Los Angeles Lakers guard Austin Reaves will not play against the Phoenix Suns on Sunday because of a left heel bruise, the team announced."
    },
    {
     "ref": "espn_nba#4",
     "title": "Knicks' Hart 'not in a good headspace' after scoreless night, benching",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "Knicks wing Josh Hart said he is \"not in a good headspace\" after he was held scoreless and benched for the fourth quarter of Friday's 106-104 NBA Cup loss to the Pacers."
    },
    {
     "ref": "espn_nba#5",
     "title": "Giannis, Bam combine for 74 as Heat flex potential as East contenders",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "Giannis Antetokounmpo and Bam Adebayo each scored 37 points to help the Heat top the Cavaliers for their sixth win in eight games."
    },
    {
     "ref": "espn_nba#6",
     "title": "Lendeborg 1-for-13 in Warriors' blowout loss: 'I was flustered the entire game'",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "In his first game as the primary offensive engine in place of the injured Stephen Curry, Warriors rookie Yaxel Lendeborg went 1-of-13 shooting in a 123-85 blowout loss to the Spurs. \"I was flustered the entire game,\" he said. \"Couldn't make a damn layup.\""
    },
    {
     "ref": "espn_nba#7",
     "title": "Wemby, Spurs land early KO with 18-0 run, rout Warriors for 11th straight win",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "Victor Wembanyama and the Spurs pounced on the Warriors with an 18-0 opening run and went on to win 123-85."
    },
    {
     "ref": "espn_nba#8",
     "title": "📈 Updated Power Rankings: The best newcomer on all 30 teams",
     "published": "2026-11-15T01:16:00+00:00",
     "summary": "Which teams rise and which fall in this week's Power Rankings? Plus, the top newcomer for each team in the league."
    },
    {
     "ref": "espn_nba#9",
     "title": "Despite slump, Knicks' Bridges is a fantasy basketball trade target",
     "published": "2026-11-14T20:57:19+00:00",
     "summary": "Andre explains why Mikal Bridges continues to hold fantasy value despite the poor start to his season."
    },
    {
     "ref": "espn_nba#10",
     "title": "Adds and NBA bets for Saturday: Fears, Bey among top plays",
     "published": "2026-11-14T20:57:19+00:00",
     "summary": "Jim McCormick breaks down Saturday's NBA slate, highlighting the fantasy streamers to add and bets to make."
    },
    {
     "ref": "espn_nba#11",
     "title": "What happens when you pay $200 to try out for a G League team?",
     "published": "2026-11-14T17:13:13+00:00",
     "summary": "Former college players, content creators and even some Sixers fans chased the same opportunity to get noticed by the Delaware Blue Coats."
    },
    {
     "ref": "espn_nba#12",
     "title": "Welcome to the Space Jam: How Michael Jordan and Bugs Bunny's magic resonates 30 years later",
     "published": "2026-11-14T07:11:27+00:00",
     "summary": "Three decades after its release, the basketball-meets-Looney Tunes adventure remains a pop culture staple."
    },
    {
     "ref": "espn_nba#13",
     "title": "NBA buzz: Latest news, updates and intel for the 2026-27 season",
     "published": "2026-11-14T02:36:36+00:00",
     "summary": "The NBA is back. The buzz never left. Bookmark this page for the latest news, rumblings and analysis from ESPN's insiders."
    },
    {
     "ref": "espn_nba#14",
     "title": "Inside the group chat where Black NBA coaches counsel -- and trash-talk -- each other",
     "published": "2026-11-14T02:36:05+00:00",
     "summary": "On the court, they're rivals. Off the court, they've found support among the only men who truly understand what they're going through: each other."
    },
    {
     "ref": "espn_nba#15",
     "title": "Donovan Mitchell still believes in the Cavaliers, even if you don't",
     "published": "2026-11-13T14:39:48+00:00",
     "summary": "Mitchell made two commitments this summer: his marriage and his extension with the Cavs. Now it's up to him to keep pushing Cleveland forward."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Departing Pochettino predicts 'amazing future' for USMNT after rout of Haiti",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Mauricio Pochettino said the USMNT has an \"amazing future\" after securing a 6-0 victory over Haiti in his penultimate game in charge of the team."
    },
    {
     "ref": "espn_soccer#1",
     "title": "Portugal's post-Ronaldo era begins with heaviest-ever competitive home loss",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Portugal began life without Cristiano Ronaldo by suffering their heaviest-ever home loss in a competitive game."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Happier, healthier Rodman leads Washington to 3rd straight NWSL Championship",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "The Washington Spirit will play in the NWSL Championship for a third straight season next week -- this time on home soil."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Dual-national Julian Hall officially tied to USMNT with appearance vs. Haiti",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Teenage forward Julian Hall is now cap-tied to the U.S. men's national team, after starting Saturday's Concacaf Nations League quarterfinal against Haiti."
    },
    {
     "ref": "espn_soccer#4",
     "title": "'Nonsense' and 'annoying': Zidane dismisses reports over Mbappé relationship",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "France coach Zinedine Zidane dismissed reports of a strained relationship with star forward Kylian Mbappé."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Goalkeeper banned 12 games for collision that led to Spanish player's death",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Andorra goalkeeper Jesús Owono has been suspended for 12 games for an on-field collision with Jesús de Miguel that resulted in the death of the Tenerife striker."
    },
    {
     "ref": "espn_soccer#6",
     "title": "De la Fuente ahead of England clash: 'No racism in Spain'",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Coach Luis de la Fuente has claimed that \"there's no racism in Spain\" after Thomas Tuchel said he'd be reminding his England players of anti-racism protocols ahead of Sunday's game between the two countries."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Japan exact revenge on Brazil with dramatic win",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Japan have exacted revenge over Brazil for their World Cup elimination with a dramatic 3-2 win in Singapore on Saturday."
    },
    {
     "ref": "espn_soccer#8",
     "title": "📈The top soccer players in the world right now, ranked again",
     "published": "2026-11-15T02:28:32+00:00",
     "summary": "Who is the best soccer player in the world at the November international break? ESPN's latest rankings are here."
    },
    {
     "ref": "espn_soccer#9",
     "title": "From Ballon d'Or hopes to Real Madrid bench: Should Liverpool re-sign Alexander-Arnold?",
     "published": "2026-11-15T02:16:24+00:00",
     "summary": "Trent Alexander-Arnold's dream move to Real Madrid is turning into a nightmare, but would Liverpool take him back? And would he want to return?"
    },
    {
     "ref": "espn_soccer#10",
     "title": "Transfer rumors, news: Como's Paz to be Pochettino's first Man United summer signing?",
     "published": "2026-11-15T02:16:23+00:00",
     "summary": "Manchester United are monitoring Como superstar Nico Paz ahead of a move next summer. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#11",
     "title": "Man United, Pochettino's to-do list based on what's gone wrong",
     "published": "2026-11-15T02:16:15+00:00",
     "summary": "Pochettino makes as much sense as anyone to take the Man United job, so now what? Let's look at the mess he's inheriting and what's at the top of his to-do list."
    },
    {
     "ref": "espn_soccer#12",
     "title": "In Pochettino, Man United finally have a proper manager",
     "published": "2026-11-15T02:16:15+00:00",
     "summary": "After years of near-misses, Man United have finally landed Mauricio Pochettino, a manager with the kind of pedigree, class and credibility the club have been looking for."
    },
    {
     "ref": "espn_soccer#13",
     "title": "Ancelotti's red card shows he's feeling the pressure, as Brazil underwhelm again in Japan defeat",
     "published": "2026-11-15T02:15:59+00:00",
     "summary": "Carlo Ancelotti's time in charge of Brazil has been utterly underwhelming so far and he showed his frustration in a friendly defeat to Japan."
    },
    {
     "ref": "espn_soccer#14",
     "title": "USMNT player ratings: Christian Pulisic earns 9/10 for brace in win over Haiti",
     "published": "2026-11-15T00:41:07+00:00",
     "summary": "Christian Pulisic scored twice in the Americans' dominant 6-0 win over Haiti on Saturday, the penultimate match of Mauricio Pochettino's tenure."
    },
    {
     "ref": "espn_soccer#15",
     "title": "Recap: USMNT open Mauricio Pochettino farewell tour by rocking Haiti",
     "published": "2026-11-15T00:41:07+00:00",
     "summary": "The Pochettino farewell tour began with a bang as the Man United-bound boss led the U.S. to a 6-0 win over Haiti."
    },
    {
     "ref": "espn_soccer#16",
     "title": "Washington Spirit on verge of realizing Michele Kang's dream of NWSL dominance",
     "published": "2026-11-14T22:11:02+00:00",
     "summary": "The Washington Spirit have been comeback queens all season, and they were again on Saturday, beating Utah 2-1 to reach the NWSL Championship."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Chelsea reassert WSL dominance over Man City in front of USWNT boss Hayes",
     "published": "2026-11-14T21:23:52+00:00",
     "summary": "Sonia Bompastor took off Kadeisha Buchanan after 12 minutes and it paid off as Chelsea went top of the WSL by beating defending champions Manchester City."
    }
   ]
  }
 ]
}
</input>