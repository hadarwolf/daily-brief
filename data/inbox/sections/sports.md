Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "Primera Division",
  "home": "Real Betis",
  "away": "Barça",
  "kickoff_utc": "2026-10-17T16:30:00Z"
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
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-16T00:30:00Z",
     "home": "Estudiantes LP",
     "away": "Flamengo",
     "status": "FINISHED",
     "score": "0-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-16T18:00:00Z",
     "home": "Heerenveen",
     "away": "Excelsior",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-16T18:30:00Z",
     "home": "Frankfurt",
     "away": "1. FC Köln",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-16T18:45:00Z",
     "home": "Frosinone",
     "away": "Sassuolo",
     "status": "FINISHED",
     "score": "4-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-16T18:45:00Z",
     "home": "Le Mans",
     "away": "Toulouse",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-16T19:00:00Z",
     "home": "Burnley",
     "away": "Wolverhampton",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-16T19:00:00Z",
     "home": "Deportivo",
     "away": "Levante",
     "status": "FINISHED",
     "score": "1-1"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-16T23:00:00Z",
     "home": "Mirassol",
     "away": "Internacional",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Everton",
     "away": "Chelsea",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Middlesbrough",
     "away": "Cardiff",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Watford",
     "away": "Charlton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T11:30:00Z",
     "home": "Millwall",
     "away": "Lincoln City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T12:00:00Z",
     "home": "Espanyol",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T13:00:00Z",
     "home": "Venezia FC",
     "away": "Napoli",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Elversberg",
     "away": "Augsburg",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "HSV",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Union Berlin",
     "away": "Dortmund",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Schalke",
     "away": "Mainz",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T13:30:00Z",
     "home": "Bremen",
     "away": "SC Paderborn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Bristol City",
     "away": "Sheffield Utd",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Norwich",
     "away": "Portsmouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "West Brom",
     "away": "Blackburn",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Man City",
     "away": "Ipswich Town",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Swansea",
     "away": "West Ham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Birmingham",
     "away": "QPR",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Southampton",
     "away": "Bolton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Wrexham",
     "away": "Preston NE",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Derby County",
     "away": "Stoke",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Brentford",
     "away": "Liverpool",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T14:00:00Z",
     "home": "Fulham",
     "away": "Hull City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T14:15:00Z",
     "home": "Villarreal",
     "away": "Elche",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T14:30:00Z",
     "home": "Den Haag",
     "away": "PSV",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T15:15:00Z",
     "home": "Strasbourg",
     "away": "PSG",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T16:00:00Z",
     "home": "Bologna",
     "away": "Inter",
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
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-17T16:30:00Z",
     "home": "Bayern",
     "away": "RB Leipzig",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-17T16:30:00Z",
     "home": "Newcastle",
     "away": "Aston Villa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T18:00:00Z",
     "home": "Telstar",
     "away": "Feyenoord",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Troyes",
     "away": "RC Lens",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Lille",
     "away": "Brest",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-17T18:45:00Z",
     "home": "Roma",
     "away": "Genoa",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-17T19:00:00Z",
     "home": "Sparta",
     "away": "Willem II",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-17T19:00:00Z",
     "home": "Valencia",
     "away": "Athletic",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T21:00:00Z",
     "home": "Botafogo",
     "away": "Chapecoense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T21:30:00Z",
     "home": "Mineiro",
     "away": "Coritiba",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-17T22:30:00Z",
     "home": "Paranaense",
     "away": "Palmeiras",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T00:00:00Z",
     "home": "São Paulo",
     "away": "Vasco da Gama",
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
     "played": 8,
     "pts": 14,
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
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Cagliari",
     "played": 6,
     "pts": 13,
     "gd": 3
    },
    {
     "pos": 6,
     "team": "Milan",
     "played": 6,
     "pts": 12,
     "gd": 6
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Arsenal",
      "away": "Lille",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
    "upcoming": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-21T19:00:00Z",
      "home": "Bayern",
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
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-13T19:00:00Z",
      "home": "Galatasaray",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-4"
     }
    ],
    "upcoming": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-17T16:30:00Z",
      "home": "Real Betis",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-20T19:00:00Z",
      "home": "PSG",
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
     "kickoff_utc": "2026-10-14T23:30:00",
     "home": "Inter Miami",
     "away": "New York City FC",
     "score": "2-0"
    }
   ],
   "upcoming": [
    {
     "competition": "American Major League Soccer",
     "kickoff_utc": "2026-10-17T23:30:00",
     "home": "Atlanta United",
     "away": "Inter Miami",
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
     "title": "Matos on tactics, Klopp's influence, and taking Swans to top of the league",
     "published": "2026-10-17T05:56:25+00:00",
     "summary": "Swansea boss Vitor Matos spent five years as an elite development coach at Liverpool, but it would be unfair to paint him with a Jurgen Klopp-shaped brush entirely."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-17T05:15:17+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#2",
     "title": "Bellingham agrees new Real deal - Saturday's gossip",
     "published": "2026-10-16T21:57:37+00:00",
     "summary": "Real Madrid midfielder Jude Bellingham ready to commit his future to La Liga club, Arsenal and Liverpool told price for Brentford's Kevin Schade, Man Utd and Chelsea among clubs monitoring Jules Kounde's future at Barcelona, plus more."
    },
    {
     "ref": "bbc_football#3",
     "title": "Ranking the Premier League's all-time greatest super subs",
     "published": "2026-10-16T21:15:47+00:00",
     "summary": "Some players are destined to make their biggest impact off the bench, but who are the top 10 Premier League super subs of all time?"
    },
    {
     "ref": "bbc_football#4",
     "title": "Do Manchester City have any grounds to win their appeal?",
     "published": "2026-10-16T16:17:01+00:00",
     "summary": "Manchester City face \"substantial hurdles\" to overcome if they are to have any chance of winning their appeal after being found guilty of breaking the Premier League's financial rules, a leading lawyer has told BBC Sport."
    },
    {
     "ref": "bbc_football#5",
     "title": "Feel-good Koumas story something for Liverpool to smile about",
     "published": "2026-10-16T16:06:37+00:00",
     "summary": "Lewis Koumas on breaking Steven Gerrard's record, seizing his opportunity under Andoni Iraola, and why he couldn't sleep after playing Manchester City."
    },
    {
     "ref": "bbc_football#6",
     "title": "'Our roots are Man Utd' - but FC United ethos 'more important than ever'",
     "published": "2026-10-16T16:01:49+00:00",
     "summary": "FC United are hoping for FA Cup success, 21 years after being formed as a supporter-owned club following the Glazer family takeover of Manchester United."
    },
    {
     "ref": "bbc_football#7",
     "title": "Does Scott's Disney+ exit unmask wider issue in coverage of women's game?",
     "published": "2026-10-16T15:49:55+00:00",
     "summary": "Alex Scott's sudden departure from her Disney+ presenter role reveals a pressing challenge for broadcasters of women's football."
    },
    {
     "ref": "bbc_football#8",
     "title": "Does Scott's Disney+ exit unmask wider issue in coverage of women's game?",
     "published": "2026-10-16T15:49:55+00:00",
     "summary": "Alex Scott's sudden departure from her Disney+ presenter role reveals a pressing challenge for broadcasters of women's football."
    },
    {
     "ref": "bbc_football#9",
     "title": "Real demand Tebas resign over Goebbels comparison",
     "published": "2026-10-16T15:43:32+00:00",
     "summary": "Real Madrid have called for the \"immediate resignation\" of La Liga president Javier Tebas after he compared the club's management to Joseph Goebbels."
    },
    {
     "ref": "bbc_football#10",
     "title": "'A bit early' for Rangers to put pressure on Celtic & Hearts - McInnes",
     "published": "2026-10-16T15:32:27+00:00",
     "summary": "Derek McInnes dismissed the idea that Rangers could put pressure on Celtic and Hearts with a win against Dundee on Saturday evening."
    },
    {
     "ref": "bbc_football#11",
     "title": "'A bit early' for Rangers to put pressure on Celtic & Hearts - McInnes",
     "published": "2026-10-16T15:32:27+00:00",
     "summary": "Derek McInnes dismissed the idea that Rangers could put pressure on Celtic and Hearts with a win against Dundee on Saturday evening."
    },
    {
     "ref": "bbc_football#12",
     "title": "Arteta told Arsenal job cuts will help create success",
     "published": "2026-10-16T15:31:54+00:00",
     "summary": "Arsenal boss Mikel Arteta says he was told the club's decision to cut 60 jobs had been made to \"achieve the success we want to create\"."
    },
    {
     "ref": "bbc_football#13",
     "title": "Football Daily",
     "published": "2026-10-16T14:52:00+00:00",
     "summary": "John Murray, Ian Dennis & Ali Bruce-Ball lift the lid on life as 5 Live commentators."
    },
    {
     "ref": "bbc_football#14",
     "title": "Police investigating antisemitic Nazi chants from Hajduk Split fans",
     "published": "2026-10-16T14:22:19+00:00",
     "summary": "Footage shows Hajduk supporters chanting outside the stadium about Auschwitz and Adolf Hitler before their Conference League match against Ajax."
    },
    {
     "ref": "bbc_football#15",
     "title": "'I am telling you the truth' - Carrick on Martinez fallout",
     "published": "2026-10-16T13:59:12+00:00",
     "summary": "Manchester United boss Michael Carrick says he is telling the truth about the club moving on from Lisandro Martinez's explosive post-match interview."
    },
    {
     "ref": "bbc_football#16",
     "title": "Celtic-Hearts showdown tops weekend's Premiership bill",
     "published": "2026-10-16T13:52:39+00:00",
     "summary": "Celtic face Heart of Midlothian in the big game of the Scottish Premiership weekend on Sunday, but there is plenty of interest in Saturday's five games too."
    },
    {
     "ref": "bbc_football#17",
     "title": "Celtic-Hearts showdown tops weekend's Premiership bill",
     "published": "2026-10-16T13:52:39+00:00",
     "summary": "Celtic face Heart of Midlothian in the big game of the Scottish Premiership weekend on Sunday, but there is plenty of interest in Saturday's five games too."
    },
    {
     "ref": "bbc_football#18",
     "title": "Chelsea's James out for three months after knee surgery",
     "published": "2026-10-16T13:36:09+00:00",
     "summary": "Chelsea captain Reece James is set to miss three months of action after undergoing knee surgery."
    },
    {
     "ref": "bbc_football#19",
     "title": "Harrogate boss Weaver becomes co-owner",
     "published": "2026-10-16T13:15:05+00:00",
     "summary": "Long-serving Harrogate Town manager Simon Weaver becomes co-owner of the National League club, ending his father's ownership."
    },
    {
     "ref": "bbc_football#20",
     "title": "Spain handed partial stadium closure after discriminatory chants v Egypt",
     "published": "2026-10-16T11:48:33+00:00",
     "summary": "Spain must play their next international friendly with a partial stadium closure after supporters sang a discriminatory chant about Muslims multiple times during a game against Egypt on 31 March."
    },
    {
     "ref": "bbc_football#21",
     "title": "'Not about me' - Arbeloa dismisses future questions",
     "published": "2026-10-16T10:24:57+00:00",
     "summary": "Fulham head coach Alvaro Arbeloa says the focus should not be on him as his side searches for a first Premier League win this season against Hull City this weekend."
    },
    {
     "ref": "bbc_football#22",
     "title": "Arrest made after alleged racial abuse of Swansea's Eom",
     "published": "2026-10-16T10:00:27+00:00",
     "summary": "Police investigating a report of racial abuse during Millwall's Championship game against Swansea City have arrested a man."
    },
    {
     "ref": "bbc_football#23",
     "title": "How to follow the Premier League on the BBC this weekend",
     "published": "2026-10-16T09:52:49+00:00",
     "summary": "Our Ask Me Anything team explains how to follow matches from week seven of the Premier League season on the BBC this weekend."
    },
    {
     "ref": "bbc_football#24",
     "title": "'I'm fortunate to be alive' - Merino relives bus attack",
     "published": "2026-10-16T09:16:31+00:00",
     "summary": "Arsenal and Spain midfielder Mikel Merino reflects on the attack on Dortmund's team bus in 2017, when he was 20 years old."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi given green light for whirlwind Spain trip just 48 hours before Inter Miami fixture - Goal.com",
     "published": "2026-10-17T06:43:26+00:00",
     "summary": "Lionel Messi given green light for whirlwind Spain trip just 48 hours before Inter Miami fixture Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Atlanta United vs Inter Miami: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-17T04:00:21+00:00",
     "summary": "Atlanta United vs Inter Miami: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-17T03:42:24+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi to leave Inter Miami for Asturias award ceremony - Operativ Məlumat Mərkəzi",
     "published": "2026-10-17T03:37:12+00:00",
     "summary": "Messi to leave Inter Miami for Asturias award ceremony Operativ Məlumat Mərkəzi"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Atlanta Utd v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-17T03:27:50+00:00",
     "summary": "Atlanta Utd v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Miami coach unfazed as Messi set to collect prestigious award in Spain - The Daily Star",
     "published": "2026-10-17T03:04:34+00:00",
     "summary": "Miami coach unfazed as Messi set to collect prestigious award in Spain The Daily Star"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Major League Soccer - Goal.com",
     "published": "2026-10-17T02:48:58+00:00",
     "summary": "Major League Soccer Goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-10-17T01:05:18+00:00",
     "summary": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Atlanta United faces must-win scenario in rematch with Inter Miami - Field Level Media",
     "published": "2026-10-17T00:41:00+00:00",
     "summary": "Atlanta United faces must-win scenario in rematch with Inter Miami Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi Leads Inter Miami Into High-Stakes MLS Playoffs - SportsGrid",
     "published": "2026-10-16T22:26:41+00:00",
     "summary": "Messi Leads Inter Miami Into High-Stakes MLS Playoffs SportsGrid"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi's trip to Spain raises questions: Miami coach settles his position - Goal.com",
     "published": "2026-10-16T21:01:52+00:00",
     "summary": "Messi's trip to Spain raises questions: Miami coach settles his position Goal.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi’s teammates face contract decisions as Inter Miami evaluate two players’ futures - World Soccer Talk",
     "published": "2026-10-16T20:58:25+00:00",
     "summary": "Lionel Messi’s teammates face contract decisions as Inter Miami evaluate two players’ futures World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MATCH PREVIEW: Inter Miami CF Visits Atlanta United in Pursuit of Third Consecutive Win - Inter Miami CF",
     "published": "2026-10-16T20:44:48+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Visits Atlanta United in Pursuit of Third Consecutive Win Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Match preview: Massive Miami match looms for Atlanta United - Atlanta United FC",
     "published": "2026-10-16T20:22:38+00:00",
     "summary": "Match preview: Massive Miami match looms for Atlanta United Atlanta United FC"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Kily González reveals what Inter Miami must do to get the best out of Lionel Messi - Diario AS",
     "published": "2026-10-16T20:12:58+00:00",
     "summary": "Kily González reveals what Inter Miami must do to get the best out of Lionel Messi Diario AS"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Availability report: Returner from suspension gives Atlanta United near-full squad ahead of Miami - Atlanta United FC",
     "published": "2026-10-16T19:20:37+00:00",
     "summary": "Availability report: Returner from suspension gives Atlanta United near-full squad ahead of Miami Atlanta United FC"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami visit Atlanta seeking third straight win and playoff momentum - OneFootball",
     "published": "2026-10-16T19:20:33+00:00",
     "summary": "Inter Miami visit Atlanta seeking third straight win and playoff momentum OneFootball"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami coach confirms Lionel Messi’s trip to Spain but says he’ll be available vs Red Bull New York - World Soccer Talk",
     "published": "2026-10-16T18:39:15+00:00",
     "summary": "Inter Miami coach confirms Lionel Messi’s trip to Spain but says he’ll be available vs Red Bull New York World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi vs Cristiano Ronaldo: The incredible assist stat that separates the Inter Miami star from Al-N... - World Soccer Talk",
     "published": "2026-10-16T17:38:35+00:00",
     "summary": "Lionel Messi vs Cristiano Ronaldo: The incredible assist stat that separates the Inter Miami star from Al-N... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Miami coach unbothered by Messi getting award in Spain 2 days before MLS game - ESPN India",
     "published": "2026-10-16T17:14:00+00:00",
     "summary": "Miami coach unbothered by Messi getting award in Spain 2 days before MLS game ESPN India"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "First Argentina games of ‘post Messi era’ confirmed - Diario AS",
     "published": "2026-10-16T16:11:28+00:00",
     "summary": "First Argentina games of ‘post Messi era’ confirmed Diario AS"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi keeps defying time as he reaches another extraordinary assist record in 2026 - World Soccer Talk",
     "published": "2026-10-16T16:09:50+00:00",
     "summary": "Lionel Messi keeps defying time as he reaches another extraordinary assist record in 2026 World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "[4K] Royal Holiday Palace – Lara Beach, Antalya, Turkey (review) Inter Miami Vs Toronto (Vlpsg8gl8P) - Unisba Media",
     "published": "2026-10-16T16:08:53+00:00",
     "summary": "[4K] Royal Holiday Palace – Lara Beach, Antalya, Turkey (review) Inter Miami Vs Toronto (Vlpsg8gl8P) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Lionel Messi After International Retirement: Can He Build a Lasting Legacy at Inter Miami? - Yahoo Sports",
     "published": "2026-10-16T16:08:28+00:00",
     "summary": "Lionel Messi After International Retirement: Can He Build a Lasting Legacy at Inter Miami? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Matchday 31: Messi's MVP form, Texas Derby & Hell is Real! - Yahoo Sports",
     "published": "2026-10-16T15:24:00+00:00",
     "summary": "Matchday 31: Messi's MVP form, Texas Derby & Hell is Real! Yahoo Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "A Jewish NBA season preview - Jewish Telegraphic Agency",
     "published": "2026-10-16T15:00:00+00:00",
     "summary": "A Jewish NBA season preview Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija vs Iceland: stats, game log - BasketNews.com",
     "published": "2026-10-15T07:17:35+00:00",
     "summary": "Deni Avdija vs Iceland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "NBA Most Improved Player Odds & Favorites for 2027 - sports.betmgm.com",
     "published": "2026-10-15T07:00:00+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija vs Poland: stats, game log - BasketNews.com",
     "published": "2026-10-15T06:12:30+00:00",
     "summary": "Deni Avdija vs Poland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija last 10 games: stats and game log - BasketNews.com",
     "published": "2026-10-15T05:34:32+00:00",
     "summary": "Deni Avdija last 10 games: stats and game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija last 5 games: stats and game log - BasketNews.com",
     "published": "2026-10-15T05:29:27+00:00",
     "summary": "Deni Avdija last 5 games: stats and game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija playoff stats: averages by season and series - BasketNews.com",
     "published": "2026-10-15T04:39:24+00:00",
     "summary": "Deni Avdija playoff stats: averages by season and series BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija vs Houston Rockets: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:19:14+00:00",
     "summary": "Deni Avdija vs Houston Rockets: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had - Rip City Project",
     "published": "2026-10-14T21:26:25+00:00",
     "summary": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Ben Saraf vs Dolomiti Energia Trento: stats, game log - BasketNews.com",
     "published": "2026-10-14T20:39:06+00:00",
     "summary": "Ben Saraf vs Dolomiti Energia Trento: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Ben Saraf vs Trefl Sopot: stats, game log - BasketNews.com",
     "published": "2026-10-14T19:49:31+00:00",
     "summary": "Ben Saraf vs Trefl Sopot: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Ben Saraf vs Wolves Twinsbet Vilnius: stats, game log - BasketNews.com",
     "published": "2026-10-14T19:04:59+00:00",
     "summary": "Ben Saraf vs Wolves Twinsbet Vilnius: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-14T17:06:24+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak - Sports Illustrated",
     "published": "2026-10-14T13:00:02+00:00",
     "summary": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija - Yahoo Sports",
     "published": "2026-10-14T12:00:05+00:00",
     "summary": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:47:31+00:00",
     "summary": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija vs Czech Republic: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:37:15+00:00",
     "summary": "Deni Avdija vs Czech Republic: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija vs France: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:05:29+00:00",
     "summary": "Deni Avdija vs France: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija vs Belgium: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:49:51+00:00",
     "summary": "Deni Avdija vs Belgium: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:47:55+00:00",
     "summary": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija vs Olympiacos Piraeus: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:13:46+00:00",
     "summary": "Deni Avdija vs Olympiacos Piraeus: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija vs FC Bayern Munich: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:11:55+00:00",
     "summary": "Deni Avdija vs FC Bayern Munich: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija vs Darussafaka Lassa Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:05:21+00:00",
     "summary": "Deni Avdija vs Darussafaka Lassa Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija vs CSKA Moscow: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:53+00:00",
     "summary": "Deni Avdija vs CSKA Moscow: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija vs Zenit Saint Petersburg: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:37+00:00",
     "summary": "Deni Avdija vs Zenit Saint Petersburg: stats, game log BasketNews.com"
    }
   ]
  }
 ]
}
</input>