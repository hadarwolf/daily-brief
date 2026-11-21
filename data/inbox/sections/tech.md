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
     "title": "Trump FCC declares California isn't allowed to enforce phone service rules",
     "published": "2026-11-20T22:28:24+00:00",
     "summary": "FCC preempts state rules that require AT&T to keep offering home phone service."
    },
    {
     "ref": "ars_technica#1",
     "title": "SpaceX's Starshield troubles in Ukraine could threaten its broader military business",
     "published": "2026-11-20T22:16:51+00:00",
     "summary": "\"Explain the changes that were made to the Starshield service in October 2026.\""
    },
    {
     "ref": "ars_technica#2",
     "title": "Google rolls out new search homepage with AI chat history and no search button",
     "published": "2026-11-20T21:58:29+00:00",
     "summary": "Google search is making it even easier to access AI tools on the search page."
    },
    {
     "ref": "ars_technica#3",
     "title": "Meta reconsiders 2030 net-zero goal amid record emissions from AI data centers",
     "published": "2026-11-20T21:47:10+00:00",
     "summary": "Meta is “re-evaluating” 2030 sustainability goals. Will others follow?"
    },
    {
     "ref": "ars_technica#4",
     "title": "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.",
     "published": "2026-11-20T20:59:08+00:00",
     "summary": "Test using prompts with unique, trackable secrets proves that data doesn't stay private."
    },
    {
     "ref": "ars_technica#5",
     "title": "Watching as a giant star swallowed its neighbor and exploded",
     "published": "2026-11-20T20:41:17+00:00",
     "summary": "A recent brightening turned out to be from a star orbiting inside another."
    },
    {
     "ref": "ars_technica#6",
     "title": "NASA’s new Moon plan is taking shape, but some big questions remain",
     "published": "2026-11-20T20:26:33+00:00",
     "summary": "\"We tend to have a lot of technical discussion and debate. That point will continue to be debated.\""
    },
    {
     "ref": "ars_technica#7",
     "title": "Prisons get OK to jam contraband phones. CTIA says nearby phones will be jammed too.",
     "published": "2026-11-20T19:52:59+00:00",
     "summary": "CTIA said jamming test showed \"interference... up to two and a half miles away.\""
    },
    {
     "ref": "ars_technica#8",
     "title": "Army delays detonating \"catastrophically hazardous\" lead azide amid fear, anger",
     "published": "2026-11-20T19:21:50+00:00",
     "summary": "Modeling predicts plume of neurotoxic lead could reach up to 100 miles away."
    },
    {
     "ref": "ars_technica#9",
     "title": "Valve says it might have to raise the price of supply-limited Steam Machines",
     "published": "2026-11-20T16:11:21+00:00",
     "summary": "\"We don't yet know the number we are able to make, and at what price...\""
    },
    {
     "ref": "ars_technica#10",
     "title": "US will soon announce root cause behind FAA nationwide ground stop",
     "published": "2026-11-20T14:52:51+00:00",
     "summary": "Former FAA insider on reducing the risks of upgrading a decades-old network."
    },
    {
     "ref": "ars_technica#11",
     "title": "SpaceX lenders don’t want Elon Musk launching their collateral into space",
     "published": "2026-11-20T14:15:21+00:00",
     "summary": "Bondholders want SpaceX’s valuable chip collateral kept on Earth and within reach."
    },
    {
     "ref": "ars_technica#12",
     "title": "Rocket Report: A weekend of ups and downs; Stoke celebrates engine milestone",
     "published": "2026-11-20T13:35:45+00:00",
     "summary": "Russia launched a Soyuz rocket with satellites to help enable drone attacks over Ukraine."
    },
    {
     "ref": "ars_technica#13",
     "title": "Only the Seminole Tribe can offer online gambling in Florida—and they're furious at DraftKings",
     "published": "2026-11-20T12:30:29+00:00",
     "summary": "Gambling? We're just swapping contracts!"
    },
    {
     "ref": "ars_technica#14",
     "title": "Science has a home here at Ars—please help keep it that way",
     "published": "2026-11-20T12:15:36+00:00",
     "summary": "Your support for Ars matters more now than ever."
    },
    {
     "ref": "ars_technica#15",
     "title": "Trump admin still won't let Wi-Fi giant TP-Link sell its latest routers in US",
     "published": "2026-11-20T12:00:43+00:00",
     "summary": "TP-Link's struggle illustrates how Trump admin wields control over device makers."
    },
    {
     "ref": "ars_technica#16",
     "title": "Amazon fights the Delivery Protection Act with homepage banner, in-app pop-up",
     "published": "2026-11-19T22:16:37+00:00",
     "summary": "Amazon now uses its shopping platform for political purposes."
    },
    {
     "ref": "ars_technica#17",
     "title": "MAHA PAC spent more on steak, luxury club than candidates, report shows",
     "published": "2026-11-19T21:19:12+00:00",
     "summary": "Expert called MAHA's spending \"pretty unusual\" for a PAC."
    },
    {
     "ref": "ars_technica#18",
     "title": "Man hired by Russia spied on Silicon Valley tech and defense company, feds say",
     "published": "2026-11-19T20:29:46+00:00",
     "summary": "25-year-old accused of stalking employees at coffee shop and in an \"aggressive\" car pursuit."
    },
    {
     "ref": "ars_technica#19",
     "title": "Traumatized teens sue school, cops after Doritos bag triggers AI gun alert",
     "published": "2026-11-19T20:19:28+00:00",
     "summary": "Lawsuit: Over 99% of school system’s AI gun alerts were false positives."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "במשחק הזה אתם צריכים שיפטרו את כל ההייטקיסטים",
     "published": "2026-11-21T08:21:29+00:00",
     "summary": "בזמן שרבים בהייטק חוששים שה-AI יחליף אותם (והנתונים בהחלט מעידים על מקום לדאגה), משחק ישראלי חדש מציע לכם לעבור דווקא לצד השני של המתרס. במקום לעדכן קורות חיים ולעבוד על יכולות הריאיון שלכם, אתם תיכנסו לנעליים של מעבדת AI ותנסו להשתלט על שוק העבודה העולמי, מקצוע אחר מקצוע, לפני שהרגולציה תשתלט עליכם. כשסין ניסתה לגנוב […] The post במשחק הזה אתם צריכים שיפטרו את כל ההייטקיסטים appeared first on גיק"
    },
    {
     "ref": "geektime#1",
     "title": "סם אלטמן התלונן שאנחנו מבזבזים RAM וקיבל הטרלה מושלמת",
     "published": "2026-11-20T11:51:07+00:00",
     "summary": "אם יש כלל ברזל שלמדנו בעשורים האחרונים הוא שהאינטרנט זוכר הכל – גם פליטות פה רנדומליות. סם אלטמן, מנכ\"ל OpenAI, גילה את זה בדרך הקשה אחרי שהתלונן על הדרך שבה אנחנו, המוגלגים, \"מבזבזים\" RAM במחשבים שלנו, במקום שחוות השרתים של ChatGPT יוכלו לנצל את המשאב הנדיר. אז מפתח אחד החליט לקחת את האמירה הזו לקצה, […] The post סם אלטמן התלונן שאנחנו מבזבזים RAM וקיבל הטרלה מושלמת appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#2",
     "title": "כמה אתם מוכנים לשלם כדי להפסיק לאסוף קקי של חתולים?",
     "published": "2026-11-20T08:45:30+00:00",
     "summary": "יש לי שלושה חתולים. היו גם ארבעה, אבל אחת הוכיחה שתשע נשמות זו אגדה אורבנית ועברה לצרוך אוכל היפואלרגני בשמיים. אבל אם אני שם רגע בצד את ענייני הלוגיסטיקה והעלות של אוכל ל-3 חתולים, הבעיה האמיתית שלי היא העובדה שיש הרבה מאוד קקי ופיפי שלהם לנקות. כדי לצמצם את המפגע הריחני, אפילו הפקעתי את מרפסת […] The post כמה אתם מוכנים לשלם כדי להפסיק לאסוף קקי של חתולים? appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "ההנפקה הגדולה בהיסטוריה: אנת'רופיק חצתה שווי של 2 טריליון דולר",
     "published": "2026-11-19T19:08:24+00:00",
     "summary": "לפני קצת פחות מ-6 שנים הוקמה Anthropic על ידי שבעה מייסדים, בהם האחים דניאלה ודריו אמודיי, שעזבו בטריקת דלת את OpenAI, והיום (ה') היא הופכת לחברה ציבורית בהנפקה הכי גדולה בהיסטוריה, וחוצה אף את שווי השוק של 2 טריליון דולר. לא הפסיקו לגייס המפתחת של מודלי קלוד וקלוד קוד החלה להיסחר היום בנאסד\"ק תחת הסימול […] The post ההנפקה הגדולה בהיסטוריה: אנת'רופיק חצתה שווי של 2 טריליון דולר appeared first on "
    },
    {
     "ref": "geektime#4",
     "title": "הפשע המושלם: שילמו לי כדי לשחק GTA 6 וזה מה שחשבתי עליו",
     "published": "2026-11-19T15:25:01+00:00",
     "summary": "אני חושב שעשיתי היום את הפשע המושלם. לא, אני לא מדבר על משימה ב-GTA 6. אני מדבר על הפשע המושלם שבמסגרתו קמתי היום בבוקר, הפעלתי את ה-PlayStation 5 והתחלתי לשחק ב-GTA 6 – וקיבלתי על זה משכורת. כן, זה אחד הימים האלה שבהם אני לא מאמין שזו העבודה שלי, אבל מישהו צריך לעשות את העבודה […] The post הפשע המושלם: שילמו לי כדי לשחק GTA 6 וזה מה שחשבתי עליו appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#5",
     "title": "מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר",
     "published": "2026-11-19T09:35:10+00:00",
     "summary": "בחודש אוקטובר האחרון, מיקרוסופט הטילה פצצה בעולם הטכנולוגיה כשהציעה ל-60 אלף עובדים – כמעט 30% מסך העובדים בחברה – להתפטר במסגרת של חבילות פרישה מרצון. על פניו זה הריח כמו גל פיטורים שקט, כמעט מנומס של החברה, אבל עכשיו המנכ\"ל סאטיה נאדלה מסביר את המהלך. אמ;לק: זה ה-AI, אבל לא בקטע של \"הרובוטים מחליפים אותנו\", […] The post מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר appeared first on גיקט"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Backblaze Notice at Collection and Privacy Policy",
     "published": "2026-11-21T03:23:16+00:00",
     "summary": "Article URL: https://www.backblaze.com/company/policy/privacy Comments URL: https://news.ycombinator.com/item?id=50585593 Points: 184 # Comments: 56"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "NINLIVE: The Nine Inch Nails live archive",
     "published": "2026-11-20T22:30:47+00:00",
     "summary": "Article URL: https://ninlive.com/ Comments URL: https://news.ycombinator.com/item?id=50583274 Points: 247 # Comments: 64"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Inkling 2 Mini",
     "published": "2026-11-20T20:12:19+00:00",
     "summary": "Article URL: https://thinkingmachines.ai/news/inkling-2-mini/ Comments URL: https://news.ycombinator.com/item?id=50581260 Points: 954 # Comments: 177"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "DreamCoder: Coding harness and IDE from the author of Mastering Emacs",
     "published": "2026-11-20T20:03:59+00:00",
     "summary": "Article URL: https://www.masteringemacs.org/article/announcing-dreamcoder Comments URL: https://news.ycombinator.com/item?id=50581110 Points: 204 # Comments: 56"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "The stochastic parrots have apparently proved the Riemann Hypothesis",
     "published": "2026-11-20T20:03:07+00:00",
     "summary": "Article URL: https://scottaaronson.blog/?p=10344 Comments URL: https://news.ycombinator.com/item?id=50581084 Points: 280 # Comments: 248"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Hurried Announcement: Alessandro Masullo GRH",
     "published": "2026-11-20T18:33:14+00:00",
     "summary": "Related: Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf] - https://news.ycombinator.com/item?id=50574968 Comments URL: https://news.ycombinator.com/item?id=50579568 Points: 1994 # Comments: 922"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "We promoted developers into architects without informing them",
     "published": "2026-11-20T18:17:51+00:00",
     "summary": "Article URL: https://manidoraisamy.com/developer-to-architect.html Comments URL: https://news.ycombinator.com/item?id=50579331 Points: 417 # Comments: 233"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis",
     "published": "2026-11-20T17:21:36+00:00",
     "summary": "Article URL: https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/ Comments URL: https://news.ycombinator.com/item?id=50578358 Points: 436 # Comments: 176"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Language Models Can Rewrite Their Own Weights",
     "published": "2026-11-20T16:29:06+00:00",
     "summary": "Article URL: https://arxiv.org/abs/2611.21885 Comments URL: https://news.ycombinator.com/item?id=50577265 Points: 401 # Comments: 118"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Finite-time blow-up for the Navier–Stokes equations",
     "published": "2026-11-20T15:34:31+00:00",
     "summary": "Article URL: https://github.com/tristanbuckmaster/navier-stokes/ Comments URL: https://news.ycombinator.com/item?id=50576232 Points: 282 # Comments: 88"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Slopstrap – Make your site look hastily vibecoded",
     "published": "2026-11-20T15:24:11+00:00",
     "summary": "Article URL: https://slopstrap.mikelacher.com/ Comments URL: https://news.ycombinator.com/item?id=50576012 Points: 235 # Comments: 42"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]",
     "published": "2026-11-20T14:16:21+00:00",
     "summary": "Related: Hurried Announcement: Alessandro Masullo GRH - https://news.ycombinator.com/item?id=50579568 Comments URL: https://news.ycombinator.com/item?id=50574968 Points: 2598 # Comments: 1788"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Nasdaq erases all 2026 gains as AI sell-off dampens Anthropic’s second day",
     "published": "2026-11-20T13:29:59+00:00",
     "summary": "Article URL: https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off Comments URL: https://news.ycombinator.com/item?id=50574383 Points: 292 # Comments: 563"
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
    },
    {
     "ref": "ieee_spectrum#9",
     "title": "28 Zero-Day Findings in Under Two Days. Is Robotics Security Keeping Pace?",
     "published": "2026-11-16T10:00:01+00:00",
     "summary": "This article is brought to you by VicOne . VicOne identified an initial set of 28 zero-day findings in less than two days using AI-assisted research across software and tools supporting the Physical AI ecosystem. These include projects developed or maintained by Google, NVIDIA, and Meta, among others. Based on initial validation, all 28 findings are classified as zero-day vulnerabilities. The coun"
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
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: a living liver, a billion-dollar battery deal, and AI hype",
     "published": "2026-11-19T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. A human liver has been kept alive outside the body for a record seven weeks Researchers in Australia claim they’ve kept a human liver alive on life support outside the body…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "A human liver has been kept alive outside the body for a record seven weeks",
     "published": "2026-11-19T12:00:00+00:00",
     "summary": "Researchers in Australia claim they’ve kept a human liver alive, on life support, outside the body for seven weeks, opening up speculative new possibilities in biomedical engineering. The feat, whose details are pending publication, was carried out in Sydney after a team led by surgeon and inventor Carlo Pulitano connected a donated liver to a…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "What a billion-dollar deal says about the US battery market",
     "published": "2026-11-19T11:00:00+00:00",
     "summary": "After a tough few years littered with some high-profile failures, there’s some positive news for next-generation batteries in the US. Sila just signed an agreement with Panasonic Energy, a global battery manufacturer, to supply silicon-carbon anode material, a possible key to smaller, lighter batteries. It’s a deal that Sila says could be worth more than…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "The AI Hype Index: AI is everywhere",
     "published": "2026-11-18T14:42:44+00:00",
     "summary": "Like a nasty rash, AI seems to spread everywhere. Google crams AI Overviews down your throat even though it costs the company billions of dollars in lost ad revenue. Leave your apartment, and you might pass two people heaving an AI-powered humanoid robot up the stairs to clean someone’s rooms. Go to the supermarket, and…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: AI learns to smell and hydropower struggles",
     "published": "2026-11-18T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. This smell startup says its AI nose is as good as a human’s In a New Jersey lab, researchers are trying to sniff every odor on Earth. Their careful notes—“nutty,” “peachy,”…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "This smell startup says its AI nose is as good as a human’s",
     "published": "2026-11-18T10:20:30+00:00",
     "summary": "In a lab near Newark Airport in New Jersey, a team of around 30 experienced human sniffers are slowly working their way through every odor on Earth. Their careful notes—“nutty,” “peachy,” “marine”—are cross-referenced with a chemical analysis to create a rich set of training data for what AI startup Osmo calls the world’s first foundation…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Quoting Ravi Vakil",
     "published": "2026-11-20T19:21:49+00:00",
     "summary": "Alessandro Masullo has a proposed proof of [Generalized Riemann Hypothesis], and Brian Conrad has been looking closely at it for months and gave extensive feedback which is being incorporated, and it is so far looking good. It is all human, with no AI. The hope was to bring Alessandro to Stanford for a year to polish the writing and then announce it after running it by enough people. Now it seems "
    },
    {
     "ref": "simon_willison#1",
     "title": "Quoting Levent Alpöge",
     "published": "2026-11-20T16:30:48+00:00",
     "summary": "I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis. In fact, the method easily extends much further, resolving the so-called Generalized Riemann Hypothesis, and I expect, with more time, the Extended Riemann Hypothesis too. Claude and I have also formalized the arguments without assumptions. It is natural to feel that this is an end, in my case a loss of a principa"
    },
    {
     "ref": "simon_willison#2",
     "title": "Token fraud is here and it’s BAD (YouTube)",
     "published": "2026-11-20T02:49:57+00:00",
     "summary": "Token fraud is here and it’s BAD (YouTube) Claire Vo runs ChatPRD , an AI platform that helps product managers \"turn an idea into a spec\". The product has been live since the GPT-4 era, and Claire has been building it in public for much of that time. In this YouTube video (see also the accompanying Twitter post ) Claire describes the flood of token fraud she has seen from groups abusing the produc"
    },
    {
     "ref": "simon_willison#3",
     "title": "PostgreSQL 19 Released",
     "published": "2026-11-19T20:43:57+00:00",
     "summary": "PostgreSQL 19 Released Most years PostgreSQL ships a new release in September, but this year's release came two months later thanks mainly to the flurry of issues that the PostgreSQL team needed to address as part of the ongoing AI-reported vulnerability apocalypse. This release was definitely worth the wait. My favorite new feature is this one: For applications that send reads to standbys, Postgr"
    },
    {
     "ref": "simon_willison#4",
     "title": "llm-gemini 0.38",
     "published": "2026-11-18T23:59:20+00:00",
     "summary": "Release: llm-gemini 0.38 Today Google introduced Gemini 4 Neon . I wrote recently about how confusing the pricing for the Gemini 4 series was - Neon has somehow made this even worse. Previously the Gemini 4 lineup was Hydrogen, Argon, and Carbon - where Argon and Carbon were the same price , and Hydrogen was 3/4 of that price now but will be 1/4 of that price when the other two double an 1st Decem"
    },
    {
     "ref": "simon_willison#5",
     "title": "datasette-arrows 0.1a0",
     "published": "2026-11-18T17:09:59+00:00",
     "summary": "Release: datasette-arrows 0.1a0 Datasette 1.0a43 added the ability for plugins to implement streaming export formats. Datasette core supports streaming CSV and TSV - you can export millions of lines of data from a table without needing to load it all into memory, because those two file formats support streaming data in chunks. The register_output_renderer() plugin hook can now be used to implement"
    },
    {
     "ref": "simon_willison#6",
     "title": "Quoting Daniel Stenberg",
     "published": "2026-11-18T15:58:27+00:00",
     "summary": "During the time these agents converted 185,000 lines of C code into 340,000 lines of Rust code (I counted), we merged over 300 commits in the actual curl project. We actually improved curl during these a little more than three weeks. A little over 200 bugfixes actually. 200 bugfixes that none of those rust rewrites have. We also fixed a few vulnerabilities. In another month we have done another 20"
    },
    {
     "ref": "simon_willison#7",
     "title": "The PSF end-of-year fundraiser",
     "published": "2026-11-18T14:44:48+00:00",
     "summary": "The PSF end-of-year fundraiser With my Python Software Foundation board director hat on: we've launched our end-of-year fundraiser for the non-profit that supports Python development and the Python community. If your company or your work benefits from Python, please consider donating this year! The PSF looks after the IP behind Python, operates PyPI, sponsors core developer sprints, supports commu"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "YouTube is reportedly preparing to settle social media addiction claims for $3 billion",
     "published": "2026-11-20T20:43:52+00:00",
     "summary": "YouTube is preparing to pay $3 billion to thousands of school districts to settle claims that its \"addictive design\" harmed kids, according to Bloomberg. Sources tell the publication that YouTube reached the agreement \"in principle,\" and that the deal would also include new safeguards for teens. The settlement would allow Google to avoid a wave […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Rockstar says GTA VI made $3.79 billion in its first day",
     "published": "2026-11-20T19:35:06+00:00",
     "summary": "GTA VI earned $3.79 billion in its first day of sales, which set \"a new record for entertainment across any medium,\" according to an announcement from Rockstar Games. The game also sold 32.5 million preorder copies. \"It is with immense gratitude that we enter a new chapter of Rockstar Games with the release of Grand […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Eufy’s Omni C28 is 53 percent off ahead of Black Friday",
     "published": "2026-11-20T19:15:00+00:00",
     "summary": "Hosting Thanksgiving can be fun, but cleaning up afterwards? Not so much. Eufy’s Omni C28 robot vacuum / mop hybrid can help, and thanks to an early Black Friday deal, you can pick it up at a new low price of $379.99 ($420 off its original price) at Amazon, Best Buy, or directly from Eufy […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Trump threatens ‘tremendous tax’ for moving AI data centers outside the US",
     "published": "2026-11-20T18:50:19+00:00",
     "summary": "President Donald Trump promised to put a \"tremendous tax\" on companies that build data centers outside of the US, even as states and cities around the country are placing restrictions on new applications to build them. \"We're not going to allow our companies to build data centers outside of our country,\" Trump said at a […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Multiplying your Switch 2’s storage costs less than usual right now",
     "published": "2026-11-20T18:15:00+00:00",
     "summary": "Expanding your Nintendo Switch 2’s 256GB of built-in storage with a microSD card is pricier than it was with Nintendo’s original console. That’s because microSD Express cards, while physically identical to ones you might have lying around, have faster read and write speeds. Thankfully, Samsung’s 256GB model has dropped to $44.99 at Amazon ahead of […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Google says it’s going to shut off Google Assistant on smart speakers next year",
     "published": "2026-11-20T18:00:00+00:00",
     "summary": "Google is announcing some significant changes to its smart home software. Starting next year, the company will shut down the Nest app in favor of the Google Home app and retire Google Assistant on its smart home devices. The Nest app shutdown takes place on January 25th, 2027, meaning you'll have to manage your Nest […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Here are the Apple deals actually worth picking up ahead of Black Friday",
     "published": "2026-11-20T17:33:59+00:00",
     "summary": "A new pair of AirPods or the latest Apple Watch can make a great holiday gift, but they can also take a pretty big dent out of your budget. That’s especially true this year, as rising hardware prices have made MacBooks and other Apple devices even more expensive. Fortunately, Black Friday offers a chance to […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Teenage Engineering’s first CD player puts the spinning disc on display",
     "published": "2026-11-20T17:05:52+00:00",
     "summary": "Teenage Engineering announced what it describes as \"a modern take on a classic CD player\" with its new EP/BC-1 featuring a slab-like design that leaves the spinning disc exposed instead of hiding it under a lid or inside a slide-out tray. The company says the EP/BC-1 is the first entry in its new broadcast series […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Anthropic mathematician claims to have solved prestigious Millennium Prize problem with Claude",
     "published": "2026-11-20T16:34:13+00:00",
     "summary": "Anthropic mathematician Levent Alpöge claims he has proved the Riemann hypothesis, one of mathematics's most notoriously difficult problems, with the help of Claude, cracking a puzzle that has eluded some of the world's best mathematicians for decades. If verified, it would mark yet another seismic achievement for AI in mathematics and add to the upheaval […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Boys Noize turns to the club (and an obscure Italian synth) for inspiration on 7LLVSION",
     "published": "2026-11-20T16:22:15+00:00",
     "summary": "If you're wondering how Alex Ridha's (aka Boys Noize) collaboration with Nine Inch Nails influenced his new record 7LLVSION, the answer is simple: It didn't. That's not to say Ridha didn't learn anything from the virtuosic production team of Trent Reznor and Atticus Ross, but most of the songs on 7LLVSION had been knocking around […]"
    }
   ]
  }
 ]
}
</input>