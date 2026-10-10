Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "Premier League",
  "home": "Arsenal",
  "away": "Leeds United",
  "kickoff_utc": "2026-10-10T11:30:00Z"
 },
 {
  "sport": "soccer",
  "competition": "Primera Division",
  "home": "Barça",
  "away": "Getafe",
  "kickoff_utc": "2026-10-10T16:30:00Z"
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
   "yesterday": [
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
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-09T18:00:00Z",
     "home": "PSV",
     "away": "Heerenveen",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-09T18:30:00Z",
     "home": "Dortmund",
     "away": "Bremen",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-09T18:45:00Z",
     "home": "RC Lens",
     "away": "Olympique Lyon",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-09T19:00:00Z",
     "home": "West Ham",
     "away": "QPR",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-09T19:00:00Z",
     "home": "Málaga",
     "away": "Espanyol",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-09T19:15:00Z",
     "home": "Braga",
     "away": "Sporting CP",
     "status": "FINISHED",
     "score": "1-3"
    }
   ],
   "today": [
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "West Brom",
     "away": "Birmingham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Swansea",
     "away": "Norwich",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Charlton",
     "away": "Bristol City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T11:30:00Z",
     "home": "Arsenal",
     "away": "Leeds United",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T12:00:00Z",
     "home": "Rayo Vallecano",
     "away": "Athletic",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T13:00:00Z",
     "home": "Genoa",
     "away": "Fiorentina",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Union Berlin",
     "away": "Elversberg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Augsburg",
     "away": "Bayern",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "SC Paderborn",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Hoffenheim",
     "away": "HSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T13:30:00Z",
     "home": "Mainz",
     "away": "Leverkusen",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Middlesbrough",
     "away": "Wolverhampton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Derby County",
     "away": "Wrexham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Sunderland",
     "away": "Brighton Hove",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Bolton",
     "away": "Stoke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Chelsea",
     "away": "Bournemouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Ipswich Town",
     "away": "Fulham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Sheffield Utd",
     "away": "Lincoln City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Aston Villa",
     "away": "Brentford",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Blackburn",
     "away": "Cardiff",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Watford",
     "away": "Burnley",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-10T14:00:00Z",
     "home": "Preston NE",
     "away": "Millwall",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T14:15:00Z",
     "home": "Alavés",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T14:30:00Z",
     "home": "Casa Pia",
     "away": "Santa Clara",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T14:30:00Z",
     "home": "Go Ahead",
     "away": "Sparta",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T15:15:00Z",
     "home": "Lille",
     "away": "Le Havre",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T16:00:00Z",
     "home": "Inter",
     "away": "Parma",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "Man United",
     "away": "Tottenham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "RB Leipzig",
     "away": "Frankfurt",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T16:30:00Z",
     "home": "Barça",
     "away": "Getafe",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T16:45:00Z",
     "home": "Feyenoord",
     "away": "AZ",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T17:00:00Z",
     "home": "Marítimo",
     "away": "Porto",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T18:00:00Z",
     "home": "Sittard",
     "away": "Twente",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Monaco",
     "away": "Toulouse",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Brest",
     "away": "Angers SCO",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Lorient",
     "away": "Paris FC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "PSG",
     "away": "Le Mans",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-10T18:45:00Z",
     "home": "Napoli",
     "away": "Frosinone",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T19:00:00Z",
     "home": "Real Madrid",
     "away": "Villarreal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-10T19:00:00Z",
     "home": "Ajax",
     "away": "NEC",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T19:30:00Z",
     "home": "Acad. Viseu",
     "away": "Estoril Praia",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-10T21:00:00Z",
     "home": "Vasco da Gama",
     "away": "Clube do Remo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-11T00:00:00Z",
     "home": "São Paulo",
     "away": "Vitória",
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
     "played": 5,
     "pts": 13,
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
     "team": "Bremen",
     "played": 5,
     "pts": 8,
     "gd": 0
    },
    {
     "pos": 5,
     "team": "Augsburg",
     "played": 4,
     "pts": 7,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Leverkusen",
     "played": 4,
     "pts": 7,
     "gd": 5
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
     "played": 6,
     "pts": 11,
     "gd": 7
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
     "title": "Man City whistleblower to remain in witness protection",
     "published": "2026-10-09T22:59:32+00:00",
     "summary": "The computer hacker who released documents which helped trigger the Premier League investigation into Manchester City will remain under witness protection after authorities in Portugal suspend the decision to end it."
    },
    {
     "ref": "bbc_football#1",
     "title": "Arteta's conscience clear over Man City charges",
     "published": "2026-10-09T21:30:52+00:00",
     "summary": "Mikel Arteta says his conscience is clear over Manchester City's rule breaches during a period when he was assistant manager at the club."
    },
    {
     "ref": "bbc_football#2",
     "title": "NI World Cup hopes gone from 'improbable to impossible'",
     "published": "2026-10-09T21:24:28+00:00",
     "summary": "Michael McArdle admits Northern Ireland's chances of beating Portugal in a Women's World Cup play-off have \"gone from improbable to impossible\" after a 4-0 first leg defeat."
    },
    {
     "ref": "bbc_football#3",
     "title": "Arsenal eye deal for teenager Mora - Saturday's gossip",
     "published": "2026-10-09T21:19:35+00:00",
     "summary": "Arsenal eye deal for Mexico teenager Gilberto Mora, AC Milan in pole position for Endrick, Nottingham Forest braced for Murillo interest"
    },
    {
     "ref": "bbc_football#4",
     "title": "Greek takeaways: What did we learn from Lionesses' win?",
     "published": "2026-10-09T21:15:24+00:00",
     "summary": "England come away from Greece with a valuable first-leg lead in their Women's World Cup qualifying play-off - but who impressed in the 3-1 victory?"
    },
    {
     "ref": "bbc_football#5",
     "title": "Highlights: Albania 0-1 Wales",
     "published": "2026-10-09T18:20:41+00:00",
     "summary": "Watch the best of the action as Wales beat Albania in Shkoder"
    },
    {
     "ref": "bbc_football#6",
     "title": "Will anyone stop re-election of Infantino as Fifa president?",
     "published": "2026-10-09T16:28:23+00:00",
     "summary": "Little more than two months since news broke of Infantino's Fifa Forward Enterprise proposal, the chances appear slim that Gianni Infantino might be removed as president."
    },
    {
     "ref": "bbc_football#7",
     "title": "Decision to stay at Celtic did not take long - O'Neill",
     "published": "2026-10-09T16:04:03+00:00",
     "summary": "Martin O'Neill suggests he was never close to leaving Celtic after a three-game losing streak, with the veteran manager stressing his \"great enthusiasm\" for the role."
    },
    {
     "ref": "bbc_football#8",
     "title": "Decision to stay at Celtic did not take long - O'Neill",
     "published": "2026-10-09T16:04:03+00:00",
     "summary": "Martin O'Neill suggests he was never close to leaving Celtic after a three-game losing streak, with the veteran manager stressing his \"great enthusiasm\" for the role."
    },
    {
     "ref": "bbc_football#9",
     "title": "Afcon move to every four years under review by Caf",
     "published": "2026-10-09T15:57:49+00:00",
     "summary": "The Africa Cup of Nations may continue to be held every two years, with discussions under way to reverse its proposed switch to a four-year cycle."
    },
    {
     "ref": "bbc_football#10",
     "title": "Football Daily",
     "published": "2026-10-09T15:51:00+00:00",
     "summary": "Conor McNamara joins Ian Dennis and John Murray ahead of a big Premier League weekend."
    },
    {
     "ref": "bbc_football#11",
     "title": "Everton up for sale again - so what next as owners TFG look for a way out?",
     "published": "2026-10-09T15:38:59+00:00",
     "summary": "Everton are up for sale again. Chief football writer Phil McNulty looks at what happens next as owners The Friedkin Group look for a way out."
    },
    {
     "ref": "bbc_football#12",
     "title": "'Not Celtic' - O'Neill condemns Desmond protest as ultras boycott",
     "published": "2026-10-09T15:01:41+00:00",
     "summary": "\"This is not Celtic at all,\" is manager Martin O'Neill's response to the rising tensions between sections of the fan base and the club's board."
    },
    {
     "ref": "bbc_football#13",
     "title": "I've got my own questions on Man City case - Carrick",
     "published": "2026-10-09T14:30:38+00:00",
     "summary": "Manchester United boss Michael Carrick says he was personally affected by the Manchester City case which has seen the club found guilty of breaching Premier League financial rules and still has questions about the matter."
    },
    {
     "ref": "bbc_football#14",
     "title": "'Intense' talks convinced Reedijk over Hibs job",
     "published": "2026-10-09T14:14:42+00:00",
     "summary": "Marink Reedijk was convinced Hibernian was the right move for him after a seven-hour meeting with the club's board in London."
    },
    {
     "ref": "bbc_football#15",
     "title": "Man City titles 'absolutely not' tainted - Maresca",
     "published": "2026-10-09T14:08:55+00:00",
     "summary": "Manchester City manager Enzo Maresca says the club's titles are \"absolutely not\" tainted after they were found guilty of the majority of the 115 charges brought against them by the Premier League."
    },
    {
     "ref": "bbc_football#16",
     "title": "What reception awaits Man City at Anfield?",
     "published": "2026-10-09T14:02:46+00:00",
     "summary": "Bus welcomes, banners and flags expected as Man City head to Liverpool on Sunday for their first game since they were found guilty of breaching Premier League rules."
    },
    {
     "ref": "bbc_football#17",
     "title": "What impact has break had & how will Reedijk fare? Premiership questions",
     "published": "2026-10-09T13:07:09+00:00",
     "summary": "After an extended international break, the Scottish Premiership's usual suspects - and one newcomer - limber up for a full weekend card of fixtures."
    },
    {
     "ref": "bbc_football#18",
     "title": "What impact has break had & how will Reedijk fare? Premiership questions",
     "published": "2026-10-09T13:07:09+00:00",
     "summary": "After an extended international break, the Scottish Premiership's usual suspects - and one newcomer - limber up for a full weekend card of fixtures."
    },
    {
     "ref": "bbc_football#19",
     "title": "Eckert energy and stopping star duo - south coast derby talking points",
     "published": "2026-10-09T11:46:27+00:00",
     "summary": "BBC Sport breaks down the main narratives and talking points before the 74th south coast derby between Southampton and Portsmouth."
    },
    {
     "ref": "bbc_football#20",
     "title": "What could Rangers' 2012 case tell us about Man City's uncertain future?",
     "published": "2026-10-09T10:04:35+00:00",
     "summary": "From sanctions and stripped titles to starting from scratch, BBC Scotland explains how potential consequences for Manchester City compare with the financial collapse of Rangers in 2012."
    },
    {
     "ref": "bbc_football#21",
     "title": "What could Rangers' 2012 case tell us about Man City's uncertain future?",
     "published": "2026-10-09T10:04:35+00:00",
     "summary": "From sanctions and stripped titles to starting from scratch, BBC Scotland explains how potential consequences for Manchester City compare with the financial collapse of Rangers in 2012."
    },
    {
     "ref": "bbc_football#22",
     "title": "Mourinho calls criticism of Mbappe 'ridiculous'",
     "published": "2026-10-09T09:57:48+00:00",
     "summary": "Jose Mourinho defends Kylian Mbappe who has been scrutinised during the international break."
    },
    {
     "ref": "bbc_football#23",
     "title": "From doomscrolling to defiance - how do Man City fans feel?",
     "published": "2026-10-09T09:02:26+00:00",
     "summary": "With Manchester City found guilty of the majority of 115 charges against them, how are their fans feeling?"
    },
    {
     "ref": "bbc_football#24",
     "title": "EFL preview: Savage salvation and a happy homecoming?",
     "published": "2026-10-09T08:47:06+00:00",
     "summary": "Here are the five things across the EFL that you should be keeping your eyes on this weekend."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC - Big News Network.com",
     "published": "2026-10-10T02:55:00+00:00",
     "summary": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC Big News Network.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Where to Watch Inter Miami CF vs. DC United: TV Channel, Start Time and Live Stream - Bleacher Nation",
     "published": "2026-10-10T02:21:02+00:00",
     "summary": "Where to Watch Inter Miami CF vs. DC United: TV Channel, Start Time and Live Stream Bleacher Nation"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "‘We must enjoy him,’ Inter Miami manager Kily Gonzalez reflects on Lionel Messi's Argentina farewell - Livemint",
     "published": "2026-10-10T02:08:13+00:00",
     "summary": "‘We must enjoy him,’ Inter Miami manager Kily Gonzalez reflects on Lionel Messi's Argentina farewell Livemint"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Fresh off final game with Argentina, Messi leads Miami vs. D.C. United - Rock Hill Herald",
     "published": "2026-10-10T01:41:08+00:00",
     "summary": "Fresh off final game with Argentina, Messi leads Miami vs. D.C. United Rock Hill Herald"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi isn't even close to done with the sport he loves: Inter Miami manager Kily Gonzalez inspires hope among fans - MARCA",
     "published": "2026-10-10T00:27:00+00:00",
     "summary": "Lionel Messi isn't even close to done with the sport he loves: Inter Miami manager Kily Gonzalez inspires hope among fans MARCA"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-09T22:44:19+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami CF v New York City Odds - FanDuel Sportsbook",
     "published": "2026-10-09T22:26:19+00:00",
     "summary": "Inter Miami CF v New York City Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive - Yahoo Sports",
     "published": "2026-10-09T21:54:49+00:00",
     "summary": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "MATCH PREVIEW: Inter Miami CF Set to Host D.C. United on Saturday - Inter Miami CF",
     "published": "2026-10-09T21:08:46+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Set to Host D.C. United on Saturday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami coach on Messis retirement: Were not going to see him with Argentina anymore, so we have to enj - Diario AS - Nuevo Enfoque Urbano",
     "published": "2026-10-09T20:52:18+00:00",
     "summary": "Inter Miami coach on Messis retirement: Were not going to see him with Argentina anymore, so we have to enj - Diario AS Nuevo Enfoque Urbano"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami coach says Messi is now with the club - Operativ Məlumat Mərkəzi",
     "published": "2026-10-09T20:43:41+00:00",
     "summary": "Inter Miami coach says Messi is now with the club Operativ Məlumat Mərkəzi"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami coach: Argentina will miss Messi, enjoy his latest performances with us - Gazeta Express",
     "published": "2026-10-09T20:40:00+00:00",
     "summary": "Inter Miami coach: Argentina will miss Messi, enjoy his latest performances with us Gazeta Express"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "‘He is happy here’ Inter Miami ready to cherish Lionel Messi after Argentina farewell - Toowoomba Chronicle",
     "published": "2026-10-09T20:39:16+00:00",
     "summary": "‘He is happy here’ Inter Miami ready to cherish Lionel Messi after Argentina farewell Toowoomba Chronicle"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami’s Kily Gonzalez urges fans to cherish Lionel Messi after Argentina farewell - OneFootball",
     "published": "2026-10-09T20:20:08+00:00",
     "summary": "Inter Miami’s Kily Gonzalez urges fans to cherish Lionel Messi after Argentina farewell OneFootball"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami coach on Messi's farewell: he will miss it until the last day of his life - Goal.com",
     "published": "2026-10-09T19:38:34+00:00",
     "summary": "Inter Miami coach on Messi's farewell: he will miss it until the last day of his life Goal.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever - Sports Illustrated",
     "published": "2026-10-09T19:30:00+00:00",
     "summary": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever - FotMob",
     "published": "2026-10-09T19:30:00+00:00",
     "summary": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever FotMob"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive - Heavy.com",
     "published": "2026-10-09T19:27:45+00:00",
     "summary": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive Heavy.com"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami coach on Messi’s retirement: “We’re not going to see him with Argentina anymore, so we have to enj - Diario AS",
     "published": "2026-10-09T19:25:04+00:00",
     "summary": "Inter Miami coach on Messi’s retirement: “We’re not going to see him with Argentina anymore, so we have to enj Diario AS"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "‘He’s ours now!’ - Inter Miami boss Kily Gonzalez issues Lionel Messi warning to MLS fans after Argentina retirement - Goal.com",
     "published": "2026-10-09T18:43:49+00:00",
     "summary": "‘He’s ours now!’ - Inter Miami boss Kily Gonzalez issues Lionel Messi warning to MLS fans after Argentina retirement Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Riquelme Fillipi Could Earn Inter Miami Starting Role as Kily González Faces Key Decisions - Pasión Fútbol",
     "published": "2026-10-09T18:27:11+00:00",
     "summary": "Riquelme Fillipi Could Earn Inter Miami Starting Role as Kily González Faces Key Decisions Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "MLS Schedule for October 10-11: Preview and Where to Watch - www.futbolmundial.com",
     "published": "2026-10-09T18:15:01+00:00",
     "summary": "MLS Schedule for October 10-11: Preview and Where to Watch www.futbolmundial.com"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "As Premier League Fan Fest arrives, Denver's importance to American soccer is clearer than ever - NBC Sports",
     "published": "2026-10-09T17:08:44+00:00",
     "summary": "As Premier League Fan Fest arrives, Denver's importance to American soccer is clearer than ever NBC Sports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Kily González Reveals How Lionel Messi Is Transforming Inter Miami: “He Forces You to Be Better Every Day” - Pasión Fútbol",
     "published": "2026-10-09T17:00:00+00:00",
     "summary": "Kily González Reveals How Lionel Messi Is Transforming Inter Miami: “He Forces You to Be Better Every Day” Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami Gets Ian Fray Boost Ahead of DC United Clash as Kily González Receives Good News - Pasión Fútbol",
     "published": "2026-10-09T16:30:00+00:00",
     "summary": "Inter Miami Gets Ian Fray Boost Ahead of DC United Clash as Kily González Receives Good News Pasión Fútbol"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-09T23:23:03+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "What I Changed My Mind About After Blazers Win vs. Warriors - Sports Illustrated",
     "published": "2026-10-09T19:00:01+00:00",
     "summary": "What I Changed My Mind About After Blazers Win vs. Warriors Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers - Rip City Project",
     "published": "2026-10-09T15:03:36+00:00",
     "summary": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Max Fried’s postseason woes continue — but there’s good news! - Jewish Telegraphic Agency",
     "published": "2026-10-09T15:00:00+00:00",
     "summary": "Max Fried’s postseason woes continue — but there’s good news! Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 - USA Today",
     "published": "2026-10-09T02:59:03+00:00",
     "summary": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf - Ynetnews",
     "published": "2026-10-09T02:50:33+00:00",
     "summary": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Video - Trail Blazers Should Make Deflections a Public Standard - roundtable.io",
     "published": "2026-10-09T01:42:31+00:00",
     "summary": "Video - Trail Blazers Should Make Deflections a Public Standard roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors - Yahoo",
     "published": "2026-10-08T21:13:41+00:00",
     "summary": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija goes for team-high 23 points vs. GSW - NBC Sports",
     "published": "2026-10-08T18:32:36+00:00",
     "summary": "Deni Avdija goes for team-high 23 points vs. GSW NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win - CBS Sports",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija News: Hits for team-high 23 in preseason win - RotoWire",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Deni Avdija News: Hits for team-high 23 in preseason win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Blazers Open Preseason With Win Over Warriors - roundtable.io",
     "published": "2026-10-08T11:20:25+00:00",
     "summary": "Blazers Open Preseason With Win Over Warriors roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls - Hoops Wire",
     "published": "2026-10-08T06:45:01+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Trail Blazers win preseason opener over Golden State - KATU",
     "published": "2026-10-08T05:37:53+00:00",
     "summary": "Trail Blazers win preseason opener over Golden State KATU"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "The Good And Meh From The Blazers Preseason Opener - Sports Illustrated",
     "published": "2026-10-08T05:04:26+00:00",
     "summary": "The Good And Meh From The Blazers Preseason Opener Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija finishes through contact - Yahoo Sports",
     "published": "2026-10-08T04:40:00+00:00",
     "summary": "Deni Avdija finishes through contact Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Aday Mara shines with perfect 10/10, Deni Avdija drops 23 points - Eurohoops",
     "published": "2026-10-08T04:31:00+00:00",
     "summary": "Aday Mara shines with perfect 10/10, Deni Avdija drops 23 points Eurohoops"
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
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf Player Full High Lowlights vs HORNETS 06 10 2026 NBA PRESEASON Game - YouTube",
     "published": "2026-10-07T15:51:52+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs HORNETS 06 10 2026 NBA PRESEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Nets' Ben Saraf: Scores eight off bench - CBS Sports",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Nets' Ben Saraf: Scores eight off bench CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Ben Saraf News: Scores eight off bench - RotoWire",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Ben Saraf News: Scores eight off bench RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Trail Blazers win preseason opener over Golden State - KPIC",
     "published": "2026-10-07T07:00:00+00:00",
     "summary": "Trail Blazers win preseason opener over Golden State KPIC"
    }
   ]
  }
 ]
}
</input>