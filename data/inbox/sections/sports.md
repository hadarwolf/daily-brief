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
     "home": "SC Paderborn",
     "away": "Stuttgart",
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
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-10T14:15:00Z",
     "home": "Alavés",
     "away": "Atleti",
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
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-10T19:30:00Z",
     "home": "Casa Pia",
     "away": "Santa Clara",
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
     "title": "Delight for Cuthbert with Scotland after 'long summer' of recovery",
     "published": "2026-10-10T08:28:17+00:00",
     "summary": "Erin Cuthbert expresses joy and relief at making her first appearance of the season in Scotland's impressive 2-0 win over Czech Republic."
    },
    {
     "ref": "bbc_football#1",
     "title": "Delight for Scotland's Cuthbert after long summer of recovery",
     "published": "2026-10-10T08:28:17+00:00",
     "summary": "Erin Cuthbert expresses joy and relief at making her first appearance of the season in Scotland's impressive 2-0 win over Czech Republic."
    },
    {
     "ref": "bbc_football#2",
     "title": "Raphinha's brilliant Barcelona start interrupted by injury concerns",
     "published": "2026-10-10T08:27:28+00:00",
     "summary": "Raphinha will miss Barcelona's next two fixtures after returning from international break with an injury."
    },
    {
     "ref": "bbc_football#3",
     "title": "Celtic decide against offering Bakayoko deal - gossip",
     "published": "2026-10-10T07:17:27+00:00",
     "summary": "Celtic elect not to offer deal to midfielder as Derek Riordan urges patience under new Hibernian boss."
    },
    {
     "ref": "bbc_football#4",
     "title": "Tottenham to fly to Marbella for training camp",
     "published": "2026-10-10T06:29:58+00:00",
     "summary": "Tottenham manager Roberto De Zerbi to take his squad to Marbella for team-bonding training camp after clash against Manchester United"
    },
    {
     "ref": "bbc_football#5",
     "title": "Man City titles 'absolutely not' tainted - Maresca",
     "published": "2026-10-10T05:56:59+00:00",
     "summary": "Manchester City manager Enzo Maresca says the club's titles are \"absolutely not\" tainted after they were found guilty of the majority of the 115 charges brought against them by the Premier League."
    },
    {
     "ref": "bbc_football#6",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-10T05:28:48+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#7",
     "title": "Time to rise? Ranking European football's sleeping giants",
     "published": "2026-10-10T05:14:17+00:00",
     "summary": "From Sampdoria to Saint-Etienne and Real Zaragoza, who are the sleeping giants of European football?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Man City whistleblower to remain in witness protection",
     "published": "2026-10-09T22:59:32+00:00",
     "summary": "The computer hacker who released documents which helped trigger the Premier League investigation into Manchester City will remain under witness protection after authorities in Portugal suspend the decision to end it."
    },
    {
     "ref": "bbc_football#9",
     "title": "Arteta's conscience clear over Man City charges",
     "published": "2026-10-09T21:30:52+00:00",
     "summary": "Mikel Arteta says his conscience is clear over Manchester City's rule breaches during a period when he was assistant manager at the club."
    },
    {
     "ref": "bbc_football#10",
     "title": "NI World Cup hopes gone from 'improbable to impossible'",
     "published": "2026-10-09T21:24:28+00:00",
     "summary": "Michael McArdle admits Northern Ireland's chances of beating Portugal in a Women's World Cup play-off have \"gone from improbable to impossible\" after a 4-0 first leg defeat."
    },
    {
     "ref": "bbc_football#11",
     "title": "NI World Cup hopes gone from 'improbable to impossible'",
     "published": "2026-10-09T21:24:28+00:00",
     "summary": "Michael McArdle admits Northern Ireland's chances of beating Portugal in a Women's World Cup play-off have \"gone from improbable to impossible\" after a 4-0 first leg defeat."
    },
    {
     "ref": "bbc_football#12",
     "title": "Arsenal eye deal for teenager Mora - Saturday's gossip",
     "published": "2026-10-09T21:19:35+00:00",
     "summary": "Arsenal eye deal for Mexico teenager Gilberto Mora, AC Milan in pole position for Endrick, Nottingham Forest braced for Murillo interest"
    },
    {
     "ref": "bbc_football#13",
     "title": "Greek takeaways: What did we learn from Lionesses' win?",
     "published": "2026-10-09T21:15:24+00:00",
     "summary": "England come away from Greece with a valuable first-leg lead in their Women's World Cup qualifying play-off - but who impressed in the 3-1 victory?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Greek takeaways: What did we learn from Lionesses' win?",
     "published": "2026-10-09T21:15:24+00:00",
     "summary": "England come away from Greece with a valuable first-leg lead in their Women's World Cup qualifying play-off - but who impressed in the 3-1 victory?"
    },
    {
     "ref": "bbc_football#15",
     "title": "Wales must improve in World Cup bid - Wilkinson",
     "published": "2026-10-09T19:34:54+00:00",
     "summary": "Rhian Wilkinson accepts Wales must raise their standards after they scrape to a 1-0 victory in their Women's World Cup play-off semi-final in Albania."
    },
    {
     "ref": "bbc_football#16",
     "title": "Highlights: Albania 0-1 Wales",
     "published": "2026-10-09T18:20:41+00:00",
     "summary": "Watch the best of the action as Wales beat Albania in Shkoder"
    },
    {
     "ref": "bbc_football#17",
     "title": "Will anyone stop re-election of Infantino as Fifa president?",
     "published": "2026-10-09T16:28:23+00:00",
     "summary": "Little more than two months since news broke of Infantino's Fifa Forward Enterprise proposal, the chances appear slim that Gianni Infantino might be removed as president."
    },
    {
     "ref": "bbc_football#18",
     "title": "Decision to stay at Celtic did not take long - O'Neill",
     "published": "2026-10-09T16:04:03+00:00",
     "summary": "Martin O'Neill suggests he was never close to leaving Celtic after a three-game losing streak, with the veteran manager stressing his \"great enthusiasm\" for the role."
    },
    {
     "ref": "bbc_football#19",
     "title": "Decision to stay at Celtic did not take long - O'Neill",
     "published": "2026-10-09T16:04:03+00:00",
     "summary": "Martin O'Neill suggests he was never close to leaving Celtic after a three-game losing streak, with the veteran manager stressing his \"great enthusiasm\" for the role."
    },
    {
     "ref": "bbc_football#20",
     "title": "Afcon move to every four years under review by Caf",
     "published": "2026-10-09T15:57:49+00:00",
     "summary": "The Africa Cup of Nations may continue to be held every two years, with discussions under way to reverse its proposed switch to a four-year cycle."
    },
    {
     "ref": "bbc_football#21",
     "title": "Football Daily",
     "published": "2026-10-09T15:51:00+00:00",
     "summary": "Conor McNamara joins Ian Dennis and John Murray ahead of a big Premier League weekend."
    },
    {
     "ref": "bbc_football#22",
     "title": "Everton up for sale again - so what next as owners TFG look for a way out?",
     "published": "2026-10-09T15:38:59+00:00",
     "summary": "Everton are up for sale again. Chief football writer Phil McNulty looks at what happens next as owners The Friedkin Group look for a way out."
    },
    {
     "ref": "bbc_football#23",
     "title": "'Not Celtic' - O'Neill condemns Desmond protest as ultras boycott",
     "published": "2026-10-09T15:01:41+00:00",
     "summary": "\"This is not Celtic at all,\" is manager Martin O'Neill's response to the rising tensions between sections of the fan base and the club's board."
    },
    {
     "ref": "bbc_football#24",
     "title": "I've got my own questions on Man City case - Carrick",
     "published": "2026-10-09T14:30:38+00:00",
     "summary": "Manchester United boss Michael Carrick says he was personally affected by the Manchester City case which has seen the club found guilty of breaching Premier League financial rules and still has questions about the matter."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs DC United: match statistics and data - BetMines",
     "published": "2026-10-10T07:13:37+00:00",
     "summary": "Inter Miami vs DC United: match statistics and data BetMines"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami - D.C. United, Result, Match Info - Forza Football",
     "published": "2026-10-10T07:11:17+00:00",
     "summary": "Inter Miami - D.C. United, Result, Match Info Forza Football"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Is Messi playing? Inter Miami’s starting lineup to face DC United - Diario AS",
     "published": "2026-10-10T06:02:01+00:00",
     "summary": "Is Messi playing? Inter Miami’s starting lineup to face DC United Diario AS"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami C.F vs D.C United Prediction: It All Depends on Dayne St Clair - Telecom Asia Sport",
     "published": "2026-10-10T05:22:07+00:00",
     "summary": "Inter Miami C.F vs D.C United Prediction: It All Depends on Dayne St Clair Telecom Asia Sport"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC - Miami Herald",
     "published": "2026-10-10T03:00:09+00:00",
     "summary": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "MATCH PREVIEW: Inter Miami CF Set to Host D.C. United on Saturday - Inter Miami CF",
     "published": "2026-10-10T02:55:46+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Set to Host D.C. United on Saturday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC - Big News Network.com",
     "published": "2026-10-10T02:55:00+00:00",
     "summary": "Nashville SC, eyeing Supporters' Shield, face surging Austin FC Big News Network.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-10T02:36:30+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Where to Watch Inter Miami CF vs. DC United: TV Channel, Start Time and Live Stream - Bleacher Nation",
     "published": "2026-10-10T02:21:02+00:00",
     "summary": "Where to Watch Inter Miami CF vs. DC United: TV Channel, Start Time and Live Stream Bleacher Nation"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "‘We must enjoy him,’ Inter Miami manager Kily Gonzalez reflects on Lionel Messi's Argentina farewell - Livemint",
     "published": "2026-10-10T02:08:13+00:00",
     "summary": "‘We must enjoy him,’ Inter Miami manager Kily Gonzalez reflects on Lionel Messi's Argentina farewell Livemint"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Fresh off final game with Argentina, Messi leads Miami vs. D.C. United - Fresno Bee",
     "published": "2026-10-10T01:26:00+00:00",
     "summary": "Fresh off final game with Argentina, Messi leads Miami vs. D.C. United Fresno Bee"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi isn't even close to done with the sport he loves: Inter Miami manager Kily Gonzalez inspires hope among fans - MARCA",
     "published": "2026-10-10T00:27:00+00:00",
     "summary": "Lionel Messi isn't even close to done with the sport he loves: Inter Miami manager Kily Gonzalez inspires hope among fans MARCA"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Kily González Explains Inter Miami Absence for Messi’s Argentina Farewell as MLS Return Nears - Pasión Fútbol",
     "published": "2026-10-10T00:00:00+00:00",
     "summary": "Kily González Explains Inter Miami Absence for Messi’s Argentina Farewell as MLS Return Nears Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-09T22:44:19+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Antonio Mohamed Admits He Wants to Coach Lionel Messi as Inter Miami Speculation Grows - Pasión Fútbol",
     "published": "2026-10-09T22:43:13+00:00",
     "summary": "Antonio Mohamed Admits He Wants to Coach Lionel Messi as Inter Miami Speculation Grows Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami CF v New York City Odds - FanDuel Sportsbook",
     "published": "2026-10-09T22:26:19+00:00",
     "summary": "Inter Miami CF v New York City Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive - Yahoo Sports",
     "published": "2026-10-09T21:54:49+00:00",
     "summary": "Ex-USMNT Star Reveals What He Really Thinks About MLS’ Calendar Shift: Exclusive Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami vs DC United Prediction and Betting Tips | October 10th 2026 - Sportskeeda",
     "published": "2026-10-09T21:46:09+00:00",
     "summary": "Inter Miami vs DC United Prediction and Betting Tips | October 10th 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami coach on Messis retirement: Were not going to see him with Argentina anymore, so we have to enj - Diario AS - Nuevo Enfoque Urbano",
     "published": "2026-10-09T20:52:18+00:00",
     "summary": "Inter Miami coach on Messis retirement: Were not going to see him with Argentina anymore, so we have to enj - Diario AS Nuevo Enfoque Urbano"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami coach says Messi is now with the club - Operativ Məlumat Mərkəzi",
     "published": "2026-10-09T20:43:41+00:00",
     "summary": "Inter Miami coach says Messi is now with the club Operativ Məlumat Mərkəzi"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami coach: Argentina will miss Messi, enjoy his latest performances with us - Gazeta Express",
     "published": "2026-10-09T20:40:00+00:00",
     "summary": "Inter Miami coach: Argentina will miss Messi, enjoy his latest performances with us Gazeta Express"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "‘He is happy here’ Inter Miami ready to cherish Lionel Messi after Argentina farewell - Toowoomba Chronicle",
     "published": "2026-10-09T20:39:16+00:00",
     "summary": "‘He is happy here’ Inter Miami ready to cherish Lionel Messi after Argentina farewell Toowoomba Chronicle"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami’s Kily Gonzalez urges fans to cherish Lionel Messi after Argentina farewell - OneFootball",
     "published": "2026-10-09T20:20:08+00:00",
     "summary": "Inter Miami’s Kily Gonzalez urges fans to cherish Lionel Messi after Argentina farewell OneFootball"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami coach on Messi's farewell: he will miss it until the last day of his life - LiveScore",
     "published": "2026-10-09T19:53:56+00:00",
     "summary": "Inter Miami coach on Messi's farewell: he will miss it until the last day of his life LiveScore"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever - Sports Illustrated",
     "published": "2026-10-09T19:30:00+00:00",
     "summary": "MLS Commissioner Reveals How Lionel Messi, David Beckham Changed the League Forever Sports Illustrated"
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
     "published": "2026-10-10T03:09:19+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers - Rip City Project",
     "published": "2026-10-09T15:03:36+00:00",
     "summary": "Ja Morant’s playmaking is already making Deni Avdija more efficient for Blazers Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Max Fried’s postseason woes continue — but there’s good news! - Jewish Telegraphic Agency",
     "published": "2026-10-09T15:00:00+00:00",
     "summary": "Max Fried’s postseason woes continue — but there’s good news! Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 - USA Today",
     "published": "2026-10-09T02:59:03+00:00",
     "summary": "Philadelphia 76ers at Brooklyn Nets - NBA Game Summary - Oct 08, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf - Ynetnews",
     "published": "2026-10-09T02:50:33+00:00",
     "summary": "LeBron loses in Philadelphia debut in preseason game - against Wolf and Ben Saraf Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Video - Trail Blazers Should Make Deflections a Public Standard - roundtable.io",
     "published": "2026-10-09T01:42:31+00:00",
     "summary": "Video - Trail Blazers Should Make Deflections a Public Standard roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors - Yahoo",
     "published": "2026-10-08T21:13:41+00:00",
     "summary": "4 Winners, 2 Losers from Blazers Preseason Opener vs. Warriors Yahoo"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija goes for team-high 23 points vs. GSW - NBC Sports",
     "published": "2026-10-08T18:32:36+00:00",
     "summary": "Deni Avdija goes for team-high 23 points vs. GSW NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win - CBS Sports",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Trail Blazers' Deni Avdija: Hits for team-high 23 in preseason win CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija News: Hits for team-high 23 in preseason win - RotoWire",
     "published": "2026-10-08T14:24:51+00:00",
     "summary": "Deni Avdija News: Hits for team-high 23 in preseason win RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls - Hoops Wire",
     "published": "2026-10-08T06:45:01+00:00",
     "summary": "NBA Notes: Blazers, Deni Avdija, Warriors, Brandon Williams, Bulls Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers win preseason opener over Golden State - KATU",
     "published": "2026-10-08T05:37:53+00:00",
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
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija with the and-1 bucket - ESPN India",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN India"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija with the and-1 bucket - ESPN",
     "published": "2026-10-08T03:32:04+00:00",
     "summary": "Deni Avdija with the and-1 bucket ESPN"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Ben Saraf Player Full High Lowlights vs HORNETS 06 10 2026 NBA PRESEASON Game - YouTube",
     "published": "2026-10-07T15:51:52+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs HORNETS 06 10 2026 NBA PRESEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Nets' Ben Saraf: Scores eight off bench - CBS Sports",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Nets' Ben Saraf: Scores eight off bench CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf News: Scores eight off bench - RotoWire",
     "published": "2026-10-07T14:53:31+00:00",
     "summary": "Ben Saraf News: Scores eight off bench RotoWire"
    }
   ]
  }
 ]
}
</input>