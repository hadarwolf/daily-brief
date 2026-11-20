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
     "title": "Amazon fights the Delivery Protection Act with homepage banner, in-app pop-up",
     "published": "2026-11-19T22:16:37+00:00",
     "summary": "Amazon now uses its shopping platform for political purposes."
    },
    {
     "ref": "ars_technica#1",
     "title": "MAHA PAC spent more on steak, luxury club than candidates, report shows",
     "published": "2026-11-19T21:19:12+00:00",
     "summary": "Expert called MAHA's spending \"pretty unusual\" for a PAC."
    },
    {
     "ref": "ars_technica#2",
     "title": "Man hired by Russia spied on Silicon Valley tech and defense company, feds say",
     "published": "2026-11-19T20:29:46+00:00",
     "summary": "25-year-old accused of stalking employees at coffee shop and in an \"aggressive\" car pursuit."
    },
    {
     "ref": "ars_technica#3",
     "title": "Traumatized teens sue school, cops after Doritos bag triggers AI gun alert",
     "published": "2026-11-19T20:19:28+00:00",
     "summary": "Lawsuit: Over 99% of school system’s AI gun alerts were false positives."
    },
    {
     "ref": "ars_technica#4",
     "title": "Google turns to Blue Origin for a rocket, but its long-term problem remains",
     "published": "2026-11-19T19:52:54+00:00",
     "summary": "\"Project Suncatcher is a long-term moonshot.\""
    },
    {
     "ref": "ars_technica#5",
     "title": "\"You’re right\"—LLMs will get climate info wrong if you ask",
     "published": "2026-11-19T18:44:39+00:00",
     "summary": "Some models fare better, but all fail in similar ways."
    },
    {
     "ref": "ars_technica#6",
     "title": "Google will launch Android app verification requirement globally in January 2027",
     "published": "2026-11-19T18:00:33+00:00",
     "summary": "Google says almost all developers have already gotten on board with verification."
    },
    {
     "ref": "ars_technica#7",
     "title": "Mouse fight club might explain why we like to watch violent things",
     "published": "2026-11-19T14:04:38+00:00",
     "summary": "Watching fights wasn't as good as practical experience, but it got the mice halfway there."
    },
    {
     "ref": "ars_technica#8",
     "title": "NASA's new Moon plans have a problem: Orion wasn't designed to fly this way",
     "published": "2026-11-19T13:40:02+00:00",
     "summary": "\"We also have a responsibility to not go too fast and cut too many corners.\""
    },
    {
     "ref": "ars_technica#9",
     "title": "How to tell a cyberattack from a plain old outage",
     "published": "2026-11-19T11:13:01+00:00",
     "summary": "When everything goes down, don’t assume it’s a cyberattack."
    },
    {
     "ref": "ars_technica#10",
     "title": "Ted Cruz-led committee approves Trump FCC nominee 15-0 as Democrats boycott vote",
     "published": "2026-11-18T23:25:04+00:00",
     "summary": "Democrats try to prevent quorum, say Thumann lied about not working on media issues."
    },
    {
     "ref": "ars_technica#11",
     "title": "Ukraine blew up Putin’s bridge using relay drones to bypass Starlink limits",
     "published": "2026-11-18T23:10:39+00:00",
     "summary": "Ukraine's strike used homegrown tech while adapting battlefield lessons from its adversary."
    },
    {
     "ref": "ars_technica#12",
     "title": "Trump abandons his FDA nominee, and Senate scraps vote on his NSF pick",
     "published": "2026-11-18T22:08:57+00:00",
     "summary": "\"This time requires leadership and fortitude,\" Senator Bill Cassidy said."
    },
    {
     "ref": "ars_technica#13",
     "title": "Netflix CEO admits app may bury stuff you want to watch under stuff you don’t",
     "published": "2026-11-18T21:29:24+00:00",
     "summary": "CEO Ted Sarandos discusses gaps in making hit shows that streamers can find."
    },
    {
     "ref": "ars_technica#14",
     "title": "Windows Server 2028 trades compatibility for out-of-the-box security",
     "published": "2026-11-18T20:41:12+00:00",
     "summary": "Hardened defaults align with DoD standards, but there may be growing pains."
    },
    {
     "ref": "ars_technica#15",
     "title": "Best Buy sells Blu-rays online and in-store again",
     "published": "2026-11-18T19:31:17+00:00",
     "summary": "Popular titles like The Odyssey are being “sold & shipped by Best Buy.\""
    },
    {
     "ref": "ars_technica#16",
     "title": "Muse privacy invasions are freaking out Meta staffers, internal chats show",
     "published": "2026-11-18T19:19:33+00:00",
     "summary": "Erratic Muse outputs sharing random bank, bitcoin balances aren’t real, Meta says."
    },
    {
     "ref": "ars_technica#17",
     "title": "Trump admin orders Kalshi to halt wagers on what words Trump will say",
     "published": "2026-11-18T18:46:08+00:00",
     "summary": "CFTC: Kalshi bets may violate US ban on contracts that can be easily manipulated."
    },
    {
     "ref": "ars_technica#18",
     "title": "The \"shameful\" measles data that lost the US its elimination status",
     "published": "2026-11-18T18:30:23+00:00",
     "summary": "Measles became endemic in the US months ago—and it's only accelerating."
    },
    {
     "ref": "ars_technica#19",
     "title": "Will Wright's next simulation will use AI to mine content from your memories",
     "published": "2026-11-18T18:10:33+00:00",
     "summary": "With MyMems , Wright says he wants to \"turn the simulation inward.\""
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "כמה אתם מוכנים לשלם כדי להפסיק לאסוף קקי של חתולים?",
     "published": "2026-11-20T08:45:30+00:00",
     "summary": "יש לי שלושה חתולים. היו גם ארבעה, אבל אחת הוכיחה שתשע נשמות זו אגדה אורבנית ועברה לצרוך אוכל היפואלרגני בשמיים. אבל אם אני שם רגע בצד את ענייני הלוגיסטיקה והעלות של אוכל ל-3 חתולים, הבעיה האמיתית שלי היא העובדה שיש הרבה מאוד קקי ופיפי שלהם לנקות. כדי לצמצם את המפגע הריחני, אפילו הפקעתי את מרפסת […] The post כמה אתם מוכנים לשלם כדי להפסיק לאסוף קקי של חתולים? appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#1",
     "title": "ההנפקה הגדולה בהיסטוריה: אנת'רופיק חצתה שווי של 2 טריליון דולר",
     "published": "2026-11-19T19:08:24+00:00",
     "summary": "לפני קצת פחות מ-6 שנים הוקמה Anthropic על ידי שבעה מייסדים, בהם האחים דניאלה ודריו אמודיי, שעזבו בטריקת דלת את OpenAI, והיום (ה') היא הופכת לחברה ציבורית בהנפקה הכי גדולה בהיסטוריה, וחוצה אף את שווי השוק של 2 טריליון דולר. לא הפסיקו לגייס המפתחת של מודלי קלוד וקלוד קוד החלה להיסחר היום בנאסד\"ק תחת הסימול […] The post ההנפקה הגדולה בהיסטוריה: אנת'רופיק חצתה שווי של 2 טריליון דולר appeared first on "
    },
    {
     "ref": "geektime#2",
     "title": "הפשע המושלם: שילמו לי כדי לשחק GTA 6 וזה מה שחשבתי עליו",
     "published": "2026-11-19T15:25:01+00:00",
     "summary": "אני חושב שעשיתי היום את הפשע המושלם. לא, אני לא מדבר על משימה ב-GTA 6. אני מדבר על הפשע המושלם שבמסגרתו קמתי היום בבוקר, הפעלתי את ה-PlayStation 5 והתחלתי לשחק ב-GTA 6 – וקיבלתי על זה משכורת. כן, זה אחד הימים האלה שבהם אני לא מאמין שזו העבודה שלי, אבל מישהו צריך לעשות את העבודה […] The post הפשע המושלם: שילמו לי כדי לשחק GTA 6 וזה מה שחשבתי עליו appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר",
     "published": "2026-11-19T09:35:10+00:00",
     "summary": "בחודש אוקטובר האחרון, מיקרוסופט הטילה פצצה בעולם הטכנולוגיה כשהציעה ל-60 אלף עובדים – כמעט 30% מסך העובדים בחברה – להתפטר במסגרת של חבילות פרישה מרצון. על פניו זה הריח כמו גל פיטורים שקט, כמעט מנומס של החברה, אבל עכשיו המנכ\"ל סאטיה נאדלה מסביר את המהלך. אמ;לק: זה ה-AI, אבל לא בקטע של \"הרובוטים מחליפים אותנו\", […] The post מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר appeared first on גיקט"
    },
    {
     "ref": "geektime#4",
     "title": "בפעם השנייה השנה: Tipalti מפטרת עשרות עובדים בישראל",
     "published": "2026-11-19T08:43:54+00:00",
     "summary": "סבב קיצוצים נוסף בחברת הפינטק הישראלית Tipalti: במסגרת המהלך צפויה החברה לקצץ קרוב ל-25% מכוח האדם שלה בעולם, כשעשרות עובדים בישראל צפויים לסיים את תפקידם. כיום מעסיקה החברה כ-900 עובדים בעולם וכ-300 מתוכם בישראל. סבב הפיטורים הזה הוא הרביעי של החברה בשנים האחרונות והשני ב-2026. מגמת הקיצוצים החלה ב-2023, אז נפרדה החברה מ-123 עובדים – […] The post בפעם השנייה השנה: Tipalti מפטרת עשרות עובדים בישרא"
    },
    {
     "ref": "geektime#5",
     "title": "גוגל מביאה את מצב האינקוגניטו לחיפוש ה-AI שלה",
     "published": "2026-11-19T07:54:31+00:00",
     "summary": "רוצים לשאול את גוגל משהו אישי או סתם לחפש מידע בלי שהוא ירדוף אחריכם לכל מקום ברשת? עד עכשיו ה-AI של גוגל לא ממש אפשר לכם לעשות את זה, אבל פיצ'ר חדש מנסה להביא את מצב ה-Incognito המוכר (גם אם שנוי במחלוקת) גם לחיפוש ה-AI שלה. האם עכשיו באמת תוכלו לחפש בלי להשאיר עקבות? […] The post גוגל מביאה את מצב האינקוגניטו לחיפוש ה-AI שלה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#6",
     "title": "הממשלה מקדמת \"ארגז חול\" לסטארטאפים, אבל שכחה 4 דברים בדרך",
     "published": "2026-11-18T14:08:52+00:00",
     "summary": "תחשבו על יזמת שפיתחה מערכת AI שמנתחת אולטרסאונד שאישה בהיריון עושה בבית. או על שלושה מהנדסים שבנו רמזור שמחליט לבד מתי להתחלף לפי מצב התנועה. או על סטארטאפ שרוצה לנסות הסעות משותפות בתשלום ברכב פרטי. לכולם יש אותה בעיה: המוצר עובד, אבל החוק לא מאפשר לנסות אותו. לא כי מישהו קבע שזה מסוכן, אלא כי […] The post הממשלה מקדמת \"ארגז חול\" לסטארטאפים, אבל שכחה 4 דברים בדרך appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#7",
     "title": "\"זה מקצוע חדש בפני עצמו\": יוצאי 8200 גייסו 11 מיליון דולר",
     "published": "2026-11-18T13:00:54+00:00",
     "summary": "\"AI Security היא לא בעיית אבטחה ישנה שעברה לדומיין חדש. זה מקצוע חדש בפני עצמו\", אומר בשיחה עם גיקטיים אלעד טסלר – מנכ\"ל ומייסד של הסטארטאפ Vero Security. לדבריו, ה-AI משנה את הדרך שבה תוכנה נבנית, פועלת ומתקשרת עם מערכות אחרות, וכל תעשיית התוכנה ממציאה את עצמה מחדש סביבו. ובגלל כל השינויים הללו, צוותי אבטחה […] The post \"זה מקצוע חדש בפני עצמו\": יוצאי 8200 גייסו 11 מיליון דולר appeared first on ג"
    },
    {
     "ref": "geektime#8",
     "title": "הביקורות הראשונות של GTA 6 התפרסמו: הנה מה שחושבים המבקרים",
     "published": "2026-11-18T12:33:10+00:00",
     "summary": "לפני זמן קצר זה קרה. השעון הראה חצות בניו זילנד, והמדינה הראשונה בעולם החלה לשחק במשחק המצופה ביותר של העשור האחרון, Grand Theft Auto VI. בעוד שעות ספורות גם הישראלים יצטרפו לחגיגה (בלילה שבין רביעי לחמישי), אבל אם אתם לא יכולים להתאפק, הביקורות הראשונות למשחק כבר שוחררו. אמ;לק: נראה שההמתנה השתלמה. הוושינגטון פוסט: \"המגנום אופוס […] The post הביקורות הראשונות של GTA 6 התפרסמו: הנה מה שחושבים המבק"
    },
    {
     "ref": "geektime#9",
     "title": "הנה שיטה קלה לבדוק אם אתם משלמים יותר מדי על ג'ירה, קונפלואנס ושות'",
     "published": "2026-11-18T11:39:41+00:00",
     "summary": "מאת נעמה ויסבורט בטח גם אצלכם זה קרה: הארגון רכש עוד מערכת יקרה שאמורה לייעל את עבודת הצוות, אבל היא הפכה למפלצת של Workflows מורכבים ושדות חובה אינסופיים – והיום לאף אחד אין מושג מה השתפר בפועל וכמה זה שווה. ארגונים משקיעים המון כסף בכלי AI כדי לעבוד מהר וחכם יותר. בעולם שבו מערכות כגון […] The post הנה שיטה קלה לבדוק אם אתם משלמים יותר מדי על ג'ירה, קונפלואנס ושות' appeared first on גיקטיים ."
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "\"I can tell you wrote this yourself\"",
     "published": "2026-11-20T07:13:21+00:00",
     "summary": "Article URL: https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/ Comments URL: https://news.ycombinator.com/item?id=50571189 Points: 191 # Comments: 191"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "FFmpeg 9.1 'Gauss'",
     "published": "2026-11-20T04:02:39+00:00",
     "summary": "Article URL: https://ffmpeg.org/download.html#release_9.1 Comments URL: https://news.ycombinator.com/item?id=50569998 Points: 152 # Comments: 24"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "PostgreSQL 19",
     "published": "2026-11-20T03:45:45+00:00",
     "summary": "Article URL: https://www.postgresql.org/docs/release/19.0/ Comments URL: https://news.ycombinator.com/item?id=50569890 Points: 218 # Comments: 10"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)",
     "published": "2026-11-20T02:01:09+00:00",
     "summary": "Article URL: https://github.com/openssl/openssl/pull/33652 Comments URL: https://news.ycombinator.com/item?id=50569226 Points: 271 # Comments: 211"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Synology Security Advisory",
     "published": "2026-11-19T22:13:40+00:00",
     "summary": "Article URL: https://www.synology.com/en-uk/security/advisory/Synology_SA_26_21 Comments URL: https://news.ycombinator.com/item?id=50567209 Points: 154 # Comments: 117"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "The 98% Slot Machine: How Paid Advertising Became an Extraction Tax",
     "published": "2026-11-19T18:35:17+00:00",
     "summary": "Article URL: https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine Comments URL: https://news.ycombinator.com/item?id=50564159 Points: 298 # Comments: 151"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Claude solves two open problems in the physics of black holes",
     "published": "2026-11-19T17:30:44+00:00",
     "summary": "Article URL: https://www.anthropic.com/research/claude-black-hole-physics Comments URL: https://news.ycombinator.com/item?id=50563148 Points: 507 # Comments: 236"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Anthropic’s Nasdaq debut",
     "published": "2026-11-19T17:02:40+00:00",
     "summary": "Article URL: https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/ Comments URL: https://news.ycombinator.com/item?id=50562754 Points: 1087 # Comments: 2153"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Pete Warden on local AI, open models, voice interfaces, the future of hardware",
     "published": "2026-11-19T15:38:12+00:00",
     "summary": "Article URL: https://thedataexchange.media/pete-warden-moonshine/ Comments URL: https://news.ycombinator.com/item?id=50561508 Points: 250 # Comments: 222"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Someone reported java4shell bug in September 2026",
     "published": "2026-11-19T11:47:03+00:00",
     "summary": "Article URL: https://github.com/openjdk/jdk/pull/32781 Comments URL: https://news.ycombinator.com/item?id=50558906 Points: 430 # Comments: 120"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Community-Focused Academic Brings AI Tools to Colorado Farmers",
     "published": "2026-11-19T19:00:02+00:00",
     "summary": "Many farmers and ranchers in eastern Colorado are curious about artificial intelligence, but they don’t have a local tech-savvy person to show them how to use it. Xue “Alice” Dong has made that her job. Dong, an IEEE senior member, is an extension regional specialist with the Colorado State University Extension , CSU’s outreach arm. She works in Logan County and serves a 10-county farming area in "
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Why a Computer Scientist Thinks Superintelligence Won’t Happen",
     "published": "2026-11-19T12:00:03+00:00",
     "summary": "Many people were caught off guard this past summer when employees of one of the world’s leading AI companies began casually debating whether their products would lead to human extinction. It started when Anthropic researcher Jacob Coxon announced his resignation, warning that his employer and OpenAI were “racing straight to self-improving superintelligence and gambling with our lives.” Evan Hubing"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Build a Personal Brand to Help Employers Find You",
     "published": "2026-11-18T17:33:26+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! In one year, the number of developers working for themselves has more than doubled. Stack Overflow’s annual survey of more than 30,000 developers sho"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "IEEE Celebrates 10 Years of Incorporating Ethics Into AI Systems",
     "published": "2026-11-17T19:00:03+00:00",
     "summary": "Policymakers, technologists, and members of the public have raised concerns about the harm AI’s rapid advancement might cause to society. Their concerns include bias, data privacy violations, the spread of misinformation, and losing control of AI agents. Those issues are relatively new to many people, but the IEEE Standards Association has been working for the past decade on ways to prioritize the"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "AI Is Giving Optical Computing Another Shot",
     "published": "2026-11-17T14:00:03+00:00",
     "summary": "The idea of computing with light has been around for over 70 years, but until recently it’s remained largely in the realm of research. Over the past few years, though, optical computing has emerged as a fast-growing industry: Market valuation of companies in this sector now totals US $2.22 billion, up from $0.4 billion in 2022. One projection suggests that the market will continue to grow exponent"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "Understand How Satellite Links Shape IoT Device Design and Testing",
     "published": "2026-11-17T11:00:04+00:00",
     "summary": "How 3GPP Releases 15, 16, and 17 brought satellite access into 5G NR, NB-IoT, and eMTC. Why satellite links suit IoT devices that send small, infrequent, and delay-tolerant messages. Where non-terrestrial networks (NTN) add value, including asset tracking, agriculture, public safety, and offshore operations. How power efficiency, RF signaling, and antenna design shape satellite-connected device de"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "Can Robots Bring Stroke Surgery to Remote Hospitals?",
     "published": "2026-11-16T14:00:02+00:00",
     "summary": "I am practicing brain surgery on a patient lying 6 meters away, out of my sight and reach. I press a foot pedal, activating the controller in my hand, and carefully steer a thin flexible tube called a catheter up through the patient’s blood vessels. I head for what I believe to be the brain, tracking my progress on the live X-ray feed. As I imagine finding a blood clot, David Bell , the surgeon se"
    },
    {
     "ref": "ieee_spectrum#7",
     "title": "Advanced Metrology for Defect Detection, Tool Health, and Semiconductor Yield Enhancement",
     "published": "2026-11-16T11:00:03+00:00",
     "summary": "In advanced semiconductor manufacturing, small defects can have a large effect on yield. Thin film deposition tools must stay stable and qualified. Process drift must be caught early. When a defect does appear, engineers need to know where it came from and how it affects device performance. This webinar shows how in-line inspection and offline characterization combine into one workflow, from tool "
    },
    {
     "ref": "ieee_spectrum#8",
     "title": "28 Zero-Day Findings in Under Two Days. Is Robotics Security Keeping Pace?",
     "published": "2026-11-16T10:00:01+00:00",
     "summary": "This article is brought to you by VicOne . VicOne identified an initial set of 28 zero-day findings in less than two days using AI-assisted research across software and tools supporting the Physical AI ecosystem. These include projects developed or maintained by Google, NVIDIA, and Meta, among others. Based on initial validation, all 28 findings are classified as zero-day vulnerabilities. The coun"
    },
    {
     "ref": "ieee_spectrum#9",
     "title": "How Microcredentials Can Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The Download: a living liver, a billion-dollar battery deal, and AI hype",
     "published": "2026-11-19T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. A human liver has been kept alive outside the body for a record seven weeks Researchers in Australia claim they’ve kept a human liver alive on life support outside the body…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "A human liver has been kept alive outside the body for a record seven weeks",
     "published": "2026-11-19T12:00:00+00:00",
     "summary": "Researchers in Australia claim they’ve kept a human liver alive, on life support, outside the body for seven weeks, opening up speculative new possibilities in biomedical engineering. The feat, whose details are pending publication, was carried out in Sydney after a team led by surgeon and inventor Carlo Pulitano connected a donated liver to a…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "What a billion-dollar deal says about the US battery market",
     "published": "2026-11-19T11:00:00+00:00",
     "summary": "After a tough few years littered with some high-profile failures, there’s some positive news for next-generation batteries in the US. Sila just signed an agreement with Panasonic Energy, a global battery manufacturer, to supply silicon-carbon anode material, a possible key to smaller, lighter batteries. It’s a deal that Sila says could be worth more than…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "The AI Hype Index: AI is everywhere",
     "published": "2026-11-18T14:42:44+00:00",
     "summary": "Like a nasty rash, AI seems to spread everywhere. Google crams AI Overviews down your throat even though it costs the company billions of dollars in lost ad revenue. Leave your apartment, and you might pass two people heaving an AI-powered humanoid robot up the stairs to clean someone’s rooms. Go to the supermarket, and…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: AI learns to smell and hydropower struggles",
     "published": "2026-11-18T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. This smell startup says its AI nose is as good as a human’s In a New Jersey lab, researchers are trying to sniff every odor on Earth. Their careful notes—“nutty,” “peachy,”…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "This smell startup says its AI nose is as good as a human’s",
     "published": "2026-11-18T10:20:30+00:00",
     "summary": "In a lab near Newark Airport in New Jersey, a team of around 30 experienced human sniffers are slowly working their way through every odor on Earth. Their careful notes—“nutty,” “peachy,” “marine”—are cross-referenced with a chemical analysis to create a rich set of training data for what AI startup Osmo calls the world’s first foundation…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "Roundtables: Inside the Quest for Cognitive Immortality",
     "published": "2026-11-17T18:46:47+00:00",
     "summary": "Listen to the session or watch below In an effort to reach an elusive continuity of the self, some far-thinking technologists are working on ways to keep your brain going—even beyond death. Science editor Mary Beth Griggs and senior editor for biomedicine Antonio Regalado explore possible paths to keep your mind going, including gradual brain…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "Hydropower hit record lows in the US Southwest this summer",
     "published": "2026-11-17T17:52:10+00:00",
     "summary": "The US Southwest generated 28% less electricity via hydropower between April and August than the 10-year average, according to new data from the US Energy Information Administration. Most hydropower plants in the US rely on dams to hold back water, creating reservoirs. The water can be released through turbines, generating electricity on demand. But an…"
    },
    {
     "ref": "mit_tech_review#8",
     "title": "Research Reports",
     "published": "2026-11-17T14:39:46+00:00",
     "summary": "To access a report, click on the corresponding image below."
    },
    {
     "ref": "mit_tech_review#9",
     "title": "The Download: Jensen Huang’s open-source dilemma and cognitive immortality",
     "published": "2026-11-17T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The open-source movement wants Jensen Huang back A petition to reinstate Jensen Huang as Nvidia CEO has attracted more than 115,000 signatures, including Elon Musk, but comb through the names, and…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Token fraud is here and it’s BAD (YouTube)",
     "published": "2026-11-20T02:49:57+00:00",
     "summary": "Token fraud is here and it’s BAD (YouTube) Claire Vo runs ChatPRD , an AI platform that helps product managers \"turn an idea into a spec\". The product has been live since the GPT-4 era, and Claire has been building it in public for much of that time. In this YouTube video (see also the accompanying Twitter post ) Claire describes the flood of token fraud she has seen from groups abusing the produc"
    },
    {
     "ref": "simon_willison#1",
     "title": "PostgreSQL 19 Released",
     "published": "2026-11-19T20:43:57+00:00",
     "summary": "PostgreSQL 19 Released Most years PostgreSQL ships a new release in September, but this year's release came two months later thanks mainly to the flurry of issues that the PostgreSQL team needed to address as part of the ongoing AI-reported vulnerability apocalypse. This release was definitely worth the wait. My favorite new feature is this one: For applications that send reads to standbys, Postgr"
    },
    {
     "ref": "simon_willison#2",
     "title": "llm-gemini 0.38",
     "published": "2026-11-18T23:59:20+00:00",
     "summary": "Release: llm-gemini 0.38 Today Google introduced Gemini 4 Neon . I wrote recently about how confusing the pricing for the Gemini 4 series was - Neon has somehow made this even worse. Previously the Gemini 4 lineup was Hydrogen, Argon, and Carbon - where Argon and Carbon were the same price , and Hydrogen was 3/4 of that price now but will be 1/4 of that price when the other two double an 1st Decem"
    },
    {
     "ref": "simon_willison#3",
     "title": "datasette-arrows 0.1a0",
     "published": "2026-11-18T17:09:59+00:00",
     "summary": "Release: datasette-arrows 0.1a0 Datasette 1.0a43 added the ability for plugins to implement streaming export formats. Datasette core supports streaming CSV and TSV - you can export millions of lines of data from a table without needing to load it all into memory, because those two file formats support streaming data in chunks. The register_output_renderer() plugin hook can now be used to implement"
    },
    {
     "ref": "simon_willison#4",
     "title": "Quoting Daniel Stenberg",
     "published": "2026-11-18T15:58:27+00:00",
     "summary": "During the time these agents converted 185,000 lines of C code into 340,000 lines of Rust code (I counted), we merged over 300 commits in the actual curl project. We actually improved curl during these a little more than three weeks. A little over 200 bugfixes actually. 200 bugfixes that none of those rust rewrites have. We also fixed a few vulnerabilities. In another month we have done another 20"
    },
    {
     "ref": "simon_willison#5",
     "title": "The PSF end-of-year fundraiser",
     "published": "2026-11-18T14:44:48+00:00",
     "summary": "The PSF end-of-year fundraiser With my Python Software Foundation board director hat on: we've launched our end-of-year fundraiser for the non-profit that supports Python development and the Python community. If your company or your work benefits from Python, please consider donating this year! The PSF looks after the IP behind Python, operates PyPI, sponsors core developer sprints, supports commu"
    },
    {
     "ref": "simon_willison#6",
     "title": "External sandboxes for coding agents",
     "published": "2026-11-17T22:52:29+00:00",
     "summary": "External sandboxes for coding agents I've been exploring new ways to sandbox code that is executed by agents, with a focus on making it safer to try out local models without worrying that a mistake or prompt injection attack might cause them to take damaging actions on a machine. I worked on this project with Prime Radiant , the AI research lab behind Superpowers and other projects . My post on th"
    },
    {
     "ref": "simon_willison#7",
     "title": "GPT‑6.2 Astra and GPT‑6.2 Sol",
     "published": "2026-11-17T22:38:52+00:00",
     "summary": "GPT‑6.2 Astra and GPT‑6.2 Sol OpenAI: We’re introducing GPT‑6.2 Astra, our new frontier model for your hardest projects, and GPT‑6.2 Sol, our efficient, versatile model for everyday work. They're available in the API as gpt-6.2-astra and gpt-6.2-sol . I shipped LLM 0.38 with support for the new models. 6.2 Astra is 80% of the price of 6 Astra - $8/MTok input and $40/MTok output, the same price as "
    },
    {
     "ref": "simon_willison#8",
     "title": "Running the full server-side Datasette Python app in the browser with service workers and Pyodide",
     "published": "2026-11-17T16:48:33+00:00",
     "summary": "Datasette Lite is my port of the Datasette Python application to run directly in the browser using WebAssembly and Pyodide . I've released a complete rewrite of Datasette Lite using service workers, and it's now almost indistinguishable from the real server-side application. You can now do all of the following, using a carefully crafted URL to lite.datasette.io : Load client-side Datasette to brow"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Apple is hiring engineers to build its own AI agent",
     "published": "2026-11-19T22:31:41+00:00",
     "summary": "Apple is working on its own AI agent that can perform a range of tasks for you, including browsing the web, working across apps, writing code, and calling services. That's according to a job listing spotted by Bloomberg, which says Apple is looking for an engineer to lead the creation of an agentic AI assistant. […]"
    },
    {
     "ref": "the_verge#1",
     "title": "A brief history of Nvidia’s recent stock fluctuations",
     "published": "2026-11-19T21:59:35+00:00",
     "summary": "\"We've got this,\" Colette Kress, interim CEO of Nvidia, said Tuesday night as she closed out the embattled chip company's third quarter earnings call. By Thursday, the company's stock price was hovering at around $150 per share, a nearly 40 percent drop from its all-time high on October 6th, and wiping out a brief post-earnings […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Meta now sells 3D movies on Quest VR headsets",
     "published": "2026-11-19T21:12:06+00:00",
     "summary": "Meta now offers more than 150 3D movies that you can buy or rent to watch in VR on its Quest 3 and 3S headsets, the company announced today. The movies are available in Meta's TV app and include titles like Avatar, Spider-Man: Far From Home, Jurassic World Rebirth, Wicked: For Good, and a Billie […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Meta’s Muse Charm might cost $300",
     "published": "2026-11-19T20:22:17+00:00",
     "summary": "Meta is planning to price the Muse Charm, a little gadget with a screen that lets you chat with your Muse AI agent, at $300, according to The Information. CEO Mark Zuckerberg revealed the gadget earlier this year and said the company expected to ship the Charm \"in time for the holidays in December,\" but […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Google is putting AI chats right on the homepage",
     "published": "2026-11-19T20:05:06+00:00",
     "summary": "Google is updating its homepage to include AI searches. In a post on X, Google's vice president of product, Robby Stein, shows how you can now open a collapsible sidebar to view and continue your AI chats. Based on the GIF shared by Stein, it looks like you can open the sidebar by clicking the […]"
    },
    {
     "ref": "the_verge#5",
     "title": "FCC greenlights rule allowing prisons to jam cellphone signals",
     "published": "2026-11-19T19:40:28+00:00",
     "summary": "The Federal Communications Commission voted unanimously to allow state and local prisons to jam cellphones. In an announcement on Thursday, the FCC argues the rule will help combat an \"influx of contraband cellphones\" used to carry out crimes from prison. Jammers are generally banned under Section 333 of the Communications Act of 1934, though they're […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Sony’s WH-1000XM5 are cheaper than ever for Black Friday",
     "published": "2026-11-19T19:35:52+00:00",
     "summary": "Back in my day, the only “Doorbuster” sales were at physical retail stores. But now, you can get ultra-low prices before Black Friday whether you want to shop in-store or online. One that stands out is the previous-generation Sony WH-1000XM5 noise-canceling headphones, which are marked down to their lowest price ever, just $169.99 at Best […]"
    },
    {
     "ref": "the_verge#7",
     "title": "You can now buy a Steam Machine without getting on a waitlist",
     "published": "2026-11-19T19:33:22+00:00",
     "summary": "Valve announced some updates about Steam Machine availability today, including good news if you want to buy one right now and potential bad news about future supply due to RAMaggedon. The good news: You can now purchase a 512GB Steam Machine without getting on a waitlist. Initially, interested buyers had to get on Valve's waitlist […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Some creators are skeptical of Instagram’s new affiliate program",
     "published": "2026-11-19T19:12:30+00:00",
     "summary": "For years, influencers have come up with workarounds on social media to figure out how to share affiliate links with followers. A new integration between Instagram and Amazon was announced earlier this month as a way to make it easier for influencers to make money from affiliate links - but some content creators are suspicious […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Sonos is taking up to 30 percent off speakers and soundbars right now",
     "published": "2026-11-19T18:33:08+00:00",
     "summary": "Sonos speakers and soundbars aren’t exactly cheap, but thankfully the company’s Black Friday sale has already begun, making everything a little easier to afford through November 30th. Most notably, you can pick up the Arc Ultra soundbar for a new low of $849 ($250 off) from Sonos, Amazon, and Best Buy, or the newfangled Sonos […]"
    }
   ]
  }
 ]
}
</input>