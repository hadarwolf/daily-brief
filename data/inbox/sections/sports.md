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
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Clube do Remo",
     "away": "Grêmio",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Bragantino",
     "away": "Mirassol",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Internacional",
     "away": "Corinthians",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T23:00:00Z",
     "home": "Vitória",
     "away": "Chapecoense",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T23:30:00Z",
     "home": "Botafogo",
     "away": "Vasco da Gama",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T00:30:00Z",
     "home": "Cruzeiro",
     "away": "São Paulo",
     "status": "FINISHED",
     "score": "2-0"
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T22:30:00Z",
     "home": "Santos",
     "away": "Flamengo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T23:00:00Z",
     "home": "Paranaense",
     "away": "Mineiro",
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
     "title": "Rice close to agreeing new Arsenal deal",
     "published": "2026-10-07T22:21:44+00:00",
     "summary": "Declan Rice is close to agreeing a new long-term Arsenal contract, sources have told BBC Sport."
    },
    {
     "ref": "bbc_football#1",
     "title": "Euro Leagues: Ronaldo's fallout with Jorge Jesus & is Zidane making his mark?",
     "published": "2026-10-07T21:49:00+00:00",
     "summary": "Is Ronaldo's behaviour a surprise? And what've we learnt from Zidane's start?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Man Utd and Liverpool eye Truffert - Thursday's gossip",
     "published": "2026-10-07T20:56:06+00:00",
     "summary": "Manchester United and Liverpool eye Adrien Truffert, Tyler Morton is wanted by Newcastle and Martin Odegaard is set to sign a new Arsenal deal."
    },
    {
     "ref": "bbc_football#3",
     "title": "Two icons, a glorious farewell and a potentially bitter ending",
     "published": "2026-10-07T20:47:17+00:00",
     "summary": "As Lionel Messi's international career ends in fond farewell, Cristiano Ronaldo's is at risk of petering out. BBC Sport takes a look at what could be the end of the international career's of two football greats."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Amazing' Kane targets 100 international goals",
     "published": "2026-10-07T20:31:17+00:00",
     "summary": "Striker Harry Kane says he could reach 100 goals for England after equalling his country's appearance record of 125, drawing praise from team-mates Morgan Rogers and Jude Bellingham."
    },
    {
     "ref": "bbc_football#5",
     "title": "Guardiola set to attend Man City's first home game since guilty verdict",
     "published": "2026-10-07T20:14:24+00:00",
     "summary": "Pep Guardiola managed Manchester City for a decade, leaving in the summer, and has backed the club's owners since the verdict."
    },
    {
     "ref": "bbc_football#6",
     "title": "All done deals in September & October 2026",
     "published": "2026-10-07T19:45:58+00:00",
     "summary": "Check out the significant signings and departures in the Premier League, Scottish Premiership, EFL and Women's Super League."
    },
    {
     "ref": "bbc_football#7",
     "title": "McTominay resumes Napoli training after surgery",
     "published": "2026-10-07T19:31:04+00:00",
     "summary": "Scotland midfielder Scott McTominay returns to training at Napoli following his recent heart surgery."
    },
    {
     "ref": "bbc_football#8",
     "title": "McTominay resumes Napoli training after surgery",
     "published": "2026-10-07T19:31:04+00:00",
     "summary": "Scotland midfielder Scott McTominay returns to training at Napoli following his recent heart surgery."
    },
    {
     "ref": "bbc_football#9",
     "title": "Football Daily",
     "published": "2026-10-07T19:30:00+00:00",
     "summary": "John Bennett is joined by Adam Blackmore and Jobi McAnuff to react to the Spygate verdict"
    },
    {
     "ref": "bbc_football#10",
     "title": "Ex-Spurs player Vega set to run for Fifa president",
     "published": "2026-10-07T19:24:19+00:00",
     "summary": "Former Tottenham defender Ramon Vega says he intends to run in next year's Fifa presidential election - becoming the first person to confirm they want to challenge Gianni Infantino."
    },
    {
     "ref": "bbc_football#11",
     "title": "Wales winger Matondo joins Hibernian",
     "published": "2026-10-07T19:11:26+00:00",
     "summary": "Former Rangers winger Rabbi Matondo joins Hibernian on a deal until the end of the season, with the option of a further year."
    },
    {
     "ref": "bbc_football#12",
     "title": "Winger Matondo joins Hibernian for rest of season",
     "published": "2026-10-07T19:11:26+00:00",
     "summary": "Former Rangers winger Rabbi Matondo joins Hibernian on a deal until the end of the season, with the option of a further year."
    },
    {
     "ref": "bbc_football#13",
     "title": "Barry-Murphy and Bellamy 'so similar' - Lawlor",
     "published": "2026-10-07T17:42:30+00:00",
     "summary": "Cardiff boss Brian Barry-Murphy and Wales head coach Craig Bellamy have similar outlooks says Dylan Lawlor."
    },
    {
     "ref": "bbc_football#14",
     "title": "Is it too early to look at Premier League table?",
     "published": "2026-10-07T17:28:33+00:00",
     "summary": "Just five games in, it might seem a bit early to pay much attention to the Premier League table - but it's probably more settled than you think. BBC Sport takes a look at the statistics behind the early season standings."
    },
    {
     "ref": "bbc_football#15",
     "title": "Eckert free to stay as Southampton boss as Spygate ban suspended",
     "published": "2026-10-07T16:11:15+00:00",
     "summary": "Tonda Eckert is free to continue as Southampton manager after being given a suspended ban for his role in Spygate."
    },
    {
     "ref": "bbc_football#16",
     "title": "Do England already have their Kane replacement - or is he yet to emerge?",
     "published": "2026-10-07T16:00:58+00:00",
     "summary": "Harry Kane's record-breaking England career can't go on for ever. But do the Three Lions already have a ready-made replacement?"
    },
    {
     "ref": "bbc_football#17",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-07T15:53:00+00:00",
     "summary": "Ellen White sits down with defender Esme Morgan ahead of England's World Cup qualifiers."
    },
    {
     "ref": "bbc_football#18",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-07T15:53:00+00:00",
     "summary": "Ellen White sits down with defender Esme Morgan ahead of England's World Cup qualifiers."
    },
    {
     "ref": "bbc_football#19",
     "title": "Football Daily",
     "published": "2026-10-07T15:00:00+00:00",
     "summary": "Is refereeing the impossible job?"
    },
    {
     "ref": "bbc_football#20",
     "title": "72+: The EFL Podcast",
     "published": "2026-10-07T14:53:00+00:00",
     "summary": "Jobi McAnuff, Luke Chambers and Tommy Smith chat all things EFL."
    },
    {
     "ref": "bbc_football#21",
     "title": "Former Man City player Silva comes out of retirement",
     "published": "2026-10-07T14:31:53+00:00",
     "summary": "Former Manchester City midfielder David Silva comes out of retirement aged 40 to join Hong Kong Premier League club Sha Tin."
    },
    {
     "ref": "bbc_football#22",
     "title": "Injured Shankland eyes Rangers return in January",
     "published": "2026-10-07T14:24:37+00:00",
     "summary": "Rangers captain Lawrence Shankland aims to be back playing \"well before\" the season run-in."
    },
    {
     "ref": "bbc_football#23",
     "title": "Shankland sure lots of games to come by return",
     "published": "2026-10-07T14:24:37+00:00",
     "summary": "Rangers captain Lawrence Shankland aims to be back playing \"well before\" the season run-in."
    },
    {
     "ref": "bbc_football#24",
     "title": "Are SPFL away ticket prices too expensive? And is price cap on agenda?",
     "published": "2026-10-07T14:03:47+00:00",
     "summary": "Scotland's top flight is the best attended in Europe per head of population. But does the rising cost of going to games put that status at risk?"
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi slams 'strange' World Cup final conspiracy theories and confirms Argentina retirement in emotional farewell - Goal.com",
     "published": "2026-10-08T03:12:25+00:00",
     "summary": "Lionel Messi slams 'strange' World Cup final conspiracy theories and confirms Argentina retirement in emotional farewell Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "'Enjoy life, brother' - Brazil legend Ronaldinho pens emotional tribute to Lionel Messi after Barcelona icon calls time on Argentina career - Goal.com",
     "published": "2026-10-08T01:19:56+00:00",
     "summary": "'Enjoy life, brother' - Brazil legend Ronaldinho pens emotional tribute to Lionel Messi after Barcelona icon calls time on Argentina career Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "After the final dance: Messi opens the vaults of his secret empire - Goal.com",
     "published": "2026-10-08T01:18:36+00:00",
     "summary": "After the final dance: Messi opens the vaults of his secret empire Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Line up Inter Miami CF vs DC United, MLS - Liga USA 2026 - Diario AS",
     "published": "2026-10-07T23:12:56+00:00",
     "summary": "Line up Inter Miami CF vs DC United, MLS - Liga USA 2026 Diario AS"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi plays his final game with Argentina, marking the end of an era - The Washington Post",
     "published": "2026-10-07T23:00:00+00:00",
     "summary": "Messi plays his final game with Argentina, marking the end of an era The Washington Post"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-07T22:50:35+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF vs DC United: previous stats | MLS - Liga USA 2026 - Diario AS",
     "published": "2026-10-07T22:50:23+00:00",
     "summary": "Inter Miami CF vs DC United: previous stats | MLS - Liga USA 2026 Diario AS"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami CF v New York City Odds - FanDuel Sportsbook",
     "published": "2026-10-07T22:32:11+00:00",
     "summary": "Inter Miami CF v New York City Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami already has a multimillion-dollar plan for Messi beyond his 2028 contract - Diario AS",
     "published": "2026-10-07T21:23:59+00:00",
     "summary": "Inter Miami already has a multimillion-dollar plan for Messi beyond his 2028 contract Diario AS"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "An imaginary scenario: Messi and Ronaldo retire in a single match - Goal.com",
     "published": "2026-10-07T20:39:13+00:00",
     "summary": "An imaginary scenario: Messi and Ronaldo retire in a single match Goal.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "What’s next for Messi? What we know about the Argentinian star’s contract with Inter Miami and plans for the f - Diario AS",
     "published": "2026-10-07T20:37:44+00:00",
     "summary": "What’s next for Messi? What we know about the Argentinian star’s contract with Inter Miami and plans for the f Diario AS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Features Announced for Inter Miami CF vs. DC United presented by Audi on Oct. 10 - Inter Miami CF",
     "published": "2026-10-07T20:35:42+00:00",
     "summary": "Features Announced for Inter Miami CF vs. DC United presented by Audi on Oct. 10 Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Andrey Arshavin Explains Why Lionel Messi Deserves to Win 2026 Ballon d’Or - Legit News",
     "published": "2026-10-07T20:26:32+00:00",
     "summary": "Andrey Arshavin Explains Why Lionel Messi Deserves to Win 2026 Ballon d’Or Legit News"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Preview: Inter Miami vs DC United - prediction, team news, lineups - Sports Mole",
     "published": "2026-10-07T20:15:39+00:00",
     "summary": "Preview: Inter Miami vs DC United - prediction, team news, lineups Sports Mole"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami internationals: Messi bows out as nine feature in Sept/Oct window - OneFootball",
     "published": "2026-10-07T20:10:26+00:00",
     "summary": "Inter Miami internationals: Messi bows out as nine feature in Sept/Oct window OneFootball"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Argentina: You gave your all – Ronaldinho sends message to Messi as he retires - Daily Post Nigeria",
     "published": "2026-10-07T19:21:30+00:00",
     "summary": "Argentina: You gave your all – Ronaldinho sends message to Messi as he retires Daily Post Nigeria"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "International Duty Roundup: Recapping the Sept./Oct. Window - Inter Miami CF",
     "published": "2026-10-07T19:00:33+00:00",
     "summary": "International Duty Roundup: Recapping the Sept./Oct. Window Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi's moment: Inter Miami's captain still has work to do - LiveScore",
     "published": "2026-10-07T18:24:30+00:00",
     "summary": "Messi's moment: Inter Miami's captain still has work to do LiveScore"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami vs. DC United: Lineups, Stats, Schedule, and How to Watch - news.bet365.com",
     "published": "2026-10-07T17:47:22+00:00",
     "summary": "Inter Miami vs. DC United: Lineups, Stats, Schedule, and How to Watch news.bet365.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami CF Academy U-13s Gain Valuable Experience at LALIGA FC FUTURES - Inter Miami CF",
     "published": "2026-10-07T16:55:30+00:00",
     "summary": "Inter Miami CF Academy U-13s Gain Valuable Experience at LALIGA FC FUTURES Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi rules out one career path as Inter Miami captain’s stunning post-retirement plan emerges after... - World Soccer Talk",
     "published": "2026-10-07T16:48:04+00:00",
     "summary": "Lionel Messi rules out one career path as Inter Miami captain’s stunning post-retirement plan emerges after... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami Has One Clear Goal After the FIFA Break: Clinch Its MLS Playoff Spot - Pasión Fútbol",
     "published": "2026-10-07T16:45:00+00:00",
     "summary": "Inter Miami Has One Clear Goal After the FIFA Break: Clinch Its MLS Playoff Spot Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Watch Inter Miami CF: 2026 TV Schedule & Streaming Details - CableTV.com",
     "published": "2026-10-07T15:54:00+00:00",
     "summary": "Watch Inter Miami CF: 2026 TV Schedule & Streaming Details CableTV.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Why hasn’t Lionel Messi received a Barcelona testimonial? And could he still be given one? - The New York Times",
     "published": "2026-10-07T15:07:40+00:00",
     "summary": "Why hasn’t Lionel Messi received a Barcelona testimonial? And could he still be given one? The New York Times"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Kily González Gets a Major Boost as Inter Miami Stars Shine During FIFA International Window - Pasión Fútbol",
     "published": "2026-10-07T14:55:00+00:00",
     "summary": "Kily González Gets a Major Boost as Inter Miami Stars Shine During FIFA International Window Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Nets' Ben Saraf: Scores eight off bench - CBS Sports",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Nets' Ben Saraf: Scores eight off bench CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf News: Scores eight off bench - RotoWire",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Ben Saraf News: Scores eight off bench RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Video - What Jump Can Deni Avdija Make This Season? - roundtable.io",
     "published": "2026-10-07T02:40:29+00:00",
     "summary": "Video - What Jump Can Deni Avdija Make This Season? roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "What Jump Can Deni Avdija Make This Season? - Yahoo Sports",
     "published": "2026-10-07T02:40:00+00:00",
     "summary": "What Jump Can Deni Avdija Make This Season? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers - newswest9.com",
     "published": "2026-10-06T03:19:00+00:00",
     "summary": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers newswest9.com"
    }
   ]
  }
 ]
}
</input>