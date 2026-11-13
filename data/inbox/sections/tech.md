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
     "title": "In reversal, American Cancer Society urges routine prostate cancer screening",
     "published": "2026-11-12T22:59:51+00:00",
     "summary": "Men aged 50–69 and at average risk should get PSA screening every two years."
    },
    {
     "ref": "ars_technica#1",
     "title": "FAA expands AI advice to manage air traffic congestion across entire US airspace",
     "published": "2026-11-12T22:28:47+00:00",
     "summary": "Airlines praised the AI tool, but the air traffic controllers’ union wasn’t involved."
    },
    {
     "ref": "ars_technica#2",
     "title": "Ars Live: What drone attacks on data centers mean for modern life in the cloud",
     "published": "2026-11-12T19:59:59+00:00",
     "summary": "A livestream Ars discussion is happening on November 17 at 1 pm Eastern Time."
    },
    {
     "ref": "ars_technica#3",
     "title": "The Elder Scrolls' most obscure adventure gets a 4K PC makeover",
     "published": "2026-11-12T19:49:11+00:00",
     "summary": "N-Gage exclusive Shadowkey gets an AI-coded glow-up with plenty of new features."
    },
    {
     "ref": "ars_technica#4",
     "title": "Google rolls out Gemini 4 Hydrogen, finally replacing 3.8 Flash",
     "published": "2026-11-12T19:23:03+00:00",
     "summary": "Gemini 4 Hydrogen isn't getting a slow, security-conscious release like Carbon and Argon."
    },
    {
     "ref": "ars_technica#5",
     "title": "Ukraine says it can’t stop Russian strikes because Starshield is limited again",
     "published": "2026-11-12T19:09:57+00:00",
     "summary": "Report: Ukraine suspects speeds limits are intended to help Russia in peace talks."
    },
    {
     "ref": "ars_technica#6",
     "title": "Google faces calls for AI moratoriums in schools after Gemini pilot backlash",
     "published": "2026-11-12T18:57:45+00:00",
     "summary": "Families confront Google after teen’s lawsuit labels Gemini a “suicide coach.”"
    },
    {
     "ref": "ars_technica#7",
     "title": "Netflix releases new trailer for Ray Gunn",
     "published": "2026-11-12T18:38:38+00:00",
     "summary": "\"It's hard being the only honest players in a crooked game.\""
    },
    {
     "ref": "ars_technica#8",
     "title": "Building a rocket is hard. AST SpaceMobile thinks it's \"simple.\"",
     "published": "2026-11-12T18:28:22+00:00",
     "summary": "\"We're not doing this thing because we like rockets.\""
    },
    {
     "ref": "ars_technica#9",
     "title": "Man's secret use of synthetic testosterone for cows nearly destroyed his heart",
     "published": "2026-11-12T18:17:19+00:00",
     "summary": "Doctors warn that such life-threatening cases are becoming more common."
    },
    {
     "ref": "ars_technica#10",
     "title": "The amazing disappearing exoplanet",
     "published": "2026-11-12T17:18:10+00:00",
     "summary": "An exoplanet seems to have stopped transiting in front of its host star."
    },
    {
     "ref": "ars_technica#11",
     "title": "Google pushes privacy angle as Gemini-powered smartglasses debut starting at $395",
     "published": "2026-11-12T14:50:17+00:00",
     "summary": "The first Gemini smartglasses are a collab between Google, Samsung, Gentle Monster, and Warby Parker."
    },
    {
     "ref": "ars_technica#12",
     "title": "Nvidia CEO Jensen Huang has resigned",
     "published": "2026-11-12T14:05:17+00:00",
     "summary": "Nvidia CEO also had an affair with a senior executive at the firm."
    },
    {
     "ref": "ars_technica#13",
     "title": "Hundreds of streaming services and nothing to watch",
     "published": "2026-11-12T14:00:19+00:00",
     "summary": "Most viewers wish there was a TV Guide for streaming."
    },
    {
     "ref": "ars_technica#14",
     "title": "Review: Apple's M6 iMac is pricey, but it's still a good choice for a clean desk",
     "published": "2026-11-12T12:00:37+00:00",
     "summary": "Apple's M6 keeps the iMac current without shaking things up much."
    },
    {
     "ref": "ars_technica#15",
     "title": "T-Mobile illegally imposed 50GB cap on low-income home Internet plan, NY says",
     "published": "2026-11-11T20:32:21+00:00",
     "summary": "Law requires 25Mbps home Internet. T-Mobile lowers speed to 600Kbps after 50GB cap."
    },
    {
     "ref": "ars_technica#16",
     "title": "Anduril says its first satellite can see adversaries maneuver in orbital night",
     "published": "2026-11-11T20:22:03+00:00",
     "summary": "\"What's unique is it's got a huge dynamic range. We can see things in full dark.\""
    },
    {
     "ref": "ars_technica#17",
     "title": "NASA's secret weapon in the lunar space race may be ... procurement reform?",
     "published": "2026-11-11T19:00:26+00:00",
     "summary": "\"The pace that's occurring, and the nature of the procurements, is unprecedented.\""
    },
    {
     "ref": "ars_technica#18",
     "title": "Taiwan’s chipmaking giant TSMC to invest $1B in Anthropic, OpenAI",
     "published": "2026-11-11T18:16:40+00:00",
     "summary": "Latest example of the AI boom’s circular financing comes as AI trade wobbles."
    },
    {
     "ref": "ars_technica#19",
     "title": "Trump admin loses fight to spy on random journalists’ LinkedIn DMs",
     "published": "2026-11-11T18:05:26+00:00",
     "summary": "Confidential sources “lifeblood” of free press, court rules in LinkedIn fight."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "בדקנו את הלפטופ הראשון עם המעבד החדש של NVIDIA",
     "published": "2026-11-13T08:03:32+00:00",
     "summary": "ב-2020 חל שינוי פרדיגמה ענק בשוק המחשבים, כאשר Apple הודיעה שהיא מוותרת על שירותיה של אינטל לטובת מעבדים בפיתוח עצמי. ההימור הזה השתלם מאוד לאפל מבחינה טכנית וגם כלכלית. ארבע שנים לאחר מכן השינוי הזה הגיע גם ל-PC עם ההודעה של מיקרוסופט על שיתוף פעולה ראשון עם קוואלקום שהביא את מעבדי ARM למחשבי ווינדוס. ביוני […] The post בדקנו את הלפטופ הראשון עם המעבד החדש של NVIDIA appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#1",
     "title": "זה לקח זמן, אבל וואטסאפ מוסיפה סוף סוף הודעות נעלמות",
     "published": "2026-11-12T17:49:10+00:00",
     "summary": "אולי זו מהפכת ה-Vibe Coding. אולי זה בזכות Muse ואולי פשוט מישהו ב-Meta החליט שככה יהיה, אבל WhatsApp התחילה להעלות הילוך בכל הנוגע לשחרור פיצ'רים חדשים, וכעת נודע כי עוד פיצ'ר חדש ומבוקש נמצא בדרך אלינו: הודעות נעלמות. בואו להתווכח על האם זה היה בטלגרם קודם – בטלגרם של גיקטיים עכשיו אפשר לשלוח גם טקסט […] The post זה לקח זמן, אבל וואטסאפ מוסיפה סוף סוף הודעות נעלמות appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#2",
     "title": "ברייקינג: ג'נסן הואנג, מייסד ומנכ\"ל אנבידיה, התפטר",
     "published": "2026-11-12T14:03:17+00:00",
     "summary": "זה קרה: ג'נסן הואנג, המייסד-השותף, המנכ\"ל, והאיש שמזוהה יותר מכל אחד אחר עם מעיל שחור ועם השם NVIDIA, התפטר לפני זמן קצר מתפקידו בחברה אותה הקים. את הואנג תחליף בתפקיד, ה-CFO של אנבידיה, קולט קרס, שתשמש כמנכ\"לית עד שיימצא המנכ\"ל הקבוע. כל עדכוני הטכנולוגיה ברגע שהם קורים וכך, אחרי יותר משלושה עשורים שבהם הוא מוביל […] The post ברייקינג: ג'נסן הואנג, מייסד ומנכ\"ל אנבידיה, התפטר appeared first on גי"
    },
    {
     "ref": "geektime#3",
     "title": "ממשיכות לגייס: הנה כמה משרות פתוחות בחברות טק בישראל",
     "published": "2026-11-12T13:42:26+00:00",
     "summary": "בודקים מה הכיוון הבא שלכם ומחפשים עבודה בהייטק? אז יש לנו חדשות טובות, הגעתם לכתבה שמביאה לכם רשימת משרות פיתוח ומשרות מומלצות בהייטק, בדיוק עבור הרגע הזה שאתם רוצים לרענן את הטייטל. החברות, שמופיעות גם בגיקטיים אינסיידר, מציעות משרות שפתוחות עכשיו ובעמודים שלהן תוכלו לקבל פרטים על החברה, הגישה שלה ללמידה ופיתוח מקצועי, הסטאק הטכנולוגי, […] The post ממשיכות לגייס: הנה כמה משרות פתוחות בחברות טק בי"
    },
    {
     "ref": "geektime#4",
     "title": "חברת השבבים Marvell מפטרת עשרות עובדים בישראל",
     "published": "2026-11-12T11:46:41+00:00",
     "summary": "ענקית השבבים האמריקאית מארוול מפטרת עשרות עובדים בישראל מתוך כ-500 המועסקים במרכזי הפיתוח שלה בפתח תקווה וביקנעם. השפעה על \"חלק מצומצם\" על פי דיווח בכלכליסט, בניגוד לקיצוצים דומים בחברות בינלאומיות אחרות, כאן לא מדובר בגל קיצוצים עולמי בחברה, אלא בהחלטה נקודתית הנוגעת לאחד מצוותי ההנדסה המקומיים. הפעילות של מארוול בישראל מתבססת על מספר חברות שנרכשו […] The post חברת השבבים Marvell מפטרת עשרות עובד"
    },
    {
     "ref": "geektime#5",
     "title": "איך Claude Code Desktop כמעט הדליף את כל המידע מהמחשב שלכם",
     "published": "2026-11-12T08:58:03+00:00",
     "summary": "מאת אלי איינהורן אם אתם מפתחים שמשתמשים ב-Claude Code Desktop, אז אתם מכירים את הפיצ'ר הבא: מבקשים מ-Claude לבדוק קובץ HTML לדוגמה, והאפליקציה מרנדרת אותו אוטומטית בפאנל צדדי. נוח, מהיר, ושימושי. ובכן… לא בדיוק. החוקרים שלנו ב-Noma Labs גילו חולשה חמורה ב-Preview Pane של אפליקציית הדסקטופ, שאפשרה לקובץ HTML לעקוף שלוש שכבות הגנה ולשלוף סיסמאות, […] The post איך Claude Code Desktop כמעט הדליף את כל"
    },
    {
     "ref": "geektime#6",
     "title": "מה זאת אומרת מי יכול להחליף את ג'נסן? יש הרבה שמות",
     "published": "2026-11-12T08:08:27+00:00",
     "summary": "איך הגלגל מתהפך. לפני שנייה וחצי ג'נסן הואנג היה אחת מהדמויות המוערכות והאהובות ביותר בעולם הטכנולוגיה. סופרסטאר, שגדל בתנאים לא פשוטים, הצליח להקים חברה, לפוצץ אצטדיונים עם עשרות אלפי מעריצים בעזרת מעיל שחור, השפריץ כריזמה נדירה, הוכיח הבנה טכנולוגית נדירה עד לרמת השערים הלוגיים, והוביל תוכניות עסקיות מבריקות. אבל זה היה עד השבוע. השבוע האחרון […] The post מה זאת אומרת מי יכול להחליף את ג'נסן? יש"
    },
    {
     "ref": "geektime#7",
     "title": "דרמה באנבידיה: הדירקטוריון נערך להדיח את ג'נסן הואנג לאחר שנחשף רומן נוסף שלו עם בכירה בחברה",
     "published": "2026-11-12T04:47:17+00:00",
     "summary": "חשבתם שהשבוע האחרון היה סוער לאנבידיה? נראה שזו רק ההתחלה, עם צל כבד על אחד מהאנשים החזקים ביותר בעולם הטכנולוגיה. דירקטוריון NVIDIA נערך להדיח את המנכ\"ל והמייסד של החברה, ג'נסן הואנג, כך מדווח הלילה (ה') הוול סטריט ג'ורנל על סמך גורמים המקורבים לנושא. על פי הדיווח, הדירקטוריון צפוי להתכנס כנראה כבר היום כדי להכריע על […] The post דרמה באנבידיה: הדירקטוריון נערך להדיח את ג'נסן הואנג לאחר שנחשף רומ"
    },
    {
     "ref": "geektime#8",
     "title": "סטארטאפ ישראלי שנחשף עכשיו בונה Holodeck לסוכנים",
     "published": "2026-11-11T14:00:29+00:00",
     "summary": "כן. כולם במשרד כבר שמעו על הסוכן שלך שחסך לך 50 שקל או מוסיף אירועים ללוח השנה עם המשפחה. באמת, אנחנו לא יכולים לשמוע מה עוד הוא יודע לעשות. אבל בניגוד לאייג'נט המרתק שלך, כשארגונים בונים אייג'נטים ומשחררים אותם לעולם האמיתי, דברים משתבשים. אז סטארטאפ ישראלי חדש שנחשף היום (ד') רוצה ליצור סביבה שבה הסוכנים […] The post סטארטאפ ישראלי שנחשף עכשיו בונה Holodeck לסוכנים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#9",
     "title": "הם בנו למיקרוסופט את תשתית הדאטה, ועכשיו הם מגייסים 70 מיליון דולר כדי להתחרות בה",
     "published": "2026-11-11T14:00:04+00:00",
     "summary": "כשארבעה מהנדסים, שעומדים מאחורי אחת מתשתיות הדאטה המרכזיות של מיקרוסופט, עוזבים את החברה כדי להקים סטארטאפ, אתם יכולים לדעת די בבטחון שזה לא בשביל לבנות עוד אפליקציית To-Do… הסטארטאפ הישראלי Edelbyte, שנחשף היום (ד') לראשונה, מודיע על גיוסים בגובה 70 מיליון דולר בתוך שנה בלבד מאז הקמתו. המטרה? לפתור את כאב הראש שתשתיות ה-AI עושות […] The post הם בנו למיקרוסופט את תשתית הדאטה, ועכשיו הם מגייסים 70 "
    },
    {
     "ref": "geektime#10",
     "title": "אחרי צירופה של נועה ארגמני: קרן Vine מגייסת 236 מיליון דולר להשקעות בסטארטאפים",
     "published": "2026-11-11T13:09:59+00:00",
     "summary": "קרן ההון סיכון Vine Ventures הודיעה על השלמת גיוס של 236 מיליון דולר לקרן השלישית שלה, שתשקיע בחברות בארה\"ב ובישראל. לפי הקרן, כ-50% מכספי הקרן החדשה צפויים להיות מוקצים לחברות ישראליות. הגיוס מביא את היקף הנכסים המנוהלים של Vine ליותר מ-500 מיליון דולר, חמש שנים בלבד מאז שהוקמה. בגיוס השתתפו משקיעים חדשים וקיימים, ובהם מנכ\"לי […] The post אחרי צירופה של נועה ארגמני: קרן Vine מגייסת 236 מיליון דול"
    },
    {
     "ref": "geektime#11",
     "title": "חברת Innoviz הישראלית מפטרת רבע מהעובדים שלה",
     "published": "2026-11-11T12:34:46+00:00",
     "summary": "יצרנית ה-LiDAR הישראלית Innoviz מראש העין הכריזה היום (ד') על מהלך פיטורים חריג, שבמסגרתו היא צפויה להיפרד מרבע ממצבת כוח האדם שלה – כ-90 עובדים בסך הכל. זה סבב הפיטורים השלישי של החברה בשלוש השנים האחרונות, כאשר בתחילת 2024 פיטרה עשרות עובדים – שהם 13% מכוח האדם שלה. בתחילת השנה שעברה הכריזה אינוויז על סבב […] The post חברת Innoviz הישראלית מפטרת רבע מהעובדים שלה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#12",
     "title": "הקרב על הצופים בישראל: דיסני מכריזה על מבצע ל-Disney+",
     "published": "2026-11-11T10:17:41+00:00",
     "summary": "רגע לפני סוף 2026, דיסני+ יוצאת במבצע חדש כדי לנסות לגייס מנויים חדשים בישראל, ועל הדרך גם לפתות אולי מנויים נוטשים לחזור לשירות הסטרימינג שלה. אל תשכחו לשים תזכורת החל מהיום (ד') ועד ה-24 בנובמבר, החברה מציעה למצטרפים חדשים וחוזרים את המינוי שלה במחיר של 34.90 שקלים לחודש למשך חודשיים. לאחר תום תקופת ההטבה, התשלום […] The post הקרב על הצופים בישראל: דיסני מכריזה על מבצע ל-Disney+ appeared first o"
    },
    {
     "ref": "geektime#13",
     "title": "חיפאים, Google Cloud מזמינה אתכם לאירוע AI ודאטה חדש",
     "published": "2026-11-11T09:42:36+00:00",
     "summary": "במקום ששוב תסעו לתל אביב כדי להיחשף לחידושים של Google Cloud – הפעם הם מגיעים לצפון: Google פותחת את משרדיה בחיפה ליום טכנולוגי שיוקדש לכלי ה-AI והדאטה שלה. תוכלו לצפות בהדגמות חיות וללמוד מדוגמאות אמיתיות, כך שתצאו מהאירוע עם רעיונות וכלים פרקטיים שניתן ליישם מיד. האירוע, AI in Action | Haifa, יתקיים ב-30 בנובמבר (9:00-14:00) […] The post חיפאים, Google Cloud מזמינה אתכם לאירוע AI ודאטה חדש appea"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Microsoft Outlook/365 still down after 12 hours",
     "published": "2026-11-13T05:08:23+00:00",
     "summary": "Article URL: https://twitter.com/MSFT365Status/status/2121079061774491735 Comments URL: https://news.ycombinator.com/item?id=50478609 Points: 171 # Comments: 89"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Nvidia employees petition to bring back Jensen Huang",
     "published": "2026-11-13T02:16:24+00:00",
     "summary": "Article URL: https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/ Comments URL: https://news.ycombinator.com/item?id=50477231 Points: 556 # Comments: 391"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Edge0-145B: Frontier AI Capabilities on Your Own Computer",
     "published": "2026-11-12T23:06:17+00:00",
     "summary": "Article URL: https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer Comments URL: https://news.ycombinator.com/item?id=50475713 Points: 235 # Comments: 69"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Chinese frontier AI models carry the fingerprint of export-controlled GPUs",
     "published": "2026-11-12T21:56:11+00:00",
     "summary": "Article URL: https://unemploymentlabs.com/checkpoint-forensics Comments URL: https://news.ycombinator.com/item?id=50474883 Points: 288 # Comments: 87"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Foundation Models framework",
     "published": "2026-11-12T21:13:26+00:00",
     "summary": "Article URL: https://developer.apple.com/foundation-models-framework/ Comments URL: https://news.ycombinator.com/item?id=50474361 Points: 204 # Comments: 27"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Former Nvidia CEO Huang had a relationship with a second employee, sources say",
     "published": "2026-11-12T19:51:33+00:00",
     "summary": "https://www.forbes.com/sites/alisondurkee/2026/11/12/jensen-... Comments URL: https://news.ycombinator.com/item?id=50473190 Points: 259 # Comments: 266"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Dwarf planet candidate appears which takes roughly 280 years to orbit our sun",
     "published": "2026-11-12T19:05:33+00:00",
     "summary": "Article URL: https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/ Comments URL: https://news.ycombinator.com/item?id=50472490 Points: 296 # Comments: 123"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Gemini 4 Hydrogen and Orchestrator",
     "published": "2026-11-12T18:52:01+00:00",
     "summary": "Article URL: https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/ Comments URL: https://news.ycombinator.com/item?id=50472260 Points: 409 # Comments: 110"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Rust 1.100",
     "published": "2026-11-12T18:39:05+00:00",
     "summary": "Article URL: https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/ Comments URL: https://news.ycombinator.com/item?id=50472038 Points: 661 # Comments: 251"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Turning a 22-year-old Postgres type-confusion primitive into RCE",
     "published": "2026-11-12T18:22:22+00:00",
     "summary": "Article URL: https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/ Comments URL: https://news.ycombinator.com/item?id=50471761 Points: 190 # Comments: 35"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Service degradation on Microsoft 365",
     "published": "2026-11-12T18:20:48+00:00",
     "summary": "https://www.abc.net.au/news/2026-11-13/microsoft-outage-affe... https://www.reddit.com/r/sysadmin/comments/1xuje83/microsoft... https://downdetector.com/status/microsoft-365/ Comments URL: https://news.ycombinator.com/item?id=50471731 Points: 859 # Comments: 758"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Gemini 4 Hydrogen",
     "published": "2026-11-12T18:01:48+00:00",
     "summary": "Article URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ Comments URL: https://news.ycombinator.com/item?id=50471431 Points: 525 # Comments: 330"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Show HN: My $300 embroidery machine needed a subscription, so I built my own app",
     "published": "2026-11-12T17:02:42+00:00",
     "summary": "https://x.com/simpsoka/status/2115254318161182876 Comments URL: https://news.ycombinator.com/item?id=50470488 Points: 506 # Comments: 179"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "I'm making LLMs work on small and old devices",
     "published": "2026-11-12T15:23:10+00:00",
     "summary": "Article URL: https://github.com/hyperionaidev/smolmaxxing/ Comments URL: https://news.ycombinator.com/item?id=50468888 Points: 361 # Comments: 127"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "Abandoned Quake 4 expansion finished by modders and now playable",
     "published": "2026-11-12T14:18:49+00:00",
     "summary": "Article URL: https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64 Comments URL: https://news.ycombinator.com/item?id=50467618 Points: 269 # Comments: 99"
    },
    {
     "ref": "hn_frontpage#15",
     "title": "Talking Zen 6 with Mike Clark at AMD In-Depth",
     "published": "2026-11-12T14:12:37+00:00",
     "summary": "Article URL: https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at Comments URL: https://news.ycombinator.com/item?id=50467460 Points: 215 # Comments: 5"
    },
    {
     "ref": "hn_frontpage#16",
     "title": "Our software engineering interviews are changing a little",
     "published": "2026-11-12T14:05:28+00:00",
     "summary": "Article URL: https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/ Comments URL: https://news.ycombinator.com/item?id=50467297 Points: 220 # Comments: 208"
    },
    {
     "ref": "hn_frontpage#17",
     "title": "Jensen Huang resigns",
     "published": "2026-11-12T13:52:29+00:00",
     "summary": "https://nvidianews.nvidia.com/news/nvidia-announces-ceo-tran... https://www.reuters.com/business/retail-consumer/nvidia-ceo-... , https://www.reuters.com/live/nvidia-live-board-meets-fate-ce... https://www.nytimes.com/live/2026/11/12/business/nvidia-jens... Comments URL: https://news.ycombinator.com/item?id=50467087 Points: 3494 # Comments: 3100"
    },
    {
     "ref": "hn_frontpage#18",
     "title": "Anthropic IPO",
     "published": "2026-11-12T11:46:41+00:00",
     "summary": "Article URL: https://ipo.anthropic.com/us/ Comments URL: https://news.ycombinator.com/item?id=50465829 Points: 920 # Comments: 861"
    },
    {
     "ref": "hn_frontpage#19",
     "title": "Relax: JIT compiler for Rust to reduce build times",
     "published": "2026-11-11T21:20:01+00:00",
     "summary": "Article URL: https://makepad.github.io/relax/ Comments URL: https://news.ycombinator.com/item?id=50458849 Points: 158 # Comments: 71"
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
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "Nvidia privately confirmed it could track chips to fight smuggling, even as industry publicly questioned feasibility",
     "published": "2026-11-12T20:16:24+00:00",
     "summary": "Representatives from Nvidia told Illinois representative Bill Foster that it would be technically possible to implement the anti-smuggling measures called for in the Chip Security Act, Foster told MIT Technology Review in an interview on Thursday, even while an industry group claimed they were “potentially infeasible.” Foster, a Democrat who serves on the Committee on…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The Download: COP31’s climate challenge and the quest for immortality",
     "published": "2026-11-12T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. What to know about this year’s UN climate talks Thousands of delegates, lobbyists, and journalists have gathered in Antalya, Turkey, for COP31, the annual UN climate talks. But this year’s negotiations…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "What to know about this year’s UN climate talks",
     "published": "2026-11-11T17:00:00+00:00",
     "summary": "It’s that time of year again: Thousands of delegates, lobbyists, and journalists are gathered for the annual UN climate talks, taking place this time in Antalya, Turkey. COP31 officially kicked off on November 8, marking the beginning of negotiations on one of the biggest stages of the climate world. Turkey and Australia are cohosting this…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "The Download: preserving minds and weighing open AI risks",
     "published": "2026-11-11T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Six wild ideas for perpetuating your mind As we age, we forget most of what we’ve experienced, yet there’s still undeniable continuity: At 30, or 50, or 70, you will still…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: Pelosi’s successor targets AI and data centers face power woes",
     "published": "2026-11-10T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Nancy Pelosi’s replacement is ready to regulate AI —Grace Huckins As a California state senator, Scott Wiener authored legislation aimed at curbing the risks of advanced AI. Now, after winning a…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Evolving metal extraction processes",
     "published": "2026-11-10T13:00:00+00:00",
     "summary": "The metals industry has experienced transformational moments before: the Bessemer process, flash smelting, electric arc furnaces, and modern continuous casting all changed what was possible. Yet, for more than a century, most extraction processes rely on techniques and pathways that would be familiar to metallurgists from generations ago. Processes have become larger and control systems…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "llm-gemini 0.37",
     "published": "2026-11-12T22:55:19+00:00",
     "summary": "Release: llm-gemini 0.37 Google launched Gemini 4 Hydrogen today - the lowest cost member of the Gemini 4 family. It's actually not too far off the price of its much bigger siblings, Carbon and Argon. I'm finding Gemini 4's pricing really confusing. Here's the pricing scheme: Model Dates Input ($/M) Cached input Output Gemini 4 Carbon Through Nov 30, 2026 $2.00 $0.10 $10.00 From Dec 1, 2026 $4.00 "
    },
    {
     "ref": "simon_willison#1",
     "title": "Gemini Decisions API",
     "published": "2026-11-11T22:03:25+00:00",
     "summary": "Gemini Decisions API Google join Jev and OpenAI in the decision model category with \"Gemini Decision 1\". This new model API is almost identical to Jev: it supports the same three types of questions (yes/no, choice, and rubric-scoring) and even reuses Jev's term \"Noul\" for a yes/no question. It's priced the same as the GPT-6 Luna decision model: 10 cents per million input tokens, and output is free"
    },
    {
     "ref": "simon_willison#2",
     "title": "aws-emulator",
     "published": "2026-11-11T21:18:30+00:00",
     "summary": "aws-emulator Finally, an official emulator from AWS to run tests against a local clone of their many different services without having to provision a paid API key to do so. It's written in Rust by a huge swarm of agents - 29,684 commits in the first three weeks of the project. Swaminathan (Swami) Sivasubramanian wrote about how it came to be in a guest post on Werner Vogels' blog. It currently req"
    },
    {
     "ref": "simon_willison#3",
     "title": "Browse tools.simonwillison.net by tag",
     "published": "2026-11-11T18:42:50+00:00",
     "summary": "Browse tools.simonwillison.net by tag I've been wanting a better way to browse my collection of vibe-coded tools (244 and counting) for a while. I had a few Fable 5.2 credits left over before my weekly reset so I set it to work using tree-sitter to analyze the code for JavaScript APIs, libraries, and web API hosts used by each tool. The homepage now features tag clouds for browsing by each of thos"
    },
    {
     "ref": "simon_willison#4",
     "title": "llm 0.37.2",
     "published": "2026-11-11T17:19:52+00:00",
     "summary": "Release: llm 0.37.2 Fixes a security issue reported by Daniel de Araujo in GHSA-v9h7-jj4g-f862 and GHSA-r639-rr7r-x72w . LLM has a mechanism called extra-openai-models.yaml - now managed by the new-in-0.37 llm openai endpoint add command - for using LLM with OpenAI-compatible API endpoints from other providers. Daniel reported two ways this could accidentally send your configured OpenAI API key to"
    },
    {
     "ref": "simon_willison#5",
     "title": "Anthropic's IPO roadshow video",
     "published": "2026-11-11T15:11:59+00:00",
     "summary": "Anthropic's IPO roadshow video Anthropic kicked off their IPO roadshow yesterday, and their roadshow video has some previously unreleased information about how their business works. The section on \"Approach to compute\" with co-founder Tom Brown is particularly interesting, describing how Anthropic train and serve Claude across AWS Trainium, Google TPUs, NVIDIA GPUs, and AMD GPUs. I'm not sure why "
    },
    {
     "ref": "simon_willison#6",
     "title": "llm-gemini 0.36",
     "published": "2026-11-10T20:09:44+00:00",
     "summary": "Release: llm-gemini 0.36 Gemini 4 Carbon was announced two weeks ago for \"a subset of cyber defenders\", but today it's available to everyone else . This is Google's best ever Gemini, priced at $2/million input and $10/million output at launch (that's GPT-6.1 Sol / Claude Sonnet 5.5 prices) but scheduled to double in price to $4/$20 on December 1st (same as Opus 5.5). Here are three pelicans for th"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Donald Trump really wants Tim Cook to run Nvidia",
     "published": "2026-11-13T00:46:07+00:00",
     "summary": "Jensen Huang resigned this morning as Nvidia's CEO following reports of affairs, including one with an alleged Chinese spy. Right now, the company is being led by its CFO on an interim basis. But President Donald Trump is already throwing around one person he thinks should take over the chipmaking giant: former Apple CEO Tim […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Xbox announces Wolfenstein 3",
     "published": "2026-11-13T00:11:44+00:00",
     "summary": "It's been nearly a decade since Bethesda's MachineGames released Wolfenstein II: The New Colossus in 2017, and now Xbox is ready to announce a sequel from the studio. Wolfenstein 3 was officially announced today, just days after Bethesda also confirmed that the next Elder Scrolls game will be called The Elder Scrolls VI: Sentinel. In […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Whoop launched a social network where every user has a ‘verified heartbeat’",
     "published": "2026-11-12T23:43:22+00:00",
     "summary": "Starting Thursday, Whoop members can share their data from its wearables on the app's new Whoop Humans social network. Users can make their metrics, activities, and achievements visible to other Whoop wearers, post Story-like \"Moments\" with photos and captions, and add comments and reactions on other members' posts. Whoop claims its platform is \"entirely human,\" […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Humble Bundle redesign removes two-factor verification from settings",
     "published": "2026-11-12T23:30:52+00:00",
     "summary": "The Humble Bundle storefront for buying games and other software recently got a new look, but on the settings page, it no longer offers a way to add or update two-factor verification methods, as reported by Kotaku. PC Gamer also points out that there are Humble Bundle support pages discussing two-factor verification, and the writer […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Microsoft Outlook is still down",
     "published": "2026-11-12T23:24:13+00:00",
     "summary": "Since just before 1PM ET on Thursday, reports have come in from around the world that people can't access their Outlook email, either through the web or apps. Microsoft quickly acknowledged the issue from its Microsoft 365 Status account, saying that \"We've determined a portion of infrastructure is experiencing elevated load across multiple regions, which […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Xbox owners are getting more customizations for backgrounds and the Guide menu",
     "published": "2026-11-12T23:00:00+00:00",
     "summary": "Microsoft is starting to test new customization options for Xbox consoles today. Xbox Insiders will be able to start testing new rotating backgrounds, new library options for digital games, and the ability to move the Xbox Guide menu to the right-hand side. \"Xbox Insiders can now save favorite dynamic backgrounds and shuffle through them automatically,\" […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Google’s new Gemini model is better at understanding complicated questions",
     "published": "2026-11-12T21:55:32+00:00",
     "summary": "Google says its new Gemini 4 Hydrogen model can give more helpful answers to complex questions, including \"questions with multiple parts, hard-to-understand typos, or highly specific requests.\" The new model can break down your questions and address each part in its responses. It's available starting today in search, the Gemini app, all tiers of Google […]"
    },
    {
     "ref": "the_verge#7",
     "title": "‘It’s a mistake’: reactions from tech leaders on Jensen Huang’s resignation",
     "published": "2026-11-12T21:45:00+00:00",
     "summary": "Nvidia announced this morning that Jensen Huang has resigned as CEO following reports of two affairs, including one with an alleged Chinese spy and one with a direct report. The situation surrounding Huang has unfolded quickly, with The New York Times only reporting on Friday that Huang and the suspected spy were \"close\" before other […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The Oura Ring 4 is almost as good as the newer model, but $150 cheaper",
     "published": "2026-11-12T21:28:53+00:00",
     "summary": "The previous-generation Oura Ring 4 is on sale for as low as $249 at Amazon, Best Buy, and Target, $100 off the retail price, and the first big discount on the device since July. The price varies a bit by size and color, with most silver and black models in stock at the lowest price […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Here are the 25 original Xbox games you can now play on PC",
     "published": "2026-11-12T21:00:00+00:00",
     "summary": "For the 25th anniversary of Xbox, Microsoft is beginning to make good on its paid \"next-gen game preservation\" promise. Starting today, you can play 25 different original Xbox games on your Windows PC, as long as you have (or are willing to pay) for digital copies. In July, Microsoft originally launched the idea with just […]"
    }
   ]
  }
 ]
}
</input>