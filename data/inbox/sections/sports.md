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
  "home": "Los Angeles Lakers",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-07T03:00:00.000Z"
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
     "kickoff_utc": "2026-11-05T00:30:00Z",
     "home": "São Paulo",
     "away": "Corinthians",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-05T00:30:00Z",
     "home": "Botafogo",
     "away": "Mineiro",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-05T22:30:00Z",
     "home": "Palmeiras",
     "away": "Clube do Remo",
     "status": "FINISHED",
     "score": "6-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-06T00:30:00Z",
     "home": "Cruzeiro",
     "away": "Bahia",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-06T19:00:00Z",
     "home": "Willem II",
     "away": "Zwolle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-06T19:30:00Z",
     "home": "HSV",
     "away": "M'gladbach",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-06T19:45:00Z",
     "home": "Venezia FC",
     "away": "Udinese",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-06T19:45:00Z",
     "home": "Toulouse",
     "away": "Strasbourg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Derby County",
     "away": "Bolton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Sevilla FC",
     "away": "Alavés",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-06T20:00:00Z",
     "home": "Everton",
     "away": "Coventry City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-06T20:45:00Z",
     "home": "Famalicão",
     "away": "Arouca",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-06T23:00:00Z",
     "home": "Vitória",
     "away": "Fluminense",
     "status": "TIMED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Arsenal",
     "played": 9,
     "pts": 24,
     "gd": 9
    },
    {
     "pos": 2,
     "team": "Man City",
     "played": 9,
     "pts": 21,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 9,
     "pts": 19,
     "gd": 17
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 9,
     "pts": 16,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 9,
     "pts": 15,
     "gd": 2
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 9,
     "pts": 14,
     "gd": 7
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 11,
     "pts": 30,
     "gd": 34
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 11,
     "pts": 28,
     "gd": 14
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 11,
     "pts": 27,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 11,
     "pts": 23,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 11,
     "pts": 19,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 11,
     "pts": 17,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 8,
     "pts": 18,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 8,
     "pts": 18,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 8,
     "pts": 16,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 8,
     "pts": 15,
     "gd": 11
    },
    {
     "pos": 5,
     "team": "Bremen",
     "played": 8,
     "pts": 15,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Leverkusen",
     "played": 8,
     "pts": 13,
     "gd": 2
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 10,
     "pts": 28,
     "gd": 16
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 10,
     "pts": 25,
     "gd": 13
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 10,
     "pts": 24,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 10,
     "pts": 23,
     "gd": 10
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 10,
     "pts": 21,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 10,
     "pts": 20,
     "gd": 10
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 9,
     "pts": 20,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 9,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Olympique Lyon",
     "played": 9,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Paris FC",
     "played": 9,
     "pts": 17,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "Stade Rennais",
     "played": 9,
     "pts": 16,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Marseille",
     "played": 9,
     "pts": 15,
     "gd": 7
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "FINISHED",
      "score": "2-0"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-07T15:00:00Z",
      "home": "Arsenal",
      "away": "Hull City",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "FINISHED",
      "score": "1-2"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-08T20:00:00Z",
      "home": "Atleti",
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
    "home": "Phoenix Suns",
    "away": "Orlando Magic",
    "score": "78-60",
    "status": "3rd Qtr"
   },
   {
    "home": "Golden State Warriors",
    "away": "Miami Heat",
    "score": "21-25",
    "status": "1st Qtr"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-07T00:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-07T00:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-07T00:30:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-07T01:00:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-07T01:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-11-07T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-11-07T01:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-07T03:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-07T03:00:00Z"
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
     "kickoff_utc": "2026-10-28T23:30:00",
     "home": "Inter Miami",
     "away": "FC Cincinnati",
     "score": "2-2"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-07T21:00:00",
     "home": "Inter Miami",
     "away": "Charlotte FC",
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
     "title": "Duran & Osmand spark Celtic into life - but where does that leave Hogh?",
     "published": "2026-11-06T00:10:28+00:00",
     "summary": "Martin O'Neill has previously said he is unsure of his best team, but it is now obvious that Camilo Duran is Celtic's best option through the middle."
    },
    {
     "ref": "bbc_football#1",
     "title": "Duran & Osmand spark Celtic into life - but where does that leave Hogh?",
     "published": "2026-11-06T00:10:28+00:00",
     "summary": "Martin O'Neill has previously said he is unsure of his best team, but it is now obvious that Camilo Duran is Celtic's best option through the middle."
    },
    {
     "ref": "bbc_football#2",
     "title": "'He'll regret it': The day Alex Ferguson quit Aberdeen for Man Utd",
     "published": "2026-11-05T23:00:10+00:00",
     "summary": "It's 40 years since the legendary manager left the Dons after eight trophy-laden years."
    },
    {
     "ref": "bbc_football#3",
     "title": "Deschamps not interested in Man Utd job - Friday's gossip",
     "published": "2026-11-05T22:49:23+00:00",
     "summary": "Didier Deschamps is not interested in becoming Manchester United's manager, Arsenal are interested in Club Brugge striker Nicolo Tresoldi, plus more."
    },
    {
     "ref": "bbc_football#4",
     "title": "Forest need balance between Woodstock and military - Glasner",
     "published": "2026-11-05T22:30:07+00:00",
     "summary": "Oliver Glasner insists his Nottingham Forest side cannot survive on \"flower power\" as he tries to strike a balance between trust and respect at the club."
    },
    {
     "ref": "bbc_football#5",
     "title": "Keep or sell Konsa? - FPL gameweek 10 dilemmas",
     "published": "2026-11-05T22:26:23+00:00",
     "summary": "BBC Sport's Fantasy Premier League expert FPL Heisenberg gives his answers to some of the biggest dilemmas facing managers in gameweek 10."
    },
    {
     "ref": "bbc_football#6",
     "title": "Euro Leagues",
     "published": "2026-11-05T22:18:00+00:00",
     "summary": "Reaction to Cristiano Ronaldo’s retirement from Portugal."
    },
    {
     "ref": "bbc_football#7",
     "title": "England check on Palmer - what are Tuchel's other big choices?",
     "published": "2026-11-05T19:00:04+00:00",
     "summary": "It is the last international break of the year and England have some important Nations League games. Thomas Tuchel has big decisions to make in selecting his squad."
    },
    {
     "ref": "bbc_football#8",
     "title": "'Clock is ticking' - Gateshead fans fear for future",
     "published": "2026-11-05T18:33:33+00:00",
     "summary": "Bottom of the National League and with a prospective takeover at the point of collapse, there are fears for the very future of Gateshead."
    },
    {
     "ref": "bbc_football#9",
     "title": "Sutton's predictions v Football Manager, the game",
     "published": "2026-11-05T18:02:15+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on the computer game Football Manager 27, plus the BBC readers and AI, with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#10",
     "title": "Good to feel club are committed to me - Jaissle",
     "published": "2026-11-05T17:25:41+00:00",
     "summary": "Newcastle United manager Matthias Jaissle says he has \"got more of a feeling from within the club\" about how \"committed\" they are to him amid his side's struggling form."
    },
    {
     "ref": "bbc_football#11",
     "title": "Football Daily",
     "published": "2026-11-05T16:31:00+00:00",
     "summary": "Charlie Adam & Nedum Onuoha join Rick to discuss Ronaldo’s international retirement."
    },
    {
     "ref": "bbc_football#12",
     "title": "'A void that is impossible to fill' - tributes paid at De Miguel funeral",
     "published": "2026-11-05T16:12:37+00:00",
     "summary": "Jesus de Miguel's family say \"the mark he has left on so many people\" is something they will always remember as the footballer's funeral takes place in Spain."
    },
    {
     "ref": "bbc_football#13",
     "title": "Scotland's Welsh avoids serious knee injury",
     "published": "2026-11-05T16:00:44+00:00",
     "summary": "Swansea City receive major fitness boost as influential centre-back Stephen Welsh is cleared of serious injury."
    },
    {
     "ref": "bbc_football#14",
     "title": "Emery close to agreeing new Aston Villa contract",
     "published": "2026-11-05T15:45:22+00:00",
     "summary": "Aston Villa manager Unai Emery is close to agreeing a contract extension at the club."
    },
    {
     "ref": "bbc_football#15",
     "title": "Everton's Grealish unavailable again after 'breach of discipline'",
     "published": "2026-11-05T15:28:37+00:00",
     "summary": "Jack Grealish remains unavailable for Everton's Premier League clash with Coventry on Friday, manager David Moyes confirms."
    },
    {
     "ref": "bbc_football#16",
     "title": "What new Kane deal means for England and the Premier League record",
     "published": "2026-11-05T14:44:34+00:00",
     "summary": "Harry Kane's new deal at Bayern Munich may end his Premier League career but offers fresh hope he can lead England to glory, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#17",
     "title": "A bitter end for Ronaldo - the icon who transformed Portugal",
     "published": "2026-11-05T14:29:40+00:00",
     "summary": "As Cristiano Ronaldo retires from international football, Guillem Balague looks at why and what is next for the Portugal legend."
    },
    {
     "ref": "bbc_football#18",
     "title": "Six tournaments, 11 goals - Ronaldo's World Cup legacy",
     "published": "2026-11-05T13:15:21+00:00",
     "summary": "Portugal legend Cristiano Ronaldo retires from international football having scored 146 goals and 234 caps for his country. Here's a look back at his 11 World Cup goals, across six tournaments since 2006."
    },
    {
     "ref": "bbc_football#19",
     "title": "Coleman in 'hybrid role' with Republic of Ireland",
     "published": "2026-11-05T13:03:43+00:00",
     "summary": "Republic of Ireland manager Heimir Hallgrimsson says it was \"tempting\" to include Seamus Coleman in his squad for this month's Nations League matches against Austria and Kosovo despite the defender having not played since June."
    },
    {
     "ref": "bbc_football#20",
     "title": "Japan's Tashima to stand against Infantino for Fifa presidency",
     "published": "2026-11-05T12:55:13+00:00",
     "summary": "Japan's Kozo Tashima has announced his candidacy for Fifa's upcoming presidential election."
    },
    {
     "ref": "bbc_football#21",
     "title": "English female coach Kaminski reaping rewards in Norway",
     "published": "2026-11-05T12:38:34+00:00",
     "summary": "English manager Laura Kaminski has won the Norwegian league and cup double - so will that open doors in her coaching career?"
    },
    {
     "ref": "bbc_football#22",
     "title": "English female coach Kaminski reaping rewards in Norway",
     "published": "2026-11-05T12:38:34+00:00",
     "summary": "English manager Laura Kaminski has won the Norwegian league and cup double - so will that open doors in her coaching career?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Portugal great Ronaldo retires from international duty",
     "published": "2026-11-05T12:28:01+00:00",
     "summary": "Portugal legend Cristiano Ronaldo says \"the day has come for me to hand back the number seven shirt\"."
    },
    {
     "ref": "bbc_football#24",
     "title": "How to follow the Premier League on the BBC this weekend",
     "published": "2026-11-05T12:14:33+00:00",
     "summary": "Our Ask Me Anything team explains how to follow matches from week 10 of the Premier League season on the BBC this weekend."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi deserves MLS MVP award, says Miami boss Gonzalez - beIN SPORTS",
     "published": "2026-11-05T23:58:29+00:00",
     "summary": "Messi deserves MLS MVP award, says Miami boss Gonzalez beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Prediction Inter Miami vs Charlotte: analysis, odds and betting tips - BetMines",
     "published": "2026-11-05T21:33:07+00:00",
     "summary": "Prediction Inter Miami vs Charlotte: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "“He wants to win everything”: Inter Miami’s Berterame reveals what Lionel Messi is really like - Diario AS",
     "published": "2026-11-05T21:12:55+00:00",
     "summary": "“He wants to win everything”: Inter Miami’s Berterame reveals what Lionel Messi is really like Diario AS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami vs Charlotte FC Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-11-05T21:00:00+00:00",
     "summary": "Inter Miami vs Charlotte FC Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami CF v Charlotte FC Odds - FanDuel Sportsbook",
     "published": "2026-11-05T18:57:40+00:00",
     "summary": "Inter Miami CF v Charlotte FC Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami vs Charlotte FC Preview, prediction, injury news & lineups | MLS 2026 - Khel Now",
     "published": "2026-11-05T18:40:00+00:00",
     "summary": "Inter Miami vs Charlotte FC Preview, prediction, injury news & lineups | MLS 2026 Khel Now"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Donaldson proud as Gunners take part in Messi Cup - Arsenal.com",
     "published": "2026-11-05T17:18:36+00:00",
     "summary": "Donaldson proud as Gunners take part in Messi Cup Arsenal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami CF Academy Teams Prepare for Weekend of Tournament Competition - Inter Miami CF",
     "published": "2026-11-05T16:30:08+00:00",
     "summary": "Inter Miami CF Academy Teams Prepare for Weekend of Tournament Competition Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lil Durk’s Attorneys Slam Prosecutors Over Bond Package Pushback - HotNewHipHop",
     "published": "2026-11-05T16:05:07+00:00",
     "summary": "Lil Durk’s Attorneys Slam Prosecutors Over Bond Package Pushback HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Gadzag and New England hoping to pip Miami to second on Decision Day - FotMob",
     "published": "2026-11-05T14:44:25+00:00",
     "summary": "Gadzag and New England hoping to pip Miami to second on Decision Day FotMob"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF vs. Orlando City SC - Game Highlights - ESPN",
     "published": "2026-11-05T14:24:31+00:00",
     "summary": "Inter Miami CF vs. Orlando City SC - Game Highlights ESPN"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums - RealGM",
     "published": "2026-11-05T14:14:28+00:00",
     "summary": "Basketball News, Rumors, Scores, Stats, Analysis, Depth Charts, Forums RealGM"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami's MLS Cup rivals beware - Lionel Messi is entering 'scary hours' in what could be his last dance with Luis Suarez - Goal.com",
     "published": "2026-11-05T14:10:52+00:00",
     "summary": "Inter Miami's MLS Cup rivals beware - Lionel Messi is entering 'scary hours' in what could be his last dance with Luis Suarez Goal.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Tadeo Allende gets on the scoresheet for Inter Miami CF - ESPN",
     "published": "2026-11-05T13:55:51+00:00",
     "summary": "Tadeo Allende gets on the scoresheet for Inter Miami CF ESPN"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lil Durk Accused Of Hiding Apple Watch In His \"Body Cavity\" - HotNewHipHop",
     "published": "2026-11-05T13:35:03+00:00",
     "summary": "Lil Durk Accused Of Hiding Apple Watch In His \"Body Cavity\" HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS Decision Day Odds, Nov. 7: Nashville, LA Galaxy And Best Bets - RG.org",
     "published": "2026-11-05T13:34:03+00:00",
     "summary": "MLS Decision Day Odds, Nov. 7: Nashville, LA Galaxy And Best Bets RG.org"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF Names American Airlines Official Airline Partner - https://safariindia.com/",
     "published": "2026-11-05T09:30:37+00:00",
     "summary": "Inter Miami CF Names American Airlines Official Airline Partner https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Son Heung-min trails only Messi in 2026 MLS jersey sales - Korea JoongAng Daily",
     "published": "2026-11-05T08:24:01+00:00",
     "summary": "Son Heung-min trails only Messi in 2026 MLS jersey sales Korea JoongAng Daily"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Son Heung-min ranks second behind Messi in MLS jersey sales for second straight year - The Korea Herald",
     "published": "2026-11-05T05:42:33+00:00",
     "summary": "Son Heung-min ranks second behind Messi in MLS jersey sales for second straight year The Korea Herald"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi and Inter Miami's opponent in the MLS Cup playoffs has been revealed. - Vietnam.vn",
     "published": "2026-11-05T04:59:08+00:00",
     "summary": "Messi and Inter Miami's opponent in the MLS Cup playoffs has been revealed. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Incredibly popular: Thomas Müller outshines several world stars – and pips Robert Lewandowski - LiveScore",
     "published": "2026-11-05T03:40:48+00:00",
     "summary": "Incredibly popular: Thomas Müller outshines several world stars – and pips Robert Lewandowski LiveScore"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi magic! Inter Miami star scores twice in four-minute span - ESPN",
     "published": "2026-11-05T03:04:37+00:00",
     "summary": "Messi magic! Inter Miami star scores twice in four-minute span ESPN"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi has goal, assist to rally Inter Miami to 2-1 victory over Revolution - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-11-05T02:12:29+00:00",
     "summary": "Lionel Messi has goal, assist to rally Inter Miami to 2-1 victory over Revolution ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "International Duty Roundup: Inter Miami CF Academy Players Represent National Teams in October - Inter Miami CF",
     "published": "2026-11-04T20:41:43+00:00",
     "summary": "International Duty Roundup: Inter Miami CF Academy Players Represent National Teams in October Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Who will Lionel Messi play against in the MLS Playoffs? Decision Day scenarios for Inter Miami - Diario AS",
     "published": "2026-11-04T20:36:32+00:00",
     "summary": "Who will Lionel Messi play against in the MLS Playoffs? Decision Day scenarios for Inter Miami Diario AS"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers - Rip City Project",
     "published": "2026-11-06T00:05:00+00:00",
     "summary": "Deni Avdija is back in the point-forward role that made him an All-Star for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start - Blazer's Edge",
     "published": "2026-11-05T21:02:47+00:00",
     "summary": "Nori, Avdija Discuss Win Over Suns, Blazers’ Hot Start Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish - roundtable.io",
     "published": "2026-11-05T18:20:17+00:00",
     "summary": "Blazers' Deni Avdija Is Making Portland's Biggest Offseason Fear Look Foolish roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ - Yahoo Sports",
     "published": "2026-11-05T17:39:50+00:00",
     "summary": "Blazers star Deni Avdija caught calling out Suns forward Dillon Brooks as a ‘flopping b***h’ Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Teases triple-double against Suns - CBS Sports",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Trail Blazers' Deni Avdija: Teases triple-double against Suns CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija News: Teases triple-double against Suns - RotoWire",
     "published": "2026-11-05T16:22:28+00:00",
     "summary": "Deni Avdija News: Teases triple-double against Suns RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija approaches a triple-double Wednesday night - FantasyPros",
     "published": "2026-11-05T14:59:31+00:00",
     "summary": "Deni Avdija approaches a triple-double Wednesday night FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists - SportsRation",
     "published": "2026-11-05T08:55:46+00:00",
     "summary": "Deni Avdija Leads Trail Blazers Past Suns 132-119 With 12 Assists SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Highlights (21 Points, 12 Assists) Trail Blazers 132, Suns 119 | Nov. 4, 2026 - NBA.com",
     "published": "2026-11-05T05:34:22+00:00",
     "summary": "Deni Avdija Highlights (21 Points, 12 Assists) Trail Blazers 132, Suns 119 | Nov. 4, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija with the And-1!, 11/04/2026 - Yahoo Sports",
     "published": "2026-11-05T04:51:53+00:00",
     "summary": "Deni Avdija with the And-1!, 11/04/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-05T03:57:29+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant - Yahoo Sports",
     "published": "2026-11-04T18:20:39+00:00",
     "summary": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions - Yahoo Sports",
     "published": "2026-11-04T13:00:11+00:00",
     "summary": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level - Ynetnews",
     "published": "2026-11-04T09:12:43+00:00",
     "summary": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers storm back to beat Nuggets, remain perfect on the road - Field Level Media",
     "published": "2026-11-04T08:53:14+00:00",
     "summary": "Blazers storm back to beat Nuggets, remain perfect on the road Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' - Yahoo Sports",
     "published": "2026-11-03T23:27:59+00:00",
     "summary": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders - Rip City Project",
     "published": "2026-11-03T21:13:17+00:00",
     "summary": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Blazers Coach Micah Nori Integrating Deni Avdija with Style - Blazer's Edge",
     "published": "2026-11-03T19:10:16+00:00",
     "summary": "Blazers Coach Micah Nori Integrating Deni Avdija with Style Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start - The Athletic - The New York Times",
     "published": "2026-11-03T13:00:52+00:00",
     "summary": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start - The Athletic The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija scores team-high 28 points in win - NBC Sports",
     "published": "2026-11-03T11:04:57+00:00",
     "summary": "Deni Avdija scores team-high 28 points in win NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija, Danilo Gallinari and the inexact science of NBA Draft player comparisons - Monumental Sports Network",
     "published": "2026-11-03T08:00:00+00:00",
     "summary": "Deni Avdija, Danilo Gallinari and the inexact science of NBA Draft player comparisons Monumental Sports Network"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija powers Trail Blazers past Nuggets - TalkBasket.net",
     "published": "2026-11-03T07:09:07+00:00",
     "summary": "Deni Avdija powers Trail Blazers past Nuggets TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija drops 28 points Monday - FantasyPros",
     "published": "2026-11-03T07:06:06+00:00",
     "summary": "Deni Avdija drops 28 points Monday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Highlights From Deni Avdija 28-Point Game - NBA.com",
     "published": "2026-11-03T06:42:46+00:00",
     "summary": "Highlights From Deni Avdija 28-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Damian Lillard already looks like the co-star Deni Avdija was missing - Rip City Project",
     "published": "2026-11-03T05:17:11+00:00",
     "summary": "Damian Lillard already looks like the co-star Deni Avdija was missing Rip City Project"
    }
   ]
  }
 ]
}
</input>