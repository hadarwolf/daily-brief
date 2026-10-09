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
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T00:30:00Z",
     "home": "Cruzeiro",
     "away": "São Paulo",
     "status": "FINISHED",
     "score": "2-0"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T22:30:00Z",
     "home": "Santos",
     "away": "Flamengo",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-08T23:00:00Z",
     "home": "Paranaense",
     "away": "Mineiro",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-09T00:30:00Z",
     "home": "Palmeiras",
     "away": "Bahia",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-09T00:30:00Z",
     "home": "Fluminense",
     "away": "Coritiba",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-09T17:45:00Z",
     "home": "Moreirense",
     "away": "Gil Vicente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-09T18:00:00Z",
     "home": "PSV",
     "away": "Heerenveen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-09T18:30:00Z",
     "home": "Dortmund",
     "away": "Bremen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-09T18:45:00Z",
     "home": "RC Lens",
     "away": "Olympique Lyon",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-09T19:00:00Z",
     "home": "Málaga",
     "away": "Espanyol",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-09T19:00:00Z",
     "home": "West Ham",
     "away": "QPR",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-09T19:15:00Z",
     "home": "Braga",
     "away": "Sporting CP",
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
     "title": "Spurs' Simons enrols at iconic university Harvard",
     "published": "2026-10-08T22:21:25+00:00",
     "summary": "Tottenham's Xavi Simons enrols at prestigious American university Harvard as he continues his recovery from a long-term injury."
    },
    {
     "ref": "bbc_football#1",
     "title": "Real seek McTominay move - Friday's gossip",
     "published": "2026-10-08T21:10:23+00:00",
     "summary": "Real Madrid are interested in former Manchester United midfielder Scott McTominay and France forward Michael Olise, while Chelsea are keen on Frenkie de Jong."
    },
    {
     "ref": "bbc_football#2",
     "title": "Real seek McTominay move - Friday's gossip",
     "published": "2026-10-08T21:10:23+00:00",
     "summary": "Real Madrid are interested in former Manchester United midfielder Scott McTominay and France forward Michael Olise, while Chelsea are keen on Frenkie de Jong."
    },
    {
     "ref": "bbc_football#3",
     "title": "Sutton's predictions v Starsailor frontman James Walsh",
     "published": "2026-10-08T20:46:40+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on Starsailor frontman James Walsh, plus the BBC readers and AI with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#4",
     "title": "Maresca says 'feeling is fantastic' among Man City squad",
     "published": "2026-10-08T20:40:15+00:00",
     "summary": "Enzo Maresca says his players \"don't care too much about the noise\" surrounding Manchester City over the 115 Premier League charges."
    },
    {
     "ref": "bbc_football#5",
     "title": "5 Live Sport: All About...",
     "published": "2026-10-08T20:31:00+00:00",
     "summary": "Katie Smith is joined by Wake Up to Money’s Sean Farrington"
    },
    {
     "ref": "bbc_football#6",
     "title": "Infantino given re-election boost as Montagliani seeks final Concacaf term",
     "published": "2026-10-08T20:09:46+00:00",
     "summary": "Gianni Infantino's chances of being re-elected as Fifa president appear to have been given a major boost as Victor Montagliani wants to remain as Concacaf chief."
    },
    {
     "ref": "bbc_football#7",
     "title": "Ticket rises and more TV packages - why is price of sport increasing?",
     "published": "2026-10-08T18:57:13+00:00",
     "summary": "The price of sports tickets and TV subscriptions are on the rise - so what is behind the increases and how are they justified?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Suspended fine for Xhaka over Covid-19 certificate",
     "published": "2026-10-08T17:12:27+00:00",
     "summary": "Sunderland captain Granit Xhaka says he has received a suspended fine of 150,000 Swiss francs (£136,000) for obtaining a forged Covid-19 vaccination certificate."
    },
    {
     "ref": "bbc_football#9",
     "title": "'It's changed my life' - Eckert on Spygate scandal",
     "published": "2026-10-08T16:13:02+00:00",
     "summary": "Southampton head coach Tonda Eckert says the Spygate scandal is an experience that has changed his life."
    },
    {
     "ref": "bbc_football#10",
     "title": "Wales target clean sheet in World Cup play-off first leg",
     "published": "2026-10-08T14:38:30+00:00",
     "summary": "Rhian Wilkinson makes a clean sheet the first target for Wales in Friday's Women's World Cup play-off semi-final first leg against Albania."
    },
    {
     "ref": "bbc_football#11",
     "title": "Everton's Sherif fined for breaching betting rules",
     "published": "2026-10-08T14:24:34+00:00",
     "summary": "The Football Association fines Everton forward Martin Sherif £5,000 for breaching its betting rules over a 15-month period."
    },
    {
     "ref": "bbc_football#12",
     "title": "Rangers boss McInnes 'not a fan' of extended break",
     "published": "2026-10-08T11:48:50+00:00",
     "summary": "Rangers manager Derek McInnes says he is \"not a fan\" of the extended international break which he considers \"too long\"."
    },
    {
     "ref": "bbc_football#13",
     "title": "'It's longer than lot of tournaments' - McInnes against extended break",
     "published": "2026-10-08T11:48:50+00:00",
     "summary": "Rangers manager Derek McInnes says he is \"not a fan\" of the extended international break which he considers \"too long\"."
    },
    {
     "ref": "bbc_football#14",
     "title": "How a folk band, football club and Fifa 11 came together for unlikely anthem",
     "published": "2026-10-08T10:51:47+00:00",
     "summary": "After playing a bit of Fifa 11, Kingfishr leader singer Eddie Keogh posted a song in tribute to English League One club Wycombe Wanderers."
    },
    {
     "ref": "bbc_football#15",
     "title": "'Nothing impossible' for NI on long road to Brazil",
     "published": "2026-10-08T10:37:42+00:00",
     "summary": "Northern Ireland defenders Nat Johnson and Rebecca Holloway tell BBC Sport NI of their dream of reaching a first ever Women's World Cup as NI go through the play-offs."
    },
    {
     "ref": "bbc_football#16",
     "title": "'Nothing impossible' for NI on long road to Brazil",
     "published": "2026-10-08T10:37:42+00:00",
     "summary": "Northern Ireland defenders Nat Johnson and Rebecca Holloway tell BBC Sport NI of their dream of reaching a first ever Women's World Cup as NI go through the play-offs."
    },
    {
     "ref": "bbc_football#17",
     "title": "How Brighton attract and develop the best young players ahead of their rivals",
     "published": "2026-10-08T10:37:14+00:00",
     "summary": "Brighton sporting director Mike Cave discusses Brighton's transfer policy and how the club signs and nurtures the best young talent in the game."
    },
    {
     "ref": "bbc_football#18",
     "title": "Afcon final to play out in court - when will Morocco or Senegal be crowned champions?",
     "published": "2026-10-08T09:53:33+00:00",
     "summary": "The Court of Arbitration for Sport is set to rule on the decision to strip Senegal of their Afcon 2025 title. But fans should not expect an immediate verdict."
    },
    {
     "ref": "bbc_football#19",
     "title": "Clubs fear political interference in Man City appeal",
     "published": "2026-10-08T09:16:56+00:00",
     "summary": "Premier League clubs are \"concerned\" about political interference in Manchester City's appeal after Prime Minister Andy Burnham's comments."
    },
    {
     "ref": "bbc_football#20",
     "title": "Toone comes into England squad as Bronze withdraws",
     "published": "2026-10-08T09:04:00+00:00",
     "summary": "Manchester United midfielder Ella Toone receives a late England call-up for this month's World Cup play-off games against Greece."
    },
    {
     "ref": "bbc_football#21",
     "title": "Toone comes into England squad as Bronze withdraws",
     "published": "2026-10-08T09:04:00+00:00",
     "summary": "Manchester United midfielder Ella Toone receives a late England call-up for this month's World Cup play-off games against Greece."
    },
    {
     "ref": "bbc_football#22",
     "title": "'Are you accusing me of receiving money?' - what Guardiola has said about charges",
     "published": "2026-10-08T08:20:13+00:00",
     "summary": "BBC Sport examines Pep Guardiola's comments about the Manchester City financial rule-breaking case during his time managing the club."
    },
    {
     "ref": "bbc_football#23",
     "title": "SPFL pays out close to £50m in record year",
     "published": "2026-10-08T08:00:06+00:00",
     "summary": "The Scottish Professional Football League (SPFL) pays clubs a record £49.6m in the past year."
    },
    {
     "ref": "bbc_football#24",
     "title": "Working with Iraola, car clauses and hope - the Liverpool academy approach",
     "published": "2026-10-08T07:04:50+00:00",
     "summary": "Liverpool academy director Alex Inglethorpe talks to BBC Sport about the value and future of Liverpool's academy."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi’s Mental Reset After Saying Goodbye to Argentina - beIN SPORTS",
     "published": "2026-10-09T02:41:00+00:00",
     "summary": "Lionel Messi’s Mental Reset After Saying Goodbye to Argentina beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "'Enjoy life, brother' - Brazil legend Ronaldinho pens emotional tribute to Lionel Messi after Barcelona icon calls time on Argentina career - Goal.com",
     "published": "2026-10-09T01:40:06+00:00",
     "summary": "'Enjoy life, brother' - Brazil legend Ronaldinho pens emotional tribute to Lionel Messi after Barcelona icon calls time on Argentina career Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Fire announce extension for F Maren Haile-Selassie - Reuters",
     "published": "2026-10-09T00:08:00+00:00",
     "summary": "Fire announce extension for F Maren Haile-Selassie Reuters"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi slams 'strange' World Cup final conspiracy theories and confirms Argentina retirement in emotional farewell - Goal.com",
     "published": "2026-10-08T23:09:27+00:00",
     "summary": "Lionel Messi slams 'strange' World Cup final conspiracy theories and confirms Argentina retirement in emotional farewell Goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi returns to Inter Miami training after Argentina farewell - OneFootball",
     "published": "2026-10-08T22:15:47+00:00",
     "summary": "Lionel Messi returns to Inter Miami training after Argentina farewell OneFootball"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami - Le commissaire de la MLS pense que Messi aura un rôle au club après sa retraite - OneFootball",
     "published": "2026-10-08T22:14:44+00:00",
     "summary": "Inter Miami - Le commissaire de la MLS pense que Messi aura un rôle au club après sa retraite OneFootball"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "MLS commissioner Don Garber urges Harry Kane to follow Lionel Messi to America as 'dream' transfer target - Goal.com",
     "published": "2026-10-08T20:56:13+00:00",
     "summary": "MLS commissioner Don Garber urges Harry Kane to follow Lionel Messi to America as 'dream' transfer target Goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami vs DC United Prediction and Betting Tips | October 10th 2026 - Sportskeeda",
     "published": "2026-10-08T20:17:00+00:00",
     "summary": "Inter Miami vs DC United Prediction and Betting Tips | October 10th 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami CF (@InterMiamiCF) on X - Howl.Link",
     "published": "2026-10-08T20:10:19+00:00",
     "summary": "Inter Miami CF (@InterMiamiCF) on X Howl.Link"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami vs DC United Preview – prediction, team news, lineups | MLS 2026 - Khel Now",
     "published": "2026-10-08T20:00:00+00:00",
     "summary": "Inter Miami vs DC United Preview – prediction, team news, lineups | MLS 2026 Khel Now"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS eyes European superstar to follow in the footsteps of Messi and Beckham - Diario AS",
     "published": "2026-10-08T19:54:54+00:00",
     "summary": "MLS eyes European superstar to follow in the footsteps of Messi and Beckham Diario AS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami CF at Nashville SC - MLS News - Oct 18, 2025 - USA Today",
     "published": "2026-10-08T19:22:15+00:00",
     "summary": "Inter Miami CF at Nashville SC - MLS News - Oct 18, 2025 USA Today"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Brek Shea returned to Inter Miami after Lionel Messi signed and immediately saw what had changed - Diario AS",
     "published": "2026-10-08T19:03:02+00:00",
     "summary": "Brek Shea returned to Inter Miami after Lionel Messi signed and immediately saw what had changed Diario AS"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Kily González Sees Inter Miami's Midfield as the Key to Beating D.C. United in Crucial MLS Clash - Pasión Fútbol",
     "published": "2026-10-08T18:55:00+00:00",
     "summary": "Kily González Sees Inter Miami's Midfield as the Key to Beating D.C. United in Crucial MLS Clash Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Is Lionel Messi retiring from Inter Miami after his Argentina farewell? - MSN",
     "published": "2026-10-08T18:38:34+00:00",
     "summary": "Is Lionel Messi retiring from Inter Miami after his Argentina farewell? MSN"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami vs DC United Predictions, Betting Tips & Live Stream - More Goals on the Menu in MLS - FreeTips",
     "published": "2026-10-08T18:22:30+00:00",
     "summary": "Inter Miami vs DC United Predictions, Betting Tips & Live Stream - More Goals on the Menu in MLS FreeTips"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "MLS commissioner believes Messi will have Inter Miami role after retirement - OneFootball",
     "published": "2026-10-08T18:10:53+00:00",
     "summary": "MLS commissioner believes Messi will have Inter Miami role after retirement OneFootball"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Value for money? MLS warned off Neymar’s planned ‘MSN’ reunion with Lionel Messi & Luis Suarez at Inter Miami as ‘Father Time’ catches up with Brazilian superstar - Goal.com",
     "published": "2026-10-08T17:57:09+00:00",
     "summary": "Value for money? MLS warned off Neymar’s planned ‘MSN’ reunion with Lionel Messi & Luis Suarez at Inter Miami as ‘Father Time’ catches up with Brazilian superstar Goal.com"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Will Lionel Messi play against DC United in the MLS this week? - Diario AS",
     "published": "2026-10-08T17:35:18+00:00",
     "summary": "Will Lionel Messi play against DC United in the MLS this week? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami II spotlight academy pathway in 2026 season review - OneFootball",
     "published": "2026-10-08T17:11:58+00:00",
     "summary": "Inter Miami II spotlight academy pathway in 2026 season review OneFootball"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF II: 2026 Season in Review - Inter Miami CF",
     "published": "2026-10-08T16:06:39+00:00",
     "summary": "Inter Miami CF II: 2026 Season in Review Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi Will Decide His Inter Miami Future Every Season Despite Having a Contract Until 2028 - Pasión Fútbol",
     "published": "2026-10-08T16:00:00+00:00",
     "summary": "Lionel Messi Will Decide His Inter Miami Future Every Season Despite Having a Contract Until 2028 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami reportedly plan long-term future with Lionel Messi after Argentina retirement - World Soccer Talk",
     "published": "2026-10-08T15:59:53+00:00",
     "summary": "Inter Miami reportedly plan long-term future with Lionel Messi after Argentina retirement World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami vs DC United Predicted Lineups, Team News - The False 9",
     "published": "2026-10-08T15:45:04+00:00",
     "summary": "Inter Miami vs DC United Predicted Lineups, Team News The False 9"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Riquelme Fillipi Could Return to Inter Miami's Bench Against D.C. United as Kily González Makes Key Decisio... - Pasión Fútbol",
     "published": "2026-10-08T15:45:00+00:00",
     "summary": "Riquelme Fillipi Could Return to Inter Miami's Bench Against D.C. United as Kily González Makes Key Decisio... Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 - USA Today",
     "published": "2026-10-09T02:59:03+00:00",
     "summary": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf - Ynetnews",
     "published": "2026-10-09T02:50:33+00:00",
     "summary": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors - Yahoo",
     "published": "2026-10-08T21:13:41+00:00",
     "summary": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Video - Trail Blazers' Preseason Opener Offers Sneak Peek At Starting Lineup - roundtable.io",
     "published": "2026-10-08T17:21:41+00:00",
     "summary": "Video - Trail Blazers' Preseason Opener Offers Sneak Peek At Starting Lineup roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win - CBS Sports",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija News: Hits for team-high 23 in preseason win - RotoWire",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Deni Avdija News: Hits for team-high 23 in preseason win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija goes for team-high 23 points vs. GSW - NBC Sports",
     "published": "2026-10-08T14:15:46+00:00",
     "summary": "Deni Avdija goes for team-high 23 points vs. GSW NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Blazers Open Preseason With Win Over Warriors - roundtable.io",
     "published": "2026-10-08T11:20:25+00:00",
     "summary": "Blazers Open Preseason With Win Over Warriors roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Portland Trail Blazers vs. Golden State Warriors preseason: Oct. 7, 2026 - OregonLive.com",
     "published": "2026-10-08T08:02:07+00:00",
     "summary": "Portland Trail Blazers vs. Golden State Warriors preseason: Oct. 7, 2026 OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls - Hoops Wire",
     "published": "2026-10-08T06:45:01+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "4 Things We Learned After Lillard And Morant Combine For 23 Points In Win Against Warriors - Fadeaway World",
     "published": "2026-10-08T06:28:44+00:00",
     "summary": "4 Things We Learned After Lillard And Morant Combine For 23 Points In Win Against Warriors Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers win preseason opener over Golden State - KATU",
     "published": "2026-10-08T05:37:12+00:00",
     "summary": "Trail Blazers win preseason opener over Golden State KATU"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "The Good And Meh From The Blazers Preseason Opener - Sports Illustrated",
     "published": "2026-10-08T05:04:26+00:00",
     "summary": "The Good And Meh From The Blazers Preseason Opener Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-08T04:40:00+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Aday Mara shines with perfect 10/10, Deni Avdija drops 23 points - Eurohoops",
     "published": "2026-10-08T04:31:00+00:00",
     "summary": "Aday Mara shines with perfect 10/10, Deni Avdija drops 23 points Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-08T04:19:08+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Golden State Warriors vs Portland Trail Blazers Box Score - October 07, 2026 - The Athletic - The New York Times",
     "published": "2026-10-08T03:56:58+00:00",
     "summary": "Golden State Warriors vs Portland Trail Blazers Box Score - October 07, 2026 - The Athletic The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija with the and-1 bucket - ESPN India",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN India"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija with the and-1 bucket - ESPN Singapore",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN Singapore"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-08T03:11:43+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Warriors vs. Trail Blazers - Live Score - October 07, 2026 - FOX Sports",
     "published": "2026-10-07T19:35:43+00:00",
     "summary": "Warriors vs. Trail Blazers - Live Score - October 07, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Nets' Ben Saraf: Scores eight off bench - CBS Sports",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Nets' Ben Saraf: Scores eight off bench CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Ben Saraf News: Scores eight off bench - RotoWire",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Ben Saraf News: Scores eight off bench RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "3 Storylines I'm Focused On in the Blazers Preseason Opener vs. Warriors - Yahoo Sports",
     "published": "2026-10-07T13:00:06+00:00",
     "summary": "3 Storylines I'm Focused On in the Blazers Preseason Opener vs. Warriors Yahoo Sports"
    }
   ]
  }
 ]
}
</input>