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
     "title": "Indian Bonds Rally as Oil Falls, Higher Yields Attract Buyers",
     "published": "2026-11-02T10:23:30+00:00",
     "summary": "Indian bonds gained the most in six months on Monday as crude oil prices extended losses, easing inflation concerns for the fuel-importing nation."
    },
    {
     "ref": "bloomberg_markets#1",
     "title": "Taiwan Says China Sought to Diminish Its Status With Emailed APEC Invitation",
     "published": "2026-11-02T10:20:15+00:00",
     "summary": "Taiwan criticized China for breaching protocol in its invitation to an upcoming APEC meeting, with Beijing seen as having slighted both President Lai Ching-te and the island’s international standing."
    },
    {
     "ref": "bloomberg_markets#2",
     "title": "Inflation Talk Returns to Earnings Calls in Echo of 2022 Shock",
     "published": "2026-11-02T10:19:34+00:00",
     "summary": "Inflation is top of mind for Corporate America this earnings season, with mentions on earnings calls on track for their biggest jump since the 2022 price shock."
    },
    {
     "ref": "bloomberg_markets#3",
     "title": "India’s IDBI Bank Employees Strike Over Fairfax Acquisition",
     "published": "2026-11-02T10:16:33+00:00",
     "summary": "IDBI Bank Ltd. employees started a two-day nationwide strike on Monday to protest against the planned privatization of the lender, calling on the federal government to scrap the sale to Fairfax Financial Holdings Ltd."
    },
    {
     "ref": "bloomberg_markets#4",
     "title": "UBS’s Fowler Says Market Is Underpricing the Length of AI Cycle",
     "published": "2026-11-02T10:04:33+00:00",
     "summary": "Hyperscaler valuations look attractive after the recent AI unwind as the market prices in a shorter AI cycle than is likely to play out, according to Gerry Fowler, chief European equity strategist and head of derivatives at UBS AG."
    },
    {
     "ref": "bloomberg_markets#5",
     "title": "Fresenius Taps China’s WuXi to Expand Biosimilar Drug Portfolio",
     "published": "2026-11-02T09:59:41+00:00",
     "summary": "Fresenius SE agreed to partner with Chinese contract drug developer WuXi Biologics on biosimilar candidates that could reach the market in the next decade, potentially more than doubling its current portfolio."
    },
    {
     "ref": "bloomberg_markets#6",
     "title": "Spotify Investor Creandum Raises $750M Fund",
     "published": "2026-11-02T09:25:58+00:00",
     "summary": "Peter Specht, Partner at Creandum, on raising of capital and Creadum's plans to deploy the fund across Europe and the US. He speaks with Tom Mackenzie, Guy Johnson and Anna Edwards on Bloomberg's \"The Opening Trade.\" (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#7",
     "title": "US Midterms & AI Strain: The Global Trader’s Guide",
     "published": "2026-11-02T09:22:28+00:00",
     "summary": "\"Insight with Haslinda Amin\" is a daily news program featuring in-depth, high-profile interviews and analysis to give viewers the complete picture on the stories that matter. The show features prominent leaders spanning the worlds of business, finance, politics and culture. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#8",
     "title": "China’s Gen Z Dons Spooky Stock Market Costumes for Halloween",
     "published": "2026-11-02T09:20:27+00:00",
     "summary": "China’s young investors have turned a stock market rout into Halloween jokes."
    },
    {
     "ref": "bloomberg_markets#9",
     "title": "What Are Structured Notes And Why the Market for Them Is Booming",
     "published": "2026-11-02T09:00:02+00:00",
     "summary": "A conversation with Nomura's Alex Micalizzi."
    },
    {
     "ref": "bloomberg_markets#10",
     "title": "Odd Lots: The Structured Notes Market Is Booming (Podcast)",
     "published": "2026-11-02T09:00:00+00:00",
     "summary": "The structured products business in the US has gotten very large recently — on track to hit $300 billion in sales this year. That they are all the rage means a once opaque financial product is getting a lot more attention. So what are structured products, exactly, and how are they influencing the economy? In short, structured products are basically a fusion of a bank IOU with a derivative product,"
    },
    {
     "ref": "bloomberg_markets#11",
     "title": "German Protests Erupt in Violence",
     "published": "2026-11-02T08:35:38+00:00",
     "summary": "Mass demonstrations in Germany that passed largely peacefully on Saturday erupted in violence as night fell and rioters faced off against police in Frankfurt, Cologne, Hamburg and Berlin. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#12",
     "title": "This Bounce in Stocks Appears Premature: Market Analysis",
     "published": "2026-11-02T08:26:04+00:00",
     "summary": "Anna Edwards, Guy Johnson, Tom Mackenzie and Mark Cudmore break down today's key themes for analysts and investors on \"Bloomberg: The Opening Trade.\" (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#13",
     "title": "Nordic Investment Bank Mulls SRTs After Adding Defense Focus",
     "published": "2026-11-02T08:15:07+00:00",
     "summary": "The Nordic Investment Bank is considering adding synthetic risk transfers to its toolkit as a precautionary measure to bolster its balance sheet and give it more scope to lend to industries including defense."
    },
    {
     "ref": "bloomberg_markets#14",
     "title": "Alphabet Tests Bond Market’s AI Faith With Second Euro Sale",
     "published": "2026-11-02T07:17:51+00:00",
     "summary": "Alphabet Inc. kicked off its second sale of euro bonds this year, testing investor demand less than a week after its disappointing third-quarter earnings sent the stock to a record drop and pushed spreads wider across the technology sector."
    },
    {
     "ref": "bloomberg_markets#15",
     "title": "Ryanair Initiates Cost Drive to Offset $2 Billion Fuel Surge",
     "published": "2026-11-02T06:00:00+00:00",
     "summary": "Ryanair Holdings Plc will embark on a cost purge to help offset a €2 billion ($2.2 billion) increase in fuel charges next year, as the Middle East conflict continues to drive up oil prices and weighs on consumer willingness to book flights."
    },
    {
     "ref": "bloomberg_markets#16",
     "title": "Copper Recovers as Easing Tech Rout, Lower Oil Calm Growth Fears",
     "published": "2026-11-02T04:44:37+00:00",
     "summary": "Copper rebounded from its lowest close in a week as a rout in technology stocks subsided and oil prices pulled back, easing fears around global growth."
    },
    {
     "ref": "bloomberg_markets#17",
     "title": "Latest Oil Market News and Analysis for Nov. 2",
     "published": "2026-11-01T23:11:50+00:00",
     "summary": "Oil declined following a report that US President Donald Trump wants to give diplomacy with Iran more time before any move to resume strikes."
    },
    {
     "ref": "bloomberg_markets#18",
     "title": "US Stock Futures Rise as Oil Slump Buoys Sentiment: Markets Wrap",
     "published": "2026-11-01T21:28:04+00:00",
     "summary": "US equity futures advanced to halt a bruising selloff in the artificial intelligence trade, with falling oil prices helping stocks to start the month on a positive note."
    },
    {
     "ref": "bloomberg_markets#19",
     "title": "Chinese Stock Selloff Halts on Expectation of Support Measures",
     "published": "2026-11-01T10:08:49+00:00",
     "summary": "Chinese stocks advanced on expectations of renewed liquidity support as the nation’s central bank huddled with financial firms and introduced measures to stabilize the capital market."
    }
   ]
  },
  {
   "outlet": "Financial Times",
   "lang": "en",
   "items": [
    {
     "ref": "ft_home#0",
     "title": "European supermarket freezers hit just weeks after French cyber attack",
     "published": "2026-11-02T09:49:26+00:00",
     "summary": "Retailers in Sweden and Belgium report overheating to as high as 55C in dozens of stores"
    },
    {
     "ref": "ft_home#1",
     "title": "Global AI sell-off eases after Nasdaq’s worst month in over a year",
     "published": "2026-11-02T09:40:58+00:00",
     "summary": "US tech stocks set to start week higher following bruising rout"
    },
    {
     "ref": "ft_home#2",
     "title": "Gulf braced for escalation of war between US-Israel alliance and Iran",
     "published": "2026-11-02T08:25:47+00:00",
     "summary": "Diplomats warn that renewed conflict would be even more damaging than previous rounds of fighting"
    },
    {
     "ref": "ft_home#3",
     "title": "Alstom shares tumble 28% after train maker cuts profit forecast",
     "published": "2026-11-02T08:16:32+00:00",
     "summary": "French group also sets out plan to cut €2bn in debt in second major profit warning under new chief Martin Sion"
    },
    {
     "ref": "ft_home#4",
     "title": "What the increasingly awkward data centre construction delays mean for investors",
     "published": "2026-11-02T06:00:08+00:00",
     "summary": "Boom?"
    },
    {
     "ref": "ft_home#5",
     "title": "Petrol prices set to hit record high under Trump on eve of US elections",
     "published": "2026-11-02T05:00:26+00:00",
     "summary": "Average fuel costs during president’s second term pass Biden-era levels as affordability issues dominate Tuesday’s midterm polls"
    },
    {
     "ref": "ft_home#6",
     "title": "AI mania can’t survive higher interest rates",
     "published": "2026-11-02T05:00:17+00:00",
     "summary": "The price of money is the pin that deflates market bubbles"
    },
    {
     "ref": "ft_home#7",
     "title": "The race to keep AI under control",
     "published": "2026-11-02T05:00:08+00:00",
     "summary": "Safety breaches are raising doubts about the ability of leading labs to keep increasingly powerful systems in check"
    },
    {
     "ref": "ft_home#8",
     "title": "Why rich Ireland still feels poor",
     "published": "2026-11-02T05:00:08+00:00",
     "summary": "Dublin is precariously reliant on corporation taxes, with half coming from Apple, Eli Lilly and Microsoft"
    },
    {
     "ref": "ft_home#9",
     "title": "Trump makes final pitch to restive voters in midterms campaign",
     "published": "2026-11-02T01:47:26+00:00",
     "summary": "Republican Party is defending its control of Congress against signs of backlash against president"
    }
   ]
  },
  {
   "outlet": "TheMarker",
   "lang": "he",
   "items": [
    {
     "ref": "themarker#0",
     "title": "\"המגמה מתחזקת מאוד\": קרנות הסל המתמחות במניות בחו\"ל גייסו 7.9 מיליארד שקל",
     "published": "2026-11-02T10:32:07+00:00",
     "summary": "הקרנות המתמחות במניות בישראל פדו באוקטובר 3.2 מיליארד שקל ■ הקרנות הכספיות גייסו באוקטובר 3.7 מיליארד שקל"
    },
    {
     "ref": "themarker#1",
     "title": "למה חברת בנייה ותיקה מגייסת עובדים כמו סטארט־אפ?",
     "published": "2026-11-02T10:00:01+00:00",
     "summary": "על הנייר יש בשוק יותר מהנדסים ממשרות פנויות, אבל חברות הבנייה מגלות שכאשר התחרות היא מול ההייטק, המשרה כבר לא מוכרת את עצמה. כשהענף נהפך טכנולוגי יותר והצעירים דורשים מסלול קריירה, יציבות ואתגר, המעסיקים הוותיקים נאלצים ללמוד מחדש איך להתחרות עליהם ■ \"אנחנו ערים למה שנעשה בהייטק, ומתמודדים על אותם עובדים\""
    },
    {
     "ref": "themarker#2",
     "title": "חמישית מהעסקים הוותיקים של צ'ק פוינט התאדו; \"ההתאוששות איטית משציפינו\"",
     "published": "2026-11-02T09:59:57+00:00",
     "summary": "ההכנסות של צ'ק פוינט ממכירות חומרה ורישיונות, שקשורים למוצרי הפיירוול, להבדיל מהכנסות חוזרות מדמי מנוי, נפלו ב-19% ביחס לרבעון המקביל — ל-105 מיליון דולר ■ מניית צ'ק פוינט צונחת ב-12% במסחר המוקדם"
    },
    {
     "ref": "themarker#3",
     "title": "עלי אקספרס מתרחבת בארץ: תשלב מוכרים ישראלים עם הבטחה לזמני שילוח קצרים",
     "published": "2026-11-02T09:35:00+00:00",
     "summary": "המוצרים יישלחו ישירות מהמוכרים ללקוחות, ולא דרך המחסן המקומי של עלי אקספרס ■ בנוסף, החברה תשיק שירות חדש של החזרות להזמנות מחו\"ל, הכולל איסוף מוצרים ישירות מבית הלקוח"
    },
    {
     "ref": "themarker#4",
     "title": "30 מיליארד שקל שיקבעו כיצד תיראה שנת התקציב הבאה",
     "published": "2026-11-02T09:30:00+00:00",
     "summary": "2027 תיפתח בתקציב המשכי, ובאוצר חלוקים אם לכלול בבסיסו את ההוצאה החריגה ב–2026 על המלחמה באיראן ■ הכללתה תקל על מימון צורכי המדינה, אך אם התקיעות הפוליטית תימשך, היא עלולה לשרת בעיקר את צרכיה הפוליטיים של הממשלה היוצאת"
    },
    {
     "ref": "themarker#5",
     "title": "בשווי 28 מיליארד שקל: ההסכם המפנק של המדינה עם שש חברות אוטובוסים",
     "published": "2026-11-02T08:57:03+00:00",
     "summary": "ההסכמים החדשים כוללים הארכת זיכיונות לחברות אוטובוסים בשנתיים עם אופציה להארכה בשנתיים נוספות ■ ההסכם אינו כולל את אגד ודן, שלא היו חלק מהמו\"מ להסדרה הענפית ■ תנופה ואקסטרה נותרו מחוץ להסכם עקב השירות המקרטע וזימונן לשימוע"
    },
    {
     "ref": "themarker#6",
     "title": "הם היו אמורים להפליג לנצח על ספינה יוקרתית — וגילו שאין לאן לברוח",
     "published": "2026-11-02T08:39:40+00:00",
     "summary": "הספינה MV אודיסי שווקה כבריחה המושלמת מדונלד טראמפ ■ הזינוק שחוללה המלחמה שלו במחירי הנפט רוקן את משאביה והותיר את הנוסעים נטושים בקמבודיה"
    },
    {
     "ref": "themarker#7",
     "title": "ירידות באירופה; הנפט צונח ב–3.5% על רקע תקוות להימנעות מחידוש המלחמה",
     "published": "2026-11-02T08:33:00+00:00",
     "summary": "רווחי ריינאייר צנחו ב-15% במחצית הראשונה בשל הזינוק במחירי הדלק ■ הבורסות בסין עולות בעקבות דיווחים כי הרגולטורים על המגזר הפיננסי בסין יפגישו בנקים וחברות פיננסים כדי לדון באמצעים לעידוד שוק המניות המקומי"
    },
    {
     "ref": "themarker#8",
     "title": "הכדאיות הכלכלית של פינוי־בינוי יורדת, ולעיריות יש הזדמנות לתקן",
     "published": "2026-11-02T08:30:18+00:00",
     "summary": "לרשויות המקומיות נותר זמן עד מאי 2027 לקבוע מחדש את גובה היטלי ההשבחה שהן גובות על תוכניות פינוי־בינוי ■ הרשות להתחדשות עירונית מזהירה את העיריות כי היטלים גבוהים מדי עלולים לתקוע פרויקטים ■ נחמה בוגין: \"מצב השוק היום שונה מלפני חמש שנים, עיריות לא יכולות להתעלם מהתקופה\""
    },
    {
     "ref": "themarker#9",
     "title": "אלביט תקים מתקן אימונים עבור משרד הביטחון ב-600 מיליון שקל",
     "published": "2026-11-02T08:14:02+00:00",
     "summary": "המתקן יישמש להכשרת מפקדי ולוחמי חיל התותחנים עם הכלים החדשים של החיל: תותח \"רועם\" (SIGMA) ומערך משגרי הרקטות \"להב\" (PULS) — שניהם מתוצרת אלביט ■ ההסכם בין אלביט למשרד הביטחון נחתם לתקופה של 15 שנה"
    },
    {
     "ref": "themarker#10",
     "title": "אזור התעסוקה לא ישגשג, והדיירים יסבלו: בת ים נגד תוכנית שער יוספטל",
     "published": "2026-11-02T07:37:02+00:00",
     "summary": "הוועדה המקומית לתכנון ובנייה של בת ים הגישה עתירה שבה היא מבקשת לבטל את אישור תוכנית הפינוי־בינוי בכניסה לעיר ■ העתירה הוגשה לאחר שמספר הדירות בתוכנית הוגדל ב-21% ומנגד צומצמו שטחי התעסוקה ב-9% ■ \"החלטת הוועדה המחוזית מחריפה את מצבה של בת ים כעיר נעדרת שטחי תעסוקה\""
    },
    {
     "ref": "themarker#11",
     "title": "האיש העשיר באפריקה מוביל את ההנפקה הגדולה אי פעם בבורסה עם הביצועים הטובים בעולם",
     "published": "2026-11-02T07:08:29+00:00",
     "summary": "אליקו דנגוטה דוחף את התנפלות הסוחרים הקטנים על בורסת ניגריה לשיאםי חדשים במה שהוא מכונה \"הנפקה של העם\" ■ \"ציפינו לגל של ביקוש קמעונאי בהנפקה, אבל במציאות זה היה יותר כמו צונאמי\""
    },
    {
     "ref": "themarker#12",
     "title": "בהייטק הישראלי מחפשים את הכסף הגדול בהוזלת הבינה המלאכותית",
     "published": "2026-11-02T07:01:22+00:00",
     "summary": "הרצת מודלי בינה מלאכותית דורשת כוח מחשוב יקר, וחברות ישראליות רבות מפתחות טכנולוגיות שמייעלות אותה ■ חלקן כבר נמכרו בעשרות ומאות מיליוני דולרים, ואחת מהן נמצאת לפי דיווחים במגעים עם אמזון בשווי של כ-7 מיליארד דולר ■ אבל הגיוסים הגדולים באמת בתחום נעשים בחו\"ל"
    },
    {
     "ref": "themarker#13",
     "title": "לאחר פריצת הקריפטו הגדולה: בתוך שעות נמשכו מיליארדי דולרים מבייננס",
     "published": "2026-11-02T06:59:21+00:00",
     "summary": "ביום חמישי נגנבו 6.3 מיליארד דולר במטבעות דיגיטליים מביינס, במה שמסתמן כשוד הקריפטו הגדול ביותר עד היום, והבורסה הקפיאה את האפשרות לבצע משיכות ■ \"אמון לא נקנה במה שאתה אומר בזמנים הטובים. הוא נרכש באמצעות המעשים שלך בזמנים הקשים\""
    },
    {
     "ref": "themarker#14",
     "title": "איך הזרים רואים את הבורסה אחרי הבחירות? התשובה במייל מבנק שווייצרי",
     "published": "2026-11-02T06:52:07+00:00",
     "summary": "מה מאיים על גל ההנפקות שבדרך לבורסה, הדרך של פריון עד למכירה במחיר נמוך, למה יו\"ר חברת נגה פירסם את תחזית הביקוש לחשמל ואז מחק — ועוד כמה דברים שידברו עליהם הבוקר בשוק ההון"
    },
    {
     "ref": "themarker#15",
     "title": "יום מסחר תנודתי בבורסת תל אביב: ת\"א ביטוח נחלש ב-1.4%; ארית תעשיות יורדת ב-7%",
     "published": "2026-11-02T06:21:21+00:00"
    },
    {
     "ref": "themarker#16",
     "title": "חרדה כלכלית עמוקה: הנושאים שיכריעו בבחירות האמצע בארה\"ב",
     "published": "2026-11-02T04:11:16+00:00",
     "summary": "בכל סקר מופיע יוקר המחיה בראש סדרי העדיפויות של האמריקאים, וגם נושאים אחרים מטרידים אותם בגלל השלכות כלכליות ■ אפילו הבוחרים הרפובליקאים לא מרוצים מתפקודו הכלכלי של טראמפ"
    },
    {
     "ref": "themarker#17",
     "title": "יותר מ–3 מיליארד שקל בסכנה: מה מאיים על גל ההנפקות שבדרך לבורסה",
     "published": "2026-11-02T04:10:37+00:00",
     "summary": "חברות רבות — מקרפור והולנדיה ועד שמיר אנרגיה וברידג'ווייז — תיכננו לגייס מיליארדים בבורסה בתל אביב ■ אלא שהטלטלה הפוליטית, החשש מהסלמה מול איראן והזינוק בתשואות האג\"ח משנים את כללי המשחק ■ בזמן שהחתמים כבר גזרו עמלות של 110 מיליון שקל ורוב המשקיעים השנה בכלל מופסדים, המוסדיים נעשים בררניים וידרשו מבעלי השליטה דבר אחד: להתפשר על המחיר"
    },
    {
     "ref": "themarker#18",
     "title": "חוק גיוס? אם החרדים לא ילמדו וייצאו לעבוד, הביטוח הלאומי יפשוט רגל",
     "published": "2026-11-02T04:02:41+00:00",
     "summary": "מחקר של המכון הישראלי לדמוקרטיה מעריך כי ההפסד לביטוח הלאומי מהחברה החרדית יגיע ל–40–45 מיליארד שקל עד 2049 ■ האוצר ימליץ על העלאת דמי הביטוח הלאומי שמשלמים אברכים ומי שאינם עובדים"
    },
    {
     "ref": "themarker#19",
     "title": "אצה מיקרוסקופית ופופוליזם יקבעו מה יהיה מחיר המים ב–2027",
     "published": "2026-11-02T04:01:28+00:00",
     "summary": "לאחר שנה גרועה במיוחד למשק המים נדרשים צעדים אגרסיביים כדי למנוע קטסטרופה, אך לחצים פוליטיים עשויים למנוע החלטות אחראיות ■ הדיונים על תעריף המים ל–2027 יעידו אם במועצת רשות המים הפיקו לקחים מהמשבר האחרון"
    },
    {
     "ref": "themarker#20",
     "title": "פריון נאלצה להמציא את עצמה כל פעם מחדש. כעת היא נמכרת ב–420 מיליון דולר בלבד",
     "published": "2026-11-02T04:00:54+00:00",
     "summary": "פריון הישראלית נמכרת לחברה הודית במחיר שמשקף פרמיה של 34% על מחיר המניה ■ ואולם המניה רחוקה מהשיא שלה, ההכנסות של פעילות החיפוש צנחו בשנים האחרונות, וגם פעילות הפרסום מתכווצת ■ בכך תסיים פריון דרך ארוכה, תנודתית והפכפכה בשוק הציבורי"
    },
    {
     "ref": "themarker#21",
     "title": "\"בניית המערכת לקחה לי חודשים ארוכים של ישיבה סיזיפית, ובפעם הראשונה שעלינו לאוויר היא נשברה\"",
     "published": "2026-11-02T04:00:19+00:00",
     "summary": "ארז מרקוביץ' עבד בטלוויזיה במשך שני עשורים עד שהגיע למיצוי ■ ביחד עם בת זוגו, מומחית UX/UI ומלווה עסקים בלינקדאין, השניים בנו פלטפורמה מבוססת בינה מלאכותית שפועלת כמאמן אישי ללינקדאין ■ \"זה איפשר לי לצאת מעולם הטלוויזיה השוחק, לעבור לחיים הרבה פחות לחוצים, ולעבוד יום־יום מהבית יחד עם בת הזוג שלי\""
    },
    {
     "ref": "themarker#22",
     "title": "\"ארבע שנים מירי רגב לא דרכה כאן\": התחנה המרכזית החדשה עפולה נותרה עם הבטחות על הרציף",
     "published": "2026-11-02T04:00:15+00:00",
     "summary": "נוסעים בתחנה המרכזית בעפולה זועמים על איחורים של קווי האוטובוס העירוניים (\"אין מענה במשרד התחבורה, אין עם מי לדבר\") ■ חמש שנים אחרי שנפתחה התחנה בהשקעה של 80 מיליון שקל, חלק משטחי המסחר עומדים ריקים, וחניון חדש שהוקם בסמוך על חורבות התחנה המרכזית הישנה סגור לציבור ■ גם שבילי אופניים אין"
    },
    {
     "ref": "themarker#23",
     "title": "336 דקות לדף המסרים של הליכוד: כך נראה ערוץ 14 ביום הבחירות",
     "published": "2026-11-02T04:00:01+00:00",
     "summary": "ניתוח של התנועה לעיתונות ציבורית מצא כי ערוץ 14 הקדיש יותר משליש מזמן השידור ביום הבחירות לתעמולה למען הליכוד ■ הרשות השנייה: אנו בעיצומה של בדיקה על השידורים ביום הבחירות בכל הערוצים ותחנות הרדיו המפוקחים על ידינו"
    },
    {
     "ref": "themarker#24",
     "title": "עבודות שחורות, יין לחג ואבטחת טקס: הסחר בימי מילואים יצא משליטה",
     "published": "2026-11-02T03:58:09+00:00",
     "summary": "תשלום לרתך בשביל עמדות למאגים במוצב, שי לקצינים לכבוד חגי תשרי, או תשלום למסופחים שיחזיקו את הש\"ג. בחסות הכוננות הבלתי נגמרת, בצה\"ל של היום אפשר לקנות כל דבר בימי מילואים ■ כל עוד אף אחת מהחזיתות הפתוחות אינה נסגרת, קשה לראות איך הבזבוז נפסק"
    }
   ]
  },
  {
   "outlet": "WSJ — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "wsj_markets#0",
     "title": "Netflix Needs You to Watch, Not Just Pay",
     "published": "2026-11-02T10:30:00+00:00",
     "summary": "The streamer’s ad ambitions depend on viewing hours, which have stalled."
    },
    {
     "ref": "wsj_markets#1",
     "title": "11 of the Best Financial Advisor Companies: Well-Known Fiduciary Investment Firms to Consider",
     "published": "2026-11-02T10:01:00+00:00",
     "summary": "We analyzed everything from advisor credentials to fees to portfolio options at some of the larger and more well-known registered investment advisor firms, to help you select a firm that could best connect you with a fiduciary financial advisor."
    },
    {
     "ref": "wsj_markets#2",
     "title": "Stock Market Today: Stock Futures Recover After Friday's Selloff",
     "published": "2026-11-02T09:46:46+00:00",
     "summary": "Oil slides on signs Mideast escalation may be avoided for now"
    },
    {
     "ref": "wsj_markets#3",
     "title": "Dollar Falls to 1-Month Low as Oil Prices Slip",
     "published": "2026-11-02T09:46:00+00:00",
     "summary": "The dollar fell to a one-month low against a basket of currencies, and the euro rose to an 11-day high against the dollar, as oil prices eased."
    },
    {
     "ref": "wsj_markets#4",
     "title": "Stock Futures Higher, Oil Lower as Investors Return to Risk",
     "published": "2026-11-02T09:39:00+00:00",
     "summary": "Stock futures rose and Treasury yields eased, as falling oil prices encouraged investors to make a cautious return to risk after last week’s tech selloff."
    },
    {
     "ref": "wsj_markets#5",
     "title": "Gold Edges Higher But Remains Below $4,000 an Ounce",
     "published": "2026-11-02T09:05:00+00:00",
     "summary": "Gold futures ticked higher, but held below $4,000 a troy ounce after slumping last week."
    },
    {
     "ref": "wsj_markets#6",
     "title": "European Indexes Open Mostly Lower as Healthcare Stocks Slide",
     "published": "2026-11-02T08:25:00+00:00",
     "summary": "European stock indexes were mostly lower at the open, as investors recalibrated after last week’s strength."
    },
    {
     "ref": "wsj_markets#7",
     "title": "BOE Expected to Join Peers in Raising Key Rate",
     "published": "2026-11-02T07:28:00+00:00",
     "summary": "The bank is expected to join its peers in raising borrowing costs Thursday as it attempts to contain a pickup in inflation ahead of an intense period of wage negotiations."
    },
    {
     "ref": "wsj_markets#8",
     "title": "Treasury Yields Little Changed in Asian Trade Ahead of Midterms, Key Data This Week",
     "published": "2026-11-02T07:10:00+00:00",
     "summary": "Initial results for Tuesday’s midterm elections will begin emerging after the first polls close, but the final outcome determining control of Congress might not be known for days or even weeks."
    },
    {
     "ref": "wsj_markets#9",
     "title": "Oil Drops Amid Diplomatic Efforts to Revive Mideast Peace Talks",
     "published": "2026-11-02T01:15:00+00:00",
     "summary": "Oil prices dropped amid recent diplomatic efforts to revive peace negotiations between Washington and Tehran."
    },
    {
     "ref": "wsj_markets#10",
     "title": "Why This Upscale Miami District Is Designated a Distressed Opportunity Zone",
     "published": "2026-11-02T00:00:00+00:00",
     "summary": "Critics say that tax breaks for building in the posh neighborhood don’t really do much for the poorer communities that the designation is meant to help."
    },
    {
     "ref": "wsj_markets#11",
     "title": "Binance Resumes Withdrawals After Suffering Biggest-Ever Crypto Hack",
     "published": "2026-11-01T18:54:00+00:00",
     "summary": "The exchange says it has replaced roughly 95% of the stolen assets thus far."
    },
    {
     "ref": "wsj_markets#12",
     "title": "Opinion | A Sports Bet by Any Other Name Is Still a Bet",
     "published": "2026-11-01T16:32:00+00:00",
     "summary": "The CFTC has neither the competency nor statutory authority to regulate gambling."
    },
    {
     "ref": "wsj_markets#13",
     "title": "AI Investors Are Racing to Get Insurance on the Biggest Market Bet in History",
     "published": "2026-11-01T15:23:00+00:00",
     "summary": "With trillions of dollars riding on the artificial-intelligence trade, investors, traders and even tech executives are hunting for high-stakes protection."
    },
    {
     "ref": "wsj_markets#14",
     "title": "Investors Are Hedging Against the Risks of the AI Boom",
     "published": "2026-11-01T12:00:00+00:00",
     "summary": "Plus, inside the final days of Darline Graham’s reluctant Senate run, and two owners claim to have the same legendary Porsche."
    },
    {
     "ref": "wsj_markets#15",
     "title": "Investors Are Betting a Blue Wave Will Help Hospitals. Don’t Count on It.",
     "published": "2026-11-01T10:30:00+00:00",
     "summary": "Markets are anticipating a reversal of Trump’s Medicaid cuts. That may be easier said than done."
    },
    {
     "ref": "wsj_markets#16",
     "title": "The Tangled Web of AI Bets Is Reason to Fear Tech Stocks",
     "published": "2026-11-01T10:30:00+00:00",
     "summary": "Vendor financing is back in a new form and it magnifies the AI trade on the way up—and down."
    },
    {
     "ref": "wsj_markets#17",
     "title": "Prediction Markets Keep Whiffing on Elections. Will They Miss on the Midterms?",
     "published": "2026-10-31T14:00:00+00:00",
     "summary": "Polling data remained at issue after the recent Brazil, Serbia and Wisconsin elections markets were upset by supposed long shots."
    }
   ]
  }
 ],
 "markets_snapshot": {
  "TA35": {
   "symbol": "TA35.TA",
   "last": 4043.51,
   "prev_close": 4058.95,
   "change_pct": -0.38,
   "as_of": "2026-11-02"
  },
  "SP500": {
   "symbol": "^GSPC",
   "last": 7580.0698,
   "prev_close": 7720.3901,
   "change_pct": -1.82,
   "as_of": "2026-10-30"
  },
  "USDILS": {
   "symbol": "ILS=X",
   "last": 3.1322,
   "prev_close": 3.1084,
   "change_pct": 0.77,
   "as_of": "2026-11-02"
  },
  "BRENT": {
   "symbol": "BZ=F",
   "last": 108.73,
   "prev_close": 117.64,
   "change_pct": -7.57,
   "as_of": "2026-11-02"
  },
  "BTC": {
   "symbol": "BTC-USD",
   "last": 77883.2422,
   "prev_close": 78248.4531,
   "change_pct": -0.47,
   "as_of": "2026-11-02"
  }
 },
 "recent_weekly_concepts": [
  "Network effects: why some platforms become winner-take-all",
  "What makes a business hard to attack: the economic moat",
  "Network Effects: Why Bigger Can Mean Better",
  "Price elasticity of demand",
  "Leverage: How Borrowing Turns a Small Move Into a Big One",
  "Economic Moats: Why Some Businesses Are Nearly Impossible to Dislodge",
  "The capital cycle: why today's hottest, most profitable industry is often tomorrow's worst investment",
  "Network effects: why some products get more valuable as more people use them",
  "Economic moats: why some companies keep winning",
  "Network effects: why some products get more valuable as more people use them",
  "Related-party transaction: why a deal needs extra scrutiny when the same person sits on both sides of it",
  "Network Effects: Why Some Products Get More Valuable the More People Use Them",
  "Price elasticity of demand (אלסטיות מחיר של ביקוש)",
  "Equity Dilution: Why Giving Away 5% of a Company Still Costs Something Real",
  "Network effects: why some products get more valuable as more people use them",
  "Investment Grade vs. Junk: Why One Line on a Credit Rating Moves Billions",
  "Leverage: Why Borrowing Can Multiply Both Your Gains and Your Losses",
  "Network effects: why some products get more valuable as more people use them",
  "Price Discovery: How a Market Figures Out What Something Is Actually Worth",
  "The Capital Cycle: Why Booming Industries Eventually Crush Their Own Returns",
  "Commoditization: Why Having the Same Tool as Everyone Else Isn't an Advantage",
  "Price elasticity of demand (אלסטיות מחיר של הביקוש)",
  "Network Effects: Why the Biggest Network Wins",
  "Network effects: why platforms get more valuable as they grow",
  "Network Effects: Why Some Products Get More Valuable the More People Use Them",
  "Network effects",
  "Network Effects: Why Some Products Get More Valuable the More People Use Them",
  "Network effects: why big networks get bigger",
  "Network Effects: Why Value Grows With the Crowd",
  "Market Breadth: Why a Record-High Index Can Hide a Struggling Market"
 ]
}
</input>