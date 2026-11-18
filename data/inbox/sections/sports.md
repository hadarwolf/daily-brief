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
  "away": "Chicago Bulls",
  "kickoff_utc": "2026-11-19T00:30:00.000Z"
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
   "today": [],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T22:30:00Z",
     "home": "Coritiba",
     "away": "Santos",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:00:00Z",
     "home": "Clube do Remo",
     "away": "Chapecoense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:30:00Z",
     "home": "Flamengo",
     "away": "Paranaense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-18T23:30:00Z",
     "home": "Cruzeiro",
     "away": "Palmeiras",
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
    "home": "Toronto Raptors",
    "away": "New York Knicks",
    "score": "102-111",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Portland Trail Blazers",
    "score": "106-105",
    "status": "Final"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Detroit Pistons",
    "score": "93-105",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Charlotte Hornets",
    "score": "118-114",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Utah Jazz",
    "score": "107-132",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Cleveland Cavaliers",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-19T00:00:00Z"
   },
   {
    "home": "Indiana Pacers",
    "away": "Houston Rockets",
    "score": null,
    "status": "2026-11-19T00:00:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-19T00:00:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-11-19T00:00:00Z"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Chicago Bulls",
    "score": null,
    "status": "2026-11-19T00:30:00Z"
   },
   {
    "home": "Toronto Raptors",
    "away": "Washington Wizards",
    "score": null,
    "status": "2026-11-19T00:30:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-19T01:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-19T01:00:00Z"
   },
   {
    "home": "Denver Nuggets",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-19T02:30:00Z"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-19T01:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-19T03:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Phoenix Suns",
    "score": null,
    "status": "2026-11-19T03:00:00Z"
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
     "kickoff_utc": "2026-11-17T19:45:00",
     "home": "Israel",
     "away": "Austria",
     "score": "1-1"
    }
   ],
   "upcoming": []
  }
 },
 "news_feeds": [
  {
   "outlet": "BBC Sport — Football",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_football#0",
     "title": "Record crowds, legends - Bordeaux bid to escape amateur game",
     "published": "2026-11-18T10:51:37+00:00",
     "summary": "Bordeaux fans thought things could not get any worse, then they were demoted to France's amateur sixth tier."
    },
    {
     "ref": "bbc_football#1",
     "title": "Williams to join temporary Swansea coaching team",
     "published": "2026-11-18T10:48:39+00:00",
     "summary": "Ashley Williams is set to join a temporary Swansea City coaching team as the Championship club attempt to fill the void left by Vitor Matos."
    },
    {
     "ref": "bbc_football#2",
     "title": "Former Spain midfielder Mata retires aged 38",
     "published": "2026-11-18T10:12:46+00:00",
     "summary": "Former Spain midfielder Juan Mata, who had spells at Chelsea and Manchester United in the Premier League, announces his retirement from playing at the age of 38."
    },
    {
     "ref": "bbc_football#3",
     "title": "NI will carry momentum into Euro 2028 qualifiers",
     "published": "2026-11-18T10:04:44+00:00",
     "summary": "Northern Ireland manager Michael O'Neill says his Nations League promotion winners will plot their next 12 months after the Euro 2028 qualifying draw in December."
    },
    {
     "ref": "bbc_football#4",
     "title": "When is the Nations League quarter-final draw?",
     "published": "2026-11-18T09:33:42+00:00",
     "summary": "Our Ask Me Anything Team tell you all you need to know about the Nations League quarter-final draw."
    },
    {
     "ref": "bbc_football#5",
     "title": "BBC Women's Footballer of the Year 2026 to be named on 13 December",
     "published": "2026-11-18T09:00:06+00:00",
     "summary": "Voting has closed for the BBC Women's Footballer of the Year 2026, with five players on the shortlist."
    },
    {
     "ref": "bbc_football#6",
     "title": "Manchester won't always be blue - Pochettino",
     "published": "2026-11-18T08:42:28+00:00",
     "summary": "New Manchester United boss Mauricio Pochettino says he will restore Manchester United to being the most successful footballing side in the city."
    },
    {
     "ref": "bbc_football#7",
     "title": "Rangers explore return for Cerny - gossip",
     "published": "2026-11-18T08:15:37+00:00",
     "summary": "Two familiar wingers linked with Rangers returns in January as SFA redraft proposals to address youth development crisis..."
    },
    {
     "ref": "bbc_football#8",
     "title": "Listen: What needs to change for Pocognoli and Scotland?",
     "published": "2026-11-18T08:00:00+00:00",
     "summary": "What needs to change to turn Scotland’s fortunes around?"
    },
    {
     "ref": "bbc_football#9",
     "title": "From one of Ajax's future stars to quitting football for music",
     "published": "2026-11-18T07:02:42+00:00",
     "summary": "Former Ajax academy player Elikia Mbinga tells BBC Sport how he swapped football for music after playing with some Premier League stars."
    },
    {
     "ref": "bbc_football#10",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-18T06:56:12+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#11",
     "title": "The 3pm football blackout: Outdated or still relevant in 2026?",
     "published": "2026-11-18T06:27:11+00:00",
     "summary": "After 60 years, is time finally running out on the 3pm blackout in football?"
    },
    {
     "ref": "bbc_football#12",
     "title": "Belief and bench steer Northern Ireland into Nations League top tier",
     "published": "2026-11-17T23:49:31+00:00",
     "summary": "Manager Michael O'Neill hails the belief shown by his side after they come from behind against Hungary to earn the draw required for promotion to Nations League A."
    },
    {
     "ref": "bbc_football#13",
     "title": "Bellamy convinced of Wales credentials despite defeat by Portugal",
     "published": "2026-11-17T23:37:45+00:00",
     "summary": "Wales finished bottom of their Nations League group, but boss Craig Bellamy believes his team showed they belong in the top flight."
    },
    {
     "ref": "bbc_football#14",
     "title": "Republic of Ireland talisman Parrott caps dream year with two more goals",
     "published": "2026-11-17T23:10:33+00:00",
     "summary": "Republic of Ireland striker Troy Parrott reflects on a transformative 12 months for both club and country after scoring a double in the win against Kosovo."
    },
    {
     "ref": "bbc_football#15",
     "title": "Senegal and Morocco lead Afcon qualifiers but Tunisia protest",
     "published": "2026-11-17T22:54:51+00:00",
     "summary": "Senegal, Cameroon and Morocco qualify for the 2027 Africa Cup of Nations, but Nigeria are in trouble, and struggling Tunisia fail with an impassioned penalty protest."
    },
    {
     "ref": "bbc_football#16",
     "title": "Liverpool lead Chelsea in Camara race - Wednesday's gossip",
     "published": "2026-11-17T22:25:16+00:00",
     "summary": "Liverpool leading Chelsea in race for Monaco's Lamine Camara, Barcelona rule out moves for Virgil van Dijk and Bruno Fernandes, and ex-Crystal Palace winger Wilfried Zaha could rejoin the club."
    },
    {
     "ref": "bbc_football#17",
     "title": "Highlights: Ten-man Portugal beat Wales to top group",
     "published": "2026-11-17T21:56:04+00:00",
     "summary": "Watch the best of the action as Portugal beat Wales in the Nations League in Cardiff."
    },
    {
     "ref": "bbc_football#18",
     "title": "Rangers great Brand dies aged 89",
     "published": "2026-11-17T21:02:57+00:00",
     "summary": "Rangers have paid tribute to Ralph Brand, one of the most prolific goalscorers in the club's history, who has died aged 89."
    },
    {
     "ref": "bbc_football#19",
     "title": "'A great of the club' - Rangers legend Brand dies aged 89",
     "published": "2026-11-17T21:02:57+00:00",
     "summary": "Rangers have paid tribute to Ralph Brand, one of the most prolific goalscorers in the club's history, who has died aged 89."
    },
    {
     "ref": "bbc_football#20",
     "title": "Millwall open disciplinary proceedings against Baker",
     "published": "2026-11-17T20:00:52+00:00",
     "summary": "Millwall are undertaking disciplinary proceedings against forward Benicio Baker, BBC Sport understands."
    },
    {
     "ref": "bbc_football#21",
     "title": "Madrid-bound Gabriel posts farewell Man Utd message",
     "published": "2026-11-17T19:35:06+00:00",
     "summary": "TeenagerJJ Gabriel posts a farewell message saying Manchester United will always be part of his story, as he prepares for a likely move to Real Madrid."
    },
    {
     "ref": "bbc_football#22",
     "title": "Arsenal Double winner Storey dies aged 81",
     "published": "2026-11-17T17:33:41+00:00",
     "summary": "Former Arsenal and England midfielder Peter Storey - who helped the Gunners win the Double in 1970-71 - has died at the age of 81."
    },
    {
     "ref": "bbc_football#23",
     "title": "Swansea boss Matos on brink of Strasbourg move",
     "published": "2026-11-17T16:52:59+00:00",
     "summary": "Vitor Matos says farewell to Swansea City's players and staff as he closes in on a move to Strasbourg."
    },
    {
     "ref": "bbc_football#24",
     "title": "FA wants to host Nations League finals in England",
     "published": "2026-11-17T15:51:30+00:00",
     "summary": "England could host the Nations League finals this season after Football Association officials register their interest."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Luis Suarez opens up on Yamal, Raphinha, Barcelona exit, Messi's attempt to keep Neymar: 'It was impossible to convince him' - Barca Universal",
     "published": "2026-11-18T08:30:32+00:00",
     "summary": "Luis Suarez opens up on Yamal, Raphinha, Barcelona exit, Messi's attempt to keep Neymar: 'It was impossible to convince him' Barca Universal"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Suarez reveals Barcelona return plan, next move after retirement - Daily Post Nigeria",
     "published": "2026-11-18T08:27:49+00:00",
     "summary": "Suarez reveals Barcelona return plan, next move after retirement Daily Post Nigeria"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 - FOX Sports",
     "published": "2026-11-18T00:30:46+00:00",
     "summary": "Orlando vs. Inter Miami CF - Live Score - April 17, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 - FOX Sports",
     "published": "2026-11-18T00:17:59+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - April 21, 2027 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami CF vs. New York Red Bulls: Live game updates, stats, play-by-play - Yahoo",
     "published": "2026-11-17T23:47:03+00:00",
     "summary": "Inter Miami CF vs. New York Red Bulls: Live game updates, stats, play-by-play Yahoo"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Luis Suarez reveals how he sees his retirement alongside Lionel Messi, although it may not happen together - World Soccer Talk",
     "published": "2026-11-17T23:24:54+00:00",
     "summary": "Luis Suarez reveals how he sees his retirement alongside Lionel Messi, although it may not happen together World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MLS Predictions: Fierce Battles Ignite Opening Round of the 2026 MLS Cup Playoffs - Sports Illustrated",
     "published": "2026-11-17T23:00:01+00:00",
     "summary": "MLS Predictions: Fierce Battles Ignite Opening Round of the 2026 MLS Cup Playoffs Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MESSI’S REMARKABLE 2026: From MetLife heartbreak to a record Golden Boot - Front Row Soccer",
     "published": "2026-11-17T22:46:10+00:00",
     "summary": "MESSI’S REMARKABLE 2026: From MetLife heartbreak to a record Golden Boot Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Will they stop together? Suárez reveals the secret delaying Messi's retirement - Goal.com",
     "published": "2026-11-17T20:37:36+00:00",
     "summary": "Will they stop together? Suárez reveals the secret delaying Messi's retirement Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi & Inter Miami enter MLS Cup Playoffs with historic ambitions - MLSsoccer.com",
     "published": "2026-11-17T20:14:30+00:00",
     "summary": "Lionel Messi & Inter Miami enter MLS Cup Playoffs with historic ambitions MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami vs Columbus Crew playoff preview: coin toss or foregone conclusion? - Prost International [PINT]",
     "published": "2026-11-17T19:28:03+00:00",
     "summary": "Inter Miami vs Columbus Crew playoff preview: coin toss or foregone conclusion? Prost International [PINT]"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Rodrigo De Paul sends in a goal from distance for Inter Miami - ESPN",
     "published": "2026-11-17T17:38:11+00:00",
     "summary": "Rodrigo De Paul sends in a goal from distance for Inter Miami ESPN"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Feed your Inter Miami obsession with the new FanSided app - Inter Heron",
     "published": "2026-11-17T16:31:29+00:00",
     "summary": "Feed your Inter Miami obsession with the new FanSided app Inter Heron"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "David Beckham sues after fragrance sold in gas stations, discount stores - Sportsnet.ca",
     "published": "2026-11-17T16:25:00+00:00",
     "summary": "David Beckham sues after fragrance sold in gas stations, discount stores Sportsnet.ca"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "New York City FC vs. Inter Miami CF: Live game updates, stats, play-by-play - Yahoo",
     "published": "2026-11-17T15:59:27+00:00",
     "summary": "New York City FC vs. Inter Miami CF: Live game updates, stats, play-by-play Yahoo"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi Extends Inter Miami Stay Amid Argentina Talk - SportsGrid",
     "published": "2026-11-17T13:27:11+00:00",
     "summary": "Lionel Messi Extends Inter Miami Stay Amid Argentina Talk SportsGrid"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi Shuts Down Exit Rumors with 2028 Inter Miami Commitment Despite Argentina Coaching Invite - Yahoo Sports",
     "published": "2026-11-17T12:14:17+00:00",
     "summary": "Messi Shuts Down Exit Rumors with 2028 Inter Miami Commitment Despite Argentina Coaching Invite Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami CF Names American Airlines Official Airline Partner - https://safariindia.com/",
     "published": "2026-11-17T09:03:50+00:00",
     "summary": "Inter Miami CF Names American Airlines Official Airline Partner https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Marriott Bonvoy Partners with Inter Miami CF - https://safariindia.com/",
     "published": "2026-11-17T08:27:47+00:00",
     "summary": "Marriott Bonvoy Partners with Inter Miami CF https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Watch Columbus Crew vs Inter Miami CF - Fubo",
     "published": "2026-11-17T07:24:23+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami CF Fubo"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami - Barcelona 0-6 - Flashscore.com",
     "published": "2026-11-17T00:09:38+00:00",
     "summary": "Inter Miami - Barcelona 0-6 Flashscore.com"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami CF vs. Nashville SC: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T20:56:33+00:00",
     "summary": "Inter Miami CF vs. Nashville SC: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami vs. Columbus Crew: 5 biggest storylines for Round One series - MLSsoccer.com",
     "published": "2026-11-16T16:51:43+00:00",
     "summary": "Inter Miami vs. Columbus Crew: 5 biggest storylines for Round One series MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play - Yahoo",
     "published": "2026-11-16T16:20:55+00:00",
     "summary": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play Yahoo"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami vs. Columbus Crew: How to watch, stream Round One Game 1 - MLSsoccer.com",
     "published": "2026-11-16T16:04:27+00:00",
     "summary": "Inter Miami vs. Columbus Crew: How to watch, stream Round One Game 1 MLSsoccer.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Wizards continue to be proven wrong for trading away Deni Avdija - Wiz of Awes",
     "published": "2026-11-18T11:00:00+00:00",
     "summary": "Wizards continue to be proven wrong for trading away Deni Avdija Wiz of Awes"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija (foot) downgraded to out Tuesday - NBC Sports",
     "published": "2026-11-18T05:39:59+00:00",
     "summary": "Deni Avdija (foot) downgraded to out Tuesday NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija (foot) questionable Tuesday vs. MIN - NBC Sports",
     "published": "2026-11-18T03:50:57+00:00",
     "summary": "Deni Avdija (foot) questionable Tuesday vs. MIN NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija out against Wolves - HoopsHype",
     "published": "2026-11-18T02:04:00+00:00",
     "summary": "Deni Avdija out against Wolves HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija out vs. Timberwolves with left foot soreness as Jayson Kent watches Portland chase a split - شبكة تواصل الإخبارية",
     "published": "2026-11-18T01:34:23+00:00",
     "summary": "Deni Avdija out vs. Timberwolves with left foot soreness as Jayson Kent watches Portland chase a split شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blazers rule star Deni Avdija out vs. Timberwolves with sore foot - ESPN",
     "published": "2026-11-18T00:55:00+00:00",
     "summary": "Trail Blazers rule star Deni Avdija out vs. Timberwolves with sore foot ESPN"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija Playing Tonight? Questionable Status Adds Another Layer to Blazers-Timberwolves Rematch - شبكة تواصل الإخبارية",
     "published": "2026-11-18T00:40:47+00:00",
     "summary": "Deni Avdija Playing Tonight? Questionable Status Adds Another Layer to Blazers-Timberwolves Rematch شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija (foot) ruled out Tuesday - FantasyPros",
     "published": "2026-11-18T00:40:00+00:00",
     "summary": "Deni Avdija (foot) ruled out Tuesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Blazers announce brutal Deni Avdija final injury status vs. Timberwolves - BasketNews.com",
     "published": "2026-11-18T00:32:00+00:00",
     "summary": "Blazers announce brutal Deni Avdija final injury status vs. Timberwolves BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Portland Trail Blazers Announce Deni Avdija Injury News Before Timberwolves Game - Heavy.com",
     "published": "2026-11-18T00:31:00+00:00",
     "summary": "Portland Trail Blazers Announce Deni Avdija Injury News Before Timberwolves Game Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers' Deni Avdija: Ruled out Tuesday - CBS Sports",
     "published": "2026-11-18T00:28:32+00:00",
     "summary": "Trail Blazers' Deni Avdija: Ruled out Tuesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija Injury: Ruled out Tuesday - RotoWire",
     "published": "2026-11-18T00:28:32+00:00",
     "summary": "Deni Avdija Injury: Ruled out Tuesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Blazers’ Ja Morant all smiles comforting Deni Avdija with injury return tease at end of Timberwolves’ beatdown - ClutchPoints",
     "published": "2026-11-17T23:31:51+00:00",
     "summary": "Blazers’ Ja Morant all smiles comforting Deni Avdija with injury return tease at end of Timberwolves’ beatdown ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Final Injury Report for Trail Blazers-Timberwolves: Will Deni Avdija, Jonathan Kuminga Play? - Yahoo Sports",
     "published": "2026-11-17T21:00:00+00:00",
     "summary": "Final Injury Report for Trail Blazers-Timberwolves: Will Deni Avdija, Jonathan Kuminga Play? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Damian Lillard’s search for the right co-star has finally ended with Deni Avdija - Rip City Project",
     "published": "2026-11-17T19:27:35+00:00",
     "summary": "Damian Lillard’s search for the right co-star has finally ended with Deni Avdija Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija (foot) listed questionable Tuesday - FantasyPros",
     "published": "2026-11-17T19:24:00+00:00",
     "summary": "Deni Avdija (foot) listed questionable Tuesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija may miss Tuesday's game against Timberwolves - Yahoo Sports",
     "published": "2026-11-17T19:20:59+00:00",
     "summary": "Deni Avdija may miss Tuesday's game against Timberwolves Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers' Deni Avdija: Listed as questionable - CBS Sports",
     "published": "2026-11-17T19:20:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Listed as questionable CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Injury: Listed as questionable - RotoWire",
     "published": "2026-11-17T19:20:07+00:00",
     "summary": "Deni Avdija Injury: Listed as questionable RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Ben Saraf News: Diverse effort against Delaware - RotoWire",
     "published": "2026-11-17T18:22:35+00:00",
     "summary": "Ben Saraf News: Diverse effort against Delaware RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija drops 27 points Monday - FantasyPros",
     "published": "2026-11-17T15:41:00+00:00",
     "summary": "Deni Avdija drops 27 points Monday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Despite strong efforts from Ben Saraf, Drake Powell, Long Island fall to Delaware, 108-107 - NetsDaily",
     "published": "2026-11-17T14:19:44+00:00",
     "summary": "Despite strong efforts from Ben Saraf, Drake Powell, Long Island fall to Delaware, 108-107 NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Highlights From Deni Avdija 27-Point Game - NBA.com",
     "published": "2026-11-17T09:37:18+00:00",
     "summary": "Highlights From Deni Avdija 27-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija scores team-high 27 points in loss - NBC Sports",
     "published": "2026-11-17T04:17:35+00:00",
     "summary": "Deni Avdija scores team-high 27 points in loss NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-17T04:00:48+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    }
   ]
  }
 ]
}
</input>