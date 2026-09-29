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
      "kickoff_utc": "2026-09-16T19:30:00Z",
      "home": "Barça",
      "away": "Santander",
      "status": "FINISHED",
      "score": "7-2"
     },
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
     "kickoff_utc": "2026-09-27T18:45:00",
     "home": "Israel",
     "away": "Ireland",
     "score": "0-3"
    }
   ],
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2026-10-01T18:45:00",
     "home": "Israel",
     "away": "Kosovo",
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
     "title": "Ivezic ready for Hibs debut after virus - gossip",
     "published": "2026-09-29T07:24:42+00:00",
     "summary": "Summer signing Marko Ivezic says he is ready for his Hibernian debut following a virus, while Aidan McGeady is hearing that Kieran McKenna could be Celtic's next manager."
    },
    {
     "ref": "bbc_football#1",
     "title": "Fifa accuses Uefa of 'misinformation campaign'",
     "published": "2026-09-29T07:22:33+00:00",
     "summary": "Uefa's suggestions that Fifa president Gianni Infantino \"violated any law or ethical principle are categorically without merit\" says world football's governing body."
    },
    {
     "ref": "bbc_football#2",
     "title": "Inside Liverpool's increasing global investment in youth",
     "published": "2026-09-29T07:19:52+00:00",
     "summary": "Liverpool are becoming increasingly proactive in their search for global young talent. BBC Sport takes a closer look."
    },
    {
     "ref": "bbc_football#3",
     "title": "How Manzambi became one of Europe's best young talents",
     "published": "2026-09-29T07:06:12+00:00",
     "summary": "Aston Villa's summer signing Johan Manzambi has been nominated for the best young player at the Ballon d'Or ceremony. BBC Sport looks at his rise."
    },
    {
     "ref": "bbc_football#4",
     "title": "Listen: Will Scotland shock the Swiss at Hampden?",
     "published": "2026-09-29T07:00:00+00:00",
     "summary": "Can Pocognoli's Scotland upset World Cup quarter-finalists Switzerland?"
    },
    {
     "ref": "bbc_football#5",
     "title": "O'Reilly to miss Czech Republic game but Konsa in squad",
     "published": "2026-09-29T06:58:53+00:00",
     "summary": "Nico O'Reilly is ruled out of England's Nations League match against the Czech Republic on Tuesday night bu Ezri Konsa is set to be in the squad."
    },
    {
     "ref": "bbc_football#6",
     "title": "Flex your football brain with our daily quizzes",
     "published": "2026-09-29T06:07:51+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "Czech Republic ready for Wembley 30 years after Euro '96",
     "published": "2026-09-29T05:10:25+00:00",
     "summary": "The Czech Republic are returning to Wembley for a Nations League game with England, just over 30 years after their Euro '96 heartbreak there."
    },
    {
     "ref": "bbc_football#8",
     "title": "Football Daily",
     "published": "2026-09-28T23:22:00+00:00",
     "summary": "The Monday Night Club look at the ongoing fallout from the Man City PL charges verdict"
    },
    {
     "ref": "bbc_football#9",
     "title": "O'Neill 'positive' as NI maintain unbeaten start",
     "published": "2026-09-28T23:21:50+00:00",
     "summary": "Michael O'Neill says he is \"positive\" as Northern Ireland maintain their unbeaten start in the Nations League with a goalless draw with Hungary."
    },
    {
     "ref": "bbc_football#10",
     "title": "Man Utd & Arsenal eye Porto's Costa - Tuesday's gossip",
     "published": "2026-09-28T21:10:44+00:00",
     "summary": "Arsenal and Manchester United eye Porto defender Alberto Costa, Manchester City will not let Erling Haaland leave on the cheap if they are relegated, Liverpool retain an interest in Real Madrid midfielder Aurelien Tchouameni, plus more."
    },
    {
     "ref": "bbc_football#11",
     "title": "Hart trusts Man City chair Al Mubarak over ruling",
     "published": "2026-09-28T19:24:40+00:00",
     "summary": "Former Manchester City goalkeeper Joe Hart believes club chairman Khaldoon Al Mubarak's claims they are innocent of breaking the Premier League's financial rules."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man City CEO defiant over Premier League charges",
     "published": "2026-09-28T18:53:30+00:00",
     "summary": "Manchester City chief executive Ferran Soriano issues a defiant message to the executives of other teams about the club being found guilty of a majority of Premier League charges, BBC Sport has been told."
    },
    {
     "ref": "bbc_football#13",
     "title": "Ferguson retains Rangers dream, but Bologna exit never close",
     "published": "2026-09-28T15:27:38+00:00",
     "summary": "Lewis Ferguson reveals \"nothing was ever that close\" on a move away from Bologna this summer amid reports of interest from Rangers, but he does harbour ambitions of a return to his boyhood club."
    },
    {
     "ref": "bbc_football#14",
     "title": "Ferguson retains Rangers dream, but Bologna exit never close",
     "published": "2026-09-28T15:27:38+00:00",
     "summary": "Lewis Ferguson reveals \"nothing was ever that close\" on a move away from Bologna this summer amid reports of interest from Rangers, but he does harbour ambitions of a return to his boyhood club."
    },
    {
     "ref": "bbc_football#15",
     "title": "BBC Women's Football Weekly",
     "published": "2026-09-28T15:04:00+00:00",
     "summary": "Have Chelsea shown themselves as the biggest threat to Manchester City’s title defence?"
    },
    {
     "ref": "bbc_football#16",
     "title": "BBC Women's Football Weekly",
     "published": "2026-09-28T15:04:00+00:00",
     "summary": "Have Chelsea shown themselves as the biggest threat to Manchester City’s title defence?"
    },
    {
     "ref": "bbc_football#17",
     "title": "How does Cas work and why can't Man City appeal to it?",
     "published": "2026-09-28T14:43:05+00:00",
     "summary": "The Court of Arbitration for Sport (CAS) regulates legal disputes across the world of sport"
    },
    {
     "ref": "bbc_football#18",
     "title": "Forest Green allow Savage to talk to another club",
     "published": "2026-09-28T13:37:08+00:00",
     "summary": "Forest Green give manager Robbie Savage permission to speak to another club, amid speculation linking him to Peterborough United."
    },
    {
     "ref": "bbc_football#19",
     "title": "Could Potter be England's next breakthrough star?",
     "published": "2026-09-28T13:33:23+00:00",
     "summary": "With Sarina Wiegman set to name her latest England squad on Tuesday, there is one name everyone is talking about - Lexi Potter. Here is why."
    },
    {
     "ref": "bbc_football#20",
     "title": "Could Potter be England's next breakthrough star?",
     "published": "2026-09-28T13:33:23+00:00",
     "summary": "With Sarina Wiegman set to name her latest England squad on Tuesday, there is one name everyone is talking about - Lexi Potter. Here is why."
    },
    {
     "ref": "bbc_football#21",
     "title": "'I've lost my peace' - Cape Verde hero Vozinha on newfound fame",
     "published": "2026-09-28T12:59:30+00:00",
     "summary": "Cape Verde's World Cup hero Vozinha says he craves the \"peace and tranquillity\" of the life he led before he shot to fame."
    },
    {
     "ref": "bbc_football#22",
     "title": "FAI investigates alleged racist abuse of Idah",
     "published": "2026-09-28T12:17:49+00:00",
     "summary": "The FAI is amassing high-quality footage of the alleged incident with the aim of presenting evidence to Uefa."
    },
    {
     "ref": "bbc_football#23",
     "title": "Bellamy sure Wales belong as Haaland threat looms",
     "published": "2026-09-28T12:08:16+00:00",
     "summary": "Craig Bellamy expects Norway to be a force for years, but insists Wales have earned the right to be in Nations League A."
    },
    {
     "ref": "bbc_football#24",
     "title": "Preston appoint Bradford boss Alexander",
     "published": "2026-09-28T10:31:06+00:00",
     "summary": "Preston North End appoint Bradford City boss Graham Alexander as their new manager."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi Recreates Viral World Cup Stare Before Scoring Wild Free Kick - Complex",
     "published": "2026-09-29T07:04:34+00:00",
     "summary": "Lionel Messi Recreates Viral World Cup Stare Before Scoring Wild Free Kick Complex"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne - Goal.com",
     "published": "2026-09-29T06:23:56+00:00",
     "summary": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports - NDTV Sports",
     "published": "2026-09-29T04:38:39+00:00",
     "summary": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports NDTV Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi Closes in on Marcelinho’s Free-Kick Record - Real Broadcasting Network",
     "published": "2026-09-28T22:46:50+00:00",
     "summary": "Messi Closes in on Marcelinho’s Free-Kick Record Real Broadcasting Network"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Defeat for Inter Miami at the hands of Columbus Crew - prostinternational.com",
     "published": "2026-09-28T19:45:40+00:00",
     "summary": "Defeat for Inter Miami at the hands of Columbus Crew prostinternational.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "GALLERY: Columbus Crew downs Lionel Messi and Inter Miami - Massive Report",
     "published": "2026-09-28T18:36:31+00:00",
     "summary": "GALLERY: Columbus Crew downs Lionel Messi and Inter Miami Massive Report"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MLS Winners and Losers: Lionel Messi brilliance can't save Inter Miami, LAFC sack Marc Dos Santos and never count out the Seattle Sounders - Goal.com",
     "published": "2026-09-28T18:09:58+00:00",
     "summary": "MLS Winners and Losers: Lionel Messi brilliance can't save Inter Miami, LAFC sack Marc Dos Santos and never count out the Seattle Sounders Goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi scores, Miami falls - daily-sun.com",
     "published": "2026-09-28T18:00:00+00:00",
     "summary": "Messi scores, Miami falls daily-sun.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Crew Eke Out 2-1 Victory Over Inter Miami - columbusunderground.com",
     "published": "2026-09-28T17:53:34+00:00",
     "summary": "Crew Eke Out 2-1 Victory Over Inter Miami columbusunderground.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS Round 27 results: Nashville strengthen Supporters’ Shield push and Messi magic not enough for Miami - futbolmundial.com",
     "published": "2026-09-28T17:39:35+00:00",
     "summary": "MLS Round 27 results: Nashville strengthen Supporters’ Shield push and Messi magic not enough for Miami futbolmundial.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi’s Inter Miami called out by Columbus Crew coach: ‘What they do is bad for the game’ - bolavip.com",
     "published": "2026-09-28T16:20:20+00:00",
     "summary": "Lionel Messi’s Inter Miami called out by Columbus Crew coach: ‘What they do is bad for the game’ bolavip.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 - Spectrum News",
     "published": "2026-09-28T13:51:00+00:00",
     "summary": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 Spectrum News"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Columbus Crew fans gather for Messi, Inter Miami match - Spectrum News",
     "published": "2026-09-28T13:37:00+00:00",
     "summary": "Columbus Crew fans gather for Messi, Inter Miami match Spectrum News"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Crew stuns Inter Miami with win in stoppage time - Miami Herald",
     "published": "2026-09-28T12:25:01+00:00",
     "summary": "Crew stuns Inter Miami with win in stoppage time Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi scores... Columbus Crew snatch a dramatic late win against Inter Miami in MLS (Video) - صوت الإمارات",
     "published": "2026-09-28T09:12:26+00:00",
     "summary": "Messi scores... Columbus Crew snatch a dramatic late win against Inter Miami in MLS (Video) صوت الإمارات"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly - Goal.com",
     "published": "2026-09-28T08:16:45+00:00",
     "summary": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "CLBvsMIA 09-27-2026 Match Feed | MLSsoccer.com - MLSsoccer.com",
     "published": "2026-09-28T08:04:35+00:00",
     "summary": "CLBvsMIA 09-27-2026 Match Feed | MLSsoccer.com MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Columbus Crew 2-1 Inter Miami: Messi free-kick not enough to halt winless run - fotmob.com",
     "published": "2026-09-28T07:43:06+00:00",
     "summary": "Columbus Crew 2-1 Inter Miami: Messi free-kick not enough to halt winless run fotmob.com"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi's Inter Miami contract could stretch to 2030 - Yahoo Sports",
     "published": "2026-09-28T07:15:00+00:00",
     "summary": "Messi's Inter Miami contract could stretch to 2030 Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Columbus Crew stun Inter Miami, Messi in 2-1 thriller decided late - dispatch.com",
     "published": "2026-09-28T07:04:05+00:00",
     "summary": "Columbus Crew stun Inter Miami, Messi in 2-1 thriller decided late dispatch.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Why does Lionel Messi’s stunning Inter Miami goal bring him closer to historic soccer records before his Argentina farewell? - beIN SPORTS",
     "published": "2026-09-28T06:52:00+00:00",
     "summary": "Why does Lionel Messi’s stunning Inter Miami goal bring him closer to historic soccer records before his Argentina farewell? beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi scores from near-impossible angle for unreal goal - ESPN",
     "published": "2026-09-28T06:34:58+00:00",
     "summary": "Lionel Messi scores from near-impossible angle for unreal goal ESPN"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 - New Haven Register",
     "published": "2026-09-28T06:08:22+00:00",
     "summary": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 New Haven Register"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi Leads Inter Miami Against Crew In Pivotal MLS Clash - Evrim Ağacı",
     "published": "2026-09-28T06:00:39+00:00",
     "summary": "Messi Leads Inter Miami Against Crew In Pivotal MLS Clash Evrim Ağacı"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi scores on stunning free kick before Argentina farewell, but Miami slips to defeat - The New York Times",
     "published": "2026-09-28T05:05:27+00:00",
     "summary": "Messi scores on stunning free kick before Argentina farewell, but Miami slips to defeat The New York Times"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "The Persian leopard named after the NBA star arrives at the Safari - jpost.com",
     "published": "2026-09-29T07:48:19+00:00",
     "summary": "The Persian leopard named after the NBA star arrives at the Safari jpost.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Mario Hezonja details NBA return: “It was always bothering me” - Eurohoops",
     "published": "2026-09-29T06:15:03+00:00",
     "summary": "Mario Hezonja details NBA return: “It was always bothering me” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” - Eurohoops",
     "published": "2026-09-29T05:59:00+00:00",
     "summary": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija | 2026‑27 Media Day - nba.com",
     "published": "2026-09-29T01:15:46+00:00",
     "summary": "Deni Avdija | 2026‑27 Media Day nba.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Blazers optimistic that roster balance will ‘work itself out’ as season looms - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T00:26:05+00:00",
     "summary": "Blazers optimistic that roster balance will ‘work itself out’ as season looms Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day - Sports Illustrated",
     "published": "2026-09-29T00:00:00+00:00",
     "summary": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers need to start treating Deni Avdija like the face of the franchise - Rip City Project",
     "published": "2026-09-28T23:53:48+00:00",
     "summary": "Blazers need to start treating Deni Avdija like the face of the franchise Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija (back) ’99.9 percent’ going into camp - NBC Sports",
     "published": "2026-09-28T22:07:14+00:00",
     "summary": "Deni Avdija (back) ’99.9 percent’ going into camp NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Nets Media Day Basketball - Idaho State Journal",
     "published": "2026-09-28T21:45:25+00:00",
     "summary": "Nets Media Day Basketball Idaho State Journal"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers Media Day: Deni Avdija Says Back is OK - Blazer's Edge",
     "published": "2026-09-28T18:40:37+00:00",
     "summary": "Trail Blazers Media Day: Deni Avdija Says Back is OK Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija on contract extension talks and future: \"I … - Yahoo Sports",
     "published": "2026-09-28T18:39:57+00:00",
     "summary": "Deni Avdija on contract extension talks and future: \"I … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija on ownership/arena drama: \"I love the city … - Yahoo Sports",
     "published": "2026-09-28T18:13:55+00:00",
     "summary": "Deni Avdija on ownership/arena drama: \"I love the city … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija | Portland Trail Blazers Media Day interviews - KGW",
     "published": "2026-09-28T18:13:00+00:00",
     "summary": "Deni Avdija | Portland Trail Blazers Media Day interviews KGW"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija says he's 99.9% recovered from back injuries - Yahoo Sports",
     "published": "2026-09-28T18:09:59+00:00",
     "summary": "Deni Avdija says he's 99.9% recovered from back injuries Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Damian Lillard: \"If I'm advancing the ball and I'm … - Yahoo Sports",
     "published": "2026-09-28T17:02:56+00:00",
     "summary": "Damian Lillard: \"If I'm advancing the ball and I'm … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari - Ynetnews",
     "published": "2026-09-28T10:02:13+00:00",
     "summary": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Safari names new Persian leopard Deni after NBA's Avdija - JFeed",
     "published": "2026-09-28T09:35:00+00:00",
     "summary": "Safari names new Persian leopard Deni after NBA's Avdija JFeed"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers Announce 2026-27 Training Camp Roster - NBA.com",
     "published": "2026-09-27T22:06:00+00:00",
     "summary": "Trail Blazers Announce 2026-27 Training Camp Roster NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Bulls aquire Buddy Hield from Hornets in late-offseason twist - New York Post",
     "published": "2026-09-27T01:40:00+00:00",
     "summary": "Bulls aquire Buddy Hield from Hornets in late-offseason twist New York Post"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "What to Expect From Blazers' Deni Avdija in 2026-2027 - Sports Illustrated",
     "published": "2026-09-26T19:00:00+00:00",
     "summary": "What to Expect From Blazers' Deni Avdija in 2026-2027 Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deciding The Number One Option For The Blazers - Yahoo Sports",
     "published": "2026-09-26T13:09:00+00:00",
     "summary": "Deciding The Number One Option For The Blazers Yahoo Sports"
    }
   ]
  }
 ]
}
</input>