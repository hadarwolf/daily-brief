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
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T00:00:00Z",
     "home": "Estoril Praia",
     "away": "Marítimo",
     "status": "POSTPONED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T11:15:00Z",
     "home": "Heerenveen",
     "away": "Feyenoord",
     "status": "FINISHED",
     "score": "5-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T11:30:00Z",
     "home": "Napoli",
     "away": "Lazio",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T13:00:00Z",
     "home": "Elche",
     "away": "Real Betis",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T13:30:00Z",
     "home": "Twente",
     "away": "Ajax",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Stade Rennais",
     "away": "Lille",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Genoa",
     "away": "Milan",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Brighton Hove",
     "away": "Brentford",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Sunderland",
     "away": "Chelsea",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Ipswich Town",
     "away": "Bournemouth",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Monza",
     "away": "Atalanta",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T14:00:00Z",
     "home": "Crystal Palace",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T14:30:00Z",
     "home": "1. FC Köln",
     "away": "Leverkusen",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T15:15:00Z",
     "home": "Real Sociedad",
     "away": "Rayo Vallecano",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T15:30:00Z",
     "home": "CD Nacional",
     "away": "Acad. Viseu",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T15:30:00Z",
     "home": "Santa Clara",
     "away": "Gil Vicente",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T15:45:00Z",
     "home": "AZ",
     "away": "Groningen",
     "status": "FINISHED",
     "score": "4-3"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T15:45:00Z",
     "home": "Cambuur",
     "away": "PSV",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Le Mans",
     "away": "Monaco",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Le Havre",
     "away": "Lorient",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Brest",
     "away": "Olympique Lyon",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T16:15:00Z",
     "home": "Angers SCO",
     "away": "Nice",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T16:30:00Z",
     "home": "Freiburg",
     "away": "Union Berlin",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-11-08T16:30:00Z",
     "home": "Man United",
     "away": "Aston Villa",
     "status": "FINISHED",
     "score": "4-4"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T17:00:00Z",
     "home": "Inter",
     "away": "Como 1907",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T17:30:00Z",
     "home": "Villarreal",
     "away": "Getafe",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T17:30:00Z",
     "home": "Celta",
     "away": "Levante",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T18:00:00Z",
     "home": "Vitória SC",
     "away": "Porto",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-11-08T18:30:00Z",
     "home": "Hoffenheim",
     "away": "Schalke",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-11-08T19:00:00Z",
     "home": "Utrecht",
     "away": "NEC",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-11-08T19:45:00Z",
     "home": "Fiorentina",
     "away": "Juventus",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-11-08T19:45:00Z",
     "home": "RC Lens",
     "away": "Marseille",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-11-08T20:00:00Z",
     "home": "Atleti",
     "away": "Barça",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T20:30:00Z",
     "home": "Amadora",
     "away": "SL Benfica",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-11-08T20:30:00Z",
     "home": "Rio Ave",
     "away": "Braga",
     "status": "FINISHED",
     "score": "0-1"
    }
   ],
   "today": [],
   "tomorrow": []
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
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-04T20:00:00Z",
      "home": "Slavia Praha",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "1-2"
     },
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
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
      "status": "FINISHED",
      "score": "6-1"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-03T20:00:00Z",
      "home": "Barça",
      "away": "Aston Villa",
      "status": "FINISHED",
      "score": "3-0"
     },
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
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [
   {
    "home": "Chicago Bulls",
    "away": "Philadelphia 76ers",
    "score": "121-127",
    "status": "Final"
   },
   {
    "home": "Detroit Pistons",
    "away": "Los Angeles Lakers",
    "score": "116-121",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Utah Jazz",
    "score": "115-100",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Brooklyn Nets",
    "score": "130-93",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Boston Celtics",
    "score": "97-117",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "New Orleans Pelicans",
    "score": "139-123",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Miami Heat",
    "score": "108-114",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Atlanta Hawks",
    "away": "Los Angeles Lakers",
    "score": null,
    "status": "2026-11-10T00:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-10T00:00:00Z"
   },
   {
    "home": "Detroit Pistons",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-10T00:00:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-10T00:30:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-11-10T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-10T01:30:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-10T02:00:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "New Orleans Pelicans",
    "score": null,
    "status": "2026-11-10T03:00:00Z"
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
   "upcoming": []
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
     "title": "SPFL round-up: Morton stun Stenny, Cove humble Accies & Clyde keep pace",
     "published": "2026-11-09T08:00:34+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#1",
     "title": "Watch: Morton stun Stenny, Cove humble Accies & Clyde keep pace",
     "published": "2026-11-09T08:00:34+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#2",
     "title": "Dutch match postponed after fans block team bus",
     "published": "2026-11-09T08:00:07+00:00",
     "summary": "A Dutch second-tier match between Vitesse Arnhem and De Graafschap was called off after away team supporters blocked their own team's bus from departing for the game."
    },
    {
     "ref": "bbc_football#3",
     "title": "Podcast: Falkirk run riot as pressure mounts at Pittodrie",
     "published": "2026-11-09T08:00:00+00:00",
     "summary": "A huge week for Hibs, a nightmare afternoon for Hearts and growing concern for Aberdeen."
    },
    {
     "ref": "bbc_football#4",
     "title": "O'Neill nervous about Baur injury - gossip",
     "published": "2026-11-09T07:30:18+00:00",
     "summary": "Injury sweat for Celtic as Hearts boss hopeful over improved form and latest injury setback."
    },
    {
     "ref": "bbc_football#5",
     "title": "Fishlock retires after record-breaking career",
     "published": "2026-11-09T06:32:11+00:00",
     "summary": "Wales' record cap-holder and goalscorer, Jess Fishlock, hangs up her boots after Seattle Reign were beaten in the NWSL play-offs."
    },
    {
     "ref": "bbc_football#6",
     "title": "Fishlock retires after record-breaking career",
     "published": "2026-11-09T06:32:11+00:00",
     "summary": "Wales' record cap-holder and goalscorer, Jess Fishlock, hangs up her boots after Seattle Reign were beaten in the NWSL play-offs."
    },
    {
     "ref": "bbc_football#7",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-09T06:25:16+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#8",
     "title": "Football Daily",
     "published": "2026-11-09T00:30:00+00:00",
     "summary": "Adam Crafton joins Rick and Lloyd to discuss Brighton, Man City and Man Utd."
    },
    {
     "ref": "bbc_football#9",
     "title": "Four 'huge mistakes' that show Man Utd's defensive problems",
     "published": "2026-11-08T23:53:20+00:00",
     "summary": "After Manchester United consed four preventable goal against Aston Villa in the Premier League Dion Dublin and Leon Osman brake down what is going wrong on Match of the Day."
    },
    {
     "ref": "bbc_football#10",
     "title": "Why defenders hate playing against brilliant Brobbey",
     "published": "2026-11-08T23:53:15+00:00",
     "summary": "Match of the Day's Dion Dublin breaks down the physical performance of Sunderland striker Brian Brobbey in the Black Cats' 1-0 win over Chelsea."
    },
    {
     "ref": "bbc_football#11",
     "title": "'A horrible place to be' - What's gone wrong for Palace?",
     "published": "2026-11-08T23:53:08+00:00",
     "summary": "Match of the Day's Dion Dublin and Leon Osman discuss the problems that have led to Crystal Palace being bottom of Premier League, after a couple of seasons of unprecedented success for the club."
    },
    {
     "ref": "bbc_football#12",
     "title": "Barcelona fight back to beat Atleti as Fermin scores twice",
     "published": "2026-11-08T23:41:30+00:00",
     "summary": "Fermin Lopez scores twice as Barcelona come from behind to claim a gritty win over Atletico Madrid and maintain their advantage at the top of La Liga."
    },
    {
     "ref": "bbc_football#13",
     "title": "Falkirk add goals and grit to McGlynn's guile on rapid rise",
     "published": "2026-11-08T22:14:38+00:00",
     "summary": "Falkirk continue to excel under the canny guidance of John McGlynn as a run of five successive victories takes them up to third in the Scottish Premiership."
    },
    {
     "ref": "bbc_football#14",
     "title": "Falkirk add goals and grit to McGlynn's guile on rapid rise",
     "published": "2026-11-08T22:14:38+00:00",
     "summary": "Falkirk continue to excel under the canny guidance of John McGlynn as a run of five successive victories takes them up to third in the Scottish Premiership."
    },
    {
     "ref": "bbc_football#15",
     "title": "Oldham Athletic shock Sheffield Wednesday with extra-time winner",
     "published": "2026-11-08T22:01:57+00:00",
     "summary": "Oldham Athletic stage an FA Cup upset by beating Sheffield Wednesday 2-1 in extra time at Boundary Park, with a 110th-minute winner from Will Sutton securing victory and handing Dave Challinor defeat in his first game in charge for The Owls."
    },
    {
     "ref": "bbc_football#16",
     "title": "Bizarre & thrilling theatre as Carrick in limbo with Man Utd in drop zone",
     "published": "2026-11-08T21:50:05+00:00",
     "summary": "It was a Premier League classic at Old Trafford but what has Manchester United's 4-4 draw with Aston Villa done to Michael Carrick's future?"
    },
    {
     "ref": "bbc_football#17",
     "title": "Villa's Kamara on Chelsea watchlist - Monday's gossip",
     "published": "2026-11-08T21:08:44+00:00",
     "summary": "Aston Villa midfielder Boubacar Kamara is on Chelsea's watchlist, Manchester United could make an offer for Nottingham Forest's Murillo, plus more."
    },
    {
     "ref": "bbc_football#18",
     "title": "Palace consider replacing Sage, with Frank among contenders",
     "published": "2026-11-08T20:49:40+00:00",
     "summary": "Crystal Palace manager Pierre Sage is in serious danger of losing his job, with Thomas Frank among the contenders to replace him."
    },
    {
     "ref": "bbc_football#19",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-11-08T20:18:01+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#20",
     "title": "Where does Man Utd 4-4 Villa rank among best Premier League games?",
     "published": "2026-11-08T20:05:53+00:00",
     "summary": "Where does Manchester United 4-4 Aston Villa rank among the Premier League's greatest games?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Man Utd score twice in stoppage time to share points in eight-goal thriller",
     "published": "2026-11-08T20:01:16+00:00",
     "summary": "Manchester United twice come back from two goals down to earn a point against Aston Villa in an eight-goal thriller at Old Trafford, although they will go into the international break in the Premier League relegation zone."
    },
    {
     "ref": "bbc_football#22",
     "title": "Watch: Sunday's Scottish Premiership highlights",
     "published": "2026-11-08T20:00:23+00:00",
     "summary": "With Kilmarnock v Celtic and Hearts welcoming the season's surprise package Falkirk"
    },
    {
     "ref": "bbc_football#23",
     "title": "Brighton breeze past 10-man Brentford to move up to second",
     "published": "2026-11-08T20:00:21+00:00",
     "summary": "Diego Gomez's long-range strike fires Brighton to a 2-0 over Brentford, who saw Igor Thiago be shown a straight red card, as Fabian Hurzeler's side move up to second in the Premier League."
    },
    {
     "ref": "bbc_football#24",
     "title": "Bournemouth beat Ipswich to extend winning streak",
     "published": "2026-11-08T19:59:53+00:00",
     "summary": "Evanilson scores for the fifth Premier League game in a row as Bournemouth's impressive winning streak continued with a controlled victory over Ipswich."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo - Transfermarkt",
     "published": "2026-11-09T10:00:55+00:00",
     "summary": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Columbus Crew vs. Inter Miami CF: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-09T08:57:56+00:00",
     "summary": "Columbus Crew vs. Inter Miami CF: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi Inter Miami MLS Playoffs Path: The Road to Another Trophy - Heavy.com",
     "published": "2026-11-09T08:54:00+00:00",
     "summary": "Messi Inter Miami MLS Playoffs Path: The Road to Another Trophy Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi may be about to return to Argentina - Laodong.vn",
     "published": "2026-11-09T08:47:28+00:00",
     "summary": "Messi may be about to return to Argentina Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi wins MLS second consecutive Golden Boot - Blueprint Newspapers",
     "published": "2026-11-09T07:30:49+00:00",
     "summary": "Messi wins MLS second consecutive Golden Boot Blueprint Newspapers"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami CF vs. Columbus - Live Score - November 21, 2026 - FOX Sports",
     "published": "2026-11-09T06:53:57+00:00",
     "summary": "Inter Miami CF vs. Columbus - Live Score - November 21, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Columbus Crew vs Inter Miami Box Score - December 01, 2026 - The Athletic - The New York Times",
     "published": "2026-11-09T04:56:26+00:00",
     "summary": "Columbus Crew vs Inter Miami Box Score - December 01, 2026 - The Athletic The New York Times"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus Crew to open MLS playoffs Nov. 21 in Miami vs Lionel Messi - The Columbus Dispatch",
     "published": "2026-11-09T02:32:00+00:00",
     "summary": "Columbus Crew to open MLS playoffs Nov. 21 in Miami vs Lionel Messi The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami vs Columbus Crew - Major League Soccer - OneFootball",
     "published": "2026-11-09T01:34:05+00:00",
     "summary": "Inter Miami vs Columbus Crew - Major League Soccer OneFootball"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Columbus Crew's 2026 playoff run: When do they face Miami? - Cleveland.com",
     "published": "2026-11-09T00:53:00+00:00",
     "summary": "Columbus Crew's 2026 playoff run: When do they face Miami? Cleveland.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "It’s Miami Time presented by Royal Caribbean: Schedule Announced for Audi 2026 MLS Cup Playoffs Round One Series Against Columbus Crew - Inter Miami CF",
     "published": "2026-11-08T22:14:26+00:00",
     "summary": "It’s Miami Time presented by Royal Caribbean: Schedule Announced for Audi 2026 MLS Cup Playoffs Round One Series Against Columbus Crew Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Columbus Crew to face Inter Miami in playoffs. What to know - The Columbus Dispatch",
     "published": "2026-11-08T22:14:13+00:00",
     "summary": "Columbus Crew to face Inter Miami in playoffs. What to know The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MLS Decision Day: Is Greg Vanney's time up? LA Galaxy blow playoff spot as Nashville SC make history and Inter Miami unravel - Goal.com",
     "published": "2026-11-08T20:02:20+00:00",
     "summary": "MLS Decision Day: Is Greg Vanney's time up? LA Galaxy blow playoff spot as Nashville SC make history and Inter Miami unravel Goal.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi Makes History Winning Consecutive MLS Golden Boots - Sportscape Magazine",
     "published": "2026-11-08T19:55:06+00:00",
     "summary": "Lionel Messi Makes History Winning Consecutive MLS Golden Boots Sportscape Magazine"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi Makes History, Back-to-Back MLS Golden Boot Wins - Yahoo Sports",
     "published": "2026-11-08T14:30:46+00:00",
     "summary": "Messi Makes History, Back-to-Back MLS Golden Boot Wins Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "“Once I spoke to David Beckham, Inter Miami appealed to me. I knew it was going to be a physical game. People mentioned the travel, but I didn’t think that was going to be quite so difficult” Kieran Gibbs on moving to Major League Soccer - FourFourTwo",
     "published": "2026-11-08T13:00:00+00:00",
     "summary": "“Once I spoke to David Beckham, Inter Miami appealed to me. I knew it was going to be a physical game. People mentioned the travel, but I didn’t think that was going to be quite so difficult” Kieran Gibbs on moving to Major League Soccer FourFourTwo"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi wins a second straight MLS Golden Boot - The False 9",
     "published": "2026-11-08T12:58:23+00:00",
     "summary": "Messi wins a second straight MLS Golden Boot The False 9"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Ranking Lionel Messi’s 26 goals that won him the MLS Golden Boot - The New York Times",
     "published": "2026-11-08T12:00:58+00:00",
     "summary": "Ranking Lionel Messi’s 26 goals that won him the MLS Golden Boot The New York Times"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi claims second straight Golden Boot as Nashville set points record on MLS Decision Day - The Guardian",
     "published": "2026-11-08T11:21:00+00:00",
     "summary": "Messi claims second straight Golden Boot as Nashville set points record on MLS Decision Day The Guardian"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi set for emotional Argentina return following international retirement as Inter Miami plot blockbuster clash - Goal.com",
     "published": "2026-11-08T11:19:05+00:00",
     "summary": "Lionel Messi set for emotional Argentina return following international retirement as Inter Miami plot blockbuster clash Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami live score, table and standings - BeSoccer Livescore",
     "published": "2026-11-08T11:16:09+00:00",
     "summary": "Inter Miami live score, table and standings BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi becomes first player to win back-to-back MLS Golden Boot awards - Al Jazeera",
     "published": "2026-11-08T11:12:13+00:00",
     "summary": "Messi becomes first player to win back-to-back MLS Golden Boot awards Al Jazeera"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Miami's Lionel Messi first back-to-back MLS Golden Boot recipient - Mahoning Matters",
     "published": "2026-11-08T10:29:06+00:00",
     "summary": "Miami's Lionel Messi first back-to-back MLS Golden Boot recipient Mahoning Matters"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi wins MLS Golden Boot for second consecutive time: Became the first player to do so; scored 26 ... - Bhaskar English",
     "published": "2026-11-08T10:27:37+00:00",
     "summary": "Lionel Messi wins MLS Golden Boot for second consecutive time: Became the first player to do so; scored 26 ... Bhaskar English"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi wins second consecutive MLS Golden Boot after scoring 26 goals for Inter Miami - Telangana Today",
     "published": "2026-11-08T09:32:31+00:00",
     "summary": "Lionel Messi wins second consecutive MLS Golden Boot after scoring 26 goals for Inter Miami Telangana Today"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League - New York Daily News",
     "published": "2026-11-08T15:25:28+00:00",
     "summary": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League New York Daily News"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Victor Wembanyama scores 29 points in Spurs' massive win over Blazers - MySA",
     "published": "2026-11-08T14:57:42+00:00",
     "summary": "Victor Wembanyama scores 29 points in Spurs' massive win over Blazers MySA"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-11-08T14:30:47+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Trail Blazers' Deni Avdija: Poor shooting performance - CBS Sports",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Trail Blazers' Deni Avdija: Poor shooting performance CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija News: Poor shooting performance - RotoWire",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Deni Avdija News: Poor shooting performance RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija should remain Portland’s top offensive option despite Lillard, Morant - Ynetnews",
     "published": "2026-11-08T07:51:00+00:00",
     "summary": "Deni Avdija should remain Portland’s top offensive option despite Lillard, Morant Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija with the 2 Pt, 11/07/2026 - Yahoo Sports",
     "published": "2026-11-08T05:42:48+00:00",
     "summary": "Deni Avdija with the 2 Pt, 11/07/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro - NetsDaily",
     "published": "2026-11-08T04:14:00+00:00",
     "summary": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Lakers showcase early resolve for best start since 2019 - Orange County Register",
     "published": "2026-11-07T23:40:40+00:00",
     "summary": "Lakers showcase early resolve for best start since 2019 Orange County Register"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward - Rip City Project",
     "published": "2026-11-07T19:48:16+00:00",
     "summary": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija flirts with triple-double in Friday's loss to Lakers - FantasyPros",
     "published": "2026-11-07T15:33:22+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's loss to Lakers FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss - CBS Sports",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija News: Sniffs triple-double in loss - RotoWire",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Deni Avdija News: Sniffs triple-double in loss RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out - San Antonio Express-News",
     "published": "2026-11-07T10:11:09+00:00",
     "summary": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out San Antonio Express-News"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet - Rip City Project",
     "published": "2026-11-07T07:22:10+00:00",
     "summary": "Luka Doncic just showed the Blazers why Deni Avdija isn't a superstar yet Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "TST Images: Lakers defeat Trailblazers, 124-118, at Crypto.com Arena - The Sporting Tribune",
     "published": "2026-11-07T06:45:47+00:00",
     "summary": "TST Images: Lakers defeat Trailblazers, 124-118, at Crypto.com Arena The Sporting Tribune"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija records 22 points, 11 assists vs. LAL - NBC Sports",
     "published": "2026-11-07T06:28:00+00:00",
     "summary": "Deni Avdija records 22 points, 11 assists vs. LAL NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija finishes through contact, 11/06/2026 - Yahoo Sports",
     "published": "2026-11-07T06:16:38+00:00",
     "summary": "Deni Avdija finishes through contact, 11/06/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Luka Doncic scores 53 in another spectacular offensive game, carrying Lakers past Blazers 124-118 - Click2Houston",
     "published": "2026-11-07T06:14:43+00:00",
     "summary": "Luka Doncic scores 53 in another spectacular offensive game, carrying Lakers past Blazers 124-118 Click2Houston"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Luka Doncic scores 53 in another spectacular offensive game, carrying Lakers past Blazers 124-118 - WSLS",
     "published": "2026-11-07T06:14:25+00:00",
     "summary": "Luka Doncic scores 53 in another spectacular offensive game, carrying Lakers past Blazers 124-118 WSLS"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "2 Winners, 2 Losers in Blazers Loss vs. Luka Doncic, Lakers - Sports Illustrated",
     "published": "2026-11-07T06:05:12+00:00",
     "summary": "2 Winners, 2 Losers in Blazers Loss vs. Luka Doncic, Lakers Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Lakers 124-118 Trail Blazers (7 Nov, 2026) Final Score - ESPN Singapore",
     "published": "2026-11-07T04:15:52+00:00",
     "summary": "Lakers 124-118 Trail Blazers (7 Nov, 2026) Final Score ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija gets the and-1 for the Trail Blazers - ESPN",
     "published": "2026-11-07T03:56:34+00:00",
     "summary": "Deni Avdija gets the and-1 for the Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija is at it again - Jewish Telegraphic Agency",
     "published": "2026-11-06T16:18:37+00:00",
     "summary": "Deni Avdija is at it again Jewish Telegraphic Agency"
    }
   ]
  }
 ]
}
</input>