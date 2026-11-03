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
  "home": "Barça",
  "away": "Aston Villa",
  "kickoff_utc": "2026-11-03T20:00:00Z"
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
     "kickoff_utc": "2026-11-02T17:30:00Z",
     "home": "Sassuolo",
     "away": "Fiorentina",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-02T19:45:00Z",
     "home": "Atalanta",
     "away": "Parma",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-02T19:45:00Z",
     "home": "Lorient",
     "away": "Brest",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-02T20:00:00Z",
     "home": "Deportivo",
     "away": "Osasuna",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-02T20:00:00Z",
     "home": "Newcastle",
     "away": "Everton",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "Gil Vicente",
     "away": "Vitória SC",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "SL Benfica",
     "away": "Alverca",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-02T23:00:00Z",
     "home": "Bragantino",
     "away": "Santos",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T17:45:00Z",
     "home": "Galatasaray",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T17:45:00Z",
     "home": "Shaktar",
     "away": "Sporting CP",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Preston NE",
     "away": "Sheffield Utd",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Charlton",
     "away": "Bolton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Derby County",
     "away": "Norwich",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Portsmouth",
     "away": "Swansea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Watford",
     "away": "Lincoln City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "QPR",
     "away": "Burnley",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Blackburn",
     "away": "Stoke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "West Brom",
     "away": "Southampton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Villarreal",
     "away": "PSG",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Bodø/Glimt",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Birmingham",
     "away": "Millwall",
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
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Atleti",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Man United",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "Feyenoord",
     "away": "Inter",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-03T20:00:00Z",
     "home": "LASK",
     "away": "Sl. Bratislava",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-03T22:30:00Z",
     "home": "Chapecoense",
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
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
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
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "FINISHED",
      "score": "6-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
      "status": "TIMED",
      "score": null
     },
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
    "home": "Cleveland Cavaliers",
    "away": "Oklahoma City Thunder",
    "score": "112-117",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Detroit Pistons",
    "score": "91-124",
    "status": "Final"
   },
   {
    "home": "Indiana Pacers",
    "away": "Atlanta Hawks",
    "score": "104-108",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Brooklyn Nets",
    "score": "103-90",
    "status": "Final"
   },
   {
    "home": "Orlando Magic",
    "away": "Washington Wizards",
    "score": "94-103",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Chicago Bulls",
    "score": "126-107",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Sacramento Kings",
    "score": "100-115",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "New Orleans Pelicans",
    "score": "134-133",
    "status": "OT1"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Milwaukee Bucks",
    "score": "112-100",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Boston Celtics",
    "score": "84-75",
    "status": "4th Qtr"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Utah Jazz",
    "score": "97-71",
    "status": "4th Qtr"
   },
   {
    "home": "Denver Nuggets",
    "away": "Portland Trail Blazers",
    "score": "70-58",
    "status": "3rd Qtr"
   },
   {
    "home": "Golden State Warriors",
    "away": "Phoenix Suns",
    "score": "15-25",
    "status": "1st Qtr"
   },
   {
    "home": "LA Clippers",
    "away": "Toronto Raptors",
    "score": "31-18",
    "status": "1st Qtr"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Miami Heat",
    "score": "30-22",
    "status": "1st Qtr"
   }
  ],
  "games_today": [],
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
     "title": "Jeers again as home woes continue - Jaissle has big problems at Newcastle",
     "published": "2026-11-02T23:53:46+00:00",
     "summary": "Three months into a four-year contract, the problems are mounting for Newcastle boss Matthias Jaissle after his side were booed off the pitch by their own fans following another defeat."
    },
    {
     "ref": "bbc_football#1",
     "title": "From nightmare debut season to Everton hero - Barry's revival",
     "published": "2026-11-02T23:28:17+00:00",
     "summary": "Last season Thierno Barry scored eight goals in 41 appearances. This season it's taken him just 12 games to match that tally."
    },
    {
     "ref": "bbc_football#2",
     "title": "Grealish can still have Everton future - Moyes",
     "published": "2026-11-02T23:14:27+00:00",
     "summary": "Everton boss David Moyes says there is a way back for Jack Grealish at the club - but does not know when he might return to the team."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-02T23:09:36+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#4",
     "title": "Jaissle unhappy with 'clear foul' before Barry goal",
     "published": "2026-11-02T23:01:13+00:00",
     "summary": "Newcastle United head coach Matthias Jaissle takes issue with referee John Brooks' decision not to call a \"clear foul\" on Fabian Schar in the build-up to Thierno Barry's goal in their loss to Everton in the Premier League."
    },
    {
     "ref": "bbc_football#5",
     "title": "'He's unavailable' - Moyes tight-lipped on Grealish",
     "published": "2026-11-02T22:54:52+00:00",
     "summary": "Everton manager David Moyes' post-match reaction to his side's one-goal win against struggling Newcastle United, as well as the availability of Jack Grealish following disciplinary action."
    },
    {
     "ref": "bbc_football#6",
     "title": "Everton hold off Newcastle to move into seventh",
     "published": "2026-11-02T22:44:30+00:00",
     "summary": "Thierno Barry scores against Newcastle United for the second time in five days as his Everton side earn a narrow win at St James' Park in the Premier League."
    },
    {
     "ref": "bbc_football#7",
     "title": "Arsenal want Kroupi in January - Tuesday's gossip",
     "published": "2026-11-02T22:24:56+00:00",
     "summary": "Arsenal want to boost their striking options with Bournemouth's Eli Junior Kroupi, Manchester United scout Borussia Dortmund quartet, plus more."
    },
    {
     "ref": "bbc_football#8",
     "title": "Who produced the kind of performance Moyes loves? - player ratings",
     "published": "2026-11-02T22:08:43+00:00",
     "summary": "Newcastle United and Everton's players rated following their Premier League match."
    },
    {
     "ref": "bbc_football#9",
     "title": "Kane would swap Ballon d'Or for Champions League victory",
     "published": "2026-11-02T21:46:42+00:00",
     "summary": "Bayern Munich striker Harry Kane says he would swap his Ballon d'Or trophy for a Champions League winner's medal."
    },
    {
     "ref": "bbc_football#10",
     "title": "Football Daily",
     "published": "2026-11-02T21:20:00+00:00",
     "summary": "Are Villa being hindered, should Carragher have apologised, & can Serie A succeed again?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Fifa to share 'key documents' over World Cup sell-off plan",
     "published": "2026-11-02T20:23:55+00:00",
     "summary": "Council members will need to travel to Fifa's headquarters in Zurich to see the documents, and will be subject to \"strict review protocols\"."
    },
    {
     "ref": "bbc_football#12",
     "title": "Police attacked with fireworks and bottles ahead of cup semi-final",
     "published": "2026-11-02T18:31:54+00:00",
     "summary": "The disorder happened on Curtis Avenue ahead of the Rangers v Aberdeen match at Hampden on Saturday."
    },
    {
     "ref": "bbc_football#13",
     "title": "Tenerife player in intensive care with injury",
     "published": "2026-11-02T18:18:55+00:00",
     "summary": "Tenerife striker Jesus de Miguel is in a stable condition in intensive care after suffering a serious injury during a Spanish second division match on Monday."
    },
    {
     "ref": "bbc_football#14",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-02T18:10:00+00:00",
     "summary": "Unbeaten in all competitions, are Sonia Bompastor's side getting back to their best?"
    },
    {
     "ref": "bbc_football#15",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-02T18:10:00+00:00",
     "summary": "Unbeaten in all competitions, are Sonia Bompastor's side getting back to their best?"
    },
    {
     "ref": "bbc_football#16",
     "title": "Key questions as Pocognoli prepares to name Scotland squad",
     "published": "2026-11-02T17:35:14+00:00",
     "summary": "Sebastien Pocognoli names his second Scotland squad on Tuesday, with various dilemmas to address."
    },
    {
     "ref": "bbc_football#17",
     "title": "Key questions as Pocognoli names Scotland squad",
     "published": "2026-11-02T17:35:14+00:00",
     "summary": "Sebastien Pocognoli names his second Scotland squad on Tuesday, with various dilemmas to address."
    },
    {
     "ref": "bbc_football#18",
     "title": "Carrick says it's 'crazy' but he's looking forward to Roma game",
     "published": "2026-11-02T16:00:07+00:00",
     "summary": "Under-pressure Michael Carrick says it might be \"crazy\" but he is looking forward to Manchester United's Champions League match against Roma at Old Trafford."
    },
    {
     "ref": "bbc_football#19",
     "title": "To dive or not to dive? Football's big dilemma",
     "published": "2026-11-02T14:06:47+00:00",
     "summary": "Liverpool feel Alexander Isak should have been awarded a penalty against Arsenal but with the striker not appealing for the decision and the VAR staying out of it, should he have made more of it?"
    },
    {
     "ref": "bbc_football#20",
     "title": "Worst in the EFL - the team with a penalty problem",
     "published": "2026-11-02T13:56:37+00:00",
     "summary": "Newport County have scored just two from nine penalties across the past two seasons in all competitions, so what's going wrong?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Hellberg unsure of 'brilliant' Lankshear's England chances",
     "published": "2026-11-02T13:36:46+00:00",
     "summary": "Head coach Kim Hellberg hails Will Lankshear a \"brilliant lad\" as the goals keep coming, raising questions of a possible England call-up."
    },
    {
     "ref": "bbc_football#22",
     "title": "Trailing 8-0 & down to six players - abandoned game labelled a 'farce'",
     "published": "2026-11-02T13:32:20+00:00",
     "summary": "A non-league game abandoned after one team was reduced to six players while trailing 8-0 is labelled \"a complete farce\"."
    },
    {
     "ref": "bbc_football#23",
     "title": "Bottom club Sunderland to stick with manager Le Bris",
     "published": "2026-11-02T12:04:09+00:00",
     "summary": "Sunderland manager Regis le Bris is set to be given more time to turn things around despite his side's poor start to the Premier League season."
    },
    {
     "ref": "bbc_football#24",
     "title": "Villa drop legal action threat against Carragher",
     "published": "2026-11-02T11:49:05+00:00",
     "summary": "Aston Villa will not move forward with any legal action towards Jamie Carragher."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "New England vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-03T03:22:25+00:00",
     "summary": "New England vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón - Inter Miami CF",
     "published": "2026-11-03T01:10:37+00:00",
     "summary": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi Leads Inter Miami to Concacaf Champions Cup Qualification Comeback - CubaHeadlines",
     "published": "2026-11-03T00:03:37+00:00",
     "summary": "Lionel Messi Leads Inter Miami to Concacaf Champions Cup Qualification Comeback CubaHeadlines"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Revolution Struggle Under Pressure Against Miami - The Blazing Musket",
     "published": "2026-11-02T21:51:13+00:00",
     "summary": "Revolution Struggle Under Pressure Against Miami The Blazing Musket"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi and Inter Miami get unexpected helping hand from MLS - Diario AS",
     "published": "2026-11-02T21:47:32+00:00",
     "summary": "Lionel Messi and Inter Miami get unexpected helping hand from MLS Diario AS"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi leads the comeback that qualifies Inter Miami for the Concachampions - CiberCuba",
     "published": "2026-11-02T20:29:45+00:00",
     "summary": "Messi leads the comeback that qualifies Inter Miami for the Concachampions CiberCuba"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi Named to MLS Team of the Matchday - Inter Miami CF",
     "published": "2026-11-02T19:04:16+00:00",
     "summary": "Messi Named to MLS Team of the Matchday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS Power Rankings: Miamis finds its feet with Decision Day coming up - ESPN",
     "published": "2026-11-02T18:35:00+00:00",
     "summary": "MLS Power Rankings: Miamis finds its feet with Decision Day coming up ESPN"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi lifts Inter Miami past Revs, into second in East - bdnews24.com",
     "published": "2026-11-02T17:48:00+00:00",
     "summary": "Lionel Messi lifts Inter Miami past Revs, into second in East bdnews24.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS: Messi sends Inter Miami to second win at New England - Blueprint Newspapers",
     "published": "2026-11-02T17:13:10+00:00",
     "summary": "MLS: Messi sends Inter Miami to second win at New England Blueprint Newspapers"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day - Goal.com",
     "published": "2026-11-02T16:40:43+00:00",
     "summary": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day Goal.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available - Inter Miami CF",
     "published": "2026-11-02T15:18:47+00:00",
     "summary": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win - The Sun",
     "published": "2026-11-02T14:56:58+00:00",
     "summary": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win The Sun"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi secures Inter Miami a place in CONCACAF - Tembah Football",
     "published": "2026-11-02T13:54:06+00:00",
     "summary": "Messi secures Inter Miami a place in CONCACAF Tembah Football"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF - Yahoo Sports",
     "published": "2026-11-02T12:35:17+00:00",
     "summary": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution - Front Row Soccer",
     "published": "2026-11-02T12:06:37+00:00",
     "summary": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution - Fana News -",
     "published": "2026-11-02T12:00:55+00:00",
     "summary": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution Fana News -"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi - OneFootball",
     "published": "2026-11-02T11:31:22+00:00",
     "summary": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi scores and assists as Inter Miami beat New England - playmakerstats.com",
     "published": "2026-11-02T10:59:02+00:00",
     "summary": "Messi scores and assists as Inter Miami beat New England playmakerstats.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England - TribalFootball",
     "published": "2026-11-02T10:47:22+00:00",
     "summary": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England TribalFootball"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open - beIN SPORTS",
     "published": "2026-11-02T10:11:05+00:00",
     "summary": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi steps up when Inter Miami need him most to secure Champions Cup spot - 101 Great Goals",
     "published": "2026-11-02T10:06:52+00:00",
     "summary": "Messi steps up when Inter Miami need him most to secure Champions Cup spot 101 Great Goals"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi heroics lead Inter Miami to Concacaf Champions Cup - MLSsoccer.com",
     "published": "2026-11-02T10:01:37+00:00",
     "summary": "Lionel Messi heroics lead Inter Miami to Concacaf Champions Cup MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi's 937th Goal Secures Victory for Inter Miami in MLS Match - Telecom Asia Sport",
     "published": "2026-11-02T09:53:17+00:00",
     "summary": "Messi's 937th Goal Secures Victory for Inter Miami in MLS Match Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi's latest moment of genius is why we'll never get bored watching him - Planet Football",
     "published": "2026-11-02T09:22:00+00:00",
     "summary": "Lionel Messi's latest moment of genius is why we'll never get bored watching him Planet Football"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - 12newsnow.com",
     "published": "2026-11-02T13:58:01+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More 12newsnow.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - 5newsonline.com",
     "published": "2026-11-02T13:54:36+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More 5newsonline.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - fox61.com",
     "published": "2026-11-02T13:52:00+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - firstcoastnews.com",
     "published": "2026-11-02T13:52:00+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More firstcoastnews.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - newscentermaine.com",
     "published": "2026-11-02T13:52:00+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More newscentermaine.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory - i24NEWS",
     "published": "2026-11-02T11:47:00+00:00",
     "summary": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory i24NEWS"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Avdija scores 24 and Lillard has 22 as Portland rolls over Utah 112-90 - Oregon Public Broadcasting - OPB",
     "published": "2026-11-01T16:55:37+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Portland rolls over Utah 112-90 Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Blazers crush Jazz, 112-90, despite Morant absence - Panay News",
     "published": "2026-11-01T16:42:00+00:00",
     "summary": "Blazers crush Jazz, 112-90, despite Morant absence Panay News"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija leads offense in Saturday's win over Jazz - FantasyPros",
     "published": "2026-11-01T13:35:47+00:00",
     "summary": "Deni Avdija leads offense in Saturday's win over Jazz FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Europeans in the NBA: Deni Avdija leads the way as Mario Hezonja makes his mark - basketballsphere.com",
     "published": "2026-11-01T07:56:57+00:00",
     "summary": "Europeans in the NBA: Deni Avdija leads the way as Mario Hezonja makes his mark basketballsphere.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win - CBS Sports",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija News: Hits for game-high 24 in win - RotoWire",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Deni Avdija News: Hits for game-high 24 in win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - FASTBREAK.com.ph",
     "published": "2026-11-01T01:45:17+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined FASTBREAK.com.ph"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 - NBA.com",
     "published": "2026-10-31T22:03:10+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-31T21:36:33+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija scores game-high 24 points vs. Utah - NBC Sports",
     "published": "2026-10-31T21:33:00+00:00",
     "summary": "Deni Avdija scores game-high 24 points vs. Utah NBC Sports"
    }
   ]
  }
 ]
}
</input>