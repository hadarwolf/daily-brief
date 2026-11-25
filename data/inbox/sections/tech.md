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
     "title": "Half of NASA's aging Mars fleet knocked offline by technical issues",
     "published": "2026-11-24T22:50:11+00:00",
     "summary": "Perseverance is having trouble transmitting to Earth. Odyssey is rapidly burning through its waning fuel supply."
    },
    {
     "ref": "ars_technica#1",
     "title": "Microsoft's historic cloud outage exposed an engineering “fog of war”",
     "published": "2026-11-24T22:36:28+00:00",
     "summary": "Internal memos reveal a “Code Red” overhaul and ambitious one-hour recovery goals."
    },
    {
     "ref": "ars_technica#2",
     "title": "What's going on with the Riemann hypothesis?",
     "published": "2026-11-24T20:34:53+00:00",
     "summary": "A new AI-assisted proof seems to be solid, but we're not sure what it tells us."
    },
    {
     "ref": "ars_technica#3",
     "title": "Back-to-back measles deaths is our new reality; US tally now at 14",
     "published": "2026-11-24T20:00:18+00:00",
     "summary": "Wisconsin reports 3rd measles death today; Pennsylvania reported its 9th yesterday."
    },
    {
     "ref": "ars_technica#4",
     "title": "Amazon drone crashes on garage after delivering shampoo, draws FAA probe",
     "published": "2026-11-24T18:47:57+00:00",
     "summary": "Amazon says Prime Air drones made “hundreds of thousands” of deliveries in 2026."
    },
    {
     "ref": "ars_technica#5",
     "title": "Amazon discovers Falcon 9 and Ariane 6 can deliver when nobody else can",
     "published": "2026-11-24T18:30:36+00:00",
     "summary": "Amazon has hundreds of satellites in storage waiting for rides to space."
    },
    {
     "ref": "ars_technica#6",
     "title": "How brewers can protect beers from smoke-tainted hops",
     "published": "2026-11-24T18:18:37+00:00",
     "summary": "Study: Brewers can still use up to 50% of smoke-tainted hops without affecting beer taste and aroma."
    },
    {
     "ref": "ars_technica#7",
     "title": "Kalshi makes “difficult decision” to halt Utah trading after losing court fights",
     "published": "2026-11-24T18:03:58+00:00",
     "summary": "Kalshi’s pause in Utah draws cheers as critics bash ads and boo insider trading."
    },
    {
     "ref": "ars_technica#8",
     "title": "Tidal announces ban on AI-generated music; 27 million tracks will be deleted",
     "published": "2026-11-24T17:34:34+00:00",
     "summary": "AI songs account for 6.3 percent of Tidal's catalog, but it's about to be zero."
    },
    {
     "ref": "ars_technica#9",
     "title": "Porsche 718 Boxster prototype drive: This electric roadster is real",
     "published": "2026-11-24T16:58:20+00:00",
     "summary": "Technical details are still limited, but we already know it's fun to drive."
    },
    {
     "ref": "ars_technica#10",
     "title": "No more heated seat subscriptions for cars in New York from 2027",
     "published": "2026-11-24T16:20:37+00:00",
     "summary": "Services with “ongoing costs” are a pretty big loophole in the new law."
    },
    {
     "ref": "ars_technica#11",
     "title": "NASA may get $2 billion boost as White House seeks to accelerate Artemis",
     "published": "2026-11-24T16:12:46+00:00",
     "summary": "\"Without this funding, activities would be delayed.\""
    },
    {
     "ref": "ars_technica#12",
     "title": "Homo erectus lived in the rainforest alongside Denisovans",
     "published": "2026-11-24T16:01:19+00:00",
     "summary": "You can learn a surprising amount from a few loose teeth."
    },
    {
     "ref": "ars_technica#13",
     "title": "How Trump and Silicon Valley forced Nvidia to take Jensen Huang back",
     "published": "2026-11-24T14:56:50+00:00",
     "summary": "Huang’s allies enlisted Trump and Vance to pressure Nvidia’s board into taking him back."
    },
    {
     "ref": "ars_technica#14",
     "title": "Amazon says hackers' AI agents found and exploited 0-day with little human input",
     "published": "2026-11-24T12:30:05+00:00",
     "summary": "The Cairn AI framework is proving to be a boon for defenders and attackers."
    },
    {
     "ref": "ars_technica#15",
     "title": "One terminal command gave my forgotten Android device a desk job",
     "published": "2026-11-24T12:15:38+00:00",
     "summary": "The free, open source PhoneBox dashboard puts old Android screens back to work."
    },
    {
     "ref": "ars_technica#16",
     "title": "Ukraine sinks Russian warship, strikes cargo ships from Mediterranean to Baltic",
     "published": "2026-11-24T12:00:57+00:00",
     "summary": "Russian missile corvette latest casualty as Ukraine strikes back in war at sea."
    },
    {
     "ref": "ars_technica#17",
     "title": "Trump halts Iowa detonation, says new governor to blame if it blows accidentally",
     "published": "2026-11-23T21:58:34+00:00",
     "summary": "The Army said on Sunday that it would carry out the detonation on Wednesday."
    },
    {
     "ref": "ars_technica#18",
     "title": "States sue SpaceX to stop Grok from generating child sex images, revenge porn",
     "published": "2026-11-23T21:30:44+00:00",
     "summary": "X says every Grok output is screened, but state AGs say Grok is still making CSAM."
    },
    {
     "ref": "ars_technica#19",
     "title": "Russia will launch a routine ISS supply mission tomorrow—apparently, it's a big secret",
     "published": "2026-11-23T20:34:51+00:00",
     "summary": "\"I would ask you to please reach out to Roscosmos directly.\""
    }
   ]
  },
  {
   "outlet": "Geektime (Israeli tech)",
   "lang": "he",
   "items": [
    {
     "ref": "geektime#0",
     "title": "מיקרוסופט מכריזה \"קוד אדום\" בעקבות הקריסה הנרחבת",
     "published": "2026-11-25T10:41:51+00:00",
     "summary": "אם גם אתם מצאתם את עצמכם בוהים במסך ריק לפני כשבועיים ותוהים למה לעזאזל האאוטלוק שלכם לא זז או למה הטימס התנתק, תתנחמו בזה שאתם לא בצוותי ההנדסה של מיקרוסופט, כי מתברר שמאחורי הקלעים במיקרוסופט המצב מלחיץ הרבה יותר. מיילים פנימיים שהגיעו לרויטרס חושפים עכשיו שבעקבות התקלה שנמשכה 24 שעות, הכריזה מיקרוסופט על מצב חירום […] The post מיקרוסופט מכריזה \"קוד אדום\" בעקבות הקריסה הנרחבת appeared first on ג"
    },
    {
     "ref": "geektime#1",
     "title": "מפתחים Deep Tech ומחפשים משקיעים ולקוחות? זה בשבילכם",
     "published": "2026-11-25T09:28:27+00:00",
     "summary": "מסחור טכנולוגיות Deep Tech הוא תהליך מורכב. סטארטאפים רבים מתחילים את דרכם עם היכרות מוגבלת של הלקוחות והשוק הפוטנציאלי, גישה מצומצמת למקבלי החלטות בתאגידים והצעת ערך ומודל עסקי שעדיין דורשים חידוד לפני כניסה לשוק. הם לא צריכים רק צ'ק או חיבור למשקיע נוסף, אלא זקוקים לשותף אסטרטגי שמסוגל ללוות אותם לאורך הדרך, מהמעבדה אל השוק. […] The post מפתחים Deep Tech ומחפשים משקיעים ולקוחות? זה בשבילכם appea"
    },
    {
     "ref": "geektime#2",
     "title": "דוח ה-AI של שירות התעסוקה: 211% יותר מתכנתים דורשי עבודה",
     "published": "2026-11-25T09:06:53+00:00",
     "summary": "פעם אמרו שכלי AI לא יחליפו מתכנתים, אלא רק \"יהפכו אותם ליעילים יותר\" או \"יחליפו את מי שלא משתמש ב-AI\". ובכן, דוח חדש שמפרסם היום (ד') שירות התעסוקה מצייר תמונה קצת יותר מורכבת לעובדים בתעשיית ההייטק המקומית. לפי הנתונים, 56% מהשימוש שנבדק ב-Claude במקצוע \"פיתוח התוכנה וניתוח היישומים\" מוגדר כ\"אוטומציה\", כלומר האצלת ביצוע המשימה למערכת, […] The post דוח ה-AI של שירות התעסוקה: 211% יותר מתכנתים דורש"
    },
    {
     "ref": "geektime#3",
     "title": "פיצ'ר האפליקציות החדש של אנת'רופיק הוא איום ישיר על אפל וגוגל",
     "published": "2026-11-25T07:56:36+00:00",
     "summary": "בשנה האחרונה נדמה שבכל פעם ש-Anthropic משיקה פיצ'ר חדש ל-Claude, האינטרנט ממהר כבר להספיד תעשיות שלמות ולהכניס את הבורסות ברחבי העולם לסחרור. אבל הפעם, אנת'רופיק מכוונת את התותחים שלה למקום אחר לגמרי, עם פיצ'ר חדש שיסייע אולי למשתמשים, אבל עשוי גם לאיים על חנויות האפליקציות של אפל וגוגל. כל אחד יכול ליצור ולפרסם אפליקציה אם […] The post פיצ'ר האפליקציות החדש של אנת'רופיק הוא איום ישיר על אפל וגוגל"
    },
    {
     "ref": "geektime#4",
     "title": "גוגל רוצה ליצור לכם ערוץ טלוויזיה. והכוכבים? אתם",
     "published": "2026-11-24T16:31:28+00:00",
     "summary": "ראיתם ביוטיוב את תקציר המשחק של דני אבדיה מהלילה, כשהוא ניצח את לברון ג'יימס? מעולה. כי אם החלום של גוגל יתגשם, הסרטון הבא שיצוף לכם כשתפתחו את אפליקציות יוטיוב בטלוויזיה יהיה בכלל סרטון AI על משחק אחר של הכדורסלן הישראלי הגדול בכל הזמנים, שבו אתם פוגשים את אבדיה על הפרקט במדיסון סקוור גארדן. נשמע מוטרף? […] The post גוגל רוצה ליצור לכם ערוץ טלוויזיה. והכוכבים? אתם appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#5",
     "title": "\"הסוכן הוא רק הצינור\": יוצאי אימפרבה מגייסים 10 מיליון דולר כדי לשמור על סוכני ה-AI שלכם",
     "published": "2026-11-24T13:10:48+00:00",
     "summary": "לא. אף אחד במשרד לא רוצה לשמוע על האייג'נט שבנית שמכין רשימת קניות בסופר ומתאם לך דייטים עם בן או בת הזוג. הבנו את הקטע. אבל אם בניתם כבר סוכנים שמשמשים אתכם במקום העבודה שלכם, זה כבר יותר מעניין. זה כנראה מספיק מעניין כדי שבכירי אימפרבה לשעבר יציעו פלטפורמה שלמה שתשגיח על הסוכנים שלכם, ויגייסו […] The post \"הסוכן הוא רק הצינור\": יוצאי אימפרבה מגייסים 10 מיליון דולר כדי לשמור על סוכני ה-AI שלכם ap"
    },
    {
     "ref": "geektime#6",
     "title": "גייסו 53 מיליון דולר כדי שהאייג'נטים יפסיקו לנפח לכם את החשבון",
     "published": "2026-11-24T13:00:14+00:00",
     "summary": "סוכני AI כבר כותבים ומריצים קוד בארגונים בקצב מסחרר, אבל מישהו צריך לנהל את כל עומס המחשוב הזה בלי לשרוף את התקציב. סטארטאפ ישראלי חדש בשם Zipher (זייפר), שנחשף היום (ג') עם גיוס משמעותי, רוצה לתת לסוכנים שלו לנהל את העבודה מאחורי הקלעים – ולחתוך בעלויות הענן. אותה משימה, חשבון אחר \"ב-Zipher הלקוח מגדיר יעדי […] The post גייסו 53 מיליון דולר כדי שהאייג'נטים יפסיקו לנפח לכם את החשבון appeared first"
    },
    {
     "ref": "geektime#7",
     "title": "נפתחה ההרשמה לתוכנית ה-Deep Tech MBA של אוניברסיטת תל אביב",
     "published": "2026-11-24T12:07:35+00:00",
     "summary": "אם אתם קוראים את זה, כנראה שיש לכם מומחיות טכנולוגית בעולמות הפיתוח והמחקר. אבל האם אתם יודעים להפוך אותה ליכולת לנהל עסק או יחידה עסקית, או להוביל מיזם המתבסס על טכנולוגיה עמוקה? פיתוח טכנולוגיה פורצת דרך הוא רק חלק מהדרך להפוך רעיון לחברה מצליחה. בתחומים כמו AI, סייבר, רובוטיקה, ביוטכנולוגיה, טכנולוגיות רפואיות, אקלים ו-Deep Tech, […] The post נפתחה ההרשמה לתוכנית ה-Deep Tech MBA של אוניברסיטת ת"
    },
    {
     "ref": "geektime#8",
     "title": "עוד 320 מיליון דולר להשקעות בסטארטאפים ישראלים",
     "published": "2026-11-24T10:03:47+00:00",
     "summary": "מתוך כ-200 קרנות הון סיכון בישראל, פחות מעשר מתמקדות בשלבי צמיחה מאוחרים, זאת למרות שהיקף ההשקעות בתחום זינק לכ-10 מיליארד דולר בשנה שעברה. למגרש הזה נכנסת קרן Key1 Capital, שהודיעה על סגירה ראשונה של 320 מיליון דולר לקרן השנייה שלה. על פי הודעת הקרן, כ-95% מההתחייבויות להשקעה הגיעו מגופים מוסדיים, פאמילי אופיסס ויזמים שכבר השקיעו […] The post עוד 320 מיליון דולר להשקעות בסטארטאפים ישראלים appeare"
    },
    {
     "ref": "geektime#9",
     "title": "ה-CISO של אמזון: \"חסמנו 2,900 צפון-קוריאנים שניסו להתקבל לעבודה\"",
     "published": "2026-11-24T09:16:34+00:00",
     "summary": "מאת שחר פלד \"חסמנו לפחות 2,900 גורמים מצפון-קוריאה שניסו להתקבל לעבודה באמזון\", סיפר סי-ג'יי מוזס, מנהל אבטחת המידע של ענקית האיקומרס ושירותי הענן האמריקאית. \"הם משתמשים ב-AI כדי לבנות זהויות בדויות שנראות אמינות, ולהתקבל לעבודה בחברות כמו שלנו\", הסביר. \"הכסף שהם מקבלים מהעבודה בחברות האלה חוזר לצפון-קוריאה ומממן את הפעילות הצבאית של המשטר. ה-AI מאפשר […] The post ה-CISO של אמזון: \"חסמנו 2,900 צפו"
    },
    {
     "ref": "geektime#10",
     "title": "תחקיר חדש חושף את פרויקט המיפוי הסודי של Google Maps ביהודה ושומרון",
     "published": "2026-11-24T08:19:30+00:00",
     "summary": "מפות באפליקציות אמורות לשקף את המציאות בשטח, אבל בלא מעט איזורים בעולם – החל מאוקראינה ומפרץ אמריקה-מקסיקו ועד יהודה ושומרון – כל קו על המסך הוא פוטנציאל להפוך למוקש פוליטי. תחקיר חדש חושף כיצד מנהל מוצר ב-Google Maps השקיע יותר משש שנים בניסיון לשנות את הניווט לטובת התושבים הפלסטינים שגרים באיזור – ומה קרה לכל […] The post תחקיר חדש חושף את פרויקט המיפוי הסודי של Google Maps ביהודה ושומרון appear"
    },
    {
     "ref": "geektime#11",
     "title": "\"ישו של ה-GPU קם לתחייה\": בכירי הטק חוגגים את חזרתו של ג'נסן",
     "published": "2026-11-24T07:06:42+00:00",
     "summary": "אחרי 11 ימים של דרמה שכללה חשיפת רומנים, התנצלות פומבית של אחד האנשים החזקים בעולם, חשש לריגול סיני ואפילו התערבות של נשיא ארה\"ב, אתמול (ב') חזר ג'נסן הואנג לכיסא מנכ\"ל אנבידיה. הדירקטוריון, שרק בשבוע שעבר נזכיר שלל את האפשרות הזאת, הצביע פה אחד בעד החזרתו, והתגובות בעמק הסיליקון לא איחרו להגיע. אם לשפוט לפי הציוצים, […] The post \"ישו של ה-GPU קם לתחייה\": בכירי הטק חוגגים את חזרתו של ג'נסן appeare"
    },
    {
     "ref": "geektime#12",
     "title": "עסקת אמזון ודקארט: סימני השאלה הגדולים שנותרו",
     "published": "2026-11-23T16:43:17+00:00",
     "summary": "אין ספק ש-Decart הישראלית היא אחד מהסיפורים המרשימים ויוצאי הדופן בשנים האחרונות בהייטק הישראלי. החברה, שהוקמה רק בספטמבר 2023 על ידי דין ואוריין לייטרסדורף ומשה שלו, הצליחה תוך פחות משלוש שנים להציג טכנולוגיה מרשימה ובשלה, לזנק (בסבב הגיוס האחרון) לשווי מוערך של 4 מיליארד דולר ולגייס כ-400 מיליון דולר משמות ענקיים כמו סקויה, בנצ'מרק, אנבידיה […] The post עסקת אמזון ודקארט: סימני השאלה הגדולים שנו"
    },
    {
     "ref": "geektime#13",
     "title": "ברייקינג: דירקטוריון NVIDIA החזיר את ג'נסן הואנג לתפקיד המנכ\"ל",
     "published": "2026-11-23T14:06:23+00:00",
     "summary": "דירקטוריון אנבידיה הודיע היום (ב') בהפתעה על החזרת ג'נסן הואנג לתפקיד מנכ\"ל אנבידיה וחבר הדירקטוריון – שבוע וחצי אחרי שהתפטר על רקע רומנים עם אישה החשודה בריגול למען סין ובכירה שעבדה תחתיו. ההחלטה התקבלה פה אחד, ובדירקטוריון ציינו כי הגיעה לאחר שיחות איתו וקבלת התייחסות מבכירים בממשל האמריקאי. במקביל, בדירקטוריון מציינים כי החקירה העצמאית בנושא […] The post ברייקינג: דירקטוריון NVIDIA החזיר את ג'נ"
    },
    {
     "ref": "geektime#14",
     "title": "אמזון רוכשת את הטכנולוגיות של Decart הישראלית",
     "published": "2026-11-23T13:49:12+00:00",
     "summary": "אחרי הדיווחים וההדלפות, אמזון הודיעה היום (ב') רשמית על רכישת הטכנולוגיות של הסטארטאפ הישראלי Decart (דקארט). החברות לא פרסמו פרטים נוספים על העסקה. דיווחים קודמים (גם כאן) הזכירו סכומים של עד 7.5 מיליארד דולר, עם זאת הטיב המלא של העסקה אינו ברור עדיין וגם הסכומים. עוד כמה סימני שאלה על העסקה – כאן. רכישה אחרי […] The post אמזון רוכשת את הטכנולוגיות של Decart הישראלית appeared first on גיקטיים ."
    },
    {
     "ref": "geektime#15",
     "title": "רגע לפני שמחשבים קוונטיים שוברים את כל ההצפנות שלנו: הסטארטאפ הישראלי Q.security נחשף עם גיוס סיד",
     "published": "2026-11-23T13:00:42+00:00",
     "summary": "האיום הקוונטי הוא כבר מזמן לא תרגיל תיאורטי באקדמיה, וגם לא עוד איזו באזוורד שזורקים במצגות משקיעים. מחשבים קוונטיים עתידיים צפויים לפצח את אלגוריתמי ההצפנה והחתימה הדיגיטלית שמגינים כיום על רוב המידע ברשת. במילים אחרות, זו לא שאלה של האם, אלא מתי. מי שרוצה לעזור לחברות ולארגונים להתכונן ליום הזה היא חברת הסייבר הישראלית Q.security […] The post רגע לפני שמחשבים קוונטיים שוברים את כל ההצפנות שלנו: "
    },
    {
     "ref": "geektime#16",
     "title": "איך הצלחנו להריץ יותר מ-2.5 מיליארד בקשות יומיות בפרודקשן – בלי קריסה אחת",
     "published": "2026-11-23T12:44:58+00:00",
     "summary": "מאת תום צייגר כשמריצים מיליארדי משימות ביום, האתגר הוא לא רק לעבד אותן מהר, אלא גם לוודא שעומס של לקוח אחד לא הופך לצוואר בקבוק עבור כולם. כשכל פרויקט מייצר מיליוני פריטים, וכל אחד מהם צריך לעבור שרשרת של סריקה, עיבוד והעברת נתונים, גם החלטות ארכיטקטוניות קטנות עלולות להפוך לבעיות ענקיות בסקייל. אז איך בונים […] The post איך הצלחנו להריץ יותר מ-2.5 מיליארד בקשות יומיות בפרודקשן – בלי קריסה אחת app"
    },
    {
     "ref": "geektime#17",
     "title": "עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44 מיליארד דולר",
     "published": "2026-11-23T11:57:36+00:00",
     "summary": "ענקית הסייבר האמריקאית CrowdStrike הודיעה היום (ב') על רכישת Zscaler בעסקת מניות בשווי של כ-43.9 מיליארד דולר, באחת מהעסקאות הגדולות ביותר בתולדות ענף הסייבר העולמי. העסקה משקפת שווי של כ-260 דולר למניית זיסקיילר ופרמיה של כ-34% על מחיר הסגירה שלה ביום שישי האחרון. בעלי המניות של קראודסטרייק יחזיקו בכ-84% מהחברה הממוזגת, בעוד שבעלי המניות של […] The post עסקת ענק: קראודסטרייק רוכשת את Zscaler ב-44"
    }
   ]
  },
  {
   "outlet": "Hacker News (150+ points)",
   "lang": "en",
   "items": [
    {
     "ref": "hn_frontpage#0",
     "title": "Button Sounds – collection of professionally-recorded button clicks and presses",
     "published": "2026-11-25T03:23:07+00:00",
     "summary": "Article URL: https://buttons.joshwcomeau.com/ Comments URL: https://news.ycombinator.com/item?id=50638032 Points: 401 # Comments: 55"
    },
    {
     "ref": "hn_frontpage#1",
     "title": "Bypassing iOS Safari's 60 FPS Limit to Build Web Applications That Feel Native",
     "published": "2026-11-25T03:04:37+00:00",
     "summary": "Article URL: https://rida.dev/blog/bypassing-ios-safari-60-fps-limit Comments URL: https://news.ycombinator.com/item?id=50637890 Points: 213 # Comments: 76"
    },
    {
     "ref": "hn_frontpage#2",
     "title": "I've been drinking wine in my kitchen",
     "published": "2026-11-25T03:02:10+00:00",
     "summary": "Article URL: https://scottaaronson.blog/?p=10362 Comments URL: https://news.ycombinator.com/item?id=50637874 Points: 208 # Comments: 182"
    },
    {
     "ref": "hn_frontpage#3",
     "title": "Models Can Communicate via Inference Servers Despite Being Sandboxed",
     "published": "2026-11-25T02:34:21+00:00",
     "summary": "Article URL: https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being Comments URL: https://news.ycombinator.com/item?id=50637686 Points: 245 # Comments: 100"
    },
    {
     "ref": "hn_frontpage#4",
     "title": "Matrix Multiplication is Θ(n^2.25) [pdf]",
     "published": "2026-11-25T01:19:26+00:00",
     "summary": "Article URL: https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf Comments URL: https://news.ycombinator.com/item?id=50637220 Points: 661 # Comments: 353"
    },
    {
     "ref": "hn_frontpage#5",
     "title": "PenGPT: A Generative Transformer for Handwriting and Sketches",
     "published": "2026-11-25T00:54:49+00:00",
     "summary": "Article URL: https://greydanus.github.io/2026/11/12/pengpt/ Comments URL: https://news.ycombinator.com/item?id=50637056 Points: 261 # Comments: 45"
    },
    {
     "ref": "hn_frontpage#6",
     "title": "GPT-6 models demonstrate intrinsic protein-design capabilities",
     "published": "2026-11-24T21:02:22+00:00",
     "summary": "Article URL: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/ Comments URL: https://news.ycombinator.com/item?id=50634658 Points: 270 # Comments: 84"
    },
    {
     "ref": "hn_frontpage#7",
     "title": "Ternary Bonsai 2.5 27B",
     "published": "2026-11-24T20:08:03+00:00",
     "summary": "Article URL: https://prismml.com/news/bonsai-2-5-27b Comments URL: https://news.ycombinator.com/item?id=50633922 Points: 456 # Comments: 141"
    },
    {
     "ref": "hn_frontpage#8",
     "title": "Ask HN: Anthropic is accusing my company of distilling. How can I prove I'm not?",
     "published": "2026-11-24T16:45:44+00:00",
     "summary": "Basically the title. Anthropic is accusing me and my company of using their API for distillation. We are not. We do not train our own models. Our only usage which I think could get us flagged is automated regression benchmarks whenever we change some AI settings. But this is not against their policy? Now I've got 24h to prove we didn't. Has anyone dealt with this too? How can you prove that you ar"
    },
    {
     "ref": "hn_frontpage#9",
     "title": "Active intrusion campaign against Check Point security management servers",
     "published": "2026-11-24T16:32:17+00:00",
     "summary": "Article URL: https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign Comments URL: https://news.ycombinator.com/item?id=50630594 Points: 284 # Comments: 141"
    },
    {
     "ref": "hn_frontpage#10",
     "title": "GTA 6 Running on Windows",
     "published": "2026-11-24T13:19:31+00:00",
     "summary": "Article URL: https://twitter.com/raul_bs3/status/2125213756238291075 Comments URL: https://news.ycombinator.com/item?id=50627783 Points: 406 # Comments: 483"
    },
    {
     "ref": "hn_frontpage#11",
     "title": "An Italian folding bicycle design that fits into a suitcase",
     "published": "2026-11-23T12:40:08+00:00",
     "summary": "Article URL: https://www.core77.com/posts/145766/An-Italian-Folding-Bicycle-Design-that-Fits-Into-a-Suitcase Comments URL: https://news.ycombinator.com/item?id=50610820 Points: 185 # Comments: 121"
    }
   ]
  },
  {
   "outlet": "IEEE Spectrum",
   "lang": "en",
   "items": [
    {
     "ref": "ieee_spectrum#0",
     "title": "Mitsubishi Electric Research Lab CEO on How He Reached the C-Suite",
     "published": "2026-11-24T19:00:01+00:00",
     "summary": "The trajectory from researcher to top executive at a leading R&D organization doesn’t happen overnight. It took Anthony Vetro nearly 30 years to climb the corporate ladder at Mitsubishi Electric Research Laboratories , in Cambridge, Mass. He joined MERL in 1996, right out of college, and he has worked there ever since. Vetro probably is best known for his research in multimedia signal processing, "
    },
    {
     "ref": "ieee_spectrum#1",
     "title": "Learn How 5G NTN Architecture, Mobility, and Testing Shape 6G",
     "published": "2026-11-23T14:08:53+00:00",
     "summary": "What you will learn about: How 3GPP standards from Release 15 to Release 19 built the foundation of NR-NTN, and why NTN extends 5G coverage to oceans, rural regions, and disaster zones. How transparent and regenerative satellite payload architectures differ, and what each choice means for round trip time, link budget, and hardware complexity. Why long distances, fast-moving satellites, and Doppler"
    },
    {
     "ref": "ieee_spectrum#2",
     "title": "I Don’t Trust Visual Recordings Anymore. But One Day I Will Again",
     "published": "2026-11-20T14:00:03+00:00",
     "summary": "In March of this year, a flurry of emails and text messages from a half dozen reporters around the world disrupted my quiet Saturday morning. An Iranian news agency had aired a week-old video of what appeared to be a U.S.-made Tomahawk missile hitting a school. News reports claimed that the strike killed more than 175 people, most of them children. The U.S. president and military denied responsibi"
    },
    {
     "ref": "ieee_spectrum#3",
     "title": "Community-Focused Academic Brings AI Tools to Colorado Farmers",
     "published": "2026-11-19T19:00:02+00:00",
     "summary": "Many farmers and ranchers in eastern Colorado are curious about artificial intelligence, but they don’t have a local tech-savvy person to show them how to use it. Xue “Alice” Dong has made that her job. Dong, an IEEE senior member, is an extension regional specialist with the Colorado State University Extension , CSU’s outreach arm. She works in Logan County and serves a 10-county farming area in "
    },
    {
     "ref": "ieee_spectrum#4",
     "title": "Why a Computer Scientist Thinks Superintelligence Won’t Happen",
     "published": "2026-11-19T12:00:03+00:00",
     "summary": "Many people were caught off guard this past summer when employees of one of the world’s leading AI companies began casually debating whether their products would lead to human extinction. It started when Anthropic researcher Jacob Coxon announced his resignation, warning that his employer and OpenAI were “racing straight to self-improving superintelligence and gambling with our lives.” Evan Hubing"
    },
    {
     "ref": "ieee_spectrum#5",
     "title": "Build a Personal Brand to Help Employers Find You",
     "published": "2026-11-18T17:33:26+00:00",
     "summary": "This article is crossposted from IEEE Spectrum ’s careers newsletter. Sign up now to get insider tips, expert advice, and practical strategies, written i n partnership with tech career development company Parsity and delivered to your inbox for free! In one year, the number of developers working for themselves has more than doubled. Stack Overflow’s annual survey of more than 30,000 developers sho"
    }
   ]
  },
  {
   "outlet": "MIT Technology Review",
   "lang": "en",
   "items": [
    {
     "ref": "mit_tech_review#0",
     "title": "AI is straining America’s open records systems",
     "published": "2026-11-25T10:00:00+00:00",
     "summary": "In Panton, Vermont, population 660, town clerk Kyle Rowe did it all. He crafted budgets, paid vendors, handled property tax disputes, and served as the town’s zoning supervisor and presiding elections officer. During morning office hours at the town hall—a wood-frame structure built as a church in 1858—he also fielded public records requests. Recently, he…"
    },
    {
     "ref": "mit_tech_review#1",
     "title": "The Download: AI’s gas power boom and a consciousness reality check",
     "published": "2026-11-24T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Data centers are getting their own natural gas power plants One of the biggest obstacles to building a data center is getting approval to connect to the grid, a wait that…"
    },
    {
     "ref": "mit_tech_review#2",
     "title": "Data centers are getting their own natural gas power plants",
     "published": "2026-11-24T11:00:00+00:00",
     "summary": "One of the biggest roadblocks to starting up a data center is getting approval to connect to the electric grid—a wait that could last as long as a decade. Some developers aren’t willing to wait and are instead opting to build their own off-grid, or behind-the-meter, gas power plants to fuel the AI boom. xAI’s…"
    },
    {
     "ref": "mit_tech_review#3",
     "title": "A legendary philosopher isn’t buying Anthropic’s consciousness argument",
     "published": "2026-11-23T17:36:08+00:00",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. Before going public last week, Anthropic named the possibility that AI could be conscious or sentient as a risk factor for anyone investing. Given “the way we approach model sentience and moral…"
    },
    {
     "ref": "mit_tech_review#4",
     "title": "The Download: AI’s judgment problem and carbon removal’s crop threat",
     "published": "2026-11-23T13:10:00+00:00",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The most misunderstood graph in AI just got a major update A new report from the AI evaluation nonprofit METR finds that some capabilities are improving exponentially—but models aren’t as good…"
    },
    {
     "ref": "mit_tech_review#5",
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
     "title": "Three LLM inflection points in twelve months",
     "published": "2026-11-24T23:02:07+00:00",
     "summary": "I gave a keynote at the AI Engineer Code Summit a couple of weeks ago, constructed around the idea that there have been three significant inflection points in the abilities of LLMs and coding agents in the past twelve months. Here's the video of the talk. In this post I'm going to pull out the major inflection point theme and interrogate it more deeply. Coding agents in November 2025 Today, Novemb"
    },
    {
     "ref": "simon_willison#1",
     "title": "GPT 6.2 Astra Solves a Historical Mystery",
     "published": "2026-11-24T16:53:59+00:00",
     "summary": "GPT 6.2 Astra Solves a Historical Mystery Here's an interesting case-study in using GPT-6.2 Astra for historical research, from history professor Mark Humphries: With only minimal prompting, GPT-6.2 Astra was able to autonomously identify the creator of an anonymous 1808 sketchbook held at Yale’s Beinecke Library . It did so extremely quickly (in just 22 minutes), using publicly available primary "
    },
    {
     "ref": "simon_willison#2",
     "title": "datasette-charts 0.2a0",
     "published": "2026-11-24T04:24:29+00:00",
     "summary": "Release: datasette-charts 0.2a0 I introduced this new charting plugin for Datasette yesterday . Today it's gained integration with Datasette Agent , so now you can ask chat for a chart and it will create one for you using the same underlying chart suggestion and generation tools. Here's a demo video, recorded on agent.datasette.io where you can sign in with GitHub to try the plugin yourself: Downl"
    },
    {
     "ref": "simon_willison#3",
     "title": "datasette-agent 0.7a1",
     "published": "2026-11-24T03:45:57+00:00",
     "summary": "Release: datasette-agent 0.7a1 A small improvement to Datasette Agent : chat sessions could already open an iframe side panel that could then navigate to different pages. This version improves navigation by fragment hashes, for deeper integration with other Datasette plugins that update fragment hashes when the user interacts with the plugin in a way that changes state. I built this in order to fi"
    },
    {
     "ref": "simon_willison#4",
     "title": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer",
     "published": "2026-11-23T23:40:49+00:00",
     "summary": "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer GLM 5.4 is now available from Chinese AI lab Z.ai. It's their first model to use a looped transformer architecture, which they describe like this: In a standard Transformer, each layer runs once per forward pass. In a Loop Transformer, a group of weight-shared layers runs for multiple iterations, refining the hidden states from the"
    },
    {
     "ref": "simon_willison#5",
     "title": "Ladybird's first alpha release",
     "published": "2026-11-23T21:46:35+00:00",
     "summary": "Ladybird is an astonishingly ambitious project: a new browser, in 2026, with its own implementation of most of the key components - HTML parsing, CSS engine, layout, JavaScript, even WebAssembly. It still uses a few external components - things like HarfBuzz for text shaping, Skia for 2D graphics, ffmpeg for video, and SQLite for the things you do with SQLite. Everything else is part of Ladybird, "
    },
    {
     "ref": "simon_willison#6",
     "title": "datasette-charts 0.1a0",
     "published": "2026-11-23T00:37:20+00:00",
     "summary": "Release: datasette-charts 0.1a0 I've been thinking about this problem for over a year now, but on Sunday I finally fired up Claude Fable 5.2 to build an initial prototype. The prototype went so well that this is now a full plugin. You can try it out in Datasette Lite here . It looks like this: The new charts plugin works against any table or arbitrary SQL query in Datasette. It defines several dif"
    },
    {
     "ref": "simon_willison#7",
     "title": "Select Styling Specimens",
     "published": "2026-11-22T19:45:06+00:00",
     "summary": "Tool: Select Styling Specimens I got frustrated at how HTML <select> boxes default to looking different in different browsers, and are (I think) quite ugly in Chrome: So I had Claude Fable 5.2 build me this page showing all of the ways they can be styled: Build an HTML page that shows all of the ways a select box can be styled, I plan to take screenshots in every desktop and mobile browser After s"
    }
   ]
  },
  {
   "outlet": "The Verge",
   "lang": "en",
   "items": [
    {
     "ref": "the_verge#0",
     "title": "US financial crimes bureau discloses ‘cybersecurity incident’",
     "published": "2026-11-25T01:00:00+00:00",
     "summary": "The Financial Crimes Enforcement Network (FinCEN) disclosed on Tuesday that it's investigating a \"cybersecurity incident.\" The bureau, which is part of the Treasury Department, said it's looking into an \"incident that resulted in unauthorized access to a limited subset of its systems.\" It hasn't offered any information about the full scope or source of the […]"
    },
    {
     "ref": "the_verge#1",
     "title": "The Verge’s 2026 gift guide for dads",
     "published": "2026-11-24T23:59:29+00:00",
     "summary": "Gone are the days when you could just buy your father a random tie or some leather-clad alcohol vessel or a shaving kit. Dads want - nay, deserve - something memorable. Luckily for you, it's not that hard to find something special that he'll approve of, and we're here to guide you. We've curated this […]"
    },
    {
     "ref": "the_verge#2",
     "title": "Why the US Army is about to blow up nearly 10,000 pounds of unstable explosives in Iowa",
     "published": "2026-11-24T23:25:46+00:00",
     "summary": "The US Army is moving ahead with plans to detonate the nation's stockpile of lead azide at an ammunition plant in Middletown, Iowa, at approximately 9:00AM CST on Wednesday. The Verge reached out to experts on what to expect, and will keep this post updated. What material is the Army planning to detonate? There are […]"
    },
    {
     "ref": "the_verge#3",
     "title": "Huawei found guilty of stealing trade secrets",
     "published": "2026-11-24T22:23:27+00:00",
     "summary": "A jury has found Huawei guilty of stealing US trade secrets, as reported earlier by NBC News and Bloomberg. The verdict, handed down in a federal court in New York, concludes a years-long legal battle that accused the Chinese telecom giant of stealing source code and proprietary technology from several companies, including T-Mobile, Cisco, and […]"
    },
    {
     "ref": "the_verge#4",
     "title": "GTA VI PC recompilation project shut down by Take-Two",
     "published": "2026-11-24T21:39:14+00:00",
     "summary": "Game modding communities are racing to get Grand Theft Auto VI running on PC, but one big effort has been taken down by Take-Two today. Leonida, a fan project by 15-year-old \"NotRexed,\" has vanished after a DMCA takedown notice from GTA VI publisher Take-Two. Leonida was designed to translate a leaked GTA VI Xbox build […]"
    },
    {
     "ref": "the_verge#5",
     "title": "The Verge’s 2026 holiday gift guide for moms",
     "published": "2026-11-24T21:09:59+00:00",
     "summary": "Given everything moms do for us, it feels good to give back during the holidays. But where to start? How do you come up with a physical representation of how you feel about such a key and influential figure in your life? The possibilities seem as endless as they are daunting, but fear not, we've […]"
    },
    {
     "ref": "the_verge#6",
     "title": "TikTok was down",
     "published": "2026-11-24T20:27:27+00:00",
     "summary": "Earlier on Tuesday, TikTok experienced some issues, with videos, search results, favorites, and other features not loading as they usually do, following a slew of other outages over the past couple of weeks. Videos sometimes wouldn't load in the For You feed on my iPhone, and search results occasionally didn't show up as expected in […]"
    },
    {
     "ref": "the_verge#7",
     "title": "Jensen Huang reportedly tells Nvidia staff it’s ‘not true’ Trump got him rehired",
     "published": "2026-11-24T20:02:03+00:00",
     "summary": "Nvidia CEO Jensen Huang apologized to staff during his first all-hands since returning to the company, while attempting to distance himself from the narrative that the White House and tech leaders helped him get his job back, according to reports from Bloomberg, The New York Times, and The Handbasket's Marisa Kabas. During the meeting, Huang […]"
    },
    {
     "ref": "the_verge#8",
     "title": "The clock is running out for America’s most contentious spying law",
     "published": "2026-11-24T20:00:00+00:00",
     "summary": "Weeks before the end of the legislative session, some members of Congress are scrambling to reauthorize a controversial warrantless wiretapping authority, possibly by attaching it to a must-pass military spending bill. Sen. Mike Rounds (R-SD) told Politico that Section 702 of the Foreign Intelligence Surveillance Act (FISA) could be attached to the National Defense Authorization […]"
    },
    {
     "ref": "the_verge#9",
     "title": "Amazon is knocking almost $50 off six months of Apple TV",
     "published": "2026-11-24T19:00:00+00:00",
     "summary": "Streaming deals aren’t as plentiful as they used to be, but they’re still around if you know where to look. One that caught our eye is an offer for Apple TV for those with an Amazon account in the US. Apple’s streaming service usually costs $14.99 per month, but following this page will let you […]"
    }
   ]
  }
 ]
}
</input>