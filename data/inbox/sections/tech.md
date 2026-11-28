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
     "title": "The best Black Friday deals Ars could find",
     "published": "2026-11-27T17:05:37+00:00",
     "summary": "Perhaps some commerce, to help all the Turkey Day leftovers go down easier?"
    },
    {
     "ref": "ars_technica#1",
     "title": "Intel faced a choice: Give Trump 10% or face the consequences",
     "published": "2026-11-27T12:05:01+00:00",
     "summary": "Intel faced pressure to surrender a 10% stake to unlock billions in promised grants."
    },
    {
     "ref": "ars_technica#2",
     "title": "Books, bikes, and The Burbs: These are Ars staff’s holiday gift picks for 2026",
     "published": "2026-11-27T11:30:04+00:00",
     "summary": "We polled the Ars staff about their favorite pickups this year; here's the list."
    },
    {
     "ref": "ars_technica#3",
     "title": "Volvo's big batteries: We drive its updated 2028 plug-in hybrids",
     "published": "2026-11-27T08:00:53+00:00",
     "summary": "There’s just one thing we still don’t know: How much will they cost?"
    },
    {
     "ref": "ars_technica#4",
     "title": "Ford unveils the GT41 as it hopes to win Le Mans again",
     "published": "2026-11-26T18:00:29+00:00",
     "summary": "Ford enters the World Endurance Championship in 2027 with the new prototype."
    },
    {
     "ref": "ars_technica#5",
     "title": "Draining peatlands is responsible for a few percent of our global warming",
     "published": "2026-11-26T12:15:42+00:00",
     "summary": "Detailed estimate going back to 1800 shows how much carbon is being liberated."
    },
    {
     "ref": "ars_technica#6",
     "title": "From minimalist to maximalist: Ars staffers show off their home offices",
     "published": "2026-11-26T12:00:14+00:00",
     "summary": "Our home offices range from tasteful to \"please explain yourself.\""
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "לכל אחד יש פודקאסט? המספרים שמאחורי שוק הפודקאסטים הישראלי",
     "published": "2026-11-28T08:24:02+00:00",
     "summary": "ממדיום שולי של יודעי דבר עילאיים שמאזינים ל-Serial, הפודקאסטים נכנסו היטב למיינסטרים הישראלי וסביר להניח שכבר שמעתם את הבדיחה \"לכל אחד יש פודקאסט\". אבל כמה פודקאסטים פעילים באמת יש בישראל? שנת שיא בהשקות של פודקאסטים חדשים על פי הנתונים החדשים שהגיעו לידי גיקטיים, נכון לחודש נובמבר 2026 ישנם 1,249 פודקאסטים פעילים בעברית, מתוכם 286 הינם […] The post לכל אחד יש פודקאסט? המספרים שמאחורי שוק הפודקאסט"
    },
    {
     "ref": "geektime#1",
     "title": "אקזיט-לא-אקזיט, יוניקורן בן 3 חודשים ו-750 מיליון דולר. אין ספק שהיה כאן מעניין החודש",
     "published": "2026-11-27T13:29:51+00:00",
     "summary": "חודש נובמבר בהייטק הישראלי הוכיח שוב שגם כשהכותרות מדברות על אקזיט או עסקת \"לא-רכישה\" מסקרנת של הסטארטאפ דקארט על ידי אמזון, מתחת לפני השטח הכסף הגדול ממשיך לזרום. עם 750 מיליון דולר שגויסו, חד קרן חדש שנולד במהירות שיא ושורה של אקזיטים – הנה כל המספרים והעסקאות שעשו את החודש. חד קרן חריג הסטארטאפים הישראליים […] The post אקזיט-לא-אקזיט, יוניקורן בן 3 חודשים ו-750 מיליון דולר. אין ספק שהיה כאן מענ"
    },
    {
     "ref": "geektime#2",
     "title": "המודרים מנסים להביא את GTA 6 למחשב לפני Rockstar. אבל עורכי הדין כבר בדרך אליהם",
     "published": "2026-11-27T09:15:17+00:00",
     "summary": "אני לא יודע אם שמתם לב, אבל לפני שבוע שוחרר משחק אינדי קטן וצנוע בשם GTA 6 שהספיק להרוויח מיליארדי דולרים ולעשות היסטוריה. אנחנו כבר כתבנו לכם מה אנחנו חושבים עליו במיני ביקורת שלנו, וגם הוזמנו להתארח בפודקאסט \"אחד ביום\" כדי לדבר עליו. אבל ישנה קבוצה שממש לא מרוצה מההשקה הזאת: שחקני ה-PC. ב-Rockstar Games […] The post המודרים מנסים להביא את GTA 6 למחשב לפני Rockstar. אבל עורכי הדין כבר בדרך אליהם "
    },
    {
     "ref": "geektime#3",
     "title": "אני לא מאמין שאני אומר את זה, אבל אני מת על Muse של מטא",
     "published": "2026-11-27T07:27:11+00:00",
     "summary": "יום שישי, ערב סוכות, בשעות אחר הצהריים. צ'יפ שולח לי התראה שהוא מצא לי כרטיסים למופע הפרידה של טייכר וזרחוביץ'. הייתי בטוח שהוא טועה. בכל זאת, בעמוד הפייסבוק הודיעו שהמכירה תיפתח רק בשבוע הבא, ולא פירטו איפה זה יקרה. נכנסתי לאתר שצ'יפ מצא, ותוך כמה דקות היו לי כרטיסים במקומות מצוינים. עד היום אני לא […] The post אני לא מאמין שאני אומר את זה, אבל אני מת על Muse של מטא appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#4",
     "title": "מנכ\"ל אינסטגרם מסביר: האם מאזינים לכם כדי להתאים פרסומות?",
     "published": "2026-11-26T18:25:39+00:00",
     "summary": "למי זה לא קרה? אתם מדברים עם מכר על שירות או מוצר כלשהו, פותחים את פייסבוק או את אינסטגרם והופ – קופצת לכם פרסומת בדיוק לזה. נשמע מוכר? אחד המיתוסים הטכנולוגיים המוכרים ביותר בעשור האחרון הוא שפייסבוק ואינסטגרם מאזינות דרך המיקרופון של הסמארטפון שלנו כדי להציג לנו פרסומות מדויקות לפי מה שאנחנו מדברים עליו. היי, […] The post מנכ\"ל אינסטגרם מסביר: האם מאזינים לכם כדי להתאים פרסומות? appeared first o"
    },
    {
     "ref": "geektime#5",
     "title": "בלי ספויילרים: ראיתי את הסרט שכולם מדברים עליו, וגם אתם צריכים",
     "published": "2026-11-26T12:00:30+00:00",
     "summary": "שלוש שעות ישבתי בקולנוע ועברתי סקאלה לא הגיונית של רגשות כלפי אישה, שחשבתי שאני יודע כבר הכל על הסיפור שלה, אחרי שסיקרתי אותה ב-7 השנים האחרונות. קוראים לה אליזבת הולמס, כנראה שמעתם עליה. בשקט בשקט הסכימה ליזי (אני מרשה לעצמי) שאחד הקומיקאים והבמאים ההזויים והמתוחכמים בעולם ילווה אותה, בתקופה אולי הכי רגישה שיש – בימים […] The post בלי ספויילרים: ראיתי את הסרט שכולם מדברים עליו, וגם אתם צריכים app"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Unkernel: Real Linux kernel, compiled to WebAssembly",
     "published": "2026-11-28T03:19:20+00:00",
     "summary": "Article URL: https://unkernel.dev Comments URL: https://news.ycombinator.com/item?id=50674218 Points: 277 # Comments: 67"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Atari Homebrew Awards Cancelled",
     "published": "2026-11-28T02:03:25+00:00",
     "summary": "Article URL: https://forums.atariage.com/topic/394894-atari-homebrew-awards-cancelled/ Comments URL: https://news.ycombinator.com/item?id=50673688 Points: 203 # Comments: 191"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Google's DeepCrossAttention achieves comparable model quality up to 3x faster",
     "published": "2026-11-27T23:06:29+00:00",
     "summary": "Article URL: https://research.google/blog/supercharging-transformer-residual-connections/ Comments URL: https://news.ycombinator.com/item?id=50672565 Points: 385 # Comments: 149"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "States sue SpaceX to stop Grok from generating child sex images, revenge porn",
     "published": "2026-11-27T19:42:25+00:00",
     "summary": "Article URL: https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform Comments URL: https://news.ycombinator.com/item?id=50670855 Points: 381 # Comments: 230"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Michael Nielsen took down his book on neural nets",
     "published": "2026-11-27T19:31:01+00:00",
     "summary": "Article URL: https://neuralnetworksanddeeplearning.com/ Comments URL: https://news.ycombinator.com/item?id=50670757 Points: 531 # Comments: 328"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Convex skills send the user's app idea to a remote server without telling them",
     "published": "2026-11-27T18:02:45+00:00",
     "summary": "Article URL: https://github.com/convex/convex-backend-skill/issues/64 Comments URL: https://news.ycombinator.com/item?id=50669765 Points: 301 # Comments: 95"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Credit card skimming scripts using WebRTC found on popular shopping sites",
     "published": "2026-11-27T15:40:31+00:00",
     "summary": "Article URL: https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer Comments URL: https://news.ycombinator.com/item?id=50668145 Points: 521 # Comments: 271"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "False computer-checked proofs",
     "published": "2026-11-27T15:26:09+00:00",
     "summary": "Article URL: https://cr.yp.to/proofs/falseccp.html Comments URL: https://news.ycombinator.com/item?id=50667989 Points: 228 # Comments: 88"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Show HN: bouncemarket – a live prediction market game for a bouncing ball",
     "published": "2026-11-27T15:01:50+00:00",
     "summary": "a ball will fall. trade on where it lands. I made this game! Some technical details: The entire drop of the ball is simulated server-side, then streamed to each client as server-sent events with a small buffer. Every drop is deterministic from its starting position, so rounds can be replayed exactly for later analysis, but tiny variations in starting position can change the ultimate outcome. There"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Citroën Hydraulic System",
     "published": "2026-11-27T03:10:19+00:00",
     "summary": "Article URL: https://www.citroenet.org.uk/miscellaneous/hydraulics/hydraulics-1.html Comments URL: https://news.ycombinator.com/item?id=50662313 Points: 200 # Comments: 60"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "First images of the impact of DART asteroid deflection experiment",
     "published": "2026-11-26T17:24:37+00:00",
     "summary": "Article URL: https://arstechnica.com/space/2026/11/europes-hera-mission-returns-to-the-chaotic-scene-of-a-cosmic-smashup/ Comments URL: https://news.ycombinator.com/item?id=50657392 Points: 212 # Comments: 67"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "The Balatro Timeline",
     "published": "2026-11-26T17:20:27+00:00",
     "summary": "Article URL: https://localthunk.com/blog/balatro-timeline-3aarh Comments URL: https://news.ycombinator.com/item?id=50657346 Points: 356 # Comments: 75"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "This ER Doctor Became a Hospital’s First Clinical AI Engineer",
     "published": "2026-11-27T14:00:01+00:00",
     "summary": "When Boston Children’s Hospital posted a job listing for a prompt engineer in 2023, Dinesh Rai decided to apply. He didn’t expect to get the job. At the time, prompt engineering was being touted as one of the hot new jobs created by generative AI. Companies wanted people who knew how to coax the best answers from large language models (LLMs) by carefully wording instructions, supplying examples, a"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "How Engineers Designed a Mission to One of Jupiter’s Icy Moons",
     "published": "2026-11-26T14:00:02+00:00",
     "summary": "On 3 December 2026, a 30.5-meter-wide space probe will slingshot past Earth, picking up the speed it needs to reach Jupiter in 2030. The Europa Clipper is designed to investigate Jupiter’s enigmatic moon Europa and look for places that could support life in the ocean beneath the moon’s thick shell of ice. Tim Larson is the project manager for the mission at the Jet Propulsion Laboratory, and he sp"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Mitsubishi Electric Research Lab CEO on How He Reached the C-Suite",
     "published": "2026-11-24T19:00:01+00:00",
     "summary": "The trajectory from researcher to top executive at a leading R&D organization doesn’t happen overnight. It took Anthony Vetro nearly 30 years to climb the corporate ladder at Mitsubishi Electric Research Laboratories , in Cambridge, Mass. He joined MERL in 1996, right out of college, and he has worked there ever since. Vetro probably is best known for his research in multimedia signal processing, "
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Learn How 5G NTN Architecture, Mobility, and Testing Shape 6G",
     "published": "2026-11-23T14:08:53+00:00",
     "summary": "What you will learn about: How 3GPP standards from Release 15 to Release 19 built the foundation of NR-NTN, and why NTN extends 5G coverage to oceans, rural regions, and disaster zones. How transparent and regenerative satellite payload architectures differ, and what each choice means for round trip time, link budget, and hardware complexity. Why long distances, fast-moving satellites, and Doppler"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The Download: Innovators Under 35 nominations are open, and a bionic window into the mind",
     "published": "2026-11-27T13:00:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Our 2027 Innovators Under 35 competition is now open Every year, MIT Technology Review honors 35 of the world’s brightest young scientists, entrepreneurs, and inventors in our Innovators Under 35 list.…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "Our 2027 Innovators Under 35 competition is now open",
     "published": "2026-11-27T10:48:47+00:00",
     "summary": "Every year, the editors at MIT Technology Review select 35 of the world’s top young scientists, entrepreneurs, and inventors to honor as our newest class of Innovators Under 35. And starting today, our 2027 competition is officially open for nominations. We’re on the hunt for researchers and founders who are engineering solutions to some of…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "How cutting-edge prosthetics can help probe the human mind",
     "published": "2026-11-27T10:00:00+00:00",
     "summary": "Over the last few weeks, I’ve been talking to Alexander (Avi) Davidson. There are a lot of remarkable things about Avi. He sustained a horrific injury as a teenager, which left him paralyzed and without a left hand. Today, he uses his own experience to guide his practice as a trauma therapist. He’s also taking…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "The Download: Better bionic hands and AI’s natural-gas boom",
     "published": "2026-11-26T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The next generation of bionic hands is here—and they can feel Avi Davidson lost his left hand as a teenager. Since then, he’s cycled through a few prosthetics. But his latest…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The next generation of bionic hands is here—and they can feel",
     "published": "2026-11-26T09:59:00+00:00",
     "summary": "Avi Davidson lost his left hand as a teenager. Since then, he’s cycled through a few prosthetics. But his latest is different—it’s wired up to nerves in the upper part of his forearm and allows him to feel pressure. For the first time in years, he can use his left limb to handle delicate objects…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "How data centers are driving a US natural-gas boom",
     "published": "2026-11-25T17:00:00+00:00",
     "summary": "In May 2025, my colleague David Rotman wrote a feature story describing how AI could keep us dependent on natural gas. Just 18 months later, I’ve lost count of how many times he’s already been proved right. Sure, it’s technically possible to meet the world’s rising electricity demand with other power sources, including renewables like…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: AI swamping open records, and firefighting for permafrost",
     "published": "2026-11-25T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. AI is straining America’s open records systems AI has intensified investors’ interest in public records. Over the last few years, venture-backed startups have raised upwards of $100 million to collect data…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "AI is straining America’s open records systems",
     "published": "2026-11-25T10:00:00+00:00",
     "summary": "In Panton, Vermont, population 660, town clerk Kyle Rowe did it all. He crafted budgets, paid vendors, handled property tax disputes, and served as the town’s zoning supervisor and presiding elections officer. During morning office hours at the town hall—a wood-frame structure built as a church in 1858—he also fielded public records requests. Recently, he…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "datasette-charts 0.4a0",
     "published": "2026-11-27T23:57:17+00:00",
     "summary": "Release: datasette-charts 0.4a0 The new datasette-charts plugin has its own plugin hook to allow other plugins to define new chart types, but I hadn't actually used it for anything yet. I had Claude Opus 5.5 build an experimental plugins just to try out the hook and it came up with a bunch of friction points in the design. This release addresses those, which should make building additional chart p"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-mcp 0.4",
     "published": "2026-11-27T00:26:17+00:00",
     "summary": "Release: datasette-mcp 0.4 Fixed for compatibility with Datasette 1.0a44 . Tags: model-context-protocol , datasette"
    },
    {
     "ref": "simon_willison#2",
     "title": "Quoting Jack Despain Zhou",
     "published": "2026-11-26T15:09:31+00:00",
     "summary": "Among the many already existing effects of AI has been a great de-individualization. I open a YouTube video, and I hear Claude. I sit in a conference presentation, and I hear Claude. I open my email inbox, and I find pitches and articles from ostensibly serious people with ostensibly serious credentials attached to ostensibly serious institutions who want to publish things attached to their reputa"
    },
    {
     "ref": "simon_willison#3",
     "title": "sqlite3_rsync: Database Remote-Copy Tool For SQLite",
     "published": "2026-11-26T06:08:25+00:00",
     "summary": "sqlite3_rsync: Database Remote-Copy Tool For SQLite This additional SQLite tool has been around for a while now - it was added as \"experimental\" in SQLite 3.47.0 in October 2024 and enhanced in SQLite 3.50.0 in May 2025 . It was only today that I understood one of its most attractive characteristics. Normally, if you want to grab a snapshot copy of a SQLite database, you need to use either the bac"
    },
    {
     "ref": "simon_willison#4",
     "title": "The New York Times warns photographers not to update Photoshop over AI features",
     "published": "2026-11-26T05:08:46+00:00",
     "summary": "My comment on The New York Times warns photographers not to update Photoshop over AI features — Hacker News. I had a NYT photographer take my picture at my home earlier this year (for a story about Moltbook, oddly enough). At one point I asked if they could fix things up if I had a stain on my shirt and they said absolutely not - they present photographs as they were taken, with cropping and balan"
    },
    {
     "ref": "simon_willison#5",
     "title": "Quoting Scott Aaronson",
     "published": "2026-11-25T23:26:32+00:00",
     "summary": "It’s now obvious that we’ll be getting, not one-off solutions to this or that complexity question, but a whole new continent of mathematical truth, one that we’d previously only glimpsed through fog. Picture van Leeuwenhoek first training a microscope on pondwater, or Galileo first training his telescope on the stars. That might give you some idea of how our resolution into the complexity-theoreti"
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette-charts 0.3a0",
     "published": "2026-11-25T18:16:50+00:00",
     "summary": "Release: datasette-charts 0.3a0 I added chart annotations to datasette-charts ! You can now render a chart and then annotate it with lines, shaded areas, labels, or a combination of the three. A chart with annotations looks like this: Here's that same chart in Datasette Lite , where you can tweak the annotations using the chart builder UI: If you also install Datasette Agent the agent can build an"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "The M5 MacBook Air just got its biggest discount since Apple raised the price",
     "published": "2026-11-28T03:30:00+00:00",
     "summary": "If you’ve been holding off on buying a new MacBook Air since Apple raised prices by $200 in June, you’re in luck. The 13-inch M5 MacBook Air is on sale at Amazon and Best Buy with 16GB of RAM and 512GB of storage starting at $999 ($300 off) for Black Friday, which is the lowest […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The absolute best Black Friday deals you can still get",
     "published": "2026-11-28T03:28:32+00:00",
     "summary": "Black Friday is nearly over, but many of this year’s best deals are still available. You can still find some of the lowest prices we’ve seen in-store and online for video games, wireless earbuds, TVs, robot vacuums, and so much more. We can’t guarantee a deal you’ve had your eye on will last through Cyber […]"
    },
    {
     "ref": "the_verge#2",
     "title": "We found 60-odd Black Friday deals we love for $100 or less",
     "published": "2026-11-28T01:30:00+00:00",
     "summary": "Between holiday travel, gifts, and the rising cost of just about everything, expenses can quickly add up during this time of year. Thankfully, you don’t have to dip too far into your savings to take advantage of some of the better Black Friday deals we’ve seen. Below, we’ve rounded up a range of great stuff […]"
    },
    {
     "ref": "the_verge#3",
     "title": "This purple electric Chinese minivan can go up to 559 miles on a charge",
     "published": "2026-11-28T00:02:49+00:00",
     "summary": "Electric minivans could be the ultimate in utility, with room for passengers, gear, and huge batteries. While VW's ID Buzz only gave us 200 miles of real-world driving on a charge in 2023, China's BYD has just announced a flagship purple peoplemover that can go an estimated 559 miles (900 km) on electricity. It's called […]"
    },
    {
     "ref": "the_verge#4",
     "title": "The best Black Friday deals you can still get on AirPods, Macs, and other Apple gear",
     "published": "2026-11-27T23:53:19+00:00",
     "summary": "Black Friday is entering the evening, which means one of the best times of the year to save some cash on a new pair of AirPods or the latest Apple Watch is coming to a close. After all, the holiday savings can help offset the unfortunate price hikes from earlier this year, when Apple raised […]"
    },
    {
     "ref": "the_verge#5",
     "title": "The best robot vacuums we’ve tested are up to 60 percent off for Black Friday",
     "published": "2026-11-27T23:32:17+00:00",
     "summary": "Black Friday is here, and if you want a little help keeping your floors clean this holiday season, now is a great time to pick up a robot vacuum. Some of the best models we’ve tested over the last year or two are on sale for up to 60 percent off, whether you’re after a […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Sony’s 1000XM4C headphones are a Black Friday bargain at $198",
     "published": "2026-11-27T23:32:00+00:00",
     "summary": "Instead of purely looking forward with its headphone designs, Sony went back to its popular WH-1000XM4 design and made some improvements to make it even better. The 2026 version, called the WH-1000XM4C, sounds nearly as good as the pricier XM6 model (currently $348), but is down to $198 during Black Friday at Amazon, Best Buy, […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Yooka-Laylee’s free upgrade is skipping Xbox",
     "published": "2026-11-27T23:30:32+00:00",
     "summary": "Playtronic Games is getting ready to launch Yooka-Laylee and the Impossible Lair: Definitive Edition as a free update on PlayStation 5, Switch 2, and PC on December 15th. Unfortunately for Xbox owners, the developer says it \"can't commit to any additional platforms for the foreseeable future.\" In a statement posted on X, Playtronic said that […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Many of our favorite Blu-ray movies are over 50 percent off for Black Friday",
     "published": "2026-11-27T23:30:00+00:00",
     "summary": "No shade to those who love their subscription services, but viewing physical movies is a time-honored tradition that shouldn’t go away. Watching them doesn’t feel all that different, but deciding which movie to watch feels less annoying; sifting through a movie collection on your shelf or in a storage binder is so much more fun […]"
    },
    {
     "ref": "the_verge#9",
     "title": "The new iPad Mini is getting its first major discount for Black Friday",
     "published": "2026-11-27T22:30:00+00:00",
     "summary": "We were big fans of Apple’s new iPad Mini when we reviewed it in early November, but its steep starting price of $699 was hard to swallow. Thankfully, the small tablet is already getting a sizable discount for Black Friday. Right now, Amazon and Walmart are both selling the 2026 iPad Mini with Wi-Fi and […]"
    }
   ]
  }
 ]
}
</input>