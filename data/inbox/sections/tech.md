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
     "title": "CEO Jensen Huang's job is suddenly on the line at Nvidia",
     "published": "2026-11-11T23:10:17+00:00",
     "summary": "The FBI is investigating as Nvidia’s board holds urgent talks over Huang’s future."
    },
    {
     "ref": "ars_technica#1",
     "title": "T-Mobile illegally imposed 50GB cap on low-income home Internet plan, NY says",
     "published": "2026-11-11T20:32:21+00:00",
     "summary": "Law requires 25Mbps home Internet. T-Mobile lowers speed to 600Kbps after 50GB cap."
    },
    {
     "ref": "ars_technica#2",
     "title": "Anduril says its first satellite can see adversaries maneuver in orbital night",
     "published": "2026-11-11T20:22:03+00:00",
     "summary": "\"What's unique is it's got a huge dynamic range. We can see things in full dark.\""
    },
    {
     "ref": "ars_technica#3",
     "title": "NASA's secret weapon in the lunar space race may be ... procurement reform?",
     "published": "2026-11-11T19:00:26+00:00",
     "summary": "\"The pace that's occurring, and the nature of the procurements, is unprecedented.\""
    },
    {
     "ref": "ars_technica#4",
     "title": "Taiwan’s chipmaking giant TSMC to invest $1B in Anthropic, OpenAI",
     "published": "2026-11-11T18:16:40+00:00",
     "summary": "Latest example of the AI boom’s circular financing comes as AI trade wobbles."
    },
    {
     "ref": "ars_technica#5",
     "title": "Trump admin loses fight to spy on random journalists’ LinkedIn DMs",
     "published": "2026-11-11T18:05:26+00:00",
     "summary": "Confidential sources “lifeblood” of free press, court rules in LinkedIn fight."
    },
    {
     "ref": "ars_technica#6",
     "title": "Big Walk used AI to fix a bug. Now the indie gaming world is having a reckoning.",
     "published": "2026-11-11T17:37:32+00:00",
     "summary": "Any amount of AI coding is too much for many Independent Games Festival judges."
    },
    {
     "ref": "ars_technica#7",
     "title": "Apple is shuttering its 28-year-old online community forum",
     "published": "2026-11-11T17:04:26+00:00",
     "summary": "Apple has already made the forum read-only."
    },
    {
     "ref": "ars_technica#8",
     "title": "IBM to offer access to a dual-processor quantum system in 2027",
     "published": "2026-11-11T16:33:08+00:00",
     "summary": "The company plans on linking two 520-qubit chips before next year is over."
    },
    {
     "ref": "ars_technica#9",
     "title": "Trump wanted little Kei trucks for America, Toyota makes it happen",
     "published": "2026-11-11T15:25:44+00:00",
     "summary": "Does this herald the start of a small car revolution, or is it a meaningless distraction?"
    },
    {
     "ref": "ars_technica#10",
     "title": "Google DeepMind just mathematically verified key parts of Signal",
     "published": "2026-11-11T14:08:57+00:00",
     "summary": "The four-week project hints that AI could make formal verification far more practical."
    },
    {
     "ref": "ars_technica#11",
     "title": "Seagate's new hybrid drive raises some old questions",
     "published": "2026-11-10T23:30:56+00:00",
     "summary": "The FireCuda Forge revisits an old idea, with some familiar questions."
    },
    {
     "ref": "ars_technica#12",
     "title": "The US military seems to be getting nervous about the launch supply crunch",
     "published": "2026-11-10T23:02:39+00:00",
     "summary": "\"Launch is extremely constrained and that is exactly the situation we predicted.\""
    },
    {
     "ref": "ars_technica#13",
     "title": "Ring cameras go mobile as Amazon debuts AI-powered security drone and robot",
     "published": "2026-11-10T22:35:01+00:00",
     "summary": "Amazon's roaming Ring Robotics devices will debut in late 2026 and early 2027."
    },
    {
     "ref": "ars_technica#14",
     "title": "Democrats oppose plan to stack FCC with Republicans, plan probes of Chairman Carr",
     "published": "2026-11-10T21:55:26+00:00",
     "summary": "Democrats accuse FCC nominee of evading questions about Carr, her current boss."
    },
    {
     "ref": "ars_technica#15",
     "title": "Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI",
     "published": "2026-11-10T21:12:59+00:00",
     "summary": "Researcher finds 35,000 Grok Build apps wide open to anyone who looked for them."
    },
    {
     "ref": "ars_technica#16",
     "title": "What happens to mathematics when AI becomes an oracle?",
     "published": "2026-11-10T20:30:01+00:00",
     "summary": "Mathematician Steven Strogatz discusses his new book, Big Math: The Hidden Codes That Run Our World ."
    },
    {
     "ref": "ars_technica#17",
     "title": "Google Fi adds support for a second 5G network, won't say which one",
     "published": "2026-11-10T19:35:59+00:00",
     "summary": "Fi has always supported T-Mobile, but the new one? Google won't say."
    },
    {
     "ref": "ars_technica#18",
     "title": "Pixel phones getting new icon styles, Create My Widget, and more in November Pixel Drop",
     "published": "2026-11-10T19:00:26+00:00",
     "summary": "Spruce up your home screen with expanded custom icons and AI-generated widgets."
    },
    {
     "ref": "ars_technica#19",
     "title": "Free video-streaming service Tubi lets users share curated watchlists now",
     "published": "2026-11-10T18:39:16+00:00",
     "summary": "User-based recommendations could make it easier to find stuff to watch on Tubi."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "איך Claude Code Desktop כמעט הדליף את כל המידע מהמחשב שלכם",
     "published": "2026-11-12T08:58:03+00:00",
     "summary": "מאת אלי איינהורן אם אתם מפתחים שמשתמשים ב-Claude Code Desktop, אז אתם מכירים את הפיצ'ר הבא: מבקשים מ-Claude לבדוק קובץ HTML לדוגמה, והאפליקציה מרנדרת אותו אוטומטית בפאנל צדדי. נוח, מהיר, ושימושי. ובכן… לא בדיוק. החוקרים שלנו ב-Noma Labs גילו חולשה חמורה ב-Preview Pane של אפליקציית הדסקטופ, שאפשרה לקובץ HTML לעקוף שלוש שכבות הגנה ולשלוף סיסמאות, […] The post איך Claude Code Desktop כמעט הדליף את כל"
    },
    {
     "ref": "geektime#1",
     "title": "מה זאת אומרת מי יכול להחליף את ג'נסן? יש הרבה שמות",
     "published": "2026-11-12T08:08:27+00:00",
     "summary": "איך הגלגל מתהפך. לפני שנייה וחצי ג'נסן הואנג היה אחת מהדמויות המוערכות והאהובות ביותר בעולם הטכנולוגיה. סופרסטאר, שגדל בתנאים לא פשוטים, הצליח להקים חברה, לפוצץ אצטדיונים עם עשרות אלפי מעריצים בעזרת מעיל שחור, השפריץ כריזמה נדירה, הוכיח הבנה טכנולוגית נדירה עד לרמת השערים הלוגיים, והוביל תוכניות עסקיות מבריקות. אבל זה היה עד השבוע. השבוע האחרון […] The post מה זאת אומרת מי יכול להחליף את ג'נסן? יש"
    },
    {
     "ref": "geektime#2",
     "title": "דרמה באנבידיה: הדירקטוריון נערך להדיח את ג'נסן הואנג לאחר שנחשף רומן נוסף שלו עם בכירה בחברה",
     "published": "2026-11-12T04:47:17+00:00",
     "summary": "חשבתם שהשבוע האחרון היה סוער לאנבידיה? נראה שזו רק ההתחלה, עם צל כבד על אחד מהאנשים החזקים ביותר בעולם הטכנולוגיה. דירקטוריון NVIDIA נערך להדיח את המנכ\"ל והמייסד של החברה, ג'נסן הואנג, כך מדווח הלילה (ה') הוול סטריט ג'ורנל על סמך גורמים המקורבים לנושא. על פי הדיווח, הדירקטוריון צפוי להתכנס כנראה כבר היום כדי להכריע על […] The post דרמה באנבידיה: הדירקטוריון נערך להדיח את ג'נסן הואנג לאחר שנחשף רומ"
    },
    {
     "ref": "geektime#3",
     "title": "סטארטאפ ישראלי שנחשף עכשיו בונה Holodeck לסוכנים",
     "published": "2026-11-11T14:00:29+00:00",
     "summary": "כן. כולם במשרד כבר שמעו על הסוכן שלך שחסך לך 50 שקל או מוסיף אירועים ללוח השנה עם המשפחה. באמת, אנחנו לא יכולים לשמוע מה עוד הוא יודע לעשות. אבל בניגוד לאייג'נט המרתק שלך, כשארגונים בונים אייג'נטים ומשחררים אותם לעולם האמיתי, דברים משתבשים. אז סטארטאפ ישראלי חדש שנחשף היום (ד') רוצה ליצור סביבה שבה הסוכנים […] The post סטארטאפ ישראלי שנחשף עכשיו בונה Holodeck לסוכנים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#4",
     "title": "הם בנו למיקרוסופט את תשתית הדאטה, ועכשיו הם מגייסים 70 מיליון דולר כדי להתחרות בה",
     "published": "2026-11-11T14:00:04+00:00",
     "summary": "כשארבעה מהנדסים, שעומדים מאחורי אחת מתשתיות הדאטה המרכזיות של מיקרוסופט, עוזבים את החברה כדי להקים סטארטאפ, אתם יכולים לדעת די בבטחון שזה לא בשביל לבנות עוד אפליקציית To-Do… הסטארטאפ הישראלי Edelbyte, שנחשף היום (ד') לראשונה, מודיע על גיוסים בגובה 70 מיליון דולר בתוך שנה בלבד מאז הקמתו. המטרה? לפתור את כאב הראש שתשתיות ה-AI עושות […] The post הם בנו למיקרוסופט את תשתית הדאטה, ועכשיו הם מגייסים 70 "
    },
    {
     "ref": "geektime#5",
     "title": "אחרי צירופה של נועה ארגמני: קרן Vine מגייסת 236 מיליון דולר להשקעות בסטארטאפים",
     "published": "2026-11-11T13:09:59+00:00",
     "summary": "קרן ההון סיכון Vine Ventures הודיעה על השלמת גיוס של 236 מיליון דולר לקרן השלישית שלה, שתשקיע בחברות בארה\"ב ובישראל. לפי הקרן, כ-50% מכספי הקרן החדשה צפויים להיות מוקצים לחברות ישראליות. הגיוס מביא את היקף הנכסים המנוהלים של Vine ליותר מ-500 מיליון דולר, חמש שנים בלבד מאז שהוקמה. בגיוס השתתפו משקיעים חדשים וקיימים, ובהם מנכ\"לי […] The post אחרי צירופה של נועה ארגמני: קרן Vine מגייסת 236 מיליון דול"
    },
    {
     "ref": "geektime#6",
     "title": "חברת Innoviz הישראלית מפטרת רבע מהעובדים שלה",
     "published": "2026-11-11T12:34:46+00:00",
     "summary": "יצרנית ה-LiDAR הישראלית Innoviz מראש העין הכריזה היום (ד') על מהלך פיטורים חריג, שבמסגרתו היא צפויה להיפרד מרבע ממצבת כוח האדם שלה – כ-90 עובדים בסך הכל. זה סבב הפיטורים השלישי של החברה בשלוש השנים האחרונות, כאשר בתחילת 2024 פיטרה עשרות עובדים – שהם 13% מכוח האדם שלה. בתחילת השנה שעברה הכריזה אינוויז על סבב […] The post חברת Innoviz הישראלית מפטרת רבע מהעובדים שלה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#7",
     "title": "הקרב על הצופים בישראל: דיסני מכריזה על מבצע ל-Disney+",
     "published": "2026-11-11T10:17:41+00:00",
     "summary": "רגע לפני סוף 2026, דיסני+ יוצאת במבצע חדש כדי לנסות לגייס מנויים חדשים בישראל, ועל הדרך גם לפתות אולי מנויים נוטשים לחזור לשירות הסטרימינג שלה. אל תשכחו לשים תזכורת החל מהיום (ד') ועד ה-24 בנובמבר, החברה מציעה למצטרפים חדשים וחוזרים את המינוי שלה במחיר של 34.90 שקלים לחודש למשך חודשיים. לאחר תום תקופת ההטבה, התשלום […] The post הקרב על הצופים בישראל: דיסני מכריזה על מבצע ל-Disney+ appeared first o"
    },
    {
     "ref": "geektime#8",
     "title": "חיפאים, Google Cloud מזמינה אתכם לאירוע AI ודאטה חדש",
     "published": "2026-11-11T09:42:36+00:00",
     "summary": "במקום ששוב תסעו לתל אביב כדי להיחשף לחידושים של Google Cloud – הפעם הם מגיעים לצפון: Google פותחת את משרדיה בחיפה ליום טכנולוגי שיוקדש לכלי ה-AI והדאטה שלה. תוכלו לצפות בהדגמות חיות וללמוד מדוגמאות אמיתיות, כך שתצאו מהאירוע עם רעיונות וכלים פרקטיים שניתן ליישם מיד. האירוע, AI in Action | Haifa, יתקיים ב-30 בנובמבר (9:00-14:00) […] The post חיפאים, Google Cloud מזמינה אתכם לאירוע AI ודאטה חדש appea"
    },
    {
     "ref": "geektime#9",
     "title": "זה לקח 6 שנים, אבל אמזון משיקה עכשיו את המצלמה המשוגעת שלה",
     "published": "2026-11-11T09:07:24+00:00",
     "summary": "בואו נחזור רגע לחודשים האחרונים של 2020. כולנו נכנסים לסגר השני; הסכמי אברהם נחתמים; ובארה\"ב זוכה ג'ו ביידן בבחירות… אבל במקביל לכל האירועים האלה, אמזון מקיימת את אירוע ההשקה השנתי שלה שבו היא חושפת את אחד הפיתוחים המעניינים והמשונים ביותר שראינו: Always Home Cam. רחפן אוטונומי עם מצלמה שישמור לכם על הבית. עכשיו בואו נחזור […] The post זה לקח 6 שנים, אבל אמזון משיקה עכשיו את המצלמה המשוגעת שלה app"
    },
    {
     "ref": "geektime#10",
     "title": "אנת'רופיק הולכת על הראש של אקסל עם פיצ'ר חדש של Claude",
     "published": "2026-11-11T08:00:57+00:00",
     "summary": "התרגלתם לכתוב קוד, טקסטים או לנתח נתונים בקלוד ואז לרוץ להדביק אותם בתוכנות אחרות? אנת'רופיק רוצה לשים לזה סוף. בהכרזה שגרמה אפילו למניית מיקרוסופט לרדת, החברה מציגה סט כלים חדש שמכניס את האקסל, הלוח המחיק ודשבורד הנתונים שלכם – ישירות לתוך חלון הצ'אט. אקסל, אבל בתוך קלוד אחד החידושים המעניינים ביותר בהכרזה הוא Claude Sheets, […] The post אנת'רופיק הולכת על הראש של אקסל עם פיצ'ר חדש של Claude appe"
    },
    {
     "ref": "geektime#11",
     "title": "\"בלי המפתחות הכל מושבת\": היזמים שמאחורי Zerto חושפים סטארטאפ חדש עם סבב סיד גדול במיוחד",
     "published": "2026-11-10T15:00:37+00:00",
     "summary": "האחים זיו ועודד קדם הם לא שמות חדשים בהייטק המקומי, אבל עכשיו, אחרי שהקימו ומכרו את Kashya ל-EMC ואת Zerto ל-HPE, הם חוזרים כעת לסיבוב נוסף, הפעם עם סטארטאפ חדש בשם Dreeze. היום (ג') יוצאת החברה ממצב Stealth עם גיוס סיד חריג בהיקפו של 33 מיליון דולר. את הסבב הובילו הקרנות האמריקאיות Norwest ו-Bessemer Venture Partners, […] The post \"בלי המפתחות הכל מושבת\": היזמים שמאחורי Zerto חושפים סטארטאפ חדש ע"
    },
    {
     "ref": "geektime#12",
     "title": "גיוס של 80 מיליון דולר לסטארטאפ הישראלי שמגן על Lovable ו-LastPass",
     "published": "2026-11-10T14:31:48+00:00",
     "summary": "בדיוק שנה עברה מאז שחברת הסייבר הישראלית Daylight הודיעה על סבב הגיוס הקודם שלה, והיום (ג') היא חושפת גיוס גדול נוסף. עכשיו מודיע הסטארטאפ על השלמת סבב B בגובה 80 מיליון דולר בהובלת Goldman Sachs ובהשתתפות משקיעה חדשה, Okta Ventures, לצד הקרנות הקיימות Vintage Partners, Craft Ventures, Bain Capital ו-Maple Capital. הגיוס הנוכחי מביא את […] The post גיוס של 80 מיליון דולר לסטארטאפ הישראלי שמגן על L"
    },
    {
     "ref": "geektime#13",
     "title": "מה? הדמעות? זה בגלל ש-Waze מאפשרת עכשיו לבחור נקודת מוצא",
     "published": "2026-11-10T13:37:23+00:00",
     "summary": "גם לכם זה בטח קרה. אתם רוצים לבדוק כמה זמן ייקח לחבר להגיע אליכם או כמה מה הדרך הכי טובה להגיע מהעבודה למסעדה כלשהי, אבל Waze מתעקשת לתת לכם את המסלול רק מהמיקום הנוכחי שלכם. אז עד היום עקפנו את זה בכל מיני שיטות או בעזרת Google Maps, אבל עכשיו, אפליקציית הניווט הפופולרית סוף סוף […] The post מה? הדמעות? זה בגלל ש-Waze מאפשרת עכשיו לבחור נקודת מוצא appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#14",
     "title": "יובל זכריה מגייסת 50 מיליון דולר לסטארטאפ שהקימה לפני פחות משנה",
     "published": "2026-11-10T13:00:47+00:00",
     "summary": "בשנה האחרונה סוכני AI משנים לגמרי את הדרך שבה אנחנו עובדים. מעולם שבו בני אדם מפעילים (או כותבים) תוכנות, אנחנו עוברים למציאות שבה האייג'נטים כבר מקבלים החלטות לבד, ולא פעם הם עושים את זה עם גישה ישירה למערכות רגישות. הבעיה היא שמערכות אבטחה מסורתיות פשוט לא נבנו לעולם הזה, ומתקשות להבין מתי פעולה לגיטימית הופכת […] The post יובל זכריה מגייסת 50 מיליון דולר לסטארטאפ שהקימה לפני פחות משנה appeared "
    },
    {
     "ref": "geektime#15",
     "title": "מתחרה חדשה: Revolut הבריטית קיבלה אישור להקים בנק בישראל",
     "published": "2026-11-10T11:58:00+00:00",
     "summary": "אחרי השמועות והדיווחים הלא רשמיים, זה רשמי: בנק ישראל העניק היום (ג') לקבוצת Revolut הבריטית רישיון מותנה להקמת בנק בישראל. הגוף החדש, שיזכה לשם הסקסי \"בנק רבולוט ישראל (בהקמה)\", הוא ניסיון נוסף של המדינה ובנק ישראל לפתוח קצת את שוק הבנקאות המקומי המנומנם לתחרות. הרישיון הזה הוא השלישי שניתן לבנק חדש בישראל מאז 2019, כשבנק […] The post מתחרה חדשה: Revolut הבריטית קיבלה אישור להקים בנק בישראל appea"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Critical RCE Vulnerability in Apache HTTP Server",
     "published": "2026-11-12T02:11:11+00:00",
     "summary": "Article URL: https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability Comments URL: https://news.ycombinator.com/item?id=50462177 Points: 203 # Comments: 89"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "93% of paint splatters are valid Perl programs (2019)",
     "published": "2026-11-11T22:34:23+00:00",
     "summary": "Article URL: https://www.mcmillen.dev/sigbovik/ Comments URL: https://news.ycombinator.com/item?id=50459745 Points: 429 # Comments: 57"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Nvidia is preparing to oust Jensen Huang",
     "published": "2026-11-11T22:31:06+00:00",
     "summary": "Article URL: https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad Comments URL: https://news.ycombinator.com/item?id=50459703 Points: 1025 # Comments: 1381"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Lock Your GitHub Actions",
     "published": "2026-11-11T22:16:41+00:00",
     "summary": "Article URL: https://hugovk.dev/blog/2026/lock-github-actions/ Comments URL: https://news.ycombinator.com/item?id=50459485 Points: 253 # Comments: 51"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "United Airlines bans AI agents from booking flights on behalf of travelers",
     "published": "2026-11-11T21:24:35+00:00",
     "summary": "Article URL: https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/ Comments URL: https://news.ycombinator.com/item?id=50458900 Points: 556 # Comments: 548"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Emacs in the Age of Magic",
     "published": "2026-11-11T20:26:32+00:00",
     "summary": "Article URL: https://commandlinesystems.com/magic.txt Comments URL: https://news.ycombinator.com/item?id=50458208 Points: 231 # Comments: 106"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Gemini Decisions API",
     "published": "2026-11-11T18:32:42+00:00",
     "summary": "Article URL: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/ Comments URL: https://news.ycombinator.com/item?id=50456791 Points: 434 # Comments: 131"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "AWS emulator",
     "published": "2026-11-11T18:21:38+00:00",
     "summary": "https://www.aboutamazon.com/news/aws/how-autonomous-ai-agent... https://www.allthingsdistributed.com/2026/11/aws-emulator-an... Comments URL: https://news.ycombinator.com/item?id=50456631 Points: 850 # Comments: 236"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Faster Retrieval for Better, More Efficient RAG",
     "published": "2026-11-11T16:57:45+00:00",
     "summary": "Article URL: https://machinelearning.apple.com/research/faster-retrieval Comments URL: https://news.ycombinator.com/item?id=50455633 Points: 209 # Comments: 38"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "A false smoke alarm almost drowned Jane Street's only NYC datacenter",
     "published": "2026-11-11T16:38:44+00:00",
     "summary": "Article URL: https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/ Comments URL: https://news.ycombinator.com/item?id=50455394 Points: 494 # Comments: 236"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Show HN: Yogurt – Free, private, open-source alternative to Granola",
     "published": "2026-11-11T15:33:06+00:00",
     "summary": "Hey HN, I’m Eric and I want to share an OSS project that I’ve been building in my free time. Yogurt is a free, MIT licensed desktop app that uses on-device AI models to transcribe, summarize, and chat with your meetings. Here's a quick demo video: https://www.youtube.com/watch?v=BFfbXAwRq98 Similar to Granola, Yogurt runs in the background and does not join your calls. But unlike Granola, Yogurt i"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Atuin Threads: All your agent sessions on every machine",
     "published": "2026-11-11T14:10:46+00:00",
     "summary": "Article URL: https://blog.atuin.sh/threads-agent-sessions/ Comments URL: https://news.ycombinator.com/item?id=50453637 Points: 219 # Comments: 79"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Hyper-Realistic Sand with WebGL2",
     "published": "2026-11-11T13:39:29+00:00",
     "summary": "Article URL: https://av.github.io/safe-sand/ Comments URL: https://news.ycombinator.com/item?id=50453288 Points: 379 # Comments: 71"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "Can a Linear Program Do Weight-Space Programming?",
     "published": "2026-11-11T12:30:17+00:00",
     "summary": "Article URL: https://nathan.rs/posts/weight-space-lp/ Comments URL: https://news.ycombinator.com/item?id=50452655 Points: 281 # Comments: 38"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "My AI agents found an unmapped Maya site?",
     "published": "2026-11-11T12:05:22+00:00",
     "summary": "Article URL: https://pietromiotti.com/latest/maya-site Comments URL: https://news.ycombinator.com/item?id=50452455 Points: 990 # Comments: 361"
    },
    {
     "ref": "hn_frontpage#15",
     "title": "Using voltage glitching to unleash the A100 in my mining card",
     "published": "2026-11-11T10:48:40+00:00",
     "summary": "Article URL: https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/ Comments URL: https://news.ycombinator.com/item?id=50451903 Points: 304 # Comments: 115"
    },
    {
     "ref": "hn_frontpage#16",
     "title": "Tim Peters has died",
     "published": "2026-11-11T07:03:17+00:00",
     "summary": "https://www.reddit.com/r/Python/s/2Cm5dBcvQw Comments URL: https://news.ycombinator.com/item?id=50450488 Points: 1204 # Comments: 134"
    },
    {
     "ref": "hn_frontpage#17",
     "title": "Jane Street: Socratic Tutor",
     "published": "2026-11-10T10:18:22+00:00",
     "summary": "Article URL: https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md Comments URL: https://news.ycombinator.com/item?id=50438261 Points: 205 # Comments: 48"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "The Dynamo-Electric Principle: 160 Years of Powering Industry",
     "published": "2026-11-11T11:00:02+00:00",
     "summary": "This article is brought to you by Innomotics . In the annals of industrial history, few innovations have demonstrated such remarkable staying power as the dynamo-electric principle. Discovered by Werner von Siemens in 1866, this groundbreaking principle remains fundamental to modern electrical engineering more than a century and a half later – and continues to shape the technology portfolio of Inn"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Speech Processing Pioneer Bishnu Saroop Atal Dies at 93",
     "published": "2026-11-10T19:00:02+00:00",
     "summary": "Bishnu Saroop Atal Acoustics and signal processing pioneer Life Fellow, 93; died 19 August Atal was an acoustics and signal processing researcher at Bell Labs in Murray Hill, N.J., and later at AT&T ’s Shannon Laboratory, in Florham Park, N.J. His pioneering work on voice-coding techniques became the foundation for efficient, high-quality voice transmission over cellular networks. He received the "
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Catch Electronics Shock and Drop Failures Before Hardware Is Built",
     "published": "2026-11-10T11:00:02+00:00",
     "summary": "Learn how guided virtual shock and drop analysis helps engineering teams identify reliability risks before physical testing, reduce qualification iterations, optimize packaging designs, and accelerate electronics product development. What you will learn about: Why shock failures found during physical qualification are costly, and how coupled electrical, mechanical, thermal, and packaging effects m"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "AI Agents Are Testing the Limits of Zero-Trust Security",
     "published": "2026-11-09T16:25:06+00:00",
     "summary": "This article is brought to you by Queen’s University Belfast . Several teams around the globe are leveraging AI by creating a task force of agents managed by an orchestrator and creating applications to support risk assessment, client profiling, match making, and information yield with a slight overview of decision making. One of the important components for these agents is to ensure that the logs"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "How Do You Land on a Moon With Almost No Gravity?",
     "published": "2026-11-06T15:00:02+00:00",
     "summary": "Last August, looking up from the edge of an ancient river delta on Mars, the Perseverance rover ’s electronic eye spied an oblong shadow crossing the distant, glowing Sun. Phobos , the Martian moon named for the Greek god of fear and panic, was transiting the solar disk. Too small to darken the pale, dust-tinged sky, but orbiting close enough to eclipse a significant fraction of the Sun, Phobos pa"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "IEEE Program Schools Preuniversity Educators On Tech Topics",
     "published": "2026-11-05T19:00:02+00:00",
     "summary": "Now in their third year, the IEEE TryEngineering educator sessions continue to empower preuniversity teachers with specialized professional development programs on engineering topics and classroom-tested lessons. This year’s sessions, held across the United States, have focused on educating teachers about artificial intelligence and semiconductor technology. One session was held in Egypt. In all, "
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "Use Your Year-End Review to Reach for a Promotion",
     "published": "2026-11-05T16:08:03+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! Hard work rarely speaks for itself. When I landed my first job as a software engineer, I had a simple plan: Work hard and somebody would notice. Even"
    },
    {
     "ref": "ieee_spectrum#7",
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
     "title": "What to know about this year’s UN climate talks",
     "published": "2026-11-11T17:00:00+00:00",
     "summary": "It’s that time of year again: Thousands of delegates, lobbyists, and journalists are gathered for the annual UN climate talks, taking place this time in Antalya, Turkey. COP31 officially kicked off on November 8, marking the beginning of negotiations on one of the biggest stages of the climate world. Turkey and Australia are cohosting this…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The Download: preserving minds and weighing open AI risks",
     "published": "2026-11-11T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Six wild ideas for perpetuating your mind As we age, we forget most of what we’ve experienced, yet there’s still undeniable continuity: At 30, or 50, or 70, you will still…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: Pelosi’s successor targets AI and data centers face power woes",
     "published": "2026-11-10T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Nancy Pelosi’s replacement is ready to regulate AI —Grace Huckins As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Evolving metal extraction processes",
     "published": "2026-11-10T13:00:00+00:00",
     "summary": "The metals industry has experienced transformational moments before: the Bessemer process, flash smelting, electric arc furnaces, and modern continuous casting all changed what was possible. Yet, for more than a century, most extraction processes rely on techniques and pathways that would be familiar to metallurgists from generations ago. Processes have become larger and control systems…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The backlash about data centers might really just be about electricity",
     "published": "2026-11-09T19:35:33+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. As voters went to the polls across the US last week, I was in Ashburn, Virginia, part of what’s known as Data Center Alley—the world’s largest data center hub. It’s also where…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Nancy Pelosi’s replacement is ready to regulate AI",
     "published": "2026-11-09T17:05:43+00:00",
     "summary": "As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a tight congressional race for former Speaker of the House Nancy Pelosi’s open San Francisco seat, he could play a key role in setting federal AI policy. I spoke with Wiener on Friday, only a…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: empty AI climate claims, and an Nvidia investigation",
     "published": "2026-11-09T13:15:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Opinion: The climate case for AI has not been made —By Mary Nichols, distinguished counsel at the UCLA School of Law and the former chair of the California Air Resources Board,…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "Innovating with AI in the special chemicals industry",
     "published": "2026-11-09T13:00:00+00:00",
     "summary": "As companies look to accelerate innovation with artificial intelligence, cloud computing, and advanced modeling, the primary challenge is connecting new technologies to reliable data, scientific expertise, and the practical realities of bringing products to market. For specialty chemicals manufacturer Lubrizol, digital transformation is all about giving researchers the tools to test ideas faster, "
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "Gemini Decisions API",
     "published": "2026-11-11T22:03:25+00:00",
     "summary": "Gemini Decisions API Google join Jev and OpenAI in the decision model category with \"Gemini Decision 1\". This new model API is almost identical to Jev: it supports the same three types of questions (yes/no, choice, and rubric-scoring) and even reuses Jev's term \"Noul\" for a yes/no question. It's priced the same as the GPT-6 Luna decision model: 10 cents per million input tokens, and output is free"
    },
    {
     "ref": "simon_willison#1",
     "title": "aws-emulator",
     "published": "2026-11-11T21:18:30+00:00",
     "summary": "aws-emulator Finally, an official emulator from AWS to run tests against a local clone of their many different services without having to provision a paid API key to do so. It's written in Rust by a huge swarm of agents - 29,684 commits in the first three weeks of the project. Swaminathan (Swami) Sivasubramanian wrote about how it came to be in a guest post on Werner Vogels' blog. It currently req"
    },
    {
     "ref": "simon_willison#2",
     "title": "Browse tools.simonwillison.net by tag",
     "published": "2026-11-11T18:42:50+00:00",
     "summary": "Browse tools.simonwillison.net by tag I've been wanting a better way to browse my collection of vibe-coded tools (244 and counting) for a while. I had a few Fable 5.2 credits left over before my weekly reset so I set it to work using tree-sitter to analyze the code for JavaScript APIs, libraries, and web API hosts used by each tool. The homepage now features tag clouds for browsing by each of thos"
    },
    {
     "ref": "simon_willison#3",
     "title": "llm 0.37.2",
     "published": "2026-11-11T17:19:52+00:00",
     "summary": "Release: llm 0.37.2 Fixes a security issue reported by Daniel de Araujo in GHSA-v9h7-jj4g-f862 and GHSA-r639-rr7r-x72w . LLM has a mechanism called extra-openai-models.yaml - now managed by the new-in-0.37 llm openai endpoint add command - for using LLM with OpenAI-compatible API endpoints from other providers. Daniel reported two ways this could accidentally send your configured OpenAI API key to"
    },
    {
     "ref": "simon_willison#4",
     "title": "Anthropic's IPO roadshow video",
     "published": "2026-11-11T15:11:59+00:00",
     "summary": "Anthropic's IPO roadshow video Anthropic kicked off their IPO roadshow yesterday, and their roadshow video has some previously unreleased information about how their business works. The section on \"Approach to compute\" with co-founder Tom Brown is particularly interesting, describing how Anthropic train and serve Claude across AWS Trainium, Google TPUs, NVIDIA GPUs, and AMD GPUs. I'm not sure why "
    },
    {
     "ref": "simon_willison#5",
     "title": "llm-gemini 0.36",
     "published": "2026-11-10T20:09:44+00:00",
     "summary": "Release: llm-gemini 0.36 Gemini 4 Carbon was announced two weeks ago for \"a subset of cyber defenders\", but today it's available to everyone else . This is Google's best ever Gemini, priced at $2/million input and $10/million output at launch (that's GPT-6.1 Sol / Claude Sonnet 5.5 prices) but scheduled to double in price to $4/$20 on December 1st (same as Opus 5.5). Here are three pelicans for th"
    },
    {
     "ref": "simon_willison#6",
     "title": "Introducing Our Smallest, Most Efficient Model: Muse Ember",
     "published": "2026-11-10T07:28:21+00:00",
     "summary": "Introducing Our Smallest, Most Efficient Model: Muse Ember Meta AI just launched their entry in the Claude Haiku/GPT Luna category: Muse Ember, which they describe as: [...] our smallest and most efficient model designed for complex reasoning execution and the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing. For shorter prompts it's priced th"
    },
    {
     "ref": "simon_willison#7",
     "title": "Quoting Prompting Claude Fable 5.2",
     "published": "2026-11-10T05:34:14+00:00",
     "summary": "Claude Fable 5.2 pays close attention to who owns the code it works on. In Anthropic’s testing on small coding tasks, the model tended to add to the existing structure when the prompt said nothing about ownership or presented the code base as someone else’s, even when that duplicated existing code. When the prompt said the code base was the model’s own, it often consolidated duplicated code and so"
    },
    {
     "ref": "simon_willison#8",
     "title": "Yonkers Rises",
     "published": "2026-11-10T03:53:04+00:00",
     "summary": "Tool: Yonkers Rises I realized I didn't know where Yonkers was, so I looked it up on Google Maps and then, to help embed its location and shape in my head (and to try out Claude Fable 5.2's 3D modeling and animation skills), I prompted Fable 5.2 Medium to: Make a three js animation where yonkers stands up as a big mech (cool stand up motion) and átomos around manhattan and queens and Brooklyn, use"
    },
    {
     "ref": "simon_willison#9",
     "title": "llm-anthropic 0.31",
     "published": "2026-11-09T23:58:46+00:00",
     "summary": "Release: llm-anthropic 0.31 Anthropic released Fable 5.2 and Mythos 5.2 today. Fable 5.2 is currently ranked first on Artificial Analysis . Anthropic say it \"solved two open problems in the physics of black holes\", so clearly their internal benchmarks have become more ambitious! I've added the new models to llm-anthropic , so you can now run prompts through Fable 5.2 like this: uv tool install llm"
    },
    {
     "ref": "simon_willison#10",
     "title": "Locating the source of a mysterious beep with Claude",
     "published": "2026-11-09T23:57:21+00:00",
     "summary": "Our house has a box room, full of boxes that we still haven't unpacked from our last move. A couple of weeks ago something in that room started intermittently beeping . The beeps were far enough apart that standing in the room and trying to determine the source of the noise was frustrating, and I really didn't want to dig through every one of those boxes. So I had Claude Code build Beep Locator , "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Nvidia is reportedly preparing to fire Jensen Huang",
     "published": "2026-11-11T22:44:36+00:00",
     "summary": "Nvidia's board is preparing to dismiss CEO Jensen Huang following a report from the New York Times about a second alleged extramarital affair, just days after he admitted to a separate affair with a woman alleged to be a Chinese spy, The Wall Street Journal reports. The second alleged affair was with an executive who […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Hands on with Home Assistant’s new ‘smart home multi-tool’",
     "published": "2026-11-11T22:00:00+00:00",
     "summary": "Nabu Casa - the commercial side of the Open Home Foundation, which runs Home Assistant - just launched the Home Assistant Connect Aux-2, a multi-function box designed to help you bring more non-smart devices into your smart home. It's part of Home Assistant's ongoing efforts to become more user-friendly. And it's working. I've been testing […]"
    },
    {
     "ref": "the_verge#2",
     "title": "United won’t let your AI agent book your flight",
     "published": "2026-11-11T21:54:21+00:00",
     "summary": "United says it won't let personal AI assistants book tickets on the airline, citing both privacy and regulatory concerns. The company says it hasn't yet seen many people try to use AI agents to book their flights, The Wall Street Journal reports, in line with observations from other businesses like Doordash. But United is concerned […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Loot boxes, influencers, and addictive features face an EU crackdown",
     "published": "2026-11-11T18:13:52+00:00",
     "summary": "Gaming, social media, and e-commerce platforms are facing a fresh wave of sweeping European Union rules that aim to make \"your online experience fairer.\" The newly proposed Digital Fairness Act (DFA) published by the EU Commission on Wednesday is designed to tackle practices that exploit consumers into spending more of their time and money online, […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Toyota’s Scion is back, starting with an American-made, 25-mph kei truck",
     "published": "2026-11-11T17:09:58+00:00",
     "summary": "Toyota is dusting off the Scion badge for a radically different mission. Rather than targeting youth-market hatchbacks, \"Scion by Toyota\" is being positioned as an experimental mobility incubator - and its first vehicle is an authentic Japanese-style kei truck built in Indiana. Kei vehicles, which are built to satisfy Japan's light vehicle regulations, are enjoying […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Google’s Tabletop AI experiment lets you build custom collaboration apps",
     "published": "2026-11-11T16:00:00+00:00",
     "summary": "Google has cooked up a new experimental AI tool called Tabletop that generates customized collaborative hubs to help you coordinate with family, and friends. The Tabletop platform shares some visual similarities with workplace management apps like Asana and Monday, but with a built-in AI feature that allows you to vibecode personalized interactive tools by describing […]"
    },
    {
     "ref": "the_verge#6",
     "title": "The best early Black Friday deals you can already shop",
     "published": "2026-11-11T15:53:55+00:00",
     "summary": "The countdown to Black Friday is on, and the first discounts are starting to appear. Although the shopping holiday isn’t officially until November 27th, retailers are already dropping early deals on some of our favorite tech. Of course, with prices rising across the board, a good discount doesn’t necessarily mean you’re getting a historically low […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Sharge’s eye-catching MacBook charger is over 25 percent off",
     "published": "2026-11-11T15:30:00+00:00",
     "summary": "Looking for a MacBook and device charger that’s as stylish as it is capable? Both Amazon and Sharge are selling the Pixel 140W GaN charger for $69.88 and $69.90, respectively, a $24 discount on its usual price. If you’re not in need of that much wattage but like the style, Sharge is also selling the […]"
    },
    {
     "ref": "the_verge#8",
     "title": "Ocarina of Time is even better if you use a smartphone app",
     "published": "2026-11-11T15:00:00+00:00",
     "summary": "I never liked hunting for Golden Skulltulas in The Legend of Zelda: Ocarina of Time. The game has 100 of them tucked all over Hyrule, and even over my many hours with the N64 classic growing up, I can't remember ever actually finding all of them, or even wanting to. Jumping into the Ocarina of […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Google’s AlphaGenome 2 zooms in on the cellular roots of disease",
     "published": "2026-11-11T15:00:00+00:00",
     "summary": "Researchers at Google DeepMind have unveiled a new AI model designed to unravel how changes in our DNA affect different cells, giving scientists a more detailed view of a notoriously difficult problem that could hold important clues to the causes of disease - and point the way to new treatments. AlphaGenome 2 is the successor […]"
    }
   ]
  }
 ]
}
</input>