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
     "title": "SpaceX returned its Starship rocket on Saturday—but there's a catch",
     "published": "2026-11-15T00:40:59+00:00",
     "summary": "It felt like stepping into the future."
    },
    {
     "ref": "ars_technica#1",
     "title": "James Webb telescope finds ice older than the star it orbits",
     "published": "2026-11-14T12:15:48+00:00",
     "summary": "Radiation and collisions reshape the planetary building materials."
    },
    {
     "ref": "ars_technica#2",
     "title": "Winemakers are learning that conservation can be good for business",
     "published": "2026-11-14T12:05:51+00:00",
     "summary": "Healthy soils, native plants, and fewer chemicals are helping vineyards adapt."
    },
    {
     "ref": "ars_technica#3",
     "title": "Starship flight 15 powers to orbit—setting up a possible catch on Saturday",
     "published": "2026-11-14T00:49:13+00:00",
     "summary": "One way or another, the company will get some more data on Saturday."
    },
    {
     "ref": "ars_technica#4",
     "title": "FAA has lifted its third-ever nationwide ground stop",
     "published": "2026-11-13T23:17:38+00:00",
     "summary": "Secretary of Transportation Sean Duffy blamed obsolete equipment for the outage."
    },
    {
     "ref": "ars_technica#5",
     "title": "Millions of Americans are not taking their GLP-1 drugs as prescribed",
     "published": "2026-11-13T21:59:01+00:00",
     "summary": "Cost and access barriers are pushing people to modified use and unapproved versions."
    },
    {
     "ref": "ars_technica#6",
     "title": "FAA expands AI advice to manage air traffic congestion across entire US airspace",
     "published": "2026-11-13T21:20:47+00:00",
     "summary": "Airlines praised the AI tool, but the air traffic controllers’ union wasn’t involved."
    },
    {
     "ref": "ars_technica#7",
     "title": "In elephants, the resilience of communities has its limits",
     "published": "2026-11-13T20:03:13+00:00",
     "summary": "In Sri Lanka, ecological change is shrinking a park's elephant population."
    },
    {
     "ref": "ars_technica#8",
     "title": "Kalshi ditches Trump Jr. as advisor; CEO admitted \"optics\" weren't good",
     "published": "2026-11-13T19:49:16+00:00",
     "summary": "Trump son advised Kalshi and got equity while Trump admin helped Kalshi in lawsuits."
    },
    {
     "ref": "ars_technica#9",
     "title": "OpenAI board member worries an AI \"takeover\" of society could be months away",
     "published": "2026-11-13T17:25:45+00:00",
     "summary": "Researcher traces a path from AI reward hacking to potential human extinction."
    },
    {
     "ref": "ars_technica#10",
     "title": "Windows 0-day dropped by disgruntled researcher hands hackers System rights",
     "published": "2026-11-13T16:26:32+00:00",
     "summary": "\"SignDrop\" exploit lets local users gain all-powerful System rights."
    },
    {
     "ref": "ars_technica#11",
     "title": "Microsoft’s global outage may be worse than Amazon's or CrowdStrike's, expert says",
     "published": "2026-11-13T15:26:53+00:00",
     "summary": "Governments, hospitals, courts scrambled by global Microsoft outage."
    },
    {
     "ref": "ars_technica#12",
     "title": "It's the end of the world as we know it, per a physicist's 1960 prediction",
     "published": "2026-11-13T15:09:39+00:00",
     "summary": "Heinz von Foerster thought population would grow exponentially and \"squeeze\" us all to death."
    },
    {
     "ref": "ars_technica#13",
     "title": "Screenless GPS: Slate Auto says, \"Remember the road atlas\"",
     "published": "2026-11-13T14:45:04+00:00",
     "summary": "What’s more fitting than a spiral-bound map for a bare-bones two-door pickup?"
    },
    {
     "ref": "ars_technica#14",
     "title": "Scientists warn 1.5°C climate change threshold could arrive by 2029",
     "published": "2026-11-13T14:29:15+00:00",
     "summary": "Climate action has stalled for five years as fossil fuel development keeps growing."
    },
    {
     "ref": "ars_technica#15",
     "title": "Rocket Report: Starship set for historic test flight; a century of Electron",
     "published": "2026-11-13T12:00:40+00:00",
     "summary": "\"You can simplify it as a big tank feeding engines.\""
    },
    {
     "ref": "ars_technica#16",
     "title": "Specialized’s Tarmac SL9 S-Level is built to wreck your Zone 2 ride",
     "published": "2026-11-13T11:50:38+00:00",
     "summary": "Specialized’s second-fastest bike may be the smart buy."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Nvidia deliberately kept GPU prices high through circular financing deals",
     "published": "2026-11-14T22:26:30+00:00",
     "summary": "Article URL: https://www.techspot.com/news/114558-nvidia-deliberately-kept-gpu-prices-high-through-circular.html Comments URL: https://news.ycombinator.com/item?id=50501631 Points: 263 # Comments: 144"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "SpaceX catches the Starship to end Flight 15",
     "published": "2026-11-14T21:22:24+00:00",
     "summary": "https://x.com/SpaceX/status/2121316300702056595 https://youtu.be/jHlpfNSpBmw?t=3233 Comments URL: https://news.ycombinator.com/item?id=50500963 Points: 843 # Comments: 561"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "LinkedIn, Monster take down over 1000 fake job postings after CBC investigation",
     "published": "2026-11-14T18:56:47+00:00",
     "summary": "Article URL: https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379 Comments URL: https://news.ycombinator.com/item?id=50499723 Points: 212 # Comments: 121"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "A family tree of software job titles",
     "published": "2026-11-14T17:45:19+00:00",
     "summary": "Article URL: https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/ Comments URL: https://news.ycombinator.com/item?id=50499038 Points: 228 # Comments: 112"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Lovable apps expose passport details and more than 200K private messages",
     "published": "2026-11-14T17:43:10+00:00",
     "summary": "Article URL: https://www.crissyfield.de/research/lovable-en/ Comments URL: https://news.ycombinator.com/item?id=50499017 Points: 686 # Comments: 283"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "PyPI's redesigned project pages with clearer security signals are now live",
     "published": "2026-11-14T15:40:52+00:00",
     "summary": "Article URL: https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/ Comments URL: https://news.ycombinator.com/item?id=50497892 Points: 215 # Comments: 94"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Show HN: DeepSeek V3 in ~200 lines of pure Jax",
     "published": "2026-11-14T15:04:15+00:00",
     "summary": "Article URL: https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax Comments URL: https://news.ycombinator.com/item?id=50497589 Points: 192 # Comments: 10"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Italy fines Meta $887M over Android users' data access",
     "published": "2026-11-14T13:48:06+00:00",
     "summary": "Article URL: https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/ Comments URL: https://news.ycombinator.com/item?id=50497009 Points: 353 # Comments: 240"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "KDE: The documentary [video]",
     "published": "2026-11-14T13:43:28+00:00",
     "summary": "Article URL: https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c Comments URL: https://news.ycombinator.com/item?id=50496976 Points: 401 # Comments: 87"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Advancing science and engineering with Antigravity's /teamwork",
     "published": "2026-11-14T13:20:43+00:00",
     "summary": "Article URL: https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/ Comments URL: https://news.ycombinator.com/item?id=50496811 Points: 173 # Comments: 39"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Tech companies are trying to shift the concept of privacy again",
     "published": "2026-11-14T12:45:45+00:00",
     "summary": "Article URL: https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again Comments URL: https://news.ycombinator.com/item?id=50496602 Points: 486 # Comments: 179"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Project Zero will disclose vulnerabilities 90 days after reporting",
     "published": "2026-11-14T11:13:17+00:00",
     "summary": "Article URL: https://projectzero.google/2026/11/disclosure-policy.html Comments URL: https://news.ycombinator.com/item?id=50496051 Points: 184 # Comments: 49"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "How Microcredentials Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Engineer Overhead Lines to Withstand Ice, Wind and FreezingRain",
     "published": "2026-11-13T11:00:02+00:00",
     "summary": "This White Paper explains how ice, wind and vegetation load overhead distribution lines at the same time. It shows engineers how to assess the complete line and compare resilience options. What you will learn about: How freezing rain, rime ice and wet snow add weight to conductors and change their shape in the wind. Why a moderate wind on a heavily iced line can govern design, and how galloping an"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "The Dynamo-Electric Principle: 160 Years of Powering Industry",
     "published": "2026-11-11T11:00:02+00:00",
     "summary": "This article is brought to you by Innomotics . In the annals of industrial history, few innovations have demonstrated such remarkable staying power as the dynamo-electric principle. Discovered by Werner von Siemens in 1866, this groundbreaking principle remains fundamental to modern electrical engineering more than a century and a half later – and continues to shape the technology portfolio of Inn"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Speech Processing Pioneer Bishnu Saroop Atal Dies at 93",
     "published": "2026-11-10T19:00:02+00:00",
     "summary": "Bishnu Saroop Atal Acoustics and signal processing pioneer Life Fellow, 93; died 19 August Atal was an acoustics and signal processing researcher at Bell Labs in Murray Hill, N.J., and later at AT&T ’s Shannon Laboratory, in Florham Park, N.J. His pioneering work on voice-coding techniques became the foundation for efficient, high-quality voice transmission over cellular networks. He received the "
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Catch Electronics Shock and Drop Failures Before Hardware Is Built",
     "published": "2026-11-10T11:00:02+00:00",
     "summary": "Learn how guided virtual shock and drop analysis helps engineering teams identify reliability risks before physical testing, reduce qualification iterations, optimize packaging designs, and accelerate electronics product development. What you will learn about: Why shock failures found during physical qualification are costly, and how coupled electrical, mechanical, thermal, and packaging effects m"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "AI Agents Are Testing the Limits of Zero-Trust Security",
     "published": "2026-11-09T16:25:06+00:00",
     "summary": "This article is brought to you by Queen’s University Belfast . Several teams around the globe are leveraging AI by creating a task force of agents managed by an orchestrator and creating applications to support risk assessment, client profiling, match making, and information yield with a slight overview of decision making. One of the important components for these agents is to ensure that the logs"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The Download: Silicon Valley’s blind spot and Nvidia’s chip-tracking plan",
     "published": "2026-11-13T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Silicon Valley claims to know the future. So why did it get the midterms so wrong? —Aaron Zamost, a tech communications consultant and a former executive at Square The self-styled visionaries…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "More autonomy, fewer NDAs: Volunteers have new requests for brain implant trials",
     "published": "2026-11-13T10:00:00+00:00",
     "summary": "Scientists have been working on ways to decode brain activity for decades. Teams have developed brain implants that can be used to control robotic limbs and computers, and even to “speak.” The people who volunteer for trials of those devices play a vital role in that research, and they ought to be recognized for their…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "Silicon Valley claims to know the future. So why did it get the midterms so wrong?",
     "published": "2026-11-13T10:00:00+00:00",
     "summary": "The self-styled visionaries of Silicon Valley, leaders like OpenAI chief executive Sam Altman and SpaceX boss Elon Musk, have built careers claiming to see the future. Long-term vision is currency: Meta’s Mark Zuckerberg built a 10-year road map for Facebook in 2016, and Google famously told investors before its public offering that it was unconcerned…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Nvidia privately confirmed it could track chips to fight smuggling, even as industry publicly questioned feasibility",
     "published": "2026-11-12T20:16:24+00:00",
     "summary": "Representatives from Nvidia told Illinois representative Bill Foster that it would be technically possible to implement the anti-smuggling measures called for in the Chip Security Act, Foster told MIT Technology Review in an interview on Thursday, even while an industry group claimed they were “potentially infeasible.” Foster, a Democrat who serves on the Committee on…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: COP31’s climate challenge and the quest for immortality",
     "published": "2026-11-12T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. What to know about this year’s UN climate talks Thousands of delegates, lobbyists, and journalists have gathered in Antalya, Turkey, for COP31, the annual UN climate talks. But this year’s negotiations…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "datasette-llm 0.1a11",
     "published": "2026-11-14T23:59:28+00:00",
     "summary": "Release: datasette-llm 0.1a11 datasette-llm is the intermediate plugin for Datasette that supports configuring LLMs for use with other Datasette plugins. This release adds support for OpenAI-compatible endpoints, so you can configure Datasette to use an LLM hosted anywhere that talks the OpenAI pseudo-standard web protocol. This means that if you're running local models with LM Studio or Ollama or"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-vega 0.7",
     "published": "2026-11-14T17:09:09+00:00",
     "summary": "Release: datasette-vega 0.7 A new release of Datasette's longest untouched plugin, for rendering charts (using Vega-Lite ) against data in a table or custom query. The last release was in July 2018! I finally bumped it for compatibility with the latest Datasette alphas, plus some cosmetic tweaks to make it work better with Datasette Lite . (Datasette Lite just gained the ability to run JavaScript "
    },
    {
     "ref": "simon_willison#2",
     "title": "datasette-cluster-map 0.19",
     "published": "2026-11-13T23:02:45+00:00",
     "summary": "Release: datasette-cluster-map 0.19 One of the oldest Datasette plugins, and still one of my favorites. It now works with Datasette 1.0a42, and depends on the new datasette-leaflet to ensure OpenStreetMap tiles are requested with a referrer header. Here's a map of power plants owned by California's PG&E , also demonstrating Datasette's recently redesigned facets : Tags: datasette , geospatial , op"
    },
    {
     "ref": "simon_willison#3",
     "title": "datasette-leaflet 0.3",
     "published": "2026-11-13T22:30:54+00:00",
     "summary": "Release: datasette-leaflet 0.3 OpenStreetMap have a very reasonable policy that hits to their hosted tile server should send a referrer header . Datasette table pages used the Referrer-Policy: no-referrer HTTP header, causing plugins that loaded tiles from OpenStreetMap to violate that policy. datasette-leaflet is the plugin that loads a bundled Leaflet so other Datasette plugins can depend on it."
    },
    {
     "ref": "simon_willison#4",
     "title": "llm-gemini 0.37",
     "published": "2026-11-12T22:55:19+00:00",
     "summary": "Release: llm-gemini 0.37 Google launched Gemini 4 Hydrogen today - the lowest cost member of the Gemini 4 family. It's actually not too far off the price of its much bigger siblings, Carbon and Argon. I'm finding Gemini 4's pricing really confusing. Here's the pricing scheme: Model Dates Input ($/M) Cached input Output Gemini 4 Carbon Through Nov 30, 2026 $2.00 $0.10 $10.00 From Dec 1, 2026 $4.00 "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Watch SpaceX successfully execute the first ‘chopstick’ catch of Starship",
     "published": "2026-11-14T21:44:44+00:00",
     "summary": "After aborting a planned catch of Starship Flight 15's booster, SpaceX successfully captured Starship with its \"Mechazilla\" launch and catch tower for the first time. The company has performed 'chopstick' catches of its boosters before, but this is the first time the maneuver has successfully been executed on the Starship vehicle itself. SpaceX CEO Elon […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Magic: The Gathering is getting a Netflix animated series. For real this time.",
     "published": "2026-11-14T19:47:40+00:00",
     "summary": "\"It's really happening. I promise. For real.\" Those are the first words from Roy Graham, Head of Story at Magic: The Gathering, in a video posted yesterday announcing Planeswalker, the animated series heading to Netflix in 2027. An animated Magic: The Gathering series was first teased back in 2019 with Joe and Anthony Russo at […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Work to replace old copper wire led to the FAA’s ground stop",
     "published": "2026-11-14T17:44:28+00:00",
     "summary": "At a press conference today, Transportation Secretary Sean Duffy said that Friday's nationwide ground stop ordered by the FAA was related to work replacing outdated copper wire with a fiber optic line at a \"remote FAA facility.\" The secretary said that this was \"routine maintenance,\" rather than the result of a major modernization effort. He […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Here are our favorite deals from REI’s giant Holiday Sale",
     "published": "2026-11-14T15:00:00+00:00",
     "summary": "Black Friday has become a shopping season of its own, with retailers once again offering discounts well ahead of the actual shopping holiday. We’ve already rounded up some of the best early Black Friday deals we’ve come across, but if you’re looking to save on outdoor gear or pick up something for an upcoming trip, […]"
    },
    {
     "ref": "the_verge#4",
     "title": "The OpenAI board member who fired Sam Altman says we still can’t trust AI CEOs",
     "published": "2026-11-14T15:00:00+00:00",
     "summary": "Today, I’m talking with Helen Toner, the executive director of the Center for Security and Emerging Technology at Georgetown University. This episode is part two of our series on AI in real life. Helen is a well-known figure in the AI safety and policy community, though she is perhaps best known for having served on […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Tesla is inviting some people to buy a Cybercab ‘for personal use’ — but read the fine print",
     "published": "2026-11-14T14:18:36+00:00",
     "summary": "Tesla is doubling, or perhaps tripling down on its bold claims of an autonomous future with the offer to \"select customers\" to purchase a Cybercab for \"personal use.\" But the gilded, steering-wheel-free two-seater will \"only be available in supported service areas\" - meaning you'll only be able to buy one if you live in one […]"
    },
    {
     "ref": "the_verge#6",
     "title": "This tiny gamepad with dual analog thumbsticks pushes the limits of portable controllers",
     "published": "2026-11-14T14:00:00+00:00",
     "summary": "As much as I appreciate the ingenious design of the Nintendo Switch's Joy-Con, my family and I can't stand using them as standalone gamepads. So when we travel with the Switch 2, we always bring at least one full-size gamepad, plus a couple of 8BitDo's Zero 2 controllers for games that don't use analog thumbsticks. […]"
    },
    {
     "ref": "the_verge#7",
     "title": "A gadget to make your dumb house smarter",
     "published": "2026-11-14T13:00:00+00:00",
     "summary": "Hi, friends! Welcome to Installer No. 152, your guide to the best and Verge-iest stuff in the world. (If you're new here, welcome, thank you for taking time away from Zelda to be here, and also you can read all the old editions at the Installer homepage.) This week, I've been reading about school apps […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Jensen Huang and the decline of the visionary showman founder CEO",
     "published": "2026-11-14T12:00:00+00:00",
     "summary": "On January 6th, 2025, Nvidia CEO Jensen Huang got his rockstar moment at last. He strode triumphantly onstage, hand raised in the air, to the claps and cheers of a 14,000-person arena absolutely packed with influencers and fans, their faces awash in blue glow, as he made his entrance in a black leather jacket that […]"
    },
    {
     "ref": "the_verge#9",
     "title": "FAA lifts nationwide ground stop that blocked takeoffs for hours",
     "published": "2026-11-14T01:53:04+00:00",
     "summary": "Takeoffs from airports throughout the US largely stopped on Friday after the FAA issued a national ground stop at 3:44PM ET \"due to extraordinary circumstances and for reasons of safety.\" More than four hours after the stop was issued, officials announced it was lifted at 8:15PM ET and that flights will resume. It's unclear how […]"
    }
   ]
  }
 ]
}
</input>