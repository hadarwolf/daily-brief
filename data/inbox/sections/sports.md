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
  "home": "Sacramento Kings",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-10-24T02:00:00.000Z"
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
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-22T00:30:00Z",
     "home": "Palmeiras",
     "away": "Fluminense",
     "status": "FINISHED",
     "score": "5-4"
    }
   ],
   "today": [
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-23T00:30:00Z",
     "home": "Flamengo",
     "away": "Estudiantes LP",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-23T18:00:00Z",
     "home": "Go Ahead",
     "away": "Telstar",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-23T18:30:00Z",
     "home": "Stuttgart",
     "away": "M'gladbach",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-23T18:45:00Z",
     "home": "Torino",
     "away": "Monza",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-23T18:45:00Z",
     "home": "Brest",
     "away": "Nice",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Alavés",
     "away": "Málaga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Bolton",
     "away": "Middlesbrough",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Ipswich Town",
     "away": "Nottingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-23T19:45:00Z",
     "home": "Vitória SC",
     "away": "Marítimo",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-23T23:00:00Z",
     "home": "Cruzeiro",
     "away": "Clube do Remo",
     "status": "TIMED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Man City",
     "played": 7,
     "pts": 21,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 7,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 7,
     "pts": 16,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 7,
     "pts": 12,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 7,
     "pts": 10,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 9,
     "pts": 27,
     "gd": 30
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 9,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 9,
     "pts": 21,
     "gd": 14
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 9,
     "pts": 19,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 9,
     "pts": 16,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 9,
     "pts": 14,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 6,
     "pts": 14,
     "gd": 17
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 6,
     "pts": 14,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 6,
     "pts": 13,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 6,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Mainz",
     "played": 6,
     "pts": 10,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Elversberg",
     "played": 6,
     "pts": 10,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 7,
     "pts": 19,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 7,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 7,
     "pts": 17,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 7,
     "pts": 15,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Olympique Lyon",
     "played": 7,
     "pts": 14,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Monaco",
     "played": 7,
     "pts": 14,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Stade Rennais",
     "played": 7,
     "pts": 13,
     "gd": 1
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "FINISHED",
      "score": "3-0"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
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
    "away": "Cleveland Cavaliers",
    "score": "114-106",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Denver Nuggets",
    "score": "64-62",
    "status": "3rd Qtr"
   }
  ],
  "games_today": [
   {
    "home": "Boston Celtics",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-10-23T23:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-10-24T01:30:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-10-23T23:00:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-10-23T23:00:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-10-23T23:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Toronto Raptors",
    "score": null,
    "status": "2026-10-23T23:00:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-10-24T00:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-10-23T20:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-10-24T01:30:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-10-24T02:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-10-24T02:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-10-24T02:00:00Z"
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
     "kickoff_utc": "2026-10-24T21:30:00",
     "home": "New York Red Bulls",
     "away": "Inter Miami",
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
     "title": "O'Neill bemoans marginal moments but are Celtic just not good enough?",
     "published": "2026-10-22T22:52:52+00:00",
     "summary": "Martin O'Neill spoke of refereeing decisions and near misses after the Europa League defeat against Celta Vigo. But is the reality more concerning?"
    },
    {
     "ref": "bbc_football#1",
     "title": "O'Neill bemoans marginal moments but are Celtic just not good enough?",
     "published": "2026-10-22T22:52:52+00:00",
     "summary": "Martin O'Neill spoke of refereeing decisions and near misses after the Europa League defeat against Celta Vigo. But is the reality more concerning?"
    },
    {
     "ref": "bbc_football#2",
     "title": "'Celtic are just not good enough at this level'",
     "published": "2026-10-22T22:22:00+00:00",
     "summary": "Kenny Macintyre and the team reflect on a difficult night for Scottish clubs in Europe"
    },
    {
     "ref": "bbc_football#3",
     "title": "Superman at Como & is Conte right for Man Utd?",
     "published": "2026-10-22T21:58:00+00:00",
     "summary": "Como gets some love after that scoreline against Man United midweek"
    },
    {
     "ref": "bbc_football#4",
     "title": "Man Utd chief keen on Howe - Friday's gossip",
     "published": "2026-10-22T21:53:52+00:00",
     "summary": "Manchester United linked with Antonio Conte, Unai Emery, Eddie Howe and Julian Nagelsmann among others if they part ways with manager Michael Carrick."
    },
    {
     "ref": "bbc_football#5",
     "title": "Dream night for Bournemouth - win over Milan a sign of Premier League power",
     "published": "2026-10-22T21:30:31+00:00",
     "summary": "Bournemouth's 3-0 win against AC Milan further illustrated the dominance of Premier League sides against their European counterparts."
    },
    {
     "ref": "bbc_football#6",
     "title": "Fernandes has home burgled while in Italy with Man Utd",
     "published": "2026-10-22T18:04:21+00:00",
     "summary": "Manchester United captain Bruno Fernandes had his home burgled on Wednesday while he was in Italy for his club's Champions League game against Como."
    },
    {
     "ref": "bbc_football#7",
     "title": "US to host first Women's Club World Cup in 2028",
     "published": "2026-10-22T17:49:08+00:00",
     "summary": "Arsenal are named as one of the teams to compete at the inaugural Women's Club World Cup, to be hosted in the United States in 2028."
    },
    {
     "ref": "bbc_football#8",
     "title": "US to host first Women's Club World Cup in 2028",
     "published": "2026-10-22T17:49:08+00:00",
     "summary": "Arsenal are named as one of the teams to compete at the inaugural Women's Club World Cup, to be hosted in the United States in 2028."
    },
    {
     "ref": "bbc_football#9",
     "title": "BBC to show Cray Wanderers v Stockport & Altrincham v Notts County",
     "published": "2026-10-22T16:31:24+00:00",
     "summary": "Non-league clubs Altrincham and Cray Wanderers will stage the BBC's two chosen FA Cup first-round ties next month."
    },
    {
     "ref": "bbc_football#10",
     "title": "Sutton's predictions v Waffle the Wonder Dog and his owner, Simon",
     "published": "2026-10-22T16:30:41+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on Waffle the Wonder Dog and his owner Simon, plus the BBC readers and AI with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#11",
     "title": "Fernandes to stay captain as Rooney calls Man Utd players babies",
     "published": "2026-10-22T16:19:30+00:00",
     "summary": "Bruno Fernandes will remain as Manchester United captain and will not be disciplined for his post-match criticism of Michael Carrick after the 4-1 Champions League defeat by Como."
    },
    {
     "ref": "bbc_football#12",
     "title": "What are Real's attacking options during Vinicius Jr ban?",
     "published": "2026-10-22T15:33:29+00:00",
     "summary": "Real Madrid’s attacking options are expanding under Jose Mourinho, with Endrick, Yan Diomande and Carlos Espi offering fresh solutions in the final third."
    },
    {
     "ref": "bbc_football#13",
     "title": "Football Daily",
     "published": "2026-10-22T15:16:00+00:00",
     "summary": "Andy Mitten & Jay Motty join Rick & Lloyd to dissect Man United's disastrous night."
    },
    {
     "ref": "bbc_football#14",
     "title": "Carrick carrying on but senior Man Utd figures concerned by performances",
     "published": "2026-10-22T14:04:44+00:00",
     "summary": "While head coach Michael Carrick is expected to be in charge for Sunday's match against Bournemouth, Manchester United begin the process of identifying possible replacements."
    },
    {
     "ref": "bbc_football#15",
     "title": "Breaking down Man Utd's tactics after Fernandes' criticism",
     "published": "2026-10-22T12:44:08+00:00",
     "summary": "Was Manchester United captain Bruno Fernandes correct in his analysis of his side's tactics in their 4-1 thrashing by Italian side Como?"
    },
    {
     "ref": "bbc_football#16",
     "title": "Third-longest serving manager in top 92 clubs Woodman leaves Bromley",
     "published": "2026-10-22T10:28:21+00:00",
     "summary": "Bromley part company with manager Andy Woodman following a challenging start to the 2026-27 season."
    },
    {
     "ref": "bbc_football#17",
     "title": "Manager ins and outs - 2026-27",
     "published": "2026-10-22T10:17:06+00:00",
     "summary": "BBC Sport tracks all the manager ins and outs in the Premier League, Scottish Premiership, Women's Super League, English Football League and National League."
    },
    {
     "ref": "bbc_football#18",
     "title": "Sheff Wed forward Lowe racially abused on social media",
     "published": "2026-10-22T09:09:07+00:00",
     "summary": "Sheffield Wednesday forward Jamal Lowe has revealed his wife was sent a message racially abusing him on social media."
    },
    {
     "ref": "bbc_football#19",
     "title": "Who is close to a yellow card suspension in Champions League?",
     "published": "2026-10-22T08:54:13+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains what the rules are regarding yellow card suspensions in this season's Champions League"
    },
    {
     "ref": "bbc_football#20",
     "title": "Who is close to a yellow card suspension in Champions League?",
     "published": "2026-10-22T08:54:13+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains what the rules are regarding yellow card suspensions in this season's Champions League"
    },
    {
     "ref": "bbc_football#21",
     "title": "Maloney undecided on being a manager - gossip",
     "published": "2026-10-22T06:39:18+00:00",
     "summary": "Celtic assistant unsure about return to management as Spanish club monitor Rangers midfielder."
    },
    {
     "ref": "bbc_football#22",
     "title": "Is Leicester boss Martin turning the Foxes' fortunes?",
     "published": "2026-10-22T06:01:48+00:00",
     "summary": "Leicester are 10th in League One, 10 years after winning the Premier League. After hitting their lowest ebb, are there now grounds for optimism?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-22T05:45:30+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#24",
     "title": "Football Daily",
     "published": "2026-10-21T23:25:00+00:00",
     "summary": "Reaction as Manchester United lose 4-1 at Como in the Champions League"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-23T00:42:59+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-22T23:16:03+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "New York Red Bulls vs Inter Miami Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-10-22T21:30:00+00:00",
     "summary": "New York Red Bulls vs Inter Miami Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi gets emotional in Spain ahead of prestigious award and reveals heartfelt memories of his fathe... - Pasión Fútbol",
     "published": "2026-10-22T20:13:00+00:00",
     "summary": "Lionel Messi gets emotional in Spain ahead of prestigious award and reveals heartfelt memories of his fathe... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Playoff Watch! October 24 Edition - Union Soccer Blog",
     "published": "2026-10-22T19:55:10+00:00",
     "summary": "Playoff Watch! October 24 Edition Union Soccer Blog"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami wants to keep David Ayala and Matías Galarza as Kily González plans for the 2027 MLS season - Pasión Fútbol",
     "published": "2026-10-22T19:45:00+00:00",
     "summary": "Inter Miami wants to keep David Ayala and Matías Galarza as Kily González plans for the 2027 MLS season Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "New York Red Bulls vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 - Khel Now",
     "published": "2026-10-22T19:17:00+00:00",
     "summary": "New York Red Bulls vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 Khel Now"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Cristiano Ronaldo beats Lionel Messi in another major battle as Saudi Pro League star’s salary and net wort... - World Soccer Talk",
     "published": "2026-10-22T19:11:57+00:00",
     "summary": "Cristiano Ronaldo beats Lionel Messi in another major battle as Saudi Pro League star’s salary and net wort... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Matchday 32: Griezmann Mania, Messi's MVP chase & El Tráfico - Yahoo Sports",
     "published": "2026-10-22T19:02:00+00:00",
     "summary": "Matchday 32: Griezmann Mania, Messi's MVP chase & El Tráfico Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS Odds, Matchday 32: Inter Miami, Nashville And LAFC Best Bets - RG.org",
     "published": "2026-10-22T18:52:46+00:00",
     "summary": "MLS Odds, Matchday 32: Inter Miami, Nashville And LAFC Best Bets RG.org"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-22T18:48:28+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Neymar to Inter Miami rumors heat up again as Lionel Messi reunion gains momentum ahead of 2027 - Pasión Fútbol",
     "published": "2026-10-22T18:45:00+00:00",
     "summary": "Neymar to Inter Miami rumors heat up again as Lionel Messi reunion gains momentum ahead of 2027 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Neymar to Inter Miami? Anderson Backs Reunion With Lionel Messi and Luis Suárez - beIN SPORTS",
     "published": "2026-10-22T18:34:11+00:00",
     "summary": "Neymar to Inter Miami? Anderson Backs Reunion With Lionel Messi and Luis Suárez beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi backed to reach 1,000 goals by Miami boss Gonzalez - beIN SPORTS",
     "published": "2026-10-22T18:18:23+00:00",
     "summary": "Messi backed to reach 1,000 goals by Miami boss Gonzalez beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi receives massive welcome in Oviedo ahead of Princess of Asturias Award - Goal.com",
     "published": "2026-10-22T18:05:22+00:00",
     "summary": "Lionel Messi receives massive welcome in Oviedo ahead of Princess of Asturias Award Goal.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi: Barcelona means a lot to me and my love for th… - YSscores",
     "published": "2026-10-22T17:34:47+00:00",
     "summary": "Messi: Barcelona means a lot to me and my love for th… YSscores"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Called Up: Inter Miami CF Academy U-16 Forward Raphael Morgan to Represent Puerto Rico at FIFA U-15 World Cup & Festival 2026 - Inter Miami CF",
     "published": "2026-10-22T17:25:01+00:00",
     "summary": "Called Up: Inter Miami CF Academy U-16 Forward Raphael Morgan to Represent Puerto Rico at FIFA U-15 World Cup & Festival 2026 Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi sends emotional message to Barcelona fans during return to Spain - World Soccer Talk",
     "published": "2026-10-22T17:08:19+00:00",
     "summary": "Lionel Messi sends emotional message to Barcelona fans during return to Spain World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Atlanta United vs Inter Miami: Staff, community player ratings after 3-1 loss - Scarves and Spikes",
     "published": "2026-10-22T16:59:30+00:00",
     "summary": "Atlanta United vs Inter Miami: Staff, community player ratings after 3-1 loss Scarves and Spikes"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi & Inter Miami square off with Red Bull New York - MLSsoccer.com",
     "published": "2026-10-22T16:53:58+00:00",
     "summary": "Lionel Messi & Inter Miami square off with Red Bull New York MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Tadeo Allende's Inter Miami return timeline revealed as Lionel Messi's team prepares for MLS playoffs - Pasión Fútbol",
     "published": "2026-10-22T16:35:00+00:00",
     "summary": "Tadeo Allende's Inter Miami return timeline revealed as Lionel Messi's team prepares for MLS playoffs Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Another summit conquered! Lionel Messi wins a highly prestigious award - Dailysports",
     "published": "2026-10-22T16:06:43+00:00",
     "summary": "Another summit conquered! Lionel Messi wins a highly prestigious award Dailysports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "A historic run brings Messi closer to a new record - Tembah Football",
     "published": "2026-10-22T15:40:29+00:00",
     "summary": "A historic run brings Messi closer to a new record Tembah Football"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami and Vancouver Whitecaps tied on points in fierce battle for second place in MLS overall standin... - Pasión Fútbol",
     "published": "2026-10-22T15:35:00+00:00",
     "summary": "Inter Miami and Vancouver Whitecaps tied on points in fierce battle for second place in MLS overall standin... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Manchester City vs. Aston Villa, Inter Milan, Lionel Messi's Inter Miami among expert's best bets for Saturday's soccer matches - SportsLine",
     "published": "2026-10-22T14:45:16+00:00",
     "summary": "Manchester City vs. Aston Villa, Inter Milan, Lionel Messi's Inter Miami among expert's best bets for Saturday's soccer matches SportsLine"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Nets' Ben Saraf: No minutes against Charlotte - CBS Sports",
     "published": "2026-10-22T16:27:45+00:00",
     "summary": "Nets' Ben Saraf: No minutes against Charlotte CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap - Rip City Project",
     "published": "2026-10-22T16:04:04+00:00",
     "summary": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers' Deni Avdija: Double-double in season opener - CBS Sports",
     "published": "2026-10-22T14:46:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Double-double in season opener CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-22T12:15:38+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija logs double-double Wednesday - FantasyPros",
     "published": "2026-10-22T06:56:45+00:00",
     "summary": "Deni Avdija logs double-double Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija active in Wendesday’s season opener - NBC Sports",
     "published": "2026-10-22T06:49:32+00:00",
     "summary": "Deni Avdija active in Wendesday’s season opener NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms - شبكة تواصل الإخبارية",
     "published": "2026-10-22T02:45:52+00:00",
     "summary": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija News: Good to go Wednesday - RotoWire",
     "published": "2026-10-22T01:06:25+00:00",
     "summary": "Deni Avdija News: Good to go Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-22T01:04:46+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? - AOL.com",
     "published": "2026-10-21T22:00:00+00:00",
     "summary": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? AOL.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets - OregonLive.com",
     "published": "2026-10-21T21:09:00+00:00",
     "summary": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija NBA stats: averages by season - BasketNews.com",
     "published": "2026-10-21T20:00:40+00:00",
     "summary": "Deni Avdija NBA stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener - Yahoo Sports",
     "published": "2026-10-21T16:30:00+00:00",
     "summary": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Ben Saraf EuroCup stats: averages by season - BasketNews.com",
     "published": "2026-10-21T15:52:16+00:00",
     "summary": "Ben Saraf EuroCup stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season - Yahoo Sports",
     "published": "2026-10-21T15:29:05+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yardbarker",
     "published": "2026-10-21T05:00:39+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 - DraftKings Network",
     "published": "2026-10-21T03:59:27+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers - Rip City Project",
     "published": "2026-10-21T03:10:00+00:00",
     "summary": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Trail Blazers' Deni Avdija: Good to go Wednesday - CBS Sports",
     "published": "2026-10-21T01:59:19+00:00",
     "summary": "Trail Blazers' Deni Avdija: Good to go Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yahoo Sports",
     "published": "2026-10-21T01:33:00+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija (ankle) questionable to play Wednesday - FantasyPros",
     "published": "2026-10-21T00:59:00+00:00",
     "summary": "Deni Avdija (ankle) questionable to play Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener - Heavy.com",
     "published": "2026-10-21T00:57:00+00:00",
     "summary": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Avdija Questionable to Play in Regular-Season Opener - Blazer's Edge",
     "published": "2026-10-20T23:54:46+00:00",
     "summary": "Avdija Questionable to Play in Regular-Season Opener Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija (ankle) questionable vs. Phoenix - NBC Sports",
     "published": "2026-10-20T23:37:00+00:00",
     "summary": "Deni Avdija (ankle) questionable vs. Phoenix NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Trail Blazers' Deni Avdija: Questionable for Wednesday - CBS Sports",
     "published": "2026-10-20T23:34:44+00:00",
     "summary": "Trail Blazers' Deni Avdija: Questionable for Wednesday CBS Sports"
    }
   ]
  }
 ]
}
</input>