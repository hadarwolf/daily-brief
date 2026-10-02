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
   "yesterday": [],
   "today": [],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-02T23:00:00Z",
     "home": "São Paulo",
     "away": "Santos",
     "status": "TIMED",
     "score": null
    }
   ]
  },
  "standings_top6_plus_favorites": {
   "Premier League": [
    {
     "pos": 1,
     "team": "Man City",
     "played": 5,
     "pts": 15,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 5,
     "pts": 12,
     "gd": 4
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 5,
     "pts": 10,
     "gd": 11
    },
    {
     "pos": 4,
     "team": "Brentford",
     "played": 5,
     "pts": 9,
     "gd": 6
    },
    {
     "pos": 5,
     "team": "Leeds United",
     "played": 5,
     "pts": 9,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Liverpool",
     "played": 5,
     "pts": 9,
     "gd": 3
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 7,
     "pts": 21,
     "gd": 24
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 7,
     "pts": 16,
     "gd": 9
    },
    {
     "pos": 3,
     "team": "Real Betis",
     "played": 7,
     "pts": 16,
     "gd": 2
    },
    {
     "pos": 4,
     "team": "Real Madrid",
     "played": 7,
     "pts": 15,
     "gd": 10
    },
    {
     "pos": 5,
     "team": "Sevilla FC",
     "played": 7,
     "pts": 13,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Alavés",
     "played": 7,
     "pts": 11,
     "gd": 5
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Dortmund",
     "played": 4,
     "pts": 12,
     "gd": 7
    },
    {
     "pos": 2,
     "team": "Bayern",
     "played": 4,
     "pts": 10,
     "gd": 12
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 4,
     "pts": 10,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Augsburg",
     "played": 4,
     "pts": 7,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Leverkusen",
     "played": 4,
     "pts": 7,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Mainz",
     "played": 4,
     "pts": 7,
     "gd": 4
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Roma",
     "played": 5,
     "pts": 13,
     "gd": 11
    },
    {
     "pos": 2,
     "team": "Inter",
     "played": 5,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Lazio",
     "played": 5,
     "pts": 13,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Cagliari",
     "played": 5,
     "pts": 12,
     "gd": 3
    },
    {
     "pos": 5,
     "team": "Milan",
     "played": 5,
     "pts": 11,
     "gd": 6
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 5,
     "pts": 10,
     "gd": 5
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Monaco",
     "played": 5,
     "pts": 13,
     "gd": 5
    },
    {
     "pos": 2,
     "team": "Olympique Lyon",
     "played": 5,
     "pts": 11,
     "gd": 8
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 5,
     "pts": 11,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 5,
     "pts": 10,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Stade Rennais",
     "played": 5,
     "pts": 10,
     "gd": -1
    },
    {
     "pos": 6,
     "team": "PSG",
     "played": 5,
     "pts": 8,
     "gd": 1
    }
   ]
  },
  "favorite_teams": {
   "arsenal": {
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-09-19T14:00:00Z",
      "home": "Brighton Hove",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-10T11:30:00Z",
      "home": "Arsenal",
      "away": "Leeds United",
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
     }
    ]
   },
   "barcelona": {
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-09-19T19:00:00Z",
      "home": "Sevilla FC",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-3"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-10T16:30:00Z",
      "home": "Barça",
      "away": "Getafe",
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
     "kickoff_utc": "2026-09-20T23:00:00",
     "home": "Inter Miami",
     "away": "San Diego FC",
     "score": "2-2"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-10T23:30:00",
     "home": "Inter Miami",
     "away": "DC United",
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
     "kickoff_utc": "2026-10-04T18:45:00",
     "home": "Ireland",
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
     "title": "Man City not 'above the rules', says No 10 after backlash to Burnham remarks",
     "published": "2026-10-02T00:50:49+00:00",
     "summary": "The prime minister said he would be \"really concerned\" if the club's owners sell up after Premier League rule breaches."
    },
    {
     "ref": "bbc_football#1",
     "title": "Bellamy says Wales 'stick' hurt as Norway win lifts mood",
     "published": "2026-10-01T22:56:09+00:00",
     "summary": "Head coach Craig Bellamy says he has been through a \"really difficult\" spell because of criticism aimed in his direction during Wales' winless run."
    },
    {
     "ref": "bbc_football#2",
     "title": "Why Burnham's about-turn on Manchester City matters",
     "published": "2026-10-01T22:22:43+00:00",
     "summary": "The prime minister's comments on Man City were revealing on several levels - and leapt on by many in football, the BBC's political editor writes."
    },
    {
     "ref": "bbc_football#3",
     "title": "Real submit 'substantial' dossier in Barca payments case",
     "published": "2026-10-01T22:00:42+00:00",
     "summary": "Real Madrid have sent Uefa \"evidence of extraordinary gravity\" relating to payments made by Barcelona to a former vice-president of Spain's referees' committee."
    },
    {
     "ref": "bbc_football#4",
     "title": "Highlights: Wales 2-1 Norway",
     "published": "2026-10-01T21:26:07+00:00",
     "summary": "Watch the best of the action as Wales come from behind to beat Norway 2-1 in the Nations League."
    },
    {
     "ref": "bbc_football#5",
     "title": "Man City hold on to claim draw against Real Madrid",
     "published": "2026-10-01T21:11:56+00:00",
     "summary": "Khadija Shaw scores a superb equaliser before Real Madrid have a late goal chalked off as the sides play out an entertaining 1-1 draw at the Joie Stadium."
    },
    {
     "ref": "bbc_football#6",
     "title": "Real Madrid keen on Quansah - Friday's gossip",
     "published": "2026-10-01T19:45:16+00:00",
     "summary": "Real Madrid are keen on Bayer Leverkusen's Jarell Quansah, Liverpool are monitoring Club Tijuana's teenage midfielder Giberto Mora, plus more."
    },
    {
     "ref": "bbc_football#7",
     "title": "Messi completes purchase of second Spanish club",
     "published": "2026-10-01T19:26:49+00:00",
     "summary": "Argentine football great Lionel Messi becomes the owner of Spanish second division club CD Eldense."
    },
    {
     "ref": "bbc_football#8",
     "title": "Man City appeal plan emerges as HMRC urged to examine case findings",
     "published": "2026-10-01T18:21:22+00:00",
     "summary": "The Treasury Committee, which is responsible for overseeing HMRC, has urged the body to scrutinise tax implications of the Manchester City verdict."
    },
    {
     "ref": "bbc_football#9",
     "title": "Jota set for Celtic return after 18-month absence - gossip",
     "published": "2026-10-01T17:30:44+00:00",
     "summary": "Celtic winger set for return after 18-month absence as Dundee look at free agent market."
    },
    {
     "ref": "bbc_football#10",
     "title": "Why is Croatia v England behind closed doors?",
     "published": "2026-10-01T16:59:08+00:00",
     "summary": "BBC Sport's Ask Me Anything team explains why England's Nations League match in Croatia is being played in front of a reduced capacity."
    },
    {
     "ref": "bbc_football#11",
     "title": "Injured O'Reilly withdraws from England squad",
     "published": "2026-10-01T14:36:12+00:00",
     "summary": "Nico O'Reilly withdraws from the England squad for their final two Nations League games of the international break because of injury."
    },
    {
     "ref": "bbc_football#12",
     "title": "Bristol Rovers' Raynor diagnosed with bowel cancer",
     "published": "2026-10-01T14:35:54+00:00",
     "summary": "Bristol Rovers assistant head coach Paul Raynor reveals he has been diagnosed with bowel cancer."
    },
    {
     "ref": "bbc_football#13",
     "title": "How author Stephen King is helping keep Highland League side going",
     "published": "2026-10-01T14:21:25+00:00",
     "summary": "Buckie Thistle thank famous horror writer Stephen King for his \"fantastic\" donation towards a fundraising campaign aimed at securing the future of the club."
    },
    {
     "ref": "bbc_football#14",
     "title": "How author Stephen King is helping keep Highland League side going",
     "published": "2026-10-01T14:21:25+00:00",
     "summary": "Buckie Thistle thank famous horror writer Stephen King for his \"fantastic\" donation towards a fundraising campaign aimed at securing the future of the club."
    },
    {
     "ref": "bbc_football#15",
     "title": "Do clubs get compensation for player injuries on international duty?",
     "published": "2026-10-01T14:01:54+00:00",
     "summary": "BBC Sport's Ask Me Anything team looks into whether clubs get compensated in scenarios where their player gets injured on international duty."
    },
    {
     "ref": "bbc_football#16",
     "title": "Start Gannon-Doak and Bowie, but not McGinn? Key Scotland questions",
     "published": "2026-10-01T13:38:59+00:00",
     "summary": "Scotland head coach Sebastien Pocognoli has decisions to make as he searches for his first win in North Macedonia on Saturday."
    },
    {
     "ref": "bbc_football#17",
     "title": "Space for Gannon-Doak? Does McGinn keep place? Welsh to return? - key questions for Pocognoli",
     "published": "2026-10-01T13:38:59+00:00",
     "summary": "Scotland head coach Sebastien Pocognoli has decisions to make as he searches for his first win in North Macedonia on Saturday."
    },
    {
     "ref": "bbc_football#18",
     "title": "Former Man Utd defender Smalling signs for Porto",
     "published": "2026-10-01T12:33:26+00:00",
     "summary": "Former Manchester United and England defender Chris Smalling signs for Portuguese league leaders Porto."
    },
    {
     "ref": "bbc_football#19",
     "title": "Second Hull City player crashes near training ground",
     "published": "2026-10-01T12:02:20+00:00",
     "summary": "The crash, involving Lucas Gourna-Douath, follows a similar incident involving Sorba Thomas."
    },
    {
     "ref": "bbc_football#20",
     "title": "Troubled Gateshead fail to pay September wages",
     "published": "2026-10-01T11:35:36+00:00",
     "summary": "Gateshead's players and staff do not receive their September wages on time in the same week major funding is withdrawn from the club."
    },
    {
     "ref": "bbc_football#21",
     "title": "Why penalty for Williamson handball was correct call",
     "published": "2026-10-01T11:29:54+00:00",
     "summary": "Arsenal defender Leah Williamson was at the heart of a bizarre incident in their Women's Champions League draw with Paris FC."
    },
    {
     "ref": "bbc_football#22",
     "title": "Why penalty for Williamson handball was correct call",
     "published": "2026-10-01T11:29:54+00:00",
     "summary": "Arsenal defender Leah Williamson was at the heart of a bizarre incident in their Women's Champions League draw with Paris FC."
    },
    {
     "ref": "bbc_football#23",
     "title": "Football Daily",
     "published": "2026-10-01T10:54:00+00:00",
     "summary": "Kelly Somers speaks to Luton Town manager Jack Wilshere"
    },
    {
     "ref": "bbc_football#24",
     "title": "Murray leaves Championship bottom side Morton",
     "published": "2026-10-01T10:33:20+00:00",
     "summary": "Manager Ian Murray leaves Greenock Morton with the club bottom of the Scottish Championship."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-02T02:17:29+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "MLS Inter Miami Crew Soccer - bdtonline.com",
     "published": "2026-10-02T01:59:35+00:00",
     "summary": "MLS Inter Miami Crew Soccer bdtonline.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi scores an incredible free kick from a near-impossible angle - Yahoo Sports",
     "published": "2026-10-02T00:30:00+00:00",
     "summary": "Messi scores an incredible free kick from a near-impossible angle Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-01T23:06:04+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-10-01T21:36:18+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi buys Spanish club in stunning takeover - K24 Digital",
     "published": "2026-10-01T20:21:35+00:00",
     "summary": "Lionel Messi buys Spanish club in stunning takeover K24 Digital"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Friday Morning Footy: 2026 FIFA World Cup Draw, Inter Miami vs. Vancouver Whitecaps MLS Final (12/5) - 247Sports",
     "published": "2026-10-01T20:21:15+00:00",
     "summary": "Friday Morning Footy: 2026 FIFA World Cup Draw, Inter Miami vs. Vancouver Whitecaps MLS Final (12/5) 247Sports"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Become a Sprint Season Ticket Member For a Chance to Win a Signed Messi, Casemiro, De Paul, and Suarez Jersey - Inter Miami CF",
     "published": "2026-10-01T20:05:08+00:00",
     "summary": "Become a Sprint Season Ticket Member For a Chance to Win a Signed Messi, Casemiro, De Paul, and Suarez Jersey Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Messi's takeover of Spanish second-division side Eldense complete - Yahoo Sports",
     "published": "2026-10-01T19:48:36+00:00",
     "summary": "Messi's takeover of Spanish second-division side Eldense complete Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi expands club portfolio with La Liga 2 team confirming ‘new and exciting stage’ - Yahoo Sports",
     "published": "2026-10-01T19:45:25+00:00",
     "summary": "Lionel Messi expands club portfolio with La Liga 2 team confirming ‘new and exciting stage’ Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi confirmed as new owner of Spanish second-tier club Eldense - The New York Times",
     "published": "2026-10-01T19:40:47+00:00",
     "summary": "Lionel Messi confirmed as new owner of Spanish second-tier club Eldense The New York Times"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi: Inter Miami's former Barcelona superstar buys second Spanish club, CD Eldense - BBC",
     "published": "2026-10-01T19:26:49+00:00",
     "summary": "Lionel Messi: Inter Miami's former Barcelona superstar buys second Spanish club, CD Eldense BBC"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Chicago Fire faces Inter Miami at Soldier Field - ivleader.com",
     "published": "2026-10-01T19:14:01+00:00",
     "summary": "Chicago Fire faces Inter Miami at Soldier Field ivleader.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Spain: Lionel Messi Becomes Owner of a Second Division Club - Benin Web TV",
     "published": "2026-10-01T18:50:44+00:00",
     "summary": "Spain: Lionel Messi Becomes Owner of a Second Division Club Benin Web TV"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi officially completes takeover as icon splashes out on second football club - The Mirror",
     "published": "2026-10-01T18:48:00+00:00",
     "summary": "Lionel Messi officially completes takeover as icon splashes out on second football club The Mirror"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi completes takeover of second Spanish club this year - Yahoo Sports",
     "published": "2026-10-01T18:28:02+00:00",
     "summary": "Lionel Messi completes takeover of second Spanish club this year Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Did Óscar Ustari Really Retire? Here’s the Real Scoop! - Soy Futbol",
     "published": "2026-10-01T18:27:13+00:00",
     "summary": "Did Óscar Ustari Really Retire? Here’s the Real Scoop! Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Officially: Messi returns to Spanish football - Goal.com",
     "published": "2026-10-01T18:18:58+00:00",
     "summary": "Officially: Messi returns to Spanish football Goal.com"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi completes purchase of Spanish second-division club Eldense - ESPN",
     "published": "2026-10-01T18:15:00+00:00",
     "summary": "Lionel Messi completes purchase of Spanish second-division club Eldense ESPN"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi buys Spanish side Eldense - 101 Great Goals",
     "published": "2026-10-01T18:12:35+00:00",
     "summary": "Messi buys Spanish side Eldense 101 Great Goals"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi completes takeover of Spanish club as he adds to growing football empire - The Irish Sun",
     "published": "2026-10-01T18:06:06+00:00",
     "summary": "Messi completes takeover of Spanish club as he adds to growing football empire The Irish Sun"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi completes takeover of Spanish club as Argentina legend adds to growing football empire - The Sun",
     "published": "2026-10-01T17:58:00+00:00",
     "summary": "Lionel Messi completes takeover of Spanish club as Argentina legend adds to growing football empire The Sun"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi becomes the majority owner of Spanish club Eldense - Reuters",
     "published": "2026-10-01T17:53:44+00:00",
     "summary": "Messi becomes the majority owner of Spanish club Eldense Reuters"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi says goodbye to Argentina: his final match with the national team - NBC 6 South Florida",
     "published": "2026-10-01T17:44:19+00:00",
     "summary": "Messi says goodbye to Argentina: his final match with the national team NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi becomes owner of Spanish club Eldense - Operativ Məlumat Mərkəzi",
     "published": "2026-10-01T17:40:50+00:00",
     "summary": "Lionel Messi becomes owner of Spanish club Eldense Operativ Məlumat Mərkəzi"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Training Camp Day 3: How’s Scoot Henderson Doing? - Blazer's Edge",
     "published": "2026-10-02T01:24:00+00:00",
     "summary": "Training Camp Day 3: How’s Scoot Henderson Doing? Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - 5newsonline.com",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? 5newsonline.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - wusa9.com",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? wusa9.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - KTVB",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? KTVB"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers - nba.com",
     "published": "2026-10-01T22:21:34+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers nba.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Spike Lee Held Back After Fan Questions Him About Israel-Palestine Conflict at Yankee Stadium - Us Weekly",
     "published": "2026-10-01T18:01:40+00:00",
     "summary": "Spike Lee Held Back After Fan Questions Him About Israel-Palestine Conflict at Yankee Stadium Us Weekly"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Micah Nori Is Not Overthinking The Blazers’ Starting Lineup - Last Word On Sports",
     "published": "2026-10-01T14:25:47+00:00",
     "summary": "Micah Nori Is Not Overthinking The Blazers’ Starting Lineup Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Spike Lee Nearly Got Into Fight With Fan At Game 2 Last Night - AOL.ca",
     "published": "2026-10-01T13:37:43+00:00",
     "summary": "Spike Lee Nearly Got Into Fight With Fan At Game 2 Last Night AOL.ca"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Micah Nori’s first Blazers practice went fine. Then he forgot to end it. - Hoops Wire",
     "published": "2026-09-30T21:24:05+00:00",
     "summary": "Micah Nori’s first Blazers practice went fine. Then he forgot to end it. Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blazers can't ignore the chance to flip Ja Morant this season - Rip City Project",
     "published": "2026-09-30T20:13:43+00:00",
     "summary": "Blazers can't ignore the chance to flip Ja Morant this season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers Have Every Reason to Be Better Than Last Season - roundtable.io",
     "published": "2026-09-30T04:33:20+00:00",
     "summary": "Trail Blazers Have Every Reason to Be Better Than Last Season roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Blazers apparently have decided 50 wins is the goal - Hoops Wire",
     "published": "2026-09-30T02:28:58+00:00",
     "summary": "Blazers apparently have decided 50 wins is the goal Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Ben Saraf Player Full High Lowlights vs HEAT 05 03 2026 NBA REGULAR SEASON Game - YouTube",
     "published": "2026-09-29T21:36:29+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs HEAT 05 03 2026 NBA REGULAR SEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth - Rip City Project",
     "published": "2026-09-29T18:18:21+00:00",
     "summary": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years - OregonLive.com",
     "published": "2026-09-29T18:16:00+00:00",
     "summary": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense - Rip City Project",
     "published": "2026-09-29T17:50:12+00:00",
     "summary": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "OPB’s First Look: The Blazers are back - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T16:26:44+00:00",
     "summary": "OPB’s First Look: The Blazers are back Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears - ClutchPoints",
     "published": "2026-09-29T16:26:22+00:00",
     "summary": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "The Persian leopard named after the NBA star arrives at the Safari - The Jerusalem Post",
     "published": "2026-09-29T07:48:19+00:00",
     "summary": "The Persian leopard named after the NBA star arrives at the Safari The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” - Eurohoops",
     "published": "2026-09-29T06:53:20+00:00",
     "summary": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Mario Hezonja details NBA return: “It was always bothering me” - Eurohoops",
     "published": "2026-09-29T06:15:03+00:00",
     "summary": "Mario Hezonja details NBA return: “It was always bothering me” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” - Eurohoops",
     "published": "2026-09-29T05:59:00+00:00",
     "summary": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” Eurohoops"
    }
   ]
  }
 ]
}
</input>