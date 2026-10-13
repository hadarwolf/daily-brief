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
  "home": "Arsenal",
  "away": "Lille",
  "kickoff_utc": "2026-10-13T19:00:00Z"
 },
 {
  "sport": "soccer",
  "competition": "UEFA Champions League",
  "home": "Galatasaray",
  "away": "Barça",
  "kickoff_utc": "2026-10-13T19:00:00Z"
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
     "kickoff_utc": "2026-10-12T16:30:00Z",
     "home": "Atalanta",
     "away": "Venezia FC",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-12T18:45:00Z",
     "home": "Torino",
     "away": "Udinese",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Coritiba",
     "away": "Botafogo",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Coventry City",
     "away": "Newcastle",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Levante",
     "away": "Sevilla FC",
     "status": "FINISHED",
     "score": "3-3"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-12T19:15:00Z",
     "home": "Famalicão",
     "away": "Alverca",
     "status": "FINISHED",
     "score": "1-4"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-12T22:30:00Z",
     "home": "Chapecoense",
     "away": "Paranaense",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-13T00:00:00Z",
     "home": "Bragantino",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "4-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T16:45:00Z",
     "home": "Sabah FK",
     "away": "Slavia Praha",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T16:45:00Z",
     "home": "RC Lens",
     "away": "Sporting CP",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Millwall",
     "away": "Swansea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Burnley",
     "away": "Charlton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Wolverhampton",
     "away": "Bolton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Wrexham",
     "away": "West Brom",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Cardiff",
     "away": "Watford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Bristol City",
     "away": "Blackburn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Birmingham",
     "away": "Preston NE",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Arsenal",
     "away": "Lille",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "RB Leipzig",
     "away": "PSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Galatasaray",
     "away": "Barça",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Stoke",
     "away": "Middlesbrough",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Viking",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Inter",
     "away": "Club Brugge",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Villarreal",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Atleti",
     "away": "Man United",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": []
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Man City",
     "played": 6,
     "pts": 18,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 6,
     "pts": 15,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 6,
     "pts": 13,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Brentford",
     "played": 6,
     "pts": 10,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "Everton",
     "played": 6,
     "pts": 10,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Chelsea",
     "played": 6,
     "pts": 10,
     "gd": 2
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 8,
     "pts": 24,
     "gd": 27
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 8,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Real Betis",
     "played": 8,
     "pts": 19,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Real Madrid",
     "played": 8,
     "pts": 18,
     "gd": 11
    },
    {
     "pos": 5,
     "team": "Sevilla FC",
     "played": 8,
     "pts": 14,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Real Sociedad",
     "played": 8,
     "pts": 13,
     "gd": -3
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Freiburg",
     "played": 5,
     "pts": 13,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 5,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Bayern",
     "played": 5,
     "pts": 11,
     "gd": 12
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 5,
     "pts": 10,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "RB Leipzig",
     "played": 5,
     "pts": 9,
     "gd": 10
    },
    {
     "pos": 6,
     "team": "Augsburg",
     "played": 5,
     "pts": 8,
     "gd": 5
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 6,
     "pts": 16,
     "gd": 10
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 6,
     "pts": 16,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 6,
     "pts": 14,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "Cagliari",
     "played": 6,
     "pts": 13,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 6,
     "pts": 12,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Juventus",
     "played": 6,
     "pts": 11,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Monaco",
     "played": 6,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 2,
     "team": "Lille",
     "played": 6,
     "pts": 13,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Stade Rennais",
     "played": 6,
     "pts": 13,
     "gd": 2
    },
    {
     "pos": 4,
     "team": "Olympique Lyon",
     "played": 6,
     "pts": 11,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Paris FC",
     "played": 6,
     "pts": 11,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "PSG",
     "played": 6,
     "pts": 11,
     "gd": 3
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-10T11:30:00Z",
      "home": "Arsenal",
      "away": "Leeds United",
      "status": "FINISHED",
      "score": "2-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
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
      "kickoff_utc": "2026-10-10T16:30:00Z",
      "home": "Barça",
      "away": "Getafe",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-17T16:30:00Z",
      "home": "Real Betis",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [],
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
     "kickoff_utc": "2026-10-10T23:30:00",
     "home": "Inter Miami",
     "away": "DC United",
     "score": "4-0"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-14T23:30:00",
     "home": "Inter Miami",
     "away": "New York City FC",
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
     "title": "Were any current Man City players signed during charges period?",
     "published": "2026-10-13T10:13:34+00:00",
     "summary": "BBC Sport's Ask Me Anything team looks at whether any Manchester City players were signed during the time the club have been found guilty of breaching the Premier League's financial rules."
    },
    {
     "ref": "bbc_football#1",
     "title": "Ronaldo scores after match delayed by missile alert",
     "published": "2026-10-13T09:23:28+00:00",
     "summary": "Cristiano Ronaldo scores as Al-Nassr win an AFC Champions League match which is delayed by an hour because of a missile alert in Riyadh."
    },
    {
     "ref": "bbc_football#2",
     "title": "After 27 titles in 23 years at Real Madrid, Carvajal joins Getafe",
     "published": "2026-10-13T09:21:36+00:00",
     "summary": "Former Real Madrid captain Dani Carvajal joins Getafe as a free agent after his contract expired in June."
    },
    {
     "ref": "bbc_football#3",
     "title": "How much did Man City's rule breaking cost your team?",
     "published": "2026-10-13T08:12:53+00:00",
     "summary": "The potential impact of Manchester City's rule breaking runs deep, including missed Champions League qualification, relegation and Premier League prize money."
    },
    {
     "ref": "bbc_football#4",
     "title": "Celtic 'need more' from record signing Hogh - gossip",
     "published": "2026-10-13T07:36:44+00:00",
     "summary": "Advice for new Celtic striker and for Rangers manager from former Old Firm duo..."
    },
    {
     "ref": "bbc_football#5",
     "title": "Lille considering legal action after Santos injury",
     "published": "2026-10-13T07:30:58+00:00",
     "summary": "The club have described the tackle on defender Tiago Santos as 'uncontrolled and dangerous'."
    },
    {
     "ref": "bbc_football#6",
     "title": "Podcast: Will Hearts go the distance again and can Reedijk lift Hibs?",
     "published": "2026-10-13T07:00:00+00:00",
     "summary": "The contrasting stories of Hearts and Hibs, plus a big night for the Scotland WNT."
    },
    {
     "ref": "bbc_football#7",
     "title": "The star is Luis Enrique - inside the plans to keep PSG at the top",
     "published": "2026-10-13T06:34:33+00:00",
     "summary": "As Luis Enrique bids to guide PSG to a third successive Champions League triumph, Guillem Balague looks at how the coach keeps his side at the top."
    },
    {
     "ref": "bbc_football#8",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-13T06:13:45+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#9",
     "title": "Is Man Utd's Fernandes issue a symptom or reason for their form?",
     "published": "2026-10-13T05:47:49+00:00",
     "summary": "Manchester United skipper Bruno Fernandes is yet to reach the highs of last season - is it because of his side's poor start or the reason for it?"
    },
    {
     "ref": "bbc_football#10",
     "title": "What Manchester's 'super-profit' deal with City owners has paid out so far",
     "published": "2026-10-13T05:12:47+00:00",
     "summary": "Manchester City Council has made almost £3m from the \"super-profits\" of Man City-linked developments."
    },
    {
     "ref": "bbc_football#11",
     "title": "Wales given play-off history lesson before Albania second leg",
     "published": "2026-10-13T03:33:01+00:00",
     "summary": "Wales take a 1-0 lead into their play-off semi-final second leg against Albania as they chase a place at next year's tournament in Brazil."
    },
    {
     "ref": "bbc_football#12",
     "title": "Wales given play-off history lesson before Albania second leg",
     "published": "2026-10-13T03:33:01+00:00",
     "summary": "Wales take a 1-0 lead into their play-off semi-final second leg against Albania as they chase a place at next year's tournament in Brazil."
    },
    {
     "ref": "bbc_football#13",
     "title": "Coventry announce themselves back in the big time",
     "published": "2026-10-12T22:34:32+00:00",
     "summary": "Coventry climb out of the relegation zone after ending their 25-year wait for a top-flight goal and victory in front of their own fans."
    },
    {
     "ref": "bbc_football#14",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-10-12T22:25:57+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#15",
     "title": "Lampard keeping 'feet on ground' following big win over Newcastle",
     "published": "2026-10-12T21:43:20+00:00",
     "summary": "Coventry City head coach Frank Lampard gives his thoughts after his side pick up their first home win of the season beating Newcastle 4-1."
    },
    {
     "ref": "bbc_football#16",
     "title": "Coventry thrash Newcastle to claim first home win of season",
     "published": "2026-10-12T21:35:07+00:00",
     "summary": "Coventry City stun Newcastle United with an emphatic 4-1 victory as they win their first Premier League game at home in 25 years."
    },
    {
     "ref": "bbc_football#17",
     "title": "Man Utd eye Simeone - Tuesday's gossip",
     "published": "2026-10-12T20:49:48+00:00",
     "summary": "Manchester United interested in Atletico Madrid's Giuliano Simeone, Chelsea willing to meet Bournemouth's asking price for Alex Scott, Premier League clubs want Inter's Aleksandar Stankovic."
    },
    {
     "ref": "bbc_football#18",
     "title": "Football Daily",
     "published": "2026-10-12T20:45:00+00:00",
     "summary": "Mark Chapman is joined by Andros Townsend, Chris Sutton and Rory Smith."
    },
    {
     "ref": "bbc_football#19",
     "title": "Carroll thanks public for support over sexual assault",
     "published": "2026-10-12T20:24:15+00:00",
     "summary": "Former England striker Andy Carroll thanks the public for their support after speaking publicly about being sexually assaulted by a man."
    },
    {
     "ref": "bbc_football#20",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-12T18:00:00+00:00",
     "summary": "How can Sarina Wiegman’s side become more ruthless in the final third?"
    },
    {
     "ref": "bbc_football#21",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-12T18:00:00+00:00",
     "summary": "How can Sarina Wiegman’s side become more ruthless in the final third?"
    },
    {
     "ref": "bbc_football#22",
     "title": "Man City bananas 'brought fun back', says Varadi",
     "published": "2026-10-12T17:57:10+00:00",
     "summary": "Former Manchester City striker Imre Varadi says it was \"brilliant to see\" the club's fans waving inflatable bananas at Anfield and feels it \"brought a lot of fun back\"."
    },
    {
     "ref": "bbc_football#23",
     "title": "Burnham had formal meeting with Man City chair while mayor",
     "published": "2026-10-12T17:09:30+00:00",
     "summary": "Prime Minister Andy Burnham had a formal meeting with Manchester City chairman Khaldoon Al Mubarak while mayor of Greater Manchester, according to the Greater Manchester Combined Authority."
    },
    {
     "ref": "bbc_football#24",
     "title": "Do Lionesses lack ruthlessness in front of goal?",
     "published": "2026-10-12T16:54:32+00:00",
     "summary": "England take a two-goal lead into the second leg of their Women's World Cup qualifying play-off against Greece - but should it be more?"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "How to watch, time, and more of NYCFC’s likely disaster against Inter Miami CF - LiveScore",
     "published": "2026-10-13T10:11:00+00:00",
     "summary": "How to watch, time, and more of NYCFC’s likely disaster against Inter Miami CF LiveScore"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Prediction Inter Miami vs New York City: analysis, odds and betting tips - BetMines",
     "published": "2026-10-13T09:59:32+00:00",
     "summary": "Prediction Inter Miami vs New York City: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-13T09:41:12+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Atlanta United vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-13T09:20:11+00:00",
     "summary": "Atlanta United vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Gonzalez lauds Casemiro's impact on Miami defence - FotMob",
     "published": "2026-10-13T09:03:04+00:00",
     "summary": "Gonzalez lauds Casemiro's impact on Miami defence FotMob"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Gonzalez lauds Casemiro's impact on Miami defence - beIN SPORTS",
     "published": "2026-10-13T09:03:04+00:00",
     "summary": "Gonzalez lauds Casemiro's impact on Miami defence beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Atlanta United vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-13T08:36:05+00:00",
     "summary": "Atlanta United vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "An unexpected destination for Pogba: could Messi be the password? - Goal.com",
     "published": "2026-10-13T07:21:16+00:00",
     "summary": "An unexpected destination for Pogba: could Messi be the password? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami vs New York City FC: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-13T06:09:29+00:00",
     "summary": "Inter Miami vs New York City FC: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami faces New York City FC after shutout victory - FOX Sports",
     "published": "2026-10-13T06:03:50+00:00",
     "summary": "Inter Miami faces New York City FC after shutout victory FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami vs New York City Prediction, Betting Tips, Lineups & Odds | 14 Oct 2026 - Sportsgambler",
     "published": "2026-10-13T05:58:33+00:00",
     "summary": "Inter Miami vs New York City Prediction, Betting Tips, Lineups & Odds | 14 Oct 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi and Suarez Named in MLS Team of the Matchday After Inter Miami Masterclass - İdman.Biz",
     "published": "2026-10-13T05:15:00+00:00",
     "summary": "Messi and Suarez Named in MLS Team of the Matchday After Inter Miami Masterclass İdman.Biz"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi's Brace in 1st Game Since International Farewell Makes You Wonder Why He Quit - MensXP",
     "published": "2026-10-13T04:49:57+00:00",
     "summary": "Lionel Messi's Brace in 1st Game Since International Farewell Makes You Wonder Why He Quit MensXP"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi: Inter Miami forward scores twice in 4-0 win over DC United - BBC",
     "published": "2026-10-13T04:41:33+00:00",
     "summary": "Lionel Messi: Inter Miami forward scores twice in 4-0 win over DC United BBC"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi returns from Argentina farewell as Inter Miami face DC United | Daily FT - newspaper - Magzter",
     "published": "2026-10-13T04:28:14+00:00",
     "summary": "Lionel Messi returns from Argentina farewell as Inter Miami face DC United | Daily FT - newspaper Magzter"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi given big responsibility for 2026 Ballon d'Or, report says - Gulf News",
     "published": "2026-10-13T03:43:06+00:00",
     "summary": "Lionel Messi given big responsibility for 2026 Ballon d'Or, report says Gulf News"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-10-13T02:42:47+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Why Pressure at Inter Miami Is Built by Design - 247Sports",
     "published": "2026-10-13T02:36:10+00:00",
     "summary": "Why Pressure at Inter Miami Is Built by Design 247Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi, Ruth, and #42 Lead Weekly Top 5 Sales - Sports Illustrated",
     "published": "2026-10-13T01:30:00+00:00",
     "summary": "Messi, Ruth, and #42 Lead Weekly Top 5 Sales Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami player ratings: Luis Suarez and Lionel Messi star in 4-0 victory over DC United - OneFootball",
     "published": "2026-10-12T23:51:22+00:00",
     "summary": "Inter Miami player ratings: Luis Suarez and Lionel Messi star in 4-0 victory over DC United OneFootball"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Facundo Mura’s Injury Puts Inter Miami’s Right Wingback Role in Focus Ahead of the Playoffs - Pasión Fútbol",
     "published": "2026-10-12T23:46:15+00:00",
     "summary": "Facundo Mura’s Injury Puts Inter Miami’s Right Wingback Role in Focus Ahead of the Playoffs Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-12T23:38:35+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "David Ayala Makes His Case at Inter Miami, but Yannick Bright Still Holds the Edge - Pasión Fútbol",
     "published": "2026-10-12T23:34:54+00:00",
     "summary": "David Ayala Makes His Case at Inter Miami, but Yannick Bright Still Holds the Edge Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami vs New York City Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-10-12T23:30:00+00:00",
     "summary": "Inter Miami vs New York City Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-12T21:57:18+00:00",
     "summary": "Major League Soccer Goal.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years - Fadeaway World",
     "published": "2026-10-13T06:48:25+00:00",
     "summary": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija looks ready for opening night after preseason win - OregonLive.com",
     "published": "2026-10-13T04:55:00+00:00",
     "summary": "Deni Avdija looks ready for opening night after preseason win OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers - NBA.com",
     "published": "2026-10-13T04:38:06+00:00",
     "summary": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing - Yahoo Sports",
     "published": "2026-10-12T16:52:49+00:00",
     "summary": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” - Eurohoops",
     "published": "2026-10-12T14:28:00+00:00",
     "summary": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija on why it is impossible to guard Nikola … - Yahoo Sports",
     "published": "2026-10-12T11:32:51+00:00",
     "summary": "Deni Avdija on why it is impossible to guard Nikola … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul - Basketball Network",
     "published": "2026-10-12T10:11:00+00:00",
     "summary": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast - Sportskeeda",
     "published": "2026-10-12T05:36:00+00:00",
     "summary": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard - Yahoo Sports",
     "published": "2026-10-12T02:52:00+00:00",
     "summary": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija credits Chauncey Billups for helping turn his career around - Yahoo Sports",
     "published": "2026-10-11T18:06:58+00:00",
     "summary": "Deni Avdija credits Chauncey Billups for helping turn his career around Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation - EssentiallySports",
     "published": "2026-10-11T17:55:00+00:00",
     "summary": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation EssentiallySports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Ben Saraf Player Full High Lowlights vs 76ERS 08 10 2026 NBA PRESEASON Game - YouTube",
     "published": "2026-10-11T14:45:28+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs 76ERS 08 10 2026 NBA PRESEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story - YouTube",
     "published": "2026-10-11T12:27:42+00:00",
     "summary": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story YouTube"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings - roundtable.io",
     "published": "2026-10-10T17:10:54+00:00",
     "summary": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings roundtable.io"
    }
   ]
  }
 ]
}
</input>