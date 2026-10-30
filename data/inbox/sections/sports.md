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
  "home": "Brooklyn Nets",
  "away": "Detroit Pistons",
  "kickoff_utc": "2026-10-30T23:30:00.000Z"
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
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-29T19:45:00Z",
     "home": "Fiorentina",
     "away": "Atalanta",
     "status": "FINISHED",
     "score": "2-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T22:30:00Z",
     "home": "Mineiro",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-29T23:00:00Z",
     "home": "Vasco da Gama",
     "away": "Flamengo",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-30T00:30:00Z",
     "home": "Grêmio",
     "away": "Paranaense",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T18:00:00Z",
     "home": "Nice",
     "away": "Stade Rennais",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T18:00:00Z",
     "home": "Le Havre",
     "away": "PSG",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-30T19:30:00Z",
     "home": "Elversberg",
     "away": "Mainz",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-30T20:00:00Z",
     "home": "Sheffield Utd",
     "away": "Wrexham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-30T20:00:00Z",
     "home": "Villarreal",
     "away": "Espanyol",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-30T20:05:00Z",
     "home": "Lille",
     "away": "RC Lens",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-30T20:15:00Z",
     "home": "Casa Pia",
     "away": "Sporting CP",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-30T23:00:00Z",
     "home": "Corinthians",
     "away": "Mirassol",
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
     "team": "Frosinone",
     "played": 9,
     "pts": 17,
     "gd": 8
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
    "away": "Cleveland Cavaliers",
    "score": "114-111",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Sacramento Kings",
    "score": "132-120",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Memphis Grizzlies",
    "score": "103-124",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Washington Wizards",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-10-30T23:00:00Z"
   },
   {
    "home": "Boston Celtics",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-10-30T23:30:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-10-30T23:30:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-10-30T23:30:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-10-30T23:30:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-10-31T00:00:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-10-31T00:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-10-31T00:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-10-31T02:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-10-31T02:00:00Z"
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
     "title": "Afcon to return to two-year cycle after Caf U-turn",
     "published": "2026-10-30T08:39:36+00:00",
     "summary": "The African Cup of Nations (Afcon) will return to its traditional two-year cycle after a review into December's decision to host it every four years instead."
    },
    {
     "ref": "bbc_football#1",
     "title": "Holsgrove hungry for Scotland chance - gossip",
     "published": "2026-10-30T08:08:22+00:00",
     "summary": "Portugal-based midfielder retains Scotland dream as Hibs manager talks of strong bond with Hearts goalkeeper..."
    },
    {
     "ref": "bbc_football#2",
     "title": "Podcast: Old Firm fan ban & League Cup semi-finals",
     "published": "2026-10-30T08:00:00+00:00",
     "summary": "It’s make-or-break at Hampden, can Aberdeen stun Rangers? And who survives the cup derby?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Time to invest in Bournemouth? - FPL gameweek nine dilemmas",
     "published": "2026-10-30T07:51:08+00:00",
     "summary": "BBC Sport's Fantasy Premier League expert FPL Heisenberg gives his answers to some of the biggest dilemmas facing managers in gameweek nine."
    },
    {
     "ref": "bbc_football#4",
     "title": "'The most important person managers must manage is themselves'",
     "published": "2026-10-30T07:41:38+00:00",
     "summary": "BBC Sport columnist Tony Pulis explains why Vincent Kompany's health scare was a reminder that management takes its toll physically and mentally"
    },
    {
     "ref": "bbc_football#5",
     "title": "Families v loyal fans - women's football's attendance dilemma",
     "published": "2026-10-30T07:04:53+00:00",
     "summary": "Average Women's Super League attendances surged by 192% in the season after the Lionesses' Euro 2022 triumph, but the boom has stalled."
    },
    {
     "ref": "bbc_football#6",
     "title": "Families v loyal fans - women's football's attendance dilemma",
     "published": "2026-10-30T07:04:53+00:00",
     "summary": "Average Women's Super League attendances surged by 192% in the season after the Lionesses' Euro 2022 triumph, but the boom has stalled."
    },
    {
     "ref": "bbc_football#7",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-30T06:22:04+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#8",
     "title": "How talking about Man Utd's cycle of doom became an industry",
     "published": "2026-10-30T06:14:19+00:00",
     "summary": "Manchester United's struggles are pored over more than ever before - not least by former players."
    },
    {
     "ref": "bbc_football#9",
     "title": "Sub-plots intensify Blades and Wrexham's rivalry",
     "published": "2026-10-30T04:12:07+00:00",
     "summary": "Former team-mates Chris Wilder and Phil Parkinson lock horns again as Sheffield United face Wrexham in the Championship on Friday night."
    },
    {
     "ref": "bbc_football#10",
     "title": "PSG score late to hold struggling Man City",
     "published": "2026-10-29T22:40:17+00:00",
     "summary": "Manchester City concede late to a draw 1-1 with Paris St-Germain, as their wait for a win in the Women's Champions League this season continues."
    },
    {
     "ref": "bbc_football#11",
     "title": "PSG score late to hold struggling Man City",
     "published": "2026-10-29T22:40:17+00:00",
     "summary": "Manchester City concede late to a draw 1-1 with Paris St-Germain, as their wait for a win in the Women's Champions League this season continues."
    },
    {
     "ref": "bbc_football#12",
     "title": "Fleetwood to face Everton in EFL Cup quarters",
     "published": "2026-10-29T21:42:29+00:00",
     "summary": "League Two Fleetwood Town will face Everton at Highbury in the quarter-finals of the EFL Cup."
    },
    {
     "ref": "bbc_football#13",
     "title": "Chelsea linked with Alexander-Arnold - Friday's gossip",
     "published": "2026-10-29T21:40:24+00:00",
     "summary": "Trent Alexander-Arnold may become a target for Chelsea, Bournemouth's Alex Scott could also be heading to Stamford Bridge and Manchester United are looking at Leeds United striker Dominic Calvert-Lewin."
    },
    {
     "ref": "bbc_football#14",
     "title": "What have we learned from first round of Premiership?",
     "published": "2026-10-29T20:53:07+00:00",
     "summary": "With every team having now faced one another in the Scottish Premiership, BBC Sport Scotland assesses the key things we have learned so far."
    },
    {
     "ref": "bbc_football#15",
     "title": "What have we learned from first round of Premiership?",
     "published": "2026-10-29T20:53:07+00:00",
     "summary": "With every team having now faced one another in the Scottish Premiership, BBC Sport Scotland assesses the key things we have learned so far."
    },
    {
     "ref": "bbc_football#16",
     "title": "Sutton's predictions v Bad Day At The Office star John Hannah",
     "published": "2026-10-29T19:55:24+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on Bad Day At The Office star John Hannah, plus the BBC readers and AI with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#17",
     "title": "Grealish dropped over 'breach of club discipline' - what now?",
     "published": "2026-10-29T19:31:36+00:00",
     "summary": "Jack Grealish is left out of Everton's EFL Cup win over Newcastle United on Thursday because of \"a breach of club discipline\"."
    },
    {
     "ref": "bbc_football#18",
     "title": "Scottish football could pave way for 3pm TV blackout to end",
     "published": "2026-10-29T17:43:53+00:00",
     "summary": "The first tentative steps to end the 3pm television blackout in the UK have been taken by Scottish football as it seeks offers for the next broadcast cycle."
    },
    {
     "ref": "bbc_football#19",
     "title": "Scottish football could pave way for 3pm TV blackout to end",
     "published": "2026-10-29T17:43:53+00:00",
     "summary": "The first tentative steps to end the 3pm television blackout in the UK have been taken by Scottish football as it seeks offers for the next broadcast cycle."
    },
    {
     "ref": "bbc_football#20",
     "title": "Celtic & Rangers Scottish Cup stadium closure upheld",
     "published": "2026-10-29T17:20:57+00:00",
     "summary": "Rangers and Celtic will both play their next Scottish Cup home ties behind closed doors after the clubs respective appeals against the sanction was dismissed."
    },
    {
     "ref": "bbc_football#21",
     "title": "Celtic & Rangers Scottish Cup stadium closure upheld",
     "published": "2026-10-29T17:20:57+00:00",
     "summary": "Rangers and Celtic will both play their next Scottish Cup home ties behind closed doors after the clubs respective appeals against the sanction was dismissed."
    },
    {
     "ref": "bbc_football#22",
     "title": "Dowman to miss three matches after appeal rejected",
     "published": "2026-10-29T17:19:06+00:00",
     "summary": "Arsenal's Max Dowman will miss three matches after an appeal against his sending-off during Tuesday's loss at Fleetwood is rejected."
    },
    {
     "ref": "bbc_football#23",
     "title": "Football Daily",
     "published": "2026-10-29T16:54:00+00:00",
     "summary": "Rick & Lloyd are joined by Julien Laurens to discuss De Zerbi’s quiet transformation."
    },
    {
     "ref": "bbc_football#24",
     "title": "Euro Leagues",
     "published": "2026-10-29T16:21:00+00:00",
     "summary": "Was David Raya robbed at the Ballon d'Or? And what did the continent make of Kane's win?"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "How Many Goals Does Lionel Messi Need to Match Cristiano Ronaldo’s 985? - Heavy.com",
     "published": "2026-10-30T07:50:52+00:00",
     "summary": "How Many Goals Does Lionel Messi Need to Match Cristiano Ronaldo’s 985? Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Is Lionel Messi Leaving Inter Miami in 2027? What We Know - Heavy.com",
     "published": "2026-10-30T07:07:00+00:00",
     "summary": "Is Lionel Messi Leaving Inter Miami in 2027? What We Know Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Is Messi leaving Inter Miami? Contract details revealed - Diario AS",
     "published": "2026-10-30T06:27:09+00:00",
     "summary": "Is Messi leaving Inter Miami? Contract details revealed Diario AS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami: Sprint Season 2027 schedule revealed - Diario AS",
     "published": "2026-10-30T06:13:06+00:00",
     "summary": "Inter Miami: Sprint Season 2027 schedule revealed Diario AS"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi and Inter Miami fail to fire as late goal earns Cincinnati a draw | Daily FT - newspaper - Magzter",
     "published": "2026-10-30T04:18:42+00:00",
     "summary": "Messi and Inter Miami fail to fire as late goal earns Cincinnati a draw | Daily FT - newspaper Magzter"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi and Inter Miami to Kick Off Historic 2027 MLS Season - beIN SPORTS",
     "published": "2026-10-30T03:36:00+00:00",
     "summary": "Lionel Messi and Inter Miami to Kick Off Historic 2027 MLS Season beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Miami 2-2 Cincinnati (29 Oct, 2026) Player Stats - ESPN Singapore",
     "published": "2026-10-30T03:20:50+00:00",
     "summary": "Miami 2-2 Cincinnati (29 Oct, 2026) Player Stats ESPN Singapore"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi Suspension Canceled By MLS ‘Good Behavior’ Rule - Yahoo Sports",
     "published": "2026-10-29T22:45:14+00:00",
     "summary": "Lionel Messi Suspension Canceled By MLS ‘Good Behavior’ Rule Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "The reason Lionel Messi can play vs NE Revolution despite 5th yellow card with Inter Miami - Bolavip US",
     "published": "2026-10-29T21:13:21+00:00",
     "summary": "The reason Lionel Messi can play vs NE Revolution despite 5th yellow card with Inter Miami Bolavip US"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi eligible for crunch Miami game with Revs despite yellow card haul - ESPN",
     "published": "2026-10-29T20:07:00+00:00",
     "summary": "Messi eligible for crunch Miami game with Revs despite yellow card haul ESPN"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) - revolutionsoccer.net",
     "published": "2026-10-29T19:08:04+00:00",
     "summary": "MATCHDAY GUIDE | Revs vs. Inter Miami CF (November 1, 2026) revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "NYCFC SPRINT SEASON: Club opens at Nashville on Feb. 20, hosts Inter Miami on March 3 - Front Row Soccer",
     "published": "2026-10-29T19:00:21+00:00",
     "summary": "NYCFC SPRINT SEASON: Club opens at Nashville on Feb. 20, hosts Inter Miami on March 3 Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Everything You Need to Know About the 2027 MLS Sprint Season - Inter Miami CF",
     "published": "2026-10-29T18:45:55+00:00",
     "summary": "Everything You Need to Know About the 2027 MLS Sprint Season Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi's Inter Miami to open 2027 MLS Sprint Season vs. FC Cincinnati on Feb. 19 - Goal.com",
     "published": "2026-10-29T18:12:40+00:00",
     "summary": "Lionel Messi's Inter Miami to open 2027 MLS Sprint Season vs. FC Cincinnati on Feb. 19 Goal.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami CF’s 2027 MLS Sprint Season Schedule Unveiled - Inter Miami CF",
     "published": "2026-10-29T18:00:49+00:00",
     "summary": "Inter Miami CF’s 2027 MLS Sprint Season Schedule Unveiled Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS Picks: Revolution Vs Inter Miami, Whitecaps Vs Sounders Odds - RG.org",
     "published": "2026-10-29T17:42:37+00:00",
     "summary": "MLS Picks: Revolution Vs Inter Miami, Whitecaps Vs Sounders Odds RG.org"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF Academy Enjoys Successful Tournament Weekend - Inter Miami CF",
     "published": "2026-10-29T17:10:44+00:00",
     "summary": "Inter Miami CF Academy Enjoys Successful Tournament Weekend Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "David Beckham makes 5-year-old Huddy’s dream come true - HOLA",
     "published": "2026-10-29T16:49:11+00:00",
     "summary": "David Beckham makes 5-year-old Huddy’s dream come true HOLA"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Will Messi Be Able to Play for Inter Miami This Weekend? - beIN SPORTS",
     "published": "2026-10-29T16:33:49+00:00",
     "summary": "Will Messi Be Able to Play for Inter Miami This Weekend? beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi’s Inter Miami compromise 2027 Concacaf Champions Cup spot with 2-2 draw vs Cincinnati - World Soccer Talk",
     "published": "2026-10-29T16:29:47+00:00",
     "summary": "Lionel Messi’s Inter Miami compromise 2027 Concacaf Champions Cup spot with 2-2 draw vs Cincinnati World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "MLS unveils key 2027 sprint season matches on Apple TV as Lionel Messi’s Inter Miami opens historic calendar shift - MacDailyNews",
     "published": "2026-10-29T13:30:16+00:00",
     "summary": "MLS unveils key 2027 sprint season matches on Apple TV as Lionel Messi’s Inter Miami opens historic calendar shift MacDailyNews"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi Gets Opening Night as MLS Sprint Season Ushers In Huge Change - Yahoo Sports",
     "published": "2026-10-29T12:04:02+00:00",
     "summary": "Messi Gets Opening Night as MLS Sprint Season Ushers In Huge Change Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Will Lionel Messi play for Inter Miami against New England Revolution? - Diario AS",
     "published": "2026-10-29T10:53:50+00:00",
     "summary": "Will Lionel Messi play for Inter Miami against New England Revolution? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi did not score or assist: Inter Miami escape defeat with a late equaliser against Cincinnati - Goal.com",
     "published": "2026-10-29T10:38:47+00:00",
     "summary": "Messi did not score or assist: Inter Miami escape defeat with a late equaliser against Cincinnati Goal.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi and Inter Miami fail to fire as late goal earns Cincinnati a draw - Al Jazeera",
     "published": "2026-10-29T09:17:16+00:00",
     "summary": "Messi and Inter Miami fail to fire as late goal earns Cincinnati a draw Al Jazeera"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks - Hoops Wire",
     "published": "2026-10-30T07:38:51+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Pelicans, Jeremiah Fears, Hawks Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season - Ynetnews",
     "published": "2026-10-30T06:19:28+00:00",
     "summary": "Deni Avdija scores 24 points as Portland suffers first loss of NBA season Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Postgame Interview | Portland Trail Blazers 103, Memphis Grizzlies 124 | Oct. 29, 2026 - NBA.com",
     "published": "2026-10-30T06:05:19+00:00",
     "summary": "Deni Avdija Postgame Interview | Portland Trail Blazers 103, Memphis Grizzlies 124 | Oct. 29, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija puts up 24/9/7 line in loss to Memphis - NBC Sports",
     "published": "2026-10-30T05:51:08+00:00",
     "summary": "Deni Avdija puts up 24/9/7 line in loss to Memphis NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija with the And-1!, 10/29/2026 - Yahoo Sports",
     "published": "2026-10-30T04:31:22+00:00",
     "summary": "Deni Avdija with the And-1!, 10/29/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies - Sports Illustrated",
     "published": "2026-10-30T04:24:46+00:00",
     "summary": "Deni Avdija's 24 Points Not Enough, Blazers Fall to Grizzlies Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Should I Trade Andre Drummond for Ben Saraf? | Fantasy Basketball - FantasyPros",
     "published": "2026-10-29T22:57:57+00:00",
     "summary": "Should I Trade Andre Drummond for Ben Saraf? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Nets' Ben Saraf: Option picked up - CBS Sports",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Nets' Ben Saraf: Option picked up CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Ben Saraf News: Option picked up - RotoWire",
     "published": "2026-10-29T17:12:13+00:00",
     "summary": "Ben Saraf News: Option picked up RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija First Basket Pick & Odds Today (Oct. 29) - Lineups",
     "published": "2026-10-29T15:36:08+00:00",
     "summary": "Deni Avdija First Basket Pick & Odds Today (Oct. 29) Lineups"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija shines with 23 points as undefeated Portland defeats Lakers - The Jerusalem Post",
     "published": "2026-10-29T08:45:15+00:00",
     "summary": "Deni Avdija shines with 23 points as undefeated Portland defeats Lakers The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "NBA player props today: Thursday's best props include Deni Avdija [10/29/2026] - Dimers",
     "published": "2026-10-29T07:56:55+00:00",
     "summary": "NBA player props today: Thursday's best props include Deni Avdija [10/29/2026] Dimers"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores nine fourth-quarter points - NBC Sports",
     "published": "2026-10-28T15:37:36+00:00",
     "summary": "Deni Avdija scores nine fourth-quarter points NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Famous Jewish NBA players and the stories behind their careers - Tuko News",
     "published": "2026-10-28T15:33:31+00:00",
     "summary": "Famous Jewish NBA players and the stories behind their careers Tuko News"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija, Trail Blazers prevail in battle of unbeaten teams against Lakers in NBA - The Straits Times",
     "published": "2026-10-28T10:24:00+00:00",
     "summary": "Deni Avdija, Trail Blazers prevail in battle of unbeaten teams against Lakers in NBA The Straits Times"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers' Deni Avdija: Logs team-high 23 points - CBS Sports",
     "published": "2026-10-28T09:41:00+00:00",
     "summary": "Trail Blazers' Deni Avdija: Logs team-high 23 points CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija News: Logs team-high 23 points - RotoWire",
     "published": "2026-10-28T09:33:34+00:00",
     "summary": "Deni Avdija News: Logs team-high 23 points RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "NBA: Deni Avdija, Blazers prevail in battle of unbeatens against Lakers - GMA Network",
     "published": "2026-10-28T06:35:07+00:00",
     "summary": "NBA: Deni Avdija, Blazers prevail in battle of unbeatens against Lakers GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija gets the hoop and the harm - ESPN",
     "published": "2026-10-28T06:33:03+00:00",
     "summary": "Deni Avdija gets the hoop and the harm ESPN"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers - The Daily News | Texas' Oldest Newspaper",
     "published": "2026-10-28T06:24:06+00:00",
     "summary": "Deni Avdija, Blazers prevail in battle of unbeatens against Lakers The Daily News | Texas' Oldest Newspaper"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 - Bozeman Daily Chronicle",
     "published": "2026-10-28T06:09:49+00:00",
     "summary": "Ja Morant, Damian Lillard lead unbeaten Trail Blazers past Lakers 136-129 despite Luka Doncic's 41 Bozeman Daily Chronicle"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija dials from long distance, 10/27/2026 - Yahoo Sports",
     "published": "2026-10-28T06:09:11+00:00",
     "summary": "Deni Avdija dials from long distance, 10/27/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija gets the hoop and the harm - ESPN",
     "published": "2026-10-28T05:38:05+00:00",
     "summary": "Deni Avdija gets the hoop and the harm ESPN"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija Stats, Props & Recent Performance - PrizePicks",
     "published": "2026-10-27T22:00:00+00:00",
     "summary": "Deni Avdija Stats, Props & Recent Performance PrizePicks"
    }
   ]
  }
 ]
}
</input>