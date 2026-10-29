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
  "home": "Portland Trail Blazers",
  "away": "Memphis Grizzlies",
  "kickoff_utc": "2026-10-30T02:00:00.000Z"
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
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Parma",
     "away": "Udinese",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Milan",
     "away": "Bologna",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T17:30:00Z",
     "home": "Venezia FC",
     "away": "Inter",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T19:45:00Z",
     "home": "Genoa",
     "away": "Juventus",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-28T19:45:00Z",
     "home": "Monza",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "1-4"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Santos",
     "away": "Palmeiras",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Fluminense",
     "away": "Internacional",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-28T22:30:00Z",
     "home": "Bragantino",
     "away": "Chapecoense",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T00:30:00Z",
     "home": "Bahia",
     "away": "São Paulo",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T00:30:00Z",
     "home": "Clube do Remo",
     "away": "Botafogo",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-29T17:30:00Z",
     "home": "Frosinone",
     "away": "Lecce",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-29T19:45:00Z",
     "home": "Fiorentina",
     "away": "Atalanta",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T22:30:00Z",
     "home": "Mineiro",
     "away": "Cruzeiro",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T23:00:00Z",
     "home": "Vasco da Gama",
     "away": "Flamengo",
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
     "team": "Inter",
     "played": 9,
     "pts": 25,
     "gd": 15
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 9,
     "pts": 25,
     "gd": 15
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
     "played": 9,
     "pts": 18,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Napoli",
     "played": 9,
     "pts": 14,
     "gd": 6
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
    "home": "Atlanta Hawks",
    "away": "Miami Heat",
    "score": "117-129",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Washington Wizards",
    "score": "121-111",
    "status": "Final"
   },
   {
    "home": "Detroit Pistons",
    "away": "Charlotte Hornets",
    "score": "97-89",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Philadelphia 76ers",
    "score": "109-114",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Orlando Magic",
    "score": "129-99",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "New York Knicks",
    "score": "127-133",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Houston Rockets",
    "score": "100-132",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Golden State Warriors",
    "score": "114-119",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Denver Nuggets",
    "score": "91-104",
    "status": "Final"
   },
   {
    "home": "Utah Jazz",
    "away": "San Antonio Spurs",
    "score": "111-117",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Oklahoma City Thunder",
    "score": "120-96",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Los Angeles Lakers",
    "score": "87-103",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-10-30T00:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-10-30T00:00:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-10-30T02:00:00Z"
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
     "kickoff_utc": "2026-11-02T00:00:00",
     "home": "New England Revolution",
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
     "title": "Mourinho and chaos - is Real Madrid boss misunderstood?",
     "published": "2026-10-29T08:07:22+00:00",
     "summary": "Jose Mourinho has spent the past decade seeing other managers hailed as geniuses, but did Real Madrid's win at Barcelona last week show he's been misunderstood?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Podcast: Midweek mayhem in the SPFL - The full debrief",
     "published": "2026-10-29T08:00:00+00:00",
     "summary": "Tynecastle drama, Celtic held and mounting pressure at Aberdeen."
    },
    {
     "ref": "bbc_football#2",
     "title": "'Leggy' Rangers frustrate Makhanya - gossip",
     "published": "2026-10-29T07:40:56+00:00",
     "summary": "Rangers scorer frustrated as Celtic manager plays down hopes of winger getting starts."
    },
    {
     "ref": "bbc_football#3",
     "title": "Chiellini guidance to Leeds 'rock' - could Muharemovic be signing of season?",
     "published": "2026-10-29T06:27:10+00:00",
     "summary": "Having cost Leeds United an 'eye-watering' fee, Tarik Muharemovic has impressed so much that some fear the club face a battle to keep him."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-29T06:23:21+00:00",
     "summary": "Test your football knowledge with today's Who Am I?, Five in Five and Brainteaser quizzes."
    },
    {
     "ref": "bbc_football#5",
     "title": "'Stutter' penalty back in the spotlight after Barco miss costs Chelsea",
     "published": "2026-10-29T00:17:48+00:00",
     "summary": "The stuttering run-up for penalties has been called 'naive' as players continue to try to deceive goalkeepers with a stop-start approach - but why?"
    },
    {
     "ref": "bbc_football#6",
     "title": "'He could be happier' - why is Estevao becoming Chelsea's forgotten man?",
     "published": "2026-10-29T00:05:21+00:00",
     "summary": "Estevao plays no part as Chelsea lose on penalties to Liverpool in the Carabao Cup - so where does this leave the exciting Brazilian with Xabi Alonso?"
    },
    {
     "ref": "bbc_football#7",
     "title": "Watch: Sportscene - all of Wednesday's Premiership goals",
     "published": "2026-10-28T23:58:05+00:00",
     "summary": "With Hearts v Rangers, Celtic v Dundee Utd and masses of midweek action"
    },
    {
     "ref": "bbc_football#8",
     "title": "How unbeaten Chelsea are getting back to their best",
     "published": "2026-10-28T23:17:33+00:00",
     "summary": "Chelsea are getting back to their best following their 2-0 Women's Champions League win over Roma - so how have they built success in their unbeaten run?"
    },
    {
     "ref": "bbc_football#9",
     "title": "How unbeaten Chelsea are getting back to their best",
     "published": "2026-10-28T23:17:33+00:00",
     "summary": "Chelsea are getting back to their best following their 2-0 Women's Champions League win over Roma - so how have they built success in their unbeaten run?"
    },
    {
     "ref": "bbc_football#10",
     "title": "'He knows his role' - Rulli provides heroics but no worries for Donnarumma",
     "published": "2026-10-28T23:10:06+00:00",
     "summary": "Geronimo Rulli's penalty shootout heroics may have put the pressure on Gianluigi Donnarumma at Manchester City, but manager Enzo Maresca has no doubt about his number one."
    },
    {
     "ref": "bbc_football#11",
     "title": "Fleetwood to face Everton or Newcastle in last eight",
     "published": "2026-10-28T22:45:35+00:00",
     "summary": "League Two Fleetwood Town will face Everton or Newcastle United at Highbury in the quarter-finals of the EFL Cup."
    },
    {
     "ref": "bbc_football#12",
     "title": "Russo scores hat-trick as Arsenal beat Benfica",
     "published": "2026-10-28T22:19:57+00:00",
     "summary": "Alessia Russo becomes England's all-time leading goalscorer in the Women's Champions League with a hat-trick in Arsenal's 3-0 win over Benfica."
    },
    {
     "ref": "bbc_football#13",
     "title": "Kompany discharged from hospital following collapse",
     "published": "2026-10-28T21:37:08+00:00",
     "summary": "Bayern Munich head coach Vincent Kompany is discharged from hospital and \"doing well\" following his collapse at the club's training ground, according to a club board member."
    },
    {
     "ref": "bbc_football#14",
     "title": "Sancho rejects Getafe - Thursday's gossip",
     "published": "2026-10-28T21:34:36+00:00",
     "summary": "Free agent Jadon Sancho turns down a move to La Liga, Desire Doue is in talks with Paris St-Germain about a contract extension, and Everton are considering a move for Marcus Rashford."
    },
    {
     "ref": "bbc_football#15",
     "title": "Chelsea continue unbeaten start with win over Roma",
     "published": "2026-10-28T20:36:25+00:00",
     "summary": "Chelsea's strong start to the season continues with victory over Roma in the Women's Champions League."
    },
    {
     "ref": "bbc_football#16",
     "title": "Sesko ruled out until January with shin injury",
     "published": "2026-10-28T19:57:04+00:00",
     "summary": "Manchester United striker Benjamin Sesko is expected to be out until at least January with a shin injury."
    },
    {
     "ref": "bbc_football#17",
     "title": "Wrexham fined for fielding ineligible players",
     "published": "2026-10-28T18:22:42+00:00",
     "summary": "The English Football League fines Wrexham £75k for two instances of fielding ineligible players."
    },
    {
     "ref": "bbc_football#18",
     "title": "Burnley appoint ex-Basel boss Celestini as head coach",
     "published": "2026-10-28T18:16:58+00:00",
     "summary": "Burnley appoint Fabio Celestini as their head coach, four days after the departure of Nicky Hayen."
    },
    {
     "ref": "bbc_football#19",
     "title": "72+: The EFL Podcast",
     "published": "2026-10-28T16:32:00+00:00",
     "summary": "Fleetwood Town manager Matt Lawlor chats after knocking Arsenal out of the League Cup."
    },
    {
     "ref": "bbc_football#20",
     "title": "Ousmane Dembele, Winchester City and the Ballon d'Or",
     "published": "2026-10-28T16:01:47+00:00",
     "summary": "France and PSG star Ousmane Dembele's unique connection to non-league side Winchester City resurfaces at Monday's Ballon d'Or ceremony."
    },
    {
     "ref": "bbc_football#21",
     "title": "Johnstone Burgh to play two cup ties simultaneously after schedule clash",
     "published": "2026-10-28T15:34:02+00:00",
     "summary": "Scottish fifth-tier club Johnstone Burgh are forced to play two cup ties on the same day, with the kick-offs only half an hour apart."
    },
    {
     "ref": "bbc_football#22",
     "title": "McClean leaves Derry City after contract dispute",
     "published": "2026-10-28T13:25:57+00:00",
     "summary": "James McClean says Derry City \"will always hold a special place in my heart\" after mutually agreeing to terminate his contract with immediate effect."
    },
    {
     "ref": "bbc_football#23",
     "title": "All Spanish cup matches suspended after Madrid train collision",
     "published": "2026-10-28T13:25:48+00:00",
     "summary": "All 24 matches in the Spanish Copa del Rey due to take place on Wednesday are suspended as a mark of respect after at least 68 people were killed in a train crash near Madrid."
    },
    {
     "ref": "bbc_football#24",
     "title": "MacAnthony promises to sell if Peterborough not in top 10",
     "published": "2026-10-28T13:14:22+00:00",
     "summary": "Peterborough United chairman and majority owner Darragh MacAnthony \"promises\" to sell the club if they are not in the League One top 10 by February."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami CF - FC Cincinnati 1 - 1 | GOAL - Kenji Mboma Dem - OneFootball",
     "published": "2026-10-29T06:33:45+00:00",
     "summary": "Inter Miami CF - FC Cincinnati 1 - 1 | GOAL - Kenji Mboma Dem OneFootball"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-29T05:18:05+00:00",
     "summary": "Inter Miami vs Cincinnati: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami vs FC Cincinnati - Matchday Album - FC Cincinnati",
     "published": "2026-10-29T04:09:55+00:00",
     "summary": "Inter Miami vs FC Cincinnati - Matchday Album FC Cincinnati"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Miami 2-2 Cincinnati (Oct 28, 2026) Game Analysis - ESPN",
     "published": "2026-10-29T03:52:47+00:00",
     "summary": "Miami 2-2 Cincinnati (Oct 28, 2026) Game Analysis ESPN"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi is angry that Inter Miami dropped points again, leaving their place in the 2027 CONCACAF Champions Cup still uncertain. - Vietnam.vn",
     "published": "2026-10-29T03:38:17+00:00",
     "summary": "Messi is angry that Inter Miami dropped points again, leaving their place in the 2027 CONCACAF Champions Cup still uncertain. Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "FC Cincinnati at Inter Miami CF - MLS Game Summary - Oct 28, 2026 - USA Today",
     "published": "2026-10-29T03:30:27+00:00",
     "summary": "FC Cincinnati at Inter Miami CF - MLS Game Summary - Oct 28, 2026 USA Today"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Missing out on valuable points: Inter Miami nets late goal to tie FC Cincinnati 2-2 - WKRC",
     "published": "2026-10-29T03:29:27+00:00",
     "summary": "Missing out on valuable points: Inter Miami nets late goal to tie FC Cincinnati 2-2 WKRC"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "No goal for Messi as Inter Miami secures draw with FC Cincinnati in MLS - Sportstar",
     "published": "2026-10-29T03:16:34+00:00",
     "summary": "No goal for Messi as Inter Miami secures draw with FC Cincinnati in MLS Sportstar"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "RECAP | Inter Miami CF 2, FC Cincinnati 2 - FC Cincinnati",
     "published": "2026-10-29T03:11:59+00:00",
     "summary": "RECAP | Inter Miami CF 2, FC Cincinnati 2 FC Cincinnati"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "FC Cincinnati draws with Messi, Miami on goals by Mboma Dem, Gidi - Cincinnati Enquirer",
     "published": "2026-10-29T02:57:57+00:00",
     "summary": "FC Cincinnati draws with Messi, Miami on goals by Mboma Dem, Gidi Cincinnati Enquirer"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MATCH RECAP: Inter Miami CF Draws Against FC Cincinnati - Inter Miami CF",
     "published": "2026-10-29T02:38:44+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Draws Against FC Cincinnati Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "HIGHLIGHTS | Inter Miami CF vs. FC Cincinnati | October 28, 2026 - FC Cincinnati",
     "published": "2026-10-29T02:34:50+00:00",
     "summary": "HIGHLIGHTS | Inter Miami CF vs. FC Cincinnati | October 28, 2026 FC Cincinnati"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami nearly collapses, ties FC Cincinnati 2-2 thanks to equalizer in 90th minute - Yahoo Sports",
     "published": "2026-10-29T02:31:00+00:00",
     "summary": "Inter Miami nearly collapses, ties FC Cincinnati 2-2 thanks to equalizer in 90th minute Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi’s sweet interaction with a child wins over fans before Inter Miami match - MARCA",
     "published": "2026-10-29T02:31:00+00:00",
     "summary": "Messi’s sweet interaction with a child wins over fans before Inter Miami match MARCA"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami stumble to draw against Cincinnati - Free Malaysia Today",
     "published": "2026-10-29T02:19:16+00:00",
     "summary": "Inter Miami stumble to draw against Cincinnati Free Malaysia Today"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 - WSVN",
     "published": "2026-10-29T02:04:08+00:00",
     "summary": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 WSVN"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF vs. FC Cincinnati - Game Highlights - ESPN",
     "published": "2026-10-29T02:00:38+00:00",
     "summary": "Inter Miami CF vs. FC Cincinnati - Game Highlights ESPN"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami CF - FC Cincinnati 2 - 2 | GOAL - Riquelme Fillipi, Major League Soccer - Forza Football",
     "published": "2026-10-29T01:59:19+00:00",
     "summary": "Inter Miami CF - FC Cincinnati 2 - 2 | GOAL - Riquelme Fillipi, Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Highlights: Inter Miami CF 2-2 FC Cincinnati (MLS), Major League Soccer - Forza Football",
     "published": "2026-10-29T01:59:12+00:00",
     "summary": "Highlights: Inter Miami CF 2-2 FC Cincinnati (MLS), Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Photo Gallery: Inter Miami vs. FC Cincinnati | Wednesday, Oct. 28, 2026 - Miami Herald",
     "published": "2026-10-29T01:58:25+00:00",
     "summary": "Photo Gallery: Inter Miami vs. FC Cincinnati | Wednesday, Oct. 28, 2026 Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF - FC Cincinnati 1 - 0 | GOAL - Luis Suárez, Major League Soccer - Forza Football",
     "published": "2026-10-29T01:58:00+00:00",
     "summary": "Inter Miami CF - FC Cincinnati 1 - 0 | GOAL - Luis Suárez, Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 - Times Union",
     "published": "2026-10-29T01:55:00+00:00",
     "summary": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 Times Union"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "HIGHLIGHTS: Inter Miami CF vs. FC Cincinnati | October 28, 2026 - MLSsoccer.com",
     "published": "2026-10-29T01:53:57+00:00",
     "summary": "HIGHLIGHTS: Inter Miami CF vs. FC Cincinnati | October 28, 2026 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF Draws FC Cincinnati 2-2 in Dramatic Late Comeback - WPLG Local 10",
     "published": "2026-10-29T01:53:25+00:00",
     "summary": "Inter Miami CF Draws FC Cincinnati 2-2 in Dramatic Late Comeback WPLG Local 10"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 - Toronto Star",
     "published": "2026-10-29T01:52:21+00:00",
     "summary": "Lionel Messi goes scoreless, Inter Miami needs late goal to tie Cincinnati 2-2 Toronto Star"
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
     "published": "2026-10-28T15:37:36+00:00",
     "summary": "Deni Avdija scores nine fourth-quarter points NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Famous Jewish NBA players and the stories behind their careers - Tuko News",
     "published": "2026-10-28T15:33:31+00:00",
     "summary": "Famous Jewish NBA players and the stories behind their careers Tuko News"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija, Trail Blazers prevail in battle of unbeaten teams against Lakers in NBA - The Straits Times",
     "published": "2026-10-28T10:24:00+00:00",
     "summary": "Deni Avdija, Trail Blazers prevail in battle of unbeaten teams against Lakers in NBA The Straits Times"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Scores 23 Points In Win Over Lakers - FanDuel",
     "published": "2026-10-28T09:41:12+00:00",
     "summary": "Deni Avdija Scores 23 Points In Win Over Lakers FanDuel"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Logs team-high 23 points - CBS Sports",
     "published": "2026-10-28T09:41:00+00:00",
     "summary": "Trail Blazers' Deni Avdija: Logs team-high 23 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija News: Logs team-high 23 points - RotoWire",
     "published": "2026-10-28T09:33:34+00:00",
     "summary": "Deni Avdija News: Logs team-high 23 points RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "NBA: Deni Avdija, Blazers prevail in battle of unbeatens against Lakers - GMA Network",
     "published": "2026-10-28T06:35:07+00:00",
     "summary": "NBA: Deni Avdija, Blazers prevail in battle of unbeatens against Lakers GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-10-28T06:24:06+00:00",
     "summary": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija gets the hoop and the harm - ESPN",
     "published": "2026-10-28T06:17:23+00:00",
     "summary": "Deni Avdija gets the hoop and the harm ESPN"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 - Bozeman Daily Chronicle",
     "published": "2026-10-28T06:09:49+00:00",
     "summary": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 Bozeman Daily Chronicle"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija dials from long distance, 10/27/2026 - Yahoo Sports",
     "published": "2026-10-28T06:09:11+00:00",
     "summary": "Deni Avdija dials from long distance, 10/27/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija gets the hoop and the harm - ESPN",
     "published": "2026-10-28T05:38:05+00:00",
     "summary": "Deni Avdija gets the hoop and the harm ESPN"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time - Ynetnews",
     "published": "2026-10-27T01:32:22+00:00",
     "summary": "Brooklyn Nets send Israeli guard Ben Saraf to G League after limited NBA playing time Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Ben Saraf game log — 2026-27 / NBA - BasketNews.com",
     "published": "2026-10-27T01:28:18+00:00",
     "summary": "Ben Saraf game log — 2026-27 / NBA BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) - Howl.Link",
     "published": "2026-10-26T18:48:57+00:00",
     "summary": "r/u_MrBuckBuck on Reddit: Danny Wolf & Ben Saraf full FOOTAGE vs. Indiana Pacers last night (136-109 L) Howl.Link"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Nets' Ben Saraf: Sent to Long Island - CBS Sports",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Nets' Ben Saraf: Sent to Long Island CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Ben Saraf News: Sent to Long Island - RotoWire",
     "published": "2026-10-26T15:14:04+00:00",
     "summary": "Ben Saraf News: Sent to Long Island RotoWire"
    }
   ]
  }
 ]
}
</input>