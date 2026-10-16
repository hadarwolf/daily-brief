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
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-15T00:30:00Z",
     "home": "Fluminense",
     "away": "Palmeiras",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "today": [
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-16T00:30:00Z",
     "home": "Estudiantes LP",
     "away": "Flamengo",
     "status": "SCHEDULED",
     "score": null
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-16T18:00:00Z",
     "home": "Heerenveen",
     "away": "Excelsior",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-16T18:30:00Z",
     "home": "Frankfurt",
     "away": "1. FC Köln",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-16T18:45:00Z",
     "home": "Frosinone",
     "away": "Sassuolo",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-16T18:45:00Z",
     "home": "Le Mans",
     "away": "Toulouse",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-16T19:00:00Z",
     "home": "Deportivo",
     "away": "Levante",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-16T19:00:00Z",
     "home": "Burnley",
     "away": "Wolverhampton",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-16T23:00:00Z",
     "home": "Mirassol",
     "away": "Internacional",
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
 "news_feeds": [
  {
   "outlet": "BBC Sport — Football",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_football#0",
     "title": "The rapid rise of a former art dealer to Europe's hottest young manager",
     "published": "2026-10-16T06:28:10+00:00",
     "summary": "How Brighton's Fabian Hurzeler has gone from Germany's fifth tier to being reportedly of interest to Manchester United."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-16T06:09:52+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#2",
     "title": "Balikwisha blames Celtic for World Cup axe - gossip",
     "published": "2026-10-16T06:07:34+00:00",
     "summary": "Michel-Ange Balikwisha blames Celtic for his failure to make DR Congo's World Cup squad, while Thelo Aasgaard reveals his delight at leaving Rangers for Anderlecht."
    },
    {
     "ref": "bbc_football#3",
     "title": "Does the Premier League 'Big Six' still exist?",
     "published": "2026-10-16T05:53:57+00:00",
     "summary": "For years the Premier League has had a defined 'Big Six', comprised of Arsenal, Chelsea, Liverpool, Manchester City, Manchester United and Tottenham Hotspur., but could this era be coming to an end?"
    },
    {
     "ref": "bbc_football#4",
     "title": "O'Neill defiant in defeat, but Celtic's 'flat-track bullies' fail another big test",
     "published": "2026-10-15T23:04:37+00:00",
     "summary": "Celtic have now lost two Europa League group games, as well as two derbies - but Martin O'Neill is adamant he can see positive signs."
    },
    {
     "ref": "bbc_football#5",
     "title": "O'Neill defiant in defeat, but Celtic's 'flat-track bullies' fail another big test",
     "published": "2026-10-15T23:04:37+00:00",
     "summary": "Celtic have now lost two Europa League group games, as well as two derbies - but Martin O'Neill is adamant he can see positive signs."
    },
    {
     "ref": "bbc_football#6",
     "title": "Minus 17 to European dreams as Bournemouth fairytale continues",
     "published": "2026-10-15T22:42:26+00:00",
     "summary": "It was a night 127 years in the making as Bournemouth added another chapter to their fairytale with victory in their first-ever European home game."
    },
    {
     "ref": "bbc_football#7",
     "title": "Euro Leagues",
     "published": "2026-10-15T21:31:00+00:00",
     "summary": "Are Barcelona and PSG the teams to beat in the Champions League?"
    },
    {
     "ref": "bbc_football#8",
     "title": "Kane poised to extend Bayern stay - Friday's gossip",
     "published": "2026-10-15T19:43:01+00:00",
     "summary": "Harry Kane is close to signing a new deal at Bayern Munich, Arda Guler agrees a new contract with Real Madrid, Liverpool are leading the race for Bournemouth's Alex Scott, plus more."
    },
    {
     "ref": "bbc_football#9",
     "title": "Sutton's predictions v boxer & Ipswich fan Fabio Wardley",
     "published": "2026-10-15T19:26:51+00:00",
     "summary": "BBC Sport football expert Chris Sutton takes on boxer and Ipswich fan Fabio Wardley, plus the BBC readers and AI with his predictions for this weekend's Premier League fixtures."
    },
    {
     "ref": "bbc_football#10",
     "title": "Martinez apologises for outburst and fined by Man Utd",
     "published": "2026-10-15T18:03:28+00:00",
     "summary": "Manchester United defender Lisandro Martinez issues an apology following his controversial remarks criticising the club's hierarchy."
    },
    {
     "ref": "bbc_football#11",
     "title": "Football Daily",
     "published": "2026-10-15T17:47:00+00:00",
     "summary": "Rick & Lloyd are back! And by popular(ish) demand. They discuss Man City's defeat to PSG."
    },
    {
     "ref": "bbc_football#12",
     "title": "Moore's Germany move inspired by Sancho and Bellingham",
     "published": "2026-10-15T16:09:55+00:00",
     "summary": "Tottenham loanee Mikey Moore says the success of Jadon Sancho and Jude Bellingham in the Bundesliga influenced his decision to join Cologne."
    },
    {
     "ref": "bbc_football#13",
     "title": "Eom has strength to move on after alleged racist abuse, says Swansea boss",
     "published": "2026-10-15T15:33:24+00:00",
     "summary": "Vitor Matos says Eom Jisung has the strength to move on from the alleged racial abuse which marred Swansea City's win at Millwall."
    },
    {
     "ref": "bbc_football#14",
     "title": "Red card, suspension and a conspiracy - what's up with Vini Jr?",
     "published": "2026-10-15T15:15:38+00:00",
     "summary": "Vinicius Jr speaks to the press after being handed a four-match ban following his red card against Villarreal."
    },
    {
     "ref": "bbc_football#15",
     "title": "Why 6-0, nine-man loss to West Ham 'won't define' Lincoln",
     "published": "2026-10-15T15:01:26+00:00",
     "summary": "Lincoln City will not be defined by their 6-0 Championship defeat by West Ham, says Imps head coach Tom Shaw."
    },
    {
     "ref": "bbc_football#16",
     "title": "Infantino apologises to Fifa Council - but told he is still not fit to lead",
     "published": "2026-10-15T14:46:09+00:00",
     "summary": "President Gianni Infantino apologises to the Fifa Council for his World Cup sell-off plan - but is asked to go further."
    },
    {
     "ref": "bbc_football#17",
     "title": "Arsenal's injured Caldentey out for up to 10 weeks",
     "published": "2026-10-15T13:35:56+00:00",
     "summary": "Arsenal midfielder Mariona Caldentey is set to miss about two months of Women's Super League action because of a hamstring injury."
    },
    {
     "ref": "bbc_football#18",
     "title": "Arsenal's injured Caldentey out for up to 10 weeks",
     "published": "2026-10-15T13:35:56+00:00",
     "summary": "Arsenal midfielder Mariona Caldentey is set to miss about two months of Women's Super League action because of a hamstring injury."
    },
    {
     "ref": "bbc_football#19",
     "title": "Getafe make offer to sign free agent Sancho",
     "published": "2026-10-15T11:45:02+00:00",
     "summary": "Getafe make a formal offer to sign attacker Jadon Sancho, who is searching for a new club after leaving Manchester United in the summer."
    },
    {
     "ref": "bbc_football#20",
     "title": "Everton's Barry on the video he was scared to post",
     "published": "2026-10-15T11:27:07+00:00",
     "summary": "The Everton striker explains why he chose to post an emotional video from a training session."
    },
    {
     "ref": "bbc_football#21",
     "title": "Man Utd a circus after Martinez comments - Keane",
     "published": "2026-10-15T10:57:15+00:00",
     "summary": "Lisandro Martinez's outburst shows Manchester United are in \"chaos\", says former captain Roy Keane."
    },
    {
     "ref": "bbc_football#22",
     "title": "Hibs ban fans group for three games after disorder",
     "published": "2026-10-15T10:38:50+00:00",
     "summary": "Hibernian ban their Block Seven supporter group from their next three matches after pictures showed some visiting fans clashing with police and stewards at Saturday's Scottish Premiership game away to Dundee United."
    },
    {
     "ref": "bbc_football#23",
     "title": "Hibs ban fans group for three games after disorder",
     "published": "2026-10-15T10:38:50+00:00",
     "summary": "Hibernian ban their Block Seven supporter group from their next three matches after pictures showed some visiting fans clashing with police and stewards at Saturday's Scottish Premiership game away to Dundee United."
    },
    {
     "ref": "bbc_football#24",
     "title": "Why Souness rejected Barcelona when he left Liverpool",
     "published": "2026-10-15T08:30:04+00:00",
     "summary": "Liverpool legend Graeme Souness reveals he rejected the chance to sign for Barcelona when he left the European champions."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami vs New York City: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-16T06:34:44+00:00",
     "summary": "Inter Miami vs New York City: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami takes shutout streak into matchup with Atlanta United - Bluefield Daily Telegraph",
     "published": "2026-10-16T06:16:04+00:00",
     "summary": "Inter Miami takes shutout streak into matchup with Atlanta United Bluefield Daily Telegraph"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami takes shutout streak into matchup with Atlanta United - FOX Sports",
     "published": "2026-10-16T06:03:53+00:00",
     "summary": "Inter Miami takes shutout streak into matchup with Atlanta United FOX Sports"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Atlanta United FC - Inter Miami CF prediction & picks 17.10.2026 - www.transfermarkt.us",
     "published": "2026-10-16T05:25:27+00:00",
     "summary": "Atlanta United FC - Inter Miami CF prediction & picks 17.10.2026 www.transfermarkt.us"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Match Gallery | Inter Miami CF 2-0 New York City FC - New York City FC",
     "published": "2026-10-16T03:34:27+00:00",
     "summary": "Match Gallery | Inter Miami CF 2-0 New York City FC New York City FC"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Gonzalez calls on Miami 'to keep improving' after securing playoff berth - beIN SPORTS",
     "published": "2026-10-15T22:57:50+00:00",
     "summary": "Gonzalez calls on Miami 'to keep improving' after securing playoff berth beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Gonzalez calls on Miami 'to keep improving' after securing playoff berth - FotMob",
     "published": "2026-10-15T22:57:50+00:00",
     "summary": "Gonzalez calls on Miami 'to keep improving' after securing playoff berth FotMob"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi makes MLS history as Inter Miami superstar climbs above Zlatan Ibrahimović - https://www.transfermarkt.us/",
     "published": "2026-10-15T22:53:05+00:00",
     "summary": "Lionel Messi makes MLS history as Inter Miami superstar climbs above Zlatan Ibrahimović https://www.transfermarkt.us/"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi closing in on Carlos Vela’s MLS goalscoring record as Inter Miami captain keeps making history - World Soccer Talk",
     "published": "2026-10-15T22:09:45+00:00",
     "summary": "Lionel Messi closing in on Carlos Vela’s MLS goalscoring record as Inter Miami captain keeps making history World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami CF secures 2026 MLS playoff spot after 2-0 win over NYC FC - USA Today",
     "published": "2026-10-15T21:16:00+00:00",
     "summary": "Inter Miami CF secures 2026 MLS playoff spot after 2-0 win over NYC FC USA Today"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "The biggest threat to Inter Miami and Lionel Messi in the MLS Cup playoffs - Diario AS",
     "published": "2026-10-15T20:56:19+00:00",
     "summary": "The biggest threat to Inter Miami and Lionel Messi in the MLS Cup playoffs Diario AS"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Better than ever? Inter Miami star Lionel Messi unstoppable since the World Cup - Diario AS",
     "published": "2026-10-15T20:30:36+00:00",
     "summary": "Better than ever? Inter Miami star Lionel Messi unstoppable since the World Cup Diario AS"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi’s Princess of Asturias Award trip could put his Inter Miami return vs Red Bull New York in doubt - World Soccer Talk",
     "published": "2026-10-15T19:24:26+00:00",
     "summary": "Lionel Messi’s Princess of Asturias Award trip could put his Inter Miami return vs Red Bull New York in doubt World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Inter Miami MLS Cup: Can Messi and Suarez's Form Deliver Another Title? - Yahoo Sports",
     "published": "2026-10-15T18:21:54+00:00",
     "summary": "Inter Miami MLS Cup: Can Messi and Suarez's Form Deliver Another Title? Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "St. Clair and De Paul Named to MLS Team of the Matchday - Inter Miami CF",
     "published": "2026-10-15T18:03:58+00:00",
     "summary": "St. Clair and De Paul Named to MLS Team of the Matchday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Atlanta United vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-15T16:33:00+00:00",
     "summary": "Atlanta United vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi, Inter Miami blank NYC to book playoffs spot - The Manila Times",
     "published": "2026-10-15T16:01:00+00:00",
     "summary": "Messi, Inter Miami blank NYC to book playoffs spot The Manila Times"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi's Inter Miami book playoffs with 2-0 win over New York City - The Bangladesh Today",
     "published": "2026-10-15T15:23:32+00:00",
     "summary": "Messi's Inter Miami book playoffs with 2-0 win over New York City The Bangladesh Today"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami At Atlanta, Toronto At Red Bulls: MLS Picks For Saturday - RG.org",
     "published": "2026-10-15T13:32:50+00:00",
     "summary": "Inter Miami At Atlanta, Toronto At Red Bulls: MLS Picks For Saturday RG.org"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "MLS Odds This Weekend: Atlanta Vs Inter Miami, Red Bulls Vs Toronto - RG.org",
     "published": "2026-10-15T13:13:50+00:00",
     "summary": "MLS Odds This Weekend: Atlanta Vs Inter Miami, Red Bulls Vs Toronto RG.org"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF secures 2026 MLS playoff spot after 2-0 win over NYC FC - Yahoo",
     "published": "2026-10-15T13:10:10+00:00",
     "summary": "Inter Miami CF secures 2026 MLS playoff spot after 2-0 win over NYC FC Yahoo"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Atlanta United FC vs Inter Miami CF: previous stats | MLS - Liga USA 2026 - Diario AS",
     "published": "2026-10-15T11:53:49+00:00",
     "summary": "Atlanta United FC vs Inter Miami CF: previous stats | MLS - Liga USA 2026 Diario AS"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi’s Inter Miami Beat New York City, Book Playoffs - Channels Television",
     "published": "2026-10-15T11:31:23+00:00",
     "summary": "Messi’s Inter Miami Beat New York City, Book Playoffs Channels Television"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami pulls off a stunning one-touch move for an unbelievable goal - Diario AS",
     "published": "2026-10-15T11:01:56+00:00",
     "summary": "Inter Miami pulls off a stunning one-touch move for an unbelievable goal Diario AS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami's Gonzalez determined to support grieving Messi - SportyTV",
     "published": "2026-10-15T10:38:00+00:00",
     "summary": "Inter Miami's Gonzalez determined to support grieving Messi SportyTV"
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
     "published": "2026-10-15T23:11:11+00:00",
     "summary": "NBA Most Improved Player Odds & Favorites for 2027 sports.betmgm.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf vs Bahcesehir Koleji Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-15T15:17:26+00:00",
     "summary": "Ben Saraf vs Bahcesehir Koleji Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija vs Iceland: stats, game log - BasketNews.com",
     "published": "2026-10-15T07:17:35+00:00",
     "summary": "Deni Avdija vs Iceland: stats, game log BasketNews.com"
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
     "title": "Deni Avdija playoff stats: averages by season and series - BasketNews.com",
     "published": "2026-10-15T04:39:24+00:00",
     "summary": "Deni Avdija playoff stats: averages by season and series BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija vs Houston Rockets: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:19:14+00:00",
     "summary": "Deni Avdija vs Houston Rockets: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Ben Saraf vs Buducnost VOLI Podgorica: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:17:25+00:00",
     "summary": "Ben Saraf vs Buducnost VOLI Podgorica: stats, game log BasketNews.com"
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
     "published": "2026-10-14T20:39:05+00:00",
     "summary": "Ben Saraf vs Dolomiti Energia Trento: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija pours in 26/9/4 line vs. Sacramento - NBC Sports",
     "published": "2026-10-14T20:30:10+00:00",
     "summary": "Deni Avdija pours in 26/9/4 line vs. Sacramento NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Ben Saraf vs Trefl Sopot: stats, game log - BasketNews.com",
     "published": "2026-10-14T19:49:31+00:00",
     "summary": "Ben Saraf vs Trefl Sopot: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Ben Saraf vs Wolves Twinsbet Vilnius: stats, game log - BasketNews.com",
     "published": "2026-10-14T19:04:59+00:00",
     "summary": "Ben Saraf vs Wolves Twinsbet Vilnius: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Ben Saraf vs Besiktas Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T18:54:17+00:00",
     "summary": "Ben Saraf vs Besiktas Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Ben Saraf vs Hapoel IBI Tel Aviv: stats, game log - BasketNews.com",
     "published": "2026-10-14T18:10:29+00:00",
     "summary": "Ben Saraf vs Hapoel IBI Tel Aviv: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija vs Slovenia: stats, game log - BasketNews.com",
     "published": "2026-10-14T13:27:46+00:00",
     "summary": "Deni Avdija vs Slovenia: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak - Sports Illustrated",
     "published": "2026-10-14T13:00:02+00:00",
     "summary": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija vs Finland: stats, game log - BasketNews.com",
     "published": "2026-10-14T12:09:34+00:00",
     "summary": "Deni Avdija vs Finland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija - Yahoo Sports",
     "published": "2026-10-14T12:00:05+00:00",
     "summary": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:47:31+00:00",
     "summary": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija vs Czech Republic: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:37:15+00:00",
     "summary": "Deni Avdija vs Czech Republic: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija vs France: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:05:29+00:00",
     "summary": "Deni Avdija vs France: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija vs Armani Olimpia Milan: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:02:09+00:00",
     "summary": "Deni Avdija vs Armani Olimpia Milan: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija vs Greece: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:59:16+00:00",
     "summary": "Deni Avdija vs Greece: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija vs Belgium: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:49:51+00:00",
     "summary": "Deni Avdija vs Belgium: stats, game log BasketNews.com"
    }
   ]
  }
 ]
}
</input>