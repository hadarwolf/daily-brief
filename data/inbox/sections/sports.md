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
     "title": "EFL preview: Happy Potters and the deathly Hammers",
     "published": "2026-11-27T11:03:43+00:00",
     "summary": "BBC Sport explores five things to capture your attention this EFL weekend."
    },
    {
     "ref": "bbc_football#1",
     "title": "Botman banned from driving for using phone at wheel",
     "published": "2026-11-27T10:34:09+00:00",
     "summary": "The Newcastle United defender was given a six-month ban at Newcastle Magistrates' Court."
    },
    {
     "ref": "bbc_football#2",
     "title": "Clashes mar European games as Macron condemns violence",
     "published": "2026-11-27T10:24:24+00:00",
     "summary": "Violent clashes mar a number of European football matches on Thursday night, with French president Emmanuel Macron condemning trouble at Marseille's home game against Levski Sofia."
    },
    {
     "ref": "bbc_football#3",
     "title": "'Massive for both' - Saints and Boro revisit Spygate rivalry",
     "published": "2026-11-27T10:11:58+00:00",
     "summary": "Southampton and Middlesbrough prepare to re-ignite their rivalry as they meet for the first time since the Spygate scandal unfolded."
    },
    {
     "ref": "bbc_football#4",
     "title": "Why Cambridgeshire derby could be season-defining",
     "published": "2026-11-27T08:25:44+00:00",
     "summary": "Peterborough United and Cambridge United are set for a potentially season-defining local derby at London Road."
    },
    {
     "ref": "bbc_football#5",
     "title": "Podcast: Tynecastle showdown & Rangers face flying Falkirk - weekend preview",
     "published": "2026-11-27T08:00:00+00:00",
     "summary": "Another criticial weekend of SPFL action with a huge grudge match at Tynecastle."
    },
    {
     "ref": "bbc_football#6",
     "title": "Goodwin backs Sapsford for Australia call-up - gossip",
     "published": "2026-11-27T07:21:15+00:00",
     "summary": "Dundee United manager backs striker for international call-up as Hibs boss offers advice to forward."
    },
    {
     "ref": "bbc_football#7",
     "title": "What makes or breaks a high press?",
     "published": "2026-11-27T07:17:13+00:00",
     "summary": "A good high press has been the basis for some of the most successful sides in modern football, but what determines whether a press works or fails? And how are the always-adapting Premier League teams exploiting high presses this season?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-27T06:59:03+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#9",
     "title": "Is it time to sell Haaland? - FPL gameweek 12 dilemmas",
     "published": "2026-11-27T06:58:33+00:00",
     "summary": "BBC Sport's Fantasy Premier League expert Holly Shand gives her answers to some of the biggest dilemmas facing managers in gameweek 12."
    },
    {
     "ref": "bbc_football#10",
     "title": "What happens now for Bayern Munich and Musiala?",
     "published": "2026-11-27T06:54:36+00:00",
     "summary": "Bayern Munich's Jamal Musiala might never return to his previous level and will deal with a medical condition for the rest of his life. What happens next?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Man City owners should be forced to sell, say clubs",
     "published": "2026-11-27T06:38:14+00:00",
     "summary": "Manchester City's owners must be forced to sell the club as punishment for breaking financial rules, senior figures at some Premier League clubs tell BBC Sport."
    },
    {
     "ref": "bbc_football#12",
     "title": "'Priceless' Duran proves 'the man' but is he papering over cracks at Celtic?",
     "published": "2026-11-27T00:18:44+00:00",
     "summary": "Camilo Duran's 15-goal haul this season has made him an invaluable player for a Celtic side fighting for European progression."
    },
    {
     "ref": "bbc_football#13",
     "title": "'Priceless' Duran proves 'the man' but is he papering over cracks at Celtic?",
     "published": "2026-11-27T00:18:44+00:00",
     "summary": "Camilo Duran's 15-goal haul this season has made him an invaluable player for a Celtic side fighting for European progression."
    },
    {
     "ref": "bbc_football#14",
     "title": "Hearts' European hopes hang by a thread but Vrancken proud",
     "published": "2026-11-26T23:59:43+00:00",
     "summary": "Hearts head coach Wouter Vrancken expresses both pride and disappointment after his team came out on the wrong side of a five-goal thriller against Monaco."
    },
    {
     "ref": "bbc_football#15",
     "title": "Hearts' European hopes hang by a thread but Vrancken proud",
     "published": "2026-11-26T23:59:43+00:00",
     "summary": "Hearts head coach Wouter Vrancken expresses both pride and disappointment after his team came out on the wrong side of a five-goal thriller against Monaco."
    },
    {
     "ref": "bbc_football#16",
     "title": "Bournemouth 'allowed to dream' as fans book Europa League final hotels",
     "published": "2026-11-26T22:27:52+00:00",
     "summary": "Bournemouth are dreaming of winning the Europa League after joining a select band of teams who have won their first five European games."
    },
    {
     "ref": "bbc_football#17",
     "title": "Euro Leagues",
     "published": "2026-11-26T22:13:00+00:00",
     "summary": "Is Jude Bellingham the best midfielder in the world, & even better than Zidane once was?!"
    },
    {
     "ref": "bbc_football#18",
     "title": "Haaland considers Man City exit - Friday's gossip",
     "published": "2026-11-26T21:25:06+00:00",
     "summary": "Erling Haaland considers Manchester City exit, Liverpool explore Jamal Musiala deal and Manchester United eye move for Maxi Araujo, plus more."
    },
    {
     "ref": "bbc_football#19",
     "title": "Carsley eyes Euros history with England U21s after draw",
     "published": "2026-11-26T19:35:17+00:00",
     "summary": "England have won the past two European Under-21 Championships, and Lee Carsley says they will \"go all out\" for a hat-trick."
    },
    {
     "ref": "bbc_football#20",
     "title": "Referee being 'drunk' claims are 'entirely unfounded'",
     "published": "2026-11-26T19:19:49+00:00",
     "summary": "A referee who was replaced at half-time of an Asian Football Confederation (AFC) Champions League Two match denies he was drunk during the fixture."
    },
    {
     "ref": "bbc_football#21",
     "title": "What will returning Magill bring to Northern Ireland?",
     "published": "2026-11-26T18:34:20+00:00",
     "summary": "As she gears up for her international return, what will Simone Magill bring to Northern Ireland against Greece in Friday's friendly?"
    },
    {
     "ref": "bbc_football#22",
     "title": "What will returning Magill bring to Northern Ireland?",
     "published": "2026-11-26T18:34:20+00:00",
     "summary": "As she gears up for her international return, what will Simone Magill bring to Northern Ireland against Greece in Friday's friendly?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Calvert-Lewin signs new Leeds deal until 2029",
     "published": "2026-11-26T18:00:31+00:00",
     "summary": "England international Dominic Calvert-Lewin signs a new contract to stay with Leeds United until 2029."
    },
    {
     "ref": "bbc_football#24",
     "title": "Germany's Freigang given 16-month ban over drugs test issues",
     "published": "2026-11-26T17:12:45+00:00",
     "summary": "Germany international Laura Freigang is suspended from football for 16 months over issues relating to three drugs tests."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi Vs Cristiano Ronaldo Again? Carlos Tevez's Testimonial Match Promises Star-Studded Lineup - Outlook India",
     "published": "2026-11-27T11:33:35+00:00",
     "summary": "Lionel Messi Vs Cristiano Ronaldo Again? Carlos Tevez's Testimonial Match Promises Star-Studded Lineup Outlook India"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Will Lionel Messi play tonight for Inter Miami vs Columbus Crew in MLS 2026 Playoffs Round One Game 2? - Khel Now",
     "published": "2026-11-27T11:23:00+00:00",
     "summary": "Will Lionel Messi play tonight for Inter Miami vs Columbus Crew in MLS 2026 Playoffs Round One Game 2? Khel Now"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "MLS Playoffs: Crew 1 win away from huge upset of Messi, Miami - WSYX",
     "published": "2026-11-27T11:18:05+00:00",
     "summary": "MLS Playoffs: Crew 1 win away from huge upset of Messi, Miami WSYX"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi to play in Carlos Tevez’s testimonial in Argentina in December - The New York Times",
     "published": "2026-11-27T11:08:09+00:00",
     "summary": "Lionel Messi to play in Carlos Tevez’s testimonial in Argentina in December The New York Times"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-27T11:02:46+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi embracing MLS supervillain role with Inter Miami CF - The Columbus Dispatch",
     "published": "2026-11-27T10:07:00+00:00",
     "summary": "Lionel Messi embracing MLS supervillain role with Inter Miami CF The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Where is Kieran Gibbs? - The Football Week",
     "published": "2026-11-27T10:05:10+00:00",
     "summary": "Where is Kieran Gibbs? The Football Week"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus Crew vs. Inter Miami prediction favors Columbus Crew in MLS Playoffs on Black Friday 2026 - Dimers",
     "published": "2026-11-27T08:01:38+00:00",
     "summary": "Columbus Crew vs. Inter Miami prediction favors Columbus Crew in MLS Playoffs on Black Friday 2026 Dimers"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Forbes Puts Messi's Net Worth at $1.1 Billion - Wisevoter",
     "published": "2026-11-27T07:02:53+00:00",
     "summary": "Forbes Puts Messi's Net Worth at $1.1 Billion Wisevoter"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi, Suarez and Inter Miami face must-win clash in Columbus - EWN",
     "published": "2026-11-27T06:51:58+00:00",
     "summary": "Messi, Suarez and Inter Miami face must-win clash in Columbus EWN"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Columbus Crew vs Inter Miami CF - Where to Watch, Stream Info, TV Channel, and Live Updates (November 27, 2026) - Fubo",
     "published": "2026-11-27T06:10:11+00:00",
     "summary": "Columbus Crew vs Inter Miami CF - Where to Watch, Stream Info, TV Channel, and Live Updates (November 27, 2026) Fubo"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi to play in Tevez's testimonial match - Reuters",
     "published": "2026-11-27T05:38:00+00:00",
     "summary": "Messi to play in Tevez's testimonial match Reuters"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami vow to ‘dig deep’ at Columbus to keep title defense alive - Field Level Media",
     "published": "2026-11-27T04:57:43+00:00",
     "summary": "Inter Miami vow to ‘dig deep’ at Columbus to keep title defense alive Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-27T04:52:54+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami vow to 'dig deep' at Columbus to keep title defense alive - The Lufkin Daily News",
     "published": "2026-11-27T04:33:08+00:00",
     "summary": "Inter Miami vow to 'dig deep' at Columbus to keep title defense alive The Lufkin Daily News"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Miami needs to win Friday or the season ends - Sports Talk Florida",
     "published": "2026-11-27T04:20:00+00:00",
     "summary": "Miami needs to win Friday or the season ends Sports Talk Florida"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami vs Columbus Crew Betting Tips: Prediction & Lineups - Squawka",
     "published": "2026-11-27T03:55:38+00:00",
     "summary": "Inter Miami vs Columbus Crew Betting Tips: Prediction & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami vs Columbus Crew Prediction, Stats & Lineups - Squawka",
     "published": "2026-11-27T03:23:33+00:00",
     "summary": "Inter Miami vs Columbus Crew Prediction, Stats & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Luis Suárez confirms contract talks with Inter Miami - ESPN Singapore",
     "published": "2026-11-27T02:40:50+00:00",
     "summary": "Luis Suárez confirms contract talks with Inter Miami ESPN Singapore"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time - FOX One",
     "published": "2026-11-27T00:01:36+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time FOX One"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF vs. Columbus Crew - November 27, 2026 - Bleacher Report",
     "published": "2026-11-27T00:00:31+00:00",
     "summary": "Inter Miami CF vs. Columbus Crew - November 27, 2026 Bleacher Report"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus Crew Face Inter Miami in Playoff Game - Wisevoter",
     "published": "2026-11-26T23:52:55+00:00",
     "summary": "Columbus Crew Face Inter Miami in Playoff Game Wisevoter"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Suarez: The time for excuses is over for Miami - beIN SPORTS",
     "published": "2026-11-26T21:10:23+00:00",
     "summary": "Suarez: The time for excuses is over for Miami beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi in danger: What are Inter Miami’s chances of reaching the MLS playoff semifinals? - Diario AS",
     "published": "2026-11-26T20:18:44+00:00",
     "summary": "Lionel Messi in danger: What are Inter Miami’s chances of reaching the MLS playoff semifinals? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi’s Inter Miami visit Columbus as Crew supporters’ group clashes with front office over Miami je... - World Soccer Talk",
     "published": "2026-11-26T19:43:49+00:00",
     "summary": "Lionel Messi’s Inter Miami visit Columbus as Crew supporters’ group clashes with front office over Miami je... World Soccer Talk"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 - Fadeaway World",
     "published": "2026-11-27T05:41:02+00:00",
     "summary": "5 Potential Destinations For Deni Avdija When He Inevitably Hits Free Agency In 2028 Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Golden State Warriors @ Portland Trail Blazers Odds - FanDuel Sportsbook",
     "published": "2026-11-27T05:36:16+00:00",
     "summary": "Golden State Warriors @ Portland Trail Blazers Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Barkley Questions Wizards Decision to Trade Deni Avdija - Limapagi",
     "published": "2026-11-27T04:32:02+00:00",
     "summary": "Barkley Questions Wizards Decision to Trade Deni Avdija Limapagi"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Watch: Shaq surprises Deni Avdija with Hebrew greetings - Israel National News",
     "published": "2026-11-27T02:55:00+00:00",
     "summary": "Watch: Shaq surprises Deni Avdija with Hebrew greetings Israel National News"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs - ClutchPoints",
     "published": "2026-11-26T23:29:06+00:00",
     "summary": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs - Yahoo Sports",
     "published": "2026-11-26T23:28:34+00:00",
     "summary": "‘An Absolute Superstar’ – NBA Insider Hypes ‘Underrated’ Western Conference Forward After 33-Point Explosion vs. Victor Wembanyama, Spurs Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful - Hoops Habit",
     "published": "2026-11-26T20:00:00+00:00",
     "summary": "Deni Avdija's All-NBA play this season has Blazers fans feeling thankful Hoops Habit"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Blazers hand Spurs first road loss after Deni Avdija’s dagger - ClutchPoints",
     "published": "2026-11-26T17:49:06+00:00",
     "summary": "Blazers hand Spurs first road loss after Deni Avdija’s dagger ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double in win - CBS Sports",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija News: Teases triple-double in win - RotoWire",
     "published": "2026-11-26T17:36:22+00:00",
     "summary": "Deni Avdija News: Teases triple-double in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night - FirstSportz",
     "published": "2026-11-26T16:31:00+00:00",
     "summary": "Charles Barkley Hails 'Fearless' Trail Blazers For Stopping Victor Wembanyama's 44-Point Night FirstSportz"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Nets' Ben Saraf: Recalled to NBA - CBS Sports",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Nets' Ben Saraf: Recalled to NBA CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Ben Saraf News: Recalled to NBA - RotoWire",
     "published": "2026-11-26T15:47:30+00:00",
     "summary": "Ben Saraf News: Recalled to NBA RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija - The Times of Israel",
     "published": "2026-11-26T15:01:00+00:00",
     "summary": "Shaquille O’Neal shows off Hebrew skills in talk with Deni Avdija The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Highlights From Deni Avdija 33-Point Game - NBA.com",
     "published": "2026-11-26T14:39:40+00:00",
     "summary": "Highlights From Deni Avdija 33-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion - NDTV Sports",
     "published": "2026-11-26T14:36:56+00:00",
     "summary": "NBA Cup Shocker: Charles Barkley Invokes Dražen Petrović While Blasting Wizards Over Deni Avdija’s Portland Explosion NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season - Sportskeeda",
     "published": "2026-11-26T13:39:00+00:00",
     "summary": "Deni Avdija Sends Warning to NBA Rivals as Trail Blazers Hand Spurs First Road Loss of the Season Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew - Heavy.com",
     "published": "2026-11-26T12:48:00+00:00",
     "summary": "Trail Blazers’ Deni Avdija Has Priceless Reaction to Shaq’s Hebrew Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-26T12:35:26+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night - Haaretz",
     "published": "2026-11-26T10:47:00+00:00",
     "summary": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night Haaretz"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs - Yahoo Sports",
     "published": "2026-11-26T10:26:31+00:00",
     "summary": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs - NDTV Sports",
     "published": "2026-11-26T09:36:01+00:00",
     "summary": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija Puts Blazers Ahead For Good At The Line - Yardbarker",
     "published": "2026-11-26T09:19:43+00:00",
     "summary": "Deni Avdija Puts Blazers Ahead For Good At The Line Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ - Heavy.com",
     "published": "2026-11-26T09:12:34+00:00",
     "summary": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch - Ynetnews",
     "published": "2026-11-26T08:32:58+00:00",
     "summary": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch Ynetnews"
    }
   ]
  }
 ]
}
</input>