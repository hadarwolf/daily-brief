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
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Bragantino",
     "away": "Mirassol",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Clube do Remo",
     "away": "Grêmio",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T22:30:00Z",
     "home": "Internacional",
     "away": "Corinthians",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T23:00:00Z",
     "home": "Vitória",
     "away": "Chapecoense",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-07T23:30:00Z",
     "home": "Botafogo",
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
     "title": "Midfield options and a fab front four - what we've learned about England",
     "published": "2026-10-06T22:34:46+00:00",
     "summary": "From Trent Alexander-Arnold's return to Alex Scott's debut, Phil McNulty assesses what England have learned during this international window."
    },
    {
     "ref": "bbc_football#1",
     "title": "Honeymoon over as Pocognoli's Scotland suffer domestic disharmony",
     "published": "2026-10-06T22:28:47+00:00",
     "summary": "Sebastien Pocognoli is left with questions to answer after an inert Scotland performance leaves him still searching for his first home win, writes Tom English."
    },
    {
     "ref": "bbc_football#2",
     "title": "Honeymoon over as Pocognoli's Scotland suffer domestic disharmony",
     "published": "2026-10-06T22:28:47+00:00",
     "summary": "Sebastien Pocognoli is left with questions to answer after an inert Scotland performance leaves him still searching for his first home win, writes Tom English."
    },
    {
     "ref": "bbc_football#3",
     "title": "'Outfought' and 'not good enough' - Robertson on Scotland defeat",
     "published": "2026-10-06T22:13:15+00:00",
     "summary": "Scotland were \"outfought\" and simply \"not good enough\" in their 2-1 Nations League defeat by Slovenia, according to captain Andy Robertson."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Outfought' and 'not good enough' - Robertson on Scotland defeat",
     "published": "2026-10-06T22:13:15+00:00",
     "summary": "Scotland were \"outfought\" and simply \"not good enough\" in their 2-1 Nations League defeat by Slovenia, according to captain Andy Robertson."
    },
    {
     "ref": "bbc_football#5",
     "title": "Football Daily",
     "published": "2026-10-06T21:56:00+00:00",
     "summary": "What have we learn't about England during this international break?"
    },
    {
     "ref": "bbc_football#6",
     "title": "Ronaldo wants Portugal 'punishment' but not retiring",
     "published": "2026-10-06T21:48:36+00:00",
     "summary": "Cristiano Ronaldo says he is not retiring from international football but deserves to be punished for walking out on Portugal after head coach Jorge Jesus \"broke his word to me\"."
    },
    {
     "ref": "bbc_football#7",
     "title": "Scotland let lead slip in abject defeat by Slovenia",
     "published": "2026-10-06T21:23:34+00:00",
     "summary": "Watch the best of the action as Slovenia come from behind to beat Scotland 2-1 in the Nations League at Hampden."
    },
    {
     "ref": "bbc_football#8",
     "title": "Scotland let lead slip in abject defeat by Slovenia",
     "published": "2026-10-06T21:23:34+00:00",
     "summary": "Watch the best of the action as Slovenia come from behind to beat Scotland 2-1 in the Nations League at Hampden."
    },
    {
     "ref": "bbc_football#9",
     "title": "Kane scores twice but who else was a 'real threat'? England player ratings",
     "published": "2026-10-06T20:42:24+00:00",
     "summary": "Senior football correspondent Sami Mokbel rates the England players after Tuesday's 3-0 win against the Czech Republic."
    },
    {
     "ref": "bbc_football#10",
     "title": "Villa eye Endrick loan deal - Wednesday's gossip",
     "published": "2026-10-06T20:20:01+00:00",
     "summary": "Aston Villa might lure Endrick to the Premier League, Bournemouth fight to keep hold of Alex Scott, top clubs are keen on Rayan Cherki, plus more."
    },
    {
     "ref": "bbc_football#11",
     "title": "Rival clubs want retrospective and future punishments for Man City",
     "published": "2026-10-06T19:30:20+00:00",
     "summary": "A number of Premier League clubs want Manchester City to be hit with both retrospective punishments and sanctions in the future."
    },
    {
     "ref": "bbc_football#12",
     "title": "Kane's rise from childhood keeper to equalling England cap record",
     "published": "2026-10-06T19:15:12+00:00",
     "summary": "Harry Kane reaches another significant England milestone by equalling Peter Shilton's record as the most-capped Three Lions player that he has held for 36 years."
    },
    {
     "ref": "bbc_football#13",
     "title": "Man City lead, Arsenal struggle and Putellas delivers: The WSL half term review",
     "published": "2026-10-06T18:46:00+00:00",
     "summary": "What are the key takeaways from the first five weeks of the Women's Super League season?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Man City lead, Arsenal struggle and Putellas delivers: The WSL half term review",
     "published": "2026-10-06T18:46:00+00:00",
     "summary": "What are the key takeaways from the first five weeks of the Women's Super League season?"
    },
    {
     "ref": "bbc_football#15",
     "title": "England's greatest international? Kane is now a serious contender",
     "published": "2026-10-06T18:45:30+00:00",
     "summary": "With Harry Kane set to equal Peter Shilton's all-time England appearance record, where does he rank among England greats?"
    },
    {
     "ref": "bbc_football#16",
     "title": "O'Neill 'just as determined' to lead Celtic",
     "published": "2026-10-06T16:56:42+00:00",
     "summary": "Martin O'Neill insists he is the man to lead Celtic forwards after a period of reflection during the ongoing international break."
    },
    {
     "ref": "bbc_football#17",
     "title": "O'Neill 'just as determined' to lead Celtic after considering future",
     "published": "2026-10-06T16:56:42+00:00",
     "summary": "Martin O'Neill insists he is the man to lead Celtic forwards after a period of reflection during the ongoing international break."
    },
    {
     "ref": "bbc_football#18",
     "title": "Davies' 'extra motivation' after Euros heartbreak",
     "published": "2026-10-06T16:47:33+00:00",
     "summary": "Defender Mayzee Davies says missing Wales' first major tournament at Euro 2025 with a serious knee injury has given her extra motivation for the World Cup play-offs."
    },
    {
     "ref": "bbc_football#19",
     "title": "Davies' 'extra motivation' after Euros heartbreak",
     "published": "2026-10-06T16:47:33+00:00",
     "summary": "Defender Mayzee Davies says missing Wales' first major tournament at Euro 2025 with a serious knee injury has given her extra motivation for the World Cup play-offs."
    },
    {
     "ref": "bbc_football#20",
     "title": "'Real buzz' around Northern Ireland - Charles",
     "published": "2026-10-06T16:01:33+00:00",
     "summary": "Northern Ireland midfielder Shea Charles says \"he could not be happier\" following the side's unbeaten Nations League window."
    },
    {
     "ref": "bbc_football#21",
     "title": "Marsch calls USA politics 'big talk' as Pochettino praises Canada coach",
     "published": "2026-10-06T15:54:22+00:00",
     "summary": "Canada manager Jesse Marsch calls USA politics \"big talk\" while US coach Mauricio Pochettino praises his opposite number before Tuesday's game."
    },
    {
     "ref": "bbc_football#22",
     "title": "Kamara might miss QPR's next game over Finland row",
     "published": "2026-10-06T15:11:22+00:00",
     "summary": "QPR might be without Glen Kamara for Friday's Championship game against West Ham, if Fifa intervene in a club versus country dispute."
    },
    {
     "ref": "bbc_football#23",
     "title": "Shevchenko's son signs for seventh-tier club",
     "published": "2026-10-06T13:53:17+00:00",
     "summary": "Kristian Shevchenko, son of Ballon d'Or winner Andriy Shevchenko, signs for seventh-tier club Sholing FC."
    },
    {
     "ref": "bbc_football#24",
     "title": "What's it like to be the World Cup final referee?",
     "published": "2026-10-06T13:35:46+00:00",
     "summary": "Slavko Vincic, who refereed the 2026 World Cup final, reveals what it's like to take charge of the biggest game in football."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi goes out a legend in Argentina farewell - MLSsoccer.com",
     "published": "2026-10-07T02:59:12+00:00",
     "summary": "Lionel Messi goes out a legend in Argentina farewell MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi scores in final Argentina appearance as Inter Miami star bows out from international football - GB News",
     "published": "2026-10-07T02:40:51+00:00",
     "summary": "Lionel Messi scores in final Argentina appearance as Inter Miami star bows out from international football GB News"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Messi speaks of ‘painful’ retirement after Argentina farewell - The Malaysian Reserve",
     "published": "2026-10-07T02:33:15+00:00",
     "summary": "Messi speaks of ‘painful’ retirement after Argentina farewell The Malaysian Reserve"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Leo Messi Stars in Final International Appearance as Argentina Secures 3-0 Victory Over Benin - Inter Miami CF",
     "published": "2026-10-07T01:55:03+00:00",
     "summary": "Leo Messi Stars in Final International Appearance as Argentina Secures 3-0 Victory Over Benin Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Argentina bids Messi farewell in final national team match, ending an era - Arab News",
     "published": "2026-10-07T01:52:47+00:00",
     "summary": "Argentina bids Messi farewell in final national team match, ending an era Arab News"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi bids farewell to Argentina national football team: A look at his $1.1 billion net worth, endorsements - Livemint",
     "published": "2026-10-07T01:44:00+00:00",
     "summary": "Lionel Messi bids farewell to Argentina national football team: A look at his $1.1 billion net worth, endorsements Livemint"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi scores and assists twice as Argentina beats Benin in star's farewell - NBC 6 South Florida",
     "published": "2026-10-07T01:32:23+00:00",
     "summary": "Messi scores and assists twice as Argentina beats Benin in star's farewell NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "What's next for Messi after Argentina retirement? His career is not over yet - NBC 6 South Florida",
     "published": "2026-10-07T01:28:48+00:00",
     "summary": "What's next for Messi after Argentina retirement? His career is not over yet NBC 6 South Florida"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-06T22:50:34+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi's Wife Antonela Roccuzzo's Personal Life: Social Media Outburst, Suzy Cortez Ban Claim & Career - Athlon Sports",
     "published": "2026-10-06T22:34:00+00:00",
     "summary": "Lionel Messi's Wife Antonela Roccuzzo's Personal Life: Social Media Outburst, Suzy Cortez Ban Claim & Career Athlon Sports"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi’s Kids: All you need to know about the Argentine legend’s three children - Gulf News",
     "published": "2026-10-06T22:00:00+00:00",
     "summary": "Lionel Messi’s Kids: All you need to know about the Argentine legend’s three children Gulf News"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Is Lionel Messi Retiring From Inter Miami After His Argentina Farewell? - Athlon Sports",
     "published": "2026-10-06T21:35:40+00:00",
     "summary": "Is Lionel Messi Retiring From Inter Miami After His Argentina Farewell? Athlon Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Is Rodrigo De Paul Also Retiring After Lionel Messi’s Argentina Farewell Game Against Benin? - Athlon Sports",
     "published": "2026-10-06T21:16:00+00:00",
     "summary": "Is Rodrigo De Paul Also Retiring After Lionel Messi’s Argentina Farewell Game Against Benin? Athlon Sports"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Luis Suarez Sends Farewell Message to Lionel Messi Ahead of Final Match - SuaraGarut.ID",
     "published": "2026-10-06T21:00:00+00:00",
     "summary": "Luis Suarez Sends Farewell Message to Lionel Messi Ahead of Final Match SuaraGarut.ID"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-10-06T20:35:35+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "After the final dance: Messi opens the vaults of his secret empire - Goal.com",
     "published": "2026-10-06T20:04:34+00:00",
     "summary": "After the final dance: Messi opens the vaults of his secret empire Goal.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "What’s next for Lionel Messi after Argentina retirement? - Diario AS",
     "published": "2026-10-06T20:00:00+00:00",
     "summary": "What’s next for Lionel Messi after Argentina retirement? Diario AS"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi Plays His Last Match for Argentina While Building a $1.1 Billion Empire - Yahoo Sports",
     "published": "2026-10-06T19:43:41+00:00",
     "summary": "Lionel Messi Plays His Last Match for Argentina While Building a $1.1 Billion Empire Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Germán Berterame Opens Up on Life With Messi at Inter Miami and His Scary Head Injury - Pasión Fútbol",
     "published": "2026-10-06T19:40:00+00:00",
     "summary": "Germán Berterame Opens Up on Life With Messi at Inter Miami and His Scary Head Injury Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi to break four Argentina national team records that may never be broken - Daily Post Nigeria",
     "published": "2026-10-06T16:16:36+00:00",
     "summary": "Messi to break four Argentina national team records that may never be broken Daily Post Nigeria"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami 27-28 Away Kit to Be Blackout - No Pink for the First Time - Footy Headlines",
     "published": "2026-10-06T15:07:00+00:00",
     "summary": "Inter Miami 27-28 Away Kit to Be Blackout - No Pink for the First Time Footy Headlines"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "An owner, not a coach! Lionel Messi reveals ambitious plans after retirement - Dailysports",
     "published": "2026-10-06T14:56:40+00:00",
     "summary": "An owner, not a coach! Lionel Messi reveals ambitious plans after retirement Dailysports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF Foundation and Royal Caribbean Host Seventh International Youth Fútbol Clinic, the First in the Bahamas, Continuing Their Community Impact - Inter Miami CF",
     "published": "2026-10-06T14:04:24+00:00",
     "summary": "Inter Miami CF Foundation and Royal Caribbean Host Seventh International Youth Fútbol Clinic, the First in the Bahamas, Continuing Their Community Impact Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami vs DC United: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-06T13:37:15+00:00",
     "summary": "Inter Miami vs DC United: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi to Play Final Match for Argentina, Future in Club Ownership and Business Ventures Explored - Ratopati",
     "published": "2026-10-06T13:18:48+00:00",
     "summary": "Lionel Messi to Play Final Match for Argentina, Future in Club Ownership and Business Ventures Explored Ratopati"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "What Jump Can Deni Avdija Make This Season? - roundtable.io",
     "published": "2026-10-07T03:14:19+00:00",
     "summary": "What Jump Can Deni Avdija Make This Season? roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers - KREM",
     "published": "2026-10-06T03:19:00+00:00",
     "summary": "How New NBA Referee Points of Emphasis May Impact Deni Avdija, Toumani Camara, and the Trail Blazers KREM"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man - Rip City Project",
     "published": "2026-10-04T21:07:36+00:00",
     "summary": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man Rip City Project"
    }
   ]
  }
 ]
}
</input>