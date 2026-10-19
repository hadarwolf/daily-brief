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
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T00:00:00Z",
     "home": "São Paulo",
     "away": "Vasco da Gama",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T10:15:00Z",
     "home": "Zwolle",
     "away": "Go Ahead",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T10:30:00Z",
     "home": "Udinese",
     "away": "Lecce",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T12:00:00Z",
     "home": "Osasuna",
     "away": "Santander",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T12:30:00Z",
     "home": "Cambuur",
     "away": "AZ",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Leeds United",
     "away": "Man United",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Fiorentina",
     "away": "Como 1907",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Brighton Hove",
     "away": "Crystal Palace",
     "status": "FINISHED",
     "score": "5-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Angers SCO",
     "away": "Marseille",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T13:00:00Z",
     "home": "Bournemouth",
     "away": "Sunderland",
     "status": "FINISHED",
     "score": "2-0"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-18T13:30:00Z",
     "home": "Leverkusen",
     "away": "Freiburg",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T14:15:00Z",
     "home": "Celta",
     "away": "Alavés",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T14:45:00Z",
     "home": "Groningen",
     "away": "Ajax",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Le Havre",
     "away": "Auxerre",
     "status": "FINISHED",
     "score": "1-3"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Lorient",
     "away": "Monaco",
     "status": "FINISHED",
     "score": "1-0"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T15:15:00Z",
     "home": "Paris FC",
     "away": "Stade Rennais",
     "status": "FINISHED",
     "score": "4-3"
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-18T15:30:00Z",
     "home": "Nottingham",
     "away": "Arsenal",
     "status": "FINISHED",
     "score": "0-1"
    },
    {
     "competition": "Bundesliga",
     "kickoff_utc": "2026-10-18T15:30:00Z",
     "home": "M'gladbach",
     "away": "Hoffenheim",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T16:00:00Z",
     "home": "Milan",
     "away": "Atalanta",
     "status": "FINISHED",
     "score": "3-2"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T16:30:00Z",
     "home": "Málaga",
     "away": "Real Sociedad",
     "status": "FINISHED",
     "score": "2-5"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T18:00:00Z",
     "home": "Twente",
     "away": "Utrecht",
     "status": "FINISHED",
     "score": "1-2"
    },
    {
     "competition": "Eredivisie",
     "kickoff_utc": "2026-10-18T18:00:00Z",
     "home": "NEC",
     "away": "Sittard",
     "status": "FINISHED",
     "score": "2-2"
    },
    {
     "competition": "Ligue 1",
     "kickoff_utc": "2026-10-18T18:45:00Z",
     "home": "Olympique Lyon",
     "away": "Nice",
     "status": "FINISHED",
     "score": "2-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-18T18:45:00Z",
     "home": "Juventus",
     "away": "Lazio",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Grêmio",
     "away": "Cruzeiro",
     "status": "FINISHED",
     "score": "2-4"
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Real Madrid",
     "away": "Sevilla FC",
     "status": "FINISHED",
     "score": "4-1"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T19:00:00Z",
     "home": "Fluminense",
     "away": "Santos",
     "status": "FINISHED",
     "score": "1-2"
    }
   ],
   "today": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T21:30:00Z",
     "home": "Bahia",
     "away": "Flamengo",
     "status": "FINISHED",
     "score": "0-3"
    },
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-18T22:30:00Z",
     "home": "Clube do Remo",
     "away": "Bragantino",
     "status": "FINISHED",
     "score": "1-1"
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-19T16:30:00Z",
     "home": "Monza",
     "away": "Cagliari",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Serie A",
     "kickoff_utc": "2026-10-19T18:45:00Z",
     "home": "Parma",
     "away": "Torino",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primera Division",
     "kickoff_utc": "2026-10-19T19:00:00Z",
     "home": "Getafe",
     "away": "Rayo Vallecano",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Premier League",
     "kickoff_utc": "2026-10-19T19:00:00Z",
     "home": "Tottenham",
     "away": "Coventry City",
     "status": "TIMED",
     "score": null
    },
    {
     "competition": "Primeira Liga",
     "kickoff_utc": "2026-10-19T19:15:00Z",
     "home": "Braga",
     "away": "Gil Vicente",
     "status": "TIMED",
     "score": null
    }
   ],
   "tomorrow": [
    {
     "competition": "Campeonato Brasileiro Série A",
     "kickoff_utc": "2026-10-19T23:00:00Z",
     "home": "Corinthians",
     "away": "Vitória",
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
     "title": "'Why not?' - are 'breathtaking' Brighton in title race?",
     "published": "2026-10-18T22:59:46+00:00",
     "summary": "Match of the Day pundits Shay Given and Dion Dublin analyse Brighton's emphatic 5-0 victory over Crystal Palace, with Dublin saying the Seagulls could be in the title race."
    },
    {
     "ref": "bbc_football#1",
     "title": "Football Daily",
     "published": "2026-10-18T22:26:00+00:00",
     "summary": "Paul Robinson joins to discuss Brighton and Lloyd making history, and Leeds v Man United."
    },
    {
     "ref": "bbc_football#2",
     "title": "Mbappe scores twice as Real Madrid beat Sevilla",
     "published": "2026-10-18T21:39:04+00:00",
     "summary": "Kylian Mbappe scores twice as Real Madrid beat Sevilla 4-1 in La Liga to close the gap on Barcelona to six points ahead of next weekend's El Clasico."
    },
    {
     "ref": "bbc_football#3",
     "title": "'Four points is nothing' - O'Neill stays cool after statement win",
     "published": "2026-10-18T20:50:09+00:00",
     "summary": "Amid supporter discontent, a recent protest against the major shareholder and a veteran manager deciding now is not the time to \"wrap things up\", as Martin O'Neill put it, you'd be forgiven for scratching your head when examining Celtic's current domestic situation."
    },
    {
     "ref": "bbc_football#4",
     "title": "'Four points is nothing' - O'Neill stays cool after statement win",
     "published": "2026-10-18T20:50:09+00:00",
     "summary": "Amid supporter discontent, a recent protest against the major shareholder and a veteran manager deciding now is not the time to \"wrap things up\", as Martin O'Neill put it, you'd be forgiven for scratching your head when examining Celtic's current domestic situation."
    },
    {
     "ref": "bbc_football#5",
     "title": "Ramos could make La Liga return - Monday's gossip",
     "published": "2026-10-18T20:21:54+00:00",
     "summary": "Sergio Ramos could make a surprise return to football in Madrid, Bournemouth put a high price on Alex Scott, and Florian Wirtz is staying at Liverpool."
    },
    {
     "ref": "bbc_football#6",
     "title": "Madueke's 'anger and conviction' shows he's more than a 'finisher'",
     "published": "2026-10-18T19:55:41+00:00",
     "summary": "Noni Madueke may not have the role he wants at Arsenal but his winning goal against Nottingham Forest showed why he is one of Mikel Arteta's valued players."
    },
    {
     "ref": "bbc_football#7",
     "title": "Sage feels 'shame' at Palace thrashing with future in doubt",
     "published": "2026-10-18T19:51:22+00:00",
     "summary": "Crystal Palace manage Pierre Sage says he feels \"shame\" at the Eagles' performance during their 5-0 thrashing by Brighton and does not know if he will be given time to save his job."
    },
    {
     "ref": "bbc_football#8",
     "title": "Bournemouth pick up first league victory with win over Sunderland",
     "published": "2026-10-18T18:59:15+00:00",
     "summary": "Bournemouth beat Sunderland 2-0 at the Vitality Stadium to pick up their first league victory of the season and move out of the relegation zone."
    },
    {
     "ref": "bbc_football#9",
     "title": "Leeds extend Man Utd's winless run to six games",
     "published": "2026-10-18T18:59:10+00:00",
     "summary": "Dominic Calvert-Lewin earns a point for Leeds and extends Manchester United's winless run to six games."
    },
    {
     "ref": "bbc_football#10",
     "title": "Madueke's strike enough as Arsenal pick up narrow win over Forest",
     "published": "2026-10-18T18:59:06+00:00",
     "summary": "Noni Madueke comes of the bench to score the winning goal as Arsenal beat Nottingham Forest 1-0 at The City Ground."
    },
    {
     "ref": "bbc_football#11",
     "title": "Gomez scores extraordinary goal as Brighton put five past Palace",
     "published": "2026-10-18T18:59:02+00:00",
     "summary": "Diego Gomez scores a sensational goal from the halfway line as Brighton hammer rivals Crystal Palace."
    },
    {
     "ref": "bbc_football#12",
     "title": "'Maybe we became arrogant' - Sunderland struggles continue",
     "published": "2026-10-18T18:49:00+00:00",
     "summary": "Sunderland defender Nordi Mukiele suggested the Black Cats may have become \"arrogant\" as last season's surprise package stutter in the Premier League this term."
    },
    {
     "ref": "bbc_football#13",
     "title": "Shades of Barca and Beckham - Brighton aim to maintain superb start",
     "published": "2026-10-18T18:33:29+00:00",
     "summary": "With 23 goals in seven Premier League matches, including some stunning strikes, Brighton continue to delight their fans and get them dreaming of what might be."
    },
    {
     "ref": "bbc_football#14",
     "title": "Arsenal substitutes change game - Arteta",
     "published": "2026-10-18T18:31:09+00:00",
     "summary": "Arsenal manager Mikel Arteta says their substitutes changed the game as they beat Nottingham Forest 1-0 in the Premier League."
    },
    {
     "ref": "bbc_football#15",
     "title": "Hearts roll out red carpet ... and Celtic walk all over it",
     "published": "2026-10-18T18:22:50+00:00",
     "summary": "Hearts thought attack was the best form of defence at Celtic Park. They were badly wrong, writes Tom English."
    },
    {
     "ref": "bbc_football#16",
     "title": "Hearts roll out red carpet ... and Celtic walk all over it",
     "published": "2026-10-18T18:22:50+00:00",
     "summary": "Hearts thought attack was the best form of defence at Celtic Park. They were badly wrong, writes Tom English."
    },
    {
     "ref": "bbc_football#17",
     "title": "Long-range goals from further and further out",
     "published": "2026-10-18T18:09:13+00:00",
     "summary": "After Diego Gomez's halfway-line stunner for Brighton on Sunday, BBC Sport looks at the previous longest-range Premier League goals as recorded by Opta in the last 20 seasons."
    },
    {
     "ref": "bbc_football#18",
     "title": "Madueke strikes late but who missed his big chance? - Forest v Arsenal ratings",
     "published": "2026-10-18T17:35:44+00:00",
     "summary": "Noni Madueke struck late to earn Arsenal a victory at Nottingham Forest. Here's how the players rated."
    },
    {
     "ref": "bbc_football#19",
     "title": "Mbeumo offers Carrick solace as Man Utd winless run goes on",
     "published": "2026-10-18T17:24:45+00:00",
     "summary": "Michael Carrick said he had his headphones on this week so didn't hear the noise around Manchester United, but a 1-1 draw at Leeds means it is six games without a win."
    },
    {
     "ref": "bbc_football#20",
     "title": "'Hearts defending was junior level... and that's disrespectful to the juniors'",
     "published": "2026-10-18T17:05:00+00:00",
     "summary": "After Celtic's 7-1 thrashing of Hearts, we hear from the managers and the Sportsound team"
    },
    {
     "ref": "bbc_football#21",
     "title": "James scores brilliant double as Chelsea put six past Spurs",
     "published": "2026-10-18T17:02:19+00:00",
     "summary": "Chelsea secure their fifth-consecutive Women's Super League win with victory over Tottenham in manager Sonia Bompastor's 50th game in the competition."
    },
    {
     "ref": "bbc_football#22",
     "title": "Man City remain unbeaten as Shaw scores twice against Brighton",
     "published": "2026-10-18T16:13:45+00:00",
     "summary": "Khadija Shaw scores twice as Manchester City made it six wins from six in the Women's Super League after a 3-2 victory over Brighton."
    },
    {
     "ref": "bbc_football#23",
     "title": "Man Utd showed 'unity' in draw with Leeds - Carrick",
     "published": "2026-10-18T15:46:07+00:00",
     "summary": "Manchester United manager Michael Carrick says his side showed \"unity\" during their 1-1 draw with Leeds at Elland Road."
    },
    {
     "ref": "bbc_football#24",
     "title": "My one feeling is shame - Sage on bruising Palace defeat",
     "published": "2026-10-18T15:41:16+00:00",
     "summary": "Crystal Palace head coach Pierre Sage says he feels \"shame\" after their 5-0 defeat by Brighton."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "Atlanta United vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-10-19T01:27:10+00:00",
     "summary": "Atlanta United vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Tata Martino Makes Rare Lionel Messi and Diego Maradona Comparison After Inter Miami's Win - Athlon Sports",
     "published": "2026-10-19T01:01:00+00:00",
     "summary": "Tata Martino Makes Rare Lionel Messi and Diego Maradona Comparison After Inter Miami's Win Athlon Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "November 1, 2026: New England vs Miami Soccer Prediction Market - Robinhood",
     "published": "2026-10-19T00:56:42+00:00",
     "summary": "November 1, 2026: New England vs Miami Soccer Prediction Market Robinhood"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Melhores momentos: Atlanta United 1 x 3 Inter Miami CF (MLS) - OneFootball",
     "published": "2026-10-18T22:15:04+00:00",
     "summary": "Melhores momentos: Atlanta United 1 x 3 Inter Miami CF (MLS) OneFootball"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Messi Inspires Inter Miami Win With Two Goals And An Assist - Bernama",
     "published": "2026-10-18T21:13:26+00:00",
     "summary": "Messi Inspires Inter Miami Win With Two Goals And An Assist Bernama"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "MLS Roundup: St. Louis CITY SC's impressive unbeaten streak ends, Lionel Messi saves Inter Miami Miami again, and the Philadelphia Union keep ticking along - Goal.com",
     "published": "2026-10-18T19:44:15+00:00",
     "summary": "MLS Roundup: St. Louis CITY SC's impressive unbeaten streak ends, Lionel Messi saves Inter Miami Miami again, and the Philadelphia Union keep ticking along Goal.com"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Messi strikes twice in Inter Miami’s 3-1 win at Atlanta - Soccer America",
     "published": "2026-10-18T15:27:54+00:00",
     "summary": "Messi strikes twice in Inter Miami’s 3-1 win at Atlanta Soccer America"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "Atlanta United vs Inter Miami: Player ratings form - Scarves and Spikes",
     "published": "2026-10-18T15:23:58+00:00",
     "summary": "Atlanta United vs Inter Miami: Player ratings form Scarves and Spikes"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "'He never stops surprising': Messi turns back clock with dazzling double - USA Today",
     "published": "2026-10-18T15:20:00+00:00",
     "summary": "'He never stops surprising': Messi turns back clock with dazzling double USA Today"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi scores twice as Inter Miami extend winning streak to three - Middle East Online",
     "published": "2026-10-18T14:46:38+00:00",
     "summary": "Messi scores twice as Inter Miami extend winning streak to three Middle East Online"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Tickets sold out in 13 minutes: Messi's visit sends Spaniards into a frenzy - Goal.com",
     "published": "2026-10-18T14:13:53+00:00",
     "summary": "Tickets sold out in 13 minutes: Messi's visit sends Spaniards into a frenzy Goal.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "Messi brace lifts Inter Miami to 3-1 win in Atlanta - The Bangladesh Today",
     "published": "2026-10-18T13:15:08+00:00",
     "summary": "Messi brace lifts Inter Miami to 3-1 win in Atlanta The Bangladesh Today"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Messi, 39, scores TWO solo wondergoals then taunts rival with celebration - The Sun",
     "published": "2026-10-18T13:05:00+00:00",
     "summary": "Messi, 39, scores TWO solo wondergoals then taunts rival with celebration The Sun"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Messi brace secures Inter Miami victory in Atlanta - Miami Herald",
     "published": "2026-10-18T12:52:00+00:00",
     "summary": "Messi brace secures Inter Miami victory in Atlanta Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Lionel Messi scores twice for Inter Miami against Atlanta United - BBC",
     "published": "2026-10-18T11:23:16+00:00",
     "summary": "Lionel Messi scores twice for Inter Miami against Atlanta United BBC"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Lionel Messi proves he never forgets: Takes rare revenge on opponent with fiery out-of-character taunt to - The Times of India",
     "published": "2026-10-18T11:21:00+00:00",
     "summary": "Lionel Messi proves he never forgets: Takes rare revenge on opponent with fiery out-of-character taunt to The Times of India"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi Hits 936 Career Goals As Inter Miami Beat Atlanta - LEADERSHIP Newspapers",
     "published": "2026-10-18T10:38:40+00:00",
     "summary": "Messi Hits 936 Career Goals As Inter Miami Beat Atlanta LEADERSHIP Newspapers"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Lionel Messi reaches 25 goals as Inter Miami extend winning streak - Telangana Today",
     "published": "2026-10-18T10:12:09+00:00",
     "summary": "Lionel Messi reaches 25 goals as Inter Miami extend winning streak Telangana Today"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Lionel Messi Brace Lifts Inter Miami To 3-1 Win Over Atlanta United - Deccan Chronicle",
     "published": "2026-10-18T10:10:18+00:00",
     "summary": "Lionel Messi Brace Lifts Inter Miami To 3-1 Win Over Atlanta United Deccan Chronicle"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "Messi brace lifts Inter Miami to 3-1 win in Atlanta | Gulf Times - Gulf Times",
     "published": "2026-10-18T09:53:00+00:00",
     "summary": "Messi brace lifts Inter Miami to 3-1 win in Atlanta | Gulf Times Gulf Times"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Atlanta United 1-3 Inter Miami: Messi doubles up again - beIN SPORTS",
     "published": "2026-10-18T09:39:18+00:00",
     "summary": "Atlanta United 1-3 Inter Miami: Messi doubles up again beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi scores twice in four minutes as Inter Miami beat Atlanta 3-1 - The Sun Nigeria",
     "published": "2026-10-18T09:35:13+00:00",
     "summary": "Messi scores twice in four minutes as Inter Miami beat Atlanta 3-1 The Sun Nigeria"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Messi Scores Twice in Four Minutes as Inter Miami Beat Atlanta United - Террикон",
     "published": "2026-10-18T09:14:00+00:00",
     "summary": "Messi Scores Twice in Four Minutes as Inter Miami Beat Atlanta United Террикон"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Footballer Messi scores two goals in Inter Miami win — Interia Sport - UA.NEWS",
     "published": "2026-10-18T08:52:40+00:00",
     "summary": "Footballer Messi scores two goals in Inter Miami win — Interia Sport UA.NEWS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Will Messi reach 1,000 goals? Fine brace brings him another step closer - Goal.com",
     "published": "2026-10-18T08:36:13+00:00",
     "summary": "Will Messi reach 1,000 goals? Fine brace brings him another step closer Goal.com"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Deni Avdija Media Availability | Oct. 18, 2026 - NBA.com",
     "published": "2026-10-19T00:58:53+00:00",
     "summary": "Deni Avdija Media Availability | Oct. 18, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Micah Nori Media Availability | Oct. 18, 2026 - NBA.com",
     "published": "2026-10-19T00:58:53+00:00",
     "summary": "Micah Nori Media Availability | Oct. 18, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija - Sport News Africa",
     "published": "2026-10-18T20:00:00+00:00",
     "summary": "NBA — Trail Blazers: the keys to a 2026–2027 season built around Morant, Lillard and Avdija Sport News Africa"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Did the Blazers Get Enough Out of Preseason? - Yahoo Sports",
     "published": "2026-10-18T15:43:54+00:00",
     "summary": "Did the Blazers Get Enough Out of Preseason? Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Deni Avdija climbs in new rankings, earns high praise - The Jerusalem Post",
     "published": "2026-10-18T06:10:35+00:00",
     "summary": "Deni Avdija climbs in new rankings, earns high praise The Jerusalem Post"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Finding The Solution To The Trail Blazers’ Forward Problem - Last Word On Sports",
     "published": "2026-10-17T13:34:32+00:00",
     "summary": "Finding The Solution To The Trail Blazers’ Forward Problem Last Word On Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 - New York Daily News",
     "published": "2026-10-17T11:00:36+00:00",
     "summary": "Five Nets, five tests as Brooklyn’s first-round class enters Year 2 New York Daily News"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Game Highlights: Portland Trail Blazers 118, Golden State Warriors 128 | Oct. 16, 2026 - NBA.com",
     "published": "2026-10-17T05:54:08+00:00",
     "summary": "Game Highlights: Portland Trail Blazers 118, Golden State Warriors 128 | Oct. 16, 2026 NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Deni Avdija posts 12/4/3/2/1 line vs. Warriors - NBC Sports",
     "published": "2026-10-17T04:43:39+00:00",
     "summary": "Deni Avdija posts 12/4/3/2/1 line vs. Warriors NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Portland Trail Blazers at Golden State Warriors - NBA Game Summary - Oct 16, 2026 - USA Today",
     "published": "2026-10-17T02:31:44+00:00",
     "summary": "Portland Trail Blazers at Golden State Warriors - NBA Game Summary - Oct 16, 2026 USA Today"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Golden State Warriors vs Portland Trail Blazers Box Score - October 16, 2026 - The Athletic - The New York Times",
     "published": "2026-10-17T02:25:22+00:00",
     "summary": "Golden State Warriors vs Portland Trail Blazers Box Score - October 16, 2026 - The Athletic The New York Times"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Trail Blazers vs. Warriors Prediction, Spread, NBA Preseason Picks – Friday, October 16 - PrizePicks",
     "published": "2026-10-16T22:03:56+00:00",
     "summary": "Trail Blazers vs. Warriors Prediction, Spread, NBA Preseason Picks – Friday, October 16 PrizePicks"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija Stats, Props & Recent Performance - PrizePicks",
     "published": "2026-10-16T22:00:00+00:00",
     "summary": "Deni Avdija Stats, Props & Recent Performance PrizePicks"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "PORTLAND TRAIL BLAZERS NEW ERA | 2026/27 Projected Roster & Starting 5 Grades Humber Bridge (c7kpS8F3Tv) - Unisba Media",
     "published": "2026-10-16T19:21:54+00:00",
     "summary": "PORTLAND TRAIL BLAZERS NEW ERA | 2026/27 Projected Roster & Starting 5 Grades Humber Bridge (c7kpS8F3Tv) Unisba Media"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "A Jewish NBA season preview - Jewish Telegraphic Agency",
     "published": "2026-10-16T15:00:00+00:00",
     "summary": "A Jewish NBA season preview Jewish Telegraphic Agency"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "2026-27 Fantasy Basketball: Best Players to Target for Free Throw Percentage - FantraxHQ",
     "published": "2026-10-16T10:08:22+00:00",
     "summary": "2026-27 Fantasy Basketball: Best Players to Target for Free Throw Percentage FantraxHQ"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Trail Blazers vs. Warriors - Final Score - October 16, 2026 - FOX Sports",
     "published": "2026-10-16T07:00:00+00:00",
     "summary": "Trail Blazers vs. Warriors - Final Score - October 16, 2026 FOX Sports"
    }
   ]
  }
 ]
}
</input>