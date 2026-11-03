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
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-02T19:45:00Z",
     "home": "Lorient",
     "away": "Brest",
     "status": "FINISHED",
     "score": "0-2"
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
     "competition": "Premier League",
     "kickoff_utc": "2026-11-02T20:00:00Z",
     "home": "Newcastle",
     "away": "Everton",
     "status": "FINISHED",
     "score": "0-1"
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
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "SL Benfica",
     "away": "Alverca",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-02T20:15:00Z",
     "home": "Gil Vicente",
     "away": "Vitória SC",
     "status": "FINISHED",
     "score": "0-0"
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
     "home": "Shaktar",
     "away": "Sporting CP",
     "status": "TIMED",
     "score": null
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
     "competition": "Championship",
     "kickoff_utc": "2026-11-03T19:45:00Z",
     "home": "Blackburn",
     "away": "Stoke",
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
    "score": "134-135",
    "status": "Final"
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
    "score": "109-93",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Utah Jazz",
    "score": "119-97",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "Portland Trail Blazers",
    "score": "110-118",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Phoenix Suns",
    "score": "116-113",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Toronto Raptors",
    "score": "118-125",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Miami Heat",
    "score": "138-117",
    "status": "Final"
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
     "title": "Tenerife striker De Miguel dies after on-field collision",
     "published": "2026-11-03T09:09:18+00:00",
     "summary": "Tenerife forward Jesus de Miguel dies after suffering an on-field collision during a Spanish second-division match."
    },
    {
     "ref": "bbc_football#1",
     "title": "West Ham sack head coach Nuno Espirito Santo",
     "published": "2026-11-03T08:55:55+00:00",
     "summary": "West Ham United sack head coach Nuno Espirito Santo after their disappointing start to the Championship season."
    },
    {
     "ref": "bbc_football#2",
     "title": "How Arteta is getting the best from Rice",
     "published": "2026-11-03T08:18:04+00:00",
     "summary": "Declan Rice was a key cog in Arsenal winning the Premier League title - so how is Mikel Arteta getting even more from him this season?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Celtic track teenager Doumbia - gossip",
     "published": "2026-11-03T08:04:45+00:00",
     "summary": "Celtic monitor Ivory Coast teenager playing in Sweden as one of their Europa League opponents seek a new manager."
    },
    {
     "ref": "bbc_football#4",
     "title": "From teenage limbo and Mangotsfield United to Champions League dream",
     "published": "2026-11-03T08:00:40+00:00",
     "summary": "In just two and a half years, Miguel Freckleton has gone from non-league to Champions League and being a fully fledged international."
    },
    {
     "ref": "bbc_football#5",
     "title": "Podcast: Dunfermline arrive in Championship title race",
     "published": "2026-11-03T08:00:00+00:00",
     "summary": "Dunfermline impress as the Championship heats up and County set the pace in League one."
    },
    {
     "ref": "bbc_football#6",
     "title": "Emery looks to show Villa can compete with elite",
     "published": "2026-11-03T07:33:17+00:00",
     "summary": "Aston Villa are looking to become the first English team to win at the Nou Camp in almost 20 years."
    },
    {
     "ref": "bbc_football#7",
     "title": "Asian Cup postponed in wake of attacks on Saudi Arabia",
     "published": "2026-11-03T07:15:17+00:00",
     "summary": "The 2027 Asian Cup in Saudi Arabia is postponed because of a series of deadly attacks on the host country."
    },
    {
     "ref": "bbc_football#8",
     "title": "The referee who became a role model after bouncing back from Diaz error",
     "published": "2026-11-03T06:41:31+00:00",
     "summary": "Referee Darren England shares how he has moved on from the VAR error that stalled his career to the FA Cup final and the Champions League."
    },
    {
     "ref": "bbc_football#9",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-03T06:12:20+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#10",
     "title": "Jeers again as home woes continue - Jaissle has big problems at Newcastle",
     "published": "2026-11-02T23:53:46+00:00",
     "summary": "Three months into a four-year contract, the problems are mounting for Newcastle boss Matthias Jaissle as his side are booed off the pitch by fans following another defeat."
    },
    {
     "ref": "bbc_football#11",
     "title": "From nightmare debut season to Everton hero - Barry's revival",
     "published": "2026-11-02T23:28:17+00:00",
     "summary": "Last season Thierno Barry scored eight goals in 41 appearances. This season it's taken him just 12 games to match that tally."
    },
    {
     "ref": "bbc_football#12",
     "title": "Grealish can still have Everton future - Moyes",
     "published": "2026-11-02T23:14:27+00:00",
     "summary": "Everton boss David Moyes says there is a way back for Jack Grealish at the club - but does not know when he might return to the team."
    },
    {
     "ref": "bbc_football#13",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-02T23:09:36+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Jaissle unhappy with 'clear foul' before Barry goal",
     "published": "2026-11-02T23:01:13+00:00",
     "summary": "Newcastle United head coach Matthias Jaissle takes issue with referee John Brooks' decision not to call a \"clear foul\" on Fabian Schar in the build-up to Thierno Barry's goal in their loss to Everton in the Premier League."
    },
    {
     "ref": "bbc_football#15",
     "title": "'He's unavailable' - Moyes tight-lipped on Grealish",
     "published": "2026-11-02T22:54:52+00:00",
     "summary": "Everton manager David Moyes' post-match reaction to his side's one-goal win against struggling Newcastle United, as well as the availability of Jack Grealish following disciplinary action."
    },
    {
     "ref": "bbc_football#16",
     "title": "Everton hold off Newcastle to move into seventh",
     "published": "2026-11-02T22:44:30+00:00",
     "summary": "Thierno Barry scores against Newcastle United for the second time in five days as his Everton side earn a narrow win at St James' Park in the Premier League."
    },
    {
     "ref": "bbc_football#17",
     "title": "Arsenal want Kroupi in January - Tuesday's gossip",
     "published": "2026-11-02T22:24:56+00:00",
     "summary": "Arsenal want to boost their striking options with Bournemouth's Eli Junior Kroupi, Manchester United scout Borussia Dortmund quartet, plus more."
    },
    {
     "ref": "bbc_football#18",
     "title": "Who produced the kind of performance Moyes loves? - player ratings",
     "published": "2026-11-02T22:08:43+00:00",
     "summary": "Newcastle United and Everton's players rated following their Premier League match."
    },
    {
     "ref": "bbc_football#19",
     "title": "Kane would swap Ballon d'Or for Champions League victory",
     "published": "2026-11-02T21:46:42+00:00",
     "summary": "Bayern Munich striker Harry Kane says he would swap his Ballon d'Or trophy for a Champions League winner's medal."
    },
    {
     "ref": "bbc_football#20",
     "title": "Football Daily",
     "published": "2026-11-02T21:20:00+00:00",
     "summary": "Are Villa being hindered, should Carragher have apologised, & can Serie A succeed again?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Fifa to share 'key documents' over World Cup sell-off plan",
     "published": "2026-11-02T20:23:55+00:00",
     "summary": "Council members will need to travel to Fifa's headquarters in Zurich to see the documents, and will be subject to \"strict review protocols\"."
    },
    {
     "ref": "bbc_football#22",
     "title": "Police attacked with fireworks and bottles ahead of cup semi-final",
     "published": "2026-11-02T18:31:54+00:00",
     "summary": "The disorder happened on Curtis Avenue ahead of the Rangers v Aberdeen match at Hampden on Saturday."
    },
    {
     "ref": "bbc_football#23",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-02T18:10:00+00:00",
     "summary": "Unbeaten in all competitions, are Sonia Bompastor's side getting back to their best?"
    },
    {
     "ref": "bbc_football#24",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-02T18:10:00+00:00",
     "summary": "Unbeaten in all competitions, are Sonia Bompastor's side getting back to their best?"
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "In sign of good times, LeBron takes sip of fan's wine as 76ers roll on",
     "published": "2026-11-03T07:57:54+00:00",
     "summary": "LeBron James took a sip of a fan's wine during the 76ers 126-107 win over the Bulls, saying he wanted to try \"how good it was.\""
    },
    {
     "ref": "espn_nba#1",
     "title": "Luka stays hot with 42, earns high praise from Giannis that 'some people are scared to say'",
     "published": "2026-11-03T07:57:54+00:00",
     "summary": "Luka Doncic's volcanic scoring spree continued Monday with 42 points in the Lakers' 138-117 win over the Heat, prompting Giannis Antetokounmpo to call him \"one of the best scorers to play this game.\""
    },
    {
     "ref": "espn_nba#2",
     "title": "Draymond ejected after scuffle with Brooks, Suns; Curry says it 'lit a fire' in Warriors",
     "published": "2026-11-03T07:57:54+00:00",
     "summary": "Draymond Green was ejected for the first time this season -- and 31st time of his career -- after receiving two technical fouls in the same sequence vs. the Suns."
    },
    {
     "ref": "espn_nba#3",
     "title": "0KC: Thunder will retire Westbrook's No. 0 this season",
     "published": "2026-11-03T07:57:54+00:00",
     "summary": "The Thunder will retire Russell Westbrook's No. 0 this season. The former MVP played the first 11 of his 18 seasons in Oklahoma City."
    },
    {
     "ref": "espn_nba#4",
     "title": "ESPN's Wilbon taking leave of absence to address health issues",
     "published": "2026-11-03T07:57:54+00:00",
     "summary": "Michael Wilbon, the longtime ESPN commentator and co-host of \"Pardon the Interruption,\" is taking a leave of absence to address health issues."
    },
    {
     "ref": "espn_nba#5",
     "title": "Missing 11 players, Pacers play just six in loss to Hawks",
     "published": "2026-11-03T07:57:53+00:00",
     "summary": "With 11 players on the sideline Monday, the Pacers had just six log minutes in their 108-104 loss to the Hawks."
    },
    {
     "ref": "espn_nba#6",
     "title": "SGA, with 'look in his eye,' nets 43 as Thunder hand Cavaliers first home loss",
     "published": "2026-11-03T07:57:53+00:00",
     "summary": "Shai Gilgeous-Alexander scored a season-high 43 points and made a go-ahead 3-pointer with 32.6 seconds remaining as the Oklahoma City Thunder defeated the Cleveland Cavaliers 117-112 on Monday night at Rocket Arena in the first of a two-game set."
    },
    {
     "ref": "espn_nba#7",
     "title": "White returns for Hornets, Knueppel 'right around the corner'",
     "published": "2026-11-03T07:57:53+00:00",
     "summary": "Coby White made his season debut for the Hornets on Monday vs. the Pistons and second-year guard Kon Kneuppel's return is also expected soon."
    },
    {
     "ref": "espn_nba#8",
     "title": "🏀 Inside the stunning 72-hour Lakers sale and the uncertainty that still looms",
     "published": "2026-11-03T07:57:53+00:00",
     "summary": "Three days of secret talks resulted in Mark Walter flipping the Lakers -- and reignited yet another round of bickering among the six Buss siblings."
    },
    {
     "ref": "espn_nba#9",
     "title": "Jaylen Brown shows appreciation for rare, expensive piece in Boston apartment",
     "published": "2026-11-02T19:39:57+00:00",
     "summary": "The Sixers guard's Boston apartment contains possession of some rare pieces."
    },
    {
     "ref": "espn_nba#10",
     "title": "Wide-open title and MVP races: How the NBA has cracked open in just two weeks",
     "published": "2026-11-02T15:30:29+00:00",
     "summary": "The season is still young, but injuries and surprising developments have already changed narratives."
    },
    {
     "ref": "espn_nba#11",
     "title": "NBA buzz: Latest news, updates and intel for the 2026-27 season",
     "published": "2026-11-02T15:30:23+00:00",
     "summary": "The NBA is back. The buzz never left. Bookmark this page for the latest news, rumblings and analysis from ESPN's insiders."
    },
    {
     "ref": "espn_nba#12",
     "title": "Thunder's $500 million problem: Execs on what they could -- and should -- do",
     "published": "2026-11-01T16:36:19+00:00",
     "summary": "What should OKC do after two season-altering injuries? Brian Windhorst and Tim MacMahon take the pulse of the league."
    },
    {
     "ref": "espn_nba#13",
     "title": "An exclusive with Kevin Durant: On his time in OKC, his legacy and the Thunder's 2025 title",
     "published": "2026-11-01T16:36:19+00:00",
     "summary": "After the most acrimonious exit of his career, Durant reveals how much he appreciates Oklahoma City."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "West Ham sack manager Nuno Espírito Santo after poor start",
     "published": "2026-11-03T09:07:52+00:00",
     "summary": "West Ham have sacked manager Nuno Espírito Santo after their drab start to the Championship season."
    },
    {
     "ref": "espn_soccer#1",
     "title": "Tenerife forward Jesús de Miguel dies after on-field collision",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "Tenerife forward Jesús de Miguel has died after suffering a cardiac arrest following an on-field collision in a Spanish LaLiga 2 match on Monday, the club have said in a statement."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Kane says new Bayern deal 'extremely close,' will happen in coming days",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "Ballon d'Or winner Harry Kane is determined to help Bayern Munich come through more difficult moments as they prepare to face Atlético Madrid in the Champions League."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Arsenal's Madueke: Mac Allister tried to 'bait me' into red",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "Noni Madueke has said that Alexis Mac Allister tried to \"bait\" him into getting a red card during Arsenal's 1-0 win over Liverpool at Anfield."
    },
    {
     "ref": "espn_soccer#4",
     "title": "There is a way back for Jack Grealish after another Everton omission - David Moyes",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "Jack Grealish was not named in Everton's squad for Monday's Premier League match at Newcastle United due to a fitness issue."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Reports: FIFA to share World Cup private equity files after UEFA pressure",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "FIFA has agreed to grant access to confidential documents detailing its aborted plan to sell a stake in the World Cup to private investors, according to multiple reports."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Carrick: 'No concerns' over Martínez's Utd commitment",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "Michael Carrick has insisted he's got \"no concerns\" about Lisandro Martinez's commitment to Manchester United."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Asian Football Confederation postpones 2027 Asian Cup in Saudi Arabia",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "The Asian Football Confederation has confirmed that the 2027 AFC Asian Cup, which was scheduled to be held from Jan. 7 to Feb. 5, will be postponed due to regional security concerns."
    },
    {
     "ref": "espn_soccer#8",
     "title": "🏅 James Milner runs NYC Marathon in just over three hours",
     "published": "2026-11-03T09:07:23+00:00",
     "summary": "It's clear James Milner is enjoying his retirement from soccer, as he ran the 2026 NYC Marathon on Sunday with an impressive time. Did we mention he's 40 years old?"
    },
    {
     "ref": "espn_soccer#9",
     "title": "Why Man City's cheating scandal could help them win Champions League -- and what it would mean",
     "published": "2026-11-03T09:02:51+00:00",
     "summary": "What would happen to Man City's superstar players if they get relegated from the Premier League but qualify for Champions League?"
    },
    {
     "ref": "espn_soccer#10",
     "title": "MLS Power Rankings: Miami find their feet with Decision Day coming up",
     "published": "2026-11-03T08:48:20+00:00",
     "summary": "Which teams are in the best position heading into Decision Day? All this and more in our latest edition of the rankings."
    },
    {
     "ref": "espn_soccer#11",
     "title": "One burning question for every NWSL team eliminated from the playoffs",
     "published": "2026-11-03T08:47:53+00:00",
     "summary": "The NWSL Championship is almost here -- and these teams won't be in it. ESPN breaks down every eliminated team's biggest offseason question to answer."
    },
    {
     "ref": "espn_soccer#12",
     "title": "NWSL Power Rankings: Gotham FC claims No. 1 with first NWSL Shield",
     "published": "2026-11-03T08:47:53+00:00",
     "summary": "There can only be one No. 1 in our rankings, with Gotham FC adding yet more hardware to their trophy cabinet."
    },
    {
     "ref": "espn_soccer#13",
     "title": "Transfer rumors, news: Real Madrid tracking Arsenal left back Calafiori",
     "published": "2026-11-03T08:38:32+00:00",
     "summary": "Real Madrid are monitoring Arsenal defender Riccardo Calafiori as a primary target to strengthen their left back position. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#14",
     "title": "Why Manchester United are so bad at hiring managers post-Ferguson",
     "published": "2026-11-03T08:38:27+00:00",
     "summary": "This week marks 40 years since Manchester United hired Sir Alex Ferguson as their manager. It was the last time the club made the right appointment."
    },
    {
     "ref": "espn_soccer#15",
     "title": "How Arsenal got a big win at Liverpool; Milan derby drama; Carrick's future; more",
     "published": "2026-11-02T16:52:53+00:00",
     "summary": "Arsenal got a big win at Liverpool to go clear atop the Premier League, but Liverpool should have had a penalty. Plus: Michael Carrick's Man United future, Milan's bounce-back, Bayern's frustrations and more."
    },
    {
     "ref": "espn_soccer#16",
     "title": "Arsenal hold on for a big win at Liverpool, one Iraola & Co. can learn from",
     "published": "2026-11-02T16:09:09+00:00",
     "summary": "Arsenal's defense held firm against the Reds' expensive attack to notch a famous win at Anfield for the first time since 2012. However, there were positive signs for Liverpool when it came to their intensity and effort."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Premier League VAR review: Liverpool denied a penalty vs. Arsenal?",
     "published": "2026-11-02T16:09:09+00:00",
     "summary": "VAR often causes controversy, but how are decisions made? Our resident ref, Andy Davies, explains all."
    },
    {
     "ref": "espn_soccer#18",
     "title": "Man United implode at Chelsea, and, make no mistake, they are in a Premier League relegation battle",
     "published": "2026-11-01T21:56:13+00:00",
     "summary": "Manchester United missed chances, saw Lisandro Martinez sent off and lost 2-0 to Chelsea. They will be battling against the drop, whoever the manager is."
    },
    {
     "ref": "espn_soccer#19",
     "title": "Are Man City fans right about a Premier League 'Red Cartel' that's out to get them?",
     "published": "2026-11-01T21:56:13+00:00",
     "summary": "Man City fans have insisted that Liverpool, Man United and Arsenal have been conspiring against them."
    },
    {
     "ref": "espn_soccer#20",
     "title": "Ronaldo goal review: Why his 982nd career strike should be an own goal instead",
     "published": "2026-11-01T21:54:12+00:00",
     "summary": "As Cristiano Ronaldo closes in on his 1,000th career goal, every strike counts. But there is some disagreement over whether his 982nd should be his at all."
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
     "published": "2026-11-03T06:27:59+00:00",
     "summary": "New England vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Messi leads Inter Miami to the 2027 CONCACAF Champions Cup after an exciting win over New England - arabcanadanews.ca",
     "published": "2026-11-03T03:29:24+00:00",
     "summary": "Messi leads Inter Miami to the 2027 CONCACAF Champions Cup after an exciting win over New England arabcanadanews.ca"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón - Inter Miami CF",
     "published": "2026-11-03T01:10:37+00:00",
     "summary": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi leads Inter Miami comeback and Concacaf berth - KarloBag.eu",
     "published": "2026-11-02T22:26:39+00:00",
     "summary": "Messi leads Inter Miami comeback and Concacaf berth KarloBag.eu"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Revolution Struggle Under Pressure Against Miami - The Blazing Musket",
     "published": "2026-11-02T21:51:13+00:00",
     "summary": "Revolution Struggle Under Pressure Against Miami The Blazing Musket"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi and Inter Miami get unexpected helping hand from MLS - Diario AS",
     "published": "2026-11-02T21:47:32+00:00",
     "summary": "Lionel Messi and Inter Miami get unexpected helping hand from MLS Diario AS"
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
     "title": "Another 30-Goal Season for Lionel Andrés Messi - beIN SPORTS",
     "published": "2026-11-02T18:18:21+00:00",
     "summary": "Another 30-Goal Season for Lionel Andrés Messi beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi sends Miami second with 2-1 win at New England - Kuwait Times",
     "published": "2026-11-02T18:00:00+00:00",
     "summary": "Messi sends Miami second with 2-1 win at New England Kuwait Times"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi lifts Inter Miami past Revs, into second in East - Oman Observer",
     "published": "2026-11-02T17:03:40+00:00",
     "summary": "Lionel Messi lifts Inter Miami past Revs, into second in East Oman Observer"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day - Goal.com",
     "published": "2026-11-02T16:40:43+00:00",
     "summary": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day Goal.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "LIONEL MESSI SENDS INTER MIAMI TO SECOND SPOT - The Manila Times",
     "published": "2026-11-02T16:01:00+00:00",
     "summary": "LIONEL MESSI SENDS INTER MIAMI TO SECOND SPOT The Manila Times"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available - Inter Miami CF",
     "published": "2026-11-02T15:18:47+00:00",
     "summary": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win - The Sun",
     "published": "2026-11-02T14:56:58+00:00",
     "summary": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win The Sun"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi shkëlqen me gol dhe asist, Inter Miami përmbys rezultatin ndaj New England - Reporteri.net",
     "published": "2026-11-02T14:29:24+00:00",
     "summary": "Messi shkëlqen me gol dhe asist, Inter Miami përmbys rezultatin ndaj New England Reporteri.net"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi secures Inter Miami a place in CONCACAF - Tembah Football",
     "published": "2026-11-02T13:54:06+00:00",
     "summary": "Messi secures Inter Miami a place in CONCACAF Tembah Football"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF - Yahoo Sports",
     "published": "2026-11-02T12:35:17+00:00",
     "summary": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution - Front Row Soccer",
     "published": "2026-11-02T12:06:37+00:00",
     "summary": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution - Fana News -",
     "published": "2026-11-02T12:00:55+00:00",
     "summary": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution Fana News -"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi - OneFootball",
     "published": "2026-11-02T11:31:22+00:00",
     "summary": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England - TribalFootball",
     "published": "2026-11-02T10:47:22+00:00",
     "summary": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England TribalFootball"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi leads Inter Miami to secure its place in the CONCACAF Champions Cup - www.jordannews.jo",
     "published": "2026-11-02T10:13:44+00:00",
     "summary": "Messi leads Inter Miami to secure its place in the CONCACAF Champions Cup www.jordannews.jo"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open - beIN SPORTS",
     "published": "2026-11-02T10:11:05+00:00",
     "summary": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open - FotMob",
     "published": "2026-11-02T10:11:05+00:00",
     "summary": "New England Revolution 1-2 Inter Miami: Messi strikes winner as battle for second stays open FotMob"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome - fox61.com",
     "published": "2026-11-03T07:38:00+00:00",
     "summary": "Deni Avdija, Jrue Holiday Power a Win in Denver | The Early Season Trail Blazers Are Fun & Fearsome fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "DENVER — Deni Avdija scored nine of his 28 points in the fourth quarter and the Portland Trail Blazers beat the Denver Nuggets 118-110 on Monday night, extending their road winning streak to begin the season. Read more: https://rebrand.ly/2460269 - LinkedIn",
     "published": "2026-11-03T07:32:49+00:00",
     "summary": "DENVER — Deni Avdija scored nine of his 28 points in the fourth quarter and the Portland Trail Blazers beat the Denver Nuggets 118-110 on Monday night, extending their road winning streak to begin the season. Read more: https://rebrand.ly/2460269 LinkedIn"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija scores team-high 28 points in win - NBC Sports",
     "published": "2026-11-03T07:17:01+00:00",
     "summary": "Deni Avdija scores team-high 28 points in win NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija powers Trail Blazers past Nuggets - TalkBasket.net",
     "published": "2026-11-03T07:09:07+00:00",
     "summary": "Deni Avdija powers Trail Blazers past Nuggets TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija drops 28 points Monday - FantasyPros",
     "published": "2026-11-03T07:06:06+00:00",
     "summary": "Deni Avdija drops 28 points Monday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - The Manila Times",
     "published": "2026-11-03T07:00:00+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets The Manila Times"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers storm back to beat Nuggets, remain perfect on the road - Field Level Media",
     "published": "2026-11-03T06:56:11+00:00",
     "summary": "Blazers storm back to beat Nuggets, remain perfect on the road Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - Denver7",
     "published": "2026-11-03T06:45:01+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets Denver7"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Highlights From Deni Avdija 28-Point Game - NBA.com",
     "published": "2026-11-03T06:42:46+00:00",
     "summary": "Highlights From Deni Avdija 28-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Damian Lillard already looks like the co-star Deni Avdija was missing - Rip City Project",
     "published": "2026-11-03T05:17:11+00:00",
     "summary": "Damian Lillard already looks like the co-star Deni Avdija was missing Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - Oskaloosa Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets Oskaloosa Herald"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets - Durango Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets Durango Herald"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - The Killeen Daily Herald",
     "published": "2026-11-03T04:51:18+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets The Killeen Daily Herald"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets - ESPN",
     "published": "2026-11-03T04:51:00+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers' 118-110 win over the Nuggets ESPN"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win - CBS Sports",
     "published": "2026-11-03T04:45:41+00:00",
     "summary": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija finishes through contact, 11/02/2026 - Yahoo Sports",
     "published": "2026-11-03T04:37:25+00:00",
     "summary": "Deni Avdija finishes through contact, 11/02/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija gets the and-1 to fall - ESPN",
     "published": "2026-11-03T02:50:02+00:00",
     "summary": "Deni Avdija gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - fox61.com",
     "published": "2026-11-02T13:52:00+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory - i24NEWS",
     "published": "2026-11-02T11:47:00+00:00",
     "summary": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory i24NEWS"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Blazers crush Jazz, 112-90, despite Morant absence - Panay News",
     "published": "2026-11-01T16:42:00+00:00",
     "summary": "Blazers crush Jazz, 112-90, despite Morant absence Panay News"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija leads offense in Saturday's win over Jazz - FantasyPros",
     "published": "2026-11-01T13:35:47+00:00",
     "summary": "Deni Avdija leads offense in Saturday's win over Jazz FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win - CBS Sports",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - FASTBREAK.com.ph",
     "published": "2026-11-01T01:45:17+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined FASTBREAK.com.ph"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    }
   ]
  }
 ]
}
</input>