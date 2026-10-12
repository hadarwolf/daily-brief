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
     "kickoff_utc": "2026-10-11T00:00:00Z",
     "home": "São Paulo",
     "away": "Vitória",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T10:15:00Z",
     "home": "Utrecht",
     "away": "Willem II",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T10:30:00Z",
     "home": "Como 1907",
     "away": "Roma",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-11T11:00:00Z",
     "home": "Southampton",
     "away": "Portsmouth",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T12:00:00Z",
     "home": "Elche",
     "away": "Celta",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T12:30:00Z",
     "home": "Telstar",
     "away": "Den Haag",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T12:30:00Z",
     "home": "Zwolle",
     "away": "Cambuur",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Nice",
     "away": "Strasbourg",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Lecce",
     "away": "Bologna",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Hull City",
     "away": "Everton",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Lazio",
     "away": "Monza",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T13:00:00Z",
     "home": "Crystal Palace",
     "away": "Nottingham",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-11T13:30:00Z",
     "home": "1. FC Köln",
     "away": "M'gladbach",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T14:15:00Z",
     "home": "Real Sociedad",
     "away": "Deportivo",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T14:30:00Z",
     "home": "Rio Ave",
     "away": "CD Nacional",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-11T14:45:00Z",
     "home": "Excelsior",
     "away": "Groningen",
     "status": "FINISHED",
     "score": "1-5"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T15:15:00Z",
     "home": "Stade Rennais",
     "away": "Auxerre",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-11T15:30:00Z",
     "home": "Freiburg",
     "away": "Schalke",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-11T15:30:00Z",
     "home": "Liverpool",
     "away": "Man City",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T16:00:00Z",
     "home": "Sassuolo",
     "away": "Milan",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T16:30:00Z",
     "home": "Real Betis",
     "away": "Osasuna",
     "status": "FINISHED",
     "score": "5-2"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T17:00:00Z",
     "home": "SL Benfica",
     "away": "Vitória SC",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-11T18:45:00Z",
     "home": "Cagliari",
     "away": "Juventus",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-11T18:45:00Z",
     "home": "Troyes",
     "away": "Marseille",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T19:00:00Z",
     "home": "Mineiro",
     "away": "Santos",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-11T19:00:00Z",
     "home": "Santander",
     "away": "Valencia",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-11T19:30:00Z",
     "home": "Arouca",
     "away": "Amadora",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Palmeiras",
     "away": "Corinthians",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Flamengo",
     "away": "Fluminense",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T20:30:00Z",
     "home": "Grêmio",
     "away": "Internacional",
     "status": "FINISHED",
     "score": "1-1"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T22:30:00Z",
     "home": "Bahia",
     "away": "Mirassol",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-12T16:30:00Z",
     "home": "Atalanta",
     "away": "Venezia FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-12T18:45:00Z",
     "home": "Torino",
     "away": "Udinese",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Levante",
     "away": "Sevilla FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Coventry City",
     "away": "Newcastle",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-12T19:00:00Z",
     "home": "Coritiba",
     "away": "Botafogo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-12T19:15:00Z",
     "home": "Famalicão",
     "away": "Alverca",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-12T22:30:00Z",
     "home": "Chapecoense",
     "away": "Paranaense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-13T00:00:00Z",
     "home": "Bragantino",
     "away": "Cruzeiro",
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
     "played": 7,
     "pts": 13,
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
     "title": "Seedorf back in football as Corinthians head coach",
     "published": "2026-10-12T07:42:53+00:00",
     "summary": "Brazilian club Corinthians appoint Clarence Seedorf as their head coach, with the former Netherlands midfielder taking on his first coaching role since 2019."
    },
    {
     "ref": "bbc_football#1",
     "title": "Moyes may offer Celtic solution next summer - gossip",
     "published": "2026-10-12T07:33:17+00:00",
     "summary": "Could experienced Premier League manager end up at Celtic, where his professional career started?"
    },
    {
     "ref": "bbc_football#2",
     "title": "Can Robinson solve Aberdeen's lack of goals?",
     "published": "2026-10-12T07:14:01+00:00",
     "summary": "Aberdeen draw a blank again in Sunday's home loss to St Johnstone, but manager Stephen Robinson is sure his team can find a solution."
    },
    {
     "ref": "bbc_football#3",
     "title": "SPFL round-up: Big wins for Ross County & Stranraer",
     "published": "2026-10-12T07:02:42+00:00",
     "summary": "All the weekend goals from the Scottish Championship, League One and League Two."
    },
    {
     "ref": "bbc_football#4",
     "title": "Podcast: Naderi's hot streak & Celtic bounce back",
     "published": "2026-10-12T07:00:00+00:00",
     "summary": "Rangers and Celtic win while Hearts continue to impress."
    },
    {
     "ref": "bbc_football#5",
     "title": "The 'Kane-esque' striker Spurs may regret letting go",
     "published": "2026-10-12T05:40:07+00:00",
     "summary": "Will Lankshear's positioning, finishing and poacher's instinct have made him an instant hit at Riverside Stadium – and a cause of lament at Tottenham Hotspur Stadium."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-12T05:38:24+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "'Call it a day with VAR' - Rooney on Palace's controversial goal",
     "published": "2026-10-11T23:31:42+00:00",
     "summary": "Speaking on Match of the Day, Wayne Rooney says VAR made the wrong decision in awarding Crystal Palace their second goal, which saw the home side take the lead as they went on to beat Nottingham Forest 3-1 in the Premier League."
    },
    {
     "ref": "bbc_football#8",
     "title": "'It's a bad situation' - Why Man City win creates uncertainty",
     "published": "2026-10-11T23:23:03+00:00",
     "summary": "Speaking on Match of the Day, Toby Alderweireld and Wayne Rooney discuss why Manchester City's 3-0 victory against Liverpool leaves the Premier League in limbo as the club awaits a potential punishment, which could include a points deduction, after they were found guilty of financial breaches."
    },
    {
     "ref": "bbc_football#9",
     "title": "'Big star' - How Doku delivered for Man City in win against Liverpool",
     "published": "2026-10-11T23:00:57+00:00",
     "summary": "Speaking on Match of the Day, Wayne Rooney and Toby Alderweireld analyse how Jeremy Doku changed the game in Manchester City's favour, after coming on as a substitute in his side's 3-0 win against Liverpool at Anfield."
    },
    {
     "ref": "bbc_football#10",
     "title": "Rooney gives verdict on Gravenberch red card",
     "published": "2026-10-11T23:00:33+00:00",
     "summary": "Speaking on Match of the Day, Wayne Rooney and Toby Alderweireld discuss whether Ryan Gravenberch should have been sent off, after he received two yellow cards in Liverpool 3-0 defeat to Manchester City in the Premier League."
    },
    {
     "ref": "bbc_football#11",
     "title": "Aston Villa planning Endrick move - Monday's gossip",
     "published": "2026-10-11T21:32:39+00:00",
     "summary": "Aston Villa are looking at signing Real Madrid striker Endrick, Liverpool are weighing up a move for Barcelona's Marc Bernal, Everton are leading the chase for Rennes striker Esteban Lepaul, plus more."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man City's statement win has feeling of irrelevance with season in limbo",
     "published": "2026-10-11T20:02:27+00:00",
     "summary": "Manchester City record what they will view as a statement win at Liverpool - but is it a statement that carries any weight during a Premier League season in limbo, asks Phil McNulty?"
    },
    {
     "ref": "bbc_football#13",
     "title": "Winless and an 'easy touch' - what's happened to the Anfield fear factor?",
     "published": "2026-10-11T19:41:17+00:00",
     "summary": "Liverpool's struggles at Anfield continue as Iraola still awaits his first Premier League win at Anfield."
    },
    {
     "ref": "bbc_football#14",
     "title": "Football Daily",
     "published": "2026-10-11T19:39:00+00:00",
     "summary": "Rick Edwards, Luke Edwards and Clinton Morrison discuss the latest Premier League action."
    },
    {
     "ref": "bbc_football#15",
     "title": "Doku delights as Manchester City cruise past 10-man Liverpool",
     "published": "2026-10-11T18:59:19+00:00",
     "summary": "In their first match since being found guilty of breaching Premier League financial rules, Manchester City enjoyed a comfortable 3-0 win against Liverpool at Anfield to extend their perfect start to six matches, as they moved three points clear at the top of the Premier League."
    },
    {
     "ref": "bbc_football#16",
     "title": "Hull continue good start with entertaining Everton draw",
     "published": "2026-10-11T18:59:04+00:00",
     "summary": "Mohamed Belloumi scores a second-half leveller as Hull City and Everton continue their good starts to the season with an entertaining draw at MKM Stadium."
    },
    {
     "ref": "bbc_football#17",
     "title": "Glasner suffers loss on Selhurst return as Palace beat Forest",
     "published": "2026-10-11T18:59:02+00:00",
     "summary": "Oliver Glasner endures a frustrating return to Crystal Palace with his Nottingham Forest side lets slip an early lead to lose to the Eagles."
    },
    {
     "ref": "bbc_football#18",
     "title": "'I didn't like the refereeing' - Iraola unhappy with Gravenberch red",
     "published": "2026-10-11T18:46:34+00:00",
     "summary": "Andoni Iraola says he didn't agree with midfielder Ryan Gravenberch's red card in Liverpool's defeat to Manchester City at Anfield."
    },
    {
     "ref": "bbc_football#19",
     "title": "'We deal with the noise' - Maresca 'proud' after Man City win",
     "published": "2026-10-11T18:38:31+00:00",
     "summary": "Manchester City manager Enzo Maresca says his squad 'dealt with the noise' after they beat Liverpool 3-0 at Anfield in their first match since being found guilty of breaching Premier League financial rules."
    },
    {
     "ref": "bbc_football#20",
     "title": "Burnham to release details of Man City meetings",
     "published": "2026-10-11T18:01:13+00:00",
     "summary": "Andy Burnham has faced criticism for comments he made in the wake of Manchester City being found guilty of all charges related to breaches of the Premier League's financial rules."
    },
    {
     "ref": "bbc_football#21",
     "title": "Who 'simply has to do better'? Liverpool v Man City player ratings",
     "published": "2026-10-11T17:30:19+00:00",
     "summary": "How Liverpool and Man City's players rated following their Premier League match."
    },
    {
     "ref": "bbc_football#22",
     "title": "Jota comeback helps Celtic lift gloom in strong response",
     "published": "2026-10-11T16:55:21+00:00",
     "summary": "Jota's comeback from long-term injury and Celtic's convincing victory over Motherwell provide positivity following the club's recent acrimony."
    },
    {
     "ref": "bbc_football#23",
     "title": "Jota comeback helps Celtic lift gloom in strong response",
     "published": "2026-10-11T16:55:21+00:00",
     "summary": "Jota's comeback from long-term injury and Celtic's convincing victory over Motherwell provide positivity following the club's recent acrimony."
    },
    {
     "ref": "bbc_football#24",
     "title": "Hughes focused on Albania before World Cup dream",
     "published": "2026-10-11T16:08:42+00:00",
     "summary": "Wales forward Elise Hughes admits reaching the World Cup would fulfil a lifelong ambition."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi: Inter Miami forward scores twice in 4-0 win over DC United - BBC",
     "published": "2026-10-12T08:24:32+00:00",
     "summary": "Lionel Messi: Inter Miami forward scores twice in 4-0 win over DC United BBC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami sweep aside DC United 4-0 - Ahmedabad Mirror",
     "published": "2026-10-12T07:37:39+00:00",
     "summary": "Inter Miami sweep aside DC United 4-0 Ahmedabad Mirror"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi leads Inter Miami past D.C. United - Times of Oman",
     "published": "2026-10-12T04:34:00+00:00",
     "summary": "Messi leads Inter Miami past D.C. United Times of Oman"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi scores twice in first Miami game since Argentina farewell - Qatar Tribune",
     "published": "2026-10-12T03:58:18+00:00",
     "summary": "Messi scores twice in first Miami game since Argentina farewell Qatar Tribune"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "St. Louis CITY's historic tear, Inter Miami's rebound & more from Matchday 29 - MLSsoccer.com",
     "published": "2026-10-12T03:25:31+00:00",
     "summary": "St. Louis CITY's historic tear, Inter Miami's rebound & more from Matchday 29 MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi, Suárez Score Twice as Inter Miami Rout DC United - Yahoo Sports",
     "published": "2026-10-12T00:25:00+00:00",
     "summary": "Messi, Suárez Score Twice as Inter Miami Rout DC United Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami get back to winning ways in style - Prost International [PINT]",
     "published": "2026-10-11T23:57:55+00:00",
     "summary": "Inter Miami get back to winning ways in style Prost International [PINT]"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi bags brace for Inter Miami after Argentina retirement - Businessday NG",
     "published": "2026-10-11T22:52:30+00:00",
     "summary": "Messi bags brace for Inter Miami after Argentina retirement Businessday NG"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Atlanta Utd v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-11T21:45:51+00:00",
     "summary": "Atlanta Utd v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami CF - D.C. United 1 - 0 | GOL - Luis Suárez - OneFootball",
     "published": "2026-10-11T21:20:55+00:00",
     "summary": "Inter Miami CF - D.C. United 1 - 0 | GOL - Luis Suárez OneFootball"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "MLS - Lionel Messi scores for Inter Miami against DC United - BBC",
     "published": "2026-10-11T20:48:35+00:00",
     "summary": "MLS - Lionel Messi scores for Inter Miami against DC United BBC"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi shines for Inter Miami shortly after his farewell to Argentina - Goal.com",
     "published": "2026-10-11T20:25:29+00:00",
     "summary": "Lionel Messi shines for Inter Miami shortly after his farewell to Argentina Goal.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami CF - D.C. United 4 - 0 | GOAL - Leo Messi - OneFootball",
     "published": "2026-10-11T19:15:00+00:00",
     "summary": "Inter Miami CF - D.C. United 4 - 0 | GOAL - Leo Messi OneFootball"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi Makes History! Brace and Records Cement Inter Miami Legacy - beIN SPORTS",
     "published": "2026-10-11T17:08:00+00:00",
     "summary": "Messi Makes History! Brace and Records Cement Inter Miami Legacy beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS - Lionel Messi scores twice as Inter Miami thrash DC United - BBC",
     "published": "2026-10-11T16:27:15+00:00",
     "summary": "MLS - Lionel Messi scores twice as Inter Miami thrash DC United BBC"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS Roundup: Lionel Messi shows his class, Seattle Sounders are back for real, and Charlotte FC will be a playoff nightmare - Goal.com",
     "published": "2026-10-11T15:45:16+00:00",
     "summary": "MLS Roundup: Lionel Messi shows his class, Seattle Sounders are back for real, and Charlotte FC will be a playoff nightmare Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami CF - D.C. United 1 - 0 | GOL - Luis Suárez - OneFootball",
     "published": "2026-10-11T15:00:00+00:00",
     "summary": "Inter Miami CF - D.C. United 1 - 0 | GOL - Luis Suárez OneFootball"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi To Copa Libertadores? Inter Miami Coach Cristian Gonzlez Drops Major Hint - NDTV Sports",
     "published": "2026-10-11T14:47:02+00:00",
     "summary": "Lionel Messi To Copa Libertadores? Inter Miami Coach Cristian Gonzlez Drops Major Hint NDTV Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami - Kily Gonzalez aimerait voir Messi jouer la Libertadores - OneFootball",
     "published": "2026-10-11T13:19:33+00:00",
     "summary": "Inter Miami - Kily Gonzalez aimerait voir Messi jouer la Libertadores OneFootball"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Suarez knows he's a key player for Inter Miami - Gonzalez - SportyTV",
     "published": "2026-10-11T12:40:00+00:00",
     "summary": "Suarez knows he's a key player for Inter Miami - Gonzalez SportyTV"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami coach open to Messi playing in Copa Libertadores - The News Mill",
     "published": "2026-10-11T12:32:21+00:00",
     "summary": "Inter Miami coach open to Messi playing in Copa Libertadores The News Mill"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi 'constantly challenging' Inter Miami to improve - SportyTV",
     "published": "2026-10-11T12:10:00+00:00",
     "summary": "Messi 'constantly challenging' Inter Miami to improve SportyTV"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami 4-0 DC United: Messi and Suarez run the show - BeSoccer Livescore",
     "published": "2026-10-11T11:20:55+00:00",
     "summary": "Inter Miami 4-0 DC United: Messi and Suarez run the show BeSoccer Livescore"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "VIDEO: Watch Messi, Suarez in Inter Miami’s romp over D.C. United - Front Row Soccer",
     "published": "2026-10-11T11:02:06+00:00",
     "summary": "VIDEO: Watch Messi, Suarez in Inter Miami’s romp over D.C. United Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "STILL GOING STRONG: Messi strikes twice in Inter Miami’s 4-0 win over D.C. - Front Row Soccer",
     "published": "2026-10-11T10:53:56+00:00",
     "summary": "STILL GOING STRONG: Messi strikes twice in Inter Miami’s 4-0 win over D.C. Front Row Soccer"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast - Sportskeeda",
     "published": "2026-10-12T05:36:00+00:00",
     "summary": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He's Toughest To Guard - Fadeaway World",
     "published": "2026-10-12T02:52:38+00:00",
     "summary": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He's Toughest To Guard Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija credits Chauncey Billups for helping turn his career around - Yahoo Sports",
     "published": "2026-10-11T18:06:58+00:00",
     "summary": "Deni Avdija credits Chauncey Billups for helping turn his career around Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation - EssentiallySports",
     "published": "2026-10-11T17:55:00+00:00",
     "summary": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation EssentiallySports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story - YouTube",
     "published": "2026-10-11T12:27:42+00:00",
     "summary": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story YouTube"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings - roundtable.io",
     "published": "2026-10-10T17:10:54+00:00",
     "summary": "Trail Blaziers' Deni Avdija Gets Overlooked In Latest NBA Player Rankings roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers - Rip City Project",
     "published": "2026-10-09T15:03:36+00:00",
     "summary": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Max Fried’s postseason woes continue — but there’s good news - Jewish Telegraphic Agency",
     "published": "2026-10-09T15:00:00+00:00",
     "summary": "Max Fried’s postseason woes continue — but there’s good news Jewish Telegraphic Agency"
    }
   ]
  }
 ]
}
</input>