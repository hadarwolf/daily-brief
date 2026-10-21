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
  "home": "Bayern",
  "away": "Arsenal",
  "kickoff_utc": "2026-10-21T19:00:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Brooklyn Nets",
  "away": "Charlotte Hornets",
  "kickoff_utc": "2026-10-21T23:30:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Portland Trail Blazers",
  "away": "Phoenix Suns",
  "kickoff_utc": "2026-10-22T02:00:00.000Z"
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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T16:45:00Z",
     "home": "Fenerbahçe",
     "away": "Slavia Praha",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T16:45:00Z",
     "home": "Sabah FK",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-20T18:45:00Z",
     "home": "Wolverhampton",
     "away": "Portsmouth",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Roma",
     "away": "Sl. Bratislava",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Napoli",
     "away": "Bodø/Glimt",
     "status": "FINISHED",
     "score": "4-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Stuttgart",
     "away": "Atleti",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Porto",
     "away": "PSV",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Man City",
     "away": "PAE AEK",
     "status": "FINISHED",
     "score": "5-1"
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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Liverpool",
     "away": "Villarreal",
     "status": "FINISHED",
     "score": "4-3"
    }
   ],
   "today": [
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T16:45:00Z",
     "home": "Como 1907",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T16:45:00Z",
     "home": "Lille",
     "away": "Galatasaray",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-21T18:00:00Z",
     "home": "Levante",
     "away": "Athletic",
     "status": "TIMED",
     "score": "0-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Sporting CP",
     "away": "LASK",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Inter",
     "away": "Shaktar",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Club Brugge",
     "away": "RC Lens",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Real Madrid",
     "away": "RB Leipzig",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Real Betis",
     "away": "Feyenoord",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Bayern",
     "away": "Arsenal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Aston Villa",
     "away": "Viking",
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
      "competition": "Premier League",
      "kickoff_utc": "2026-10-10T11:30:00Z",
      "home": "Arsenal",
      "away": "Leeds United",
      "status": "FINISHED",
      "score": "2-1"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-21T19:00:00Z",
      "home": "Bayern",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
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
    "home": "Detroit Pistons",
    "away": "Boston Celtics",
    "score": "121-113",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Philadelphia 76ers",
    "score": "100-106",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Oklahoma City Thunder",
    "score": "69-80",
    "status": "3rd Qtr"
   }
  ],
  "games_today": [
   {
    "home": "Miami Heat",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-10-21T23:30:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-10-22T02:00:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-10-21T23:00:00Z"
   },
   {
    "home": "Washington Wizards",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-10-21T23:00:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-10-21T23:30:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-10-21T23:30:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-10-22T00:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-10-22T00:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-10-22T00:30:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-10-22T02:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-10-22T02:30:00Z"
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
     "title": "No jeopardy but loads of fun - Champions League sets new goals record",
     "published": "2026-10-20T23:03:11+00:00",
     "summary": "It was goals galore again in the Champions League on Tuesday, with the competition setting a new record this season."
    },
    {
     "ref": "bbc_football#1",
     "title": "The night 'ruthless' Ngumoha came of age for Liverpool",
     "published": "2026-10-20T22:56:55+00:00",
     "summary": "Rio Ngumoha produces a coming-of-age performance in Liverpool's comeback win over Villarreal, writes Aadam Patel."
    },
    {
     "ref": "bbc_football#2",
     "title": "No Haaland, no problem - can Foden be Man City's alternative goalscorer?",
     "published": "2026-10-20T22:35:32+00:00",
     "summary": "Phil Foden's magnificent man-of-the-match display in Manchester City's Champions League win against AEK Athens serves as a reminder of his talent and ability to influence games."
    },
    {
     "ref": "bbc_football#3",
     "title": "Liverpool, Man City & PSG win on record-breaking night",
     "published": "2026-10-20T22:14:00+00:00",
     "summary": "Kelly Cates is joined by Stephen Warnock, Ashley Young, Tom Allnutt and Statman Dave."
    },
    {
     "ref": "bbc_football#4",
     "title": "Carrick wants more Man Utd clean sheets to turn season around",
     "published": "2026-10-20T21:27:35+00:00",
     "summary": "Manchester United boss Michael Carrick needs more clean sheets as he looks to change his team's fortunes, as they take on Como in the Champions League."
    },
    {
     "ref": "bbc_football#5",
     "title": "Audit regulator looking into Manchester City accounting",
     "published": "2026-10-20T20:56:53+00:00",
     "summary": "No formal investigation has started, but the regulator is making inquiries into the case."
    },
    {
     "ref": "bbc_football#6",
     "title": "Arsenal criticism comes from very small minority - Arteta",
     "published": "2026-10-20T20:33:27+00:00",
     "summary": "David Raya says he does not know what to say when people call Arsenal's style of play \"boring or irritating\", as Mikel Arteta brushes off criticism."
    },
    {
     "ref": "bbc_football#7",
     "title": "Man Utd revisit deal for Hall - Wednesday gossip",
     "published": "2026-10-20T20:17:15+00:00",
     "summary": "Manchester United targeting Lewis Hall and Adrien Truffert, Real Madrid remain interested in Riccardo Calafiori, Liverpool and Arsenal both keen on Xavi Espart, plus more."
    },
    {
     "ref": "bbc_football#8",
     "title": "McTominay scores twice as Napoli beat Bodo/Glimt",
     "published": "2026-10-20T19:45:54+00:00",
     "summary": "Scott McTominay scores his first goals since undergoing heart surgery as Napoli claim a thrilling 4-3 victory over Bodo/Glimt."
    },
    {
     "ref": "bbc_football#9",
     "title": "Turkish FA bans 147 officials for breaching betting rules",
     "published": "2026-10-20T18:39:43+00:00",
     "summary": "Trabzonspor president Ertugrul Dogan is among 147 club officials given a 45-day ban by the Turkish Football Federation (TFF) for breaching betting rules."
    },
    {
     "ref": "bbc_football#10",
     "title": "Webb backs VAR over Botman challenge on Jackson",
     "published": "2026-10-20T16:56:53+00:00",
     "summary": "Premier League referees' chief Howard Webb says Sven Botman's challenge on Nicolas Jackson was a \"high-end reckless challenge\" but backed the video assistant referee's decision not to intervene for a red card."
    },
    {
     "ref": "bbc_football#11",
     "title": "What is the longest a team has gone without winning a league game at home?",
     "published": "2026-10-20T15:49:56+00:00",
     "summary": "Burnley are on the brink of unwanted football history, should they fail to beat Portsmouth later this month."
    },
    {
     "ref": "bbc_football#12",
     "title": "Former Norwich and Celtic striker Pukki to retire",
     "published": "2026-10-20T14:37:41+00:00",
     "summary": "Former Norwich City and Finland striker Teemu Pukki announces his retirement from football at the age of 36."
    },
    {
     "ref": "bbc_football#13",
     "title": "What are the yellow card suspension rules in Champions League?",
     "published": "2026-10-20T13:57:53+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains what the rules are regarding yellow card suspensions in this season's Champions League"
    },
    {
     "ref": "bbc_football#14",
     "title": "Ronaldo let Manchester United down - Ten Hag",
     "published": "2026-10-20T12:12:51+00:00",
     "summary": "Former Manchester United manager Erik ten Hag says Cristiano Ronaldo \"let the team and let me down\" during the Dutchman's spell at Old Trafford."
    },
    {
     "ref": "bbc_football#15",
     "title": "What does Celtic's demolition of Hearts mean for Hogh?",
     "published": "2026-10-20T11:23:57+00:00",
     "summary": "BBC Scotland examines whether Celtic’s 7-1 win over Hearts proved they are better without their record signing."
    },
    {
     "ref": "bbc_football#16",
     "title": "What does Celtic's demolition of Hearts mean for Hogh?",
     "published": "2026-10-20T11:23:57+00:00",
     "summary": "BBC Scotland examines whether Celtic’s 7-1 win over Hearts proved they are better without their record signing."
    },
    {
     "ref": "bbc_football#17",
     "title": "Football On Trial: Sham City",
     "published": "2026-10-20T11:20:00+00:00",
     "summary": "The independent commission reaches its verdict: City are guilty on almost all charges."
    },
    {
     "ref": "bbc_football#18",
     "title": "Why Teenage Dirtbag rockers sponsor U13 boys' team",
     "published": "2026-10-20T10:54:03+00:00",
     "summary": "The US frontman, responsible for Teenage Dirtbag, says the team could be treated to a private show."
    },
    {
     "ref": "bbc_football#19",
     "title": "SPFL invites bids for new Scottish Premiership TV deal",
     "published": "2026-10-20T10:44:11+00:00",
     "summary": "The SPFL expects \"strong interest\" after inviting broadcasters to bid for the UK rights to show Scottish Premiership matches from the 2029-30 campaign."
    },
    {
     "ref": "bbc_football#20",
     "title": "SPFL invites bids for new Scottish Premiership TV deal",
     "published": "2026-10-20T10:44:11+00:00",
     "summary": "The SPFL expects \"strong interest\" after inviting broadcasters to bid for the UK rights to show Scottish Premiership matches from the 2029-30 campaign."
    },
    {
     "ref": "bbc_football#21",
     "title": "Moyes insider doubts potential Celtic move - gossip",
     "published": "2026-10-20T06:52:44+00:00",
     "summary": "Former striker Louis Saha, who played under David Moyes at Everton, doubts whether Celtic would be able to lure away the Premier League boss in their hunt to land a successor to Martin O'Neill."
    },
    {
     "ref": "bbc_football#22",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-10-19T23:22:24+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Maddison's magic moment for Spurs - 18 months in the making",
     "published": "2026-10-19T22:35:55+00:00",
     "summary": "On his first start since May 2025, James Maddison provided the moment of magic Tottenham were waiting for in their 3-1 victory against Coventry, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#24",
     "title": "Spurs 'lack confidence' but we are a good team - De Zerbi",
     "published": "2026-10-19T21:59:30+00:00",
     "summary": "Tottenham Hotspur head coach Roberto de Zerbi hails the spirit and attitude of his side following their first Premier League win of the season, as they beat Coventry City."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-21T02:50:24+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Will Messi reach the 1,000-goal milestone before Ronaldo? - Vietnam.vn",
     "published": "2026-10-21T02:28:35+00:00",
     "summary": "Will Messi reach the 1,000-goal milestone before Ronaldo? Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-21T02:12:46+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami CF and Royal Caribbean Continue Shared Commitment to Children and Families Through Third Annual Make-A-Wish Initiative - Inter Miami CF",
     "published": "2026-10-21T02:06:58+00:00",
     "summary": "Inter Miami CF and Royal Caribbean Continue Shared Commitment to Children and Families Through Third Annual Make-A-Wish Initiative Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Join The Huddle Vol. 2: Gearing Up for Second In-App Fan-Player Chat Following Successful Launch with Casemiro - Inter Miami CF",
     "published": "2026-10-20T22:21:24+00:00",
     "summary": "Join The Huddle Vol. 2: Gearing Up for Second In-App Fan-Player Chat Following Successful Launch with Casemiro Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Miami Freedom Park Faces $20M In Lien Claims And Lawsuits - Bisnow",
     "published": "2026-10-20T22:18:48+00:00",
     "summary": "Miami Freedom Park Faces $20M In Lien Claims And Lawsuits Bisnow"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Merch Madness: Inter Miami CF’s Biggest Sale of the Year Set for Wednesday, Oct. 21, at Nu Stadium - Inter Miami CF",
     "published": "2026-10-20T21:51:23+00:00",
     "summary": "Merch Madness: Inter Miami CF’s Biggest Sale of the Year Set for Wednesday, Oct. 21, at Nu Stadium Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi is three games away from matching the longest goal contribution streak of his career - World Soccer Talk",
     "published": "2026-10-20T21:42:49+00:00",
     "summary": "Lionel Messi is three games away from matching the longest goal contribution streak of his career World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami’s Mateo Silvetti Named to MLS 22 Under 22 Rankings for 2026 - Pasión Fútbol",
     "published": "2026-10-20T19:38:12+00:00",
     "summary": "Inter Miami’s Mateo Silvetti Named to MLS 22 Under 22 Rankings for 2026 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi defies time once again: at 39, he is three games away from matching a record from his best days at Barcelona - MARCA",
     "published": "2026-10-20T18:50:43+00:00",
     "summary": "Messi defies time once again: at 39, he is three games away from matching a record from his best days at Barcelona MARCA"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi, Suárez and Berterame named in MLS Team of the Matchday - OneFootball",
     "published": "2026-10-20T18:19:42+00:00",
     "summary": "Messi, Suárez and Berterame named in MLS Team of the Matchday OneFootball"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Sole Arab representative: Cristiano tops the list of the world's highest-paid with more than \"double Messi\" - Goal.com",
     "published": "2026-10-20T17:10:28+00:00",
     "summary": "Sole Arab representative: Cristiano tops the list of the world's highest-paid with more than \"double Messi\" Goal.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "USMNT to cap '26 with Dec. 13 friendly vs. Jamaica - Miami Herald",
     "published": "2026-10-20T16:59:06+00:00",
     "summary": "USMNT to cap '26 with Dec. 13 friendly vs. Jamaica Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Mateo Silvetti Named to MLS’ 2026 22 Under 22 List - OneFootball",
     "published": "2026-10-20T16:53:30+00:00",
     "summary": "Mateo Silvetti Named to MLS’ 2026 22 Under 22 List OneFootball"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Nashville on the brink of Supporters’ Shield as Lionel Messi’s Inter Miami run out of road - World Soccer Talk",
     "published": "2026-10-20T16:36:07+00:00",
     "summary": "Nashville on the brink of Supporters’ Shield as Lionel Messi’s Inter Miami run out of road World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-20T16:28:22+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Cristiano Ronaldo dominates Lionel Messi in official 'B.O.A.T.' poll as Portuguese superstar leads GOAT debate ahead of London awards gala - Goal.com",
     "published": "2026-10-20T16:11:52+00:00",
     "summary": "Cristiano Ronaldo dominates Lionel Messi in official 'B.O.A.T.' poll as Portuguese superstar leads GOAT debate ahead of London awards gala Goal.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi’s ultimate troll! The iconic gesture that humiliated his rival - Diario AS",
     "published": "2026-10-20T16:04:59+00:00",
     "summary": "Messi’s ultimate troll! The iconic gesture that humiliated his rival Diario AS"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Mateo Silvetti Named to MLS’ 2026 22 Under 22 List - Inter Miami CF",
     "published": "2026-10-20T16:00:57+00:00",
     "summary": "Mateo Silvetti Named to MLS’ 2026 22 Under 22 List Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Telasco Segovia’s Role at Inter Miami Is Changing Under Kily González: What Comes Next for the Venezuelan? - Pasión Fútbol",
     "published": "2026-10-20T15:29:31+00:00",
     "summary": "Telasco Segovia’s Role at Inter Miami Is Changing Under Kily González: What Comes Next for the Venezuelan? Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "David Beckham may become a candidate for FIFA president - Arzuw news",
     "published": "2026-10-20T15:25:03+00:00",
     "summary": "David Beckham may become a candidate for FIFA president Arzuw news"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "USMNT to close out 2026 vs. Jamaica at Inter Miami stadium - ESPN",
     "published": "2026-10-20T15:03:00+00:00",
     "summary": "USMNT to close out 2026 vs. Jamaica at Inter Miami stadium ESPN"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Miami coach unfazed as Messi set to collect prestigious award in Spain - The Daily Star",
     "published": "2026-10-20T15:00:28+00:00",
     "summary": "Miami coach unfazed as Messi set to collect prestigious award in Spain The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Mas brothers’ Miami Freedom Park venture pursued by subcontractors for over $20M in unpaid work - The Real Deal",
     "published": "2026-10-20T14:30:00+00:00",
     "summary": "Mas brothers’ Miami Freedom Park venture pursued by subcontractors for over $20M in unpaid work The Real Deal"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "USMNT to face Jamaica in December Camp match - Stars and Stripes FC",
     "published": "2026-10-20T14:29:12+00:00",
     "summary": "USMNT to face Jamaica in December Camp match Stars and Stripes FC"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers - Rip City Project",
     "published": "2026-10-21T03:10:00+00:00",
     "summary": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yahoo Sports",
     "published": "2026-10-21T01:33:00+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "A surprise name lands on Trail Blazers’ injury report for season opener - OregonLive.com",
     "published": "2026-10-21T01:07:00+00:00",
     "summary": "A surprise name lands on Trail Blazers’ injury report for season opener OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija (ankle) questionable to play Wednesday - FantasyPros",
     "published": "2026-10-21T00:59:00+00:00",
     "summary": "Deni Avdija (ankle) questionable to play Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener - Heavy.com",
     "published": "2026-10-21T00:57:00+00:00",
     "summary": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija (ankle) questionable vs. Phoenix - NBC Sports",
     "published": "2026-10-21T00:31:22+00:00",
     "summary": "Deni Avdija (ankle) questionable vs. Phoenix NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Avdija Questionable to Play in Regular-Season Opener - Blazer's Edge",
     "published": "2026-10-20T23:54:46+00:00",
     "summary": "Avdija Questionable to Play in Regular-Season Opener Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Trail Blazers' Deni Avdija: Questionable for Wednesday - CBS Sports",
     "published": "2026-10-20T23:34:44+00:00",
     "summary": "Trail Blazers' Deni Avdija: Questionable for Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Injury: Questionable for Wednesday - RotoWire",
     "published": "2026-10-20T23:34:44+00:00",
     "summary": "Deni Avdija Injury: Questionable for Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Phoenix Suns @ Portland Trail Blazers Odds - FanDuel Sportsbook",
     "published": "2026-10-20T21:20:39+00:00",
     "summary": "Phoenix Suns @ Portland Trail Blazers Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Damian Lillard, Ja Morant lead new-look Blazers vs. Suns - San Luis Obispo Tribune",
     "published": "2026-10-20T21:09:00+00:00",
     "summary": "Damian Lillard, Ja Morant lead new-look Blazers vs. Suns San Luis Obispo Tribune"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Damian Lillard — No. 66 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-20T06:04:40+00:00",
     "summary": "Damian Lillard — No. 66 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "3 Record Projections Give Blazers Wide Range of Possibilities This Season - Yahoo",
     "published": "2026-10-20T04:00:00+00:00",
     "summary": "3 Record Projections Give Blazers Wide Range of Possibilities This Season Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Suns vs. Trail Blazers - Live Score - October 21, 2026 - FOX Sports",
     "published": "2026-10-19T16:08:25+00:00",
     "summary": "Suns vs. Trail Blazers - Live Score - October 21, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "5 Things I Liked from Deni Avdija's Recent Blazers Comments - Sports Illustrated",
     "published": "2026-10-19T16:00:01+00:00",
     "summary": "5 Things I Liked from Deni Avdija's Recent Blazers Comments Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija: 'I want to be a great two-way player' - HoopsHype",
     "published": "2026-10-19T08:29:00+00:00",
     "summary": "Deni Avdija: 'I want to be a great two-way player' HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija on his goal: 'I want to be a great two-way player' - HoopsHype",
     "published": "2026-10-19T08:28:00+00:00",
     "summary": "Deni Avdija on his goal: 'I want to be a great two-way player' HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Avdija ready for two-way leap, previews revamped roster: “Rock and roll” - Eurohoops",
     "published": "2026-10-19T06:11:00+00:00",
     "summary": "Avdija ready for two-way leap, previews revamped roster: “Rock and roll” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija: Portland's most dangerous weapon in the NBA - The Jerusalem Post",
     "published": "2026-10-19T05:40:46+00:00",
     "summary": "Deni Avdija: Portland's most dangerous weapon in the NBA The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Media Availability | Oct. 18, 2026 | Portland Trail Blazers - BVM Sports",
     "published": "2026-10-19T04:00:24+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 18, 2026 | Portland Trail Blazers BVM Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija Media Availability | Oct. 18, 2026 - NBA.com",
     "published": "2026-10-19T00:58:53+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 18, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija - Sport News Africa",
     "published": "2026-10-18T20:00:00+00:00",
     "summary": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Did the Blazers Get Enough Out of Preseason? - Sports Illustrated",
     "published": "2026-10-18T15:43:53+00:00",
     "summary": "Did the Blazers Get Enough Out of Preseason? Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija | Forward | Portland Trail Blazers - NBA.com",
     "published": "2026-10-18T07:00:00+00:00",
     "summary": "Deni Avdija | Forward | Portland Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija climbs in new rankings, earns high praise - The Jerusalem Post",
     "published": "2026-10-18T06:10:35+00:00",
     "summary": "Deni Avdija climbs in new rankings, earns high praise The Jerusalem Post"
    }
   ]
  }
 ]
}
</input>