Write the Sports section: 3-5 stories.

- Draw on European soccer (big-5 leagues, Champions League), Inter Miami / MLS, international soccer and the NBA.
- Arsenal and Barcelona always get a story if they played yesterday, play today or tomorrow, or have real news. Even on a quiet day, one story can cover where they stand: table, form and next fixture.
- Other clubs and leagues earn a slot only when their storyline is genuinely big.
- Include an NBA story only if there is meaningful NBA news. It may be the offseason.
- Results, fixtures and tables come from the structured data. Storylines come from the news feeds. Cite "football_data", "balldontlie" or "thesportsdb" as a source_ref when you use their data.
- Today is a match day for the reader's teams: [
 {
  "sport": "soccer",
  "competition": "UEFA Champions League",
  "home": "PSG",
  "away": "Barça",
  "kickoff_utc": "2026-10-20T19:00:00Z"
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
   "yesterday": [
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-19T16:30:00Z",
     "home": "Monza",
     "away": "Cagliari",
     "status": "FINISHED",
     "score": "4-0"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-19T18:45:00Z",
     "home": "Parma",
     "away": "Torino",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-19T19:00:00Z",
     "home": "Getafe",
     "away": "Rayo Vallecano",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-19T19:00:00Z",
     "home": "Tottenham",
     "away": "Coventry City",
     "status": "FINISHED",
     "score": "3-1"
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-19T19:15:00Z",
     "home": "Braga",
     "away": "Gil Vicente",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-19T23:00:00Z",
     "home": "Corinthians",
     "away": "Vitória",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T16:45:00Z",
     "home": "Fenerbahçe",
     "away": "Slavia Praha",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T16:45:00Z",
     "home": "Sabah FK",
     "away": "Dortmund",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Championship",
     "kickoff_utc": "2026-10-20T18:45:00Z",
     "home": "Wolverhampton",
     "away": "Portsmouth",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Napoli",
     "away": "Bodø/Glimt",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Stuttgart",
     "away": "Atleti",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Roma",
     "away": "Sl. Bratislava",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Man City",
     "away": "PAE AEK",
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
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Liverpool",
     "away": "Villarreal",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "UEFA Champions League",
     "kickoff_utc": "2026-10-20T19:00:00Z",
     "home": "Porto",
     "away": "PSV",
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
     "played": 7,
     "pts": 21,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Arsenal",
     "played": 7,
     "pts": 18,
     "gd": 6
    },
    {
     "pos": 3,
     "team": "Brighton Hove",
     "played": 7,
     "pts": 16,
     "gd": 18
    },
    {
     "pos": 4,
     "team": "Chelsea",
     "played": 7,
     "pts": 13,
     "gd": 4
    },
    {
     "pos": 5,
     "team": "Liverpool",
     "played": 7,
     "pts": 12,
     "gd": 1
    },
    {
     "pos": 6,
     "team": "Brentford",
     "played": 7,
     "pts": 10,
     "gd": 5
    }
   ],
   "Primera Division": [
    {
     "pos": 1,
     "team": "Barça",
     "played": 9,
     "pts": 27,
     "gd": 30
    },
    {
     "pos": 2,
     "team": "Atleti",
     "played": 9,
     "pts": 22,
     "gd": 11
    },
    {
     "pos": 3,
     "team": "Real Madrid",
     "played": 9,
     "pts": 21,
     "gd": 14
    },
    {
     "pos": 4,
     "team": "Real Betis",
     "played": 9,
     "pts": 19,
     "gd": 2
    },
    {
     "pos": 5,
     "team": "Real Sociedad",
     "played": 9,
     "pts": 16,
     "gd": 0
    },
    {
     "pos": 6,
     "team": "Sevilla FC",
     "played": 9,
     "pts": 14,
     "gd": -2
    }
   ],
   "Bundesliga": [
    {
     "pos": 1,
     "team": "Bayern",
     "played": 6,
     "pts": 14,
     "gd": 17
    },
    {
     "pos": 2,
     "team": "Dortmund",
     "played": 6,
     "pts": 14,
     "gd": 7
    },
    {
     "pos": 3,
     "team": "Freiburg",
     "played": 6,
     "pts": 13,
     "gd": 9
    },
    {
     "pos": 4,
     "team": "Leverkusen",
     "played": 6,
     "pts": 13,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Mainz",
     "played": 6,
     "pts": 10,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Elversberg",
     "played": 6,
     "pts": 10,
     "gd": 1
    }
   ],
   "Serie A": [
    {
     "pos": 1,
     "team": "Inter",
     "played": 7,
     "pts": 19,
     "gd": 12
    },
    {
     "pos": 2,
     "team": "Lazio",
     "played": 7,
     "pts": 19,
     "gd": 10
    },
    {
     "pos": 3,
     "team": "Roma",
     "played": 7,
     "pts": 17,
     "gd": 13
    },
    {
     "pos": 4,
     "team": "Milan",
     "played": 7,
     "pts": 15,
     "gd": 7
    },
    {
     "pos": 5,
     "team": "Como 1907",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 6,
     "team": "Frosinone",
     "played": 7,
     "pts": 13,
     "gd": 4
    }
   ],
   "Ligue 1": [
    {
     "pos": 1,
     "team": "Olympique Lyon",
     "played": 7,
     "pts": 14,
     "gd": 8
    },
    {
     "pos": 2,
     "team": "PSG",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 3,
     "team": "Paris FC",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 4,
     "team": "Lille",
     "played": 7,
     "pts": 14,
     "gd": 5
    },
    {
     "pos": 5,
     "team": "Monaco",
     "played": 7,
     "pts": 14,
     "gd": 4
    },
    {
     "pos": 6,
     "team": "Stade Rennais",
     "played": 7,
     "pts": 13,
     "gd": 1
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
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-18T15:30:00Z",
      "home": "Nottingham",
      "away": "Arsenal",
      "status": "FINISHED",
      "score": "0-1"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-21T19:00:00Z",
      "home": "Bayern",
      "away": "Arsenal",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Premier League",
      "kickoff_utc": "2026-10-24T14:00:00Z",
      "home": "Arsenal",
      "away": "Everton",
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
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-17T16:30:00Z",
      "home": "Real Betis",
      "away": "Barça",
      "status": "FINISHED",
      "score": "2-5"
     }
    ],
    "upcoming": [
     {
      "competition": "UEFA Champions League",
      "kickoff_utc": "2026-10-20T19:00:00Z",
      "home": "PSG",
      "away": "Barça",
      "status": "TIMED",
      "score": null
     },
     {
      "competition": "Primera Division",
      "kickoff_utc": "2026-10-25T20:00:00Z",
      "home": "Barça",
      "away": "Real Madrid",
      "status": "TIMED",
      "score": null
     }
    ]
   }
  }
 },
 "nba_data": {
  "games_last_night": [],
  "games_today": [
   {
    "home": "Detroit Pistons",
    "away": "Boston Celtics",
    "score": null,
    "status": "2026-10-20T19:00:00Z"
   },
   {
    "home": "New York Knicks",
    "away": "Philadelphia 76ers",
    "score": null,
    "status": "2026-10-20T23:00:00Z"
   },
   {
    "home": "San Antonio Spurs",
    "away": "Oklahoma City Thunder",
    "score": null,
    "status": "2026-10-21T01:30:00Z"
   }
  ],
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
     "kickoff_utc": "2026-10-24T21:30:00",
     "home": "New York Red Bulls",
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
     "title": "Listen: Ross County juggernaut & Partick Thistle penalty row - lower-league round-up",
     "published": "2026-10-20T07:00:00+00:00",
     "summary": "Ross County hit seven as Partick Thistle chase the Championship summit."
    },
    {
     "ref": "bbc_football#1",
     "title": "Moyes insider doubts potential Celtic move - gossip",
     "published": "2026-10-20T06:52:44+00:00",
     "summary": "Former striker Louis Saha, who played under David Moyes at Everton, doubts whether Celtic would be able to lure away the Premier League boss in their hunt to land a successor to Martin O'Neill."
    },
    {
     "ref": "bbc_football#2",
     "title": "Who am I? Plus today's other quizzes",
     "published": "2026-10-20T05:32:59+00:00",
     "summary": "Test your football knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#3",
     "title": "Who has made Troy's Premier League team of the week?",
     "published": "2026-10-19T23:22:24+00:00",
     "summary": "After every round of Premier League matches this season, Troy Deeney gives us his team of the week. Do you agree with his choices?"
    },
    {
     "ref": "bbc_football#4",
     "title": "Maddison's magic moment for Spurs - 18 months in the making",
     "published": "2026-10-19T22:35:55+00:00",
     "summary": "On his first start since May 2025, James Maddison provided the moment of magic Tottenham were waiting for in their 3-1 victory against Coventry, writes Phil McNulty."
    },
    {
     "ref": "bbc_football#5",
     "title": "Liverpool and Man Utd eye Nmecha - Tuesday's gossip",
     "published": "2026-10-19T22:01:39+00:00",
     "summary": "Liverpool and Manchester United are interested in Borussia Dortmund midfielder Felix Nmecha, plus the rest of Tuesday's gossip."
    },
    {
     "ref": "bbc_football#6",
     "title": "Spurs 'lack confidence' but we are a good team - De Zerbi",
     "published": "2026-10-19T21:59:30+00:00",
     "summary": "Tottenham Hotspur head coach Roberto de Zerbi hails the spirit and attitude of his side following their first Premier League win of the season, as they beat Coventry City."
    },
    {
     "ref": "bbc_football#7",
     "title": "Lampard 'proud' of Coventry performance in defeat by Spurs",
     "published": "2026-10-19T21:41:21+00:00",
     "summary": "Coventry City manager Frank Lampard says he is proud of his side's performance, despite losing at struggling Tottenham Hotspur in the Premier League."
    },
    {
     "ref": "bbc_football#8",
     "title": "Ronaldo given 30-day suspension and £215 fine by Portuguese FA",
     "published": "2026-10-19T21:34:06+00:00",
     "summary": "Cristiano Ronaldo is given a 30-day suspension by the Portuguese Football Federation after leaving his country's international camp last month."
    },
    {
     "ref": "bbc_football#9",
     "title": "Spurs beat Coventry to earn first league win of the season",
     "published": "2026-10-19T21:33:07+00:00",
     "summary": "Tottenham Hotspur record their first Premier League win of the season and move off the bottom of the table with a home victory over Coventry City."
    },
    {
     "ref": "bbc_football#10",
     "title": "MNC: Palace thrashed 5-0 & trouble in the North East",
     "published": "2026-10-19T21:14:00+00:00",
     "summary": "Is Sage to blame for Palace's thrashing? Why can't Forest score? And North-East troubles!"
    },
    {
     "ref": "bbc_football#11",
     "title": "Maddison shines on return - Tottenham v Coventry ratings",
     "published": "2026-10-19T21:05:28+00:00",
     "summary": "How Spurs and Coventry City's players rated following their Premier League match."
    },
    {
     "ref": "bbc_football#12",
     "title": "Building Lionesses 2.0 - Wiegman's new challenge awaits",
     "published": "2026-10-19T20:15:48+00:00",
     "summary": "England head coach Sarina Wiegman has changed women's football in the country, so what does she face after signing a contract extension?"
    },
    {
     "ref": "bbc_football#13",
     "title": "Building Lionesses 2.0 - Wiegman's new challenge awaits",
     "published": "2026-10-19T20:15:48+00:00",
     "summary": "England head coach Sarina Wiegman has changed women's football in the country, so what does she face after signing a contract extension?"
    },
    {
     "ref": "bbc_football#14",
     "title": "Palace manager Sage facing fight to keep his job",
     "published": "2026-10-19T19:32:56+00:00",
     "summary": "Crystal Palace boss Pierre Sage faces a fight to keep his job, but will be given more time."
    },
    {
     "ref": "bbc_football#15",
     "title": "Uefa gives Infantino two-week deadline to release key documents",
     "published": "2026-10-19T18:20:39+00:00",
     "summary": "Uefa's letter contained 42 questions, covering Fifa's failed private investment proposals, its Peace Prize and the fallout from Folarin Balogun's World Cup red card."
    },
    {
     "ref": "bbc_football#16",
     "title": "Leicester to visit Oxford City in FA Cup first round - full draw",
     "published": "2026-10-19T18:13:52+00:00",
     "summary": "Leicester City will travel to National League North side Oxford City in the 2026-27 FA Cup first round - five years after winning the competition."
    },
    {
     "ref": "bbc_football#17",
     "title": "Sarina stays, the Golden Goggles & Van de Donk's flying form",
     "published": "2026-10-19T17:31:00+00:00",
     "summary": "Is London City's Daniëlle van de Donk the unsung hero of the WSL season so far?"
    },
    {
     "ref": "bbc_football#18",
     "title": "Sarina stays, the Golden Goggles & Van de Donk's flying form",
     "published": "2026-10-19T17:31:00+00:00",
     "summary": "Is London City's Daniëlle van de Donk the unsung hero of the WSL season so far?"
    },
    {
     "ref": "bbc_football#19",
     "title": "Guehi among players not to take knee - is it time to 'move campaign along'?",
     "published": "2026-10-19T16:41:54+00:00",
     "summary": "Premier League clubs took the knee for the first time this season, but six players chose to remain standing."
    },
    {
     "ref": "bbc_football#20",
     "title": "Araujo the stopgap solution fixing Liverpool's problems",
     "published": "2026-10-19T16:29:34+00:00",
     "summary": "Ronald Araujo has impressed since arriving at Liverpool from Barcelona. Could he prove a longer-term solution?"
    },
    {
     "ref": "bbc_football#21",
     "title": "Brentford contact police after rugby ball kicked into stadium during game",
     "published": "2026-10-19T16:26:44+00:00",
     "summary": "Brentford say they are working with the police following a \"dangerous\" incident in which a rugby ball was kicked from a height towards the pitch during their Premier League game with Liverpool."
    },
    {
     "ref": "bbc_football#22",
     "title": "Jota 'met some demons' during long injury absence",
     "published": "2026-10-19T15:43:31+00:00",
     "summary": "Jota admits he \"met some demons\" during his long injury absence but believes there is no need to \"rush\" his return to full match fitness at Celtic."
    },
    {
     "ref": "bbc_football#23",
     "title": "Jota 'met some demons' during long injury absence",
     "published": "2026-10-19T15:43:31+00:00",
     "summary": "Jota admits he \"met some demons\" during his long injury absence but believes there is no need to \"rush\" his return to full match fitness at Celtic."
    },
    {
     "ref": "bbc_football#24",
     "title": "How to follow the Champions League on the BBC",
     "published": "2026-10-19T15:39:04+00:00",
     "summary": "The Champions League returns this week and you will be able to listen to commentary and watch highlights of the best of the action on the BBC."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Unstoppable at 39: Brace, 936 career goals, and MLS history - The Jerusalem Post",
     "published": "2026-10-20T07:18:29+00:00",
     "summary": "Unstoppable at 39: Brace, 936 career goals, and MLS history The Jerusalem Post"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 - The Sun",
     "published": "2026-10-20T04:41:54+00:00",
     "summary": "See Lionel Messi with Inter Miami ticket and Caribbean cruise from just £1,479 The Sun"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Highlights: Seattle Sounders FC 1-1 CF Montréal (MLS), Major League Soccer - Forza Football",
     "published": "2026-10-20T04:39:21+00:00",
     "summary": "Highlights: Seattle Sounders FC 1-1 CF Montréal (MLS), Major League Soccer Forza Football"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "New York Red Bulls v Inter Miami CF Odds - FanDuel Sportsbook",
     "published": "2026-10-20T04:35:54+00:00",
     "summary": "New York Red Bulls v Inter Miami CF Odds FanDuel Sportsbook"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Lionel Messi's Inter Miami Contract Shapes Retirement Decision | News - Football.com",
     "published": "2026-10-20T04:08:32+00:00",
     "summary": "Lionel Messi's Inter Miami Contract Shapes Retirement Decision | News Football.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "MLS Winners and Losers: Lionel Messi bails out Inter Miami again, Antoine Griezmann transforms Orlando City and Sam Sarver’s beer antics turn ugly - Goal.com",
     "published": "2026-10-20T02:28:38+00:00",
     "summary": "MLS Winners and Losers: Lionel Messi bails out Inter Miami again, Antoine Griezmann transforms Orlando City and Sam Sarver’s beer antics turn ugly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi Makes MLS History Again as Inter Miami Star Closes In on Third MVP Award - Pasión Fútbol",
     "published": "2026-10-19T21:30:00+00:00",
     "summary": "Lionel Messi Makes MLS History Again as Inter Miami Star Closes In on Third MVP Award Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Neymar calls Santos the ‘Inter Miami of Brazil’ after Coutinho goal - foot.mundo",
     "published": "2026-10-19T20:41:21+00:00",
     "summary": "Neymar calls Santos the ‘Inter Miami of Brazil’ after Coutinho goal foot.mundo"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "'He's an alien' - Lionel Messi set for MVP three-peat after obliterating latest MLS record - www.footballtransfers.com",
     "published": "2026-10-19T20:30:00+00:00",
     "summary": "'He's an alien' - Lionel Messi set for MVP three-peat after obliterating latest MLS record www.footballtransfers.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "MLS: Messi’s Inter Miami moving up, Nashville still team to beat - ESPN La Crosse 105.5",
     "published": "2026-10-19T20:26:06+00:00",
     "summary": "MLS: Messi’s Inter Miami moving up, Nashville still team to beat ESPN La Crosse 105.5"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Dayne St. Clair’s Inter Miami Future Is Uncertain as European Interest Could Change His Plans - Pasión Fútbol",
     "published": "2026-10-19T20:25:40+00:00",
     "summary": "Dayne St. Clair’s Inter Miami Future Is Uncertain as European Interest Could Change His Plans Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "David Ayala Is Making His Case at Inter Miami as His Contract Nears Expiration - Pasión Fútbol",
     "published": "2026-10-19T20:19:02+00:00",
     "summary": "David Ayala Is Making His Case at Inter Miami as His Contract Nears Expiration Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi, Suárez and Berterame named in MLS Team of the Matchday - OneFootball",
     "published": "2026-10-19T18:50:03+00:00",
     "summary": "Messi, Suárez and Berterame named in MLS Team of the Matchday OneFootball"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "MLS Power Rankings: Messi's Inter Miami moving up, Nashville still No.1 - ESPN",
     "published": "2026-10-19T18:27:00+00:00",
     "summary": "MLS Power Rankings: Messi's Inter Miami moving up, Nashville still No.1 ESPN"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Messi, Suárez and Berterame Named to MLS Team of the Matchday - Inter Miami CF",
     "published": "2026-10-19T18:04:28+00:00",
     "summary": "Messi, Suárez and Berterame Named to MLS Team of the Matchday Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "What We Learned: Miami mean business, Orlando bring fireworks - Yahoo Sports",
     "published": "2026-10-19T17:57:00+00:00",
     "summary": "What We Learned: Miami mean business, Orlando bring fireworks Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "MLS Power Rankings: Inter Miami, Vancouver Whitecaps Surge After Matchday 31 - Sports Illustrated",
     "published": "2026-10-19T17:48:49+00:00",
     "summary": "MLS Power Rankings: Inter Miami, Vancouver Whitecaps Surge After Matchday 31 Sports Illustrated"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi Suffers Another Blow as Inter Miami Are Eliminated From Supporters’ Shield Race - Pasión Fútbol",
     "published": "2026-10-19T16:58:27+00:00",
     "summary": "Lionel Messi Suffers Another Blow as Inter Miami Are Eliminated From Supporters’ Shield Race Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi Extends Incredible Scoring Streak to 14 Games as Inter Miami Star Keeps Making History - Pasión Fútbol",
     "published": "2026-10-19T16:44:04+00:00",
     "summary": "Lionel Messi Extends Incredible Scoring Streak to 14 Games as Inter Miami Star Keeps Making History Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Luis Suárez Becomes Second Player in Club History to Reach 100 Goal Contributions - WebWire",
     "published": "2026-10-19T16:08:10+00:00",
     "summary": "Luis Suárez Becomes Second Player in Club History to Reach 100 Goal Contributions WebWire"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Lionel Messi, Cristiano Ronaldo And The Power Of Future Earnings - Forbes",
     "published": "2026-10-19T16:04:25+00:00",
     "summary": "Lionel Messi, Cristiano Ronaldo And The Power Of Future Earnings Forbes"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups - Squawka",
     "published": "2026-10-19T13:58:31+00:00",
     "summary": "New York Red Bulls vs Inter Miami: Predictions, Picks, Odds & Lineups Squawka"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Neymar teases Messi and Beckham with 'Inter Miami do Brasil' after Santos win - OneFootball",
     "published": "2026-10-19T13:55:07+00:00",
     "summary": "Neymar teases Messi and Beckham with 'Inter Miami do Brasil' after Santos win OneFootball"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Atlanta United Vs Inter Miami CF Video Highlights: Messi Brace Powers Herons To Third Straight Win | MLS 2026 - Khel Now",
     "published": "2026-10-19T13:15:26+00:00",
     "summary": "Atlanta United Vs Inter Miami CF Video Highlights: Messi Brace Powers Herons To Third Straight Win | MLS 2026 Khel Now"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Miami coach unfazed as Messi set to collect prestigious award in Spain - The Daily Star",
     "published": "2026-10-19T12:59:46+00:00",
     "summary": "Miami coach unfazed as Messi set to collect prestigious award in Spain The Daily Star"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Phoenix Suns vs Portland Trail Blazers Prediction, 10/21/2026 Preview and Pick - Doc's Sports",
     "published": "2026-10-19T21:43:57+00:00",
     "summary": "Phoenix Suns vs Portland Trail Blazers Prediction, 10/21/2026 Preview and Pick Doc's Sports"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Suns vs. Trail Blazers - Live Score - October 21, 2026 - FOX Sports",
     "published": "2026-10-19T16:08:25+00:00",
     "summary": "Suns vs. Trail Blazers - Live Score - October 21, 2026 FOX Sports"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "5 Things I Liked from Deni Avdija's Recent Blazers Comments - Sports Illustrated",
     "published": "2026-10-19T16:00:01+00:00",
     "summary": "5 Things I Liked from Deni Avdija's Recent Blazers Comments Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers' Jeremy Sochan Cut Exposes Risky Bet on Forward Room - roundtable.io",
     "published": "2026-10-19T12:29:02+00:00",
     "summary": "Blazers' Jeremy Sochan Cut Exposes Risky Bet on Forward Room roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija: 'I want to be a great two-way player' - HoopsHype",
     "published": "2026-10-19T08:29:00+00:00",
     "summary": "Deni Avdija: 'I want to be a great two-way player' HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija on his goal: 'I want to be a great two-way player' - HoopsHype",
     "published": "2026-10-19T08:28:00+00:00",
     "summary": "Deni Avdija on his goal: 'I want to be a great two-way player' HoopsHype"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Avdija ready for two-way leap, previews revamped roster: “Rock and roll” - Eurohoops",
     "published": "2026-10-19T06:11:00+00:00",
     "summary": "Avdija ready for two-way leap, previews revamped roster: “Rock and roll” Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija: Portland's most dangerous weapon in the NBA - The Jerusalem Post",
     "published": "2026-10-19T05:40:46+00:00",
     "summary": "Deni Avdija: Portland's most dangerous weapon in the NBA The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija Media Availability | Oct. 18, 2026 | Portland Trail Blazers - BVM Sports",
     "published": "2026-10-19T04:00:24+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 18, 2026 | Portland Trail Blazers BVM Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija Media Availability | Oct. 18, 2026 - NBA.com",
     "published": "2026-10-19T00:58:53+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 18, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija - Sport News Africa",
     "published": "2026-10-18T20:00:00+00:00",
     "summary": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Did the Blazers Get Enough Out of Preseason? - Sports Illustrated",
     "published": "2026-10-18T15:43:53+00:00",
     "summary": "Did the Blazers Get Enough Out of Preseason? Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija climbs in new rankings, earns high praise - The Jerusalem Post",
     "published": "2026-10-18T06:10:35+00:00",
     "summary": "Deni Avdija climbs in new rankings, earns high praise The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Sidy Cissoko is Essential to This Blazers Roster - Blazer's Edge",
     "published": "2026-10-17T19:23:56+00:00",
     "summary": "Sidy Cissoko is Essential to This Blazers Roster Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Finding The Solution To The Trail Blazers’ Forward Problem - Last Word On Sports",
     "published": "2026-10-17T13:34:32+00:00",
     "summary": "Finding The Solution To The Trail Blazers’ Forward Problem Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "Trail Blazers Show Offensive Promise Despite Preseason Finale Loss - roundtable.io",
     "published": "2026-10-17T11:23:48+00:00",
     "summary": "Trail Blazers Show Offensive Promise Despite Preseason Finale Loss roundtable.io"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 - New York Daily News",
     "published": "2026-10-17T11:00:36+00:00",
     "summary": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 New York Daily News"
    }
   ]
  }
 ]
}
</input>