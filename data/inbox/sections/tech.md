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
     "title": "Seagate's new hybrid drive raises some old questions",
     "published": "2026-11-10T23:30:56+00:00",
     "summary": "The FireCuda Forge revisits an old idea, with some familiar questions."
    },
    {
     "ref": "ars_technica#1",
     "title": "The US military seems to be getting nervous about the launch supply crunch",
     "published": "2026-11-10T23:02:39+00:00",
     "summary": "\"Launch is extremely constrained and that is exactly the situation we predicted.\""
    },
    {
     "ref": "ars_technica#2",
     "title": "Ring cameras go mobile as Amazon debuts AI-powered security drone and robot",
     "published": "2026-11-10T22:35:01+00:00",
     "summary": "Amazon's roaming Ring Robotics devices will debut in late 2026 and early 2027."
    },
    {
     "ref": "ars_technica#3",
     "title": "Democrats oppose plan to stack FCC with Republicans, plan probes of Chairman Carr",
     "published": "2026-11-10T21:55:26+00:00",
     "summary": "Democrats accuse FCC nominee of evading questions about Carr, her current boss."
    },
    {
     "ref": "ars_technica#4",
     "title": "Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI",
     "published": "2026-11-10T21:12:59+00:00",
     "summary": "Researcher finds 35,000 Grok Build apps wide open to anyone who looked for them."
    },
    {
     "ref": "ars_technica#5",
     "title": "What happens to mathematics when AI becomes an oracle?",
     "published": "2026-11-10T20:30:01+00:00",
     "summary": "Mathematician Steven Strogatz discusses his new book, Big Math: The Hidden Codes That Run Our World ."
    },
    {
     "ref": "ars_technica#6",
     "title": "Google Fi adds support for a second 5G network, won't say which one",
     "published": "2026-11-10T19:35:59+00:00",
     "summary": "Fi has always supported T-Mobile, but the new one? Google won't say."
    },
    {
     "ref": "ars_technica#7",
     "title": "Pixel phones getting new icon styles, Create My Widget, and more in November Pixel Drop",
     "published": "2026-11-10T19:00:26+00:00",
     "summary": "Spruce up your home screen with expanded custom icons and AI-generated widgets."
    },
    {
     "ref": "ars_technica#8",
     "title": "Free video-streaming service Tubi lets users share curated watchlists now",
     "published": "2026-11-10T18:39:16+00:00",
     "summary": "User-based recommendations could make it easier to find stuff to watch on Tubi."
    },
    {
     "ref": "ars_technica#9",
     "title": "Steam Deck performance gets a reality check with Valve's new FPS data",
     "published": "2026-11-10T17:26:44+00:00",
     "summary": "Benchmark tools for generic gaming rigs could be coming soon."
    },
    {
     "ref": "ars_technica#10",
     "title": "High oil prices have led to a dip in global carbon emissions",
     "published": "2026-11-10T16:29:27+00:00",
     "summary": "Bucking recent trends, fossil fuel emissions look to be down 0.4 percent."
    },
    {
     "ref": "ars_technica#11",
     "title": "One space station company sues another for copying its work",
     "published": "2026-11-10T16:17:51+00:00",
     "summary": "\"NASA advised that Vast’s submission in some locations substituted 'the PAM Provider' for Axiom\""
    },
    {
     "ref": "ars_technica#12",
     "title": "DeepMind reveals Gemini Robotics 2.5 and open safety benchmark \"ASIMOV-jailbreak\"",
     "published": "2026-11-10T15:00:39+00:00",
     "summary": "The new model is up to twice as successful at some tasks."
    },
    {
     "ref": "ars_technica#13",
     "title": "Nvidia has a Jensen Huang problem—and no obvious successor",
     "published": "2026-11-10T14:53:05+00:00",
     "summary": "Huang faces a board probe as investors fret over Nvidia’s lack of a clear successor."
    },
    {
     "ref": "ars_technica#14",
     "title": "FDA warns GLP-1 drugs may pose risk of rare condition that causes vision loss",
     "published": "2026-11-10T14:43:49+00:00",
     "summary": "The risk appears small and data is mixed, but FDA wants patients to be aware."
    },
    {
     "ref": "ars_technica#15",
     "title": "Polestar has a new look with its Formula 2030 concept",
     "published": "2026-11-10T14:22:02+00:00",
     "summary": "The shape looks like a Saab Aero-X, but the nose previews the next Polestar 2."
    },
    {
     "ref": "ars_technica#16",
     "title": "Ukraine’s fiber-optic drones get squeezed by AI data center demand",
     "published": "2026-11-10T12:15:32+00:00",
     "summary": "Ukraine competes with Russia and data centers for China’s optical fiber supply."
    },
    {
     "ref": "ars_technica#17",
     "title": "Review: Apple's M6 MacBook Pro is good, but it's missing all the exciting stuff",
     "published": "2026-11-10T12:00:21+00:00",
     "summary": "Per usual, the basic MacBook Pro lags behind the flagships where it counts."
    },
    {
     "ref": "ars_technica#18",
     "title": "DCU shake-up: James Gunn and Peter Safran out post-merger",
     "published": "2026-11-09T21:55:35+00:00",
     "summary": "Producer and former Kevin Feige protege Jeremy Latcham will replace Gunn and Safran."
    },
    {
     "ref": "ars_technica#19",
     "title": "Man who lost $308,000 on sports bets sues Kalshi for offering illegal gambling",
     "published": "2026-11-09T21:13:39+00:00",
     "summary": "Lawsuit demands Kalshi return losses because online betting is illegal in Washington."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "\"בלי המפתחות הכל מושבת\": היזמים שמאחורי Zerto חושפים סטארטאפ חדש עם סבב סיד גדול במיוחד",
     "published": "2026-11-10T15:00:37+00:00",
     "summary": "האחים זיו ועודד קדם הם לא שמות חדשים בהייטק המקומי, אבל עכשיו, אחרי שהקימו ומכרו את Kashya ל-EMC ואת Zerto ל-HPE, הם חוזרים כעת לסיבוב נוסף, הפעם עם סטארטאפ חדש בשם Dreeze. היום (ג') יוצאת החברה ממצב Stealth עם גיוס סיד חריג בהיקפו של 33 מיליון דולר. את הסבב הובילו הקרנות האמריקאיות Norwest ו-Bessemer Venture Partners, […] The post \"בלי המפתחות הכל מושבת\": היזמים שמאחורי Zerto חושפים סטארטאפ חדש ע"
    },
    {
     "ref": "geektime#1",
     "title": "גיוס של 80 מיליון דולר לסטארטאפ הישראלי שמגן על Lovable ו-LastPass",
     "published": "2026-11-10T14:31:48+00:00",
     "summary": "בדיוק שנה עברה מאז שחברת הסייבר הישראלית Daylight הודיעה על סבב הגיוס הקודם שלה, והיום (ג') היא חושפת גיוס גדול נוסף. עכשיו מודיע הסטארטאפ על השלמת סבב B בגובה 80 מיליון דולר בהובלת Goldman Sachs ובהשתתפות משקיעה חדשה, Okta Ventures, לצד הקרנות הקיימות Vintage Partners, Craft Ventures, Bain Capital ו-Maple Capital. הגיוס הנוכחי מביא את […] The post גיוס של 80 מיליון דולר לסטארטאפ הישראלי שמגן על L"
    },
    {
     "ref": "geektime#2",
     "title": "מה? הדמעות? זה בגלל ש-Waze מאפשרת עכשיו לבחור נקודת מוצא",
     "published": "2026-11-10T13:37:23+00:00",
     "summary": "גם לכם זה בטח קרה. אתם רוצים לבדוק כמה זמן ייקח לחבר להגיע אליכם או כמה מה הדרך הכי טובה להגיע מהעבודה למסעדה כלשהי, אבל Waze מתעקשת לתת לכם את המסלול רק מהמיקום הנוכחי שלכם. אז עד היום עקפנו את זה בכל מיני שיטות או בעזרת Google Maps, אבל עכשיו, אפליקציית הניווט הפופולרית סוף סוף […] The post מה? הדמעות? זה בגלל ש-Waze מאפשרת עכשיו לבחור נקודת מוצא appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "יובל זכריה מגייסת 50 מיליון דולר לסטארטאפ שהקימה לפני פחות משנה",
     "published": "2026-11-10T13:00:47+00:00",
     "summary": "בשנה האחרונה סוכני AI משנים לגמרי את הדרך שבה אנחנו עובדים. מעולם שבו בני אדם מפעילים (או כותבים) תוכנות, אנחנו עוברים למציאות שבה האייג'נטים כבר מקבלים החלטות לבד, ולא פעם הם עושים את זה עם גישה ישירה למערכות רגישות. הבעיה היא שמערכות אבטחה מסורתיות פשוט לא נבנו לעולם הזה, ומתקשות להבין מתי פעולה לגיטימית הופכת […] The post יובל זכריה מגייסת 50 מיליון דולר לסטארטאפ שהקימה לפני פחות משנה appeared "
    },
    {
     "ref": "geektime#4",
     "title": "מתחרה חדשה: Revolut הבריטית קיבלה אישור להקים בנק בישראל",
     "published": "2026-11-10T11:58:00+00:00",
     "summary": "אחרי השמועות והדיווחים הלא רשמיים, זה רשמי: בנק ישראל העניק היום (ג') לקבוצת Revolut הבריטית רישיון מותנה להקמת בנק בישראל. הגוף החדש, שיזכה לשם הסקסי \"בנק רבולוט ישראל (בהקמה)\", הוא ניסיון נוסף של המדינה ובנק ישראל לפתוח קצת את שוק הבנקאות המקומי המנומנם לתחרות. הרישיון הזה הוא השלישי שניתן לבנק חדש בישראל מאז 2019, כשבנק […] The post מתחרה חדשה: Revolut הבריטית קיבלה אישור להקים בנק בישראל appea"
    },
    {
     "ref": "geektime#5",
     "title": "וויקס קנתה אותה ב-80 מיליון דולר, אבל עכשיו Base44 מכניסה 250 מיליון דולר בשנה",
     "published": "2026-11-10T09:55:18+00:00",
     "summary": "לפני כשנה וחצי רכשה Wix את Base44, סטארטאפ ישראלי צעיר שהוקם כמה חודשים לפני, ב-80 מיליון דולר. אבל מה שנראה אז בעיקר כאקזיט חלומי ליזם מאור שלמה, מתברר עכשיו, עם פרסום הדוחות הרבעוניים של וויקס, כאחד המהלכים האסטרטגיים והחשובים שוויקס עשתה בשנים האחרונות. עסקה חלומית לכולם על פי הדוחות הרבעוניים של וויקס לרבעון השלישי של […] The post וויקס קנתה אותה ב-80 מיליון דולר, אבל עכשיו Base44 מכניסה 250 מ"
    },
    {
     "ref": "geektime#6",
     "title": "מטא פותחת מחזור חדש לתוכנית הסטארטאפים שלה בישראל, וכדאי שתזדרזו להירשם",
     "published": "2026-11-10T09:27:47+00:00",
     "summary": "חברת Meta פתחה את ההרשמה למחזור השני של Meta Startup Growth Program – תוכנית לליווי סטארטאפים ישראליים בשלבים מוקדמים, המתמקדת בצמיחה והתרחבות לשווקים בינלאומיים. המשתתפים יפגשו עם מומחי החברה מהארץ ומהעולם, ישתתפו בסדנאות מקצועיות ויקבלו שעות ייעוץ אישיות. התוכנית מיועדת לסטארטאפים B2C שכבר מציגים פעילות ראשונית בשוק, מתמקדים בצמיחה גלובלית ושואפים להרחיב את פעילותם לשווקים […] The post מטא פותחת"
    },
    {
     "ref": "geektime#7",
     "title": "ג'יימס גאן התפוטר מתפקידו ב-DC Studios – וקשה לנו להיראות מופתעים",
     "published": "2026-11-10T08:43:14+00:00",
     "summary": "בעוד קצת יותר מחודש סביר להניח שכל עולם הגיקים ידבר רק על Avengers: Doomsday, אבל עד אז יש לנו דרמה אחרת: הלילה (ב') נודע כי ג'יימס גאן ופיטר ספרן \"עוזבים\" את תפקידיהם כמנכ\"לים משותפים ומנהלי אולפני DC Studios. אז מה קרה שם ולמה לדעתנו DC מראה לגאן את הדלת? הכישלונות וההצלחות של גאן גאן מונה […] The post ג'יימס גאן התפוטר מתפקידו ב-DC Studios – וקשה לנו להיראות מופתעים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#8",
     "title": "פרשת המרגלת באנבידיה: מה סין באמת ניסתה להשיג?",
     "published": "2026-11-10T07:04:47+00:00",
     "summary": "קשה להפריז בכוחה של אנבידיה בשנים האחרונות, וזה ממש לא רק שווי השוק המטורף (והמשחק עם אפל על מי החברה בעלת השווי הגבוה בעולם). השבבים של החברה הם תשתית ה-AI העולמית, ואיפשהו גם התקן העולמי שכמעט כל החברות מתיישרות אליו, כך שהדרישה למוצרים של החברה עולה כבר שנים על קצב הייצור שלה. לכן, כשהתפוצצה פרשת […] The post פרשת המרגלת באנבידיה: מה סין באמת ניסתה להשיג? appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#9",
     "title": "עוד 29 מיליון דולר לסטארטאפ הישראלי שמאפשר לכל אחד לפרסם ספר",
     "published": "2026-11-09T14:00:43+00:00",
     "summary": "יום אחד מישהו יכתוב ספר על כמה שזה קשה להוציא ספר לאור. עד אז, יש סטארטאפ ישראלי שמנסה לעזור לסופרים להפוך את תהליך ההפקה, ההפצה ואפילו השיווק של הספרים שלהם – מתהליך של יותר משנה לכזה שאורך שבועות ספורים. היום (ב') הוא מודיע גם על גיוס של 29 מיליון דולר. תנו לאייג'נטס להוציא לאור Spines […] The post עוד 29 מיליון דולר לסטארטאפ הישראלי שמאפשר לכל אחד לפרסם ספר appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#10",
     "title": "החוקרים הישראלים התריעו על חולשה חמורה ב-Grok של אילון מאסק, xAI פשוט התעלמה",
     "published": "2026-11-09T13:29:17+00:00",
     "summary": "אם אתם משתמשים בסוכני AI בארגון, כנראה שאתם כבר סומכים עליהם עם לא מעט מידע רגיש כדי שיבצעו עבורכם פעולות מורכבות. אבל מחקר חדש של חברת אבטחת המידע הישראלית Profero חושף היום (ב') שורה של חולשות אבטחה ב-Grok Bot, סוכן ה-AI מבית xAI של אילון מאסק. החולשות הללו עלולות לאפשר לכאורה לתוקפים להשתלט על סביבת […] The post החוקרים הישראלים התריעו על חולשה חמורה ב-Grok של אילון מאסק, xAI פשוט התעלמה appear"
    },
    {
     "ref": "geektime#11",
     "title": "בכנס הזה תלמדו איך מחברים AI לדאטה שלכם בלי שורת SQL אחת",
     "published": "2026-11-09T12:40:47+00:00",
     "summary": "השלב הבא ב-AI הוא להפוך את המודלים לחלק בלתי נפרד מהמערכות, התהליכים הארגוניים וסביבת העבודה: לחבר אותו לדאטה אמיתי, לאפשר לו לבצע פעולות, להניע תהליכים ולקבל החלטות מבוססות מידע. אבל איך עוברים מדמו מרשים למערכת שעובדת בפרודקשן, מתממשקת לתשתיות קיימות ועומדת בדרישות האבטחה וה-Governance של הארגון? השאלה הזאת היא המקום שבו מתחיל האתגר ההנדסי האמיתי. […] The post בכנס הזה תלמדו איך מחברים AI לדאטה "
    },
    {
     "ref": "geektime#12",
     "title": "חורים בפנסיה: לאן נעלמים 7,000 שקל בחודש מהשכר של ההייטקיסטים?",
     "published": "2026-11-09T09:59:07+00:00",
     "summary": "מאת אור אייזנברג לצפות בצבע מתייבש… לקרוא תנאי שימוש של תוכנה… לראות אקסל של רואה חשבון… יש כמה דברים משעממים במיוחד, וגם הם, כך נדמה, לא מתקרבים להתעסקות בפנסיה. ואנחנו איתכם: מושגים כמו שכר מבוטח, תשואות, דמי ניהול והפרשות מעסיק הם ההגדרה המילונית ל-50 גוונים של אפור. העניין הוא שהסיפור הזה שווה לכם המון כסף, […] The post חורים בפנסיה: לאן נעלמים 7,000 שקל בחודש מהשכר של ההייטקיסטים? appeared fi"
    },
    {
     "ref": "geektime#13",
     "title": "המנכ\"ל החדש של אפל מאבד סבלנות, ודורש הרבה יותר מהבכירים",
     "published": "2026-11-09T08:13:18+00:00",
     "summary": "יותר משנתיים אחרי ההכרזה המקורית, אפל סוף סוף השיקה השנה את Siri AI, הגרסה החדשה של העוזרת האישית שלה. אולם כעת כשיש לה עוזרת מודרנית והרבה יותר חכמה, היא הגיעה לשלב שבו היא מבינה שהיא כבר לא יכולה לנוח על זרי הדפנה, כיוון שבכל פעם שאתה משחק תופסת עם המתחרים בשוק ה-AI, המשחק משתנה לך […] The post המנכ\"ל החדש של אפל מאבד סבלנות, ודורש הרבה יותר מהבכירים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#14",
     "title": "\"לא הייתי נאמן לאשתי\": הנה המייל המלא ששלח ג'נסן הואנג לעובדי אנבידיה הלילה",
     "published": "2026-11-09T05:29:17+00:00",
     "summary": "הלילה דווח שאנבידיה פתחה בחקירה רשמית לגבי קשריו של המייסד והמנכ\"ל האגדי שלה, ג'נסן הואנג, עם אליס הואנג, מנהלת בכירה בחברת Megaspeed, ועל פי החשד, סוכנת של ממשלת סין. במקביל, הואנג הודה ברומן במכתב ששלח לעובדי החברה. הנה תרגום של המייל המלא. \"אין שום תירוץ למה שעשיתי\" לעמיתיי באנבידיה, אני חייב למשפחתי ולכולכם התנצלות. לא […] The post \"לא הייתי נאמן לאשתי\": הנה המייל המלא ששלח ג'נסן הואנג לעובדי "
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "After 7 months, Glasswing overwelms maintainers with underwhelming findings",
     "published": "2026-11-10T22:17:56+00:00",
     "summary": "Article URL: https://www.vulncheck.com/blog/anthropic-glasswing-november-update Comments URL: https://news.ycombinator.com/item?id=50447074 Points: 305 # Comments: 135"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Six Math Essentials by Terence Tao",
     "published": "2026-11-10T20:58:44+00:00",
     "summary": "Article URL: https://teorth.github.io/tao-web/six-math-essentials.html Comments URL: https://news.ycombinator.com/item?id=50446246 Points: 154 # Comments: 27"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Scion is back and is going to sell a kei truck in America",
     "published": "2026-11-10T19:50:46+00:00",
     "summary": "Article URL: https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/ Comments URL: https://news.ycombinator.com/item?id=50445401 Points: 360 # Comments: 265"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Starlink Mini 2",
     "published": "2026-11-10T18:22:32+00:00",
     "summary": "Article URL: https://starlink.com/mini-2 Comments URL: https://news.ycombinator.com/item?id=50444129 Points: 293 # Comments: 296"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Synaptics patent claims stop work on DisplayLink drivers",
     "published": "2026-11-10T18:02:02+00:00",
     "summary": "Article URL: https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/ Comments URL: https://news.ycombinator.com/item?id=50443824 Points: 322 # Comments: 180"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Show HN: Get your coding agent off ~2019 JavaScript, onto modern web primitives",
     "published": "2026-11-10T18:01:15+00:00",
     "summary": "Browsers natively handle a lot of what used to take 50 lines of JS (or a dependency): `CSS.highlights` for text range highlighting without s everywhere, ` ` and showModal() give you backdrops and ideal focus management, `field-sizing` to auto-grow textareas as the user types.. (Something yesterday's ftrain post touched on [0]) Models know about some of these by name, but consistently won't default"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Val Town is winding down",
     "published": "2026-11-10T17:31:14+00:00",
     "summary": "Article URL: https://blog.val.town/winding-down Comments URL: https://news.ycombinator.com/item?id=50443427 Points: 322 # Comments: 85"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "AMD's Zen 6 Family: Feeding the Beast",
     "published": "2026-11-10T17:02:32+00:00",
     "summary": "Article URL: https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast Comments URL: https://news.ycombinator.com/item?id=50443090 Points: 194 # Comments: 74"
    },
    {
     "ref": "hn_frontpage#8",
     "title": ".name Grandfathered",
     "published": "2026-11-10T16:37:44+00:00",
     "summary": "Previously: .name Termination - https://news.ycombinator.com/item?id=49550772 - Sept 2026 (547 comments) Comments URL: https://news.ycombinator.com/item?id=50442736 Points: 715 # Comments: 168"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Smart home devices should work without the internet",
     "published": "2026-11-10T15:25:20+00:00",
     "summary": "Article URL: https://docodethatmatters.com/home-automation-overnight-success/ Comments URL: https://news.ycombinator.com/item?id=50441707 Points: 755 # Comments: 269"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Show HN: Valencia, Spain in Sim City/Isometric View",
     "published": "2026-11-10T15:12:16+00:00",
     "summary": "Article URL: https://tinyvalencia.com/ Comments URL: https://news.ycombinator.com/item?id=50441518 Points: 207 # Comments: 52"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Ableton Live 13",
     "published": "2026-11-10T12:58:04+00:00",
     "summary": "Article URL: https://www.ableton.com/en/live/ Comments URL: https://news.ycombinator.com/item?id=50439695 Points: 289 # Comments: 304"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "What's new in the .NET 11 runtime",
     "published": "2026-11-10T12:20:07+00:00",
     "summary": "https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/ Comments URL: https://news.ycombinator.com/item?id=50439284 Points: 247 # Comments: 178"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "AlphaProof Code",
     "published": "2026-11-10T12:11:12+00:00",
     "summary": "Article URL: https://deepmind.google/blog/introducing-alphaproof-code/ Comments URL: https://news.ycombinator.com/item?id=50439193 Points: 586 # Comments: 178"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "AI usage generates a fragile codebase",
     "published": "2026-11-10T10:25:58+00:00",
     "summary": "Article URL: https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/ Comments URL: https://news.ycombinator.com/item?id=50438318 Points: 407 # Comments: 424"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Speech Processing Pioneer Bishnu Saroop Atal Dies at 93",
     "published": "2026-11-10T19:00:02+00:00",
     "summary": "Bishnu Saroop Atal Acoustics and signal processing pioneer Life Fellow, 93; died 19 August Atal was an acoustics and signal processing researcher at Bell Labs in Murray Hill, N.J., and later at AT&T ’s Shannon Laboratory, in Florham Park, N.J. His pioneering work on voice-coding techniques became the foundation for efficient, high-quality voice transmission over cellular networks. He received the "
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Catch Electronics Shock and Drop Failures Before Hardware Is Built",
     "published": "2026-11-10T11:00:02+00:00",
     "summary": "Learn how guided virtual shock and drop analysis helps engineering teams identify reliability risks before physical testing, reduce qualification iterations, optimize packaging designs, and accelerate electronics product development. What you will learn about: Why shock failures found during physical qualification are costly, and how coupled electrical, mechanical, thermal, and packaging effects m"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "AI Agents Are Testing the Limits of Zero-Trust Security",
     "published": "2026-11-09T16:25:06+00:00",
     "summary": "This article is brought to you by Queen’s University Belfast . Several teams around the globe are leveraging AI by creating a task force of agents managed by an orchestrator and creating applications to support risk assessment, client profiling, match making, and information yield with a slight overview of decision making. One of the important components for these agents is to ensure that the logs"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "How Do You Land on a Moon With Almost No Gravity?",
     "published": "2026-11-06T15:00:02+00:00",
     "summary": "Last August, looking up from the edge of an ancient river delta on Mars, the Perseverance rover ’s electronic eye spied an oblong shadow crossing the distant, glowing Sun. Phobos , the Martian moon named for the Greek god of fear and panic, was transiting the solar disk. Too small to darken the pale, dust-tinged sky, but orbiting close enough to eclipse a significant fraction of the Sun, Phobos pa"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "IEEE Program Schools Preuniversity Educators On Tech Topics",
     "published": "2026-11-05T19:00:02+00:00",
     "summary": "Now in their third year, the IEEE TryEngineering educator sessions continue to empower preuniversity teachers with specialized professional development programs on engineering topics and classroom-tested lessons. This year’s sessions, held across the United States, have focused on educating teachers about artificial intelligence and semiconductor technology. One session was held in Egypt. In all, "
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "Use Your Year-End Review to Reach for a Promotion",
     "published": "2026-11-05T16:08:03+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! Hard work rarely speaks for itself. When I landed my first job as a software engineer, I had a simple plan: Work hard and somebody would notice. Even"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "Why a Mathematician Is Chasing Eclipses With Algorithms and Cameras",
     "published": "2026-11-05T14:00:02+00:00",
     "summary": "The sun hangs low over the plains of Castile and León, in the north-central region of Spain. But from a slope of the mountain Pico Trigaza , it appears that a few puffy white clouds have started to block the sun. That’s vexing. A group of researchers, some wearing cardboard eclipse glasses, is clustered around sets of portable telescopes and cameras connected to laptops. All this gear is scattered"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The Download: Pelosi’s successor targets AI and data centers face power woes",
     "published": "2026-11-10T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Nancy Pelosi’s replacement is ready to regulate AI —Grace Huckins As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "Evolving metal extraction processes",
     "published": "2026-11-10T13:00:00+00:00",
     "summary": "The metals industry has experienced transformational moments before: the Bessemer process, flash smelting, electric arc furnaces, and modern continuous casting all changed what was possible. Yet, for more than a century, most extraction processes rely on techniques and pathways that would be familiar to metallurgists from generations ago. Processes have become larger and control systems…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The backlash about data centers might really just be about electricity",
     "published": "2026-11-09T19:35:33+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. As voters went to the polls across the US last week, I was in Ashburn, Virginia, part of what’s known as Data Center Alley—the world’s largest data center hub. It’s also where…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Nancy Pelosi’s replacement is ready to regulate AI",
     "published": "2026-11-09T17:05:43+00:00",
     "summary": "As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a tight congressional race for former Speaker of the House Nancy Pelosi’s open San Francisco seat, he could play a key role in setting federal AI policy. I spoke with Wiener on Friday, only a…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: empty AI climate claims, and an Nvidia investigation",
     "published": "2026-11-09T13:15:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Opinion: The climate case for AI has not been made —By Mary Nichols, distinguished counsel at the UCLA School of Law and the former chair of the California Air Resources Board,…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Innovating with AI in the special chemicals industry",
     "published": "2026-11-09T13:00:00+00:00",
     "summary": "As companies look to accelerate innovation with artificial intelligence, cloud computing, and advanced modeling, the primary challenge is connecting new technologies to reliable data, scientific expertise, and the practical realities of bringing products to market. For specialty chemicals manufacturer Lubrizol, digital transformation is all about giving researchers the tools to test ideas faster, "
    },
    {
     "ref": "mit_tech_review#6",
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
     "title": "llm-gemini 0.36",
     "published": "2026-11-10T20:09:44+00:00",
     "summary": "Release: llm-gemini 0.36 Gemini 4 Carbon was announced two weeks ago for \"a subset of cyber defenders\", but today it's available to everyone else . This is Google's best ever Gemini, priced at $2/million input and $10/million output at launch (that's GPT-6.1 Sol / Claude Sonnet 5.5 prices) but scheduled to double in price to $4/$20 on December 1st (same as Opus 5.5). Here are three pelicans for th"
    },
    {
     "ref": "simon_willison#1",
     "title": "Introducing Our Smallest, Most Efficient Model: Muse Ember",
     "published": "2026-11-10T07:28:21+00:00",
     "summary": "Introducing Our Smallest, Most Efficient Model: Muse Ember Meta AI just launched their entry in the Claude Haiku/GPT Luna category: Muse Ember, which they describe as: [...] our smallest and most efficient model designed for complex reasoning execution and the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing. For shorter prompts it's priced th"
    },
    {
     "ref": "simon_willison#2",
     "title": "Quoting Prompting Claude Fable 5.2",
     "published": "2026-11-10T05:34:14+00:00",
     "summary": "Claude Fable 5.2 responds closely to what the prompt says about who owns the code it works on. In Anthropic’s testing on small coding tasks, when a prompt said nothing about ownership or presented the code base as someone else’s, the model tended to add to the existing structure, even when that repeated existing code. [...] If you want the model to improve the structure as it works, say that the c"
    },
    {
     "ref": "simon_willison#3",
     "title": "Yonkers Rises",
     "published": "2026-11-10T03:53:04+00:00",
     "summary": "Tool: Yonkers Rises I realized I didn't know where Yonkers was, so I looked it up on Google Maps and then, to help embed its location and shape in my head (and to try out Claude Fable 5.2's 3D modeling and animation skills), I prompted Fable 5.2 Medium to: Make a three js animation where yonkers stands up as a big mech (cool stand up motion) and átomos around manhattan and queens and Brooklyn, use"
    },
    {
     "ref": "simon_willison#4",
     "title": "llm-anthropic 0.31",
     "published": "2026-11-09T23:58:46+00:00",
     "summary": "Release: llm-anthropic 0.31 Anthropic released Fable 5.2 and Mythos 5.2 today. Fable 5.2 is currently ranked first on Artificial Analysis . Anthropic say it \"solved two open problems in the physics of black holes\", so clearly their internal benchmarks have become more ambitious! I've added the new models to llm-anthropic , so you can now run prompts through Fable 5.2 like this: uv tool install llm"
    },
    {
     "ref": "simon_willison#5",
     "title": "Locating the source of a mysterious beep with Claude",
     "published": "2026-11-09T23:57:21+00:00",
     "summary": "Our house has a box room, full of boxes that we still haven't unpacked from our last move. A couple of weeks ago something in that room started intermittently beeping . The beeps were far enough apart that standing in the room and trying to determine the source of the noise was frustrating, and I really didn't want to dig through every one of those boxes. So I had Claude Code build Beep Locator , "
    },
    {
     "ref": "simon_willison#6",
     "title": "The Web Is More Than Enough, by Paul Ford",
     "published": "2026-11-09T04:32:33+00:00",
     "summary": "My comment on The Web Is More Than Enough, by Paul Ford — Hacker News. OK, this comment convinced me to give that a shot. Here's a thing I made in Three.js this morning - a Nudibranch themed Faberge Egg: https://static.simonwillison.net/static/2026/Hidden-Reef-Egg... (77KB) I just asked Claude (Opus 5.5 Medium running in regular Claude Chat) to port that to Vanilla JS, in the same thread where it "
    },
    {
     "ref": "simon_willison#7",
     "title": "Hide your slop PR descriptions behind",
     "published": "2026-11-09T04:25:05+00:00",
     "summary": "Most of the changes I make to my projects these days come in the form of PRs opened for me by Claude Code or Codex. The PR is my unit of work - I use them to bundle commits together, iterating on them until a feature is complete, document decisions and then merge the finished result. Today's coding agents are great at writing PR descriptions. They're too good at describing the work The problem is "
    },
    {
     "ref": "simon_willison#8",
     "title": "parse_number() as a SQLite extension: C vs Rust",
     "published": "2026-11-08T22:26:00+00:00",
     "summary": "Research: parse_number() as a SQLite extension: C vs Rust I was out walking the dog when I got curious about how easy/difficult it would be to write a SQLite C extension that adds a parse_number() function for turning strings like -$1,234.56 or '12.5%' into numeric values that could be summed and sorted. I fired up regular Claude chat (Opus 5.5) and prompted : I'm thinking about a SQLite custom fu"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Microsoft’s DLSS competitor is out for the Xbox Ally X and works in handheld mode",
     "published": "2026-11-11T00:34:24+00:00",
     "summary": "Microsoft is now rolling out Automatic Super Resolution (Auto SR), an upscaling technology that competes with Nvidia's DLSS, for the Xbox Ally X, Xbox Ally X20, and select Windows Copilot Plus PCs, the company announced today. Auto SR is also getting some new features alongside this official release. In April, Microsoft started testing Auto SR […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The VR Disney Plus app on Meta Quest now has 3D movies",
     "published": "2026-11-10T22:00:00+00:00",
     "summary": "Disney is bringing more than 60 3D movies to the Disney Plus app on Meta Quest. The movies will be available to Disney Plus subscribers as part of an updated Disney Plus app that's rolling out today. The 3D movies you can check out include The Avengers and Black Panther, Meta says. But the updated […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Oura is acquiring medical AI chatbot startup Counsel Health",
     "published": "2026-11-10T21:40:31+00:00",
     "summary": "Oura announced its quarterly earnings today and said it agreed to acquire Counsel Health for $625 million, after adding the company's AI chatbot to its app earlier this year. Counsel Health calls itself an \"AI-native primary care company,\" using the app to deliver AI-generated responses and insights based on users' health data reported from their […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Sony cancels live-service shooter Fairgames",
     "published": "2026-11-10T21:06:12+00:00",
     "summary": "Sony has canceled Fairgames, a heist game announced in 2023, according to Bloomberg. Fairgames had once been part of Sony's big planned push for PlayStation live service games, but the company ended up canceling some planned live service titles, including in the God of War and The Last of Us franchises, and it shut down […]"
    },
    {
     "ref": "the_verge#4",
     "title": "The PlayStation Plus PC app is shutting down next month",
     "published": "2026-11-10T19:40:52+00:00",
     "summary": "Sony is retiring the PlayStation Plus app for PC on December 10th. Sony says it will notify users directly about the shutdown. The app allowed PlayStation Plus Premium subscribers to stream certain games on PC, but according to Sony, not many people are using that perk: With a very small number of eligible PlayStation Plus […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Starlink Mini 2 adds a swappable battery",
     "published": "2026-11-10T19:19:12+00:00",
     "summary": "SpaceX announced a new version of its all-in-one satellite internet terminal that integrates a dish, Wi-Fi router, and now a battery into a single device about the size of a laptop. According to some users on X who shared screenshots of invitations to order Starlink Mini 2, the dish is priced at $999, which includes […]"
    },
    {
     "ref": "the_verge#6",
     "title": "The US is winning the AI race. Jensen Huang could have blown it",
     "published": "2026-11-10T19:04:05+00:00",
     "summary": "As espionage targets go, Jensen Huang is perhaps one of the least surprising on Earth. The Nvidia CEO runs one of the world's most valuable companies, controls the in-demand technology fueling the AI boom, and is cozy with presidents, CEOs, and all manner of important people. He also wears a cool leather jacket. Which makes […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Google’s Pixel Tag tracker is now available",
     "published": "2026-11-10T19:00:00+00:00",
     "summary": "After years of third-party Android trackers from companies like Samsung, Motorola, and Pebblebee, Google's Pixel Tag is now available for purchase. First announced in August, the Pixel Tag is designed to work with Google's tracking network and app that was renamed the Find Hub last year. The Pixel Tag is priced similar to Apple's AirTag […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Google is making Pixel HiLight slightly more useful",
     "published": "2026-11-10T19:00:00+00:00",
     "summary": "Google is adding a new feature to its underwhelming HiLight light on the back of Pixel 11 Pro phones: As part of the November 2026 Pixel Drop, the light can light up when you get Google Messages texts from your favorite contacts. Sure, it's a small addition to the disappointing ways you could use HiLight […]"
    },
    {
     "ref": "the_verge#9",
     "title": "One of our favorite multi-filament 3D printers is $100 off",
     "published": "2026-11-10T18:42:03+00:00",
     "summary": "If you’re tired of filament jams and clogged nozzles, perhaps it’s time for a new 3D printer. Through December 1st, the Bambu Lab P2S Combo, currently one of the best models that’s easy to use, is discounted. It’s $649 at Best Buy, as well as directly from Bambu Lab. That’s $100 off the list price […]"
    }
   ]
  }
 ]
}
</input>