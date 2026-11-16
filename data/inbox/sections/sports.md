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
  "away": "Philadelphia 76ers",
  "kickoff_utc": "2026-11-17T00:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Minnesota Timberwolves",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-17T01:00:00.000Z"
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
    "home": "Philadelphia 76ers",
    "away": "Indiana Pacers",
    "score": "131-124",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Los Angeles Lakers",
    "score": "123-131",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Charlotte Hornets",
    "score": "113-105",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "San Antonio Spurs",
    "score": "102-110",
    "status": "Final"
   },
   {
    "home": "Boston Celtics",
    "away": "Dallas Mavericks",
    "score": "131-94",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "New York Knicks",
    "score": "108-112",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Houston Rockets",
    "score": "119-147",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Atlanta Hawks",
    "score": "106-113",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Oklahoma City Thunder",
    "score": "103-125",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Boston Celtics",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-17T00:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-17T00:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-17T00:00:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-17T00:30:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-11-17T00:30:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-17T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-17T01:00:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-17T02:00:00Z"
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
     "title": "How promotion, relegation and knockouts work in Nations League",
     "published": "2026-11-16T09:46:34+00:00",
     "summary": "With more than half of the 2026-27 Nations League group stage completed, BBC Sport looks at what will happen next in the competition."
    },
    {
     "ref": "bbc_football#1",
     "title": "More than F1 - Monza's captivating football story",
     "published": "2026-11-16T08:31:05+00:00",
     "summary": "How Serie A outfit Monza are trying to make an impact in the shadow Milan giants and fashionable Como."
    },
    {
     "ref": "bbc_football#2",
     "title": "Every goal from the Women's Super League - matchweek 10",
     "published": "2026-11-16T08:30:12+00:00",
     "summary": "Watch every goal from across the Women's Super League in matchweek ten, from a brilliant free kick from West Ham's Viviane Asseyi to a stunning strike from Maya Le Tissier on her 150th Manchester United appearance."
    },
    {
     "ref": "bbc_football#3",
     "title": "Burnham urges caution on scrapping 3pm TV blackout",
     "published": "2026-11-16T08:18:33+00:00",
     "summary": "Andy Burnham urges caution on lifting the Saturday 3pm TV blackout in the UK, saying the health of the football pyramid should come first."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Frick rejected Wolfsburg before joining Aberdeen' - gossip",
     "published": "2026-11-16T08:17:46+00:00",
     "summary": "Mario Frick reportedly rejected the Wolfsburg job before becoming Aberdeen's new head coach, while Celtic are said to have no plans to sell in-form Mika Baur."
    },
    {
     "ref": "bbc_football#5",
     "title": "Watch: Partick Thistle & Ross County stretch leads as Clyde hit six",
     "published": "2026-11-16T08:02:51+00:00",
     "summary": "Watch the best of the action from the weekend in the Scottish Professional Football league as Partick Thistle stretch their lead in the Championship, Ross County win their top-of-the table head-to-head in League 1 and Clyde hit six to keep pace with Stranraer in League 2."
    },
    {
     "ref": "bbc_football#6",
     "title": "Listen: Scotland’s Swiss test and who is Aberdeen’s new boss?",
     "published": "2026-11-16T08:00:00+00:00",
     "summary": "Can Scotland show progress against Switzerland and what awaits Aberdeen under Frick?"
    },
    {
     "ref": "bbc_football#7",
     "title": "Vote for the best men's European striker this century",
     "published": "2026-11-16T07:59:20+00:00",
     "summary": "Who is the best European's men's striker this century? Vote for your top three before the results are revealed on Euro Leagues."
    },
    {
     "ref": "bbc_football#8",
     "title": "Homophobia on the rise in football - what is your club doing about it?",
     "published": "2026-11-16T07:26:27+00:00",
     "summary": "Homophobia and transphobia are on the rise in English football, with new data revealing record numbers of discrimination reports in the game - so what is the Premier League doing about it?"
    },
    {
     "ref": "bbc_football#9",
     "title": "Is Scotland's system limiting Gannon-Doak's threat?",
     "published": "2026-11-16T07:09:40+00:00",
     "summary": "As Scotland prepare to conclude their Nations League group campaign in Switzerland, there are concerns about how new head coach Sebastien Pocognoli is utilising one of his most exciting assets."
    },
    {
     "ref": "bbc_football#10",
     "title": "What do Scotland do about 'scunnered' Gannon-Doak?",
     "published": "2026-11-16T07:09:40+00:00",
     "summary": "As Scotland prepare to conclude their Nations League group campaign in Switzerland, there are concerns about how new head coach Sebastien Pocognoli is utilising one of his most exciting assets."
    },
    {
     "ref": "bbc_football#11",
     "title": "Clyde ready for 'heavy metal football' as rock band sponsors club",
     "published": "2026-11-16T06:48:40+00:00",
     "summary": "Metalcore act Bleed From Within have also co-designed the new third kit for the Bully Wee, who now play in the band's home town of Hamilton."
    },
    {
     "ref": "bbc_football#12",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-16T06:23:57+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "How did England cling on against Spain and what did Tuchel do differently?",
     "published": "2026-11-16T00:02:22+00:00",
     "summary": "Trying to protect a lead in the closing stages, England have been here before - so how did they cling on against Spain?"
    },
    {
     "ref": "bbc_football#14",
     "title": "60 minutes of perfection, 30 minutes of chaos - an England win for the ages",
     "published": "2026-11-15T23:52:43+00:00",
     "summary": "England's stunning win in Spain had everything - and was their best under Thomas Tuchel, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#15",
     "title": "Football Daily",
     "published": "2026-11-15T23:16:00+00:00",
     "summary": "Reaction to England’s 3-2 win over Spain in the Nations League."
    },
    {
     "ref": "bbc_football#16",
     "title": "Who swaggered around like he owned the place? Spain v England ratings",
     "published": "2026-11-15T22:12:55+00:00",
     "summary": "Spanish football reporter Elizabeth Conway and senior football correspondent Sami Mokbel give their player ratings for Spain v England."
    },
    {
     "ref": "bbc_football#17",
     "title": "London City earn point in thrilling draw against Arsenal",
     "published": "2026-11-15T22:06:41+00:00",
     "summary": "London City Lionesses prove their elite credentials in a thrilling draw with Arsenal at Emirates Stadium."
    },
    {
     "ref": "bbc_football#18",
     "title": "Man Utd target Fulham's Bassey - Monday's gossip",
     "published": "2026-11-15T20:47:44+00:00",
     "summary": "Manchester United target Fulham's Calvin Bassey and Brentford's Nathan Collins, AC Milan want Real Madrid's Endrick on loan, plus more."
    },
    {
     "ref": "bbc_football#19",
     "title": "London City's 'bravery' paying off in top three pursuit",
     "published": "2026-11-15T20:03:08+00:00",
     "summary": "After 10 games in the Women's Super League season, London City Lionesses have shown they are capable of finishing inside the top three."
    },
    {
     "ref": "bbc_football#20",
     "title": "London City's 'bravery' paying off in top three pursuit",
     "published": "2026-11-15T20:03:08+00:00",
     "summary": "After 10 games in the Women's Super League season, London City Lionesses have shown they are capable of finishing inside the top three."
    },
    {
     "ref": "bbc_football#21",
     "title": "Aston Villa beat Birmingham in WSL derby",
     "published": "2026-11-15T19:47:37+00:00",
     "summary": "Mathilde Harviken scores the only goal as Aston Villa beat Birmingham City in their first Women's Super League derby since May 2022."
    },
    {
     "ref": "bbc_football#22",
     "title": "Struggling Charlton make WSL history after defeat at West Ham",
     "published": "2026-11-15T19:43:57+00:00",
     "summary": "Charlton Athletic become the first team in Women's Super League history to lose their opening 10 matches of the season as Viviane Asseyi scores twice to guide West Ham United to victory."
    },
    {
     "ref": "bbc_football#23",
     "title": "Ronaldinho makes comeback in Ravenna win",
     "published": "2026-11-15T19:31:48+00:00",
     "summary": "Brazil legend Ronaldinho makes his comeback aged 46 for Ravenna, playing the first half of their Italian third-tier derby against Forli."
    },
    {
     "ref": "bbc_football#24",
     "title": "Aberdeen appoint Liechtenstein's Frick as head coach",
     "published": "2026-11-15T18:27:08+00:00",
     "summary": "Former Liechtenstein striker Mario Frick is announced as the new head coach of Aberdeen."
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Celtics set franchise mark with 42-9 lead over Mavs after 1 quarter",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "The Celtics led the Mavericks 42-9 at the end of the first quarter Sunday, the largest scoring margin in a quarter since 1987."
    },
    {
     "ref": "espn_nba#1",
     "title": "LeBron on climbing to third all time in assists: 'Something I didn't foresee in my career'",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "LeBron James moved past Hall of Fame point guard Jason Kidd for third on the NBA's career assists list with 12,092."
    },
    {
     "ref": "espn_nba#2",
     "title": "Spurs stretch winning streak to 12, hand Jazz 12th straight defeat",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "Dylan Harper had a game-high 31 points to keep the Spurs rolling with their 12th straight win while sending the Jazz to their 12th straight loss."
    },
    {
     "ref": "espn_nba#3",
     "title": "Young held scoreless for 1st time in NBA career as Wizards routed by Rockets",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "The Rockets scored a season-high 147 points against the Wizards on Sunday in their win, during which they also held Trae Young scoreless for the first time in his NBA career."
    },
    {
     "ref": "espn_nba#4",
     "title": "Cavs overcome short turnaround, missing starters to beat Mavs",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "The Cavaliers were without their entire starting lineup Saturday against the Mavericks after four players were ruled out following travel difficulties."
    },
    {
     "ref": "espn_nba#5",
     "title": "Lendeborg 1-for-13 in Warriors' blowout loss: 'I was flustered the entire game'",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "In his first game as the primary offensive engine in place of the injured Stephen Curry, Warriors rookie Yaxel Lendeborg went 1-of-13 shooting in a 123-85 blowout loss to the Spurs. \"I was flustered the entire game,\" he said. \"Couldn't make a damn layup.\""
    },
    {
     "ref": "espn_nba#6",
     "title": "📈 Updated Power Rankings: The best newcomer on all 30 teams",
     "published": "2026-11-16T06:05:33+00:00",
     "summary": "Which teams rise and which fall in this week's Power Rankings? Plus, the top newcomer for each team in the league."
    },
    {
     "ref": "espn_nba#7",
     "title": "Despite slump, Knicks' Bridges is a fantasy basketball trade target",
     "published": "2026-11-16T03:11:56+00:00",
     "summary": "Andre explains why Mikal Bridges continues to hold fantasy value despite the poor start to his season."
    },
    {
     "ref": "espn_nba#8",
     "title": "What happens when you pay $200 to try out for a G League team?",
     "published": "2026-11-16T02:43:30+00:00",
     "summary": "Former college players, content creators and even some Sixers fans chased the same opportunity to get noticed by the Delaware Blue Coats."
    },
    {
     "ref": "espn_nba#9",
     "title": "Welcome to the Jordan Dome: Where 'Space Jam' ended and the real games began",
     "published": "2026-11-15T21:07:23+00:00",
     "summary": "Thirty years after \"Space Jam,\" those who shared the summer with Jordan remember the basketball that unfolded offscreen."
    },
    {
     "ref": "espn_nba#10",
     "title": "Welcome to the Space Jam: How Jordan and Bugs Bunny's magic resonates 30 years later",
     "published": "2026-11-15T21:07:22+00:00",
     "summary": "Three decades after its release, the basketball-meets-Looney Tunes adventure remains a pop culture staple."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Meet Como's Nico Paz, the heir to Lionel Messi's No. 10 shirt for Argentina",
     "published": "2026-11-16T09:02:57+00:00",
     "summary": "Como's Nico Paz has become one of the best young players in Europe, but now he faces the unenviable task of stepping into Lionel Messi's Argentina No. 10 shirt."
    },
    {
     "ref": "espn_soccer#1",
     "title": "Transfer rumors, news: Man United eye USMNT's McKennie amid Pochettino arrival",
     "published": "2026-11-16T08:55:02+00:00",
     "summary": "Incoming Manchester United boss Mauricio Pochettino is eyeing a quick reunion with USMNT midfielder Weston McKennie. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Kansas City Current are in the NWSL Championship, just a year later than expected",
     "published": "2026-11-16T03:24:02+00:00",
     "summary": "A year after playoff heartbreak, Kansas City have flipped the script. This time it's top-seeded Gotham who are out, and the Current are through to next Saturday's NWSL Championship."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Purce slams venue switch after Gotham exit: 'Bad look for everyone'",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Gotham FC forward Midge Purce called playing an NWSL semifinal at the 5,000-seat Icahn Stadium \"inexcusable\" after the defending champions lost 2-1 to the Kansas City Current on Sunday."
    },
    {
     "ref": "espn_soccer#4",
     "title": "England hold off Spain rally to end WC winner's 43-game unbeaten run",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "England held off a fierce comeback in Madrid on Sunday to end Spain's 43-game unbeaten streak and secure top spot in Nations League Group C with a 3-2 win."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Current score late to beat Gotham, advance to face Spirit in NWSL finals",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "The Kansas City Current are headed to the NWSL final after a late Haley Hopkins goal saw them past defending champions Gotham FC with a 2-1 win on Sunday."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Spain 'overwhelmed' by 'exceptional' England: We also know how to lose",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Coach Luis de la Fuente said Spain were \"overwhelmed\" in the early stages of Sunday's 3-2 UEFA Nations League defeat to England, but backed his team to return stronger after seeing their three-year unbeaten run come to an end."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Tenerife pay tribute to De Miguel in first match since his death",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Spanish soccer club Tenerife on Sunday paid tribute to Jesús de Miguel in its first game since the striker's death, with midfielder Nacho Gil holding up De Miguel's jersey after scoring his team's opening goal shortly before halftime."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Mexico on brink of missing Nations League semis after loss to Jamaica",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Jamaica stunned Mexico 3-2 on Saturday to move within reach of the Concacaf Nations League semifinals and add to Mexico's struggles under new coach Rafael Márquez."
    },
    {
     "ref": "espn_soccer#9",
     "title": "Dual-national Julian Hall officially tied to USMNT with appearance vs. Haiti",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Teenage forward Julian Hall is now cap-tied to the U.S. men's national team, after starting Saturday's Concacaf Nations League quarterfinal against Haiti."
    },
    {
     "ref": "espn_soccer#10",
     "title": "Brazil great Ronaldinho, 46, subbed at half in return for Serie C's Ravenna",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "Ronaldinho failed to secure his elusive 300th career goal after returning to professional football aged 46."
    },
    {
     "ref": "espn_soccer#11",
     "title": "⌚ USMNT's Folarin Balogun does 'Dame Time' celebration after goal vs. Haiti",
     "published": "2026-11-16T01:40:35+00:00",
     "summary": "After the star forward found the back of the net against Haiti, he had a specific celebration in mind: Damian Lillard's iconic \"Dame Time\" motion."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Man United, Pochettino's to-do list based on what's gone wrong",
     "published": "2026-11-15T23:35:17+00:00",
     "summary": "Pochettino makes as much sense as anyone to take the Man United job, so now what? Let's look at the mess he's inheriting and what's at the top of his to-do list."
    },
    {
     "ref": "espn_soccer#13",
     "title": "In Pochettino, Man United finally have a proper manager",
     "published": "2026-11-15T23:35:17+00:00",
     "summary": "After years of near-misses, Man United have finally landed Mauricio Pochettino, a manager with the kind of pedigree, class and credibility the club have been looking for."
    },
    {
     "ref": "espn_soccer#14",
     "title": "England's win over Spain is the statement Tuchel's team have been waiting for",
     "published": "2026-11-15T23:18:41+00:00",
     "summary": "England ended Spain's 43-match unbeaten run with a statement win that gives Thomas Tuchel renewed belief his side can finally deliver on the biggest stage."
    },
    {
     "ref": "espn_soccer#15",
     "title": "USMNT players embody Pochettino's legacy in dominant win over Haiti",
     "published": "2026-11-15T22:59:52+00:00",
     "summary": "Mauricio Pochettino reset the culture within the USMNT. In Saturday's 6-0 win over Haiti, his players demonstrated that they intend to carry on his ideals."
    },
    {
     "ref": "espn_soccer#16",
     "title": "USMNT player ratings: Pulisic earns 9/10 for brace in win over Haiti",
     "published": "2026-11-15T22:59:52+00:00",
     "summary": "Christian Pulisic scored twice in the Americans' dominant 6-0 win over Haiti on Saturday."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Where are they now? Every Man United player, manager, executive since Glazers' takeover in 2005",
     "published": "2026-11-15T21:48:13+00:00",
     "summary": "The Glazer family took over Manchester United in 2005, but what has happened to the players, managers and executive staff since?"
    },
    {
     "ref": "espn_soccer#18",
     "title": "Washington Spirit on verge of realizing Michele Kang's dream of NWSL dominance",
     "published": "2026-11-15T21:26:17+00:00",
     "summary": "The Washington Spirit have been comeback queens all season, and they were again on Saturday, beating Utah 2-1 to reach the NWSL Championship."
    },
    {
     "ref": "espn_soccer#19",
     "title": "Chelsea reassert WSL dominance over Man City in front of USWNT boss Hayes",
     "published": "2026-11-15T08:50:21+00:00",
     "summary": "Sonia Bompastor took off Kadeisha Buchanan after 12 minutes and it paid off as Chelsea went top of the WSL by beating defending champions Manchester City."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami CF Names American Airlines Official Airline Partner - https://safariindia.com/",
     "published": "2026-11-16T05:52:57+00:00",
     "summary": "Inter Miami CF Names American Airlines Official Airline Partner https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Alysa Liu, Lionel Messi Pull Off Major Wins Against Star-Studded Competition - Sports Illustrated",
     "published": "2026-11-16T02:30:00+00:00",
     "summary": "Alysa Liu, Lionel Messi Pull Off Major Wins Against Star-Studded Competition Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami could listen to transfer offers for young talents as club prepares major 2027 roster changes - Pasión Fútbol",
     "published": "2026-11-15T22:00:00+00:00",
     "summary": "Inter Miami could listen to transfer offers for young talents as club prepares major 2027 roster changes Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Huddy Droubay, 5, Who Has Down Syndrome, Got a Comment From David Beckham on His Soccer Video, Then Walked Onto Inter Miami’s Field Holding Lionel Messi’s Hand - AOL.com",
     "published": "2026-11-15T19:15:00+00:00",
     "summary": "Huddy Droubay, 5, Who Has Down Syndrome, Got a Comment From David Beckham on His Soccer Video, Then Walked Onto Inter Miami’s Field Holding Lionel Messi’s Hand AOL.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Watches From The Suite As Inter Miami Draws Vs Cincinnati | MLS Drama Recap! Jim Parsons (t7Qt2KgbCo) - Unisba Media",
     "published": "2026-11-15T19:10:42+00:00",
     "summary": "Lionel Messi Watches From The Suite As Inter Miami Draws Vs Cincinnati | MLS Drama Recap! Jim Parsons (t7Qt2KgbCo) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami's international call-ups see limited action as FIFA break offers unexpected MLS Playoffs advant... - Pasión Fútbol",
     "published": "2026-11-15T18:37:00+00:00",
     "summary": "Inter Miami's international call-ups see limited action as FIFA break offers unexpected MLS Playoffs advant... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi given seven-game deadline to claim another MLS record and leave Josef Martinez behind after re... - World Soccer Talk",
     "published": "2026-11-15T18:18:23+00:00",
     "summary": "Lionel Messi given seven-game deadline to claim another MLS record and leave Josef Martinez behind after re... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "WATCH: Denis Bouanga, LAFC torch Lionel Messi & Inter Miami - MLSsoccer.com",
     "published": "2026-11-15T16:30:13+00:00",
     "summary": "WATCH: Denis Bouanga, LAFC torch Lionel Messi & Inter Miami MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami gets crucial FIFA international break boost ahead of MLS Cup Playoffs - Pasión Fútbol",
     "published": "2026-11-15T15:58:00+00:00",
     "summary": "Inter Miami gets crucial FIFA international break boost ahead of MLS Cup Playoffs Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Kily González prepares crucial tactical change to help Messi and Inter Miami beat Columbus Crew in MLS Play... - Pasión Fútbol",
     "published": "2026-11-15T15:46:00+00:00",
     "summary": "Kily González prepares crucial tactical change to help Messi and Inter Miami beat Columbus Crew in MLS Play... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Haitian soccer fans turned Inter-Miami’s Nu Stadium into a sea of blue and red (Video) - Miami Herald",
     "published": "2026-11-15T15:10:38+00:00",
     "summary": "Haitian soccer fans turned Inter-Miami’s Nu Stadium into a sea of blue and red (Video) Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi could bid farewell to Inter Miami against River Plate in emotional Argentina friendly - Pasión Fútbol",
     "published": "2026-11-15T14:37:00+00:00",
     "summary": "Lionel Messi could bid farewell to Inter Miami against River Plate in emotional Argentina friendly Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami vs Columbus Crew: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-11-15T07:15:56+00:00",
     "summary": "Inter Miami vs Columbus Crew: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "INTER MIAMI DESTROYS DC UNITED 4-0! 🔥 Messi & Suárez Shine! | Game Day Vlog Trophée Calder (UmPdeIDQyd) - Unisba Media",
     "published": "2026-11-15T05:28:24+00:00",
     "summary": "INTER MIAMI DESTROYS DC UNITED 4-0! 🔥 Messi & Suárez Shine! | Game Day Vlog Trophée Calder (UmPdeIDQyd) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Rodrigo De Paul Enters MLS Playoffs in Top Form: Inter Miami Star Could Be Decisive Against Columbus Crew - Pasión Fútbol",
     "published": "2026-11-15T02:00:25+00:00",
     "summary": "Rodrigo De Paul Enters MLS Playoffs in Top Form: Inter Miami Star Could Be Decisive Against Columbus Crew Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Casemiro Becomes Key Player for Inter Miami Against Columbus Crew: His Form Could Decide the 2026 MLS Playo... - Pasión Fútbol",
     "published": "2026-11-15T01:57:32+00:00",
     "summary": "Casemiro Becomes Key Player for Inter Miami Against Columbus Crew: His Form Could Decide the 2026 MLS Playo... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "United States men’s soccer team routs Haiti 6-0 in Concacaf Nations League quarterfinal - Miami Herald",
     "published": "2026-11-15T01:21:00+00:00",
     "summary": "United States men’s soccer team routs Haiti 6-0 in Concacaf Nations League quarterfinal Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-15T01:03:45+00:00",
     "summary": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-11-15T00:45:49+00:00",
     "summary": "Inter Miami vs Columbus Crew: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "USMNT rout Haiti in Concacaf Nations League opener - MLSsoccer.com",
     "published": "2026-11-14T23:54:23+00:00",
     "summary": "USMNT rout Haiti in Concacaf Nations League opener MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "YELLOW CARD: Jay Chapman, Inter Miami CF - 30th minute - MLSsoccer.com",
     "published": "2026-11-14T19:31:27+00:00",
     "summary": "YELLOW CARD: Jay Chapman, Inter Miami CF - 30th minute MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inside Inter Miami: Messi, The Fans & NU Stadium! 🇺🇸🐐 - Celtic news now - Celtic FC News",
     "published": "2026-11-14T18:24:02+00:00",
     "summary": "Inside Inter Miami: Messi, The Fans & NU Stadium! 🇺🇸🐐 Celtic news now - Celtic FC News"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi will play in Argentina in a friendly match between River Plate and Inter Miami - CiberCuba",
     "published": "2026-11-14T17:42:25+00:00",
     "summary": "Messi will play in Argentina in a friendly match between River Plate and Inter Miami CiberCuba"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF and Tradeify Sign Multi-Year Partnership Focused on Fan Engagement - Sportscape Magazine",
     "published": "2026-11-14T16:32:56+00:00",
     "summary": "Inter Miami CF and Tradeify Sign Multi-Year Partnership Focused on Fan Engagement Sportscape Magazine"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MLS Cup defense, Messi's MVP bid top Inter Miami's postseason storylines - Inter Heron",
     "published": "2026-11-14T15:02:13+00:00",
     "summary": "MLS Cup defense, Messi's MVP bid top Inter Miami's postseason storylines Inter Heron"
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
     "published": "2026-11-16T08:51:07+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled - Central Oregon Daily",
     "published": "2026-11-16T01:00:10+00:00",
     "summary": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled Central Oregon Daily"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled - 9News",
     "published": "2026-11-16T00:49:00+00:00",
     "summary": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled 9News"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland - Basketball Network",
     "published": "2026-11-15T09:14:17+00:00",
     "summary": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija leads Portland to second straight Win Over OKC - The Jerusalem Post",
     "published": "2026-11-15T07:03:25+00:00",
     "summary": "Deni Avdija leads Portland to second straight Win Over OKC The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Damian Lillard Makes Surprising Admission About Deni Avdija - Heavy.com",
     "published": "2026-11-15T02:04:00+00:00",
     "summary": "Damian Lillard Makes Surprising Admission About Deni Avdija Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career - Hoops Wire",
     "published": "2026-11-14T23:48:56+00:00",
     "summary": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start - Yahoo Sports",
     "published": "2026-11-14T23:09:33+00:00",
     "summary": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Lillard Praises Avdija, Mutual Trust in Their Partnership - Blazer's Edge",
     "published": "2026-11-14T22:18:08+00:00",
     "summary": "Lillard Praises Avdija, Mutual Trust in Their Partnership Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Highlights From Deni Avdija 34-Point Game - NBA.com",
     "published": "2026-11-14T15:20:38+00:00",
     "summary": "Highlights From Deni Avdija 34-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars - Last Word On Sports",
     "published": "2026-11-14T12:25:31+00:00",
     "summary": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija scores 34, 9-of-9 from the FT line - NBC Sports",
     "published": "2026-11-14T11:38:16+00:00",
     "summary": "Deni Avdija scores 34, 9-of-9 from the FT line NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Trail Blazers' Deni Avdija: Scores team-high 34 points - CBS Sports",
     "published": "2026-11-14T11:29:36+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores team-high 34 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija News: Scores team-high 34 points - RotoWire",
     "published": "2026-11-14T11:29:36+00:00",
     "summary": "Deni Avdija News: Scores team-high 34 points RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 - The Times of Israel",
     "published": "2026-11-14T07:48:46+00:00",
     "summary": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Kings - TalkBasket.net",
     "published": "2026-11-14T07:14:02+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Kings TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:26:41+00:00",
     "summary": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season - Rip City Project",
     "published": "2026-11-14T06:25:45+00:00",
     "summary": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "NBA Cup: Deni Avdija Scores 34 Points as Portland Trail Blazers Beat Sacramento Kings 120-107, Extend Winning Streak to Three Games - The Sunday Guardian",
     "published": "2026-11-14T06:24:39+00:00",
     "summary": "NBA Cup: Deni Avdija Scores 34 Points as Portland Trail Blazers Beat Sacramento Kings 120-107, Extend Winning Streak to Three Games The Sunday Guardian"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings - Miami Herald",
     "published": "2026-11-14T06:17:21+00:00",
     "summary": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings Miami Herald"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:08:44+00:00",
     "summary": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 NBA.com"
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