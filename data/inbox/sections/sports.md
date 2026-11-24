Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "UEFA Champions League",
  "home": "Arsenal",
  "away": "Dortmund",
  "kickoff_utc": "2026-11-24T20:00:00Z"
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
     "competition": "Serie A",
     "kickoff_utc": "2026-11-23T19:45:00Z",
     "home": "Monza",
     "away": "Fiorentina",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-23T20:00:00Z",
     "home": "Levante",
     "away": "Elche",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-23T20:00:00Z",
     "home": "Brentford",
     "away": "Everton",
     "status": "FINISHED",
     "score": "4-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-23T22:30:00Z",
     "home": "Internacional",
     "away": "Vitória",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-23T23:00:00Z",
     "home": "Botafogo",
     "away": "São Paulo",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-24T00:00:00Z",
     "home": "Santos",
     "away": "Grêmio",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T17:45:00Z",
     "home": "Galatasaray",
     "away": "Aston Villa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T17:45:00Z",
     "home": "Bodø/Glimt",
     "away": "LASK",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Charlton",
     "away": "Lincoln City",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Middlesbrough",
     "away": "Swansea",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Norwich",
     "away": "QPR",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Sheffield Utd",
     "away": "Southampton",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Cardiff",
     "away": "Preston NE",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Bristol City",
     "away": "Wrexham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Portsmouth",
     "away": "West Ham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Sl. Bratislava",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Real Madrid",
     "away": "PSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Como 1907",
     "away": "PAE AEK",
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
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Wolverhampton",
     "away": "Derby County",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "RB Leipzig",
     "away": "RC Lens",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Man City",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Feyenoord",
     "away": "Porto",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-24T21:00:00Z",
     "home": "Chapecoense",
     "away": "Palmeiras",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": []
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
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
    "home": "Charlotte Hornets",
    "away": "Memphis Grizzlies",
    "score": "111-117",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Portland Trail Blazers",
    "score": "111-128",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Oklahoma City Thunder",
    "score": "125-120",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Milwaukee Bucks",
    "score": "111-116",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Brooklyn Nets",
    "score": "142-116",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "Cleveland Cavaliers",
    "score": "122-108",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Phoenix Suns",
    "score": "119-123",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "LA Clippers",
    "score": "116-104",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Utah Jazz",
    "score": "109-94",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "San Antonio Spurs",
    "score": "107-123",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Orlando Magic",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-25T00:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-25T01:00:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-25T03:00:00Z"
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
     "title": "Non-league player injured falling down badger hole",
     "published": "2026-11-24T12:31:12+00:00",
     "summary": "Cav Miley missed Chelmsford City's draw with Walton and Hersham after spraining an ankle falling down a badger hole."
    },
    {
     "ref": "bbc_football#1",
     "title": "Palace docked points for using four sub windows in win",
     "published": "2026-11-24T12:14:19+00:00",
     "summary": "Crystal Palace say they are \"disappointed\" by the ruling which they \"do not agree is reasonable or proportionate\"."
    },
    {
     "ref": "bbc_football#2",
     "title": "Palace docked points for using four sub windows in win",
     "published": "2026-11-24T12:14:19+00:00",
     "summary": "Crystal Palace say they are \"disappointed\" by the ruling which they \"do not agree is reasonable or proportionate\"."
    },
    {
     "ref": "bbc_football#3",
     "title": "Glens boss Ferguson apologises after seven-game ban",
     "published": "2026-11-24T11:36:18+00:00",
     "summary": "Glentoran manager Duncan Ferguson will be suspended for seven games following his red card in the side's 3-2 defeat by Cliftonville last week."
    },
    {
     "ref": "bbc_football#4",
     "title": "Republic of Ireland boss Ward signs new contract",
     "published": "2026-11-24T10:45:30+00:00",
     "summary": "Republic of Ireland manager Carla Ward signs a contract extension until the conclusion of the side's Euro 2029 campaign."
    },
    {
     "ref": "bbc_football#5",
     "title": "Four Midlands teams in the Championship top five - can it last?",
     "published": "2026-11-24T10:27:17+00:00",
     "summary": "With more than a third of the season gone, Stoke City, Birmingham City, Wolves and West Brom are all in the Championship promotion race. Who can keep it up?"
    },
    {
     "ref": "bbc_football#6",
     "title": "Which Premier League players are set for yellow card suspensions?",
     "published": "2026-11-24T09:47:51+00:00",
     "summary": "Seventeen players are on the brink of a one-match ban in the 2026-27 Premier League season."
    },
    {
     "ref": "bbc_football#7",
     "title": "Dead hippo to be honoured on football club tifo",
     "published": "2026-11-24T09:43:38+00:00",
     "summary": "Major League Soccer side FC Cincinnati will honour Fiona, a hippo that recently died at the city's zoo, with a tifo display at their match with Nashville SC on Saturday."
    },
    {
     "ref": "bbc_football#8",
     "title": "The youngest Premier League goalscorers this season",
     "published": "2026-11-24T09:10:34+00:00",
     "summary": "After the stellar performances of Liverpool's Rio Ngumoha and Tottenham's Luca Williams-Barnett, BBC Sport looks at the youngest players to score in the Premier League this season."
    },
    {
     "ref": "bbc_football#9",
     "title": "Barnet forward Noel-Williams charged with rape",
     "published": "2026-11-24T08:50:17+00:00",
     "summary": "Isiah Noel-Williams, from St Albans, is remanded in custody charged with three rape offences."
    },
    {
     "ref": "bbc_football#10",
     "title": "Why Potts swapped West Ham for Club Brugge after 16 years",
     "published": "2026-11-24T08:36:50+00:00",
     "summary": "When Liverpool visit Club Brugge on Wendesday they are likely to come up against English midfelder Freddie Potts."
    },
    {
     "ref": "bbc_football#11",
     "title": "Can returning Beattie and Haughey make an impact?",
     "published": "2026-11-24T08:08:33+00:00",
     "summary": "BBC Sport NI looks at Michael McArdle's decision to recall striker Kerry Beattie and the uncapped Ella Haughey to his squad for a friendly double-header against Greece."
    },
    {
     "ref": "bbc_football#12",
     "title": "Podcast: Hibs & Dundee hurting as confidence grows at Rangers",
     "published": "2026-11-24T08:00:00+00:00",
     "summary": "Can Dundee respond to 8-0? Hibs chase a rare home win and Rangers turn up the heat."
    },
    {
     "ref": "bbc_football#13",
     "title": "Celtic duo Duran and Nygren attract interest - gossip",
     "published": "2026-11-24T07:53:41+00:00",
     "summary": "Premier League club keep an eye on Celtic summer signing as Serie A sides monitor the champion's Swedish midfielder..."
    },
    {
     "ref": "bbc_football#14",
     "title": "Why has De Bruyne struggled at Napoli as he returns to Man City?",
     "published": "2026-11-24T06:57:16+00:00",
     "summary": "Kevin de Bruyne's move to Napoli last summer was supposed to mark a continuation of his glittering decade at Manchester City as he approaches the twilight years of his career."
    },
    {
     "ref": "bbc_football#15",
     "title": "Two goals in 15 games - what's going on with Gyokeres?",
     "published": "2026-11-24T06:45:27+00:00",
     "summary": "Arsenal have made an impressive start to the campaign but it has been a frustrating one for striker Viktor Gyokeres."
    },
    {
     "ref": "bbc_football#16",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-24T06:42:40+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#17",
     "title": "115 days, 39 private-jet flights, one election - Infantino's globetrotting",
     "published": "2026-11-24T06:16:53+00:00",
     "summary": "Fifa president Gianni Infantino's globetrotting by private jet since his plan to sell off a stake in the World Cup has come under scrutiny."
    },
    {
     "ref": "bbc_football#18",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-23T23:26:35+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#19",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#20",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Andrews praises 'versatile' Lewis-Potter",
     "published": "2026-11-23T22:59:14+00:00",
     "summary": "Brentford manager Keith Andrews praises the performance of Keane Lewis-Potter, who scored twice in his side's 4-0 win against Everton."
    },
    {
     "ref": "bbc_football#22",
     "title": "Moyes questions Tarkowski red in Brentford loss",
     "published": "2026-11-23T22:54:51+00:00",
     "summary": "Everton manager David Moyes questions whether the force of James Tarkowski's challenge was taken into consideration, after the defender was shown a red card in his side's 4-0 loss by Brentford."
    },
    {
     "ref": "bbc_football#23",
     "title": "Tarkowski's first Premier League red ruins Moyes' night - was it deserved?",
     "published": "2026-11-23T22:43:39+00:00",
     "summary": "Everton captain James Tarkowski was sent off for the first time in his Premier League career in Monday's 4-0 loss at Brentford - but was it a harsh decision?"
    },
    {
     "ref": "bbc_football#24",
     "title": "Janelt scores stunner as Brentford beat 10-man Everton",
     "published": "2026-11-23T22:31:27+00:00",
     "summary": "Watch highlights as Brentford earn a comfortable 3-0 win against 10-man Everton in the Premier League, including a great goal by Vitaly Janelt."
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Shai Gilgeous-Alexander and the 'fun' of weathering the storm",
     "published": "2026-11-24T12:43:17+00:00",
     "summary": "The Thunder's core has been decimated by injuries, leaving SGA with a burden unlike any he has faced with OKC."
    },
    {
     "ref": "espn_nba#1",
     "title": "NBA Rookie Rankings: Which stars are rising early in season?",
     "published": "2026-11-24T12:42:06+00:00",
     "summary": "Our first edition of rookie rankings features 10 players standing out early from a strong 2026 draft class."
    },
    {
     "ref": "espn_nba#2",
     "title": "What NBA insiders see from Boozer, Dybantsa and seven other top rookies",
     "published": "2026-11-24T12:42:06+00:00",
     "summary": "How has the first month unfolded for nine first-year stars?"
    },
    {
     "ref": "espn_nba#3",
     "title": "Golliver's too-early NBA All-Star picks: The 24 most deserving players right now",
     "published": "2026-11-24T12:38:32+00:00",
     "summary": "So what if the All-Star Game is three months away? We're picking locks and position battles to watch across both conferences."
    },
    {
     "ref": "espn_nba#4",
     "title": "Spurs rule Wembanyama, Fox out 90 minutes before victory over Kings",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "Less than two hours prior to tipoff Monday, the San Antonio Spurs ruled Victor Wembanyama and De'Aaron Fox out of their 123-107 win over the Sacramento Kings, but the club anticipates both will play in Wednesday's game against the Portland Trail Blazers."
    },
    {
     "ref": "espn_nba#5",
     "title": "Grizzlies rookie Boozer out with sprained right ankle",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "Grizzlies rookie forward Cameron Boozer has a sprained right ankle that will sideline him for at least a month."
    },
    {
     "ref": "espn_nba#6",
     "title": "Vocal Green swats back at online critics, fuels Warriors' victory over Celtics",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "After reinforcing his career​ accolades earlier in the day on social media, Golden State Warriors forward Draymond Green closed out an 88-87 win over the Boston Celtics on Sunday with a last-second defensive stop and rousing celebration from the veteran."
    },
    {
     "ref": "espn_nba#7",
     "title": "Nets guard Traore (hamstring) to be reevaluated in 8-10 weeks",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "Nets guard Nolan Traore has been diagnosed with a right hamstring strain and will be reevaluated in eight to 10 weeks, the team announced Monday."
    },
    {
     "ref": "espn_nba#8",
     "title": "Kings boost backcourt depth with Vincent signing",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "Guard Gabe Vincent signed a deal with the Sacramento Kings to fill their 15th roster spot, it was announced on Monday."
    },
    {
     "ref": "espn_nba#9",
     "title": "👀 What the first month has revealed about all 30 teams",
     "published": "2026-11-24T05:47:33+00:00",
     "summary": "With the season's first month nearly in the books, Ben Golliver examines the biggest storyline so far for all 30 teams."
    },
    {
     "ref": "espn_nba#10",
     "title": "Embiid misses game with illness as 76ers fall to Trail Blazers",
     "published": "2026-11-24T05:47:32+00:00",
     "summary": "76ers center Joel Embiid missed Monday's game against the Trail Blazers because of an illness."
    },
    {
     "ref": "espn_nba#11",
     "title": "Cleveland Cavaliers become first NBA team to practice at Obama Presidential Center",
     "published": "2026-11-23T23:09:01+00:00",
     "summary": "The WNBA was the first professional sports league to use the court, playing there at All-Star Weekend in July."
    },
    {
     "ref": "espn_nba#12",
     "title": "Should you trade Davion Mitchell? Move on from De'Aaron Fox?",
     "published": "2026-11-23T21:25:54+00:00",
     "summary": "Steve Alexander looks at three players on the rise and three who are slumping and how fantasy managers should react."
    },
    {
     "ref": "espn_nba#13",
     "title": "Has Nikola Jokic been overtaken as the top player in fantasy basketball?",
     "published": "2026-11-23T21:25:54+00:00",
     "summary": "Nikola Jokic's numbers are down from his typical norm, but has he been passed by Wemby or Luka as the top player in fantasy?"
    },
    {
     "ref": "espn_nba#14",
     "title": "How a season without their 'admiral' showed the Rockets what they were missing",
     "published": "2026-11-23T12:40:00+00:00",
     "summary": "A healthy Fred VanVleet is commanding the surging Rockets after an ACL injury derailed his 2025-26 season. Here's why he's so important."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Women's World Cup returning to U.S. shows how the game has grown since 1999",
     "published": "2026-11-24T12:33:52+00:00",
     "summary": "Women's soccer was forever changed when the U.S. hosted the 1999 World Cup. With it returning in 2031, ESPN charts the game's explosive growth."
    },
    {
     "ref": "espn_soccer#1",
     "title": "U.S. to co-host Women's World Cup in 2031; U.K. wins bid for 2035",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "The United States has been confirmed as co-hosts of the 2031 Women's World Cup, before the United Kingdom hosts the tournament four years later."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Houston says Herrera available for Dynamo playoff opener amid MLS probe",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "MLS is gathering information regarding the reported arrest of Houston Dynamo FC midfielder Héctor Herrera for suspicion of driving while intoxicated ahead of the team's first game of the playoffs."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Son Heung-Min: Thomas Müller spot-on about lack of pressure in MLS",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "LAFC forward Son Heung-Min has backed Thomas Müller's comments about the \"careless\" playing style in the MLS and the lack of pressure that players feel due to the absence of a promotion/relegation system."
    },
    {
     "ref": "espn_soccer#4",
     "title": "Spirit fire González after losing NWSL Championship for 3rd straight season",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "The Washington Spirit have fired head coach Adrián González following the team's loss in Saturday's NWSL Championship."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Fiona the hippo to be honoured by FC Cincinnati with tifo after untimely death",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "FC Cincinnati will honor Cincinnati Zoo's famous hippo, Fiona, following her unexpected death last week."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Footballer injured after falling down a badger hole in training",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "A non-league footballer sustained an injured ankle after falling into a badger hole during training."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Sources: Man Utd to appeal Yoro red card against Liverpool",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "Manchester United have notified the Football Association of their intention to appeal Leny Yoro's red card in the 4-0 defeat to Liverpool, sources have told ESPN."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Philadelphia's Cavan Sullivan wins MLS Young Player of the Year award",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "Philadelphia Union midfielder Cavan Sullivan has been selected as the MLS Young Player of the Year for his breakthrough performance as a 17-year-old."
    },
    {
     "ref": "espn_soccer#9",
     "title": "🟥VAR review: Explaining Yoro's early red card vs. Liverpool",
     "published": "2026-11-24T11:52:36+00:00",
     "summary": "VAR often causes controversy, but how are decisions made? Our resident ref, Andy Davies, explains all."
    },
    {
     "ref": "espn_soccer#10",
     "title": "Which USMNT players could follow Pochettino to Manchester United?",
     "published": "2026-11-24T10:39:36+00:00",
     "summary": "Man United are a mess, but could Mauricio Pochettino turn to any of his former USMNT players to help pull the Red Devils out of the relegation zone?"
    },
    {
     "ref": "espn_soccer#11",
     "title": "UCL-champs PSG drop one of this season's best kits in latest Jordan collab",
     "published": "2026-11-24T10:11:09+00:00",
     "summary": "PSG finally unveiled their 2026-27 third kit in collaboration with the Jordan brand. It was worth the wait."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Champions League Power Rankings before MD5: Who's No. 1?",
     "published": "2026-11-24T10:10:17+00:00",
     "summary": "The UEFA Champions League is going at full speed, and we're beyond the halfway point of the league phase. Injuries are starting to pile up. Where does your club rank?"
    },
    {
     "ref": "espn_soccer#13",
     "title": "How B.J. Callaghan's long, winding coaching journey led to Nashville success",
     "published": "2026-11-24T09:40:56+00:00",
     "summary": "Callaghan was a fairly unassuming hire when he took over Nashville. Now he's a Supporters' Shield-winning coach being linked with the USMNT job."
    },
    {
     "ref": "espn_soccer#14",
     "title": "Lazio are top of Serie A despite their fans boycotting the team's owner",
     "published": "2026-11-24T09:28:57+00:00",
     "summary": "Lazio's success this season has been one of the big stories in Serie A, made more remarkable by the fact that their fans won't attend home games until the club is sold."
    },
    {
     "ref": "espn_soccer#15",
     "title": "We knew Man United were a mess before Liverpool loss. Plus: Epic Barça comeback",
     "published": "2026-11-24T08:46:53+00:00",
     "summary": "Mauricio Pochettino's debut as Man United manager didn't tell us anything we didn't already know when it came to the scale of rebuild required."
    },
    {
     "ref": "espn_soccer#16",
     "title": "Why the Premier League's set-piece goals dried up -- and why Arsenal are still No. 1 anyway",
     "published": "2026-11-24T08:46:02+00:00",
     "summary": "Arsenal won the Premier League in controversial fashion last season, but the set-piece goals they counted on have disappeared. Why?"
    },
    {
     "ref": "espn_soccer#17",
     "title": "Liga MX playoff preview: Will Cruz Azul win back-to-back titles?",
     "published": "2026-11-24T08:44:26+00:00",
     "summary": "The Liga MX playoffs are back to close out 2026! Who are some of the favorites and who can cause a surprise in the Liguilla?"
    },
    {
     "ref": "espn_soccer#18",
     "title": "Transfer rumors, news: PSG eye Estêvão and Luis Díaz amid injury woes",
     "published": "2026-11-24T08:31:56+00:00",
     "summary": "Paris Saint-Germain have added Bayern Munich's Luis Díaz and Chelsea's Estêvão to their shortlist. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#19",
     "title": "Man United will need big January transfer spending to avoid relegation",
     "published": "2026-11-24T08:31:55+00:00",
     "summary": "Manchester United have a choice: Spend £150 million on new players in January or lose £300 million if they get relegated at the end of the Premier League season."
    }
   ]
  }
 ]
}
</input>