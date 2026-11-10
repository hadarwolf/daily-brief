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
     "title": "DCU shake-up: James Gunn and Peter Safran out post-merger",
     "published": "2026-11-09T21:55:35+00:00",
     "summary": "Producer and former Kevin Feige protege Jeremy Latcham will replace Gunn and Safran."
    },
    {
     "ref": "ars_technica#1",
     "title": "Man who lost $308,000 on sports bets sues Kalshi for offering illegal gambling",
     "published": "2026-11-09T21:13:39+00:00",
     "summary": "Lawsuit demands Kalshi return losses because online betting is illegal in Washington."
    },
    {
     "ref": "ars_technica#2",
     "title": "A Sam Altman parody offers an amusing lesson in memory management",
     "published": "2026-11-09T20:49:09+00:00",
     "summary": "We verified the RAM numbers are real without sending any emails to OpenAI."
    },
    {
     "ref": "ars_technica#3",
     "title": "Vulnerability that lets hackers SSH into Linux devices is under active exploitation",
     "published": "2026-11-09T19:41:34+00:00",
     "summary": "\"*sshole\" poses a serious threat to Internet security."
    },
    {
     "ref": "ars_technica#4",
     "title": "Pentagon mulls placing fleet of military satellites around the Moon",
     "published": "2026-11-09T19:08:37+00:00",
     "summary": "\"Please jump on my cislunar bandwagon because I need some more friends here.\""
    },
    {
     "ref": "ars_technica#5",
     "title": "Claude Code is accidentally exposing secrets all over GitHub",
     "published": "2026-11-09T17:24:26+00:00",
     "summary": "\"Do not ask again\" prompt leads to passwords, API keys, and more being shared."
    },
    {
     "ref": "ars_technica#6",
     "title": "SpaceX now fundamentally an \"infrastructure company,\" senior official says",
     "published": "2026-11-09T15:39:21+00:00",
     "summary": "\"Grok analyzing the same video is 99.9 percent perfect.\""
    },
    {
     "ref": "ars_technica#7",
     "title": "Nvidia CEO's affair becomes a national security problem",
     "published": "2026-11-09T15:23:20+00:00",
     "summary": "Nvidia is probing whether Chinese intelligence targeted its CEO through an affair."
    },
    {
     "ref": "ars_technica#8",
     "title": "F1 in Brazil: You’ve got to keep your tires alive",
     "published": "2026-11-09T15:16:31+00:00",
     "summary": "A topsy-turvy grid and intermittent rain resulted in a very entertaining race."
    },
    {
     "ref": "ars_technica#9",
     "title": "New Democratic Congress will likely strip the gilding from Trump's Golden Dome",
     "published": "2026-11-09T12:00:05+00:00",
     "summary": "\"There’s no doubt that whatever it’s going to be called, it won’t be called Golden Dome.\""
    },
    {
     "ref": "ars_technica#10",
     "title": "Physicists listened to electrical noise to crack a superconductor mystery",
     "published": "2026-11-08T12:15:31+00:00",
     "summary": "Tuning in to electronic noise can tell us whether electrons have paired up or not."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "מטא פותחת מחזור חדש לתוכנית הסטארטאפים שלה בישראל, וכדאי שתזדרזו להירשם",
     "published": "2026-11-10T09:27:47+00:00",
     "summary": "חברת Meta פתחה את ההרשמה למחזור השני של Meta Startup Growth Program – תוכנית לליווי סטארטאפים ישראליים בשלבים מוקדמים, המתמקדת בצמיחה והתרחבות לשווקים בינלאומיים. המשתתפים יפגשו עם מומחי החברה מהארץ ומהעולם, ישתתפו בסדנאות מקצועיות ויקבלו שעות ייעוץ אישיות. התוכנית מיועדת לסטארטאפים B2C שכבר מציגים פעילות ראשונית בשוק, מתמקדים בצמיחה גלובלית ושואפים להרחיב את פעילותם לשווקים […] The post מטא פותחת"
    },
    {
     "ref": "geektime#1",
     "title": "ג'יימס גאן התפוטר מתפקידו ב-DC Studios – וקשה לנו להיראות מופתעים",
     "published": "2026-11-10T08:43:14+00:00",
     "summary": "בעוד קצת יותר מחודש סביר להניח שכל עולם הגיקים ידבר רק על Avengers: Doomsday, אבל עד אז יש לנו דרמה אחרת: הלילה (ב') נודע כי ג'יימס גאן ופיטר ספרן \"עוזבים\" את תפקידיהם כמנכ\"לים משותפים ומנהלי אולפני DC Studios. אז מה קרה שם ולמה לדעתנו DC מראה לגאן את הדלת? הכישלונות וההצלחות של גאן גאן מונה […] The post ג'יימס גאן התפוטר מתפקידו ב-DC Studios – וקשה לנו להיראות מופתעים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#2",
     "title": "פרשת המרגלת באנבידיה: מה סין באמת ניסתה להשיג?",
     "published": "2026-11-10T07:04:47+00:00",
     "summary": "קשה להפריז בכוחה של אנבידיה בשנים האחרונות, וזה ממש לא רק שווי השוק המטורף (והמשחק עם אפל על מי החברה בעלת השווי הגבוה בעולם). השבבים של החברה הם תשתית ה-AI העולמית, ואיפשהו גם התקן העולמי שכמעט כל החברות מתיישרות אליו, כך שהדרישה למוצרים של החברה עולה כבר שנים על קצב הייצור שלה. לכן, כשהתפוצצה פרשת […] The post פרשת המרגלת באנבידיה: מה סין באמת ניסתה להשיג? appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "עוד 29 מיליון דולר לסטארטאפ הישראלי שמאפשר לכל אחד לפרסם ספר",
     "published": "2026-11-09T14:00:43+00:00",
     "summary": "יום אחד מישהו יכתוב ספר על כמה שזה קשה להוציא ספר לאור. עד אז, יש סטארטאפ ישראלי שמנסה לעזור לסופרים להפוך את תהליך ההפקה, ההפצה ואפילו השיווק של הספרים שלהם – מתהליך של יותר משנה לכזה שאורך שבועות ספורים. היום (ב') הוא מודיע גם על גיוס של 29 מיליון דולר. תנו לאייג'נטס להוציא לאור Spines […] The post עוד 29 מיליון דולר לסטארטאפ הישראלי שמאפשר לכל אחד לפרסם ספר appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#4",
     "title": "החוקרים הישראלים התריעו על חולשה חמורה ב-Grok של אילון מאסק, xAI פשוט התעלמה",
     "published": "2026-11-09T13:29:17+00:00",
     "summary": "אם אתם משתמשים בסוכני AI בארגון, כנראה שאתם כבר סומכים עליהם עם לא מעט מידע רגיש כדי שיבצעו עבורכם פעולות מורכבות. אבל מחקר חדש של חברת אבטחת המידע הישראלית Profero חושף היום (ב') שורה של חולשות אבטחה ב-Grok Bot, סוכן ה-AI מבית xAI של אילון מאסק. החולשות הללו עלולות לאפשר לכאורה לתוקפים להשתלט על סביבת […] The post החוקרים הישראלים התריעו על חולשה חמורה ב-Grok של אילון מאסק, xAI פשוט התעלמה appear"
    },
    {
     "ref": "geektime#5",
     "title": "בכנס הזה תלמדו איך מחברים AI לדאטה שלכם בלי שורת SQL אחת",
     "published": "2026-11-09T12:40:47+00:00",
     "summary": "השלב הבא ב-AI הוא להפוך את המודלים לחלק בלתי נפרד מהמערכות, התהליכים הארגוניים וסביבת העבודה: לחבר אותו לדאטה אמיתי, לאפשר לו לבצע פעולות, להניע תהליכים ולקבל החלטות מבוססות מידע. אבל איך עוברים מדמו מרשים למערכת שעובדת בפרודקשן, מתממשקת לתשתיות קיימות ועומדת בדרישות האבטחה וה-Governance של הארגון? השאלה הזאת היא המקום שבו מתחיל האתגר ההנדסי האמיתי. […] The post בכנס הזה תלמדו איך מחברים AI לדאטה "
    },
    {
     "ref": "geektime#6",
     "title": "חורים בפנסיה: לאן נעלמים 7,000 שקל בחודש מהשכר של ההייטקיסטים?",
     "published": "2026-11-09T09:59:07+00:00",
     "summary": "מאת אור אייזנברג לצפות בצבע מתייבש… לקרוא תנאי שימוש של תוכנה… לראות אקסל של רואה חשבון… יש כמה דברים משעממים במיוחד, וגם הם, כך נדמה, לא מתקרבים להתעסקות בפנסיה. ואנחנו איתכם: מושגים כמו שכר מבוטח, תשואות, דמי ניהול והפרשות מעסיק הם ההגדרה המילונית ל-50 גוונים של אפור. העניין הוא שהסיפור הזה שווה לכם המון כסף, […] The post חורים בפנסיה: לאן נעלמים 7,000 שקל בחודש מהשכר של ההייטקיסטים? appeared fi"
    },
    {
     "ref": "geektime#7",
     "title": "המנכ\"ל החדש של אפל מאבד סבלנות, ודורש הרבה יותר מהבכירים",
     "published": "2026-11-09T08:13:18+00:00",
     "summary": "יותר משנתיים אחרי ההכרזה המקורית, אפל סוף סוף השיקה השנה את Siri AI, הגרסה החדשה של העוזרת האישית שלה. אולם כעת כשיש לה עוזרת מודרנית והרבה יותר חכמה, היא הגיעה לשלב שבו היא מבינה שהיא כבר לא יכולה לנוח על זרי הדפנה, כיוון שבכל פעם שאתה משחק תופסת עם המתחרים בשוק ה-AI, המשחק משתנה לך […] The post המנכ\"ל החדש של אפל מאבד סבלנות, ודורש הרבה יותר מהבכירים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#8",
     "title": "\"לא הייתי נאמן לאשתי\": הנה המייל המלא ששלח ג'נסן הואנג לעובדי אנבידיה הלילה",
     "published": "2026-11-09T05:29:17+00:00",
     "summary": "הלילה דווח שאנבידיה פתחה בחקירה רשמית לגבי קשריו של המייסד והמנכ\"ל האגדי שלה, ג'נסן הואנג, עם אליס הואנג, מנהלת בכירה בחברת Megaspeed, ועל פי החשד, סוכנת של ממשלת סין. במקביל, הואנג הודה ברומן במכתב ששלח לעובדי החברה. הנה תרגום של המייל המלא. \"אין שום תירוץ למה שעשיתי\" לעמיתיי באנבידיה, אני חייב למשפחתי ולכולכם התנצלות. לא […] The post \"לא הייתי נאמן לאשתי\": הנה המייל המלא ששלח ג'נסן הואנג לעובדי "
    },
    {
     "ref": "geektime#9",
     "title": "ג'נסן הואנג מודה ברומן עם המרגלת הסינית; דירקטוריון אנבידיה פתח בחקירה",
     "published": "2026-11-08T20:33:45+00:00",
     "summary": "רק לפני כמה ימים נחשפה פרשת הריגול הסיני שמסעירה את NVIDIA, ובמרכזה החשד שמנהלת בכירה בחברה סינגפורית גויסה על ידי המודיעין הסיני כדי להתקרב למנכ\"ל החברה, ג'נסן הואנג, ולהוציא ממנו מידע רגיש. אחרי הדיווחים כי בין השניים היה רומן, הערב (א') מנכ\"ל ענקית השבבים הודה בפני עובדי החברה כי ניהל רומן מחוץ לנישואים, בזמן שדירקטוריון […] The post ג'נסן הואנג מודה ברומן עם המרגלת הסינית; דירקטוריון אנבידיה פ"
    },
    {
     "ref": "geektime#10",
     "title": "שר האוצר הבא, רוצה להשאיר פה את ההייטק? תתחיל במס האופציות",
     "published": "2026-11-08T16:45:34+00:00",
     "summary": "עם סיום הבחירות וההיערכות להקמת ממשלה חדשה, שר האוצר הבא יידרש לקבל שורה של החלטות כלכליות משמעותיות. אחת הראשונות שבהן צריכה להיות הסרתן מסדר היום של היוזמות להעלאת המס על אופציות המוענקות לעובדי הייטק. דווקא עכשיו, כאשר ענף ההייטק הישראלי מתמודד עם אי-ודאות גיאופוליטית ואתגרים בגיוס השקעות, הדבר האחרון שהוא זקוק לו הוא חוסר ודאות […] The post שר האוצר הבא, רוצה להשאיר פה את ההייטק? תתחיל במס האו"
    },
    {
     "ref": "geektime#11",
     "title": "צפרתם בתל אביב? מערכת חדשה תזהה ותשלח לכם קנס אוטומטית",
     "published": "2026-11-08T14:12:23+00:00",
     "summary": "אמנם עברית היא השפה הרשמית במדינת ישראל, אולם נדמה שיש שפה יותר פופולרית: צפירות. בכל זאת, איך עוד הנהג שמאחוריכם יעדכן אתכם שלפני 3 מילישניות הרמזור התחלף לירוק ואתם עוד לא נוסעים בפול גז לתוך צומת חסום? איך עוד הנהג הישראלי יודיע לחבר שלו שהוא מחכה לו מתחת לבית? איך עוד נהגי אוטובוס שחולפים אחד […] The post צפרתם בתל אביב? מערכת חדשה תזהה ותשלח לכם קנס אוטומטית appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#12",
     "title": "למה הסוכן החכם שלכם לא מבין את העסק, ואיך פותרים את זה?",
     "published": "2026-11-08T09:58:48+00:00",
     "summary": "מאת אריאל עוז דמיינו סוכן AI שמקבל גישה למערכות הארגון. הוא שולף נתונים, קורא מסמכים, כותב שאילתות SQL ואפילו מבצע פעולות בעצמו. עכשיו בקשו ממנו לחשב את הכנסות החברה ברבעון האחרון. הוא ימצא את הנתונים ויחזיר מספר מדויק, אולי אפילו בגרף מרשים. רק שיש בעיה קטנה: הוא השתמש בהגדרה הלא נכונה של הכנסה, התעלם מהחרגה […] The post למה הסוכן החכם שלכם לא מבין את העסק, ואיך פותרים את זה? appeared first on גי"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Amazon saves millions by replacing Sonnet 4.6 with Strands Decider",
     "published": "2026-11-10T06:01:08+00:00",
     "summary": "Article URL: https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/ Comments URL: https://news.ycombinator.com/item?id=50436640 Points: 248 # Comments: 81"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Locating the source of a mysterious beep",
     "published": "2026-11-10T00:10:46+00:00",
     "summary": "Article URL: https://simonwillison.net/2026/Nov/9/mysterious-beeps/ Comments URL: https://news.ycombinator.com/item?id=50434310 Points: 176 # Comments: 77"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Horible public key tricks",
     "published": "2026-11-10T00:07:17+00:00",
     "summary": "Article URL: https://maurycyz.com/projects/badcert/ Comments URL: https://news.ycombinator.com/item?id=50434264 Points: 159 # Comments: 47"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Fable 5.2 one-shotted my nephew's dream game",
     "published": "2026-11-09T23:08:13+00:00",
     "summary": "Article URL: https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game Comments URL: https://news.ycombinator.com/item?id=50433659 Points: 389 # Comments: 269"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "USPS now offers official ZIP Code boundary polygons",
     "published": "2026-11-09T19:58:59+00:00",
     "summary": "Article URL: https://postalpro.usps.com/zcb Comments URL: https://news.ycombinator.com/item?id=50431058 Points: 617 # Comments: 311"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "E-means: Outperforming k-means in one-tenth the epochs",
     "published": "2026-11-09T18:45:43+00:00",
     "summary": "Article URL: https://e-means.github.io/ Comments URL: https://news.ycombinator.com/item?id=50429734 Points: 397 # Comments: 37"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Google Gemini routes personal Drive files and emails to human annotators",
     "published": "2026-11-09T18:24:38+00:00",
     "summary": "Article URL: https://github.com/thisisme6598/gemini_files/ Comments URL: https://news.ycombinator.com/item?id=50429426 Points: 591 # Comments: 128"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Claude Fable 5.2 and Mythos 5.2",
     "published": "2026-11-09T18:01:10+00:00",
     "summary": "Article URL: https://www.anthropic.com/claude-fable-and-mythos-5-2 Comments URL: https://news.ycombinator.com/item?id=50429068 Points: 567 # Comments: 785"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Muse Ember: Our smallest, most efficient model",
     "published": "2026-11-09T17:58:46+00:00",
     "summary": "Article URL: https://research.meta.ai/blog/muse-ember Comments URL: https://news.ycombinator.com/item?id=50429024 Points: 298 # Comments: 123"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Show HN: Every satellite that passed over any place this week, and its photos",
     "published": "2026-11-09T17:51:31+00:00",
     "summary": "hey HN, i built this because I'm a satellite nerd who was bored this past weekend. type in any place and it finds every satellite that passed over it in the last 7 days (SGP4 on the CelesTrak catalog, tracking 17k+ objects and runs in your browser in about half a second), then pulls the real Sentinel-2 / Landsat / NASA images from those passes. fun fact: all ~17k objects in orbit are drawn on the "
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system",
     "published": "2026-11-09T16:00:45+00:00",
     "summary": "Article URL: https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy Comments URL: https://news.ycombinator.com/item?id=50427362 Points: 530 # Comments: 285"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Semi-transparent, colored cadmium telluride photovoltaic panels in agrivoltaics",
     "published": "2026-11-09T14:31:39+00:00",
     "summary": "https://www.cell.com/cell-reports-physical-science/fulltext/... Comments URL: https://news.ycombinator.com/item?id=50426175 Points: 312 # Comments: 207"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Foldable Flight: The Best Paper Airplanes",
     "published": "2026-11-09T12:19:22+00:00",
     "summary": "Article URL: https://www.foldableflight.com Comments URL: https://news.ycombinator.com/item?id=50424581 Points: 1015 # Comments: 149"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "AI Agents Are Testing the Limits of Zero-Trust Security",
     "published": "2026-11-09T16:25:06+00:00",
     "summary": "This article is brought to you by Queen’s University Belfast . Several teams around the globe are leveraging AI by creating a task force of agents managed by an orchestrator and creating applications to support risk assessment, client profiling, match making, and information yield with a slight overview of decision making. One of the important components for these agents is to ensure that the logs"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "How Do You Land on a Moon With Almost No Gravity?",
     "published": "2026-11-06T15:00:02+00:00",
     "summary": "Last August, looking up from the edge of an ancient river delta on Mars, the Perseverance rover ’s electronic eye spied an oblong shadow crossing the distant, glowing Sun. Phobos , the Martian moon named for the Greek god of fear and panic, was transiting the solar disk. Too small to darken the pale, dust-tinged sky, but orbiting close enough to eclipse a significant fraction of the Sun, Phobos pa"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "IEEE Program Schools Preuniversity Educators On Tech Topics",
     "published": "2026-11-05T19:00:02+00:00",
     "summary": "Now in their third year, the IEEE TryEngineering educator sessions continue to empower preuniversity teachers with specialized professional development programs on engineering topics and classroom-tested lessons. This year’s sessions, held across the United States, have focused on educating teachers about artificial intelligence and semiconductor technology. One session was held in Egypt. In all, "
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Use Your Year-End Review to Reach for a Promotion",
     "published": "2026-11-05T16:08:03+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! Hard work rarely speaks for itself. When I landed my first job as a software engineer, I had a simple plan: Work hard and somebody would notice. Even"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Why a Mathematician Is Chasing Eclipses With Algorithms and Cameras",
     "published": "2026-11-05T14:00:02+00:00",
     "summary": "The sun hangs low over the plains of Castile and León, in the north-central region of Spain. But from a slope of the mountain Pico Trigaza , it appears that a few puffy white clouds have started to block the sun. That’s vexing. A group of researchers, some wearing cardboard eclipse glasses, is clustered around sets of portable telescopes and cameras connected to laptops. All this gear is scattered"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "IEEE Computer Society Chapter Offers Webinars With Industry Experts",
     "published": "2026-11-03T19:00:02+00:00",
     "summary": "To help engineers keep up with emerging technologies such as AI, cloud computing, and sustainable infrastructure, and learn how they can be applied in practice, the IEEE Computer Society ’s Central Indiana Chapter recently launched its Tech Talk Series. The live webinar series connects IEEE members, undergrad and graduate students, and engineering professionals from IEEE Region 4 with industry pra"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The backlash about data centers might really just be about electricity",
     "published": "2026-11-09T19:35:33+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. As voters went to the polls across the US last week, I was in Ashburn, Virginia, part of what’s known as Data Center Alley—the world’s largest data center hub. It’s also where…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "Nancy Pelosi’s replacement is ready to regulate AI",
     "published": "2026-11-09T17:05:43+00:00",
     "summary": "As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a tight congressional race for former Speaker of the House Nancy Pelosi’s open San Francisco seat, he could play a key role in setting federal AI policy. I spoke with Wiener on Friday, only a…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: empty AI climate claims, and an Nvidia investigation",
     "published": "2026-11-09T13:15:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Opinion: The climate case for AI has not been made —By Mary Nichols, distinguished counsel at the UCLA School of Law and the former chair of the California Air Resources Board,…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Innovating with AI in the special chemicals industry",
     "published": "2026-11-09T13:00:00+00:00",
     "summary": "As companies look to accelerate innovation with artificial intelligence, cloud computing, and advanced modeling, the primary challenge is connecting new technologies to reliable data, scientific expertise, and the practical realities of bringing products to market. For specialty chemicals manufacturer Lubrizol, digital transformation is all about giving researchers the tools to test ideas faster, "
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The climate case for AI has not been made",
     "published": "2026-11-09T10:00:00+00:00",
     "summary": "This week, as countries meet in Antalya, Turkey for the United Nations climate conference, one topic likely to dominate the conversation is artificial intelligence. The host has already called on countries to commit to ensuring that AI is designed, powered, and deployed in ways that support climate action. But so far, industries around the world…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Introducing Our Smallest, Most Efficient Model: Muse Ember",
     "published": "2026-11-10T07:28:21+00:00",
     "summary": "Introducing Our Smallest, Most Efficient Model: Muse Ember Meta AI just launched their entry in the Claude Haiku/GPT Luna category: Muse Ember, which they describe as: [...] our smallest and most efficient model designed for complex reasoning execution and the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing. For shorter prompts it's priced th"
    },
    {
     "ref": "simon_willison#1",
     "title": "Quoting Prompting Claude Fable 5.2",
     "published": "2026-11-10T05:34:14+00:00",
     "summary": "Claude Fable 5.2 responds closely to what the prompt says about who owns the code it works on. In Anthropic’s testing on small coding tasks, when a prompt said nothing about ownership or presented the code base as someone else’s, the model tended to add to the existing structure, even when that repeated existing code. [...] If you want the model to improve the structure as it works, say that the c"
    },
    {
     "ref": "simon_willison#2",
     "title": "Yonkers Rises",
     "published": "2026-11-10T03:53:04+00:00",
     "summary": "Tool: Yonkers Rises I realized I didn't know where Yonkers was, so I looked it up on Google Maps and then, to help embed its location and shape in my head (and to try out Claude Fable 5.2's 3D modeling and animation skills), I prompted Fable 5.2 Medium to: Make a three js animation where yonkers stands up as a big mech (cool stand up motion) and átomos around manhattan and queens and Brooklyn, use"
    },
    {
     "ref": "simon_willison#3",
     "title": "llm-anthropic 0.31",
     "published": "2026-11-09T23:58:46+00:00",
     "summary": "Release: llm-anthropic 0.31 Anthropic released Fable 5.2 and Mythos 5.2 today. Fable 5.2 is currently ranked first on Artificial Analysis . Anthropic say it \"solved two open problems in the physics of black holes\", so clearly their internal benchmarks have become more ambitious! I've added the new models to llm-anthropic , so you can now run prompts through Fable 5.2 like this: uv tool install llm"
    },
    {
     "ref": "simon_willison#4",
     "title": "Locating the source of a mysterious beep with Claude",
     "published": "2026-11-09T23:57:21+00:00",
     "summary": "Our house has a box room, full of boxes that we still haven't unpacked from our last move. A couple of weeks ago something in that room started intermittently beeping . The beeps were far enough apart that standing in the room and trying to determine the source of the noise was frustrating, and I really didn't want to dig through every one of those boxes. So I had Claude Code build Beep Locator , "
    },
    {
     "ref": "simon_willison#5",
     "title": "The Web Is More Than Enough, by Paul Ford",
     "published": "2026-11-09T04:32:33+00:00",
     "summary": "My comment on The Web Is More Than Enough, by Paul Ford — Hacker News. OK, this comment convinced me to give that a shot. Here's a thing I made in Three.js this morning - a Nudibranch themed Faberge Egg: https://static.simonwillison.net/static/2026/Hidden-Reef-Egg... (77KB) I just asked Claude (Opus 5.5 Medium running in regular Claude Chat) to port that to Vanilla JS, in the same thread where it "
    },
    {
     "ref": "simon_willison#6",
     "title": "Hide your slop PR descriptions behind",
     "published": "2026-11-09T04:25:05+00:00",
     "summary": "Most of the changes I make to my projects these days come in the form of PRs opened for me by Claude Code or Codex. The PR is my unit of work - I use them to bundle commits together, iterating on them until a feature is complete, document decisions and then merge the finished result. Today's coding agents are great at writing PR descriptions. They're too good at describing the work The problem is "
    },
    {
     "ref": "simon_willison#7",
     "title": "parse_number() as a SQLite extension: C vs Rust",
     "published": "2026-11-08T22:26:00+00:00",
     "summary": "Research: parse_number() as a SQLite extension: C vs Rust I was out walking the dog when I got curious about how easy/difficult it would be to write a SQLite C extension that adds a parse_number() function for turning strings like -$1,234.56 or '12.5%' into numeric values that could be summed and sorted. I fired up regular Claude chat (Opus 5.5) and prompted : I'm thinking about a SQLite custom fu"
    },
    {
     "ref": "simon_willison#8",
     "title": "datasette #3046: Don't serve link: rel=next HTTP headers to Firefox for HTML pages",
     "published": "2026-11-07T23:57:46+00:00",
     "summary": "datasette #3046: Don't serve link: rel=next HTTP headers to Firefox for HTML pages I was looking at the Firefox network panel today when I noticed that requests to a Datasette table page were triggering an HTTP prefetch to the next page of rows in that table. This was happening because Datasette pages serve an HTTP link header like this: link: <https://latest.datasette.io/fixtures/compound_three_p"
    },
    {
     "ref": "simon_willison#9",
     "title": "Terry Pratchett's Study",
     "published": "2026-11-07T19:34:24+00:00",
     "summary": "My comment on Terry Pratchett's Study — Hacker News. Terry Pratchett once wrote about the concept of \"horizontal wealth\". Vertical wealth is where you spend money on rich people stuff - yachts and suchlike. Horizontal wealth is where you spend more money on the things you liked before you got rich: https://chibuikeani.blogspot.com/2017/02/the-price-of-happin... But horizontal wealth means not lett"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "David Ellison says AI could be the ‘biggest creative unlock in modern history’",
     "published": "2026-11-10T00:28:49+00:00",
     "summary": "During Paramount Skydance's latest earnings call, CEO David Ellison said \"it's hard to imagine\" AI won't have a bigger impact on the film industry than CGI. In response to a question about the company's outlook for AI, Ellison said: \"I think when you zoom out and look at production, AI really has the potential to […]"
    },
    {
     "ref": "the_verge#1",
     "title": "What could China get from Jensen Huang?",
     "published": "2026-11-09T23:51:58+00:00",
     "summary": "It's difficult to overstate Nvidia's power in today's AI landscape. The company's chips are the bedrock upon which advanced AI technology in the US is being built, and demand has consistently outpaced supply for years. Nvidia has also been an influential investor in a wide range of up-and-coming AI companies in recent years, with about […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Here’s what Trump said he knew about Jensen Huang",
     "published": "2026-11-09T23:47:46+00:00",
     "summary": "President Trump held a White House press briefing earlier today and responded to several questions about his knowledge of Nvidia CEO Jensen Huang's affair with an alleged Chinese spy. Huang said this weekend that he had been \"​​unfaithful\" to his wife, and the company has opened an investigation into Huang. Recent articles from The New […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Everything we know so far about the Nvidia spy scandal targeting CEO Jensen Huang",
     "published": "2026-11-09T23:07:59+00:00",
     "summary": "The leather-jacketed CEO of Nvidia, Jensen Huang, has acknowledged an affair with Megaspeed exec Alice Huang, spurring an investigation by his company and intense discussions worldwide. Recent reporting noted that since last year, US intelligence reports had identified Alice Huang (no relation) as not only the exec for an AI compute company renting access to […]"
    },
    {
     "ref": "the_verge#4",
     "title": "MSI’s refurbished QD-OLED gaming monitor is on sale for under $300",
     "published": "2026-11-09T21:43:41+00:00",
     "summary": "One of the best upgrades you can make to your PC gaming setup is an OLED monitor. Fortunately, MSI’s factory-reconditioned Mag 272QP X24 is on sale at Woot through November 18th with a 180-day manufacturer warranty for $290.99, which is more than $100 cheaper than the full MSRP of $399.99. MSI’s 27-inch screen is well-featured […]"
    },
    {
     "ref": "the_verge#5",
     "title": "The global pledge to use AI for climate good is a cruel joke",
     "published": "2026-11-09T21:13:16+00:00",
     "summary": "At this point, reading through the latest splashy pledge to use AI for the good of the environment feels like downing a nonalcoholic beer. Admittedly, I'm suspicious from the onset. How can this be good? But I love beer and our planet enough to give it a whirl - and hey, why not try a […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Apple’s $50 Intelligence Usage Packs extend access to some AI features",
     "published": "2026-11-09T19:09:58+00:00",
     "summary": "After publishing a support article in early September outlining usage limits for some Apple Intelligence features, the company has updated Logic Pro with an option to \"Buy More Usage\" for a one-time purchase price of $49.99, as spotted by 9to5Mac. It has a built-in AI assistant to do things like \"start a new song, set […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Anthropic launches new Claude Fable and Mythos 5.2 models",
     "published": "2026-11-09T19:00:00+00:00",
     "summary": "Anthropic is announcing two new models today: Claude Fable 5.2 and Claude Mythos 5.2, which it says are designed to take on \"daunting\" technical challenges. The company claims the new models show improvements in coding, reasoning, and vision, and can generate outputs faster than the 5.1 versions of the Fable and Mythos models. Claude Fable […]"
    },
    {
     "ref": "the_verge#8",
     "title": "You can grab three months of Game Pass Ultimate for under $20 per month",
     "published": "2026-11-09T18:35:25+00:00",
     "summary": "The price of Xbox Game Pass Ultimate has fluctuated between $20 and $30 per month over the last year, but you can get three months of the top plan for around $19 per month. At Newegg, using the coupon code BNWF2656 at checkout knocks $11 off the usual cost of a three-month subscription. That brings […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Instagram’s Effect Builder makes new filters from AI prompts",
     "published": "2026-11-09T18:07:23+00:00",
     "summary": "After expanding its Edits app to macOS last week, Instagram's next move is launching this Effect Builder that generates custom filters for your Stories posts with AI. Available now for US residents who are over 18, it has a prompt box for describing your filter idea to the chatbot, with an option to attach style […]"
    }
   ]
  }
 ]
}
</input>