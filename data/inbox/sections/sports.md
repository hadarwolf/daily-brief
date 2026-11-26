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
     "home": "Sabah FK",
     "away": "Barça",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-11-25T17:45:00Z",
     "home": "Slavia Praha",
     "away": "Villarreal",
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
     "home": "Club Brugge",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "0-3"
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
    "score": "116-104",
    "status": "Final"
   },
   {
    "home": "Golden State Warriors",
    "away": "Sacramento Kings",
    "score": "129-110",
    "status": "Final"
   },
   {
    "home": "Portland Trail Blazers",
    "away": "San Antonio Spurs",
    "score": "116-111",
    "status": "Final"
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
     "title": "Who is close to a yellow card suspension in Champions League?",
     "published": "2026-11-26T11:21:53+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains what the rules are regarding yellow card suspensions in this season's Champions League"
    },
    {
     "ref": "bbc_football#1",
     "title": "Weekly sports quiz: What year will the UK host the Women's World Cup?",
     "published": "2026-11-26T08:02:45+00:00",
     "summary": "How much attention have you paid to what's happened in the world of sport over the past seven days?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Podcast: Celtic's European curse & Hearts' Monaco mission",
     "published": "2026-11-26T08:00:00+00:00",
     "summary": "Can Celtic end their European away-day misery as Hearts welcome Monaco?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Dundee United's Farrugia out until new year - gossip",
     "published": "2026-11-26T07:42:21+00:00",
     "summary": "Injury blow for Dundee United midfielder as Monaco boss pinpoints Hearts danger men."
    },
    {
     "ref": "bbc_football#4",
     "title": "Why KMI Panel frustrates referees too - and impacts their salary",
     "published": "2026-11-26T07:28:18+00:00",
     "summary": "For Premier League referees, the KMI Panel is more important than you might realise. It determines a significant portion of their salary."
    },
    {
     "ref": "bbc_football#5",
     "title": "The Portuguese second-tier team hosting Celtic in Europe",
     "published": "2026-11-26T07:26:12+00:00",
     "summary": "Portuguese second-tier side Torreense host Celtic in the Europa League. But how did they end up here?"
    },
    {
     "ref": "bbc_football#6",
     "title": "The Portuguese second-tier team hosting Celtic in Europe",
     "published": "2026-11-26T07:26:12+00:00",
     "summary": "Portuguese second-tier side Torreense host Celtic in the Europa League. But how did they end up here?"
    },
    {
     "ref": "bbc_football#7",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-11-26T06:53:51+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#8",
     "title": "'Laughing gas has ended careers' - so how common is it in football?",
     "published": "2026-11-26T06:18:30+00:00",
     "summary": "After Raheem Sterling's court case, BBC Sport looks at how common the use of nitrous oxide is among footballers."
    },
    {
     "ref": "bbc_football#9",
     "title": "More ref frustration as Pochettino's chaotic start at Man Utd continues",
     "published": "2026-11-26T00:24:48+00:00",
     "summary": "What are the findings for Mauricio Pochettino after his first two matches as Manchester United manager?"
    },
    {
     "ref": "bbc_football#10",
     "title": "Divots, howlers and bad decisions - dissecting Man Utd's draw in Lisbon",
     "published": "2026-11-26T00:22:28+00:00",
     "summary": "BBC Sport breaks down the chaos amid Manchester United's rollercoaster Champions League draw against Sporting in Lisbon."
    },
    {
     "ref": "bbc_football#11",
     "title": "How Isak and Wirtz are becoming Liverpool's 'big-game players'",
     "published": "2026-11-25T23:38:42+00:00",
     "summary": "Match of the Day's Stephen Warnock and Nedum Onuoha analyse the recent resurgence of Alexander Isak and Florian Wirtz for as they led Liverpool to victory against Club Brugge.debut seasons last year."
    },
    {
     "ref": "bbc_football#12",
     "title": "'All coming together' - Isak repaying Liverpool faith",
     "published": "2026-11-25T23:25:30+00:00",
     "summary": "Alexander Isak's two goals against Club Brugge take his tally for the season to 10 as the striker continues to show why Liverpool last year paid £125m to bring him to the club."
    },
    {
     "ref": "bbc_football#13",
     "title": "Fenerbahce squeeze past Shakhtar to seal back-to-back wins",
     "published": "2026-11-25T23:16:18+00:00",
     "summary": "Turkish side Fenerbahce defeat Shakhtar Donetsk in a close affair at Stamford Bridge to give their hopes of Champions League qualification a huge boost."
    },
    {
     "ref": "bbc_football#14",
     "title": "Martinez secures Inter win against Stuttgart",
     "published": "2026-11-25T23:02:15+00:00",
     "summary": "Lautaro Martinez comes off the bench to score as Inter Milan beat Stuttgart and boost their chances of reaching the Champions League knockout stages."
    },
    {
     "ref": "bbc_football#15",
     "title": "Lammens howler denies Man Utd victory against Sporting in incident-packed game",
     "published": "2026-11-25T22:32:51+00:00",
     "summary": "Goalkeeper Senne Lammens endures a topsy-turvy night as Manchester United draw with Sporting.controversial decisions."
    },
    {
     "ref": "bbc_football#16",
     "title": "PSG held by Roma as in-form Malen scores again",
     "published": "2026-11-25T22:27:14+00:00",
     "summary": "Donyell Malen scores for the fourth Champions League game running as Roma ends Paris St-Germain's 100% start to the competition."
    },
    {
     "ref": "bbc_football#17",
     "title": "Terrible Pavlovic own goal gifts Lille shock win against Bayern",
     "published": "2026-11-25T22:24:57+00:00",
     "summary": "Bayern Munich suffer their first defeat of the Champions League campaign as Lille find the net twice in three minutes in the second half, including a comical Aleksander Pavlovic own goal, to inflict a huge upset."
    },
    {
     "ref": "bbc_football#18",
     "title": "Isak scores twice as clinical Liverpool beat Brugge",
     "published": "2026-11-25T22:12:19+00:00",
     "summary": "Liverpool defeat Club Brugge in a clinical performance thanks to goals from Alexander Isak and Florian Wirtz, bouncing back after a defeat in their last Champions League match."
    },
    {
     "ref": "bbc_football#19",
     "title": "Gordon stars in comfortable Barca win over Sabah",
     "published": "2026-11-25T22:07:02+00:00",
     "summary": "Anthony Gordon scores Barcelona's opening two goals as they ease past Sabah with a 4-1 win in the Champions League."
    },
    {
     "ref": "bbc_football#20",
     "title": "Borussia Dortmund fight back to draw with Arsenal",
     "published": "2026-11-25T22:05:57+00:00",
     "summary": "Borussia Dortmund fight back from a goal behind to draw with Arsenal in the Champions League."
    },
    {
     "ref": "bbc_football#21",
     "title": "Blunt Villa beaten by late Galatasaray winner",
     "published": "2026-11-25T22:05:53+00:00",
     "summary": "Deniz Gul scores a late winner for Galatasaray as Aston Villa slip to successive Champions League defeats."
    },
    {
     "ref": "bbc_football#22",
     "title": "Cherki rescues point for Man City against Napoli",
     "published": "2026-11-25T22:05:49+00:00",
     "summary": "Rayan Cherki's late equaliser rescues a point for Manchester City at home to Napoli in the Champions League, who have now won just one of their past seven games in all competitions."
    },
    {
     "ref": "bbc_football#23",
     "title": "Real Madrid put in five-star second half to win against PSV",
     "published": "2026-11-25T22:05:45+00:00",
     "summary": "Jude Bellingham comes off the bench to score a stunning goal as Real Madrid come from behind to beat PSV Eindhoven and maintain their 100% record in the Champions League."
    },
    {
     "ref": "bbc_football#24",
     "title": "Ferguson's Glentoran reign hits early turbulence",
     "published": "2026-11-25T21:41:00+00:00",
     "summary": "Duncan Ferguson's short tenure at Glentoran is already proving anything but straightforward with just one win so far and the former Everton striker now suspended for seven games."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Red-hot Crew face playoff test from Inter Miami, Lionel Messi - Field Level Media",
     "published": "2026-11-26T10:14:10+00:00",
     "summary": "Red-hot Crew face playoff test from Inter Miami, Lionel Messi Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 - FOX Sports",
     "published": "2026-11-26T09:32:45+00:00",
     "summary": "Columbus vs. Inter Miami CF - Live Score - November 27, 2026 FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Vancouver Whitecaps vs Real Salt Lake - beIN SPORTS",
     "published": "2026-11-26T08:44:36+00:00",
     "summary": "Vancouver Whitecaps vs Real Salt Lake beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Columbus Crew vs Inter Miami Prediction, Betting Tips, Lineups & Odds | 27 Nov 2026 - Sportsgambler",
     "published": "2026-11-26T08:31:27+00:00",
     "summary": "Columbus Crew vs Inter Miami Prediction, Betting Tips, Lineups & Odds | 27 Nov 2026 Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Columbus Crew host Inter Miami in Eastern Conference semifinals - Oskaloosa Herald",
     "published": "2026-11-26T07:16:08+00:00",
     "summary": "Columbus Crew host Inter Miami in Eastern Conference semifinals Oskaloosa Herald"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Columbus Crew host Inter Miami in Eastern Conference semifinals - FOX Sports",
     "published": "2026-11-26T07:03:19+00:00",
     "summary": "Columbus Crew host Inter Miami in Eastern Conference semifinals FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Miami vs. Columbus Crew: free picks & statistics 11/28/2026 - RealGM",
     "published": "2026-11-26T06:39:24+00:00",
     "summary": "Miami vs. Columbus Crew: free picks & statistics 11/28/2026 RealGM"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Columbus v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-11-26T06:34:36+00:00",
     "summary": "Columbus v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami train indoors ahead of must-win playoff game against Columbus - News.com.au",
     "published": "2026-11-26T03:30:38+00:00",
     "summary": "Inter Miami train indoors ahead of must-win playoff game against Columbus News.com.au"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS to adopt new 16-team playoff format in 2027-28 - Yahoo Sports",
     "published": "2026-11-26T02:11:00+00:00",
     "summary": "MLS to adopt new 16-team playoff format in 2027-28 Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time - FOX One",
     "published": "2026-11-26T01:39:57+00:00",
     "summary": "Watch Columbus Crew vs Inter Miami Live: Streaming, TV Channel & Start Time FOX One"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami confront possible playoff exit: \"It's time to deliver\" - MLSsoccer.com",
     "published": "2026-11-26T01:31:27+00:00",
     "summary": "Inter Miami confront possible playoff exit: \"It's time to deliver\" MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Prediction Columbus Crew vs Inter Miami: analysis, odds and betting tips - BetMines",
     "published": "2026-11-26T01:30:45+00:00",
     "summary": "Prediction Columbus Crew vs Inter Miami: analysis, odds and betting tips BetMines"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Columbus Crew vs Inter Miami Prediction & Picks - Major League Soccer - SportyTrader",
     "published": "2026-11-26T01:00:00+00:00",
     "summary": "Columbus Crew vs Inter Miami Prediction & Picks - Major League Soccer SportyTrader"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "David Beckham's $1 billion Miami stadium project faced a $584,217 lawsuit over allegedly unpaid construct - The Times of India",
     "published": "2026-11-26T00:32:00+00:00",
     "summary": "David Beckham's $1 billion Miami stadium project faced a $584,217 lawsuit over allegedly unpaid construct The Times of India"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Miami & Nashville on the ropes, West favorites shine & more from Round One - MLSsoccer.com",
     "published": "2026-11-25T22:06:14+00:00",
     "summary": "Miami & Nashville on the ropes, West favorites shine & more from Round One MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Weekly MLS Winners and Losers: Lionel Messi, Inter Miami on Brink of Elimination - Sports Illustrated",
     "published": "2026-11-25T21:30:00+00:00",
     "summary": "Weekly MLS Winners and Losers: Lionel Messi, Inter Miami on Brink of Elimination Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Suarez Negotiates New Inter Miami Contract Ahead of MLS Exit - www.suaralandak.co.id",
     "published": "2026-11-25T21:12:00+00:00",
     "summary": "Suarez Negotiates New Inter Miami Contract Ahead of MLS Exit www.suaralandak.co.id"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami CF Tickets - Inter Miami CF",
     "published": "2026-11-25T20:58:40+00:00",
     "summary": "Inter Miami CF Tickets Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats - Yahoo Sports",
     "published": "2026-11-25T20:52:50+00:00",
     "summary": "Inter Miami CF 0 - 3 Columbus Crew: Final score, results, recap, box score, stats Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Suarez Negotiates Inter Miami Future as Barcelona Record Nears - Limapagi",
     "published": "2026-11-25T20:49:00+00:00",
     "summary": "Suarez Negotiates Inter Miami Future as Barcelona Record Nears Limapagi"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Suarez Holds Inter Miami Talks as Raphinha Nears Barca Record - bsinews.id",
     "published": "2026-11-25T20:49:00+00:00",
     "summary": "Suarez Holds Inter Miami Talks as Raphinha Nears Barca Record bsinews.id"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "The Rondo: Lionel Messi’s Inter Miami face early exit, FC Cincinnati crash the party - but is MLS playoff chaos good for the league? - Goal.com",
     "published": "2026-11-25T19:59:55+00:00",
     "summary": "The Rondo: Lionel Messi’s Inter Miami face early exit, FC Cincinnati crash the party - but is MLS playoff chaos good for the league? Goal.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "MATCH GUIDE | Crew vs. Inter Miami | Round One, Game 2 - Columbus Crew",
     "published": "2026-11-25T19:34:20+00:00",
     "summary": "MATCH GUIDE | Crew vs. Inter Miami | Round One, Game 2 Columbus Crew"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Columbus Inter Miami Soccer - Bluefield Daily Telegraph",
     "published": "2026-11-25T19:22:45+00:00",
     "summary": "Columbus Inter Miami Soccer Bluefield Daily Telegraph"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night - Haaretz",
     "published": "2026-11-26T10:47:00+00:00",
     "summary": "'Baruch Hashem': Shaq Greets Deni Avdija in Hebrew After 33-Point Night Haaretz"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs - Basketball Network",
     "published": "2026-11-26T10:26:31+00:00",
     "summary": "\"He doesn't have a conscience\" – Charles Barkley compares Deni Avdija to Drazen Petrovic after his game-winner vs. Spurs Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Blazers news: Portland hands Spurs first road loss after Deni Avdija's dagger - ClutchPoints",
     "published": "2026-11-26T09:56:15+00:00",
     "summary": "Blazers news: Portland hands Spurs first road loss after Deni Avdija's dagger ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs - NDTV Sports",
     "published": "2026-11-26T09:36:01+00:00",
     "summary": "Charles Barkley Gushes Over Deni Avdija After Portland Trail Blazers Beat Victor Wembanyama's San Antonio Spurs NDTV Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija Scores 33 Points In Win Over Spurs - FanDuel",
     "published": "2026-11-26T09:30:37+00:00",
     "summary": "Deni Avdija Scores 33 Points In Win Over Spurs FanDuel"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija Puts Blazers Ahead For Good At The Line - Yardbarker",
     "published": "2026-11-26T09:19:43+00:00",
     "summary": "Deni Avdija Puts Blazers Ahead For Good At The Line Yardbarker"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ - Heavy.com",
     "published": "2026-11-26T09:12:34+00:00",
     "summary": "Charles Barkley Deni Avdija Comparison: ‘He reminds me of Dražen Petrović’ Heavy.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch - Ynetnews",
     "published": "2026-11-26T08:32:58+00:00",
     "summary": "'Shalom, baruch Hashem': Shaq greets Deni Avdija in Hebrew and Charles Barkley raves | Watch Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "A league of his own: NBA analysts crown Deni Avdija a true superstar - The Jerusalem Post",
     "published": "2026-11-26T08:18:48+00:00",
     "summary": "A league of his own: NBA analysts crown Deni Avdija a true superstar The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs - ClutchPoints",
     "published": "2026-11-26T08:03:37+00:00",
     "summary": "Charles Barkley heaps praise on Deni Avdija, Blazers after NBA Cup upset over Spurs ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "“We’re going to have to trust each other” – Damian Lillard breaks down his clutch assist to Deni Avdija in Trail Blazers' win - Basketball Network",
     "published": "2026-11-26T07:57:00+00:00",
     "summary": "“We’re going to have to trust each other” – Damian Lillard breaks down his clutch assist to Deni Avdija in Trail Blazers' win Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers Player Ratings: Damian Lillard And Deni Avdija Combine For 62 Points To Topple Spurs - Fadeaway World",
     "published": "2026-11-26T07:14:21+00:00",
     "summary": "Trail Blazers Player Ratings: Damian Lillard And Deni Avdija Combine For 62 Points To Topple Spurs Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "SPURS POSTCAST: Wembanyama Drops 44 but Damian Lillard, Deni Avdija Power NBA Cup Win for Trail Blazers - localmemphis.com",
     "published": "2026-11-26T07:07:00+00:00",
     "summary": "SPURS POSTCAST: Wembanyama Drops 44 but Damian Lillard, Deni Avdija Power NBA Cup Win for Trail Blazers localmemphis.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "NBA Cup: Deni Avdija, Damian Lillard lead Trail Blazers past Spurs - Inquirer.net",
     "published": "2026-11-26T07:07:00+00:00",
     "summary": "NBA Cup: Deni Avdija, Damian Lillard lead Trail Blazers past Spurs Inquirer.net"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija with a monster 33/12/7 game vs Spurs - NBC Sports",
     "published": "2026-11-26T07:03:43+00:00",
     "summary": "Deni Avdija with a monster 33/12/7 game vs Spurs NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija flirts with triple-double Wednesday - FantasyPros",
     "published": "2026-11-26T06:46:16+00:00",
     "summary": "Deni Avdija flirts with triple-double Wednesday FantasyPros"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Highlights From Deni Avdija 33-Point Game - NBA.com",
     "published": "2026-11-26T06:30:20+00:00",
     "summary": "Highlights From Deni Avdija 33-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija Postgame Interview | Portland Trail Blazers 116, San Antonio Spurs 111 | Nov. 25, 2026 - NBA.com",
     "published": "2026-11-26T06:14:16+00:00",
     "summary": "Deni Avdija Postgame Interview | Portland Trail Blazers 116, San Antonio Spurs 111 | Nov. 25, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija goes glass on a clutch 3 for Portland - ESPN",
     "published": "2026-11-26T06:13:24+00:00",
     "summary": "Deni Avdija goes glass on a clutch 3 for Portland ESPN"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija goes glass on a clutch 3 for Portland - ESPN",
     "published": "2026-11-26T06:12:04+00:00",
     "summary": "Deni Avdija goes glass on a clutch 3 for Portland ESPN"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija with 33 points vs. San Antonio Spurs, 11/25/2026 - Yahoo Sports",
     "published": "2026-11-26T05:51:25+00:00",
     "summary": "Deni Avdija with 33 points vs. San Antonio Spurs, 11/25/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija dials from long distance, 11/25/2026 - Yahoo Sports",
     "published": "2026-11-26T05:51:09+00:00",
     "summary": "Deni Avdija dials from long distance, 11/25/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "NBA Basketball: Deni Avdija Scores 33 Points, Portland Defeats San Antonio - Ynetnews",
     "published": "2026-11-26T05:45:44+00:00",
     "summary": "NBA Basketball: Deni Avdija Scores 33 Points, Portland Defeats San Antonio Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija Props, Odds and Key Stats vs. Spurs on Nov. 25 - SSBCrack",
     "published": "2026-11-26T05:12:22+00:00",
     "summary": "Deni Avdija Props, Odds and Key Stats vs. Spurs on Nov. 25 SSBCrack"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Near triple-double and clutch heroics: Deni Avdija takes down Spurs - Israel Hayom",
     "published": "2026-11-26T05:10:00+00:00",
     "summary": "Near triple-double and clutch heroics: Deni Avdija takes down Spurs Israel Hayom"
    }
   ]
  }
 ]
}
</input>