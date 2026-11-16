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
     "title": "Vulcan rocket fails during launch, dealing major blow to SpaceX competitors",
     "published": "2026-11-15T23:11:54+00:00",
     "summary": "This was the first total mission failure in United Launch Alliance's 20-year history."
    },
    {
     "ref": "ars_technica#1",
     "title": "How the world’s fires changed while humanity hit pause",
     "published": "2026-11-15T12:07:34+00:00",
     "summary": "COVID-19 lockdowns cut global fire activity by 12.3 percent."
    },
    {
     "ref": "ars_technica#2",
     "title": "SpaceX returned its Starship rocket on Saturday—but there's a catch",
     "published": "2026-11-15T00:40:59+00:00",
     "summary": "It felt like stepping into the future."
    },
    {
     "ref": "ars_technica#3",
     "title": "James Webb telescope finds ice older than the star it orbits",
     "published": "2026-11-14T12:15:48+00:00",
     "summary": "Radiation and collisions reshape the planetary building materials."
    },
    {
     "ref": "ars_technica#4",
     "title": "Winemakers are learning that conservation can be good for business",
     "published": "2026-11-14T12:05:51+00:00",
     "summary": "Healthy soils, native plants, and fewer chemicals are helping vineyards adapt."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "מכה לתחרות במאסק: תקלה מסתורית בשיגור חיסלה 10% מהלוויינים של אמזון",
     "published": "2026-11-16T08:01:50+00:00",
     "summary": "בשנים האחרונות מנסה אמזון לאתגר את המונופול של אילון מאסק ו-SpaceX בכל הקשור לשיגורים לחלל ולאינטרנט לווייני עם סטארלינק. Amazon Leo (לשעבר פרויקט קויפר), המיזם של אמזון, שנועד להתחרות בסטארלינק, ראה בשנה שעברה שיגורים ראשונים של לוויינים שלו לחלל – בחלק מהמקרים על גבי טילי SpaceX – ואמש (א') עשרות לוויינים נוספים שלו היו אמורים […] The post מכה לתחרות במאסק: תקלה מסתורית בשיגור חיסלה 10% מהלוויינ"
    },
    {
     "ref": "geektime#1",
     "title": "דיווח: ג'נסן הואנג בוחן קאמבק לאנבידיה",
     "published": "2026-11-16T06:30:19+00:00",
     "summary": "לפני שבוע בלבד עולם הטכנולוגיה הזדעזע כשג'נסן הואנג, האיש והמעיל שמאחורי אימפריית השבבים של אנבידיה, נאלץ להתפטר מתפקידו בעקבות רומנים שניהל עם מנהלת באנבידיה שכפופה לו, ויותר חשוב, רומן עם מי שחשודה כמרגלת סינית. אבל למרות ההתפטרות, לא בטוח שהפרשה הזו תרד מסדר היום כל-כך מהר. על פי דיווח חדש של ה-Financial Times, הואנג שוקל […] The post דיווח: ג'נסן הואנג בוחן קאמבק לאנבידיה appeared first on גיק"
    },
    {
     "ref": "geektime#2",
     "title": "פיילוט חדש בישראל: מעבר חצייה חכם",
     "published": "2026-11-15T17:02:59+00:00",
     "summary": "אולי זה משהו באוויר, אבל בשבועות האחרונים אנחנו שומעים על יותר ויותר פיתוחים בתחום הכבישים: אם זה \"רמזור AI\" בהרצליה או דוחות לנהגים שצופרים לחינם בעזרת מערכת מצלמות ומיקרופונים חכמה בתל אביב. ועכשיו אנחנו שומעים על מעבר חצייה חכם? נהג והולך רגל בדרך לאותו מעבר חצייה? קבלו אזהרה עיריית הרצליה הודיעה כי היא יוצאת בפיילוט חדש […] The post פיילוט חדש בישראל: מעבר חצייה חכם appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#3",
     "title": "למה אקזיט של 50 מיליון דולר שווה לפעמים יותר מאקזיט של 400 מיליון?",
     "published": "2026-11-15T16:12:07+00:00",
     "summary": "חברה נמכרת ב-400 מיליון דולר. חברה אחרת נמכרת ב-50 מיליון. באיזו מהן המייסדים קיבלו יותר כסף? לכאורה, התשובה ברורה, לא? ובכן, לא ממש ולא תמיד. כדי לדעת כמה נשאר למייסדים, צריך להבין כמה מהחברה נשאר להם ומה הזכויות של מי שהשקיעו בדרך; וכדי להבין אם המשקיעים מרוצים, צריך לדעת גם כמה כסף הם הכניסו, מתי, ומה […] The post למה אקזיט של 50 מיליון דולר שווה לפעמים יותר מאקזיט של 400 מיליון? appeared first"
    },
    {
     "ref": "geektime#4",
     "title": "\"אני מקווה שתמות ותגאל אותנו מהייסורים שלנו\": הצד הפחות יפה של ג'נסן הואנג",
     "published": "2026-11-15T13:21:27+00:00",
     "summary": "השבוע שעבר היה כנראה אחד הפחות טובים בחייו של ג'נסן הואנג. מי שהיה אחת הדמויות האהובות ביותר בעמק הסיליקון, הרוקסטאר של עולם הטכנולוגיה, התפטר מ-NVIDIA, החברה שהקים במו ידיו והנהיג במשך יותר מ-3 עשורים. זאת על רקע שורת תחקירים שחשפה כי הואנג ניהל מספר רומנים מחוץ לנישואין: האחד עם מי שחשודה כמרגלת סינית, ושניים אחרים, […] The post \"אני מקווה שתמות ותגאל אותנו מהייסורים שלנו\": הצד הפחות יפה של ג'נס"
    },
    {
     "ref": "geektime#5",
     "title": "עכשיו זה גם רשמי: יש יותר מחפשי עבודה בהייטק ממשרות פנויות",
     "published": "2026-11-15T11:01:03+00:00",
     "summary": "זה לא סוד שבשנים האחרונות, אחרי תור הזהב של 2021 ו-2022, הפך ההייטק הישראלי לשוק של מעסיקים, והעובדים הם אלו שצריכים לרדוף אחרי כל משרה בתקווה להשתדרג בשכר – או כדי למצוא משרה. אבל עכשיו חושף דוח חדש של שירות התעסוקה גם את הנתונים שמוכיחים את זה. מספר המשרות עלה, אך גם מספר מחפשי העבודה […] The post עכשיו זה גם רשמי: יש יותר מחפשי עבודה בהייטק ממשרות פנויות appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#6",
     "title": "חושבים שסוכני ה-AI שלכם פועלים רק בהרשאות? אתם חייבים את הוובינר הזה",
     "published": "2026-11-15T09:52:42+00:00",
     "summary": "כלי AI עובדים בתחנות של עובדים ומפתחים כדבר שבשגרה – עוזרי קוד, סוכנים, תוספי דפדפן ו-IDE, סקילים וחיבורי MCP. הם חוסכים זמן ומאפשרים לצוות קטן לעשות הרבה יותר, אבל בניגוד לכלי SaaS רגילים, הם רצים מקומית ופועלים בהרשאות המשתמש. הם קוראים קבצים, ניגשים למידע רגיש ול-Secrets, מריצים פקודות ופועלים מול מערכות הארגון. הסיכונים לא טמונים […] The post חושבים שסוכני ה-AI שלכם פועלים רק בהרשאות? אתם חייב"
    },
    {
     "ref": "geektime#7",
     "title": "שוב קיצוצים ב-eToro: עשרות עובדים יפוטרו",
     "published": "2026-11-15T09:35:29+00:00",
     "summary": "פלטפורמת המסחר הישראלית eToro נערכת לסבב פיטורים נוסף. על פי דיווח בגלובס, במסגרת המהלך כמה עשרות עובדים צפויים לסיים את עבודתם בחברה. הפיטורים הללו מגיעים פחות משנה לאחר שב-eToro כבר קיצצו 7% מכוח האדם בינואר האחרון, סבב שבו פוטרו כ-105 עובדים, יותר ממחציתם בישראל. כיום מעסיקה החברה בישראל כ-700 עובדים מתוך כ-1,400 איש בעולם. דוחות מעורבים […] The post שוב קיצוצים ב-eToro: עשרות עובדים יפוטרו app"
    },
    {
     "ref": "geektime#8",
     "title": "מיליוני משתמשים עצבניים ואלפי טיסות מקורקעות: מה לעזאזל קרה בסופ\"ש למיקרוסופט ולשדות התעופה בארה\"ב?",
     "published": "2026-11-15T08:40:34+00:00",
     "summary": "אם ניסיתם במהלך הסופ\"ש להיכנס למייל שלכם באאוטלוק, לשלוח הודעה ב-Teams או להשתמש ב-Copilot (סתם סתם, אנחנו יודעים שאף אחד לא מנסה מרצונו להשתמש בקופיילוט) וגיליתם שכלום לא עובד, אתם כבר יודעים שאתם לא לבד. תקלה נרחבת בשירותי הענן של ענקית הטכנולוגיה השביתה במשך יותר מיממה כמה מהשירותים החשובים ביותר שלה, והשפיעה על מיליוני משתמשים […] The post מיליוני משתמשים עצבניים ואלפי טיסות מקורקעות: מה לעזאז"
    },
    {
     "ref": "geektime#9",
     "title": "היסטוריה בחלל: זרועות הצ'ופסטיקס של SpaceX תפסו את חללית Starship",
     "published": "2026-11-15T06:51:55+00:00",
     "summary": "קהל רב התאסף הלילה (מוצאי שבת, זמן ישראל) לצפות בהיסטוריה, והיסטוריה הוא קיבל. לקול השיר \"Baby Come Back\" פילחה חללית Starship (השלב העליון שלה, Ship 42) את העננים שמעל טקסס, ואחרי יותר מ-20 שעות במסלול סביב כדור הארץ, ובמהירות מטורפת, היא עשתה את דרכה לעבר מתקן הלכידה בבסיס Starbase של SpaceX. אבל רגע לפני שנגיע […] The post היסטוריה בחלל: זרועות הצ'ופסטיקס של SpaceX תפסו את חללית Starship appear"
    },
    {
     "ref": "geektime#10",
     "title": "כנס ה-AI של Google Cloud מגיע לירושלים ועוד המלצות רותחות",
     "published": "2026-11-14T16:24:28+00:00",
     "summary": "ההייטק הישראלי לא עוצר: הנה המיטאפים, הכנסים והרצאות הטכנולוגיה המסקרנים שצפויים בקרוב. בפיזי או ברשת – אלו אירועי ההייטק המומלצים שאתם רוצים לשריין להם מקום ביומן. מארגנים אירוע או שמעתם על אירוע לקהילה הטכנולוגית בישראל? מוזמנים לעדכן אותנו כאן ולפרסם אותו בחינם בלוח האירועים שלנו. AI Reimagined מתי? 26 בנובמבר (9:00-14:30) איפה? סינמה סיטי ירושלים […] The post כנס ה-AI של Google Cloud מגיע לירו"
    },
    {
     "ref": "geektime#11",
     "title": "מצטער. אני צריך את הסייברטראק-על-שלט שטסלה השיקה עכשיו",
     "published": "2026-11-14T15:36:50+00:00",
     "summary": "בשבוע שעבר חלה רעידת אדמה (קלה) בעולם הרכב והטכנולוגיה, כאשר אילון מאסק הודיע כי החברה תפסיק בהדרגה את ייצור רכבי ה-Cybertruck עד אמצע שנת 2027. במילים אחרות, אחד הפרויקטים הגדולים והשנויים במחלוקת של טסלה מת בטרם עת, אחרי שהגיע באיחור של 3 שנים וסיים את דרכו עם נתוני מכירות עגומים למדי. אבל איכשהו, דווקא עכשיו, […] The post מצטער. אני צריך את הסייברטראק-על-שלט שטסלה השיקה עכשיו appeared first on "
    },
    {
     "ref": "geektime#12",
     "title": "דייסון טוענת שהיא כמו סטארטאפ. אבל המתחרות מסין לא מחכות",
     "published": "2026-11-14T12:03:27+00:00",
     "summary": "דייסון נמצאת במקום מאוד מורכב בעולם הטכנולוגיה. מצד אחד, היא עדיין זוכה למעמד-על, שלא חברות רבות נהנות ממנו, והשם שלה הפך למילה נרדפת ל\"שואבי אבק\" (ברמה ששמעתי פעם מישהו מספר שהוא \"קנה דייסון של דרימי\"). אבל מצד שני, אחרי שנים שבהן הציגה מוצרים שקבעו את הסטנדרט של התעשייה, גם היא מגלה שהמתחרות מסין לא פראייריות, […] The post דייסון טוענת שהיא כמו סטארטאפ. אבל המתחרות מסין לא מחכות appeared first o"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "How to make almost anything",
     "published": "2026-11-16T05:50:37+00:00",
     "summary": "Article URL: https://pub.cba.mit.edu/863.26/site/ Comments URL: https://news.ycombinator.com/item?id=50514470 Points: 252 # Comments: 43"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Qwen4-Max",
     "published": "2026-11-16T02:14:44+00:00",
     "summary": "Article URL: https://qwen.ai/blog?id=qwen4-max Comments URL: https://news.ycombinator.com/item?id=50513215 Points: 483 # Comments: 197"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Universal XSS in uBlock Origin from website-driven element picker",
     "published": "2026-11-16T02:04:48+00:00",
     "summary": "Article URL: https://iter.ca/post/ubo-uxss/ Comments URL: https://news.ycombinator.com/item?id=50513160 Points: 347 # Comments: 95"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "What's Next for Nvidia?",
     "published": "2026-11-15T23:55:55+00:00",
     "summary": "Article URL: https://steveblank.com/2026/11/15/whats-next-for-nvidia/ Comments URL: https://news.ycombinator.com/item?id=50512235 Points: 254 # Comments: 323"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Old Bitly links are being hijacked",
     "published": "2026-11-15T22:11:43+00:00",
     "summary": "Article URL: https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/ Comments URL: https://news.ycombinator.com/item?id=50511395 Points: 279 # Comments: 144"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Handwriting, as a Font",
     "published": "2026-11-15T19:42:13+00:00",
     "summary": "Article URL: https://ductus.sorenblank.com Comments URL: https://news.ycombinator.com/item?id=50509972 Points: 281 # Comments: 51"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "Protomaps: Self-hosting map tiles has gotten cheap and easy",
     "published": "2026-11-15T19:26:22+00:00",
     "summary": "Article URL: https://bruceroettgers.eu/blog/protomaps/ Comments URL: https://news.ycombinator.com/item?id=50509837 Points: 329 # Comments: 56"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Microsoft 365 outage leads to chlorine gas poisoning of 15 hotel guests",
     "published": "2026-11-15T18:36:10+00:00",
     "summary": "Article URL: https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html Comments URL: https://news.ycombinator.com/item?id=50509411 Points: 532 # Comments: 231"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "A short explainer on how El Niño works [video]",
     "published": "2026-11-15T18:23:21+00:00",
     "summary": "Article URL: https://www.youtube.com/watch?v=7_JF3etiAv8 Comments URL: https://news.ycombinator.com/item?id=50509308 Points: 235 # Comments: 105"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Crows make decisions faster than we can",
     "published": "2026-11-15T17:53:31+00:00",
     "summary": "Article URL: https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html Comments URL: https://news.ycombinator.com/item?id=50509023 Points: 237 # Comments: 160"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "Clice v1.0 Released: Welcome to Modern C++",
     "published": "2026-11-15T17:22:32+00:00",
     "summary": "Article URL: https://ykiko.me/en/articles/2105384023094834022/ Comments URL: https://news.ycombinator.com/item?id=50508715 Points: 156 # Comments: 85"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Emacs Is My Browser",
     "published": "2026-11-15T15:21:21+00:00",
     "summary": "Article URL: https://joshblais.com/blog/emacs-as-my-browser/ Comments URL: https://news.ycombinator.com/item?id=50507553 Points: 206 # Comments: 121"
    },
    {
     "ref": "hn_frontpage#12",
     "title": "SpaceX catches the Starship to end Flight 15",
     "published": "2026-11-14T21:22:24+00:00",
     "summary": "https://x.com/SpaceX/status/2121316300702056595 https://youtu.be/jHlpfNSpBmw?t=3233 Comments URL: https://news.ycombinator.com/item?id=50500963 Points: 1691 # Comments: 1267"
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
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "datasette-maplibre 0.1a0",
     "published": "2026-11-15T23:58:36+00:00",
     "summary": "Release: datasette-maplibre 0.1a0 The first new Datasette geospatial plugin in quite a while! This one combines the excellent MapLibre GL library with OpenFreeMap , the free vector map server operated by Zsolt Ero (you should sponsor Zsolt on GitHub .) I built most of this with a single prompt to Claude Fable 5.2: Look at datasette-cluster-map and datasette-leaflet-geojson plugins, then look at ~/"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette 1.0a43",
     "published": "2026-11-15T23:20:27+00:00",
     "summary": "Release: datasette 1.0a43 I've been leaning hard into Claude Fable 5.2 to help knock things off the 1.0 milestone , which is now 53% complete. The biggest 1.0 item in this release is streaming support for output renderers - the built-in TSV and CSV export mechanisms now use this as well, and plugins can register themselves as capable of streaming every row in a table in one go via the new Response"
    },
    {
     "ref": "simon_willison#2",
     "title": "datasette 0.65.6",
     "published": "2026-11-15T23:18:17+00:00",
     "summary": "Release: datasette 0.65.6 I backported a minor security fix from 1.0a43: Fixed a security issue where a database registered using add_database(db, name=..., route=...) with a route that differs from its name could be downloaded from /<route>.db by actors who were denied access to it. [...] Tags: security , datasette"
    },
    {
     "ref": "simon_willison#3",
     "title": "datasette-apps 0.4a0",
     "published": "2026-11-15T04:02:45+00:00",
     "summary": "Release: datasette-apps 0.4a0 Datasette Apps are sandboxed HTML and JavaScript applications that live inside Datasette - think Claude Artifacts, but these ones can run SQL queries against your data. 0.4a0 adds support for linking: you can link to an app with #fragments in the URL and the app can see and use those, plus supported URL schemes are reported back to Datasette Agent so it can help write"
    },
    {
     "ref": "simon_willison#4",
     "title": "datasette-agent 0.6a0",
     "published": "2026-11-15T03:49:47+00:00",
     "summary": "Release: datasette-agent 0.6a0 Accumulated small fixes for Datasette Agent, my agent plugin for Datasette that lets you ask questions about your data. Most notably, it now adds an agent prompt directly to the Datasette homepage, with support for hash-mentions of tables and queries: Tags: datasette-agent , llm , datasette , llms , ai , generative-ai"
    },
    {
     "ref": "simon_willison#5",
     "title": "datasette-llm 0.1a11",
     "published": "2026-11-14T23:59:28+00:00",
     "summary": "Release: datasette-llm 0.1a11 datasette-llm is the intermediate plugin for Datasette that supports configuring LLMs for use with other Datasette plugins. This release adds support for OpenAI-compatible endpoints, so you can configure Datasette to use an LLM hosted anywhere that talks the OpenAI pseudo-standard web protocol. This means that if you're running local models with LM Studio or Ollama or"
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette-vega 0.7",
     "published": "2026-11-14T17:09:09+00:00",
     "summary": "Release: datasette-vega 0.7 A new release of Datasette's longest untouched plugin, for rendering charts (using Vega-Lite ) against data in a table or custom query. The last release was in July 2018! I finally bumped it for compatibility with the latest Datasette alphas, plus some cosmetic tweaks to make it work better with Datasette Lite . (Datasette Lite just gained the ability to run JavaScript "
    },
    {
     "ref": "simon_willison#7",
     "title": "datasette-cluster-map 0.19",
     "published": "2026-11-13T23:02:45+00:00",
     "summary": "Release: datasette-cluster-map 0.19 One of the oldest Datasette plugins, and still one of my favorites. It now works with Datasette 1.0a42, and depends on the new datasette-leaflet to ensure OpenStreetMap tiles are requested with a referrer header. Here's a map of power plants owned by California's PG&E , also demonstrating Datasette's recently redesigned facets : Tags: datasette , geospatial , op"
    },
    {
     "ref": "simon_willison#8",
     "title": "datasette-leaflet 0.3",
     "published": "2026-11-13T22:30:54+00:00",
     "summary": "Release: datasette-leaflet 0.3 OpenStreetMap have a very reasonable policy that hits to their hosted tile server should send a referrer header . Datasette table pages used the Referrer-Policy: no-referrer HTTP header, causing plugins that loaded tiles from OpenStreetMap to violate that policy. datasette-leaflet is the plugin that loads a bundled Leaflet so other Datasette plugins can depend on it."
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Apple’s new study looks to improve the effectiveness of AI health tools",
     "published": "2026-11-16T01:26:56+00:00",
     "summary": "Apple announced a new study today with the goal of better understanding how people interact with conversational AI health tools and how useful their responses actually are. The company is conducting the Apple Health AI Usage Study in collaboration with OpenEvidence, a clinical AI platform used by healthcare professionals that generates answers based on medical […]"
    },
    {
     "ref": "the_verge#1",
     "title": "Listen to this: Armand Hammer’s Snakes & Ladders",
     "published": "2026-11-15T21:49:22+00:00",
     "summary": "I open with this caveat: I haven't had a ton of time to digest the surprise Armand Hammer record that dropped this week. Billy Woods and Elucid rarely miss, though, and my initial reaction is that Snakes & Ladders ranks among their best. It doesn't have the seamless throughline production-wise that their collabs with Alchemist […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Vulcan rocket fails, destroying 40 Amazon Leo satellites",
     "published": "2026-11-15T21:05:02+00:00",
     "summary": "United Launch Alliance (ULA) suffered what is reportedly its first mission failure in its 20-year history, failing to deliver 40 Amazon Leo satellites to orbit. Leo is Amazon's competitor to SpaceX's Starlink, but it has struggled to get off the ground so far, putting only a small portion of the necessary satellites to challenge Starlink […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Jensen Huang might be plotting a return and more of the latest Nvidia drama",
     "published": "2026-11-15T20:43:49+00:00",
     "summary": "The drama around Nvidia co-founder and former CEO Jensen Huang is evolving quickly. The latest edition of our Stepback newsletter should get you up to speed, but there have already been a number of new developments since this morning. That includes rumors that Jensen Huang might be trying to find a path back to CEO, […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Congress wants to tighten export rules on AI chips after Nvidia spy scandal",
     "published": "2026-11-15T19:15:43+00:00",
     "summary": "Unsurprisingly, following the scandal involving now-former Nvidia CEO Jensen Huang and a suspected Chinese spy, Congress is looking to further restrict exports of AI chips. Both Democrats and Republicans have voiced support for various measures and bills that would tighten rules and have demanded that Huang and other Nvidia leaders testify before Congress. Senate Minority […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Fanttik’s S1 Pro electric screwdriver is $40 off in the run-up to Black Friday",
     "published": "2026-11-15T17:00:00+00:00",
     "summary": "Amazon’s early Black Friday promos are already underway, and we’ll be highlighting some of our favorites over the next few days on our Shopping page. Among them is the Fanttik S1 Pro Cordless Electric Screwdriver, which is currently matching its all-time low of $39.99 ($40 off) at Amazon for a limited time. Fanttik’s rechargeable tool […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Apple’s first smart glasses are coming together",
     "published": "2026-11-15T16:59:16+00:00",
     "summary": "Apple's smart glasses are among the worst-kept secrets in the tech world. Bloomberg's Mark Gurman says the company's first model, which will lack augmented reality features, will be announced at June's WWDC next year. They likely won't ship right away, however, with Gurman saying only that \"glasses shipments would begin before the end of the […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Rachelle Hampton won’t admit how long she spent charting the use of ‘murmur’ in Twilight",
     "published": "2026-11-15T16:00:00+00:00",
     "summary": "Rachelle Hampton is a writer and co-owner at Defector Media, and the host of Normal Gossip, a podcast of anonymous listener-submitted stories about everyday drama. Whether that's lies about luxury wool in a literal knitting circle, the impeachment of a hypocritical HOA president, or a COVID outbreak at a destination wedding with an absurd 25 […]"
    },
    {
     "ref": "the_verge#8",
     "title": "LG’s budget-friendly B6E OLED TV is up to 50 percent off this weekend",
     "published": "2026-11-15T14:00:00+00:00",
     "summary": "LG’s B6E was already one of the most affordable OLED TVs you could buy, but it’s an even better deal now that it’s included as part of Best Buy’s latest doorbuster event. Now through the end of today, November 15th, the 55-inch model is 50 percent off, dropping it to an all-time low of $699.99 […]"
    },
    {
     "ref": "the_verge#9",
     "title": "The Sony Aibo was a robot revolution dressed like a dog",
     "published": "2026-11-15T13:57:30+00:00",
     "summary": "In the 1990s, Sony was absolutely convinced that we were on the precipice of a robot takeover. Pretty soon, the company decided, we'd all be living among countless humanoid robots. Some would be our coworkers; others would be our friends; and at least one would be our pet. And \"pet\" was exactly what Sony was […]"
    }
   ]
  }
 ]
}
</input>