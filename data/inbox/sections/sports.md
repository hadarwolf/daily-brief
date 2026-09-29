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
     "title": "O'Reilly to miss Czech Republic but Konsa in squad",
     "published": "2026-09-29T06:58:53+00:00",
     "summary": "Nico O'Reilly is ruled out of England's Nations League match against the Czech Republic on Tuesday night bu Ezri Konsa is set to be in the squad."
    },
    {
     "ref": "bbc_football#1",
     "title": "Flex your football brain with our daily quizzes",
     "published": "2026-09-29T06:07:51+00:00",
     "summary": "Test your ball knowledge against today's Who Am I?, Five in Five and Brainteaser."
    },
    {
     "ref": "bbc_football#2",
     "title": "Czech Republic ready for Wembley 30 years after Euro '96",
     "published": "2026-09-29T05:10:25+00:00",
     "summary": "The Czech Republic are returning to Wembley for a Nations League game with England, just over 30 years after their Euro '96 heartbreak there."
    },
    {
     "ref": "bbc_football#3",
     "title": "Football Daily",
     "published": "2026-09-28T23:22:00+00:00",
     "summary": "The Monday Night Club look at the ongoing fallout from the Man City PL charges verdict"
    },
    {
     "ref": "bbc_football#4",
     "title": "O'Neill 'positive' as NI maintain unbeaten start",
     "published": "2026-09-28T23:21:50+00:00",
     "summary": "Michael O'Neill says he is \"positive\" as Northern Ireland maintain their unbeaten start in the Nations League with a goalless draw with Hungary."
    },
    {
     "ref": "bbc_football#5",
     "title": "Infantino makes bigger cash pledge to Fifa members",
     "published": "2026-09-28T22:32:29+00:00",
     "summary": "Fifa president Gianni Infantino indicates more money could be distributed to the governing body's members from its cash reserves."
    },
    {
     "ref": "bbc_football#6",
     "title": "Man Utd & Arsenal eye Porto's Costa - Tuesday's gossip",
     "published": "2026-09-28T21:10:44+00:00",
     "summary": "Arsenal and Manchester United eye Porto defender Alberto Costa, Manchester City will not let Erling Haaland leave on the cheap if they are relegated, Liverpool retain an interest in Real Madrid midfielder Aurelien Tchouameni, plus more."
    },
    {
     "ref": "bbc_football#7",
     "title": "Hart trusts Man City chair Al Mubarak over ruling",
     "published": "2026-09-28T19:24:40+00:00",
     "summary": "Former Manchester City goalkeeper Joe Hart believes club chairman Khaldoon Al Mubarak's claims they are innocent of breaking the Premier League's financial rules."
    },
    {
     "ref": "bbc_football#8",
     "title": "Man City CEO defiant over Premier League charges",
     "published": "2026-09-28T18:53:30+00:00",
     "summary": "Manchester City chief executive Ferran Soriano issues a defiant message to the executives of other teams about the club being found guilty of a majority of Premier League charges, BBC Sport has been told."
    },
    {
     "ref": "bbc_football#9",
     "title": "Ferguson retains Rangers dream but Bologna exit never close",
     "published": "2026-09-28T15:27:38+00:00",
     "summary": "Lewis Ferguson reveals \"nothing was ever that close\" on a move away from Bologna this summer amid reports of interest from Rangers but he does harbour ambitions of a return to his boyhood club."
    },
    {
     "ref": "bbc_football#10",
     "title": "Ferguson retains Rangers dream but Bologna exit was not 'close'",
     "published": "2026-09-28T15:27:38+00:00",
     "summary": "Lewis Ferguson reveals \"nothing was ever that close\" on a move away from Bologna this summer amid reports of interest from Rangers but he does harbour ambitions of a return to his boyhood club."
    },
    {
     "ref": "bbc_football#11",
     "title": "BBC Women's Football Weekly",
     "published": "2026-09-28T15:04:00+00:00",
     "summary": "Have Chelsea shown themselves as the biggest threat to Manchester City’s title defence?"
    },
    {
     "ref": "bbc_football#12",
     "title": "BBC Women's Football Weekly",
     "published": "2026-09-28T15:04:00+00:00",
     "summary": "Have Chelsea shown themselves as the biggest threat to Manchester City’s title defence?"
    },
    {
     "ref": "bbc_football#13",
     "title": "How does Cas work and why can't Man City appeal to it?",
     "published": "2026-09-28T14:43:05+00:00",
     "summary": "The Court of Arbitration for Sport (CAS) regulates legal disputes across the world of sport"
    },
    {
     "ref": "bbc_football#14",
     "title": "Forest Green allow Savage to talk to another club",
     "published": "2026-09-28T13:37:08+00:00",
     "summary": "Forest Green give manager Robbie Savage permission to speak to another club, amid speculation linking him to Peterborough United."
    },
    {
     "ref": "bbc_football#15",
     "title": "Could Potter be England's next breakthrough star?",
     "published": "2026-09-28T13:33:23+00:00",
     "summary": "With Sarina Wiegman set to name her latest England squad on Tuesday, there is one name everyone is talking about - Lexi Potter. Here is why."
    },
    {
     "ref": "bbc_football#16",
     "title": "Could Potter be England's next breakthrough star?",
     "published": "2026-09-28T13:33:23+00:00",
     "summary": "With Sarina Wiegman set to name her latest England squad on Tuesday, there is one name everyone is talking about - Lexi Potter. Here is why."
    },
    {
     "ref": "bbc_football#17",
     "title": "'I've lost my peace' - Cape Verde hero Vozinha on newfound fame",
     "published": "2026-09-28T12:59:30+00:00",
     "summary": "Cape Verde's World Cup hero Vozinha says he craves the \"peace and tranquillity\" of the life he led before he shot to fame."
    },
    {
     "ref": "bbc_football#18",
     "title": "FAI investigates alleged racist abuse of Idah",
     "published": "2026-09-28T12:17:49+00:00",
     "summary": "The FAI is amassing high-quality footage of the alleged incident with the aim of presenting evidence to Uefa."
    },
    {
     "ref": "bbc_football#19",
     "title": "Bellamy sure Wales belong as Haaland threat looms",
     "published": "2026-09-28T12:08:16+00:00",
     "summary": "Craig Bellamy expects Norway to be a force for years, but insists Wales have earned the right to be in Nations League A."
    },
    {
     "ref": "bbc_football#20",
     "title": "Preston appoint Bradford boss Alexander",
     "published": "2026-09-28T10:31:06+00:00",
     "summary": "Preston North End appoint Bradford City boss Graham Alexander as their new manager."
    },
    {
     "ref": "bbc_football#21",
     "title": "Preston appoint former Scotland player Alexander",
     "published": "2026-09-28T10:31:06+00:00",
     "summary": "Preston North End appoint Bradford City boss Graham Alexander as their new manager."
    },
    {
     "ref": "bbc_football#22",
     "title": "Two players sent off for pulling rival's dreadlocks",
     "published": "2026-09-28T10:21:43+00:00",
     "summary": "Antigua and Barbuda players are red-carded for pulling Anguilla player Aedan Scipio's dreadlocks in a Concacaf Nations League game."
    },
    {
     "ref": "bbc_football#23",
     "title": "Man City rule breaches not my concern - Mancini",
     "published": "2026-09-28T09:42:03+00:00",
     "summary": "Roberto Mancini says an alleged \"double contract\" during his time as Manchester City manager is \"not my concern\"."
    },
    {
     "ref": "bbc_football#24",
     "title": "FAI unclear over possible sanctions if game not played",
     "published": "2026-09-28T09:37:09+00:00",
     "summary": "Republic of Ireland could have faced \"undetermined\" sanctions had they not played their Nations League match against Israel on Sunday, according to FAI president Paul Cooke."
    }
   ]
  },
  {
   "outlet": "ESPN NBA",
   "lang": "en",
   "items": [
    {
     "ref": "espn_nba#0",
     "title": "Grades for every NBA offseason signing: Why Warriors get a B for extending Steph Curry",
     "published": "2026-09-29T06:21:17+00:00",
     "summary": "We're grading the biggest free agent signings and extensions, including Steph's new two-year deal."
    },
    {
     "ref": "espn_nba#1",
     "title": "Grading the Dorian Finney-Smith trade (and more): Which team gets a B-?",
     "published": "2026-09-29T06:21:17+00:00",
     "summary": "We're grading the biggest NBA trades of the offseason, including the Atlanta deal that sent Hield and Nembhard to Charlotte for Finney-Smith."
    },
    {
     "ref": "espn_nba#2",
     "title": "NBA media day 2026: LeBron, Jaylen in Philly, Jimmy Butler's earrings top highlights",
     "published": "2026-09-29T03:25:37+00:00",
     "summary": "The 2026-27 NBA season is approaching with media days ending Monday. Here are the top scenes from around the league."
    },
    {
     "ref": "espn_nba#3",
     "title": "NBA media day buzz: Latest news, updates and intel",
     "published": "2026-09-29T03:25:37+00:00",
     "summary": "Here are the deals, trades and buzz across the NBA, including intel from Monday's media days."
    },
    {
     "ref": "espn_nba#4",
     "title": "Tatum 'comfortable' leading new-look Celtics post-Brown trade",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Jayson Tatum says he's thankful for his time with Jaylen Brown and the success they shared but feels comfortable leading the new-look Celtics this season."
    },
    {
     "ref": "espn_nba#5",
     "title": "Wizards' Davis to wait on extension talks until next season",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Anthony Davis plans on finishing the season with the Washington Wizards before deciding on any potential contract extension, he said Monday."
    },
    {
     "ref": "espn_nba#6",
     "title": "Ahead of 8th season, Zion 'not where I want to be'",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Zion Williamson smiled politely, but kept his answer brief when asked how he would summarize his first seven years as an NBA player, saying \"I'm not where I need to be.\""
    },
    {
     "ref": "espn_nba#7",
     "title": "OKC taking same approach to season, not focused on Spurs",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "The Oklahoma City Thunder said they are taking the same approach to the season and are not focused on Spurs after being eliminated by San Antonio in last year's Western Conference Finals."
    },
    {
     "ref": "espn_nba#8",
     "title": "KAT itching for Knicks extension: 'I want to play here'",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Karl-Anthony Towns said he wants to get a contract extension done with the Knicks as he has one year and a player option left on his current deal."
    },
    {
     "ref": "espn_nba#9",
     "title": "Clippers apologize to fans, vow to move past Kawhi investigation",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "The LA Clippers opened media day on Monday by apologizing to fans in the wake of an NBA salary cap circumvention investigation that levied stiff penalties on the organization."
    },
    {
     "ref": "espn_nba#10",
     "title": "Haliburton 'ready to go' as Pacers aim to bounce back from gap year",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Pacers star guard Tyrese Haliburton says he won't have any restrictions as he returns from the torn Achilles that has kept him off the court for more than a year."
    },
    {
     "ref": "espn_nba#11",
     "title": "Jokic leaves no doubt on Nuggets future, says he will re-sign",
     "published": "2026-09-29T02:03:07+00:00",
     "summary": "Nikola Jokic left little doubt that he plans to be back in Denver at least next season after saying he plans to sign his extension when it's offered next summer."
    },
    {
     "ref": "espn_nba#12",
     "title": "76ers say 'sacrifice' key to success after offseason additions",
     "published": "2026-09-29T02:02:18+00:00",
     "summary": "The 76ers say they are comfortable with making sacrifices for the benefit of the team after adding LeBron James and Jaylen Brown in the offseason."
    },
    {
     "ref": "espn_nba#13",
     "title": "💰 Flagg's 1-of-1 rookie debut patch card sells for record $8.04M",
     "published": "2026-09-29T02:02:18+00:00",
     "summary": "The card was sold in early Friday morning at 2 a.m. ET."
    },
    {
     "ref": "espn_nba#14",
     "title": "LeBron envisioned joining Knicks but nixed idea after historic title",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "LeBron James told ESPN that he envisioned joining the Knicks as a free agent this summer but nixed the idea after New York won the NBA title."
    },
    {
     "ref": "espn_nba#15",
     "title": "Bronny on LeBron's Lakers exit: 'He's got his own path'",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "Bronny James said he hasn't spoken much to his father, LeBron, about the decision to leave the Lakers this summer, but said he's excited to face him on Christmas."
    },
    {
     "ref": "espn_nba#16",
     "title": "Edwards happy to cede PG duties to Ball, to focus on defense",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "Anthony Edwards says he's happy with the moves Minnesota made over the summer and is excited to continue to develop chemistry with LaMelo Ball."
    },
    {
     "ref": "espn_nba#17",
     "title": "Lillard says Blazers' crowded backcourt 'will work itself out'",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "Damian Lillard said he's not worried about balancing a backcourt that includes himself, Ja Morant, Jrue Holiday and Scoot Henderson, saying it \"will work itself out.\""
    },
    {
     "ref": "espn_nba#18",
     "title": "Clippers' Ingram, key return in Kawhi trade, out after Achilles, heel surgery",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "Brandon Ingram, a key part of the Clippers' return in their trade of Kawhi Leonard, will not be available to start the 2026-27 season as he recovers from a surgery that addressed a right heel injury and partially torn Achilles tendon."
    },
    {
     "ref": "espn_nba#19",
     "title": "Sources: Hornets waiving recently acquired guard Dillingham",
     "published": "2026-09-29T02:02:17+00:00",
     "summary": "The Charlotte Hornets are waiving guard Rob Dillingham one day after acquiring the former No. 8 pick, sources told ESPN."
    },
    {
     "ref": "espn_nba#20",
     "title": "The NBA's 8 most intriguing newcomers, ranked",
     "published": "2026-09-28T22:15:31+00:00",
     "summary": "A full roster's worth of stars changed teams this past summer. The storylines surrounding eight will help define the league's journey to spring."
    },
    {
     "ref": "espn_nba#21",
     "title": "From 'emo Jimmy' to ombre faux locs: Jimmy Butler's media day looks through the years",
     "published": "2026-09-28T15:08:40+00:00",
     "summary": "Jimmy Butler has made headlines at past media days for his unique looks. Will Butler arrive looking different this year?"
    },
    {
     "ref": "espn_nba#22",
     "title": "Wizards' No. 1 pick AJ Dybantsa named cover athlete of 2026 Topps Flagship Basketball",
     "published": "2026-09-28T15:08:39+00:00",
     "summary": "The Washington Wizards star began collecting cards this year and will be the cover athlete of 2026 Topps Flagship Basketball."
    },
    {
     "ref": "espn_nba#23",
     "title": "10-team roto/category league mock draft: Who went No. 1?",
     "published": "2026-09-28T12:23:23+00:00",
     "summary": "Our 10-team, roto/category fantasy basketball mock draft featured Nikola Jokic and Victor Wembanyama as the first players selected."
    },
    {
     "ref": "espn_nba#24",
     "title": "Sleepers, breakouts and busts for 2026-27",
     "published": "2026-09-28T12:23:23+00:00",
     "summary": "Which fantasy basketball players are going to exceed expectations in 2026-27? Who will disappoint? Who is ready to take things to an elite level? Our experts list their picks."
    }
   ]
  },
  {
   "outlet": "ESPN FC",
   "lang": "en",
   "items": [
    {
     "ref": "espn_soccer#0",
     "title": "Man City CEO: Legal battle with PL not over",
     "published": "2026-09-29T07:23:38+00:00",
     "summary": "Manchester City chief executive Ferran Soriano has told his fellow European club bosses the already lengthy legal battle with the Premier League will take \"a lot more time\" to conclude."
    },
    {
     "ref": "espn_soccer#1",
     "title": "FIFA agrees in principle to federation payments from WC windfall",
     "published": "2026-09-29T07:23:38+00:00",
     "summary": "FIFA president Gianni Infantino has come out in favor of a tentative proposal from UEFA and Concacaf that FIFA distributes funds to member associations as a result of record revenues from this summer's World Cup."
    },
    {
     "ref": "espn_soccer#2",
     "title": "Georgia peach and red: NWSL expansion club Atlanta City unveils new colors",
     "published": "2026-09-29T07:23:38+00:00",
     "summary": "Atlanta City FC will be the name of Atlanta's forthcoming NWSL expansion team that will begin play in 2028."
    },
    {
     "ref": "espn_soccer#3",
     "title": "🏆 How would a 64-team World Cup work?",
     "published": "2026-09-29T07:23:38+00:00",
     "summary": "The 2026 World Cup was the first to feature 48 teams, and 2030 could see the field swell to 64, but just how feasible is a tournament that size?"
    },
    {
     "ref": "espn_soccer#4",
     "title": "Poch: No punishment for Man City can repair severe damage done",
     "published": "2026-09-29T07:23:37+00:00",
     "summary": "United States manager, Mauricio Pochettino said Monday that it was \"very difficult\" to know what punishment Manchester City should receive for breaking the Premier League's financial fair play rules -- and severely damaging the competition."
    },
    {
     "ref": "espn_soccer#5",
     "title": "La famiglia: Esposito brothers make history for Italy in Türkiye rout",
     "published": "2026-09-29T07:23:37+00:00",
     "summary": "Pio Esposito was joined by older brother Sebastiano in the starting lineup for Italy's Nations League match at Türkiye on Monday, marking the first time two brothers have started for the Azzurri in more than a century."
    },
    {
     "ref": "espn_soccer#6",
     "title": "Zidane celebrates Olise's masterpiece: 'I wanted to be part of it'",
     "published": "2026-09-29T07:23:37+00:00",
     "summary": "Michael Olise came off the bench to deliver a breathtaking late masterpiece, lifting France past Belgium in the UEFA Nations League."
    },
    {
     "ref": "espn_soccer#7",
     "title": "Dorgu returns to United after hamstring injury",
     "published": "2026-09-29T07:23:37+00:00",
     "summary": "Patrick Dorgu has returned to Manchester United for assessment after suffering an injury on international duty with Denmark."
    },
    {
     "ref": "espn_soccer#8",
     "title": "Javier Aguirre takes over at Valencia after rejecting four offers",
     "published": "2026-09-29T07:23:37+00:00",
     "summary": "Former Mexico coach Javier Aguirre said he turned down four other jobs before accepting the challenge to return to LaLiga with Valencia."
    },
    {
     "ref": "espn_soccer#9",
     "title": "Man City verdict will leave a stain and stench on a Premier League era",
     "published": "2026-09-29T04:37:37+00:00",
     "summary": "Manchester City are expected to be found guilty of almost all 115 financial charges against them. It means an era of English soccer is now tarnished with multiple asterisks."
    },
    {
     "ref": "espn_soccer#10",
     "title": "Will anyone stop Infantino? FIFA president's confident U20 World Cup cameo says otherwise",
     "published": "2026-09-29T02:03:27+00:00",
     "summary": "Under fire from UEFA, Gianni Infantino is back to business as usual and inching closer to reelection as FIFA president."
    },
    {
     "ref": "espn_soccer#11",
     "title": "JJ Gabriel and the 'nightmare' battle for Premier League academy talent",
     "published": "2026-09-28T22:48:03+00:00",
     "summary": "In the fiercely competitive race for the best Premier League academy players, JJ Gabriel won't be the last young talent at the center of a transfer tug-of-war."
    },
    {
     "ref": "espn_soccer#12",
     "title": "Transfer rumors, news: Arsenal, Tottenham eye move for Leverkusen's Maza",
     "published": "2026-09-28T22:48:02+00:00",
     "summary": "Both Arsenal and Tottenham Hotspur are competing to sign Bayer Leverkusen's Ibrahim Maza. Transfer Talk has the latest."
    },
    {
     "ref": "espn_soccer#13",
     "title": "MLS Power Rankings: No Cavan? No problem for surging Philadelphia",
     "published": "2026-09-28T21:41:54+00:00",
     "summary": "Philadelphia lost three star youngsters to international duty, yet the Union continued their march toward the top of our rankings."
    },
    {
     "ref": "espn_soccer#14",
     "title": "NWSL Power Rankings: Angel City move up ahead of meeting with No. 1 Gotham",
     "published": "2026-09-28T21:41:54+00:00",
     "summary": "Angel City's win over Washington has them surging up our rankings, but can any team catch Gotham?"
    },
    {
     "ref": "espn_soccer#15",
     "title": "Goals galore! Why Barça's start to season is best in Europe's top leagues for almost 100 years",
     "published": "2026-09-28T14:57:57+00:00",
     "summary": "Barcelona have begun the season on fire, scoring 36 goals in their first eight matches. How does that compare to the best starts for all time? (Spoiler: Very well.)"
    },
    {
     "ref": "espn_soccer#16",
     "title": "Who's the striker leading Raphinha, Mbappé, Haaland in race for European Golden Shoe?",
     "published": "2026-09-28T14:57:57+00:00",
     "summary": "Raphinha may have started the season on fire, but there's a little-known striker who is ahead of the Barça star in the race for the European Golden Shoe."
    },
    {
     "ref": "espn_soccer#17",
     "title": "Man City vs. Premier League: 115 financial charges explained",
     "published": "2026-09-28T09:00:56+00:00",
     "summary": "The sporting world is waiting for a resolution to the hearings on Man City's charges for allegedly breaching the Premier League's financial rules. Here's what we know, and what might come next."
    },
    {
     "ref": "espn_soccer#18",
     "title": "There's a palpable sense of excitement surrounding the USMNT's young guns",
     "published": "2026-09-28T03:26:21+00:00",
     "summary": "The 2030 World Cup may be a long way away but, after Mauricio Pochettino handed out 11 debuts on Saturday, the sense of excitement around the USMNT camp is hard to ignore."
    },
    {
     "ref": "espn_soccer#19",
     "title": "USMNT player ratings: Ellis gets 9, Berhalter 10 in Peru rout",
     "published": "2026-09-28T03:26:21+00:00",
     "summary": "Justin Ellis and Sebastian Berhalter shone as Mauricio Pochettino unveiled a new-look USMNT."
    },
    {
     "ref": "espn_soccer#20",
     "title": "From WSL faves to afterthought: Arsenal's season already looks doomed after Chelsea loss",
     "published": "2026-09-27T20:32:13+00:00",
     "summary": "Arsenal were supposed to be frontunners for the WSL title, but their slow start to the season is raising alarms."
    },
    {
     "ref": "espn_soccer#21",
     "title": "Top 50 USMNT players, ranked by club performance: Which Americans are in hot form?",
     "published": "2026-09-27T16:34:32+00:00",
     "summary": "Who are the best Americans as the new World Cup cycle begins? We rank USMNT players on club form: ESPN's Player Performance Index returns."
    }
   ]
  },
  {
   "outlet": "Google News — Inter Miami",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_inter_miami#0",
     "title": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne - Goal.com",
     "published": "2026-09-29T06:23:56+00:00",
     "summary": "\"An exceptional explosion with Inter Miami\": Messi two steps away from a historic throne Goal.com"
    },
    {
     "ref": "gnews_inter_miami#1",
     "title": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports - NDTV Sports",
     "published": "2026-09-29T04:38:39+00:00",
     "summary": "Football Lionel Messi Scores 'Impossible Free-Kick' For Inter Miami, Internet In Disbelief. Watch - NDTV Sports NDTV Sports"
    },
    {
     "ref": "gnews_inter_miami#2",
     "title": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head - BBC",
     "published": "2026-09-29T03:16:03+00:00",
     "summary": "Columbus Crew vs Inter Miami: Major League Soccer stats & head-to-head BBC"
    },
    {
     "ref": "gnews_inter_miami#3",
     "title": "Lionel Messi Recreates Viral World Cup Stare Before Scoring Wild Free Kick - Complex",
     "published": "2026-09-29T02:06:59+00:00",
     "summary": "Lionel Messi Recreates Viral World Cup Stare Before Scoring Wild Free Kick Complex"
    },
    {
     "ref": "gnews_inter_miami#4",
     "title": "Barcelona pay tribute to Lionel Messi after stunning free-kick goal for Inter Miami - Barca Universal",
     "published": "2026-09-29T01:32:12+00:00",
     "summary": "Barcelona pay tribute to Lionel Messi after stunning free-kick goal for Inter Miami Barca Universal"
    },
    {
     "ref": "gnews_inter_miami#5",
     "title": "Messi Closes in on Marcelinho’s Free-Kick Record - Real Broadcasting Network",
     "published": "2026-09-28T22:46:50+00:00",
     "summary": "Messi Closes in on Marcelinho’s Free-Kick Record Real Broadcasting Network"
    },
    {
     "ref": "gnews_inter_miami#6",
     "title": "Defeat for Inter Miami at the hands of Columbus Crew - prostinternational.com",
     "published": "2026-09-28T19:45:40+00:00",
     "summary": "Defeat for Inter Miami at the hands of Columbus Crew prostinternational.com"
    },
    {
     "ref": "gnews_inter_miami#7",
     "title": "GALLERY: Columbus Crew downs Lionel Messi and Inter Miami - Massive Report",
     "published": "2026-09-28T18:36:31+00:00",
     "summary": "GALLERY: Columbus Crew downs Lionel Messi and Inter Miami Massive Report"
    },
    {
     "ref": "gnews_inter_miami#8",
     "title": "MLS Winners and Losers: Lionel Messi brilliance can't save Inter Miami, LAFC sack Marc Dos Santos and never count out the Seattle Sounders - Goal.com",
     "published": "2026-09-28T18:09:58+00:00",
     "summary": "MLS Winners and Losers: Lionel Messi brilliance can't save Inter Miami, LAFC sack Marc Dos Santos and never count out the Seattle Sounders Goal.com"
    },
    {
     "ref": "gnews_inter_miami#9",
     "title": "Messi scores, Miami falls - daily-sun.com",
     "published": "2026-09-28T18:00:00+00:00",
     "summary": "Messi scores, Miami falls daily-sun.com"
    },
    {
     "ref": "gnews_inter_miami#10",
     "title": "Crew Eke Out 2-1 Victory Over Inter Miami - columbusunderground.com",
     "published": "2026-09-28T17:53:34+00:00",
     "summary": "Crew Eke Out 2-1 Victory Over Inter Miami columbusunderground.com"
    },
    {
     "ref": "gnews_inter_miami#11",
     "title": "MLS Round 27 results: Nashville strengthen Supporters’ Shield push and Messi magic not enough for Miami - futbolmundial.com",
     "published": "2026-09-28T17:39:35+00:00",
     "summary": "MLS Round 27 results: Nashville strengthen Supporters’ Shield push and Messi magic not enough for Miami futbolmundial.com"
    },
    {
     "ref": "gnews_inter_miami#12",
     "title": "Lionel Messi’s Inter Miami called out by Columbus Crew coach: ‘What they do is bad for the game’ - bolavip.com",
     "published": "2026-09-28T16:20:20+00:00",
     "summary": "Lionel Messi’s Inter Miami called out by Columbus Crew coach: ‘What they do is bad for the game’ bolavip.com"
    },
    {
     "ref": "gnews_inter_miami#13",
     "title": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 - Spectrum News",
     "published": "2026-09-28T13:51:00+00:00",
     "summary": "Jamal Thiaré scores in 9th minute of stoppage time, Crew beats Inter Miami and Leo Messi 2-1 Spectrum News"
    },
    {
     "ref": "gnews_inter_miami#14",
     "title": "Columbus Crew fans gather for Messi, Inter Miami match - Spectrum News",
     "published": "2026-09-28T13:37:00+00:00",
     "summary": "Columbus Crew fans gather for Messi, Inter Miami match Spectrum News"
    },
    {
     "ref": "gnews_inter_miami#15",
     "title": "Crew stuns Inter Miami with win in stoppage time - Miami Herald",
     "published": "2026-09-28T12:25:01+00:00",
     "summary": "Crew stuns Inter Miami with win in stoppage time Miami Herald"
    },
    {
     "ref": "gnews_inter_miami#16",
     "title": "Messi Makes History But Crew Edge Miami In MLS Thriller - Evrim Ağacı",
     "published": "2026-09-28T10:15:27+00:00",
     "summary": "Messi Makes History But Crew Edge Miami In MLS Thriller Evrim Ağacı"
    },
    {
     "ref": "gnews_inter_miami#17",
     "title": "Messi scores... Columbus Crew snatch a dramatic late win against Inter Miami in MLS (Video) - صوت الإمارات",
     "published": "2026-09-28T09:12:26+00:00",
     "summary": "Messi scores... Columbus Crew snatch a dramatic late win against Inter Miami in MLS (Video) صوت الإمارات"
    },
    {
     "ref": "gnews_inter_miami#18",
     "title": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly - Goal.com",
     "published": "2026-09-28T08:16:45+00:00",
     "summary": "Inter Miami player ratings vs Columbus Crew: Lionel Messi magic not enough as Santiago Morales red card proves costly Goal.com"
    },
    {
     "ref": "gnews_inter_miami#19",
     "title": "CLBvsMIA 09-27-2026 Match Feed | MLSsoccer.com - mlssoccer.com",
     "published": "2026-09-28T08:04:35+00:00",
     "summary": "CLBvsMIA 09-27-2026 Match Feed | MLSsoccer.com mlssoccer.com"
    },
    {
     "ref": "gnews_inter_miami#20",
     "title": "Columbus Crew 2-1 Inter Miami: Messi free-kick not enough to halt winless run - FotMob",
     "published": "2026-09-28T07:43:06+00:00",
     "summary": "Columbus Crew 2-1 Inter Miami: Messi free-kick not enough to halt winless run FotMob"
    },
    {
     "ref": "gnews_inter_miami#21",
     "title": "Messi's Inter Miami contract could stretch to 2030 - Yahoo Sports",
     "published": "2026-09-28T07:15:00+00:00",
     "summary": "Messi's Inter Miami contract could stretch to 2030 Yahoo Sports"
    },
    {
     "ref": "gnews_inter_miami#22",
     "title": "Columbus Crew stun Inter Miami, Messi in 2-1 thriller decided late - The Columbus Dispatch",
     "published": "2026-09-28T07:04:05+00:00",
     "summary": "Columbus Crew stun Inter Miami, Messi in 2-1 thriller decided late The Columbus Dispatch"
    },
    {
     "ref": "gnews_inter_miami#23",
     "title": "Why does Lionel Messi’s stunning Inter Miami goal bring him closer to historic soccer records before his Argentina farewell? - beIN SPORTS",
     "published": "2026-09-28T06:52:00+00:00",
     "summary": "Why does Lionel Messi’s stunning Inter Miami goal bring him closer to historic soccer records before his Argentina farewell? beIN SPORTS"
    },
    {
     "ref": "gnews_inter_miami#24",
     "title": "Lionel Messi scores from near-impossible angle for unreal goal - ESPN",
     "published": "2026-09-28T06:34:58+00:00",
     "summary": "Lionel Messi scores from near-impossible angle for unreal goal ESPN"
    }
   ]
  },
  {
   "outlet": "Google News — Deni Avdija / Ben Saraf",
   "lang": "en",
   "items": [
    {
     "ref": "gnews_israeli_nba#0",
     "title": "Micah Nori's vision for the Blazers could make Shaedon Sharpe the odd man out - Rip City Project",
     "published": "2026-09-29T05:13:53+00:00",
     "summary": "Micah Nori's vision for the Blazers could make Shaedon Sharpe the odd man out Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#1",
     "title": "Blazers optimistic that roster balance will ‘work itself out’ as season looms - Oregon Public Broadcasting - OPB",
     "published": "2026-09-29T00:26:05+00:00",
     "summary": "Blazers optimistic that roster balance will ‘work itself out’ as season looms Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#2",
     "title": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day - Sports Illustrated",
     "published": "2026-09-29T00:00:00+00:00",
     "summary": "Blazers Injury Update: What Sharpe, Lillard Said at Media Day Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#3",
     "title": "Blazers need to start treating Deni Avdija like the face of the franchise - Rip City Project",
     "published": "2026-09-28T23:53:48+00:00",
     "summary": "Blazers need to start treating Deni Avdija like the face of the franchise Rip City Project"
    },
    {
     "ref": "gnews_israeli_nba#4",
     "title": "Blazers Media Day - Oregon Public Broadcasting - OPB",
     "published": "2026-09-28T23:26:31+00:00",
     "summary": "Blazers Media Day Oregon Public Broadcasting - OPB"
    },
    {
     "ref": "gnews_israeli_nba#5",
     "title": "Deni Avdija (back) ’99.9 percent’ going into camp - NBC Sports",
     "published": "2026-09-28T22:07:14+00:00",
     "summary": "Deni Avdija (back) ’99.9 percent’ going into camp NBC Sports"
    },
    {
     "ref": "gnews_israeli_nba#6",
     "title": "Nets Media Day Basketball - Idaho State Journal",
     "published": "2026-09-28T21:45:25+00:00",
     "summary": "Nets Media Day Basketball Idaho State Journal"
    },
    {
     "ref": "gnews_israeli_nba#7",
     "title": "Deni Avdija | 2026‑27 Media Day - NBA.com",
     "published": "2026-09-28T18:59:20+00:00",
     "summary": "Deni Avdija | 2026‑27 Media Day NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#8",
     "title": "Trail Blazers Media Day: Deni Avdija Says Back is OK - Blazer's Edge",
     "published": "2026-09-28T18:40:37+00:00",
     "summary": "Trail Blazers Media Day: Deni Avdija Says Back is OK Blazer's Edge"
    },
    {
     "ref": "gnews_israeli_nba#9",
     "title": "Deni Avdija on contract extension talks and future: \"I … - Yahoo Sports",
     "published": "2026-09-28T18:39:57+00:00",
     "summary": "Deni Avdija on contract extension talks and future: \"I … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#10",
     "title": "Deni Avdija on ownership/arena drama: \"I love the city … - Yahoo Sports",
     "published": "2026-09-28T18:13:55+00:00",
     "summary": "Deni Avdija on ownership/arena drama: \"I love the city … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#11",
     "title": "Deni Avdija | Portland Trail Blazers Media Day interviews - KGW",
     "published": "2026-09-28T18:13:00+00:00",
     "summary": "Deni Avdija | Portland Trail Blazers Media Day interviews KGW"
    },
    {
     "ref": "gnews_israeli_nba#12",
     "title": "Deni Avdija says he's 99.9% recovered from back injuries - Yahoo Sports",
     "published": "2026-09-28T18:09:59+00:00",
     "summary": "Deni Avdija says he's 99.9% recovered from back injuries Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#13",
     "title": "Damian Lillard: \"If I'm advancing the ball and I'm … - Yahoo Sports",
     "published": "2026-09-28T17:02:56+00:00",
     "summary": "Damian Lillard: \"If I'm advancing the ball and I'm … Yahoo Sports"
    },
    {
     "ref": "gnews_israeli_nba#14",
     "title": "Blazers Media Day Tracker: Quotes, Notes, Injury News and More - Sports Illustrated",
     "published": "2026-09-28T15:10:18+00:00",
     "summary": "Blazers Media Day Tracker: Quotes, Notes, Injury News and More Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#15",
     "title": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari - Ynetnews",
     "published": "2026-09-28T10:02:13+00:00",
     "summary": "NBA star Deni Avdija gets a namesake: a Persian leopard at Ramat Gan Safari Ynetnews"
    },
    {
     "ref": "gnews_israeli_nba#16",
     "title": "Safari names new Persian leopard Deni after NBA's Avdija - JFeed",
     "published": "2026-09-28T09:35:00+00:00",
     "summary": "Safari names new Persian leopard Deni after NBA's Avdija JFeed"
    },
    {
     "ref": "gnews_israeli_nba#17",
     "title": "Trail Blazers Announce 2026-27 Training Camp Roster - NBA.com",
     "published": "2026-09-27T22:06:00+00:00",
     "summary": "Trail Blazers Announce 2026-27 Training Camp Roster NBA.com"
    },
    {
     "ref": "gnews_israeli_nba#18",
     "title": "Breaking down Nets roster: Where every player stands before season - New York Post",
     "published": "2026-09-27T04:12:00+00:00",
     "summary": "Breaking down Nets roster: Where every player stands before season New York Post"
    },
    {
     "ref": "gnews_israeli_nba#19",
     "title": "Bulls aquire Buddy Hield from Hornets in late-offseason twist - New York Post",
     "published": "2026-09-27T01:40:00+00:00",
     "summary": "Bulls aquire Buddy Hield from Hornets in late-offseason twist New York Post"
    },
    {
     "ref": "gnews_israeli_nba#20",
     "title": "What to Expect From Blazers' Deni Avdija in 2026-2027 - Sports Illustrated",
     "published": "2026-09-26T19:00:00+00:00",
     "summary": "What to Expect From Blazers' Deni Avdija in 2026-2027 Sports Illustrated"
    },
    {
     "ref": "gnews_israeli_nba#21",
     "title": "Deciding The Number One Option For The Blazers - Yahoo Sports",
     "published": "2026-09-26T13:09:00+00:00",
     "summary": "Deciding The Number One Option For The Blazers Yahoo Sports"
    }
   ]
  }
 ]
}
</input>