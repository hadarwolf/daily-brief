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
     "title": "Scott withdraws from England squad and could be out for eight weeks",
     "published": "2026-10-05T08:30:57+00:00",
     "summary": "Bournemouth midfielder Alex Scott withdraws from the England squad with a thigh injury that could be him out for up to eight weeks."
    },
    {
     "ref": "bbc_football#1",
     "title": "How perfect storm has rained on Derby's parade",
     "published": "2026-10-05T08:15:09+00:00",
     "summary": "BBC Sport looks at how Turki Alalshikh's aborted takeover of Derby County has contributed to a poor start to their Championship season."
    },
    {
     "ref": "bbc_football#2",
     "title": "£800m in, £800m out - Why Man City scandal shines light on Man Utd finances",
     "published": "2026-10-05T08:08:02+00:00",
     "summary": "Manchester City's owners have been found guilty of injecting money into the club. At Manchester United, fans are frustrated at how much has been taken out."
    },
    {
     "ref": "bbc_football#3",
     "title": "The only side in Nations League yet to concede? Northern Ireland",
     "published": "2026-10-05T07:07:15+00:00",
     "summary": "With three clean sheets from three games in Uefa Nations League Group B2, Northern Ireland are the only team in this year's competition yet to concede a goal."
    },
    {
     "ref": "bbc_football#4",
     "title": "Watch: Thistle narrow gap & big wins for County and Elgin",
     "published": "2026-10-05T07:00:53+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#5",
     "title": "Watch: Thistle narrow gap & big wins for County and Elgin",
     "published": "2026-10-05T07:00:53+00:00",
     "summary": "Watch the best of the action from the weekend's action in the Scottish Championship, League 1 and League 2."
    },
    {
     "ref": "bbc_football#6",
     "title": "£117m Rogers failed at Bournemouth - and feared he may not make it",
     "published": "2026-10-05T07:00:51+00:00",
     "summary": "A look at the point in club-record £117m Chelsea signing Morgan Rogers' career when he doubted whether he could make it at the highest level."
    },
    {
     "ref": "bbc_football#7",
     "title": "Podcast: McGinn, McTominay, Robertson - are Scotland greats undroppable?",
     "published": "2026-10-05T07:00:00+00:00",
     "summary": "Scotland’s first win under Pocognoli and signs of a new identity emerging."
    },
    {
     "ref": "bbc_football#8",
     "title": "Celtic's Hassan misses Egypt match - gossip",
     "published": "2026-10-05T06:23:30+00:00",
     "summary": "Celtic winger misses Egypt match, Rangers boss backed and Hibs assistant on exit."
    },
    {
     "ref": "bbc_football#9",
     "title": "Who am I? Guess Premier League star No 77",
     "published": "2026-10-05T06:23:08+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#10",
     "title": "Israel 'tried to intimidate' Irish amid spitting row - Hallgrimsson",
     "published": "2026-10-04T22:51:49+00:00",
     "summary": "Republic of Ireland head coach Heimir Hallgrimsson says he felt Israel were \"trying to intimidate\" his team amid allegations of spitting during Sunday's Nations League draw."
    },
    {
     "ref": "bbc_football#11",
     "title": "No other team should go through this - Hallgrimsson",
     "published": "2026-10-04T22:43:10+00:00",
     "summary": "Republic of Ireland manager Heimir Hallgrimsson says he is \"delighted\" this most trying of international windows is over and hopes \"no national team to go through what we have gone through over the last two weeks\"."
    },
    {
     "ref": "bbc_football#12",
     "title": "Bellamy bemoans new schedule after Denmark loss",
     "published": "2026-10-04T22:36:20+00:00",
     "summary": "Craig Bellamy suggests the new four-match international window has counted against Wales after Sunday's Nations League defeat against Denmark."
    },
    {
     "ref": "bbc_football#13",
     "title": "Portugal boss says door open for Ronaldo return",
     "published": "2026-10-04T22:10:59+00:00",
     "summary": "Cristiano Ronaldo could still return for Portugal, according to boss Jorge Jesus."
    },
    {
     "ref": "bbc_football#14",
     "title": "Fans group questions Desmond's priorities amid Celtic protest row",
     "published": "2026-10-04T21:28:34+00:00",
     "summary": "The Celtic Fans Collective has criticised Dermot Desmond's \"priorities\" after the Scottish champions withdrew recognition of the group following a protest against the major shareholder at the Alfred Dunhill Links golf tournament in St Andrews."
    },
    {
     "ref": "bbc_football#15",
     "title": "Fans group questions Desmond's priorities amid Celtic protest row",
     "published": "2026-10-04T21:28:34+00:00",
     "summary": "The Celtic Fans Collective has criticised Dermot Desmond's \"priorities\" after the Scottish champions withdrew recognition of the group following a protest against the major shareholder at the Alfred Dunhill Links golf tournament in St Andrews."
    },
    {
     "ref": "bbc_football#16",
     "title": "Man City fight back to beat struggling Arsenal",
     "published": "2026-10-04T21:20:21+00:00",
     "summary": "Manchester City twice came from behind to beat Arsenal 4-2 at the Etihad Stadium and increase the pressure on Gunners manager Renee Slegers."
    },
    {
     "ref": "bbc_football#17",
     "title": "You are the Scotland boss - what would you do?",
     "published": "2026-10-04T21:06:47+00:00",
     "summary": "Put yourself in the shoes of the new Scotland head coach Sebastien Pocognoli as he picks his XI to face Slovenia on Tuesday."
    },
    {
     "ref": "bbc_football#18",
     "title": "Arsenal 10 points off WSL leaders - is Slegers' job at risk?",
     "published": "2026-10-04T20:34:17+00:00",
     "summary": "It is only five matches into the WSL season but Arsenal are already 10 points behind leaders Manchester City and manager Renee Slegers is coming under increasing scrutiny."
    },
    {
     "ref": "bbc_football#19",
     "title": "Arsenal 10 points off WSL leaders - is Slegers' job at risk?",
     "published": "2026-10-04T20:34:17+00:00",
     "summary": "It is only five matches into the WSL season but Arsenal are already 10 points behind leaders Manchester City and manager Renee Slegers is coming under increasing scrutiny."
    },
    {
     "ref": "bbc_football#20",
     "title": "Real Madrid join race for Scott - Monday's gossip",
     "published": "2026-10-04T20:24:19+00:00",
     "summary": "Bournemouth's Alex Scott at the centre of a transfer tussle, Arsenal show interest in Juventus winger Kenan Yildiz, Real Betis rebuff speculation linking Troy Parrott with a move away, plus more."
    },
    {
     "ref": "bbc_football#21",
     "title": "'We fought for every ball' - Hemp on Man City's thrilling win",
     "published": "2026-10-04T18:20:05+00:00",
     "summary": "Two-goal Lauren Hemp says Manchester City showed passion and character in their 4-2 win over Arsenal in the WSL."
    },
    {
     "ref": "bbc_football#22",
     "title": "'It all clicked today' - Van de Donk and Putellas thrilled with 6-1 win against Spurs",
     "published": "2026-10-04T17:18:22+00:00",
     "summary": "London City Lionesses' Danielle van de Donk and Alexia Putellas react to their team's 6-1 win against Tottenham Hotspur in the Women's Super League."
    },
    {
     "ref": "bbc_football#23",
     "title": "Gateshead sack Cattermole after poor start",
     "published": "2026-10-04T16:36:00+00:00",
     "summary": "Gateshead sack manager Lee Cattermole following a poor run of results in the National League."
    },
    {
     "ref": "bbc_football#24",
     "title": "'Promising start' or 'shocking' display? Tartan Army on Skopje win",
     "published": "2026-10-04T14:45:11+00:00",
     "summary": "The Tartan Army have given a mixed reaction to Scotland's 2-0 win away to North Macedonia in the Nations League."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Messi to play one final match before retirement in epic Argentina send-off - tag24.com",
     "published": "2026-10-05T07:48:02+00:00",
     "summary": "Messi to play one final match before retirement in epic Argentina send-off tag24.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Lionel Messi vs Taylor Swift: Which Star Is More Popular Worldwide? - International Business Times Australia",
     "published": "2026-10-05T07:23:49+00:00",
     "summary": "Lionel Messi vs Taylor Swift: Which Star Is More Popular Worldwide? International Business Times Australia"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "MLS Injuries & Suspensions - Sportsgambler",
     "published": "2026-10-05T04:43:54+00:00",
     "summary": "MLS Injuries & Suspensions Sportsgambler"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi joins Argentina camp ahead of historic international farewell against Benin - goal.com",
     "published": "2026-10-05T04:30:08+00:00",
     "summary": "Lionel Messi joins Argentina camp ahead of historic international farewell against Benin goal.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Michael Weatherly Cried For Real When Ziva Left NCIS—The Emotional Truth Revealed! Inter Miami Vs Toronto (FgZQCOGSN9) - Unisba Media",
     "published": "2026-10-05T03:57:57+00:00",
     "summary": "Michael Weatherly Cried For Real When Ziva Left NCIS—The Emotional Truth Revealed! Inter Miami Vs Toronto (FgZQCOGSN9) Unisba Media"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Lionel Messi buys football club - The Mag",
     "published": "2026-10-05T03:50:25+00:00",
     "summary": "Lionel Messi buys football club The Mag"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi considers a new decision after buying Deportivo Eldense - goal.com",
     "published": "2026-10-05T02:51:57+00:00",
     "summary": "Messi considers a new decision after buying Deportivo Eldense goal.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Ronaldo can return to Portugal team if he wants, national coach says - TRT World",
     "published": "2026-10-05T01:22:06+00:00",
     "summary": "Ronaldo can return to Portugal team if he wants, national coach says TRT World"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Inter Miami vs DC United: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-05T01:20:59+00:00",
     "summary": "Inter Miami vs DC United: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Argentina Shares Lionel Messi Update Sunday - heavy.com",
     "published": "2026-10-05T00:16:00+00:00",
     "summary": "Argentina Shares Lionel Messi Update Sunday heavy.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Messi's moment: Inter Miami's captain still has work to do - Inter Heron",
     "published": "2026-10-04T23:00:00+00:00",
     "summary": "Messi's moment: Inter Miami's captain still has work to do Inter Heron"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Lionel Messi arrives ahead of his final appearance for Argentina - Gulf News",
     "published": "2026-10-04T22:44:59+00:00",
     "summary": "Lionel Messi arrives ahead of his final appearance for Argentina Gulf News"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi, 48 hours from his Argentina farewell - Diario AS",
     "published": "2026-10-04T20:27:29+00:00",
     "summary": "Lionel Messi, 48 hours from his Argentina farewell Diario AS"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Lionel Messi Joins Argentina Squad for One Last Dance at the Monumental - Pasión Fútbol",
     "published": "2026-10-04T19:50:00+00:00",
     "summary": "Lionel Messi Joins Argentina Squad for One Last Dance at the Monumental Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "How Are Inter Miami’s International Call-Ups Performing? Mixed Results Before MLS Return - Pasión Fútbol",
     "published": "2026-10-04T19:45:00+00:00",
     "summary": "How Are Inter Miami’s International Call-Ups Performing? Mixed Results Before MLS Return Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi eyes historic free-kick record after latest goal - Yahoo Sports",
     "published": "2026-10-04T19:00:00+00:00",
     "summary": "Lionel Messi eyes historic free-kick record after latest goal Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami Locks Down Its Future: The Young Prospects Already Protected With New Contracts - Pasión Fútbol",
     "published": "2026-10-04T18:55:00+00:00",
     "summary": "Inter Miami Locks Down Its Future: The Young Prospects Already Protected With New Contracts Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami Sends Powerful Ballon d’Or Message as Lionel Messi Chases Historic Ninth Award - Pasión Fútbol",
     "published": "2026-10-04T18:39:00+00:00",
     "summary": "Inter Miami Sends Powerful Ballon d’Or Message as Lionel Messi Chases Historic Ninth Award Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Tata Martino Needs an MLS Miracle: The Unlikely Path That Could Send Atlanta United to the Playoffs - Pasión Fútbol",
     "published": "2026-10-04T16:15:00+00:00",
     "summary": "Tata Martino Needs an MLS Miracle: The Unlikely Path That Could Send Atlanta United to the Playoffs Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Lionel Messi Arrives in Argentina After Completing the Purchase of a New Soccer Club - Pasión Fútbol",
     "published": "2026-10-04T15:00:00+00:00",
     "summary": "Lionel Messi Arrives in Argentina After Completing the Purchase of a New Soccer Club Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Andrés Messi reaches 76 career free-kick goals - Yahoo Sports",
     "published": "2026-10-04T13:30:00+00:00",
     "summary": "Lionel Andrés Messi reaches 76 career free-kick goals Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Official: Messi & Ronaldo To Renew Rivalry In Spain - Soccer Laduma",
     "published": "2026-10-04T13:03:00+00:00",
     "summary": "Official: Messi & Ronaldo To Renew Rivalry In Spain Soccer Laduma"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Inter Miami CF v New York City Odds - FanDuel Sportsbook",
     "published": "2026-10-04T12:14:21+00:00",
     "summary": "Inter Miami CF v New York City Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Without Messi! Argentina win 7-0 and deliver a top performance - Dailysports",
     "published": "2026-10-04T06:47:00+00:00",
     "summary": "Without Messi! Argentina win 7-0 and deliver a top performance Dailysports"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Emiliano Martinez opens up on Lionel Messi retirement and admits Inter Miami star will leave 'a massive void' for Argentina - goal.com",
     "published": "2026-10-04T06:40:08+00:00",
     "summary": "Emiliano Martinez opens up on Lionel Messi retirement and admits Inter Miami star will leave 'a massive void' for Argentina goal.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Blazers Rock Fan Fest: 'Everything About The Day Has Been Perfect' - Sports Illustrated",
     "published": "2026-10-05T03:34:41+00:00",
     "summary": "Blazers Rock Fan Fest: 'Everything About The Day Has Been Perfect' Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man - Rip City Project",
     "published": "2026-10-04T21:07:36+00:00",
     "summary": "Deni Avdija's breakout makes Ja Morant the obvious Blazers sixth man Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "LA Clippers vs Portland Trail Blazers Apr 10, 2026 Game Details - NBA.com",
     "published": "2026-10-04T14:58:08+00:00",
     "summary": "LA Clippers vs Portland Trail Blazers Apr 10, 2026 Game Details NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership - roundtable.io",
     "published": "2026-10-04T01:29:32+00:00",
     "summary": "Ben Saraf, Drake Powell Welcome Nets’ Veteran Leadership roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "The Blazers have a starting lineup dilemma with a clear solution: Bring Ja Morant off the bench - CBS Sports",
     "published": "2026-10-02T20:40:00+00:00",
     "summary": "The Blazers have a starting lineup dilemma with a clear solution: Bring Ja Morant off the bench CBS Sports"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija: “I definitely had a lot of offensive load … - hoopshype.com",
     "published": "2026-10-02T16:52:00+00:00",
     "summary": "Deni Avdija: “I definitely had a lot of offensive load … hoopshype.com"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Trail Blazers Fire Play-By-Play Announcer Over Racist Tweets - Yahoo Sports",
     "published": "2026-10-02T13:06:23+00:00",
     "summary": "Trail Blazers Fire Play-By-Play Announcer Over Racist Tweets Yahoo Sports"
    }
   ]
  }
 ]
}
</input>