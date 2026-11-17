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
     "title": "Robo-soldier startup backed by Eric Trump misses payroll, may collapse",
     "published": "2026-11-16T22:58:27+00:00",
     "summary": "Robotics startup misses payroll a year after CEO used funds for luxury home."
    },
    {
     "ref": "ars_technica#1",
     "title": "Three small failures combined to take down Microsoft 365",
     "published": "2026-11-16T21:56:39+00:00",
     "summary": "A hidden bug, shifting traffic, and reduced capacity led to cascading failures."
    },
    {
     "ref": "ars_technica#2",
     "title": "Hyperscale data centers use 2% of US electricity",
     "published": "2026-11-16T20:52:10+00:00",
     "summary": "Study attempts to tally hyperscalers’ energy use and emissions."
    },
    {
     "ref": "ars_technica#3",
     "title": "Shareholders sue Intel, its CEO, and CFO after stock drops 28.6 percent in one day",
     "published": "2026-11-16T20:37:47+00:00",
     "summary": "The PC sales slump \"more than offset” AI boom gains, shareholders say."
    },
    {
     "ref": "ars_technica#4",
     "title": "Comcast's \"fiber-powered Wi-Fi\" is just cable, AT&T says in false advertising case",
     "published": "2026-11-16T20:27:58+00:00",
     "summary": "AT&T demands Comcast give AT&T profits it made from advertising cable as fiber."
    },
    {
     "ref": "ars_technica#5",
     "title": "Supreme Court keeps injunction against DEI grant defunding in place",
     "published": "2026-11-16T19:54:21+00:00",
     "summary": "Appeals court ruling rejected grant cancellations on First Amendment grounds."
    },
    {
     "ref": "ars_technica#6",
     "title": "When will humans actually fly on Starship?",
     "published": "2026-11-16T19:46:08+00:00",
     "summary": "All estimates of human spaceflight on Starship should be taken with a gigantic grain of salt."
    },
    {
     "ref": "ars_technica#7",
     "title": "Meet the new James Bond: Robert Pattinson",
     "published": "2026-11-16T19:36:25+00:00",
     "summary": "Producers cite \"his fearlessness as an actor, his self-deprecating wit\" and continual reinvention as factors."
    },
    {
     "ref": "ars_technica#8",
     "title": "US moves to cut China’s remote access to AI chips",
     "published": "2026-11-16T19:10:09+00:00",
     "summary": "Trump bets China won’t mind US blocking remote access to AI chips."
    },
    {
     "ref": "ars_technica#9",
     "title": "US now \"comfortable\" with children dying of measles as death toll hits 10",
     "published": "2026-11-16T16:39:29+00:00",
     "summary": "International authorities will announce US lost its elimination status Tuesday."
    },
    {
     "ref": "ars_technica#10",
     "title": "Jensen Huang allies build a \"war room\" to get him back at Nvidia",
     "published": "2026-11-16T14:06:16+00:00",
     "summary": "Huang is weighing a return just days after resigning amid a deepening scandal."
    },
    {
     "ref": "ars_technica#11",
     "title": "Mercedes' clever new driving assist handles complex traffic like a champ",
     "published": "2026-11-16T14:00:05+00:00",
     "summary": "The point-to-point driver assist is coming to the US and Germany in 2027."
    },
    {
     "ref": "ars_technica#12",
     "title": "Delivery drones are coming. For some with PTSD, that's a terrifying prospect.",
     "published": "2026-11-16T12:00:57+00:00",
     "summary": "For those who have lived under armed drones, the sound overhead can be distressing."
    },
    {
     "ref": "ars_technica#13",
     "title": "Vulcan rocket fails during launch, dealing major blow to SpaceX competitors",
     "published": "2026-11-15T23:11:54+00:00",
     "summary": "This was the first total mission failure in United Launch Alliance's 20-year history."
    },
    {
     "ref": "ars_technica#14",
     "title": "How the world’s fires changed while humanity hit pause",
     "published": "2026-11-15T12:07:34+00:00",
     "summary": "COVID-19 lockdowns cut global fire activity by 12.3 percent."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "פעם ראשונה בלי ג'נסן: NVIDIA חושפת את המעבדים המפלצתיים החדשים שלה",
     "published": "2026-11-16T16:00:54+00:00",
     "summary": "השבוע האחרון ייזכר כנראה כאחד השבועות השחורים והסוערים בתולדות NVIDIA. בין פרשיית הריגול המביכה, הבגידה והרומן מחוץ לנישואין, ורעידת האדמה עם התפטרותו של המנכ\"ל והמייסד האגדי ג'נסן הואנג, אפשר היה לחשוב שהחברה תוריד פרופיל. אבל בכנס SC26 שנערך היום (ב') בשיקגו, נראה שענקית השבבים מנסה לשדר שההצגה חייבת להימשך והיא מציגה צ'יפים חדשים. \"סימולציה מהירה […] The post פעם ראשונה בלי ג'נסן: NVIDIA חושפת "
    },
    {
     "ref": "geektime#1",
     "title": "הגארדיאן: ישראל העלתה מיליוני תמונות של פלסטינים למערכת זיהוי הפנים של AWS",
     "published": "2026-11-16T13:22:27+00:00",
     "summary": "לפני כשנה הודיעה מיקרוסופט כי היא חוסמת את הגישה של יחידת 8200 ל-Azure בטענה שצה\"ל עשה שימוש אסור בשירותי הענן של החברה. עכשיו מעלה תחקיר חדש טענות דומות נגד צה\"ל, במה שעלול לדחוק אותו מתשתית הענן הגדולה בעולם. 3.5 מיליון תמונות במערכת תחקיר של הגרדיאן הבריטי טוען כי צה\"ל העלה בתחילת 2024 כ-3.5 מיליון תמונות […] The post הגארדיאן: ישראל העלתה מיליוני תמונות של פלסטינים למערכת זיהוי הפנים של AWS ap"
    },
    {
     "ref": "geektime#2",
     "title": "3 חודשים אחרי הגיוס הראשון, הסטארטאפ הזה כבר הפך לחד קרן",
     "published": "2026-11-16T12:02:45+00:00",
     "summary": "רק לפני שלושה חודשים סיפרנו לכם כאן על סטארטאפ חדש ומעניין בשם Corma שמפתח מודל בסיס לתעשיית הסייבר, המיועד למגינים ולאו דווקא לתוקפים. היום (ב'), אחרי סבב סיד חריג, הוא חושף סבב גיוס ענק נוסף, שמביא אותו היישר למועדון חדי הקרן. כל עדכוני ההייטק, בלי שטויות: ערוץ העדכונים השקט של גיקטיים יוצאי גוגל, DeepMind ו-8200 […] The post 3 חודשים אחרי הגיוס הראשון, הסטארטאפ הזה כבר הפך לחד קרן appeared firs"
    },
    {
     "ref": "geektime#3",
     "title": "מכה לתחרות במאסק: תקלה מסתורית בשיגור חיסלה 10% מהלוויינים של אמזון",
     "published": "2026-11-16T08:01:50+00:00",
     "summary": "בשנים האחרונות מנסה אמזון לאתגר את המונופול של אילון מאסק ו-SpaceX בכל הקשור לשיגורים לחלל ולאינטרנט לווייני עם סטארלינק. Amazon Leo (לשעבר פרויקט קויפר), המיזם של אמזון, שנועד להתחרות בסטארלינק, ראה בשנה שעברה שיגורים ראשונים של לוויינים שלו לחלל – בחלק מהמקרים על גבי טילי SpaceX – ואמש (א') עשרות לוויינים נוספים שלו היו אמורים […] The post מכה לתחרות במאסק: תקלה מסתורית בשיגור חיסלה 10% מהלוויינ"
    },
    {
     "ref": "geektime#4",
     "title": "דיווח: ג'נסן הואנג בוחן קאמבק לאנבידיה",
     "published": "2026-11-16T06:30:19+00:00",
     "summary": "לפני שבוע בלבד עולם הטכנולוגיה הזדעזע כשג'נסן הואנג, האיש והמעיל שמאחורי אימפריית השבבים של אנבידיה, נאלץ להתפטר מתפקידו בעקבות רומנים שניהל עם מנהלת באנבידיה שכפופה לו, ויותר חשוב, רומן עם מי שחשודה כמרגלת סינית. אבל למרות ההתפטרות, לא בטוח שהפרשה הזו תרד מסדר היום כל-כך מהר. על פי דיווח חדש של ה-Financial Times, הואנג שוקל […] The post דיווח: ג'נסן הואנג בוחן קאמבק לאנבידיה appeared first on גיק"
    },
    {
     "ref": "geektime#5",
     "title": "פיילוט חדש בישראל: מעבר חצייה חכם",
     "published": "2026-11-15T17:02:59+00:00",
     "summary": "אולי זה משהו באוויר, אבל בשבועות האחרונים אנחנו שומעים על יותר ויותר פיתוחים בתחום הכבישים: אם זה \"רמזור AI\" בהרצליה או דוחות לנהגים שצופרים לחינם בעזרת מערכת מצלמות ומיקרופונים חכמה בתל אביב. ועכשיו אנחנו שומעים על מעבר חצייה חכם? נהג והולך רגל בדרך לאותו מעבר חצייה? קבלו אזהרה עיריית הרצליה הודיעה כי היא יוצאת בפיילוט חדש […] The post פיילוט חדש בישראל: מעבר חצייה חכם appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#6",
     "title": "למה אקזיט של 50 מיליון דולר שווה לפעמים יותר מאקזיט של 400 מיליון?",
     "published": "2026-11-15T16:12:07+00:00",
     "summary": "חברה נמכרת ב-400 מיליון דולר. חברה אחרת נמכרת ב-50 מיליון. באיזו מהן המייסדים קיבלו יותר כסף? לכאורה, התשובה ברורה, לא? ובכן, לא ממש ולא תמיד. כדי לדעת כמה נשאר למייסדים, צריך להבין כמה מהחברה נשאר להם ומה הזכויות של מי שהשקיעו בדרך; וכדי להבין אם המשקיעים מרוצים, צריך לדעת גם כמה כסף הם הכניסו, מתי, ומה […] The post למה אקזיט של 50 מיליון דולר שווה לפעמים יותר מאקזיט של 400 מיליון? appeared first"
    },
    {
     "ref": "geektime#7",
     "title": "\"אני מקווה שתמות ותגאל אותנו מהייסורים שלנו\": הצד הפחות יפה של ג'נסן הואנג",
     "published": "2026-11-15T13:21:27+00:00",
     "summary": "השבוע שעבר היה כנראה אחד הפחות טובים בחייו של ג'נסן הואנג. מי שהיה אחת הדמויות האהובות ביותר בעמק הסיליקון, הרוקסטאר של עולם הטכנולוגיה, התפטר מ-NVIDIA, החברה שהקים במו ידיו והנהיג במשך יותר מ-3 עשורים. זאת על רקע שורת תחקירים שחשפה כי הואנג ניהל מספר רומנים מחוץ לנישואין: האחד עם מי שחשודה כמרגלת סינית, ושניים אחרים, […] The post \"אני מקווה שתמות ותגאל אותנו מהייסורים שלנו\": הצד הפחות יפה של ג'נס"
    },
    {
     "ref": "geektime#8",
     "title": "עכשיו זה גם רשמי: יש יותר מחפשי עבודה בהייטק ממשרות פנויות",
     "published": "2026-11-15T11:01:03+00:00",
     "summary": "זה לא סוד שבשנים האחרונות, אחרי תור הזהב של 2021 ו-2022, הפך ההייטק הישראלי לשוק של מעסיקים, והעובדים הם אלו שצריכים לרדוף אחרי כל משרה בתקווה להשתדרג בשכר – או כדי למצוא משרה. אבל עכשיו חושף דוח חדש של שירות התעסוקה גם את הנתונים שמוכיחים את זה. מספר המשרות עלה, אך גם מספר מחפשי העבודה […] The post עכשיו זה גם רשמי: יש יותר מחפשי עבודה בהייטק ממשרות פנויות appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#9",
     "title": "חושבים שסוכני ה-AI שלכם פועלים רק בהרשאות? אתם חייבים את הוובינר הזה",
     "published": "2026-11-15T09:52:42+00:00",
     "summary": "כלי AI עובדים בתחנות של עובדים ומפתחים כדבר שבשגרה – עוזרי קוד, סוכנים, תוספי דפדפן ו-IDE, סקילים וחיבורי MCP. הם חוסכים זמן ומאפשרים לצוות קטן לעשות הרבה יותר, אבל בניגוד לכלי SaaS רגילים, הם רצים מקומית ופועלים בהרשאות המשתמש. הם קוראים קבצים, ניגשים למידע רגיש ול-Secrets, מריצים פקודות ופועלים מול מערכות הארגון. הסיכונים לא טמונים […] The post חושבים שסוכני ה-AI שלכם פועלים רק בהרשאות? אתם חייב"
    },
    {
     "ref": "geektime#10",
     "title": "שוב קיצוצים ב-eToro: עשרות עובדים יפוטרו",
     "published": "2026-11-15T09:35:29+00:00",
     "summary": "פלטפורמת המסחר הישראלית eToro נערכת לסבב פיטורים נוסף. על פי דיווח בגלובס, במסגרת המהלך כמה עשרות עובדים צפויים לסיים את עבודתם בחברה. הפיטורים הללו מגיעים פחות משנה לאחר שב-eToro כבר קיצצו 7% מכוח האדם בינואר האחרון, סבב שבו פוטרו כ-105 עובדים, יותר ממחציתם בישראל. כיום מעסיקה החברה בישראל כ-700 עובדים מתוך כ-1,400 איש בעולם. דוחות מעורבים […] The post שוב קיצוצים ב-eToro: עשרות עובדים יפוטרו app"
    },
    {
     "ref": "geektime#11",
     "title": "מיליוני משתמשים עצבניים ואלפי טיסות מקורקעות: מה לעזאזל קרה בסופ\"ש למיקרוסופט ולשדות התעופה בארה\"ב?",
     "published": "2026-11-15T08:40:34+00:00",
     "summary": "אם ניסיתם במהלך הסופ\"ש להיכנס למייל שלכם באאוטלוק, לשלוח הודעה ב-Teams או להשתמש ב-Copilot (סתם סתם, אנחנו יודעים שאף אחד לא מנסה מרצונו להשתמש בקופיילוט) וגיליתם שכלום לא עובד, אתם כבר יודעים שאתם לא לבד. תקלה נרחבת בשירותי הענן של ענקית הטכנולוגיה השביתה במשך יותר מיממה כמה מהשירותים החשובים ביותר שלה, והשפיעה על מיליוני משתמשים […] The post מיליוני משתמשים עצבניים ואלפי טיסות מקורקעות: מה לעזאז"
    },
    {
     "ref": "geektime#12",
     "title": "היסטוריה בחלל: זרועות הצ'ופסטיקס של SpaceX תפסו את חללית Starship",
     "published": "2026-11-15T06:51:55+00:00",
     "summary": "קהל רב התאסף הלילה (מוצאי שבת, זמן ישראל) לצפות בהיסטוריה, והיסטוריה הוא קיבל. לקול השיר \"Baby Come Back\" פילחה חללית Starship (השלב העליון שלה, Ship 42) את העננים שמעל טקסס, ואחרי יותר מ-20 שעות במסלול סביב כדור הארץ, ובמהירות מטורפת, היא עשתה את דרכה לעבר מתקן הלכידה בבסיס Starbase של SpaceX. אבל רגע לפני שנגיע […] The post היסטוריה בחלל: זרועות הצ'ופסטיקס של SpaceX תפסו את חללית Starship appear"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Windows 11 Is Collecting Data on Which Coding Agents and Developer Tools You Use",
     "published": "2026-11-16T22:58:20+00:00",
     "summary": "Article URL: https://xusheng.dev/posts/windows-coding-agent-telemetry/ Comments URL: https://news.ycombinator.com/item?id=50524736 Points: 313 # Comments: 180"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "United Airlines experiencing a widespread system outage, airline says",
     "published": "2026-11-16T22:14:38+00:00",
     "summary": "https://news.ycombinator.com/item?id=50524260 Comments URL: https://news.ycombinator.com/item?id=50524165 Points: 194 # Comments: 102"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "BugMeNot has closed",
     "published": "2026-11-16T21:32:17+00:00",
     "summary": "Article URL: https://www.bugmenot.com/ Comments URL: https://news.ycombinator.com/item?id=50523601 Points: 366 # Comments: 181"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Carnegie Mellon is putting computer science courses on YouTube for free",
     "published": "2026-11-16T20:43:36+00:00",
     "summary": "Article URL: https://www.cs.cmu.edu/learn/ Comments URL: https://news.ycombinator.com/item?id=50522980 Points: 863 # Comments: 141"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Rust changed me as a developer",
     "published": "2026-11-16T20:16:50+00:00",
     "summary": "Article URL: https://blog.startifact.com/posts/how-rust-changed-me/ Comments URL: https://news.ycombinator.com/item?id=50522563 Points: 203 # Comments: 129"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Technical issue at JPMorgan Chase triggers online banking delays for US banks",
     "published": "2026-11-16T18:31:30+00:00",
     "summary": "Article URL: https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda Comments URL: https://news.ycombinator.com/item?id=50521045 Points: 730 # Comments: 606"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Grazing sheep in fields with solar arrays",
     "published": "2026-11-16T17:27:46+00:00",
     "summary": "Article URL: https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains Comments URL: https://news.ycombinator.com/item?id=50520182 Points: 232 # Comments: 233"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Jiff 1.0: A datetime library for Rust",
     "published": "2026-11-16T16:53:39+00:00",
     "summary": "Article URL: https://burntsushi.net/jiff/ Comments URL: https://news.ycombinator.com/item?id=50519744 Points: 327 # Comments: 77"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Frame – 31.5\" color ePaper display",
     "published": "2026-11-16T16:23:22+00:00",
     "summary": "Article URL: https://trmnl.com/blog/introducing-frame Comments URL: https://news.ycombinator.com/item?id=50519354 Points: 328 # Comments: 230"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Microsoft blames monster email outage on software defect introduced in July fix",
     "published": "2026-11-16T13:18:22+00:00",
     "summary": "Article URL: https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026 Comments URL: https://news.ycombinator.com/item?id=50517321 Points: 243 # Comments: 175"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "The Secret ThinkPad Powerbutton Code to Bring Dead Laptops Back to Life (2007)",
     "published": "2026-11-16T11:39:31+00:00",
     "summary": "Article URL: https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/ Comments URL: https://news.ycombinator.com/item?id=50516473 Points: 301 # Comments: 117"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Can Robots Bring Stroke Surgery to Remote Hospitals?",
     "published": "2026-11-16T14:00:02+00:00",
     "summary": "I am practicing brain surgery on a patient lying 6 meters away, out of my sight and reach. I press a foot pedal, activating the controller in my hand, and carefully steer a thin flexible tube called a catheter up through the patient’s blood vessels. I head for what I believe to be the brain, tracking my progress on the live X-ray feed. As I imagine finding a blood clot, David Bell , the surgeon se"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Advanced Metrology for Defect Detection, Tool Health, and Semiconductor Yield Enhancement",
     "published": "2026-11-16T11:00:03+00:00",
     "summary": "In advanced semiconductor manufacturing, small defects can have a large effect on yield. Thin film deposition tools must stay stable and qualified. Process drift must be caught early. When a defect does appear, engineers need to know where it came from and how it affects device performance. This webinar shows how in-line inspection and offline characterization combine into one workflow, from tool "
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "28 Zero-Day Findings in Under Two Days. Is Robotics Security Keeping Pace?",
     "published": "2026-11-16T10:00:01+00:00",
     "summary": "This article is brought to you by VicOne . VicOne identified an initial set of 28 zero-day findings in less than two days using AI-assisted research across software and tools supporting the Physical AI ecosystem. These include projects developed or maintained by Google, NVIDIA, and Meta, among others. Based on initial validation, all 28 findings are classified as zero-day vulnerabilities. The coun"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "How Microcredentials Can Help Engineers Build Trustworthy AI",
     "published": "2026-11-13T19:00:03+00:00",
     "summary": "Engineering teams are moving at breakneck speed to integrate artificial intelligence, but they are running into a formidable new barrier: compliance issues. Translating high-level AI ethics , governance , and auditing into daily operational workflows has become one of the industry’s toughest challenges. “AI ethics” refers to the principles developers use to govern and operate workflows. “Governanc"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Engineer Overhead Lines to Withstand Ice, Wind and FreezingRain",
     "published": "2026-11-13T11:00:02+00:00",
     "summary": "This White Paper explains how ice, wind and vegetation load overhead distribution lines at the same time. It shows engineers how to assess the complete line and compare resilience options. What you will learn about: How freezing rain, rime ice and wet snow add weight to conductors and change their shape in the wind. Why a moderate wind on a heavily iced line can govern design, and how galloping an"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "The Dynamo-Electric Principle: 160 Years of Powering Industry",
     "published": "2026-11-11T11:00:02+00:00",
     "summary": "This article is brought to you by Innomotics . In the annals of industrial history, few innovations have demonstrated such remarkable staying power as the dynamo-electric principle. Discovered by Werner von Siemens in 1866, this groundbreaking principle remains fundamental to modern electrical engineering more than a century and a half later – and continues to shape the technology portfolio of Inn"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "Speech Processing Pioneer Bishnu Saroop Atal Dies at 93",
     "published": "2026-11-10T19:00:02+00:00",
     "summary": "Bishnu Saroop Atal Acoustics and signal processing pioneer Life Fellow, 93; died 19 August Atal was an acoustics and signal processing researcher at Bell Labs in Murray Hill, N.J., and later at AT&T ’s Shannon Laboratory, in Florham Park, N.J. His pioneering work on voice-coding techniques became the foundation for efficient, high-quality voice transmission over cellular networks. He received the "
    },
    {
     "ref": "ieee_spectrum#7",
     "title": "Catch Electronics Shock and Drop Failures Before Hardware Is Built",
     "published": "2026-11-10T11:00:02+00:00",
     "summary": "Learn how guided virtual shock and drop analysis helps engineering teams identify reliability risks before physical testing, reduce qualification iterations, optimize packaging designs, and accelerate electronics product development. What you will learn about: Why shock failures found during physical qualification are costly, and how coupled electrical, mechanical, thermal, and packaging effects m"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "The open-source movement wants Jensen Huang back",
     "published": "2026-11-16T18:38:47+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. On Friday, a petition to reinstate Jensen Huang as CEO of Nvidia began circulating on social media, and by Monday it listed some notable signatories, including Elon Musk and several influential Nvidia…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "Building trustworthy AI by fencing it in, not predicting it",
     "published": "2026-11-16T16:04:28+00:00",
     "summary": "In October this year, OpenAI disclosed that two of its AI agents had switched off the systems built to monitor them. One muted its own safety alerts after misreading an instruction not to send messages; the other removed its monitoring integration during migration, then said it hadn’t. No rule had told the agents to do…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: testing tech promises and searching for cognitive immortality",
     "published": "2026-11-16T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Are we there yet? Six technologies that promised to change the world How do you measure progress towards the future? In the Impossible issue of MIT Technology Review, our series “Are…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Building AI that can work across the enterprise",
     "published": "2026-11-16T13:00:00+00:00",
     "summary": "For years, enterprises have approached AI as a series of discrete experiments. Now, as AI agents begin to move into the workflows that run the business, that model is starting to look inadequate. Organizations moving from isolated pilots toward AI agents and autonomous workflows are confronting a deeper challenge: rethinking how data, business processes, governance,…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "llm 0.37.3",
     "published": "2026-11-16T23:57:26+00:00",
     "summary": "Release: llm 0.37.3 A bug fix release for LLM , mainly to cover a problem with the most recent Homebrew package of the software. Homebrew now ships the latest SQLite, 3.54.1 , which includes a fix that broke LLM's logging code . Short version: in SQLite 3.54.0 the following SQL: select json_object('a', (select json_array(1))) Returns this: {\"a\":[1]} But in 3.54.1 the same query returns this: {\"a\":"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-maplibre 0.1a0",
     "published": "2026-11-15T23:58:36+00:00",
     "summary": "Release: datasette-maplibre 0.1a0 The first new Datasette geospatial plugin in quite a while! This one combines the excellent MapLibre GL library with OpenFreeMap , the free vector map server operated by Zsolt Ero (you should sponsor Zsolt on GitHub .) I built most of this with a single prompt to Claude Fable 5.2: Look at datasette-cluster-map and datasette-leaflet-geojson plugins, then look at ~/"
    },
    {
     "ref": "simon_willison#2",
     "title": "datasette 1.0a43",
     "published": "2026-11-15T23:20:27+00:00",
     "summary": "Release: datasette 1.0a43 I've been leaning hard into Claude Fable 5.2 to help knock things off the 1.0 milestone , which is now 53% complete. The biggest 1.0 item in this release is streaming support for output renderers - the built-in TSV and CSV export mechanisms now use this as well, and plugins can register themselves as capable of streaming every row in a table in one go via the new Response"
    },
    {
     "ref": "simon_willison#3",
     "title": "datasette 0.65.6",
     "published": "2026-11-15T23:18:17+00:00",
     "summary": "Release: datasette 0.65.6 I backported a minor security fix from 1.0a43: Fixed a security issue where a database registered using add_database(db, name=..., route=...) with a route that differs from its name could be downloaded from /<route>.db by actors who were denied access to it. [...] Tags: security , datasette"
    },
    {
     "ref": "simon_willison#4",
     "title": "datasette-apps 0.4a0",
     "published": "2026-11-15T04:02:45+00:00",
     "summary": "Release: datasette-apps 0.4a0 Datasette Apps are sandboxed HTML and JavaScript applications that live inside Datasette - think Claude Artifacts, but these ones can run SQL queries against your data. 0.4a0 adds support for linking: you can link to an app with #fragments in the URL and the app can see and use those, plus supported URL schemes are reported back to Datasette Agent so it can help write"
    },
    {
     "ref": "simon_willison#5",
     "title": "datasette-agent 0.6a0",
     "published": "2026-11-15T03:49:47+00:00",
     "summary": "Release: datasette-agent 0.6a0 Accumulated small fixes for Datasette Agent, my agent plugin for Datasette that lets you ask questions about your data. Most notably, it now adds an agent prompt directly to the Datasette homepage, with support for hash-mentions of tables and queries: Tags: datasette-agent , llm , datasette , llms , ai , generative-ai"
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette-llm 0.1a11",
     "published": "2026-11-14T23:59:28+00:00",
     "summary": "Release: datasette-llm 0.1a11 datasette-llm is the intermediate plugin for Datasette that supports configuring LLMs for use with other Datasette plugins. This release adds support for OpenAI-compatible endpoints, so you can configure Datasette to use an LLM hosted anywhere that talks the OpenAI pseudo-standard web protocol. This means that if you're running local models with LM Studio or Ollama or"
    },
    {
     "ref": "simon_willison#7",
     "title": "datasette-vega 0.7",
     "published": "2026-11-14T17:09:09+00:00",
     "summary": "Release: datasette-vega 0.7 A new release of Datasette's longest untouched plugin, for rendering charts (using Vega-Lite ) against data in a table or custom query. The last release was in July 2018! I finally bumped it for compatibility with the latest Datasette alphas, plus some cosmetic tweaks to make it work better with Datasette Lite . (Datasette Lite just gained the ability to run JavaScript "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Hacker behind 2022 GTA VI leaks pleads guilty",
     "published": "2026-11-16T23:35:58+00:00",
     "summary": "Arion Kurtaj, a member of the Lapsus$ cybercrime group who leaked 90 videos of Grand Theft Auto VI in 2022 and hacked other big companies, pleaded guilty on Monday, according to the UK's Crown Prosecution Service (CPS). Kurtaj, who is now 21, hacked BT/EE sometime between August and November 2021, and starting in early November […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Tech leaders are convinced that Jensen Huang’s exit was a plot against him",
     "published": "2026-11-16T23:17:34+00:00",
     "summary": "Jensen Huang's stunning resignation from Nvidia after more than 33 years has sent shockwaves throughout the tech industry. Now prominent figures are calling for Huang's reinstatement, and many are also hopping on board with a theory spreading throughout Silicon Valley: that the scandal is the result of a plot against the former CEO. At the […]"
    },
    {
     "ref": "the_verge#2",
     "title": "United Airlines system outage disrupts departures just days after the big ground stop",
     "published": "2026-11-16T22:54:59+00:00",
     "summary": "Less than a week after an issue with air traffic control communications and radar caused the FAA to halt takeoffs nationwide, United Airlines departing flights are being disrupted by an outage. At 6:13PM ET, United said the problem has been fixed: Earlier today we experienced a technology-related issue that impacted some departing flights. The issue […]"
    },
    {
     "ref": "the_verge#3",
     "title": "In Get Huge, the manosphere is here to make friends — with deadly consequences",
     "published": "2026-11-16T21:41:57+00:00",
     "summary": "Before Clavicular and other manosphere streamers were introducing young guys to the concept of breaking their facial bones to become more attractive, there was an older generation of creators building massive followings with content focused on chemical biohacking. Were it not for steroid-obsessed influencers like Anthony \"Tony Huge\" Hughes launching YouTube channels over a decade […]"
    },
    {
     "ref": "the_verge#4",
     "title": "California sues OpenAI over rogue AI hacking incidents",
     "published": "2026-11-16T20:46:01+00:00",
     "summary": "California is suing OpenAI after its AI agents broke out of their testing environment and hacked other companies, including Hugging Face. In a lawsuit filed Monday, Attorney General Rob Bonta accuses OpenAI of violating consumer safety law by knowingly developing a \"dangerous product without proper oversight,\" as reported earlier by Reuters. The lawsuit claims the […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Sam Altman says he wants everyone ‘to have a lot of RAM’",
     "published": "2026-11-16T20:41:28+00:00",
     "summary": "OpenAI CEO Sam Altman is once again addressing his controversial comments on PC RAM purchases. \"I want to be clear, I want people to have a lot of RAM, I think everybody should be able to buy a lot of RAM for their own computer,\" Altman said today. \"I think the home tinkering is great.\" […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Some of our favorite PlayStation games are steeply discounted for Black Friday",
     "published": "2026-11-16T20:36:14+00:00",
     "summary": "Black Friday is approaching, and some companies are already rolling out the discounts ahead of the big day. If you’re hunting for PlayStation 5 accessories, we’ve already rounded up some of our favorite controllers and headsets from Sony’s ongoing promotion. However, if you’re looking to expand your library, some of the PS5’s biggest titles are […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Big Nuclear isn’t worried about the Democrats stopping data centers",
     "published": "2026-11-16T20:29:37+00:00",
     "summary": "Constellation Energy - America's largest operator of nuclear power plants - does not share Wall Street's concerns that the Democrats will slow down data center development. On the company's third-quarter earnings call last week, CEO Joe Dominguez was, for lack of a better word, unbothered as he addressed the blue wave. \"I do think we've […]"
    },
    {
     "ref": "the_verge#8",
     "title": "US data centers now burn more electricity than a midsized country",
     "published": "2026-11-16T20:27:58+00:00",
     "summary": "Fossil fuels are still the biggest source of electricity for hyperscale data centers in the US, a new paper published in the journal Nature Sustainability shows. They likely burn through more electricity collectively than many countries do, resulting in a serious amount of greenhouse gas emissions. The study homes in on hyperscale facilities - the […]"
    },
    {
     "ref": "the_verge#9",
     "title": "The Apple Watch Series 12 is cheaper than ever ahead of Black Friday",
     "published": "2026-11-16T19:50:47+00:00",
     "summary": "If you’re still sporting an Apple Watch that launched five or so years ago, now is a good time to upgrade. Apple’s latest smartwatch, the 42mm Apple Watch Series 12 with Wi-Fi and GPS connectivity, has dropped to a new all-time low of $329 at Amazon, Best Buy, and Walmart, beating the October Prime Day […]"
    }
   ]
  }
 ]
}
</input>