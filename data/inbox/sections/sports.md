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
     "title": "Tuchel to remind England of anti-racism protocols before Spain game",
     "published": "2026-11-14T09:13:30+00:00",
     "summary": "Manager Thomas Tuchel will remind England's players of Uefa's anti-racism protocols before Sunday's Nations League fixture against Spain in Madrid."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who would make your England-Spain combined XI?",
     "published": "2026-11-14T08:57:49+00:00",
     "summary": "How many England players do you think would make the Spain team?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Clough's longevity: landmark achievement or indictment on football?",
     "published": "2026-11-14T08:35:00+00:00",
     "summary": "Mansfield boss Nigel Clough discusses his longevity and staying power as he becomes a club's longest-serving manager for a second time in his career."
    },
    {
     "ref": "bbc_football#3",
     "title": "Titz and Clarke on Aberdeen shortlist - gossip",
     "published": "2026-11-14T08:28:16+00:00",
     "summary": "Steve Clarke and Christian Titz are reportedly on Aberdeen's shortlist to replace Stephen Robinson as manager."
    },
    {
     "ref": "bbc_football#4",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Six goals to go - will McGinn catch Dalglish & Law?",
     "published": "2026-11-14T07:49:46+00:00",
     "summary": "After drawing level with Hughie Gallacher on 24 Scotland goals, will midfielder John McGinn reach Kenny Dalglish and Denis Law's record tally of 30?"
    },
    {
     "ref": "bbc_football#6",
     "title": "How a reunion with scout Bompastor solved Chelsea's striker issue",
     "published": "2026-11-14T06:37:49+00:00",
     "summary": "Chelsea striker Melvine Malard and manager Sonia Bompastor tell the story of their 12-year footballing relationship."
    },
    {
     "ref": "bbc_football#7",
     "title": "How a reunion with scout Bompastor solved Chelsea's striker issue",
     "published": "2026-11-14T06:37:49+00:00",
     "summary": "Chelsea striker Melvine Malard and manager Sonia Bompastor tell the story of their 12-year footballing relationship."
    },
    {
     "ref": "bbc_football#8",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-14T06:27:36+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#9",
     "title": "Ferguson 'made up' with first win as Glentoran boss",
     "published": "2026-11-13T22:54:49+00:00",
     "summary": "Glentoran manager Duncan Ferguson said he is \"made up\" with his first three points on his home debut, after a 2-1 win over Bangor."
    },
    {
     "ref": "bbc_football#10",
     "title": "Fitness obsessed & 'control freak' - what can Man Utd expect from Pochettino?",
     "published": "2026-11-13T22:53:17+00:00",
     "summary": "What can Manchester United fans expect from their new manager Mauricio Pochettino? BBC Sport gets an insight from Toby Alderweireld, who played under him at Spurs."
    },
    {
     "ref": "bbc_football#11",
     "title": "Goalkeeper involved in fatal collision gets 12-game ban",
     "published": "2026-11-13T22:37:30+00:00",
     "summary": "Jesus Owono is given a 12-match suspension by the Spanish football federation's disciplinary committee after his challenge which resulted in the death of Jesus de Miguel."
    },
    {
     "ref": "bbc_football#12",
     "title": "'If that penalty is given against you, you're furious'",
     "published": "2026-11-13T22:34:20+00:00",
     "summary": "Sportscene pundits Leanne Crichton and Scott Brown discuss the penalty award that led to Scotland beating North Macedonia."
    },
    {
     "ref": "bbc_football#13",
     "title": "'If that penalty is given against you, you're furious'",
     "published": "2026-11-13T22:34:20+00:00",
     "summary": "Sportscene pundits Leanne Crichton and Scott Brown discuss the penalty award that led to Scotland beating North Macedonia."
    },
    {
     "ref": "bbc_football#14",
     "title": "Salah scores twice as Egypt and Nigeria win Afcon 2027 qualifiers",
     "published": "2026-11-13T22:11:27+00:00",
     "summary": "Nigeria beat Tanzania to boost their hopes of reaching the 2027 Africa Cup of Nations, while Mohamed Salah scores twice as Egypt cruise to victory over Malawi."
    },
    {
     "ref": "bbc_football#15",
     "title": "Man Utd want Paz, Chelsea target Kounde - Saturday's gossip",
     "published": "2026-11-13T22:05:14+00:00",
     "summary": "Manchester United are targeting Como midfielder Nico Paz as new manager Mauricio Pochettino prepares to receive backing in the transfer market at Old Trafford."
    },
    {
     "ref": "bbc_football#16",
     "title": "'It's a shootout' - Wales out to derail stuttering Norway",
     "published": "2026-11-13T19:59:40+00:00",
     "summary": "Norway's golden generation host Wales in a crunch Nations League clash on Saturday, aiming to end a rare losing streak for Erling Haaland and company."
    },
    {
     "ref": "bbc_football#17",
     "title": "Ronaldinho, 46, to play first game since 2015",
     "published": "2026-11-13T19:12:37+00:00",
     "summary": "Brazil great Ronaldinho is set to make his first competitive start in more than a decade when Ravenna face local rivals Forli in Italy's third division on Sunday."
    },
    {
     "ref": "bbc_football#18",
     "title": "EFL warns clubs over social media posts",
     "published": "2026-11-13T18:20:17+00:00",
     "summary": "The English Football League (EFL) warns its members about their usage of posts on social media."
    },
    {
     "ref": "bbc_football#19",
     "title": "Some EFL clubs beggar belief - Walsall's Pomlett",
     "published": "2026-11-13T18:14:32+00:00",
     "summary": "Walsall co-chairman Leigh Pomlett sends out a powerful response to the independent State of the Game report."
    },
    {
     "ref": "bbc_football#20",
     "title": "All done deals from September-November 2026",
     "published": "2026-11-13T17:21:23+00:00",
     "summary": "Check out the significant signings and departures in the Premier League, Scottish Premiership, EFL and Women's Super League."
    },
    {
     "ref": "bbc_football#21",
     "title": "'Memories flood back' - Rochdale & York meet again after title drama",
     "published": "2026-11-13T16:39:00+00:00",
     "summary": "A look at how Saturday's opponents Rochdale and York City have acclimatised to League Two after their famous final-day National League title decider."
    },
    {
     "ref": "bbc_football#22",
     "title": "Football Daily",
     "published": "2026-11-13T16:05:00+00:00",
     "summary": "The Commentators' View team describe a special night for Harry Kane at Wembley."
    },
    {
     "ref": "bbc_football#23",
     "title": "Tearful Pochettino on 'difficult' decision to leave USA for Man Utd",
     "published": "2026-11-13T15:28:06+00:00",
     "summary": "An emotional Mauricio Pochettino broke down as he explained why he was leaving the USA to take the Manchester United job."
    },
    {
     "ref": "bbc_football#24",
     "title": "Odegaard backing Norway to avenge Wales defeat",
     "published": "2026-11-13T12:43:51+00:00",
     "summary": "Martin Odegaard backs Norway to brush off snow disruption and avenge their defeat by Wales when they meet again in Oslo on Saturday."
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Murray wants trade from Pelicans; both sides working on resolution",
     "published": "2026-11-14T07:37:05+00:00",
     "summary": "Pelicans guard Dejounte Murray wants a trade from the franchise, and his agent, Klutch Sports CEO Rich Paul, and team officials have started working on a resolution."
    },
    {
     "ref": "espn_nba#1",
     "title": "Welcome to the Space Jam: How Michael Jordan and Bugs Bunny's magic resonates 30 years later",
     "published": "2026-11-14T07:11:27+00:00",
     "summary": "Three decades after its release, the basketball-meets-Looney Tunes adventure remains a pop culture staple."
    },
    {
     "ref": "espn_nba#2",
     "title": "Giannis, Bam combine for 74 as Heat flex potential as East contenders",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Giannis Antetokounmpo and Bam Adebayo each scored 37 points to help the Heat top the Cavs for their sixth win in eight games."
    },
    {
     "ref": "espn_nba#3",
     "title": "Lendeborg 1-for-13 in Warriors' blowout loss: 'I was flustered the entire game'",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "In his first game as the primary offensive engine in place of the injured Stephen Curry, Warriors rookie Yaxel Lendeborg went 1-of-13 shooting in a 123-85 blowout loss to the Spurs. \"I was flustered the entire game,\" he said. \"Couldn't make a damn layup.\""
    },
    {
     "ref": "espn_nba#4",
     "title": "Wemby, Spurs land early KO with 18-0 run, rout Warriors for 11th straight win",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Victor Wembanyama and the Spurs pounced on the Warriors with an 18-0 opening run and went on to win 123-85."
    },
    {
     "ref": "espn_nba#5",
     "title": "FAA ground stop throws sports world into travel chaos ahead of weekend games",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Travel plans for multiple sports have been disrupted by the FAA's nationwide ground stop of all flights because of communications problems."
    },
    {
     "ref": "espn_nba#6",
     "title": "Redick says Lakers' Reaves day-to-day with left heel bruise",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Lakers guard Austin Reaves is considered day-to-day as he deals with a left heel bruise, coach JJ Redick said Friday."
    },
    {
     "ref": "espn_nba#7",
     "title": "Former lottery pick McDermott retires after 12 NBA seasons",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Three-point specialist Doug McDermott has retired from the NBA after 12 seasons spent with seven teams."
    },
    {
     "ref": "espn_nba#8",
     "title": "Prosecutors: Text shows plan to bet unders on Rozier's teammate",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "A co-defendant in an NBA betting case told a gambler that he and Terry Rozier were planning a wagering scheme centered on another Hornets player, federal prosecutors alleged in a court filing."
    },
    {
     "ref": "espn_nba#9",
     "title": "📈 Updated Power Rankings: The best newcomer on all 30 teams",
     "published": "2026-11-14T06:59:25+00:00",
     "summary": "Which teams rise and which fall in this week's Power Rankings? Plus, the top newcomer for each team in the league."
    },
    {
     "ref": "espn_nba#10",
     "title": "NBA buzz: Latest news, updates and intel for the 2026-27 season",
     "published": "2026-11-14T02:36:36+00:00",
     "summary": "The NBA is back. The buzz never left. Bookmark this page for the latest news, rumblings and analysis from ESPN's insiders."
    },
    {
     "ref": "espn_nba#11",
     "title": "Inside the group chat where Black NBA coaches counsel -- and trash-talk -- each other",
     "published": "2026-11-14T02:36:05+00:00",
     "summary": "On the court, they're rivals. Off the court, they've found support among the only men who truly understand what they're going through: each other."
    },
    {
     "ref": "espn_nba#12",
     "title": "Despite slump, Knicks' Bridges is a fantasy basketball trade target",
     "published": "2026-11-13T20:00:20+00:00",
     "summary": "Andre explains why Mikal Bridges continues to hold fantasy value despite the poor start to his season."
    },
    {
     "ref": "espn_nba#13",
     "title": "Donovan Mitchell still believes in the Cavaliers, even if you don't",
     "published": "2026-11-13T14:39:48+00:00",
     "summary": "Mitchell made two commitments this summer: his marriage and his extension with the Cavs. Now it's up to him to keep pushing Cleveland forward."
    },
    {
     "ref": "espn_nba#14",
     "title": "Early trade deadline questions: Knicks, Thunder and other contenders' next steps",
     "published": "2026-11-12T15:07:13+00:00",
     "summary": "With the NBA trade deadline looming, which title contenders should -- and could -- make a deal to improve?"
    },
    {
     "ref": "espn_nba#15",
     "title": "19 teams with major roster decisions",
     "published": "2026-11-12T15:07:13+00:00",
     "summary": "With tax and apron penalties lurking, we examine 19 teams barreling toward core-altering decisions."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Transfer rumors, news: Como's Paz to be Pochettino's first Man United summer signing?",
     "published": "2026-11-14T08:59:41+00:00",
     "summary": "Manchester United are monitoring Como superstar Nico Paz ahead of a move next summer. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#1",
     "title": "From Ballon d'Or hopes to Real Madrid bench: Should Liverpool re-sign Alexander-Arnold?",
     "published": "2026-11-14T08:55:03+00:00",
     "summary": "Trent Alexander-Arnold's dream move to Real Madrid is turning into a nightmare, but would Liverpool take him back? And would he want to return?"
    },
    {
     "ref": "espn_soccer#2",
     "title": "In Pochettino, Man United finally have a proper manager",
     "published": "2026-11-14T08:37:47+00:00",
     "summary": "After years of near-misses, Man United have finally landed Mauricio Pochettino, a manager with the kind of pedigree, class and credibility the club have been looking for."
    },
    {
     "ref": "espn_soccer#3",
     "title": "Man United, Pochettino's to-do list based on what's gone wrong",
     "published": "2026-11-14T08:37:40+00:00",
     "summary": "Pochettino makes as much sense as anyone to take the Man United job, so now what? Let's look at the mess he's inheriting and what's at the top of his to-do list."
    },
    {
     "ref": "espn_soccer#4",
     "title": "Why not Utah? How the Royals became an unlikely NWSL contender",
     "published": "2026-11-14T08:13:09+00:00",
     "summary": "Without the star power or spending of their NWSL rivals, the Utah Royals have embraced a collective identity to become title underdogs this season."
    },
    {
     "ref": "espn_soccer#5",
     "title": "Sources: Earthquakes sold to Heath Freeman of Alden Global for $625 million",
     "published": "2026-11-14T08:00:22+00:00",
     "summary": "Alden Global Capital co-founder Heath Freeman is purchasing the San Jose Earthquakes from John Fisher, following MLS owners' approval of the sale Thursday."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Tearful Pochettino on USMNT exit: Toughest decision of my career",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Mauricio Pochettino has left his position as United States men's national team coach to manage Manchester United, the U.S. Soccer Federation said Friday."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Goalkeeper banned 12 games for collision that led to Spanish player's death",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Andorra goalkeeper Jesús Owono has been suspended for 12 games for an on-field collision with Jesús de Miguel that resulted in the death of the Tenerife striker."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Scaloni calls for 'rebuild' as Argentina fall in first game without Messi",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Argentina lost 2-1 to Uruguay in a friendly on Friday in its first game since Lionel Messi's international retirement."
    },
    {
     "ref": "espn_soccer#9",
     "title": "NWSL players demand more respect for women's sports amid playoff venue issues",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Players from Gotham and Kansas City have called for women's sports to be better prioritized by stadium operators amid issues surrounding NWSL semifinal venues."
    },
    {
     "ref": "espn_soccer#10",
     "title": "'This is the way': Xavi lauds Netherlands after tying record Nations League win",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "The Netherlands routed Greece 7-0 on Friday in a statement Nations League victory to stay unbeaten under new coach Xavi."
    },
    {
     "ref": "espn_soccer#11",
     "title": "Egyptian King: Salah becomes country's record goalscorer with Panenka penalty",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Mohamed Salah broke Egypt's all-time scoring record with two goals in a 5-0 Africa Cup of Nations qualifying win over Malawi."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Dortmund to end controversial sponsorship with arms manufacturer",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Borussia Dortmund says it won't renew a sponsorship deal with Germany's largest arms manufacturer Rheinmetall, which drew criticism from fans."
    },
    {
     "ref": "espn_soccer#13",
     "title": "📈The top soccer players in the world right now, ranked again",
     "published": "2026-11-14T08:00:21+00:00",
     "summary": "Who is the best soccer player in the world at the November international break? ESPN's latest rankings are here."
    },
    {
     "ref": "espn_soccer#14",
     "title": "An early WSL title decider: How early Chelsea vs. Man City can define season ahead",
     "published": "2026-11-14T07:58:30+00:00",
     "summary": "Chelsea's meeting with Manchester City on Saturday might not ultimately determine who will win the Women's Super League, but it could have a huge impact."
    },
    {
     "ref": "espn_soccer#15",
     "title": "Pochettino's USMNT tenure had ups, downs and an ever-present mercenary feel",
     "published": "2026-11-14T07:57:20+00:00",
     "summary": "Mauricio Pochettino delivered some highs during his time in charge of the USMNT, but his focus never appeared to stray too far from a return to Europe."
    },
    {
     "ref": "espn_soccer#16",
     "title": "How Carrick won the Man United job, then lost it 10 months later",
     "published": "2026-11-13T15:47:54+00:00",
     "summary": "Michael Carrick performed excellently as a caretaker and impressed the club hierarchy, but doubts over Manchester United's performances and identity never fully disappeared."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Surprise squad selections: Bellingham bros. for England, 2nd-tier player for France",
     "published": "2026-11-12T10:19:58+00:00",
     "summary": "From England's Bellingham brothers to France calling up a player from the second division, meet the surprise call-ups for the November internationals."
    },
    {
     "ref": "espn_soccer#18",
     "title": "How will Argentina replace Lionel Messi before 2030 World Cup?",
     "published": "2026-11-12T10:19:42+00:00",
     "summary": "Argentina need several players to shoulder the responsibilities that, for two decades, were concentrated in the greatest player in their history."
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
     "title": "Lionel Messi to Make Historic Argentina Return as Inter Miami Confirm Friendly Against River Plate - Pasión Fútbol",
     "published": "2026-11-13T19:11:14+00:00",
     "summary": "Lionel Messi to Make Historic Argentina Return as Inter Miami Confirm Friendly Against River Plate Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly - Soy Futbol",
     "published": "2026-11-13T18:25:23+00:00",
     "summary": "Messi Set to Face River Plate at the Monumental: Inter Miami Announces 2027 Friendly Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi and Inter Miami to Face River Plate at the Monumental - beIN SPORTS",
     "published": "2026-11-13T18:02:21+00:00",
     "summary": "Messi and Inter Miami to Face River Plate at the Monumental beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly - ESPN",
     "published": "2026-11-13T17:53:00+00:00",
     "summary": "Messi to play in Argentina Jan. 19 for Inter Miami-River friendly ESPN"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate - World Soccer Talk",
     "published": "2026-11-13T17:37:05+00:00",
     "summary": "Lionel Messi returns to Argentina: Inter Miami confirm preseason friendly vs River Plate World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi to make return to Estadio Monumental in Buenos Aires - USA Today",
     "published": "2026-11-13T16:42:00+00:00",
     "summary": "Lionel Messi to make return to Estadio Monumental in Buenos Aires USA Today"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi Wins Second Consecutive MLS Golden Boot - Yahoo Sports",
     "published": "2026-11-13T16:26:29+00:00",
     "summary": "Lionel Messi Wins Second Consecutive MLS Golden Boot Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi returns to the Monumental! Inter Miami confirms they will play a friendly against River Plate in Argentina - Tribuna.com",
     "published": "2026-11-13T15:51:46+00:00",
     "summary": "Messi returns to the Monumental! Inter Miami confirms they will play a friendly against River Plate in Argentina Tribuna.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi set for Argentina return in Inter Miami friendly at Estadio Monumental - The New York Times",
     "published": "2026-11-13T15:28:09+00:00",
     "summary": "Lionel Messi set for Argentina return in Inter Miami friendly at Estadio Monumental The New York Times"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "International Friendly: River Plate vs. Inter Miami CF at Estadio Monumental - Inter Miami CF",
     "published": "2026-11-13T14:01:31+00:00",
     "summary": "International Friendly: River Plate vs. Inter Miami CF at Estadio Monumental Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami land Tradeify as new official partner - Inside World Football",
     "published": "2026-11-13T13:00:16+00:00",
     "summary": "Inter Miami land Tradeify as new official partner Inside World Football"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "David Beckham to Be Inducted into National Soccer Hall of Fame - Террикон",
     "published": "2026-11-13T10:59:07+00:00",
     "summary": "David Beckham to Be Inducted into National Soccer Hall of Fame Террикон"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Tradeify targets global exposure through Inter Miami CF partnership - SportsMint Media",
     "published": "2026-11-13T08:30:00+00:00",
     "summary": "Tradeify targets global exposure through Inter Miami CF partnership SportsMint Media"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi finalist for third straight MLS MVP award - eNCA",
     "published": "2026-11-13T04:17:43+00:00",
     "summary": "Messi finalist for third straight MLS MVP award eNCA"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award - beIN SPORTS",
     "published": "2026-11-13T03:11:00+00:00",
     "summary": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi named finalist for third straight MVP award in Major League Soccer - Malay Mail",
     "published": "2026-11-13T02:33:38+00:00",
     "summary": "Messi named finalist for third straight MVP award in Major League Soccer Malay Mail"
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
     "title": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:25:51+00:00",
     "summary": "Deni Avdija Walkoff Interview | Portland Trail Blazers 120, Sacramento Kings 107 | Nov. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T06:25:51+00:00",
     "summary": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 NBA.com"
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
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-11-14T05:49:42+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
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