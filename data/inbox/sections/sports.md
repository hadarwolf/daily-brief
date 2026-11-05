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
     "kickoff_utc": "2026-11-04T00:30:00Z",
     "home": "Internacional",
     "away": "Coritiba",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T17:45:00Z",
     "home": "PAE AEK",
     "away": "Real Madrid",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T17:45:00Z",
     "home": "Fenerbahçe",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T19:45:00Z",
     "home": "Wrexham",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T19:45:00Z",
     "home": "Cardiff",
     "away": "West Ham",
     "status": "FINISHED",
     "score": "3-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Viking",
     "away": "Sabah FK",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "PSV",
     "away": "Club Brugge",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Porto",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "RB Leipzig",
     "away": "Man City",
     "status": "FINISHED",
     "score": "2-3"
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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Dortmund",
     "away": "Real Betis",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "RC Lens",
     "away": "Como 1907",
     "status": "FINISHED",
     "score": "1-9"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-04T20:00:00Z",
     "home": "Bristol City",
     "away": "Wolverhampton",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-04T22:30:00Z",
     "home": "Paranaense",
     "away": "Vasco da Gama",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-04T22:30:00Z",
     "home": "Flamengo",
     "away": "Grêmio",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-05T00:30:00Z",
     "home": "São Paulo",
     "away": "Corinthians",
     "status": "IN_PLAY",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-05T00:30:00Z",
     "home": "Botafogo",
     "away": "Mineiro",
     "status": "IN_PLAY",
     "score": "1-0"
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-05T22:30:00Z",
     "home": "Palmeiras",
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
    "home": "Detroit Pistons",
    "away": "Philadelphia 76ers",
    "score": "106-112",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Atlanta Hawks",
    "score": "105-120",
    "status": "Final"
   },
   {
    "home": "Boston Celtics",
    "away": "Milwaukee Bucks",
    "score": "109-102",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Charlotte Hornets",
    "score": "114-104",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Chicago Bulls",
    "score": "135-105",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Indiana Pacers",
    "score": "103-107",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Utah Jazz",
    "score": "100-99",
    "status": "4th Qtr"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Cleveland Cavaliers",
    "score": "124-116",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Minnesota Timberwolves",
    "score": "90-89",
    "status": "4th Qtr"
   },
   {
    "home": "Denver Nuggets",
    "away": "Toronto Raptors",
    "score": "84-74",
    "status": "3rd Qtr"
   },
   {
    "home": "Phoenix Suns",
    "away": "Portland Trail Blazers",
    "score": "60-72",
    "status": "3rd Qtr"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Dallas Mavericks",
    "score": "48-39",
    "status": "2nd Qtr"
   },
   {
    "home": "Sacramento Kings",
    "away": "Los Angeles Lakers",
    "score": "27-25",
    "status": "1st Qtr"
   },
   {
    "home": "LA Clippers",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-05T03:30:00Z"
   }
  ],
  "games_today": [
   {
    "home": "Phoenix Suns",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-06T02:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-06T03:00:00Z"
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
     "title": "World record 51 red cards shown in Brazilian youth game",
     "published": "2026-11-04T23:22:27+00:00",
     "summary": "A world record of 43 players and eight members of staff were sent off during an under-20 championship match between Uberlandia and Mamore in Brazil."
    },
    {
     "ref": "bbc_football#1",
     "title": "Scotland U21 boss hails Donovan, Miller and Wilson attitude",
     "published": "2026-11-04T23:18:03+00:00",
     "summary": "Under-21s head coach Tony Docherty is delighted with the buy-in from the three players who have dropped down from Scotland's senior squad."
    },
    {
     "ref": "bbc_football#2",
     "title": "Scotland U21 boss hails Donovan, Miller and Wilson attitude",
     "published": "2026-11-04T23:18:03+00:00",
     "summary": "Under-21s head coach Tony Docherty is delighted with the buy-in from the three players who have dropped down from Scotland's senior squad."
    },
    {
     "ref": "bbc_football#3",
     "title": "Como score nine to make Champions League history",
     "published": "2026-11-04T22:45:45+00:00",
     "summary": "Anastasios Douvikas scores a hat-trick as Como produce a stunning 9-1 away win over Lens on match day four, recording the biggest away win in Champions League history."
    },
    {
     "ref": "bbc_football#4",
     "title": "Another 'miracle' in Istanbul - but this one hurt Liverpool",
     "published": "2026-11-04T22:38:24+00:00",
     "summary": "Liverpool conceded \"cheap\" and \"messy\" goals in their defeat by Fenerbahce, says boss Andoni Iraola, as former Reds hero Dirk Kuyt celebrates a \"miracle\" in Istanbul."
    },
    {
     "ref": "bbc_football#5",
     "title": "Dortmund take narrow win over Real Betis",
     "published": "2026-11-04T22:31:57+00:00",
     "summary": "Borussia Dortmund gain a home victory over Real Betis to end the Spanish side's winning run in the Champions League."
    },
    {
     "ref": "bbc_football#6",
     "title": "Emphatic Porto thrash Napoli in second-half romp",
     "published": "2026-11-04T22:17:34+00:00",
     "summary": "Porto score three goals in the final 20 minutes of the game to pull away and seal a comfortable victory against Napoli, who are unable to match their Portuguese opponents in the second half."
    },
    {
     "ref": "bbc_football#7",
     "title": "Haaland scores winner as Man City beat Leipzig",
     "published": "2026-11-04T22:15:31+00:00",
     "summary": "Erling Haaland scores the winning goal as Manchester City overcome being pegged back twice to beat RB Leipzig 3-2 on match day four of the UEFA Champions League group phase."
    },
    {
     "ref": "bbc_football#8",
     "title": "Arsenal survive late Slavia scare for hard-fought win",
     "published": "2026-11-04T22:10:07+00:00",
     "summary": "Arsenal earn their third win from four in the Champions League as goals from Noni Madueke and Victor Gyokeres are too much for Slavia Prague, despite a valiant late fight from the hosts to get back into the game."
    },
    {
     "ref": "bbc_football#9",
     "title": "Liverpool crumble at Kuyt's Fenerbahce",
     "published": "2026-11-04T22:04:16+00:00",
     "summary": "Liverpool are defeated by Turkish side Fenerbahce, who twice fought back from behind to seal a famous victory, ending the Reds' perfect start to this year's Champions League after four games."
    },
    {
     "ref": "bbc_football#10",
     "title": "Valverde stunner earns Real Madrid late win at AEK Athens",
     "published": "2026-11-04T22:04:13+00:00",
     "summary": "Real Madrid continue their 100% start to their Champions League campaign with another late win, this time through captain Federico Valverde to inflict Athens' third loss in a row."
    },
    {
     "ref": "bbc_football#11",
     "title": "Manchester United beat Roma in epic second-half comeback",
     "published": "2026-11-04T22:04:05+00:00",
     "summary": "Manchester United drag themselves up off the canvas to come from two goals down to record a sensational Champions League victory against Roma at Old Trafford."
    },
    {
     "ref": "bbc_football#12",
     "title": "Raphinha scores twice as Barcelona beat Aston Villa",
     "published": "2026-11-04T22:04:02+00:00",
     "summary": "Barcelona end Aston Villa's perfect Champions League start with an enthralling win at the Spotify Nou Camp."
    },
    {
     "ref": "bbc_football#13",
     "title": "Bayern continue unbeaten CL start with win at Atletico",
     "published": "2026-11-04T22:03:54+00:00",
     "summary": "Bayern Munich continued their unbeaten start to the Champions League season with an assured 2-0 victory at Atletico Madrid."
    },
    {
     "ref": "bbc_football#14",
     "title": "Spence stars as Inter Milan cruise to win at Feyenoord",
     "published": "2026-11-04T22:03:51+00:00",
     "summary": "England full-back Djed Spence staring as Inter Milan bounc back from their derby defeat with a comfortable Champions League victory over Feyenoord."
    },
    {
     "ref": "bbc_football#15",
     "title": "Emery in line for new Villa deal - Thursday's gossip",
     "published": "2026-11-04T21:41:04+00:00",
     "summary": "Manager Unai Emery is in line for a new contract with Aston Villa, Trey Nyoni to stay with Liverpool and Leeds target Harvey Elliott, plus more."
    },
    {
     "ref": "bbc_football#16",
     "title": "Hearts lose Miller for two months as injuries mount",
     "published": "2026-11-04T19:00:49+00:00",
     "summary": "Heart of Midlothian will be without Calvin Miller for two months after the winger suffered a knee injury that requires surgery in Sunday's Premier Sports Cup semi-final defeat by Hibernian."
    },
    {
     "ref": "bbc_football#17",
     "title": "Hearts lose Miller for two months as injuries mount",
     "published": "2026-11-04T19:00:49+00:00",
     "summary": "Heart of Midlothian will be without Calvin Miller for two months after the winger suffered a knee injury that requires surgery in Sunday's Premier Sports Cup semi-final defeat by Hibernian."
    },
    {
     "ref": "bbc_football#18",
     "title": "An island in mourning: Tenerife processes death of De Miguel",
     "published": "2026-11-04T18:51:21+00:00",
     "summary": "Tenerife football club and the wider football community mourn the loss of footballer Jesus de Miguel following an on-field collision."
    },
    {
     "ref": "bbc_football#19",
     "title": "How landmark Everton compensation prevented Burnley record loss",
     "published": "2026-11-04T17:48:19+00:00",
     "summary": "Burnley have published promising financial results, but under the hood is a payment from Everton which makes the picture look far less positive."
    },
    {
     "ref": "bbc_football#20",
     "title": "Ex-Burnley striker Rodriguez announces retirement",
     "published": "2026-11-04T17:28:52+00:00",
     "summary": "Former Burnley striker Jay Rodriguez announces his retirement from playing career."
    },
    {
     "ref": "bbc_football#21",
     "title": "Hearts record £2.4m loss in Bloom's first year",
     "published": "2026-11-04T17:00:49+00:00",
     "summary": "Heart of Midlothian record a loss of £2.4m for the year ending 30 June, despite a turnover of more than £23m the first 12 months of Brighton owner Tony Bloom's involvement."
    },
    {
     "ref": "bbc_football#22",
     "title": "'Most difficult days of my life' for Owono after De Miguel death",
     "published": "2026-11-04T16:40:38+00:00",
     "summary": "FC Andorra goalkeeper Jesus Owono puts out a statement through his club, expressing his sorrow and pain after Tenerife forward Jesus de Miguel's death."
    },
    {
     "ref": "bbc_football#23",
     "title": "Rangers' McInnes eager for Penrice deal",
     "published": "2026-11-04T16:38:41+00:00",
     "summary": "Rangers boss Derek McInnes stresses his desire to sign James Penrice on a permanent deal, with the full-back's impact leading to a first Scotland call."
    },
    {
     "ref": "bbc_football#24",
     "title": "Upward path for Penrice has McInnes eager for Rangers deal",
     "published": "2026-11-04T16:38:41+00:00",
     "summary": "Rangers boss Derek McInnes stresses his desire to sign James Penrice on a permanent deal, with the full-back's impact leading to a first Scotland call."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Son Heung-min Ranks Second in MLS Uniform Sales for Second Straight Year - 조선일보",
     "published": "2026-11-05T02:33:06+00:00",
     "summary": "Son Heung-min Ranks Second in MLS Uniform Sales for Second Straight Year 조선일보"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "“Truly the God of Football”: Overwhelming Class — Even Son Heung-min Could Not Surpass Him in the End... Messi Tops MLS Uniform Sales for Fourth Consecutive Year - 스타뉴스",
     "published": "2026-11-05T02:13:11+00:00",
     "summary": "“Truly the God of Football”: Overwhelming Class — Even Son Heung-min Could Not Surpass Him in the End... Messi Tops MLS Uniform Sales for Fourth Consecutive Year 스타뉴스"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi has goal, assist to rally Inter Miami to 2-1 victory over Revolution - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-11-04T23:32:31+00:00",
     "summary": "Lionel Messi has goal, assist to rally Inter Miami to 2-1 victory over Revolution ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Son Heung-min Ranks 2nd in MLS Jersey Sales for Second Consecutive Year Behind Messi - news.sbs.co.kr",
     "published": "2026-11-04T22:06:23+00:00",
     "summary": "Son Heung-min Ranks 2nd in MLS Jersey Sales for Second Consecutive Year Behind Messi news.sbs.co.kr"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "International Duty Roundup: Inter Miami CF Academy Players Represent National Teams in October - Inter Miami CF",
     "published": "2026-11-04T20:41:43+00:00",
     "summary": "International Duty Roundup: Inter Miami CF Academy Players Represent National Teams in October Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Who will Lionel Messi play against in the MLS Playoffs? Decision Day scenarios for Inter Miami - Diario AS",
     "published": "2026-11-04T20:36:32+00:00",
     "summary": "Who will Lionel Messi play against in the MLS Playoffs? Decision Day scenarios for Inter Miami Diario AS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "10 Players With the Highest Selling MLS Jerseys in 2026: Messi Monopoly Under Threat - Sports Illustrated",
     "published": "2026-11-04T20:00:01+00:00",
     "summary": "10 Players With the Highest Selling MLS Jerseys in 2026: Messi Monopoly Under Threat Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "The 6 Lionel Messi Ballon d'Or jurors who officially placed first place votes for him - MARCA",
     "published": "2026-11-04T19:13:54+00:00",
     "summary": "The 6 Lionel Messi Ballon d'Or jurors who officially placed first place votes for him MARCA"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Messi Tops 2026 MLS Jersey Rankings For Fourth Straight Year - Yahoo Sports",
     "published": "2026-11-04T18:35:12+00:00",
     "summary": "Messi Tops 2026 MLS Jersey Rankings For Fourth Straight Year Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lil Durk Could Face New Charges As Feds Reveal Prison Investigation In Bail Opposition Filing - HotNewHipHop",
     "published": "2026-11-04T18:18:24+00:00",
     "summary": "Lil Durk Could Face New Charges As Feds Reveal Prison Investigation In Bail Opposition Filing HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel 0 Gauge - Lionel Messi expected to resist joining MLS club Inter Miami and stay in European football until - auroradesio.it",
     "published": "2026-11-04T16:43:38+00:00",
     "summary": "Lionel 0 Gauge - Lionel Messi expected to resist joining MLS club Inter Miami and stay in European football until auroradesio.it"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami CF - Charlotte FC prediction & tips 07.11.2026 - Transfermarkt",
     "published": "2026-11-04T16:22:30+00:00",
     "summary": "Inter Miami CF - Charlotte FC prediction & tips 07.11.2026 Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi extends his MLS jersey reign for a fourth straight year, leaving three World Cup champions behind - World Soccer Talk",
     "published": "2026-11-04T15:50:00+00:00",
     "summary": "Lionel Messi extends his MLS jersey reign for a fourth straight year, leaving three World Cup champions behind World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Nashville SC chase MLS points record on Decision Day - MLSsoccer.com",
     "published": "2026-11-04T15:42:41+00:00",
     "summary": "Nashville SC chase MLS points record on Decision Day MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi closes in on second straight MLS Golden Boot - Score Nigeria",
     "published": "2026-11-04T14:33:10+00:00",
     "summary": "Messi closes in on second straight MLS Golden Boot Score Nigeria"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi fully focused on Inter Miami as Argentine superstar targets another MLS Cup title - Pasión Fútbol",
     "published": "2026-11-04T13:55:00+00:00",
     "summary": "Lionel Messi fully focused on Inter Miami as Argentine superstar targets another MLS Cup title Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Why did Messi stop running at 24? the report that studies the evolution of the Argentine footballer - MARCA",
     "published": "2026-11-04T13:23:59+00:00",
     "summary": "Why did Messi stop running at 24? the report that studies the evolution of the Argentine footballer MARCA"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi once again showed who’s in charge: a new MLS record for the fourth consecutive season - MARCA",
     "published": "2026-11-04T13:23:36+00:00",
     "summary": "Messi once again showed who’s in charge: a new MLS record for the fourth consecutive season MARCA"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami CF Names American Airlines Official Airline Partner - https://safariindia.com/",
     "published": "2026-11-04T10:10:36+00:00",
     "summary": "Inter Miami CF Names American Airlines Official Airline Partner https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami CF v Charlotte FC Odds - FanDuel Sportsbook",
     "published": "2026-11-04T09:29:07+00:00",
     "summary": "Inter Miami CF v Charlotte FC Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "'I don't see why not' - Paul Scholes backs David Beckham consortium to buy Manchester United and oust the Glazers and Sir Jim Ratcliffe - Goal.com",
     "published": "2026-11-04T07:50:05+00:00",
     "summary": "'I don't see why not' - Paul Scholes backs David Beckham consortium to buy Manchester United and oust the Glazers and Sir Jim Ratcliffe Goal.com"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Royal Caribbean Brings a Legendary Night to Fans this Saturday for Final 2026 Regular Season Match - Inter Miami CF",
     "published": "2026-11-04T05:01:49+00:00",
     "summary": "Royal Caribbean Brings a Legendary Night to Fans this Saturday for Final 2026 Regular Season Match Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Miami vs. CF Montréal (May 1, 2027) Live Score - ESPN",
     "published": "2026-11-04T04:29:22+00:00",
     "summary": "Miami vs. CF Montréal (May 1, 2027) Live Score ESPN"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi Remains the MLS's Biggest Commercial Star! - beIN SPORTS",
     "published": "2026-11-04T00:32:00+00:00",
     "summary": "Lionel Messi Remains the MLS's Biggest Commercial Star! beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Dayne St. Clair Remains Focused on Inter Miami as He Waits for European Offers - Pasión Fútbol",
     "published": "2026-11-03T23:00:00+00:00",
     "summary": "Dayne St. Clair Remains Focused on Inter Miami as He Waits for European Offers Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant - Fadeaway World",
     "published": "2026-11-04T18:20:39+00:00",
     "summary": "Deni Avdija Admits He Had Concerns When Trail Blazers Traded For Ja Morant Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions - roundtable.io",
     "published": "2026-11-04T13:01:53+00:00",
     "summary": "Micah Nori Had A Message For Deni Avdija Amid Trail Blazers' Star Additions roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level - Ynetnews",
     "published": "2026-11-04T09:12:43+00:00",
     "summary": "Deni Avdija is no longer alone: how Portland's stars unlocked his next NBA level Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers storm back to beat Nuggets, remain perfect on the road - Field Level Media",
     "published": "2026-11-04T08:53:14+00:00",
     "summary": "Blazers storm back to beat Nuggets, remain perfect on the road Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' - HoopsHype",
     "published": "2026-11-03T23:27:00+00:00",
     "summary": "Deni Avdija called Micah Nori after Ja Morant trade: 'How is this going to work?' HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders - Rip City Project",
     "published": "2026-11-03T21:13:17+00:00",
     "summary": "Deni Avdija is building on his All-Star breakout by making the Blazers contenders Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers Coach Micah Nori Integrating Deni Avdija with Style - Blazer's Edge",
     "published": "2026-11-03T19:10:16+00:00",
     "summary": "Blazers Coach Micah Nori Integrating Deni Avdija with Style Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start - The Athletic - The New York Times",
     "published": "2026-11-03T13:00:52+00:00",
     "summary": "Deni Avdija, Micah Nori and the summer phone call that defines Trail Blazers’ quick start - The Athletic The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija scores team-high 28 points in win - NBC Sports",
     "published": "2026-11-03T11:04:57+00:00",
     "summary": "Deni Avdija scores team-high 28 points in win NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome - fox61.com",
     "published": "2026-11-03T07:38:00+00:00",
     "summary": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija powers Trail Blazers past Nuggets - TalkBasket.net",
     "published": "2026-11-03T07:09:07+00:00",
     "summary": "Deni Avdija powers Trail Blazers past Nuggets TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija drops 28 points Monday - FantasyPros",
     "published": "2026-11-03T07:06:06+00:00",
     "summary": "Deni Avdija drops 28 points Monday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Highlights From Deni Avdija 28-Point Game - NBA.com",
     "published": "2026-11-03T06:42:46+00:00",
     "summary": "Highlights From Deni Avdija 28-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Damian Lillard already looks like the co-star Deni Avdija was missing - Rip City Project",
     "published": "2026-11-03T05:17:11+00:00",
     "summary": "Damian Lillard already looks like the co-star Deni Avdija was missing Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Trail Blazers 118-110 Nuggets (Nov 2, 2026) Game Recap - ESPN",
     "published": "2026-11-03T05:01:18+00:00",
     "summary": "Trail Blazers 118-110 Nuggets (Nov 2, 2026) Game Recap ESPN"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets - The Journal",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets The Journal"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - The Killeen Daily Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win - CBS Sports",
     "published": "2026-11-03T04:45:41+00:00",
     "summary": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija finishes through contact, 11/02/2026 - Yahoo Sports",
     "published": "2026-11-03T04:37:25+00:00",
     "summary": "Deni Avdija finishes through contact, 11/02/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija gets the basket plus the foul - ESPN",
     "published": "2026-11-03T04:24:08+00:00",
     "summary": "Deni Avdija gets the basket plus the foul ESPN"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija gets the and-1 to fall - ESPN",
     "published": "2026-11-03T02:50:02+00:00",
     "summary": "Deni Avdija gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija gets the and-1 to fall - ESPN",
     "published": "2026-11-03T02:50:02+00:00",
     "summary": "Deni Avdija gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory - i24NEWS",
     "published": "2026-11-02T11:47:00+00:00",
     "summary": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory i24NEWS"
    }
   ]
  }
 ]
}
</input>