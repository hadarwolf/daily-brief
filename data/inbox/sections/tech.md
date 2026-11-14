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
     "title": "Starship flight 15 powers to orbit—setting up a possible catch on Saturday",
     "published": "2026-11-14T00:49:13+00:00",
     "summary": "One way or another, the company will get some more data on Saturday."
    },
    {
     "ref": "ars_technica#1",
     "title": "FAA has lifted its third-ever nationwide ground stop",
     "published": "2026-11-13T23:17:38+00:00",
     "summary": "Secretary of Transportation Sean Duffy blamed obsolete equipment for the outage."
    },
    {
     "ref": "ars_technica#2",
     "title": "Millions of Americans are not taking their GLP-1 drugs as prescribed",
     "published": "2026-11-13T21:59:01+00:00",
     "summary": "Cost and access barriers are pushing people to modified use and unapproved versions."
    },
    {
     "ref": "ars_technica#3",
     "title": "FAA expands AI advice to manage air traffic congestion across entire US airspace",
     "published": "2026-11-13T21:20:47+00:00",
     "summary": "Airlines praised the AI tool, but the air traffic controllers’ union wasn’t involved."
    },
    {
     "ref": "ars_technica#4",
     "title": "In elephants, the resilience of communities has its limits",
     "published": "2026-11-13T20:03:13+00:00",
     "summary": "In Sri Lanka, ecological change is shrinking a park's elephant population."
    },
    {
     "ref": "ars_technica#5",
     "title": "Kalshi ditches Trump Jr. as advisor; CEO admitted \"optics\" weren't good",
     "published": "2026-11-13T19:49:16+00:00",
     "summary": "Trump son advised Kalshi and got equity while Trump admin helped Kalshi in lawsuits."
    },
    {
     "ref": "ars_technica#6",
     "title": "OpenAI board member worries an AI \"takeover\" of society could be months away",
     "published": "2026-11-13T17:25:45+00:00",
     "summary": "Researcher traces a path from AI reward hacking to potential human extinction."
    },
    {
     "ref": "ars_technica#7",
     "title": "Windows 0-day dropped by disgruntled researcher hands hackers System rights",
     "published": "2026-11-13T16:26:32+00:00",
     "summary": "\"SignDrop\" exploit lets local users gain all-powerful System rights."
    },
    {
     "ref": "ars_technica#8",
     "title": "Microsoft’s global outage may be worse than Amazon's or CrowdStrike's, expert says",
     "published": "2026-11-13T15:26:53+00:00",
     "summary": "Governments, hospitals, courts scrambled by global Microsoft outage."
    },
    {
     "ref": "ars_technica#9",
     "title": "It's the end of the world as we know it, per a physicist's 1960 prediction",
     "published": "2026-11-13T15:09:39+00:00",
     "summary": "Heinz von Foerster thought population would grow exponentially and \"squeeze\" us all to death."
    },
    {
     "ref": "ars_technica#10",
     "title": "Screenless GPS: Slate Auto says, \"Remember the road atlas\"",
     "published": "2026-11-13T14:45:04+00:00",
     "summary": "What’s more fitting than a spiral-bound map for a bare-bones two-door pickup?"
    },
    {
     "ref": "ars_technica#11",
     "title": "Scientists warn 1.5°C climate change threshold could arrive by 2029",
     "published": "2026-11-13T14:29:15+00:00",
     "summary": "Climate action has stalled for five years as fossil fuel development keeps growing."
    },
    {
     "ref": "ars_technica#12",
     "title": "Rocket Report: Starship set for historic test flight; a century of Electron",
     "published": "2026-11-13T12:00:40+00:00",
     "summary": "\"You can simplify it as a big tank feeding engines.\""
    },
    {
     "ref": "ars_technica#13",
     "title": "Specialized’s Tarmac SL9 S-Level is built to wreck your Zone 2 ride",
     "published": "2026-11-13T11:50:38+00:00",
     "summary": "Specialized’s second-fastest bike may be the smart buy."
    },
    {
     "ref": "ars_technica#14",
     "title": "In reversal, American Cancer Society urges routine prostate cancer screening",
     "published": "2026-11-12T22:59:51+00:00",
     "summary": "Men aged 50–69 and at average risk should get PSA screening every two years."
    },
    {
     "ref": "ars_technica#15",
     "title": "Ars Live: What drone attacks on data centers mean for modern life in the cloud",
     "published": "2026-11-12T19:59:59+00:00",
     "summary": "A livestream Ars discussion is happening on November 17 at 1 pm Eastern Time."
    },
    {
     "ref": "ars_technica#16",
     "title": "The Elder Scrolls' most obscure adventure gets a 4K PC makeover",
     "published": "2026-11-12T19:49:11+00:00",
     "summary": "N-Gage exclusive Shadowkey gets an AI-coded glow-up with plenty of new features."
    },
    {
     "ref": "ars_technica#17",
     "title": "Google rolls out Gemini 4 Hydrogen, finally replacing 3.8 Flash",
     "published": "2026-11-12T19:23:03+00:00",
     "summary": "Gemini 4 Hydrogen isn't getting a slow, security-conscious release like Carbon and Argon."
    },
    {
     "ref": "ars_technica#18",
     "title": "Ukraine says it can’t stop Russian strikes because Starshield is limited again",
     "published": "2026-11-12T19:09:57+00:00",
     "summary": "Report: Ukraine suspects speeds limits are intended to help Russia in peace talks."
    },
    {
     "ref": "ars_technica#19",
     "title": "Google faces calls for AI moratoriums in schools after Gemini pilot backlash",
     "published": "2026-11-12T18:57:45+00:00",
     "summary": "Families confront Google after teen’s lawsuit labels Gemini a “suicide coach.”"
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "אפליקציה חינמית חדשה היא חובה לכל מי שקונה באיקאה",
     "published": "2026-11-14T08:55:16+00:00",
     "summary": "כל מי שאי פעם קנה רהיט או מוצר כלשהו באיקאה מכיר את הרגע הזה: הקרטון נפתח, ואלפי ברגים וחלקי עץ ומתכת מוזרים נשפכים על הרצפה, מלווים בחוברת הוראות מעצבנת. אז במקום להסתבך עם איורים לא ברורים, אפליקציה חינמית חדשה מציעה להעביר את כל חוויית ההרכבה למאה ה-21 והיא עושה את זה עם מודלים בתלת-ממד ופיצ'ר […] The post אפליקציה חינמית חדשה היא חובה לכל מי שקונה באיקאה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#1",
     "title": "ביי ביי למפתחות: הארנק של גוגל ישמש לפתיחה של דלתות",
     "published": "2026-11-13T15:26:23+00:00",
     "summary": "אתם כבר רגילים לשלם איתו בסופר ולתקף איתו ברכבת, אבל הבית שלכם נשאר עד עכשיו מחוץ למשחק, וכשאנחנו כותבים משחק, אנחנו מתכוונים לארנק הדיגיטלי שלכם. עכשיו, גוגל עושה צעד נוסף לעבר העלמת צרור המפתחות המעיק שלנו, ומוסיפה סוף סוף ל-Wallet את היכולת לפתוח את דלת הבית, גם בלי להוציא את המכשיר מהכיס. פשוט מצמידים את […] The post ביי ביי למפתחות: הארנק של גוגל ישמש לפתיחה של דלתות appeared first on גיקטיים"
    },
    {
     "ref": "geektime#2",
     "title": "הכלי הזה מאפשר לכם לשכפל כל תוכנה או משחק",
     "published": "2026-11-13T14:30:51+00:00",
     "summary": "האם אנחנו בדרך לסופם של התשלומים החודשיים המוגזמים לחברות הענק? אחרי ששיכפל בהצלחה את התוכנות של אדובי ומיקרוסופט, מפתח תוכנה זועם אחד שחרר את נשק יום הדין של עולם הקוד הפתוח: כלי חינמי שמנתח כל תוכנה, אתר או אפליקציה, מהנדס אותה לאחור, ובונה לכם גרסה זהה בעזרת AI. ככה בדיוק זה עובד. התחיל עם אדובי, […] The post הכלי הזה מאפשר לכם לשכפל כל תוכנה או משחק appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "ואם היינו אומרים לכם שהסרט הכי מדובר השנה נוצר באמצעות AI?",
     "published": "2026-11-13T13:12:04+00:00",
     "summary": "רעיון התודעה המשותפת הופיע ביצירות מדע בדיוני הרבה לפני שנוצר מודל ה-AI הראשון. מ\"המשחק של אנדר\", דרך \"סטארטרק\" ועד \"פלוריבוס\" – \"מח כוורת\" הוא כר פורה לעלילות דיסטופיות ואוטופיות (תלוי את מי שואלים) שמעוררות שאלות על אובדן העצמי, ומנגד מציעות פתרון לבדידות האנושית ולמלחמות. במציאות, הרעיון הזה הופך את כולנו למומחים להכל שחולקים צבר אדיר […] The post ואם היינו אומרים לכם שהסרט הכי מדובר השנה נוצר "
    },
    {
     "ref": "geektime#4",
     "title": "12 שעות אחרי: מיקרוסופט עדיין לא מצליחה לתקן את התקלה הגדולה",
     "published": "2026-11-13T09:52:43+00:00",
     "summary": "תקלה עולמית נרחבת משתקת כבר יותר מ-12 שעות חלק גדול מהשירותים של מיקרוסופט ובראשם שירותי Microsoft 365, כולל אאוטלוק, Teams וכלי ה-AI של החברה, Copilot. לפי הנתונים של אתר Downdetector, בשיא התקלה נרשמו קרוב ל-140 אלף דיווחים של משתמשים מ-74 מדינות. אבל לא רק לקוחות פרטיים או ארגוניים של מיקרוסופט סובלים מהקריסה. גם ענקיות טכנולוגיה […] The post 12 שעות אחרי: מיקרוסופט עדיין לא מצליחה לתקן את התקל"
    },
    {
     "ref": "geektime#5",
     "title": "בדקנו את הלפטופ הראשון עם המעבד החדש של NVIDIA",
     "published": "2026-11-13T08:03:32+00:00",
     "summary": "ב-2020 חל שינוי פרדיגמה ענק בשוק המחשבים, כאשר Apple הודיעה שהיא מוותרת על שירותיה של אינטל לטובת מעבדים בפיתוח עצמי. ההימור הזה השתלם מאוד לאפל מבחינה טכנית וגם כלכלית. ארבע שנים לאחר מכן השינוי הזה הגיע גם ל-PC עם ההודעה של מיקרוסופט על שיתוף פעולה ראשון עם קוואלקום שהביא את מעבדי ARM למחשבי ווינדוס. ביוני […] The post בדקנו את הלפטופ הראשון עם המעבד החדש של NVIDIA appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#6",
     "title": "זה לקח זמן, אבל וואטסאפ מוסיפה סוף סוף הודעות נעלמות",
     "published": "2026-11-12T17:49:10+00:00",
     "summary": "אולי זו מהפכת ה-Vibe Coding. אולי זה בזכות Muse ואולי פשוט מישהו ב-Meta החליט שככה יהיה, אבל WhatsApp התחילה להעלות הילוך בכל הנוגע לשחרור פיצ'רים חדשים, וכעת נודע כי עוד פיצ'ר חדש ומבוקש נמצא בדרך אלינו: הודעות נעלמות. בואו להתווכח על האם זה היה בטלגרם קודם – בטלגרם של גיקטיים עכשיו אפשר לשלוח גם טקסט […] The post זה לקח זמן, אבל וואטסאפ מוסיפה סוף סוף הודעות נעלמות appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#7",
     "title": "ברייקינג: ג'נסן הואנג, מייסד ומנכ\"ל אנבידיה, התפטר",
     "published": "2026-11-12T14:03:17+00:00",
     "summary": "זה קרה: ג'נסן הואנג, המייסד-השותף, המנכ\"ל, והאיש שמזוהה יותר מכל אחד אחר עם מעיל שחור ועם השם NVIDIA, התפטר לפני זמן קצר מתפקידו בחברה אותה הקים. את הואנג תחליף בתפקיד, ה-CFO של אנבידיה, קולט קרס, שתשמש כמנכ\"לית עד שיימצא המנכ\"ל הקבוע. כל עדכוני הטכנולוגיה ברגע שהם קורים וכך, אחרי יותר משלושה עשורים שבהם הוא מוביל […] The post ברייקינג: ג'נסן הואנג, מייסד ומנכ\"ל אנבידיה, התפטר appeared first on גי"
    },
    {
     "ref": "geektime#8",
     "title": "ממשיכות לגייס: הנה כמה משרות פתוחות בחברות טק בישראל",
     "published": "2026-11-12T13:42:26+00:00",
     "summary": "בודקים מה הכיוון הבא שלכם ומחפשים עבודה בהייטק? אז יש לנו חדשות טובות, הגעתם לכתבה שמביאה לכם רשימת משרות פיתוח ומשרות מומלצות בהייטק, בדיוק עבור הרגע הזה שאתם רוצים לרענן את הטייטל. החברות, שמופיעות גם בגיקטיים אינסיידר, מציעות משרות שפתוחות עכשיו ובעמודים שלהן תוכלו לקבל פרטים על החברה, הגישה שלה ללמידה ופיתוח מקצועי, הסטאק הטכנולוגי, […] The post ממשיכות לגייס: הנה כמה משרות פתוחות בחברות טק בי"
    },
    {
     "ref": "geektime#9",
     "title": "חברת השבבים Marvell מפטרת עשרות עובדים בישראל",
     "published": "2026-11-12T11:46:41+00:00",
     "summary": "ענקית השבבים האמריקאית מארוול מפטרת עשרות עובדים בישראל מתוך כ-500 המועסקים במרכזי הפיתוח שלה בפתח תקווה וביקנעם. השפעה על \"חלק מצומצם\" על פי דיווח בכלכליסט, בניגוד לקיצוצים דומים בחברות בינלאומיות אחרות, כאן לא מדובר בגל קיצוצים עולמי בחברה, אלא בהחלטה נקודתית הנוגעת לאחד מצוותי ההנדסה המקומיים. הפעילות של מארוול בישראל מתבססת על מספר חברות שנרכשו […] The post חברת השבבים Marvell מפטרת עשרות עובד"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs",
     "published": "2026-11-14T02:52:59+00:00",
     "summary": "Article URL: https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus Comments URL: https://news.ycombinator.com/item?id=50493251 Points: 531 # Comments: 319"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Ggml v1.0.0",
     "published": "2026-11-14T02:28:29+00:00",
     "summary": "Article URL: https://github.com/ggml-org/ggml/releases/tag/v1.0.0 Comments URL: https://news.ycombinator.com/item?id=50493062 Points: 246 # Comments: 38"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Amtrak booking system experiencing major issues amid nationwide FAA ground stop",
     "published": "2026-11-14T00:52:29+00:00",
     "summary": "Article URL: https://www.fox5dc.com/news/amtrak-outage-ticket-booking-faa-ground-stop-november-13-2026 Comments URL: https://news.ycombinator.com/item?id=50492315 Points: 163 # Comments: 58"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Terminal borders that don't cost a cell",
     "published": "2026-11-13T23:06:40+00:00",
     "summary": "Article URL: https://www.joshka.net/cell-borders/ Comments URL: https://news.ycombinator.com/item?id=50491423 Points: 232 # Comments: 102"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Live airband on all frequencies from KORS. Victoria, CA also ground stopped",
     "published": "2026-11-13T22:04:24+00:00",
     "summary": "Article URL: https://orcasairband.com/ Comments URL: https://news.ycombinator.com/item?id=50490593 Points: 260 # Comments: 60"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "FAA issues national ground stop – lifted 4.5 hours later",
     "published": "2026-11-13T21:05:53+00:00",
     "summary": "https://www.fly.faa.gov/adv/adv_otherdis?adv_date=11132026&a... https://www.fly.faa.gov/adv/adv_otherdis?adv_date=11142026&a... https://www.nytimes.com/live/2026/11/13/us/ground-stop-natio... Comments URL: https://news.ycombinator.com/item?id=50489641 Points: 1530 # Comments: 1164"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Found: A protein that drives ageing without unleashing inflammation",
     "published": "2026-11-13T19:25:21+00:00",
     "summary": "Article URL: https://www.nature.com/articles/d41586-026-03638-3 Comments URL: https://news.ycombinator.com/item?id=50488470 Points: 193 # Comments: 29"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "FM-1 Workbench",
     "published": "2026-11-13T19:14:02+00:00",
     "summary": "Article URL: https://open.m-vave.com/fm1-workbench Comments URL: https://news.ycombinator.com/item?id=50488325 Points: 234 # Comments: 155"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "$11.4M in Nvidia hardware vanishes during shipment from CA to TX",
     "published": "2026-11-13T18:40:44+00:00",
     "summary": "Article URL: https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas Comments URL: https://news.ycombinator.com/item?id=50487864 Points: 352 # Comments: 191"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Show HN: Isometric SF – A pixel-art map of the SF Bay Area",
     "published": "2026-11-13T17:58:37+00:00",
     "summary": "Technical Write-up: https://www.justinchavez.com/blog/isometric-sf-how/ Hi HN! Showcasing this fun project. I took 1300 square miles of the SF Bay Area from Google Photorealistic 3D Tiles and transformed them into a cohesive pixel map. It's really fun to explore and stumble upon various famous landmarks like Apple Park, Palace of Fine Arts, or UC Berkeley. The technicals involve using Nano Banana "
    },
    {
     "ref": "hn_frontpage#10",
     "title": "After 600 experiments, here's what I discovered about JEPA world models",
     "published": "2026-11-13T17:55:28+00:00",
     "summary": "Article URL: https://haddyalchaer.com/jepa Comments URL: https://news.ycombinator.com/item?id=50487185 Points: 257 # Comments: 41"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems",
     "published": "2026-11-13T17:30:10+00:00",
     "summary": "Article URL: https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths Comments URL: https://news.ycombinator.com/item?id=50486748 Points: 389 # Comments: 97"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Jonathan Blow – If AI solved coding, why is my software still the same? [video]",
     "published": "2026-11-13T15:08:44+00:00",
     "summary": "Article URL: https://www.youtube.com/watch?v=IRK8h67ol7Q Comments URL: https://news.ycombinator.com/item?id=50484658 Points: 280 # Comments: 320"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "Minnesota guitarist's \"palmfrets\" invention strikes a new chord",
     "published": "2026-11-13T15:08:07+00:00",
     "summary": "https://palmfrets.com/ Comments URL: https://news.ycombinator.com/item?id=50484650 Points: 170 # Comments: 95"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "A technical vision for the Haskell ecosystem",
     "published": "2026-11-13T14:43:12+00:00",
     "summary": "Article URL: https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078 Comments URL: https://news.ycombinator.com/item?id=50484235 Points: 204 # Comments: 113"
    },
    {
     "ref": "hn_frontpage#15",
     "title": "Reverse engineering my Coway air purifier to ditch the cloud",
     "published": "2026-11-12T22:03:09+00:00",
     "summary": "Article URL: https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/ Comments URL: https://news.ycombinator.com/item?id=50474959 Points: 746 # Comments: 212"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "How Microcredentials Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Engineer Overhead Lines to Withstand Ice, Wind and FreezingRain",
     "published": "2026-11-13T11:00:02+00:00",
     "summary": "This White Paper explains how ice, wind and vegetation load overhead distribution lines at the same time. It shows engineers how to assess the complete line and compare resilience options. What you will learn about: How freezing rain, rime ice and wet snow add weight to conductors and change their shape in the wind. Why a moderate wind on a heavily iced line can govern design, and how galloping an"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "The Dynamo-Electric Principle: 160 Years of Powering Industry",
     "published": "2026-11-11T11:00:02+00:00",
     "summary": "This article is brought to you by Innomotics . In the annals of industrial history, few innovations have demonstrated such remarkable staying power as the dynamo-electric principle. Discovered by Werner von Siemens in 1866, this groundbreaking principle remains fundamental to modern electrical engineering more than a century and a half later – and continues to shape the technology portfolio of Inn"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Speech Processing Pioneer Bishnu Saroop Atal Dies at 93",
     "published": "2026-11-10T19:00:02+00:00",
     "summary": "Bishnu Saroop Atal Acoustics and signal processing pioneer Life Fellow, 93; died 19 August Atal was an acoustics and signal processing researcher at Bell Labs in Murray Hill, N.J., and later at AT&T ’s Shannon Laboratory, in Florham Park, N.J. His pioneering work on voice-coding techniques became the foundation for efficient, high-quality voice transmission over cellular networks. He received the "
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Catch Electronics Shock and Drop Failures Before Hardware Is Built",
     "published": "2026-11-10T11:00:02+00:00",
     "summary": "Learn how guided virtual shock and drop analysis helps engineering teams identify reliability risks before physical testing, reduce qualification iterations, optimize packaging designs, and accelerate electronics product development. What you will learn about: Why shock failures found during physical qualification are costly, and how coupled electrical, mechanical, thermal, and packaging effects m"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "AI Agents Are Testing the Limits of Zero-Trust Security",
     "published": "2026-11-09T16:25:06+00:00",
     "summary": "This article is brought to you by Queen’s University Belfast . Several teams around the globe are leveraging AI by creating a task force of agents managed by an orchestrator and creating applications to support risk assessment, client profiling, match making, and information yield with a slight overview of decision making. One of the important components for these agents is to ensure that the logs"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The Download: Silicon Valley’s blind spot and Nvidia’s chip-tracking plan",
     "published": "2026-11-13T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Silicon Valley claims to know the future. So why did it get the midterms so wrong? —Aaron Zamost, a tech communications consultant and a former executive at Square The self-styled visionaries…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "More autonomy, fewer NDAs: Volunteers have new requests for brain implant trials",
     "published": "2026-11-13T10:00:00+00:00",
     "summary": "Scientists have been working on ways to decode brain activity for decades. Teams have developed brain implants that can be used to control robotic limbs and computers, and even to “speak.” The people who volunteer for trials of those devices play a vital role in that research, and they ought to be recognized for their…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "Silicon Valley claims to know the future. So why did it get the midterms so wrong?",
     "published": "2026-11-13T10:00:00+00:00",
     "summary": "The self-styled visionaries of Silicon Valley, leaders like OpenAI chief executive Sam Altman and SpaceX boss Elon Musk, have built careers claiming to see the future. Long-term vision is currency: Meta’s Mark Zuckerberg built a 10-year road map for Facebook in 2016, and Google famously told investors before its public offering that it was unconcerned…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Nvidia privately confirmed it could track chips to fight smuggling, even as industry publicly questioned feasibility",
     "published": "2026-11-12T20:16:24+00:00",
     "summary": "Representatives from Nvidia told Illinois representative Bill Foster that it would be technically possible to implement the anti-smuggling measures called for in the Chip Security Act, Foster told MIT Technology Review in an interview on Thursday, even while an industry group claimed they were “potentially infeasible.” Foster, a Democrat who serves on the Committee on…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: COP31’s climate challenge and the quest for immortality",
     "published": "2026-11-12T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. What to know about this year’s UN climate talks Thousands of delegates, lobbyists, and journalists have gathered in Antalya, Turkey, for COP31, the annual UN climate talks. But this year’s negotiations…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "What to know about this year’s UN climate talks",
     "published": "2026-11-11T17:00:00+00:00",
     "summary": "It’s that time of year again: Thousands of delegates, lobbyists, and journalists are gathered for the annual UN climate talks, taking place this time in Antalya, Turkey. COP31 officially kicked off on November 8, marking the beginning of negotiations on one of the biggest stages of the climate world. Turkey and Australia are cohosting this…"
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: preserving minds and weighing open AI risks",
     "published": "2026-11-11T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Six wild ideas for perpetuating your mind As we age, we forget most of what we’ve experienced, yet there’s still undeniable continuity: At 30, or 50, or 70, you will still…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "datasette-cluster-map 0.19",
     "published": "2026-11-13T23:02:45+00:00",
     "summary": "Release: datasette-cluster-map 0.19 One of the oldest Datasette plugins, and still one of my favorites. It now works with Datasette 1.0a42, and depends on the new datasette-leaflet to ensure OpenStreetMap tiles are requested with a referrer header. Here's a map of power plants owned by California's PG&E , also demonstrating Datasette's recently redesigned facets : Tags: datasette , geospatial , op"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-leaflet 0.3",
     "published": "2026-11-13T22:30:54+00:00",
     "summary": "Release: datasette-leaflet 0.3 OpenStreetMap have a very reasonable policy that hits to their hosted tile server should send a referrer header . Datasette table pages used the Referrer-Policy: no-referrer HTTP header, causing plugins that loaded tiles from OpenStreetMap to violate that policy. datasette-leaflet is the plugin that loads a bundled Leaflet so other Datasette plugins can depend on it."
    },
    {
     "ref": "simon_willison#2",
     "title": "llm-gemini 0.37",
     "published": "2026-11-12T22:55:19+00:00",
     "summary": "Release: llm-gemini 0.37 Google launched Gemini 4 Hydrogen today - the lowest cost member of the Gemini 4 family. It's actually not too far off the price of its much bigger siblings, Carbon and Argon. I'm finding Gemini 4's pricing really confusing. Here's the pricing scheme: Model Dates Input ($/M) Cached input Output Gemini 4 Carbon Through Nov 30, 2026 $2.00 $0.10 $10.00 From Dec 1, 2026 $4.00 "
    },
    {
     "ref": "simon_willison#3",
     "title": "Gemini Decisions API",
     "published": "2026-11-11T22:03:25+00:00",
     "summary": "Gemini Decisions API Google join Jev and OpenAI in the decision model category with \"Gemini Decision 1\". This new model API is almost identical to Jev: it supports the same three types of questions (yes/no, choice, and rubric-scoring) and even reuses Jev's term \"Noul\" for a yes/no question. It's priced the same as the GPT-6 Luna decision model: 10 cents per million input tokens, and output is free"
    },
    {
     "ref": "simon_willison#4",
     "title": "aws-emulator",
     "published": "2026-11-11T21:18:30+00:00",
     "summary": "aws-emulator Finally, an official emulator from AWS to run tests against a local clone of their many different services without having to provision a paid API key to do so. It's written in Rust by a huge swarm of agents - 29,684 commits in the first three weeks of the project. Swaminathan (Swami) Sivasubramanian wrote about how it came to be in a guest post on Werner Vogels' blog. It currently req"
    },
    {
     "ref": "simon_willison#5",
     "title": "Browse tools.simonwillison.net by tag",
     "published": "2026-11-11T18:42:50+00:00",
     "summary": "Browse tools.simonwillison.net by tag I've been wanting a better way to browse my collection of vibe-coded tools (244 and counting) for a while. I had a few Fable 5.2 credits left over before my weekly reset so I set it to work using tree-sitter to analyze the code for JavaScript APIs, libraries, and web API hosts used by each tool. The homepage now features tag clouds for browsing by each of thos"
    },
    {
     "ref": "simon_willison#6",
     "title": "llm 0.37.2",
     "published": "2026-11-11T17:19:52+00:00",
     "summary": "Release: llm 0.37.2 Fixes a security issue reported by Daniel de Araujo in GHSA-v9h7-jj4g-f862 and GHSA-r639-rr7r-x72w . LLM has a mechanism called extra-openai-models.yaml - now managed by the new-in-0.37 llm openai endpoint add command - for using LLM with OpenAI-compatible API endpoints from other providers. Daniel reported two ways this could accidentally send your configured OpenAI API key to"
    },
    {
     "ref": "simon_willison#7",
     "title": "Anthropic's IPO roadshow video",
     "published": "2026-11-11T15:11:59+00:00",
     "summary": "Anthropic's IPO roadshow video Anthropic kicked off their IPO roadshow yesterday, and their roadshow video has some previously unreleased information about how their business works. The section on \"Approach to compute\" with co-founder Tom Brown is particularly interesting, describing how Anthropic train and serve Claude across AWS Trainium, Google TPUs, NVIDIA GPUs, and AMD GPUs. I'm not sure why "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "FAA lifts nationwide ground stop that blocked takeoffs for hours",
     "published": "2026-11-14T01:53:04+00:00",
     "summary": "Takeoffs from airports throughout the US largely stopped on Friday after the FAA issued a national ground stop at 3:44PM ET \"due to extraordinary circumstances and for reasons of safety.\" More than four hours after the stop was issued, officials announced it was lifted at 8:15PM ET and that flights will resume. It's unclear how […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Amazon has a plan to index the world’s online shopping data",
     "published": "2026-11-13T23:49:11+00:00",
     "summary": "Amazon has plans to build a vault of data on every product sold anywhere on the internet, even products Amazon doesn't sell, and make the information available through its own site, according to Reuters. The project, called the \"World Product Graph,\" is meant to make it less likely that shoppers leave Amazon to do their […]"
    },
    {
     "ref": "the_verge#2",
     "title": "ChatGPT Wallet lets OpenAI’s Dots agents make purchases for you",
     "published": "2026-11-13T20:45:10+00:00",
     "summary": "After launching its Dots AI agents platform earlier this year, OpenAI is launching a wallet for the agents. ChatGPT Wallet is rolling out starting today for ChatGPT Pro subscribers in the US aged 18 and older using a US billing address and \"eligible US-issued American Express, Chase, Mastercard and Visa cards.\" After adding a card […]"
    },
    {
     "ref": "the_verge#3",
     "title": "CMF’s milk carton-shaped Bluetooth speaker is down to a new low price",
     "published": "2026-11-13T20:30:00+00:00",
     "summary": "Bluetooth speakers are often boring boxes in plain colors, but not this one! As part of Nothing’s ongoing early Black Friday promo, you can grab its unique, milk carton-shaped CMF Speaker S from Amazon and Nothing for just $39. That’s a solid $20 discount and the lowest price we’ve seen on Nothing’s newfangled wireless speaker, […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Here’s how you can save on your GTA VI preorder ahead of launch",
     "published": "2026-11-13T19:14:38+00:00",
     "summary": "The long-awaited launch of GTA VI is around the corner, happening next Friday, November 19th. While discounts on the game itself will be rare for some time, there’s a clever workaround to save you a few bucks on your digital copy. We found discounts on gift cards for both Sony PlayStation and Microsoft Xbox Series […]"
    },
    {
     "ref": "the_verge#5",
     "title": "You can adjust the position of the trackball on Keychron’s new wireless mouse",
     "published": "2026-11-13T18:10:41+00:00",
     "summary": "The Nape Pro was Keychron's first trackball device that was introduced at CES 2026 with a slim and compact design allowing it to be positioned right up against a keyboard. The company's new T1 HE instead looks more like other trackball mice already available from companies like Logitech and Kensington with a 34mm ball positioned […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Jensen Huang was reckless with the environment, too",
     "published": "2026-11-13T17:44:22+00:00",
     "summary": "Under cofounder Jensen Huang, Nvidia has become the engine for the AI boom - and one of the tech industry's biggest environmental liabilities. Its sought-after chips have triggered a new wave of water- and chemical-intensive factories, drained power grids from inside massive data centers, and set the stage for a looming e-waste problem. Under Huang's […]"
    },
    {
     "ref": "the_verge#7",
     "title": "The smallest version of Camp Snap’s retro digital camcorder fits on your keychain",
     "published": "2026-11-13T17:12:56+00:00",
     "summary": "Last week, Camp Snap launched a miniaturized version of its screen-free CS-8 video camera that was half the size of the original with a smaller grip designed to be easier for kids to hold. But it turns out the company wasn't done shrinking its hardware. Camp Snap's new CS-8 Micro is even smaller than the […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The new Apple TV has a YouTube problem",
     "published": "2026-11-13T16:55:57+00:00",
     "summary": "People who received the brand new Apple TV 4k today saw some strange error messages as soon as they opened the YouTube app. As the first units arrived, the app was initially only showing a black screen with a QR code and an error message saying \"YouTube is not yet available on this device.\" In […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Microsoft’s massive Outlook outage might be over",
     "published": "2026-11-13T16:17:11+00:00",
     "summary": "Service is recovering for Microsoft Outlook and 365 after an almost two-day outage impacting millions of users around the world. While some apps and features are still running in a degraded state on Friday morning, some people (including Verge staffers) reported that access to their emails had been restored, though the flow of Outlook mail […]"
    }
   ]
  }
 ]
}
</input>