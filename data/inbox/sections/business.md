Write the Business & Economics section: 1 substantive story.

- Choose a company move, an industry shift or a macro trend. It should teach how business or economics works, not just report that a price moved.
- Use kind "analysis".
- Use precise business and economics terminology; the reader wants fluency in it.
- markets_snapshot is context only. The app displays it separately, so don't write a markets story unless there is a genuine market event.

This section opens in English by default, so make the English version your best writing.

Output: write `drafts/business.json` matching `schemas/business.schema.json`.

<input>
{
 "news_feeds": [
  {
   "outlet": "Bloomberg — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "bloomberg_markets#0",
     "title": "Japan’s 10-Year Bond Sale Demand Stronger Than 12-Month Average",
     "published": "2026-10-06T03:40:07+00:00",
     "summary": "Japan’s 10-year government bond auction Tuesday saw stronger demand than the 12-month average as elevated yields underpinned buying."
    },
    {
     "ref": "bloomberg_markets#1",
     "title": "Ray Dalio Warns of US Debt Crisis Within Three Years",
     "published": "2026-10-06T03:37:51+00:00",
     "summary": "Bridgewater Associates Founder Ray Dalio warns that the US is approaching the limits of its debt cycle, predicting a potential crisis within three years as spending outpaces revenue. He cautions that rising borrowing costs and weakening demand from key foreign buyers may squeeze lower-income borrowers first. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#2",
     "title": "Moonshot Said to Eye Early 2027 IPO After Value Hits $50 Billion",
     "published": "2026-10-06T03:14:18+00:00",
     "summary": "Moonshot AI has closed the final round of private fundraising at a valuation of about $50 billion and is heading toward an initial public offering in Hong Kong in the first quarter of next year, according to people familiar with the matter. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#3",
     "title": "Copper Rises for Third Day as Tech Rally Lifts Risk Appetite",
     "published": "2026-10-06T02:47:36+00:00",
     "summary": "Copper rose for a third day, tracking gains in Asian equities after a tech-led rally on Wall Street."
    },
    {
     "ref": "bloomberg_markets#4",
     "title": "Moonshot Said to Eye Early 2027 IPO After Value Hits $50 Billion",
     "published": "2026-10-06T02:32:25+00:00",
     "summary": "Moonshot AI has closed the final round of private fundraising at a valuation of about $50 billion and is heading toward an initial public offering in Hong Kong in the first quarter of next year, according to people familiar with the matter."
    },
    {
     "ref": "bloomberg_markets#5",
     "title": "Seasonality, Valuations Give Indian Banks an Edge Over the Nifty",
     "published": "2026-10-06T02:30:01+00:00",
     "summary": "The banking gauge is trading at a price-to-book multiple of 1.55, its lowest since 2020."
    },
    {
     "ref": "bloomberg_markets#6",
     "title": "Citi Strategist Says JGBs Becoming Appealing as Yields Near Peak",
     "published": "2026-10-06T01:40:57+00:00",
     "summary": "A Citigroup Inc. strategist sees Japanese government bond yields nearing their peaks and expects financial institutions to step up investments once the fiscal policy outlook becomes clearer."
    },
    {
     "ref": "bloomberg_markets#7",
     "title": "Philippines’ Inflation Tops Estimates on Pricier Food, Fuel",
     "published": "2026-10-06T01:05:27+00:00",
     "summary": "Philippine inflation gained pace again and exceeded economists’ estimates in September as food and fuel prices surged, backing the case for the central bank to further raise its policy rate."
    },
    {
     "ref": "bloomberg_markets#8",
     "title": "New World Seeks More Time to Pay Bonds With $1 Billion Swap",
     "published": "2026-10-06T00:36:05+00:00",
     "summary": "New World Development Co., the stressed Hong Kong developer that’s become a symbol of the city’s efforts to move past its property slump, is seeking to buy more time to pay off creditors with a new bond exchange offer."
    },
    {
     "ref": "bloomberg_markets#9",
     "title": "Nidec Scandal Sends Bonds Tumbling in Test for New President",
     "published": "2026-10-06T00:30:02+00:00",
     "summary": "Scandal-tainted Nidec Corp., which grew from a startup into the world’s largest manufacturer of precision motors, has fallen to the bottom rank of the yen debt market by one measure, leaving its new president with a challenge to restore investor confidence."
    },
    {
     "ref": "bloomberg_markets#10",
     "title": "Japan's Takaichi Pitches Food Tax Cut, Investment Plan",
     "published": "2026-10-06T00:18:56+00:00",
     "summary": "Bloomberg's Sakura Murakami breaks down Japanese Prime Minister Sanae Takaichi's address to parliament outlining a temporary tax relief on food combined with targeted measures to maintain market discipline. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#11",
     "title": "Higher Bond Yields Will Pressure Australia Budget, Chalmers Says",
     "published": "2026-10-05T23:44:59+00:00",
     "summary": "Higher global bond yields will put pressure on the Australian budget as debt refinancing costs rise, according to Australian Treasurer Jim Chalmers. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#12",
     "title": "Gold Steadies as Stronger Dollar and Yields Weigh on Rate Path",
     "published": "2026-10-05T23:39:14+00:00",
     "summary": "Gold was steady as traders weighed the impact of a stronger dollar and higher Treasury yields on the Federal Reserve’s path for interest rates."
    },
    {
     "ref": "bloomberg_markets#13",
     "title": "Australia’s Consumer Confidence Tumbles Further After Rate Hike",
     "published": "2026-10-05T23:30:00+00:00",
     "summary": "Australia’s consumer confidence declined further in October, driven by the Reserve Bank’s interest-rate increase and ongoing pressure from fuel prices, with households reporting growing unease over the jobs outlook."
    },
    {
     "ref": "bloomberg_markets#14",
     "title": "S&P 500 Closes In on Record High as Tech Rallies: Markets Wrap",
     "published": "2026-10-05T23:13:44+00:00",
     "summary": "Global stocks edged up toward record highs as investors shrugged off concerns about elevated oil prices and bond yields near multi-decade highs."
    },
    {
     "ref": "bloomberg_markets#15",
     "title": "A Trader’s Guide to Navigating Malaysia’s 2027 Budget Plan",
     "published": "2026-10-05T23:00:00+00:00",
     "summary": "Malaysia’s consumer and construction stocks may emerge as beneficiaries of next year’s spending plan as Prime Minister Anwar Ibrahim seeks to ease living costs while maintaining fiscal prudence."
    },
    {
     "ref": "bloomberg_markets#16",
     "title": "Latest Oil Market News and Analysis for Oct. 6",
     "published": "2026-10-05T22:03:37+00:00",
     "summary": "Oil steadied after losing about 2% on Monday, as rising Persian Gulf exports and a price cut by Saudi Arabia pointed to a looser market."
    },
    {
     "ref": "bloomberg_markets#17",
     "title": "LA Schools Face High Fiscal Solvency Risk, State Report Says",
     "published": "2026-10-05T19:41:36+00:00",
     "summary": "The Los Angeles Unified School District has a high fiscal solvency risk level as its yearslong enrollment decline continues, according to a new analysis from California officials."
    },
    {
     "ref": "bloomberg_markets#18",
     "title": "Japanese Rivals Study Bids for TK Elevator’s European Assets",
     "published": "2026-10-05T16:10:33+00:00",
     "summary": "Japanese elevator makers including Mitsubishi Electric Corp. are among potential suitors set to study bids for European operations being sold by TK Elevator, people with knowledge of the matter said."
    },
    {
     "ref": "bloomberg_markets#19",
     "title": "GPIF Didn’t Discuss Portfolio Allocation, Damping Speculation",
     "published": "2026-10-05T11:16:02+00:00",
     "summary": "Japan’s Government Pension Investment Fund didn’t discuss portfolio allocation at a meeting last month, damping speculation that the $2 trillion fund will respond to calls from Prime Minister Sanae Takaichi’s administration to increase its purchases of assets in Japan."
    }
   ]
  },
  {
   "outlet": "Financial Times",
   "lang": "en",
   "items": [
    {
     "ref": "ft_home#0",
     "title": "Hong Kong quizzes HSBC over Singapore AI hub decision",
     "published": "2026-10-06T01:32:21+00:00",
     "summary": "Monetary authority strives to bolster Chinese territory’s status as international financial capital"
    },
    {
     "ref": "ft_home#1",
     "title": "Trump says Maga Inc will pay for ads instead of taxpayers after backlash",
     "published": "2026-10-06T00:54:30+00:00",
     "summary": "US president reverses course after defending television spots that ran during National Football League games and ‘Saturday Night Live’"
    },
    {
     "ref": "ft_home#2",
     "title": "Trump eases red diesel limits in attempt to quell fuel inflation",
     "published": "2026-10-06T00:46:01+00:00",
     "summary": "US president announces the move during a trip to the agricultural state of Nebraska"
    },
    {
     "ref": "ft_home#3",
     "title": "Wall Street banks launch record $60bn chip deal for Broadcom and Anthropic",
     "published": "2026-10-05T20:58:19+00:00",
     "summary": "Syndication of the massive financing package tests lending appetite amid growing concerns over mounting AI debt"
    },
    {
     "ref": "ft_home#4",
     "title": "TotalEnergies boss hails ‘opportunities’ created by global market turmoil",
     "published": "2026-10-05T17:33:36+00:00",
     "summary": "Patrick Pouyanné says he prefers ‘disruption to the peaceful world’ despite French major being among those most affected by Middle East conflict"
    },
    {
     "ref": "ft_home#5",
     "title": "French central bank head warns country at risk of being ‘strangled by interest rates’",
     "published": "2026-10-05T16:56:54+00:00",
     "summary": "Emmanuel Moulin says France can still reassure bond investors despite ‘serious and worrying’ market moves in recent days"
    },
    {
     "ref": "ft_home#6",
     "title": "Citi to speed up promotion path for junior bankers as hiring war heats up",
     "published": "2026-10-05T15:49:40+00:00",
     "summary": "Length of investment banking analyst programme to be cut to two years to try to stave off poaching of young workers by private equity"
    },
    {
     "ref": "ft_home#7",
     "title": "Euro slides to 17-month low against dollar",
     "published": "2026-10-05T15:44:32+00:00",
     "summary": "High energy prices and concerns over France’s public finances add to pressure on the single currency"
    },
    {
     "ref": "ft_home#8",
     "title": "Putin’s nuclear threats no longer work",
     "published": "2026-10-05T11:38:08+00:00",
     "summary": "The weakening of Russian deterrence has global implications — and they are not all positive"
    },
    {
     "ref": "ft_home#9",
     "title": "Bond turbulence means it’s time for the ECB to put QT on hold",
     "published": "2026-10-05T10:22:05+00:00",
     "summary": "Prudence suggests a halt by the central bank until more stable conditions are restored"
    },
    {
     "ref": "ft_home#10",
     "title": "How the booming US healthcare economy is penalising patients",
     "published": "2026-10-05T10:00:05+00:00",
     "summary": "A collision of demographic, economic and financial forces has caused a crisis in the sector"
    },
    {
     "ref": "ft_home#11",
     "title": "Trump rages as Supreme Court appointees fail to do his bidding",
     "published": "2026-10-05T04:00:04+00:00",
     "summary": "Relationship may sour further as top court prepares to rule on some of the president’s controversial policies"
    }
   ]
  },
  {
   "outlet": "TheMarker",
   "lang": "he",
   "items": [
    {
     "ref": "themarker#0",
     "title": "מהפך: בורסת יוון משגשגת בעוד הבורסה הצרפתית מקרטעת",
     "published": "2026-10-06T03:14:22+00:00",
     "summary": "בעשור הקודם יוון התמודדה עם משבר חובות שהוביל לצעדי צנע ורפורמות מבניות ■ בשנים האחרונות, יוון מתחילה להרגיש את ההשפעות הרפורמות, עם צמצום ביחס חוב־תוצר ועלייה במניות הבנקים ■ מנגד, יחס החוב־תוצר בצרפת עלה — ובשוק חוששים כי למדינה אין יכולת להעביר רפורמות משמעותיות"
    },
    {
     "ref": "themarker#1",
     "title": "כל מה שאמרת ל–ChatGPT יכול לסבך אותך בבית המשפט. איך אפשר למנוע את זה?",
     "published": "2026-10-06T03:13:00+00:00",
     "summary": "אנחנו מספרים ל–ChatGPT, קלוד, ג'מיני וחבריהם דברים שלא היינו מספרים לעורך דין או מתייעצים עם הצ'אטבוטים כדי לחסוך התייעצות עם משפטן — אך השיחות עלולות להגיע לבית המשפט ■ חיסיון עורך דין־לקוח לא יעזור, אך חיסיון משפטי פחות מוכר עשוי לספק הגנה"
    },
    {
     "ref": "themarker#2",
     "title": "העניין באג\"ח בחו\"ל גדל, אבל מספיק שהדולר ישוב ל–2.9 שקלים — והתשואה תימחק",
     "published": "2026-10-06T03:10:59+00:00",
     "summary": "המוסדיים שינוי בספטמבר גישה כלפי אג\"ח בחו\"ל וחזרו להשקיע, אך הישראלים מתרחקים מהקטגוריה ■ מיטב: \"המשקיעים שבאים מחפשים את התשואות הגבוהות. אם הדולר יתחזק נראה גיוסים גדולים, כמו ב–2023\" ■ למה להחזיק לאומי בדולרים, ומה עם הסיכון מאמזון?"
    },
    {
     "ref": "themarker#3",
     "title": "56 מיליון דולר: הלובי השקט של חברות הבינה המלאכותית בבחירות האמצע",
     "published": "2026-10-06T03:06:52+00:00",
     "summary": "תחקיר ניו יורק טיימס התחקה אחר ועדים פוליטיים הקשורים לאנתרופיק ו–OpenAI, המעניקים מימון למועמדים לקונגרס משתי המפלגות ■ גופי המימון האלה מתמקדים בעיקר בפריימריז במרוצים, שלפי ההערכות יוכרעו כבר בשלב זה, ונוטים לטשטש את הזיקה של המועמדים לאג'נדה של שתי החברות"
    },
    {
     "ref": "themarker#4",
     "title": "\"הביקוש לרכישת כלי רכב ממשיך להיות קשיח כי לרוב הציבור אין אלטרנטיבה אחרת\"",
     "published": "2026-10-06T03:05:51+00:00",
     "summary": "מניית מימון ישיר עלתה ב–20% מתחילת השנה, אך פעילות הליבה בתחום הרכב עדיין מתמודדת עם ריבית גבוהה, הפסדי אשראי ותחרות גוברת ■ המנכ\"ל ערן גולן מסביר מדוע הוא מצפה לחזרה לתשואה דו־ספרתית ברכב, למה המרווחים במשכנתאות צפויים להמשיך להישחק — ואיך רכישת סיגמא סיטי מסמנת את הצעד הבא של החברה באשראי העסקי"
    },
    {
     "ref": "themarker#5",
     "title": "\"הורה שאף פעם לא מדבר על כסף עם הילדים — עושה טעות\"",
     "published": "2026-10-06T03:04:21+00:00",
     "summary": "בנק ההשקעות השווייצי UBS פירסם באחרונה מסמך עם עצות למשפחות כיצד להנחיל אוריינות פיננסית לילדים, ומצביע על הטיות פסיכולוגיות, כמו גם פערים דוריים ומגדריים ■ \"היחס לכסף מעוצב מגיל צעיר מאוד, גם באמצעות צפייה בהתנהגות ההורים\""
    },
    {
     "ref": "themarker#6",
     "title": "פרויקט תמ\"א 38 בכפר סבא היה אמור להסתיים ב-2021: בעלי הדירות מבקשים צו פתיחת הליכים",
     "published": "2026-10-06T03:03:32+00:00",
     "summary": "רוכשי הדירות החדשות בפרויקט שברחוב הרמה בכפר סבא פנו לבית המשפט המחוזי בטענות נגד היזמת, \"עלה הרמה תמ\"א 38 כפר סבא\", והחברות הממנות, מכלול התחדשות עירונית וכלל ביטוח ■ לפי דו\"ח הפיקוח מינואר, ההפסד בפרויקט מגיע ל-9.5 מיליון שקל — עוד לפני תשלומי שכירות לרוכשים בסך 3 מיליון שקל"
    },
    {
     "ref": "themarker#7",
     "title": "נתניהו ממנה את המל\"ל לבחון את כשלי אבטחת הטיסות לישראל — אחרי שהגוף הזה כבר כשל בכך",
     "published": "2026-10-06T03:02:22+00:00",
     "summary": "מבקר המדינה כבר מיפה את הכשלים, והמל\"ל כבר עשה עבודת מטה לבחינת הכשלים שעולים מדו\"ח המבקר, הוא רק כשל ביישום ■ חייבים להודות — קשה להתגונן מפני טייס מתאבד"
    },
    {
     "ref": "themarker#8",
     "title": "רגע לפני הבחירות: בזק בדרך לטלטל את שוק התקשורת ולהתמזג עם yes",
     "published": "2026-10-06T03:01:12+00:00",
     "summary": "בזק ירדה במספר הלקוחות באינטרנט שלה לנתח שוק של 35% ■ אחרי כ–20 שנה של התנגדויות, מתגבשת בממשלה עמדה שהמפה התחרותית מאפשרת לבטל את ההפרדה בין בזק ל–yes ■ המשמעות: בזק תוכל לראשונה להציע טלוויזיה — וגם להקפיץ את שורת הרווח שלה"
    },
    {
     "ref": "themarker#9",
     "title": "\"קניתי מניות של אינטל כשהן עלו 17 דולר לאחת. עשיתי תשואה של כ–400%\"",
     "published": "2026-10-06T03:00:06+00:00",
     "summary": "נועם עזר החל להשקיע לפני כשנתיים, והוא משקיע במניות שונות ובזהב ■ המדור מביא את קולם של המשקיעים החדשים, שהחלו להשקיע בשנים האחרונות בשוק ההון ■ וגם: מה אנחנו חשבנו על התיק?"
    },
    {
     "ref": "themarker#10",
     "title": "מדד נאסד\"ק טיפס ביותר מ-1% לשיא כל הזמנים; תשואות האג\"ח המשיכו לזנק",
     "published": "2026-10-05T20:00:00+00:00",
     "summary": "בורסת ברזיל זינקה ב–8% והריאל קפץ ביותר מ–5% מול הדולר בעקבות תוצאות מפתיעות בבחירות לנשיאות המדינה ■ מנכ\"ל ארמקו הזהיר מהחרפה במשבר הנפט, אבל הברנט ירד ביותר מ-2% מתחת ל-100 דולר לחבית ■ אירופה נסגרה בעליות: פריז איבדה 1% על רקע המהומות בצרפת; מדריד קפצה בעקבות בחירות הבזק בספרד"
    },
    {
     "ref": "themarker#11",
     "title": "הסנקציות על רוסיה הניעו גל של גניבות רכב בקנדה",
     "published": "2026-10-05T18:37:26+00:00",
     "summary": "אלפי כלי רכב נעלמים בקנדה בכל שנה ומגיעים לשוק השחור ברוסיה, היעד המוביל למכוניות קנדיות גנובות, לאחר שארגוני פשיעה מילאו את החלל שהותירו הגבלות היצוא של המערב ■ \"מאוד נוח לגנוב אותן שם. ברוסיה אף אחד לא גונב מכוניות, כי אם תעשה זאת, לא תחיה הרבה זמן\""
    },
    {
     "ref": "themarker#12",
     "title": "460 מיליון דולר — פידליטי חותכת ביותר מחצי את ההחזקות בנקסט ויז'ן",
     "published": "2026-10-05T16:54:02+00:00",
     "summary": "חברת ניהול ההשקעות נפרדת מרוב ההשקעה שלה בחברה הביטחונית, שמפתחת מצלמות עבור רחפנים ■ פידליטי תמכור 5.7 מיליון מניות — כ–6% ממניות נקסט ויז'ן"
    },
    {
     "ref": "themarker#13",
     "title": "\"אונייה יכולה להיות סוס טרויאני עם כטב\"מים\": גם בגזרה הימית מתריעים על פרצות אבטחה",
     "published": "2026-10-05T16:19:14+00:00",
     "summary": "מקורות בענף הספנות מתריעים על פרצות במערך האבטחה סביב אוניות שמגיעות לנמלים בישראל ופורקות סחורות: \"יש שרשרת של אישורים, אך צוותי האונייה \"לא עוברים בדיקות רקע\" ■ משרד התחבורה ורשות הספנות הם הרגולטורים, ועל הביטחון אחראי חיל הים בתיאום עם גופי המודיעין ■ צה\"ל: אם יש חשד, החשודים לא מורשים להיכנס לישראל עד לבדיקתם"
    },
    {
     "ref": "themarker#14",
     "title": "בספרד משבר הדיור מוציא מאות אלפים לרחובות — ומפיל את הממשלה",
     "published": "2026-10-05T14:18:02+00:00",
     "summary": "פינויה של בת 87 מביתה בספרד אחרי 71 שנים הצית גל מחאות נגד יוקר הדיור ■ לאחר שהפרלמנט דחה צעדים להגנת שוכרים, ראש הממשלה פדרו סנצ'ס הכריז על בחירות מוקדמות ■ הצמיחה וירידת האבטלה לא מספקות לספרדים קורת גג במחיר סביר"
    },
    {
     "ref": "themarker#15",
     "title": "בזמן שאזכרות נערכות בכל בתי הקברות במדינה — בסביבת רה\"מ מעדיפים להתלוצץ",
     "published": "2026-10-05T14:15:02+00:00",
     "summary": "הג'יפים שהאמריקאים רוצים למכור לצה\"ל ב–20 מיליארד דולר, המצב הכלכלי הקשה של המשטר האיראני, והחורף של האנרגיה המתחדשת ■ כל מה שצריך לדעת על היום שהיה בכלכלה"
    },
    {
     "ref": "themarker#16",
     "title": "היורו צונח לשפל: למה זה קורה והאם אפשר לסמוך על תחזיות המט\"ח?",
     "published": "2026-10-05T13:48:18+00:00"
    },
    {
     "ref": "themarker#17",
     "title": "עושק העו\"ש: אחרי אישור הייצוגית, התובעים מעדכנים את הנזק ל–15–20 מיליארד שקל",
     "published": "2026-10-05T13:37:29+00:00",
     "summary": "השופט שמואל בורנשטין קבע כי יש סיכוי סביר שתתקבל תביעה ייצוגית נגד ארבעה בנקים, על שהתעשרו שלא כדין מכספי לקוחות שלא קיבלו ריבית על כספם בעו\"ש ■ לאור זאת, התובעים עדכנו היום את הערכת הנזק לתקופה של שלוש שנים הרלוונטית לתביעה"
    },
    {
     "ref": "themarker#18",
     "title": "פרשת סלייס: רשות שוק ההון שללה את הרישיונות של חמישה סוכני ביטוח מסוכנות פינברט",
     "published": "2026-10-05T12:32:03+00:00",
     "summary": "הרישיונות נשללו כמעט שנה לאחר שנשללו רישיונותיהם של שבעה סוכני פינברט אחרים, וכמעט שלוש שנים מאז התפוצצות הפרשה ■ רשות שוק ההון: \"12 הסוכנים עמדו בלב המנגנון באמצעותו הועברו מעל 280 מיליון שקל מכספי חוסכים לקרנות זרות בניהול הסוכנות או גורמים הקשורים אליה\""
    },
    {
     "ref": "themarker#19",
     "title": "אחרי 25 שנה ברשות ניירות ערך: שרה קנדלר מונתה למנכ\"לית",
     "published": "2026-10-05T12:25:58+00:00",
     "summary": "עו\"ד קנדלר, שמשמשת כמנהלת מחלקת ביקורת ואכיפה, נבחרה למנכ\"לית רשות ניירות ערך בתום הליך מכרז פנימי ■ קנלדר מחליפה את עודד שפירר, שהודיע באחרונה על סיום תפקידו"
    },
    {
     "ref": "themarker#20",
     "title": "אסף רפפורט נפגש עם עמית סגל — בניסיון לגייס אותו לחדשות 13",
     "published": "2026-10-05T12:25:45+00:00",
     "summary": "על פי ההערכות בשוק, סגל לא צפוי לעזוב את חדשות 12 ■ מוקדם יותר היום מונה סמנכ\"ל לוח השידורים של קשת, איתי דנקנר, למנכ\"ל חדשות 13"
    },
    {
     "ref": "themarker#21",
     "title": "גרין לנטרן תרכוש עד 40% מקבוצת המסעדות קיסו לפי שווי של כ–330 מיליון שקל",
     "published": "2026-10-05T11:20:40+00:00",
     "summary": "גרין לנטרן חתמה על מזכר הבנות לרכישה של עד 40% בקבוצת המסעדות קיסו לפי שווי של כ–330 מיליון שקל ■ ההשקעה המסתמנת של גרין לנטרן היא תחליף לתוכניות של קיסו לבצע הנפקה ראשונית של מניותיה בבורסה, שלפי מקורות ירדה מהפרק בשל חשש שנפח המסחר בה יהיה קטן מדי"
    },
    {
     "ref": "themarker#22",
     "title": "גלי צה\"ל והדס שטייף ישלמו לאפי נוה 600 אלף שקל בעקבות הפריצה לטלפונים שלו",
     "published": "2026-10-05T11:01:54+00:00",
     "summary": "השופט דחה את דרישת נוה לפיצוי של 5 מיליון שקל על ירידה בהכנסות משרדו, אך קבע כי פרטיותו נפגעה פגיעה חמורה ■ התביעה נגד רזי ברקאי, נורית קנטי ואילאיל שחר ליס נדחתה, ונוה חויב בהוצאותיהם ■ עורך הדין של שטייף: \"נשקול להגיש ערעור\""
    },
    {
     "ref": "themarker#23",
     "title": "צה\"ל הפסיק את המעצרים היזומים של העריקים החרדים — וכך מסייע לקמפיין נתניהו",
     "published": "2026-10-05T09:37:54+00:00",
     "summary": "לפי נתוני צה\"ל, 83% מסך המשתמטים משירות ביטחון הם חרדים ■ ההתנהלות של צה\"ל משרתת את האינטרס של נתניהו והקואליציה שלו — שמעדיפים להרדים את הדיון הציבורי בסוגיה ■ צה\"ל: \"נמשיך לפעול בנחישות לאכיפה שוויונית כלפי כלל עוברי החוק\""
    },
    {
     "ref": "themarker#24",
     "title": "רגע לפני הדיון בבג\"ץ, הפטריארכיה מערערת את טענת אקסטל: \"לא היה ספק שקק\"ל תאריך את החכירה\"",
     "published": "2026-10-05T08:50:35+00:00",
     "summary": "אקסטל של גארי ברנט קנתה את הזכויות ל\"קרקעות הכנסייה\" שהפטריארכיה היוונית החכירה לקק\"ל בשנות ה–50 ■ כעת החברה מנסה להגיע להסדר מול קק\"ל וחוכרי הקרקעות ■ טענת הפטריארכיה, הצד המקורי בהסכם, עשויה לשנות משמעותית את החלטת בג\"ץ בפרשה"
    }
   ]
  },
  {
   "outlet": "WSJ — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "wsj_markets#0",
     "title": "Asian Currencies Consolidate Ahead of U.S. Data",
     "published": "2026-10-06T02:45:00+00:00",
     "summary": "Asian currencies consolidated against the dollar in early trade. Market participants will focus on U.S. data, including August trade figures due later Tuesday, UOB said."
    },
    {
     "ref": "wsj_markets#1",
     "title": "Oil Is Flowing From Hormuz Again—Just Not the Kind the World Needs Most",
     "published": "2026-10-06T02:30:00+00:00",
     "summary": "The scramble is on for diesel, while damaged refineries and tight fuel supplies keep prices elevated around the world."
    },
    {
     "ref": "wsj_markets#2",
     "title": "Gold Muted as Traders Weigh Yields Against Concerns Driving Them",
     "published": "2026-10-06T00:58:00+00:00",
     "summary": "Gold made a subdued start in Asia as high bond yields offset pared-back rate-hike expectations."
    },
    {
     "ref": "wsj_markets#3",
     "title": "Oil Little Changed as Traders Weigh Mideast Crude Export Data",
     "published": "2026-10-06T00:55:00+00:00",
     "summary": "Oil was little changed. Brent remains above the psychologically-important $100-a-barrel level even though ship tracking data show a significant uptick in Middle Eastern oil exports to levels close to pre‑war levels, CBA said."
    },
    {
     "ref": "wsj_markets#4",
     "title": "Nikkei Rises 0.4%, Led by Electronics, Financial Stocks",
     "published": "2026-10-06T00:49:00+00:00",
     "summary": "Japanese stocks were higher as concerns about higher energy costs ease following declines in crude oil prices overnight."
    },
    {
     "ref": "wsj_markets#5",
     "title": "WSJ Dollar Index Rises 0.05% to 97.31",
     "published": "2026-10-05T21:50:00+00:00",
     "summary": "The WSJ Dollar Index rose 0.1% — up 13 of the past 16 trading days."
    },
    {
     "ref": "wsj_markets#6",
     "title": "L’Oréal Taps Advisers to Explore Unloading Chemical-Related Liabilities",
     "published": "2026-10-05T21:44:00+00:00",
     "summary": "The cosmetics company’s U.S. subsidiary is working with Weil Gotshal and Ducera to address talc-related lawsuits."
    },
    {
     "ref": "wsj_markets#7",
     "title": "Oil Industry’s Bid to Kill Climate Change Lawsuits Faces SCOTUS Skepticism",
     "published": "2026-10-05T21:30:00+00:00",
     "summary": "Plus, why the U.S. to abruptly pulled bombers from a U.K. base and new Trump Account rules will put individual stocks kids’ portfolios."
    },
    {
     "ref": "wsj_markets#8",
     "title": "Nasdaq Hits New Record as Bond Yields March Higher",
     "published": "2026-10-05T21:10:00+00:00",
     "summary": "The yield on the 10-year Treasury touched a fresh 24-year high, as a global bond rout and AI-investing boom ripple through markets in tandem."
    },
    {
     "ref": "wsj_markets#9",
     "title": "KKR Strikes Deal to Buy Private-Capital Fund Administrator Gen II",
     "published": "2026-10-05T21:09:00+00:00",
     "summary": "Private-capital funds have proliferated in recent years as investors seek to reduce reliance on public markets."
    },
    {
     "ref": "wsj_markets#10",
     "title": "Auto & Transport Roundup: Market Talk",
     "published": "2026-10-05T20:59:00+00:00",
     "summary": "Find insight on Volvo Car, MISC, InterGlobe Aviation and more in the latest Market Talks covering Auto and Transport."
    },
    {
     "ref": "wsj_markets#11",
     "title": "Stocks Up, Yields Up",
     "published": "2026-10-05T20:56:00+00:00",
     "summary": "Plus, Brent crude nears $100 and a deal shakes up logistics"
    },
    {
     "ref": "wsj_markets#12",
     "title": "Basic Materials Roundup: Market Talk",
     "published": "2026-10-05T20:55:00+00:00",
     "summary": "Find insight on Glencore, Northern Star Resources, Lynas Rare Earths and more in the latest Market Talks covering Basic Materials."
    },
    {
     "ref": "wsj_markets#13",
     "title": "Tech, Media & Telecom Roundup: Market Talk",
     "published": "2026-10-05T20:55:00+00:00",
     "summary": "Gain insight on Manufacturers of DRAM memory, BT Group, Schneider Electric’s PTC deal and more in the latest Market Talks covering technology, media and telecom."
    },
    {
     "ref": "wsj_markets#14",
     "title": "U.S. Stocks Rise as AI Bets Offset Bond Yield Fears",
     "published": "2026-10-05T20:42:00+00:00",
     "summary": "U.S. stocks rose as optimism about the artificial-intelligence boom offset a rise in bond yields around the world."
    },
    {
     "ref": "wsj_markets#15",
     "title": "Euro Drops to 16-Month Low as French Fiscal Strain, Spanish Snap Election Weigh",
     "published": "2026-10-05T20:39:00+00:00",
     "summary": "The euro traded at $1.122, its lowest level since May 16, 2025."
    },
    {
     "ref": "wsj_markets#16",
     "title": "Electronic Arts Bondholders Allege Default Following Largest LBO",
     "published": "2026-10-05T20:32:00+00:00",
     "summary": "EA bondholders alleged a $1.4 billion debt default, escalating a dispute over whether the videogame maker must pay them off at a premium after going private in the largest leveraged buyout of all time."
    },
    {
     "ref": "wsj_markets#17",
     "title": "Natural Gas Settles Higher on Storage Build Projections",
     "published": "2026-10-05T20:01:00+00:00",
     "summary": "Natural gas futures settled up 1% to $3.066 per mmBtu for the day, with analysts anticipating that this week’s EIA storage report will show smaller-than-usual builds in natural gas storage."
    },
    {
     "ref": "wsj_markets#18",
     "title": "Opinion | Covid, Climate and the ‘Consensus Trap’",
     "published": "2026-10-05T19:57:00+00:00",
     "summary": "Scientists are as prone as anyone else to groupthink, and stifling dissent often produces disaster."
    },
    {
     "ref": "wsj_markets#19",
     "title": "Opinion | When Can You Sue if Your 401(k) Underperforms?",
     "published": "2026-10-05T19:55:00+00:00",
     "summary": "Investors sought to hedge risk and got lower returns. Now the Supreme Court will hear their case."
    },
    {
     "ref": "wsj_markets#20",
     "title": "Gold Slips Again",
     "published": "2026-10-05T19:33:00+00:00",
     "summary": "Gold prices slipped amid strength in the dollar."
    },
    {
     "ref": "wsj_markets#21",
     "title": "Nasdaq Poised to Hit New High as Treasury Yields Climb",
     "published": "2026-10-05T18:29:00+00:00",
     "summary": "The Nasdaq composite is leading U.S. stock indexes higher, poised to close at a record."
    },
    {
     "ref": "wsj_markets#22",
     "title": "Centalion, Fresh From Rebrand, Does Deal for U.S. Gas Fields",
     "published": "2026-10-05T16:28:00+00:00",
     "summary": "The trading firm formerly known as Gunvor is poised to become a major player in the Haynesville basin with $1.5 billion deal."
    },
    {
     "ref": "wsj_markets#23",
     "title": "Opinion | CFTC’s New Rules for Crypto",
     "published": "2026-10-05T15:30:00+00:00",
     "summary": "The regulations will promote innovation and protect investors."
    },
    {
     "ref": "wsj_markets#24",
     "title": "11 of the Best Financial Advisor Companies: Well-Known Fiduciary Investment Firms to Consider",
     "published": "2026-10-05T13:07:00+00:00",
     "summary": "We analyzed everything from advisor credentials to fees to portfolio options at some of the larger and more well-known registered investment advisor firms, to help you select a firm that could best connect you with a fiduciary financial advisor."
    }
   ]
  }
 ],
 "markets_snapshot": {
  "TA35": {
   "symbol": "TA35.TA",
   "last": 4223.7402,
   "prev_close": 4218.25,
   "change_pct": 0.13,
   "as_of": "2026-10-05"
  },
  "SP500": {
   "symbol": "^GSPC",
   "last": 7773.9502,
   "prev_close": 7722.7202,
   "change_pct": 0.66,
   "as_of": "2026-10-05"
  },
  "USDILS": {
   "symbol": "ILS=X",
   "last": 3.0515,
   "prev_close": 3.0852,
   "change_pct": -1.09,
   "as_of": "2026-10-05"
  },
  "BRENT": {
   "symbol": "BZ=F",
   "last": 100.7,
   "prev_close": 102.25,
   "change_pct": -1.52,
   "as_of": "2026-10-05"
  },
  "BTC": {
   "symbol": "BTC-USD",
   "last": 85507.9375,
   "prev_close": 86480.3047,
   "change_pct": -1.12,
   "as_of": "2026-10-06"
  }
 },
 "recent_weekly_concepts": [
  "Network effects: why big networks get bigger",
  "Network Effects: Why Value Grows With the Crowd",
  "Market Breadth: Why a Record-High Index Can Hide a Struggling Market",
  "Term Premium",
  "Duration risk: why a bond price falls when yields rise",
  "Network effects: why the winner keeps winning",
  "Network Effects: Why Some Products Get Better the More People Use Them"
 ]
}
</input>