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
  "home": "Israel",
  "away": "Kosovo",
  "kickoff_utc": "2026-10-01T18:45:00"
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
     "title": "Why one Irish team is set to face Salah's Trabzonspor",
     "published": "2026-10-01T08:26:55+00:00",
     "summary": "Drogheda United will travel to Turkey to face Trabzonspor at the 40,000-seat Papara Park as part of a special relationship between the two clubs."
    },
    {
     "ref": "bbc_football#1",
     "title": "Robertson set to hit 100 Scotland caps - but who else makes top 10?",
     "published": "2026-10-01T07:35:10+00:00",
     "summary": "We want you to name the 10 most capped Scotland men's players of all time, with current captain Andy Robertson set to make his 100th national team appearance against North Macedonia on Saturday."
    },
    {
     "ref": "bbc_football#2",
     "title": "Robertson set to hit 100 Scotland caps - but who else makes top 10?",
     "published": "2026-10-01T07:35:10+00:00",
     "summary": "We want you to name the 10 most capped Scotland men's players of all time, with current captain Andy Robertson set to make his 100th national team appearance against North Macedonia on Saturday."
    },
    {
     "ref": "bbc_football#3",
     "title": "Podcast: What's really happening at Celtic and do Scotland have a goalkeeping problem?",
     "published": "2026-10-01T07:00:00+00:00",
     "summary": "Do Scotland have a goalkeeping problem and Celtic's manager wait."
    },
    {
     "ref": "bbc_football#4",
     "title": "We will learn from mistakes made - Hallgrimsson",
     "published": "2026-10-01T06:59:23+00:00",
     "summary": "Republif of Ireland manager Heimir Hallgrimsson says he and the Football Association of Ireland can learn from mistakes around the build-up to Sunday's Israel game as they prepare to face Austria tonight."
    },
    {
     "ref": "bbc_football#5",
     "title": "Inside Northern Ireland's football conveyor belt",
     "published": "2026-10-01T06:53:47+00:00",
     "summary": "BBC Sport NI spends the day at the IFA JD Academy Residential at Campbell College where Northern Ireland manager Michael O'Neill catches up with the young players hoping to graduate to a full-time career."
    },
    {
     "ref": "bbc_football#6",
     "title": "Money, family and sexism - why the number of women coaches is dropping",
     "published": "2026-10-01T06:43:23+00:00",
     "summary": "Despite recent on-pitch successes and increased media exposure for women's sport in the UK, major barriers remain - particularly in coaching."
    },
    {
     "ref": "bbc_football#7",
     "title": "Money, family and sexism - why the number of women coaches is dropping",
     "published": "2026-10-01T06:43:23+00:00",
     "summary": "Despite recent on-pitch successes and increased media exposure for women's sport in the UK, major barriers remain - particularly in coaching."
    },
    {
     "ref": "bbc_football#8",
     "title": "Unwell Nygren isolating on international duty - gossip",
     "published": "2026-10-01T06:38:37+00:00",
     "summary": "Celtic midfielder unwell on international duty, Dundee look at free agent market and Arbroath snap up Scotland youth international."
    },
    {
     "ref": "bbc_football#9",
     "title": "You are the Scotland boss - what would you do?",
     "published": "2026-10-01T06:17:32+00:00",
     "summary": "Put yourself in the shoes of the new Scotland head coach Sebastien Pocognoli as he picks his XI to face North Macedonia."
    },
    {
     "ref": "bbc_football#10",
     "title": "You are the Scotland boss - what would you do?",
     "published": "2026-10-01T06:17:32+00:00",
     "summary": "Put yourself in the shoes of the new Scotland head coach Sebastien Pocognoli as he picks his XI to face North Macedonia."
    },
    {
     "ref": "bbc_football#11",
     "title": "Jaissle learned a lot about life after tumour aged five",
     "published": "2026-10-01T06:00:06+00:00",
     "summary": "Newcastle United head coach Matthias Jaissle could not move his neck at one point, but went on to play before embarking on a coaching career that sees him in Tyneside."
    },
    {
     "ref": "bbc_football#12",
     "title": "Flex your football brain with our daily quizzes",
     "published": "2026-10-01T05:49:22+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#13",
     "title": "Euro Leagues",
     "published": "2026-10-01T01:00:00+00:00",
     "summary": "How will Pep Guardiola's legacy be impacted?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Late drama as Chelsea draw away at Lyon",
     "published": "2026-09-30T21:17:02+00:00",
     "summary": "Chelsea have a penalty overturned by VAR, while Lauren James and Maika Hamano come close to scoring a winner during their 0-0 draw away at Lyon in the Champions League."
    },
    {
     "ref": "bbc_football#15",
     "title": "Meet the only Scot managing a national team in world football",
     "published": "2026-09-30T21:01:32+00:00",
     "summary": "More than 4,000 miles from his native Dundee, Kurt Herd is flying the flag for Scotland in international football - as manager of Dominica's national side."
    },
    {
     "ref": "bbc_football#16",
     "title": "Meet the only Scot managing a national team in world football",
     "published": "2026-09-30T21:01:32+00:00",
     "summary": "More than 4,000 miles from his native Dundee, Kurt Herd is flying the flag for Scotland in international football - as manager of Dominica's national side."
    },
    {
     "ref": "bbc_football#17",
     "title": "Punish Man City this season, say other club chiefs",
     "published": "2026-09-30T20:38:22+00:00",
     "summary": "Manchester City's punishment for breaching Premier League rules should be handed down before the end of this season, senior football figures tell BBC Sport."
    },
    {
     "ref": "bbc_football#18",
     "title": "Liverpool contenders for Schade - Thursday's gossip",
     "published": "2026-09-30T20:16:03+00:00",
     "summary": "Germany forward Kevin Schade is wanted by Liverpool, Erling Haaland and Phil Foden are among the Manchester City players drawing interest from Europe's top clubs, plus more."
    },
    {
     "ref": "bbc_football#19",
     "title": "Classy Hammarby end Rangers' Europa Cup hopes",
     "published": "2026-09-30T19:53:07+00:00",
     "summary": "Rangers exit the Europa Cup after last season's finalists Hammarby leave Broadwood Stadium with a three-goal victory on the night to progress 5-0 on aggregate."
    },
    {
     "ref": "bbc_football#20",
     "title": "Classy Hammarby end Rangers' Europa Cup hopes",
     "published": "2026-09-30T19:53:07+00:00",
     "summary": "Rangers exit the Europa Cup after last season's finalists Hammarby leave Broadwood Stadium with a three-goal victory on the night to progress 5-0 on aggregate."
    },
    {
     "ref": "bbc_football#21",
     "title": "Classy Hammarby end Rangers' Europa Cup hopes",
     "published": "2026-09-30T19:53:07+00:00",
     "summary": "Rangers exit the Europa Cup after last season's finalists Hammarby leave Broadwood Stadium with a three-goal victory on the night to progress 5-0 on aggregate."
    },
    {
     "ref": "bbc_football#22",
     "title": "Infantino should have no place in future of football - Pinto",
     "published": "2026-09-30T19:47:40+00:00",
     "summary": "The computer hacker who released documents which led to the Premier League investigation into Manchester City says Gianni Infantino \"should have no place in the future of the game\"."
    },
    {
     "ref": "bbc_football#23",
     "title": "Ronaldo leaves Portugal camp after coach denies rift",
     "published": "2026-09-30T19:33:07+00:00",
     "summary": "Cristiano Ronaldo says he has left Portugal's international camp and will explain why \"in time\", hours after head coach Jorge Jesus denied any rift with the player."
    },
    {
     "ref": "bbc_football#24",
     "title": "Impossible for England to find another Kane - Tuchel",
     "published": "2026-09-30T19:25:34+00:00",
     "summary": "England boss Thomas Tuchel says it will be impossible to find \"another Harry Kane\" as his free-scoring captain continues to break new ground."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Lionel Messi’s World Cup masterclass reignites Ballon d’Or debate at 39 - streamlinefeed.co.ke",
     "published": "2026-10-01T07:50:27+00:00",
     "summary": "Lionel Messi’s World Cup masterclass reignites Ballon d’Or debate at 39 streamlinefeed.co.ke"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "FIFA Women’s Champions Cup 2027 Final Phase Set For Miami - LEADERSHIP Newspapers",
     "published": "2026-10-01T07:01:18+00:00",
     "summary": "FIFA Women’s Champions Cup 2027 Final Phase Set For Miami LEADERSHIP Newspapers"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "'Hopefully we won't cry too much' - Lautaro Martinez braces for emotional night ahead of Lionel Messi's Argentina farewell clash with Benin - Goal.com",
     "published": "2026-10-01T06:18:37+00:00",
     "summary": "'Hopefully we won't cry too much' - Lautaro Martinez braces for emotional night ahead of Lionel Messi's Argentina farewell clash with Benin Goal.com"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "GOAL: Ariel Lassiter, Inter Miami CF - 56th minute - MLSsoccer.com",
     "published": "2026-10-01T02:07:08+00:00",
     "summary": "GOAL: Ariel Lassiter, Inter Miami CF - 56th minute MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami’s Late-Goal Problem Is Becoming a Dangerous MLS Trend for Kily González - Pasión Fútbol",
     "published": "2026-09-30T23:30:00+00:00",
     "summary": "Inter Miami’s Late-Goal Problem Is Becoming a Dangerous MLS Trend for Kily González Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "David Beckham Backs Kily González as Inter Miami’s New Era Takes Shape - Pasión Fútbol",
     "published": "2026-09-30T22:45:00+00:00",
     "summary": "David Beckham Backs Kily González as Inter Miami’s New Era Takes Shape Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Luis Suárez Uses FIFA Break to Get Back to His Best for Inter Miami’s Playoff Push - Pasión Fútbol",
     "published": "2026-09-30T22:15:00+00:00",
     "summary": "Luis Suárez Uses FIFA Break to Get Back to His Best for Inter Miami’s Playoff Push Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "MLS Odds: Major League Soccer Betting Lines - FanDuel Sportsbook",
     "published": "2026-09-30T21:24:36+00:00",
     "summary": "MLS Odds: Major League Soccer Betting Lines FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Cristian Kily Gonzalez Once Lined Up Beside Lionel Messi For Argentina, Now He Is Coaching Him - Yahoo Sports",
     "published": "2026-09-30T21:02:17+00:00",
     "summary": "Cristian Kily Gonzalez Once Lined Up Beside Lionel Messi For Argentina, Now He Is Coaching Him Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Inter Miami Has a Major David Ayala Decision to Make as Contract Expiration Approaches - Pasión Fútbol",
     "published": "2026-09-30T20:31:00+00:00",
     "summary": "Inter Miami Has a Major David Ayala Decision to Make as Contract Expiration Approaches Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Lionel Messi vs. Santiago Rodríguez: Is a New MLS Rivalry Starting to Take Shape? - Pasión Fútbol",
     "published": "2026-09-30T20:15:00+00:00",
     "summary": "Lionel Messi vs. Santiago Rodríguez: Is a New MLS Rivalry Starting to Take Shape? Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "2nd edition of Messi Cup to feature 16 elite clubs from around the world - local10.com",
     "published": "2026-09-30T20:02:40+00:00",
     "summary": "2nd edition of Messi Cup to feature 16 elite clubs from around the world local10.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "From $25 million MLS bet to $1 billion fortune: How David Beckham built his global business empire - The Times of India",
     "published": "2026-09-30T19:00:00+00:00",
     "summary": "From $25 million MLS bet to $1 billion fortune: How David Beckham built his global business empire The Times of India"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "How Did Messi Score THAT?! All Angles of Stunning Free Kick for Inter Miami - GhanaSoccernet",
     "published": "2026-09-30T18:58:39+00:00",
     "summary": "How Did Messi Score THAT?! All Angles of Stunning Free Kick for Inter Miami GhanaSoccernet"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Inter Miami Fined by MLS After Mass Confrontation vs. Crew - Hoodline",
     "published": "2026-09-30T18:35:02+00:00",
     "summary": "Inter Miami Fined by MLS After Mass Confrontation vs. Crew Hoodline"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Inter Miami’s Economic Boom: The Numbers Behind the MLS Giant’s Financial Transformation - Pasión Fútbol",
     "published": "2026-09-30T18:18:00+00:00",
     "summary": "Inter Miami’s Economic Boom: The Numbers Behind the MLS Giant’s Financial Transformation Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Inter Miami Wants to Keep Dayne St. Clair as Key Contract Decision Approaches - Pasión Fútbol",
     "published": "2026-09-30T18:06:00+00:00",
     "summary": "Inter Miami Wants to Keep Dayne St. Clair as Key Contract Decision Approaches Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Inter Miami CF Announces 2027 Dreams Cup presented by Lowe’s - Inter Miami CF",
     "published": "2026-09-30T17:19:17+00:00",
     "summary": "Inter Miami CF Announces 2027 Dreams Cup presented by Lowe’s Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Another Blow for Inter Miami? Yannick Bright Suffers Foot Injury at Critical Point of MLS Season - Pasión Fútbol",
     "published": "2026-09-30T16:50:00+00:00",
     "summary": "Another Blow for Inter Miami? Yannick Bright Suffers Foot Injury at Critical Point of MLS Season Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Inter Miami's Lionel Messi wins Goal of Matchday - MLSsoccer.com",
     "published": "2026-09-30T16:09:00+00:00",
     "summary": "Inter Miami's Lionel Messi wins Goal of Matchday MLSsoccer.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Inter Miami players, coaches fined by MLS due to mass confrontation in loss to Crew - Yahoo Sports",
     "published": "2026-09-30T16:08:13+00:00",
     "summary": "Inter Miami players, coaches fined by MLS due to mass confrontation in loss to Crew Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Inter Miami's Lionel Messi wins Goal of Matchday - Yahoo Sports",
     "published": "2026-09-30T16:05:00+00:00",
     "summary": "Inter Miami's Lionel Messi wins Goal of Matchday Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "MLS: Columbus defeats Inter Miami thanks to Thiaré - Benin Web TV",
     "published": "2026-09-30T15:27:25+00:00",
     "summary": "MLS: Columbus defeats Inter Miami thanks to Thiaré Benin Web TV"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Inter Miami CF Academy U-13s to Compete in LALIGA FC FUTURES International Tournament - Inter Miami CF",
     "published": "2026-09-30T14:43:43+00:00",
     "summary": "Inter Miami CF Academy U-13s to Compete in LALIGA FC FUTURES International Tournament Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MLS Announces Punishment Decision for Inter Miami, Coach Kily Gonzalez & 5 Players After \"Mass Confrontation\" - Athlon Sports",
     "published": "2026-09-30T12:43:00+00:00",
     "summary": "MLS Announces Punishment Decision for Inter Miami, Coach Kily Gonzalez & 5 Players After \"Mass Confrontation\" Athlon Sports"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Micah Nori’s first Blazers practice went fine. Then he forgot to end it. - Hoops Wire",
     "published": "2026-09-30T21:24:05+00:00",
     "summary": "Micah Nori’s first Blazers practice went fine. Then he forgot to end it. Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers can't ignore the chance to flip Ja Morant this season - Rip City Project",
     "published": "2026-09-30T20:13:43+00:00",
     "summary": "Blazers can't ignore the chance to flip Ja Morant this season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Trail Blazers Have Every Reason to Be Better Than Last Season - roundtable.io",
     "published": "2026-09-30T04:33:20+00:00",
     "summary": "Trail Blazers Have Every Reason to Be Better Than Last Season roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers apparently have decided 50 wins is the goal - Hoops Wire",
     "published": "2026-09-30T02:28:58+00:00",
     "summary": "Blazers apparently have decided 50 wins is the goal Hoops Wire"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Ben Saraf Player Full High Lowlights vs HEAT 05 03 2026 NBA REGULAR SEASON Game - YouTube",
     "published": "2026-09-29T21:36:29+00:00",
     "summary": "Ben Saraf Player Full High Lowlights vs HEAT 05 03 2026 NBA REGULAR SEASON Game YouTube"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth - Rip City Project",
     "published": "2026-09-29T18:18:21+00:00",
     "summary": "Micah Nori won't allow Blazers' backcourt logjam to stunt Deni Avdija's growth Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years - OregonLive.com",
     "published": "2026-09-29T18:16:00+00:00",
     "summary": "From Morant's fit to playoff expectations, Cronin lays out his vision for a Blazers team he calls the most exciting in years OregonLive.com"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense - Rip City Project",
     "published": "2026-09-29T17:50:12+00:00",
     "summary": "Blazers' revamped backcourt helps Deni Avdija rediscover his defense Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears - ClutchPoints",
     "published": "2026-09-29T16:26:22+00:00",
     "summary": "Blazers’ Damian Lillard, Deni Avdija break silence on ownership’s Moda Center drama amid relocation fears ClutchPoints"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "The Persian leopard named after the NBA star arrives at the Safari - The Jerusalem Post",
     "published": "2026-09-29T07:48:19+00:00",
     "summary": "The Persian leopard named after the NBA star arrives at the Safari The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” - Eurohoops",
     "published": "2026-09-29T06:53:20+00:00",
     "summary": "Aday Mara praises childhood idols: “Gasol brothers were super impactful” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Mario Hezonja details NBA return: “It was always bothering me” - Eurohoops",
     "published": "2026-09-29T06:15:03+00:00",
     "summary": "Mario Hezonja details NBA return: “It was always bothering me” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” - Eurohoops",
     "published": "2026-09-29T05:59:00+00:00",
     "summary": "Deni Avdija puts injury concerns to rest: “99.9% good and ready” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Deni Avdija | 2026‑27 Media Day - NBA.com",
     "published": "2026-09-29T01:15:46+00:00",
     "summary": "Deni Avdija | 2026‑27 Media Day NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers optimistic that roster balance will ‘work itself out’ as season looms - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T00:26:05+00:00",
     "summary": "Blazers optimistic that roster balance will ‘work itself out’ as season looms Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day - Sports Illustrated",
     "published": "2026-09-29T00:00:00+00:00",
     "summary": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Blazers need to start treating Deni Avdija like the face of the franchise - Rip City Project",
     "published": "2026-09-28T23:53:48+00:00",
     "summary": "Blazers need to start treating Deni Avdija like the face of the franchise Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Deni Avdija (back) ’99.9 percent’ going into camp - NBC Sports",
     "published": "2026-09-28T22:07:14+00:00",
     "summary": "Deni Avdija (back) ’99.9 percent’ going into camp NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Nets Media Day Basketball - Idaho State Journal",
     "published": "2026-09-28T21:45:25+00:00",
     "summary": "Nets Media Day Basketball Idaho State Journal"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Deni Avdija | 2026-27 Media Day | Portland Trail Blazers - BVM Sports",
     "published": "2026-09-28T20:25:10+00:00",
     "summary": "Deni Avdija | 2026-27 Media Day | Portland Trail Blazers BVM Sports"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "Trail Blazers Media Day: Deni Avdija Says Back is OK - Blazer's Edge",
     "published": "2026-09-28T18:40:37+00:00",
     "summary": "Trail Blazers Media Day: Deni Avdija Says Back is OK Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deni Avdija on contract extension talks and future: \"I … - Yahoo Sports",
     "published": "2026-09-28T18:39:57+00:00",
     "summary": "Deni Avdija on contract extension talks and future: \"I … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#22",
     "title": "Deni Avdija on ownership/arena drama: \"I love the city … - Yahoo Sports",
     "published": "2026-09-28T18:13:55+00:00",
     "summary": "Deni Avdija on ownership/arena drama: \"I love the city … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#23",
     "title": "Deni Avdija | Portland Trail Blazers Media Day interviews - kgw.com",
     "published": "2026-09-28T18:13:00+00:00",
     "summary": "Deni Avdija | Portland Trail Blazers Media Day interviews kgw.com"
    },
    {
     "ref": "gnews_israeli_nba#24",
     "title": "Deni Avdija says he's 99.9% recovered from back injuries - Yahoo Sports",
     "published": "2026-09-28T18:09:59+00:00",
     "summary": "Deni Avdija says he's 99.9% recovered from back injuries Yahoo Sports"
    }
   ]
  }
 ]
}
</input>