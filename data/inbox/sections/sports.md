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
     "home": "Feyenoord",
     "away": "Inter",
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
     "title": "West Ham sack head coach Nuno Espirito Santo",
     "published": "2026-11-03T10:26:27+00:00",
     "summary": "West Ham United sack head coach Nuno Espirito Santo and are said to be in talks with Scott Parker as his replacement."
    },
    {
     "ref": "bbc_football#1",
     "title": "Mee and Kenny handed first Northern Ireland call-ups",
     "published": "2026-11-03T10:07:54+00:00",
     "summary": "Manchester United goalkeeper Dermot Mee and Portsmouth's Eoin Kenny are handed their first Northern Ireland call-ups for November's Nations League games with Ukraine and Hungary."
    },
    {
     "ref": "bbc_football#2",
     "title": "Boy arrested following Bradley Lowery taunt",
     "published": "2026-11-03T09:21:56+00:00",
     "summary": "Police are investigating an incident at Coventry's Premier League match with Sunderland on Saturday."
    },
    {
     "ref": "bbc_football#3",
     "title": "Tenerife striker De Miguel dies after on-field collision",
     "published": "2026-11-03T09:09:18+00:00",
     "summary": "Tenerife forward Jesus de Miguel dies after suffering an on-field collision during a Spanish second-division match."
    },
    {
     "ref": "bbc_football#4",
     "title": "How Arteta is getting the best from Rice",
     "published": "2026-11-03T08:18:04+00:00",
     "summary": "Declan Rice was a key cog in Arsenal winning the Premier League title - so how is Mikel Arteta getting even more from him this season?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Celtic track teenager Doumbia - gossip",
     "published": "2026-11-03T08:04:45+00:00",
     "summary": "Celtic monitor Ivory Coast teenager playing in Sweden as one of their Europa League opponents seek a new manager."
    },
    {
     "ref": "bbc_football#6",
     "title": "From teenage limbo and Mangotsfield United to Champions League dream",
     "published": "2026-11-03T08:00:40+00:00",
     "summary": "In just two and a half years, Miguel Freckleton has gone from non-league to Champions League and being a fully fledged international."
    },
    {
     "ref": "bbc_football#7",
     "title": "Podcast: Dunfermline arrive in Championship title race",
     "published": "2026-11-03T08:00:00+00:00",
     "summary": "Dunfermline impress as the Championship heats up and County set the pace in League one."
    },
    {
     "ref": "bbc_football#8",
     "title": "Emery looks to show Villa can compete with elite",
     "published": "2026-11-03T07:33:17+00:00",
     "summary": "Aston Villa are looking to become the first English team to win at the Nou Camp in almost 20 years."
    },
    {
     "ref": "bbc_football#9",
     "title": "Asian Cup postponed in wake of attacks on Saudi Arabia",
     "published": "2026-11-03T07:15:17+00:00",
     "summary": "The 2027 Asian Cup in Saudi Arabia is postponed because of a series of deadly attacks on the host country."
    },
    {
     "ref": "bbc_football#10",
     "title": "The referee who became a role model after bouncing back from Diaz error",
     "published": "2026-11-03T06:41:31+00:00",
     "summary": "Referee Darren England shares how he has moved on from the VAR error that stalled his career to the FA Cup final and the Champions League."
    },
    {
     "ref": "bbc_football#11",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-03T06:12:20+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#12",
     "title": "Jeers again as home woes continue - Jaissle has big problems at Newcastle",
     "published": "2026-11-02T23:53:46+00:00",
     "summary": "Three months into a four-year contract, the problems are mounting for Newcastle boss Matthias Jaissle as his side are booed off the pitch by fans following another defeat."
    },
    {
     "ref": "bbc_football#13",
     "title": "From nightmare debut season to Everton hero - Barry's revival",
     "published": "2026-11-02T23:28:17+00:00",
     "summary": "Last season Thierno Barry scored eight goals in 41 appearances. This season it's taken him just 12 games to match that tally."
    },
    {
     "ref": "bbc_football#14",
     "title": "Grealish can still have Everton future - Moyes",
     "published": "2026-11-02T23:14:27+00:00",
     "summary": "Everton boss David Moyes says there is a way back for Jack Grealish at the club - but does not know when he might return to the team."
    },
    {
     "ref": "bbc_football#15",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-02T23:09:36+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#16",
     "title": "Jaissle unhappy with 'clear foul' before Barry goal",
     "published": "2026-11-02T23:01:13+00:00",
     "summary": "Newcastle United head coach Matthias Jaissle takes issue with referee John Brooks' decision not to call a \"clear foul\" on Fabian Schar in the build-up to Thierno Barry's goal in their loss to Everton in the Premier League."
    },
    {
     "ref": "bbc_football#17",
     "title": "'He's unavailable' - Moyes tight-lipped on Grealish",
     "published": "2026-11-02T22:54:52+00:00",
     "summary": "Everton manager David Moyes' post-match reaction to his side's one-goal win against struggling Newcastle United, as well as the availability of Jack Grealish following disciplinary action."
    },
    {
     "ref": "bbc_football#18",
     "title": "Everton hold off Newcastle to move into seventh",
     "published": "2026-11-02T22:44:30+00:00",
     "summary": "Thierno Barry scores against Newcastle United for the second time in five days as his Everton side earn a narrow win at St James' Park in the Premier League."
    },
    {
     "ref": "bbc_football#19",
     "title": "Arsenal want Kroupi in January - Tuesday's gossip",
     "published": "2026-11-02T22:24:56+00:00",
     "summary": "Arsenal want to boost their striking options with Bournemouth's Eli Junior Kroupi, Manchester United scout Borussia Dortmund quartet, plus more."
    },
    {
     "ref": "bbc_football#20",
     "title": "Who produced the kind of performance Moyes loves? - player ratings",
     "published": "2026-11-02T22:08:43+00:00",
     "summary": "Newcastle United and Everton's players rated following their Premier League match."
    },
    {
     "ref": "bbc_football#21",
     "title": "Kane would swap Ballon d'Or for Champions League victory",
     "published": "2026-11-02T21:46:42+00:00",
     "summary": "Bayern Munich striker Harry Kane says he would swap his Ballon d'Or trophy for a Champions League winner's medal."
    },
    {
     "ref": "bbc_football#22",
     "title": "Football Daily",
     "published": "2026-11-02T21:20:00+00:00",
     "summary": "Are Villa being hindered, should Carragher have apologised, & can Serie A succeed again?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Fifa to share 'key documents' over World Cup sell-off plan",
     "published": "2026-11-02T20:23:55+00:00",
     "summary": "Council members will need to travel to Fifa's headquarters in Zurich to see the documents, and will be subject to \"strict review protocols\"."
    },
    {
     "ref": "bbc_football#24",
     "title": "Police attacked with fireworks and bottles ahead of cup semi-final",
     "published": "2026-11-02T18:31:54+00:00",
     "summary": "The disorder happened on Curtis Avenue ahead of the Rangers v Aberdeen match at Hampden on Saturday."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi and Feingold star as Inter Miami beat New England 2–1 - The Jerusalem Post",
     "published": "2026-11-03T10:15:00+00:00",
     "summary": "Messi and Feingold star as Inter Miami beat New England 2–1 The Jerusalem Post"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "New England vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-11-03T09:29:12+00:00",
     "summary": "New England vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi inspires Inter Miami comeback to move second in Eastern Conference - News Today",
     "published": "2026-11-03T06:38:50+00:00",
     "summary": "Messi inspires Inter Miami comeback to move second in Eastern Conference News Today"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi heroics lead Inter Miami to Champions Cup - Nagaland Post",
     "published": "2026-11-03T06:10:10+00:00",
     "summary": "Messi heroics lead Inter Miami to Champions Cup Nagaland Post"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi Reaches 937 Career Goals In Inter Miami 2-1 Victory - New National Star",
     "published": "2026-11-03T05:32:04+00:00",
     "summary": "Messi Reaches 937 Career Goals In Inter Miami 2-1 Victory New National Star"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi Steals The Show In 2-1 Away Triumph For Inter Miami - Outlook India",
     "published": "2026-11-03T04:11:31+00:00",
     "summary": "Lionel Messi Steals The Show In 2-1 Away Triumph For Inter Miami Outlook India"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón - Inter Miami CF",
     "published": "2026-11-03T01:10:37+00:00",
     "summary": "Gearing Up for The Huddle Vol. 3: A Look Back at Lively Second In-App Player Chat Featuring Sergio Reguilón Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi Leads Inter Miami to Concacaf Champions Cup Qualification Comeback - CubaHeadlines",
     "published": "2026-11-03T00:03:37+00:00",
     "summary": "Lionel Messi Leads Inter Miami to Concacaf Champions Cup Qualification Comeback CubaHeadlines"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Revolution Struggle Under Pressure Against Miami - The Blazing Musket",
     "published": "2026-11-02T21:51:13+00:00",
     "summary": "Revolution Struggle Under Pressure Against Miami The Blazing Musket"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi and Inter Miami get unexpected helping hand from MLS - Diario AS",
     "published": "2026-11-02T21:47:32+00:00",
     "summary": "Lionel Messi and Inter Miami get unexpected helping hand from MLS Diario AS"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi leads the comeback that qualifies Inter Miami for the Concachampions - CiberCuba",
     "published": "2026-11-02T20:29:45+00:00",
     "summary": "Messi leads the comeback that qualifies Inter Miami for the Concachampions CiberCuba"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi Named to MLS Team of the Matchday - Inter Miami CF",
     "published": "2026-11-02T19:04:16+00:00",
     "summary": "Messi Named to MLS Team of the Matchday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MLS Power Rankings: Miamis finds its feet with Decision Day coming up - ESPN",
     "published": "2026-11-02T18:35:00+00:00",
     "summary": "MLS Power Rankings: Miamis finds its feet with Decision Day coming up ESPN"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi lifts Inter Miami past Revs, into second in East - bdnews24.com",
     "published": "2026-11-02T17:48:00+00:00",
     "summary": "Lionel Messi lifts Inter Miami past Revs, into second in East bdnews24.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS: Messi sends Inter Miami to second win at New England - Blueprint Newspapers",
     "published": "2026-11-02T17:13:10+00:00",
     "summary": "MLS: Messi sends Inter Miami to second win at New England Blueprint Newspapers"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day - Goal.com",
     "published": "2026-11-02T16:40:43+00:00",
     "summary": "MLS Winners and Losers: Nashville SC flirt with MLS records, Lionel Messi's Inter Miami get lucky and the West seems well-poised for Decision Day Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available - Inter Miami CF",
     "published": "2026-11-02T15:18:47+00:00",
     "summary": "On Sale Now: Round One Tickets for Inter Miami CF’s Audi 2026 MLS Cup Playoffs Available Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win - The Sun",
     "published": "2026-11-02T14:56:58+00:00",
     "summary": "Lionel Messi pulls off sensational 'bluetooth assist' with BACKWARDS header in Inter Miami win The Sun"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi secures Inter Miami a place in CONCACAF - Tembah Football",
     "published": "2026-11-02T13:54:06+00:00",
     "summary": "Messi secures Inter Miami a place in CONCACAF Tembah Football"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF - Yahoo Sports",
     "published": "2026-11-02T12:35:17+00:00",
     "summary": "Lionel Messi’s Magic Comeback Seals Concacaf Champions Cup Berth for Inter Miami CF Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution - Front Row Soccer",
     "published": "2026-11-02T12:06:37+00:00",
     "summary": "SOME LATE MESSI MAGIC: Inter Miami rallies to edge Revolution Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution - Fana News -",
     "published": "2026-11-02T12:00:55+00:00",
     "summary": "Messi Fires Inter Miami to 2-1 Comeback Win Over New England Revolution Fana News -"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi - OneFootball",
     "published": "2026-11-02T11:31:22+00:00",
     "summary": "New England Revolution - Inter Miami CF 1 - 2 | TOR - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi scores and assists as Inter Miami beat New England - playmakerstats.com",
     "published": "2026-11-02T10:59:02+00:00",
     "summary": "Messi scores and assists as Inter Miami beat New England playmakerstats.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England - TribalFootball",
     "published": "2026-11-02T10:47:22+00:00",
     "summary": "Lionel Messi strikes late as Inter Miami forge comeback to beat New England TribalFootball"
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
     "title": "Highlights From Deni Avdija 28-Point Game - NBA.com",
     "published": "2026-11-03T06:42:46+00:00",
     "summary": "Highlights From Deni Avdija 28-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets - myMotherLode.com",
     "published": "2026-11-03T06:31:14+00:00",
     "summary": "Deni Avdija scores 28 points in the Trail Blazers’ 118-110 win over the Nuggets myMotherLode.com"
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
     "title": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win - CBS Sports",
     "published": "2026-11-03T04:45:41+00:00",
     "summary": "Trail Blazers' Deni Avdija: Drops season-high 28 points in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija finishes through contact, 11/02/2026 - Yahoo Sports",
     "published": "2026-11-03T04:37:25+00:00",
     "summary": "Deni Avdija finishes through contact, 11/02/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija gets the and-1 to fall - ESPN",
     "published": "2026-11-03T02:50:02+00:00",
     "summary": "Deni Avdija gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More - fox61.com",
     "published": "2026-11-02T13:52:00+00:00",
     "summary": "Trail Blazers, Deni Avdija Mute Jazz in Easy Win | Thoughts On Scoot, Dame, Donovan Clingan and More fox61.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory - i24NEWS",
     "published": "2026-11-02T11:47:00+00:00",
     "summary": "NBA: Israeli Deni Avdija Shines With 24 Points, Leads Portland To Victory i24NEWS"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Blazers crush Jazz, 112-90, despite Morant absence - Panay News",
     "published": "2026-11-01T16:42:00+00:00",
     "summary": "Blazers crush Jazz, 112-90, despite Morant absence Panay News"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija leads offense in Saturday's win over Jazz - FantasyPros",
     "published": "2026-11-01T13:35:47+00:00",
     "summary": "Deni Avdija leads offense in Saturday's win over Jazz FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win - CBS Sports",
     "published": "2026-11-01T03:46:58+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for game-high 24 in win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz - TSN",
     "published": "2026-11-01T03:09:00+00:00",
     "summary": "Avdija scores 24 and Lillard has 22 as Trail Blazers roll over Jazz TSN"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Blazers blow out Jazz with Ja Morant sidelined - FASTBREAK.com.ph",
     "published": "2026-11-01T01:45:17+00:00",
     "summary": "Blazers blow out Jazz with Ja Morant sidelined FASTBREAK.com.ph"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win - HoopsHype",
     "published": "2026-10-31T22:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Utah in easy win HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 - NBA.com",
     "published": "2026-10-31T22:03:10+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 5 Rebounds) | Trail Blazers 112, Jazz 90 | Oct. 31, 2026 NBA.com"
    }
   ]
  }
 ]
}
</input>