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
  "home": "Israel",
  "away": "Austria",
  "kickoff_utc": "2026-11-17T19:45:00"
 },
 {
  "sport": "nba",
  "competition": "NBA",
  "home": "Minnesota Timberwolves",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-18T01:00:00.000Z"
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
    "home": "Boston Celtics",
    "away": "Orlando Magic",
    "score": "105-115",
    "status": "Final"
   },
   {
    "home": "Cleveland Cavaliers",
    "away": "Chicago Bulls",
    "score": "126-115",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Memphis Grizzlies",
    "score": "120-136",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Philadelphia 76ers",
    "score": "123-135",
    "status": "Final"
   },
   {
    "home": "Miami Heat",
    "away": "Houston Rockets",
    "score": "128-110",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Portland Trail Blazers",
    "score": "106-98",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Golden State Warriors",
    "score": "115-94",
    "status": "Final"
   },
   {
    "home": "Denver Nuggets",
    "away": "Phoenix Suns",
    "score": "105-117",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Toronto Raptors",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-18T00:30:00Z"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-18T01:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Detroit Pistons",
    "score": null,
    "status": "2026-11-18T01:00:00Z"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Charlotte Hornets",
    "score": null,
    "status": "2026-11-18T04:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-18T03:30:00Z"
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
     "kickoff_utc": "2026-11-17T19:45:00",
     "home": "Israel",
     "away": "Austria",
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
     "title": "Swansea in fight to keep Matos amid Strasbourg interest",
     "published": "2026-11-17T10:44:47+00:00",
     "summary": "Vitor Matos is understood to have indicated he is interested in leaving Swansea who have had an official approach from the French top-flight club."
    },
    {
     "ref": "bbc_football#1",
     "title": "Blackburn boss Mowbray steps down over health issues",
     "published": "2026-11-17T10:40:41+00:00",
     "summary": "Blackburn Rovers head coach Tony Mowbray steps down from his role with the Championship club due to health issues."
    },
    {
     "ref": "bbc_football#2",
     "title": "Has Infantino already won Fifa election as challengers are revealed?",
     "published": "2026-11-17T10:32:07+00:00",
     "summary": "Uefa has finally identified a candidate next year's Fifa presidential election, but can anyone stop Gianni Infantino from winning?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Pochettino says he would tell Guardiola to take USA job",
     "published": "2026-11-17T09:48:24+00:00",
     "summary": "Mauricio Pochettino says he would tell Pep Guardiola to take the United States job if the former Manchester City manager was ever offered it."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Switzerland didn't have better players but were better team'",
     "published": "2026-11-17T09:09:24+00:00",
     "summary": "Sportscene pundits Craig Levein and Leanne Crichton unpick Scotland's 4-0 Nations League defeat in Switzerland."
    },
    {
     "ref": "bbc_football#5",
     "title": "'Switzerland didn't have better players but were better team'",
     "published": "2026-11-17T09:09:24+00:00",
     "summary": "Sportscene pundits Craig Levein and Leanne Crichton unpick Scotland's 4-0 Nations League defeat in Switzerland."
    },
    {
     "ref": "bbc_football#6",
     "title": "Owono did not deserve 12-match ban - Pique",
     "published": "2026-11-17T08:28:10+00:00",
     "summary": "FC Andorra owner Gerard Pique says goalkeeper Jesus Owono did not deserve the 12-match suspension he received following his challenge which resulted in the death of Tenerife forward Jesus de Miguel."
    },
    {
     "ref": "bbc_football#7",
     "title": "How do NI replace 'perfect player' Donley?",
     "published": "2026-11-17T08:17:08+00:00",
     "summary": "With Jamie Donley suspended for Northern Ireland's Nations League visit to Hungary on Tuesday night, manager Michael O'Neill has a decision to make around a starting striker."
    },
    {
     "ref": "bbc_football#8",
     "title": "Listen: Where do Scotland go after Swiss humiliation?",
     "published": "2026-11-17T08:00:00+00:00",
     "summary": "Pressure builds on Pocognoli after Scotland’s Swiss nightmare."
    },
    {
     "ref": "bbc_football#9",
     "title": "Are Scotland still too reliant on 'old guard'?",
     "published": "2026-11-17T07:55:21+00:00",
     "summary": "After a bruising defeat in Switzerland to conclude Scotland's Nations League campaign, questions are being asked about the direction of travel under new head coach Sebastien Pocognoli."
    },
    {
     "ref": "bbc_football#10",
     "title": "Are Scotland still too reliant on 'old guard'?",
     "published": "2026-11-17T07:55:21+00:00",
     "summary": "After a bruising defeat in Switzerland to conclude Scotland's Nations League campaign, questions are being asked about the direction of travel under new head coach Sebastien Pocognoli."
    },
    {
     "ref": "bbc_football#11",
     "title": "Ronaldo, Maradona, Baggio - what happened to the World XI?",
     "published": "2026-11-17T07:22:26+00:00",
     "summary": "Football's biggest stars used to turn out in their prime for the Rest of the World XI, something that would not seem possible today."
    },
    {
     "ref": "bbc_football#12",
     "title": "'Monaco unrest as they prepare to face Hearts' - gossip",
     "published": "2026-11-17T07:10:09+00:00",
     "summary": "Speculation surrounds the future of two top Monaco players as they prepare to face Heart of Midlothian, while the Scottish Premiership's top summer free agents are highlighted."
    },
    {
     "ref": "bbc_football#13",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-17T06:26:22+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#14",
     "title": "Why always him? The rise and fall of Balotelli",
     "published": "2026-11-17T06:15:43+00:00",
     "summary": "Fifteen years since his 'Why always me?' Manchester derby T-shirt celebration, BBC Sport looks at the career of former Manchester City striker Mario Balotelli."
    },
    {
     "ref": "bbc_football#15",
     "title": "Life after Ronaldo - Portugal face post-Bale Wales",
     "published": "2026-11-17T04:45:00+00:00",
     "summary": "As Portugal adapt to life without the great Cristiano Ronaldo, they face a Wales side further along in their post-Gareth Bale era."
    },
    {
     "ref": "bbc_football#16",
     "title": "What's the story with Scotland boss Pocognoli - is it time to go?",
     "published": "2026-11-17T00:19:58+00:00",
     "summary": "The sense of drift in this Scotland team can't go on much longer. Is it too late for Sebastien Pocognoli to win back players and fans?"
    },
    {
     "ref": "bbc_football#17",
     "title": "What's the story with Pocognoli, is it now time to go?",
     "published": "2026-11-17T00:19:58+00:00",
     "summary": "The sense of drift in this Scotland team can't go on much longer. Is it too late for Sebastien Pocognoli to win back players and fans?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Pocognoli wants patience, but Scotland 'don't have time' - Robertson",
     "published": "2026-11-16T22:36:26+00:00",
     "summary": "Angry captain Andy Robertson says Scotland do not have time to turn things around after a brutal 4-0 defeat by Switzerland consigns them to a third-place finish in their Nations League group."
    },
    {
     "ref": "bbc_football#19",
     "title": "Pocognoli wants patience, but Scotland 'don't have time' - Robertson",
     "published": "2026-11-16T22:36:26+00:00",
     "summary": "Angry captain Andy Robertson says Scotland do not have time to turn things around after a brutal 4-0 defeat by Switzerland consigns them to a third-place finish in their Nations League group."
    },
    {
     "ref": "bbc_football#20",
     "title": "Watch as Scotland slump to 4-0 defeat in Switzerland",
     "published": "2026-11-16T22:14:34+00:00",
     "summary": "Watch the highlights as Scotland lose 4-0 to Switzerland in the Nations League in St Gallen."
    },
    {
     "ref": "bbc_football#21",
     "title": "Watch as Scotland slump to 4-0 defeat in Switzerland",
     "published": "2026-11-16T22:14:34+00:00",
     "summary": "Watch the highlights as Scotland lose 4-0 to Switzerland in the Nations League in St Gallen."
    },
    {
     "ref": "bbc_football#22",
     "title": "Man Utd to resurrect Hall interest - Tuesday's gossip",
     "published": "2026-11-16T22:06:32+00:00",
     "summary": "Manchester United may struggle to prise defender Lewis Hall from Newcastle, Arsenal midfielder Martin Zubimendi is pondering his future, Chelsea eye a double swoop for Barcelona duo, plus more."
    },
    {
     "ref": "bbc_football#23",
     "title": "Football Daily",
     "published": "2026-11-16T21:14:00+00:00",
     "summary": "Was England 3-2 Spain Tuchel's best win yet? And is Trafford primed to be new number one?"
    },
    {
     "ref": "bbc_football#24",
     "title": "Portugal boss responds to criticism from Ronaldo's mum",
     "published": "2026-11-16T21:08:06+00:00",
     "summary": "Jorge Jesus responds to claims by Cristiano Ronaldo's mother, Dolores Aveiro, that her son had been \"deceived\" by the Portugal manager."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Surprise offer to Lionel Messi from the Argentine National Team: Lionel Scaloni announced it - Fanatik",
     "published": "2026-11-17T09:49:32+00:00",
     "summary": "Surprise offer to Lionel Messi from the Argentine National Team: Lionel Scaloni announced it Fanatik"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Watch Columbus Crew vs Inter Miami CF - Fubo",
     "published": "2026-11-17T07:24:23+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami CF Fubo"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi named best player of 2026 by \"Vantix Magazine\" - Zamin.uz",
     "published": "2026-11-17T06:50:00+00:00",
     "summary": "Messi named best player of 2026 by \"Vantix Magazine\" Zamin.uz"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi Extends Inter Miami Stay Amid Argentina Talk - SportsGrid",
     "published": "2026-11-17T00:38:01+00:00",
     "summary": "Lionel Messi Extends Inter Miami Stay Amid Argentina Talk SportsGrid"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Returns to MLS Playoffs With a Chance to Lead Inter Miami to Back-to-Back MLS Cup Titles - Pasión Fútbol",
     "published": "2026-11-17T00:09:28+00:00",
     "summary": "Lionel Messi Returns to MLS Playoffs With a Chance to Lead Inter Miami to Back-to-Back MLS Cup Titles Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami CF vs. Nashville SC: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T20:56:33+00:00",
     "summary": "Inter Miami CF vs. Nashville SC: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Nashville SC vs. New England Revolution: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T20:56:33+00:00",
     "summary": "Nashville SC vs. New England Revolution: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi Reportedly Moves to Distance Himself From AFA as Inter Miami Prepares Monumental Return - Pasión Fútbol",
     "published": "2026-11-16T19:40:51+00:00",
     "summary": "Lionel Messi Reportedly Moves to Distance Himself From AFA as Inter Miami Prepares Monumental Return Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Messi, 23 years later... - Diario AS",
     "published": "2026-11-16T17:35:36+00:00",
     "summary": "Messi, 23 years later... Diario AS"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami vs. Columbus Crew: 5 biggest storylines for Round One series - MLSsoccer.com",
     "published": "2026-11-16T16:51:43+00:00",
     "summary": "Inter Miami vs. Columbus Crew: 5 biggest storylines for Round One series MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play - Yahoo",
     "published": "2026-11-16T16:20:55+00:00",
     "summary": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play Yahoo"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami vs. Columbus Crew: How to watch, stream Round One Game 1 - MLSsoccer.com",
     "published": "2026-11-16T16:19:48+00:00",
     "summary": "Inter Miami vs. Columbus Crew: How to watch, stream Round One Game 1 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Luis Suárez Eligible to Start for Inter Miami in Kily González’s Next Playoff Match - Pasión Fútbol",
     "published": "2026-11-16T16:12:06+00:00",
     "summary": "Luis Suárez Eligible to Start for Inter Miami in Kily González’s Next Playoff Match Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Join The Huddle Vol. 4: Gearing Up for Our Fourth In-App Chat After Session With Gonzalo Luján - Inter Miami CF",
     "published": "2026-11-16T15:03:52+00:00",
     "summary": "Join The Huddle Vol. 4: Gearing Up for Our Fourth In-App Chat After Session With Gonzalo Luján Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Atlanta United vs. Inter Miami CF: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T14:08:11+00:00",
     "summary": "Atlanta United vs. Inter Miami CF: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "New York City FC vs. Inter Miami CF: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T14:08:04+00:00",
     "summary": "New York City FC vs. Inter Miami CF: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play - Yahoo Sports",
     "published": "2026-11-16T13:59:31+00:00",
     "summary": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Marriott Bonvoy Partners with Inter Miami CF - https://safariindia.com/",
     "published": "2026-11-16T10:38:10+00:00",
     "summary": "Marriott Bonvoy Partners with Inter Miami CF https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi's wife labelled 'divine' as she wears stylish outfit to Machu Picchu - The Sun",
     "published": "2026-11-16T08:24:00+00:00",
     "summary": "Messi's wife labelled 'divine' as she wears stylish outfit to Machu Picchu The Sun"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami CF Names American Airlines Official Airline Partner - https://safariindia.com/",
     "published": "2026-11-16T05:52:57+00:00",
     "summary": "Inter Miami CF Names American Airlines Official Airline Partner https://safariindia.com/"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Alysa Liu, Lionel Messi Pull Off Major Wins Against Star-Studded Competition - Sports Illustrated",
     "published": "2026-11-16T02:30:00+00:00",
     "summary": "Alysa Liu, Lionel Messi Pull Off Major Wins Against Star-Studded Competition Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi given seven-game deadline to claim another MLS record and leave Josef Martinez behind after re... - World Soccer Talk",
     "published": "2026-11-15T18:18:23+00:00",
     "summary": "Lionel Messi given seven-game deadline to claim another MLS record and leave Josef Martinez behind after re... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Haitian soccer fans turned Inter-Miami’s Nu Stadium into a sea of blue and red (Video) - Miami Herald",
     "published": "2026-11-15T15:10:38+00:00",
     "summary": "Haitian soccer fans turned Inter-Miami’s Nu Stadium into a sea of blue and red (Video) Miami Herald"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija scores team-high 27 points in loss - NBC Sports",
     "published": "2026-11-17T04:17:35+00:00",
     "summary": "Deni Avdija scores team-high 27 points in loss NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija Highlights (27 Points, 8 Rebounds) | Trail Blazers 98, Timberwolves 106 | Nov. 16, 2026 - NBA.com",
     "published": "2026-11-17T03:59:19+00:00",
     "summary": "Deni Avdija Highlights (27 Points, 8 Rebounds) | Trail Blazers 98, Timberwolves 106 | Nov. 16, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers' Deni Avdija: Leading scorer in defeat - CBS Sports",
     "published": "2026-11-17T03:51:04+00:00",
     "summary": "Trail Blazers' Deni Avdija: Leading scorer in defeat CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija News: Leading scorer in defeat - RotoWire",
     "published": "2026-11-17T03:51:04+00:00",
     "summary": "Deni Avdija News: Leading scorer in defeat RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija with the hoop & harm, 11/16/2026 - Yahoo Sports",
     "published": "2026-11-17T03:35:19+00:00",
     "summary": "Deni Avdija with the hoop & harm, 11/16/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija gets the basket plus the foul - ESPN",
     "published": "2026-11-17T01:56:33+00:00",
     "summary": "Deni Avdija gets the basket plus the foul ESPN"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija gets the basket plus the foul - ESPN India",
     "published": "2026-11-17T01:56:33+00:00",
     "summary": "Deni Avdija gets the basket plus the foul ESPN India"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija somehow gets the and-1 to fall - ESPN",
     "published": "2026-11-17T01:41:48+00:00",
     "summary": "Deni Avdija somehow gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija somehow gets the and-1 to fall - ESPN Philippines",
     "published": "2026-11-17T01:17:25+00:00",
     "summary": "Deni Avdija somehow gets the and-1 to fall ESPN Philippines"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "NBA Prop Picks Today – Best Bets for November 16 - Sports Betting Dime",
     "published": "2026-11-16T18:11:00+00:00",
     "summary": "NBA Prop Picks Today – Best Bets for November 16 Sports Betting Dime"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-16T08:51:07+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings - Field Level Media",
     "published": "2026-11-16T07:07:20+00:00",
     "summary": "Deni Avdija, Damian Lillard carry Trail Blazers past Kings Field Level Media"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled - Central Oregon Daily",
     "published": "2026-11-16T01:00:10+00:00",
     "summary": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled Central Oregon Daily"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled - wtsp.com",
     "published": "2026-11-16T00:49:00+00:00",
     "summary": "Deni Avdija's 34 Points Leads Trail Blazers Past Kings | Portland Arena Negotiations Are Stalled wtsp.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland - Basketball Network",
     "published": "2026-11-15T09:14:17+00:00",
     "summary": "“It dips to $11.8 million” – Brian Windhorst explains why Deni Avdija’s contract is a steal for Portland Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija leads Portland to second straight Win Over OKC - The Jerusalem Post",
     "published": "2026-11-15T07:03:25+00:00",
     "summary": "Deni Avdija leads Portland to second straight Win Over OKC The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Damian Lillard Makes Surprising Admission About Deni Avdija - Yahoo Sports",
     "published": "2026-11-15T04:53:00+00:00",
     "summary": "Damian Lillard Makes Surprising Admission About Deni Avdija Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career - Hoops Wire",
     "published": "2026-11-14T23:48:56+00:00",
     "summary": "Damian Lillard calls Deni Avdija partnership ‘the most joyful’ of his career Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start - Fadeaway World",
     "published": "2026-11-14T23:14:02+00:00",
     "summary": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start - Yahoo Sports",
     "published": "2026-11-14T23:09:33+00:00",
     "summary": "Damian Lillard Gets Real On His Partnership With Deni Avdija After 9-3 Start Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Lillard Praises Avdija, Mutual Trust in Their Partnership - Blazer's Edge",
     "published": "2026-11-14T22:18:08+00:00",
     "summary": "Lillard Praises Avdija, Mutual Trust in Their Partnership Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Highlights From Deni Avdija 34-Point Game - NBA.com",
     "published": "2026-11-14T15:20:38+00:00",
     "summary": "Highlights From Deni Avdija 34-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars - Last Word On Sports",
     "published": "2026-11-14T12:25:31+00:00",
     "summary": "Damian Lillard And Deni Avdija Are Thriving as the Trail Blazers’ Stars Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija Leads Trail Blazers Past Kings With Season-High 34 Points - SportsRation",
     "published": "2026-11-14T12:08:13+00:00",
     "summary": "Deni Avdija Leads Trail Blazers Past Kings With Season-High 34 Points SportsRation"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 - NBA.com",
     "published": "2026-11-14T12:04:37+00:00",
     "summary": "Deni Avdija Highlights (34 Points, 11‑13 FG) | Trail Blazers 120, Kings 107 | Nov. 13, 2026 NBA.com"
    }
   ]
  }
 ]
}
</input>