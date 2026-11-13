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
  "home": "Sacramento Kings",
  "away": "Portland Trail Blazers",
  "kickoff_utc": "2026-11-14T03:00:00.000Z"
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
    "home": "Philadelphia 76ers",
    "away": "Toronto Raptors",
    "score": "123-112",
    "status": "Final"
   },
   {
    "home": "Washington Wizards",
    "away": "Detroit Pistons",
    "score": "140-144",
    "status": "Final"
   },
   {
    "home": "Minnesota Timberwolves",
    "away": "Dallas Mavericks",
    "score": "133-94",
    "status": "Final"
   },
   {
    "home": "Phoenix Suns",
    "away": "Charlotte Hornets",
    "score": "61-62",
    "status": "3rd Qtr"
   }
  ],
  "games_today": [
   {
    "home": "Indiana Pacers",
    "away": "New York Knicks",
    "score": null,
    "status": "2026-11-14T00:00:00Z"
   },
   {
    "home": "Orlando Magic",
    "away": "Milwaukee Bucks",
    "score": null,
    "status": "2026-11-14T00:00:00Z"
   },
   {
    "home": "Miami Heat",
    "away": "Cleveland Cavaliers",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "Chicago Bulls",
    "away": "Atlanta Hawks",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "New Orleans Pelicans",
    "away": "Memphis Grizzlies",
    "score": null,
    "status": "2026-11-14T01:00:00Z"
   },
   {
    "home": "Houston Rockets",
    "away": "Utah Jazz",
    "score": null,
    "status": "2026-11-14T01:30:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Golden State Warriors",
    "score": null,
    "status": "2026-11-14T02:30:00Z"
   },
   {
    "home": "Sacramento Kings",
    "away": "Portland Trail Blazers",
    "score": null,
    "status": "2026-11-14T03:00:00Z"
   },
   {
    "home": "LA Clippers",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-11-14T03:30:00Z"
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
     "title": "Football Daily",
     "published": "2026-11-12T23:37:00+00:00",
     "summary": "Harry Kane becomes the most-capped England men's player in history."
    },
    {
     "ref": "bbc_football#1",
     "title": "'A lie' & 'nonsense' - Palmer committed to England, says Rogers",
     "published": "2026-11-12T23:09:07+00:00",
     "summary": "Morgan Rogers says any suggestion Cole Palmer is not committed to England \"is a lie\" and \"nonsense\"."
    },
    {
     "ref": "bbc_football#2",
     "title": "Grealish apologises for absence after breach of discipline",
     "published": "2026-11-12T22:10:13+00:00",
     "summary": "Jack Grealish issues an apology to Everton fans for his recent absence due to a disciplinary issue."
    },
    {
     "ref": "bbc_football#3",
     "title": "Where does Kane rank among all-time England greats?",
     "published": "2026-11-12T22:09:59+00:00",
     "summary": "Harry Kane is England's all-time top scorer and record appearance maker, but where does he rank among the Three Lions' greatest players?"
    },
    {
     "ref": "bbc_football#4",
     "title": "Gritty Arsenal show different side in Barcelona draw",
     "published": "2026-11-12T21:50:59+00:00",
     "summary": "Could a resilient draw against European champions Barcelona be a turning point in Arsenal's season?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Gritty Arsenal show different side in Barcelona draw",
     "published": "2026-11-12T21:50:59+00:00",
     "summary": "Could a resilient draw against European champions Barcelona be a turning point in Arsenal's season?"
    },
    {
     "ref": "bbc_football#6",
     "title": "Kane scores winner but who else made an impression? England player ratings",
     "published": "2026-11-12T21:47:36+00:00",
     "summary": "How did England's players fare in the Nations League match against Croatia? Senior football correspondent Sami Mokbel gives his verdict."
    },
    {
     "ref": "bbc_football#7",
     "title": "Ghana kick-start Afcon 2027 bid despite Ayew penalty miss",
     "published": "2026-11-12T21:28:06+00:00",
     "summary": "Ghana kick-start their Afcon 2027 qualifying campaign despite Jordan Ayew having a penalty saved, while Cameroon, Ivory Coast and Senegal register wins."
    },
    {
     "ref": "bbc_football#8",
     "title": "SFA in talks with Boston officials over biennial friendly match",
     "published": "2026-11-12T21:16:56+00:00",
     "summary": "Discussions take place between Scottish football governing's body and a delegation of state senators to build on bonds forged during the World Cup."
    },
    {
     "ref": "bbc_football#9",
     "title": "SFA in talks with Boston officials over biennial friendly match",
     "published": "2026-11-12T21:16:56+00:00",
     "summary": "Discussions take place between Scottish football governing's body and a delegation of state senators to build on bonds forged during the World Cup."
    },
    {
     "ref": "bbc_football#10",
     "title": "Man Utd & Man City in Gusto battle - Friday's gossip",
     "published": "2026-11-12T21:13:59+00:00",
     "summary": "Manchester United and Manchester City are going head-to-head for Chelsea defender Malo Gusto and Leeds United pursue Will Lankshear, plus more."
    },
    {
     "ref": "bbc_football#11",
     "title": "Arsenal dig in for draw at Barcelona to extend unbeaten start",
     "published": "2026-11-12T20:09:07+00:00",
     "summary": "Arsenal extend their unbeaten start to four matches in the Uefa Women's Champions League, as they produce a dogged display to hold Barcelona to a 1-1 draw at the Camp Nou. The point moves Renee Slegers' side into the top four, putting them in a great position to automatically qualify for the knockout stages."
    },
    {
     "ref": "bbc_football#12",
     "title": "Arsenal dig in for draw at Barcelona to extend unbeaten start",
     "published": "2026-11-12T20:09:07+00:00",
     "summary": "Arsenal extend their unbeaten start to four matches in the Uefa Women's Champions League, as they produce a dogged display to hold Barcelona to a 1-1 draw at the Camp Nou. The point moves Renee Slegers' side into the top four, putting them in a great position to automatically qualify for the knockout stages."
    },
    {
     "ref": "bbc_football#13",
     "title": "Leader, role model, extraordinary - how Kane's 'fairytale' came true",
     "published": "2026-11-12T19:53:40+00:00",
     "summary": "From the 21-year-old who scored 79 seconds into his debut to breaking his nation's appearance record, BBC Sport looks at Harry Kane's England career."
    },
    {
     "ref": "bbc_football#14",
     "title": "Quiz: Name England men's all-time leading appearance makers",
     "published": "2026-11-12T19:47:16+00:00",
     "summary": "Can you name every England men's player who has at least 60 caps?"
    },
    {
     "ref": "bbc_football#15",
     "title": "Goodwillie prosecutors 'wrong' not to put footballer on trial for rape, court hears",
     "published": "2026-11-12T17:31:02+00:00",
     "summary": "Denise Clair has brought a case for a private criminal prosecution against the footballer, who was ruled to have raped her by a civil court."
    },
    {
     "ref": "bbc_football#16",
     "title": "Crystal Palace sack boss Sage after 16 games",
     "published": "2026-11-12T17:15:20+00:00",
     "summary": "Crystal Palace have sacked manager Pierre Sage after 16 games in charge and the club bottom of the table."
    },
    {
     "ref": "bbc_football#17",
     "title": "Owono undecided over future following De Miguel death",
     "published": "2026-11-12T16:41:49+00:00",
     "summary": "FC Andorra manager Carles Manso says goalkeeper Jesus Owono is yet to decide whether he will return to playing action following the death of Tenerife forward Jesus de Miguel."
    },
    {
     "ref": "bbc_football#18",
     "title": "Football Daily",
     "published": "2026-11-12T16:31:00+00:00",
     "summary": "Simon Stone, Jay Motty & Tom Allnutt join Rick & Lloyd for reaction to Carrick’s sacking."
    },
    {
     "ref": "bbc_football#19",
     "title": "Wilson and Miller score as Scotland U21s thump Ukraine",
     "published": "2026-11-12T16:29:16+00:00",
     "summary": "James Wilson scores a double and Lennon Miller also finds the net as Scotland Under-21s ease to a 4-0 win in the first of two friendlies against Ukraine in Spain."
    },
    {
     "ref": "bbc_football#20",
     "title": "How Pochettino came on Man Utd's radar - and what Carrick was told when",
     "published": "2026-11-12T16:12:39+00:00",
     "summary": "How Man Utd identified Mauricio Pochettino as their new head coach - and what happened in the week Michael Carrick was left waiting."
    },
    {
     "ref": "bbc_football#21",
     "title": "Largs get floodlights consent in time for cup tie with Ayr – watch on BBC",
     "published": "2026-11-12T15:00:57+00:00",
     "summary": "The Scottish Cup third-round tie between Largs Thistle and Ayr United will be shown live on the BBC Scotland channel, website and iPlayer on Friday, 27 November."
    },
    {
     "ref": "bbc_football#22",
     "title": "Police investigation into Vigar's death ongoing",
     "published": "2026-11-12T13:11:49+00:00",
     "summary": "The police investigation into Billy Vigar's death from a \"significant brain injury\" is unlikely to conclude for at least another two months."
    },
    {
     "ref": "bbc_football#23",
     "title": "Spain boss denies Lamine Yamal gets 'special privileges'",
     "published": "2026-11-12T11:31:54+00:00",
     "summary": "Spain head coach Luis de la Fuente denies claims Lamine Yamal received \"special privileges\" after being allowed to join the national team later than the rest of the squad."
    },
    {
     "ref": "bbc_football#24",
     "title": "Six matches that defined Carrick's Man Utd tenure",
     "published": "2026-11-12T11:25:46+00:00",
     "summary": "BBC Sport looks back at the six Premier League matches that defined the highs and lows of Michael Carrick's 10-month spell in charge of Manchester United."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award - beIN SPORTS",
     "published": "2026-11-13T03:11:00+00:00",
     "summary": "Lionel Messi Eyes History With Third Consecutive MLS MVP Award beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi named finalist for third straight MLS MVP award - Sportstar",
     "published": "2026-11-13T02:55:51+00:00",
     "summary": "Lionel Messi named finalist for third straight MLS MVP award Sportstar"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi named finalist for third straight MVP award in Major League Soccer - Malay Mail",
     "published": "2026-11-13T02:33:38+00:00",
     "summary": "Messi named finalist for third straight MVP award in Major League Soccer Malay Mail"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "MLS: Messi finalist for third straight MVP award - Soccer America",
     "published": "2026-11-13T02:07:18+00:00",
     "summary": "MLS: Messi finalist for third straight MVP award Soccer America"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame - Sun Sentinel",
     "published": "2026-11-13T01:50:53+00:00",
     "summary": "Inter Miami owner David Beckham voted into the National Soccer Hall of Fame Sun Sentinel"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi, Cavan Sullivan Named MLS MVP Finalists - RG.org",
     "published": "2026-11-13T01:30:00+00:00",
     "summary": "Messi, Cavan Sullivan Named MLS MVP Finalists RG.org"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi di Ambang Sejarah MLS, Wonderkid 17 Tahun Mengancam - BeritaSatu.com",
     "published": "2026-11-13T00:47:12+00:00",
     "summary": "Messi di Ambang Sejarah MLS, Wonderkid 17 Tahun Mengancam BeritaSatu.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi Targets Third Straight MLS MVP - 조선일보",
     "published": "2026-11-12T23:40:47+00:00",
     "summary": "Messi Targets Third Straight MLS MVP 조선일보"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami CF and Central Coast Mariners Women Announce Club Commercial Partnerships on November 12, 2026 - Ministry of Sport",
     "published": "2026-11-12T22:28:54+00:00",
     "summary": "Inter Miami CF and Central Coast Mariners Women Announce Club Commercial Partnerships on November 12, 2026 Ministry of Sport"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS Records Third Consecutive Season Above 11.2 Million Fans as Inter Miami Drives Historic Crowds - Ministry of Sport",
     "published": "2026-11-12T22:17:56+00:00",
     "summary": "MLS Records Third Consecutive Season Above 11.2 Million Fans as Inter Miami Drives Historic Crowds Ministry of Sport"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi finalist for third straight MLS MVP award - Philstar.com",
     "published": "2026-11-12T22:08:00+00:00",
     "summary": "Messi finalist for third straight MLS MVP award Philstar.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "USMNT to Face Haiti at Miami’s Nu Stadium, Cincinnati’s TQL Stadium in Concacaf Nations League - Yahoo Sports",
     "published": "2026-11-12T21:58:00+00:00",
     "summary": "USMNT to Face Haiti at Miami’s Nu Stadium, Cincinnati’s TQL Stadium in Concacaf Nations League Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "How a young boy's viral soccer videos led to an unforgettable day with David Beckham and Lionel Messi - Upworthy",
     "published": "2026-11-12T21:37:51+00:00",
     "summary": "How a young boy's viral soccer videos led to an unforgettable day with David Beckham and Lionel Messi Upworthy"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "David Beckham Elected to National Soccer Hall of Fame - National Soccer Hall of Fame",
     "published": "2026-11-12T21:00:00+00:00",
     "summary": "David Beckham Elected to National Soccer Hall of Fame National Soccer Hall of Fame"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi is aiming to win his third MLS MVP award - voz.us",
     "published": "2026-11-12T20:35:43+00:00",
     "summary": "Messi is aiming to win his third MLS MVP award voz.us"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Messi nominated for MLS regular-season MVP award - Operativ Məlumat Mərkəzi",
     "published": "2026-11-12T20:33:12+00:00",
     "summary": "Messi nominated for MLS regular-season MVP award Operativ Məlumat Mərkəzi"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Lionel Messi named finalist for 2026 MLS MVP award after record Golden Boot season - Head Topics",
     "published": "2026-11-12T20:29:00+00:00",
     "summary": "Lionel Messi named finalist for 2026 MLS MVP award after record Golden Boot season Head Topics"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi shortlisted for third consecutive MLS MVP award - Punch Newspapers",
     "published": "2026-11-12T20:26:20+00:00",
     "summary": "Messi shortlisted for third consecutive MLS MVP award Punch Newspapers"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "MLS Cup: Why each Eastern Conference playoff team will (or won't) win it all - Yahoo Sports",
     "published": "2026-11-12T20:16:00+00:00",
     "summary": "MLS Cup: Why each Eastern Conference playoff team will (or won't) win it all Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Vancouver Whitecaps up for two MLS year-end awards, Messi finalist for MVP - Yahoo",
     "published": "2026-11-12T20:14:14+00:00",
     "summary": "Vancouver Whitecaps up for two MLS year-end awards, Messi finalist for MVP Yahoo"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi could achieve incredible MLS record no player has ever reached after dominant 2026 Inter Miami... - World Soccer Talk",
     "published": "2026-11-12T18:59:02+00:00",
     "summary": "Lionel Messi could achieve incredible MLS record no player has ever reached after dominant 2026 Inter Miami... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Telasco Segovia Amongst Finalists for 2026 MLS Humanitarian of the Year - Inter Miami CF",
     "published": "2026-11-12T18:24:51+00:00",
     "summary": "Telasco Segovia Amongst Finalists for 2026 MLS Humanitarian of the Year Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Tradeify becomes Inter Miami CF’s Official Trading Partner - LeapRate",
     "published": "2026-11-12T18:18:34+00:00",
     "summary": "Tradeify becomes Inter Miami CF’s Official Trading Partner LeapRate"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi eyes historic third straight MLS MVP award as USMNT star Cavan Sullivan becomes youngest-ever finalist - Yardbarker",
     "published": "2026-11-12T18:13:38+00:00",
     "summary": "Lionel Messi eyes historic third straight MLS MVP award as USMNT star Cavan Sullivan becomes youngest-ever finalist Yardbarker"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Leo Messi Amongst Finalists for 2026 Landon Donovan MLS MVP Award - Inter Miami CF",
     "published": "2026-11-12T18:04:51+00:00",
     "summary": "Leo Messi Amongst Finalists for 2026 Landon Donovan MLS MVP Award Inter Miami CF"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-11-12T18:32:30+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija is at it again - New Jersey Jewish News",
     "published": "2026-11-12T17:33:38+00:00",
     "summary": "Deni Avdija is at it again New Jersey Jewish News"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday - CBS Sports",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Trail Blazers' Deni Avdija: Stuffs stat sheet Wednesday CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija News: Stuffs stat sheet Wednesday - RotoWire",
     "published": "2026-11-12T17:00:40+00:00",
     "summary": "Deni Avdija News: Stuffs stat sheet Wednesday RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke - Rip City Project",
     "published": "2026-11-12T15:51:13+00:00",
     "summary": "Deni Avdija is quickly showing the Blazers his All-Star season wasn’t a fluke Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' - The Jerusalem Post",
     "published": "2026-11-12T15:40:00+00:00",
     "summary": "Deni Avdija on track for first All-NBA selection: 'He is Portland's most important player' The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija drops 28 points Wednesday - FantasyPros",
     "published": "2026-11-12T07:00:00+00:00",
     "summary": "Deni Avdija drops 28 points Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija, Damian Lillard rally Blazers past Thunder - TalkBasket.net",
     "published": "2026-11-12T06:45:22+00:00",
     "summary": "Deni Avdija, Damian Lillard rally Blazers past Thunder TalkBasket.net"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers sweep the Thunder with a 118-108 win - Norwalk Hour",
     "published": "2026-11-12T06:06:41+00:00",
     "summary": "Trail Blazers sweep the Thunder with a 118-108 win Norwalk Hour"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija, Blazers complete two-game sweep of Thunder - Reuters",
     "published": "2026-11-12T06:06:00+00:00",
     "summary": "Deni Avdija, Blazers complete two-game sweep of Thunder Reuters"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija - Ynetnews",
     "published": "2026-11-12T05:44:18+00:00",
     "summary": "NBA Basketball: Portland Defeats Oklahoma City Again, 28 Points for Deni Avdija Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija slams it home - Yahoo Sports",
     "published": "2026-11-12T05:39:51+00:00",
     "summary": "Deni Avdija slams it home Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-12T05:30:17+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City - NBC Sports",
     "published": "2026-11-12T05:25:49+00:00",
     "summary": "Deni Avdija posts 24/6/8/1 line vs. Oklahoma City NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ - Hoops Wire",
     "published": "2026-11-11T21:32:59+00:00",
     "summary": "Blazers’ Deni Avdija on Damian Lillard: ‘He makes everybody better’ Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers' Deni Avdija: Powers Portland to victory - CBS Sports",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Trail Blazers' Deni Avdija: Powers Portland to victory CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija News: Powers Portland to victory - RotoWire",
     "published": "2026-11-11T12:19:07+00:00",
     "summary": "Deni Avdija News: Powers Portland to victory RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him - Basketball Network",
     "published": "2026-11-11T11:26:00+00:00",
     "summary": "\"Actions speak better than words\" - Deni Avdija reveals what Damian Lillard's presence has meant to him Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 - NBA.com",
     "published": "2026-11-11T07:45:52+00:00",
     "summary": "Deni Avdija Highlights (24 Points, 8 Assists) | Trail Blazers 123, Thunder 103 | Nov. 10, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder - Belleville News-Democrat",
     "published": "2026-11-11T06:51:00+00:00",
     "summary": "Damian Lillard, Deni Avdija propel Trail Blazers past Thunder Belleville News-Democrat"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija with the And-1!, 11/10/2026 - Yahoo Sports",
     "published": "2026-11-11T06:40:42+00:00",
     "summary": "Deni Avdija with the And-1!, 11/10/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score - ESPN Singapore",
     "published": "2026-11-11T05:37:22+00:00",
     "summary": "Trail Blazers 118-108 Thunder (12 Nov, 2026) Final Score ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija gets the and-1 to fall for Trail Blazers - ESPN",
     "published": "2026-11-11T05:03:49+00:00",
     "summary": "Deni Avdija gets the and-1 to fall for Trail Blazers ESPN"
    }
   ]
  }
 ]
}
</input>