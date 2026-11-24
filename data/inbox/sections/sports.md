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
     "home": "Bodø/Glimt",
     "away": "LASK",
     "status": "TIMED",
     "score": null
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
    "score": "113-119",
    "status": "OT1"
   },
   {
    "home": "Houston Rockets",
    "away": "LA Clippers",
    "score": "98-93",
    "status": "4th Qtr"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Utah Jazz",
    "score": "30-20",
    "status": "1st Qtr"
   },
   {
    "home": "Sacramento Kings",
    "away": "San Antonio Spurs",
    "score": "28-19",
    "status": "1st Qtr"
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
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-23T23:26:35+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Andrews praises 'versatile' Lewis-Potter",
     "published": "2026-11-23T22:59:14+00:00",
     "summary": "Brentford manager Keith Andrews praises the performance of Keane Lewis-Potter, who scored twice in his side's 4-0 win against Everton."
    },
    {
     "ref": "bbc_football#4",
     "title": "Moyes questions Tarkowski red in Brentford loss",
     "published": "2026-11-23T22:54:51+00:00",
     "summary": "Everton manager David Moyes questions whether the force of James Tarkowski's challenge was taken into consideration, after the defender was shown a red card in his side's 4-0 loss by Brentford."
    },
    {
     "ref": "bbc_football#5",
     "title": "Tarkowski's first Premier League red ruins Moyes' night - was it deserved?",
     "published": "2026-11-23T22:43:39+00:00",
     "summary": "Everton captain James Tarkowski was sent off for the first time in his Premier League career in Monday's 4-0 loss at Brentford - but was it a harsh decision?"
    },
    {
     "ref": "bbc_football#6",
     "title": "Janelt scores stunner as Brentford beat 10-man Everton",
     "published": "2026-11-23T22:31:27+00:00",
     "summary": "Watch highlights as Brentford earn a comfortable 3-0 win against 10-man Everton in the Premier League, including a great goal by Vitaly Janelt."
    },
    {
     "ref": "bbc_football#7",
     "title": "MNC: Leeds dreaming of Europe and when's the right time to start a young player?",
     "published": "2026-11-23T21:48:00+00:00",
     "summary": "Mark Chapman is joined by Conor Coady, Chris Sutton and Rory Smith."
    },
    {
     "ref": "bbc_football#8",
     "title": "Arsenal and PSG keen on Nusa - Tuesday's gossip",
     "published": "2026-11-23T21:41:52+00:00",
     "summary": "Arsenal and PSG are both looking at a move for RB Leipzig winger Antonio Nusa, Xabi Alonso has Chelsea hierarchy backing, Liverpool open contract talks with keeper Alisson Becker, plus more."
    },
    {
     "ref": "bbc_football#9",
     "title": "De Bruyne's feelings for Man City will 'never change'",
     "published": "2026-11-23T21:05:23+00:00",
     "summary": "Kevin de Bruyne says he has \"love\" for Manchester City's owners and his feelings for the club will \"never change\" despite being found guilty of breaching the Premier League's financial rules."
    },
    {
     "ref": "bbc_football#10",
     "title": "Hosting World Cup means decade of excitement - Weir",
     "published": "2026-11-23T21:03:42+00:00",
     "summary": "Scotland captain Caroline Weir says hosting the 2035 Women's World Cup along with England, Northern Ireland and Wales will usher in \"an amazing decade of excitement\" for the game in her homeland."
    },
    {
     "ref": "bbc_football#11",
     "title": "Pioneer or coach-eater? The complex world of Pozzo's Watford",
     "published": "2026-11-23T17:16:13+00:00",
     "summary": "Pioneering or problematic? Why Gino Pozzo's 14-year Watford ownership is at a crossroads as the club search for their 25th managerial appointment on his watch."
    },
    {
     "ref": "bbc_football#12",
     "title": "'No-one's coming to save us' - but how can Man Utd save themselves?",
     "published": "2026-11-23T16:30:59+00:00",
     "summary": "How does Mauricio Pochettino halt Manchester United's desperate slide towards the foot of the Premier League"
    },
    {
     "ref": "bbc_football#13",
     "title": "When is the Euro 2028 qualifying draw?",
     "published": "2026-11-23T16:25:50+00:00",
     "summary": "Our Ask Me Anything team tell you all you need to know about the Euro 2028 qualifying draw."
    },
    {
     "ref": "bbc_football#14",
     "title": "Hibs boss Reedijk rejects talk of Easter Road jinx",
     "published": "2026-11-23T16:17:17+00:00",
     "summary": "Hibernian manager Marink Reedijk rejects suggestions Easter Road is jinxed after going seven months without a home win in the Premiership."
    },
    {
     "ref": "bbc_football#15",
     "title": "Hibs boss Reedijk rejects talk of Easter Road jinx",
     "published": "2026-11-23T16:17:17+00:00",
     "summary": "Hibernian manager Marink Reedijk rejects suggestions Easter Road is jinxed after going seven months without a home win in the Premiership."
    },
    {
     "ref": "bbc_football#16",
     "title": "I've wanted to crawl under a rock and hide - Pressley",
     "published": "2026-11-23T15:31:57+00:00",
     "summary": "Steven Pressley says he felt embarrassed by Dundee's 8-0 \"humiliation\" by Hearts and that there is a \"fragility\" in his squad."
    },
    {
     "ref": "bbc_football#17",
     "title": "'I've wanted to crawl under a rock and hide' - Pressley on Dundee debacle",
     "published": "2026-11-23T15:31:57+00:00",
     "summary": "Steven Pressley says he felt embarrassed by Dundee's 8-0 \"humiliation\" by Hearts and that there is a \"fragility\" in his squad."
    },
    {
     "ref": "bbc_football#18",
     "title": "IFA 'positive' over upgrades needed for World Cup",
     "published": "2026-11-23T15:26:23+00:00",
     "summary": "The Irish Football Association's director of women's football Angela Platt says they are \"still working through\" plans with the Northern Ireland government to ensure there is funding available to make the necessary upgrades to Windsor Park in time for the 2035 World Cup."
    },
    {
     "ref": "bbc_football#19",
     "title": "IFA 'positive' over upgrades needed for World Cup",
     "published": "2026-11-23T15:26:23+00:00",
     "summary": "The Irish Football Association's director of women's football Angela Platt says they are \"still working through\" plans with the Northern Ireland government to ensure there is funding available to make the necessary upgrades to Windsor Park in time for the 2035 World Cup."
    },
    {
     "ref": "bbc_football#20",
     "title": "Raya to miss Dortmund game but injury 'not serious'",
     "published": "2026-11-23T15:23:09+00:00",
     "summary": "Arsenal goalkeeper David Raya will miss Tuesday's Champions League game against Borussia Dortmund but his shoulder injury will not require an operation."
    },
    {
     "ref": "bbc_football#21",
     "title": "England, Northern Ireland, Scotland & Wales to host 2035 Women's World Cup",
     "published": "2026-11-23T15:09:50+00:00",
     "summary": "The United Kingdom will host a football World Cup for the first time since 1966."
    },
    {
     "ref": "bbc_football#22",
     "title": "Scotland to co-host 2035 Women's World Cup, Fifa confirms",
     "published": "2026-11-23T15:09:50+00:00",
     "summary": "The United Kingdom will host a football World Cup for the first time since 1966."
    },
    {
     "ref": "bbc_football#23",
     "title": "England, Northern Ireland, Scotland & Wales to host 2035 Women's World Cup",
     "published": "2026-11-23T15:09:50+00:00",
     "summary": "The United Kingdom will host a football World Cup for the first time since 1966."
    },
    {
     "ref": "bbc_football#24",
     "title": "'You don't win 345 matches by defending' - Simeone breaks La Liga record",
     "published": "2026-11-23T13:07:12+00:00",
     "summary": "Diego Simeone records his 345th La Liga victory as Atletico Madrid manager to set a new mark."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? - Yahoo Sports",
     "published": "2026-11-24T00:43:56+00:00",
     "summary": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Red-Card Uproar Clouds Playoff Exit for Lionel Messi - Yahoo Sports",
     "published": "2026-11-24T00:26:00+00:00",
     "summary": "Red-Card Uproar Clouds Playoff Exit for Lionel Messi Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Three managers, same problems: How Inter Miami's dugout turmoil and tactical failures have left Lionel Messi on the brink of MLS playoff elimination - Goal.com",
     "published": "2026-11-24T00:02:51+00:00",
     "summary": "Three managers, same problems: How Inter Miami's dugout turmoil and tactical failures have left Lionel Messi on the brink of MLS playoff elimination Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? - Yahoo Sports",
     "published": "2026-11-23T23:36:16+00:00",
     "summary": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Columbus Crew's Laurent Courtois chides Lionel Messi on 'sad' behavior - The Columbus Dispatch",
     "published": "2026-11-23T23:28:00+00:00",
     "summary": "Columbus Crew's Laurent Courtois chides Lionel Messi on 'sad' behavior The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Why does Lionel Messi keep escaping harsher punishment from MLS referees? - https://latination.com/",
     "published": "2026-11-23T22:04:56+00:00",
     "summary": "Why does Lionel Messi keep escaping harsher punishment from MLS referees? https://latination.com/"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Want to see Lionel Messi take on Columbus Crew? Latest ticket prices, Game 2 - The Columbus Dispatch",
     "published": "2026-11-23T21:00:00+00:00",
     "summary": "Want to see Lionel Messi take on Columbus Crew? Latest ticket prices, Game 2 The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia - The Columbus Dispatch",
     "published": "2026-11-23T20:56:00+00:00",
     "summary": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "The Pitch: Upsets Galore Set Up Massive Game 2s - MLSsoccer.com",
     "published": "2026-11-23T20:31:12+00:00",
     "summary": "The Pitch: Upsets Galore Set Up Massive Game 2s MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Disciplinary Meltdown Leaves Inter Miami Staring At Early Exit After Gonzalo Tapia Fires Columbus Crew To 3-0 Rout - Gooner Daily",
     "published": "2026-11-23T19:55:54+00:00",
     "summary": "Disciplinary Meltdown Leaves Inter Miami Staring At Early Exit After Gonzalo Tapia Fires Columbus Crew To 3-0 Rout Gooner Daily"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Columbus Crew vs. Inter Miami: How to watch, stream Round One Game 2 - MLSsoccer.com",
     "published": "2026-11-23T19:23:18+00:00",
     "summary": "Columbus Crew vs. Inter Miami: How to watch, stream Round One Game 2 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Columbus STUN Miami with Game 1 upset | Audi MLS Cup Playoffs Rewind - MLSsoccer.com",
     "published": "2026-11-23T18:53:47+00:00",
     "summary": "Columbus STUN Miami with Game 1 upset | Audi MLS Cup Playoffs Rewind MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami on the Brink: What Messi Needs to Stay Alive in the MLS Playoffs - beIN SPORTS",
     "published": "2026-11-23T18:39:30+00:00",
     "summary": "Inter Miami on the Brink: What Messi Needs to Stay Alive in the MLS Playoffs beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami CF - Columbus Crew 0 - 1 | RED CARD - Gonzalo Luján - Yahoo Sports",
     "published": "2026-11-23T18:27:53+00:00",
     "summary": "Inter Miami CF - Columbus Crew 0 - 1 | RED CARD - Gonzalo Luján Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS facing disaster with Lionel Messi and Inter Miami on brink of shock early playoff exit after heavy defeat - The Sun",
     "published": "2026-11-23T18:23:36+00:00",
     "summary": "MLS facing disaster with Lionel Messi and Inter Miami on brink of shock early playoff exit after heavy defeat The Sun"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-23T18:19:47+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "The Verdict: Chaos, controversy and upsets. Welcome to the MLS playoffs - The Athletic - The New York Times",
     "published": "2026-11-23T17:38:09+00:00",
     "summary": "The Verdict: Chaos, controversy and upsets. Welcome to the MLS playoffs - The Athletic The New York Times"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "MLS Winners and Losers: Lionel Messi's Miami embarrassed, Nashville SC stunned and Vancouver Whitecaps show how it's done - Goal.com",
     "published": "2026-11-23T16:24:29+00:00",
     "summary": "MLS Winners and Losers: Lionel Messi's Miami embarrassed, Nashville SC stunned and Vancouver Whitecaps show how it's done Goal.com"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Unofficial Inter Miami x Vice City Kit Competition Reaches Final - Footy Headlines",
     "published": "2026-11-23T15:40:00+00:00",
     "summary": "Unofficial Inter Miami x Vice City Kit Competition Reaches Final Footy Headlines"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi Escapes Red Card After Throwing Ball Into Opponent's Face as Columbus Stun Inter Miami 3-0 in Playoffs - International Business Times Australia",
     "published": "2026-11-23T15:11:08+00:00",
     "summary": "Messi Escapes Red Card After Throwing Ball Into Opponent's Face as Columbus Stun Inter Miami 3-0 in Playoffs International Business Times Australia"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Columbus Crew coach insists Lionel Messi deserved a red card for throwing ball at opponent - Dailysports",
     "published": "2026-11-23T11:35:00+00:00",
     "summary": "Columbus Crew coach insists Lionel Messi deserved a red card for throwing ball at opponent Dailysports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Late drama featuring Lewandowski: Chicago Fire fall to Charlotte in thrilling fashion - Goal.com",
     "published": "2026-11-23T11:28:59+00:00",
     "summary": "Late drama featuring Lewandowski: Chicago Fire fall to Charlotte in thrilling fashion Goal.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "How to get Inter Club d'Escaldes vs AGF tickets: Conference League prices, fixture information, last-minute sales & more - Goal.com",
     "published": "2026-11-23T09:34:41+00:00",
     "summary": "How to get Inter Club d'Escaldes vs AGF tickets: Conference League prices, fixture information, last-minute sales & more Goal.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Tapia's Brace Puts Messi's Inter Miami on Brink of Elimination - Yahoo Sports",
     "published": "2026-11-23T07:00:00+00:00",
     "summary": "Tapia's Brace Puts Messi's Inter Miami on Brink of Elimination Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Columbus boss Laurent Courtois claims Lionel Messi escaped blatant red card for hitting Gonzalo Tapia with ball in Inter Miami defeat - Goal.com",
     "published": "2026-11-23T06:41:00+00:00",
     "summary": "Columbus boss Laurent Courtois claims Lionel Messi escaped blatant red card for hitting Gonzalo Tapia with ball in Inter Miami defeat Goal.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Highlights From Deni Avdija 31-Point Game - NBA.com",
     "published": "2026-11-24T03:32:17+00:00",
     "summary": "Highlights From Deni Avdija 31-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija leads Portland to huge road win against Philadelphia - HoopsHype",
     "published": "2026-11-24T03:18:00+00:00",
     "summary": "Deni Avdija leads Portland to huge road win against Philadelphia HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Highlights (31 Points, 7 Assists) Trail Blazers 128, 76ers 111 | Nov. 23, 2026 - NBA.com",
     "published": "2026-11-24T02:56:30+00:00",
     "summary": "Deni Avdija Highlights (31 Points, 7 Assists) Trail Blazers 128, 76ers 111 | Nov. 23, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers' Deni Avdija: Scores 31 points with seven assists - CBS Sports",
     "published": "2026-11-24T02:52:39+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores 31 points with seven assists CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija News: Scores 31 points with seven assists - RotoWire",
     "published": "2026-11-24T02:52:39+00:00",
     "summary": "Deni Avdija News: Scores 31 points with seven assists RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija (31 points), Trail Blazers end 76ers' win streak at 5 - Reuters",
     "published": "2026-11-24T02:46:00+00:00",
     "summary": "Deni Avdija (31 points), Trail Blazers end 76ers' win streak at 5 Reuters"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Trail Blazers 128-111 76ers (Nov 23, 2026) Game Recap - ESPN",
     "published": "2026-11-24T02:44:29+00:00",
     "summary": "Trail Blazers 128-111 76ers (Nov 23, 2026) Game Recap ESPN"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - Toronto Star",
     "published": "2026-11-24T02:43:04+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 Toronto Star"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - morning-times.com",
     "published": "2026-11-24T02:41:22+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 morning-times.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - The Killeen Daily Herald",
     "published": "2026-11-24T02:41:22+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - Eagle-Tribune",
     "published": "2026-11-24T02:41:22+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 Eagle-Tribune"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija dials from long distance, 11/23/2026 - Yahoo Sports",
     "published": "2026-11-24T02:35:22+00:00",
     "summary": "Deni Avdija dials from long distance, 11/23/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija with 31 points vs. Philadelphia 76ers, 11/23/2026 - Yahoo Sports",
     "published": "2026-11-24T02:34:56+00:00",
     "summary": "Deni Avdija with 31 points vs. Philadelphia 76ers, 11/23/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija scores game-high 31 points vs. 76ers - NBC Sports",
     "published": "2026-11-24T02:31:28+00:00",
     "summary": "Deni Avdija scores game-high 31 points vs. 76ers NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Player grades: Sixers come up short to Deni Avdija, Trail Blazers - cumberlink.com",
     "published": "2026-11-24T02:24:33+00:00",
     "summary": "Player grades: Sixers come up short to Deni Avdija, Trail Blazers cumberlink.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Player grades: Sixers come up short to Deni Avdija, Trail Blazers - Sixers Wire",
     "published": "2026-11-24T02:24:00+00:00",
     "summary": "Player grades: Sixers come up short to Deni Avdija, Trail Blazers Sixers Wire"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija rocks the rim with slam - ESPN",
     "published": "2026-11-24T02:15:38+00:00",
     "summary": "Deni Avdija rocks the rim with slam ESPN"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija rocks the rim with slam - ESPN",
     "published": "2026-11-24T02:15:38+00:00",
     "summary": "Deni Avdija rocks the rim with slam ESPN"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija And Trail Blazers Play 76ers On Nov. 23 - FanDuel",
     "published": "2026-11-23T18:11:03+00:00",
     "summary": "Deni Avdija And Trail Blazers Play 76ers On Nov. 23 FanDuel"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija flirts with triple-double in Saturday's loss to Knicks - FantasyPros",
     "published": "2026-11-22T18:40:00+00:00",
     "summary": "Deni Avdija flirts with triple-double in Saturday's loss to Knicks FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf News: Heading to Long Island - RotoWire",
     "published": "2026-11-22T16:47:08+00:00",
     "summary": "Ben Saraf News: Heading to Long Island RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes - CBS Sports",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores 20 points with five dimes CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija News: Scores 20 points with five dimes - RotoWire",
     "published": "2026-11-22T03:57:48+00:00",
     "summary": "Deni Avdija News: Scores 20 points with five dimes RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija finishes through contact, 11/21/2026 - Yahoo Sports",
     "published": "2026-11-22T03:04:18+00:00",
     "summary": "Deni Avdija finishes through contact, 11/21/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-22T01:17:59+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    }
   ]
  }
 ]
}
</input>