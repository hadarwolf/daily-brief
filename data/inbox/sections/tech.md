Write the Tech & AI section: 2-3 stories.

- The reader studies Computer Science and Electrical Engineering. Choose what a sharp CS/EE student should know about: AI models and research, chips and hardware, software and security, big-tech strategy, and Israeli tech (startups, funding, exits).
- Prefer substance over gadgets. Skip product reviews, deals and phone rumors unless they signal something bigger.
- Hacker News points show what engineers find interesting, not how important a story is.
- Explain the technical idea behind each story in plain terms: what it is, how it works, and why it matters, the way a good senior engineer would explain it to a student. Define a technical term the first time you use it.
- Use kind "news" for straight news and "analysis" when the story is about what a development means.
- Leave pure stock moves and earnings to the Business section unless the technology itself is the story.

This section opens in English by default, so make the English version your best writing.

Output: write `drafts/tech.json` matching `schemas/tech.schema.json`.

<input>
{
 "news_feeds": [
  {
   "outlet": "Ars Technica",
   "lang": "en",
   "items": [
    {
     "ref": "ars_technica#0",
     "title": "GLP-1 drugs could have a surprisingly large environmental payoff",
     "published": "2026-11-22T12:07:41+00:00",
     "summary": "GLP-1 drugs could cut food demand enough to free farmland larger than Italy."
    },
    {
     "ref": "ars_technica#1",
     "title": "Review: Godzilla Minus Zero joins the list of truly stellar sequels",
     "published": "2026-11-21T22:12:41+00:00",
     "summary": "Director Takashi Yamazaki ups the ante by pitting Godzilla against one of the monster's greatest foes"
    },
    {
     "ref": "ars_technica#2",
     "title": "“Race realism” isn’t realistic—and it isn’t good science",
     "published": "2026-11-21T12:01:13+00:00",
     "summary": "Modern genetics does not support claims of innate racial differences in intelligence."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "XNU Linux: Full OS X GUI Userspace on Linux",
     "published": "2026-11-23T03:49:24+00:00",
     "summary": "Article URL: https://github.com/AFK-surf/xnulinux Comments URL: https://news.ycombinator.com/item?id=50607261 Points: 339 # Comments: 158"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Free alternative TV network built from the Internet Archive's forgotten videos",
     "published": "2026-11-23T01:13:51+00:00",
     "summary": "Article URL: https://spelunkr.tv Comments URL: https://news.ycombinator.com/item?id=50606192 Points: 539 # Comments: 86"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Progress map for the Lean formalization of Alessandro Masullo's manuscript",
     "published": "2026-11-22T23:12:10+00:00",
     "summary": "Article URL: https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3 Comments URL: https://news.ycombinator.com/item?id=50605045 Points: 236 # Comments: 173"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "GL.iNet Security Notice 2026-11-20",
     "published": "2026-11-22T23:06:37+00:00",
     "summary": "Article URL: https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20 Comments URL: https://news.ycombinator.com/item?id=50604988 Points: 208 # Comments: 97"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth",
     "published": "2026-11-22T21:01:16+00:00",
     "summary": "Article URL: https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth Comments URL: https://news.ycombinator.com/item?id=50603845 Points: 524 # Comments: 222"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "A miniature San Francisco with live buses, planes and boats",
     "published": "2026-11-22T20:33:23+00:00",
     "summary": "Article URL: https://smallsf.com/ Comments URL: https://news.ycombinator.com/item?id=50603589 Points: 280 # Comments: 93"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Assume People Are Not Interested in Your Blog Post",
     "published": "2026-11-22T19:41:30+00:00",
     "summary": "Article URL: https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/ Comments URL: https://news.ycombinator.com/item?id=50603143 Points: 205 # Comments: 105"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "What Happened to Silicon Valley?",
     "published": "2026-11-22T19:20:15+00:00",
     "summary": "Article URL: https://www.oreilly.com/radar/what-happened-to-silicon-valley/ Comments URL: https://news.ycombinator.com/item?id=50602947 Points: 665 # Comments: 350"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife",
     "published": "2026-11-22T19:10:34+00:00",
     "summary": "Article URL: https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife Comments URL: https://news.ycombinator.com/item?id=50602843 Points: 508 # Comments: 260"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Perplexity and Intelligence",
     "published": "2026-11-22T17:06:27+00:00",
     "summary": "Article URL: https://openai.com/index/perplexity-and-intelligence/ Comments URL: https://news.ycombinator.com/item?id=50601525 Points: 592 # Comments: 402"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Show HN: I built a game where you are an LLM's subagent",
     "published": "2026-11-22T13:56:58+00:00",
     "summary": "Article URL: https://github.com/gulivan/worker755 Comments URL: https://news.ycombinator.com/item?id=50599762 Points: 320 # Comments: 78"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Masullo on the Riemann Hypothesis",
     "published": "2026-11-22T10:59:56+00:00",
     "summary": "Article URL: https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/ Comments URL: https://news.ycombinator.com/item?id=50598441 Points: 231 # Comments: 199"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
     "published": "2026-11-22T04:04:56+00:00",
     "summary": "Article URL: https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/ Comments URL: https://news.ycombinator.com/item?id=50596133 Points: 1305 # Comments: 705"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "I Don’t Trust Visual Recordings Anymore. But One Day I Will Again",
     "published": "2026-11-20T14:00:03+00:00",
     "summary": "In March of this year, a flurry of emails and text messages from a half dozen reporters around the world disrupted my quiet Saturday morning. An Iranian news agency had aired a week-old video of what appeared to be a U.S.-made Tomahawk missile hitting a school. News reports claimed that the strike killed more than 175 people, most of them children. The U.S. president and military denied responsibi"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Community-Focused Academic Brings AI Tools to Colorado Farmers",
     "published": "2026-11-19T19:00:02+00:00",
     "summary": "Many farmers and ranchers in eastern Colorado are curious about artificial intelligence, but they don’t have a local tech-savvy person to show them how to use it. Xue “Alice” Dong has made that her job. Dong, an IEEE senior member, is an extension regional specialist with the Colorado State University Extension , CSU’s outreach arm. She works in Logan County and serves a 10-county farming area in "
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Why a Computer Scientist Thinks Superintelligence Won’t Happen",
     "published": "2026-11-19T12:00:03+00:00",
     "summary": "Many people were caught off guard this past summer when employees of one of the world’s leading AI companies began casually debating whether their products would lead to human extinction. It started when Anthropic researcher Jacob Coxon announced his resignation, warning that his employer and OpenAI were “racing straight to self-improving superintelligence and gambling with our lives.” Evan Hubing"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Build a Personal Brand to Help Employers Find You",
     "published": "2026-11-18T17:33:26+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! In one year, the number of developers working for themselves has more than doubled. Stack Overflow’s annual survey of more than 30,000 developers sho"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "IEEE Celebrates 10 Years of Incorporating Ethics Into AI Systems",
     "published": "2026-11-17T19:00:03+00:00",
     "summary": "Policymakers, technologists, and members of the public have raised concerns about the harm AI’s rapid advancement might cause to society. Their concerns include bias, data privacy violations, the spread of misinformation, and losing control of AI agents. Those issues are relatively new to many people, but the IEEE Standards Association has been working for the past decade on ways to prioritize the"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "AI Is Giving Optical Computing Another Shot",
     "published": "2026-11-17T14:00:03+00:00",
     "summary": "The idea of computing with light has been around for over 70 years, but until recently it’s remained largely in the realm of research. Over the past few years, though, optical computing has emerged as a fast-growing industry: Market valuation of companies in this sector now totals US $2.22 billion, up from $0.4 billion in 2022. One projection suggests that the market will continue to grow exponent"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "Understand How Satellite Links Shape IoT Device Design and Testing",
     "published": "2026-11-17T11:00:04+00:00",
     "summary": "How 3GPP Releases 15, 16, and 17 brought satellite access into 5G NR, NB-IoT, and eMTC. Why satellite links suit IoT devices that send small, infrequent, and delay-tolerant messages. Where non-terrestrial networks (NTN) add value, including asset tracking, agriculture, public safety, and offshore operations. How power efficiency, RF signaling, and antenna design shape satellite-connected device de"
    },
    {
     "ref": "ieee_spectrum#7",
     "title": "Can Robots Bring Stroke Surgery to Remote Hospitals?",
     "published": "2026-11-16T14:00:02+00:00",
     "summary": "I am practicing brain surgery on a patient lying 6 meters away, out of my sight and reach. I press a foot pedal, activating the controller in my hand, and carefully steer a thin flexible tube called a catheter up through the patient’s blood vessels. I head for what I believe to be the brain, tracking my progress on the live X-ray feed. As I imagine finding a blood clot, David Bell , the surgeon se"
    },
    {
     "ref": "ieee_spectrum#8",
     "title": "Advanced Metrology for Defect Detection, Tool Health, and Semiconductor Yield Enhancement",
     "published": "2026-11-16T11:00:03+00:00",
     "summary": "In advanced semiconductor manufacturing, small defects can have a large effect on yield. Thin film deposition tools must stay stable and qualified. Process drift must be caught early. When a defect does appear, engineers need to know where it came from and how it affects device performance. This webinar shows how in-line inspection and offline characterization combine into one workflow, from tool "
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The most misunderstood graph in AI just got a major update",
     "published": "2026-11-20T18:15:15+00:00",
     "summary": "A new report from the AI evaluation nonprofit METR finds that some AI capabilities are continuing to improve along an exponential trajectory—but it also indicates that models aren’t quite as good at tasks that require judgment as they are at coding. The report is an update to the organization’s time horizon plot, which was widely…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The Download: inside the quest to make our minds immortal",
     "published": "2026-11-20T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. What we learned when our Roundtables explored the quest to make minds immortal To preserve our sense of self, some scientists are working on ways to keep our brains going—even beyond…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Select Styling Specimens",
     "published": "2026-11-22T19:45:06+00:00",
     "summary": "Tool: Select Styling Specimens I got frustrated at how HTML <select> boxes default to looking different in different browsers, and are (I think) quite ugly in Chrome: So I had Claude Fable 5.2 build me this page showing all of the ways they can be styled: Build an HTML page that shows all of the ways a select box can be styled, I plan to take screenshots in every desktop and mobile browser After s"
    },
    {
     "ref": "simon_willison#1",
     "title": "Muru",
     "published": "2026-11-21T23:56:28+00:00",
     "summary": "Muru Graham Dumpleton started mod_wsgi 20 years ago, and has been thinking about the ideal way to serve Python web applications in production ever since. Muru is his new, AI-assisted Rust server that aims to provide the best possible tools for running ASGI and WSGI Python apps both in development and production. As he did with wrapture , he's been publishing an extraordinarily detailed account of "
    },
    {
     "ref": "simon_willison#2",
     "title": "Quoting Ravi Vakil",
     "published": "2026-11-20T19:21:49+00:00",
     "summary": "Alessandro Masullo has a proposed proof of [Generalized Riemann Hypothesis], and Brian Conrad has been looking closely at it for months and gave extensive feedback which is being incorporated, and it is so far looking good. It is all human, with no AI. The hope was to bring Alessandro to Stanford for a year to polish the writing and then announce it after running it by enough people. Now it seems "
    },
    {
     "ref": "simon_willison#3",
     "title": "Quoting Levent Alpöge",
     "published": "2026-11-20T16:30:48+00:00",
     "summary": "I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis. In fact, the method easily extends much further, resolving the so-called Generalized Riemann Hypothesis, and I expect, with more time, the Extended Riemann Hypothesis too. Claude and I have also formalized the arguments without assumptions. It is natural to feel that this is an end, in my case a loss of a principa"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Kodak’s next collectible is a tiny digital photo frame that doubles as a tracker",
     "published": "2026-11-23T03:00:00+00:00",
     "summary": "After expanding its Charmera collection with a Millennium Edition featuring Y2K-inspired designs earlier this year, Reto's follow-up to its tiny Kodak camera is an equally small digital photo frame you can use to display your shots. But while the Charmera's usefulness stopped at snapping grainy photos and terrible videos, the Kodak SlideTag goes one step […]"
    },
    {
     "ref": "the_verge#1",
     "title": "We haven’t seen the last of the major tech outages",
     "published": "2026-11-22T22:48:02+00:00",
     "summary": "Over the last week or so, we have seen a nationwide FAA ground stop, a multi-day Outlook outage that brought entire companies to a standstill, and a banking outage at JPMorgan Chase. But the consensus is that there are more to come. Director of National Intelligence Jay Clayton told CNN: \"The American people should be […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Delta flights in and out of Atlanta delayed due to system outage",
     "published": "2026-11-22T17:46:44+00:00",
     "summary": "All Delta flights in and out of Atlanta are facing significant delays on Sunday due to a problem with the system that calculates a plane's weight and balance. Hartsfield-Jackson Atlanta International Airport is Delta's largest hub and one of the busiest airports in the world. While only Delta is impacted at the moment, disruptions at […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Binding of Isaac developer removes AI music from Repentance Plus",
     "published": "2026-11-22T17:25:20+00:00",
     "summary": "The Binding of Isaac: Repentance Plus has spent the last few days getting review-bombed on Steam after it was discovered that a particular segment of the game used AI music. Reddit user ShweetsStuff discovered the songs used during a Grand Theft Auto-themed section. They found several audio files with Suno metadata that pointed back to […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Some of our favorite Switch 2 games are cheaper through Black Friday",
     "published": "2026-11-22T17:00:00+00:00",
     "summary": "Black Friday is a great time to expand your game library because it’s a chance to catch deals that aren’t normally happening throughout the year. That’s true for Nintendo Switch 2 games, as well. In addition to a $50 off sale on one of its console bundles, Nintendo is also knocking $20 off some of […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Sheherazaad’s Khudgarzi is gorgeous, ‘genre-chaotic’ South Asian folk",
     "published": "2026-11-22T16:33:29+00:00",
     "summary": "Sheherazaad started making ripples in the music world a few years ago with her EP Qasr, which was produced by Grammy Award winner Arooj Aftab. Now she's back with Khudgarzi, her reverb-drenched folk-noir debut LP that's primarily sung in Urdu. The instrumentation on Khudgarzi draws on traditional South Asian music, including Carnatic and Hindustani styles, […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Protesters storm Meta offices in India",
     "published": "2026-11-22T15:15:07+00:00",
     "summary": "Members of the opposition Congress party protested outside Meta's offices in Delhi on Friday and appear to have entered the building in a video shared by CNN. Members of the party's youth wing are demanding the company restore accounts of party leaders and warned of more protests to come. The Congress party has criticized Meta […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Nintendo’s Switch 2 console is $50 off for Black Friday",
     "published": "2026-11-22T14:00:00+00:00",
     "summary": "Those hoping to save some cash on a Nintendo Switch 2 can do so starting today, November 22nd, through Saturday, December 5th, giving you plenty of time to think about it after Cyber Monday has passed. For a limited time, Nintendo has knocked $50 off one of its two current console bundles, temporarily rolling back […]"
    },
    {
     "ref": "the_verge#8",
     "title": "‘The show is starting soon. Please turn on your headphones.’",
     "published": "2026-11-22T14:00:00+00:00",
     "summary": "Up a few concrete steps and through the front door of a 200-year-old row house in New York City, I follow a crowd of people into the 178-seat SoHo Playhouse. As we filter to our seats, ushers hand each person a black drawstring bag with a pair of wired headphones connected to a small Auracast […]"
    },
    {
     "ref": "the_verge#9",
     "title": "How Tamagotchis got us hooked on digital pets",
     "published": "2026-11-22T13:15:27+00:00",
     "summary": "If you were are a kid in the late 1990s, there's a near-100 percent chance you either had a Tamagotchi or knew someone who did. The tiny digital pets came out of nowhere and became an overnight sensation, as millions of kids signed up to parent a crying, hungry, constantly dirty creature. Until they went […]"
    }
   ]
  }
 ]
}
</input>