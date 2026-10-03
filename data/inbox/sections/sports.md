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
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-02T23:00:00Z",
     "home": "São Paulo",
     "away": "Santos",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-03T21:30:00Z",
     "home": "Mineiro",
     "away": "Bragantino",
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
     "title": "Which clubs did Man City's 'inflated' money flow to in transfer market?",
     "published": "2026-10-02T22:30:24+00:00",
     "summary": "BBC Sport follows the trail of transfer money flowing to other clubs during Manchester City's period of financial rule-breaking."
    },
    {
     "ref": "bbc_football#1",
     "title": "Who has 'no ceiling' as Northern Ireland shine in Nations League?",
     "published": "2026-10-02T21:48:54+00:00",
     "summary": "After an impressive 3-0 victory over Ukraine in the Nations League, Northern Ireland manager Michael O'Neill was impressed with his young side."
    },
    {
     "ref": "bbc_football#2",
     "title": "Chiesa eyes Liverpool exit - Saturday's gossip",
     "published": "2026-10-02T21:14:32+00:00",
     "summary": "Liverpool forward Federico Chiesa is on the radar of a trio of Serie A clubs, Man City striker Erling Haaland is more likely to head to Barcelona than Arsenal if he leaves the club, Brentford's Michael Kayode is wanted by Juventus, plus more."
    },
    {
     "ref": "bbc_football#3",
     "title": "Why Aston Villa played Sevilla for a trophy you haven't heard of",
     "published": "2026-10-02T21:02:23+00:00",
     "summary": "Aston Villa beat Sevilla in the Antonio Puerta Trophy, named in memory of one of the Spanish club's former players."
    },
    {
     "ref": "bbc_football#4",
     "title": "Man City whistleblower set to lose protection amid fears for life",
     "published": "2026-10-02T19:26:13+00:00",
     "summary": "Portuguese computer hacker who released documents which helped trigger the Premier League investigation into Manchester City set to lose his witness protection despite fears for his life."
    },
    {
     "ref": "bbc_football#5",
     "title": "Man City confirm appeal against guilty verdict",
     "published": "2026-10-02T17:43:48+00:00",
     "summary": "The club's statement says the ruling contains \"clear material errors, of law, principle and fact, and is unsafe\"."
    },
    {
     "ref": "bbc_football#6",
     "title": "Football Daily",
     "published": "2026-10-02T17:18:00+00:00",
     "summary": "John Murray & Ali Bruce-Ball are joined by Conor McNamara to chat commentator life."
    },
    {
     "ref": "bbc_football#7",
     "title": "What can Peterborough fans expect from 'relentless' Savage?",
     "published": "2026-10-02T16:53:00+00:00",
     "summary": "Peterborough United's director of football Barry Fry predicts life under Robbie Savage will be anything but dull."
    },
    {
     "ref": "bbc_football#8",
     "title": "Tuchel would never rule out players not in top flight",
     "published": "2026-10-02T15:05:31+00:00",
     "summary": "England boss Thomas Tuchel says he would \"never rule out\" selecting someone who is not playing in the top flight, should Manchester City be relegated."
    },
    {
     "ref": "bbc_football#9",
     "title": "Tankards, Clough & 'creaky joints' - Tennent's Sixes returns",
     "published": "2026-10-02T14:07:42+00:00",
     "summary": "More than three decades since its last staging, Scottish football's cult indoor event makes a comeback with the \"creaky joints\" of former players taking to an ice rink."
    },
    {
     "ref": "bbc_football#10",
     "title": "Timely recognition or long overdue? How Gross is proving all-time bargain",
     "published": "2026-10-02T14:04:17+00:00",
     "summary": "Named the Premier League's player of the month for September, BBC Sport looks at Brighton star Pascal Gross' impact both this season and over the past nine years during his two spells at the club."
    },
    {
     "ref": "bbc_football#11",
     "title": "Giant Dzeko shirt unveiled in Sarajevo to mark retirement",
     "published": "2026-10-02T14:00:18+00:00",
     "summary": "A giant Edin Dzeko shirt is unveiled in Sarajevo to mark the Bosnia striker's retirement from international football."
    },
    {
     "ref": "bbc_football#12",
     "title": "How Gordon became one of England's main men",
     "published": "2026-10-02T13:15:44+00:00",
     "summary": "Anthony Gordon has been England's in-form player since the World Cup knockout stage - is the Barcelona forward now undroppable?"
    },
    {
     "ref": "bbc_football#13",
     "title": "Peterborough appoint Forest Green boss Savage",
     "published": "2026-10-02T12:23:50+00:00",
     "summary": "Peterborough United appoint Forest Green Rovers boss Robbie Savage as Luke Williams' successor."
    },
    {
     "ref": "bbc_football#14",
     "title": "Robertson's Scotland career in numbers as 100th cap looms",
     "published": "2026-10-02T11:43:12+00:00",
     "summary": "Andy Robertson is poised to become only the second man ever to play 100 times for Scotland. BBC Sport Scotland charts his international career in numbers."
    },
    {
     "ref": "bbc_football#15",
     "title": "Robertson's Scotland career in numbers as 100th cap looms",
     "published": "2026-10-02T11:43:12+00:00",
     "summary": "Andy Robertson is poised to become only the second man ever to play 100 times for Scotland. BBC Sport Scotland charts his international career in numbers."
    },
    {
     "ref": "bbc_football#16",
     "title": "Haaland 'gave me his shirt... but didn't take mine'",
     "published": "2026-10-02T11:09:07+00:00",
     "summary": "Ben Cabango will always have a memento to remind him of Wales' memorable victory over Norway – Erling Haaland's shirt."
    },
    {
     "ref": "bbc_football#17",
     "title": "Manager ins and outs - 2026-27",
     "published": "2026-10-02T10:42:37+00:00",
     "summary": "BBC Sport tracks all the manager ins and outs in the Premier League, Scottish Premiership, Women's Super League, English Football League and National League."
    },
    {
     "ref": "bbc_football#18",
     "title": "Was long-awaited win a turning point for Bellamy?",
     "published": "2026-10-02T09:36:29+00:00",
     "summary": "Has the impressive 2-1 victory over Norway changed the mood music for Wales and restored fans confidence in head coach Craig Bellamy?"
    },
    {
     "ref": "bbc_football#19",
     "title": "Swindon's Holloway labels himself dead man walking",
     "published": "2026-10-02T09:17:33+00:00",
     "summary": "Swindon manager Ian Holloway calls himself a \"dead man walking\" if the team's form does not turn around."
    },
    {
     "ref": "bbc_football#20",
     "title": "What does Man City guilty verdict mean for their squad?",
     "published": "2026-10-02T09:00:51+00:00",
     "summary": "BBC Sport looks at how Manchester City's guilty verdict will affect their existing players' futures and the club's dealings in the transfer market."
    },
    {
     "ref": "bbc_football#21",
     "title": "'Hitchy is always with us' - the keeper who died after one-punch attack",
     "published": "2026-10-02T07:59:22+00:00",
     "summary": "The memory of James Hitchcock lives on at non-league Barton Town, almost two years after he died after being punched on a visit to York."
    },
    {
     "ref": "bbc_football#22",
     "title": "Listen: Is North Macedonia a must-win for Scotland?",
     "published": "2026-10-02T07:00:00+00:00",
     "summary": "Pressure Building for Pocognoli and Scotland"
    },
    {
     "ref": "bbc_football#23",
     "title": "Hallgrimsson marvels at 'magical' Parrott's solo goal",
     "published": "2026-10-02T06:44:31+00:00",
     "summary": "Republic of Ireland boss Heimir Hallgrimsson praises Troy Parrott after his fine solo goal in their 2-2 Uefa Nations League draw against Austria on Thursday."
    },
    {
     "ref": "bbc_football#24",
     "title": "The Unpromotables: Germany's league champions who can't go up",
     "published": "2026-10-02T06:37:49+00:00",
     "summary": "German football is grappling with a sum that doesn't add up - four promotion spots for five league champions."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "San Diego FC at Inter Miami CF - MLS Game Summary - Sep 20, 2026 - usatoday.com",
     "published": "2026-10-03T02:57:29+00:00",
     "summary": "San Diego FC at Inter Miami CF - MLS Game Summary - Sep 20, 2026 usatoday.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Without the Barcelona crest: Messi secures his first win in Spain - Goal.com",
     "published": "2026-10-02T21:28:19+00:00",
     "summary": "Without the Barcelona crest: Messi secures his first win in Spain Goal.com"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Inter Miami could make or break some rivals' playoff dreams - OneFootball",
     "published": "2026-10-02T20:34:28+00:00",
     "summary": "Inter Miami could make or break some rivals' playoff dreams OneFootball"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Join The Huddle: Introducing New In-App Fan-Player Chat Feature! - Inter Miami CF",
     "published": "2026-10-02T20:00:18+00:00",
     "summary": "Join The Huddle: Introducing New In-App Fan-Player Chat Feature! Inter Miami CF"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Inter Miami could make or break some rivals' playoff dreams - interheron.com",
     "published": "2026-10-02T20:00:01+00:00",
     "summary": "Inter Miami could make or break some rivals' playoff dreams interheron.com"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi is preparing a revolution - Fichajes.net",
     "published": "2026-10-02T18:00:00+00:00",
     "summary": "Messi is preparing a revolution Fichajes.net"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Lionel Messi’s MESSI AND THE GIANTS Scores Summer 2027 Premiere - Movieguide",
     "published": "2026-10-02T17:43:11+00:00",
     "summary": "Lionel Messi’s MESSI AND THE GIANTS Scores Summer 2027 Premiere Movieguide"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team - 95.5 WSB",
     "published": "2026-10-02T17:30:32+00:00",
     "summary": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team 95.5 WSB"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team - wdhn.com",
     "published": "2026-10-02T17:30:32+00:00",
     "summary": "Lionel Messi returns to Argentina ahead of emotional farewell match with national team wdhn.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Lionel Messi ready to ‘pass the torch’ to Lamine Yamal in groundbreaking project planned for 2027 - World Soccer Talk",
     "published": "2026-10-02T17:25:58+00:00",
     "summary": "Lionel Messi ready to ‘pass the torch’ to Lamine Yamal in groundbreaking project planned for 2027 World Soccer Talk"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Inter Miami CF Announces 2027 Dreams Cup presented by Lowe’s - WebWire",
     "published": "2026-10-02T16:07:10+00:00",
     "summary": "Inter Miami CF Announces 2027 Dreams Cup presented by Lowe’s WebWire"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Miami's Mixed Results: A 2-2 Draw Against San Diego - Yahoo Sports",
     "published": "2026-10-02T15:36:36+00:00",
     "summary": "Miami's Mixed Results: A 2-2 Draw Against San Diego Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "MLS Pens an Emotional Letter to Messi Ahead of His Farewell with Argentina: He Still Gives Us Reasons to Smile - Soy Futbol",
     "published": "2026-10-02T15:25:16+00:00",
     "summary": "MLS Pens an Emotional Letter to Messi Ahead of His Farewell with Argentina: He Still Gives Us Reasons to Smile Soy Futbol"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "MLS MVP Race 2026: Lionel Messi Leads the Race as Evander, Musa and Bouanga Chase Him - Pasión Fútbol",
     "published": "2026-10-02T15:03:47+00:00",
     "summary": "MLS MVP Race 2026: Lionel Messi Leads the Race as Evander, Musa and Bouanga Chase Him Pasión Fútbol"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Atlanta Utd - Inter Miami - Flashscore.com",
     "published": "2026-10-02T13:05:42+00:00",
     "summary": "Atlanta Utd - Inter Miami Flashscore.com"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Marriott Bonvoy Partners with Inter Miami CF - safariindia.com",
     "published": "2026-10-02T12:16:05+00:00",
     "summary": "Marriott Bonvoy Partners with Inter Miami CF safariindia.com"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "When Will Ronaldo and Messi Play Next? Full Match Schedule for the Rest of 2026 - Sports Digest",
     "published": "2026-10-02T10:45:20+00:00",
     "summary": "When Will Ronaldo and Messi Play Next? Full Match Schedule for the Rest of 2026 Sports Digest"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi has decided to return to Inter Miami - Radar Armenia",
     "published": "2026-10-02T10:41:18+00:00",
     "summary": "Messi has decided to return to Inter Miami Radar Armenia"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Messi completes takeover of Spanish 2nd-division club Eldense - Daily Sabah",
     "published": "2026-10-02T07:06:00+00:00",
     "summary": "Messi completes takeover of Spanish 2nd-division club Eldense Daily Sabah"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Why Lionel Messi must win the 2026 Ballon d’Or: 4 unstoppable reasons at age 39 - Jang",
     "published": "2026-10-02T05:55:34+00:00",
     "summary": "Why Lionel Messi must win the 2026 Ballon d’Or: 4 unstoppable reasons at age 39 Jang"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "MLS Inter Miami Crew Soccer - Bluefield Daily Telegraph",
     "published": "2026-10-02T05:00:00+00:00",
     "summary": "MLS Inter Miami Crew Soccer Bluefield Daily Telegraph"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Lionel Messi acquires Spanish second division club - Zamin.uz",
     "published": "2026-10-02T04:37:48+00:00",
     "summary": "Lionel Messi acquires Spanish second division club Zamin.uz"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Lionel Messi completes takeover of Spanish second division side Eldense - Goal.com",
     "published": "2026-10-02T04:29:04+00:00",
     "summary": "Lionel Messi completes takeover of Spanish second division side Eldense Goal.com"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player - ABC News - Breaking News, Latest News and Videos",
     "published": "2026-10-02T03:08:13+00:00",
     "summary": "David Beckham reveals hidden sleeper pick for 2026 FIFA World Cup, plus his favorite memory as a player ABC News - Breaking News, Latest News and Videos"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "MESSI FIRE ASSISTS! 🔥 Share Points. Inter Miami Vs Atlanta United 2-2 All Goals & Highlights 2026 Jim Carrey (ZA8BfrWsJh) - Unisba Media",
     "published": "2026-10-02T02:16:27+00:00",
     "summary": "MESSI FIRE ASSISTS! 🔥 Share Points. Inter Miami Vs Atlanta United 2-2 All Goals & Highlights 2026 Jim Carrey (ZA8BfrWsJh) Unisba Media"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "The Blazers have a starting lineup dilemma with a clear solution: Bring Ja Morant off the bench - cbssports.com",
     "published": "2026-10-02T20:40:00+00:00",
     "summary": "The Blazers have a starting lineup dilemma with a clear solution: Bring Ja Morant off the bench cbssports.com"
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
     "title": "Blazers fire new play-by-play announcer over offensive teenage posts - Eurohoops",
     "published": "2026-10-02T05:15:00+00:00",
     "summary": "Blazers fire new play-by-play announcer over offensive teenage posts Eurohoops"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers - NBA.com",
     "published": "2026-10-02T01:24:48+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Training Camp Day 3: How’s Scoot Henderson Doing? - Blazer's Edge",
     "published": "2026-10-02T01:24:00+00:00",
     "summary": "Training Camp Day 3: How’s Scoot Henderson Doing? Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - WGRZ",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? WGRZ"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - 5newsonline.com",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? 5newsonline.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? - KTVB",
     "published": "2026-10-01T22:50:00+00:00",
     "summary": "Can Ja Morant Play Off-Ball and Unlock the Trail Blazers Offense with Damian Lillard & Deni Avdija? KTVB"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers - YouTube",
     "published": "2026-10-01T22:15:36+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 1, 2026 | Portland Trail Blazers YouTube"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Blazers can't ignore the chance to flip Ja Morant this season - Rip City Project",
     "published": "2026-09-30T20:13:43+00:00",
     "summary": "Blazers can't ignore the chance to flip Ja Morant this season Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers Have Every Reason to Be Better Than Last Season - roundtable.io",
     "published": "2026-09-30T04:33:20+00:00",
     "summary": "Trail Blazers Have Every Reason to Be Better Than Last Season roundtable.io"
    }
   ]
  }
 ]
}
</input>