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
     "kickoff_utc": "2026-10-13T00:00:00Z",
     "home": "Bragantino",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "4-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T16:45:00Z",
     "home": "Sabah FK",
     "away": "Slavia Praha",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T16:45:00Z",
     "home": "RC Lens",
     "away": "Sporting CP",
     "status": "FINISHED",
     "score": "0-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Millwall",
     "away": "Swansea",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Burnley",
     "away": "Charlton",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Wolverhampton",
     "away": "Bolton",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Wrexham",
     "away": "West Brom",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Cardiff",
     "away": "Watford",
     "status": "FINISHED",
     "score": "5-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T18:45:00Z",
     "home": "Bristol City",
     "away": "Blackburn",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Arsenal",
     "away": "Lille",
     "status": "FINISHED",
     "score": "3-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Birmingham",
     "away": "Preston NE",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "RB Leipzig",
     "away": "PSV",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Galatasaray",
     "away": "Barça",
     "status": "FINISHED",
     "score": "1-4"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Viking",
     "away": "Bayern",
     "status": "FINISHED",
     "score": "3-3"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Stoke",
     "away": "Middlesbrough",
     "status": "FINISHED",
     "score": "2-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Inter",
     "away": "Club Brugge",
     "status": "FINISHED",
     "score": "3-4"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Villarreal",
     "away": "Napoli",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-13T19:00:00Z",
     "home": "Atleti",
     "away": "Man United",
     "status": "FINISHED",
     "score": "2-0"
    }
   ],
   "today": [
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T16:45:00Z",
     "home": "LASK",
     "away": "Liverpool",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T16:45:00Z",
     "home": "Feyenoord",
     "away": "Como 1907",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "Portsmouth",
     "away": "Sheffield Utd",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "Norwich",
     "away": "Southampton",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "QPR",
     "away": "Derby County",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Real Betis",
     "away": "Porto",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Roma",
     "away": "Real Madrid",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Sl. Bratislava",
     "away": "Stuttgart",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Bodø/Glimt",
     "away": "Dortmund",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Shaktar",
     "away": "PAE AEK",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Man City",
     "away": "PSG",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Lincoln City",
     "away": "West Ham",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Aston Villa",
     "away": "Fenerbahçe",
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
     "title": "Saka responds to Arteta's challenge with 'huge impact'",
     "published": "2026-10-13T23:03:04+00:00",
     "summary": "Bukayo Saka responds to the challenge set by Mikel Arteta as he comes off the bench to change the game against Lille in the Champions League."
    },
    {
     "ref": "bbc_football#1",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-13T22:47:00+00:00",
     "summary": "After two standout displays, has Le Tissier made a case to start alongside Bronze?"
    },
    {
     "ref": "bbc_football#2",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-13T22:47:00+00:00",
     "summary": "After two standout displays, has Le Tissier made a case to start alongside Bronze?"
    },
    {
     "ref": "bbc_football#3",
     "title": "Swans' Eom the target of alleged racism at Millwall",
     "published": "2026-10-13T22:23:48+00:00",
     "summary": "Swansea City head coach Vitor Matos says the lengthy stoppage during their 1-0 win away at Millwall was a result of racist abuse aimed at winger Ji-sung Eom."
    },
    {
     "ref": "bbc_football#4",
     "title": "McArdle 'really encouraged' despite Portugal loss",
     "published": "2026-10-13T22:20:39+00:00",
     "summary": "Northern Ireland manager Michael McArdle says their play-off defeat by Portugal is \"the start of a new identity\" despite their heavy 7-1 aggregate loss."
    },
    {
     "ref": "bbc_football#5",
     "title": "McArdle 'really encouraged' despite Portugal loss",
     "published": "2026-10-13T22:20:39+00:00",
     "summary": "Northern Ireland manager Michael McArdle says their play-off defeat by Portugal is \"the start of a new identity\" despite their heavy 7-1 aggregate loss."
    },
    {
     "ref": "bbc_football#6",
     "title": "'Unplayable' Stanway a free-scoring warrior for Lionesses",
     "published": "2026-10-13T22:15:44+00:00",
     "summary": "Whatever the game, whatever the result, Georgia Stanway always seems to score for England."
    },
    {
     "ref": "bbc_football#7",
     "title": "'Unplayable' Stanway a free-scoring warrior for Lionesses",
     "published": "2026-10-13T22:15:44+00:00",
     "summary": "Whatever the game, whatever the result, Georgia Stanway always seems to score for England."
    },
    {
     "ref": "bbc_football#8",
     "title": "Republic of Ireland to 'lock in' for World Cup dream",
     "published": "2026-10-13T21:52:37+00:00",
     "summary": "Republic of Ireland captain Katie McCabe is already focused on the final World Cup play-off with Poland after a big win over Kazakhstan."
    },
    {
     "ref": "bbc_football#9",
     "title": "Republic of Ireland to 'lock in' for World Cup dream",
     "published": "2026-10-13T21:52:37+00:00",
     "summary": "Republic of Ireland captain Katie McCabe is already focused on the final World Cup play-off with Poland after a big win over Kazakhstan."
    },
    {
     "ref": "bbc_football#10",
     "title": "Martinez issues scathing attack on Man Utd board - has he made things worse?",
     "published": "2026-10-13T21:43:09+00:00",
     "summary": "Lisandro Martinez launches a blistering attack on Manchester United's hierarchy for not strengthening the squad following qualification for the Champions League."
    },
    {
     "ref": "bbc_football#11",
     "title": "Pressure on Norway in play-off final - Wilkinson",
     "published": "2026-10-13T21:32:09+00:00",
     "summary": "Rhian Wilkinson says the pressure will be on Gemma Grainger's Norway in their Women's World Cup play-off final against Wales in December."
    },
    {
     "ref": "bbc_football#12",
     "title": "Pressure on Norway in play-off final - Wilkinson",
     "published": "2026-10-13T21:32:09+00:00",
     "summary": "Rhian Wilkinson says the pressure will be on Gemma Grainger's Norway in their Women's World Cup play-off final against Wales in December."
    },
    {
     "ref": "bbc_football#13",
     "title": "Richarlison scores as Spurs under-21s lose in EFL Trophy",
     "published": "2026-10-13T21:31:34+00:00",
     "summary": "Out-of-favour Tottenham striker Richarlison scores for the club's under-21s in their EFL Trophy penalty defeat at Cheltenham."
    },
    {
     "ref": "bbc_football#14",
     "title": "Goal crisis & in drop zone - so why is Spurs' £60m striker stuck in U21s?",
     "published": "2026-10-13T20:39:18+00:00",
     "summary": "After being left out of Tottenham's Premier League squad last month, Richarlison has been left to feature for the under-21s side"
    },
    {
     "ref": "bbc_football#15",
     "title": "Watch: Scotland beat Czechs to set up Sweden play-off",
     "published": "2026-10-13T20:34:16+00:00",
     "summary": "Watch the goals as Scotland twice come from behind to beat the Czech Republic 3-2 on Paisley and progress 5-2 on aggregate to a Women's World Cup play-off final against Sweden."
    },
    {
     "ref": "bbc_football#16",
     "title": "Watch: Scotland beat Czechs to set up Sweden play-off",
     "published": "2026-10-13T20:34:16+00:00",
     "summary": "Watch the goals as Scotland twice come from behind to beat the Czech Republic 3-2 on Paisley and progress 5-2 on aggregate to a Women's World Cup play-off final against Sweden."
    },
    {
     "ref": "bbc_football#17",
     "title": "Porro eyes La Liga return - Wednesday's gossip",
     "published": "2026-10-13T20:06:30+00:00",
     "summary": "Tottenham's Pedro Porro wants Barcelona move, multiple Premier League clubs chase Croatia striker Dion Beljo, Chelsea eye January swoop for Frenkie de Jong."
    },
    {
     "ref": "bbc_football#18",
     "title": "PSG's Luis Enrique hopes Man City avoid sanctions",
     "published": "2026-10-13T17:33:33+00:00",
     "summary": "PSG boss Luis Enrique says he was surprised to learn Manchester City had been found guilty of breaching Premier League financial rules and hopes the club avoid sanctions."
    },
    {
     "ref": "bbc_football#19",
     "title": "Majority of clubs on edge of 'financial disaster' - regulator",
     "published": "2026-10-13T17:10:46+00:00",
     "summary": "Research by the Independent Football Regulator finds 94% of clubs are loss-making, and more than 60% of EFL and National League clubs are technically insolvent."
    },
    {
     "ref": "bbc_football#20",
     "title": "Bournemouth open to selling Scott for £100m in January",
     "published": "2026-10-13T17:00:31+00:00",
     "summary": "Bournemouth are open to selling England midfielder Alex Scott in January under certain conditions."
    },
    {
     "ref": "bbc_football#21",
     "title": "Liverpool's Wirtz problem - does he need to be dropped?",
     "published": "2026-10-13T16:45:59+00:00",
     "summary": "More than a year since his £116m move, Florian Wirtz is still struggling to hit top form at Liverpool - so does he need to be dropped?"
    },
    {
     "ref": "bbc_football#22",
     "title": "Independent regulator waiting for Man City appeal",
     "published": "2026-10-13T16:14:23+00:00",
     "summary": "David Kogan, chair of football's independent regulator, says the body has to \"go on the evidence\" before making any decision in the case against Manchester City."
    },
    {
     "ref": "bbc_football#23",
     "title": "Football regulator says he would quit over Man City political interference",
     "published": "2026-10-13T16:00:18+00:00",
     "summary": "The head of English football's independent regulator says he will resign if he encounters any political interference over Manchester City's future."
    },
    {
     "ref": "bbc_football#24",
     "title": "Majority of clubs on edge of 'financial disaster' - regulator",
     "published": "2026-10-13T16:00:11+00:00",
     "summary": "English football's finances are \"dangerously exposed, with the majority of clubs living on the edge of financial disaster\", a new report says."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Availability Report | Five Absent vs. Miami - New York City FC",
     "published": "2026-10-14T03:34:23+00:00",
     "summary": "Availability Report | Five Absent vs. Miami New York City FC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi-led Inter Miami aims to subdue New York City FC - Field Level Media",
     "published": "2026-10-13T23:13:35+00:00",
     "summary": "Lionel Messi-led Inter Miami aims to subdue New York City FC Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi’s Inter Miami could book their 2026 MLS Cup playoff ticket against NYCFC - World Soccer Talk",
     "published": "2026-10-13T22:57:29+00:00",
     "summary": "Lionel Messi’s Inter Miami could book their 2026 MLS Cup playoff ticket against NYCFC World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Inter Miami vs. New York City FC Preview - Hooligan Soccer",
     "published": "2026-10-13T22:00:00+00:00",
     "summary": "Inter Miami vs. New York City FC Preview Hooligan Soccer"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami vs New York City FC Prediction and Betting Tips | October 14th 2026 - Sportskeeda",
     "published": "2026-10-13T21:47:52+00:00",
     "summary": "Inter Miami vs New York City FC Prediction and Betting Tips | October 14th 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Inter Miami Hosts New York City in MLS Eastern Conference Match - SuaraGarut.ID",
     "published": "2026-10-13T21:40:00+00:00",
     "summary": "Inter Miami Hosts New York City in MLS Eastern Conference Match SuaraGarut.ID"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami host New York City FC on Wednesday - OneFootball",
     "published": "2026-10-13T21:08:32+00:00",
     "summary": "Inter Miami host New York City FC on Wednesday OneFootball"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "What's next for Lionel Messi at Inter Miami after his Argentina retirement? - MLS Multiplex",
     "published": "2026-10-13T20:45:47+00:00",
     "summary": "What's next for Lionel Messi at Inter Miami after his Argentina retirement? MLS Multiplex"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Press Conference - Aiden O'Neill | Inter Miami vs. New York City FC - New York City FC",
     "published": "2026-10-13T20:29:58+00:00",
     "summary": "Press Conference - Aiden O'Neill | Inter Miami vs. New York City FC New York City FC"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MATCH PREVIEW: Inter Miami CF Set to Host New York City FC on Wednesday - Inter Miami CF",
     "published": "2026-10-13T20:25:08+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Set to Host New York City FC on Wednesday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Garber won't dish on exchange with Messi: 'Between me and Leo' - ESPN Singapore",
     "published": "2026-10-13T20:01:45+00:00",
     "summary": "Garber won't dish on exchange with Messi: 'Between me and Leo' ESPN Singapore"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi’s Argentina retirement sparks fresh questions about his club future - Yahoo Sports",
     "published": "2026-10-13T20:00:00+00:00",
     "summary": "Lionel Messi’s Argentina retirement sparks fresh questions about his club future Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Matías Galarza: “It would be amazing for Messi to play in the Copa Libertadores too” - Diario AS",
     "published": "2026-10-13T19:44:52+00:00",
     "summary": "Matías Galarza: “It would be amazing for Messi to play in the Copa Libertadores too” Diario AS"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "MLS CLINCHING SCENARIOS: Nashville, Miami, Chicago, New England, Charlotte, St. Louis, Dallas, San Jose, Houston - Front Row Soccer",
     "published": "2026-10-13T18:30:48+00:00",
     "summary": "MLS CLINCHING SCENARIOS: Nashville, Miami, Chicago, New England, Charlotte, St. Louis, Dallas, San Jose, Houston Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi Chasing an Unexpected MLS Record: How Many Goals Stand Between Him and History? - Soy Futbol",
     "published": "2026-10-13T18:26:29+00:00",
     "summary": "Messi Chasing an Unexpected MLS Record: How Many Goals Stand Between Him and History? Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MLS commissioner breaks silence on mysterious Lionel Messi confrontation - New York Post",
     "published": "2026-10-13T17:28:00+00:00",
     "summary": "MLS commissioner breaks silence on mysterious Lionel Messi confrontation New York Post"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami looked good against DC United, but still has a lot to prove - Inter Heron",
     "published": "2026-10-13T17:00:00+00:00",
     "summary": "Inter Miami looked good against DC United, but still has a lot to prove Inter Heron"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi’s attendance at the Ballon d’Or gala in London reportedly remains unconfirmed - World Soccer Talk",
     "published": "2026-10-13T16:10:17+00:00",
     "summary": "Lionel Messi’s attendance at the Ballon d’Or gala in London reportedly remains unconfirmed World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Keys To The Match: Onto Miami - New York City FC",
     "published": "2026-10-13T15:37:04+00:00",
     "summary": "Keys To The Match: Onto Miami New York City FC"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi snubbed! Argentina legend not invited to present a trophy at the Ballon d’Or as gala attendance remains uncertain - Goal.com",
     "published": "2026-10-13T15:29:00+00:00",
     "summary": "Lionel Messi snubbed! Argentina legend not invited to present a trophy at the Ballon d’Or as gala attendance remains uncertain Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Atlanta United FC vs Inter Miami CF Prediction, 10/17/2026 Soccer Pick, Tips and Odds - Doc's Sports",
     "published": "2026-10-13T15:23:40+00:00",
     "summary": "Atlanta United FC vs Inter Miami CF Prediction, 10/17/2026 Soccer Pick, Tips and Odds Doc's Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "All canceled? Will Messi attend the 2026 Ballon d'Or ceremony? - Dailysports",
     "published": "2026-10-13T15:12:28+00:00",
     "summary": "All canceled? Will Messi attend the 2026 Ballon d'Or ceremony? Dailysports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Ballon d'Or leaked! Messi will receive the trophy! - Dailysports",
     "published": "2026-10-13T14:42:15+00:00",
     "summary": "Ballon d'Or leaked! Messi will receive the trophy! Dailysports"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "MLS Commissioner Don Garber Deflects on Messi Confrontation - Front Office Sports",
     "published": "2026-10-13T14:02:29+00:00",
     "summary": "MLS Commissioner Don Garber Deflects on Messi Confrontation Front Office Sports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami is most valuable MLS club brand, worth $254 million - Brand Finance",
     "published": "2026-10-13T13:56:05+00:00",
     "summary": "Inter Miami is most valuable MLS club brand, worth $254 million Brand Finance"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "NBA All-Star shares hilarious Draymond Green story - Warriors Wire",
     "published": "2026-10-13T17:35:00+00:00",
     "summary": "NBA All-Star shares hilarious Draymond Green story Warriors Wire"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Trail Blazers See Promising Outlook On Upcoming Season As The Playoffs Are In Sight - roundtable.io",
     "published": "2026-10-13T12:05:22+00:00",
     "summary": "Trail Blazers See Promising Outlook On Upcoming Season As The Playoffs Are In Sight roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Nolan Traoré records 17 points in 20 minutes - NBC Sports",
     "published": "2026-10-13T08:16:45+00:00",
     "summary": "Nolan Traoré records 17 points in 20 minutes NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years - Fadeaway World",
     "published": "2026-10-13T06:48:25+00:00",
     "summary": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija looks ready for opening night after preseason win - OregonLive.com",
     "published": "2026-10-13T04:55:00+00:00",
     "summary": "Deni Avdija looks ready for opening night after preseason win OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers - NBA.com",
     "published": "2026-10-13T04:38:06+00:00",
     "summary": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Mara posts double-double, Traore sparks Nets, Lions fall in Portland - Eurohoops",
     "published": "2026-10-13T03:54:15+00:00",
     "summary": "Mara posts double-double, Traore sparks Nets, Lions fall in Portland Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Portland Trail Blazers vs. London Lions NBA preseason: Oct. 12, 2026 - OregonLive.com",
     "published": "2026-10-13T02:13:27+00:00",
     "summary": "Portland Trail Blazers vs. London Lions NBA preseason: Oct. 12, 2026 OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "The Biggest Blazers Development That Actually Matters Moving Forward - Sports Illustrated",
     "published": "2026-10-12T19:00:03+00:00",
     "summary": "The Biggest Blazers Development That Actually Matters Moving Forward Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Blockbuster Trade Could Turn Trail Blazers Into Legitimate Title Contenders - Fadeaway World",
     "published": "2026-10-12T17:57:24+00:00",
     "summary": "Blockbuster Trade Could Turn Trail Blazers Into Legitimate Title Contenders Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing - Yahoo Sports",
     "published": "2026-10-12T16:52:49+00:00",
     "summary": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Blazers Make History in Second Preseason Game - Sports Illustrated",
     "published": "2026-10-12T16:03:25+00:00",
     "summary": "Blazers Make History in Second Preseason Game Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” - Eurohoops",
     "published": "2026-10-12T14:28:00+00:00",
     "summary": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Video - Blazers Set to Face Familiar Name on the Wrong Sideline - roundtable.io",
     "published": "2026-10-12T12:00:42+00:00",
     "summary": "Video - Blazers Set to Face Familiar Name on the Wrong Sideline roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija on why it is impossible to guard Nikola … - Yahoo Sports",
     "published": "2026-10-12T11:32:51+00:00",
     "summary": "Deni Avdija on why it is impossible to guard Nikola … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul - Basketball Network",
     "published": "2026-10-12T10:11:00+00:00",
     "summary": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast - Sportskeeda",
     "published": "2026-10-12T05:36:00+00:00",
     "summary": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard - Yahoo Sports",
     "published": "2026-10-12T02:52:00+00:00",
     "summary": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija credits Chauncey Billups for helping turn his career around - Yahoo Sports",
     "published": "2026-10-11T18:06:58+00:00",
     "summary": "Deni Avdija credits Chauncey Billups for helping turn his career around Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation - EssentiallySports",
     "published": "2026-10-11T17:55:00+00:00",
     "summary": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation EssentiallySports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Ben Saraf Player Full High Lowlights vs 76ERS 08 10 2026 NBA PRESEASON Game - YouTube",
     "published": "2026-10-11T14:45:28+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs 76ERS 08 10 2026 NBA PRESEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story - YouTube",
     "published": "2026-10-11T12:27:42+00:00",
     "summary": "Deni Avdija on Becoming an NBA All-Star, Playing In NBA Playoffs & Hilarious Draymond Green Story YouTube"
    }
   ]
  }
 ]
}
</input>