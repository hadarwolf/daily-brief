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
     "title": "Listen: Focus on Championship as Stenhousemuir feel heat",
     "published": "2026-10-14T07:00:00+00:00",
     "summary": "A big weekend in the SPFL as Championship, League One and League Two races take shape."
    },
    {
     "ref": "bbc_football#1",
     "title": "Makhanya being tracked - Wednesday's gossip",
     "published": "2026-10-14T06:57:49+00:00",
     "summary": "Rangers are under no pressure to sell Olwethu Makhanya - but the 22-year-old South Africa defender is attracting plenty of interest."
    },
    {
     "ref": "bbc_football#2",
     "title": "How Ukrainians are uniting behind Shakhtar in London",
     "published": "2026-10-14T06:37:12+00:00",
     "summary": "Shakhtar Donetsk will be playing Champions League home games at Stamford Bridge this season. It is a scenario nobody wants ideally, but the UK's Ukrainian community is making the best of a difficult situation."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-14T06:19:21+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#4",
     "title": "'No excuses' - but is Villa's stadium rebuild affecting team?",
     "published": "2026-10-14T05:41:06+00:00",
     "summary": "With Villa Park's North Stand currently closed for building work, is the reduced capacity affecting Aston Villa's performances?"
    },
    {
     "ref": "bbc_football#5",
     "title": "South African striker swaps Sunday league for Champions League",
     "published": "2026-10-14T05:08:30+00:00",
     "summary": "A former student from Rotherham has climbed the football ladder from the bottom up."
    },
    {
     "ref": "bbc_football#6",
     "title": "Football Daily",
     "published": "2026-10-13T23:25:00+00:00",
     "summary": "Kelly Cates reacts to the Lisandro Martinez comments on the Man United hierarchy"
    },
    {
     "ref": "bbc_football#7",
     "title": "Saka responds to Arteta's challenge with 'huge impact'",
     "published": "2026-10-13T23:03:04+00:00",
     "summary": "Bukayo Saka responds to the challenge set by Mikel Arteta as he comes off the bench to change the game against Lille in the Champions League."
    },
    {
     "ref": "bbc_football#8",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-13T22:47:00+00:00",
     "summary": "After two standout displays, has Le Tissier made a case to start alongside Bronze?"
    },
    {
     "ref": "bbc_football#9",
     "title": "BBC Women's Football Weekly",
     "published": "2026-10-13T22:47:00+00:00",
     "summary": "After two standout displays, has Le Tissier made a case to start alongside Bronze?"
    },
    {
     "ref": "bbc_football#10",
     "title": "Swans' Eom the target of alleged racism at Millwall",
     "published": "2026-10-13T22:23:48+00:00",
     "summary": "Swansea City head coach Vitor Matos says the lengthy stoppage during their 1-0 win away at Millwall was a result of racist abuse aimed at winger Ji-sung Eom."
    },
    {
     "ref": "bbc_football#11",
     "title": "McArdle 'really encouraged' despite NI's Portugal loss",
     "published": "2026-10-13T22:20:39+00:00",
     "summary": "Northern Ireland manager Michael McArdle says their play-off defeat by Portugal is \"the start of a new identity\" despite their heavy 7-1 aggregate loss."
    },
    {
     "ref": "bbc_football#12",
     "title": "McArdle 'really encouraged' despite Portugal loss",
     "published": "2026-10-13T22:20:39+00:00",
     "summary": "Northern Ireland manager Michael McArdle says their play-off defeat by Portugal is \"the start of a new identity\" despite their heavy 7-1 aggregate loss."
    },
    {
     "ref": "bbc_football#13",
     "title": "'Unplayable' Stanway a free-scoring warrior for Lionesses",
     "published": "2026-10-13T22:15:44+00:00",
     "summary": "Whatever the game, whatever the result, Georgia Stanway always seems to score for England."
    },
    {
     "ref": "bbc_football#14",
     "title": "'Unplayable' Stanway a free-scoring warrior for Lionesses",
     "published": "2026-10-13T22:15:44+00:00",
     "summary": "Whatever the game, whatever the result, Georgia Stanway always seems to score for England."
    },
    {
     "ref": "bbc_football#15",
     "title": "Republic of Ireland to 'lock in' for World Cup dream",
     "published": "2026-10-13T21:52:37+00:00",
     "summary": "Republic of Ireland captain Katie McCabe is already focused on the final World Cup play-off with Poland after a big win over Kazakhstan."
    },
    {
     "ref": "bbc_football#16",
     "title": "Man Utd defender Martinez issues scathing attack on board",
     "published": "2026-10-13T21:43:09+00:00",
     "summary": "Lisandro Martinez launches a blistering attack on Manchester United's hierarchy for not strengthening the squad following qualification for the Champions League."
    },
    {
     "ref": "bbc_football#17",
     "title": "Pressure on Norway in play-off final - Wales boss Wilkinson",
     "published": "2026-10-13T21:32:09+00:00",
     "summary": "Rhian Wilkinson says the pressure will be on Gemma Grainger's Norway in their Women's World Cup play-off final against Wales in December."
    },
    {
     "ref": "bbc_football#18",
     "title": "Pressure on Norway in play-off final - Wilkinson",
     "published": "2026-10-13T21:32:09+00:00",
     "summary": "Rhian Wilkinson says the pressure will be on Gemma Grainger's Norway in their Women's World Cup play-off final against Wales in December."
    },
    {
     "ref": "bbc_football#19",
     "title": "Goal crisis & in drop zone - so why is Spurs' £60m striker stuck in U21s?",
     "published": "2026-10-13T20:39:18+00:00",
     "summary": "After being left out of Tottenham's Premier League squad last month, Richarlison has been left to feature for the under-21s side"
    },
    {
     "ref": "bbc_football#20",
     "title": "Watch: Scotland beat Czechs to set up Sweden play-off",
     "published": "2026-10-13T20:34:16+00:00",
     "summary": "Watch the goals as Scotland twice come from behind to beat the Czech Republic 3-2 on Paisley and progress 5-2 on aggregate to a Women's World Cup play-off final against Sweden."
    },
    {
     "ref": "bbc_football#21",
     "title": "Watch: Scotland beat Czechs to set up Sweden play-off",
     "published": "2026-10-13T20:34:16+00:00",
     "summary": "Watch the goals as Scotland twice come from behind to beat the Czech Republic 3-2 on Paisley and progress 5-2 on aggregate to a Women's World Cup play-off final against Sweden."
    },
    {
     "ref": "bbc_football#22",
     "title": "Porro eyes La Liga return - Wednesday's gossip",
     "published": "2026-10-13T20:06:30+00:00",
     "summary": "Tottenham's Pedro Porro wants Barcelona move, multiple Premier League clubs chase Croatia striker Dion Beljo, Chelsea eye January swoop for Frenkie de Jong."
    },
    {
     "ref": "bbc_football#23",
     "title": "PSG's Luis Enrique hopes Man City avoid sanctions",
     "published": "2026-10-13T17:33:33+00:00",
     "summary": "PSG boss Luis Enrique says he was surprised to learn Manchester City had been found guilty of breaching Premier League financial rules and hopes the club avoid sanctions."
    },
    {
     "ref": "bbc_football#24",
     "title": "Majority of clubs on edge of 'financial disaster' - regulator",
     "published": "2026-10-13T17:10:46+00:00",
     "summary": "Research by the Independent Football Regulator finds 94% of clubs are loss-making, and more than 60% of EFL and National League clubs are technically insolvent."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Atlanta United vs Inter Miami: Kalshi Promo Code & $25 Bonus - Squawka",
     "published": "2026-10-14T06:26:22+00:00",
     "summary": "Atlanta United vs Inter Miami: Kalshi Promo Code & $25 Bonus Squawka"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami CF vs New York City FC prediction and betting tips 14 October 2026 - Dailysports",
     "published": "2026-10-14T05:37:37+00:00",
     "summary": "Inter Miami CF vs New York City FC prediction and betting tips 14 October 2026 Dailysports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times - Goal.com",
     "published": "2026-10-14T05:11:21+00:00",
     "summary": "Major League Soccer (MLS) TV Schedule: Upcoming games, dates and kick-off times Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-10-14T05:05:08+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "The truth behind the rumor that Messi was invited to present the 2026 Ballon d'Or: That's absolutely not true! - Vietnam.vn",
     "published": "2026-10-14T03:48:46+00:00",
     "summary": "The truth behind the rumor that Messi was invited to present the 2026 Ballon d'Or: That's absolutely not true! Vietnam.vn"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "MIAvsNYC 10-14-2026 - New York City FC",
     "published": "2026-10-14T03:40:25+00:00",
     "summary": "MIAvsNYC 10-14-2026 New York City FC"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Availability Report | Five Absent vs. Miami - New York City FC",
     "published": "2026-10-14T03:34:23+00:00",
     "summary": "Availability Report | Five Absent vs. Miami New York City FC"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "NYCFC Faces Inter Miami After Another Late Collapse - SuaraGarut.ID",
     "published": "2026-10-14T00:08:22+00:00",
     "summary": "NYCFC Faces Inter Miami After Another Late Collapse SuaraGarut.ID"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi's Inter Miami Contract Shapes Retirement Decision | News | Football.com Nigeria - Football.com",
     "published": "2026-10-14T00:00:00+00:00",
     "summary": "Lionel Messi's Inter Miami Contract Shapes Retirement Decision | News | Football.com Nigeria Football.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi-led Inter Miami aims to subdue New York City FC - Field Level Media",
     "published": "2026-10-13T23:13:35+00:00",
     "summary": "Lionel Messi-led Inter Miami aims to subdue New York City FC Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi’s Inter Miami could book their 2026 MLS Cup playoff ticket against NYCFC - World Soccer Talk",
     "published": "2026-10-13T22:57:29+00:00",
     "summary": "Lionel Messi’s Inter Miami could book their 2026 MLS Cup playoff ticket against NYCFC World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi Eyes Historic MLS MVP Three-Peat as Petar Musa and Hany Mukhtar Chase Inter Miami Star - Pasión Fútbol",
     "published": "2026-10-13T22:40:00+00:00",
     "summary": "Lionel Messi Eyes Historic MLS MVP Three-Peat as Petar Musa and Hany Mukhtar Chase Inter Miami Star Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami vs. New York City FC Preview - Hooligan Soccer",
     "published": "2026-10-13T22:00:00+00:00",
     "summary": "Inter Miami vs. New York City FC Preview Hooligan Soccer"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Don Garber Calls Lionel Messi the Greatest Athlete of All Time After Tense Inter Miami Encounter - Pasión Fútbol",
     "published": "2026-10-13T21:58:04+00:00",
     "summary": "Don Garber Calls Lionel Messi the Greatest Athlete of All Time After Tense Inter Miami Encounter Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami vs New York City FC Prediction and Betting Tips | October 14th 2026 - Sportskeeda",
     "published": "2026-10-13T21:47:52+00:00",
     "summary": "Inter Miami vs New York City FC Prediction and Betting Tips | October 14th 2026 Sportskeeda"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami Hosts New York City in MLS Eastern Conference Match - SuaraGarut.ID",
     "published": "2026-10-13T21:40:00+00:00",
     "summary": "Inter Miami Hosts New York City in MLS Eastern Conference Match SuaraGarut.ID"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami - New York City - Flashscore.com",
     "published": "2026-10-13T21:35:56+00:00",
     "summary": "Inter Miami - New York City Flashscore.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami host New York City FC on Wednesday - OneFootball",
     "published": "2026-10-13T21:08:32+00:00",
     "summary": "Inter Miami host New York City FC on Wednesday OneFootball"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "What's next for Lionel Messi at Inter Miami after his Argentina retirement? - MLS Multiplex",
     "published": "2026-10-13T20:45:47+00:00",
     "summary": "What's next for Lionel Messi at Inter Miami after his Argentina retirement? MLS Multiplex"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "MATCH PREVIEW: Inter Miami CF Set to Host New York City FC on Wednesday - Inter Miami CF",
     "published": "2026-10-13T20:25:08+00:00",
     "summary": "MATCH PREVIEW: Inter Miami CF Set to Host New York City FC on Wednesday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi’s Argentina retirement sparks fresh questions about his club future - Yahoo Sports",
     "published": "2026-10-13T20:00:00+00:00",
     "summary": "Lionel Messi’s Argentina retirement sparks fresh questions about his club future Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Matías Galarza: “It would be amazing for Messi to play in the Copa Libertadores too” - Diario AS",
     "published": "2026-10-13T19:44:52+00:00",
     "summary": "Matías Galarza: “It would be amazing for Messi to play in the Copa Libertadores too” Diario AS"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Garber won't dish on exchange with Messi: 'Between me and Leo' - ESPN",
     "published": "2026-10-13T19:18:00+00:00",
     "summary": "Garber won't dish on exchange with Messi: 'Between me and Leo' ESPN"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami vs New York City Betting Tips & Live Stream - MLS - FreeTips",
     "published": "2026-10-13T18:31:55+00:00",
     "summary": "Inter Miami vs New York City Betting Tips & Live Stream - MLS FreeTips"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MLS CLINCHING SCENARIOS: Nashville, Miami, Chicago, New England, Charlotte, St. Louis, Dallas, San Jose, Houston - Front Row Soccer",
     "published": "2026-10-13T18:30:48+00:00",
     "summary": "MLS CLINCHING SCENARIOS: Nashville, Miami, Chicago, New England, Charlotte, St. Louis, Dallas, San Jose, Houston Front Row Soccer"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason - 5newsonline.com",
     "published": "2026-10-14T06:51:00+00:00",
     "summary": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason 5newsonline.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Highlights From Deni Avdija 26-Point Game - NBA.com",
     "published": "2026-10-14T05:21:26+00:00",
     "summary": "Highlights From Deni Avdija 26-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers stay perfect in preseason games with win over Sacramento - KATU",
     "published": "2026-10-14T05:15:40+00:00",
     "summary": "Trail Blazers stay perfect in preseason games with win over Sacramento KATU"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija pours in 26/9/4 line vs. Sacramento - NBC Sports",
     "published": "2026-10-14T05:04:31+00:00",
     "summary": "Deni Avdija pours in 26/9/4 line vs. Sacramento NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija, Franz Wagner dominate Preseason action, Luka Doncic rests - Eurohoops",
     "published": "2026-10-14T05:04:00+00:00",
     "summary": "Deni Avdija, Franz Wagner dominate Preseason action, Luka Doncic rests Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-14T04:36:27+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija with the And-1!, 10/13/2026 - Yahoo Sports",
     "published": "2026-10-14T04:35:06+00:00",
     "summary": "Deni Avdija with the And-1!, 10/13/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija News: Efficient in limited run - RotoWire",
     "published": "2026-10-14T04:32:56+00:00",
     "summary": "Deni Avdija News: Efficient in limited run RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija somehow gets the and-1 to fall - ESPN",
     "published": "2026-10-14T04:04:02+00:00",
     "summary": "Deni Avdija somehow gets the and-1 to fall ESPN"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "NBA All-Star shares hilarious Draymond Green story - Warriors Wire",
     "published": "2026-10-13T17:35:00+00:00",
     "summary": "NBA All-Star shares hilarious Draymond Green story Warriors Wire"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Trail Blazers See Promising Outlook On Upcoming Season As The Playoffs Are In Sight - roundtable.io",
     "published": "2026-10-13T12:05:22+00:00",
     "summary": "Trail Blazers See Promising Outlook On Upcoming Season As The Playoffs Are In Sight roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years - Fadeaway World",
     "published": "2026-10-13T06:48:25+00:00",
     "summary": "Draymond Green Reflects On Intense Moment With Deni Avdija; Admits He Holds Grudges For Years Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija looks ready for opening night after preseason win - OregonLive.com",
     "published": "2026-10-13T04:55:00+00:00",
     "summary": "Deni Avdija looks ready for opening night after preseason win OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers - NBA.com",
     "published": "2026-10-13T04:38:06+00:00",
     "summary": "The Association: Deni Avdija could prove to be offensive engine for Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Portland Trail Blazers vs. London Lions NBA preseason: Oct. 12, 2026 - OregonLive.com",
     "published": "2026-10-13T02:13:27+00:00",
     "summary": "Portland Trail Blazers vs. London Lions NBA preseason: Oct. 12, 2026 OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Blockbuster Trade Could Turn Trail Blazers Into Legitimate Title Contenders - Fadeaway World",
     "published": "2026-10-12T17:57:24+00:00",
     "summary": "Blockbuster Trade Could Turn Trail Blazers Into Legitimate Title Contenders Fadeaway World"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing - Yahoo Sports",
     "published": "2026-10-12T16:52:49+00:00",
     "summary": "Blazers’ Deni Avdija’s helpless Nikola Jokic admission leaves Draymond Green LOLing Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Blazers Make History in Second Preseason Game - Sports Illustrated",
     "published": "2026-10-12T16:03:25+00:00",
     "summary": "Blazers Make History in Second Preseason Game Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” - Eurohoops",
     "published": "2026-10-12T14:28:00+00:00",
     "summary": "Deni Avdija on guarding Nikola Jokic: “What the hell am I supposed to do?” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija on why it is impossible to guard Nikola … - Yahoo Sports",
     "published": "2026-10-12T11:32:51+00:00",
     "summary": "Deni Avdija on why it is impossible to guard Nikola … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul - Basketball Network",
     "published": "2026-10-12T10:11:00+00:00",
     "summary": "“I was waiting for that elbow or punch” – Deni Avdija recalls fearing Draymond Green’s payback after hard foul Basketball Network"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast - Sportskeeda",
     "published": "2026-10-12T05:36:00+00:00",
     "summary": "\"Ja Morant Not Gon' Like This\": NBA Fans Hilariously React to Deni Avdija Calling New Co-Star a \"Kid\" on Draymond Green's Podcast Sportskeeda"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard - Yahoo Sports",
     "published": "2026-10-12T02:52:00+00:00",
     "summary": "Deni Avdija Admits Feeling Helpless Against Nikola Jokic; Explains Why He’s Toughest To Guard Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija credits Chauncey Billups for helping turn his career around - Yahoo Sports",
     "published": "2026-10-11T18:06:58+00:00",
     "summary": "Deni Avdija credits Chauncey Billups for helping turn his career around Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation - EssentiallySports",
     "published": "2026-10-11T17:55:00+00:00",
     "summary": "“Still Gonna Get You”: Draymond Green Sends Clear Message to Deni Avdija Over 2-Year-Old On-Court Altercation EssentiallySports"
    }
   ]
  }
 ]
}
</input>