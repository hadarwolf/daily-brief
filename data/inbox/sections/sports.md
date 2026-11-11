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
  "home": "New Orleans Pelicans",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-12T01:00:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Portland Trail Blazers",
  "away": "Oklahoma City Thunder",
  "kickoff_utc": "2026-11-12T03:00:00.000Z"
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
    "home": "New York Knicks",
    "away": "Milwaukee Bucks",
    "score": "117-85",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Boston Celtics",
    "score": "101-123",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "LA Clippers",
    "score": "133-110",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "Miami Heat",
    "score": "109-115",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Orlando Magic",
    "score": "100-107",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Oklahoma City Thunder",
    "score": "123-103",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Indiana Pacers",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-12T00:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-12T00:00:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-12T00:00:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-12T01:00:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-12T01:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-12T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-12T01:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-12T02:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-12T02:30:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-12T03:00:00Z"
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
     "kickoff_utc": "2026-11-20T21:00:00",
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
     "title": "Man Utd open talks with Pochettino about replacing Carrick",
     "published": "2026-11-11T09:11:28+00:00",
     "summary": "Manchester United open talks with Mauricio Pochettino about replacing Michael Carrick, who is expected to lose his job."
    },
    {
     "ref": "bbc_football#1",
     "title": "NI can draw on strong club form in key window",
     "published": "2026-11-11T08:09:02+00:00",
     "summary": "Northern Ireland manager Michael O'Neill believes there are players in his squad who have the ability to become Premier League regulars."
    },
    {
     "ref": "bbc_football#2",
     "title": "Dalkeith to LA pays off for Porteous with Scotland recall",
     "published": "2026-11-11T08:00:14+00:00",
     "summary": "Centre-half Ryan Porteous has taken a long journey to Los Angeles to rekindle his Scotland career, writes Kheredine Idessane."
    },
    {
     "ref": "bbc_football#3",
     "title": "Dalkeith to LA pays off for Porteous with Scotland recall",
     "published": "2026-11-11T08:00:14+00:00",
     "summary": "Centre-half Ryan Porteous has taken a long journey to Los Angeles to rekindle his Scotland career, writes Kheredine Idessane."
    },
    {
     "ref": "bbc_football#4",
     "title": "Podcast: What’s going wrong at Hearts?",
     "published": "2026-11-11T08:00:00+00:00",
     "summary": "Why are Hearts conceding so many goals and how do they stop the slide?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Wimmer among Aberdeen applicants - gossip",
     "published": "2026-11-11T07:40:54+00:00",
     "summary": "Former Motherwell manager keen on Aberdeen vacancy and former Rangers loan winger keen on return to Ibrox one day..."
    },
    {
     "ref": "bbc_football#6",
     "title": "From Jersey to Somalia... via Liverpool & Man City",
     "published": "2026-11-11T07:13:52+00:00",
     "summary": "BBC Sport charts Jarma Mohamed's surprising football journey from Premier League academies to the Somalia national team, via an app and Jersey Bulls."
    },
    {
     "ref": "bbc_football#7",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-11T06:47:18+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#8",
     "title": "Does Pickford finally face serious competition for his England place?",
     "published": "2026-11-11T06:24:28+00:00",
     "summary": "Does England's long-time first-choice goalkeeper Jordan Pickford finally face serious competition for his place, asks chief football writer Phil McNulty."
    },
    {
     "ref": "bbc_football#9",
     "title": "Arsenal eye Real's Endrick - Wednesday's gossip",
     "published": "2026-11-10T23:08:35+00:00",
     "summary": "Real Madrid forward Endrick is on Arsenal's radar, Liverpool right-back Jeremie Frimpong is not headed for the Anfield exit door, Newcastle and Sunderland among the clubs interested in Croatian striker Dion Beljo, plus more."
    },
    {
     "ref": "bbc_football#10",
     "title": "72+: The EFL Podcast",
     "published": "2026-11-10T22:29:00+00:00",
     "summary": "Former Bromley boss Andy Woodman joins Aaron and Jobi."
    },
    {
     "ref": "bbc_football#11",
     "title": "Leicester and Brentford U21 into EFL Trophy knockout stages",
     "published": "2026-11-10T22:17:53+00:00",
     "summary": "Brentford U21 and League One side Leicester City move into the knockout stages of the Jersey Mike's Trophy with vital victories."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man City thrash Inter to claim first CL win of season",
     "published": "2026-11-10T22:05:15+00:00",
     "summary": "Manchester City come from behind to beat Inter Milan in style for their first Champions League win of the season."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man City thrash Inter to claim first CL win of season",
     "published": "2026-11-10T22:05:15+00:00",
     "summary": "Manchester City come from behind to beat Inter Milan in style for their first Champions League win of the season."
    },
    {
     "ref": "bbc_football#14",
     "title": "Pocognoli to lean on Scotland's 'captain group of five'",
     "published": "2026-11-10T20:49:11+00:00",
     "summary": "Sebastien Pocognoli is delighted to welcome \"exciting\" Scott McTominay into his squad, saying the Napoli midfielder is one of the \"fantastic leaders\" that helped persuade him to become Scotland head coach."
    },
    {
     "ref": "bbc_football#15",
     "title": "Pocognoli to lean on Scotland's 'captain group of five'",
     "published": "2026-11-10T20:49:11+00:00",
     "summary": "Sebastien Pocognoli is delighted to welcome \"exciting\" Scott McTominay into his squad, saying the Napoli midfielder is one of the \"fantastic leaders\" that helped persuade him to become Scotland head coach."
    },
    {
     "ref": "bbc_football#16",
     "title": "Chelsea play out goalless draw with Hacken",
     "published": "2026-11-10T20:07:12+00:00",
     "summary": "Chelsea maintain their unbeaten start in the Women's Champions League but were frustrated by Hacken who pick up their second point in this season's competition."
    },
    {
     "ref": "bbc_football#17",
     "title": "Partick Thistle lose SWPL points for amateur player payments",
     "published": "2026-11-10T19:23:42+00:00",
     "summary": "Partick Thistle are deducted three points and fined £6,000 by the Scottish Women's Premier League for making payments to players who were registered as amateurs last season."
    },
    {
     "ref": "bbc_football#18",
     "title": "Partick Thistle lose SWPL points for amateur player payments",
     "published": "2026-11-10T19:23:42+00:00",
     "summary": "Partick Thistle are deducted three points and fined £6,000 by the Scottish Women's Premier League for making payments to players who were registered as amateurs last season."
    },
    {
     "ref": "bbc_football#19",
     "title": "Partick Thistle lose SWPL points for amateur player payments",
     "published": "2026-11-10T19:23:42+00:00",
     "summary": "Partick Thistle are deducted three points and fined £6,000 by the Scottish Women's Premier League for making payments to players who were registered as amateurs last season."
    },
    {
     "ref": "bbc_football#20",
     "title": "Lecturer's bid to challenge Fifa president Infantino",
     "published": "2026-11-10T19:14:14+00:00",
     "summary": "University lecturer Peter Auf der Heyde is seeking to be nominated to take on Gianni Infantino for the Fifa presidency."
    },
    {
     "ref": "bbc_football#21",
     "title": "The Monaco summit that will decide the future of Carrick and Man Utd",
     "published": "2026-11-10T18:12:02+00:00",
     "summary": "Manchester United's power brokers meet in Monaco on Wednesday to decide whether Michael Carrick will remain as head coach"
    },
    {
     "ref": "bbc_football#22",
     "title": "Wales' Johnson says definitely more to come after 50 caps",
     "published": "2026-11-10T18:01:03+00:00",
     "summary": "Brennan Johnson says he is happy with what he has achieved in football but would like to reach more major tournaments with Wales."
    },
    {
     "ref": "bbc_football#23",
     "title": "McTominay reveals heart treatment at World Cup",
     "published": "2026-11-10T16:46:31+00:00",
     "summary": "Scott McTominay reveals he received treatment on his heart two days before Scotland's World Cup win over Haiti in June."
    },
    {
     "ref": "bbc_football#24",
     "title": "McTominay reveals heart treatment at World Cup",
     "published": "2026-11-10T16:46:31+00:00",
     "summary": "Scott McTominay reveals he received treatment on his heart two days before Scotland's World Cup win over Haiti in June."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi extends his Golden Boot lead over Cristiano Ronaldo with a second MLS title - World Soccer Talk",
     "published": "2026-11-10T20:46:32+00:00",
     "summary": "Lionel Messi extends his Golden Boot lead over Cristiano Ronaldo with a second MLS title World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios - Inter Miami CF",
     "published": "2026-11-10T20:05:51+00:00",
     "summary": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi Set for Emotional Return to Argentina for Career-First Milestone - LiveScore",
     "published": "2026-11-10T18:24:42+00:00",
     "summary": "Lionel Messi Set for Emotional Return to Argentina for Career-First Milestone LiveScore"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami CF Academy Teams Claim Four Tournament Titles in Successful Weekend - WebWire",
     "published": "2026-11-10T17:05:39+00:00",
     "summary": "Inter Miami CF Academy Teams Claim Four Tournament Titles in Successful Weekend WebWire"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "MLS Cup 2026: Why Miami, Nashville & Vancouver are the favorites - MLSsoccer.com",
     "published": "2026-11-10T15:27:09+00:00",
     "summary": "MLS Cup 2026: Why Miami, Nashville & Vancouver are the favorites MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Top 10 Most Valuable MLS Teams (Ranked) - GiveMeSport",
     "published": "2026-11-10T15:25:44+00:00",
     "summary": "Top 10 Most Valuable MLS Teams (Ranked) GiveMeSport"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Nashville SC Sets MLS Record as Playoffs Kick Off - Yahoo Sports",
     "published": "2026-11-10T12:41:00+00:00",
     "summary": "Nashville SC Sets MLS Record as Playoffs Kick Off Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami vs Columbus Crew prediction – Odds & stats – 21 November 2026 - Wincomparator",
     "published": "2026-11-10T09:00:44+00:00",
     "summary": "Inter Miami vs Columbus Crew prediction – Odds & stats – 21 November 2026 Wincomparator"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo - Transfermarkt",
     "published": "2026-11-10T07:55:25+00:00",
     "summary": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi Makes History! Brace and Records Cement Inter Miami Legacy - beIN SPORTS",
     "published": "2026-11-10T07:30:00+00:00",
     "summary": "Messi Makes History! Brace and Records Cement Inter Miami Legacy beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Abada's magic seals wild 3–3 comeback against Messi's Miami - The Jerusalem Post",
     "published": "2026-11-10T07:26:43+00:00",
     "summary": "Abada's magic seals wild 3–3 comeback against Messi's Miami The Jerusalem Post"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi makes MLS history - Altoona Mirror",
     "published": "2026-11-10T04:40:01+00:00",
     "summary": "Messi makes MLS history Altoona Mirror"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Is Lionel Messi the obvious option for MLS MVP? - Yahoo Sports",
     "published": "2026-11-09T23:30:25+00:00",
     "summary": "Is Lionel Messi the obvious option for MLS MVP? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi’s Not Heading Back to Argentina in 2027! Inter Miami Is Still His Home - Soy Futbol",
     "published": "2026-11-09T23:25:12+00:00",
     "summary": "Messi’s Not Heading Back to Argentina in 2027! Inter Miami Is Still His Home Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "DC United closes out 7th consecutive losing season - Baltimore Sun",
     "published": "2026-11-09T19:58:29+00:00",
     "summary": "DC United closes out 7th consecutive losing season Baltimore Sun"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Gulf News",
     "published": "2026-11-09T19:21:07+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Gulf News"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi voted to World XI by players again as Spain dominates men’s and women’s lineups - Sun Sentinel",
     "published": "2026-11-09T19:21:04+00:00",
     "summary": "Messi voted to World XI by players again as Spain dominates men’s and women’s lineups Sun Sentinel"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Called Up: Seven Inter Miami CF Players Set for November International Duty - Inter Miami CF",
     "published": "2026-11-09T18:07:23+00:00",
     "summary": "Called Up: Seven Inter Miami CF Players Set for November International Duty Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios - beIN SPORTS",
     "published": "2026-11-09T18:01:48+00:00",
     "summary": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Germán Berterame scores goal for Inter Miami CF - ESPN",
     "published": "2026-11-09T17:53:11+00:00",
     "summary": "Germán Berterame scores goal for Inter Miami CF ESPN"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Oskaloosa Herald",
     "published": "2026-11-09T17:45:05+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Oskaloosa Herald"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "It’s Miami Time presented by Royal Caribbean: Schedule Announced for Audi 2026 MLS Cup Playoffs Round One Series Against Columbus Crew - WebWire",
     "published": "2026-11-09T17:34:09+00:00",
     "summary": "It’s Miami Time presented by Royal Caribbean: Schedule Announced for Audi 2026 MLS Cup Playoffs Round One Series Against Columbus Crew WebWire"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Bozeman Daily Chronicle",
     "published": "2026-11-09T17:21:00+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Bozeman Daily Chronicle"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami brings media together at Nu Stadium for Copa de Medios - MARCA",
     "published": "2026-11-09T17:14:01+00:00",
     "summary": "Inter Miami brings media together at Nu Stadium for Copa de Medios MARCA"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi makes final decision on leaving Inter Miami as Argentina return rumors grow - https://latination.com/",
     "published": "2026-11-09T17:10:19+00:00",
     "summary": "Lionel Messi makes final decision on leaving Inter Miami as Argentina return rumors grow https://latination.com/"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City - NBC Sports",
     "published": "2026-11-11T07:46:45+00:00",
     "summary": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-11T07:45:52+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Hilton Head Island Packet",
     "published": "2026-11-11T06:51:00+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Hilton Head Island Packet"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija with the And-1!, 11/10/2026 - Yahoo Sports",
     "published": "2026-11-11T06:40:42+00:00",
     "summary": "Deni Avdija with the And-1!, 11/10/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-11T05:03:49+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Avdija Nominated for Western Conference Player of the Week - Blazer's Edge",
     "published": "2026-11-10T03:16:00+00:00",
     "summary": "Avdija Nominated for Western Conference Player of the Week Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Should I Trade Braden Smith for Deni Avdija? | Fantasy Basketball - FantasyPros",
     "published": "2026-11-09T06:52:00+00:00",
     "summary": "Should I Trade Braden Smith for Deni Avdija? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Should I Trade Ben Saraf for Cody Martin? | Fantasy Basketball - FantasyPros",
     "published": "2026-11-09T00:28:25+00:00",
     "summary": "Should I Trade Ben Saraf for Cody Martin? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League - New York Daily News",
     "published": "2026-11-08T15:25:28+00:00",
     "summary": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League New York Daily News"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers' Deni Avdija: Poor shooting performance - CBS Sports",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Trail Blazers' Deni Avdija: Poor shooting performance CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija News: Poor shooting performance - RotoWire",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Deni Avdija News: Poor shooting performance RotoWire"
    }
   ]
  }
 ]
}
</input>