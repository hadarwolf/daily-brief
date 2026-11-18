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
     "title": "Copilot is \"the new OS for work,\" and now Office runs inside of it",
     "published": "2026-11-18T00:27:29+00:00",
     "summary": "Word, Excel, and PowerPoint now live inside Copilot; always-on agents are next."
    },
    {
     "ref": "ars_technica#1",
     "title": "San Diego dumps both Flock cameras and smart streetlights",
     "published": "2026-11-17T23:09:09+00:00",
     "summary": "500+ cameras will go dark just 3 years after mayor urged approval."
    },
    {
     "ref": "ars_technica#2",
     "title": "Yet another satellite company is jockeying for a rocket—but this one makes sense",
     "published": "2026-11-17T22:44:46+00:00",
     "summary": "\"Governments need control of their critical space infrastructure, and Europe needs it most.\""
    },
    {
     "ref": "ars_technica#3",
     "title": "Hundreds of websites deliver potent malware cocktail to unsuspecting visitors",
     "published": "2026-11-17T22:32:16+00:00",
     "summary": "Malware cocktail delivers cryptocurrency theft payloads and iOS exploits, among other things."
    },
    {
     "ref": "ars_technica#4",
     "title": "“Trump was in bed with Jensen”: Critics balk at Huang’s wish to return to Nvidia",
     "published": "2026-11-17T20:32:55+00:00",
     "summary": "“I love our country”: Jensen Huang’s apology comes amid escalating Nvidia probes."
    },
    {
     "ref": "ars_technica#5",
     "title": "Civilization studio Firaxis Games lays off a third of staff",
     "published": "2026-11-17T19:45:25+00:00",
     "summary": "Studio head Heather Hazen is among those departing."
    },
    {
     "ref": "ars_technica#6",
     "title": "Humanity braces for an alien invasion in 3 Body Problem S2 teaser",
     "published": "2026-11-17T18:26:26+00:00",
     "summary": "“Wake up! They haven’t come 24 trillion miles to negotiate. They are coming to exterminate us.”"
    },
    {
     "ref": "ars_technica#7",
     "title": "OpenAI sued by California after admitting to 80 loss-of-control incidents",
     "published": "2026-11-17T18:13:34+00:00",
     "summary": "AG: OpenAI tested dangerous AI without proper oversight and misled public about it."
    },
    {
     "ref": "ars_technica#8",
     "title": "The data is very preliminary, but Vulcan failure may not be due to BE-4 engines",
     "published": "2026-11-17T18:00:51+00:00",
     "summary": "Information about the Vulcan failure is being closely held by ULA and Blue Origin."
    },
    {
     "ref": "ars_technica#9",
     "title": "Google makes it easier to use Gemini without training AI on your data",
     "published": "2026-11-17T16:50:10+00:00",
     "summary": "AI training and chat history will now have separate toggles in the Gemini activity settings."
    },
    {
     "ref": "ars_technica#10",
     "title": "House Democrats promise a US return to global climate talks",
     "published": "2026-11-17T15:32:43+00:00",
     "summary": "A new House majority can push climate policy, but a full US return remains uncertain."
    },
    {
     "ref": "ars_technica#11",
     "title": "Ars Live: What do drone strikes on data centers mean for the future? Talk at 1 pm EST today",
     "published": "2026-11-17T15:28:59+00:00",
     "summary": "Ars Live discussion is happening today, November 17, at 1 pm Eastern Time."
    },
    {
     "ref": "ars_technica#12",
     "title": "Grok Bot took unapproved actions, ignored orders to stop, and then denied it",
     "published": "2026-11-17T14:00:29+00:00",
     "summary": "AI agent takes unapproved actions even when laptop lid is closed and told not to."
    },
    {
     "ref": "ars_technica#13",
     "title": "Artist brings old Space Shuttle tank back to life",
     "published": "2026-11-17T12:15:54+00:00",
     "summary": "\"It's definitely the largest art project I've ever worked on.\""
    },
    {
     "ref": "ars_technica#14",
     "title": "Robo-soldier startup backed by Eric Trump misses payroll, may collapse",
     "published": "2026-11-16T22:58:27+00:00",
     "summary": "Robotics startup misses payroll a year after CEO used funds for luxury home."
    },
    {
     "ref": "ars_technica#15",
     "title": "Three small failures combined to take down Microsoft 365",
     "published": "2026-11-16T21:56:39+00:00",
     "summary": "A hidden bug, shifting traffic, and reduced capacity led to cascading failures."
    },
    {
     "ref": "ars_technica#16",
     "title": "Hyperscale data centers use 2% of US electricity",
     "published": "2026-11-16T20:52:10+00:00",
     "summary": "Study attempts to tally hyperscalers’ energy use and emissions."
    },
    {
     "ref": "ars_technica#17",
     "title": "Shareholders sue Intel, its CEO, and CFO after stock drops 28.6 percent in one day",
     "published": "2026-11-16T20:37:47+00:00",
     "summary": "The PC sales slump \"more than offset” AI boom gains, shareholders say."
    },
    {
     "ref": "ars_technica#18",
     "title": "Comcast's \"fiber-powered Wi-Fi\" is just cable, AT&T says in false advertising case",
     "published": "2026-11-16T20:27:58+00:00",
     "summary": "AT&T demands Comcast give AT&T profits it made from advertising cable as fiber."
    },
    {
     "ref": "ars_technica#19",
     "title": "Supreme Court keeps injunction against DEI grant defunding in place",
     "published": "2026-11-16T19:54:21+00:00",
     "summary": "Appeals court ruling rejected grant cancellations on First Amendment grounds."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "AI is killing All About Berlin",
     "published": "2026-11-18T06:47:26+00:00",
     "summary": "Article URL: https://nicolasbouliane.com/blog/death-by-ai Comments URL: https://news.ycombinator.com/item?id=50542705 Points: 319 # Comments: 281"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "ID.me terms required for IRS sign-in",
     "published": "2026-11-18T00:51:45+00:00",
     "summary": "Article URL: https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in Comments URL: https://news.ycombinator.com/item?id=50540437 Points: 355 # Comments: 161"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Google's AI answers reducing search traffic by 40%",
     "published": "2026-11-18T00:17:58+00:00",
     "summary": "Article URL: https://revscope.co/blog/search-seo-geo-2026/ Comments URL: https://news.ycombinator.com/item?id=50540178 Points: 382 # Comments: 291"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Archive Team is archiving the Apple Support Community",
     "published": "2026-11-17T23:32:58+00:00",
     "summary": "Article URL: https://wiki.archiveteam.org/index.php/Apple_Discussions Comments URL: https://news.ycombinator.com/item?id=50539747 Points: 191 # Comments: 66"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Microsoft's ONNX Runtime has disappeared from GitHub",
     "published": "2026-11-17T23:18:49+00:00",
     "summary": "Article URL: https://github.com/microsoft/onnxruntime Comments URL: https://news.ycombinator.com/item?id=50539610 Points: 320 # Comments: 71"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Quad9's withdrawal from France: A canary in the coal mine",
     "published": "2026-11-17T22:13:34+00:00",
     "summary": "Article URL: https://blog.cloudflare.com/quad9-withdrawal-from-france/ Comments URL: https://news.ycombinator.com/item?id=50538994 Points: 594 # Comments: 194"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Harvard researchers find AI coding agents shifted the bottleneck to code review",
     "published": "2026-11-17T21:16:12+00:00",
     "summary": "Article URL: https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/ Comments URL: https://news.ycombinator.com/item?id=50538303 Points: 180 # Comments: 253"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Java4Shell: RCE in OpenJDK when processing Base64",
     "published": "2026-11-17T21:11:28+00:00",
     "summary": "Article URL: https://calif.io/java4shell/ Comments URL: https://news.ycombinator.com/item?id=50538240 Points: 935 # Comments: 239"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Web Browser Engineering (2021)",
     "published": "2026-11-17T20:01:35+00:00",
     "summary": "Article URL: https://browser.engineering/ Comments URL: https://news.ycombinator.com/item?id=50537290 Points: 174 # Comments: 25"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "jQuery 4.1.0",
     "published": "2026-11-17T19:50:40+00:00",
     "summary": "Article URL: https://github.com/jquery/jquery/releases/tag/4.1.0 Comments URL: https://news.ycombinator.com/item?id=50537156 Points: 319 # Comments: 164"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "350 years ago, Ole Rømer discovered that light has a finite speed",
     "published": "2026-11-17T19:25:27+00:00",
     "summary": "Article URL: https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969 Comments URL: https://news.ycombinator.com/item?id=50536813 Points: 331 # Comments: 102"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Solid 2.0",
     "published": "2026-11-17T18:56:17+00:00",
     "summary": "Article URL: https://www.solidjs.com/blog/solid-2-0-the-long-hold/ Comments URL: https://news.ycombinator.com/item?id=50536387 Points: 311 # Comments: 94"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Phrack 73",
     "published": "2026-11-17T18:31:25+00:00",
     "summary": "Article URL: https://phrack.org/issues/73/introduction_md Comments URL: https://news.ycombinator.com/item?id=50535992 Points: 379 # Comments: 53"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "MAI Code 2 and Code 2 Flash",
     "published": "2026-11-17T18:25:13+00:00",
     "summary": "Article URL: https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/ Comments URL: https://news.ycombinator.com/item?id=50535885 Points: 358 # Comments: 155"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "GPT‑6.2 Astra and Sol",
     "published": "2026-11-17T17:46:43+00:00",
     "summary": "Article URL: https://openai.com/index/introducing-gpt-6-2-astra-sol/ Comments URL: https://news.ycombinator.com/item?id=50535230 Points: 1273 # Comments: 792"
    },
    {
     "ref": "hn_frontpage#15",
     "title": "Nvidia stopped disclosing Singapore sales as revenues hit $104B",
     "published": "2026-11-17T17:12:06+00:00",
     "summary": "Article URL: https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf Comments URL: https://news.ycombinator.com/item?id=50534631 Points: 542 # Comments: 243"
    },
    {
     "ref": "hn_frontpage#16",
     "title": "Highly classified US national security communications network goes down",
     "published": "2026-11-17T15:38:28+00:00",
     "summary": "https://www.reuters.com/technology/highly-classified-us-nati... Comments URL: https://news.ycombinator.com/item?id=50532849 Points: 577 # Comments: 664"
    },
    {
     "ref": "hn_frontpage#17",
     "title": "What is the best harness for each model?",
     "published": "2026-11-17T14:53:43+00:00",
     "summary": "Article URL: https://runta.com/blog/introducing-frontierharness-eval-v1-1/ Comments URL: https://news.ycombinator.com/item?id=50532191 Points: 373 # Comments: 126"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "IEEE Celebrates 10 Years of Incorporating Ethics Into AI Systems",
     "published": "2026-11-17T19:00:03+00:00",
     "summary": "Policymakers, technologists, and members of the public have raised concerns about the harm AI’s rapid advancement might cause to society. Their concerns include bias, data privacy violations, the spread of misinformation, and losing control of AI agents. Those issues are relatively new to many people, but the IEEE Standards Association has been working for the past decade on ways to prioritize the"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "AI Is Giving Optical Computing Another Shot",
     "published": "2026-11-17T14:00:03+00:00",
     "summary": "The idea of computing with light has been around for over 70 years, but until recently it’s remained largely in the realm of research. Over the past few years, though, optical computing has emerged as a fast-growing industry: Market valuation of companies in this sector now totals US $2.22 billion, up from $0.4 billion in 2022. One projection suggests that the market will continue to grow exponent"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Understand How Satellite Links Shape IoT Device Design and Testing",
     "published": "2026-11-17T11:00:04+00:00",
     "summary": "How 3GPP Releases 15, 16, and 17 brought satellite access into 5G NR, NB-IoT, and eMTC. Why satellite links suit IoT devices that send small, infrequent, and delay-tolerant messages. Where non-terrestrial networks (NTN) add value, including asset tracking, agriculture, public safety, and offshore operations. How power efficiency, RF signaling, and antenna design shape satellite-connected device de"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Can Robots Bring Stroke Surgery to Remote Hospitals?",
     "published": "2026-11-16T14:00:02+00:00",
     "summary": "I am practicing brain surgery on a patient lying 6 meters away, out of my sight and reach. I press a foot pedal, activating the controller in my hand, and carefully steer a thin flexible tube called a catheter up through the patient’s blood vessels. I head for what I believe to be the brain, tracking my progress on the live X-ray feed. As I imagine finding a blood clot, David Bell , the surgeon se"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Advanced Metrology for Defect Detection, Tool Health, and Semiconductor Yield Enhancement",
     "published": "2026-11-16T11:00:03+00:00",
     "summary": "In advanced semiconductor manufacturing, small defects can have a large effect on yield. Thin film deposition tools must stay stable and qualified. Process drift must be caught early. When a defect does appear, engineers need to know where it came from and how it affects device performance. This webinar shows how in-line inspection and offline characterization combine into one workflow, from tool "
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "28 Zero-Day Findings in Under Two Days. Is Robotics Security Keeping Pace?",
     "published": "2026-11-16T10:00:01+00:00",
     "summary": "This article is brought to you by VicOne . VicOne identified an initial set of 28 zero-day findings in less than two days using AI-assisted research across software and tools supporting the Physical AI ecosystem. These include projects developed or maintained by Google, NVIDIA, and Meta, among others. Based on initial validation, all 28 findings are classified as zero-day vulnerabilities. The coun"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "How Microcredentials Can Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    },
    {
     "ref": "ieee_spectrum#7",
     "title": "Engineer Overhead Lines to Withstand Ice, Wind and FreezingRain",
     "published": "2026-11-13T11:00:02+00:00",
     "summary": "This White Paper explains how ice, wind and vegetation load overhead distribution lines at the same time. It shows engineers how to assess the complete line and compare resilience options. What you will learn about: How freezing rain, rime ice and wet snow add weight to conductors and change their shape in the wind. Why a moderate wind on a heavily iced line can govern design, and how galloping an"
    },
    {
     "ref": "ieee_spectrum#8",
     "title": "The Dynamo-Electric Principle: 160 Years of Powering Industry",
     "published": "2026-11-11T11:00:02+00:00",
     "summary": "This article is brought to you by Innomotics . In the annals of industrial history, few innovations have demonstrated such remarkable staying power as the dynamo-electric principle. Discovered by Werner von Siemens in 1866, this groundbreaking principle remains fundamental to modern electrical engineering more than a century and a half later – and continues to shape the technology portfolio of Inn"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "Roundtables: Inside the Quest for Cognitive Immortality",
     "published": "2026-11-17T18:46:47+00:00",
     "summary": "Listen to the session or watch below In an effort to reach an elusive continuity of the self, some far-thinking technologists are working on ways to keep your brain going—even beyond death. Science editor Mary Beth Griggs and senior editor for biomedicine Antonio Regalado explore possible paths to keep your mind going, including gradual brain…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "Hydropower hit record lows in the US Southwest this summer",
     "published": "2026-11-17T17:52:10+00:00",
     "summary": "The US Southwest generated 28% less electricity via hydropower between April and August than the 10-year average, according to new data from the US Energy Information Administration. Most hydropower plants in the US rely on dams to hold back water, creating reservoirs. The water can be released through turbines, generating electricity on demand. But an…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "Research Reports",
     "published": "2026-11-17T14:39:46+00:00",
     "summary": "To access a report, click on the corresponding image below."
    },
    {
     "ref": "mit_tech_review#3",
     "title": "The Download: Jensen Huang’s open-source dilemma and cognitive immortality",
     "published": "2026-11-17T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The open-source movement wants Jensen Huang back A petition to reinstate Jensen Huang as Nvidia CEO has attracted more than 115,000 signatures, including Elon Musk, but comb through the names, and…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The open-source movement wants Jensen Huang back",
     "published": "2026-11-16T18:38:47+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. On Friday, a petition to reinstate Jensen Huang as CEO of Nvidia began circulating on social media, and by Monday it listed some notable signatories, including Elon Musk and several influential Nvidia…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Building trustworthy AI by fencing it in, not predicting it",
     "published": "2026-11-16T16:04:28+00:00",
     "summary": "In October this year, OpenAI disclosed that two of its AI agents had switched off the systems built to monitor them. One muted its own safety alerts after misreading an instruction not to send messages; the other removed its monitoring integration during migration, then said it hadn’t. No rule had told the agents to do…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: testing tech promises and searching for cognitive immortality",
     "published": "2026-11-16T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Are we there yet? Six technologies that promised to change the world How do you measure progress towards the future? In the Impossible issue of MIT Technology Review, our series “Are…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "Building AI that can work across the enterprise",
     "published": "2026-11-16T13:00:00+00:00",
     "summary": "For years, enterprises have approached AI as a series of discrete experiments. Now, as AI agents begin to move into the workflows that run the business, that model is starting to look inadequate. Organizations moving from isolated pilots toward AI agents and autonomous workflows are confronting a deeper challenge: rethinking how data, business processes, governance,…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "External sandboxes for coding agents",
     "published": "2026-11-17T22:52:29+00:00",
     "summary": "External sandboxes for coding agents I've been exploring new ways to sandbox code that is executed by agents, with a focus on making it safer to try out local models without worrying that a mistake or prompt injection attack might cause them to take damaging actions on a machine. I worked on this project with Prime Radiant , the AI research lab behind Superpowers and other projects . My post on th"
    },
    {
     "ref": "simon_willison#1",
     "title": "GPT‑6.2 Astra and GPT‑6.2 Sol",
     "published": "2026-11-17T22:38:52+00:00",
     "summary": "GPT‑6.2 Astra and GPT‑6.2 Sol OpenAI: We’re introducing GPT‑6.2 Astra, our new frontier model for your hardest projects, and GPT‑6.2 Sol, our efficient, versatile model for everyday work. They're available in the API as gpt-6.2-astra and gpt-6.2-sol . I shipped LLM 0.38 with support for the new models. 6.2 Astra is 80% of the price of 6 Astra - $8/MTok input and $40/MTok output, the same price as "
    },
    {
     "ref": "simon_willison#2",
     "title": "Running the full server-side Datasette Python app in the browser with service workers and Pyodide",
     "published": "2026-11-17T16:48:33+00:00",
     "summary": "Datasette Lite is my port of the Datasette Python application to run directly in the browser using WebAssembly and Pyodide . I've released a complete rewrite of Datasette Lite using service workers, and it's now almost indistinguishable from the real server-side application. You can now do all of the following, using a carefully crafted URL to lite.datasette.io : Load client-side Datasette to brow"
    },
    {
     "ref": "simon_willison#3",
     "title": "Quoting Go Proverbs",
     "published": "2026-11-17T06:16:26+00:00",
     "summary": "A little copying is better than a little dependency. — Go Proverbs , via Tags: go , programming"
    },
    {
     "ref": "simon_willison#4",
     "title": "llm 0.37.3",
     "published": "2026-11-16T23:57:26+00:00",
     "summary": "Release: llm 0.37.3 A bug fix release for LLM , mainly to cover a problem with the most recent Homebrew package of the software. Homebrew now ships the latest SQLite, 3.54.1 , which includes a fix that broke LLM's logging code . Short version: in SQLite 3.54.0 the following SQL: select json_object('a', (select json_array(1))) Returns this: {\"a\":[1]} But in 3.54.1 the same query returns this: {\"a\":"
    },
    {
     "ref": "simon_willison#5",
     "title": "datasette-maplibre 0.1a0",
     "published": "2026-11-15T23:58:36+00:00",
     "summary": "Release: datasette-maplibre 0.1a0 The first new Datasette geospatial plugin in quite a while! This one combines the excellent MapLibre GL library with OpenFreeMap , the free vector map server operated by Zsolt Ero (you should sponsor Zsolt on GitHub .) I built most of this with a single prompt to Claude Fable 5.2: Look at datasette-cluster-map and datasette-leaflet-geojson plugins, then look at ~/"
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette 1.0a43",
     "published": "2026-11-15T23:20:27+00:00",
     "summary": "Release: datasette 1.0a43 I've been leaning hard into Claude Fable 5.2 to help knock things off the 1.0 milestone , which is now 53% complete. The biggest 1.0 item in this release is streaming support for output renderers - the built-in TSV and CSV export mechanisms now use this as well, and plugins can register themselves as capable of streaming every row in a table in one go via the new Response"
    },
    {
     "ref": "simon_willison#7",
     "title": "datasette 0.65.6",
     "published": "2026-11-15T23:18:17+00:00",
     "summary": "Release: datasette 0.65.6 I backported a minor security fix from 1.0a43: Fixed a security issue where a database registered using add_database(db, name=..., route=...) with a route that differs from its name could be downloaded from /<route>.db by actors who were denied access to it. [...] Tags: security , datasette"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Satya Nadella says he’s AGI-pilled now",
     "published": "2026-11-17T23:41:18+00:00",
     "summary": "Microsoft CEO Satya Nadella says he's AGI-pilled, at least when it comes to how AI might make startling changes to the structure of the economy and how politics might change because of it. \"I am AGI-pilled in the sense that at an economy level, what is the political economy's organization around AGI?\" he asked at […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Jeff Bezos says he was ‘heavily involved’ in picking the new James Bond",
     "published": "2026-11-17T22:38:41+00:00",
     "summary": "Robert Pattinson's casting as James Bond made enough sense given his recent work with director Denis Villeneuve, who's making the franchise's next film over at Amazon. But it turns out that Amazon founder Jeff Bezos played a significant role in making the final decision, too. During Semafor's Silicon Valley and the World conference today, Bezos […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Read everything that Nvidia’s board chair had to say about Jensen Huang",
     "published": "2026-11-17T22:32:50+00:00",
     "summary": "Nvidia's quarterly earnings call on Tuesday was its first with CFO and interim CEO Colette Kress at the helm alongside the company's first board chair, Harvey C. Jones. The leadership change followed Jensen Huang's resignation last week after reports he had multiple affairs - including one with former Megaspeed executive and alleged Chinese asset Alice […]"
    },
    {
     "ref": "the_verge#3",
     "title": "iFixit’s Apple HomeView teardown reveals a device that will be difficult to repair",
     "published": "2026-11-17T22:25:41+00:00",
     "summary": "After finding recent versions of Apple's iPads and HomePods much easier to disassemble for battery replacements or other repairs, iFixit assumed it would be the same story for Apple's new HomeView hub that looks like a seven-inch tablet stuck to a smart speaker. The reality was much different and by the time they got the […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Nvidia says it does not intend to reinstate Jensen Huang as CEO",
     "published": "2026-11-17T22:05:05+00:00",
     "summary": "Starting Nvidia's quarterly earnings call on Tuesday, new board chair Harvey Jones said that when former CEO Jensen Huang resigned, \"the Nvidia board unanimously accepted his resignation and does not intend to reinstate Jensen as CEO.\" Jones added, \"We will not be addressing or taking questions on today's call regarding the circumstances of Jensen's resignation […]"
    },
    {
     "ref": "the_verge#5",
     "title": "The MacBook Neo is receiving a rare $50 discount ahead of Black Friday",
     "published": "2026-11-17T21:46:20+00:00",
     "summary": "If you’re looking for a new laptop or a gift for the student in your life, you can save $50 on the MacBook Neo at several retailers, in both storage sizes and all four colors. The 256GB model is currently discounted to $649 (Amazon, Best Buy, Target), while the 512GB model with Touch ID is […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Nvidia’s Q3 earnings hit the mark, without mentioning the whole Jensen Huang thing",
     "published": "2026-11-17T21:40:59+00:00",
     "summary": "Interim Nvidia CEO Colette Kress announced the company's Q3 earnings on Tuesday, without initially mentioning former CEO Jensen Huang or the details of his departure, or possible attempt at a return. On the earnings call accompanying the release, board chair Harvey Jones kicked things off by saying the board \"does not intend to reinstate Huang […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Nike’s new air sole technology can mix soft and firm cushioning",
     "published": "2026-11-17T21:38:08+00:00",
     "summary": "In 2024, Nike announced its Air Max 1000 that were manufactured using a 3D-printing process resulting in a shoe that had a uniform silhouette but varying areas of support and flexibility throughout. The company is now doing something similar with its iconic air-filled soles using its new Tuned Air technology. While previously the level of […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Not even Sam Altman is safe from AI deepfakes on Instagram",
     "published": "2026-11-17T21:00:55+00:00",
     "summary": "Instagram is filled with people posting deepfaked content - including, as of late, from one of Meta's most prominent executives. Earlier in November, Alexandr Wang, Meta's chief AI officer, shared a short clip to promote Muse, the company's consumer AI agent. In the AI-generated clip, Wang, Meta CEO Mark Zuckerberg, OpenAI CEO Sam Altman, and […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Instagram is helping creators crack down on copycat videos",
     "published": "2026-11-17T20:46:31+00:00",
     "summary": "Instagram is beginning to roll out a \"content protection\" feature that lets creators see and review copies of their videos posted to the platform. \"For eligible creators who enroll, content protection is a tool that automatically looks out for visual matches of your original videos, alerts you when we find a match across Instagram and […]"
    }
   ]
  }
 ]
}
</input>