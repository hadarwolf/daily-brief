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
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-25T01:00:00Z",
     "home": "Santos",
     "away": "Bahia",
     "status": "IN_PLAY",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T11:15:00Z",
     "home": "Sittard",
     "away": "Excelsior",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T11:30:00Z",
     "home": "Inter",
     "away": "Fiorentina",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T13:00:00Z",
     "home": "Athletic",
     "away": "Getafe",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T13:30:00Z",
     "home": "NEC",
     "away": "Groningen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T13:30:00Z",
     "home": "PSV",
     "away": "Feyenoord",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Crystal Palace",
     "away": "Newcastle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Hull City",
     "away": "Brentford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Genoa",
     "away": "Venezia FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Monaco",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Atalanta",
     "away": "Frosinone",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Man United",
     "away": "Bournemouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T14:00:00Z",
     "home": "Liverpool",
     "away": "Brighton Hove",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-25T14:30:00Z",
     "home": "Hoffenheim",
     "away": "Leverkusen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T15:15:00Z",
     "home": "Celta",
     "away": "Real Betis",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T15:30:00Z",
     "home": "Estoril Praia",
     "away": "Moreirense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T15:45:00Z",
     "home": "Sparta",
     "away": "Ajax",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Angers SCO",
     "away": "Lorient",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Auxerre",
     "away": "Le Mans",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Stade Rennais",
     "away": "Strasbourg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Toulouse",
     "away": "Troyes",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-25T16:15:00Z",
     "home": "Marseille",
     "away": "Le Havre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-25T16:30:00Z",
     "home": "Freiburg",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-25T16:30:00Z",
     "home": "Sunderland",
     "away": "Leeds United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T17:00:00Z",
     "home": "Lecce",
     "away": "Juventus",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T17:30:00Z",
     "home": "Real Sociedad",
     "away": "Levante",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T18:00:00Z",
     "home": "CD Nacional",
     "away": "Braga",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T18:00:00Z",
     "home": "Rio Ave",
     "away": "Famalicão",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-25T19:00:00Z",
     "home": "AZ",
     "away": "Twente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-25T19:45:00Z",
     "home": "Udinese",
     "away": "Milan",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-25T20:00:00Z",
     "home": "Barça",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-25T20:30:00Z",
     "home": "Sporting CP",
     "away": "Acad. Viseu",
     "status": "TIMED",
     "score": null
    }
   ],
   "today": [
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-26T18:45:00Z",
     "home": "Santa Clara",
     "away": "SL Benfica",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-26T19:30:00Z",
     "home": "PSG",
     "away": "Olympique Lyon",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-26T20:00:00Z",
     "home": "Sevilla FC",
     "away": "Osasuna",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-26T22:30:00Z",
     "home": "Coritiba",
     "away": "Grêmio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-26T23:00:00Z",
     "home": "Flamengo",
     "away": "Mineiro",
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
     "played": 9,
     "pts": 14,
     "gd": -2
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
     "played": 8,
     "pts": 22,
     "gd": 13
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 8,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 8,
     "pts": 18,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 8,
     "pts": 18,
     "gd": 9
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 8,
     "pts": 17,
     "gd": 7
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
     "team": "Stade Rennais",
     "played": 8,
     "pts": 16,
     "gd": 4
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 8,
     "pts": 15,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Monaco",
     "played": 8,
     "pts": 15,
     "gd": 4
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 7,
     "pts": 14,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
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
    "home": "Utah Jazz",
    "away": "Los Angeles Lakers",
    "score": "123-132",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Indiana Pacers",
    "score": "109-136",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Orlando Magic",
    "score": "102-111",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Toronto Raptors",
    "score": "117-94",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "LA Clippers",
    "score": "108-101",
    "status": "Final"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Detroit Pistons",
    "score": "93-106",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Memphis Grizzlies",
    "score": "112-123",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Charlotte Hornets",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-10-26T23:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-10-26T23:00:00Z"
   },
   {
    "home": "Boston Celtics",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-10-26T23:30:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-10-26T23:30:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Indiana Pacers",
    "score": null,
    "status": "2026-10-27T00:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-10-27T00:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-10-27T00:30:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-10-27T01:00:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-10-27T02:00:00Z"
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
     "title": "Pennant has more than 50 stitches after dog attack",
     "published": "2026-10-26T07:36:20+00:00",
     "summary": "Former Premier League footballer Jermaine Pennant says he needed more than 50 stitches after being mauled by a dog."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-26T06:53:00+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#2",
     "title": "Who should win the men's Ballon d'Or? BBC Sport pundits have their say",
     "published": "2026-10-26T06:19:12+00:00",
     "summary": "The Ballon d'Or winner will be announced in London on Monday - but who is going to claim the showpiece award?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Football Daily",
     "published": "2026-10-26T00:08:00+00:00",
     "summary": "Rick & Lloyd are joined by Oliver Kay & Joe Smith after a surreal day at Old Trafford."
    },
    {
     "ref": "bbc_football#4",
     "title": "Mourinho keeps Clasico midas touch 13 years on as La Liga heats up",
     "published": "2026-10-26T00:07:16+00:00",
     "summary": "Kylian Mbappe's two goals at Barcelona have opened up La Liga, as Jose Mourinho's Real Madrid leave Camp Nou with a victory."
    },
    {
     "ref": "bbc_football#5",
     "title": "Man City's perfect start over after draw at rivals Man Utd",
     "published": "2026-10-25T23:52:55+00:00",
     "summary": "Manchester City's perfect record in the Women's Super League is ended by rivals Manchester United after Elisabeth Terland scores a late equaliser to snatch a 1-1 draw."
    },
    {
     "ref": "bbc_football#6",
     "title": "Man Utd lacked intensity & fight - Alderweireld",
     "published": "2026-10-25T23:51:22+00:00",
     "summary": "Match of the Day pundits Toby Alderweireld and Ashley Williams analyse Manchester United's 3-0 defeat by Bournemouth, with Alderweireld suggesting there is no \"togetherness\" amongst the United squad."
    },
    {
     "ref": "bbc_football#7",
     "title": "How Liverpool's attack impressed against Brighton",
     "published": "2026-10-25T23:49:41+00:00",
     "summary": "Match of the Day pundits Toby Alderweireld and Ashley Williams analyse Liverpool's impressive attacking display in their 2-0 win against Brighton at Anfield."
    },
    {
     "ref": "bbc_football#8",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-10-25T22:16:14+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#9",
     "title": "What have Man Utd changed to turn around WSL form?",
     "published": "2026-10-25T21:38:59+00:00",
     "summary": "It is a different picture at Manchester United now than it was last month - and they proved it to fight back and earn a point against rivals Manchester City."
    },
    {
     "ref": "bbc_football#10",
     "title": "What have Man Utd changed to turn around WSL form?",
     "published": "2026-10-25T21:38:59+00:00",
     "summary": "It is a different picture at Manchester United now than it was last month - and they proved it to fight back and earn a point against rivals Manchester City."
    },
    {
     "ref": "bbc_football#11",
     "title": "End approaching for Carrick but Man Utd fans make clear who they blame",
     "published": "2026-10-25T21:24:21+00:00",
     "summary": "Manchester United's fans sang their support for Michael Carrick during the 3-0 home defeat by Bournemouth, but voiced their opposition to virtually everything else."
    },
    {
     "ref": "bbc_football#12",
     "title": "Howe open to Man Utd talks - Monday's gossip",
     "published": "2026-10-25T21:09:37+00:00",
     "summary": "Eddie Howe is open to holding talks with Manchester United if they part ways with manager Michael Carrick, three Premier League clubs are monitoring Bayern Munich's Lennart Karl, plus more."
    },
    {
     "ref": "bbc_football#13",
     "title": "Pressure intensifies on Carrick as Man Utd lose to Bournemouth",
     "published": "2026-10-25T20:00:19+00:00",
     "summary": "Manchester United's winless run stretches to eight matches in all competitions as they are beaten 3-0 by Bournemouth at Old Trafford - a defeat that leaves United's manager Michael Carrick under severe pressure."
    },
    {
     "ref": "bbc_football#14",
     "title": "Liverpool earn first league win at Anfield with victory over Brighton",
     "published": "2026-10-25T20:00:09+00:00",
     "summary": "An own goal from Brighton's Pascal Gross swiftly followed by a goal from Alexander Isak, sees Liverpool beat the Seagulls 2-0 at Anfield to move into the Premier League top four."
    },
    {
     "ref": "bbc_football#15",
     "title": "Watch: Sportscene - Sunday's Scottish Premiership highlights",
     "published": "2026-10-25T20:00:04+00:00",
     "summary": "With Hibs v Celtic and Motherwell v Hearts, plus action and reaction from Saturday"
    },
    {
     "ref": "bbc_football#16",
     "title": "Sage continues to struggle as Palace lose at home to Newcastle",
     "published": "2026-10-25T19:59:46+00:00",
     "summary": "Crystal Palace's winless run stretches to four matches as they are beaten 2-0 at home by Newcastle, leaving the club just a point outside the relegation zone with the pressure mounting on manager Pierre Sage."
    },
    {
     "ref": "bbc_football#17",
     "title": "Hull draw third consecutive home game after being held by Brentford",
     "published": "2026-10-25T19:59:29+00:00",
     "summary": "Hull draw a third consecutive home game after Dango Ouattara's equaliser helps Brentford grab a point in a 1-1 draw at the MKM Stadium in the Premier League."
    },
    {
     "ref": "bbc_football#18",
     "title": "Sunderland stay bottom after goalless draw with Leeds",
     "published": "2026-10-25T19:59:07+00:00",
     "summary": "Sunderland remain bottom of the Premier League after a goalless draw with Leeds in difficult conditions at the Stadium of Light."
    },
    {
     "ref": "bbc_football#19",
     "title": "Birmingham get first win of the season after edging past Charlton",
     "published": "2026-10-25T19:55:12+00:00",
     "summary": "Wilda Leidhammar scores as Birmingham secure their first WSL win this season, beating bottom club Charlton 1-0 at St Andrew's, as the away side's wait for a first point goes on."
    },
    {
     "ref": "bbc_football#20",
     "title": "Late own goal gives Liverpool point against London City Lionesses",
     "published": "2026-10-25T19:54:45+00:00",
     "summary": "A stoppage time own goal from Jana Fernandez sees Liverpool snatch a point against London City Lionesses, as the two sides draw 2-2 in the Women's Super League."
    },
    {
     "ref": "bbc_football#21",
     "title": "Vangsgaard scores twice as Villa hang on to beat Everton",
     "published": "2026-10-25T19:54:10+00:00",
     "summary": "Amalie Vangsgaard scores twice for Aston Villa as the away side survive a late fightback from Everton to win 3-2 at Goodison Park in the Women's Super League."
    },
    {
     "ref": "bbc_football#22",
     "title": "Weir would swap Ballon d'Or nominations for World Cup",
     "published": "2026-10-25T19:34:15+00:00",
     "summary": "Caroline Weir reflects on her Ballon d'Or nomination while eyeing a World Cup spot with Scotland."
    },
    {
     "ref": "bbc_football#23",
     "title": "Weir would swap Ballon d'Or nods for World Cup",
     "published": "2026-10-25T19:34:15+00:00",
     "summary": "Caroline Weir reflects on her Ballon d'Or nomination while eyeing a World Cup spot with Scotland."
    },
    {
     "ref": "bbc_football#24",
     "title": "Weir would swap Ballon d'Or nominations for World Cup",
     "published": "2026-10-25T19:34:15+00:00",
     "summary": "Caroline Weir reflects on her Ballon d'Or nomination while eyeing a World Cup spot with Scotland."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Forsberg capitalise on Inter Miami's horrendeous mistake - OneFootball",
     "published": "2026-10-26T02:00:00+00:00",
     "summary": "Forsberg capitalise on Inter Miami's horrendeous mistake OneFootball"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-25T23:39:43+00:00",
     "summary": "New York RB vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi’s Hectic Travels Hurt Inter Miami—And Ballon d’Or Trip Signals More Trouble - Forza Football",
     "published": "2026-10-25T21:01:28+00:00",
     "summary": "Lionel Messi’s Hectic Travels Hurt Inter Miami—And Ballon d’Or Trip Signals More Trouble Forza Football"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "[Reddit/Streams]!! Milan vs Udinese in diretta gratis 25 ottobre 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T19:27:35+00:00",
     "summary": "[Reddit/Streams]!! Milan vs Udinese in diretta gratis 25 ottobre 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "[Reddit/Streams]!! AC Milan vs Udinese Live Free October 25, 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T19:27:34+00:00",
     "summary": "[Reddit/Streams]!! AC Milan vs Udinese Live Free October 25, 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi’s Hectic Travels Hurt Inter Miami—And Ballon d’Or Trip Signals More Trouble - Sports Illustrated",
     "published": "2026-10-25T19:00:00+00:00",
     "summary": "Lionel Messi’s Hectic Travels Hurt Inter Miami—And Ballon d’Or Trip Signals More Trouble Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "[[ＬＩＶＥ＠ＳＴＲＥＡＭｓ]ＦＲＥＥ＝] Kansas vs. Duke LIVE Streams ON Tv Channel - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:50+00:00",
     "summary": "[[ＬＩＶＥ＠ＳＴＲＥＡＭｓ]ＦＲＥＥ＝] Kansas vs. Duke LIVE Streams ON Tv Channel FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "[WATCHLIVE]ＴＯＤＡＹ!] Kansas vs Duke ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 25 October 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:49+00:00",
     "summary": "[WATCHLIVE]ＴＯＤＡＹ!] Kansas vs Duke ＬｉｖｅＦｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ 25 October 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Kansas vs Duke Live Free TV - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:49+00:00",
     "summary": "%$#[ＬＩＶＥＳｔｒｅａｍ]NOW!!] Kansas vs Duke Live Free TV FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "*&TV~[LIVESTREAMs]!! Kansas VS Duke Live free stream - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:49+00:00",
     "summary": "*&TV~[LIVESTREAMs]!! Kansas VS Duke Live free stream FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "@#)𝘏𝘌𝘙𝘌'𝘚!!(* 𝘞𝘈𝘠 𝘛𝘖 𝘞𝘈𝘛𝘊𝘏 Kansas vs Duke Live free tv! 25 October 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:49+00:00",
     "summary": "@#)𝘏𝘌𝘙𝘌'𝘚!!(* 𝘞𝘈𝘠 𝘛𝘖 𝘞𝘈𝘛𝘊𝘏 Kansas vs Duke Live free tv! 25 October 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "~!@!(𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋-𝐓𝐕) Kansas Jayhawks V Duke Blue Devils Live FREE Tv Streams - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:16+00:00",
     "summary": "~!@!(𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋-𝐓𝐕) Kansas Jayhawks V Duke Blue Devils Live FREE Tv Streams FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "@#)𝘏𝘌𝘙𝘌'𝘚!!(* 𝘞𝘈𝘠 𝘛𝘖 𝘞𝘈𝘛𝘊𝘏 Kansas Jayhawks vs Duke Blue Devils Live free tv! 25 October 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:54:16+00:00",
     "summary": "@#)𝘏𝘌𝘙𝘌'𝘚!!(* 𝘞𝘈𝘠 𝘛𝘖 𝘞𝘈𝘛𝘊𝘏 Kansas Jayhawks vs Duke Blue Devils Live free tv! 25 October 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Supporters’ Shield winner Nashville SC could stand between Lionel Messi’s Inter Miami and a second consecutive - Diario AS",
     "published": "2026-10-25T17:49:55+00:00",
     "summary": "Supporters’ Shield winner Nashville SC could stand between Lionel Messi’s Inter Miami and a second consecutive Diario AS"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "(LIVESTREAMs!) New York Red Bulls vs Inter Miami Live Free - 小豆島町",
     "published": "2026-10-25T17:07:10+00:00",
     "summary": "(LIVESTREAMs!) New York Red Bulls vs Inter Miami Live Free 小豆島町"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "~[WATCHLIVE]UPDATES!] NFL ESPN 𝐋𝐈𝐕𝐄 Ｆｒｅｅ Ｓｔｒｅａｍｓ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:52+00:00",
     "summary": "~[WATCHLIVE]UPDATES!] NFL ESPN 𝐋𝐈𝐕𝐄 Ｆｒｅｅ Ｓｔｒｅａｍｓ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Where i can see NFL ESPN 𝕝𝕚𝕧𝕖 𝕊𝕥𝕣𝕖𝕒𝕞𝕤 free? - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:52+00:00",
     "summary": "Where i can see NFL ESPN 𝕝𝕚𝕧𝕖 𝕊𝕥𝕣𝕖𝕒𝕞𝕤 free? FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "$[Here’s Way To Watch]” NFL ESPN LIVE Ｆｒｅｅ Ｓｔｒｅａｍｓ ＯＮ Ｔｖ ＣｈａｎｎｅｌFree Access - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:52+00:00",
     "summary": "$[Here’s Way To Watch]” NFL ESPN LIVE Ｆｒｅｅ Ｓｔｒｅａｍｓ ＯＮ Ｔｖ ＣｈａｎｎｅｌFree Access FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "!*[[WATCHLIVE]FREE##]NFL ESPN]NFL ESPN: NFL ESPN Live 𝐬𝐭𝐫𝐞𝐚𝐦 Full Game 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:51+00:00",
     "summary": "!*[[WATCHLIVE]FREE##]NFL ESPN]NFL ESPN: NFL ESPN Live 𝐬𝐭𝐫𝐞𝐚𝐦 Full Game 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "[WATCHLIVE]ＴＯＤＡＹ!] Sunday Night Football Live Free - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:51+00:00",
     "summary": "[WATCHLIVE]ＴＯＤＡＹ!] Sunday Night Football Live Free FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "!*[WATCHLIVE]ESPN!] NFL ESPN: NFL ESPN Today 𝐋𝐈𝐕𝐄 Ｓｔｒｅａｍｓ Ｆｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:50+00:00",
     "summary": "!*[WATCHLIVE]ESPN!] NFL ESPN: NFL ESPN Today 𝐋𝐈𝐕𝐄 Ｓｔｒｅａｍｓ Ｆｒｅｅ ＯＮ Ｔｖ Ｃｈａｎｎｅｌ FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "+![TOTAL SPORTEK]! NFL Games Tonight Today 𝐋𝐈𝐕𝐄 Ｓｔｒｅａｍ - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:49+00:00",
     "summary": "+![TOTAL SPORTEK]! NFL Games Tonight Today 𝐋𝐈𝐕𝐄 Ｓｔｒｅａｍ FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "[Reddit/Streams]!! SNF Football NFL Games Live Free October 25, 2026 - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:48+00:00",
     "summary": "[Reddit/Streams]!! SNF Football NFL Games Live Free October 25, 2026 FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "【【Live Streaming!! NOW】】 NFL Games Live Soccer Match - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:48+00:00",
     "summary": "【【Live Streaming!! NOW】】 NFL Games Live Soccer Match FC東京オフィシャルホームページ"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "(LIVE-FREE) NFL Games Tonight Today Live Reddit - FC東京オフィシャルホームページ",
     "published": "2026-10-25T17:06:19+00:00",
     "summary": "(LIVE-FREE) NFL Games Tonight Today Live Reddit FC東京オフィシャルホームページ"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster - roundtable.io",
     "published": "2026-10-25T14:59:12+00:00",
     "summary": "Deni Avdija Is Still the Trail Blazers’ Best Player Despite New-Look Roster roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "'Deni Avdija on track to become one of the greatest in Portland history' - The Jerusalem Post",
     "published": "2026-10-25T08:30:04+00:00",
     "summary": "'Deni Avdija on track to become one of the greatest in Portland history' The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija's 26 propels Portland past Sacramento - NBA.com",
     "published": "2026-10-24T21:25:32+00:00",
     "summary": "Deni Avdija's 26 propels Portland past Sacramento NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija flirts with triple-double in Friday's win over Kings - FantasyPros",
     "published": "2026-10-24T15:23:15+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's win over Kings FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more - Rip City Project",
     "published": "2026-10-24T15:20:36+00:00",
     "summary": "Close call vs Kings proves Blazers must put the ball in Deni Avdija’s hands more Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija with 26/6/6 in win against Kings - NBC Sports",
     "published": "2026-10-24T10:26:07+00:00",
     "summary": "Deni Avdija with 26/6/6 in win against Kings NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Trail Blazers' Deni Avdija: Superb in team's second win - CBS Sports",
     "published": "2026-10-24T08:55:19+00:00",
     "summary": "Trail Blazers' Deni Avdija: Superb in team's second win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija News: Superb in team's second win - RotoWire",
     "published": "2026-10-24T08:55:19+00:00",
     "summary": "Deni Avdija News: Superb in team's second win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Taskforce Firewall: Martin at Leila, may comeback? (Episode 110) | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:40:12+00:00",
     "summary": "Taskforce Firewall: Martin at Leila, may comeback? (Episode 110) | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Taskforce Firewall: Full Episode 110 (October 23, 2026) | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:38:20+00:00",
     "summary": "Taskforce Firewall: Full Episode 110 (October 23, 2026) | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija Leads Trail Blazers to Thrilling Comeback Win vs Kings - Wunderfan",
     "published": "2026-10-24T07:31:45+00:00",
     "summary": "Deni Avdija Leads Trail Blazers to Thrilling Comeback Win vs Kings Wunderfan"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Delivery Boi: Full Episode 6 | GMA Entertainment - GMA Network",
     "published": "2026-10-24T07:20:04+00:00",
     "summary": "Delivery Boi: Full Episode 6 | GMA Entertainment GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - myMotherLode.com",
     "published": "2026-10-24T06:37:43+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings myMotherLode.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "NBA Roundup: Avdija lifts Blazers over Sabonis, Anunoby scores 20 - Eurohoops",
     "published": "2026-10-24T05:29:00+00:00",
     "summary": "NBA Roundup: Avdija lifts Blazers over Sabonis, Anunoby scores 20 Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Times Union",
     "published": "2026-10-24T05:15:55+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Times Union"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - Niagara Falls Review",
     "published": "2026-10-24T05:09:09+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings Niagara Falls Review"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - McAlester news",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings McAlester news"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings - couriernews.com",
     "published": "2026-10-24T05:07:45+00:00",
     "summary": "Deni Avdija scores 26 points to lead Trail Blazers in win over Kings couriernews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija propels Blazers to comeback victory over Kings - Bellingham Herald",
     "published": "2026-10-24T05:00:00+00:00",
     "summary": "Deni Avdija propels Blazers to comeback victory over Kings Bellingham Herald"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-23T23:31:58+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    }
   ]
  }
 ]
}
</input>