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
     "title": "How to tell a cyberattack from a plain old outage",
     "published": "2026-11-19T11:13:01+00:00",
     "summary": "When everything goes down, don’t assume it’s a cyberattack."
    },
    {
     "ref": "ars_technica#1",
     "title": "Ted Cruz-led committee approves Trump FCC nominee 15-0 as Democrats boycott vote",
     "published": "2026-11-18T23:25:04+00:00",
     "summary": "Democrats try to prevent quorum, say Thumann lied about not working on media issues."
    },
    {
     "ref": "ars_technica#2",
     "title": "Ukraine blew up Putin’s bridge using relay drones to bypass Starlink limits",
     "published": "2026-11-18T23:10:39+00:00",
     "summary": "Ukraine's strike used homegrown tech while adapting battlefield lessons from its adversary."
    },
    {
     "ref": "ars_technica#3",
     "title": "Trump abandons his FDA nominee, and Senate scraps vote on his NSF pick",
     "published": "2026-11-18T22:08:57+00:00",
     "summary": "\"This time requires leadership and fortitude,\" Senator Bill Cassidy said."
    },
    {
     "ref": "ars_technica#4",
     "title": "Netflix CEO admits app may bury stuff you want to watch under stuff you don’t",
     "published": "2026-11-18T21:29:24+00:00",
     "summary": "CEO Ted Sarandos discusses gaps in making hit shows that streamers can find."
    },
    {
     "ref": "ars_technica#5",
     "title": "Windows Server 2028 trades compatibility for out-of-the-box security",
     "published": "2026-11-18T20:41:12+00:00",
     "summary": "Hardened defaults align with DoD standards, but there may be growing pains."
    },
    {
     "ref": "ars_technica#6",
     "title": "Best Buy sells Blu-rays online and in-store again",
     "published": "2026-11-18T19:31:17+00:00",
     "summary": "Popular titles like The Odyssey are being “sold & shipped by Best Buy.\""
    },
    {
     "ref": "ars_technica#7",
     "title": "Muse privacy invasions are freaking out Meta staffers, internal chats show",
     "published": "2026-11-18T19:19:33+00:00",
     "summary": "Erratic Muse outputs sharing random bank, bitcoin balances aren’t real, Meta says."
    },
    {
     "ref": "ars_technica#8",
     "title": "Trump admin orders Kalshi to halt wagers on what words Trump will say",
     "published": "2026-11-18T18:46:08+00:00",
     "summary": "CFTC: Kalshi bets may violate US ban on contracts that can be easily manipulated."
    },
    {
     "ref": "ars_technica#9",
     "title": "The \"shameful\" measles data that lost the US its elimination status",
     "published": "2026-11-18T18:30:23+00:00",
     "summary": "Measles became endemic in the US months ago—and it's only accelerating."
    },
    {
     "ref": "ars_technica#10",
     "title": "Will Wright's next simulation will use AI to mine content from your memories",
     "published": "2026-11-18T18:10:33+00:00",
     "summary": "With MyMems , Wright says he wants to \"turn the simulation inward.\""
    },
    {
     "ref": "ars_technica#11",
     "title": "It shouldn’t be this easy to pedal 25 mph: Specialized’s Turbo Vado 3 Evo",
     "published": "2026-11-18T17:53:59+00:00",
     "summary": "This commuter bike will have you blazing through streets without any range anxiety."
    },
    {
     "ref": "ars_technica#12",
     "title": "Vulcan failure caused by inadequate fuel supply to engines, ULA says",
     "published": "2026-11-18T16:58:32+00:00",
     "summary": "\"ULA is a valued partner, and we look forward to Vulcan's return to flight.\""
    },
    {
     "ref": "ars_technica#13",
     "title": "Waymo has stopped its robotaxis from driving on the freeway—here’s why",
     "published": "2026-11-18T16:24:34+00:00",
     "summary": "Robotaxis already had to be recalled in May after they entered highway construction zones."
    },
    {
     "ref": "ars_technica#14",
     "title": "Tesla’s $30,000 Cybercab comes with a $299 monthly catch",
     "published": "2026-11-18T14:01:45+00:00",
     "summary": "Tesla can restrict where Cybercabs drive and even block owners from reselling them."
    },
    {
     "ref": "ars_technica#15",
     "title": "Voyager 1 at one light-day: Historian revisits Golden Record's forgotten details",
     "published": "2026-11-18T12:15:44+00:00",
     "summary": "\"They are pretty confident that it's going to last a long, long, long time...\""
    },
    {
     "ref": "ars_technica#16",
     "title": "Grand Theft Auto VI: The Ars Technica review",
     "published": "2026-11-18T11:00:27+00:00",
     "summary": "Jason and Lucia's crime-heavy love story fuels a wonder of digital urban simulation."
    },
    {
     "ref": "ars_technica#17",
     "title": "Copilot is \"the new OS for work,\" and now Office runs inside of it",
     "published": "2026-11-18T00:27:29+00:00",
     "summary": "Word, Excel, and PowerPoint now live inside Copilot; always-on agents are next."
    },
    {
     "ref": "ars_technica#18",
     "title": "San Diego dumps both Flock cameras and smart streetlights",
     "published": "2026-11-17T23:09:09+00:00",
     "summary": "500+ cameras will go dark just 3 years after mayor urged approval."
    },
    {
     "ref": "ars_technica#19",
     "title": "Yet another satellite company is jockeying for a rocket—but this one makes sense",
     "published": "2026-11-17T22:44:46+00:00",
     "summary": "\"Governments need control of their critical space infrastructure, and Europe needs it most.\""
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר",
     "published": "2026-11-19T09:35:10+00:00",
     "summary": "בחודש אוקטובר האחרון, מיקרוסופט הטילה פצצה בעולם הטכנולוגיה כשהציעה ל-60 אלף עובדים – כמעט 30% מסך העובדים בחברה – להתפטר במסגרת של חבילות פרישה מרצון. על פניו זה הריח כמו גל פיטורים שקט, כמעט מנומס של החברה, אבל עכשיו המנכ\"ל סאטיה נאדלה מסביר את המהלך. אמ;לק: זה ה-AI, אבל לא בקטע של \"הרובוטים מחליפים אותנו\", […] The post מנכ\"ל מיקרוסופט מסביר למה הציע ל-60 אלף עובדים להתפטר appeared first on גיקט"
    },
    {
     "ref": "geektime#1",
     "title": "בפעם השנייה השנה: Tipalti מפטרת עשרות עובדים בישראל",
     "published": "2026-11-19T08:43:54+00:00",
     "summary": "סבב קיצוצים נוסף בחברת הפינטק הישראלית Tipalti: במסגרת המהלך צפויה החברה לקצץ קרוב ל-25% מכוח האדם שלה בעולם, כשעשרות עובדים בישראל צפויים לסיים את תפקידם. כיום מעסיקה החברה כ-900 עובדים בעולם וכ-300 מתוכם בישראל. סבב הפיטורים הזה הוא הרביעי של החברה בשנים האחרונות והשני ב-2026. מגמת הקיצוצים החלה ב-2023, אז נפרדה החברה מ-123 עובדים – […] The post בפעם השנייה השנה: Tipalti מפטרת עשרות עובדים בישרא"
    },
    {
     "ref": "geektime#2",
     "title": "גוגל מביאה את מצב האינקוגניטו לחיפוש ה-AI שלה",
     "published": "2026-11-19T07:54:31+00:00",
     "summary": "רוצים לשאול את גוגל משהו אישי או סתם לחפש מידע בלי שהוא ירדוף אחריכם לכל מקום ברשת? עד עכשיו ה-AI של גוגל לא ממש אפשר לכם לעשות את זה, אבל פיצ'ר חדש מנסה להביא את מצב ה-Incognito המוכר (גם אם שנוי במחלוקת) גם לחיפוש ה-AI שלה. האם עכשיו באמת תוכלו לחפש בלי להשאיר עקבות? […] The post גוגל מביאה את מצב האינקוגניטו לחיפוש ה-AI שלה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "הממשלה מקדמת \"ארגז חול\" לסטארטאפים, אבל שכחה 4 דברים בדרך",
     "published": "2026-11-18T14:08:52+00:00",
     "summary": "תחשבו על יזמת שפיתחה מערכת AI שמנתחת אולטרסאונד שאישה בהיריון עושה בבית. או על שלושה מהנדסים שבנו רמזור שמחליט לבד מתי להתחלף לפי מצב התנועה. או על סטארטאפ שרוצה לנסות הסעות משותפות בתשלום ברכב פרטי. לכולם יש אותה בעיה: המוצר עובד, אבל החוק לא מאפשר לנסות אותו. לא כי מישהו קבע שזה מסוכן, אלא כי […] The post הממשלה מקדמת \"ארגז חול\" לסטארטאפים, אבל שכחה 4 דברים בדרך appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#4",
     "title": "\"זה מקצוע חדש בפני עצמו\": יוצאי 8200 גייסו 11 מיליון דולר",
     "published": "2026-11-18T13:00:54+00:00",
     "summary": "\"AI Security היא לא בעיית אבטחה ישנה שעברה לדומיין חדש. זה מקצוע חדש בפני עצמו\", אומר בשיחה עם גיקטיים אלעד טסלר – מנכ\"ל ומייסד של הסטארטאפ Vero Security. לדבריו, ה-AI משנה את הדרך שבה תוכנה נבנית, פועלת ומתקשרת עם מערכות אחרות, וכל תעשיית התוכנה ממציאה את עצמה מחדש סביבו. ובגלל כל השינויים הללו, צוותי אבטחה […] The post \"זה מקצוע חדש בפני עצמו\": יוצאי 8200 גייסו 11 מיליון דולר appeared first on ג"
    },
    {
     "ref": "geektime#5",
     "title": "הביקורות הראשונות של GTA 6 התפרסמו: הנה מה שחושבים המבקרים",
     "published": "2026-11-18T12:33:10+00:00",
     "summary": "לפני זמן קצר זה קרה. השעון הראה חצות בניו זילנד, והמדינה הראשונה בעולם החלה לשחק במשחק המצופה ביותר של העשור האחרון, Grand Theft Auto VI. בעוד שעות ספורות גם הישראלים יצטרפו לחגיגה (בלילה שבין רביעי לחמישי), אבל אם אתם לא יכולים להתאפק, הביקורות הראשונות למשחק כבר שוחררו. אמ;לק: נראה שההמתנה השתלמה. הוושינגטון פוסט: \"המגנום אופוס […] The post הביקורות הראשונות של GTA 6 התפרסמו: הנה מה שחושבים המבק"
    },
    {
     "ref": "geektime#6",
     "title": "הנה שיטה קלה לבדוק אם אתם משלמים יותר מדי על ג'ירה, קונפלואנס ושות'",
     "published": "2026-11-18T11:39:41+00:00",
     "summary": "מאת נעמה ויסבורט בטח גם אצלכם זה קרה: הארגון רכש עוד מערכת יקרה שאמורה לייעל את עבודת הצוות, אבל היא הפכה למפלצת של Workflows מורכבים ושדות חובה אינסופיים – והיום לאף אחד אין מושג מה השתפר בפועל וכמה זה שווה. ארגונים משקיעים המון כסף בכלי AI כדי לעבוד מהר וחכם יותר. בעולם שבו מערכות כגון […] The post הנה שיטה קלה לבדוק אם אתם משלמים יותר מדי על ג'ירה, קונפלואנס ושות' appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#7",
     "title": "אירוע בהזמנה בלבד: כך תתגוננו מפני מתקפות AI עם הכלים של Google Cloud",
     "published": "2026-11-18T09:33:03+00:00",
     "summary": "כשמדברים על הגנת סייבר, סוכני AI הם גם הבעיה וגם הפתרון: תוקפים משתמשים בהם כדי לייצר מתקפות פישינג משכנעות בעברית מושלמת, לזייף קולות של מנהלים, לסרוק חולשות בקנה מידה עצום ולהריץ קמפיינים שפעם דרשו צוות שלם. באותו זמן, הארגונים עצמם מכניסים AI לכל פינה: עוזרים חכמים לעובדים, סוכנים אוטונומיים שמבצעים פעולות במערכות הליבה ומודלים שנוגעים […] The post אירוע בהזמנה בלבד: כך תתגוננו מפני מתקפות AI ע"
    },
    {
     "ref": "geektime#8",
     "title": "גוגל הופכת את הסוכנים שלה לחינמיים",
     "published": "2026-11-18T08:55:38+00:00",
     "summary": "בא לכם עוזר אישי שמתקשר למוסך, בודק למה חשבון החשמל שלכם קפץ לשמיים וגם קונה לכם קורנפלקס על הדרך? גוגל לוקחת את סוכן ה-AI שלה צעד אחד קדימה, משנה לו את השם, והכי חשוב: פותחת אותו לכולם לגמרי בחינם. הנה כל מה שאתם צריכים לדעת על המהלך החדש שמאיים לבלוע את המתחרות כמו אינסטינקט, Muse של […] The post גוגל הופכת את הסוכנים שלה לחינמיים appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#9",
     "title": "ה-AI של מטא חסם את ה-AI של מטא, אז הוא תבע אותה",
     "published": "2026-11-18T08:21:40+00:00",
     "summary": "אחרי שנים שמארק צוקרברג ומטא נותרו מאחור במירוץ ה-AI, נראה שכל המיליארדים עשו את שלהם, והחברה גילתה את עצמה מחדש עם Muse, סוכן ה-AI של החברה שכבר הגיע ללא מעט משתמשים תוך זמן קצר. אבל עכשיו נראה ש-Muse כל כך מוצלח במה שהוא עושה, שהוא עוזר למישהו לתבוע את… מטא. כשמטא חושדת בסוכן של עצמה […] The post ה-AI של מטא חסם את ה-AI של מטא, אז הוא תבע אותה appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#10",
     "title": "בזמן שישנתם: חולשת אבטחה קריטית ב-Java. לכו לעדכן",
     "published": "2026-11-18T06:46:22+00:00",
     "summary": "זוכרים את Log4j? התגעגעתם? אה לא? ובכן, חבל. תגידו שלום ל-Java4Shell, חולשת אבטחה קריטית (CVE-2026-114938) במפענח ה-Base64 של OpenJDK. על פי חוקרי חברת Calif, שגילו את החולשה, היא מאפשרת הרצת קוד מרחוק ללא צורך באימות על שרתים עם מעבדי x86-64 שתומכים ב-AVX-512. המערכות הפגיעות כוללות כלים פופולריים בחברות טק כמו Jira ו-Jenkins שמריצים Java 17 […] The post בזמן שישנתם: חולשת אבטחה קריטית ב-Java. לכ"
    },
    {
     "ref": "geektime#11",
     "title": "תקלה רחבה בשירותי אפל: App Store ו-iCloud קרסו",
     "published": "2026-11-17T20:33:10+00:00",
     "summary": "זה לא רק אצלכם. משתמשי אפל בכל העולם דיווחו בשעות האחרונות על שיבושים נרחבים במספר שירותים מרכזיים של החברה. על פי עמוד הסטטוס של אפל, נרשמו השבתות מלאות ב-App Store לצד תקלות ביישומי הרשת ובעיות בהתחברות לשירותי iCloud ול-AppleCare. בנוסף, התלוננו משתמשים על שיבושים ברשת Find My וכן ב-iCloud‌ Mail, ‌iCloud‌ Calendar ו-iCloud‌ Contacts. התקלות […] The post תקלה רחבה בשירותי אפל: App Store ו-iCloud"
    },
    {
     "ref": "geektime#12",
     "title": "בלי טובות מגוגל או אפל: עכשיו וואטסאפ מאפשרת לכם לגבות שיחות אצלה",
     "published": "2026-11-17T16:40:35+00:00",
     "summary": "אם נשים רגע בצד את התמונות שאתם מצלמים בטלפון, סביר להניח שאת מירב נפח האחסון בגיבוי בענן שלכם תופס בכלל הגיבוי של וואטסאפ. בכל זאת, כל ההתכתבויות, וגם התמונות והסרטונים שלנו נמצאים שם. אבל עכשיו נראה שבמטא רוצים לשחרר אתכם מהתלות בשירותי האחסון של גוגל ואפל כדי לגבות את השיחות שלכם. אז איך זה יעבוד […] The post בלי טובות מגוגל או אפל: עכשיו וואטסאפ מאפשרת לכם לגבות שיחות אצלה appeared first on גי"
    },
    {
     "ref": "geektime#13",
     "title": "חברת MongoDB רוכשת את הסטארטאפ הישראלי Firebolt",
     "published": "2026-11-17T15:10:40+00:00",
     "summary": "ענקית הדאטה האמריקאית MongoDB הודיעה היום (ג') כי תרכוש את הסטארטאפ הישראלי Firebolt, שמפתח מנוע לעיבוד דאטה עצום בזמן אמת. החברה האמריקאית נסחרת היום סביב שווי של כ-25 מיליארד דולר וזו הרכישה הראשונה שלה בישראל. בתגובה לרכישה אמר פרד רומא, סמנכ\"ל ההנדסה ב-MongoDB ש\"מנוע האנליטיקה של Firebolt הוכח בשטח\". מושה פסומנסקי, סמנכ\"ל הטכנולוגיות של Firebolt, […] The post חברת MongoDB רוכשת את הסטארטאפ היש"
    },
    {
     "ref": "geektime#14",
     "title": "סטארטאפ ישראלי שנחשף היום טוען: \"משרדי היח\"צ ברובם ימותו\"",
     "published": "2026-11-17T14:00:01+00:00",
     "summary": "יזמים רבים שמצליחים לגייס הון או להשיק מוצר או פיצ'ר חדש, חושבים שזו היתה העבודה הקשה. אבל אז, כשהם רוצים גם שכולם ידעו על זה, הם מגלים שגם זו משימה לא פשוטה, ואז הם נדרשים לעבוד עם משרדי יח\"צ עם דרישות, פגישות וכמובן ריטיינר כבד. אבל מה אם אפשר היה להחליף את כל האופרציה הזו […] The post סטארטאפ ישראלי שנחשף היום טוען: \"משרדי היח\"צ ברובם ימותו\" appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#15",
     "title": "124 מיליון דולר לסטארטאפ הישראלי שיאפשר להציב דאטה סנטרים בחלל",
     "published": "2026-11-17T13:00:43+00:00",
     "summary": "בשנים האחרונות, עם הקשיים בהן נתקלות חברות ה-AI הגדולות, החל להתפתח הרעיון של הצבת דאטה סנטרים ולוויינים מיוחדים בחלל. אחד הסטארטאפים הישראלים הוותיקים בתחום הזה הוא Ramon.Space, שמפתח שבבים שיכולים לספק ביצועים של מערכות מחשוב על הקרקע – אבל בתנאים הבלתי אפשריים של החלל. היום (ג') הוא מכריז על מגה-גיוס מרשים. האם SpaceX כבר לקוחה? […] The post 124 מיליון דולר לסטארטאפ הישראלי שיאפשר להציב דאטה סנ"
    },
    {
     "ref": "geektime#16",
     "title": "ההנפקה השבוע של אנת'רופיק תהפוך יותר מ-4,000 עובדים למיליונרים",
     "published": "2026-11-17T12:24:02+00:00",
     "summary": "אנת'רופיק, החברה שעומדת מאחורי Claude, צפויה לצאת להנפקה ביום חמישי הקרוב (תחת הסימול ANT) לפי שווי שיכול להגיע לעד 1.4 טריליון דולר. המשמעות עבור 5,300 עובדי החברה? חבילות המניות והאופציות שלהם צפויות לקבל שווי שוק, ויהפכו לכסף נזיל בהדרגה בשווי אסטרונומי של כ-216 מיליארד דולר. ממוצע של 41 מיליון דולר לעובד, אבל חלק גם יקבלו […] The post ההנפקה השבוע של אנת'רופיק תהפוך יותר מ-4,000 עובדים למיליונ"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "15M web servers on one VM – smoltcp, DPDK, AF_XDP",
     "published": "2026-11-19T05:56:36+00:00",
     "summary": "Article URL: https://kapteko.com/15-million-webservers/ Comments URL: https://news.ycombinator.com/item?id=50556533 Points: 170 # Comments: 22"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Ruby2ßhell: Pre-authentication RCE on stock Rails",
     "published": "2026-11-19T05:09:11+00:00",
     "summary": "Article URL: https://verialabs.com/ruby2shell/ Comments URL: https://news.ycombinator.com/item?id=50556287 Points: 150 # Comments: 52"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "We need smart people who give a shit",
     "published": "2026-11-18T23:53:49+00:00",
     "summary": "Article URL: https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/ Comments URL: https://news.ycombinator.com/item?id=50554045 Points: 633 # Comments: 315"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Multiple vulnerabilities in Regexp and String case conversion",
     "published": "2026-11-18T23:52:50+00:00",
     "summary": "Article URL: https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/ Comments URL: https://news.ycombinator.com/item?id=50554038 Points: 278 # Comments: 93"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Anthropic prices initial public offering",
     "published": "2026-11-18T23:30:09+00:00",
     "summary": "Article URL: https://www.anthropic.com/news/anthropic-prices-initial-public-offering Comments URL: https://news.ycombinator.com/item?id=50553843 Points: 247 # Comments: 423"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "LLM assisted reverse engineering",
     "published": "2026-11-18T22:29:13+00:00",
     "summary": "Article URL: https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering Comments URL: https://news.ycombinator.com/item?id=50553225 Points: 223 # Comments: 56"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Gemini 4 Neon",
     "published": "2026-11-18T21:34:07+00:00",
     "summary": "Article URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/ Comments URL: https://news.ycombinator.com/item?id=50552424 Points: 850 # Comments: 679"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "DaisyRose-27B",
     "published": "2026-11-18T19:39:16+00:00",
     "summary": "Article URL: https://www.radixark.com/blog/daisyrose-27b Comments URL: https://news.ycombinator.com/item?id=50551046 Points: 219 # Comments: 78"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Genie 4 is now available",
     "published": "2026-11-18T18:49:51+00:00",
     "summary": "Article URL: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/ Comments URL: https://news.ycombinator.com/item?id=50550415 Points: 261 # Comments: 169"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Show HN: Take Voyager 1 apart, down to a single memory chip",
     "published": "2026-11-18T16:18:51+00:00",
     "summary": "Voyager 1 reached one light-day from Earth today. On the site you can: - see where both Voyagers are right now - open a nuclear battery to its 24 plutonium spheres - go into the data computer, down to a single memory chip - see how the Golden Record's cover explains how to play it - watch how Voyager 1 was fixed by radio - see which dish on Earth is listening to them, live I also made a 4-minute f"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Seven new models at scalable price-performance",
     "published": "2026-11-18T16:08:24+00:00",
     "summary": "Article URL: https://microsoft.ai/news/microsoft-ignite-2026/ Comments URL: https://news.ycombinator.com/item?id=50548021 Points: 544 # Comments: 355"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Show HN: ExitPath – Open-source ways out of Slack, Notion and Microsoft 365",
     "published": "2026-11-18T16:04:43+00:00",
     "summary": "Article URL: https://exitpath-ruddy.vercel.app/ Comments URL: https://news.ycombinator.com/item?id=50547980 Points: 220 # Comments: 73"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "Inside Deutsche Bank",
     "published": "2026-11-18T15:38:33+00:00",
     "summary": "Article URL: https://www.inside-db.com/ Comments URL: https://news.ycombinator.com/item?id=50547620 Points: 704 # Comments: 240"
    },
    {
     "ref": "hn_frontpage#13",
     "title": "F-22 Next-Generation micro–Data Transfer Cartridge (mDTC)",
     "published": "2026-11-18T15:35:44+00:00",
     "summary": "Article URL: https://sam.gov/workspace/contract/opp/8948e8601e964c6aba9c801eee16b1be/view Comments URL: https://news.ycombinator.com/item?id=50547583 Points: 183 # Comments: 118"
    },
    {
     "ref": "hn_frontpage#14",
     "title": "Unauthenticated remote code execution in Nginx",
     "published": "2026-11-18T15:19:55+00:00",
     "summary": "https://www.cve.org/CVERecord?id=CVE-2026-123633 https://www.cve.org/CVERecord?id=CVE-2026-123007 Comments URL: https://news.ycombinator.com/item?id=50547374 Points: 1400 # Comments: 601"
    },
    {
     "ref": "hn_frontpage#15",
     "title": "The Cambridge Dictionary has named ‘human’ as the Word of the Year 2026",
     "published": "2026-11-18T14:43:52+00:00",
     "summary": "Article URL: https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026 Comments URL: https://news.ycombinator.com/item?id=50546914 Points: 280 # Comments: 213"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Build a Personal Brand to Help Employers Find You",
     "published": "2026-11-18T17:33:26+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! In one year, the number of developers working for themselves has more than doubled. Stack Overflow’s annual survey of more than 30,000 developers sho"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "IEEE Celebrates 10 Years of Incorporating Ethics Into AI Systems",
     "published": "2026-11-17T19:00:03+00:00",
     "summary": "Policymakers, technologists, and members of the public have raised concerns about the harm AI’s rapid advancement might cause to society. Their concerns include bias, data privacy violations, the spread of misinformation, and losing control of AI agents. Those issues are relatively new to many people, but the IEEE Standards Association has been working for the past decade on ways to prioritize the"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "AI Is Giving Optical Computing Another Shot",
     "published": "2026-11-17T14:00:03+00:00",
     "summary": "The idea of computing with light has been around for over 70 years, but until recently it’s remained largely in the realm of research. Over the past few years, though, optical computing has emerged as a fast-growing industry: Market valuation of companies in this sector now totals US $2.22 billion, up from $0.4 billion in 2022. One projection suggests that the market will continue to grow exponent"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Understand How Satellite Links Shape IoT Device Design and Testing",
     "published": "2026-11-17T11:00:04+00:00",
     "summary": "How 3GPP Releases 15, 16, and 17 brought satellite access into 5G NR, NB-IoT, and eMTC. Why satellite links suit IoT devices that send small, infrequent, and delay-tolerant messages. Where non-terrestrial networks (NTN) add value, including asset tracking, agriculture, public safety, and offshore operations. How power efficiency, RF signaling, and antenna design shape satellite-connected device de"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Can Robots Bring Stroke Surgery to Remote Hospitals?",
     "published": "2026-11-16T14:00:02+00:00",
     "summary": "I am practicing brain surgery on a patient lying 6 meters away, out of my sight and reach. I press a foot pedal, activating the controller in my hand, and carefully steer a thin flexible tube called a catheter up through the patient’s blood vessels. I head for what I believe to be the brain, tracking my progress on the live X-ray feed. As I imagine finding a blood clot, David Bell , the surgeon se"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "Advanced Metrology for Defect Detection, Tool Health, and Semiconductor Yield Enhancement",
     "published": "2026-11-16T11:00:03+00:00",
     "summary": "In advanced semiconductor manufacturing, small defects can have a large effect on yield. Thin film deposition tools must stay stable and qualified. Process drift must be caught early. When a defect does appear, engineers need to know where it came from and how it affects device performance. This webinar shows how in-line inspection and offline characterization combine into one workflow, from tool "
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "28 Zero-Day Findings in Under Two Days. Is Robotics Security Keeping Pace?",
     "published": "2026-11-16T10:00:01+00:00",
     "summary": "This article is brought to you by VicOne . VicOne identified an initial set of 28 zero-day findings in less than two days using AI-assisted research across software and tools supporting the Physical AI ecosystem. These include projects developed or maintained by Google, NVIDIA, and Meta, among others. Based on initial validation, all 28 findings are classified as zero-day vulnerabilities. The coun"
    },
    {
     "ref": "ieee_spectrum#7",
     "title": "How Microcredentials Can Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    },
    {
     "ref": "ieee_spectrum#8",
     "title": "Engineer Overhead Lines to Withstand Ice, Wind and FreezingRain",
     "published": "2026-11-13T11:00:02+00:00",
     "summary": "This White Paper explains how ice, wind and vegetation load overhead distribution lines at the same time. It shows engineers how to assess the complete line and compare resilience options. What you will learn about: How freezing rain, rime ice and wet snow add weight to conductors and change their shape in the wind. Why a moderate wind on a heavily iced line can govern design, and how galloping an"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The AI Hype Index: AI is everywhere",
     "published": "2026-11-18T14:42:44+00:00",
     "summary": "Like a nasty rash, AI seems to spread everywhere. Google crams AI Overviews down your throat even though it costs the company billions of dollars in lost ad revenue. Leave your apartment, and you might pass two people heaving an AI-powered humanoid robot up the stairs to clean someone’s rooms. Go to the supermarket, and…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The Download: AI learns to smell and hydropower struggles",
     "published": "2026-11-18T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. This smell startup says its AI nose is as good as a human’s In a New Jersey lab, researchers are trying to sniff every odor on Earth. Their careful notes—“nutty,” “peachy,”…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "This smell startup says its AI nose is as good as a human’s",
     "published": "2026-11-18T10:20:30+00:00",
     "summary": "In a lab near Newark Airport in New Jersey, a team of around 30 experienced human sniffers are slowly working their way through every odor on Earth. Their careful notes—“nutty,” “peachy,” “marine”—are cross-referenced with a chemical analysis to create a rich set of training data for what AI startup Osmo calls the world’s first foundation…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Roundtables: Inside the Quest for Cognitive Immortality",
     "published": "2026-11-17T18:46:47+00:00",
     "summary": "Listen to the session or watch below In an effort to reach an elusive continuity of the self, some far-thinking technologists are working on ways to keep your brain going—even beyond death. Science editor Mary Beth Griggs and senior editor for biomedicine Antonio Regalado explore possible paths to keep your mind going, including gradual brain…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "Hydropower hit record lows in the US Southwest this summer",
     "published": "2026-11-17T17:52:10+00:00",
     "summary": "The US Southwest generated 28% less electricity via hydropower between April and August than the 10-year average, according to new data from the US Energy Information Administration. Most hydropower plants in the US rely on dams to hold back water, creating reservoirs. The water can be released through turbines, generating electricity on demand. But an…"
    },
    {
     "ref": "mit_tech_review#5",
     "title": "Research Reports",
     "published": "2026-11-17T14:39:46+00:00",
     "summary": "To access a report, click on the corresponding image below."
    },
    {
     "ref": "mit_tech_review#6",
     "title": "The Download: Jensen Huang’s open-source dilemma and cognitive immortality",
     "published": "2026-11-17T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The open-source movement wants Jensen Huang back A petition to reinstate Jensen Huang as Nvidia CEO has attracted more than 115,000 signatures, including Elon Musk, but comb through the names, and…"
    },
    {
     "ref": "mit_tech_review#7",
     "title": "The open-source movement wants Jensen Huang back",
     "published": "2026-11-16T18:38:47+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. On Friday, a petition to reinstate Jensen Huang as CEO of Nvidia began circulating on social media, and by Monday it listed some notable signatories, including Elon Musk and several influential Nvidia…"
    },
    {
     "ref": "mit_tech_review#8",
     "title": "Building trustworthy AI by fencing it in, not predicting it",
     "published": "2026-11-16T16:04:28+00:00",
     "summary": "In October this year, OpenAI disclosed that two of its AI agents had switched off the systems built to monitor them. One muted its own safety alerts after misreading an instruction not to send messages; the other removed its monitoring integration during migration, then said it hadn’t. No rule had told the agents to do…"
    },
    {
     "ref": "mit_tech_review#9",
     "title": "The Download: testing tech promises and searching for cognitive immortality",
     "published": "2026-11-16T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Are we there yet? Six technologies that promised to change the world How do you measure progress towards the future? In the Impossible issue of MIT Technology Review, our series “Are…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "llm-gemini 0.38",
     "published": "2026-11-18T23:59:20+00:00",
     "summary": "Release: llm-gemini 0.38 Today Google introduced Gemini 4 Neon . I wrote recently about how confusing the pricing for the Gemini 4 series was - Neon has somehow made this even worse. Previously the Gemini 4 lineup was Hydrogen, Argon, and Carbon - where Argon and Carbon were the same price , and Hydrogen was 3/4 of that price now but will be 1/4 of that price when the other two double an 1st Decem"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-arrows 0.1a0",
     "published": "2026-11-18T17:09:59+00:00",
     "summary": "Release: datasette-arrows 0.1a0 Datasette 1.0a43 added the ability for plugins to implement streaming export formats. Datasette core supports streaming CSV and TSV - you can export millions of lines of data from a table without needing to load it all into memory, because those two file formats support streaming data in chunks. The register_output_renderer() plugin hook can now be used to implement"
    },
    {
     "ref": "simon_willison#2",
     "title": "Quoting Daniel Stenberg",
     "published": "2026-11-18T15:58:27+00:00",
     "summary": "During the time these agents converted 185,000 lines of C code into 340,000 lines of Rust code (I counted), we merged over 300 commits in the actual curl project. We actually improved curl during these a little more than three weeks. A little over 200 bugfixes actually. 200 bugfixes that none of those rust rewrites have. We also fixed a few vulnerabilities. In another month we have done another 20"
    },
    {
     "ref": "simon_willison#3",
     "title": "The PSF end-of-year fundraiser",
     "published": "2026-11-18T14:44:48+00:00",
     "summary": "The PSF end-of-year fundraiser With my Python Software Foundation board director hat on: we've launched our end-of-year fundraiser for the non-profit that supports Python development and the Python community. If your company or your work benefits from Python, please consider donating this year! The PSF looks after the IP behind Python, operates PyPI, sponsors core developer sprints, supports commu"
    },
    {
     "ref": "simon_willison#4",
     "title": "External sandboxes for coding agents",
     "published": "2026-11-17T22:52:29+00:00",
     "summary": "External sandboxes for coding agents I've been exploring new ways to sandbox code that is executed by agents, with a focus on making it safer to try out local models without worrying that a mistake or prompt injection attack might cause them to take damaging actions on a machine. I worked on this project with Prime Radiant , the AI research lab behind Superpowers and other projects . My post on th"
    },
    {
     "ref": "simon_willison#5",
     "title": "GPT‑6.2 Astra and GPT‑6.2 Sol",
     "published": "2026-11-17T22:38:52+00:00",
     "summary": "GPT‑6.2 Astra and GPT‑6.2 Sol OpenAI: We’re introducing GPT‑6.2 Astra, our new frontier model for your hardest projects, and GPT‑6.2 Sol, our efficient, versatile model for everyday work. They're available in the API as gpt-6.2-astra and gpt-6.2-sol . I shipped LLM 0.38 with support for the new models. 6.2 Astra is 80% of the price of 6 Astra - $8/MTok input and $40/MTok output, the same price as "
    },
    {
     "ref": "simon_willison#6",
     "title": "Running the full server-side Datasette Python app in the browser with service workers and Pyodide",
     "published": "2026-11-17T16:48:33+00:00",
     "summary": "Datasette Lite is my port of the Datasette Python application to run directly in the browser using WebAssembly and Pyodide . I've released a complete rewrite of Datasette Lite using service workers, and it's now almost indistinguishable from the real server-side application. You can now do all of the following, using a carefully crafted URL to lite.datasette.io : Load client-side Datasette to brow"
    },
    {
     "ref": "simon_willison#7",
     "title": "Quoting Go Proverbs",
     "published": "2026-11-17T06:16:26+00:00",
     "summary": "A little copying is better than a little dependency. — Go Proverbs , via Tags: go , programming"
    },
    {
     "ref": "simon_willison#8",
     "title": "llm 0.37.3",
     "published": "2026-11-16T23:57:26+00:00",
     "summary": "Release: llm 0.37.3 A bug fix release for LLM , mainly to cover a problem with the most recent Homebrew package of the software. Homebrew now ships the latest SQLite, 3.54.1 , which includes a fix that broke LLM's logging code . Short version: in SQLite 3.54.0 the following SQL: select json_object('a', (select json_array(1))) Returns this: {\"a\":[1]} But in 3.54.1 the same query returns this: {\"a\":"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Elon Musk tries to explain what’s going on with Ukraine and Starlink",
     "published": "2026-11-19T01:39:45+00:00",
     "summary": "Elon Musk said Ukrainian president Volodymyr Zelenskyy is lying about disruptions to Starshield in Ukraine and that he's trying to misuse SpaceX's consumer service, Starlink, for military purposes. Musk made the comments at The New York Times' DealBook Summit on Wednesday as he tried to explain the conflict following weeks of back and forth between […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The nation’s largest school districts consider ditching Google Search",
     "published": "2026-11-18T23:18:35+00:00",
     "summary": "New York, Los Angeles, and Chicago schools are considering Google alternatives after the company said it will disable Search for schools that opt out of its AI features, according to The New York Times. Starting next year, schools will not have the option to disable Gemini-powered features without also disabling Search. Chris Phillips, Google's vice […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Democrats skip a vote on adding Brendan Carr’s adviser to the FCC",
     "published": "2026-11-18T22:05:48+00:00",
     "summary": "Senate commerce committee Chair Ted Cruz (R-TX) began a meeting Wednesday meant to confirm President Donald Trump's nominee to the Federal Communications Commission with a lopsided dais. To his right sat all 14 Republican members of the panel, including Senate Majority Leader John Thune (R-SD). To his left were about a dozen empty chairs - […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Absolute Batman can save DC Studios",
     "published": "2026-11-18T21:20:00+00:00",
     "summary": "With James Gunn and Peter Safran out as the co-heads of DC Studios following Skydance's acquisition of Warner Bros. Discovery, it's unclear what will become of the cinematic universe that was building around movies like last year's Superman. Though Gunn's Man of Tomorrow feature might still come out, it seems like his larger vision for […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Trump’s latest land grab is an AI hub in the Philippines",
     "published": "2026-11-18T19:40:36+00:00",
     "summary": "President Donald Trump was greeted by no less than five beauty queens when he landed in the Philippines on Tuesday, according to local news outlet Rappler. As he stepped onto the tarmac, a child handed him small US and Philippine flags. A band played \"YMCA,\" a staple at Trump rallies, as more girls in traditional […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Nvidia’s rise, visualized",
     "published": "2026-11-18T19:30:00+00:00",
     "summary": "If someone handed you $8,300 every second, what would you do? That's how much pure profit Nvidia now makes. By the time you finish reading this paragraph, Nvidia will likely have cleared $45,000 and change. It's easy to look at Nvidia, a company that just lost its visionary founder CEO due to a series of […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Sony’s impressive Bravia 8 II OLED hits a new low price ahead of Black Friday",
     "published": "2026-11-18T19:30:00+00:00",
     "summary": "Black Friday is a great time to save on a new OLED television for your winter movie nights. Though, it turns out that you can already get a great deal on the 65-inch Sony Bravia 8 II, one of our favorite OLED televisions. It’s currently discounted by $1,100 at various retailers, including Amazon, Best Buy, […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Instagram now lets you edit your stories after you post them",
     "published": "2026-11-18T19:29:10+00:00",
     "summary": "Instagram's latest update will allow you to edit your Stories without losing your views, likes, or replies. You can now edit the text, music, stickers, and drawings for up to 15 minutes after sharing your Story, Instagram head Adam Mosseri has announced. Reverse engineer Alessandro Paluzzi first spotted Instagram working on this feature in April, […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The leaked Lenovo Legion Go Beam could be the affordable handheld we need",
     "published": "2026-11-18T19:11:50+00:00",
     "summary": "For a while there, it seemed like Lenovo had given up on selling handheld gaming PCs, hiking the price of its Legion Go 2 and Legion Go S far higher than other RAM-starved competitors. A decent one can easily cost $1,000 if not $2,000 now. But it looks like Lenovo might be about to announce […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Tech lawsuits defined 2026 — and lawmakers want more",
     "published": "2026-11-18T19:07:29+00:00",
     "summary": "With just a few weeks remaining, lawmakers are trying to pass new protections for victims of online harm before the end of 2026, targeting deepfake creators and online platforms that block users from filing lawsuits. On Tuesday, members of a Senate Judiciary subcommittee hosted a hearing calling for the end of forced arbitration for online […]"
    }
   ]
  }
 ]
}
</input>