Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "UEFA Nations League",
  "home": "Ireland",
  "away": "Israel",
  "kickoff_utc": "2026-10-04T18:45:00"
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
   "yesterday": [],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-03T21:30:00Z",
     "home": "Mineiro",
     "away": "Bragantino",
     "status": "FINISHED",
     "score": "1-0"
    }
   ],
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
     "kickoff_utc": "2026-10-04T18:45:00",
     "home": "Ireland",
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
     "title": "Bowie seizing Scotland shot after World Cup disappointment",
     "published": "2026-10-04T07:59:10+00:00",
     "summary": "BBC Scotland speaks to Kieron Bowie after he scores his first goal for his country against North Macedonia."
    },
    {
     "ref": "bbc_football#1",
     "title": "Bowie seizing Scotland shot after World Cup disappointment",
     "published": "2026-10-04T07:59:10+00:00",
     "summary": "BBC Scotland speaks to Kieron Bowie after he scores his first goal for his country against North Macedonia."
    },
    {
     "ref": "bbc_football#2",
     "title": "I clawed my way to the top but need a break - Azpilicueta",
     "published": "2026-10-04T06:15:35+00:00",
     "summary": "Cesar Azpilicueta says it is time to move to \"a different stage of life\" following a glorious 20-year playing career, notably captaining Chelsea to several titles."
    },
    {
     "ref": "bbc_football#3",
     "title": "Flex your football brain with our daily quizzes",
     "published": "2026-10-04T05:40:25+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#4",
     "title": "Wales aiming to prove they can thrive at top level",
     "published": "2026-10-04T03:40:55+00:00",
     "summary": "Captain Ben Davies says Wales will be driven by determination to prove they can live with challenges of Nations League A when they face Denmark in Cardiff."
    },
    {
     "ref": "bbc_football#5",
     "title": "Two going on four, five or six on good night for new Scotland era",
     "published": "2026-10-03T22:22:18+00:00",
     "summary": "Scotland scored twice in North Macedonia but the scoreline does not reflect their dominance in Skopje, writes Tom English."
    },
    {
     "ref": "bbc_football#6",
     "title": "Two going on four, five or six on good night for new Scotland era",
     "published": "2026-10-03T22:22:18+00:00",
     "summary": "Scotland scored twice in North Macedonia but the scoreline does not reflect their dominance in Skopje, writes Tom English."
    },
    {
     "ref": "bbc_football#7",
     "title": "Celtic condemn fan protest as Desmond targeted at Alfred Dunhill",
     "published": "2026-10-03T21:46:04+00:00",
     "summary": "Celtic's largest shareholder Dermot Desmond is targeted in a protest at the Alfred Dunhill Links golf tournament in St Andrews as tennis balls were thrown towards him."
    },
    {
     "ref": "bbc_football#8",
     "title": "Celtic condemn fan protest as Desmond targeted at Alfred Dunhill",
     "published": "2026-10-03T21:46:04+00:00",
     "summary": "Celtic's largest shareholder Dermot Desmond is targeted in a protest at the Alfred Dunhill Links golf tournament in St Andrews as tennis balls were thrown towards him."
    },
    {
     "ref": "bbc_football#9",
     "title": "'It means everything' - numbers behind Robertson's 100-cap Scotland career",
     "published": "2026-10-03T21:27:29+00:00",
     "summary": "Andy Robertson has become only the second man ever to play 100 times for Scotland. BBC Sport Scotland charts his international career in numbers."
    },
    {
     "ref": "bbc_football#10",
     "title": "'It means everything' - numbers behind Robertson's 100-cap Scotland career",
     "published": "2026-10-03T21:27:29+00:00",
     "summary": "Andy Robertson has become only the second man ever to play 100 times for Scotland. BBC Sport Scotland charts his international career in numbers."
    },
    {
     "ref": "bbc_football#11",
     "title": "Bellingham unlocks new level and potential to be 'one of the greatest'",
     "published": "2026-10-03T21:07:59+00:00",
     "summary": "Jude Bellingham's international future was being called into question a year ago, but now he is regarded as potentially one of England's \"greatest of all time\"."
    },
    {
     "ref": "bbc_football#12",
     "title": "Seventh heaven for England in Croatia",
     "published": "2026-10-03T20:38:00+00:00",
     "summary": "John Murray presents reaction in Croatia to England's 7-0 Nations League win."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man Utd & Arsenal eye Croatia striker - Sunday's gossip",
     "published": "2026-10-03T20:32:45+00:00",
     "summary": "Three Premier League clubs are interested in Freiburg striker Igor Matanovic, Juventus want Liverpool centre-back Giovanni Leoni, Newcastle willing to let Joe Willock leave in January, plus more."
    },
    {
     "ref": "bbc_football#14",
     "title": "Ronaldo still 'greatest symbol' of Portugal - Fernandes",
     "published": "2026-10-03T18:57:50+00:00",
     "summary": "Portugal midfielder Bruno Fernandes says Cristiano Ronaldo remains the country's greatest footballing figure despite leaving the squad this week after finding out he would not start a match."
    },
    {
     "ref": "bbc_football#15",
     "title": "Who was best player on the pitch? Who looks a great addition? England ratings",
     "published": "2026-10-03T17:58:13+00:00",
     "summary": "England produce one of their best performances in recent times as they thump Croatia 6-0 in Rijeka. How did our report rate the players' performances?"
    },
    {
     "ref": "bbc_football#16",
     "title": "Group has 'exploded' after Wales win - Bellamy",
     "published": "2026-10-03T16:11:50+00:00",
     "summary": "Craig Bellamy says Wales' win over Norway has \"thrown a hand grenade\" into their Nations League group as they go in search of another victory against Denmark in Cardiff on Sunday."
    },
    {
     "ref": "bbc_football#17",
     "title": "'I want to discover Manchester' - Olid hunts recommendations",
     "published": "2026-10-03T16:04:33+00:00",
     "summary": "Manchester United manager Eva Olid says she is \"asking for recommendations\" as she prepares to look around the city for the first time during the international break"
    },
    {
     "ref": "bbc_football#18",
     "title": "'I want to discover Manchester' - Olid hunts recommendations",
     "published": "2026-10-03T16:04:33+00:00",
     "summary": "Manchester United manager Eva Olid says she is \"asking for recommendations\" as she prepares to look around the city for the first time during the international break"
    },
    {
     "ref": "bbc_football#19",
     "title": "Toone determined to come back better after 'difficult week'",
     "published": "2026-10-03T15:33:16+00:00",
     "summary": "Ella Toone reflects on a \"difficult week\" and looks back on a narrow win against Liverpool in the Women's Super League."
    },
    {
     "ref": "bbc_football#20",
     "title": "Back-to-back wins for Man Utd as they see off Liverpool",
     "published": "2026-10-03T15:04:54+00:00",
     "summary": "Manchester United celebrate their 250th game in the club's history with a narrow victory over Liverpool in the Women's Super League."
    },
    {
     "ref": "bbc_football#21",
     "title": "Republic of Ireland news conference ends abruptly amid accusations",
     "published": "2026-10-03T13:02:11+00:00",
     "summary": "Republic of Ireland manager Heimir Hallgrimsson's pre-match news conference ends abruptly as accusations are levelled at his players."
    },
    {
     "ref": "bbc_football#22",
     "title": "'Different' Morrison gives NI new option",
     "published": "2026-10-03T12:23:24+00:00",
     "summary": "Northern Ireland's Kieran Morrison hopes he has earned the trust of manager Michael O'Neill after impressing on his first international start."
    },
    {
     "ref": "bbc_football#23",
     "title": "Why beating Denmark matters to Wales' Euro 2028 hopes",
     "published": "2026-10-03T09:09:04+00:00",
     "summary": "Avoiding finishing bottom of their Nations League group is a major aim for Wales following a win over Erling Haaland's Norway."
    },
    {
     "ref": "bbc_football#24",
     "title": "Second Israel game won't be a friendly - Hallgrimsson",
     "published": "2026-10-03T09:04:15+00:00",
     "summary": "Republic of Ireland head coach Heimir Hallgrimsson admits Sunday's second game against Israel is \"not going to be a friendly\" following comments from the latter's camp after last week's match in Hungary."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Emiliano Martinez opens up on Lionel Messi retirement and admits Inter Miami star will leave 'a massive void' for Argentina - ca.sports.yahoo.com",
     "published": "2026-10-04T04:40:00+00:00",
     "summary": "Emiliano Martinez opens up on Lionel Messi retirement and admits Inter Miami star will leave 'a massive void' for Argentina ca.sports.yahoo.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Messi on target as Miami downed by Columbus Crew - Kuwait Times",
     "published": "2026-10-04T00:41:20+00:00",
     "summary": "Messi on target as Miami downed by Columbus Crew Kuwait Times"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Lionel Messi & Argentina News Confirmed on Saturday - heavy.com",
     "published": "2026-10-03T23:42:33+00:00",
     "summary": "Lionel Messi & Argentina News Confirmed on Saturday heavy.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-10-03T22:39:53+00:00",
     "summary": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi Arrives in Argentina for His Farewell: Is Inter Miami Preparing a Special Message for No. 10? - Pasión Fútbol",
     "published": "2026-10-03T15:39:29+00:00",
     "summary": "Lionel Messi Arrives in Argentina for His Farewell: Is Inter Miami Preparing a Special Message for No. 10? Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "The first trailer is already online. Messi to star in Disney+ animated series - Dailysports",
     "published": "2026-10-03T14:54:12+00:00",
     "summary": "The first trailer is already online. Messi to star in Disney+ animated series Dailysports"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi Has Arrived: The Final Countdown to Argentina’s Goodbye Begins - heavy.com",
     "published": "2026-10-03T12:01:42+00:00",
     "summary": "Messi Has Arrived: The Final Countdown to Argentina’s Goodbye Begins heavy.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "The Day Josef Scored His 100th Goal | Atlanta United 1-0 Inter Miami | MLS | 2021 Tobias Harris (dHP9nkZwDs) - Unisba Media",
     "published": "2026-10-03T11:52:34+00:00",
     "summary": "The Day Josef Scored His 100th Goal | Atlanta United 1-0 Inter Miami | MLS | 2021 Tobias Harris (dHP9nkZwDs) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi touches down in Argentina ahead of emotional final Albiceleste appearance - Goal.com",
     "published": "2026-10-03T06:00:05+00:00",
     "summary": "Lionel Messi touches down in Argentina ahead of emotional final Albiceleste appearance Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Antonella Roccuzzo - Wife of Lionel Messi. - Tribuna.com",
     "published": "2026-10-03T04:24:14+00:00",
     "summary": "Antonella Roccuzzo - Wife of Lionel Messi. Tribuna.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "San Diego FC at Inter Miami CF - MLS Game Summary - Sep 20, 2026 - usatoday.com",
     "published": "2026-10-03T02:57:29+00:00",
     "summary": "San Diego FC at Inter Miami CF - MLS Game Summary - Sep 20, 2026 usatoday.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Riquelme Fillipi Faces a Major Challenge to Earn a Starting Spot at Inter Miami - Pasión Fútbol",
     "published": "2026-10-03T01:41:37+00:00",
     "summary": "Riquelme Fillipi Faces a Major Challenge to Earn a Starting Spot at Inter Miami Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Inter Miami Faces a Major Offensive Question as Messi and Suárez Near a New Crossroads - Pasión Fútbol",
     "published": "2026-10-03T01:38:35+00:00",
     "summary": "Inter Miami Faces a Major Offensive Question as Messi and Suárez Near a New Crossroads Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi watches on from his laptop as new club CD Eldense fight back to win 4-1 - Intel Region",
     "published": "2026-10-03T00:03:12+00:00",
     "summary": "Messi watches on from his laptop as new club CD Eldense fight back to win 4-1 Intel Region"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MESSI FIRE ASSISTS! 🔥 Share Points. Inter Miami Vs Atlanta United 2-2 All Goals & Highlights 2026 Jim Carrey (ZA8BfrWsJh) - Unisba Media",
     "published": "2026-10-02T22:10:21+00:00",
     "summary": "MESSI FIRE ASSISTS! 🔥 Share Points. Inter Miami Vs Atlanta United 2-2 All Goals & Highlights 2026 Jim Carrey (ZA8BfrWsJh) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Luis Suárez’s Inter Miami Future Is Still Uncertain as His 2026 Contract Nears Its End - Pasión Fútbol",
     "published": "2026-10-02T21:30:01+00:00",
     "summary": "Luis Suárez’s Inter Miami Future Is Still Uncertain as His 2026 Contract Nears Its End Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Without the Barcelona crest: Messi secures his first win in Spain - Goal.com",
     "published": "2026-10-02T21:28:19+00:00",
     "summary": "Without the Barcelona crest: Messi secures his first win in Spain Goal.com"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami could make or break some rivals' playoff dreams - OneFootball",
     "published": "2026-10-02T20:34:28+00:00",
     "summary": "Inter Miami could make or break some rivals' playoff dreams OneFootball"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Join The Huddle: Introducing New In-App Fan-Player Chat Feature! - Inter Miami CF",
     "published": "2026-10-02T20:00:18+00:00",
     "summary": "Join The Huddle: Introducing New In-App Fan-Player Chat Feature! Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami could make or break some rivals' playoff dreams - Inter Heron",
     "published": "2026-10-02T20:00:01+00:00",
     "summary": "Inter Miami could make or break some rivals' playoff dreams Inter Heron"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Messi is preparing a revolution - Fichajes.net",
     "published": "2026-10-02T18:00:00+00:00",
     "summary": "Messi is preparing a revolution Fichajes.net"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team - 95.5 WSB",
     "published": "2026-10-02T17:30:32+00:00",
     "summary": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team 95.5 WSB"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi ready to ‘pass the torch’ to Lamine Yamal in groundbreaking project planned for 2027 - World Soccer Talk",
     "published": "2026-10-02T17:25:58+00:00",
     "summary": "Lionel Messi ready to ‘pass the torch’ to Lamine Yamal in groundbreaking project planned for 2027 World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Messi finalises acquisition of second Spanish lower league club - Citizen Digital",
     "published": "2026-10-02T16:57:57+00:00",
     "summary": "Messi finalises acquisition of second Spanish lower league club Citizen Digital"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "New York Red Bulls - Inter Miami - Flashscore.com",
     "published": "2026-10-02T16:07:15+00:00",
     "summary": "New York Red Bulls - Inter Miami Flashscore.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership - roundtable.io",
     "published": "2026-10-04T01:29:32+00:00",
     "summary": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija: “I definitely had a lot of offensive load … - Yahoo Sports",
     "published": "2026-10-02T16:52:57+00:00",
     "summary": "Deni Avdija: “I definitely had a lot of offensive load … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers Fire Play-By-Play Announcer Over Racist Tweets - Yahoo Sports",
     "published": "2026-10-02T13:06:23+00:00",
     "summary": "Trail Blazers Fire Play-By-Play Announcer Over Racist Tweets Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers - NBA.com",
     "published": "2026-10-02T01:24:48+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - WGRZ",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? WGRZ"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - 5newsonline.com",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? 5newsonline.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - KTVB",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? KTVB"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers - YouTube",
     "published": "2026-10-01T22:15:36+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers YouTube"
    }
   ]
  }
 ]
}
</input>