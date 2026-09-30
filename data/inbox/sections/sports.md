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
   "yesterday": [],
   "today": [],
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
    "recent": [
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-09-19T14:00:00Z",
      "home": "Brighton Hove",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "3-0"
     }
    ],
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
    "recent": [
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-09-16T19:30:00Z",
      "home": "Barça",
      "away": "Santander",
      "status": "FINISHED",
      "score": "7-2"
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-09-19T19:00:00Z",
      "home": "Sevilla FC",
      "away": "Barça",
      "status": "FINISHED",
      "score": "1-3"
     }
    ],
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
     "kickoff_utc": "2026-09-27T18:45:00",
     "home": "Israel",
     "away": "Ireland",
     "score": "0-3"
    }
   ],
   "upcoming": [
    {
     "competition": "UEFA Nations League",
     "kickoff_utc": "2026-10-01T18:45:00",
     "home": "Israel",
     "away": "Kosovo",
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
     "title": "Podcast: The Pocognoli report card",
     "published": "2026-09-30T07:00:00+00:00",
     "summary": "Two games down no goals, no wins. Is it panic or patience time?"
    },
    {
     "ref": "bbc_football#1",
     "title": "The Premier League footballers studying to become sporting directors",
     "published": "2026-09-30T06:41:14+00:00",
     "summary": "Kiernan Dewsbury-Hall, Taiwo Awoniyi and others have been juggling education with a football career - even studying on the team bus during away trips."
    },
    {
     "ref": "bbc_football#2",
     "title": "Hogh has no regrets over Celtic move - gossip",
     "published": "2026-09-30T06:35:41+00:00",
     "summary": "Celtic forward on joining Celtic, Rangers striker set for international bow and Dundee United man makes most of break."
    },
    {
     "ref": "bbc_football#3",
     "title": "£1.2bn on transfers with £830m inflated in accounts - Man City's 'asterisk era'",
     "published": "2026-09-30T06:26:34+00:00",
     "summary": "BBC Sport analyses Manchester City's dominance of English football during the period in which they were breaching financial rules."
    },
    {
     "ref": "bbc_football#4",
     "title": "The part-timers who won three Wembley finals in a row",
     "published": "2026-09-30T06:07:28+00:00",
     "summary": "You probably knew Pep Guardiola's Manchester City won four League Cups on the bounce between 2018 and 2021 – but another side did the silverware hat-trick first."
    },
    {
     "ref": "bbc_football#5",
     "title": "Flex your football brain with our daily quizzes",
     "published": "2026-09-30T06:02:43+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#6",
     "title": "How do teams deal with longer international window?",
     "published": "2026-09-30T05:25:05+00:00",
     "summary": "With the international window extended to four games, how do nations like Northern Ireland deal with the additional demands on players and staff?"
    },
    {
     "ref": "bbc_football#7",
     "title": "More than the Score",
     "published": "2026-09-30T05:01:00+00:00",
     "summary": "Erling Haaland’s Manchester derby winner reignites the VAR debate"
    },
    {
     "ref": "bbc_football#8",
     "title": "I'd stick my Man City medals in bin - Keane",
     "published": "2026-09-29T22:57:36+00:00",
     "summary": "Roy Keane says he would throw his \"medals in the bin\" if he were a Manchester City player after the club were found guilty of all charges relating to breaches of Premier League financial rules."
    },
    {
     "ref": "bbc_football#9",
     "title": "New coach, new players, but same old failings hamper Scotland",
     "published": "2026-09-29T22:30:20+00:00",
     "summary": "Self-inflicted wounds cost Scotland on Sebastien Pocognoli's Hampden debut, writes Tom English."
    },
    {
     "ref": "bbc_football#10",
     "title": "New coach, new players, but same old failings hamper Scotland",
     "published": "2026-09-29T22:30:20+00:00",
     "summary": "Self-inflicted wounds cost Scotland on Sebastien Pocognoli's Hampden debut, writes Tom English."
    },
    {
     "ref": "bbc_football#11",
     "title": "Football Daily",
     "published": "2026-09-29T22:19:00+00:00",
     "summary": "It was a 2-0 win for Thomas Tuchel’s side"
    },
    {
     "ref": "bbc_football#12",
     "title": "Hampden debut to forget but Pocognoli looks at bigger picture",
     "published": "2026-09-29T22:12:20+00:00",
     "summary": "Scotland head coach Sebastien Pocognoli hopes \"we will remember this night differently later on\" as his Hampden bow ends with a 3-0 defeat by Switzerland."
    },
    {
     "ref": "bbc_football#13",
     "title": "It is time for Tuchel to offer Alexander-Arnold some trust",
     "published": "2026-09-29T22:06:30+00:00",
     "summary": "Having been overlooked for so long, Trent Alexander-Arnold produced a world-class moment on his return, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#14",
     "title": "Real Madrid considering Van Dijk - Wednesday's gossip",
     "published": "2026-09-29T21:40:55+00:00",
     "summary": "Real Madrid are waiting for Virgil van Dijk to become a free agent, Bayern Munich offer Michael Olise a long-term contract and are eyeing Barcelona's Jules Kounde."
    },
    {
     "ref": "bbc_football#15",
     "title": "The intricate web Man City spun to con the Premier League",
     "published": "2026-09-29T20:58:17+00:00",
     "summary": "The 40-page document which confirmed Manchester City were found guilty of inflating sponsorship income makes fascinating reading. Here's what it sets out."
    },
    {
     "ref": "bbc_football#16",
     "title": "Who 'battled impressively' for Scots? And how did you rate players?",
     "published": "2026-09-29T20:53:06+00:00",
     "summary": "How Scotland's players rated in their Nations League defeat by Switzerland."
    },
    {
     "ref": "bbc_football#17",
     "title": "Who 'battled impressively' for Scots? And how did you rate players?",
     "published": "2026-09-29T20:53:06+00:00",
     "summary": "How Scotland's players rated in their Nations League defeat by Switzerland."
    },
    {
     "ref": "bbc_football#18",
     "title": "Village team triumphs in FA Cup row replay",
     "published": "2026-09-29T20:51:31+00:00",
     "summary": "The controversial replay follows the FA ruling a referee had made a mistake in the initial match."
    },
    {
     "ref": "bbc_football#19",
     "title": "Who continues to show how important they are? England player ratings",
     "published": "2026-09-29T20:39:46+00:00",
     "summary": "How the England players rated following their Nations League match."
    },
    {
     "ref": "bbc_football#20",
     "title": "Premier League confirm Man City guilty of all charges - 5 Live reaction",
     "published": "2026-09-29T19:30:00+00:00",
     "summary": "Kelly Somers is joined by Dale Johnson, Kieran Maguire, John Murray and Paul Robinson"
    },
    {
     "ref": "bbc_football#21",
     "title": "Man City guilty of 'sham' contracts and £830m 'disguised funding scheme'",
     "published": "2026-09-29T18:12:33+00:00",
     "summary": "The Premier League confirms that Manchester City have been found guilty of all charges related to breaches of Premier League financial rules between 2009-10 and 2017-18."
    },
    {
     "ref": "bbc_football#22",
     "title": "What have Man City been found guilty of doing?",
     "published": "2026-09-29T18:09:34+00:00",
     "summary": "Manchester City are found guilty of all charges related to breaches of Premier League financial rules between the 2009-10 and 2017-18 seasons. BBC sports editor Dan Roan explains what it means for the club and the league."
    },
    {
     "ref": "bbc_football#23",
     "title": "The four 'what next?' scenarios for Premier League after Man City ruling",
     "published": "2026-09-29T17:37:54+00:00",
     "summary": "It has taken more than two years, but a judgement has finally been made on the 115 charges levelled against Manchester City. Here's what it means."
    },
    {
     "ref": "bbc_football#24",
     "title": "Forest Green confirm Savage offered Peterborough job",
     "published": "2026-09-29T16:01:42+00:00",
     "summary": "Robbie Savage has been offered the manager's job at Peterborough United, say Forest Green, who are in negotiations regarding the terms of his exit."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports - NDTV Sports",
     "published": "2026-09-30T06:42:43+00:00",
     "summary": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports NDTV Sports"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play - Yahoo",
     "published": "2026-09-30T04:30:36+00:00",
     "summary": "Inter Miami CF vs. FC Cincinnati: Live game updates, stats, play-by-play Yahoo"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly - Goal.com",
     "published": "2026-09-30T04:23:16+00:00",
     "summary": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-09-30T03:56:38+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami CF 4 - San Luis 2: Final score, results, recap, box score, stats - Yahoo",
     "published": "2026-09-30T03:21:15+00:00",
     "summary": "Inter Miami CF 4 - San Luis 2: Final score, results, recap, box score, stats Yahoo"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Rodrigo De Paul Hit With MLS Fine After Inter Miami’s Heated Clash With Columbus - Pasión Fútbol",
     "published": "2026-09-30T02:31:09+00:00",
     "summary": "Rodrigo De Paul Hit With MLS Fine After Inter Miami’s Heated Clash With Columbus Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Inter Miami Suffers Major Blow as Mateo Silvetti Is Ruled Out for the Rest of 2026 - Pasión Fútbol",
     "published": "2026-09-30T01:50:20+00:00",
     "summary": "Inter Miami Suffers Major Blow as Mateo Silvetti Is Ruled Out for the Rest of 2026 Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS: The 5 Most Valuable Franchises and the Clubs With the Most Expensive Squads - Pasión Fútbol",
     "published": "2026-09-30T01:05:29+00:00",
     "summary": "MLS: The 5 Most Valuable Franchises and the Clubs With the Most Expensive Squads Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Why Inter Miami, Nashville, Vancouver and Cincinnati Are Among MLS’s Most Dangerous Attacks - Pasión Fútbol",
     "published": "2026-09-30T00:03:30+00:00",
     "summary": "Why Inter Miami, Nashville, Vancouver and Cincinnati Are Among MLS’s Most Dangerous Attacks Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-09-29T23:26:48+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami’s Home Form Is Becoming a Problem: Just 4 Wins in 11 Games at Nu Stadium - Pasión Fútbol",
     "published": "2026-09-29T20:48:33+00:00",
     "summary": "Inter Miami’s Home Form Is Becoming a Problem: Just 4 Wins in 11 Games at Nu Stadium Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Inter Miami Vs Nashville SC | MLS 2026 | EA FC 26 PS5 4K Gameplay Stock (f2DgVa5E9k) - Unisba Media",
     "published": "2026-09-29T20:12:42+00:00",
     "summary": "Inter Miami Vs Nashville SC | MLS 2026 | EA FC 26 PS5 4K Gameplay Stock (f2DgVa5E9k) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Sporting Kansas City's Taylor Calheira fined by MLS Disciplinary Committee - Yahoo Sports",
     "published": "2026-09-29T20:00:00+00:00",
     "summary": "Sporting Kansas City's Taylor Calheira fined by MLS Disciplinary Committee Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Match Highlights | Atlanta United FC Vs Inter Miami CF | October 27, 2021 Latto (IcVFJakQ6n) - Unisba Media",
     "published": "2026-09-29T18:24:32+00:00",
     "summary": "Match Highlights | Atlanta United FC Vs Inter Miami CF | October 27, 2021 Latto (IcVFJakQ6n) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Riquelme Fillipi Faces Uphill Battle for Inter Miami Role Under Kily González - Pasión Fútbol",
     "published": "2026-09-29T17:54:47+00:00",
     "summary": "Riquelme Fillipi Faces Uphill Battle for Inter Miami Role Under Kily González Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami Snubbed From MLS Team of the Matchday After Columbus Loss - Pasión Fútbol",
     "published": "2026-09-29T17:40:00+00:00",
     "summary": "Inter Miami Snubbed From MLS Team of the Matchday After Columbus Loss Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami Promotes Messi Training Partner as Kily González Gets New Option - Pasión Fútbol",
     "published": "2026-09-29T17:16:08+00:00",
     "summary": "Inter Miami Promotes Messi Training Partner as Kily González Gets New Option Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi could bring legendary career to an end in 2026 despite Inter Miami deal running until 2028 due... - World Soccer Talk",
     "published": "2026-09-29T16:09:22+00:00",
     "summary": "Lionel Messi could bring legendary career to an end in 2026 despite Inter Miami deal running until 2028 due... World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Matías Galarza Fonda’s MLS Rise Could Keep Him Away From River Plate - Pasión Fútbol",
     "published": "2026-09-29T14:50:00+00:00",
     "summary": "Matías Galarza Fonda’s MLS Rise Could Keep Him Away From River Plate Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne - Goal.com",
     "published": "2026-09-29T14:17:04+00:00",
     "summary": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne Goal.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami CF and Nu Stadium Host Annual Health and Wellness Fair for Front Office and Sporting Team Members - Inter Miami CF",
     "published": "2026-09-29T14:06:05+00:00",
     "summary": "Inter Miami CF and Nu Stadium Host Annual Health and Wellness Fair for Front Office and Sporting Team Members Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lil Durk's VICAR Trial Faces Delays Ahead Of November Bond Hearing - HotNewHipHop",
     "published": "2026-09-29T13:04:50+00:00",
     "summary": "Lil Durk's VICAR Trial Faces Delays Ahead Of November Bond Hearing HotNewHipHop"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Was There a Cable on the Pitch During Inter Miami Against NYCFC - Thick Accent – Football",
     "published": "2026-09-29T12:40:46+00:00",
     "summary": "Was There a Cable on the Pitch During Inter Miami Against NYCFC Thick Accent – Football"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Marriott Bonvoy Partners with Inter Miami CF - safariindia.com",
     "published": "2026-09-29T11:31:12+00:00",
     "summary": "Marriott Bonvoy Partners with Inter Miami CF safariindia.com"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Inter Miami vs Chicago Fire: predictions, best bets and latest odds - Squawka",
     "published": "2026-09-29T11:04:52+00:00",
     "summary": "Inter Miami vs Chicago Fire: predictions, best bets and latest odds Squawka"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Trail Blazers Have Every Reason to Be Better Than Last Season - roundtable.io",
     "published": "2026-09-30T04:33:20+00:00",
     "summary": "Trail Blazers Have Every Reason to Be Better Than Last Season roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers apparently have decided 50 wins is the goal - Hoops Wire",
     "published": "2026-09-30T02:28:58+00:00",
     "summary": "Blazers apparently have decided 50 wins is the goal Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth - Rip City Project",
     "published": "2026-09-29T18:18:21+00:00",
     "summary": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years - oregonlive.com",
     "published": "2026-09-29T18:16:00+00:00",
     "summary": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years oregonlive.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense - Rip City Project",
     "published": "2026-09-29T17:50:12+00:00",
     "summary": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "OPB’s First Look: The Blazers are back - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T16:26:44+00:00",
     "summary": "OPB’s First Look: The Blazers are back Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears - ClutchPoints",
     "published": "2026-09-29T16:26:22+00:00",
     "summary": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "The Persian leopard named after the NBA star arrives at the Safari - The Jerusalem Post",
     "published": "2026-09-29T07:48:19+00:00",
     "summary": "The Persian leopard named after the NBA star arrives at the Safari The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” - Eurohoops",
     "published": "2026-09-29T06:53:20+00:00",
     "summary": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Mario Hezonja details NBA return: “It was always bothering me” - Eurohoops",
     "published": "2026-09-29T06:15:03+00:00",
     "summary": "Mario Hezonja details NBA return: “It was always bothering me” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” - Eurohoops",
     "published": "2026-09-29T05:59:00+00:00",
     "summary": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija | 2026‑27 Media Day - nba.com",
     "published": "2026-09-29T01:15:46+00:00",
     "summary": "Deni Avdija | 2026‑27 Media Day nba.com"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Blazers optimistic that roster balance will ‘work itself out’ as season looms - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T00:26:05+00:00",
     "summary": "Blazers optimistic that roster balance will ‘work itself out’ as season looms Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day - si.com",
     "published": "2026-09-29T00:00:00+00:00",
     "summary": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day si.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers need to start treating Deni Avdija like the face of the franchise - Rip City Project",
     "published": "2026-09-28T23:53:48+00:00",
     "summary": "Blazers need to start treating Deni Avdija like the face of the franchise Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Blazers Media Day - Oregon Public Broadcasting - OPB",
     "published": "2026-09-28T23:26:31+00:00",
     "summary": "Blazers Media Day Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Deni Avdija (back) ’99.9 percent’ going into camp - NBC Sports",
     "published": "2026-09-28T22:07:14+00:00",
     "summary": "Deni Avdija (back) ’99.9 percent’ going into camp NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Nets Media Day Basketball - Idaho State Journal",
     "published": "2026-09-28T21:45:25+00:00",
     "summary": "Nets Media Day Basketball Idaho State Journal"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Trail Blazers Media Day: Deni Avdija Says Back is OK - Blazer's Edge",
     "published": "2026-09-28T18:40:37+00:00",
     "summary": "Trail Blazers Media Day: Deni Avdija Says Back is OK Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija on contract extension talks and future: \"I … - Yahoo Sports",
     "published": "2026-09-28T18:39:57+00:00",
     "summary": "Deni Avdija on contract extension talks and future: \"I … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Deni Avdija on ownership/arena drama: \"I love the city … - Yahoo Sports",
     "published": "2026-09-28T18:13:55+00:00",
     "summary": "Deni Avdija on ownership/arena drama: \"I love the city … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija | Portland Trail Blazers Media Day interviews - KGW",
     "published": "2026-09-28T18:13:00+00:00",
     "summary": "Deni Avdija | Portland Trail Blazers Media Day interviews KGW"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija says he's 99.9% recovered from back injuries - Yahoo Sports",
     "published": "2026-09-28T18:09:59+00:00",
     "summary": "Deni Avdija says he's 99.9% recovered from back injuries Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Damian Lillard: \"If I'm advancing the ball and I'm … - Yahoo Sports",
     "published": "2026-09-28T17:02:56+00:00",
     "summary": "Damian Lillard: \"If I'm advancing the ball and I'm … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari - Ynetnews",
     "published": "2026-09-28T10:02:13+00:00",
     "summary": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari Ynetnews"
    }
   ]
  }
 ]
}
</input>