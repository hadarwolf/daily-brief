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
   "tomorrow": []
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
    "recent": [],
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
    "recent": [],
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
     "title": "The small African nation ready for Messi's big night",
     "published": "2026-10-06T07:50:34+00:00",
     "summary": "Benin are about to have their own moment in the limelight as they visit Argentina for Lionel Messi's final game."
    },
    {
     "ref": "bbc_football#1",
     "title": "Donley keen to add goals after encouraging NI run",
     "published": "2026-10-06T07:01:03+00:00",
     "summary": "After a four-game window with plenty of positives for Northern Ireland, there was perhaps just one lingering concern - their ability to score goals consistently."
    },
    {
     "ref": "bbc_football#2",
     "title": "Podcast: Time for first Hampden win for Pocognoli's Scotland?",
     "published": "2026-10-06T07:00:00+00:00",
     "summary": "Can Scotland build on victory in Skopje and beat Slovenia at Hampden?"
    },
    {
     "ref": "bbc_football#3",
     "title": "South Korea captain apologises for gloating over military service exemption",
     "published": "2026-10-06T06:43:45+00:00",
     "summary": "Lee Gi-hyuk apologises for gloating about avoiding South Korea's mandatory military service by captaining his country to the football gold medal at the Asian Games."
    },
    {
     "ref": "bbc_football#4",
     "title": "Aston Villa remain keen on Raskin - gossip",
     "published": "2026-10-06T06:32:25+00:00",
     "summary": "Aston Villa remain keen on Rangers midfielder, Celtic set for tactical switch and Hearts teens to challenge for first-team places."
    },
    {
     "ref": "bbc_football#5",
     "title": "Quiz: Name England's all-time leading appearance makers",
     "published": "2026-10-06T06:23:08+00:00",
     "summary": "Harry Kane will become England men's joint all-time leading appearance maker if he plays against Czech Republic on Tuesday."
    },
    {
     "ref": "bbc_football#6",
     "title": "Born into Celtic, made at Motherwell, Welsh comes of age with Scotland",
     "published": "2026-10-06T06:18:52+00:00",
     "summary": "It takes talent, resilience and good fortune in finding managers who believe in you, but dreams can come true. Stephen Welsh is living proof of it, writes Tom English."
    },
    {
     "ref": "bbc_football#7",
     "title": "Born into Celtic, made at Motherwell, Welsh comes of age with Scotland",
     "published": "2026-10-06T06:18:52+00:00",
     "summary": "It takes talent, resilience and good fortune in finding managers who believe in you, but dreams can come true. Stephen Welsh is living proof of it, writes Tom English."
    },
    {
     "ref": "bbc_football#8",
     "title": "Who am I? Guess Premier League star No 78",
     "published": "2026-10-06T05:50:25+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#9",
     "title": "Owner, businessman & player: Messi has big plans as a golden era ends",
     "published": "2026-10-06T05:39:49+00:00",
     "summary": "Lionel Messi's Argentina career will end in a friendly against Benin. BBC Sport looks at what next for the 39-year-old?"
    },
    {
     "ref": "bbc_football#10",
     "title": "Wales focus on Albania as Grainger reunion looms",
     "published": "2026-10-06T04:56:59+00:00",
     "summary": "Wales face Albania in the Women's World Cup play-offs this week knowing a challenging reunion with Gemma Grainger may well be the prize on offer."
    },
    {
     "ref": "bbc_football#11",
     "title": "Wales focus on Albania as Grainger reunion looms",
     "published": "2026-10-06T04:56:59+00:00",
     "summary": "Wales face Albania in the Women's World Cup play-offs this week knowing a challenging reunion with Gemma Grainger may well be the prize on offer."
    },
    {
     "ref": "bbc_football#12",
     "title": "NI make huge strides despite Georgia frustration",
     "published": "2026-10-05T23:30:24+00:00",
     "summary": "With eight points from four games, Northern Ireland show real progress through what manager Michael O'Neill calls \"one of the most enjoyable windows\" he has had in international football."
    },
    {
     "ref": "bbc_football#13",
     "title": "Highlights: Northern Ireland frustrated by Georgia",
     "published": "2026-10-05T21:56:05+00:00",
     "summary": "Watch highlights as Northern Ireland end the extended window with a 0-0 Nations League draw against Georgia at Windsor Park."
    },
    {
     "ref": "bbc_football#14",
     "title": "Humble Gilmour happy with new role as 50th cap beckons",
     "published": "2026-10-05T21:28:25+00:00",
     "summary": "Billy Gilmour is excited by the prospect of earning a 50th Scotland cap after a key role in Sebastien Pocognoli's first win as national head coach."
    },
    {
     "ref": "bbc_football#15",
     "title": "Humble Gilmour happy with new role as 50th cap beckons",
     "published": "2026-10-05T21:28:25+00:00",
     "summary": "Billy Gilmour is excited by the prospect of earning a 50th Scotland cap after a key role in Sebastien Pocognoli's first win as national head coach."
    },
    {
     "ref": "bbc_football#16",
     "title": "Juventus & Atletico Madrid eye Madueke - Tuesday's gossip",
     "published": "2026-10-05T20:38:51+00:00",
     "summary": "Arsenal forward Noni Madueke has suitors in Spain and Italy, five Premier League clubs are interested in Barcelona defender Jules Kounde, England captain Harry Kane is close to signing a new deal at Bayern Munich, plus more."
    },
    {
     "ref": "bbc_football#17",
     "title": "Monday Night Club: England, Alex Scott injury & Robbie Savage on his new job",
     "published": "2026-10-05T20:31:00+00:00",
     "summary": "What are the benefits of players going abroad to play their club football?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Gabriel in Man Utd team photo but no hint of reconciliation",
     "published": "2026-10-05T19:13:15+00:00",
     "summary": "As he prepares to celebrate his 16th birthday, the rift between Manchester United and JJ Gabriel shows no sign of being healed."
    },
    {
     "ref": "bbc_football#19",
     "title": "England's greatest international? Kane is now a serious contender",
     "published": "2026-10-05T19:05:52+00:00",
     "summary": "With Harry Kane set to equal Peter Shilton's all-time England appearance record, where does he rank among England greats?"
    },
    {
     "ref": "bbc_football#20",
     "title": "Ex-England player Carroll names attacker as TV dance coach",
     "published": "2026-10-05T17:33:38+00:00",
     "summary": "The former England striker tells the Sun he was sexually assaulted by former Fame Academy dance instructor Kevin Adams in 2021."
    },
    {
     "ref": "bbc_football#21",
     "title": "Jesus fires back over Ronaldo question",
     "published": "2026-10-05T15:24:54+00:00",
     "summary": "Portugal manager Jorge Jesus fires back at a question from the media over his handling of Cristiano Ronaldo after the veteran forward left the squad in a row over playing time."
    },
    {
     "ref": "bbc_football#22",
     "title": "Player welfare, injury worries & boredom - has extended break worked?",
     "published": "2026-10-05T14:54:39+00:00",
     "summary": "The extended international break was brought in with player welfare in mind, but has it been a success?"
    },
    {
     "ref": "bbc_football#23",
     "title": "Pickford 'almost caused crash' with careless driving",
     "published": "2026-10-05T14:42:28+00:00",
     "summary": "The goalkeeper was pulled over by police after ignoring a give way sign, forcing two cars to brake."
    },
    {
     "ref": "bbc_football#24",
     "title": "What we learned from Wales' Nations League window",
     "published": "2026-10-05T13:37:42+00:00",
     "summary": "On the back of a demanding four-game international window, BBC Sport Wales assesses the key talking points from Wales' Nations League A campaign so far."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-06T08:33:23+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "After the final dance: Messi opens the vaults of his secret empire - goal.com",
     "published": "2026-10-06T08:09:17+00:00",
     "summary": "After the final dance: Messi opens the vaults of his secret empire goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "'Special moments that I know I'm going to miss' - Lionel Messi prepares for emotional Argentina swansong - goal.com",
     "published": "2026-10-06T07:04:11+00:00",
     "summary": "'Special moments that I know I'm going to miss' - Lionel Messi prepares for emotional Argentina swansong goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi trails Cristiano Ronaldo by $150 million - Gulf News",
     "published": "2026-10-06T06:02:26+00:00",
     "summary": "Lionel Messi trails Cristiano Ronaldo by $150 million Gulf News"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Footballer Messi to play final match for Argentina against Benin — BBC Sport - UA.NEWS",
     "published": "2026-10-06T06:01:42+00:00",
     "summary": "Footballer Messi to play final match for Argentina against Benin — BBC Sport UA.NEWS"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Is Lionel Messi retiring from Inter Miami following his Argentina departure? - World Soccer Talk",
     "published": "2026-10-05T23:47:36+00:00",
     "summary": "Is Lionel Messi retiring from Inter Miami following his Argentina departure? World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF to Host Open Training for Season Ticket Members at Nu Stadium on Wednesday, October 21 - Football Addict",
     "published": "2026-10-05T23:07:27+00:00",
     "summary": "Inter Miami CF to Host Open Training for Season Ticket Members at Nu Stadium on Wednesday, October 21 Football Addict"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-10-05T21:26:51+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "The six ways Lionel Messi has revolutionized U.S. soccer — The Soccer Weekender - The New York Times",
     "published": "2026-10-05T21:22:05+00:00",
     "summary": "The six ways Lionel Messi has revolutionized U.S. soccer — The Soccer Weekender The New York Times"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami CF to Host Open Training for Season Ticket Members at Nu Stadium on Wednesday, Oct. 21 - Inter Miami CF",
     "published": "2026-10-05T20:59:58+00:00",
     "summary": "Inter Miami CF to Host Open Training for Season Ticket Members at Nu Stadium on Wednesday, Oct. 21 Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Why Lionel Messi's Argentina farewell might not be the only soccer goodbye this year involving Inter Miami star - Yahoo Sports",
     "published": "2026-10-05T19:22:38+00:00",
     "summary": "Why Lionel Messi's Argentina farewell might not be the only soccer goodbye this year involving Inter Miami star Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "“Don't mark Messi”: a Benin defender's unusual \"plan\" to stop the No. 10 - MARCA",
     "published": "2026-10-05T19:18:23+00:00",
     "summary": "“Don't mark Messi”: a Benin defender's unusual \"plan\" to stop the No. 10 MARCA"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Revolution launch ‘Big Match Packages” on sale now - revolutionsoccer.net",
     "published": "2026-10-05T19:08:35+00:00",
     "summary": "Revolution launch ‘Big Match Packages” on sale now revolutionsoccer.net"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami Faces Uncertainty Over Ian Fray Ahead of D.C. United Clash - Pasión Fútbol",
     "published": "2026-10-05T18:05:19+00:00",
     "summary": "Inter Miami Faces Uncertainty Over Ian Fray Ahead of D.C. United Clash Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami Faces a Midfield Dilemma as Kily González Loses Morales to Suspension - Pasión Fútbol",
     "published": "2026-10-05T17:26:55+00:00",
     "summary": "Inter Miami Faces a Midfield Dilemma as Kily González Loses Morales to Suspension Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Matías Galarza Returns to Inter Miami After Paraguay Call-Up With Starting Role in Sight - Pasión Fútbol",
     "published": "2026-10-05T16:54:40+00:00",
     "summary": "Matías Galarza Returns to Inter Miami After Paraguay Call-Up With Starting Role in Sight Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "argentina vs benin - latestly.com",
     "published": "2026-10-05T15:03:56+00:00",
     "summary": "argentina vs benin latestly.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi farewell: Argentina superstar still one of the best as he preps for final national team match - CBS Sports",
     "published": "2026-10-05T14:43:47+00:00",
     "summary": "Lionel Messi farewell: Argentina superstar still one of the best as he preps for final national team match CBS Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami vs DC United Preview & Prediction | 2026 MLS - The Stats Zone",
     "published": "2026-10-05T13:10:00+00:00",
     "summary": "Inter Miami vs DC United Preview & Prediction | 2026 MLS The Stats Zone"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "What to know for Messi's final Argentina game: Opponent, how to watch and more - NBC 6 South Florida",
     "published": "2026-10-05T12:24:14+00:00",
     "summary": "What to know for Messi's final Argentina game: Opponent, how to watch and more NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Marriott Bonvoy Partners with Inter Miami CF - safariindia.com",
     "published": "2026-10-05T09:54:07+00:00",
     "summary": "Marriott Bonvoy Partners with Inter Miami CF safariindia.com"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Clean sheets - Inter Miami CF II stats for MLS Next Pro 2025 - FotMob",
     "published": "2026-10-05T07:45:04+00:00",
     "summary": "Clean sheets - Inter Miami CF II stats for MLS Next Pro 2025 FotMob"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "MLS Injuries & Suspensions - Sportsgambler",
     "published": "2026-10-05T04:43:54+00:00",
     "summary": "MLS Injuries & Suspensions Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi joins Argentina camp ahead of historic international farewell against Benin - goal.com",
     "published": "2026-10-05T04:30:08+00:00",
     "summary": "Lionel Messi joins Argentina camp ahead of historic international farewell against Benin goal.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi to play one final match before retirement in epic Argentina send-off - tag24.com",
     "published": "2026-10-05T04:29:21+00:00",
     "summary": "Messi to play one final match before retirement in epic Argentina send-off tag24.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers - newswest9.com",
     "published": "2026-10-06T03:19:00+00:00",
     "summary": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers newswest9.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man - Rip City Project",
     "published": "2026-10-04T21:07:36+00:00",
     "summary": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership - roundtable.io",
     "published": "2026-10-04T01:29:32+00:00",
     "summary": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership roundtable.io"
    }
   ]
  }
 ]
}
</input>