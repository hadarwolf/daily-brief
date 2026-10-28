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
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T17:30:00Z",
     "home": "Sassuolo",
     "away": "Lazio",
     "status": "FINISHED",
     "score": "2-6"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T19:45:00Z",
     "home": "Torino",
     "away": "Como 1907",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-27T19:45:00Z",
     "home": "Roma",
     "away": "Cagliari",
     "status": "FINISHED",
     "score": "4-2"
    }
   ],
   "today": [
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Milan",
     "away": "Bologna",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Venezia FC",
     "away": "Inter",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Parma",
     "away": "Udinese",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T19:45:00Z",
     "home": "Genoa",
     "away": "Juventus",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T19:45:00Z",
     "home": "Monza",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Fluminense",
     "away": "Internacional",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Bragantino",
     "away": "Chapecoense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Santos",
     "away": "Palmeiras",
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
     "played": 8,
     "pts": 21,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 8,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 8,
     "pts": 16,
     "gd": 16
    },
    {
     "pos": 4,
     "team": "Liverpool",
     "played": 8,
     "pts": 15,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Chelsea",
     "played": 8,
     "pts": 13,
     "gd": 2
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 8,
     "pts": 11,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 10,
     "pts": 27,
     "gd": 29
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 10,
     "pts": 25,
     "gd": 12
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 10,
     "pts": 24,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 10,
     "pts": 20,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 10,
     "pts": 19,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 10,
     "pts": 17,
     "gd": 0
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 7,
     "pts": 17,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 7,
     "pts": 17,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 7,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "RB Leipzig",
     "played": 7,
     "pts": 12,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 7,
     "pts": 12,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 9,
     "pts": 25,
     "gd": 15
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 8,
     "pts": 22,
     "gd": 13
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 9,
     "pts": 21,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Como 1907",
     "played": 9,
     "pts": 20,
     "gd": 9
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 8,
     "pts": 18,
     "gd": 9
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 8,
     "pts": 14,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 8,
     "pts": 17,
     "gd": 7
    },
    {
     "pos": 2,
     "team": "Stade Rennais",
     "played": 8,
     "pts": 16,
     "gd": 4
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 8,
     "pts": 15,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Monaco",
     "played": 8,
     "pts": 15,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Olympique Lyon",
     "played": 8,
     "pts": 14,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Paris FC",
     "played": 8,
     "pts": 14,
     "gd": 4
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
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
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "FINISHED",
      "score": "2-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
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
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "FINISHED",
      "score": "1-2"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
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
    "home": "Boston Celtics",
    "away": "Brooklyn Nets",
    "score": "125-124",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Detroit Pistons",
    "score": "111-97",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Sacramento Kings",
    "score": "130-103",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Portland Trail Blazers",
    "score": "129-136",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-10-28T23:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-10-28T23:00:00Z"
   },
   {
    "home": "Detroit Pistons",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-10-28T23:00:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-10-28T23:00:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-10-28T23:30:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-10-29T00:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-10-29T00:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-10-29T00:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-10-29T00:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-10-29T01:00:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-10-29T01:30:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-10-29T02:30:00Z"
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
     "kickoff_utc": "2026-10-28T23:30:00",
     "home": "Inter Miami",
     "away": "FC Cincinnati",
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
     "title": "When is the EFL Cup quarter-final draw?",
     "published": "2026-10-28T08:25:29+00:00",
     "summary": "The quarter-final draw of the EFL Cup takes place on Wednesday, 28 October."
    },
    {
     "ref": "bbc_football#1",
     "title": "Podcast: McInnes returns to Tynecastle - it's not going to be pretty",
     "published": "2026-10-28T08:00:00+00:00",
     "summary": "Tynecastle return and pressure at Hibs - we look ahead to a full Premiership card."
    },
    {
     "ref": "bbc_football#2",
     "title": "Rangers' Shankland set for December return - gossip",
     "published": "2026-10-28T07:29:37+00:00",
     "summary": "Rangers captain set for December return as former Celtic defender predicts January exit from Parkhead."
    },
    {
     "ref": "bbc_football#3",
     "title": "Lawlor delighted after beating 'best team in the country'",
     "published": "2026-10-28T07:28:41+00:00",
     "summary": "Fleetwood Town manager Matt Lawlor could not hide his delight after seeing his team knock Premier League champions Arsenal out of the EFL Cup on penalties."
    },
    {
     "ref": "bbc_football#4",
     "title": "McInnes' Tynecastle return, Goodwin's entertainers & Reedijk eyes first win",
     "published": "2026-10-28T07:10:28+00:00",
     "summary": "BBC Scotland picks out three things to watch in an intriguing midweek Scottish Premiership card."
    },
    {
     "ref": "bbc_football#5",
     "title": "Play the 100th edition of Who am I? Plus today's other quizzes",
     "published": "2026-10-28T06:33:14+00:00",
     "summary": "Test your football knowledge with today's Who Am I?, Five in Five and Brainteaser quizzes."
    },
    {
     "ref": "bbc_football#6",
     "title": "'Biggest night in club's history' for fearless Fleetwood",
     "published": "2026-10-28T00:39:30+00:00",
     "summary": "A whopping 83 league places separated Fleetwood from Arsenal, yet the hosts booked their place in the Carabao Cup quarter-final thanks to their penalty shootout win over the Gunners."
    },
    {
     "ref": "bbc_football#7",
     "title": "Dowman sees red as Arsenal dumped out, but did Arteta go too far?",
     "published": "2026-10-28T00:34:31+00:00",
     "summary": "A shocking defeat, a red card card, a penalty-shootout and a drone tell the story of Arsenal's dramatic loss to League Two Fleetwood Town in the last-16 of the Carabao Cup."
    },
    {
     "ref": "bbc_football#8",
     "title": "Fleetwood-Arsenal halted for eight minutes because of drone",
     "published": "2026-10-27T23:54:14+00:00",
     "summary": "Arsenal's match with Fleetwood Town in the last-16 of the Carabao Cup is delayed for more than eight minutes after a drone is spotted above the stadium during the match."
    },
    {
     "ref": "bbc_football#9",
     "title": "Where does Fleetwood beating Arsenal rank in biggest cup upsets?",
     "published": "2026-10-27T23:35:11+00:00",
     "summary": "BBC Sport looks at the history of the biggest FA Cup and League Cup upsets after Fleetwood Town's shock win against Arsenal."
    },
    {
     "ref": "bbc_football#10",
     "title": "Blackpool beat Villa and Vale thrash Man City in Trophy",
     "published": "2026-10-27T22:31:57+00:00",
     "summary": "Blackpool beat Aston Villa and Port Vale put five past Manchester City's youngsters, plus Tuesday's EFL Trophy round-up."
    },
    {
     "ref": "bbc_football#11",
     "title": "Barcelona fined £503 over approach for Alvarez",
     "published": "2026-10-27T21:38:20+00:00",
     "summary": "Barcelona are fined 602 euros (£503) following a complaint by Atletico Madrid over contact the club made with striker Julian Alvarez."
    },
    {
     "ref": "bbc_football#12",
     "title": "Liverpool keen on Stuttgart defender Jeltsch - Wednesday's gossip",
     "published": "2026-10-27T21:10:47+00:00",
     "summary": "Liverpool are keen on Stuttgart's promising defender Finn Jeltsch, Chelsea still want to sign Bournemouth's Alex Scott; Arsenal, Tottenham and Newcastle are among the clubs keeping tabs on Germany striker Nicolo Tresoldi, plus more."
    },
    {
     "ref": "bbc_football#13",
     "title": "Carrick stays at Man Utd & Kane wins Ballon d’Or",
     "published": "2026-10-27T20:46:00+00:00",
     "summary": "Carrick stays at United. Kane wins Ballon d’Or, Putellas claims third Women’s award."
    },
    {
     "ref": "bbc_football#14",
     "title": "Man Utd stick with Carrick - inside a turbulent 48 hours at Old Trafford",
     "published": "2026-10-27T18:56:36+00:00",
     "summary": "BBC Sport looks at the 48 hours that led to Manchester United deciding to keep under-pressure Michael Carrick as their head coach for Saturday's trip to Chelsea."
    },
    {
     "ref": "bbc_football#15",
     "title": "Wenger's 'daylight' offside trial unlikely to be extended",
     "published": "2026-10-27T17:21:26+00:00",
     "summary": "Arsene Wenger's \"daylight\" offside trial is unlikely to be extended after receiving a lack of support at the Ifab assessment panels."
    },
    {
     "ref": "bbc_football#16",
     "title": "Where are Celtic & O'Neill a year after Rodgers exit?",
     "published": "2026-10-27T17:15:11+00:00",
     "summary": "How should Martin O'Neill and Celtic be assessed a year since his arrival in place of Brendan Rodgers as manager?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Where are Celtic & O'Neill a year after Rodgers exit?",
     "published": "2026-10-27T17:15:11+00:00",
     "summary": "How should Martin O'Neill and Celtic be assessed a year since his arrival in place of Brendan Rodgers as manager?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Captain Xhaka allowed to play for Switzerland again",
     "published": "2026-10-27T17:00:58+00:00",
     "summary": "Granit Xhaka and Breel Embolo will be allowed to return to action for Switzerland next month following an investigation into forged Covid-19 vaccination certificates."
    },
    {
     "ref": "bbc_football#19",
     "title": "Milan derby to be shown live on BBC Two",
     "published": "2026-10-27T16:38:17+00:00",
     "summary": "The first Milan derby of the season takes place on Saturday, 31 October and it will be live on BBC Two."
    },
    {
     "ref": "bbc_football#20",
     "title": "McInnes admits feeling 'guilt' over leaving Hearts for Rangers",
     "published": "2026-10-27T15:31:48+00:00",
     "summary": "Rangers manager Derek McInnes admits feeling \"guilt\" about leaving Hearts for Ibrox in the summer and accepts the rough reception that could come his way when he returns to Tynecastle on Wednesday."
    },
    {
     "ref": "bbc_football#21",
     "title": "McInnes admits 'guilt' over Hearts exit for Rangers",
     "published": "2026-10-27T15:31:48+00:00",
     "summary": "Rangers manager Derek McInnes admits feeling \"guilt\" about leaving Hearts for Ibrox in the summer and accepts the rough reception that could come his way when he returns to Tynecastle on Wednesday."
    },
    {
     "ref": "bbc_football#22",
     "title": "Man City players can block out 'noise' of away fans - Maresca",
     "published": "2026-10-27T15:27:27+00:00",
     "summary": "Manchester City suffered a first Premier League defeat of the season at a boisterous Aston Villa, amid persistent reminders of their financial charges."
    },
    {
     "ref": "bbc_football#23",
     "title": "FAW boss renews call for Infantino to step down",
     "published": "2026-10-27T15:20:51+00:00",
     "summary": "Chief executive Noel Mooney says the Football Association of Wales retains the view that Fifa president Gianni Infantino should step down."
    },
    {
     "ref": "bbc_football#24",
     "title": "How have 'best team north or south of border' last season lost six in a row?",
     "published": "2026-10-27T15:12:57+00:00",
     "summary": "BBC Scotland analyses Motherwell's plight to find out what's not clicking at Fir Park."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Spends the entire year in Miami: Benatia mocks Messi's Ballon d'Or ranking - Goal.com",
     "published": "2026-10-28T07:11:18+00:00",
     "summary": "Spends the entire year in Miami: Benatia mocks Messi's Ballon d'Or ranking Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Spends the entire year in Miami: Benatia mocks Messi's Ballon d'Or ranking - Goal.com",
     "published": "2026-10-28T07:10:16+00:00",
     "summary": "Spends the entire year in Miami: Benatia mocks Messi's Ballon d'Or ranking Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami vs FC Cincinnati Prediction: Miami Will Feast On Cincinnati’s Defensive Problems - Telecom Asia Sport",
     "published": "2026-10-28T06:48:23+00:00",
     "summary": "Inter Miami vs FC Cincinnati Prediction: Miami Will Feast On Cincinnati’s Defensive Problems Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-28T06:41:57+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Will Lionel Messi Play in Inter Miami vs FC Cincinnati MLS 2026 Match? - LatestLY",
     "published": "2026-10-28T05:32:51+00:00",
     "summary": "Will Lionel Messi Play in Inter Miami vs FC Cincinnati MLS 2026 Match? LatestLY"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami CF vs FC Cincinnati prediction and betting tips 28 October 2026 - Dailysports",
     "published": "2026-10-28T05:32:04+00:00",
     "summary": "Inter Miami CF vs FC Cincinnati prediction and betting tips 28 October 2026 Dailysports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MIAvsCIN 10-28-2026 | MLS Match Recap - MLSsoccer.com",
     "published": "2026-10-28T05:02:53+00:00",
     "summary": "MIAvsCIN 10-28-2026 | MLS Match Recap MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Se UE Cornellà vs. Inter Milan (Quarterfinals) - Disney Plus",
     "published": "2026-10-28T03:30:56+00:00",
     "summary": "Se UE Cornellà vs. Inter Milan (Quarterfinals) Disney Plus"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami CF v FC Cincinnati Odds - FanDuel Sportsbook",
     "published": "2026-10-28T03:20:32+00:00",
     "summary": "Inter Miami CF v FC Cincinnati Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Red Bulls, chasing East's final playoff spot, out to cool off Revs - Mahoning Matters",
     "published": "2026-10-28T02:03:09+00:00",
     "summary": "Red Bulls, chasing East's final playoff spot, out to cool off Revs Mahoning Matters"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi, Miami to face Evander, Cincinnati in high-stakes clash - Field Level Media",
     "published": "2026-10-28T01:54:06+00:00",
     "summary": "Lionel Messi, Miami to face Evander, Cincinnati in high-stakes clash Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi, Miami to face Evander, Cincinnati in high-stakes clash - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-10-28T01:43:02+00:00",
     "summary": "Lionel Messi, Miami to face Evander, Cincinnati in high-stakes clash The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami’s Concacaf Champions Cup 2027 Qualification: What Messi’s Team Needs in the Final MLS Games - Pasión Fútbol",
     "published": "2026-10-28T01:04:45+00:00",
     "summary": "Inter Miami’s Concacaf Champions Cup 2027 Qualification: What Messi’s Team Needs in the Final MLS Games Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami Injury Update: Kily González Rules Out Fricio Caicedo Against FC Cincinnati - Pasión Fútbol",
     "published": "2026-10-28T00:54:01+00:00",
     "summary": "Inter Miami Injury Update: Kily González Rules Out Fricio Caicedo Against FC Cincinnati Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-28T00:53:17+00:00",
     "summary": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami Could Replace Sergio Reguilón With Facundo Mura Against FC Cincinnati - Pasión Fútbol",
     "published": "2026-10-28T00:51:21+00:00",
     "summary": "Inter Miami Could Replace Sergio Reguilón With Facundo Mura Against FC Cincinnati Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami Misses Out on MLS Team of the Matchday After Defeat to New York Red Bulls - Pasión Fútbol",
     "published": "2026-10-28T00:44:52+00:00",
     "summary": "Inter Miami Misses Out on MLS Team of the Matchday After Defeat to New York Red Bulls Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Gonzalo Luján Sends a Message Before Inter Miami vs. FC Cincinnati: “We Must Keep the Same Intensity” - Pasión Fútbol",
     "published": "2026-10-28T00:40:52+00:00",
     "summary": "Gonzalo Luján Sends a Message Before Inter Miami vs. FC Cincinnati: “We Must Keep the Same Intensity” Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami Could Drop Casemiro and Sergio Reguilón After Defeat to New York Red Bulls - Pasión Fútbol",
     "published": "2026-10-27T23:52:33+00:00",
     "summary": "Inter Miami Could Drop Casemiro and Sergio Reguilón After Defeat to New York Red Bulls Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "FC Cincinnati meet Messi and Miami with a chance to clinch - Cincinnati Soccer Talk",
     "published": "2026-10-27T23:50:37+00:00",
     "summary": "FC Cincinnati meet Messi and Miami with a chance to clinch Cincinnati Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "How to watch Inter Miami vs FC Cincinnati match in the USA: Live stream and TV for 2026 MLS season - World Soccer Talk",
     "published": "2026-10-27T23:46:03+00:00",
     "summary": "How to watch Inter Miami vs FC Cincinnati match in the USA: Live stream and TV for 2026 MLS season World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami vs FC Cincinnati Preview: Messi and Miami Look to Bounce Back - Hooligan Soccer",
     "published": "2026-10-27T23:30:00+00:00",
     "summary": "Inter Miami vs FC Cincinnati Preview: Messi and Miami Look to Bounce Back Hooligan Soccer"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "FC Cincinnati continues playoff push on the road against Messi, Miami - Cincinnati Enquirer",
     "published": "2026-10-27T23:09:00+00:00",
     "summary": "FC Cincinnati continues playoff push on the road against Messi, Miami Cincinnati Enquirer"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "FC Cincinnati continues playoff push on the road against Messi, Miami - Yahoo Sports",
     "published": "2026-10-27T22:09:03+00:00",
     "summary": "FC Cincinnati continues playoff push on the road against Messi, Miami Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MATCH PREVIEW: Inter Miami CF Hosts FC Cincinnati on Wednesday - Inter Miami CF",
     "published": "2026-10-27T20:36:59+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Hosts FC Cincinnati on Wednesday Inter Miami CF"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija scores nine fourth-quarter points - NBC Sports",
     "published": "2026-10-28T07:17:23+00:00",
     "summary": "Deni Avdija scores nine fourth-quarter points NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 - Seattle Post-Intelligencer",
     "published": "2026-10-28T06:32:15+00:00",
     "summary": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 Seattle Post-Intelligencer"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers - KMJ Now",
     "published": "2026-10-28T06:27:30+00:00",
     "summary": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers KMJ Now"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija dials from long distance, 10/27/2026 - Yahoo Sports",
     "published": "2026-10-28T06:09:11+00:00",
     "summary": "Deni Avdija dials from long distance, 10/27/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija gets the hoop and the harm - ESPN Philippines",
     "published": "2026-10-28T05:38:05+00:00",
     "summary": "Deni Avdija gets the hoop and the harm ESPN Philippines"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time - Ynetnews",
     "published": "2026-10-27T01:32:22+00:00",
     "summary": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Ben Saraf game log — 2026-27 / NBA - BasketNews.com",
     "published": "2026-10-27T01:28:18+00:00",
     "summary": "Ben Saraf game log — 2026-27 / NBA BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) - Howl.Link",
     "published": "2026-10-26T18:48:57+00:00",
     "summary": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) Howl.Link"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Nets' Ben Saraf: Sent to Long Island - CBS Sports",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Nets' Ben Saraf: Sent to Long Island CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Ben Saraf News: Sent to Long Island - RotoWire",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Ben Saraf News: Sent to Long Island RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster - Yahoo Sports",
     "published": "2026-10-25T14:15:25+00:00",
     "summary": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster Yahoo Sports"
    }
   ]
  }
 ]
}
</input>