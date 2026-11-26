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
     "title": "European spacecraft finds chaotic scene after asteroid deflection experiment",
     "published": "2026-11-25T22:36:45+00:00",
     "summary": "\"DART made a really, really large mess. However, we didn’t really know what kind of mess.\""
    },
    {
     "ref": "ars_technica#1",
     "title": "Google search alternative Kagi launches Gmail rival",
     "published": "2026-11-25T20:57:09+00:00",
     "summary": "The pitch is an unusual combination of privacy promises and AI features."
    },
    {
     "ref": "ars_technica#2",
     "title": "Backblaze explains why it's sharing customer information with advertisers",
     "published": "2026-11-25T18:38:29+00:00",
     "summary": "Backblaze tells Ars it won't share users' backup, storage files with advertisers."
    },
    {
     "ref": "ars_technica#3",
     "title": "The FCC has authorized SpaceX to deploy 1 million satellites",
     "published": "2026-11-25T18:22:38+00:00",
     "summary": "This constellation would increase the number of satellites in orbit by roughly 50-fold."
    },
    {
     "ref": "ars_technica#4",
     "title": "Ladybird browser's first downloadable alpha is surprisingly capable",
     "published": "2026-11-25T17:33:30+00:00",
     "summary": "An independent browser engine arrives on Linux and macOS, and we've tried it."
    },
    {
     "ref": "ars_technica#5",
     "title": "Etsy clarifies AI terms after seller backlash",
     "published": "2026-11-25T17:12:57+00:00",
     "summary": "One veteran illustrator dismisses revisions as \"sugar coating.\""
    },
    {
     "ref": "ars_technica#6",
     "title": "Ars Live recap: Don’t expect military attacks on data centers to stop",
     "published": "2026-11-25T16:47:14+00:00",
     "summary": "Militaries have many reasons to target data centers and the cloud in wartime."
    },
    {
     "ref": "ars_technica#7",
     "title": "Guilty: Huawei faces steep penalties for stealing T-Mobile, Cisco trade secrets",
     "published": "2026-11-25T16:33:45+00:00",
     "summary": "Huawei didn’t try very hard to hide thefts of US trade secrets, DOJ says."
    },
    {
     "ref": "ars_technica#8",
     "title": "Lead azide detonation sends clouds over Iowa as questions of health risks swirl",
     "published": "2026-11-25T15:35:17+00:00",
     "summary": "Prior modeling estimated the plume would cover hundreds of square miles."
    },
    {
     "ref": "ars_technica#9",
     "title": "A familiar Iranian hacking group has found a new way to cause chaos",
     "published": "2026-11-25T14:29:43+00:00",
     "summary": "France blames an Iranian cyber unit for sabotaging hundreds of supermarket freezers."
    },
    {
     "ref": "ars_technica#10",
     "title": "AI may soon change what it means to be a theoretical physicist",
     "published": "2026-11-25T12:00:28+00:00",
     "summary": "Frontier AI is already solving problems that once took top physicists a full day."
    },
    {
     "ref": "ars_technica#11",
     "title": "Half of NASA's aging Mars fleet knocked offline by technical issues",
     "published": "2026-11-24T22:50:11+00:00",
     "summary": "Perseverance is having trouble transmitting to Earth. Odyssey is rapidly burning through its waning fuel supply."
    },
    {
     "ref": "ars_technica#12",
     "title": "Microsoft's historic cloud outage exposed an engineering “fog of war”",
     "published": "2026-11-24T22:36:28+00:00",
     "summary": "Internal memos reveal a “Code Red” overhaul and ambitious one-hour recovery goals."
    },
    {
     "ref": "ars_technica#13",
     "title": "What's going on with the Riemann hypothesis?",
     "published": "2026-11-24T20:34:53+00:00",
     "summary": "A new AI-assisted proof seems to be solid, but we're not sure what it tells us."
    },
    {
     "ref": "ars_technica#14",
     "title": "Back-to-back measles deaths is our new reality; US tally now at 14",
     "published": "2026-11-24T20:00:18+00:00",
     "summary": "Wisconsin reports 3rd measles death today; Pennsylvania reported its 9th yesterday."
    },
    {
     "ref": "ars_technica#15",
     "title": "Amazon drone crashes on garage after delivering shampoo, draws FAA probe",
     "published": "2026-11-24T18:47:57+00:00",
     "summary": "Amazon says Prime Air drones made “hundreds of thousands” of deliveries in 2026."
    },
    {
     "ref": "ars_technica#16",
     "title": "Amazon discovers Falcon 9 and Ariane 6 can deliver when nobody else can",
     "published": "2026-11-24T18:30:36+00:00",
     "summary": "Amazon has hundreds of satellites in storage waiting for rides to space."
    },
    {
     "ref": "ars_technica#17",
     "title": "How brewers can protect beers from smoke-tainted hops",
     "published": "2026-11-24T18:18:37+00:00",
     "summary": "Study: Brewers can still use up to 50% of smoke-tainted hops without affecting beer taste and aroma."
    },
    {
     "ref": "ars_technica#18",
     "title": "Kalshi makes “difficult decision” to halt Utah trading after losing court fights",
     "published": "2026-11-24T18:03:58+00:00",
     "summary": "Kalshi’s pause in Utah draws cheers as critics bash ads and boo insider trading."
    },
    {
     "ref": "ars_technica#19",
     "title": "Tidal announces ban on AI-generated music; 27 million tracks will be deleted",
     "published": "2026-11-24T17:34:34+00:00",
     "summary": "AI songs account for 6.3 percent of Tidal's catalog, but it's about to be zero."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "OpenAI cuts GPT-6.2 usage: Astra hits limits 40% faster, Sol 25% faster",
     "published": "2026-11-26T03:36:58+00:00",
     "summary": "Article URL: https://twitter.com/thsottiaux/status/2125784147889393806 Comments URL: https://news.ycombinator.com/item?id=50651117 Points: 258 # Comments: 135"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Tell HN: Lots of Ask HNs again",
     "published": "2026-11-26T00:43:34+00:00",
     "summary": "There have been questions about why the /ask page ( https://news.ycombinator.com/ask ) was running dry of Ask HNs - e.g.: Ask HN: Why is Ask HN only showing me 14 posts? - https://news.ycombinator.com/item?id=49984484 - Oct 2026 (47 comments) Ask HN: Why is pagination gone on \"Ask HN\", and showing only 19 items? - https://news.ycombinator.com/item?id=50280719 - Oct 2026 (3 comments) I believe I fo"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Collection of preserved UI style guides",
     "published": "2026-11-26T00:40:00+00:00",
     "summary": "Article URL: https://aresluna.org/ui-style-guides/ Comments URL: https://news.ycombinator.com/item?id=50649834 Points: 189 # Comments: 22"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Bare Metal Qwen",
     "published": "2026-11-25T22:15:34+00:00",
     "summary": "Article URL: https://github.com/alesha-pro/llm.asm/tree/main/02-baremetal-os Comments URL: https://news.ycombinator.com/item?id=50648365 Points: 154 # Comments: 39"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Much shorter version of GRH Lean verification from Anthropic",
     "published": "2026-11-25T21:48:10+00:00",
     "summary": "Article URL: https://github.com/lsernau/grh-lean Comments URL: https://news.ycombinator.com/item?id=50648050 Points: 460 # Comments: 239"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "The New York Times warns photographers not to update Photoshop over AI features",
     "published": "2026-11-25T21:18:02+00:00",
     "summary": "https://archive.ph/pcUgy Comments URL: https://news.ycombinator.com/item?id=50647673 Points: 395 # Comments: 330"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Slow Ubuntu security response times",
     "published": "2026-11-25T20:38:00+00:00",
     "summary": "Article URL: https://www.openwall.com/lists/oss-security/2026/11/25/9 Comments URL: https://news.ycombinator.com/item?id=50647181 Points: 295 # Comments: 136"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Nfs2root: A 12-year-old pre-auth remote root in the Linux kernel's NFS server",
     "published": "2026-11-25T20:35:50+00:00",
     "summary": "Article URL: https://opensec.in/blog/nfs2root-cve-2026-99362 Comments URL: https://news.ycombinator.com/item?id=50647161 Points: 150 # Comments: 62"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Holy shit holy shit holy shit holy shit: The magnitude of what’s now happening",
     "published": "2026-11-25T19:11:27+00:00",
     "summary": "See also The matrix multiplication exponent is nine fourths [pdf] - https://news.ycombinator.com/item?id=50637220 Comments URL: https://news.ycombinator.com/item?id=50646108 Points: 1564 # Comments: 1371"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "The polynomial Hirsch conjecture is false [pdf]",
     "published": "2026-11-25T17:34:34+00:00",
     "summary": "Article URL: https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf Comments URL: https://news.ycombinator.com/item?id=50644980 Points: 157 # Comments: 44"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "1Password Security Incident",
     "published": "2026-11-25T17:18:26+00:00",
     "summary": "Article URL: https://1password.com/blog/update-on-nov-2026-security-incident Comments URL: https://news.ycombinator.com/item?id=50644817 Points: 1443 # Comments: 613"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Mitsubishi Electric Research Lab CEO on How He Reached the C-Suite",
     "published": "2026-11-24T19:00:01+00:00",
     "summary": "The trajectory from researcher to top executive at a leading R&D organization doesn’t happen overnight. It took Anthony Vetro nearly 30 years to climb the corporate ladder at Mitsubishi Electric Research Laboratories , in Cambridge, Mass. He joined MERL in 1996, right out of college, and he has worked there ever since. Vetro probably is best known for his research in multimedia signal processing, "
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Learn How 5G NTN Architecture, Mobility, and Testing Shape 6G",
     "published": "2026-11-23T14:08:53+00:00",
     "summary": "What you will learn about: How 3GPP standards from Release 15 to Release 19 built the foundation of NR-NTN, and why NTN extends 5G coverage to oceans, rural regions, and disaster zones. How transparent and regenerative satellite payload architectures differ, and what each choice means for round trip time, link budget, and hardware complexity. Why long distances, fast-moving satellites, and Doppler"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "I Don’t Trust Visual Recordings Anymore. But One Day I Will Again",
     "published": "2026-11-20T14:00:03+00:00",
     "summary": "In March of this year, a flurry of emails and text messages from a half dozen reporters around the world disrupted my quiet Saturday morning. An Iranian news agency had aired a week-old video of what appeared to be a U.S.-made Tomahawk missile hitting a school. News reports claimed that the strike killed more than 175 people, most of them children. The U.S. president and military denied responsibi"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Community-Focused Academic Brings AI Tools to Colorado Farmers",
     "published": "2026-11-19T19:00:02+00:00",
     "summary": "Many farmers and ranchers in eastern Colorado are curious about artificial intelligence, but they don’t have a local tech-savvy person to show them how to use it. Xue “Alice” Dong has made that her job. Dong, an IEEE senior member, is an extension regional specialist with the Colorado State University Extension , CSU’s outreach arm. She works in Logan County and serves a 10-county farming area in "
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Why a Computer Scientist Thinks Superintelligence Won’t Happen",
     "published": "2026-11-19T12:00:03+00:00",
     "summary": "Many people were caught off guard this past summer when employees of one of the world’s leading AI companies began casually debating whether their products would lead to human extinction. It started when Anthropic researcher Jacob Coxon announced his resignation, warning that his employer and OpenAI were “racing straight to self-improving superintelligence and gambling with our lives.” Evan Hubing"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The next generation of bionic hands is here—and they can feel",
     "published": "2026-11-26T09:59:00+00:00",
     "summary": "Avi Davidson lost his left hand as a teenager. Since then, he’s cycled through a few prosthetics. But his latest is different—it’s wired up to nerves in the upper part of his forearm and allows him to feel pressure. For the first time in years, he can use his left limb to handle delicate objects…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "How data centers are driving a US natural-gas boom",
     "published": "2026-11-25T17:00:00+00:00",
     "summary": "In May 2025, my colleague David Rotman wrote a feature story describing how AI could keep us dependent on natural gas. Just 18 months later, I’ve lost count of how many times he’s already been proved right. Sure, it’s technically possible to meet the world’s rising electricity demand with other power sources, including renewables like…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: AI swamping open records, and firefighting for permafrost",
     "published": "2026-11-25T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. AI is straining America’s open records systems AI has intensified investors’ interest in public records. Over the last few years, venture-backed startups have raised upwards of $100 million to collect data…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "AI is straining America’s open records systems",
     "published": "2026-11-25T10:00:00+00:00",
     "summary": "In Panton, Vermont, population 660, town clerk Kyle Rowe did it all. He crafted budgets, paid vendors, handled property tax disputes, and served as the town’s zoning supervisor and presiding elections officer. During morning office hours at the town hall—a wood-frame structure built as a church in 1858—he also fielded public records requests. Recently, he…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: AI’s gas power boom and a consciousness reality check",
     "published": "2026-11-24T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Data centers are getting their own natural gas power plants One of the biggest obstacles to building a data center is getting approval to connect to the grid, a wait that…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Data centers are getting their own natural gas power plants",
     "published": "2026-11-24T11:00:00+00:00",
     "summary": "One of the biggest roadblocks to starting up a data center is getting approval to connect to the electric grid—a wait that could last as long as a decade. Some developers aren’t willing to wait and are instead opting to build their own off-grid, or behind-the-meter, gas power plants to fuel the AI boom. xAI’s…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "A legendary philosopher isn’t buying Anthropic’s consciousness argument",
     "published": "2026-11-23T17:36:08+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. Before going public last week, Anthropic named the possibility that AI could be conscious or sentient as a risk factor for anyone investing. Given “the way we approach model sentience and moral…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "The Download: AI’s judgment problem and carbon removal’s crop threat",
     "published": "2026-11-23T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The most misunderstood graph in AI just got a major update A new report from the AI evaluation nonprofit METR finds that some capabilities are improving exponentially—but models aren’t as good…"
    },
    {
     "ref": "mit_tech_review#8",
     "title": "Why using rocks for carbon removal could eventually reduce crop growth",
     "published": "2026-11-23T11:00:00+00:00",
     "summary": "Tech companies are investing a lot of hope and money in rocks. Google, Microsoft, and others have committed hundreds of millions of dollars to get startups to spread crushed basalt, olivine, or other alkaline materials across farms, in an effort to capture carbon from the air and lock it away. A number of influential models…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "sqlite3_rsync: Database Remote-Copy Tool For SQLite",
     "published": "2026-11-26T06:08:25+00:00",
     "summary": "sqlite3_rsync: Database Remote-Copy Tool For SQLite This additional SQLite tool has been around for a while now - it was added as \"experimental\" in SQLite 3.47.0 in October 2024 and enhanced in SQLite 3.50.0 in May 2025 . It was only today that I understood one of its most attractive characteristics. Normally, if you want to grab a snapshot copy of a SQLite database, you need to use either the bac"
    },
    {
     "ref": "simon_willison#1",
     "title": "Quoting Scott Aaronson",
     "published": "2026-11-25T23:26:32+00:00",
     "summary": "It’s now obvious that we’ll be getting, not one-off solutions to this or that complexity question, but a whole new continent of mathematical truth, one that we’d previously only glimpsed through fog. Picture van Leeuwenhoek first training a microscope on pondwater, or Galileo first training his telescope on the stars. That might give you some idea of how our resolution into the complexity-theoreti"
    },
    {
     "ref": "simon_willison#2",
     "title": "datasette-charts 0.3a0",
     "published": "2026-11-25T18:16:50+00:00",
     "summary": "Release: datasette-charts 0.3a0 I added chart annotations to datasette-charts ! You can now render a chart and then annotate it with lines, shaded areas, labels, or a combination of the three. A chart with annotations looks like this: Here's that same chart in Datasette Lite , where you can tweak the annotations using the chart builder UI: If you also install Datasette Agent the agent can build an"
    },
    {
     "ref": "simon_willison#3",
     "title": "Three LLM inflection points in twelve months",
     "published": "2026-11-24T23:02:07+00:00",
     "summary": "I gave a keynote at the AI Engineer Code Summit a couple of weeks ago, constructed around the idea that there have been three significant inflection points in the abilities of LLMs and coding agents in the past twelve months. Here's the video of the talk. In this post I'm going to pull out the major inflection point theme and interrogate it more deeply. Coding agents in November 2025 Today, Novemb"
    },
    {
     "ref": "simon_willison#4",
     "title": "GPT 6.2 Astra Solves a Historical Mystery",
     "published": "2026-11-24T16:53:59+00:00",
     "summary": "GPT 6.2 Astra Solves a Historical Mystery Here's an interesting case-study in using GPT-6.2 Astra for historical research, from history professor Mark Humphries: With only minimal prompting, GPT-6.2 Astra was able to autonomously identify the creator of an anonymous 1808 sketchbook held at Yale’s Beinecke Library . It did so extremely quickly (in just 22 minutes), using publicly available primary "
    },
    {
     "ref": "simon_willison#5",
     "title": "datasette-charts 0.2a1",
     "published": "2026-11-24T06:07:19+00:00",
     "summary": "Release: datasette-charts 0.2a1 Minor UI improvements: Collapsing the suggested charts section now leaves the chart visible. Following a link to a chart opens it with the suggestions collapsed for that visit. On table pages the panel now sits below the \"4,235 rows where country = CHN\" line. The \"Data\" table under each chart has been replaced by Copy TSV and Copy CSV buttons. Removed the \"Chart thi"
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette-charts 0.2a0",
     "published": "2026-11-24T04:24:29+00:00",
     "summary": "Release: datasette-charts 0.2a0 I introduced this new charting plugin for Datasette yesterday . Today it's gained integration with Datasette Agent , so now you can ask chat for a chart and it will create one for you using the same underlying chart suggestion and generation tools. Here's a demo video, recorded on agent.datasette.io where you can sign in with GitHub to try the plugin yourself: Downl"
    },
    {
     "ref": "simon_willison#7",
     "title": "datasette-agent 0.7a1",
     "published": "2026-11-24T03:45:57+00:00",
     "summary": "Release: datasette-agent 0.7a1 A small improvement to Datasette Agent : chat sessions could already open an iframe side panel that could then navigate to different pages. This version improves navigation by fragment hashes, for deeper integration with other Datasette plugins that update fragment hashes when the user interacts with the plugin in a way that changes state. I built this in order to fi"
    },
    {
     "ref": "simon_willison#8",
     "title": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer",
     "published": "2026-11-23T23:40:49+00:00",
     "summary": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer GLM 5.4 is now available from Chinese AI lab Z.ai. It's their first model to use a looped transformer architecture, which they describe like this: In a standard Transformer, each layer runs once per forward pass. In a Loop Transformer, a group of weight-shared layers runs for multiple iterations, refining the hidden states from the"
    },
    {
     "ref": "simon_willison#9",
     "title": "Ladybird's first alpha release",
     "published": "2026-11-23T21:46:35+00:00",
     "summary": "Ladybird is an astonishingly ambitious project: a new browser, in 2026, with its own implementation of most of the key components - HTML parsing, CSS engine, layout, JavaScript, even WebAssembly. It still uses a few external components - things like HarfBuzz for text shaping, Skia for 2D graphics, ffmpeg for video, and SQLite for the things you do with SQLite. Everything else is part of Ladybird, "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "42 state AGs are trying to stop Character.AI from selling users’ chats",
     "published": "2026-11-26T09:54:40+00:00",
     "summary": "A coalition of 42 state attorneys general is trying to prevent Character.AI from selling off user data as it navigates Chapter 11 bankruptcy proceedings. In a deluge of nearly identical press releases, the various AGs accuse the company of planning to auction off \"the private chat histories of more than 21 million U.S. accounts - […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Now Google’s Familiar Faces AI feature works on Walmart’s $35 smart home camera too",
     "published": "2026-11-26T00:04:34+00:00",
     "summary": "A couple of Walmart's budget-friendly smart home cameras will be able to recognize people around your house now using Google's familiar face detection feature. A new Google Home update brings Familiar Faces support to the $35 Onn Outdoor Camera Plug-In and $77 Onn Floodlight Camera Hardwired. However, a Google Home Premium subscription is still required […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Amazon loses its latest attempt to get out of handling more recall notices",
     "published": "2026-11-25T23:56:44+00:00",
     "summary": "Amazon is on the hook to recall more than 400,000 hazardous products after losing its legal battle against the US Consumer Product Safety Commission (CPSC). The US District Court for the District of Maryland ruled in favor of the CPSC, which argued that Amazon is a distributor of goods, not a logistics provider, making it […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Google’s patent for custom AI video feeds paints a bleak picture of entertainment’s future",
     "published": "2026-11-25T21:51:26+00:00",
     "summary": "Last year, Google filed a patent for a system called My Channel that's designed to create feeds filled with personalized, AI-generated videos and advertisements based on information the company knows about its users. The patent has been rejected, but unfortunately, Google might appeal or resubmit an amended version, and we could see this monstrosity come […]"
    },
    {
     "ref": "the_verge#4",
     "title": "The Verge’s 2026 holiday gift guide for travelers",
     "published": "2026-11-25T21:48:00+00:00",
     "summary": "Everyone has that traveler in their life. That person who feels more at home on a 14-hour train ride than a quiet Sunday on the couch. They speak multiple languages, have a gut like a goat, and make friends wherever they go. Whether they're your kindred spirit or the person you live vicariously through, one […]"
    },
    {
     "ref": "the_verge#5",
     "title": "WhatsApp’s new scheduled messages let you choose the right time to send",
     "published": "2026-11-25T20:31:48+00:00",
     "summary": "WhatsApp's 3 billion users are getting an option that Meta says is one of the most requested features, with the ability to schedule messages in advance for both private conversations and group chats. Most messaging platforms have had this for a very long time, but now it's on WhatsApp too. If you think of a […]"
    },
    {
     "ref": "the_verge#6",
     "title": "EPA reports ‘zero’ airborne lead following controlled Army detonation in Iowa",
     "published": "2026-11-25T19:45:51+00:00",
     "summary": "Saying it was necessary to prevent the possible spontaneous explosion of a stockpile of material used in igniters and blasting caps, the US Army conducted a controlled detonation of over 9,700 pounds of lead azide today at the Iowa Army Ammunition Plant (IAAAP) in Middletown, Iowa. Videos of the detonation showed plumes of smoke several […]"
    },
    {
     "ref": "the_verge#7",
     "title": "1Password breach leaked customer names and emails, but not passwords",
     "published": "2026-11-25T19:10:15+00:00",
     "summary": "1Password says a hacker stole customer names and email addresses after gaining access to its backend systems. The breach didn't expose passwords or other information stored in customer vaults, but could put users at risk of phishing attempts, according to a post disclosing the incident. It's unclear how many users are affected. The password manager […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The Fairphone 6 Plus is modular, repairable, and $100 off right now",
     "published": "2026-11-25T18:00:00+00:00",
     "summary": "Unlike most smartphones, the Fairphone 6 Plus is designed for home repair, with easily replaceable parts that could help extend its lifespan well into the future. That makes its midrange price point easier to justify, especially now that it’s dropped to a new low of $552.49 (about $98 off) at Amazon as part of the […]"
    },
    {
     "ref": "the_verge#9",
     "title": "The loneliest peptide party in New York",
     "published": "2026-11-25T18:00:00+00:00",
     "summary": "This is Optimizer, a weekly newsletter sent from Verge senior reviewer Victoria Song that dissects and discusses the latest gizmos and potions that swear they're going to change your life. Opt in for Optimizer here. On a rainy fall evening, an experimental art venue in Chelsea Market had a small line out the door. There […]"
    }
   ]
  }
 ]
}
</input>