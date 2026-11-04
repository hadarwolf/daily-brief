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
     "title": "Canada Indigenous Group Expects Lending Boom With New Projects on Horizon",
     "published": "2026-11-04T09:00:00+00:00",
     "summary": "A Canadian body that provides financing for Indigenous groups issued its largest-ever bond, and expects to ramp up activity quickly to pay for a flurry of planned resource and infrastructure projects."
    },
    {
     "ref": "bloomberg_markets#1",
     "title": "BMW Accelerates Model Rollout, Cuts Profit Forecast",
     "published": "2026-11-04T08:59:59+00:00",
     "summary": "BMW will speed up the rollout of new models, betting the move will help counter a slump in China after another profit warning. Bloomberg's Elisabeth Behrmann reports. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#2",
     "title": "Crop Trader Olam to Bet $400 Million More on Africa’s Diet Shift",
     "published": "2026-11-04T08:55:49+00:00",
     "summary": "Agricultural commodities trader Olam Agri is boosting investment in African food supply chains to tap the continent’s dietary shift toward more meat and processed products."
    },
    {
     "ref": "bloomberg_markets#3",
     "title": "India Sees Some Trade Relief, New Risks After US Midterm Vote",
     "published": "2026-11-04T08:39:36+00:00",
     "summary": "Indian officials were cautious on the US midterm election results, saying it eases some of the pressure over trade tensions but creates a new layer of uncertainty in an already fragile relationship."
    },
    {
     "ref": "bloomberg_markets#4",
     "title": "It's Time for an Unloved Stock Rally: Market Analysis",
     "published": "2026-11-04T08:11:34+00:00",
     "summary": "Anna Edwards, Guy Johnson, and Mark Cudmore break down today's key themes for analysts and investors on \"Bloomberg: The Opening Trade.\" (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#5",
     "title": "Marks & Spencer Results Show UK Retail Strength Despite Consumer Squeeze",
     "published": "2026-11-04T07:42:56+00:00",
     "summary": "Plus, the pound is rallying against the dollar after Democrats’ midterm sweep"
    },
    {
     "ref": "bloomberg_markets#6",
     "title": "India’s Central Bank Sets Up Panel to Assess Forex, Bond Markets",
     "published": "2026-11-04T07:37:26+00:00",
     "summary": "India’s central bank announced a new technical panel to examine the efficiency, liquidity and resilience of the country’s foreign exchange and government bond markets."
    },
    {
     "ref": "bloomberg_markets#7",
     "title": "Encube Ethicals Said to Plan $317 Million India IPO This Month",
     "published": "2026-11-04T07:20:50+00:00",
     "summary": "Encube Ethicals Pvt., backed by private equity firm Quadria Capital, is preparing for an initial public offering in Mumbai as soon as this month that could raise about 30 billion rupees ($317 million), according to people familiar with the matter."
    },
    {
     "ref": "bloomberg_markets#8",
     "title": "Hedge Funds Flag Growing Private Credit Risks Amid Rising Rates",
     "published": "2026-11-04T07:15:30+00:00",
     "summary": "Some of the world’s biggest hedge funds warned that risks are growing in private credit, adding to debate about how rising interest rates will impact the asset class after scrutiny intensified this year."
    },
    {
     "ref": "bloomberg_markets#9",
     "title": "India’s BHEL Wins $3 Billion Adani Power Orders, Shares Jump",
     "published": "2026-11-04T07:09:25+00:00",
     "summary": "Bharat Heavy Electricals Ltd. secured contracts worth as much as 280 billion rupees ($3 billion) for supplying equipment to Adani Power Ltd., underscoring an increase in private-sector spending on new capacity."
    },
    {
     "ref": "bloomberg_markets#10",
     "title": "European Stocks Rise After Democrat Win; Renewables Jump",
     "published": "2026-11-04T05:51:38+00:00",
     "summary": "European stocks rose after Democrats won control of both chambers of Congress in the US midterms, with renewables stocks outperforming."
    },
    {
     "ref": "bloomberg_markets#11",
     "title": "Japan Stocks Trim Declines as Investors Weigh US Vote",
     "published": "2026-11-04T04:45:41+00:00",
     "summary": "Japanese equities pared declines as investors shifted focus to where AI regulation might head after Democrats won control of both chambers of Congress in the US midterm elections."
    },
    {
     "ref": "bloomberg_markets#12",
     "title": "Musk’s Tesla, SpaceX Slide as Democrats Sweep Congress",
     "published": "2026-11-04T04:28:06+00:00",
     "summary": "Democrats swept to control of the US Congress in a midterm landslide, weighing on the shares of Republican megadonor Elon Musk’s Tesla Inc. and Space Exploration Technologies Corp. ahead of Wednesday’s open."
    },
    {
     "ref": "bloomberg_markets#13",
     "title": "Korean Stocks’ Wild US Election Day Swings Show AI Trade on Edge",
     "published": "2026-11-04T03:22:59+00:00",
     "summary": "Among all the market gyrations triggered by the US midterm elections, few were as wild as those in South Korea, where the stock benchmark swung through a seven-percentage-point range before ending higher."
    },
    {
     "ref": "bloomberg_markets#14",
     "title": "Global Renewable Stocks Jump as Democrats Win Congress Control",
     "published": "2026-11-04T03:13:54+00:00",
     "summary": "Global renewable stocks rallied after the Democrats won control of both chambers of Congress in the US midterm elections, an outcome seen supporting more favorable policy for the industry going forward."
    },
    {
     "ref": "bloomberg_markets#15",
     "title": "China Boosts Market Defense With National Team, Buybacks",
     "published": "2026-11-04T02:57:05+00:00",
     "summary": "China escalated its defense of the stock market, as state-backed funds answered the government’s rallying call by increasing purchases and more companies stepped up buyback plans."
    },
    {
     "ref": "bloomberg_markets#16",
     "title": "Gold Surges Above $4,000 as Dollar, Yields Fall on Democrat Win",
     "published": "2026-11-04T00:24:37+00:00",
     "summary": "Gold jumped above $4,000 an ounce as the dollar and Treasury yields fell after Democrats swept a US midterm election that was dominated by voter frustration over inflationary pressures."
    },
    {
     "ref": "bloomberg_markets#17",
     "title": "US Stock Futures Erase Losses as Democratic Sweep Seen Priced In",
     "published": "2026-11-04T00:01:14+00:00",
     "summary": "US equity index futures erased losses as the Democratic sweep in the midterms was seen as largely priced into equity markets, which had fallen in the run-up to the vote on concerns that the artificial intelligence buildout would face greater regulatory scrutiny."
    },
    {
     "ref": "bloomberg_markets#18",
     "title": "Stocks, Bonds Rise After US Vote as Dollar Falls: Markets Wrap",
     "published": "2026-11-03T22:20:22+00:00",
     "summary": "A Democratic sweep of Congress rippled across global markets, with stocks fluctuating while the dollar fell and Treasuries gained on bets the outcome will put the brakes on President Donald Trump’s agenda."
    }
   ]
  },
  {
   "outlet": "Financial Times",
   "lang": "en",
   "items": [
    {
     "ref": "ft_home#0",
     "title": "Live coverage: Trump admits Iran war a factor as Republicans routed",
     "published": "2026-11-04T08:52:29+00:00",
     "summary": "President’s party defeated in battleground races from Kansas to South Carolina"
    },
    {
     "ref": "ft_home#1",
     "title": "Americans deliver stunning rebuke to Trump as blue wave sweeps country",
     "published": "2026-11-04T08:34:14+00:00",
     "summary": "Democrats take Congress as Republicans defeated in midterm races from Texas to Georgia"
    },
    {
     "ref": "ft_home#2",
     "title": "Who are the new faces in the Senate?",
     "published": "2026-11-04T08:24:35+00:00",
     "summary": "The new intake includes several winners who are seen as future presidential candidates"
    },
    {
     "ref": "ft_home#3",
     "title": "Stocks recover as investors digest Democrats’ sweep",
     "published": "2026-11-04T08:02:39+00:00",
     "summary": "US futures rebound from early losses as resounding victory makes contested results less likely"
    },
    {
     "ref": "ft_home#4",
     "title": "Corporate America braced for Democrats to unleash investigations",
     "published": "2026-11-04T07:44:52+00:00",
     "summary": "Probes could uncover communications between officials and executives after alleged corruption emerged as campaign theme"
    },
    {
     "ref": "ft_home#5",
     "title": "The great humbling of Donald Trump",
     "published": "2026-11-04T07:23:18+00:00",
     "summary": "Midterm elections defeat marked a savage rejection from across the country of the president, his allies and his second-term agenda"
    },
    {
     "ref": "ft_home#6",
     "title": "Five takeaways from the midterm results",
     "published": "2026-11-04T07:21:14+00:00",
     "summary": "Democrats record broad gains from almost all demographic groups"
    },
    {
     "ref": "ft_home#7",
     "title": "Democratic governors elected on promises to stop data centre building",
     "published": "2026-11-04T06:40:23+00:00",
     "summary": "Gubernatorial wins in Texas, Georgia and Ohio and local ballot measures show depth of discontent with Trump-backed infrastructure spree"
    },
    {
     "ref": "ft_home#8",
     "title": "James Talarico’s historic Texas Senate victory deals blow to Elon Musk",
     "published": "2026-11-04T05:37:26+00:00",
     "summary": "Billionaire had ploughed $47mn into bankrolling Republican Ken Paxton’s campaign while fuelling conspiracy theories about his opponent"
    },
    {
     "ref": "ft_home#9",
     "title": "Trump’s American slapdown for the ages",
     "published": "2026-11-04T05:11:06+00:00",
     "summary": "In multiple midterm races the president’s heavy-handed input boomeranged"
    },
    {
     "ref": "ft_home#10",
     "title": "US has no immediate plan to strike Iran, Trump tells FT",
     "published": "2026-11-03T23:34:36+00:00",
     "summary": "President says position with Tehran is ‘brilliant’ in interview just hours before midterm polls close"
    }
   ]
  },
  {
   "outlet": "TheMarker",
   "lang": "he",
   "items": [
    {
     "ref": "themarker#0",
     "title": "לא לשכוח לתדלק: מחיר הדלק מזנק הלילה ל-7.85 שקלים",
     "published": "2026-11-04T08:51:20+00:00",
     "summary": "שר האוצר בצלאל סמוטריץ' חתם על צו להפחתת הבלו במחיר הדלק, כך שהמחיר יעלה מ-7.35 שקלים לליטר בנזין ל-7.85 שקלים, בעוד שללא הצו המחיר היה מגיע ל-8.35 שקלים ■ מאז החלו להיחתם הצווים איבדה קופת האוצר כ–700 מיליון שקל"
    },
    {
     "ref": "themarker#1",
     "title": "התמתנות בחוזים על וול סטריט: דאו ג'ונס עולה ב-0.5%; עליות בבורסות אירופה",
     "published": "2026-11-04T08:33:00+00:00",
     "summary": "המסחר באסיה הסתיים ברובו בירידות, שהתמתנו לאחר נפילה חדה בעקבות \"הגל הכחול\" ששטף הלילה את ארה\"ב ■ המשקיעים נערכים לאפשרות שהקונגרס בשליטת הדמוקרטים יגביל את בהלת ההשקעות במרכזי נתונים ■ הזהב שב להיסחר מעל ל-4,000 דולר והנפט מתחת ל-105 דולר"
    },
    {
     "ref": "themarker#2",
     "title": "אחרי בחירות האמצע: ירידות בבורסה בת\"א, מניות האנרגיה המתחדשת מזנקות",
     "published": "2026-11-04T08:06:57+00:00"
    },
    {
     "ref": "themarker#3",
     "title": "בת 85 העבירה עשרות אלפי שקלים לנוכלים — בנק הדואר חויב לפצות אותה",
     "published": "2026-11-04T08:03:28+00:00",
     "summary": "התובעת, ניצולת שואה, נעקצה במסגרת \"עוקץ רוסי\" בסכום של 50 אלף שקל ■ בית המשפט קבע כי בנק הדואר יפצה אותה בסכום המקסימלי בתביעות קטנות, 40 אלף שקל, לאחר שהתרשל כשלא זיהה את דפוס הפעילות החריג, לא עצר את המשיכות וההעברות — ולא יצר קשר עם הבת שהייתה מיופת כוח"
    },
    {
     "ref": "themarker#4",
     "title": "\"מתמודדים עם רוח נגדית משמעותית\": מאחורי הקריסה של 44% במניית אמדוקס",
     "published": "2026-11-04T07:56:01+00:00",
     "summary": "הסכסוך המשפטי עם טי־מובייל, הלקוחה השנייה בגודלה של אמדוקס שאחראית ל–20% מהכנסותיה, מטלטל את ענקית התוכנה ■ בעקבות החשש מביטול ההסכם בין החברות, אמדוקס צופה ירידה של עד 18% בהכנסות בשנת הכספים 2027 ■ במקביל, החברה הודיעה על רכישת חברת הטכנולוגיה EIS תמורת 340 מיליון דולר ■ מניית אמדוקס צנחה ב-44% במסחר המאוחר"
    },
    {
     "ref": "themarker#5",
     "title": "הבטיחו סטייק שיציל את העולם: מה קרה לבועת הבשר המתורבת?",
     "published": "2026-11-04T07:42:52+00:00",
     "summary": "בקיץ 2021 היה נראה ששום דבר לא יוכל לעצור את מהפכת הבשר המתורבת. כיום, היזמים שהובילו את המהפכה משרטטים תמונת מצב מפוכחת של תעשייה שנלחמת על חייה הרחק מאור הזרקורים"
    },
    {
     "ref": "themarker#6",
     "title": "אלקו מבקשת למכור את אחזקתה בסופרגז",
     "published": "2026-11-04T07:25:38+00:00",
     "summary": "שווי האחזקה של אלקו בסופרגז פאוור הוא 273 מיליון שקל, ולפי החברה המהלך מגיע במסגרת \"החלטה אסטרטגית להתמקד בפעילויות הליבה של החברה\""
    },
    {
     "ref": "themarker#7",
     "title": "רשות שוק ההון שמה סוף לאפליה בביטוח רכב לפי מקום מגורים",
     "published": "2026-11-04T07:07:37+00:00",
     "summary": "בעקבות תלונות על אפליית מבוטחים, בעיקר ביישובי הפריפריה, פירסמה רשות שוק ההון עמדה סופית האוסרת על חברות הביטוח לסרב לבטח נהגים או להציב בפניהם דרישות מחמירות בשל כתובתם ■ גם תמחור הביטוח לפי אזור מגורים ייאסר, אלא אם יוכח כי הוא מבוסס על נתונים סטטיסטיים המעידים על סיכון מוגבר"
    },
    {
     "ref": "themarker#8",
     "title": "\"עלול להוביל לעליית מחיר גורפת\": עמית גל שוב מטלטל את תחום ביטוח הרכב",
     "published": "2026-11-04T06:38:20+00:00",
     "summary": "אמדוקס צונחת ב–44% במסחר לאחר הסגירה ואילו טבע מזנקת בוול סטריט, מה מחפש גדעון תדמור בענף החיתום הלוהט, מלחמת סוכני הביטוח בחברת פינק — ועוד כמה דברים שידברו עליהם הבוקר בשוק ההון"
    },
    {
     "ref": "themarker#9",
     "title": "תשע שנים לאחר הקמתה ואחרי שגייסה כ-130 מיליון דולר: חברת אקספלוריום נסגרת",
     "published": "2026-11-04T05:10:16+00:00",
     "summary": "מייסדי החברה, עומר הר ואור טמיר, הודיעו כי החליטו לסגור את אקספלוריום ■ בשנים האחרונות החברה נתקלה בקשיים על רקע עליית גל הבינה המלאכותית והשינויים בשוק ■ קרוב ל–40 עובדים צפויים להיות מפוטרים ■ \"המשכנו לצמוח בשנה החולפת. עצוב לנו לומר שזה פשוט לא הספיק\""
    },
    {
     "ref": "themarker#10",
     "title": "אמדוקס צונחת ב–44% במסחר לאחר הסגירה בעקבות תחזית מאכזבת",
     "published": "2026-11-04T04:48:35+00:00",
     "summary": "ברבעון שהסתיים בסוף ספטמבר היו לאמדוקס הכנסות 1.19 מיליארד דולר, לעומת 1.15 מיליארד דולר ברבעון המקביל ■ אמדוקס חוזה שבשנת הכספים 2027 תהיה ירידה של 14%–17% בהכנסות, וגם הרווח יפול באופן חד, בשל סכסוך עם הלקוחה טי־מובייל"
    },
    {
     "ref": "themarker#11",
     "title": "בדרך להיות טייקון רב־זרועי: מה מחפש גדעון תדמור בענף החיתום הלוהט?",
     "published": "2026-11-04T04:16:28+00:00",
     "summary": "מנפט וגז לנדל\"ן, חוות שרתים, קולנוע וכעת חיתום: איש העסקים גדעון תדמור, מייסד נאוויטס, שהונו מוערך במיליארדי שקלים, חובר לגיל קלדרון במנורה חיתום ■ מה עומד מאחורי המהלך, ואיך מנורה ביטוח תמנע ניגוד עניינים בניהול כספי העמיתים?"
    },
    {
     "ref": "themarker#12",
     "title": "התחשמלות, שחפת וניצול: מה קורה במרכזי הנתונים של גוגל ומיקרוסופט באירופה",
     "published": "2026-11-04T04:15:41+00:00",
     "summary": "מאחורי תנופת הבנייה של מרכזי נתונים עבור גוגל, מיקרוסופט וענקיות טכנולוגיה נוספות באירופה מסתתרת מציאות קשה ■ תחקיר חושף עדויות של עובדים שנפצעו קשה, נאלצו להתגורר בצפיפות ולא קיבלו את מלוא שכרם — בזמן שחששו להתלונן על תנאי ההעסקה"
    },
    {
     "ref": "themarker#13",
     "title": "\"מחיר הקדמה\": אחרי מתקפות הסייבר באירופה, גם רשתות המזון בישראל נערכות",
     "published": "2026-11-04T04:14:28+00:00",
     "summary": "התקפות סייבר פגעו במערכות קירור באירופה בשבועות האחרונים ועירערו את הביטחון התזונתי ביבשת ■ הן הובילו לחשש שגם רשתות המזון בישראל בסכנה ■ בכירים ברשתות בארץ טוענים כי המוכנות גבוהה, אבל מודים כי \"כל זמן שעובדים תחת מערכת ממוחשבת, אנחנו חשופים לפגעי סייבר\""
    },
    {
     "ref": "themarker#14",
     "title": "לקבוצות העניות בישראל, חרדים וערבים, יש הזדמנות נדירה. האם יש מי שיקפוץ עליה?",
     "published": "2026-11-04T04:06:56+00:00",
     "summary": "בגוש השינוי צריכים לצרף את המפלגות הערביות והחרדיות לא רק כי הם צריכים את המנדטים שלהן ■ עליהם להבין שנוצרה כאן הזדמנות לא רק לשינוי של הרכב הקואליציה, אלא לשינוי מהותי בחברה הישראלית — שיכלול טיפול באתגרים האדירים של החברה הערבית והחרדית"
    },
    {
     "ref": "themarker#15",
     "title": "ארקיע נקלעה למשבר כלכלי, דווקא בשנה שבה חברות התעופה הישראליות פרחו",
     "published": "2026-11-04T04:04:09+00:00",
     "summary": "השבוע נחשף כי ארקיע מצויה בהפסדים של עשרות מיליוני שקלים, בעוד הנהלת החברה סובלת מבלגן עסקי ■ עובדי ארקיע הפגינו מול מטה החברה, מתוך חשש שהם יהיו אלה שישלמו את המחיר על המחלוקות הניהוליות ■ ארקיע: \"החברה גאה בהישגיה יוצאי הדופן בשלוש השנים האחרונות\""
    },
    {
     "ref": "themarker#16",
     "title": "יוון וקפריסין מקשיחות את תנאי השקעות הנדל\"ן לזרים — ועשויות להוציא ישראלים מהמשחק",
     "published": "2026-11-04T04:03:26+00:00",
     "summary": "הצעת חוק ביוון מבקשת להעלות את מס הרכישה שמוטל על זרים מ-3% ל-15% — הגבוה באיחוד, וגם קפריסין מקשיחה עמדות ■ פרטי החוק המדויקים ביוון עדיין לא נקבעו, אך משקיעים רבים כבר מנסים להקדים ולהשלים עסקות ■ מי חשוף לשינויים, והאם יש דרכים להתחמק מהם?"
    },
    {
     "ref": "themarker#17",
     "title": "עיתוי הצהרת טראמפ גרוע למערכת הביטחון — אך נועד לסייע לו מבית",
     "published": "2026-11-04T04:01:20+00:00",
     "summary": "הכרזת טראמפ על הפסקת הסיוע הביטחוני בסך 3.8 מיליארד דולר בשנה הפתיעה את מערכת הביטחון, שנמצאת ממילא במצוקה תקציבית ■ מעבר להשלכות הכלכליות, ההכרזה מאותתת על שינוי עמוק ביחס האמריקאי לישראל"
    },
    {
     "ref": "themarker#18",
     "title": "\"קשה למצוא תופרות שמתמחות בשמלות כלה בארץ. זה גרם לי לבזבז זמן ובדים\"",
     "published": "2026-11-04T04:00:35+00:00",
     "summary": "ענת חן למדה עיצוב אופנה, ושנתיים אחרי שסיימה את התואר פתחו הוריה סלון כלות משפחתי, שהציע שמלות, איפור ושיער ■ לאחר כ-13 שנה היא רצתה לצאת לדרך נפרדת, ופתחה בביתה סטודיו לשמלות כלה ■ \"העבודה בתחום עונתית. בינואר, למשל, אין כמעט כלות\""
    },
    {
     "ref": "themarker#19",
     "title": "רמי לוי: \"הייתה תקופה שספקים לא העלו מחירים, ברגע שמישהו רצה להעלות התקשורת ירדה עליו\"",
     "published": "2026-11-04T04:00:00+00:00",
     "summary": "המשפט הוא הפעם הראשונה שבה רשות התחרות הגישה כתבי אישום בגין איתותים לתיאום מחירים ■ בתיק יש שבעה אישומים — רובם נגד רביד ורשת ויקטורי, וחלקם נגד הרשתות יוחננוף וסופר ברקת, וגם נגד בכירים באותן חברות"
    },
    {
     "ref": "themarker#20",
     "title": "בעקבות עבודות חשמול בסופ\"ש: איילון ייחסם באזור הרצליה ויחולו שינויים בתנועות הרכבות באזור",
     "published": "2026-11-03T18:41:17+00:00",
     "summary": "התנועה תשוב לסדרה ביום ראשון, 8 בנובמבר, בשעה 04:00 לפנות בוקר ■ יופעלו שאטלים חינמיים באזור"
    },
    {
     "ref": "themarker#21",
     "title": "יום הדין של מבצעי 90/10: גל ביטולי העסקות מחזק את שוק הנדל\"ן הישראלי",
     "published": "2026-11-03T17:23:00+00:00",
     "summary": "זינוק של 41% בביטולי עסקות נדל\"ן אינו מעיד על משבר מערכתי, אלא על תהליך הבראה וסינון טבעי של השוק ■ הנדל\"ן הישראלי עובר מגל ספקולטיבי לבחינה ריאלית של יכולות החזר, שבה יזמים יציבים, אשראי משלים וקרנות חוב מגובות בנכסים — גורפים את היתרון"
    },
    {
     "ref": "themarker#22",
     "title": "כרם נבו, סמנכ\"לית ברשות החדשנות: \"למדינה יהיה תפקיד במימון חברות דיפ־טק גם בשלבים מאוחרים\"",
     "published": "2026-11-03T17:17:45+00:00"
    },
    {
     "ref": "themarker#23",
     "title": "טבע מזנקת בוול סטריט, ולסמנכ\"ל הכספים יש תחזית אופטימית",
     "published": "2026-11-03T16:07:15+00:00",
     "summary": "טבע מאיצה את השינוי האסטרטגי שלה להתמקד בתרופות מקוריות על פני גנריות ■ מחיר היעד שהוצב לה נע בין 48 ל–52 דולר"
    },
    {
     "ref": "themarker#24",
     "title": "חברה פיקטיבית וראיון עבודה מזויף: כך התנהלה פריצת הענק לבורסת בייננס",
     "published": "2026-11-03T16:03:00+00:00",
     "summary": "בורסת הקריפטו חשפה דו\"ח ראשוני לפריצת הסייבר, שבמהלכה גנבו האקרים מטבעות דיגיטליים בשווי שעשוי לעמוד על כ–6.3 מיליארד דולר ■ ההאקרים פעלו במשך חודשים ובין היתר התחזו לחברה פיקטיבית וניהלו ריאיון עבודה עם מהנדס בבייננס"
    }
   ]
  },
  {
   "outlet": "WSJ — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "wsj_markets#0",
     "title": "Dollar Trims Losses Slightly After Midterms But Outlook Looks Modestly Negative",
     "published": "2026-11-04T09:18:00+00:00",
     "summary": "The dollar was lower, but trimmed some of its initial losses in reaction to the U.S. midterm results as the Democrats won’t take control of Congress until January, ING said."
    },
    {
     "ref": "wsj_markets#1",
     "title": "Stock Futures Turn Higher, Treasurys Strengthen After Democratic Sweep",
     "published": "2026-11-04T09:16:00+00:00",
     "summary": "U.S. stock futures rose and Treasurys strengthened after the Democrats delivered a resounding win in the midterm elections."
    },
    {
     "ref": "wsj_markets#2",
     "title": "European Indexes Higher After Democrats Triumph in Midterms",
     "published": "2026-11-04T08:36:00+00:00",
     "summary": "European stock indexes rose after Democrats’ resounding win in the midterm elections gave investors clarity."
    },
    {
     "ref": "wsj_markets#3",
     "title": "Gold Climbs on Softer Dollar, Falling Treasury Yields After U.S. Midterms",
     "published": "2026-11-04T08:29:00+00:00",
     "summary": "Gold prices were supported by a softer dollar and falling Treasury yields after the U.S. midterm election results boosted demand for safe-haven assets."
    },
    {
     "ref": "wsj_markets#4",
     "title": "European Gas Market Braces for Trump’s Next Move on Iran After Midterms",
     "published": "2026-11-04T07:48:00+00:00",
     "summary": "European natural-gas prices rose following the U.S. midterms, as traders waited to see whether Trump will pursue diplomacy with Iran or launch renewed strikes."
    },
    {
     "ref": "wsj_markets#5",
     "title": "Asia Markets Get Midterm Whiplash as Selloff Gives Way to Relief Rally",
     "published": "2026-11-04T06:59:00+00:00",
     "summary": "Asian markets did an about-face in the afternoon, with the initial selloff sparked by the U.S. midterm elections giving way to a relief rally."
    },
    {
     "ref": "wsj_markets#6",
     "title": "Two-Year Treasury Yield Falls to Two-Month Low as Democrats Sweep Midterm Elections",
     "published": "2026-11-04T06:46:00+00:00",
     "summary": "The two-year Treasury yield fell to a two-month low as yields slipped across the board with voters delivering a rebuke to Trump and his party."
    },
    {
     "ref": "wsj_markets#7",
     "title": "Gold Stays Under Pressure as Buyers Await Midterms Clarity",
     "published": "2026-11-04T04:15:00+00:00",
     "summary": "Gold prices remained under pressure as investors cautiously assess the unfolding U.S. midterm results."
    },
    {
     "ref": "wsj_markets#8",
     "title": "Stock Market Today: Stock Futures Turn Positive as Investors Weigh Democratic Sweep",
     "published": "2026-11-04T03:22:53+00:00",
     "summary": "Contracts tied to S&P 500 reverse their initial drop"
    },
    {
     "ref": "wsj_markets#9",
     "title": "Oil Prices Fall as U.S. Midterm Results Unfold",
     "published": "2026-11-04T02:43:00+00:00",
     "summary": "Oil traded lower in early Asian trading as markets continue to monitor U.S. election results."
    },
    {
     "ref": "wsj_markets#10",
     "title": "WSJ Dollar Index Rises 0.23% to 97.22",
     "published": "2026-11-03T22:24:00+00:00",
     "summary": "The WSJ Dollar Index rose 0.2%, snapping a four-trading-day losing streak."
    },
    {
     "ref": "wsj_markets#11",
     "title": "U.S. Stocks Mixed Amid Midterm, Iran War Nerves",
     "published": "2026-11-03T22:08:00+00:00",
     "summary": "U.S. stocks finished mixed with trepidation ahead of the midterm election results and skepticism about a near-term resolution to the Iran conflict."
    },
    {
     "ref": "wsj_markets#12",
     "title": "Apollo’s Originations Rise to a Record $114 Billion as Opportunities Arise in AI",
     "published": "2026-11-03T21:46:00+00:00",
     "summary": "The quarter’s total included $98 billion tied to new debt investments by the private-credit fund manager."
    },
    {
     "ref": "wsj_markets#13",
     "title": "Bitcoin Miners Pivoted to AI—Only to Find It’s Just as Turbulent as Crypto",
     "published": "2026-11-03T21:23:00+00:00",
     "summary": "Operating AI data centers isn’t any easier for companies that swapped out their bitcoin-mining servers for greener pastures."
    },
    {
     "ref": "wsj_markets#14",
     "title": "Oil Settles Lower as Market Awaits Middle East Developments",
     "published": "2026-11-03T21:23:00+00:00",
     "summary": "Crude futures added to the previous session’s losses in an indecisive session that saw prices rise before easing back as the market awaits progress toward a U.S.-Iran agreement."
    },
    {
     "ref": "wsj_markets#15",
     "title": "Apple Shares Slip, Meta Debt Costs Rise",
     "published": "2026-11-03T21:21:00+00:00",
     "summary": "Plus, Apollo swings to a loss and investors eye midterm election races"
    },
    {
     "ref": "wsj_markets#16",
     "title": "Want to Try Alternative Investments? Here’s an Easy Way to Start",
     "published": "2026-11-03T21:00:00+00:00",
     "summary": "These publicly traded investments offer diversification, but take some time to understand the risks and rewards before jumping in."
    },
    {
     "ref": "wsj_markets#17",
     "title": "U.S. Natural Gas Futures Pick Up on Cooler Weather Outlook",
     "published": "2026-11-03T20:58:00+00:00",
     "summary": "U.S. natural gas futures rose as production readings eased and near-term weather forecasts turned a little colder."
    },
    {
     "ref": "wsj_markets#18",
     "title": "Tech Stocks Rise Despite Apple Slump",
     "published": "2026-11-03T19:38:00+00:00",
     "summary": "Tech stocks are looking to break a three-session losing streak as investors turn their attention from earnings to the U.S. midterm elections."
    },
    {
     "ref": "wsj_markets#19",
     "title": "Mark Walter in Talks to Sell Cadillac F1 Stake to Red Sox, Liverpool Owners",
     "published": "2026-11-03T19:33:00+00:00",
     "summary": "John Henry’s Fenway Sports Group is one of the bidders for the outfit at a valuation believed to be above $3 billion."
    },
    {
     "ref": "wsj_markets#20",
     "title": "Opinion | Elon Musk Will Turn Kids Into Capitalists",
     "published": "2026-11-03T19:22:00+00:00",
     "summary": "Bank Hapoalim gave shares to customers, many of whom had never invested before."
    },
    {
     "ref": "wsj_markets#21",
     "title": "11 of the Best Financial Advisor Companies: Well-Known Fiduciary Investment Firms to Consider",
     "published": "2026-11-03T14:14:00+00:00",
     "summary": "We analyzed everything from advisor credentials to fees to portfolio options at some of the larger and more well-known registered investment advisor firms, to help you select a firm that could best connect you with a fiduciary financial advisor."
    },
    {
     "ref": "wsj_markets#22",
     "title": "Beijing Reins In IPO Rush After AI Concerns Hit Stock Market",
     "published": "2026-11-03T13:02:00+00:00",
     "summary": "China’s market regulator told banks that ongoing IPO processes would continue but that it wouldn’t be taking up new listings for now."
    },
    {
     "ref": "wsj_markets#23",
     "title": "McDonald’s Is Beefing Up, but It Won’t Be Cheap",
     "published": "2026-11-03T11:25:00+00:00",
     "summary": "Plus, AI investors are on election watch."
    },
    {
     "ref": "wsj_markets#24",
     "title": "Health Insurance Is the Sleeper Inflation Issue",
     "published": "2026-11-03T11:00:00+00:00",
     "summary": "Plus: AI in economics, William Nordhaus’s climate insights, and how the U.S. is beating China in the ‘Global Office.’"
    }
   ]
  }
 ],
 "markets_snapshot": {
  "TA35": {
   "symbol": "TA35.TA",
   "last": 4011.3701,
   "prev_close": 4048.9399,
   "change_pct": -0.93,
   "as_of": "2026-11-04"
  },
  "SP500": {
   "symbol": "^GSPC",
   "last": 7568.9199,
   "prev_close": 7541.3999,
   "change_pct": 0.36,
   "as_of": "2026-11-03"
  },
  "USDILS": {
   "symbol": "ILS=X",
   "last": 3.1563,
   "prev_close": 3.1393,
   "change_pct": 0.54,
   "as_of": "2026-11-04"
  },
  "BRENT": {
   "symbol": "BZ=F",
   "last": 103.4,
   "prev_close": 103.6,
   "change_pct": -0.19,
   "as_of": "2026-11-04"
  },
  "BTC": {
   "symbol": "BTC-USD",
   "last": 78197.9531,
   "prev_close": 77345.0469,
   "change_pct": 1.1,
   "as_of": "2026-11-04"
  }
 },
 "recent_weekly_concepts": [
  "Network effects: why some products get better as more people join",
  "Price elasticity of demand",
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
  "Network effects: why big networks get bigger"
 ]
}
</input>