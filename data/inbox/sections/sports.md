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
     "status": "IN_PLAY",
     "score": "1-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:30:00Z",
     "home": "Flamengo",
     "away": "Paranaense",
     "status": "IN_PLAY",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Grêmio",
     "away": "Bahia",
     "status": "IN_PLAY",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-19T00:30:00Z",
     "home": "Corinthians",
     "away": "Botafogo",
     "status": "IN_PLAY",
     "score": "2-0"
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
     "title": "'I'm very healthy' - Kompany to return to dugout after health scare",
     "published": "2026-11-19T10:32:30+00:00",
     "summary": "Bayern Munich boss Vincent Kompany says he is \"very healthy\" and grateful for all of the support he has recieved as he prepares to return to the dugout on Friday."
    },
    {
     "ref": "bbc_football#1",
     "title": "Will Infantino feel he's already won as Fifa challengers confirmed?",
     "published": "2026-11-19T10:21:10+00:00",
     "summary": "Fifa has confirmed Philippe Diallo and Kozo Tashima will also stand in next year's presidential election - but can either stop Gianni Infantino from winning?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Eight-year ban for player who threw rock at assistant referee",
     "published": "2026-11-19T10:20:58+00:00",
     "summary": "Ecuadorian footballer Jhon Perlaza is banned for eight years after throwing a stone at an assistant referee during a third-tier match."
    },
    {
     "ref": "bbc_football#3",
     "title": "Five return for Wales' World Cup play-off final",
     "published": "2026-11-19T10:00:07+00:00",
     "summary": "Ceri Holland is in the Wales squad for next month's Women's World Cup play-off final against Norway despite being out since September through injury."
    },
    {
     "ref": "bbc_football#4",
     "title": "Five return for Wales' World Cup play-off final",
     "published": "2026-11-19T10:00:07+00:00",
     "summary": "Ceri Holland is in the Wales squad for next month's Women's World Cup play-off final against Norway despite being out since September through injury."
    },
    {
     "ref": "bbc_football#5",
     "title": "Allen to join Williams in interim Swans coaching team",
     "published": "2026-11-19T09:43:08+00:00",
     "summary": "Ashley Williams is set to join a temporary Swansea City coaching team as the Championship club attempt to fill the void left by Vitor Matos."
    },
    {
     "ref": "bbc_football#6",
     "title": "The best European strikers this century - ranked by you",
     "published": "2026-11-19T08:50:01+00:00",
     "summary": "BBC Sport reveals the top 10 European strikers this century, as voted for by you."
    },
    {
     "ref": "bbc_football#7",
     "title": "Leicester split with sponsor after porn actress row",
     "published": "2026-11-19T08:26:16+00:00",
     "summary": "A fans group had complained after BC Game appointed a porn actress as a brand ambassador."
    },
    {
     "ref": "bbc_football#8",
     "title": "Armstrong would relish Rangers switch - gossip",
     "published": "2026-11-19T08:01:39+00:00",
     "summary": "Romania-based winger eyes reunion with manager at Ibrox as Celtic hero reveals approach from Rangers..."
    },
    {
     "ref": "bbc_football#9",
     "title": "Podcast: Who should be worried in Premiership bottom four?",
     "published": "2026-11-19T08:00:00+00:00",
     "summary": "Aberdeen, Hibs, Motherwell & Killie... FIGHT!"
    },
    {
     "ref": "bbc_football#10",
     "title": "How Premier League's big six keep getting richer",
     "published": "2026-11-19T07:38:22+00:00",
     "summary": "Ten games into the Premier League season, and the top five places are dominated by big six clubs. It should come as no surprise as they have a growing advantage of hundreds of millions of pounds."
    },
    {
     "ref": "bbc_football#11",
     "title": "From Forest fringes to Glasner's go-to guy - the rise of McAtee",
     "published": "2026-11-19T07:14:11+00:00",
     "summary": "How has Nottingham Forest midfielder James McAtee gone from the bench to indispensable at the City Ground?"
    },
    {
     "ref": "bbc_football#12",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-19T07:06:18+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "Vote for the first BBC Men's Footballer of the Year",
     "published": "2026-11-19T06:30:04+00:00",
     "summary": "Jude Bellingham, Harry Kane, Kylian Mbappe, Rodri and Lamine Yamal are shortlisted for the BBC's Men's Footballer of the Year award."
    },
    {
     "ref": "bbc_football#14",
     "title": "'Best I've seen live': Watch as player scores ‘special’ goal",
     "published": "2026-11-19T05:30:23+00:00",
     "summary": "The midfielder speaks of the \"special moment\" he scored from within his own half."
    },
    {
     "ref": "bbc_football#15",
     "title": "Man Utd pursuing Como's Paz - Thursday's gossip",
     "published": "2026-11-18T22:34:05+00:00",
     "summary": "Manchester United pursuing Nico Paz, Besiktas plot move for Amad Diallo, Barcelona to rebuff offers for Alejandro Balde, plus more."
    },
    {
     "ref": "bbc_football#16",
     "title": "Buurman rescues late Chelsea win against PSG",
     "published": "2026-11-18T22:13:49+00:00",
     "summary": "Veerle Buurman scores an 87th-minute winner for Chelsea as they edge past Paris St-Germain 1-0 in the Women's Champions League to move top of the table."
    },
    {
     "ref": "bbc_football#17",
     "title": "Euro Leagues",
     "published": "2026-11-18T22:06:00+00:00",
     "summary": "Who makes the list of the Top 10 European Strikers of the Century so far?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Ukrainian FA to blame for failed drugs test - Mudryk",
     "published": "2026-11-18T21:22:18+00:00",
     "summary": "Tottenham's on-loan Chelsea winger Mykhailo Mudryk says he blames the Ukrainian Association of Football for his failed drugs test and subsequent ban."
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
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Giannis, Bam put Bucks drama aside, 'on to the next thing' after Heat win",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "Heat star Giannis Antetokounmpo said Wednesday night's win over the Bucks was like any other night, while Bam Adebayo said he has moved past his issues with Tyler Herro."
    },
    {
     "ref": "espn_nba#1",
     "title": "Redick cites fatigue as Luka's shot goes cold, Lakers' win streak ends at 9",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "Luka Doncic said his performance in Wednesday's loss to Utah, in which he shot 10-of-28 and had nine turnovers, was \"unacceptable\" as the Lakers' win streak ended at nine."
    },
    {
     "ref": "espn_nba#2",
     "title": "Reflective Lillard advised Giannis 'grass isn't always greener' before Heat trade",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "Damian Lillard, ahead of his return to Milwaukee, said his two years with the Bucks were something he needed to experience but he's happy to be back in Portland."
    },
    {
     "ref": "espn_nba#3",
     "title": "'I love the clutch': 76ers rally, improve to 11-0 in tight games",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "The 76ers improved to 11-0 in clutch games after overcoming a 17-point deficit to beat the Magic on Wednesday night."
    },
    {
     "ref": "espn_nba#4",
     "title": "Randle sounds off after Bulls rout Nets: 'That was embarrassing'",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "After a 30-point drubbing at the hands of the Bulls, veteran Julius Randle called the Nets' effort \"embarrassing\" and called out the team's pride and effort."
    },
    {
     "ref": "espn_nba#5",
     "title": "Spurs rule Harper out with hip soreness after slip on court",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "The Spurs ruled guard Dylan Harper out for Thursday's game against the Clippers due to left hip soreness following his slip on the court Tuesday."
    },
    {
     "ref": "espn_nba#6",
     "title": "Nets relive ABA glory, honoring Dr. J and the 1974 and 1976 title teams",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "The now-Brooklyn Nets honored their ABA history during Wednesday's game, welcoming back Julius Erving and other members of their 1974 and 1976 title teams."
    },
    {
     "ref": "espn_nba#7",
     "title": "👀 What the first month has revealed about all 30 teams",
     "published": "2026-11-19T07:52:31+00:00",
     "summary": "With the season's first month nearly in the books, Ben Golliver examines the biggest storyline so far for all 30 teams."
    },
    {
     "ref": "espn_nba#8",
     "title": "NBA Power Rankings: One wild stat for all 30 teams",
     "published": "2026-11-18T22:38:20+00:00",
     "summary": "Here's where every team ranks this week -- along with one remarkable stat that has fueled each franchise through one month of the season."
    },
    {
     "ref": "espn_nba#9",
     "title": "Updated NBA championship and MVP odds: Heat on the rise, Wemby moves ahead of Luka",
     "published": "2026-11-18T19:52:58+00:00",
     "summary": "The Heat have bounced back from a rough start to the season, while Victor Wembanyama is now the leader for MVP just ahead of Luka Doncic."
    },
    {
     "ref": "espn_nba#10",
     "title": "16 roto and category league stars who can help",
     "published": "2026-11-18T19:52:37+00:00",
     "summary": "Use the Player Rater to your advantage and fill out your fantasy basketball lineup with these roto and category stars."
    },
    {
     "ref": "espn_nba#11",
     "title": "Eric Karabell's notebook: Trade Walker Kessler? Klay Thompson worth rostering?",
     "published": "2026-11-18T19:52:37+00:00",
     "summary": "Eric Karabell empties out the notebook with all that he's noticing around the NBA and what it means for fantasy."
    },
    {
     "ref": "espn_nba#12",
     "title": "Steph Curry confronts his 'basketball mortality'",
     "published": "2026-11-18T00:07:43+00:00",
     "summary": "At 38, Curry is still brilliant -- but managing his body has become the biggest battle of his career."
    },
    {
     "ref": "espn_nba#13",
     "title": "Bobby Marks' NBA glossary: Trade, free agency, CBA terms to know",
     "published": "2026-11-17T22:48:52+00:00",
     "summary": "The world of NBA transactions is often difficult to decipher. Our resident GM is here to help.﻿"
    },
    {
     "ref": "espn_nba#14",
     "title": "NBA buzz: Latest news, updates and intel for the 2026-27 season",
     "published": "2026-11-17T17:47:16+00:00",
     "summary": "The NBA is back. The buzz never left. Bookmark this page for the latest news, rumblings and analysis from ESPN's insiders."
    },
    {
     "ref": "espn_nba#15",
     "title": "Is the 76ers' fast start real or a mirage? We asked execs what they're seeing",
     "published": "2026-11-17T12:29:32+00:00",
     "summary": "We talked to several coaches, executives and scouts about the Sixers in an attempt to get a consensus opinion on their start."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "After a decade of near misses, Man United finally get their man in Pochettino",
     "published": "2026-11-19T09:52:33+00:00",
     "summary": "After years of near misses and missed opportunities, Mauricio Pochettino is finally taking charge at Manchester United following a decade-long pursuit."
    },
    {
     "ref": "espn_soccer#1",
     "title": "FIFA confirms Infantino rivals for 2027 presidential election",
     "published": "2026-11-19T09:27:21+00:00",
     "summary": "FIFA have named Philippe Diallo and Kohzo Tashima as Gianni Infantino's rivals in next year's presidential election."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Sources: Man Utd to take legal action if JJ Gabriel was illegally approached",
     "published": "2026-11-19T09:27:08+00:00",
     "summary": "Manchester United are prepared to mount legal action if they find evidence that JJ Gabriel has been illegally approached by other clubs while under contract, sources have told ESPN."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Ex-U.S. coach Arena: Federation doesn't 'have a clue' how to replace Poch",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "Former U.S. men's coach and current San Jose Earthquakes manager Bruce Arena called out U.S. Soccer as the federation looks for Mauricio Pochettino's replacement."
    },
    {
     "ref": "espn_soccer#4",
     "title": "Courage striker Sanchez beats out Rodman, Wilson for NWSL MVP award",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "North Carolina Courage forward Ashley Sanchez was named the 2026 NWSL Most Valuable Player on Wednesday after scoring a record-tying 20 goals this season."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Pochettino arrives at Man United, he vows: 'You will see, give me time'",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "Mauricio Pochettino arrived at Manchester United for his first day as head coach on Wednesday but said he requires \"time\" to turn the club's fortunes around."
    },
    {
     "ref": "espn_soccer#6",
     "title": "USWNT's Emma Hayes on role in USMNT coach search: 'Through a technical lens'",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "USWNT coach Emma Hayes said that she's committed to helping with a thorough search for the next USMNT coach after the recent exit of Mauricio Pochettino."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Sam Coffey returns to USWNT roster for World Cup qualifying",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "Midfielder Sam Coffey has been named to the USWNT's World Cup qualifying roster that will assemble for training camp later this month."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Mata retires aged 38 after winning World Cup, Champions League, Euros, FA Cup",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "Former Manchester United midfielder Juan Mata has announced his retirement from football."
    },
    {
     "ref": "espn_soccer#9",
     "title": "🌎Mr. Worldwide: Meet the Brazilian soccer star who has played for clubs on six continents",
     "published": "2026-11-19T09:27:07+00:00",
     "summary": "Brazilian winger Sérgio Barboza has joined a very exclusive club by playing for teams in all six of world soccer's continental confederations."
    },
    {
     "ref": "espn_soccer#10",
     "title": "Transfer rumors, news: Premier League clubs eye Ronaldo successor Forbs",
     "published": "2026-11-19T09:12:28+00:00",
     "summary": "Club Brugge winger Carlos Forbs is being tracked by a host of Premier League clubs after taking over the Portugal No. 7 shirt from Cristiano Ronaldo. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#11",
     "title": "The NWSL has more money than ever, yet its biggest problems remain",
     "published": "2026-11-19T08:57:14+00:00",
     "summary": "As the NWSL approaches its season climax with Saturday's Championship, the league still has to deal with the same problems despite hitting major milestones."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Predicting the rest of the Premier League season: How all 20 teams will finish",
     "published": "2026-11-19T08:42:59+00:00",
     "summary": "After 10 games, we have enough data to predict every Premier League team's final spot in the standings for the 2026-27 season."
    },
    {
     "ref": "espn_soccer#13",
     "title": "Reranked: Who is the MVP for each of the top Premier League clubs?",
     "published": "2026-11-19T08:42:59+00:00",
     "summary": "Based on ability and tactical importance, we've reranked the best players at the top Premier League clubs."
    },
    {
     "ref": "espn_soccer#14",
     "title": "Chelsea's defense shines, but will scoring woes be their undoing in UWCL?",
     "published": "2026-11-18T23:07:13+00:00",
     "summary": "Chelsea have scored just four goals in five Women's Champions League matches, though they remain in strong position for the knockout rounds because of their lockdown defense."
    },
    {
     "ref": "espn_soccer#15",
     "title": "Real Madrid need more sharpness in order to compete with UWCL's best",
     "published": "2026-11-18T23:07:13+00:00",
     "summary": "Real Madrid were able to win it late against Inter, but their missed chances could haunt them."
    },
    {
     "ref": "espn_soccer#16",
     "title": "Pochettino gets a fitting, emotional send-off from USMNT",
     "published": "2026-11-18T19:24:08+00:00",
     "summary": "No United States men's national team coach has ever left quite like this. Loved by players, celebrated by fans, and gone on his own terms."
    },
    {
     "ref": "espn_soccer#17",
     "title": "USMNT player ratings: Pulisic's stunning goal gives Poch the perfect farewell",
     "published": "2026-11-18T19:24:08+00:00",
     "summary": "Christian Pulisic starred with a 9/10 rating as the USMNT gave Mauricio Pochettino a winning send-off."
    },
    {
     "ref": "espn_soccer#18",
     "title": "How fallen giants and their fans bounce back from scandal -- and relegation",
     "published": "2026-11-18T17:00:50+00:00",
     "summary": "Some of Europe's greatest teams have suffered relegation as punishment. So what might lie ahead for Man City?"
    },
    {
     "ref": "espn_soccer#19",
     "title": "World Cup 2030 Early Power Rankings: Spain still No. 1? No USMNT in top 15",
     "published": "2026-11-18T14:02:00+00:00",
     "summary": "England's statement win over Spain has shaken up ESPN's World Cup Power Rankings, but our experts still back La Roja as the team to beat."
    },
    {
     "ref": "espn_soccer#20",
     "title": "Why the USMNT doesn't need a Guardiola-tier manager after Pochettino",
     "published": "2026-11-18T08:59:30+00:00",
     "summary": "The U.S. men say goodbye to Mauricio Pochettino and hope to attract Pep Guardiola as his replacement. But is a superstar coach what this team really needs?"
    },
    {
     "ref": "espn_soccer#21",
     "title": "Who should be the USMNT's coaching candidates to succeed Pochettino?",
     "published": "2026-11-18T08:59:29+00:00",
     "summary": "With Pochettino's USMNT tenure at an end, who should U.S. Soccer be eyeing to replace him?"
    },
    {
     "ref": "espn_soccer#22",
     "title": "MLS Cup playoff Power Rankings: Can history-making Nashville be stopped?",
     "published": "2026-11-17T20:49:23+00:00",
     "summary": "Nashville just won the Supporters' Shield with a league-record points haul, so naturally it tops ESPN's MLS Cup playoff Power Rankings."
    },
    {
     "ref": "espn_soccer#23",
     "title": "Wild Card predictions: Who emerges from Orlando-Cincinnati, Seattle-RSL?",
     "published": "2026-11-17T20:49:23+00:00",
     "summary": "The Wild Card kicks off the MLS Cup playoffs on Thursday, so who will advance to Round 1? ESPN's U.S. soccer analysts make their predictions."
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
     "title": "'She held his hand and said it publicly': Messi's mother picks her son's successor - Goal.com",
     "published": "2026-11-18T20:00:36+00:00",
     "summary": "'She held his hand and said it publicly': Messi's mother picks her son's successor Goal.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami: Luis Suarez wants to retire alongside Lionel Messi - Foot-Africa.com",
     "published": "2026-11-18T20:00:00+00:00",
     "summary": "Inter Miami: Luis Suarez wants to retire alongside Lionel Messi Foot-Africa.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami CF Teams Up with Publix for Second Annual Shop with a Star Initiative to Support Families During the Holiday Season - Inter Miami CF",
     "published": "2026-11-18T19:53:15+00:00",
     "summary": "Inter Miami CF Teams Up with Publix for Second Annual Shop with a Star Initiative to Support Families During the Holiday Season Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "LaLiga: Suarez names Barcelona player that surprises him - Daily Post Nigeria",
     "published": "2026-11-18T19:08:30+00:00",
     "summary": "LaLiga: Suarez names Barcelona player that surprises him Daily Post Nigeria"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "‘On a Personal Level’—Luis Suarez Provides Insight Into Lionel Messi’s Retirement - Sports Illustrated",
     "published": "2026-11-18T19:00:01+00:00",
     "summary": "‘On a Personal Level’—Luis Suarez Provides Insight Into Lionel Messi’s Retirement Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami CF Announces Second Edition of Winter Camps - Inter Miami CF",
     "published": "2026-11-18T18:06:52+00:00",
     "summary": "Inter Miami CF Announces Second Edition of Winter Camps Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Columbus Crew: Can they upset Inter Miami & Lionel Messi? - MLSsoccer.com",
     "published": "2026-11-18T18:05:06+00:00",
     "summary": "Columbus Crew: Can they upset Inter Miami & Lionel Messi? MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS playoff tiers: Title or bust for Lionel Messi’s Inter Miami as Nashville SC chase the double - Goal.com",
     "published": "2026-11-18T17:59:15+00:00",
     "summary": "MLS playoff tiers: Title or bust for Lionel Messi’s Inter Miami as Nashville SC chase the double Goal.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "International Duty Roundup: Recapping the November International Window - Inter Miami CF",
     "published": "2026-11-18T17:06:52+00:00",
     "summary": "International Duty Roundup: Recapping the November International Window Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi and Inter Miami to begin title defence against Columbus — Channel NewsAsia - UA.NEWS",
     "published": "2026-11-18T16:22:23+00:00",
     "summary": "Messi and Inter Miami to begin title defence against Columbus — Channel NewsAsia UA.NEWS"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups - The Lufkin Daily News",
     "published": "2026-11-18T16:00:56+00:00",
     "summary": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups The Lufkin Daily News"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-11-18T16:00:56+00:00",
     "summary": "Soccer-All eyes on Messi and Inter Miami as they chase back-to-back MLS Cups The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "GTA VI Is Here: Miami Teams Become Vice City - Sofascore",
     "published": "2026-11-18T14:04:02+00:00",
     "summary": "GTA VI Is Here: Miami Teams Become Vice City Sofascore"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 - FOX Sports",
     "published": "2026-11-18T00:30:46+00:00",
     "summary": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 - FOX Sports",
     "published": "2026-11-18T00:17:59+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF vs. Philadelphia - Live Score - April 24, 2027 - FOX Sports",
     "published": "2026-11-18T00:17:50+00:00",
     "summary": "Inter Miami CF vs. Philadelphia - Live Score - April 24, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF vs. Charlotte FC - Live Score - April 10, 2027 - FOX Sports",
     "published": "2026-11-18T00:16:31+00:00",
     "summary": "Inter Miami CF vs. Charlotte FC - Live Score - April 10, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Will they stop together? Suárez reveals the secret delaying Messi's retirement - Goal.com",
     "published": "2026-11-17T20:37:36+00:00",
     "summary": "Will they stop together? Suárez reveals the secret delaying Messi's retirement Goal.com"
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