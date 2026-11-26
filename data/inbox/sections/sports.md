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
     "kickoff_utc": "2026-11-25T17:45:00Z",
     "home": "Slavia Praha",
     "away": "Villarreal",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T17:45:00Z",
     "home": "Sabah FK",
     "away": "Barça",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Bolton",
     "away": "West Brom",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Watford",
     "away": "Blackburn",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T19:45:00Z",
     "home": "Burnley",
     "away": "Birmingham",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Sporting CP",
     "away": "Man United",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Atleti",
     "away": "Viking",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Club Brugge",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Inter",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Stoke",
     "away": "Millwall",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Shaktar",
     "away": "Fenerbahçe",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "PSG",
     "away": "Roma",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T20:00:00Z",
     "home": "Lille",
     "away": "Bayern",
     "status": "FINISHED",
     "score": "2-1"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-25T23:00:00Z",
     "home": "Mineiro",
     "away": "Corinthians",
     "status": "FINISHED",
     "score": "1-1"
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-11-26T23:00:00Z",
     "home": "São Paulo",
     "away": "Clube do Remo",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-11-25T17:45:00Z",
      "home": "Sabah FK",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-11-29T15:15:00Z",
      "home": "Deportivo",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-12-02T20:30:00Z",
      "home": "Barça",
      "away": "Atleti",
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
    "home": "Philadelphia 76ers",
    "away": "Miami Heat",
    "score": "111-104",
    "status": "Final"
   },
   {
    "home": "Charlotte Hornets",
    "away": "Chicago Bulls",
    "score": "105-107",
    "status": "Final"
   },
   {
    "home": "New York Knicks",
    "away": "Cleveland Cavaliers",
    "score": "121-102",
    "status": "Final"
   },
   {
    "home": "Oklahoma City Thunder",
    "away": "Minnesota Timberwolves",
    "score": "106-113",
    "status": "Final"
   },
   {
    "home": "Memphis Grizzlies",
    "away": "LA Clippers",
    "score": "115-97",
    "status": "Final"
   },
   {
    "home": "Milwaukee Bucks",
    "away": "Brooklyn Nets",
    "score": "97-104",
    "status": "Final"
   },
   {
    "home": "Houston Rockets",
    "away": "Phoenix Suns",
    "score": "95-87",
    "status": "4th Qtr"
   },
   {
    "home": "Golden State Warriors",
    "away": "Sacramento Kings",
    "score": "44-19",
    "status": "2nd Qtr"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "San Antonio Spurs",
    "score": "32-29",
    "status": "1st Qtr"
   }
  ],
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
     "title": "Frustration reigns for Pochettino in chaotic start to Man Utd job",
     "published": "2026-11-26T00:24:48+00:00",
     "summary": "What are the findings for Mauricio Pochettino after his first two matches as Manchester United manager?"
    },
    {
     "ref": "bbc_football#1",
     "title": "Divots, howlers and bad decisions - dissecting Man Utd's draw in Lisbon",
     "published": "2026-11-26T00:22:28+00:00",
     "summary": "BBC Sport breaks down the chaos amid Manchester United's rollercoaster Champions League draw against Sporting in Lisbon."
    },
    {
     "ref": "bbc_football#2",
     "title": "How Isak and Wirtz are becoming Liverpool's 'big-game players'",
     "published": "2026-11-25T23:38:42+00:00",
     "summary": "Match of the Day's Stephen Warnock and Nedum Onuoha analyse the recent resurgence of Alexander Isak and Florian Wirtz for as they led Liverpool to victory against Club Brugge.debut seasons last year."
    },
    {
     "ref": "bbc_football#3",
     "title": "'All coming together' - Isak repaying Liverpool faith",
     "published": "2026-11-25T23:25:30+00:00",
     "summary": "Alexander Isak's two goals against Club Brugge take his tally for the season to 10 as the striker continues to show why Liverpool last year paid £125m to bring him to the club."
    },
    {
     "ref": "bbc_football#4",
     "title": "Fenerbahce squeeze past Shakhtar to seal back-to-back wins",
     "published": "2026-11-25T23:16:18+00:00",
     "summary": "Turkish side Fenerbahce defeat Shakhtar Donetsk in a close affair at Stamford Bridge to give their hopes of Champions League qualification a huge boost."
    },
    {
     "ref": "bbc_football#5",
     "title": "Martinez secures Inter win against Stuttgart",
     "published": "2026-11-25T23:02:15+00:00",
     "summary": "Lautaro Martinez comes off the bench to score as Inter Milan beat Stuttgart and boost their chances of reaching the Champions League knockout stages."
    },
    {
     "ref": "bbc_football#6",
     "title": "Lammens howler denies Man Utd victory against Sporting in incident-packed game",
     "published": "2026-11-25T22:32:51+00:00",
     "summary": "Goalkeeper Senne Lammens endures a topsy-turvy night as Manchester United draw with Sporting.controversial decisions."
    },
    {
     "ref": "bbc_football#7",
     "title": "PSG held by Roma as in-form Malen scores again",
     "published": "2026-11-25T22:27:14+00:00",
     "summary": "Donyell Malen scores for the fourth Champions League game running as Roma ends Paris St-Germain's 100% start to the competition."
    },
    {
     "ref": "bbc_football#8",
     "title": "Terrible Pavlovic own goal gifts Lille shock win against Bayern",
     "published": "2026-11-25T22:24:57+00:00",
     "summary": "Bayern Munich suffer their first defeat of the Champions League campaign as Lille find the net twice in three minutes in the second half, including a comical Aleksander Pavlovic own goal, to inflict a huge upset."
    },
    {
     "ref": "bbc_football#9",
     "title": "Isak scores twice as clinical Liverpool beat Brugge",
     "published": "2026-11-25T22:12:19+00:00",
     "summary": "Liverpool defeat Club Brugge in a clinical performance thanks to goals from Alexander Isak and Florian Wirtz, bouncing back after a defeat in their last Champions League match."
    },
    {
     "ref": "bbc_football#10",
     "title": "Gordon stars in comfortable Barca win over Sabah",
     "published": "2026-11-25T22:07:02+00:00",
     "summary": "Anthony Gordon scores Barcelona's opening two goals as they ease past Sabah with a 4-1 win in the Champions League."
    },
    {
     "ref": "bbc_football#11",
     "title": "Borussia Dortmund fight back to draw with Arsenal",
     "published": "2026-11-25T22:05:57+00:00",
     "summary": "Borussia Dortmund fight back from a goal behind to draw with Arsenal in the Champions League."
    },
    {
     "ref": "bbc_football#12",
     "title": "Blunt Villa beaten by late Galatasaray winner",
     "published": "2026-11-25T22:05:53+00:00",
     "summary": "Deniz Gul scores a late winner for Galatasaray as Aston Villa slip to successive Champions League defeats."
    },
    {
     "ref": "bbc_football#13",
     "title": "Cherki rescues point for Man City against Napoli",
     "published": "2026-11-25T22:05:49+00:00",
     "summary": "Rayan Cherki's late equaliser rescues a point for Manchester City at home to Napoli in the Champions League, who have now won just one of their past seven games in all competitions."
    },
    {
     "ref": "bbc_football#14",
     "title": "Real Madrid put in five-star second half to win against PSV",
     "published": "2026-11-25T22:05:45+00:00",
     "summary": "Jude Bellingham comes off the bench to score a stunning goal as Real Madrid come from behind to beat PSV Eindhoven and maintain their 100% record in the Champions League."
    },
    {
     "ref": "bbc_football#15",
     "title": "Ferguson's Glentoran reign hits early turbulence",
     "published": "2026-11-25T21:41:00+00:00",
     "summary": "Duncan Ferguson's short tenure at Glentoran is already proving anything but straightforward with just one win so far and the former Everton striker now suspended for seven games."
    },
    {
     "ref": "bbc_football#16",
     "title": "Regulator chief 'has stomach' to face Man City",
     "published": "2026-11-25T21:27:35+00:00",
     "summary": "The chair of English football's independent regulator tells MPs he \"has the stomach\" to take potential action against Manchester City."
    },
    {
     "ref": "bbc_football#17",
     "title": "Liverpool mull Quansah return - Thursday's gossip",
     "published": "2026-11-25T20:57:48+00:00",
     "summary": "Liverpool consider return for Jarrell Quansah, Tottenham scout Vangelis Pavlidis and Paris St-Germain target Estevao Willian, plus more"
    },
    {
     "ref": "bbc_football#18",
     "title": "EFL Trophy holders Luton face Palace U21s in last 32",
     "published": "2026-11-25T20:55:13+00:00",
     "summary": "EFL Trophy holders Luton Town will meet Crystal Palace Under-21s in the last 32 of the competition."
    },
    {
     "ref": "bbc_football#19",
     "title": "Can Iordanescu make a difference at Watford & how do you become a free-kick specialist?",
     "published": "2026-11-25T18:35:00+00:00",
     "summary": "Stockport County's Ollie Norwood tells us what has meant he keeps scoring epic free kicks"
    },
    {
     "ref": "bbc_football#20",
     "title": "Glasner criticises Forest players yet to learn English",
     "published": "2026-11-25T18:32:55+00:00",
     "summary": "Nottingham Forest manager Oliver Glasner has questioned why some of his squad cannot speak English after being in the country for a number of years."
    },
    {
     "ref": "bbc_football#21",
     "title": "'Justice for sport' - Afcon reaction as Senegal reinstated as winners",
     "published": "2026-11-25T17:32:30+00:00",
     "summary": "Players and officials in Senegal have welcomed the decision to reinstate the West Africans as Afcon 2025 champions, but those in Morocco still contest the decision."
    },
    {
     "ref": "bbc_football#22",
     "title": "'Best midfielder in the world' - where does Bellingham rank?",
     "published": "2026-11-25T16:46:36+00:00",
     "summary": "Jose Mourinho called Real Madrid's Jude Bellingham \"the best midfielder in the world\", but where would you rank him?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Leicester no longer for sale as owner looks to future",
     "published": "2026-11-25T16:19:45+00:00",
     "summary": "Leicester owner Khun Aiyawatt 'Top' Srivaddhanaprabha confirms the one-time Premier League title winners are no longer up for sale."
    },
    {
     "ref": "bbc_football#24",
     "title": "Raheem Sterling - from national icon to suspended jail sentence",
     "published": "2026-11-25T12:42:57+00:00",
     "summary": "Fourteen years after making his Premier League debut at 17, Raheem Sterling has been given a suspended prison sentence."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Prediction Columbus Crew vs Inter Miami: analysis, odds and betting tips - BetMines",
     "published": "2026-11-26T01:30:45+00:00",
     "summary": "Prediction Columbus Crew vs Inter Miami: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami confront possible playoff exit: \"It's time to deliver\" - MLSsoccer.com",
     "published": "2026-11-26T01:30:00+00:00",
     "summary": "Inter Miami confront possible playoff exit: \"It's time to deliver\" MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Columbus Crew vs Inter Miami Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-11-26T01:00:00+00:00",
     "summary": "Columbus Crew vs Inter Miami Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "David Beckham's $1 billion Miami stadium project faced a $584,217 lawsuit over allegedly unpaid construct - The Times of India",
     "published": "2026-11-26T00:32:00+00:00",
     "summary": "David Beckham's $1 billion Miami stadium project faced a $584,217 lawsuit over allegedly unpaid construct The Times of India"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-26T00:22:45+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time - FOX One",
     "published": "2026-11-25T22:24:16+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time FOX One"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Miami & Nashville on the ropes, West favorites shine & more from Round One - MLSsoccer.com",
     "published": "2026-11-25T22:06:14+00:00",
     "summary": "Miami & Nashville on the ropes, West favorites shine & more from Round One MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Weekly MLS Winners and Losers: Lionel Messi, Inter Miami on Brink of Elimination - Sports Illustrated",
     "published": "2026-11-25T21:30:00+00:00",
     "summary": "Weekly MLS Winners and Losers: Lionel Messi, Inter Miami on Brink of Elimination Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Suarez Negotiates New Inter Miami Contract Ahead of MLS Exit - www.suaralandak.co.id",
     "published": "2026-11-25T21:12:00+00:00",
     "summary": "Suarez Negotiates New Inter Miami Contract Ahead of MLS Exit www.suaralandak.co.id"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-25T21:06:10+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF Tickets - Inter Miami CF",
     "published": "2026-11-25T20:58:40+00:00",
     "summary": "Inter Miami CF Tickets Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-25T20:52:50+00:00",
     "summary": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Suarez Holds Inter Miami Talks as Raphinha Nears Barca Record - bsinews.id",
     "published": "2026-11-25T20:49:00+00:00",
     "summary": "Suarez Holds Inter Miami Talks as Raphinha Nears Barca Record bsinews.id"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Suarez Negotiates Inter Miami Future as Barcelona Record Nears - Limapagi",
     "published": "2026-11-25T20:49:00+00:00",
     "summary": "Suarez Negotiates Inter Miami Future as Barcelona Record Nears Limapagi"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "The Rondo: Lionel Messi’s Inter Miami face early exit, FC Cincinnati crash the party - but is MLS playoff chaos good for the league? - Goal.com",
     "published": "2026-11-25T19:59:55+00:00",
     "summary": "The Rondo: Lionel Messi’s Inter Miami face early exit, FC Cincinnati crash the party - but is MLS playoff chaos good for the league? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MATCH GUIDE | Crew vs. Inter Miami | Round One, Game 2 - Columbus Crew",
     "published": "2026-11-25T19:34:20+00:00",
     "summary": "MATCH GUIDE | Crew vs. Inter Miami | Round One, Game 2 Columbus Crew"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Columbus Inter Miami Soccer - Bluefield Daily Telegraph",
     "published": "2026-11-25T19:32:45+00:00",
     "summary": "Columbus Inter Miami Soccer Bluefield Daily Telegraph"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Luis Suárez confirms contract talks with Inter Miami - ESPN",
     "published": "2026-11-25T19:08:01+00:00",
     "summary": "Luis Suárez confirms contract talks with Inter Miami ESPN"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MLS Playoffs: Eastern Favorites Hit With Brutal Opening Round Setbacks - Heavy.com",
     "published": "2026-11-25T19:05:14+00:00",
     "summary": "MLS Playoffs: Eastern Favorites Hit With Brutal Opening Round Setbacks Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Luis Suárez says 'no excuses left' as Miami looks to avoid early playoff exit - ESPN",
     "published": "2026-11-25T18:41:00+00:00",
     "summary": "Luis Suárez says 'no excuses left' as Miami looks to avoid early playoff exit ESPN"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Columbus Crew vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 Playoffs second leg - Khel Now",
     "published": "2026-11-25T18:37:00+00:00",
     "summary": "Columbus Crew vs Inter Miami Preview, prediction, injury news & lineups | MLS 2026 Playoffs second leg Khel Now"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "What would the 2026 MLS Cup playoff bracket look like if Round One were a single game? - Diario AS",
     "published": "2026-11-25T17:20:08+00:00",
     "summary": "What would the 2026 MLS Cup playoff bracket look like if Round One were a single game? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi and Inter Miami face a freezing challenge in Ohio as MLS playoff hopes hang in the balance - Diario AS",
     "published": "2026-11-25T16:39:29+00:00",
     "summary": "Lionel Messi and Inter Miami face a freezing challenge in Ohio as MLS playoff hopes hang in the balance Diario AS"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi’s Inter Miami suffers unexpected setback days before Game 2 vs Columbus Crew - World Soccer Talk",
     "published": "2026-11-25T15:54:56+00:00",
     "summary": "Lionel Messi’s Inter Miami suffers unexpected setback days before Game 2 vs Columbus Crew World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Columbus Crew v Inter Miami: Preview, expected line-ups and where to watch as Messi's side stand on brink of elimination - 101 Great Goals",
     "published": "2026-11-25T15:37:10+00:00",
     "summary": "Columbus Crew v Inter Miami: Preview, expected line-ups and where to watch as Messi's side stand on brink of elimination 101 Great Goals"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "San Antonio Spurs @ Portland Trail Blazers Odds - FanDuel Sportsbook",
     "published": "2026-11-26T01:57:26+00:00",
     "summary": "San Antonio Spurs @ Portland Trail Blazers Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Why Deni Avdija is still one of the league's most underrated players - Yahoo Sports",
     "published": "2026-11-25T20:28:02+00:00",
     "summary": "Why Deni Avdija is still one of the league's most underrated players Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Best NBA Prop Bets Today (Predictions for Klay Thompson, Kevin Durant, Deni Avdija) - Sports Illustrated",
     "published": "2026-11-25T16:51:27+00:00",
     "summary": "Best NBA Prop Bets Today (Predictions for Klay Thompson, Kevin Durant, Deni Avdija) Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Props Today: Live Odds, Trends, & Lines - sports.betmgm.com",
     "published": "2026-11-25T14:10:07+00:00",
     "summary": "Deni Avdija Props Today: Live Odds, Trends, & Lines sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija scores game-high 31 points vs. 76ers - NBC Sports",
     "published": "2026-11-25T09:53:38+00:00",
     "summary": "Deni Avdija scores game-high 31 points vs. 76ers NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "‘There’s nothing subtle about his game’: ESPN names Deni Avdija among top All-Star candidates - Ynetnews",
     "published": "2026-11-25T06:30:00+00:00",
     "summary": "‘There’s nothing subtle about his game’: ESPN names Deni Avdija among top All-Star candidates Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Ben Saraf, Dain Dainja and Chaney Johnson combine for 65 in LI Nets loss to Capital City - NetsDaily",
     "published": "2026-11-24T23:14:35+00:00",
     "summary": "Ben Saraf, Dain Dainja and Chaney Johnson combine for 65 in LI Nets loss to Capital City NetsDaily"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija's star ascension is turning the Blazers into a dark-horse contender - Rip City Project",
     "published": "2026-11-24T19:00:00+00:00",
     "summary": "Deni Avdija's star ascension is turning the Blazers into a dark-horse contender Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Projected as an All-Star One Month into Season - Blazer's Edge",
     "published": "2026-11-24T18:10:43+00:00",
     "summary": "Deni Avdija Projected as an All-Star One Month into Season Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "3 Hidden Signs of Health for the Trail Blazers: Deni Avdija’s Shooting - Blazer's Edge",
     "published": "2026-11-24T18:07:38+00:00",
     "summary": "3 Hidden Signs of Health for the Trail Blazers: Deni Avdija’s Shooting Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija does best LeBron James impression in huge Trail Blazers win - Rip City Project",
     "published": "2026-11-24T17:00:00+00:00",
     "summary": "Deni Avdija does best LeBron James impression in huge Trail Blazers win Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija pours in 31 points Monday night - FantasyPros",
     "published": "2026-11-24T15:23:55+00:00",
     "summary": "Deni Avdija pours in 31 points Monday night FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Trail Blazers vs 76ers: Deni Avdija’s 31-Point Masterclass Snaps Philadelphia’s Five-Game Streak in 128-111 Rout - BBN Times",
     "published": "2026-11-24T15:22:15+00:00",
     "summary": "Trail Blazers vs 76ers: Deni Avdija’s 31-Point Masterclass Snaps Philadelphia’s Five-Game Streak in 128-111 Rout BBN Times"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "LeBron James saw firsthand the Blazers using his old formula around Deni Avdija - Rip City Project",
     "published": "2026-11-24T15:00:01+00:00",
     "summary": "LeBron James saw firsthand the Blazers using his old formula around Deni Avdija Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "The Israeli king of basketball: Avdija shines in Blazers showdown with LeBron, Sixers - comment - The Jerusalem Post",
     "published": "2026-11-24T14:27:26+00:00",
     "summary": "The Israeli king of basketball: Avdija shines in Blazers showdown with LeBron, Sixers - comment The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija: Scoot Henderson is a big part of our team - HoopsHype",
     "published": "2026-11-24T10:00:00+00:00",
     "summary": "Deni Avdija: Scoot Henderson is a big part of our team HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija: the three-point shot of Portland's forward · SNA - Sport News Africa",
     "published": "2026-11-24T09:01:23+00:00",
     "summary": "Deni Avdija: the three-point shot of Portland's forward · SNA Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post - UA.NEWS",
     "published": "2026-11-24T08:12:37+00:00",
     "summary": "Basketball player Deni Avdija scores 31 points in Portland’s winning game — Jerusalem Post UA.NEWS"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija says Trail Blazers are not afraid of anyone - TalkBasket.net",
     "published": "2026-11-24T08:06:17+00:00",
     "summary": "Deni Avdija says Trail Blazers are not afraid of anyone TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers - The Jerusalem Post",
     "published": "2026-11-24T07:18:44+00:00",
     "summary": "Basketball: Deni Avdija's Trail Blazers defeat LeBron James' 76ers The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija torches 76ers as Blazers end winning streak - TalkBasket.net",
     "published": "2026-11-24T07:07:40+00:00",
     "summary": "Deni Avdija torches 76ers as Blazers end winning streak TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "NBA: Blazers snap Sixers streak, Thunder stumble - Cebu Daily News",
     "published": "2026-11-24T06:15:00+00:00",
     "summary": "NBA: Blazers snap Sixers streak, Thunder stumble Cebu Daily News"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - WV News",
     "published": "2026-11-24T05:53:11+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 WV News"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games - GMA Network",
     "published": "2026-11-24T05:24:22+00:00",
     "summary": "NBA scores today: Blazers vs 76ers, Lakers vs Jazz, and other games GMA Network"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 - Herald Bulletin",
     "published": "2026-11-24T05:15:15+00:00",
     "summary": "Deni Avdija scores 31 as Trail Blazers beat 76ers 128-111 Herald Bulletin"
    }
   ]
  }
 ]
}
</input>