Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "UEFA Nations League",
  "home": "Kosovo",
  "away": "Israel",
  "kickoff_utc": "2026-11-14T14:00:00"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Memphis Grizzlies",
  "away": "Brooklyn Nets",
  "kickoff_utc": "2026-11-15T01:00:00.000Z"
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
   "yesterday": [],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-14T21:30:00Z",
     "home": "Mirassol",
     "away": "Mineiro",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-14T23:30:00Z",
     "home": "Chapecoense",
     "away": "Vasco da Gama",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-24T20:00:00Z",
      "home": "Arsenal",
      "away": "Dortmund",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
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
    "home": "Indiana Pacers",
    "away": "New York Knicks",
    "score": "106-104",
    "status": "Final"
   },
   {
    "home": "Orlando Magic",
    "away": "Milwaukee Bucks",
    "score": "107-99",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Cleveland Cavaliers",
    "score": "133-121",
    "status": "Final"
   },
   {
    "home": "Chicago Bulls",
    "away": "Atlanta Hawks",
    "score": "125-117",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Memphis Grizzlies",
    "score": "111-142",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Utah Jazz",
    "score": "125-118",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Golden State Warriors",
    "score": "123-85",
    "status": "Final"
   },
   {
    "home": "Sacramento Kings",
    "away": "Portland Trail Blazers",
    "score": "107-120",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Oklahoma City Thunder",
    "score": "113-112",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "New Orleans Pelicans",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-11-15T00:00:00Z"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Dallas Mavericks",
    "score": null,
    "status": "2026-11-15T00:30:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-15T01:00:00Z"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Brooklyn Nets",
    "score": null,
    "status": "2026-11-15T01:00:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-15T01:00:00Z"
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
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-11-21T23:00:00",
     "home": "Inter Miami",
     "away": "Columbus Crew",
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
     "title": "Clough's longevity: landmark achievement or indictment on football?",
     "published": "2026-11-14T08:35:00+00:00",
     "summary": "Mansfield boss Nigel Clough discusses his longevity and staying power as he becomes a club's longest-serving manager for a second time in his career."
    },
    {
     "ref": "bbc_football#1",
     "title": "Titz and Clarke on Aberdeen shortlist - gossip",
     "published": "2026-11-14T08:28:16+00:00",
     "summary": "Steve Clarke and Christian Titz are reportedly on Aberdeen's shortlist to replace Stephen Robinson as manager."
    },
    {
     "ref": "bbc_football#2",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    },
    {
     "ref": "bbc_football#4",
     "title": "How a reunion with scout Bompastor solved Chelsea's striker issue",
     "published": "2026-11-14T06:37:49+00:00",
     "summary": "Chelsea striker Melvine Malard and manager Sonia Bompastor tell the story of their 12-year footballing relationship."
    },
    {
     "ref": "bbc_football#5",
     "title": "How a reunion with scout Bompastor solved Chelsea's striker issue",
     "published": "2026-11-14T06:37:49+00:00",
     "summary": "Chelsea striker Melvine Malard and manager Sonia Bompastor tell the story of their 12-year footballing relationship."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-14T06:27:36+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "Ferguson 'made up' with first win as Glentoran boss",
     "published": "2026-11-13T22:54:49+00:00",
     "summary": "Glentoran manager Duncan Ferguson said he is \"made up\" with his first three points on his home debut, after a 2-1 win over Bangor."
    },
    {
     "ref": "bbc_football#8",
     "title": "Fitness obsessed & 'control freak' - what can Man Utd expect from Pochettino?",
     "published": "2026-11-13T22:53:17+00:00",
     "summary": "What can Manchester United fans expect from their new manager Mauricio Pochettino? BBC Sport gets an insight from Toby Alderweireld, who played under him at Spurs."
    },
    {
     "ref": "bbc_football#9",
     "title": "Goalkeeper involved in fatal collision gets 12-game ban",
     "published": "2026-11-13T22:37:30+00:00",
     "summary": "Jesus Owono is given a 12-match suspension by the Spanish football federation's disciplinary committee after his challenge which resulted in the death of Jesus de Miguel."
    },
    {
     "ref": "bbc_football#10",
     "title": "'If that penalty is given against you, you're furious'",
     "published": "2026-11-13T22:34:20+00:00",
     "summary": "Sportscene pundits Leanne Crichton and Scott Brown discuss the penalty award that led to Scotland beating North Macedonia."
    },
    {
     "ref": "bbc_football#11",
     "title": "'If that penalty is given against you, you're furious'",
     "published": "2026-11-13T22:34:20+00:00",
     "summary": "Sportscene pundits Leanne Crichton and Scott Brown discuss the penalty award that led to Scotland beating North Macedonia."
    },
    {
     "ref": "bbc_football#12",
     "title": "Salah scores twice as Egypt and Nigeria win Afcon 2027 qualifiers",
     "published": "2026-11-13T22:11:27+00:00",
     "summary": "Nigeria beat Tanzania to boost their hopes of reaching the 2027 Africa Cup of Nations, while Mohamed Salah scores twice as Egypt cruise to victory over Malawi."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man Utd want Paz, Chelsea target Kounde - Saturday's gossip",
     "published": "2026-11-13T22:05:14+00:00",
     "summary": "Manchester United are targeting Como midfielder Nico Paz as new manager Mauricio Pochettino prepares to receive backing in the transfer market at Old Trafford."
    },
    {
     "ref": "bbc_football#14",
     "title": "'It's a shootout' - Wales out to derail stuttering Norway",
     "published": "2026-11-13T19:59:40+00:00",
     "summary": "Norway's golden generation host Wales in a crunch Nations League clash on Saturday, aiming to end a rare losing streak for Erling Haaland and company."
    },
    {
     "ref": "bbc_football#15",
     "title": "Ronaldinho, 46, to play first game since 2015",
     "published": "2026-11-13T19:12:37+00:00",
     "summary": "Brazil great Ronaldinho is set to make his first competitive start in more than a decade when Ravenna face local rivals Forli in Italy's third division on Sunday."
    },
    {
     "ref": "bbc_football#16",
     "title": "EFL warns clubs over social media posts",
     "published": "2026-11-13T18:20:17+00:00",
     "summary": "The English Football League (EFL) warns its members about their usage of posts on social media."
    },
    {
     "ref": "bbc_football#17",
     "title": "Some EFL clubs beggar belief - Walsall's Pomlett",
     "published": "2026-11-13T18:14:32+00:00",
     "summary": "Walsall co-chairman Leigh Pomlett sends out a powerful response to the independent State of the Game report."
    },
    {
     "ref": "bbc_football#18",
     "title": "All done deals from September-November 2026",
     "published": "2026-11-13T17:21:23+00:00",
     "summary": "Check out the significant signings and departures in the Premier League, Scottish Premiership, EFL and Women's Super League."
    },
    {
     "ref": "bbc_football#19",
     "title": "'Memories flood back' - Rochdale & York meet again after title drama",
     "published": "2026-11-13T16:39:00+00:00",
     "summary": "A look at how Saturday's opponents Rochdale and York City have acclimatised to League Two after their famous final-day National League title decider."
    },
    {
     "ref": "bbc_football#20",
     "title": "Football Daily",
     "published": "2026-11-13T16:05:00+00:00",
     "summary": "The Commentators' View team describe a special night for Harry Kane at Wembley."
    },
    {
     "ref": "bbc_football#21",
     "title": "Tearful Pochettino on 'difficult' decision to leave USA for Man Utd",
     "published": "2026-11-13T15:28:06+00:00",
     "summary": "An emotional Mauricio Pochettino broke down as he explained why he was leaving the USA to take the Manchester United job."
    },
    {
     "ref": "bbc_football#22",
     "title": "Odegaard backing Norway to avenge Wales defeat",
     "published": "2026-11-13T12:43:51+00:00",
     "summary": "Martin Odegaard backs Norway to brush off snow disruption and avenge their defeat by Wales when they meet again in Oslo on Saturday."
    },
    {
     "ref": "bbc_football#23",
     "title": "Missing Israel games 'stressful' for captain Collins",
     "published": "2026-11-13T12:26:18+00:00",
     "summary": "Republic of Ireland captain Nathan Collins says he felt he left his team-mates \"on their own\" after missing the two controversial Nations League games against Israel."
    },
    {
     "ref": "bbc_football#24",
     "title": "How Ferguson-inspired Pochettino can succeed where Carrick failed at Man Utd",
     "published": "2026-11-13T12:09:48+00:00",
     "summary": "With Mauricio Pochettino set to become Man Utd manager, we analyse if he can clear the tactical hurdles others haven't."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi Shocks Buenos Aires With Monumental Return In Inter Miami vs River Plate - Sportscape Magazine",
     "published": "2026-11-14T07:55:06+00:00",
     "summary": "Lionel Messi Shocks Buenos Aires With Monumental Return In Inter Miami vs River Plate Sportscape Magazine"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "David Beckham Builds $1B Fortune Through Football Ownership, Licensing And Business Ventures - Forbes Middle East",
     "published": "2026-11-14T07:06:20+00:00",
     "summary": "David Beckham Builds $1B Fortune Through Football Ownership, Licensing And Business Ventures Forbes Middle East"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi to return to Estadio Monumental on January 19 as Inter Miami face River Plate in historic Buenos Aires preseason friendly - Goal.com",
     "published": "2026-11-14T06:30:06+00:00",
     "summary": "Lionel Messi to return to Estadio Monumental on January 19 as Inter Miami face River Plate in historic Buenos Aires preseason friendly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami CF v Columbus Odds - FanDuel Sportsbook",
     "published": "2026-11-14T03:50:31+00:00",
     "summary": "Inter Miami CF v Columbus Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Uruguay beats Argentina 2-1 in the first match since Lionel Messi’s retirement - The Daily Gazette",
     "published": "2026-11-14T01:43:06+00:00",
     "summary": "Uruguay beats Argentina 2-1 in the first match since Lionel Messi’s retirement The Daily Gazette"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "2026 MLS Cup Odds: Nashville SC Leads Inter Miami and Vancouver - Time Magazine",
     "published": "2026-11-13T23:50:42+00:00",
     "summary": "2026 MLS Cup Odds: Nashville SC Leads Inter Miami and Vancouver Time Magazine"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Why Is Lionel Messi Not Playing for Argentina vs. Uruguay? - Yardbarker",
     "published": "2026-11-13T23:22:12+00:00",
     "summary": "Why Is Lionel Messi Not Playing for Argentina vs. Uruguay? Yardbarker"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi is coming back to Argentina: Inter Miami to face River Plate at the Monumental in 2027 - Diario AS",
     "published": "2026-11-13T19:49:11+00:00",
     "summary": "Lionel Messi is coming back to Argentina: Inter Miami to face River Plate at the Monumental in 2027 Diario AS"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "After an emotional farewell: Messi prepares to return to the Monumental stadium - Goal.com",
     "published": "2026-11-13T19:42:33+00:00",
     "summary": "After an emotional farewell: Messi prepares to return to the Monumental stadium Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly - Soy Futbol",
     "published": "2026-11-13T18:25:23+00:00",
     "summary": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi and Inter Miami to Face River Plate at the Monumental - beIN SPORTS",
     "published": "2026-11-13T18:02:21+00:00",
     "summary": "Messi and Inter Miami to Face River Plate at the Monumental beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly - ESPN",
     "published": "2026-11-13T17:53:00+00:00",
     "summary": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly ESPN"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate - World Soccer Talk",
     "published": "2026-11-13T17:37:05+00:00",
     "summary": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi to make return to Estadio Monumental in Buenos Aires - USA Today",
     "published": "2026-11-13T16:42:00+00:00",
     "summary": "Lionel Messi to make return to Estadio Monumental in Buenos Aires USA Today"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi Wins Second Consecutive MLS Golden Boot - Yahoo Sports",
     "published": "2026-11-13T16:26:29+00:00",
     "summary": "Lionel Messi Wins Second Consecutive MLS Golden Boot Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi returns to the Monumental! Inter Miami confirms they will play a friendly against River Plate in Argentina - Tribuna.com",
     "published": "2026-11-13T15:51:46+00:00",
     "summary": "Messi returns to the Monumental! Inter Miami confirms they will play a friendly against River Plate in Argentina Tribuna.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi set for Argentina return in Inter Miami friendly at Estadio Monumental - The New York Times",
     "published": "2026-11-13T15:28:09+00:00",
     "summary": "Lionel Messi set for Argentina return in Inter Miami friendly at Estadio Monumental The New York Times"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "International Friendly: River Plate vs. Inter Miami CF at Estadio Monumental - Inter Miami CF",
     "published": "2026-11-13T14:01:31+00:00",
     "summary": "International Friendly: River Plate vs. Inter Miami CF at Estadio Monumental Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami land Tradeify as new official partner - Inside World Football",
     "published": "2026-11-13T13:00:16+00:00",
     "summary": "Inter Miami land Tradeify as new official partner Inside World Football"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "David Beckham to Be Inducted into National Soccer Hall of Fame - Террикон",
     "published": "2026-11-13T10:59:07+00:00",
     "summary": "David Beckham to Be Inducted into National Soccer Hall of Fame Террикон"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Tradeify targets global exposure through Inter Miami CF partnership - SportsMint Media",
     "published": "2026-11-13T08:30:00+00:00",
     "summary": "Tradeify targets global exposure through Inter Miami CF partnership SportsMint Media"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi finalist for third straight MLS MVP award - eNCA",
     "published": "2026-11-13T04:17:43+00:00",
     "summary": "Messi finalist for third straight MLS MVP award eNCA"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award - beIN SPORTS",
     "published": "2026-11-13T03:11:00+00:00",
     "summary": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi named finalist for third straight MVP award in Major League Soccer - Malay Mail",
     "published": "2026-11-13T02:33:38+00:00",
     "summary": "Messi named finalist for third straight MVP award in Major League Soccer Malay Mail"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame - Sun Sentinel",
     "published": "2026-11-13T01:50:53+00:00",
     "summary": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame Sun Sentinel"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 - The Times of Israel",
     "published": "2026-11-14T07:48:46+00:00",
     "summary": "Deni Avdija scores 34 points as Trail Blazers beat Kings 120-107 The Times of Israel"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija, Damian Lillard lead Blazers past Kings - TalkBasket.net",
     "published": "2026-11-14T07:14:02+00:00",
     "summary": "Deni Avdija, Damian Lillard lead Blazers past Kings TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:25:51+00:00",
     "summary": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:25:51+00:00",
     "summary": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season - Rip City Project",
     "published": "2026-11-14T06:25:45+00:00",
     "summary": "Damian Lillard is already showing Blazers what Deni Avdija was missing last season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija scores 34, 9-of-9 from the FT line - NBC Sports",
     "published": "2026-11-14T06:01:31+00:00",
     "summary": "Deni Avdija scores 34, 9-of-9 from the FT line NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings - Modesto Bee",
     "published": "2026-11-14T05:53:00+00:00",
     "summary": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings Modesto Bee"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija with 34 points vs. Sacramento Kings, 11/13/2026 - Yahoo Sports",
     "published": "2026-11-14T05:49:58+00:00",
     "summary": "Deni Avdija with 34 points vs. Sacramento Kings, 11/13/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija finishes through contact, 11/13/2026 - Yahoo Sports",
     "published": "2026-11-14T05:49:42+00:00",
     "summary": "Deni Avdija finishes through contact, 11/13/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija scores 34 to lead Trail Blazers past Kings 120-107 - CBS Sports",
     "published": "2026-11-14T05:32:00+00:00",
     "summary": "Deni Avdija scores 34 to lead Trail Blazers past Kings 120-107 CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-11-14T05:15:52+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-13T20:30:11+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "JCC MetroWest Hosts Exhibit of Deni Avdija Sports Cards - The Jewish Link",
     "published": "2026-11-13T17:59:11+00:00",
     "summary": "JCC MetroWest Hosts Exhibit of Deni Avdija Sports Cards The Jewish Link"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija is at it again - New Jersey Jewish News",
     "published": "2026-11-12T17:33:38+00:00",
     "summary": "Deni Avdija is at it again New Jersey Jewish News"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija leads Trail Blazers with 28 points - NBC Sports",
     "published": "2026-11-12T17:28:45+00:00",
     "summary": "Deni Avdija leads Trail Blazers with 28 points NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday - CBS Sports",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija News: Stuffs stat sheet Wednesday - RotoWire",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Deni Avdija News: Stuffs stat sheet Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke - Rip City Project",
     "published": "2026-11-12T15:51:13+00:00",
     "summary": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' - The Jerusalem Post",
     "published": "2026-11-12T15:40:00+00:00",
     "summary": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Field Level Media",
     "published": "2026-11-12T10:16:40+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-12T07:48:35+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija Scores 28 Points as Trail Blazers Beat Thunder 118-108 - SportsRation",
     "published": "2026-11-12T07:41:46+00:00",
     "summary": "Deni Avdija Scores 28 Points as Trail Blazers Beat Thunder 118-108 SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija drops 28 points Wednesday - FantasyPros",
     "published": "2026-11-12T07:00:00+00:00",
     "summary": "Deni Avdija drops 28 points Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija, Damian Lillard rally Blazers past Thunder - TalkBasket.net",
     "published": "2026-11-12T06:45:22+00:00",
     "summary": "Deni Avdija, Damian Lillard rally Blazers past Thunder TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija, Blazers complete two-game sweep of Thunder - Reuters",
     "published": "2026-11-12T06:06:00+00:00",
     "summary": "Deni Avdija, Blazers complete two-game sweep of Thunder Reuters"
    }
   ]
  }
 ]
}
</input>