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
  "home": "Milwaukee Bucks",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-20T01:00:00.000Z"
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
     "kickoff_utc": "2026-11-18T22:30:00Z",
     "home": "Coritiba",
     "away": "Santos",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:00:00Z",
     "home": "Clube do Remo",
     "away": "Chapecoense",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:30:00Z",
     "home": "Cruzeiro",
     "away": "Palmeiras",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:30:00Z",
     "home": "Flamengo",
     "away": "Paranaense",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Grêmio",
     "away": "Bahia",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Corinthians",
     "away": "Botafogo",
     "status": "FINISHED",
     "score": "4-0"
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T22:30:00Z",
     "home": "Vasco da Gama",
     "away": "Internacional",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T22:30:00Z",
     "home": "Vitória",
     "away": "Bragantino",
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
    "home": "Cleveland Cavaliers",
    "away": "Memphis Grizzlies",
    "score": "121-124",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Houston Rockets",
    "score": "104-119",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Milwaukee Bucks",
    "score": "137-130",
    "status": "Final"
   },
   {
    "home": "Orlando Magic",
    "away": "Philadelphia 76ers",
    "score": "116-121",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Chicago Bulls",
    "score": "107-137",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Washington Wizards",
    "score": "99-103",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Detroit Pistons",
    "score": "109-122",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Atlanta Hawks",
    "score": "112-117",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "Boston Celtics",
    "score": "105-101",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Golden State Warriors",
    "score": "116-94",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Utah Jazz",
    "score": "97-109",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Phoenix Suns",
    "score": "107-128",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Memphis Grizzlies",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-20T01:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-20T01:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-20T01:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-20T01:00:00Z"
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
     "kickoff_utc": "2026-11-21T23:00:00",
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
     "kickoff_utc": "2026-11-17T19:45:00",
     "home": "Israel",
     "away": "Austria",
     "score": "1-1"
    }
   ],
   "upcoming": []
  }
 },
 "news_feeds": [
  {
   "outlet": "BBC Sport — Football",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_football#0",
     "title": "Will Infantino feel he's already won as Fifa challengers confirmed?",
     "published": "2026-11-19T10:21:10+00:00",
     "summary": "Fifa has confirmed Philippe Diallo and Kozo Tashima will also stand in next year's presidential election - but can either stop Gianni Infantino from winning?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Player handed eight-year ban for throwing rock at ref",
     "published": "2026-11-19T10:20:58+00:00",
     "summary": "Ecuadorian footballer Jhon Perlaza is banned for eight years after throwing a stone at an assistant referee during a third-tier match."
    },
    {
     "ref": "bbc_football#2",
     "title": "Five return for Wales' World Cup play-off final",
     "published": "2026-11-19T10:00:07+00:00",
     "summary": "Ceri Holland is in the Wales squad for next month's Women's World Cup play-off final against Norway despite being out since September through injury."
    },
    {
     "ref": "bbc_football#3",
     "title": "Five return for Wales' World Cup play-off final",
     "published": "2026-11-19T10:00:07+00:00",
     "summary": "Ceri Holland is in the Wales squad for next month's Women's World Cup play-off final against Norway despite being out since September through injury."
    },
    {
     "ref": "bbc_football#4",
     "title": "Allen to join Williams in interim Swans coaching team",
     "published": "2026-11-19T09:43:08+00:00",
     "summary": "Ashley Williams is set to join a temporary Swansea City coaching team as the Championship club attempt to fill the void left by Vitor Matos."
    },
    {
     "ref": "bbc_football#5",
     "title": "The best European strikers this century - ranked by you",
     "published": "2026-11-19T08:50:01+00:00",
     "summary": "BBC Sport reveals the top 10 European strikers this century, as voted for by you."
    },
    {
     "ref": "bbc_football#6",
     "title": "Leicester split with sponsor after porn actress row",
     "published": "2026-11-19T08:26:16+00:00",
     "summary": "A fans group had complained after BC Game appointed a porn actress as a brand ambassador."
    },
    {
     "ref": "bbc_football#7",
     "title": "Armstrong would relish Rangers switch - gossip",
     "published": "2026-11-19T08:01:39+00:00",
     "summary": "Romania-based winger eyes reunion with manager at Ibrox as Celtic hero reveals approach from Rangers..."
    },
    {
     "ref": "bbc_football#8",
     "title": "Podcast: Who should be worried in Premiership bottom four?",
     "published": "2026-11-19T08:00:00+00:00",
     "summary": "Aberdeen, Hibs, Motherwell & Killie... FIGHT!"
    },
    {
     "ref": "bbc_football#9",
     "title": "How Premier League's big six keep getting richer",
     "published": "2026-11-19T07:38:22+00:00",
     "summary": "Ten games into the Premier League season, and the top five places are dominated by big six clubs. It should come as no surprise as they have a growing advantage of hundreds of millions of pounds."
    },
    {
     "ref": "bbc_football#10",
     "title": "From Forest fringes to Glasner's go-to guy - the rise of McAtee",
     "published": "2026-11-19T07:14:11+00:00",
     "summary": "How has Nottingham Forest midfielder James McAtee gone from the bench to indispensable at the City Ground?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-19T07:06:18+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#12",
     "title": "Vote for the first BBC Men's Footballer of the Year",
     "published": "2026-11-19T06:30:04+00:00",
     "summary": "Jude Bellingham, Harry Kane, Kylian Mbappe, Rodri and Lamine Yamal are shortlisted for the BBC's Men's Footballer of the Year award."
    },
    {
     "ref": "bbc_football#13",
     "title": "'Best I've seen live': Watch as player scores ‘special’ goal",
     "published": "2026-11-19T05:30:23+00:00",
     "summary": "The midfielder speaks of the \"special moment\" he scored from within his own half."
    },
    {
     "ref": "bbc_football#14",
     "title": "Man Utd pursuing Como's Paz - Thursday's gossip",
     "published": "2026-11-18T22:34:05+00:00",
     "summary": "Manchester United pursuing Nico Paz, Besiktas plot move for Amad Diallo, Barcelona to rebuff offers for Alejandro Balde, plus more."
    },
    {
     "ref": "bbc_football#15",
     "title": "Buurman rescues late Chelsea win against PSG",
     "published": "2026-11-18T22:13:49+00:00",
     "summary": "Veerle Buurman scores an 87th-minute winner for Chelsea as they edge past Paris St-Germain 1-0 in the Women's Champions League to move top of the table."
    },
    {
     "ref": "bbc_football#16",
     "title": "Euro Leagues",
     "published": "2026-11-18T22:06:00+00:00",
     "summary": "Who makes the list of the Top 10 European Strikers of the Century so far?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Ukrainian FA to blame for failed drugs test - Mudryk",
     "published": "2026-11-18T21:22:18+00:00",
     "summary": "Tottenham's on-loan Chelsea winger Mykhailo Mudryk says he blames the Ukrainian Association of Football for his failed drugs test and subsequent ban."
    },
    {
     "ref": "bbc_football#18",
     "title": "England defender Carter joins Bay FC after Gotham exit",
     "published": "2026-11-18T21:07:26+00:00",
     "summary": "England defender Jess Carter completes a move to Bay FC after leaving Gotham FC as a free agent."
    },
    {
     "ref": "bbc_football#19",
     "title": "England defender Carter joins Bay FC after Gotham exit",
     "published": "2026-11-18T21:07:26+00:00",
     "summary": "England defender Jess Carter completes a move to Bay FC after leaving Gotham FC as a free agent."
    },
    {
     "ref": "bbc_football#20",
     "title": "Strasbourg appoint Swansea boss Matos",
     "published": "2026-11-18T20:57:54+00:00",
     "summary": "Strasbourg announce the appointment of Vitor Matos as the club's head coach - though Swansea City are yet to confirm the move."
    },
    {
     "ref": "bbc_football#21",
     "title": "FA explored legal challenge to Infantino staying on",
     "published": "2026-11-18T20:55:01+00:00",
     "summary": "The Football Association considered challenging Gianni Infantino's eligibility to run for a fourth term as Fifa president, but it felt a case was likely to fail."
    },
    {
     "ref": "bbc_football#22",
     "title": "Hemp and Shaw star as Manchester City get vital win at Hacken",
     "published": "2026-11-18T20:25:40+00:00",
     "summary": "Substitutes Lauren Hemp and Khadija Shaw both get on the scoresheet to help Manchester City secure a crucial 2-0 win against Swedish side Hacken in the Champions League."
    },
    {
     "ref": "bbc_football#23",
     "title": "From kit boy to manager at 28 - Dumbarton appoint Fellowes",
     "published": "2026-11-18T19:09:00+00:00",
     "summary": "Martin Fellowes becomes the youngest manager in SPFL history, taking on the Dumbarton job at the age of 28."
    },
    {
     "ref": "bbc_football#24",
     "title": "From kit boy to manager at 28 - Dumbarton appoint Fellowes",
     "published": "2026-11-18T19:09:00+00:00",
     "summary": "Martin Fellowes becomes the youngest manager in SPFL history, taking on the Dumbarton job at the age of 28."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs Columbus Crew - Watch Online for Free - APWin",
     "published": "2026-11-19T09:20:24+00:00",
     "summary": "Inter Miami vs Columbus Crew - Watch Online for Free APWin"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi enters the MLS playoffs with history in his sights, as Inter Miami chase a feat no team has manag - Diario AS",
     "published": "2026-11-19T07:29:49+00:00",
     "summary": "Lionel Messi enters the MLS playoffs with history in his sights, as Inter Miami chase a feat no team has manag Diario AS"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Suarez reveals Messi is far from retiring and is eager to win the MLS Cup. - Vietnam.vn",
     "published": "2026-11-19T03:28:27+00:00",
     "summary": "Suarez reveals Messi is far from retiring and is eager to win the MLS Cup. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Preview: Inter Miami vs Columbus Crew - prediction, team news, lineups - Sports Mole",
     "published": "2026-11-19T01:53:43+00:00",
     "summary": "Preview: Inter Miami vs Columbus Crew - prediction, team news, lineups Sports Mole"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Watch Inter Miami CF: 2026 TV Schedule & Streaming Details - CableTV.com",
     "published": "2026-11-18T22:45:00+00:00",
     "summary": "Watch Inter Miami CF: 2026 TV Schedule & Streaming Details CableTV.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami FC begins playoffs run with historic goals - Axios",
     "published": "2026-11-18T22:00:37+00:00",
     "summary": "Inter Miami FC begins playoffs run with historic goals Axios"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi Leads Inter Miami’s Bid for Historic MLS Cup Defence - Olorisupergal",
     "published": "2026-11-18T21:30:58+00:00",
     "summary": "Messi Leads Inter Miami’s Bid for Historic MLS Cup Defence Olorisupergal"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami and Messi eye retaining the MLS Cup as the playoffs get underway - Flashscore.co.za",
     "published": "2026-11-18T21:22:04+00:00",
     "summary": "Inter Miami and Messi eye retaining the MLS Cup as the playoffs get underway Flashscore.co.za"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "'She held his hand and said it publicly': Messi's mother picks her son's successor - Goal.com",
     "published": "2026-11-18T20:00:36+00:00",
     "summary": "'She held his hand and said it publicly': Messi's mother picks her son's successor Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami: Luis Suarez wants to retire alongside Lionel Messi - Foot-Africa.com",
     "published": "2026-11-18T20:00:00+00:00",
     "summary": "Inter Miami: Luis Suarez wants to retire alongside Lionel Messi Foot-Africa.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF Teams Up with Publix for Second Annual Shop with a Star Initiative to Support Families During the Holiday Season - Inter Miami CF",
     "published": "2026-11-18T19:53:15+00:00",
     "summary": "Inter Miami CF Teams Up with Publix for Second Annual Shop with a Star Initiative to Support Families During the Holiday Season Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "LaLiga: Suarez names Barcelona player that surprises him - Daily Post Nigeria",
     "published": "2026-11-18T19:08:30+00:00",
     "summary": "LaLiga: Suarez names Barcelona player that surprises him Daily Post Nigeria"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "‘On a Personal Level’—Luis Suarez Provides Insight Into Lionel Messi’s Retirement - Sports Illustrated",
     "published": "2026-11-18T19:00:01+00:00",
     "summary": "‘On a Personal Level’—Luis Suarez Provides Insight Into Lionel Messi’s Retirement Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami CF Announces Second Edition of Winter Camps - Inter Miami CF",
     "published": "2026-11-18T18:06:52+00:00",
     "summary": "Inter Miami CF Announces Second Edition of Winter Camps Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Columbus Crew: Can they upset Inter Miami & Lionel Messi? - MLSsoccer.com",
     "published": "2026-11-18T18:05:06+00:00",
     "summary": "Columbus Crew: Can they upset Inter Miami & Lionel Messi? MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS playoff tiers: Title or bust for Lionel Messi’s Inter Miami as Nashville SC chase the double - Goal.com",
     "published": "2026-11-18T17:59:15+00:00",
     "summary": "MLS playoff tiers: Title or bust for Lionel Messi’s Inter Miami as Nashville SC chase the double Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "International Duty Roundup: Recapping the November International Window - Inter Miami CF",
     "published": "2026-11-18T17:06:52+00:00",
     "summary": "International Duty Roundup: Recapping the November International Window Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi and Inter Miami to begin title defence against Columbus — Channel NewsAsia - UA.NEWS",
     "published": "2026-11-18T16:22:23+00:00",
     "summary": "Messi and Inter Miami to begin title defence against Columbus — Channel NewsAsia UA.NEWS"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups - The Lufkin Daily News",
     "published": "2026-11-18T16:00:56+00:00",
     "summary": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups The Lufkin Daily News"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-11-18T16:00:56+00:00",
     "summary": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "GTA VI Is Here: Miami Teams Become Vice City - Sofascore",
     "published": "2026-11-18T14:04:02+00:00",
     "summary": "GTA VI Is Here: Miami Teams Become Vice City Sofascore"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 - FOX Sports",
     "published": "2026-11-18T00:30:46+00:00",
     "summary": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 - FOX Sports",
     "published": "2026-11-18T00:17:59+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF vs. Philadelphia - Live Score - April 24, 2027 - FOX Sports",
     "published": "2026-11-18T00:17:50+00:00",
     "summary": "Inter Miami CF vs. Philadelphia - Live Score - April 24, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami CF vs. Charlotte FC - Live Score - April 10, 2027 - FOX Sports",
     "published": "2026-11-18T00:16:31+00:00",
     "summary": "Inter Miami CF vs. Charlotte FC - Live Score - April 10, 2027 FOX Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 - DraftKings Network",
     "published": "2026-11-19T04:15:00+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Thursday, 11/19/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija (foot) questionable Thursday vs. MIL - NBC Sports",
     "published": "2026-11-19T03:47:04+00:00",
     "summary": "Deni Avdija (foot) questionable Thursday vs. MIL NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija (foot) listed questionable Thursday - FantasyPros",
     "published": "2026-11-18T23:02:09+00:00",
     "summary": "Deni Avdija (foot) listed questionable Thursday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks - Yahoo Sports",
     "published": "2026-11-18T22:56:26+00:00",
     "summary": "Why Deni Avdija, Toumani Camara Might Not Play in Blazers vs. Bucks Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Questionable versus Bucks - CBS Sports",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Trail Blazers' Deni Avdija: Questionable versus Bucks CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija Injury: Questionable versus Bucks - RotoWire",
     "published": "2026-11-18T22:54:45+00:00",
     "summary": "Deni Avdija Injury: Questionable versus Bucks RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Wizards continue to be proven wrong for trading away Deni Avdija - Wiz of Awes",
     "published": "2026-11-18T11:00:00+00:00",
     "summary": "Wizards continue to be proven wrong for trading away Deni Avdija Wiz of Awes"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija (foot) downgraded to out Tuesday - NBC Sports",
     "published": "2026-11-18T05:39:59+00:00",
     "summary": "Deni Avdija (foot) downgraded to out Tuesday NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija scores team-high 27 points in loss - NBC Sports",
     "published": "2026-11-18T03:50:57+00:00",
     "summary": "Deni Avdija scores team-high 27 points in loss NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija (foot) questionable Tuesday vs. MIN - NBC Sports",
     "published": "2026-11-18T03:50:57+00:00",
     "summary": "Deni Avdija (foot) questionable Tuesday vs. MIN NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija out against Wolves - HoopsHype",
     "published": "2026-11-18T02:04:00+00:00",
     "summary": "Deni Avdija out against Wolves HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers rule star Deni Avdija out vs. Timberwolves with sore foot - ESPN",
     "published": "2026-11-18T00:55:00+00:00",
     "summary": "Trail Blazers rule star Deni Avdija out vs. Timberwolves with sore foot ESPN"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Blazers announce brutal Deni Avdija final injury status vs. Timberwolves - BasketNews.com",
     "published": "2026-11-18T00:32:00+00:00",
     "summary": "Blazers announce brutal Deni Avdija final injury status vs. Timberwolves BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Portland Trail Blazers Announce Deni Avdija Injury News Before Timberwolves Game - Yahoo Sports",
     "published": "2026-11-18T00:29:29+00:00",
     "summary": "Portland Trail Blazers Announce Deni Avdija Injury News Before Timberwolves Game Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Trail Blazers' Deni Avdija: Ruled out Tuesday - CBS Sports",
     "published": "2026-11-18T00:28:32+00:00",
     "summary": "Trail Blazers' Deni Avdija: Ruled out Tuesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Injury: Ruled out Tuesday - RotoWire",
     "published": "2026-11-18T00:28:32+00:00",
     "summary": "Deni Avdija Injury: Ruled out Tuesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Final Injury Report for Trail Blazers-Timberwolves: Will Deni Avdija, Jonathan Kuminga Play? - Yahoo Sports",
     "published": "2026-11-17T21:00:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Timberwolves: Will Deni Avdija, Jonathan Kuminga Play? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Damian Lillard’s search for the right co-star has finally ended with Deni Avdija - Rip City Project",
     "published": "2026-11-17T19:27:35+00:00",
     "summary": "Damian Lillard’s search for the right co-star has finally ended with Deni Avdija Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija (foot) listed questionable Tuesday - FantasyPros",
     "published": "2026-11-17T19:24:00+00:00",
     "summary": "Deni Avdija (foot) listed questionable Tuesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija may miss Tuesday's game against Timberwolves - Yahoo Sports",
     "published": "2026-11-17T19:20:59+00:00",
     "summary": "Deni Avdija may miss Tuesday's game against Timberwolves Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Listed as questionable - CBS Sports",
     "published": "2026-11-17T19:20:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Listed as questionable CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija Injury: Listed as questionable - RotoWire",
     "published": "2026-11-17T19:20:07+00:00",
     "summary": "Deni Avdija Injury: Listed as questionable RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Ben Saraf News: Diverse effort against Delaware - RotoWire",
     "published": "2026-11-17T18:22:35+00:00",
     "summary": "Ben Saraf News: Diverse effort against Delaware RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-17T16:30:57+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija drops 27 points Monday - FantasyPros",
     "published": "2026-11-17T15:41:17+00:00",
     "summary": "Deni Avdija drops 27 points Monday FantasyPros"
    }
   ]
  }
 ]
}
</input>