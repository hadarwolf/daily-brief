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
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T16:45:00Z",
     "home": "Feyenoord",
     "away": "Como 1907",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T16:45:00Z",
     "home": "LASK",
     "away": "Liverpool",
     "status": "FINISHED",
     "score": "3-6"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "Portsmouth",
     "away": "Sheffield Utd",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "Norwich",
     "away": "Southampton",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T18:45:00Z",
     "home": "QPR",
     "away": "Derby County",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Man City",
     "away": "PSG",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Aston Villa",
     "away": "Fenerbahçe",
     "status": "FINISHED",
     "score": "6-0"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Shaktar",
     "away": "PAE AEK",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Sl. Bratislava",
     "away": "Stuttgart",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Bodø/Glimt",
     "away": "Dortmund",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Lincoln City",
     "away": "West Ham",
     "status": "FINISHED",
     "score": "0-6"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Real Betis",
     "away": "Porto",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-14T19:00:00Z",
     "home": "Roma",
     "away": "Real Madrid",
     "status": "FINISHED",
     "score": "3-4"
    }
   ],
   "today": [
    {
     "competition": "Copa Libertadores",
     "kickoff_utc": "2026-10-15T00:30:00Z",
     "home": "Fluminense",
     "away": "Palmeiras",
     "status": "SCHEDULED",
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
     "title": "The Portuguese second-tier team hosting Sunderland in Europe",
     "published": "2026-10-15T07:30:41+00:00",
     "summary": "Portuguese second-tier side Torreense host Sunderland in the Europa League in what will be their first ever European home match."
    },
    {
     "ref": "bbc_football#1",
     "title": "Napoli back McTominay to stay amid Real links - gossip",
     "published": "2026-10-15T07:06:08+00:00",
     "summary": "Napoli believe Scott McTominay wants to extend his contract despite reports of Real Madrid interest, while Duncan Ferguson is linked with the manager's job with Glentoran."
    },
    {
     "ref": "bbc_football#2",
     "title": "Listen: Will Celtic bounce back in Lisbon - and how will Hearts start?",
     "published": "2026-10-15T07:00:00+00:00",
     "summary": "Celtic face a huge European test at Benfica while Hearts have a Conference League opener."
    },
    {
     "ref": "bbc_football#3",
     "title": "Could Wenger really take on Infantino and run for Fifa presidency?",
     "published": "2026-10-15T06:35:39+00:00",
     "summary": "Senior figures in European football tell BBC Sport they want former Arsenal manager Arsene Wenger to run as a surprise candidate against Gianni Infantino."
    },
    {
     "ref": "bbc_football#4",
     "title": "The Andorran club making history with a Pochettino in the team",
     "published": "2026-10-15T06:09:12+00:00",
     "summary": "Maurizio Pochettino and inter Club d'Escaldes are set to make European history for footballing minnows Andorra."
    },
    {
     "ref": "bbc_football#5",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-15T06:00:25+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#6",
     "title": "Southgate does not see return to Premier League management",
     "published": "2026-10-15T05:39:10+00:00",
     "summary": "Former England manager Gareth Southgate says he does not see himself returning to club management in the Premier League."
    },
    {
     "ref": "bbc_football#7",
     "title": "Burnham had two hospitality dinners with Man City chairman, deleted records show",
     "published": "2026-10-15T01:07:59+00:00",
     "summary": "The prime minister has been under growing pressure since the club was found guilty of Premier League rule breaches."
    },
    {
     "ref": "bbc_football#8",
     "title": "'Players won't like it' - Martinez apologises, but is the damage done?",
     "published": "2026-10-14T23:13:53+00:00",
     "summary": "Champions League Match of the Day pundits Nedum Onuoha, Stephen Warnock, and Rory Smith analyse Lisandro Martinez's comments following Manchester United's 2-0 loss to Atletico Madrid and the impact they'll have on the club."
    },
    {
     "ref": "bbc_football#9",
     "title": "'Shameless' - Mourinho critical of Vinicius Jr ban timing",
     "published": "2026-10-14T23:13:20+00:00",
     "summary": "Real Madrid forward Vinicius Jr will miss El Clasico against Barcelona after being given a four-game ban."
    },
    {
     "ref": "bbc_football#10",
     "title": "Guardiola's return, Man City's defiance - and a game of glorious chaos",
     "published": "2026-10-14T22:57:23+00:00",
     "summary": "Manchester City put on a show of defiance on their return to Etihad Stadium - even in the face of a PSG masterclass, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#11",
     "title": "Jackson steps up again as Aston Villa revival continues",
     "published": "2026-10-14T22:45:22+00:00",
     "summary": "Nicolas Jackson continues his fine goalscoring form as Aston Villa record an impressive Champions League win."
    },
    {
     "ref": "bbc_football#12",
     "title": "Outburst came out of 'anger and frustration' - Martinez",
     "published": "2026-10-14T22:42:02+00:00",
     "summary": "Manchester United defender Lisandro Martinez says he \"spoke out of anger and frustration\" when launching a scathing attack on the club's hierarchy."
    },
    {
     "ref": "bbc_football#13",
     "title": "PSG on different level - but where do they rank against other great sides?",
     "published": "2026-10-14T21:55:37+00:00",
     "summary": "Paris St-Germain are eyeing a third successive Champions League crown after dismantling Manchester City, but where do they rank against Europe's most dominant clubs?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Isco snatches late Betis win as they edge past Porto",
     "published": "2026-10-14T21:51:42+00:00",
     "summary": "Isco scores an 84th minute penalty to help Real Betis snatch a late 3-2 win against Porto, giving them back to back wins at the start of this season's Champions League."
    },
    {
     "ref": "bbc_football#15",
     "title": "Real Madrid stun Roma after dramatic late comeback",
     "published": "2026-10-14T21:31:34+00:00",
     "summary": "Real Madrid complete their latest dramatic Champions League comeback by scoring three goals in the final seven minutes to earn manager Jose Mourinho a win on his return to Roma."
    },
    {
     "ref": "bbc_football#16",
     "title": "Bodo/Glimt impress in win over Dortmund",
     "published": "2026-10-14T21:28:39+00:00",
     "summary": "Bodo/Glimt bounce back from their thrashing at Bayern with a fine 1-0 win in the Champions League over Borussia Dortmund."
    },
    {
     "ref": "bbc_football#17",
     "title": "Martinez's future at Man Utd in doubt - Thursday's gossip",
     "published": "2026-10-14T21:27:34+00:00",
     "summary": "Lisandro Martinez's future in doubt at Manchester United, Newcastle's Bazoumana Toure eyed by Manchester United and Arsenal, Getafe interested in free agent Jadon Sancho, plus more."
    },
    {
     "ref": "bbc_football#18",
     "title": "Villa rewrite the record books as they hit Fenerbahce for six",
     "published": "2026-10-14T21:24:34+00:00",
     "summary": "Aston Villa record their biggest ever win in a European competition as they thrash Turkish side Fenerbahce 6-0 at Villa Park, with Nicolas Jackson and Ross Barkley both scoring twice."
    },
    {
     "ref": "bbc_football#19",
     "title": "Man City show fight but fall short of fightback against slick PSG",
     "published": "2026-10-14T21:19:45+00:00",
     "summary": "Defending champions Paris Saint-Germain make it two wins from two in this season's Champions League, after beating Manchester City 4-2 at the Etihad Stadium"
    },
    {
     "ref": "bbc_football#20",
     "title": "Feyenoord come from behind to beat Como",
     "published": "2026-10-14T21:00:55+00:00",
     "summary": "Feyenoord come from a goal to beat Como 3-2 in Rotterdam to secure their first win of the league phase in this season's Champions League."
    },
    {
     "ref": "bbc_football#21",
     "title": "Tresoldi hat-trick fires Club Brugge to victory over Inter in seven-goal thriller",
     "published": "2026-10-14T21:00:52+00:00",
     "summary": "Club Brugge's Nicolo Tresoldi scores a hat-trick as the Belgian side edge Inter Milan 4-3, extending Inter's Champions League losing run to four matches for the first time in their history."
    },
    {
     "ref": "bbc_football#22",
     "title": "Gordon scores as 'brilliant Barcelona' thrash Galatasaray",
     "published": "2026-10-14T21:00:43+00:00",
     "summary": "Anthony Gordon scores his first Champions League goal for Barcelona as the Spanish side come from behind to thrash Galatasaray 4-1 in Istanbul, and make it two wins from two in this season's Champions League."
    },
    {
     "ref": "bbc_football#23",
     "title": "Viking snatch draw against Bayern Munich in six-goal thriller",
     "published": "2026-10-14T21:00:40+00:00",
     "summary": "Norwegian champions Viking score a 90th minute equaliser to snatch a 3-3 draw against six-time European champions Bayern Munich in the Champions League, securing one of the biggest results in the club's history."
    },
    {
     "ref": "bbc_football#24",
     "title": "Substitutes steal the show as Arsenal score three against Lille",
     "published": "2026-10-14T21:00:36+00:00",
     "summary": "Substitute Bukayo Saka scores one and sets up another to help Arsenal beat Lille 3-0 at the Emirates, as the Premier League champions made it two wins from two in the Champions League."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Inter Miami Beat NYCFC 2-0 To Secure 2026 MLS Playoff Spot - TVC News",
     "published": "2026-10-15T07:54:00+00:00",
     "summary": "Inter Miami Beat NYCFC 2-0 To Secure 2026 MLS Playoff Spot TVC News"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi provides magic touch as Inter Miami clinch 2026 MLS playoff spot with dominant win over NYCFC - LiveScore",
     "published": "2026-10-15T07:31:29+00:00",
     "summary": "Lionel Messi provides magic touch as Inter Miami clinch 2026 MLS playoff spot with dominant win over NYCFC LiveScore"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi provides magic touch as Inter Miami clinch 2026 MLS playoff spot with dominant win over NYCFC - Goal.com",
     "published": "2026-10-15T07:11:23+00:00",
     "summary": "Lionel Messi provides magic touch as Inter Miami clinch 2026 MLS playoff spot with dominant win over NYCFC Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Messi lifts Inter Miami vs NYCFC: 7.6 Sofascore Rating - Sofascore",
     "published": "2026-10-15T06:44:24+00:00",
     "summary": "Messi lifts Inter Miami vs NYCFC: 7.6 Sofascore Rating Sofascore"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami vs New York City: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-15T06:22:19+00:00",
     "summary": "Inter Miami vs New York City: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi maintains perfect playoff record as Inter Miami sees off NYCFC - Diario AS",
     "published": "2026-10-15T06:08:16+00:00",
     "summary": "Messi maintains perfect playoff record as Inter Miami sees off NYCFC Diario AS"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - The Courier Mail",
     "published": "2026-10-15T05:40:08+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC The Courier Mail"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Inter Miami CF - New York City FC 2 - 0 | PENALTI FALLADO - Nicolás Fernández - OneFootball",
     "published": "2026-10-15T05:31:32+00:00",
     "summary": "Inter Miami CF - New York City FC 2 - 0 | PENALTI FALLADO - Nicolás Fernández OneFootball"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Highlights: Inter Miami CF 2-0 New York City FC (MLS) - OneFootball",
     "published": "2026-10-15T05:18:36+00:00",
     "summary": "Highlights: Inter Miami CF 2-0 New York City FC (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Highlights MLS: Inter Miami CF 2-0 New York City FC - OneFootball",
     "published": "2026-10-15T05:10:20+00:00",
     "summary": "Highlights MLS: Inter Miami CF 2-0 New York City FC OneFootball"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi assist sends Inter Miami to MLS playoffs - Daily Observer",
     "published": "2026-10-15T04:54:06+00:00",
     "summary": "Messi assist sends Inter Miami to MLS playoffs Daily Observer"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi assists as Inter Miami secures MLS playoff spot with 2-0 win over NYCFC - United News of Bangladesh",
     "published": "2026-10-15T04:51:53+00:00",
     "summary": "Messi assists as Inter Miami secures MLS playoff spot with 2-0 win over NYCFC United News of Bangladesh"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "NYCFC on outside of playoff picture as winless stretch continues with loss to Inter Miami - New York Post",
     "published": "2026-10-15T03:55:00+00:00",
     "summary": "NYCFC on outside of playoff picture as winless stretch continues with loss to Inter Miami New York Post"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi sets up Inter Miami goal just before halftime - TSN",
     "published": "2026-10-15T03:36:36+00:00",
     "summary": "Lionel Messi sets up Inter Miami goal just before halftime TSN"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Match Recap: Inter Miami CF 2-0 New York City FC - New York City FC",
     "published": "2026-10-15T03:33:45+00:00",
     "summary": "Match Recap: Inter Miami CF 2-0 New York City FC New York City FC"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "MATCH RECAP: Inter Miami CF Secures Audi 2026 MLS Cup Playoffs with 2-1 Home Win Against NYCFC - Inter Miami CF",
     "published": "2026-10-15T03:32:36+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Secures Audi 2026 MLS Cup Playoffs with 2-1 Home Win Against NYCFC Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - myMotherLode.com",
     "published": "2026-10-15T03:23:10+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC myMotherLode.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "PLAY@~ Inter Miami v New York City Live Soccer Match - Universidad de Córdoba (UCO)",
     "published": "2026-10-15T03:18:01+00:00",
     "summary": "PLAY@~ Inter Miami v New York City Live Soccer Match Universidad de Córdoba (UCO)"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi sets up Inter Miami goal just before halftime - ESPN",
     "published": "2026-10-15T03:09:59+00:00",
     "summary": "Lionel Messi sets up Inter Miami goal just before halftime ESPN"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami clinch MLS playoff spot with win over New York City FC - Jagonews24",
     "published": "2026-10-15T02:52:50+00:00",
     "summary": "Inter Miami clinch MLS playoff spot with win over New York City FC Jagonews24"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason - Miami Herald",
     "published": "2026-10-15T02:52:29+00:00",
     "summary": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason - Yahoo Sports",
     "published": "2026-10-15T02:52:00+00:00",
     "summary": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi shines in 2-0 win, Inter Miami continue on the right path under Kily Gonzalez and clinch MLS Playoffs spot - MARCA",
     "published": "2026-10-15T02:38:00+00:00",
     "summary": "Lionel Messi shines in 2-0 win, Inter Miami continue on the right path under Kily Gonzalez and clinch MLS Playoffs spot MARCA"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi, Inter Miami clinch MLS playoff berth in win over NYCFC - theScore",
     "published": "2026-10-15T02:32:37+00:00",
     "summary": "Messi, Inter Miami clinch MLS playoff berth in win over NYCFC theScore"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi sets up Inter Miami goal just before halftime - ESPN",
     "published": "2026-10-15T02:27:30+00:00",
     "summary": "Lionel Messi sets up Inter Miami goal just before halftime ESPN"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija playoff stats: averages by season and series - BasketNews.com",
     "published": "2026-10-15T04:39:24+00:00",
     "summary": "Deni Avdija playoff stats: averages by season and series BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija vs Houston Rockets: stats, game log - BasketNews.com",
     "published": "2026-10-15T04:19:14+00:00",
     "summary": "Deni Avdija vs Houston Rockets: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had - Rip City Project",
     "published": "2026-10-14T21:26:25+00:00",
     "summary": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Ben Saraf vs Dolomiti Energia Trento: stats, game log - BasketNews.com",
     "published": "2026-10-14T20:39:05+00:00",
     "summary": "Ben Saraf vs Dolomiti Energia Trento: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-14T17:06:24+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak - Sports Illustrated",
     "published": "2026-10-14T13:00:02+00:00",
     "summary": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija vs Finland: stats, game log - BasketNews.com",
     "published": "2026-10-14T12:09:34+00:00",
     "summary": "Deni Avdija vs Finland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija - Yahoo Sports",
     "published": "2026-10-14T12:00:05+00:00",
     "summary": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:47:31+00:00",
     "summary": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija vs Czech Republic: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:37:15+00:00",
     "summary": "Deni Avdija vs Czech Republic: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija vs Belgium: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:49:51+00:00",
     "summary": "Deni Avdija vs Belgium: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:47:55+00:00",
     "summary": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija vs Olympiacos Piraeus: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:13:46+00:00",
     "summary": "Deni Avdija vs Olympiacos Piraeus: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija vs FC Bayern Munich: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:11:55+00:00",
     "summary": "Deni Avdija vs FC Bayern Munich: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Deni Avdija vs Darussafaka Lassa Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:05:21+00:00",
     "summary": "Deni Avdija vs Darussafaka Lassa Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Deni Avdija vs Zenit Saint Petersburg: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:37+00:00",
     "summary": "Deni Avdija vs Zenit Saint Petersburg: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija vs Zalgiris Kaunas: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:21+00:00",
     "summary": "Deni Avdija vs Zalgiris Kaunas: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija vs LDLC ASVEL Villeurbanne: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:55:08+00:00",
     "summary": "Deni Avdija vs LDLC ASVEL Villeurbanne: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Deni Avdija vs Anadolu Efes Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:46:30+00:00",
     "summary": "Deni Avdija vs Anadolu Efes Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija vs ALBA BERLIN: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:35:46+00:00",
     "summary": "Deni Avdija vs ALBA BERLIN: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija vs Panathinaikos AKTOR Athens: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:34:39+00:00",
     "summary": "Deni Avdija vs Panathinaikos AKTOR Athens: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija vs FC Barcelona: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:21:11+00:00",
     "summary": "Deni Avdija vs FC Barcelona: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "NBA Notes: Magic, Blazers, Deni Avdija, Warriors, Yaxel Lendeborg - Hoops Wire",
     "published": "2026-10-14T08:25:50+00:00",
     "summary": "NBA Notes: Magic, Blazers, Deni Avdija, Warriors, Yaxel Lendeborg Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason - WCNC",
     "published": "2026-10-14T06:51:00+00:00",
     "summary": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason WCNC"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija Highlights (26 Points, 9‑13 FG) | Trail Blazers 110, Kings 98 | Oct. 13, 2026 - NBA.com",
     "published": "2026-10-14T06:00:24+00:00",
     "summary": "Deni Avdija Highlights (26 Points, 9‑13 FG) | Trail Blazers 110, Kings 98 | Oct. 13, 2026 NBA.com"
    }
   ]
  }
 ]
}
</input>