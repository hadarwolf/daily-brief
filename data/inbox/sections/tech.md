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
     "title": "Ukraine’s sea drones blow up Russian warship in Benghazi operation",
     "published": "2026-11-24T12:00:57+00:00",
     "summary": "Russian missile corvette latest casualty as Ukraine strikes back in war at sea."
    },
    {
     "ref": "ars_technica#1",
     "title": "Trump halts Iowa detonation, says new governor to blame if it blows accidentally",
     "published": "2026-11-23T21:58:34+00:00",
     "summary": "The Army said on Sunday that it would carry out the detonation on Wednesday."
    },
    {
     "ref": "ars_technica#2",
     "title": "States sue SpaceX to stop Grok from generating child sex images, revenge porn",
     "published": "2026-11-23T21:30:44+00:00",
     "summary": "X says every Grok output is screened, but state AGs say Grok is still making CSAM."
    },
    {
     "ref": "ars_technica#3",
     "title": "Russia will launch a routine ISS supply mission tomorrow—apparently, it's a big secret",
     "published": "2026-11-23T20:34:51+00:00",
     "summary": "\"I would ask you to please reach out to Roscosmos directly.\""
    },
    {
     "ref": "ars_technica#4",
     "title": "Surveillance pricing uses our personal data to make us pay more",
     "published": "2026-11-23T20:11:43+00:00",
     "summary": "Personalized pricing can mean unfair, and even biased, prices."
    },
    {
     "ref": "ars_technica#5",
     "title": "Amazon fights Delivery Protection Act by putting stickers on its packages",
     "published": "2026-11-23T19:38:13+00:00",
     "summary": "Amazon now uses its packages for political purposes."
    },
    {
     "ref": "ars_technica#6",
     "title": "Reports: Russia may launch nuclear weapon into orbit as soon as next month",
     "published": "2026-11-23T19:28:30+00:00",
     "summary": "A nuclear detonation in space \"could cause rapid and sudden loss or degradation of thousands of satellites.\""
    },
    {
     "ref": "ars_technica#7",
     "title": "Marvel crams every superhero ever into Avengers: Doomsday final trailer",
     "published": "2026-11-23T15:55:12+00:00",
     "summary": "\"All of you have lived stolen lives. But now you must give them back.\""
    },
    {
     "ref": "ars_technica#8",
     "title": "Jensen Huang reinstated as Nvidia CEO, board chair",
     "published": "2026-11-23T15:46:18+00:00",
     "summary": "Trump says he spoke to the board and that Huang \"did nothing wrong.\""
    },
    {
     "ref": "ars_technica#9",
     "title": "COP31 ends in failure as countries split over fossil fuels, climate finance",
     "published": "2026-11-23T15:23:26+00:00",
     "summary": "COP31 ended without a consensus deal for the first time since 2009."
    },
    {
     "ref": "ars_technica#10",
     "title": "F1 in Las Vegas: You've never seen an F1 race like this before",
     "published": "2026-11-23T13:54:22+00:00",
     "summary": "There were 352 position changes, including 35 for the lead."
    },
    {
     "ref": "ars_technica#11",
     "title": "Tri-screen portable monitors aren’t for the faint of heart",
     "published": "2026-11-23T12:15:16+00:00",
     "summary": "Three extra screens boost multitasking but can distract and overwhelm."
    },
    {
     "ref": "ars_technica#12",
     "title": "Review: The Asus ProArt P16 offers a glimpse of a future powered by local AI",
     "published": "2026-11-23T12:00:00+00:00",
     "summary": "The new Asus ProArt laptop costs up to $7,000, but it can run a gaggle of local AI agents."
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "נפתחה ההרשמה לתוכנית ה-Deep Tech MBA של אוניברסיטת תל אביב",
     "published": "2026-11-24T12:07:35+00:00",
     "summary": "אם אתם קוראים את זה, כנראה שיש לכם מומחיות טכנולוגית בעולמות הפיתוח והמחקר. אבל האם אתם יודעים להפוך אותה ליכולת לנהל עסק או יחידה עסקית, או להוביל מיזם המתבסס על טכנולוגיה עמוקה? פיתוח טכנולוגיה פורצת דרך הוא רק חלק מהדרך להפוך רעיון לחברה מצליחה. בתחומים כמו AI, סייבר, רובוטיקה, ביוטכנולוגיה, טכנולוגיות רפואיות, אקלים ו-Deep Tech, […] The post נפתחה ההרשמה לתוכנית ה-Deep Tech MBA של אוניברסיטת ת"
    },
    {
     "ref": "geektime#1",
     "title": "עוד 320 מיליון דולר להשקעות בסטארטאפים ישראלים",
     "published": "2026-11-24T10:03:47+00:00",
     "summary": "מתוך כ-200 קרנות הון סיכון בישראל, פחות מעשר מתמקדות בשלבי צמיחה מאוחרים, זאת למרות שהיקף ההשקעות בתחום זינק לכ-10 מיליארד דולר בשנה שעברה. למגרש הזה נכנסת קרן Key1 Capital, שהודיעה על סגירה ראשונה של 320 מיליון דולר לקרן השנייה שלה. על פי הודעת הקרן, כ-95% מההתחייבויות להשקעה הגיעו מגופים מוסדיים, פאמילי אופיסס ויזמים שכבר השקיעו […] The post עוד 320 מיליון דולר להשקעות בסטארטאפים ישראלים appeare"
    },
    {
     "ref": "geektime#2",
     "title": "ה-CISO של אמזון: \"חסמנו 2,900 צפון-קוריאנים שניסו להתקבל לעבודה\"",
     "published": "2026-11-24T09:16:34+00:00",
     "summary": "מאת שחר פלד \"חסמנו לפחות 2,900 גורמים מצפון-קוריאה שניסו להתקבל לעבודה באמזון\", סיפר סי-ג'יי מוזס, מנהל אבטחת המידע של ענקית האיקומרס ושירותי הענן האמריקאית. \"הם משתמשים ב-AI כדי לבנות זהויות בדויות שנראות אמינות, ולהתקבל לעבודה בחברות כמו שלנו\", הסביר. \"הכסף שהם מקבלים מהעבודה בחברות האלה חוזר לצפון-קוריאה ומממן את הפעילות הצבאית של המשטר. ה-AI מאפשר […] The post ה-CISO של אמזון: \"חסמנו 2,900 צפו"
    },
    {
     "ref": "geektime#3",
     "title": "תחקיר חדש חושף את פרויקט המיפוי הסודי של Google Maps ביהודה ושומרון",
     "published": "2026-11-24T08:19:30+00:00",
     "summary": "מפות באפליקציות אמורות לשקף את המציאות בשטח, אבל בלא מעט איזורים בעולם – החל מאוקראינה ומפרץ אמריקה-מקסיקו ועד יהודה ושומרון – כל קו על המסך הוא פוטנציאל להפוך למוקש פוליטי. תחקיר חדש חושף כיצד מנהל מוצר ב-Google Maps השקיע יותר משש שנים בניסיון לשנות את הניווט לטובת התושבים הפלסטינים שגרים באיזור – ומה קרה לכל […] The post תחקיר חדש חושף את פרויקט המיפוי הסודי של Google Maps ביהודה ושומרון appear"
    },
    {
     "ref": "geektime#4",
     "title": "\"ישו של ה-GPU קם לתחייה\": בכירי הטק חוגגים את חזרתו של ג'נסן",
     "published": "2026-11-24T07:06:42+00:00",
     "summary": "אחרי 11 ימים של דרמה שכללה חשיפת רומנים, התנצלות פומבית של אחד האנשים החזקים בעולם, חשש לריגול סיני ואפילו התערבות של נשיא ארה\"ב, אתמול (ב') חזר ג'נסן הואנג לכיסא מנכ\"ל אנבידיה. הדירקטוריון, שרק בשבוע שעבר נזכיר שלל את האפשרות הזאת, הצביע פה אחד בעד החזרתו, והתגובות בעמק הסיליקון לא איחרו להגיע. אם לשפוט לפי הציוצים, […] The post \"ישו של ה-GPU קם לתחייה\": בכירי הטק חוגגים את חזרתו של ג'נסן appeare"
    },
    {
     "ref": "geektime#5",
     "title": "עסקת אמזון ודקארט: סימני השאלה הגדולים שנותרו",
     "published": "2026-11-23T16:43:17+00:00",
     "summary": "אין ספק ש-Decart הישראלית היא אחד מהסיפורים המרשימים ויוצאי הדופן בשנים האחרונות בהייטק הישראלי. החברה, שהוקמה רק בספטמבר 2023 על ידי דין ואוריין לייטרסדורף ומשה שלו, הצליחה תוך פחות משלוש שנים להציג טכנולוגיה מרשימה ובשלה, לזנק (בסבב הגיוס האחרון) לשווי מוערך של 4 מיליארד דולר ולגייס כ-400 מיליון דולר משמות ענקיים כמו סקויה, בנצ'מרק, אנבידיה […] The post עסקת אמזון ודקארט: סימני השאלה הגדולים שנו"
    },
    {
     "ref": "geektime#6",
     "title": "ברייקינג: דירקטוריון NVIDIA החזיר את ג'נסן הואנג לתפקיד המנכ\"ל",
     "published": "2026-11-23T14:06:23+00:00",
     "summary": "דירקטוריון אנבידיה הודיע היום (ב') בהפתעה על החזרת ג'נסן הואנג לתפקיד מנכ\"ל אנבידיה וחבר הדירקטוריון – שבוע וחצי אחרי שהתפטר על רקע רומנים עם אישה החשודה בריגול למען סין ובכירה שעבדה תחתיו. ההחלטה התקבלה פה אחד, ובדירקטוריון ציינו כי הגיעה לאחר שיחות איתו וקבלת התייחסות מבכירים בממשל האמריקאי. במקביל, בדירקטוריון מציינים כי החקירה העצמאית בנושא […] The post ברייקינג: דירקטוריון NVIDIA החזיר את ג'נ"
    },
    {
     "ref": "geektime#7",
     "title": "אמזון רוכשת את הטכנולוגיות של Decart הישראלית",
     "published": "2026-11-23T13:49:12+00:00",
     "summary": "אחרי הדיווחים וההדלפות, אמזון הודיעה היום (ב') רשמית על רכישת הטכנולוגיות של הסטארטאפ הישראלי Decart (דקארט). החברות לא פרסמו פרטים נוספים על העסקה. דיווחים קודמים (גם כאן) הזכירו סכומים של עד 7.5 מיליארד דולר, עם זאת הטיב המלא של העסקה אינו ברור עדיין וגם הסכומים. עוד כמה סימני שאלה על העסקה – כאן. רכישה אחרי […] The post אמזון רוכשת את הטכנולוגיות של Decart הישראלית appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#8",
     "title": "רגע לפני שמחשבים קוונטיים שוברים את כל ההצפנות שלנו: הסטארטאפ הישראלי Q.security נחשף עם גיוס סיד",
     "published": "2026-11-23T13:00:42+00:00",
     "summary": "האיום הקוונטי הוא כבר מזמן לא תרגיל תיאורטי באקדמיה, וגם לא עוד איזו באזוורד שזורקים במצגות משקיעים. מחשבים קוונטיים עתידיים צפויים לפצח את אלגוריתמי ההצפנה והחתימה הדיגיטלית שמגינים כיום על רוב המידע ברשת. במילים אחרות, זו לא שאלה של האם, אלא מתי. מי שרוצה לעזור לחברות ולארגונים להתכונן ליום הזה היא חברת הסייבר הישראלית Q.security […] The post רגע לפני שמחשבים קוונטיים שוברים את כל ההצפנות שלנו: "
    },
    {
     "ref": "geektime#9",
     "title": "איך הצלחנו להריץ יותר מ-2.5 מיליארד בקשות יומיות בפרודקשן – בלי קריסה אחת",
     "published": "2026-11-23T12:44:58+00:00",
     "summary": "מאת תום צייגר כשמריצים מיליארדי משימות ביום, האתגר הוא לא רק לעבד אותן מהר, אלא גם לוודא שעומס של לקוח אחד לא הופך לצוואר בקבוק עבור כולם. כשכל פרויקט מייצר מיליוני פריטים, וכל אחד מהם צריך לעבור שרשרת של סריקה, עיבוד והעברת נתונים, גם החלטות ארכיטקטוניות קטנות עלולות להפוך לבעיות ענקיות בסקייל. אז איך בונים […] The post איך הצלחנו להריץ יותר מ-2.5 מיליארד בקשות יומיות בפרודקשן – בלי קריסה אחת app"
    },
    {
     "ref": "geektime#10",
     "title": "עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44 מיליארד דולר",
     "published": "2026-11-23T11:57:36+00:00",
     "summary": "ענקית הסייבר האמריקאית CrowdStrike הודיעה היום (ב') על רכישת Zscaler בעסקת מניות בשווי של כ-43.9 מיליארד דולר, באחת מהעסקאות הגדולות ביותר בתולדות ענף הסייבר העולמי. העסקה משקפת שווי של כ-260 דולר למניית זיסקיילר ופרמיה של כ-34% על מחיר הסגירה שלה ביום שישי האחרון. בעלי המניות של קראודסטרייק יחזיקו בכ-84% מהחברה הממוזגת, בעוד שבעלי המניות של […] The post עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44"
    },
    {
     "ref": "geektime#11",
     "title": "עברתם חברה כדי לשדרג את השכר? תבדקו שלא הפסדתם אלף שקל בחודש",
     "published": "2026-11-23T10:03:41+00:00",
     "summary": "מאת מיטל כהן עצרתם פעם לשאול איך Job Hopping משפיע על הכסף שיחכה לכם אחרי שתפרשו? מעבר תכוף בין מקומות עבודה הוא פרקטיקה מקובלת בהייטק, ולעתים קרובות היא ממש הכרחית אם רוצים להתקדם, להתפתח מקצועית ולהרוויח יותר. אבל יש כמה החלטות שקשורות במעברים האלה, שעשויות להשפיע על שנים של חיסכון. הבעיה היא לא עצם המעבר, […] The post עברתם חברה כדי לשדרג את השכר? תבדקו שלא הפסדתם אלף שקל בחודש appeared first o"
    },
    {
     "ref": "geektime#12",
     "title": "נגמרה החגיגה: גוגל מתחילה להקשות על התקנת אפליקציות מחוץ לחנות",
     "published": "2026-11-23T09:34:31+00:00",
     "summary": "אחד היתרונות הגדולים של משתמשי אנדרואיד על חבריהם, בעלי המכשיר עם התפוח הנגוס על גב המכשיר, הוא החופש להתקין אפליקציות מאיפה שהם רק רוצים. מצאתם אפליקציה מעניינת בגיטהאב? רוצים להוריד אפליקציה שלא נמצאת ב-Google Play או להשתמש בחנות אפליקציות חלופית? פשוט מורידים את קובץ ה-APK, מתקינים ונהנים. אלא שבקרוב התהליך הזה עשוי להפוך למורכב הרבה […] The post נגמרה החגיגה: גוגל מתחילה להקשות על התקנת אפליק"
    },
    {
     "ref": "geektime#13",
     "title": "לאפל יש בעיה רצינית, והיא רק עכשיו מתחילה לעבוד עליה",
     "published": "2026-11-23T07:46:03+00:00",
     "summary": "אפל נמצאת בנקודה מאוד מעניינת. בעוד המניות של ענקיות הטכנולוגיה קורסות באופן מרהיב, מניית אפל מסכמת עלייה של יותר מ-26% מתחילת השנה. איכשהו, נראה שההימור של אפל, שהיה לא להמר על תחום ה-AI, השתלם לה בדיעבד. אולם כעת, אחרי כמה שינויים משמעותיים מאוד בשוק, יכול להיות שהיא נמצאת בדרך לצרה הרבה יותר גדולה. הסוכנים באים […] The post לאפל יש בעיה רצינית, והיא רק עכשיו מתחילה לעבוד עליה appeared first on "
    },
    {
     "ref": "geektime#14",
     "title": "9 שנות קוד ב-7 ימי עבודה: כך העברנו בעזרת AI מערכת בפרודקשן מ-Python ל-Go",
     "published": "2026-11-22T16:07:00+00:00",
     "summary": "שבעה ימי עבודה – זה הזמן שלקח לנו להעביר את הקוד הפעיל שלנו בפרודקשן מ-Python ל-Go, באמצעות AI. התוצאה? ירידה של 80 אחוז בעלויות הענן ושיפור ביצועים של עד פי 11 בפונקציות מסוימות. עלות הטוקנים הסתכמה בכ-5% בלבד מהחיסכון שהשגנו. עד לאחרונה, פרויקט כזה היה דורש השקעה משמעותית של זמן ומשאבי פיתוח, אבל השימוש ב-AI […] The post 9 שנות קוד ב-7 ימי עבודה: כך העברנו בעזרת AI מערכת בפרודקשן מ-Python ל-Go a"
    },
    {
     "ref": "geektime#15",
     "title": "חדש: עשיתם עבירת תנועה? הדוח מהמשטרה יגיע אליכם מייד לנייד",
     "published": "2026-11-22T13:32:21+00:00",
     "summary": "לקבל בדואר דוח תנועה מהמשטרה חודש אחרי העבירה זה דבר מתסכל למדי, בעיקר כי בשלב הזה קשה לזכור מי בכלל נהג ברכב ומה היו הנסיבות לעבירה. עכשיו, מתברר שמשטרת ישראל מבצעת שדרוג דיגיטלי קטן, שאמור לסייע לכם או קרובים אליכם, אם ביצעתם עבירת תנועה כלשהי (בואו, אנחנו יוצאים מנקודת הנחה שקוראי גיקטיים לא עושים עבירות […] The post חדש: עשיתם עבירת תנועה? הדוח מהמשטרה יגיע אליכם מייד לנייד appeared first on ג"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "2035 Came Early",
     "published": "2026-11-24T06:30:33+00:00",
     "summary": "Article URL: https://fzakaria.com/2026/11/23/2035-came-early Comments URL: https://news.ycombinator.com/item?id=50624497 Points: 354 # Comments: 121"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "New York Bans Subscription and Post-Purchase Fees on Cars",
     "published": "2026-11-24T02:27:02+00:00",
     "summary": "Article URL: https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription Comments URL: https://news.ycombinator.com/item?id=50622774 Points: 432 # Comments: 163"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "Stalwart is now a drop-in replacement for Microsoft Exchange",
     "published": "2026-11-23T22:32:29+00:00",
     "summary": "Article URL: https://stalw.art/blog/microsoft-exchange-replacement/ Comments URL: https://news.ycombinator.com/item?id=50620349 Points: 515 # Comments: 272"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Bored.com: Fun, interesting and cool websites to explore when bored",
     "published": "2026-11-23T21:01:16+00:00",
     "summary": "Article URL: https://www.bored.com/ Comments URL: https://news.ycombinator.com/item?id=50619207 Points: 270 # Comments: 57"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "GPUI is getting its own repository",
     "published": "2026-11-23T20:52:54+00:00",
     "summary": "Article URL: https://github.com/zed-industries/gpui Comments URL: https://news.ycombinator.com/item?id=50619103 Points: 298 # Comments: 104"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "Per Arm's request, this site will be discontinued on 4 December 2026 :(",
     "published": "2026-11-23T19:17:55+00:00",
     "summary": "Article URL: https://arm.jonpalmisc.com/ Comments URL: https://news.ycombinator.com/item?id=50617499 Points: 1077 # Comments: 252"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "\"Dario is hyping the dangers so OSS models are illegal and he stays in control\"",
     "published": "2026-11-23T17:07:26+00:00",
     "summary": "Article URL: https://twitter.com/ylecun/status/2124550037912920090 Comments URL: https://news.ycombinator.com/item?id=50615308 Points: 1752 # Comments: 1013"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Ladybird is now in alpha",
     "published": "2026-11-23T16:13:12+00:00",
     "summary": "Article URL: https://ladybird.org/posts/alpha/ Comments URL: https://news.ycombinator.com/item?id=50614249 Points: 2082 # Comments: 492"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Nvidia Reinstates Jensen Huang as CEO",
     "published": "2026-11-23T14:00:18+00:00",
     "summary": "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-j... https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-congress... Comments URL: https://news.ycombinator.com/item?id=50611576 Points: 2635 # Comments: 3514"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "NariQ: BF16-level Qwen3.8-27B in a 10 GB file",
     "published": "2026-11-23T13:42:38+00:00",
     "summary": "We built NariQ: 3-bit-or-lower quantizations of Qwen3.8-27B that retain near-BF16 quality across agentic tasks, math, multilingual reasoning, and image understanding. To our knowledge, this is the first 3-bit-or-lower quantization that retains BF16 lvl performance on long-horizon agentic tasks. Benchmarks (BF16 / 3-bit / 2.5-bit / 2-bit): - DeepSWE: 39.8 / 41.0 / 41.9 / 28.6 - Terminal-Bench 2.1: "
    },
    {
     "ref": "hn_frontpage#10",
     "title": "GLM-5.4: Toward generalized coding with our first loop transformer",
     "published": "2026-11-23T10:06:43+00:00",
     "summary": "Article URL: https://z.ai/blog/glm-5.4 Comments URL: https://news.ycombinator.com/item?id=50609685 Points: 1138 # Comments: 371"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "Free alternative TV network built from the Internet Archive's forgotten videos",
     "published": "2026-11-23T01:13:51+00:00",
     "summary": "Article URL: https://spelunkr.tv Comments URL: https://news.ycombinator.com/item?id=50606192 Points: 1018 # Comments: 174"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Learn How 5G NTN Architecture, Mobility, and Testing Shape 6G",
     "published": "2026-11-23T14:08:53+00:00",
     "summary": "What you will learn about: How 3GPP standards from Release 15 to Release 19 built the foundation of NR-NTN, and why NTN extends 5G coverage to oceans, rural regions, and disaster zones. How transparent and regenerative satellite payload architectures differ, and what each choice means for round trip time, link budget, and hardware complexity. Why long distances, fast-moving satellites, and Doppler"
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "I Don’t Trust Visual Recordings Anymore. But One Day I Will Again",
     "published": "2026-11-20T14:00:03+00:00",
     "summary": "In March of this year, a flurry of emails and text messages from a half dozen reporters around the world disrupted my quiet Saturday morning. An Iranian news agency had aired a week-old video of what appeared to be a U.S.-made Tomahawk missile hitting a school. News reports claimed that the strike killed more than 175 people, most of them children. The U.S. president and military denied responsibi"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "Community-Focused Academic Brings AI Tools to Colorado Farmers",
     "published": "2026-11-19T19:00:02+00:00",
     "summary": "Many farmers and ranchers in eastern Colorado are curious about artificial intelligence, but they don’t have a local tech-savvy person to show them how to use it. Xue “Alice” Dong has made that her job. Dong, an IEEE senior member, is an extension regional specialist with the Colorado State University Extension , CSU’s outreach arm. She works in Logan County and serves a 10-county farming area in "
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Why a Computer Scientist Thinks Superintelligence Won’t Happen",
     "published": "2026-11-19T12:00:03+00:00",
     "summary": "Many people were caught off guard this past summer when employees of one of the world’s leading AI companies began casually debating whether their products would lead to human extinction. It started when Anthropic researcher Jacob Coxon announced his resignation, warning that his employer and OpenAI were “racing straight to self-improving superintelligence and gambling with our lives.” Evan Hubing"
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Build a Personal Brand to Help Employers Find You",
     "published": "2026-11-18T17:33:26+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! In one year, the number of developers working for themselves has more than doubled. Stack Overflow’s annual survey of more than 30,000 developers sho"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "IEEE Celebrates 10 Years of Incorporating Ethics Into AI Systems",
     "published": "2026-11-17T19:00:03+00:00",
     "summary": "Policymakers, technologists, and members of the public have raised concerns about the harm AI’s rapid advancement might cause to society. Their concerns include bias, data privacy violations, the spread of misinformation, and losing control of AI agents. Those issues are relatively new to many people, but the IEEE Standards Association has been working for the past decade on ways to prioritize the"
    },
    {
     "ref": "ieee_spectrum#6",
     "title": "AI Is Giving Optical Computing Another Shot",
     "published": "2026-11-17T14:00:03+00:00",
     "summary": "The idea of computing with light has been around for over 70 years, but until recently it’s remained largely in the realm of research. Over the past few years, though, optical computing has emerged as a fast-growing industry: Market valuation of companies in this sector now totals US $2.22 billion, up from $0.4 billion in 2022. One projection suggests that the market will continue to grow exponent"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "Data centers are getting their own natural gas power plants",
     "published": "2026-11-24T11:00:00+00:00",
     "summary": "One of the biggest roadblocks to starting up a data center is getting approval to connect to the electric grid—a wait that could last as long as a decade. Some developers aren’t willing to wait and are instead opting to build their own off-grid, or behind-the-meter, gas power plants to fuel the AI boom. xAI’s…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "A legendary philosopher isn’t buying Anthropic’s consciousness argument",
     "published": "2026-11-23T17:36:08+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. Before going public last week, Anthropic named the possibility that AI could be conscious or sentient as a risk factor for anyone investing. Given “the way we approach model sentience and moral…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "The Download: AI’s judgment problem and carbon removal’s crop threat",
     "published": "2026-11-23T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The most misunderstood graph in AI just got a major update A new report from the AI evaluation nonprofit METR finds that some capabilities are improving exponentially—but models aren’t as good…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "Why using rocks for carbon removal could eventually reduce crop growth",
     "published": "2026-11-23T11:00:00+00:00",
     "summary": "Tech companies are investing a lot of hope and money in rocks. Google, Microsoft, and others have committed hundreds of millions of dollars to get startups to spread crushed basalt, olivine, or other alkaline materials across farms, in an effort to capture carbon from the air and lock it away. A number of influential models…"
    }
   ]
  },
  {
   "outlet": "Simon Willison",
   "lang": "en",
   "items": [
    {
     "ref": "simon_willison#0",
     "title": "datasette-charts 0.2a0",
     "published": "2026-11-24T04:24:29+00:00",
     "summary": "Release: datasette-charts 0.2a0 I introduced this new charting plugin for Datasette yesterday . Today it's gained integration with Datasette Agent , so now you can ask chat for a chart and it will create one for you using the same underlying chart suggestion and generation tools. Here's a demo video, recorded on agent.datasette.io where you can sign in with GitHub to try the plugin yourself: Downl"
    },
    {
     "ref": "simon_willison#1",
     "title": "datasette-agent 0.7a1",
     "published": "2026-11-24T03:45:57+00:00",
     "summary": "Release: datasette-agent 0.7a1 I small improvement to Datasette Agent : chat sessions can open an iframe side panel, and that panel can then navigate to different pages. This version improves navigation by fragment hashes, for deeper integration with other Datasette plugins that update fragment hashes when the user interacts with the plugin in a way that changes state. I built this in order to fix"
    },
    {
     "ref": "simon_willison#2",
     "title": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer",
     "published": "2026-11-23T23:40:49+00:00",
     "summary": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer GLM 5.4 is now available from Chinese AI lab Z.ai. It's their first model to use a looped transformer architecture, which they describe like this: In a standard Transformer, each layer runs once per forward pass. In a Loop Transformer, a group of weight-shared layers runs for multiple iterations, refining the hidden states from the"
    },
    {
     "ref": "simon_willison#3",
     "title": "Ladybird's first alpha release",
     "published": "2026-11-23T21:46:35+00:00",
     "summary": "Ladybird is an astonishingly ambitious project: a new browser, in 2026, with its own implementation of most of the key components - HTML parsing, CSS engine, layout, JavaScript, even WebAssembly. It still uses a few external components - things like HarfBuzz for text shaping, Skia for 2D graphics, ffmpeg for video, and SQLite for the things you do with SQLite. Everything else is part of Ladybird, "
    },
    {
     "ref": "simon_willison#4",
     "title": "datasette-charts 0.1a0",
     "published": "2026-11-23T00:37:20+00:00",
     "summary": "Release: datasette-charts 0.1a0 I've been thinking about this problem for over a year now, but on Sunday I finally fired up Claude Fable 5.2 to build an initial prototype. The prototype went so well that this is now a full plugin. You can try it out in Datasette Lite here . It looks like this: The new charts plugin works against any table or arbitrary SQL query in Datasette. It defines several dif"
    },
    {
     "ref": "simon_willison#5",
     "title": "Select Styling Specimens",
     "published": "2026-11-22T19:45:06+00:00",
     "summary": "Tool: Select Styling Specimens I got frustrated at how HTML <select> boxes default to looking different in different browsers, and are (I think) quite ugly in Chrome: So I had Claude Fable 5.2 build me this page showing all of the ways they can be styled: Build an HTML page that shows all of the ways a select box can be styled, I plan to take screenshots in every desktop and mobile browser After s"
    },
    {
     "ref": "simon_willison#6",
     "title": "Muru",
     "published": "2026-11-21T23:56:28+00:00",
     "summary": "Muru Graham Dumpleton started mod_wsgi 20 years ago, and has been thinking about the ideal way to serve Python web applications in production ever since. Muru is his new, AI-assisted Rust server that aims to provide the best possible tools for running ASGI and WSGI Python apps both in development and production. As he did with wrapture , he's been publishing an extraordinarily detailed account of "
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "Google alternative Kagi launches an email service",
     "published": "2026-11-24T00:02:52+00:00",
     "summary": "Kagi, which already offers a paid alternative to Google Search and its own Orion browser as a rival to Chrome, is taking on another Google service: Gmail. Today, Kagi announced a public beta of Kagi Mail, a new email service that has \"no surveillance, no ads, open standards, and no lock-in.\" With Kagi Mail, you […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The hacker behind early GTA VI leaks has been sentenced — and released",
     "published": "2026-11-23T23:25:01+00:00",
     "summary": "Arion Kurtaj, who pleaded guilty last week to hacking Grand Theft Auto VI developer Rockstar Games and other companies, including Uber and Revolut, was sentenced to seven years in prison but released on license, the BBC reports. After hacking Rockstar, Kurtaj leaked 90 videos of GTA VI in 2022, years before the game's public release […]"
    },
    {
     "ref": "the_verge#2",
     "title": "The Verge’s 2026 holiday gift guide",
     "published": "2026-11-23T23:14:10+00:00",
     "summary": "Gift-giving isn't just about grabbing something solid under a determined spending limit. It's an expression of love, a way to show someone how well you really know them. That doesn't mean you have to do it all on your own, though. Sometimes you just need a push in the right direction to get things rolling. […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Ladybird, the first new browser engine in years, is now available to test",
     "published": "2026-11-23T22:38:09+00:00",
     "summary": "Ladybird, an independent web browser with a built-from-scratch engine, is finally available for testing. On Monday, Ladybird developer Andreas Kling announced that the browser is launching in alpha on macOS and Linux following more than four years of development. The release makes Ladybird the first browser in years to arrive with an entirely new engine. […]"
    },
    {
     "ref": "the_verge#4",
     "title": "Trump engineered a risky comeback for Jensen Huang",
     "published": "2026-11-23T22:25:12+00:00",
     "summary": "After Nvidia's board accepted Jensen Huang's resignation as CEO, following reports that Huang had an affair with an alleged Chinese spy, President Donald Trump, too, appeared to submit to the new reality. Appearing on Stephen A. Smith's radio show shortly after the news came out, Trump said that Huang would \"end up on his feet.\" […]"
    },
    {
     "ref": "the_verge#5",
     "title": "Nvidia CEO Jensen Huang is back. What happens next?",
     "published": "2026-11-23T22:10:32+00:00",
     "summary": "After the leather-jacketed CEO, president, and co-founder of Nvidia, Jensen Huang, acknowledged an affair with Megaspeed exec Alice Huang, his company initially announced an investigation. However, after The New York Times reported there was evidence of another affair, this time with an Nvidia executive who reported directly to him, a board meeting that night ended […]"
    },
    {
     "ref": "the_verge#6",
     "title": "Welcome to elite impunity, Jensen Huang",
     "published": "2026-11-23T22:09:26+00:00",
     "summary": "I suppose I must issue a hearty congratulations to Jensen Huang. Huang is CEO of Nvidia again, to the surprise of basically everyone except President Donald Trump and Vice President JD Vance, who made sure it happened. Now, those of us who had some kind of basic education on what a \"free market\" is might […]"
    },
    {
     "ref": "the_verge#7",
     "title": "The Apple Watch Series 12 is cheaper than ever ahead of Black Friday",
     "published": "2026-11-23T21:36:48+00:00",
     "summary": "If you’re still sporting an Apple Watch that launched five or so years ago, now is a good time to upgrade. Apple’s latest smartwatch, the 42mm Apple Watch Series 12 with Wi-Fi and GPS connectivity, has dropped to a new all-time low of $299 ($100 off) at Amazon and Walmart, beating its most sale price […]"
    },
    {
     "ref": "the_verge#8",
     "title": "AI data centers throw another wrench into chaotic UN climate talks",
     "published": "2026-11-23T21:09:37+00:00",
     "summary": "The clean energy revolution hinges on electrifying the entire global economy just as power-hungry data centers are surging. It's a challenge delegates from all over the world had to grapple with during the United Nations climate conference, called COP31, that came to a chaotic and unsatisfying close in Antalya, Turkey, on Sunday. Each year, attendees […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Apple renews Ted Lasso for season 5",
     "published": "2026-11-23T20:56:00+00:00",
     "summary": "One of Apple's biggest shows is sticking around for at least one more season. The streamer announced today that Ted Lasso has been renewed for a fifth season on Apple TV, after what the company calls a \"record-breaking season four debut.\" There are currently no details about the new season nor when it might debut. […]"
    }
   ]
  }
 ]
}
</input>