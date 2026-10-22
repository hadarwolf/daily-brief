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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T16:45:00Z",
     "home": "Lille",
     "away": "Galatasaray",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T16:45:00Z",
     "home": "Como 1907",
     "away": "Man United",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-21T18:00:00Z",
     "home": "Levante",
     "away": "Athletic",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Club Brugge",
     "away": "RC Lens",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Sporting CP",
     "away": "LASK",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Inter",
     "away": "Shaktar",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Aston Villa",
     "away": "Viking",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Real Madrid",
     "away": "RB Leipzig",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Real Betis",
     "away": "Feyenoord",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-21T19:00:00Z",
     "home": "Bayern",
     "away": "Arsenal",
     "status": "FINISHED",
     "score": "2-2"
    }
   ],
   "today": [
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-22T00:30:00Z",
     "home": "Palmeiras",
     "away": "Fluminense",
     "status": "SCHEDULED",
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
     "played": 7,
     "pts": 21,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 7,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 7,
     "pts": 16,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 7,
     "pts": 12,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 7,
     "pts": 10,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 9,
     "pts": 27,
     "gd": 30
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 9,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 9,
     "pts": 21,
     "gd": 14
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 9,
     "pts": 19,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 9,
     "pts": 16,
     "gd": 0
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
     "played": 6,
     "pts": 14,
     "gd": 17
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 6,
     "pts": 14,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 6,
     "pts": 13,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 6,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Mainz",
     "played": 6,
     "pts": 10,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Elversberg",
     "played": 6,
     "pts": 10,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 7,
     "pts": 19,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 7,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 7,
     "pts": 17,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 7,
     "pts": 15,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Olympique Lyon",
     "played": 7,
     "pts": 14,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Monaco",
     "played": 7,
     "pts": 14,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Stade Rennais",
     "played": 7,
     "pts": 13,
     "gd": 1
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "FINISHED",
      "score": "3-0"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-11-01T16:30:00Z",
      "home": "Liverpool",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     },
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
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-31T20:00:00Z",
      "home": "Barça",
      "away": "Alavés",
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
    "home": "Miami Heat",
    "away": "Minnesota Timberwolves",
    "score": "106-131",
    "status": "Final"
   },
   {
    "home": "Los Angeles Lakers",
    "away": "Golden State Warriors",
    "score": "127-105",
    "status": "Final"
   },
   {
    "home": "Orlando Magic",
    "away": "Atlanta Hawks",
    "score": "125-132",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Milwaukee Bucks",
    "score": "128-116",
    "status": "Final"
   },
   {
    "home": "Brooklyn Nets",
    "away": "Charlotte Hornets",
    "score": "103-110",
    "status": "Final"
   },
   {
    "home": "Toronto Raptors",
    "away": "Chicago Bulls",
    "score": "135-92",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "Utah Jazz",
    "score": "123-103",
    "status": "Final"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Indiana Pacers",
    "score": "120-123",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Dallas Mavericks",
    "score": "128-110",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "Phoenix Suns",
    "score": "124-83",
    "status": "Final"
   },
   {
    "home": "LA Clippers",
    "away": "Sacramento Kings",
    "score": "121-96",
    "status": "Final"
   }
  ],
  "games_today": [
   {
    "home": "Philadelphia 76ers",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-10-22T23:00:00Z"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Denver Nuggets",
    "score": null,
    "status": "2026-10-23T01:30:00Z"
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
     "kickoff_utc": "2026-10-24T21:30:00",
     "home": "New York Red Bulls",
     "away": "Inter Miami",
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
     "title": "Podcast: Is Celta a must-win for Celtic? And what do fans want from new TV deal?",
     "published": "2026-10-22T07:00:00+00:00",
     "summary": "Celtic face a Europa League test in Celta Vigo - can they keep the momentum going?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Maloney undecided on being a manager - gossip",
     "published": "2026-10-22T06:39:18+00:00",
     "summary": "Celtic assistant unsure about return to management as Spanish club monitor Rangers midfielder."
    },
    {
     "ref": "bbc_football#2",
     "title": "Is Leicester boss Martin turning the Foxes' fortunes?",
     "published": "2026-10-22T06:01:48+00:00",
     "summary": "Leicester are 10th in League One, 10 years after winning the Premier League. After hitting their lowest ebb, are there now grounds for optimism?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-22T05:45:30+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#4",
     "title": "From Bury to AC Milan: Bournemouth's journey to 'dreamland'",
     "published": "2026-10-22T05:37:17+00:00",
     "summary": "Fifteen years to the day after they lost at home to Bury in League One, Bournemouth host seven-time champions of Europe AC Milan in the Europa League."
    },
    {
     "ref": "bbc_football#5",
     "title": "Football Daily",
     "published": "2026-10-21T23:25:00+00:00",
     "summary": "Reaction as Manchester United lose 4-1 at Como in the Champions League"
    },
    {
     "ref": "bbc_football#6",
     "title": "Goal, assist... goal-kick - Kane underlines Ballon d'Or credentials",
     "published": "2026-10-21T23:11:06+00:00",
     "summary": "Why Declan Rice backs his England team-mate Harry Kane to win the Ballon d'Or after Arsenal's draw with Bayern Munich in the Champions League."
    },
    {
     "ref": "bbc_football#7",
     "title": "Saka injury 'does not look good' - how will Arsenal cope?",
     "published": "2026-10-21T22:51:56+00:00",
     "summary": "Mikel Arteta says the quadriceps injury Arsenal's Bukayo Saka picked up in the Champions League draw with Bayern Munich \"does not look good at all\"."
    },
    {
     "ref": "bbc_football#8",
     "title": "Is it 'phenomenal' Kane's year to lift the Ballon d'Or?",
     "published": "2026-10-21T22:41:53+00:00",
     "summary": "Stephen Warnock, Nedum Onuoha and Lars Sivertsen look at whether England captain and Bayern Munich forward Harry Kane should lift the Ballon d'Or following a \"phenomenal\" season."
    },
    {
     "ref": "bbc_football#9",
     "title": "'Simply not good enough - Warnock on Man Utd's Como display",
     "published": "2026-10-21T22:36:23+00:00",
     "summary": "Match of the Day pundits Nedum Onuoha and Stephen Warnock analyse Manchester United's performance after their 4-1 Champions League defeat to Como, and discuss midfielder Bruno Fernandes' criticism of team tactics."
    },
    {
     "ref": "bbc_football#10",
     "title": "Club Brugge ease to comfortable win over Lens",
     "published": "2026-10-21T22:03:46+00:00",
     "summary": "Club Brugge pick up their second straight win in the Champions League with an impressive 3-0 victory over Lens."
    },
    {
     "ref": "bbc_football#11",
     "title": "Real Madrid dominate Leipzig for third straight win",
     "published": "2026-10-21T21:38:23+00:00",
     "summary": "Real Madrid maintain their 100 per cent start in the Champions League as they comfortably beat Leipzig 4-1, with Bernardo Silva scoring his first goal for Madrid since moving from Manchester City in the summer."
    },
    {
     "ref": "bbc_football#12",
     "title": "Isco the difference as Betis continue winning start against Feyenoord",
     "published": "2026-10-21T21:23:47+00:00",
     "summary": "Real Betis secure their third win on the bounce in the Champions League as Isco converts a penalty in the 59th minute against Feyenoord."
    },
    {
     "ref": "bbc_football#13",
     "title": "Villa maintain perfect Champions League start with Viking victory",
     "published": "2026-10-21T21:19:00+00:00",
     "summary": "Aston Villa win their third game from three in the Champions League by defeating Norwegian side Viking - the dominant display taking them up to second in the league phase."
    },
    {
     "ref": "bbc_football#14",
     "title": "Guirassy double helps Dortmund past Sabah",
     "published": "2026-10-21T21:12:15+00:00",
     "summary": "Serhou Guirassy scores in each half as Borussia Dortmund grind out a 2-1 win against Sabah in Azerbaijan."
    },
    {
     "ref": "bbc_football#15",
     "title": "Rice strikes to earn Arsenal draw at Bayern",
     "published": "2026-10-21T21:09:36+00:00",
     "summary": "Declan Rice scores a late equaliser as Arsenal and Bayern Munich play out an entertaining draw in the league phase of the Champions League while Bukayo Saka limps off with an early injury."
    },
    {
     "ref": "bbc_football#16",
     "title": "McTominay scores twice as Napoli beat Bodo/Glimt",
     "published": "2026-10-21T21:01:18+00:00",
     "summary": "Scott McTominay scores his first goals since undergoing heart surgery as Napoli earn a thrilling 4-3 victory over Bodo/Glimt."
    },
    {
     "ref": "bbc_football#17",
     "title": "PSG come out on top in six-goal thriller against Barcelona",
     "published": "2026-10-21T21:01:03+00:00",
     "summary": "Desire Doue, Lamine Yamal and Vitinha score superb individual goals as Champions League holders Paris St-Germain overcome Barcelona in a breathless encounter at Parc des Princes."
    },
    {
     "ref": "bbc_football#18",
     "title": "Foden nets hat-trick as Man City beat AEK Athens",
     "published": "2026-10-21T21:00:44+00:00",
     "summary": "Phil Foden scores a sublime hat-trick as he produces a virtuoso display to help Manchester City return to winning ways in the Champions League group phase by easing past Greek side AEK Athens."
    },
    {
     "ref": "bbc_football#19",
     "title": "Mac Allister scores twice as Liverpool fight back to beat Villarreal",
     "published": "2026-10-21T21:00:28+00:00",
     "summary": "Rio Ngumoha provides the spark as Liverpool come from two goals down to beat Villarreal at Anfield in the Champions League."
    },
    {
     "ref": "bbc_football#20",
     "title": "'What a goal, what a moment' - Rice snatches late equaliser against Bayern",
     "published": "2026-10-21T21:00:05+00:00",
     "summary": "Declan Rice sends the travelling Arsenal support into raptures with his late equaliser in their heavyweight Champions League clash with Bayern Munich."
    },
    {
     "ref": "bbc_football#21",
     "title": "Man Utd humbled by four-goal Como to pile pressure on Carrick",
     "published": "2026-10-21T20:59:43+00:00",
     "summary": "Manchester United suffer a heavy defeat to a Como side playing just their third ever game of Champions League football, as Nico Paz stars for the hosts to pile the pressure on Michael Carrick."
    },
    {
     "ref": "bbc_football#22",
     "title": "Paz, Fabregas and Como teach Man Utd a lesson",
     "published": "2026-10-21T20:46:40+00:00",
     "summary": "Serie A success story Como have gone from Serie D to the Champions League - now they have taught Manchester United a lesson in Europe."
    },
    {
     "ref": "bbc_football#23",
     "title": "Chelsea eye Brighton's Ayari - Thursday's gossip",
     "published": "2026-10-21T20:17:45+00:00",
     "summary": "Brighton midfielder Yasin Ayari is being targeted by Chelsea, Barcelona and Real Madrid are keeping an eye on Aston Villa's Johan Manzambi and Arsenal striker Viktor Gyokeres could be on moved on."
    },
    {
     "ref": "bbc_football#24",
     "title": "Ex-England defender Bertrand eyes £87m AFC Wimbledon deal",
     "published": "2026-10-21T20:02:23+00:00",
     "summary": "Ryan Bertrand is leading a consortium that has proposed an £87m minority investment into League One side AFC Wimbledon."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs FC Cincinnati: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-22T06:23:44+00:00",
     "summary": "Inter Miami vs FC Cincinnati: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-22T05:12:54+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi invited to dinner with Spain’s King Felipe VI - Operativ Məlumat Mərkəzi",
     "published": "2026-10-22T03:42:20+00:00",
     "summary": "Messi invited to dinner with Spain’s King Felipe VI Operativ Məlumat Mərkəzi"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-22T03:03:35+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Reaches 934 Career Goals After Inter Miami Brace - SportsRation",
     "published": "2026-10-22T01:24:04+00:00",
     "summary": "Lionel Messi Reaches 934 Career Goals After Inter Miami Brace SportsRation"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami vs FC Cincinnati: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-22T01:23:12+00:00",
     "summary": "Inter Miami vs FC Cincinnati: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - The Register-Herald",
     "published": "2026-10-22T00:57:27+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC The Register-Herald"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "How Lionel Messi’s Current Inter Miami Run Compares to His Best Barcelona Form Ever - Forza Football",
     "published": "2026-10-22T00:00:01+00:00",
     "summary": "How Lionel Messi’s Current Inter Miami Run Compares to His Best Barcelona Form Ever Forza Football"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami helps grant wish of 23 children with special day at Nu Stadium - WSVN",
     "published": "2026-10-21T22:41:22+00:00",
     "summary": "Inter Miami helps grant wish of 23 children with special day at Nu Stadium WSVN"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Preview: New York Red Bulls vs Inter Miami - prediction, team news, lineups - Sports Mole",
     "published": "2026-10-21T22:21:16+00:00",
     "summary": "Preview: New York Red Bulls vs Inter Miami - prediction, team news, lineups Sports Mole"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi brace lifts Inter Miami to 3-1 win in Atlanta - The Daily Star",
     "published": "2026-10-21T22:13:27+00:00",
     "summary": "Messi brace lifts Inter Miami to 3-1 win in Atlanta The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "David Beckham's Inter Miami faces MLS fine controversy as previous sanctions raise new concerns - Pasión Fútbol",
     "published": "2026-10-21T22:00:00+00:00",
     "summary": "David Beckham's Inter Miami faces MLS fine controversy as previous sanctions raise new concerns Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi makes express trip to Spain for prestigious award before Inter Miami's crucial MLS clash - Pasión Fútbol",
     "published": "2026-10-21T21:17:00+00:00",
     "summary": "Lionel Messi makes express trip to Spain for prestigious award before Inter Miami's crucial MLS clash Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Oceania champions Auckland United learn pathway to Miami finals - Friends of Football",
     "published": "2026-10-21T20:35:44+00:00",
     "summary": "Oceania champions Auckland United learn pathway to Miami finals Friends of Football"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi nominated for historic Ballon d'Or of All Time award alongside Cristiano Ronaldo and soccer le... - Pasión Fútbol",
     "published": "2026-10-21T19:14:00+00:00",
     "summary": "Lionel Messi nominated for historic Ballon d'Or of All Time award alongside Cristiano Ronaldo and soccer le... Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi’s Double And Assist Seal Dominant Win Over Atlanta United - Yahoo Sports",
     "published": "2026-10-21T19:08:45+00:00",
     "summary": "Messi’s Double And Assist Seal Dominant Win Over Atlanta United Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF Academy U-16s Gear Up for Second Edition of Messi Cup - Inter Miami CF",
     "published": "2026-10-21T19:07:39+00:00",
     "summary": "Inter Miami CF Academy U-16s Gear Up for Second Edition of Messi Cup Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Wow! Messi stars in an unexpected AI collaboration. VIDEO - Dailysports",
     "published": "2026-10-21T19:05:32+00:00",
     "summary": "Wow! Messi stars in an unexpected AI collaboration. VIDEO Dailysports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Alarm bells at Inter Miami as Rodrigo De Paul fails to finish training ahead of crucial MLS clash - Pasión Fútbol",
     "published": "2026-10-21T18:52:00+00:00",
     "summary": "Alarm bells at Inter Miami as Rodrigo De Paul fails to finish training ahead of crucial MLS clash Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Make-A-Wish kids get dream opportunity to meet Lionel Messi, Inter Miami players - WFLX",
     "published": "2026-10-21T18:41:00+00:00",
     "summary": "Make-A-Wish kids get dream opportunity to meet Lionel Messi, Inter Miami players WFLX"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi achieves a major playmaking milestone during the 2026 season - Yahoo Sports",
     "published": "2026-10-21T17:15:00+00:00",
     "summary": "Lionel Messi achieves a major playmaking milestone during the 2026 season Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi faces whirlwind 48 hours: Oviedo award ceremony ahead of New York clash - BeSoccer Livescore",
     "published": "2026-10-21T17:00:18+00:00",
     "summary": "Messi faces whirlwind 48 hours: Oviedo award ceremony ahead of New York clash BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami's Messi Dependence Raises Concerns Despite Lionel Messi's Incredible MLS Numbers - Pasión Fútbol",
     "published": "2026-10-21T16:30:00+00:00",
     "summary": "Inter Miami's Messi Dependence Raises Concerns Despite Lionel Messi's Incredible MLS Numbers Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Make-A-Wish Teen Meets Messi at Inter Miami's Nu Stadium - Hoodline",
     "published": "2026-10-21T15:50:41+00:00",
     "summary": "Make-A-Wish Teen Meets Messi at Inter Miami's Nu Stadium Hoodline"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MATCH PREVIEW, pres. by Toyota: Red Bull New York Host Inter Miami CF on Saturday Afternoon at Sports Illustrated Stadium - Red Bull New York",
     "published": "2026-10-21T14:22:49+00:00",
     "summary": "MATCH PREVIEW, pres. by Toyota: Red Bull New York Host Inter Miami CF on Saturday Afternoon at Sports Illustrated Stadium Red Bull New York"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija logs double-double Wednesday - FantasyPros",
     "published": "2026-10-22T06:56:45+00:00",
     "summary": "Deni Avdija logs double-double Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Micah Nori Postgame Interview | Trail Blazers 124, Suns 83 | Oct. 21, 2026 - NBA.com",
     "published": "2026-10-22T05:47:14+00:00",
     "summary": "Micah Nori Postgame Interview | Trail Blazers 124, Suns 83 | Oct. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Damian Lillard Highlights (25 Points, 6 Assists) | Trail Blazers 124, Suns 83 | Oct. 21, 2026 - NBA.com",
     "published": "2026-10-22T05:08:11+00:00",
     "summary": "Damian Lillard Highlights (25 Points, 6 Assists) | Trail Blazers 124, Suns 83 | Oct. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Game Highlights: Portland Trail Blazers 124, Phoenix Suns 83 | Oct. 21, 2026 - NBA.com",
     "published": "2026-10-22T04:53:10+00:00",
     "summary": "Game Highlights: Portland Trail Blazers 124, Phoenix Suns 83 | Oct. 21, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija posts 18/10/4/2 line vs. Phoenix - NBC Sports",
     "published": "2026-10-22T04:43:16+00:00",
     "summary": "Deni Avdija posts 18/10/4/2 line vs. Phoenix NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Lillard returns with 25 points, Morant debuts and the Blazers rout the Suns 124-83 - FOX Sports",
     "published": "2026-10-22T04:37:08+00:00",
     "summary": "Lillard returns with 25 points, Morant debuts and the Blazers rout the Suns 124-83 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms - شبكة تواصل الإخبارية",
     "published": "2026-10-22T02:45:52+00:00",
     "summary": "Deni Avdija remains questionable before Blazers vs. Suns as Toumani Camara watch looms شبكة تواصل الإخبارية"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija News: Good to go Wednesday - RotoWire",
     "published": "2026-10-22T01:06:25+00:00",
     "summary": "Deni Avdija News: Good to go Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-22T01:04:46+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? - AOL.com",
     "published": "2026-10-21T22:00:00+00:00",
     "summary": "Final Injury Report for Suns-Trail Blazers: Will Deni Avdija, Damian Lillard Play? AOL.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets - OregonLive.com",
     "published": "2026-10-21T21:09:00+00:00",
     "summary": "Experts release final Blazers vs. Suns predictions: Deni Avdija injury update, line moves and model best bets OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers’ Anticipated Starting Lineup for Season-Opener vs. Suns - Heavy.com",
     "published": "2026-10-21T19:59:19+00:00",
     "summary": "Trail Blazers’ Anticipated Starting Lineup for Season-Opener vs. Suns Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener - Yahoo Sports",
     "published": "2026-10-21T16:30:00+00:00",
     "summary": "Fantasy Basketball Week 1 Injury Report: Deni Avdija questionable, AJ Dybantsa out for opener Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Blazers Open NBA Season Against the Suns Tonight - Blazer's Edge",
     "published": "2026-10-21T16:29:53+00:00",
     "summary": "Blazers Open NBA Season Against the Suns Tonight Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Ben Saraf EuroCup stats: averages by season - BasketNews.com",
     "published": "2026-10-21T15:52:16+00:00",
     "summary": "Ben Saraf EuroCup stats: averages by season BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season - Yahoo Sports",
     "published": "2026-10-21T15:29:05+00:00",
     "summary": "Is Deni Avdija playing tonight? Blazers vs. Suns injury report to open season Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yardbarker",
     "published": "2026-10-21T05:00:39+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Suns vs. Trail Blazers Injury Report – Oct. 21 - Rip City Radio 620 Portland",
     "published": "2026-10-21T04:23:16+00:00",
     "summary": "Suns vs. Trail Blazers Injury Report – Oct. 21 Rip City Radio 620 Portland"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 - DraftKings Network",
     "published": "2026-10-21T03:59:27+00:00",
     "summary": "Deni Avdija Headlines Today’s NBA Injury Report: Wednesday 10/21/26 DraftKings Network"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers - Rip City Project",
     "published": "2026-10-21T03:10:00+00:00",
     "summary": "Deni Avdija injury could force Jrue Holiday’s move to forward for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers' Deni Avdija: Good to go Wednesday - CBS Sports",
     "published": "2026-10-21T01:59:19+00:00",
     "summary": "Trail Blazers' Deni Avdija: Good to go Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers - Yahoo Sports",
     "published": "2026-10-21T01:33:00+00:00",
     "summary": "Deni Avdija’s injury status becomes key story ahead of Phoenix Suns vs. Portland Trail Blazers Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "A surprise name lands on Trail Blazers’ injury report for season opener - OregonLive.com",
     "published": "2026-10-21T01:07:00+00:00",
     "summary": "A surprise name lands on Trail Blazers’ injury report for season opener OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija (ankle) questionable to play Wednesday - FantasyPros",
     "published": "2026-10-21T00:59:00+00:00",
     "summary": "Deni Avdija (ankle) questionable to play Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener - Heavy.com",
     "published": "2026-10-21T00:57:00+00:00",
     "summary": "Portland Trail Blazers Get Concerning Deni Avdija Injury News Before Opener Heavy.com"
    }
   ]
  }
 ]
}
</input>