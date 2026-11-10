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
  "home": "Portland Trail Blazers",
  "away": "Oklahoma City Thunder",
  "kickoff_utc": "2026-11-11T04:00:00.000Z"
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
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [
   {
    "home": "Atlanta Hawks",
    "away": "Los Angeles Lakers",
    "score": "114-124",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Cleveland Cavaliers",
    "score": "124-112",
    "status": "Final"
   },
   {
    "home": "Detroit Pistons",
    "away": "Washington Wizards",
    "score": "122-111",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Memphis Grizzlies",
    "score": "102-118",
    "status": "Final"
   },
   {
    "home": "Dallas Mavericks",
    "away": "Indiana Pacers",
    "score": "125-122",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Denver Nuggets",
    "score": "110-100",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "San Antonio Spurs",
    "score": "96-122",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "New Orleans Pelicans",
    "score": "138-87",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "New York Knicks",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-11T00:30:00Z"
   },
   {
    "home": "Philadelphia 76ers",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-11-11T01:00:00Z"
   },
   {
    "home": "Phoenix Suns",
    "away": "LA Clippers",
    "score": null,
    "status": "2026-11-11T02:00:00Z"
   },
   {
    "home": "Utah Jazz",
    "away": "Miami Heat",
    "score": null,
    "status": "2026-11-11T02:00:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Orlando Magic",
    "score": null,
    "status": "2026-11-11T03:00:00Z"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-11T04:00:00Z"
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
     "kickoff_utc": "2026-11-20T21:00:00",
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
     "title": "Wenger considers standing against Infantino",
     "published": "2026-11-10T08:53:26+00:00",
     "summary": "Former Arsenal manager Arsene Wenger is considering standing against Gianni Infantino as a candidate in Fifa's presidential election in March."
    },
    {
     "ref": "bbc_football#1",
     "title": "Podcast: What is going wrong at Aberdeen?",
     "published": "2026-11-10T08:00:00+00:00",
     "summary": "Robinson is out, but are Aberdeen’s problems much bigger than the manager?"
    },
    {
     "ref": "bbc_football#2",
     "title": "How Germany's greatest goalscorer is guiding the next generation",
     "published": "2026-11-10T07:34:07+00:00",
     "summary": "Miroslav Klose rose from amateur to World Cup winner as a player - now the German is forging a similar path as a coach."
    },
    {
     "ref": "bbc_football#3",
     "title": "Caldwell & McGlynn linked with Aberdeen job - gossip",
     "published": "2026-11-10T07:25:56+00:00",
     "summary": "Early names in the frame for Aberdeen job as Celtic midfielder withdraws from international duty."
    },
    {
     "ref": "bbc_football#4",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-10T06:40:56+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#5",
     "title": "Historic winners & 50-yard screamers - best goals from FA Cup first round",
     "published": "2026-11-10T06:35:30+00:00",
     "summary": "Relive all the best goals from the first round of the FA Cup, including Seung-woo Yang's goal for Wimborne Town and an effort from the halfway line by Crewe's Charlie McNeill."
    },
    {
     "ref": "bbc_football#6",
     "title": "More than the Score",
     "published": "2026-11-10T06:30:00+00:00",
     "summary": "The five nominees have been announced for the BBC World Service award"
    },
    {
     "ref": "bbc_football#7",
     "title": "Listen: Who is your BBC Women's Footballer of the Year?",
     "published": "2026-11-10T06:30:00+00:00",
     "summary": "The five nominees have been announced for the BBC World Service award"
    },
    {
     "ref": "bbc_football#8",
     "title": "Cast your vote for BBC Women's Footballer of the Year 2026",
     "published": "2026-11-10T06:24:50+00:00",
     "summary": "Voting is now open for the BBC Women's Footballer of the Year 2026, with five players on the shortlist."
    },
    {
     "ref": "bbc_football#9",
     "title": "Cast your vote for BBC Women's Footballer of the Year 2026",
     "published": "2026-11-10T06:24:50+00:00",
     "summary": "Voting is now open for the BBC Women's Footballer of the Year 2026, with five players on the shortlist."
    },
    {
     "ref": "bbc_football#10",
     "title": "Injuries, noise & scalps - Wrexham's season so far",
     "published": "2026-11-10T04:13:48+00:00",
     "summary": "Wrexham have had a slow start to the season and some off-field turbulence but having steadied the ship could they be on track for the play-offs?"
    },
    {
     "ref": "bbc_football#11",
     "title": "Plymouth Parkway beat Berkhamsted to reach FA Cup second round",
     "published": "2026-11-10T00:13:13+00:00",
     "summary": "Two Andrew Neal penalties sew Plymouth Parkway earn a first-ever trip to the second round of the FA Cup after a coming from a goal down to beat Berkhamsted 2-1 in extra time."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man Utd expected to sack head coach Carrick",
     "published": "2026-11-09T23:13:31+00:00",
     "summary": "Michael Carrick's Manchester United reign appears close to an end following the club's worst start to a domestic campaign in 40 years."
    },
    {
     "ref": "bbc_football#13",
     "title": "Brady ends association with Birmingham City",
     "published": "2026-11-09T22:18:17+00:00",
     "summary": "NFL legend Tom Brady ends his association with top-of-the-table Championship side Birmingham City after three years."
    },
    {
     "ref": "bbc_football#14",
     "title": "Wimborne to host Bradford in FA Cup second round - see the full draw",
     "published": "2026-11-09T22:10:22+00:00",
     "summary": "Seventh-tier side Wimborne Town will host League One Bradford City in the second round of the FA Cup, while former winners Leicester City will visit National League South side Dover Athletic."
    },
    {
     "ref": "bbc_football#15",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-09T21:46:00+00:00",
     "summary": "Ellen and Ben are on location with the London City Lionesses and Spain defender!"
    },
    {
     "ref": "bbc_football#16",
     "title": "BBC Women's Football Weekly",
     "published": "2026-11-09T21:46:00+00:00",
     "summary": "Ellen and Ben are on location with the London City Lionesses and Spain defender!"
    },
    {
     "ref": "bbc_football#17",
     "title": "NI's O'Neill ruled out of Nations League matches",
     "published": "2026-11-09T21:44:23+00:00",
     "summary": "Arsenal forward Ceadach O'Neill is ruled out of Northern Ireland's final two Nations League fixtures against Ukraine in Belfast and Hungary in Budapest."
    },
    {
     "ref": "bbc_football#18",
     "title": "'Aberdeen hunt yet another manager after ill-fated Robinson reign'",
     "published": "2026-11-09T21:39:37+00:00",
     "summary": "Stephen Robinson's tenure as head coach panned out as many Aberdeen fans feared it would, writes BBC Scotland's Liam McLeod."
    },
    {
     "ref": "bbc_football#19",
     "title": "Football Daily",
     "published": "2026-11-09T21:33:00+00:00",
     "summary": "White opens up about his England departure, will Sage get sacked & will Frank come in?"
    },
    {
     "ref": "bbc_football#20",
     "title": "Atletico target Zubimendi move - Tuesday's gossip",
     "published": "2026-11-09T21:13:37+00:00",
     "summary": "Arsenal midfielder Martin Zubimendi is a target for Atletico Madrid, Leeds United plan to step up contract talks with striker Dominic Calvert-Lewin, Barcelona are keen on Bayern Munich defender Jonathan Tah, plus more."
    },
    {
     "ref": "bbc_football#21",
     "title": "People don't know full story behind England exile - White",
     "published": "2026-11-09T19:00:10+00:00",
     "summary": "Arsenal defender Ben White says people don't know the \"full story\" behind his decision to previously make himself unavailable for England selection - but says he would make the same decision again."
    },
    {
     "ref": "bbc_football#22",
     "title": "Kane and Bellingham air strong views in England World Cup review",
     "published": "2026-11-09T17:30:23+00:00",
     "summary": "England players are understood to have aired strong views about their World Cup semi-final defeat by Argentina in a team meeting."
    },
    {
     "ref": "bbc_football#23",
     "title": "Wilson eyeing survival step as Wales tackle Norway",
     "published": "2026-11-09T17:21:28+00:00",
     "summary": "Harry Wilson believes Wales can shock Norway again in Oslo on Saturday and move a step closer to survival in Nations League A."
    },
    {
     "ref": "bbc_football#24",
     "title": "The heavy defeat that ended Robinson's Aberdeen tenure",
     "published": "2026-11-09T17:10:00+00:00",
     "summary": "Watch the best of the action as Hibernian thrash Aberdeen 4-0 in what would proved to be Stephen Robinson's final match in charge."
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
     "published": "2026-11-10T07:55:25+00:00",
     "summary": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo Transfermarkt"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Abada's magic seals wild 3–3 comeback against Messi's Miami - The Jerusalem Post",
     "published": "2026-11-10T07:26:43+00:00",
     "summary": "Abada's magic seals wild 3–3 comeback against Messi's Miami The Jerusalem Post"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami CF vs. Charlotte FC - Game Highlights - ESPN",
     "published": "2026-11-10T04:39:45+00:00",
     "summary": "Inter Miami CF vs. Charlotte FC - Game Highlights ESPN"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi returns to World XI as Spain dominates both lineups - The Korea Herald",
     "published": "2026-11-10T04:27:55+00:00",
     "summary": "Messi returns to World XI as Spain dominates both lineups The Korea Herald"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi Makes History! Brace and Records Cement Inter Miami Legacy - beIN SPORTS",
     "published": "2026-11-10T03:56:15+00:00",
     "summary": "Messi Makes History! Brace and Records Cement Inter Miami Legacy beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami vs Columbus Crew - beIN SPORTS",
     "published": "2026-11-10T00:05:23+00:00",
     "summary": "Inter Miami vs Columbus Crew beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Is Lionel Messi the obvious option for MLS MVP? - Yahoo Sports",
     "published": "2026-11-09T23:30:25+00:00",
     "summary": "Is Lionel Messi the obvious option for MLS MVP? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi’s Not Heading Back to Argentina in 2027! Inter Miami Is Still His Home - Soy Futbol",
     "published": "2026-11-09T23:25:12+00:00",
     "summary": "Messi’s Not Heading Back to Argentina in 2027! Inter Miami Is Still His Home Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "More Messi MLS booty as superstar strikes gold again - Sport Nation",
     "published": "2026-11-09T22:49:10+00:00",
     "summary": "More Messi MLS booty as superstar strikes gold again Sport Nation"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - RiverBender.com",
     "published": "2026-11-09T20:45:00+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season RiverBender.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "DC United closes out 7th consecutive losing season - Baltimore Sun",
     "published": "2026-11-09T19:58:29+00:00",
     "summary": "DC United closes out 7th consecutive losing season Baltimore Sun"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - CFJC Today Kamloops",
     "published": "2026-11-09T18:13:19+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season CFJC Today Kamloops"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Called Up: Seven Inter Miami CF Players Set for November International Duty - Inter Miami CF",
     "published": "2026-11-09T18:07:23+00:00",
     "summary": "Called Up: Seven Inter Miami CF Players Set for November International Duty Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios - beIN SPORTS",
     "published": "2026-11-09T18:04:53+00:00",
     "summary": "Inter Miami CF Hosts 2026 Edition of Annual Media Appreciation Day and Copa de Medios beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Germán Berterame scores goal for Inter Miami CF - ESPN",
     "published": "2026-11-09T17:53:11+00:00",
     "summary": "Germán Berterame scores goal for Inter Miami CF ESPN"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Oskaloosa Herald",
     "published": "2026-11-09T17:45:05+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Oskaloosa Herald"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Ottumwa Courier",
     "published": "2026-11-09T17:39:54+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Ottumwa Courier"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi wins the MLS Golden Boot for a second straight season - Yahoo Sports",
     "published": "2026-11-09T17:21:00+00:00",
     "summary": "Lionel Messi wins the MLS Golden Boot for a second straight season Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami brings media together at Nu Stadium for Copa de Medios - MARCA",
     "published": "2026-11-09T17:14:01+00:00",
     "summary": "Inter Miami brings media together at Nu Stadium for Copa de Medios MARCA"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Nashville SC Breaks MLS Points Record, Miami Ties 3-3 with Charlotte - MundoNOW",
     "published": "2026-11-09T17:10:43+00:00",
     "summary": "Nashville SC Breaks MLS Points Record, Miami Ties 3-3 with Charlotte MundoNOW"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi makes final decision on leaving Inter Miami as Argentina return rumors grow - https://latination.com/",
     "published": "2026-11-09T17:10:19+00:00",
     "summary": "Lionel Messi makes final decision on leaving Inter Miami as Argentina return rumors grow https://latination.com/"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi returns to FIFPRO World 11, Ballon d'Or winner Kane misses out - Reuters",
     "published": "2026-11-09T16:55:43+00:00",
     "summary": "Messi returns to FIFPRO World 11, Ballon d'Or winner Kane misses out Reuters"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Kane excluded: Messi and Hakimi head FIFPro's 2026 best XI - Goal.com",
     "published": "2026-11-09T16:44:23+00:00",
     "summary": "Kane excluded: Messi and Hakimi head FIFPro's 2026 best XI Goal.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi named to 2026 FIFPRO World 11 alongside Mbappé, Haaland - MLSsoccer.com",
     "published": "2026-11-09T16:31:07+00:00",
     "summary": "Lionel Messi named to 2026 FIFPRO World 11 alongside Mbappé, Haaland MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo - Transfermarkt",
     "published": "2026-11-09T15:50:01+00:00",
     "summary": "Latest transfer news: Lionel Messi Inter Miami exit ruled out as Man Utd eye Murillo Transfermarkt"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Avdija Nominated for Western Conference Player of the Week - Blazer's Edge",
     "published": "2026-11-10T03:16:00+00:00",
     "summary": "Avdija Nominated for Western Conference Player of the Week Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Micah Nori Media Availability | Nov. 9, 2026 | Portland Trail Blazers - NBA.com",
     "published": "2026-11-09T23:38:46+00:00",
     "summary": "Micah Nori Media Availability | Nov. 9, 2026 | Portland Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Should I Trade Braden Smith for Deni Avdija? | Fantasy Basketball - FantasyPros",
     "published": "2026-11-09T06:52:00+00:00",
     "summary": "Should I Trade Braden Smith for Deni Avdija? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Scoot Henderson still seeking rhythm amid Blazers’ strong start - Hoops Wire",
     "published": "2026-11-09T06:00:23+00:00",
     "summary": "Scoot Henderson still seeking rhythm amid Blazers’ strong start Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Should I Trade Ben Saraf for Cody Martin? | Fantasy Basketball - FantasyPros",
     "published": "2026-11-09T00:28:25+00:00",
     "summary": "Should I Trade Ben Saraf for Cody Martin? | Fantasy Basketball FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League - New York Daily News",
     "published": "2026-11-08T15:25:28+00:00",
     "summary": "Nets’ Egor Dëmin progressing but ruled out against Mavericks; Ben Saraf shines in G League New York Daily News"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Victor Wembanyama scores 29 points in Spurs' massive win over Blazers - MySA",
     "published": "2026-11-08T14:57:42+00:00",
     "summary": "Victor Wembanyama scores 29 points in Spurs' massive win over Blazers MySA"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Portland Trail Blazers open 2026-27 NBA season - OregonLive.com",
     "published": "2026-11-08T14:30:47+00:00",
     "summary": "Portland Trail Blazers open 2026-27 NBA season OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers' Deni Avdija: Poor shooting performance - CBS Sports",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Trail Blazers' Deni Avdija: Poor shooting performance CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija News: Poor shooting performance - RotoWire",
     "published": "2026-11-08T14:25:37+00:00",
     "summary": "Deni Avdija News: Poor shooting performance RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija should remain Portland’s top offensive option despite Lillard, Morant - Ynetnews",
     "published": "2026-11-08T07:51:00+00:00",
     "summary": "Deni Avdija should remain Portland’s top offensive option despite Lillard, Morant Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "NBA: Victory Wembanyama scores 29, Spurs trounce Blazers - Inquirer.net",
     "published": "2026-11-08T06:08:24+00:00",
     "summary": "NBA: Victory Wembanyama scores 29, Spurs trounce Blazers Inquirer.net"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija with the 2 Pt, 11/07/2026 - Yahoo Sports",
     "published": "2026-11-08T05:42:48+00:00",
     "summary": "Deni Avdija with the 2 Pt, 11/07/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro - NetsDaily",
     "published": "2026-11-08T04:14:00+00:00",
     "summary": "Ben Saraf and Dain Dainja combine for 50 in Long Island’s big win over Greensboro NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Lakers showcase early resolve for best start since 2019 - Orange County Register",
     "published": "2026-11-07T23:40:40+00:00",
     "summary": "Lakers showcase early resolve for best start since 2019 Orange County Register"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward - Rip City Project",
     "published": "2026-11-07T19:48:16+00:00",
     "summary": "Deni Avdija’s turnovers are still holding him back as Blazers’ point forward Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija flirts with triple-double in Friday's loss to Lakers - FantasyPros",
     "published": "2026-11-07T15:33:22+00:00",
     "summary": "Deni Avdija flirts with triple-double in Friday's loss to Lakers FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss - CBS Sports",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Trail Blazers' Deni Avdija: Sniffs triple-double in loss CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija News: Sniffs triple-double in loss - RotoWire",
     "published": "2026-11-07T11:57:04+00:00",
     "summary": "Deni Avdija News: Sniffs triple-double in loss RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out - San Antonio Express-News",
     "published": "2026-11-07T10:11:09+00:00",
     "summary": "Spurs vs. Trail Blazers: How to watch the game, who's starting, who's out San Antonio Express-News"
    }
   ]
  }
 ]
}
</input>