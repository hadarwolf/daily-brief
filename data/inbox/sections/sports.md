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
  "home": "Sabah FK",
  "away": "Barça",
  "kickoff_utc": "2026-11-25T17:45:00Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Milwaukee Bucks",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-26T01:00:00.000Z"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Portland Trail Blazers",
  "away": "San Antonio Spurs",
  "kickoff_utc": "2026-11-26T03:00:00.000Z"
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
     "kickoff_utc": "2026-11-24T00:00:00Z",
     "home": "Santos",
     "away": "Grêmio",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T17:45:00Z",
     "home": "Galatasaray",
     "away": "Aston Villa",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T17:45:00Z",
     "home": "Bodø/Glimt",
     "away": "LASK",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Charlton",
     "away": "Lincoln City",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Middlesbrough",
     "away": "Swansea",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Norwich",
     "away": "QPR",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Sheffield Utd",
     "away": "Southampton",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Cardiff",
     "away": "Preston NE",
     "status": "FINISHED",
     "score": "0-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Bristol City",
     "away": "Wrexham",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T19:45:00Z",
     "home": "Portsmouth",
     "away": "West Ham",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Sl. Bratislava",
     "away": "Real Betis",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Real Madrid",
     "away": "PSV",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Como 1907",
     "away": "PAE AEK",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Arsenal",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Feyenoord",
     "away": "Porto",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Wolverhampton",
     "away": "Derby County",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "RB Leipzig",
     "away": "RC Lens",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-24T20:00:00Z",
     "home": "Man City",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-24T21:00:00Z",
     "home": "Chapecoense",
     "away": "Palmeiras",
     "status": "FINISHED",
     "score": "3-0"
    }
   ],
   "today": [
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T17:45:00Z",
     "home": "Slavia Praha",
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
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Burnley",
     "away": "Birmingham",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Bolton",
     "away": "West Brom",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Watford",
     "away": "Blackburn",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Stoke",
     "away": "Millwall",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Sporting CP",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Atleti",
     "away": "Viking",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Club Brugge",
     "away": "Liverpool",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Lille",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Inter",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Shaktar",
     "away": "Fenerbahçe",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "PSG",
     "away": "Roma",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-25T23:00:00Z",
     "home": "Mineiro",
     "away": "Corinthians",
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
     "played": 11,
     "pts": 28,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Brighton Hove",
     "played": 11,
     "pts": 22,
     "gd": 17
    },
    {
     "pos": 3,
     "team": "Man City",
     "played": 11,
     "pts": 22,
     "gd": 8
    },
    {
     "pos": 4,
     "team": "Liverpool",
     "played": 11,
     "pts": 21,
     "gd": 8
    },
    {
     "pos": 5,
     "team": "Bournemouth",
     "played": 11,
     "pts": 18,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 11,
     "pts": 17,
     "gd": 9
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 13,
     "pts": 36,
     "gd": 36
    },
    {
     "pos": 2,
     "team": "Real Madrid",
     "played": 13,
     "pts": 33,
     "gd": 22
    },
    {
     "pos": 3,
     "team": "Atleti",
     "played": 13,
     "pts": 31,
     "gd": 16
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 13,
     "pts": 27,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 13,
     "pts": 22,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 13,
     "pts": 19,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Dortmund",
     "played": 10,
     "pts": 24,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 10,
     "pts": 22,
     "gd": 20
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 10,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "RB Leipzig",
     "played": 10,
     "pts": 21,
     "gd": 18
    },
    {
     "pos": 5,
     "team": "Leverkusen",
     "played": 10,
     "pts": 19,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Bremen",
     "played": 10,
     "pts": 18,
     "gd": 6
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Lazio",
     "played": 12,
     "pts": 32,
     "gd": 19
    },
    {
     "pos": 2,
     "team": "Roma",
     "played": 12,
     "pts": 30,
     "gd": 25
    },
    {
     "pos": 3,
     "team": "Inter",
     "played": 12,
     "pts": 29,
     "gd": 15
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 12,
     "pts": 27,
     "gd": 14
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 12,
     "pts": 26,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Juventus",
     "played": 12,
     "pts": 21,
     "gd": 7
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "PSG",
     "played": 11,
     "pts": 26,
     "gd": 13
    },
    {
     "pos": 2,
     "team": "Paris FC",
     "played": 11,
     "pts": 23,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Lille",
     "played": 11,
     "pts": 21,
     "gd": 6
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 11,
     "pts": 20,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Marseille",
     "played": 11,
     "pts": 18,
     "gd": 7
    },
    {
     "pos": 6,
     "team": "Brest",
     "played": 11,
     "pts": 18,
     "gd": 7
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-21T17:30:00Z",
      "home": "Newcastle",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "2-2"
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
      "status": "FINISHED",
      "score": "1-1"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-29T16:30:00Z",
      "home": "Arsenal",
      "away": "Man City",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-12-02T20:15:00Z",
      "home": "Brentford",
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
      "kickoff_utc": "2026-11-22T13:00:00Z",
      "home": "Barça",
      "away": "Villarreal",
      "status": "FINISHED",
      "score": "3-2"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
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
    "home": "Orlando Magic",
    "away": "Detroit Pistons",
    "score": "86-104",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Boston Celtics",
    "score": "116-131",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "Dallas Mavericks",
    "score": "101-120",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Philadelphia 76ers",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-25T22:00:00Z"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-26T00:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-26T00:30:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Minnesota Timberwolves",
    "score": null,
    "status": "2026-11-26T00:30:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-26T01:00:00Z"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-26T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-26T01:30:00Z"
   },
   {
    "home": "Golden State Warriors",
    "away": "Sacramento Kings",
    "score": null,
    "status": "2026-11-26T03:00:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "San Antonio Spurs",
    "score": null,
    "status": "2026-11-26T03:00:00Z"
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
     "kickoff_utc": "2026-11-21T23:00:00",
     "home": "Inter Miami",
     "away": "Columbus Crew",
     "score": "0-3"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-28T01:00:00",
     "home": "Columbus Crew",
     "away": "Inter Miami",
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
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2027-03-25T19:45:00",
     "home": "Belarus",
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
     "title": "Lincoln sack head coach duo Cohen and Shaw",
     "published": "2026-11-25T11:04:32+00:00",
     "summary": "Lincoln sack head coaches Chris Cohen and Tom Shaw just six months after they took joint charge of the Championship side."
    },
    {
     "ref": "bbc_football#1",
     "title": "Millwall face partial stadium closure after discriminatory chants",
     "published": "2026-11-25T10:58:32+00:00",
     "summary": "Millwall must play a home game in front of a partially-closed stadium as punishment for fans' discriminatory chants."
    },
    {
     "ref": "bbc_football#2",
     "title": "Wales and West Ham's Morgan suffers serious injury",
     "published": "2026-11-25T10:38:44+00:00",
     "summary": "Wales and West Ham winger Ffion Morgan faces a lengthy spell on the sidelines after suffering a serious knee injury."
    },
    {
     "ref": "bbc_football#3",
     "title": "Wales and West Ham's Morgan suffers serious injury",
     "published": "2026-11-25T10:38:44+00:00",
     "summary": "Wales and West Ham winger Ffion Morgan faces a lengthy spell on the sidelines after suffering a serious knee injury."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Most frustrating of career' - Martin on Foxes draw at Blackpool",
     "published": "2026-11-25T10:09:10+00:00",
     "summary": "Leicester City boss Russell Martin describes Tuesday's 1-1 draw with Blackpool as the most frustrating result of his career."
    },
    {
     "ref": "bbc_football#5",
     "title": "Why Man City can't wear their new kit in Premier League",
     "published": "2026-11-25T09:38:16+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains why Manchester City will not be able to wear their new fourth kit in the Premier League."
    },
    {
     "ref": "bbc_football#6",
     "title": "'Two faces' & rudely named set-pieces end Hibs' long wait for home win",
     "published": "2026-11-25T09:04:27+00:00",
     "summary": "Hibs show they are capable of winning ugly with the help of a beautiful goal as Marink Reedijk guides them to a first home league win in nearly eight months against Dundee."
    },
    {
     "ref": "bbc_football#7",
     "title": "Podcast: Flying under the radar? Scottish football's unsung heroes",
     "published": "2026-11-25T08:00:00+00:00",
     "summary": "Hidden gems: Scottish football's best-kept secrets"
    },
    {
     "ref": "bbc_football#8",
     "title": "Celtic consider move for midfielder Ashour - gossip",
     "published": "2026-11-25T07:54:58+00:00",
     "summary": "Celtic linked with Egypt midfielder as Rangers prepare to offload striker..."
    },
    {
     "ref": "bbc_football#9",
     "title": "How to unearth young stars, the Bayern Munich way",
     "published": "2026-11-25T07:22:27+00:00",
     "summary": "Bayern Munich initially aim to find local young players from Bavaria before looking further afield - here's how they do it."
    },
    {
     "ref": "bbc_football#10",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-25T06:56:11+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#11",
     "title": "Are Manchester United this season's Tottenham?",
     "published": "2026-11-25T06:22:36+00:00",
     "summary": "Tottenham escaped an unthinkable Premier League relegation last season on the final day, but are Manchester United in danger of being the new Spurs?"
    },
    {
     "ref": "bbc_football#12",
     "title": "Rangers 'dug it out' despite naivety & complacency - McInnes",
     "published": "2026-11-25T01:20:53+00:00",
     "summary": "Rangers manager Derek McInnes says his team's naivety and complacency made their task more difficult in their thrilling 3-2 win over Aberdeen, but hails their ability to get the job done."
    },
    {
     "ref": "bbc_football#13",
     "title": "Bellingham plays down Zidane comparison after wonder goal",
     "published": "2026-11-24T23:54:10+00:00",
     "summary": "Jose Mourinho says Jude Bellingham is the best midfielder in the world, but the Real Madrid star played down comparisons to Zinedine Zidane."
    },
    {
     "ref": "bbc_football#14",
     "title": "Arteta says Arsenal need more luck to kill off games",
     "published": "2026-11-24T23:44:04+00:00",
     "summary": "Arsenal need more luck to kill off games says manager Mikel Arteta after they are held to a draw by Borussia Dortmund."
    },
    {
     "ref": "bbc_football#15",
     "title": "'Pass, pass, slow, slow' - Man City's slick machine grinding to a halt",
     "published": "2026-11-24T23:17:42+00:00",
     "summary": "Manchester City's slick footballing machine is starting to grind to a halt, as displayed in their laborious Champions League draw against Napoli."
    },
    {
     "ref": "bbc_football#16",
     "title": "Pochettino leads Man Utd fury at Yoro red card ruling",
     "published": "2026-11-24T22:05:31+00:00",
     "summary": "Manchester United and Mauricio Pochettino are furious at how Leny Yoro's red card has been handled by VAR John Brooks and referees' chief Howard Webb"
    },
    {
     "ref": "bbc_football#17",
     "title": "Oxford beat Spurs U21s to seal EFL Trophy progress",
     "published": "2026-11-24T21:08:09+00:00",
     "summary": "Aaron Ramsey's Oxford United beat Tottenham Under-21s to secure one of the final two Jersey Mike's Trophy knockout spots."
    },
    {
     "ref": "bbc_football#18",
     "title": "Man Utd target Collins - Wednesday's gossip",
     "published": "2026-11-24T20:51:44+00:00",
     "summary": "Manchester United target Brentford defender Nathan Collins, Bournemouth price forward Eli Junior Kroupi at £100m and Liverpool close in on new Rio Ngumoha contract."
    },
    {
     "ref": "bbc_football#19",
     "title": "Bayern hold 'constructive' talks over Musiala's health",
     "published": "2026-11-24T19:58:58+00:00",
     "summary": "Bayern Munich are only focused on getting Jamal Musiala back from injury and not interested in the comments made regarding his contract, the club's sporting director Max Eberl insists."
    },
    {
     "ref": "bbc_football#20",
     "title": "Klopp advice and Iraola confidence boosts Wirtz",
     "published": "2026-11-24T17:19:08+00:00",
     "summary": "Florian Wirtz opens up on why it's the best he has felt since joining Liverpool."
    },
    {
     "ref": "bbc_football#21",
     "title": "Senegal reinstated as Afcon 2025 winners by court ruling",
     "published": "2026-11-24T17:16:09+00:00",
     "summary": "Ten months after the 2025 Africa Cup of Nations final, Senegal are reinstated as champions following a ruling by the Court of Arbitration for Sport."
    },
    {
     "ref": "bbc_football#22",
     "title": "FA chief signs NDA to view Fifa sell-off plot documents",
     "published": "2026-11-24T16:34:18+00:00",
     "summary": "Debbie Hewitt is among several football chiefs to view documents made available by Fifa, but cannot speak about them."
    },
    {
     "ref": "bbc_football#23",
     "title": "SFA leads tributes to former president Peat",
     "published": "2026-11-24T13:35:17+00:00",
     "summary": "Former Scottish FA president George Peat dies at the age of 86."
    },
    {
     "ref": "bbc_football#24",
     "title": "Palace docked points for using four sub windows in WSL win",
     "published": "2026-11-24T12:14:19+00:00",
     "summary": "Crystal Palace say they are \"disappointed\" by the ruling which they \"do not agree is reasonable or proportionate\"."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Highlights: San Jose Earthquakes 2-1 Houston Dynamo FC (MLS), Major League Soccer - Forza Football",
     "published": "2026-11-25T06:16:53+00:00",
     "summary": "Highlights: San Jose Earthquakes 2-1 Houston Dynamo FC (MLS), Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Messi throws the ball into opponent's face, gets away with yellow card - The Daily Star",
     "published": "2026-11-25T03:35:27+00:00",
     "summary": "Messi throws the ball into opponent's face, gets away with yellow card The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-25T03:28:21+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Luis Suárez Faces Growing Competition at Inter Miami as Riquelme Fillipi Pushes for More Playing Time - Pasión Fútbol",
     "published": "2026-11-25T00:32:13+00:00",
     "summary": "Luis Suárez Faces Growing Competition at Inter Miami as Riquelme Fillipi Pushes for More Playing Time Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "The new Keeper iD ICON gloves , JustGoalkeepers - Forza Football",
     "published": "2026-11-25T00:27:07+00:00",
     "summary": "The new Keeper iD ICON gloves , JustGoalkeepers Forza Football"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Special Black Friday Offer: Secure Your 2027 Sprint Season Tickets Now! - Inter Miami CF",
     "published": "2026-11-24T23:46:23+00:00",
     "summary": "Special Black Friday Offer: Secure Your 2027 Sprint Season Tickets Now! Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF Official Team Store Brings Fans Exciting Black Friday Deals! - Inter Miami CF",
     "published": "2026-11-24T23:41:22+00:00",
     "summary": "Inter Miami CF Official Team Store Brings Fans Exciting Black Friday Deals! Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami: history, founding, stadium and honours - VAVEL.com",
     "published": "2026-11-24T22:54:37+00:00",
     "summary": "Inter Miami: history, founding, stadium and honours VAVEL.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Cristiano Ronaldo’s 987 career goals bring him closer to 1,000 as Lionel Messi remains behind - Bolavip US",
     "published": "2026-11-24T20:50:18+00:00",
     "summary": "Cristiano Ronaldo’s 987 career goals bring him closer to 1,000 as Lionel Messi remains behind Bolavip US"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi Is 14 Goals Away From the Top Scorer Crown in 2026 as Cristiano Ronaldo Falls Outside the Top ... - Pasión Fútbol",
     "published": "2026-11-24T20:20:08+00:00",
     "summary": "Lionel Messi Is 14 Goals Away From the Top Scorer Crown in 2026 as Cristiano Ronaldo Falls Outside the Top ... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF - Columbus Crew 0 - 1 | RED CARD - Gonzalo Luján - Yahoo Sports",
     "published": "2026-11-24T19:39:59+00:00",
     "summary": "Inter Miami CF - Columbus Crew 0 - 1 | RED CARD - Gonzalo Luján Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami Nears Permanent Deal for Micael as Palmeiras Negotiations Advance - Pasión Fútbol",
     "published": "2026-11-24T19:31:08+00:00",
     "summary": "Inter Miami Nears Permanent Deal for Micael as Palmeiras Negotiations Advance Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami Honors Local Police and Fire Personnel Through the Club’s Sixth Annual Serving Those Who Serve Us Thanksgiving Initiative Presented by RITZ - Inter Miami CF",
     "published": "2026-11-24T19:02:06+00:00",
     "summary": "Inter Miami Honors Local Police and Fire Personnel Through the Club’s Sixth Annual Serving Those Who Serve Us Thanksgiving Initiative Presented by RITZ Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Neville Says Messi Gets Different Refereeing - Wisevoter",
     "published": "2026-11-24T16:32:47+00:00",
     "summary": "Neville Says Messi Gets Different Refereeing Wisevoter"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "'Top three DPs we've seen in this league' - Apple TV's Maurice Edu on Hany Mukhtar's MLS legacy and the test facing Son Heung-Min's LAFC - Goal.com",
     "published": "2026-11-24T16:16:37+00:00",
     "summary": "'Top three DPs we've seen in this league' - Apple TV's Maurice Edu on Hany Mukhtar's MLS legacy and the test facing Son Heung-Min's LAFC Goal.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi gets different treatment from MLS referees, former Inter Miami boss Phil Neville claims - World Soccer Talk",
     "published": "2026-11-24T15:46:21+00:00",
     "summary": "Lionel Messi gets different treatment from MLS referees, former Inter Miami boss Phil Neville claims World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Eastern Conference: What we learned in Game 1 & what comes next - MLSsoccer.com",
     "published": "2026-11-24T15:15:28+00:00",
     "summary": "Eastern Conference: What we learned in Game 1 & what comes next MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia - Fort Worth Star-Telegram",
     "published": "2026-11-24T14:47:00+00:00",
     "summary": "MLS may review Lionel Messi's actions against Columbus Crew's Gonzalo Tapia Fort Worth Star-Telegram"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Cavan Sullivan Makes His Ambitions Clear After Winning MLS Young Player of the Year: “I Want to Be the Best... - Pasión Fútbol",
     "published": "2026-11-24T13:00:00+00:00",
     "summary": "Cavan Sullivan Makes His Ambitions Clear After Winning MLS Young Player of the Year: “I Want to Be the Best... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami U12 vs Leones U12 live score, H2H and lineups - Sofascore",
     "published": "2026-11-24T12:50:34+00:00",
     "summary": "Inter Miami U12 vs Leones U12 live score, H2H and lineups Sofascore"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi booked for throwing the ball into Gonzalo Tapia's face as Columbus Crew beat Inter Miami 3-0 - Latin Times",
     "published": "2026-11-24T11:33:59+00:00",
     "summary": "Messi booked for throwing the ball into Gonzalo Tapia's face as Columbus Crew beat Inter Miami 3-0 Latin Times"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "▶️ Watch Columbus Crew vs Inter Miami Live Stream | Predictions & Tips - 28 Nov - FootballPredictions.NET",
     "published": "2026-11-24T11:19:30+00:00",
     "summary": "▶️ Watch Columbus Crew vs Inter Miami Live Stream | Predictions & Tips - 28 Nov FootballPredictions.NET"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami and Messi's problem - Laodong.vn",
     "published": "2026-11-24T11:11:47+00:00",
     "summary": "Inter Miami and Messi's problem Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-24T11:10:38+00:00",
     "summary": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami HELD by familiar foe - Morning Footy - 247Sports",
     "published": "2026-11-24T11:04:11+00:00",
     "summary": "Inter Miami HELD by familiar foe - Morning Footy 247Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "‘There’s nothing subtle about his game’: ESPN names Deni Avdija among top All-Star candidates - Ynetnews",
     "published": "2026-11-25T06:30:00+00:00",
     "summary": "‘There’s nothing subtle about his game’: ESPN names Deni Avdija among top All-Star candidates Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf, Dain Dainja and Chaney Johnson combine for 65 in LI Nets loss to Capital City - NetsDaily",
     "published": "2026-11-24T23:14:35+00:00",
     "summary": "Ben Saraf, Dain Dainja and Chaney Johnson combine for 65 in LI Nets loss to Capital City NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija’s Blazers Breakout Has a Hidden Flaw Costing Him Points - roundtable.io",
     "published": "2026-11-24T19:15:03+00:00",
     "summary": "Deni Avdija’s Blazers Breakout Has a Hidden Flaw Costing Him Points roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija's star ascension is turning the Blazers into a dark-horse contender - Rip City Project",
     "published": "2026-11-24T19:00:00+00:00",
     "summary": "Deni Avdija's star ascension is turning the Blazers into a dark-horse contender Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija Projected as an All-Star One Month into Season - Blazer's Edge",
     "published": "2026-11-24T18:10:43+00:00",
     "summary": "Deni Avdija Projected as an All-Star One Month into Season Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "3 Hidden Signs of Health for the Trail Blazers: Deni Avdija’s Shooting - Blazer's Edge",
     "published": "2026-11-24T18:07:38+00:00",
     "summary": "3 Hidden Signs of Health for the Trail Blazers: Deni Avdija’s Shooting Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija does best LeBron James impression in huge Trail Blazers win - Rip City Project",
     "published": "2026-11-24T17:00:00+00:00",
     "summary": "Deni Avdija does best LeBron James impression in huge Trail Blazers win Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija pours in 31 points Monday night - FantasyPros",
     "published": "2026-11-24T15:23:55+00:00",
     "summary": "Deni Avdija pours in 31 points Monday night FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers vs 76ers: Deni Avdija’s 31-Point Masterclass Snaps Philadelphia’s Five-Game Streak in 128-111 Rout - BBN Times",
     "published": "2026-11-24T15:22:15+00:00",
     "summary": "Trail Blazers vs 76ers: Deni Avdija’s 31-Point Masterclass Snaps Philadelphia’s Five-Game Streak in 128-111 Rout BBN Times"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "LeBron James saw firsthand the Blazers using his old formula around Deni Avdija - Rip City Project",
     "published": "2026-11-24T15:00:01+00:00",
     "summary": "LeBron James saw firsthand the Blazers using his old formula around Deni Avdija Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "The Israeli king of basketball: Avdija shines in Blazers showdown with LeBron, Sixers - comment - The Jerusalem Post",
     "published": "2026-11-24T14:27:26+00:00",
     "summary": "The Israeli king of basketball: Avdija shines in Blazers showdown with LeBron, Sixers - comment The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija: Scoot Henderson is a big part of our team - Yahoo Sports",
     "published": "2026-11-24T10:00:57+00:00",
     "summary": "Deni Avdija: Scoot Henderson is a big part of our team Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija: the three-point shot of Portland's forward · SNA - Sport News Africa",
     "published": "2026-11-24T09:01:23+00:00",
     "summary": "Deni Avdija: the three-point shot of Portland's forward · SNA Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post - UA.NEWS",
     "published": "2026-11-24T08:12:37+00:00",
     "summary": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post UA.NEWS"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija says Trail Blazers are not afraid of anyone - TalkBasket.net",
     "published": "2026-11-24T08:06:17+00:00",
     "summary": "Deni Avdija says Trail Blazers are not afraid of anyone TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers - The Jerusalem Post",
     "published": "2026-11-24T07:18:44+00:00",
     "summary": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija torches 76ers as Blazers end winning streak - TalkBasket.net",
     "published": "2026-11-24T07:07:40+00:00",
     "summary": "Deni Avdija torches 76ers as Blazers end winning streak TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 - New Haven Register",
     "published": "2026-11-24T06:31:19+00:00",
     "summary": "Deni Avdija hits 5 3s and scores 31 points as Trail Blazers hand 76ers only their 4th loss, 128-111 New Haven Register"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "NBA: Blazers snap Sixers streak, Thunder stumble - Cebu Daily News",
     "published": "2026-11-24T06:15:00+00:00",
     "summary": "NBA: Blazers snap Sixers streak, Thunder stumble Cebu Daily News"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - WV News",
     "published": "2026-11-24T05:53:11+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 WV News"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games - GMA Network",
     "published": "2026-11-24T05:24:22+00:00",
     "summary": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - Herald Bulletin",
     "published": "2026-11-24T05:15:15+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 Herald Bulletin"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Trail Blazers' Deni Avdija turns defense into offense to seal 30-point night vs. 76ers - Yardbarker",
     "published": "2026-11-24T04:18:08+00:00",
     "summary": "Trail Blazers' Deni Avdija turns defense into offense to seal 30-point night vs. 76ers Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Trail Blazers wrap up road trip with big win in Philadelphia - KATU",
     "published": "2026-11-24T03:55:24+00:00",
     "summary": "Trail Blazers wrap up road trip with big win in Philadelphia KATU"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 - NBA.com",
     "published": "2026-11-24T03:40:09+00:00",
     "summary": "Deni Avdija Postgame Interview| Trail Blazers 128, Philadelphia 76ers 111 | Nov. 23, 2026 NBA.com"
    }
   ]
  }
 ]
}
</input>