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
     "home": "Norwich",
     "away": "Southampton",
     "status": "FINISHED",
     "score": "0-1"
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
     "home": "QPR",
     "away": "Derby County",
     "status": "FINISHED",
     "score": "4-1"
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
     "home": "Man City",
     "away": "PSG",
     "status": "FINISHED",
     "score": "2-4"
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
     "title": "Burnham had two hospitality dinners with Man City chairman, deleted records show",
     "published": "2026-10-15T01:07:59+00:00",
     "summary": "The prime minister has been under growing pressure since the club was found guilty of Premier League rule breaches."
    },
    {
     "ref": "bbc_football#1",
     "title": "'Players won't like it' - Martinez apologises, but is the damage done?",
     "published": "2026-10-14T23:13:53+00:00",
     "summary": "Champions League Match of the Day pundits Nedum Onuoha, Stephen Warnock, and Rory Smith analyse Lisandro Martinez's comments following Manchester United's 2-0 loss to Atletico Madrid and the impact they'll have on the club."
    },
    {
     "ref": "bbc_football#2",
     "title": "'Shameless' - Mourinho critical of Vinicius Jr ban timing",
     "published": "2026-10-14T23:13:20+00:00",
     "summary": "Real Madrid forward Vinicius Jr will miss El Clasico against Barcelona after being given a four-game ban."
    },
    {
     "ref": "bbc_football#3",
     "title": "Guardiola's return, Man City's defiance - and a game of glorious chaos",
     "published": "2026-10-14T22:57:23+00:00",
     "summary": "On their return to Etihad Stadium Manchester City put on a show of defiance - even in the face of a PSG masterclass, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#4",
     "title": "Jackson steps up again as Aston Villa revival continues",
     "published": "2026-10-14T22:45:22+00:00",
     "summary": "Nicolas Jackson continues his fine goalscoring form as Aston Villa record an impressive Champions League win."
    },
    {
     "ref": "bbc_football#5",
     "title": "Martinez outburst came out of 'anger and frustration'",
     "published": "2026-10-14T22:42:02+00:00",
     "summary": "Manchester United defender Lisandro Martinez says he \"spoke out of anger and frustration\" when launching a scathing attack on the club's hierarchy."
    },
    {
     "ref": "bbc_football#6",
     "title": "PSG on 'different level' - are they building greatest European dynasty?",
     "published": "2026-10-14T21:55:37+00:00",
     "summary": "Paris St-Germain are eyeing a third successive Champions League crown after dismantling Manchester City, but where do they rank against Europe's most dominant clubs?"
    },
    {
     "ref": "bbc_football#7",
     "title": "Isco snatches late Betis win as they edge past Porto",
     "published": "2026-10-14T21:51:42+00:00",
     "summary": "Isco scores an 84th minute penalty to help Real Betis snatch a late 3-2 win against Porto, giving them back to back wins at the start of this season's Champions League."
    },
    {
     "ref": "bbc_football#8",
     "title": "Real Madrid stun Roma after dramatic late comeback",
     "published": "2026-10-14T21:31:34+00:00",
     "summary": "Real Madrid complete their latest dramatic Champions League comeback by scoring three goals in the final seven minutes to earn manager Jose Mourinho a win on his return to Roma."
    },
    {
     "ref": "bbc_football#9",
     "title": "Bodo/Glimt impress in win over Dortmund",
     "published": "2026-10-14T21:28:39+00:00",
     "summary": "Bodo/Glimt bounce back from their thrashing at Bayern with a fine 1-0 win in the Champions League over Borussia Dortmund."
    },
    {
     "ref": "bbc_football#10",
     "title": "Martinez's future at Man Utd in doubt - Thursday's gossip",
     "published": "2026-10-14T21:27:34+00:00",
     "summary": "Lisandro Martinez's future in doubt at Manchester United, Newcastle's Bazoumana Toure eyed by Manchester United and Arsenal, Getafe interested in free agent Jadon Sancho, plus more."
    },
    {
     "ref": "bbc_football#11",
     "title": "Villa rewrite the record books as they hit Fenerbahce for six",
     "published": "2026-10-14T21:24:34+00:00",
     "summary": "Aston Villa record their biggest ever win in a European competition as they thrash Turkish side Fenerbahce 6-0 at Villa Park, with Nicolas Jackson and Ross Barkley both scoring twice."
    },
    {
     "ref": "bbc_football#12",
     "title": "Man City show fight but fall short of fightback against slick PSG",
     "published": "2026-10-14T21:19:45+00:00",
     "summary": "Defending champions Paris Saint-Germain make it two wins from two in this season's Champions League, after beating Manchester City 4-2 at the Etihad Stadium"
    },
    {
     "ref": "bbc_football#13",
     "title": "Feyenoord come from behind to beat Como",
     "published": "2026-10-14T21:00:55+00:00",
     "summary": "Feyenoord come from a goal to beat Como 3-2 in Rotterdam to secure their first win of the league phase in this season's Champions League."
    },
    {
     "ref": "bbc_football#14",
     "title": "Tresoldi hat-trick fires Club Brugge to victory over Inter in seven-goal thriller",
     "published": "2026-10-14T21:00:52+00:00",
     "summary": "Club Brugge's Nicolo Tresoldi scores a hat-trick as the Belgian side edge Inter Milan 4-3, extending Inter's Champions League losing run to four matches for the first time in their history."
    },
    {
     "ref": "bbc_football#15",
     "title": "Gordon scores as 'brilliant Barcelona' thrash Galatasaray",
     "published": "2026-10-14T21:00:43+00:00",
     "summary": "Anthony Gordon scores his first Champions League goal for Barcelona as the Spanish side come from behind to thrash Galatasaray 4-1 in Istanbul, and make it two wins from two in this season's Champions League."
    },
    {
     "ref": "bbc_football#16",
     "title": "Viking snatch draw against Bayern Munich in six-goal thriller",
     "published": "2026-10-14T21:00:40+00:00",
     "summary": "Norwegian champions Viking score a 90th minute equaliser to snatch a 3-3 draw against six-time European champions Bayern Munich in the Champions League, securing one of the biggest results in the club's history."
    },
    {
     "ref": "bbc_football#17",
     "title": "Substitutes steal the show as Arsenal score three against Lille",
     "published": "2026-10-14T21:00:36+00:00",
     "summary": "Substitute Bukayo Saka scores one and sets up another to help Arsenal beat Lille 3-0 at the Emirates, as the Premier League champions made it two wins from two in the Champions League."
    },
    {
     "ref": "bbc_football#18",
     "title": "Yoro sent off as Man Utd stumble to defeat against Atletico Madrid",
     "published": "2026-10-14T21:00:34+00:00",
     "summary": "Manchester United's winless run stretches to five matches, as they're beaten 2-0 by Atletico Madrid in the Champions League, in a match which saw them concede in the opening minute before ending the game with ten men after Leny Yoro was sent off."
    },
    {
     "ref": "bbc_football#19",
     "title": "Brilliant Barcola scores first hat-trick to get lift-off at Liverpool",
     "published": "2026-10-14T21:00:28+00:00",
     "summary": "Liverpool's summer signing Bradley Barcola scores his first senior hat-trick, and his first goals for Liverpool, as he helps his side beat LASK 6-3 in Austria to make it two wins from two in this season's Champions League."
    },
    {
     "ref": "bbc_football#20",
     "title": "Barcola shines as Liverpool score six to beat LASK",
     "published": "2026-10-14T21:00:24+00:00",
     "summary": "Bradley Barcola scores a hat-trick as Liverpool beat LASK 6-3 in Austria to make it two wins from two in the league phase of this season's Champions League."
    },
    {
     "ref": "bbc_football#21",
     "title": "On night of mayhem for Liverpool, Barcola arrives in style",
     "published": "2026-10-14T20:46:35+00:00",
     "summary": "Bradley Barcola's form was the subject of pre-match questions before Liverpool faced LASK - but the France forward's Champions League hat-trick was the perfect answer."
    },
    {
     "ref": "bbc_football#22",
     "title": "Wolves striker Jimenez to have knee surgery",
     "published": "2026-10-14T18:21:21+00:00",
     "summary": "Wolves' veteran striker Raul Jimenez is to have knee surgery - and is now expected to be out of action until January."
    },
    {
     "ref": "bbc_football#23",
     "title": "East Fife sack Campbell as Lennon steps in at Dumbarton",
     "published": "2026-10-14T17:16:23+00:00",
     "summary": "East Fife part ways with veteran manager Dick Campbell as Danny Lennon temporarily replaces Frank McKeown at Dumbarton."
    },
    {
     "ref": "bbc_football#24",
     "title": "Millwall's Neil criticised over racial abuse stoppage comments",
     "published": "2026-10-14T17:09:18+00:00",
     "summary": "Anti-racism campaign group Kick It Out calls on managers to \"set the tone\" after Millwall boss Alex Neil criticises halting a game following an accusation of abuse."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Match Recap: Inter Miami CF 2-0 New York City FC - New York City FC",
     "published": "2026-10-15T03:33:45+00:00",
     "summary": "Match Recap: Inter Miami CF 2-0 New York City FC New York City FC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "MATCH RECAP: Inter Miami CF Secures Audi 2026 MLS Cup Playoffs with 2-1 Home Win Against NYCFC - Inter Miami CF",
     "published": "2026-10-15T03:32:36+00:00",
     "summary": "MATCH RECAP: Inter Miami CF Secures Audi 2026 MLS Cup Playoffs with 2-1 Home Win Against NYCFC Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami vs New York City: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-15T03:19:05+00:00",
     "summary": "Inter Miami vs New York City: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "PLAY@~ Inter Miami v New York City Live Soccer Match - Universidad de Córdoba (UCO)",
     "published": "2026-10-15T03:18:01+00:00",
     "summary": "PLAY@~ Inter Miami v New York City Live Soccer Match Universidad de Córdoba (UCO)"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi sets up Inter Miami goal just before halftime - ESPN",
     "published": "2026-10-15T03:09:59+00:00",
     "summary": "Lionel Messi sets up Inter Miami goal just before halftime ESPN"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "$+ +LIVE@sTRAmS]Inter Miami vs. New York City FC MLS Match Coverage - Universidad de Córdoba (UCO)",
     "published": "2026-10-15T03:01:58+00:00",
     "summary": "$+ +LIVE@sTRAmS]Inter Miami vs. New York City FC MLS Match Coverage Universidad de Córdoba (UCO)"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "☑︎!+!~[ＬＩＶＥ ＯＮ ＣＨＡＮＮＥＬ] ☑︎ Inter Miami vs New York City FC Game 3 Match today ＬＩＶＥ Ｓｔｒｅａｍｉｎｇs - Universidad de Córdoba (UCO)",
     "published": "2026-10-15T03:01:58+00:00",
     "summary": "☑︎!+!~[ＬＩＶＥ ＯＮ ＣＨＡＮＮＥＬ] ☑︎ Inter Miami vs New York City FC Game 3 Match today ＬＩＶＥ Ｓｔｒｅａｍｉｎｇs Universidad de Córdoba (UCO)"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason - Miami Herald",
     "published": "2026-10-15T02:52:29+00:00",
     "summary": "Messi notches assists as Inter Miami beats NYCFC 2-0, clinches postseason Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "New York City Football Club at Inter Miami CF - MLS Game Summary - Oct 14, 2026 - USA Today",
     "published": "2026-10-15T02:44:33+00:00",
     "summary": "New York City Football Club at Inter Miami CF - MLS Game Summary - Oct 14, 2026 USA Today"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi shines in 2-0 win, Inter Miami continue on the right path under Kily Gonzalez and clinch MLS Playoffs spot - MARCA",
     "published": "2026-10-15T02:38:00+00:00",
     "summary": "Lionel Messi shines in 2-0 win, Inter Miami continue on the right path under Kily Gonzalez and clinch MLS Playoffs spot MARCA"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi, Inter Miami clinch MLS playoff berth in win over NYCFC - theScore",
     "published": "2026-10-15T02:32:37+00:00",
     "summary": "Messi, Inter Miami clinch MLS playoff berth in win over NYCFC theScore"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi sets up Inter Miami goal just before halftime - ESPN",
     "published": "2026-10-15T02:27:30+00:00",
     "summary": "Lionel Messi sets up Inter Miami goal just before halftime ESPN"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami blank NYCFC, clinch third consecutive playoff spot - Field Level Media",
     "published": "2026-10-15T02:26:49+00:00",
     "summary": "Inter Miami blank NYCFC, clinch third consecutive playoff spot Field Level Media"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "MIAvsNYC 10-14-2026 | MLS Match Recap - MLSsoccer.com",
     "published": "2026-10-15T02:22:39+00:00",
     "summary": "MIAvsNYC 10-14-2026 | MLS Match Recap MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS: Messi gets an assist as Inter Miami beats New York City to book playoffs spot; Player ratings - Sportstar",
     "published": "2026-10-15T02:22:24+00:00",
     "summary": "MLS: Messi gets an assist as Inter Miami beats New York City to book playoffs spot; Player ratings Sportstar"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "VIDEO: Highlights of NYCFC’s 2-0 defeat at Inter Miami CF - Front Row Soccer",
     "published": "2026-10-15T02:19:38+00:00",
     "summary": "VIDEO: Highlights of NYCFC’s 2-0 defeat at Inter Miami CF Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - WSVN",
     "published": "2026-10-15T02:16:25+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC WSVN"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi's Inter Miami book playoffs with 2-0 win over New York City - France 24",
     "published": "2026-10-15T02:15:24+00:00",
     "summary": "Messi's Inter Miami book playoffs with 2-0 win over New York City France 24"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami CF clinch Audi 2026 MLS Cup Playoffs spot - MLSsoccer.com",
     "published": "2026-10-15T02:08:33+00:00",
     "summary": "Inter Miami CF clinch Audi 2026 MLS Cup Playoffs spot MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "STILL AN UPHILL BATTLE: NYCFC drops 2-0 decision at Inter Miami - Front Row Soccer",
     "published": "2026-10-15T02:08:33+00:00",
     "summary": "STILL AN UPHILL BATTLE: NYCFC drops 2-0 decision at Inter Miami Front Row Soccer"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "MLS NYCFC Inter Miami Soccer - The Herald Journal",
     "published": "2026-10-15T02:08:31+00:00",
     "summary": "MLS NYCFC Inter Miami Soccer The Herald Journal"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami beat New York City FC, consolidating second place in MLS - Laodong.vn",
     "published": "2026-10-15T02:05:49+00:00",
     "summary": "Inter Miami beat New York City FC, consolidating second place in MLS Laodong.vn"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "WATCH: The champs are in! Inter Miami clinch playoff berth - MLSsoccer.com",
     "published": "2026-10-15T02:05:23+00:00",
     "summary": "WATCH: The champs are in! Inter Miami clinch playoff berth MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - Times Union",
     "published": "2026-10-15T02:02:34+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC Times Union"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC - WKMG",
     "published": "2026-10-15T02:00:24+00:00",
     "summary": "Messi assists as Inter Miami clinches MLS playoff berth with 2-0 win over NYCFC WKMG"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had - Rip City Project",
     "published": "2026-10-14T21:26:25+00:00",
     "summary": "Ja Morant gives Blazers the secondary playmaker Deni Avdija never had Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Ben Saraf vs Dolomiti Energia Trento: stats, game log - BasketNews.com",
     "published": "2026-10-14T20:39:05+00:00",
     "summary": "Ben Saraf vs Dolomiti Energia Trento: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 - The Ringer",
     "published": "2026-10-14T17:06:24+00:00",
     "summary": "Deni Avdija — No. 27 in The Ringer's NBA Top 100 The Ringer"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak - Sports Illustrated",
     "published": "2026-10-14T13:00:02+00:00",
     "summary": "Deni Avdija Continues Efficient Play Against Kings, Ja Morant Snaps Cold Streak Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija vs Finland: stats, game log - BasketNews.com",
     "published": "2026-10-14T12:09:34+00:00",
     "summary": "Deni Avdija vs Finland: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija - Yahoo Sports",
     "published": "2026-10-14T12:00:05+00:00",
     "summary": "'Still Gonna Get You': Draymond Green Has Unfinished Business With Blazers' Deni Avdija Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log - BasketNews.com",
     "published": "2026-10-14T11:47:31+00:00",
     "summary": "Deni Avdija vs Crvena Zvezda Meridianbet Belgrade: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija vs Greece: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:59:16+00:00",
     "summary": "Deni Avdija vs Greece: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:47:55+00:00",
     "summary": "Deni Avdija vs Fenerbahce Beko Istanbul: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija vs Phoenix Suns: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:30:55+00:00",
     "summary": "Deni Avdija vs Phoenix Suns: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija vs Olympiacos Piraeus: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:13:46+00:00",
     "summary": "Deni Avdija vs Olympiacos Piraeus: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija vs CSKA Moscow: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:53+00:00",
     "summary": "Deni Avdija vs CSKA Moscow: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija vs Zalgiris Kaunas: stats, game log - BasketNews.com",
     "published": "2026-10-14T10:02:21+00:00",
     "summary": "Deni Avdija vs Zalgiris Kaunas: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija vs Panathinaikos AKTOR Athens: stats, game log - BasketNews.com",
     "published": "2026-10-14T09:34:38+00:00",
     "summary": "Deni Avdija vs Panathinaikos AKTOR Athens: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "NBA Notes: Magic, Blazers, Deni Avdija, Warriors, Yaxel Lendeborg - Hoops Wire",
     "published": "2026-10-14T08:25:50+00:00",
     "summary": "NBA Notes: Magic, Blazers, Deni Avdija, Warriors, Yaxel Lendeborg Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason - kens5.com",
     "published": "2026-10-14T06:51:00+00:00",
     "summary": "What We Have (Not) Learned About Deni Avdija, Damian Lillard & Ja Morant in Trail Blazers Preseason kens5.com"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija Highlights (26 Points, 9‑13 FG) | Trail Blazers 110, Kings 98 | Oct. 13, 2026 - NBA.com",
     "published": "2026-10-14T06:00:24+00:00",
     "summary": "Deni Avdija Highlights (26 Points, 9‑13 FG) | Trail Blazers 110, Kings 98 | Oct. 13, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Ben Saraf vs Suns: stats, game log - BasketNews.com",
     "published": "2026-10-14T05:25:08+00:00",
     "summary": "Ben Saraf vs Suns: stats, game log BasketNews.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Highlights From Deni Avdija 26-Point Game - NBA.com",
     "published": "2026-10-14T05:21:26+00:00",
     "summary": "Highlights From Deni Avdija 26-Point Game NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija pours in 26/9/4 line vs. Sacramento - NBC Sports",
     "published": "2026-10-14T05:04:31+00:00",
     "summary": "Deni Avdija pours in 26/9/4 line vs. Sacramento NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija, Franz Wagner dominate Preseason action, Luka Doncic rests - Eurohoops",
     "published": "2026-10-14T05:04:00+00:00",
     "summary": "Deni Avdija, Franz Wagner dominate Preseason action, Luka Doncic rests Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija Fantasy Outlook & Stats - FantasySP",
     "published": "2026-10-14T04:36:27+00:00",
     "summary": "Deni Avdija Fantasy Outlook & Stats FantasySP"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija with the And-1!, 10/13/2026 - Yahoo Sports",
     "published": "2026-10-14T04:35:06+00:00",
     "summary": "Deni Avdija with the And-1!, 10/13/2026 Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija News: Efficient in limited run - RotoWire",
     "published": "2026-10-14T04:32:56+00:00",
     "summary": "Deni Avdija News: Efficient in limited run RotoWire"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija somehow gets the and-1 to fall - ESPN",
     "published": "2026-10-14T04:04:02+00:00",
     "summary": "Deni Avdija somehow gets the and-1 to fall ESPN"
    }
   ]
  }
 ]
}
</input>