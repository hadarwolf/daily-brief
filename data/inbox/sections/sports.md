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
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-23T18:45:00Z",
     "home": "Brest",
     "away": "Nice",
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
     "competition": "Premier League",
     "kickoff_utc": "2026-10-23T19:00:00Z",
     "home": "Ipswich Town",
     "away": "Nottingham",
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
    "score": "96-84",
    "status": "Final"
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
     "title": "Forest's start raises questions - but belief in Glasner remains",
     "published": "2026-10-23T08:14:50+00:00",
     "summary": "Nottingham Forest go to Ipswich in the bottom three of the Premier League, but boss Oliver Glasner believes they have deserved more this season."
    },
    {
     "ref": "bbc_football#1",
     "title": "New Victor Moses? How Alonso has transformed Neto",
     "published": "2026-10-23T07:57:27+00:00",
     "summary": "Those following Chelsea closely may feel history is repeating itself as Pedro Neto excels at wing-back, much like Victor Moses did a decade ago."
    },
    {
     "ref": "bbc_football#2",
     "title": "EFL preview: 'Sleepless nights' for under pressure bosses",
     "published": "2026-10-23T07:15:27+00:00",
     "summary": "Norwich City head coach Philippe Clement, Sheffield Wednesday manager Henrik Pedersen and Bristol Rovers boss Steve Evans face scrutiny."
    },
    {
     "ref": "bbc_football#3",
     "title": "Podcast: Euro review & Scottish Premiership preview",
     "published": "2026-10-23T07:00:00+00:00",
     "summary": "Andy Burke, Scott Allan and Ewan Murray look ahead to the weekend's SPFL fixtures"
    },
    {
     "ref": "bbc_football#4",
     "title": "Haaland captaincy headache - stick or twist? FPL gameweek eight dilemmas",
     "published": "2026-10-23T06:56:15+00:00",
     "summary": "BBC Sport FPL expert Holly Shand looks at some of the biggest dilemmas facing FPL managers heading into gameweek eight."
    },
    {
     "ref": "bbc_football#5",
     "title": "Infantino re-election hopes boosted by Asia support",
     "published": "2026-10-23T06:48:46+00:00",
     "summary": "Gianni Infantino's hopes of being re-elected Fifa president are enhanced by an endorsement from the Asian Football Confederation."
    },
    {
     "ref": "bbc_football#6",
     "title": "Injury issues mount at Hearts amid Milne & Borchgrevink blows - gossip",
     "published": "2026-10-23T06:44:39+00:00",
     "summary": "Injury blows mount for Hearts defender as Rangers defender challenges team-mates."
    },
    {
     "ref": "bbc_football#7",
     "title": "What is going on at 'chaotic' Newcastle?",
     "published": "2026-10-23T06:37:20+00:00",
     "summary": "Will the alarm bells be ringing at Newcastle United if they lose to struggling Crystal Palace on Sunday?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Flat-track bullies Celtic continue descent into European irrelevance",
     "published": "2026-10-23T06:26:23+00:00",
     "summary": "BBC Scotland's Tom English reviews another frustrating night in Europe for the Scottish champions."
    },
    {
     "ref": "bbc_football#9",
     "title": "Flat-track bullies Celtic continue descent into European irrelevance",
     "published": "2026-10-23T06:26:23+00:00",
     "summary": "BBC Scotland's Tom English reviews another frustrating night in Europe for the Scottish champions."
    },
    {
     "ref": "bbc_football#10",
     "title": "Pride, prestige, profile - the great Ballon d'Or campaign",
     "published": "2026-10-23T06:06:38+00:00",
     "summary": "The Ballon d'Or is football's greatest individual accolade - and the thirst to win it has grown in recent years."
    },
    {
     "ref": "bbc_football#11",
     "title": "Have Man Utd become the unmanageable club?",
     "published": "2026-10-23T05:56:04+00:00",
     "summary": "The cycle of doom that has engulfed every Manchester United manager since Sir Alex Ferguson now has Michael Carrick in its unforgiving grip, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#12",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-23T05:32:12+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "O'Neill bemoans marginal moments but are Celtic just not good enough?",
     "published": "2026-10-22T22:52:52+00:00",
     "summary": "Martin O'Neill spoke of refereeing decisions and near misses after the Europa League defeat against Celta Vigo. But is the reality more concerning?"
    },
    {
     "ref": "bbc_football#14",
     "title": "O'Neill bemoans marginal moments but are Celtic just not good enough?",
     "published": "2026-10-22T22:52:52+00:00",
     "summary": "Martin O'Neill spoke of refereeing decisions and near misses after the Europa League defeat against Celta Vigo. But is the reality more concerning?"
    },
    {
     "ref": "bbc_football#15",
     "title": "Man Utd chief keen on Howe - Friday's gossip",
     "published": "2026-10-22T21:53:52+00:00",
     "summary": "Manchester United linked with Antonio Conte, Unai Emery, Eddie Howe and Julian Nagelsmann among others if they part ways with manager Michael Carrick."
    },
    {
     "ref": "bbc_football#16",
     "title": "Dream night for Bournemouth - win over Milan a sign of Premier League power",
     "published": "2026-10-22T21:30:31+00:00",
     "summary": "Bournemouth's 3-0 win against AC Milan further illustrated the dominance of Premier League sides against their European counterparts."
    },
    {
     "ref": "bbc_football#17",
     "title": "Fernandes' home burgled while in Italy with Man Utd",
     "published": "2026-10-22T18:04:21+00:00",
     "summary": "Manchester United captain Bruno Fernandes had his home burgled on Wednesday while he was in Italy for his club's Champions League game against Como."
    },
    {
     "ref": "bbc_football#18",
     "title": "US to host first Women's Club World Cup in 2028",
     "published": "2026-10-22T17:49:08+00:00",
     "summary": "Arsenal are named as one of the teams to compete at the inaugural Women's Club World Cup, to be hosted in the United States in 2028."
    },
    {
     "ref": "bbc_football#19",
     "title": "US to host first Women's Club World Cup in 2028",
     "published": "2026-10-22T17:49:08+00:00",
     "summary": "Arsenal are named as one of the teams to compete at the inaugural Women's Club World Cup, to be hosted in the United States in 2028."
    },
    {
     "ref": "bbc_football#20",
     "title": "BBC to show Cray Wanderers v Stockport & Altrincham v Notts County",
     "published": "2026-10-22T16:31:24+00:00",
     "summary": "Non-league clubs Altrincham and Cray Wanderers will stage the BBC's two chosen FA Cup first-round ties next month."
    },
    {
     "ref": "bbc_football#21",
     "title": "Sutton's predictions v Waffle the Wonder Dog and his owner, Simon",
     "published": "2026-10-22T16:30:41+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on Waffle the Wonder Dog and his owner Simon, plus the BBC readers and AI with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#22",
     "title": "Fernandes to stay captain as Rooney calls Man Utd players babies",
     "published": "2026-10-22T16:19:30+00:00",
     "summary": "Bruno Fernandes will remain as Manchester United captain and will not be disciplined for his post-match criticism of Michael Carrick after the 4-1 Champions League defeat by Como."
    },
    {
     "ref": "bbc_football#23",
     "title": "What are Real's attacking options during Vinicius Jr ban?",
     "published": "2026-10-22T15:33:29+00:00",
     "summary": "Real Madrid’s attacking options are expanding under Jose Mourinho, with Endrick, Yan Diomande and Carlos Espi offering fresh solutions in the final third."
    },
    {
     "ref": "bbc_football#24",
     "title": "Football Daily",
     "published": "2026-10-22T15:16:00+00:00",
     "summary": "Andy Mitten & Jay Motty join Rick & Lloyd to dissect Man United's disastrous night."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi Reflects on How He Wants to Be Remembered After Retirement - Telecom Asia Sport",
     "published": "2026-10-23T08:00:01+00:00",
     "summary": "Messi Reflects on How He Wants to Be Remembered After Retirement Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Doubts surround Messi ahead of the Ballon d'Or ceremony - Goal.com",
     "published": "2026-10-23T07:07:37+00:00",
     "summary": "Doubts surround Messi ahead of the Ballon d'Or ceremony Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Prediction New York RB vs Inter Miami: analysis, odds and betting tips - BetMines",
     "published": "2026-10-23T06:50:31+00:00",
     "summary": "Prediction New York RB vs Inter Miami: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "New York Red Bulls vs Inter Miami Prediction, Betting Tips, Lineups & Odds | 24 Oct 2026 - Sportsgambler",
     "published": "2026-10-23T06:07:28+00:00",
     "summary": "New York Red Bulls vs Inter Miami Prediction, Betting Tips, Lineups & Odds | 24 Oct 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami brings win streak into match against the New York Red Bulls - FOX Sports",
     "published": "2026-10-23T06:04:00+00:00",
     "summary": "Inter Miami brings win streak into match against the New York Red Bulls FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-23T05:12:59+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-23T05:03:00+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-23T04:57:29+00:00",
     "summary": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-23T04:31:05+00:00",
     "summary": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-23T04:25:36+00:00",
     "summary": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-23T03:46:04+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-23T02:55:39+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "New York Red Bulls vs Inter Miami Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-10-22T21:30:00+00:00",
     "summary": "New York Red Bulls vs Inter Miami Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi gets emotional in Spain ahead of prestigious award and reveals heartfelt memories of his fathe... - Pasión Fútbol",
     "published": "2026-10-22T20:13:00+00:00",
     "summary": "Lionel Messi gets emotional in Spain ahead of prestigious award and reveals heartfelt memories of his fathe... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Playoff Watch! October 24 Edition - Union Soccer Blog",
     "published": "2026-10-22T19:55:10+00:00",
     "summary": "Playoff Watch! October 24 Edition Union Soccer Blog"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami wants to keep David Ayala and Matías Galarza as Kily González plans for the 2027 MLS season - Pasión Fútbol",
     "published": "2026-10-22T19:45:00+00:00",
     "summary": "Inter Miami wants to keep David Ayala and Matías Galarza as Kily González plans for the 2027 MLS season Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "New York Red Bulls vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 - Khel Now",
     "published": "2026-10-22T19:17:00+00:00",
     "summary": "New York Red Bulls vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 Khel Now"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Cristiano Ronaldo beats Lionel Messi in another major battle as Saudi Pro League star’s salary and net wort... - World Soccer Talk",
     "published": "2026-10-22T19:11:57+00:00",
     "summary": "Cristiano Ronaldo beats Lionel Messi in another major battle as Saudi Pro League star’s salary and net wort... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Matchday 32: Griezmann Mania, Messi's MVP chase & El Tráfico - Yahoo Sports",
     "published": "2026-10-22T19:02:00+00:00",
     "summary": "Matchday 32: Griezmann Mania, Messi's MVP chase & El Tráfico Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "MLS Odds, Matchday 32: Inter Miami, Nashville And LAFC Best Bets - RG.org",
     "published": "2026-10-22T18:52:46+00:00",
     "summary": "MLS Odds, Matchday 32: Inter Miami, Nashville And LAFC Best Bets RG.org"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Neymar to Inter Miami rumors heat up again as Lionel Messi reunion gains momentum ahead of 2027 - Pasión Fútbol",
     "published": "2026-10-22T18:45:00+00:00",
     "summary": "Neymar to Inter Miami rumors heat up again as Lionel Messi reunion gains momentum ahead of 2027 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi backed to reach 1,000 goals by Miami boss Gonzalez - Soccer News",
     "published": "2026-10-22T18:38:02+00:00",
     "summary": "Messi backed to reach 1,000 goals by Miami boss Gonzalez Soccer News"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Neymar to Inter Miami? Anderson Backs Reunion With Lionel Messi and Luis Suárez - beIN SPORTS",
     "published": "2026-10-22T18:34:11+00:00",
     "summary": "Neymar to Inter Miami? Anderson Backs Reunion With Lionel Messi and Luis Suárez beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi backed to reach 1,000 goals by Miami boss Gonzalez - beIN SPORTS",
     "published": "2026-10-22T18:18:23+00:00",
     "summary": "Messi backed to reach 1,000 goals by Miami boss Gonzalez beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi receives massive welcome in Oviedo ahead of Princess of Asturias Award - Goal.com",
     "published": "2026-10-22T18:05:22+00:00",
     "summary": "Lionel Messi receives massive welcome in Oviedo ahead of Princess of Asturias Award Goal.com"
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
     "published": "2026-10-23T02:16:34+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers open season with rout, reunion, redemption and...fun - Herald and News",
     "published": "2026-10-22T20:16:00+00:00",
     "summary": "Trail Blazers open season with rout, reunion, redemption and...fun Herald and News"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Blazers' Big 3 Crush Suns in Opener - 365Scores",
     "published": "2026-10-22T18:43:56+00:00",
     "summary": "Blazers' Big 3 Crush Suns in Opener 365Scores"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Nets' Ben Saraf: No minutes against Charlotte - CBS Sports",
     "published": "2026-10-22T16:27:45+00:00",
     "summary": "Nets' Ben Saraf: No minutes against Charlotte CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap - Rip City Project",
     "published": "2026-10-22T16:04:04+00:00",
     "summary": "Bulls quickly learn why Josh Giddey isn't built to recreate Deni Avdija's leap Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers' Deni Avdija: Double-double in season opener - CBS Sports",
     "published": "2026-10-22T14:46:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Double-double in season opener CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Micah Nori Postgame Interview | Trail Blazers 124, Suns 83 | Oct. 21, 2026 - NBA.com",
     "published": "2026-10-22T14:23:28+00:00",
     "summary": "Micah Nori Postgame Interview | Trail Blazers 124, Suns 83 | Oct. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Jewish stars - The Jewish Standard",
     "published": "2026-10-22T14:00:00+00:00",
     "summary": "Jewish stars The Jewish Standard"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Blazers' Ja Morant, Damian Lillard Debut Exposes Micah Nori's Backcourt Dilemma - roundtable.io",
     "published": "2026-10-22T12:21:44+00:00",
     "summary": "Blazers' Ja Morant, Damian Lillard Debut Exposes Micah Nori's Backcourt Dilemma roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-22T12:15:38+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija logs double-double Wednesday - FantasyPros",
     "published": "2026-10-22T06:56:45+00:00",
     "summary": "Deni Avdija logs double-double Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija active in Wendesday’s season opener - NBC Sports",
     "published": "2026-10-22T06:49:32+00:00",
     "summary": "Deni Avdija active in Wendesday’s season opener NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Damian Lillard Makes His Return To Portland, Leads Trail Blazers In Blowout Win Over The Suns - Rip City Radio 620 Portland",
     "published": "2026-10-22T06:16:39+00:00",
     "summary": "Damian Lillard Makes His Return To Portland, Leads Trail Blazers In Blowout Win Over The Suns Rip City Radio 620 Portland"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-10-22T04:50:45+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Lillard returns with 25 points, Morant debuts and the Blazers rout the Suns 124-83 - FOX Sports",
     "published": "2026-10-22T04:37:08+00:00",
     "summary": "Lillard returns with 25 points, Morant debuts and the Blazers rout the Suns 124-83 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms - شبكة تواصل الإخبارية",
     "published": "2026-10-22T02:45:52+00:00",
     "summary": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija News: Good to go Wednesday - RotoWire",
     "published": "2026-10-22T01:06:25+00:00",
     "summary": "Deni Avdija News: Good to go Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? - AOL.com",
     "published": "2026-10-21T22:00:00+00:00",
     "summary": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? AOL.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets - OregonLive.com",
     "published": "2026-10-21T21:09:00+00:00",
     "summary": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija NBA stats: averages by season - BasketNews.com",
     "published": "2026-10-21T20:00:40+00:00",
     "summary": "Deni Avdija NBA stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener - Yahoo Sports",
     "published": "2026-10-21T16:30:00+00:00",
     "summary": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Ben Saraf EuroCup stats: averages by season - BasketNews.com",
     "published": "2026-10-21T15:52:16+00:00",
     "summary": "Ben Saraf EuroCup stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season - Yahoo Sports",
     "published": "2026-10-21T15:29:05+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "A surprise name lands on Trail Blazers’ injury report for season opener - OregonLive.com",
     "published": "2026-10-21T13:28:00+00:00",
     "summary": "A surprise name lands on Trail Blazers’ injury report for season opener OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yardbarker",
     "published": "2026-10-21T05:00:39+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yardbarker"
    }
   ]
  }
 ]
}
</input>