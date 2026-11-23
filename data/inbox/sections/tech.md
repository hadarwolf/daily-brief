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
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44 מיליארד דולר",
     "published": "2026-11-23T11:57:36+00:00",
     "summary": "ענקית הסייבר האמריקאית CrowdStrike הודיעה היום (ב') על רכישת Zscaler בעסקת מניות בשווי של כ-43.9 מיליארד דולר, באחת מהעסקאות הגדולות ביותר בתולדות ענף הסייבר העולמי. העסקה משקפת שווי של כ-260 דולר למניית זיסקיילר ופרמיה של כ-34% על מחיר הסגירה שלה ביום שישי האחרון. בעלי המניות של קראודסטרייק יחזיקו בכ-84% מהחברה הממוזגת, בעוד שבעלי המניות של […] The post עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44"
    },
    {
     "ref": "geektime#1",
     "title": "עברתם חברה כדי לשדרג את השכר? תבדקו שלא הפסדתם אלף שקל בחודש",
     "published": "2026-11-23T10:03:41+00:00",
     "summary": "מאת מיטל כהן עצרתם פעם לשאול איך Job Hopping משפיע על הכסף שיחכה לכם אחרי שתפרשו? מעבר תכוף בין מקומות עבודה הוא פרקטיקה מקובלת בהייטק, ולעתים קרובות היא ממש הכרחית אם רוצים להתקדם, להתפתח מקצועית ולהרוויח יותר. אבל יש כמה החלטות שקשורות במעברים האלה, שעשויות להשפיע על שנים של חיסכון. הבעיה היא לא עצם המעבר, […] The post עברתם חברה כדי לשדרג את השכר? תבדקו שלא הפסדתם אלף שקל בחודש appeared first o"
    },
    {
     "ref": "geektime#2",
     "title": "נגמרה החגיגה: גוגל מתחילה להקשות על התקנת אפליקציות מחוץ לחנות",
     "published": "2026-11-23T09:34:31+00:00",
     "summary": "אחד היתרונות הגדולים של משתמשי אנדרואיד על חבריהם, בעלי המכשיר עם התפוח הנגוס על גב המכשיר, הוא החופש להתקין אפליקציות מאיפה שהם רק רוצים. מצאתם אפליקציה מעניינת בגיטהאב? רוצים להוריד אפליקציה שלא נמצאת ב-Google Play או להשתמש בחנות אפליקציות חלופית? פשוט מורידים את קובץ ה-APK, מתקינים ונהנים. אלא שבקרוב התהליך הזה עשוי להפוך למורכב הרבה […] The post נגמרה החגיגה: גוגל מתחילה להקשות על התקנת אפליק"
    },
    {
     "ref": "geektime#3",
     "title": "לאפל יש בעיה רצינית, והיא רק עכשיו מתחילה לעבוד עליה",
     "published": "2026-11-23T07:46:03+00:00",
     "summary": "אפל נמצאת בנקודה מאוד מעניינת. בעוד המניות של ענקיות הטכנולוגיה קורסות באופן מרהיב, מניית אפל מסכמת עלייה של יותר מ-26% מתחילת השנה. איכשהו, נראה שההימור של אפל, שהיה לא להמר על תחום ה-AI, השתלם לה בדיעבד. אולם כעת, אחרי כמה שינויים משמעותיים מאוד בשוק, יכול להיות שהיא נמצאת בדרך לצרה הרבה יותר גדולה. הסוכנים באים […] The post לאפל יש בעיה רצינית, והיא רק עכשיו מתחילה לעבוד עליה appeared first on "
    },
    {
     "ref": "geektime#4",
     "title": "9 שנות קוד ב-7 ימי עבודה: כך העברנו בעזרת AI מערכת בפרודקשן מ-Python ל-Go",
     "published": "2026-11-22T16:07:00+00:00",
     "summary": "שבעה ימי עבודה – זה הזמן שלקח לנו להעביר את הקוד הפעיל שלנו בפרודקשן מ-Python ל-Go, באמצעות AI. התוצאה? ירידה של 80 אחוז בעלויות הענן ושיפור ביצועים של עד פי 11 בפונקציות מסוימות. עלות הטוקנים הסתכמה בכ-5% בלבד מהחיסכון שהשגנו. עד לאחרונה, פרויקט כזה היה דורש השקעה משמעותית של זמן ומשאבי פיתוח, אבל השימוש ב-AI […] The post 9 שנות קוד ב-7 ימי עבודה: כך העברנו בעזרת AI מערכת בפרודקשן מ-Python ל-Go a"
    },
    {
     "ref": "geektime#5",
     "title": "חדש: עשיתם עבירת תנועה? הדוח מהמשטרה יגיע אליכם מייד לנייד",
     "published": "2026-11-22T13:32:21+00:00",
     "summary": "לקבל בדואר דוח תנועה מהמשטרה חודש אחרי העבירה זה דבר מתסכל למדי, בעיקר כי בשלב הזה קשה לזכור מי בכלל נהג ברכב ומה היו הנסיבות לעבירה. עכשיו, מתברר שמשטרת ישראל מבצעת שדרוג דיגיטלי קטן, שאמור לסייע לכם או קרובים אליכם, אם ביצעתם עבירת תנועה כלשהי (בואו, אנחנו יוצאים מנקודת הנחה שקוראי גיקטיים לא עושים עבירות […] The post חדש: עשיתם עבירת תנועה? הדוח מהמשטרה יגיע אליכם מייד לנייד appeared first on ג"
    },
    {
     "ref": "geektime#6",
     "title": "בואו ללמוד בלייב איך מביאים סוכנים לפרודקשן (בלי לאבד שנה מהחיים)",
     "published": "2026-11-22T09:32:36+00:00",
     "summary": "מנהלי IT ואבטחת מידע עומדים היום מול דילמה דחופה: מצד אחד, קיים לחץ עסקי לאמץ סוכני AI ולהפיק מהם ערך במהירות. מצד שני, האימוץ הזה מגיע עם סכנות אבטחה משמעותיות – סוכנים שפועלים בלי פיקוח, חשיפת מידע רגיש וקושי לנטר את הפעילות. בארגונים רבים חסרה מסגרת Governance ברורה, ולכן הם תקועים באמצע הדרך שבין פיילוט […] The post בואו ללמוד בלייב איך מביאים סוכנים לפרודקשן (בלי לאבד שנה מהחיים) appeared fir"
    },
    {
     "ref": "geektime#7",
     "title": "אפילו עמוד החיפוש הקלאסי של Google נכנע ל-AI",
     "published": "2026-11-22T08:49:11+00:00",
     "summary": "גם העמוד המוכר ביותר באינטרנט לא חסין בפני השפעות ה-AI והוא בדרך למתיחת פנים נדירה למדי. אחרי שגוגל נתפסה לא מוכנה במירוץ ה-AI, ואחרי הקאמבק, ואחרי שהיא שוב נתפסת כמפגרת אחרי המתחרות – היא מתחילה להטמיע את Gemini עמוק גם לתוך מוצר הדגל שלה, עמוד החיפוש. היכונו לעוד שינוי השינוי המשמעותי הראשון לעמוד הבית של […] The post אפילו עמוד החיפוש הקלאסי של Google נכנע ל-AI appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#8",
     "title": "טריליוני דולרים נמחקו אחרי שאנבידיה ושאר מניות הטכנולוגיה התרסקו",
     "published": "2026-11-22T08:16:54+00:00",
     "summary": "אחרי חודשים ארוכים שבהם מניות ה-AI סחבו את וול סטריט על הגב, נראה שלשוק ההון מתחילה להיגמר הסבלנות. ביום שישי האחרון ננעל שבוע מסחר מדמם במיוחד עבור ענקיות הטכנולוגיה, עם ירידות חדות במדדים המובילים בארה\"ב, מחיקה של טריליוני דולרים משווי החברות, והצלילה הגדולה ביותר של מניית אנבידיה (NVIDIA) מאז התפטרות ג'נסן הואנג. מה בעצם קרה […] The post טריליוני דולרים נמחקו אחרי שאנבידיה ושאר מניות הטכנולוגיה"
    },
    {
     "ref": "geektime#9",
     "title": "סוכנים וסיכונים: 3 אירועים מומלצים שבאמת תלמדו בהם משהו חדש",
     "published": "2026-11-21T16:29:29+00:00",
     "summary": "ההייטק הישראלי לא עוצר: הנה המיטאפים, הכנסים והרצאות הטכנולוגיה המסקרנים שצפויים בקרוב. בפיזי או ברשת – אלו אירועי ההייטק המומלצים שאתם רוצים לשריין להם מקום ביומן. מארגנים אירוע או שמעתם על אירוע לקהילה הטכנולוגית בישראל? מוזמנים לעדכן אותנו כאן ולפרסם אותו בחינם בלוח האירועים שלנו. CxO Security Breakfast | Google Cloud and Sela מתי? 6 […] The post סוכנים וסיכונים: 3 אירועים מומלצים שבאמת תלמדו ב"
    },
    {
     "ref": "geektime#10",
     "title": "ה-AI הפך את כולם לבילדרים. וזו בדיוק הבעיה",
     "published": "2026-11-21T13:33:44+00:00",
     "summary": "כמה התרגשנו כשהבינה המלאכותית הגיעה לחיינו. כל מי שחלם על מיזם יכול היה פתאום לבנות אותו במו ידיו. וכולם אכן בונים. כל אחד מרים לעצמו את הכלי שהוא צריך בלי לחכות שמישהו אחר יעשה את זה בשבילו. אבל לחלום הזה יש צד שני: הביקוש נגמר. אף אחד לא מעוניין יותר בכלים של אחרים. זה כמו […] The post ה-AI הפך את כולם לבילדרים. וזו בדיוק הבעיה appeared first on גיקטיים ."
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
     "summary": "Article URL: https://github.com/AFK-surf/xnulinux Comments URL: https://news.ycombinator.com/item?id=50607261 Points: 374 # Comments: 171"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Free alternative TV network built from the Internet Archive's forgotten videos",
     "published": "2026-11-23T01:13:51+00:00",
     "summary": "Article URL: https://spelunkr.tv Comments URL: https://news.ycombinator.com/item?id=50606192 Points: 571 # Comments: 100"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "GL.iNet Security Notice 2026-11-20",
     "published": "2026-11-22T23:06:37+00:00",
     "summary": "Article URL: https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20 Comments URL: https://news.ycombinator.com/item?id=50604988 Points: 216 # Comments: 100"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth",
     "published": "2026-11-22T21:01:16+00:00",
     "summary": "Article URL: https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth Comments URL: https://news.ycombinator.com/item?id=50603845 Points: 552 # Comments: 230"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "A miniature San Francisco with live buses, planes and boats",
     "published": "2026-11-22T20:33:23+00:00",
     "summary": "Article URL: https://smallsf.com/ Comments URL: https://news.ycombinator.com/item?id=50603589 Points: 284 # Comments: 96"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Assume People Are Not Interested in Your Blog Post",
     "published": "2026-11-22T19:41:30+00:00",
     "summary": "Article URL: https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/ Comments URL: https://news.ycombinator.com/item?id=50603143 Points: 220 # Comments: 112"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "What Happened to Silicon Valley?",
     "published": "2026-11-22T19:20:15+00:00",
     "summary": "Article URL: https://www.oreilly.com/radar/what-happened-to-silicon-valley/ Comments URL: https://news.ycombinator.com/item?id=50602947 Points: 688 # Comments: 368"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife",
     "published": "2026-11-22T19:10:34+00:00",
     "summary": "Article URL: https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife Comments URL: https://news.ycombinator.com/item?id=50602843 Points: 522 # Comments: 268"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Perplexity and Intelligence",
     "published": "2026-11-22T17:06:27+00:00",
     "summary": "Article URL: https://openai.com/index/perplexity-and-intelligence/ Comments URL: https://news.ycombinator.com/item?id=50601525 Points: 602 # Comments: 405"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Show HN: I built a game where you are an LLM's subagent",
     "published": "2026-11-22T13:56:58+00:00",
     "summary": "Article URL: https://github.com/gulivan/worker755 Comments URL: https://news.ycombinator.com/item?id=50599762 Points: 328 # Comments: 79"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Masullo on the Riemann Hypothesis",
     "published": "2026-11-22T10:59:56+00:00",
     "summary": "Article URL: https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/ Comments URL: https://news.ycombinator.com/item?id=50598441 Points: 243 # Comments: 216"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
     "published": "2026-11-22T04:04:56+00:00",
     "summary": "Article URL: https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/ Comments URL: https://news.ycombinator.com/item?id=50596133 Points: 1319 # Comments: 710"
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
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "Why using rocks for carbon removal could eventually reduce crop growth",
     "published": "2026-11-23T11:00:00+00:00",
     "summary": "Tech companies are investing a lot of hope and money in rocks. Google, Microsoft, and others have committed hundreds of millions of dollars to get startups to spread crushed basalt, olivine, or other alkaline materials across farms, in an effort to capture carbon from the air and lock it away. A number of influential models…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The most misunderstood graph in AI just got a major update",
     "published": "2026-11-20T18:15:15+00:00",
     "summary": "A new report from the AI evaluation nonprofit METR finds that some AI capabilities are continuing to improve along an exponential trajectory—but it also indicates that models aren’t quite as good at tasks that require judgment as they are at coding. The report is an update to the organization’s time horizon plot, which was widely…"
    },
    {
     "ref": "mit_tech_review#2",
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
     "title": "Meta Muse can do your Black Friday shopping at Walmart",
     "published": "2026-11-23T11:00:00+00:00",
     "summary": "Walmart will let Meta's Muse shop on its website on your behalf, allowing the AI agent to find and purchase Black Friday deals. Tomorrow, on Tuesday November 24th, the retail giant will roll out a live implementation of the Agent Gateway it announced last month, which helps AI agents find relevant products for you without […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Kodak’s next collectible is a tiny digital photo frame that doubles as a tracker",
     "published": "2026-11-23T03:00:00+00:00",
     "summary": "After expanding its Charmera collection with a Millennium Edition featuring Y2K-inspired designs earlier this year, Reto's follow-up to its tiny Kodak camera is an equally small digital photo frame you can use to display your shots. But while the Charmera's usefulness stopped at snapping grainy photos and terrible videos, the Kodak SlideTag goes one step […]"
    },
    {
     "ref": "the_verge#2",
     "title": "We haven’t seen the last of the major tech outages",
     "published": "2026-11-22T22:48:02+00:00",
     "summary": "Over the last week or so, we have seen a nationwide FAA ground stop, a multi-day Outlook outage that brought entire companies to a standstill, and a banking outage at JPMorgan Chase. But the consensus is that there are more to come. Director of National Intelligence Jay Clayton told CNN: \"The American people should be […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Delta flights in and out of Atlanta delayed due to system outage",
     "published": "2026-11-22T17:46:44+00:00",
     "summary": "All Delta flights in and out of Atlanta are facing significant delays on Sunday due to a problem with the system that calculates a plane's weight and balance. Hartsfield-Jackson Atlanta International Airport is Delta's largest hub and one of the busiest airports in the world. While only Delta is impacted at the moment, disruptions at […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Binding of Isaac developer removes AI music from Repentance Plus",
     "published": "2026-11-22T17:25:20+00:00",
     "summary": "The Binding of Isaac: Repentance Plus has spent the last few days getting review-bombed on Steam after it was discovered that a particular segment of the game used AI music. Reddit user ShweetsStuff discovered the songs used during a Grand Theft Auto-themed section. They found several audio files with Suno metadata that pointed back to […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Some of our favorite Switch 2 games are cheaper through Black Friday",
     "published": "2026-11-22T17:00:00+00:00",
     "summary": "Black Friday is a great time to expand your game library because it’s a chance to catch deals that aren’t normally happening throughout the year. That’s true for Nintendo Switch 2 games, as well. In addition to a $50 off sale on one of its console bundles, Nintendo is also knocking $20 off some of […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Sheherazaad’s Khudgarzi is gorgeous, ‘genre-chaotic’ South Asian folk",
     "published": "2026-11-22T16:33:29+00:00",
     "summary": "Sheherazaad started making ripples in the music world a few years ago with her EP Qasr, which was produced by Grammy Award winner Arooj Aftab. Now she's back with Khudgarzi, her reverb-drenched folk-noir debut LP that's primarily sung in Urdu. The instrumentation on Khudgarzi draws on traditional South Asian music, including Carnatic and Hindustani styles, […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Protesters storm Meta offices in India",
     "published": "2026-11-22T15:15:07+00:00",
     "summary": "Members of the opposition Congress party protested outside Meta's offices in Delhi on Friday and appear to have entered the building in a video shared by CNN. Members of the party's youth wing are demanding the company restore accounts of party leaders and warned of more protests to come. The Congress party has criticized Meta […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Nintendo’s Switch 2 console is $50 off for Black Friday",
     "published": "2026-11-22T14:00:00+00:00",
     "summary": "Those hoping to save some cash on a Nintendo Switch 2 can do so starting today, November 22nd, through Saturday, December 5th, giving you plenty of time to think about it after Cyber Monday has passed. For a limited time, Nintendo has knocked $50 off one of its two current console bundles, temporarily rolling back […]"
    },
    {
     "ref": "the_verge#9",
     "title": "‘The show is starting soon. Please turn on your headphones.’",
     "published": "2026-11-22T14:00:00+00:00",
     "summary": "Up a few concrete steps and through the front door of a 200-year-old row house in New York City, I follow a crowd of people into the 178-seat SoHo Playhouse. As we filter to our seats, ushers hand each person a black drawstring bag with a pair of wired headphones connected to a small Auracast […]"
    }
   ]
  }
 ]
}
</input>