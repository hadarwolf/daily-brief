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
  "home": "Toronto Raptors",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-28T00:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Portland Trail Blazers",
  "away": "Golden State Warriors",
  "kickoff_utc": "2026-11-28T02:30:00.000Z"
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
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-26T23:00:00Z",
     "home": "São Paulo",
     "away": "Clube do Remo",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-27T19:00:00Z",
     "home": "Groningen",
     "away": "Willem II",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-27T19:30:00Z",
     "home": "Bremen",
     "away": "M'gladbach",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-27T19:45:00Z",
     "home": "Brest",
     "away": "Paris FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-27T19:45:00Z",
     "home": "Venezia FC",
     "away": "Bologna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Nottingham",
     "away": "Chelsea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Levante",
     "away": "Santander",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-27T20:00:00Z",
     "home": "Southampton",
     "away": "Middlesbrough",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-27T20:15:00Z",
     "home": "Marítimo",
     "away": "CD Nacional",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-27T23:00:00Z",
     "home": "Fluminense",
     "away": "Cruzeiro",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-11-28T00:00:00Z",
     "home": null,
     "away": null,
     "status": "SCHEDULED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Arsenal",
     "played": 11,
     "pts": 28,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Brighton Hove",
     "played": 11,
     "pts": 22,
     "gd": 17
    },
    {
     "pos": 3,
     "team": "Man City",
     "played": 11,
     "pts": 22,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Liverpool",
     "played": 11,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Bournemouth",
     "played": 11,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 11,
     "pts": 17,
     "gd": 9
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 13,
     "pts": 36,
     "gd": 36
    },
    {
     "pos": 2,
     "team": "Real Madrid",
     "played": 13,
     "pts": 33,
     "gd": 22
    },
    {
     "pos": 3,
     "team": "Atleti",
     "played": 13,
     "pts": 31,
     "gd": 16
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 13,
     "pts": 27,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 13,
     "pts": 22,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 13,
     "pts": 19,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Dortmund",
     "played": 10,
     "pts": 24,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 10,
     "pts": 22,
     "gd": 20
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 10,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 10,
     "pts": 21,
     "gd": 18
    },
    {
     "pos": 5,
     "team": "Leverkusen",
     "played": 10,
     "pts": 19,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 10,
     "pts": 18,
     "gd": 6
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 12,
     "pts": 32,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Roma",
     "played": 12,
     "pts": 30,
     "gd": 25
    },
    {
     "pos": 3,
     "team": "Inter",
     "played": 12,
     "pts": 29,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 12,
     "pts": 27,
     "gd": 14
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 12,
     "pts": 26,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Juventus",
     "played": 12,
     "pts": 21,
     "gd": 7
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 11,
     "pts": 26,
     "gd": 13
    },
    {
     "pos": 2,
     "team": "Paris FC",
     "played": 11,
     "pts": 23,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 11,
     "pts": 21,
     "gd": 6
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 11,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Marseille",
     "played": 11,
     "pts": 18,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Brest",
     "played": 11,
     "pts": 18,
     "gd": 7
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-21T17:30:00Z",
      "home": "Newcastle",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "2-2"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "FINISHED",
      "score": "1-1"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-12-02T20:15:00Z",
      "home": "Brentford",
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
      "kickoff_utc": "2026-11-22T13:00:00Z",
      "home": "Barça",
      "away": "Villarreal",
      "status": "FINISHED",
      "score": "3-2"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-12-02T20:30:00Z",
      "home": "Barça",
      "away": "Atleti",
      "status": "TIMED",
      "score": null
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [],
  "games_today": [
   {
    "home": "New York Knicks",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-28T00:00:00Z"
   },
   {
    "home": "Detroit Pistons",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-28T00:30:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-28T00:30:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-28T00:30:00Z"
   },
   {
    "home": "Boston Celtics",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-28T01:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-28T01:30:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-28T02:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-28T02:30:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-28T02:30:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-28T02:30:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-28T02:30:00Z"
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
     "kickoff_utc": "2026-11-21T23:00:00",
     "home": "Inter Miami",
     "away": "Columbus Crew",
     "score": "0-3"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-28T01:00:00",
     "home": "Columbus Crew",
     "away": "Inter Miami",
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
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2027-03-25T19:45:00",
     "home": "Belarus",
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
     "title": "'Priceless' Duran proves 'the man' but is he papering over cracks at Celtic?",
     "published": "2026-11-27T00:18:44+00:00",
     "summary": "Camilo Duran's 15-goal haul this season has made him an invaluable player for a Celtic side fighting for European progression."
    },
    {
     "ref": "bbc_football#1",
     "title": "'Priceless' Duran proves 'the man' but is he papering over cracks at Celtic?",
     "published": "2026-11-27T00:18:44+00:00",
     "summary": "Camilo Duran's 15-goal haul this season has made him an invaluable player for a Celtic side fighting for European progression."
    },
    {
     "ref": "bbc_football#2",
     "title": "Hearts' European hopes hang by a thread but Vrancken proud",
     "published": "2026-11-26T23:59:43+00:00",
     "summary": "Hearts head coach Wouter Vrancken expresses both pride and disappointment after his team came out on the wrong side of a five-goal thriller against Monaco."
    },
    {
     "ref": "bbc_football#3",
     "title": "Hearts' European hopes hang by a thread but Vrancken proud",
     "published": "2026-11-26T23:59:43+00:00",
     "summary": "Hearts head coach Wouter Vrancken expresses both pride and disappointment after his team came out on the wrong side of a five-goal thriller against Monaco."
    },
    {
     "ref": "bbc_football#4",
     "title": "Bournemouth 'allowed to dream' as fans book Europa League final hotels",
     "published": "2026-11-26T22:27:52+00:00",
     "summary": "Bournemouth are dreaming of winning the Europa League after joining a select band of teams who have won their first five European games."
    },
    {
     "ref": "bbc_football#5",
     "title": "Euro Leagues",
     "published": "2026-11-26T22:13:00+00:00",
     "summary": "Is Jude Bellingham the best midfielder in the world, & even better than Zidane once was?!"
    },
    {
     "ref": "bbc_football#6",
     "title": "Haaland considers Man City exit - Friday's gossip",
     "published": "2026-11-26T21:25:06+00:00",
     "summary": "Erling Haaland considers Manchester City exit, Liverpool explore Jamal Musiala deal and Manchester United eye move for Maxi Araujo, plus more."
    },
    {
     "ref": "bbc_football#7",
     "title": "Carsley eyes Euros history with England U21s after draw",
     "published": "2026-11-26T19:35:17+00:00",
     "summary": "England have won the past two European Under-21 Championships, and Lee Carsley says they will \"go all out\" for a hat-trick."
    },
    {
     "ref": "bbc_football#8",
     "title": "Referee being 'drunk' claims are 'entirely unfounded'",
     "published": "2026-11-26T19:19:49+00:00",
     "summary": "A referee who was replaced at half-time of an Asian Football Confederation (AFC) Champions League Two match denies he was drunk during the fixture."
    },
    {
     "ref": "bbc_football#9",
     "title": "What will returning Magill bring to Northern Ireland?",
     "published": "2026-11-26T18:34:20+00:00",
     "summary": "As she gears up for her international return, what will Simone Magill bring to Northern Ireland against Greece in Friday's friendly?"
    },
    {
     "ref": "bbc_football#10",
     "title": "What will returning Magill bring to Northern Ireland?",
     "published": "2026-11-26T18:34:20+00:00",
     "summary": "As she gears up for her international return, what will Simone Magill bring to Northern Ireland against Greece in Friday's friendly?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Calvert-Lewin signs new Leeds deal until 2029",
     "published": "2026-11-26T18:00:31+00:00",
     "summary": "England international Dominic Calvert-Lewin signs a new contract to stay with Leeds United until 2029."
    },
    {
     "ref": "bbc_football#12",
     "title": "Germany's Freigang given 16-month ban over drugs test issues",
     "published": "2026-11-26T17:12:45+00:00",
     "summary": "Germany international Laura Freigang is suspended from football for 16 months over issues relating to three drugs tests."
    },
    {
     "ref": "bbc_football#13",
     "title": "Germany's Freigang given 16-month ban over drugs test issues",
     "published": "2026-11-26T17:12:45+00:00",
     "summary": "Germany international Laura Freigang is suspended from football for 16 months over issues relating to three drugs tests."
    },
    {
     "ref": "bbc_football#14",
     "title": "SFA to deliver revised proposal after young player vote delayed",
     "published": "2026-11-26T16:49:44+00:00",
     "summary": "The Scottish FA will continue consulting with SPFL clubs in a bid to get more game time for homegrown talent after initial plans put forward by the governing body failed to reach a member vote."
    },
    {
     "ref": "bbc_football#15",
     "title": "Fofana has apologised for interview - Alonso",
     "published": "2026-11-26T16:47:47+00:00",
     "summary": "Chelsea manager Xabi Alonso says defender Wesley Fofana has apologised for his controversial comments in an interview he gave without permission from the club."
    },
    {
     "ref": "bbc_football#16",
     "title": "Sutton's predictions v Kings of Leon drummer Nathan Followill",
     "published": "2026-11-26T15:01:48+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on Kings of Leon drummer Nathan Followill with his predictions for this weekend's Premier League games."
    },
    {
     "ref": "bbc_football#17",
     "title": "Lammens - the Man Utd goalkeeper under scrutiny like never before",
     "published": "2026-11-26T14:56:30+00:00",
     "summary": "Manchester United goalkeeper Senne Lammens made two major mistakes in the 2-2 draw with Sporting - could Mauricio Pochettino drop his goalkeeper?"
    },
    {
     "ref": "bbc_football#18",
     "title": "The American manager with a maths degree making history in La Liga",
     "published": "2026-11-26T13:49:20+00:00",
     "summary": "Real Sociedad boss Pellegrino Matarazzo made history as the first American manager in La Liga. His side face Crystal Palace in the Europa League on Thursday."
    },
    {
     "ref": "bbc_football#19",
     "title": "Not even making a 12-man bench - what next for Garnacho?",
     "published": "2026-11-26T13:23:05+00:00",
     "summary": "Alejandro Garnacho's brief Aston Villa career already looks over, so what next for the 22-year-old?"
    },
    {
     "ref": "bbc_football#20",
     "title": "How to follow the Premier League on the BBC this weekend",
     "published": "2026-11-26T12:06:15+00:00",
     "summary": "Our Ask Me Anything team explains how to follow matches from week 12 of the Premier League season on the BBC this weekend."
    },
    {
     "ref": "bbc_football#21",
     "title": "Who is close to a yellow card suspension in Champions League?",
     "published": "2026-11-26T11:21:53+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains what the rules are regarding yellow card suspensions in this season's Champions League"
    },
    {
     "ref": "bbc_football#22",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-26T11:18:00+00:00",
     "summary": "Three Lionesses join Ellen, Ben & Em ahead of their 2027 World Cup play-off final."
    },
    {
     "ref": "bbc_football#23",
     "title": "Weekly sports quiz: What year will the UK host the Women's World Cup?",
     "published": "2026-11-26T08:02:45+00:00",
     "summary": "How much attention have you paid to what's happened in the world of sport over the past seven days?"
    },
    {
     "ref": "bbc_football#24",
     "title": "Dundee United's Farrugia out until new year - gossip",
     "published": "2026-11-26T07:42:21+00:00",
     "summary": "Injury blow for Dundee United midfielder as Monaco boss pinpoints Hearts danger men."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Luis Suárez confirms contract talks with Inter Miami - ESPN Singapore",
     "published": "2026-11-27T02:40:50+00:00",
     "summary": "Luis Suárez confirms contract talks with Inter Miami ESPN Singapore"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-27T02:02:46+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami CF vs. Columbus Crew - November 27, 2026 - Bleacher Report",
     "published": "2026-11-27T00:00:31+00:00",
     "summary": "Inter Miami CF vs. Columbus Crew - November 27, 2026 Bleacher Report"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Columbus Crew Face Inter Miami in Playoff Game - Wisevoter",
     "published": "2026-11-26T23:52:55+00:00",
     "summary": "Columbus Crew Face Inter Miami in Playoff Game Wisevoter"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "CLBvsMIA 11-27-2026 | MLS Match Recap - MLSsoccer.com",
     "published": "2026-11-26T23:49:12+00:00",
     "summary": "CLBvsMIA 11-27-2026 | MLS Match Recap MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi tops MLS salaries with Lewandowski next - AFP.com",
     "published": "2026-11-26T23:17:25+00:00",
     "summary": "Messi tops MLS salaries with Lewandowski next AFP.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami U12 vs Leones U12 live score, H2H and lineups - Sofascore",
     "published": "2026-11-26T22:42:35+00:00",
     "summary": "Inter Miami U12 vs Leones U12 live score, H2H and lineups Sofascore"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS Player Status Report: Round One Best-of-3 Series (Game 2) - MLSsoccer.com",
     "published": "2026-11-26T21:27:17+00:00",
     "summary": "MLS Player Status Report: Round One Best-of-3 Series (Game 2) MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Son Heung-min, Messi Pushed to Brink in MLS Playoffs - 조선일보",
     "published": "2026-11-26T21:23:58+00:00",
     "summary": "Son Heung-min, Messi Pushed to Brink in MLS Playoffs 조선일보"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Son Heung-min and Messi face playoff elimination after opening-leg losses - Chosunbiz",
     "published": "2026-11-26T21:20:00+00:00",
     "summary": "Son Heung-min and Messi face playoff elimination after opening-leg losses Chosunbiz"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Suarez: The time for excuses is over for Miami - beIN SPORTS",
     "published": "2026-11-26T21:10:23+00:00",
     "summary": "Suarez: The time for excuses is over for Miami beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi in danger: What are Inter Miami’s chances of reaching the MLS playoff semifinals? - Diario AS",
     "published": "2026-11-26T20:18:44+00:00",
     "summary": "Lionel Messi in danger: What are Inter Miami’s chances of reaching the MLS playoff semifinals? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Luis Suarez defends his longevity at 39 alongside Messi and calls for an Inter Miami comeback against Columbus Crew - Tribuna.com",
     "published": "2026-11-26T19:50:24+00:00",
     "summary": "Luis Suarez defends his longevity at 39 alongside Messi and calls for an Inter Miami comeback against Columbus Crew Tribuna.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi’s Inter Miami visit Columbus as Crew supporters’ group clashes with front office over Miami je... - World Soccer Talk",
     "published": "2026-11-26T19:43:49+00:00",
     "summary": "Lionel Messi’s Inter Miami visit Columbus as Crew supporters’ group clashes with front office over Miami je... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Cristiano Ronaldo’s 2026 goal tally looks impressive after reaching another major milestone until Lionel Me... - World Soccer Talk",
     "published": "2026-11-26T19:31:48+00:00",
     "summary": "Cristiano Ronaldo’s 2026 goal tally looks impressive after reaching another major milestone until Lionel Me... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi confirmed for Carlos Tevez’s farewell match at La Bombonera - ANI News",
     "published": "2026-11-26T18:59:00+00:00",
     "summary": "Lionel Messi confirmed for Carlos Tevez’s farewell match at La Bombonera ANI News"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Cristiano Ronaldo trails Lionel Messi in one major career statistic despite scoring 50 more goals - World Soccer Talk",
     "published": "2026-11-26T18:57:00+00:00",
     "summary": "Cristiano Ronaldo trails Lionel Messi in one major career statistic despite scoring 50 more goals World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi closes in on another historic scoring milestone as Inter Miami fights to stay alive in the MLS... - Pasión Fútbol",
     "published": "2026-11-26T18:37:00+00:00",
     "summary": "Lionel Messi closes in on another historic scoring milestone as Inter Miami fights to stay alive in the MLS... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MATCH PREVIEW: Inter Miami CF Visits Columbus Crew for Game 2 of Best-of-3-Series - Inter Miami CF",
     "published": "2026-11-26T18:24:58+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Visits Columbus Crew for Game 2 of Best-of-3-Series Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time - FOX One",
     "published": "2026-11-26T18:18:46+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time FOX One"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Columbus Crew vs. Inter Miami MLS Betting Odds, Picks: It's do-or-die for Lionel Messi's Herons - Sports Interaction",
     "published": "2026-11-26T18:08:09+00:00",
     "summary": "Columbus Crew vs. Inter Miami MLS Betting Odds, Picks: It's do-or-die for Lionel Messi's Herons Sports Interaction"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus Crew v Inter Miami - Opta Predictor - SportyTV",
     "published": "2026-11-26T18:04:00+00:00",
     "summary": "Columbus Crew v Inter Miami - Opta Predictor SportyTV"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "When do Inter Miami play next in MLS playoffs? - The Sun",
     "published": "2026-11-26T17:07:34+00:00",
     "summary": "When do Inter Miami play next in MLS playoffs? The Sun"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-26T16:35:37+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi closing in on Josef Martínez’s MLS goals record: How many does he need? - Diario AS",
     "published": "2026-11-26T16:31:57+00:00",
     "summary": "Lionel Messi closing in on Josef Martínez’s MLS goals record: How many does he need? Diario AS"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs - ClutchPoints",
     "published": "2026-11-26T23:29:06+00:00",
     "summary": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs - Yahoo Sports",
     "published": "2026-11-26T23:28:34+00:00",
     "summary": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful - Hoops Habit",
     "published": "2026-11-26T20:00:00+00:00",
     "summary": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful Hoops Habit"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers hand Spurs first road loss after Deni Avdija’s dagger - ClutchPoints",
     "published": "2026-11-26T17:49:06+00:00",
     "summary": "Blazers hand Spurs first road loss after Deni Avdija’s dagger ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double in win - CBS Sports",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija News: Teases triple-double in win - RotoWire",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Deni Avdija News: Teases triple-double in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night - FirstSportz",
     "published": "2026-11-26T16:31:00+00:00",
     "summary": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night FirstSportz"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Nets' Ben Saraf: Recalled to NBA - CBS Sports",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Nets' Ben Saraf: Recalled to NBA CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Ben Saraf News: Recalled to NBA - RotoWire",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Ben Saraf News: Recalled to NBA RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija - The Times of Israel",
     "published": "2026-11-26T15:01:00+00:00",
     "summary": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Highlights From Deni Avdija 33-Point Game - NBA.com",
     "published": "2026-11-26T14:39:40+00:00",
     "summary": "Highlights From Deni Avdija 33-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion - NDTV Sports",
     "published": "2026-11-26T14:36:56+00:00",
     "summary": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season - Sportskeeda",
     "published": "2026-11-26T13:39:00+00:00",
     "summary": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew - Heavy.com",
     "published": "2026-11-26T12:48:00+00:00",
     "summary": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-26T12:35:26+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night - Haaretz",
     "published": "2026-11-26T10:47:00+00:00",
     "summary": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night Haaretz"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs - Yahoo Sports",
     "published": "2026-11-26T10:26:31+00:00",
     "summary": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs - NDTV Sports",
     "published": "2026-11-26T09:36:01+00:00",
     "summary": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Scores 33 Points In Win Over Spurs - FanDuel",
     "published": "2026-11-26T09:30:37+00:00",
     "summary": "Deni Avdija Scores 33 Points In Win Over Spurs FanDuel"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Puts Blazers Ahead For Good At The Line - Yardbarker",
     "published": "2026-11-26T09:19:43+00:00",
     "summary": "Deni Avdija Puts Blazers Ahead For Good At The Line Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ - Heavy.com",
     "published": "2026-11-26T09:12:34+00:00",
     "summary": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch - Ynetnews",
     "published": "2026-11-26T08:32:58+00:00",
     "summary": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija Inspires Trail Blazers to 116-111 Victory Over Spurs - SportsRation",
     "published": "2026-11-26T08:25:42+00:00",
     "summary": "Deni Avdija Inspires Trail Blazers to 116-111 Victory Over Spurs SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "A league of his own: NBA analysts crown Deni Avdija a true superstar - The Jerusalem Post",
     "published": "2026-11-26T08:18:48+00:00",
     "summary": "A league of his own: NBA analysts crown Deni Avdija a true superstar The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "“We’re going to have to trust each other” – Damian Lillard breaks down his clutch assist to Deni Avdija in Trail Blazers' win - Basketball Network",
     "published": "2026-11-26T07:57:00+00:00",
     "summary": "“We’re going to have to trust each other” – Damian Lillard breaks down his clutch assist to Deni Avdija in Trail Blazers' win Basketball Network"
    }
   ]
  }
 ]
}
</input>