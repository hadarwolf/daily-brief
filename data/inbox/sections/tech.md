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
     "title": "Review: Godzilla Minus Zero joins the list of truly stellar sequels",
     "published": "2026-11-21T22:12:41+00:00",
     "summary": "Director Takashi Yamazaki ups the ante by pitting Godzilla against one of the monster's greatest foes"
    },
    {
     "ref": "ars_technica#1",
     "title": "“Race realism” isn’t realistic—and it isn’t good science",
     "published": "2026-11-21T12:01:13+00:00",
     "summary": "Modern genetics does not support claims of innate racial differences in intelligence."
    },
    {
     "ref": "ars_technica#2",
     "title": "Trump FCC declares California isn't allowed to enforce phone service rules",
     "published": "2026-11-20T22:28:24+00:00",
     "summary": "FCC preempts state rules that require AT&T to keep offering home phone service."
    },
    {
     "ref": "ars_technica#3",
     "title": "SpaceX's Starshield troubles in Ukraine could threaten its broader military business",
     "published": "2026-11-20T22:16:51+00:00",
     "summary": "\"Explain the changes that were made to the Starshield service in October 2026.\""
    },
    {
     "ref": "ars_technica#4",
     "title": "Google rolls out new search homepage with AI chat history and no search button",
     "published": "2026-11-20T21:58:29+00:00",
     "summary": "Google search is making it even easier to access AI tools on the search page."
    },
    {
     "ref": "ars_technica#5",
     "title": "Meta reconsiders 2030 net-zero goal amid record emissions from AI data centers",
     "published": "2026-11-20T21:47:10+00:00",
     "summary": "Meta is “re-evaluating” 2030 sustainability goals. Will others follow?"
    },
    {
     "ref": "ars_technica#6",
     "title": "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced.",
     "published": "2026-11-20T20:59:08+00:00",
     "summary": "Test using prompts with unique, trackable secrets proves that data doesn't stay private."
    },
    {
     "ref": "ars_technica#7",
     "title": "Watching as a giant star swallowed its neighbor and exploded",
     "published": "2026-11-20T20:41:17+00:00",
     "summary": "A recent brightening turned out to be from a star orbiting inside another."
    },
    {
     "ref": "ars_technica#8",
     "title": "NASA’s new Moon plan is taking shape, but some big questions remain",
     "published": "2026-11-20T20:26:33+00:00",
     "summary": "\"We tend to have a lot of technical discussion and debate. That point will continue to be debated.\""
    },
    {
     "ref": "ars_technica#9",
     "title": "Prisons get OK to jam contraband phones. CTIA says nearby phones will be jammed too.",
     "published": "2026-11-20T19:52:59+00:00",
     "summary": "CTIA said jamming test showed \"interference... up to two and a half miles away.\""
    },
    {
     "ref": "ars_technica#10",
     "title": "Army delays detonating \"catastrophically hazardous\" lead azide amid fear, anger",
     "published": "2026-11-20T19:21:50+00:00",
     "summary": "Modeling predicts plume of neurotoxic lead could reach up to 100 miles away."
    },
    {
     "ref": "ars_technica#11",
     "title": "Valve says it might have to raise the price of supply-limited Steam Machines",
     "published": "2026-11-20T16:11:21+00:00",
     "summary": "\"We don't yet know the number we are able to make, and at what price...\""
    },
    {
     "ref": "ars_technica#12",
     "title": "US will soon announce root cause behind FAA nationwide ground stop",
     "published": "2026-11-20T14:52:51+00:00",
     "summary": "Former FAA insider on reducing the risks of upgrading a decades-old network."
    },
    {
     "ref": "ars_technica#13",
     "title": "SpaceX lenders don’t want Elon Musk launching their collateral into space",
     "published": "2026-11-20T14:15:21+00:00",
     "summary": "Bondholders want SpaceX’s valuable chip collateral kept on Earth and within reach."
    },
    {
     "ref": "ars_technica#14",
     "title": "Rocket Report: A weekend of ups and downs; Stoke celebrates engine milestone",
     "published": "2026-11-20T13:35:45+00:00",
     "summary": "Russia launched a Soyuz rocket with satellites to help enable drone attacks over Ukraine."
    },
    {
     "ref": "ars_technica#15",
     "title": "Only the Seminole Tribe can offer online gambling in Florida—and they're furious at DraftKings",
     "published": "2026-11-20T12:30:29+00:00",
     "summary": "Gambling? We're just swapping contracts!"
    },
    {
     "ref": "ars_technica#16",
     "title": "Science has a home here at Ars—please help keep it that way",
     "published": "2026-11-20T12:15:36+00:00",
     "summary": "Your support for Ars matters more now than ever."
    },
    {
     "ref": "ars_technica#17",
     "title": "Trump admin still won't let Wi-Fi giant TP-Link sell its latest routers in US",
     "published": "2026-11-20T12:00:43+00:00",
     "summary": "TP-Link's struggle illustrates how Trump admin wields control over device makers."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "בואו ללמוד בלייב איך מביאים סוכנים לפרודקשן (בלי לאבד שנה מהחיים)",
     "published": "2026-11-22T09:32:36+00:00",
     "summary": "מנהלי IT ואבטחת מידע עומדים היום מול דילמה דחופה: מצד אחד, קיים לחץ עסקי לאמץ סוכני AI ולהפיק מהם ערך במהירות. מצד שני, האימוץ הזה מגיע עם סכנות אבטחה משמעותיות – סוכנים שפועלים בלי פיקוח, חשיפת מידע רגיש וקושי לנטר את הפעילות. בארגונים רבים חסרה מסגרת Governance ברורה, ולכן הם תקועים באמצע הדרך שבין פיילוט […] The post בואו ללמוד בלייב איך מביאים סוכנים לפרודקשן (בלי לאבד שנה מהחיים) appeared fir"
    },
    {
     "ref": "geektime#1",
     "title": "אפילו עמוד החיפוש הקלאסי של Google נכנע ל-AI",
     "published": "2026-11-22T08:49:11+00:00",
     "summary": "גם העמוד המוכר ביותר באינטרנט לא חסין בפני השפעות ה-AI והוא בדרך למתיחת פנים נדירה למדי. אחרי שגוגל נתפסה לא מוכנה במירוץ ה-AI, ואחרי הקאמבק, ואחרי שהיא שוב נתפסת כמפגרת אחרי המתחרות – היא מתחילה להטמיע את Gemini עמוק גם לתוך מוצר הדגל שלה, עמוד החיפוש. היכונו לעוד שינוי השינוי המשמעותי הראשון לעמוד הבית של […] The post אפילו עמוד החיפוש הקלאסי של Google נכנע ל-AI appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#2",
     "title": "טריליוני דולרים נמחקו אחרי שאנבידיה ושאר מניות הטכנולוגיה התרסקו",
     "published": "2026-11-22T08:16:54+00:00",
     "summary": "אחרי חודשים ארוכים שבהם מניות ה-AI סחבו את וול סטריט על הגב, נראה שלשוק ההון מתחילה להיגמר הסבלנות. ביום שישי האחרון ננעל שבוע מסחר מדמם במיוחד עבור ענקיות הטכנולוגיה, עם ירידות חדות במדדים המובילים בארה\"ב, מחיקה של טריליוני דולרים משווי החברות, והצלילה הגדולה ביותר של מניית אנבידיה (NVIDIA) מאז התפטרות ג'נסן הואנג. מה בעצם קרה […] The post טריליוני דולרים נמחקו אחרי שאנבידיה ושאר מניות הטכנולוגיה"
    },
    {
     "ref": "geektime#3",
     "title": "סוכנים וסיכונים: 3 אירועים מומלצים שבאמת תלמדו בהם משהו חדש",
     "published": "2026-11-21T16:29:29+00:00",
     "summary": "ההייטק הישראלי לא עוצר: הנה המיטאפים, הכנסים והרצאות הטכנולוגיה המסקרנים שצפויים בקרוב. בפיזי או ברשת – אלו אירועי ההייטק המומלצים שאתם רוצים לשריין להם מקום ביומן. מארגנים אירוע או שמעתם על אירוע לקהילה הטכנולוגית בישראל? מוזמנים לעדכן אותנו כאן ולפרסם אותו בחינם בלוח האירועים שלנו. CxO Security Breakfast | Google Cloud and Sela מתי? 6 […] The post סוכנים וסיכונים: 3 אירועים מומלצים שבאמת תלמדו ב"
    },
    {
     "ref": "geektime#4",
     "title": "ה-AI הפך את כולם לבילדרים. וזו בדיוק הבעיה",
     "published": "2026-11-21T13:33:44+00:00",
     "summary": "כמה התרגשנו כשהבינה המלאכותית הגיעה לחיינו. כל מי שחלם על מיזם יכול היה פתאום לבנות אותו במו ידיו. וכולם אכן בונים. כל אחד מרים לעצמו את הכלי שהוא צריך בלי לחכות שמישהו אחר יעשה את זה בשבילו. אבל לחלום הזה יש צד שני: הביקוש נגמר. אף אחד לא מעוניין יותר בכלים של אחרים. זה כמו […] The post ה-AI הפך את כולם לבילדרים. וזו בדיוק הבעיה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#5",
     "title": "מחכים עם הקניות לבלאק פריידי? הנתונים מראים שזו אולי טעות",
     "published": "2026-11-21T11:12:26+00:00",
     "summary": "הרבה מכם מכירים את הנוהל: ממלאים את עגלת הקניות באמזון במהלך השבועות האחרונים, ויושבים עליה בסבלנות עד סוף נובמבר כדי לתפוס את ההנחות של הבלאק פריידיי. זה אולי מרגיש כמו צרכנות חכמה ותחושת ה\"דפקתי את המערכת\" האהובה עלינו כישראלים, אבל מחקר חדש שבדק את היסטוריית המחירים של מאות מוצרים באמזון מראה שלפעמים, ההמתנה הזו פשוט […] The post מחכים עם הקניות לבלאק פריידי? הנתונים מראים שזו אולי טעות appeare"
    },
    {
     "ref": "geektime#6",
     "title": "במשחק הזה אתם צריכים שיפטרו את כל ההייטקיסטים",
     "published": "2026-11-21T08:21:29+00:00",
     "summary": "בזמן שרבים בהייטק חוששים שה-AI יחליף אותם (והנתונים בהחלט מעידים על מקום לדאגה), משחק ישראלי חדש מציע לכם לעבור דווקא לצד השני של המתרס. במקום לעדכן קורות חיים ולעבוד על יכולות הריאיון שלכם, אתם תיכנסו לנעליים של מעבדת AI ותנסו להשתלט על שוק העבודה העולמי, מקצוע אחר מקצוע, לפני שהרגולציה תשתלט עליכם. כשסין ניסתה לגנוב […] The post במשחק הזה אתם צריכים שיפטרו את כל ההייטקיסטים appeared first on גיק"
    },
    {
     "ref": "geektime#7",
     "title": "סם אלטמן התלונן שאנחנו מבזבזים RAM וקיבל הטרלה מושלמת",
     "published": "2026-11-20T11:51:07+00:00",
     "summary": "אם יש כלל ברזל שלמדנו בעשורים האחרונים הוא שהאינטרנט זוכר הכל – גם פליטות פה רנדומליות. סם אלטמן, מנכ\"ל OpenAI, גילה את זה בדרך הקשה אחרי שהתלונן על הדרך שבה אנחנו, המוגלגים, \"מבזבזים\" RAM במחשבים שלנו, במקום שחוות השרתים של ChatGPT יוכלו לנצל את המשאב הנדיר. אז מפתח אחד החליט לקחת את האמירה הזו לקצה, […] The post סם אלטמן התלונן שאנחנו מבזבזים RAM וקיבל הטרלה מושלמת appeared first on גיקטיים ."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
     "published": "2026-11-22T04:04:56+00:00",
     "summary": "Article URL: https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/ Comments URL: https://news.ycombinator.com/item?id=50596133 Points: 482 # Comments: 282"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Sandwich Simulator",
     "published": "2026-11-22T00:07:59+00:00",
     "summary": "Article URL: https://stulle.app/ Comments URL: https://news.ycombinator.com/item?id=50594911 Points: 239 # Comments: 81"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Advice for the next 100 Rust GUIs",
     "published": "2026-11-21T21:17:53+00:00",
     "summary": "Article URL: https://linebender.org/blog/next-100-guis/ Comments URL: https://news.ycombinator.com/item?id=50593737 Points: 164 # Comments: 65"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Inkling-2-Mini in 5.4 GB Memory",
     "published": "2026-11-21T18:02:19+00:00",
     "summary": "Article URL: https://github.com/ShinMegamiBoson/lookatmyquant Comments URL: https://news.ycombinator.com/item?id=50591853 Points: 462 # Comments: 117"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Lean verification of the Riemann Hypothesis",
     "published": "2026-11-21T14:36:45+00:00",
     "summary": "Article URL: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/ Comments URL: https://news.ycombinator.com/item?id=50589618 Points: 1033 # Comments: 854"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Detonating a pile of lead azide",
     "published": "2026-11-21T13:23:14+00:00",
     "summary": "Article URL: https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really Comments URL: https://news.ycombinator.com/item?id=50588982 Points: 611 # Comments: 387"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "My monitor was cutting my download speed by 75%",
     "published": "2026-11-21T10:36:32+00:00",
     "summary": "Article URL: https://blog.tymscar.com/posts/studiodisplayethernet/ Comments URL: https://news.ycombinator.com/item?id=50587875 Points: 586 # Comments: 273"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "GnuPG Security Advisory for GPGME",
     "published": "2026-11-21T08:32:58+00:00",
     "summary": "Article URL: https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html Comments URL: https://news.ycombinator.com/item?id=50587208 Points: 252 # Comments: 101"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Getting the mind to steer the body to steer you",
     "published": "2026-11-20T22:11:05+00:00",
     "summary": "Article URL: https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body Comments URL: https://news.ycombinator.com/item?id=50583028 Points: 273 # Comments: 90"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'",
     "published": "2026-11-20T21:03:12+00:00",
     "summary": "Article URL: https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib Comments URL: https://news.ycombinator.com/item?id=50582069 Points: 998 # Comments: 216"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Hurried Announcement: Alessandro Masullo GRH",
     "published": "2026-11-20T18:33:14+00:00",
     "summary": "Related: Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf] - https://news.ycombinator.com/item?id=50574968 Comments URL: https://news.ycombinator.com/item?id=50579568 Points: 2417 # Comments: 1175"
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
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Muru",
     "published": "2026-11-21T23:56:28+00:00",
     "summary": "Muru Graham Dumpleton started mod_wsgi 20 years ago, and has been thinking about the ideal way to serve Python web applications in production ever since. Muru is his new, AI-assisted Rust server that aims to provide the best possible tools for running ASGI and WSGI Python apps both in development and production. As he did with wrapture , he's been publishing an extraordinarily detailed account of "
    },
    {
     "ref": "simon_willison#1",
     "title": "Quoting Ravi Vakil",
     "published": "2026-11-20T19:21:49+00:00",
     "summary": "Alessandro Masullo has a proposed proof of [Generalized Riemann Hypothesis], and Brian Conrad has been looking closely at it for months and gave extensive feedback which is being incorporated, and it is so far looking good. It is all human, with no AI. The hope was to bring Alessandro to Stanford for a year to polish the writing and then announce it after running it by enough people. Now it seems "
    },
    {
     "ref": "simon_willison#2",
     "title": "Quoting Levent Alpöge",
     "published": "2026-11-20T16:30:48+00:00",
     "summary": "I believe I have, working with Claude, discovered a proof of the Riemann Hypothesis. In fact, the method easily extends much further, resolving the so-called Generalized Riemann Hypothesis, and I expect, with more time, the Extended Riemann Hypothesis too. Claude and I have also formalized the arguments without assumptions. It is natural to feel that this is an end, in my case a loss of a principa"
    },
    {
     "ref": "simon_willison#3",
     "title": "llm-gemini 0.38.1",
     "published": "2026-11-20T03:01:57+00:00",
     "summary": "Release: llm-gemini 0.38.1 Gemini 4 Carbon only supports low , medium and high reasoning levels - but Gemini 4 Hydrogen and Gemini 4 Neon both have an extra xhigh level. I missed that when I added those models to the llm-gemini plugin, which is now fixed in this dot release. The xhigh setting for Hydrogen makes a significant difference. I updated my Gemini 4 comparison grid - note how Hydrogen at "
    },
    {
     "ref": "simon_willison#4",
     "title": "Token fraud is here and it’s BAD (YouTube)",
     "published": "2026-11-20T02:49:57+00:00",
     "summary": "Token fraud is here and it’s BAD (YouTube) Claire Vo runs ChatPRD , an AI platform that helps product managers \"turn an idea into a spec\". The product has been live since the GPT-4 era, and Claire has been building it in public for much of that time. In this YouTube video (see also the accompanying Twitter post ) Claire describes the flood of token fraud she has seen from groups abusing the produc"
    },
    {
     "ref": "simon_willison#5",
     "title": "PostgreSQL 19 Released",
     "published": "2026-11-19T20:43:57+00:00",
     "summary": "PostgreSQL 19 Released Most years PostgreSQL ships a new release in September, but this year's release came two months later thanks mainly to the flurry of issues that the PostgreSQL team needed to address as part of the ongoing AI-reported vulnerability apocalypse. This release was definitely worth the wait. My favorite new feature is this one: For applications that send reads to standbys, Postgr"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Amazon is complaining about NYC Council on shipping labels, too",
     "published": "2026-11-21T21:59:31+00:00",
     "summary": "Amazon is leaving no venue unexplored in its fight against the New York City Council and the Delivery Protection Act. The company is now putting labels on shipments claiming that the Council could add up to $5 to any Amazon order. The Delivery Protection Act would effectively ban the sort of third-party arrangements Amazon currently […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The UN fails to agree on rules regulating ‘killer robots’",
     "published": "2026-11-21T20:03:37+00:00",
     "summary": "One of the items on the agenda for UN diplomats meeting in Geneva this week was working towards rules regarding the use of autonomous weapons, or so-called \"killer robots.\" Eventually, representatives left the meetings agreeing to \"start discussing options\" after a largely fruitless week of negotiations. According to NPR: Before the negotiations got underway, the […]"
    },
    {
     "ref": "the_verge#2",
     "title": "The FBI and USDA were reportedly hacked",
     "published": "2026-11-21T17:42:27+00:00",
     "summary": "Friday, it was reported that both the US Department of Agriculture (USDA) and the FBI were hacked. In reporting on the FBI hack, CNN noted that this is the second such attack on the agency in the last few months, this time targeting the National Crime Information Center (NCIC), which federal, state, and local law […]"
    },
    {
     "ref": "the_verge#3",
     "title": "John Roberts, the voice of Linda Belcher, is just happy to finish a thing",
     "published": "2026-11-21T16:00:00+00:00",
     "summary": "You probably know John Roberts best as the voice of Linda Belcher on Bob's Burgers. The show just wrapped up its 16th season and shows no signs of slowing down anytime soon. The show remains a reliable source of laughs, top-notch puns, and frankly wholesome fun. Comedy is just part of Roberts' life, however. In […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Amazon’s first digital photo frame is up to 50 percent off for Black Friday",
     "published": "2026-11-21T16:00:00+00:00",
     "summary": "Amazon only announced its first digital photo frame less than a month ago, but it’s already getting a sizable discount for Black Friday. You can currently grab the Alexa Photo Frame at Amazon and Best Buy starting at $114 ($115 off), making it a great holiday gift for anyone who loves displaying family photos. If […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Can Anthropic afford to put safety first?",
     "published": "2026-11-21T15:00:00+00:00",
     "summary": "Today, I’m talking with Hayden Field, The Verge’s senior AI reporter, about the Anthropic IPO for the third and final episode in our series about AI in real life. The AI lab behind Claude went public on the Nasdaq last Thursday. The numbers are gigantic, but not really that important for this conversation, except to […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Our go-to earbuds for taking calls have fallen to their lowest price to date",
     "published": "2026-11-21T14:55:28+00:00",
     "summary": "If you’re looking for a new pair of earbuds, the Soundcore Liberty 5 Pro are on sale for $129.99 at Amazon, Best Buy, and Walmart right now. That’s the lowest price we’ve seen for Anker’s excellent wireless earbuds, which normally retail for $169.99 and come in four colors (black, white, blue, and pink) all of […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Chess.com’s next move is a new hub for classic games, from mahjong to sudoku",
     "published": "2026-11-21T14:00:00+00:00",
     "summary": "Chess.com is ready to go a lot bigger than chess. After launching Gambit, a gambling-free poker site, earlier this year, the company is now adding 10 more games: backgammon, checkers, go, hearts, mahjong, shogi, sudoku, solitaire, xiangqi, and a Scrabble alternative called word. They're all part of Chess's new Classic Games platform, which is launching […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The Xiaomi 18 Pro proves two screens aren’t better than one",
     "published": "2026-11-21T13:00:00+00:00",
     "summary": "Xiaomi introduced a second screen to its flagship phones with last year's 17 Pros, but didn't release them outside China. That means the new 18 Pro and Pro Max are the first chance I've had to find out if a screen on the back of a phone is any more useful now than it was […]"
    },
    {
     "ref": "the_verge#9",
     "title": "The game of the year is finally here",
     "published": "2026-11-21T13:00:00+00:00",
     "summary": "Hi, friends! Welcome to Installer No. 153, your guide to the best and Verge-iest stuff in the world. (If you're new here, welcome, thank you for tearing yourself away from GTA to be here, and also you can read all the old editions at the Installer homepage.) This week, I've been reading about nuclear radiation […]"
    }
   ]
  }
 ]
}
</input>