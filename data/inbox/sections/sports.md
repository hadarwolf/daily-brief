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
     "home": "Portsmouth",
     "away": "West Ham",
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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Feyenoord",
     "away": "Porto",
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
     "title": "Glens boss Ferguson apologises after seven-game ban",
     "published": "2026-11-24T11:36:18+00:00",
     "summary": "Glentoran manager Duncan Ferguson will be suspended for seven games following his red card in the side's 3-2 defeat by Cliftonville last week."
    },
    {
     "ref": "bbc_football#1",
     "title": "Republic of Ireland boss Ward signs new contract",
     "published": "2026-11-24T10:45:30+00:00",
     "summary": "Republic of Ireland manager Carla Ward signs a contract extension until the conclusion of the side's Euro 2029 campaign."
    },
    {
     "ref": "bbc_football#2",
     "title": "Four Midlands teams in the Championship top five - can it last?",
     "published": "2026-11-24T10:27:17+00:00",
     "summary": "With more than a third of the season gone, Stoke City, Birmingham City, Wolves and West Brom are all in the Championship promotion race. Who can keep it up?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Which Premier League players are set for yellow card suspensions?",
     "published": "2026-11-24T09:47:51+00:00",
     "summary": "Seventeen players are on the brink of a one-match ban in the 2026-27 Premier League season."
    },
    {
     "ref": "bbc_football#4",
     "title": "Dead hippo to be honoured on football club tifo",
     "published": "2026-11-24T09:43:38+00:00",
     "summary": "Major League Soccer side FC Cincinnati will honour Fiona, a hippo that recently died at the city's zoo, with a tifo display at their match with Nashville SC on Saturday."
    },
    {
     "ref": "bbc_football#5",
     "title": "The youngest Premier League goalscorers this season",
     "published": "2026-11-24T09:10:34+00:00",
     "summary": "After the stellar performances of Liverpool's Rio Ngumoha and Tottenham's Luca Williams-Barnett, BBC Sport looks at the youngest players to score in the Premier League this season."
    },
    {
     "ref": "bbc_football#6",
     "title": "Barnet forward Noel-Williams charged with rape",
     "published": "2026-11-24T08:50:17+00:00",
     "summary": "Isiah Noel-Williams, from St Albans, is remanded in custody charged with three rape offences."
    },
    {
     "ref": "bbc_football#7",
     "title": "Why Potts swapped West Ham for Club Brugge after 16 years",
     "published": "2026-11-24T08:36:50+00:00",
     "summary": "When Liverpool visit Club Brugge on Wendesday they are likely to come up against English midfelder Freddie Potts."
    },
    {
     "ref": "bbc_football#8",
     "title": "Can returning Beattie and Haughey make an impact?",
     "published": "2026-11-24T08:08:33+00:00",
     "summary": "BBC Sport NI looks at Michael McArdle's decision to recall striker Kerry Beattie and the uncapped Ella Haughey to his squad for a friendly double-header against Greece."
    },
    {
     "ref": "bbc_football#9",
     "title": "Podcast: Hibs & Dundee hurting as confidence grows at Rangers",
     "published": "2026-11-24T08:00:00+00:00",
     "summary": "Can Dundee respond to 8-0? Hibs chase a rare home win and Rangers turn up the heat."
    },
    {
     "ref": "bbc_football#10",
     "title": "Celtic duo Duran and Nygren attract interest - gossip",
     "published": "2026-11-24T07:53:41+00:00",
     "summary": "Premier League club keep an eye on Celtic summer signing as Serie A sides monitor the champion's Swedish midfielder..."
    },
    {
     "ref": "bbc_football#11",
     "title": "Why has De Bruyne struggled at Napoli as he returns to Man City?",
     "published": "2026-11-24T06:57:16+00:00",
     "summary": "Kevin de Bruyne's move to Napoli last summer was supposed to mark a continuation of his glittering decade at Manchester City as he approaches the twilight years of his career."
    },
    {
     "ref": "bbc_football#12",
     "title": "Two goals in 15 games - what's going on with Gyokeres?",
     "published": "2026-11-24T06:45:27+00:00",
     "summary": "Arsenal have made an impressive start to the campaign but it has been a frustrating one for striker Viktor Gyokeres."
    },
    {
     "ref": "bbc_football#13",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-24T06:42:40+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#14",
     "title": "115 days, 39 private-jet flights, one election - Infantino's globetrotting",
     "published": "2026-11-24T06:16:53+00:00",
     "summary": "Fifa president Gianni Infantino's globetrotting by private jet since his plan to sell off a stake in the World Cup has come under scrutiny."
    },
    {
     "ref": "bbc_football#15",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-23T23:26:35+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#16",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Key questions as Rangers host Aberdeen & Dundee visit Hibs",
     "published": "2026-11-23T23:07:48+00:00",
     "summary": "What are the key things to look out for as Rangers host Aberdeen while Hibernian entertain Dundee in the Scottish Premiership on Tuesday?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Andrews praises 'versatile' Lewis-Potter",
     "published": "2026-11-23T22:59:14+00:00",
     "summary": "Brentford manager Keith Andrews praises the performance of Keane Lewis-Potter, who scored twice in his side's 4-0 win against Everton."
    },
    {
     "ref": "bbc_football#19",
     "title": "Moyes questions Tarkowski red in Brentford loss",
     "published": "2026-11-23T22:54:51+00:00",
     "summary": "Everton manager David Moyes questions whether the force of James Tarkowski's challenge was taken into consideration, after the defender was shown a red card in his side's 4-0 loss by Brentford."
    },
    {
     "ref": "bbc_football#20",
     "title": "Tarkowski's first Premier League red ruins Moyes' night - was it deserved?",
     "published": "2026-11-23T22:43:39+00:00",
     "summary": "Everton captain James Tarkowski was sent off for the first time in his Premier League career in Monday's 4-0 loss at Brentford - but was it a harsh decision?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Janelt scores stunner as Brentford beat 10-man Everton",
     "published": "2026-11-23T22:31:27+00:00",
     "summary": "Watch highlights as Brentford earn a comfortable 3-0 win against 10-man Everton in the Premier League, including a great goal by Vitaly Janelt."
    },
    {
     "ref": "bbc_football#22",
     "title": "MNC: Leeds dreaming of Europe and when's the right time to start a young player?",
     "published": "2026-11-23T21:48:00+00:00",
     "summary": "Mark Chapman is joined by Conor Coady, Chris Sutton and Rory Smith."
    },
    {
     "ref": "bbc_football#23",
     "title": "Arsenal and PSG keen on Nusa - Tuesday's gossip",
     "published": "2026-11-23T21:41:52+00:00",
     "summary": "Arsenal and PSG are both looking at a move for RB Leipzig winger Antonio Nusa, Xabi Alonso has Chelsea hierarchy backing, Liverpool open contract talks with keeper Alisson Becker, plus more."
    },
    {
     "ref": "bbc_football#24",
     "title": "De Bruyne's feelings for Man City will 'never change'",
     "published": "2026-11-23T21:05:23+00:00",
     "summary": "Kevin de Bruyne says he has \"love\" for Manchester City's owners and his feelings for the club will \"never change\" despite being found guilty of breaching the Premier League's financial rules."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi booked for throwing the ball into Gonzalo Tapia's face as Columbus Crew beat Inter Miami 3-0 - Latin Times",
     "published": "2026-11-24T11:33:59+00:00",
     "summary": "Messi booked for throwing the ball into Gonzalo Tapia's face as Columbus Crew beat Inter Miami 3-0 Latin Times"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami and Messi's problem - Laodong.vn",
     "published": "2026-11-24T11:11:47+00:00",
     "summary": "Inter Miami and Messi's problem Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "False! Kevin De Bruyne has not joined Inter Miami - Dubawa",
     "published": "2026-11-24T10:05:57+00:00",
     "summary": "False! Kevin De Bruyne has not joined Inter Miami Dubawa"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Major League Soccer to review Messi’s controversial clash with Columbus player - Blueprint Newspapers",
     "published": "2026-11-24T09:55:28+00:00",
     "summary": "Major League Soccer to review Messi’s controversial clash with Columbus player Blueprint Newspapers"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "MLS salaries revealed: Messi tops the list with €26m-a-year package - BeSoccer Livescore",
     "published": "2026-11-24T09:30:02+00:00",
     "summary": "MLS salaries revealed: Messi tops the list with €26m-a-year package BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Jordi Alba - VAVEL.com",
     "published": "2026-11-24T06:42:46+00:00",
     "summary": "Jordi Alba VAVEL.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Did Lionel Messi Once Again Escape a Red Card? LM10 Throws Ball in Opposing Player's Face - MensXP",
     "published": "2026-11-24T05:34:46+00:00",
     "summary": "Did Lionel Messi Once Again Escape a Red Card? LM10 Throws Ball in Opposing Player's Face MensXP"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi throws the ball into opponent's face, gets away with yellow card - The Daily Star",
     "published": "2026-11-24T04:04:26+00:00",
     "summary": "Messi throws the ball into opponent's face, gets away with yellow card The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Highlights: St. Louis CITY SC 3-2 Los Angeles Football Club (MLS), Major League Soccer - Forza Football",
     "published": "2026-11-24T04:02:38+00:00",
     "summary": "Highlights: St. Louis CITY SC 3-2 Los Angeles Football Club (MLS), Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Sang-bin catches LAFC goalkeeper off guard with a stunning strike, Major League Soccer - Forza Football",
     "published": "2026-11-24T04:02:38+00:00",
     "summary": "Sang-bin catches LAFC goalkeeper off guard with a stunning strike, Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi's 15 Goals Against Nashville Lead MLS - Football.com",
     "published": "2026-11-24T03:06:12+00:00",
     "summary": "Lionel Messi's 15 Goals Against Nashville Lead MLS Football.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? - Yahoo Sports",
     "published": "2026-11-24T00:43:56+00:00",
     "summary": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Red-Card Uproar Clouds Playoff Exit for Lionel Messi - Yahoo Sports",
     "published": "2026-11-24T00:26:00+00:00",
     "summary": "Red-Card Uproar Clouds Playoff Exit for Lionel Messi Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Three managers, same problems: How Inter Miami's dugout turmoil and tactical failures have left Lionel Messi on the brink of MLS playoff elimination - Goal.com",
     "published": "2026-11-24T00:02:51+00:00",
     "summary": "Three managers, same problems: How Inter Miami's dugout turmoil and tactical failures have left Lionel Messi on the brink of MLS playoff elimination Goal.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? - Yahoo Sports",
     "published": "2026-11-23T23:36:16+00:00",
     "summary": "Did Lionel Messi deserve a red card in Inter Miami's opening playoff loss? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Columbus Crew's Laurent Courtois chides Lionel Messi on 'sad' behavior - The Columbus Dispatch",
     "published": "2026-11-23T23:28:00+00:00",
     "summary": "Columbus Crew's Laurent Courtois chides Lionel Messi on 'sad' behavior The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Why does Lionel Messi keep escaping harsher punishment from MLS referees? - https://latination.com/",
     "published": "2026-11-23T22:04:56+00:00",
     "summary": "Why does Lionel Messi keep escaping harsher punishment from MLS referees? https://latination.com/"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Want to see Lionel Messi take on Columbus Crew? Latest ticket prices, Game 2 - The Columbus Dispatch",
     "published": "2026-11-23T21:00:00+00:00",
     "summary": "Want to see Lionel Messi take on Columbus Crew? Latest ticket prices, Game 2 The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia - The Columbus Dispatch",
     "published": "2026-11-23T20:56:00+00:00",
     "summary": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Cristiano Ronaldo and Lionel Messi share unwanted record as 21st-century penalty list revealed - World Soccer Talk",
     "published": "2026-11-23T20:51:05+00:00",
     "summary": "Cristiano Ronaldo and Lionel Messi share unwanted record as 21st-century penalty list revealed World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "INTER MIAMI IN TROUBLE?! Playoff Loss Reaction vs. Columbus | What’s Next? - BVM Sports",
     "published": "2026-11-23T20:49:13+00:00",
     "summary": "INTER MIAMI IN TROUBLE?! Playoff Loss Reaction vs. Columbus | What’s Next? BVM Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "The Pitch: Upsets Galore Set Up Massive Game 2s - MLSsoccer.com",
     "published": "2026-11-23T20:31:12+00:00",
     "summary": "The Pitch: Upsets Galore Set Up Massive Game 2s MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Columbus Crew vs. Inter Miami: How to watch, stream Round One Game 2 - MLSsoccer.com",
     "published": "2026-11-23T19:23:18+00:00",
     "summary": "Columbus Crew vs. Inter Miami: How to watch, stream Round One Game 2 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Columbus STUN Miami with Game 1 upset | Audi MLS Cup Playoffs Rewind - MLSsoccer.com",
     "published": "2026-11-23T18:53:47+00:00",
     "summary": "Columbus STUN Miami with Game 1 upset | Audi MLS Cup Playoffs Rewind MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami on the Brink: What Messi Needs to Stay Alive in the MLS Playoffs - beIN SPORTS",
     "published": "2026-11-23T18:39:30+00:00",
     "summary": "Inter Miami on the Brink: What Messi Needs to Stay Alive in the MLS Playoffs beIN SPORTS"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija: Scoot Henderson is a big part of our team - Yahoo Sports",
     "published": "2026-11-24T10:00:57+00:00",
     "summary": "Deni Avdija: Scoot Henderson is a big part of our team Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 - FOX Sports",
     "published": "2026-11-24T09:40:35+00:00",
     "summary": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija: the three-point shot of Portland's forward · SNA - Sport News Africa",
     "published": "2026-11-24T09:01:23+00:00",
     "summary": "Deni Avdija: the three-point shot of Portland's forward · SNA Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Highlights (31 Points, 7 Assists) Trail Blazers 128, 76ers 111 | Nov. 23, 2026 - NBA.com",
     "published": "2026-11-24T08:53:52+00:00",
     "summary": "Deni Avdija Highlights (31 Points, 7 Assists) Trail Blazers 128, 76ers 111 | Nov. 23, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post - UA.NEWS",
     "published": "2026-11-24T08:12:37+00:00",
     "summary": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post UA.NEWS"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija says Trail Blazers are not afraid of anyone - TalkBasket.net",
     "published": "2026-11-24T08:06:17+00:00",
     "summary": "Deni Avdija says Trail Blazers are not afraid of anyone TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers - The Jerusalem Post",
     "published": "2026-11-24T07:18:44+00:00",
     "summary": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija torches 76ers as Blazers end winning streak - TalkBasket.net",
     "published": "2026-11-24T07:07:40+00:00",
     "summary": "Deni Avdija torches 76ers as Blazers end winning streak TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - Traverse City Record-Eagle",
     "published": "2026-11-24T06:57:55+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 Traverse City Record-Eagle"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - New Haven Register",
     "published": "2026-11-24T06:31:19+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 New Haven Register"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "NBA: Blazers snap Sixers streak, Thunder stumble - Cebu Daily News",
     "published": "2026-11-24T06:15:00+00:00",
     "summary": "NBA: Blazers snap Sixers streak, Thunder stumble Cebu Daily News"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - Stamford Advocate",
     "published": "2026-11-24T05:53:14+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 Stamford Advocate"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - The Killeen Daily Herald",
     "published": "2026-11-24T05:27:50+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games - GMA Network",
     "published": "2026-11-24T05:24:22+00:00",
     "summary": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Trail Blazers' Deni Avdija turns defense into offense to seal 30-point night vs. 76ers - Yardbarker",
     "published": "2026-11-24T04:18:08+00:00",
     "summary": "Trail Blazers' Deni Avdija turns defense into offense to seal 30-point night vs. 76ers Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Scores 31 Points In Win Over 76ers - FanDuel",
     "published": "2026-11-24T03:40:38+00:00",
     "summary": "Deni Avdija Scores 31 Points In Win Over 76ers FanDuel"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 - NBA.com",
     "published": "2026-11-24T03:40:09+00:00",
     "summary": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Highlights From Deni Avdija 31-Point Game - NBA.com",
     "published": "2026-11-24T03:32:17+00:00",
     "summary": "Highlights From Deni Avdija 31-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija leads Portland to huge road win against Philadelphia - HoopsHype",
     "published": "2026-11-24T03:18:00+00:00",
     "summary": "Deni Avdija leads Portland to huge road win against Philadelphia HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Watch: Deni Avdija drops 31 as Trail Blazers pull away from 76ers - Yardbarker",
     "published": "2026-11-24T03:02:01+00:00",
     "summary": "Watch: Deni Avdija drops 31 as Trail Blazers pull away from 76ers Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija scores game-high 31 points vs. 76ers - NBC Sports",
     "published": "2026-11-24T02:58:35+00:00",
     "summary": "Deni Avdija scores game-high 31 points vs. 76ers NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers' Deni Avdija: Scores 31 points with seven assists - CBS Sports",
     "published": "2026-11-24T02:52:39+00:00",
     "summary": "Trail Blazers' Deni Avdija: Scores 31 points with seven assists CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija News: Scores 31 points with seven assists - RotoWire",
     "published": "2026-11-24T02:52:39+00:00",
     "summary": "Deni Avdija News: Scores 31 points with seven assists RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - Times Union",
     "published": "2026-11-24T02:51:04+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 Times Union"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija (31 points), Trail Blazers end 76ers' win streak at 5 - Reuters",
     "published": "2026-11-24T02:46:00+00:00",
     "summary": "Deni Avdija (31 points), Trail Blazers end 76ers' win streak at 5 Reuters"
    }
   ]
  }
 ]
}
</input>