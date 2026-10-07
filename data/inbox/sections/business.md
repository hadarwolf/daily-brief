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
     "title": "Can India Close Its Huge Pension Gap?",
     "published": "2026-10-07T03:41:55+00:00",
     "summary": "Fewer than 30% of Indians have access to a retirement account, even as the number of people over 60 is set to more than double by 2036. Saikat Das explains India’s pension problem and what the government is doing to fix it. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#1",
     "title": "Korean Investors Suffer $1.7 Billion Losses From Leveraged ETFs",
     "published": "2026-10-07T03:00:03+00:00",
     "summary": "Retail investors are estimated to have lost 2.3 trillion won ($1.7 billion) from leveraged exchange-traded products tracking South Korea’s two chipmaking giants in just months, according to a lawmaker’s office, in the first revelation of the magnitude of risks from such bets."
    },
    {
     "ref": "bloomberg_markets#2",
     "title": "RBI Meeting Is About More Than Just Interest Rates for Markets",
     "published": "2026-10-07T02:34:43+00:00",
     "summary": "Rate hike expected; traders eye more liquidity-draining measures and rupee commentary."
    },
    {
     "ref": "bloomberg_markets#3",
     "title": "Copper Stable as AI-Driven Tech Stock Rally Holds Near Record",
     "published": "2026-10-07T02:01:40+00:00",
     "summary": "Copper steadied as a rally in tech-related stocks held near record highs on optimism about the artificial intelligence boom."
    },
    {
     "ref": "bloomberg_markets#4",
     "title": "QatarEnergy Secures $3 Billion Loan From Four Chinese Banks",
     "published": "2026-10-07T01:31:36+00:00",
     "summary": "State-owned QatarEnergy has secured a $3 billion loan from Chinese banks, according to people familiar with the matter, another sign that financial firms are still willing to lend to certain Gulf borrowers, despite the protracted US war with Iran."
    },
    {
     "ref": "bloomberg_markets#5",
     "title": "Taiwan Dethrones Korea Atop Global Markets",
     "published": "2026-10-07T01:02:51+00:00",
     "summary": "Taiwan is emerging as the stronger bet for equity investors due to its deeper linkages across the AI supply chain and a more upbeat earnings outlook. Bloomberg's Winnie Hsu breaks down the news. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#6",
     "title": "Mary Ng: Asian Trade Growth Can Boost Canadian Exports",
     "published": "2026-10-07T00:33:03+00:00",
     "summary": "Former Canadian Minister of International Trade and Milken Institute Senior Fellow Mary Ng outlines Canada's expanding trade push across Asia and the Indo-Pacific, emphasizing that deeper market access in energy, technology, and agriculture could reach 3 billion consumers and drive export growth. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#7",
     "title": "Taiwan Dethrones Korea Atop World Markets as AI Trade Widens",
     "published": "2026-10-07T00:07:35+00:00",
     "summary": "As equity investors enter the final stretch of a pivotal year that’s propelled South Korea and Taiwan to the forefront of the global AI trade, the latter is emerging as the stronger bet."
    },
    {
     "ref": "bloomberg_markets#8",
     "title": "Asset Management One to Boost Talent Spending 30% Over 3 Years",
     "published": "2026-10-07T00:00:17+00:00",
     "summary": "Asset Management One Co. plans to boost spending on talent over the next three years as rising Japanese interest rates broaden investment choices and push pension funds, university endowments and individuals to rethink how they allocate their money."
    },
    {
     "ref": "bloomberg_markets#9",
     "title": "Gold Steady as More Oil and Falling Yields Ease Rate-Hike Bets",
     "published": "2026-10-06T23:52:38+00:00",
     "summary": "Gold held gains as increasing oil supplies from the Middle East and a decline in bond yields eased pressure on the US Federal Reserve to hike interest rates this month."
    },
    {
     "ref": "bloomberg_markets#10",
     "title": "BHP Sells Shuttered Australian Nickel Plant to Gold Fields",
     "published": "2026-10-06T23:41:51+00:00",
     "summary": "BHP Group will sell its Kambalda nickel concentrator plant and associated land in Western Australia to Gold Fields Ltd. for an undisclosed price."
    },
    {
     "ref": "bloomberg_markets#11",
     "title": "Samsung Investors Want Evidence Profit Boom Has Staying Power",
     "published": "2026-10-06T23:36:42+00:00",
     "summary": "Samsung Electronics Co.’s earnings will test whether it can convince investors of its long-term outlook, an increasingly critical task as record profits have failed to reinvigorate the stock."
    },
    {
     "ref": "bloomberg_markets#12",
     "title": "Ken Leech Agrees to $3 Million SEC Fine Over Cherry-Picking Case",
     "published": "2026-10-06T23:22:30+00:00",
     "summary": "Ken Leech, the former co-chief investment officer at Western Asset Management Co., agreed to pay $3 million to settle a US Securities and Exchange Commission lawsuit claiming he’d cherry picked winning trades."
    },
    {
     "ref": "bloomberg_markets#13",
     "title": "Surging Yields Hit Asian Bond Sales as AI Fundraising Trails US",
     "published": "2026-10-06T23:00:00+00:00",
     "summary": "Borrowers in the Asia Pacific are slowing deals in the dollar bond market, with the highest yields in more than two years sapping deal momentum."
    },
    {
     "ref": "bloomberg_markets#14",
     "title": "Why Gas Flares Keep Burning Despite Big Oil’s 2030 Pledges",
     "published": "2026-10-06T22:26:05+00:00",
     "summary": "Residents in West Texas describe noise, odors and health concerns from a gas flare operating near their homes as oil producers face scrutiny over pollution and their commitments to curb emissions. Oil giants including ExxonMobil, Occidental Petroleum and others have pledged to reduce or eliminate the flaring practice, but a new investigation by Bloomberg News and The Examination found persistent f"
    },
    {
     "ref": "bloomberg_markets#15",
     "title": "Hamilton Lane’s Bell on Secondary Markets Opportunity",
     "published": "2026-10-06T22:15:18+00:00",
     "summary": "As U.S. mortgage rates rise above 7% for the first time in a couple of years, Elizabeth Bell, Co-Head of Real Estate at Hamilton Lane, discusses whether the broader real estate market has been written off amid a slow post-pandemic recovery, changing consumer spending and higher rates. Bell says the market faces risks from elevated interest rates and geopolitics, which weigh on investment and yield"
    },
    {
     "ref": "bloomberg_markets#16",
     "title": "Asian Stocks Diverge From US Rally, Oil Advances: Markets Wrap",
     "published": "2026-10-06T22:12:38+00:00",
     "summary": "Asian stocks slipped, in contrast to Wall Street’s record-setting rally, as enthusiasm over the earnings outlook failed to carry over to the region. Treasuries fell as oil climbed."
    },
    {
     "ref": "bloomberg_markets#17",
     "title": "Latest Oil Market News and Analysis for Oct. 7",
     "published": "2026-10-06T22:02:47+00:00",
     "summary": "Oil gained as traders weighed increased flows through the Strait of Hormuz against a pickup in Iranian attacks against vessels."
    },
    {
     "ref": "bloomberg_markets#18",
     "title": "FTSE Affirms Indonesia’s Emerging Status on Ongoing Reforms",
     "published": "2026-10-06T20:50:56+00:00",
     "summary": "FTSE Russell has reaffirmed the emerging-market status of Indonesian equities amid measures taken by local authorities to improve transparency."
    },
    {
     "ref": "bloomberg_markets#19",
     "title": "BofA Team Touts Options for Tech Sector to Hedge Bubble Risk",
     "published": "2026-10-06T18:28:42+00:00",
     "summary": "Investors wary of owning technology megacaps can tap equity derivatives both to benefit from the record rally and protect against the fallout from a potential bubble, according to strategists at Bank of America Corp."
    }
   ]
  },
  {
   "outlet": "Financial Times",
   "lang": "en",
   "items": [
    {
     "ref": "ft_home#0",
     "title": "The taxman comes for China’s offshore riches",
     "published": "2026-10-07T02:27:55+00:00",
     "summary": "The crackdown has rattled the country’s wealthiest people and the businesses in Hong Kong, Singapore and Tokyo that manage their money"
    },
    {
     "ref": "ft_home#1",
     "title": "Trump says he will speak with Putin about pneumonic plague",
     "published": "2026-10-06T23:18:47+00:00",
     "summary": "Washington increases pressure on Moscow to share more about the incident in which one person has died"
    },
    {
     "ref": "ft_home#2",
     "title": "SpaceX looks to raise $40bn to buy Nvidia chips in financing led by Apollo",
     "published": "2026-10-06T22:28:55+00:00",
     "summary": "Blockbuster debt deal is the latest sign of the vast spending on chips and other infrastructure underpinning AI"
    },
    {
     "ref": "ft_home#3",
     "title": "Trump says he is considering suspending federal petrol tax",
     "published": "2026-10-06T21:09:16+00:00",
     "summary": "Surging fuel prices are heaping pressure on the president and his Republican Party four weeks ahead of midterm elections"
    },
    {
     "ref": "ft_home#4",
     "title": "‘Most dangerous product in crypto’ vexes Singapore",
     "published": "2026-10-06T21:00:09+00:00",
     "summary": "City-state averse to risk and scandal tries to distance itself from homegrown Hyperliquid Labs and its popular ‘perps’"
    },
    {
     "ref": "ft_home#5",
     "title": "S&P 500 hits record high as AI stocks shrug off bond market slump",
     "published": "2026-10-06T20:58:07+00:00",
     "summary": "Wall Street’s benchmark index closes at fresh peak but rally is increasingly reliant on handful of tech stocks"
    },
    {
     "ref": "ft_home#6",
     "title": "Ships’ captains paid $100,000 a month to transit Strait of Hormuz",
     "published": "2026-10-06T20:00:08+00:00",
     "summary": "Salaries and bonuses spiral for seafarers willing to risk perilous trip through waterway in face of Iranian attacks"
    },
    {
     "ref": "ft_home#7",
     "title": "Goldman Sachs and Man Group exposed in EY data breach",
     "published": "2026-10-06T19:24:22+00:00",
     "summary": "Disclosures widen the circle of victims of a hacking incident earlier this year"
    },
    {
     "ref": "ft_home#8",
     "title": "California’s oligarch tax would change America",
     "published": "2026-10-06T11:01:53+00:00",
     "summary": "The goal of its framers is political rather than budgetary"
    },
    {
     "ref": "ft_home#9",
     "title": "Sleep has always been a class issue",
     "published": "2026-10-06T04:00:27+00:00",
     "summary": "There is still a class divide when it comes to work that tramples over your body clock"
    }
   ]
  },
  {
   "outlet": "TheMarker",
   "lang": "he",
   "items": [
    {
     "ref": "themarker#0",
     "title": "אם תרצו או לא: אתם משקיעים בנדל\"ן",
     "published": "2026-10-07T03:20:17+00:00",
     "summary": "חלקו של הנדל\"ן במדדים מרכזיים בבורסת תל אביב ירד בשנים האחרונות, בעיקר בעקבות עליית הבינה המלאכותית וצמיחת מניות הטכנולוגיה והאנרגיה — אך הישראלים עדיין חשופים לנדל\"ן דרך קרנות הפנסיה וקופות הגמל. האם נדל\"ן מכביד על תיק ההשקעות — או דווקא מגן עליו?"
    },
    {
     "ref": "themarker#1",
     "title": "תשואות האג\"ח של ישראל בשיא של שנה: \"אי־אפשר לחמוק מהמגמה העולמית\"",
     "published": "2026-10-07T03:19:45+00:00",
     "summary": "איגרות החוב של ממשלת ישראל מצטרפות למגמה העולמית של עליית תשואות ■ תשואת אג\"ח ממשלת ישראל ל-10 שנים עלתה לכ-4.3% ■ \"יש פה תהליך עולמי מתמשך שמאיץ בתקופה האחרונה. עצם ההאצה מחלחלת גם לישראל\""
    },
    {
     "ref": "themarker#2",
     "title": "מותם של שני גברים בטנזניה ב–2019 עלול למוטט את הבסיס לסחר העולמי בזהב",
     "published": "2026-10-07T03:04:32+00:00",
     "summary": "התאחדות שוק מטילי הזהב של לונדון נתבעת בידי משפחות ההרוגים, שנורו בתחומי מכרה שסיפק זהב לחברה הנכללת במרשם שהיא מפעילה — החיוני לתפקוד שוק הזהב ■ אם תידרש לשלם פיצויים לתובעים, ההתאחדות עלולה להגיע אל חדלות פירעון ועתידו של המרשם אינו מובטח"
    },
    {
     "ref": "themarker#3",
     "title": "\"לא רק בבנייה יוקרתית\": בעלי דירת גן יצאו למאבק על זכותם להקים בריכה פרטית",
     "published": "2026-10-07T03:03:29+00:00",
     "summary": "ועדות התכנון קיבלו את התנגדויות השכנים בבניין בתל אביב, ומנעו את הקמת הבריכה בטענה כי היא מנוגדת למדיניות התכנון העירונית ■ בעקבות זאת עתרו בעלי הדירה לבית המשפט המחוזי, בטענה לאפליה: \"העובדה שבשכונות סמוכות הדבר מותר ואינו נתפס כמטרד ממחישה את שרירותיות המדיניות\""
    },
    {
     "ref": "themarker#4",
     "title": "הסכסוך אחרי רכישת הסטארט־אפ: הרוכשת טוענת להטעיה, המוכרים טוענים שהיא מתנערת מתשלום",
     "published": "2026-10-07T03:01:36+00:00",
     "summary": "בתחילת 2024 רכשה חברת הסייבר Link11 הגרמנית את כל מניות ריבלייז בעסקה של 18.5 מיליון דולר. בהליך משפטי שמתנהל בבית המשפט המחוזי, החברה הרוכשת טוענת כי בשל מצגי שווא והטעיה נגרם לה נזק של 9 מיליון דולר והיא מבקשת להיות פטורה מהתשלום שנותר בסך כ-2 מיליון דולר. בעלי המניות הנתבעים: \"תביעה מקוממת ומופרכת\""
    },
    {
     "ref": "themarker#5",
     "title": "\"קיבלתי 800 אלף שקל פיצויים וקניתי בהם דירה. התגלגלתי בין דירות עד שקניתי דירה ב-1.4 מיליון שקל, בלי משכנתא\"",
     "published": "2026-10-07T03:01:09+00:00",
     "summary": "עדייה הירש עברה תאונה בגיל 14, ועשור מאוחר יותר קיבלה פיצויים בסך 800 אלף שקל, שאותם השקיעה ברכישה דירה ■ היא מכרה וקנתה דירות, עד שהגיעה לדירה הנוכחית שבה היא גרה בגבעת אולגה בחדרה ■ \"אלה היו שנים של עליית ערך, ומאחר שקניתי את הדירות בלי משכנתא, כל עלייה הייתה לטובתי\""
    },
    {
     "ref": "themarker#6",
     "title": "\"מרבית המספרות במרכז פתוחות עד שעות מאוחרות, אבל אני לא עבד של העסק\"",
     "published": "2026-10-07T03:01:01+00:00",
     "summary": "בנון מטלון פתח מספרה בבית לפני קרוב ל-30 שנה, ולפני חודשיים העביר אותה למיקום חדש במרכז מסחרי בעיר ■ אחד הקשיים שהתמודד איתם היה הכנסת ספרים נוספים לצדו ■ \"כיום אני כבר עם קרחת, אבל כל החיים הייתי עם שיער ארוך ומתולתל, כך שיש לי ולנשים שמגיעות אליי שפה משותפת\""
    },
    {
     "ref": "themarker#7",
     "title": "700 מיליון דולר בדרך למנהטן ופלורידה: דויטש, בירם ונפתלי מקימים קרן חוב חדשה",
     "published": "2026-10-07T03:00:55+00:00",
     "summary": "אחרי שגייסו 400 מיליון דולר והניבו תשואה שנתי ברוטו של כ–14%, השותפים יוצאים לגיוס נוסף ממוסדיים ומשקיעים כשירים בישראל ובעולם ■ הרקע המצב המאתגר בשוק הנדל\"ן האמריקאי, הקרן תתמקד בהלוואות מזנין ומימון נדל\"ן בארה\"ב"
    },
    {
     "ref": "themarker#8",
     "title": "\"אף אחד לא ציין את זה\": מצאה את עצמה עם שני כרטיסי פליי קארד — ובלי טיסה",
     "published": "2026-10-07T03:00:16+00:00",
     "summary": "מחזיקי אמריקן אקספרס שעברו לפליי קארד של ישראכרט גילו בדיעבד שהם לא זכאים לכרטיס טיסה במסגרת המבצע ■ הסיבה: הם לא נחשבים \"מצטרפים חדשים\", כיוון שישראכרט היא הסולקת והמנפיקה הבלעדית של אמריקן אקספרס בישראל ■ ישראכרט: \"אנו מקפידים תמיד על פרסום שקוף וברור\""
    },
    {
     "ref": "themarker#9",
     "title": "ירי באשקלון ולינץ' במודיעין: השלטון ויתר על משילות — ובחר בעבריינות",
     "published": "2026-10-07T02:59:18+00:00",
     "summary": "ישראל צועדת לאנרכיה לא רק בגלל חוסר ניהול, אלא כי מנהיגיה מתחרים זה בזה בצפצוף על החוק ובביזה של כספי ציבור ■ אנטי ציונות הפכה לבון־טון — בלי לוותר על הכסף של הציונים ■ מי ניסה להבריח אתמול עוד 15 מיליון שקל — ולמה הכנסת הקימה סוכה עבור נתניהו?"
    },
    {
     "ref": "themarker#10",
     "title": "ברמי לוי חייבו קופאים על חוסר בקופה — השופטת אישרה ייצוגית",
     "published": "2026-10-06T20:52:42+00:00",
     "summary": "בית הדין האזורי לעבודה ירושלים קיבל את בקשתם של שני עובדים לשעבר ברשת, שטוענים כי מדובר בפרקטיקה בלתי חוקית המנוגדת להוראות חוק הגנת השכר ■ ברמי לוי טענו שהניכוי נעשה לפי חוק ובהסכמת העובדים ■ בתחילת השנה הוגש כתב אישום נגד רשת ויקטורי על גביית חוסרים מקופאיות"
    },
    {
     "ref": "themarker#11",
     "title": "שוק האשראי הישראלי בפתחה של תזוזה טקטונית. את הגלים שלה נרגיש בקרוב",
     "published": "2026-10-06T20:26:13+00:00",
     "summary": "החל ב-1 באוקטובר נדרשים הבנקים לשקלל את כל ההלוואות המובטחות בנכס ■ ברמת המאקרו, מדובר בצעד מתבקש לצינון סיכונים מערכתיים, אך במישור הצרכני הוא יותיר לווים רבים ללא מענה בנקאי וייצר ואקום שיתנקז לשוק החוץ-בנקאי"
    },
    {
     "ref": "themarker#12",
     "title": "S&P 500 ונאסד\"ק ננעלו בשיא; תשואות האג\"ח ירדו",
     "published": "2026-10-06T20:12:00+00:00",
     "summary": "ריי דליו מזהיר: האג\"ח של ארה\"ב חשופות לפגיעה אם סין ויפן יפסיקו לקנות אותן ■ עליות של 1% באירופה, שוקי האג\"ח ביבשת מזנקים בהובלת אג\"ח צרפתיות ■ מניית אסוס נופלת ב-10% בלונדון עקב חשד למתקפת האקרים"
    },
    {
     "ref": "themarker#13",
     "title": "\"אם לא היה 7 באוקטובר, נתניהו היה לוקח בהליכה - וזה בגלל הדמוגרפיה\"",
     "published": "2026-10-06T18:40:24+00:00",
     "summary": "קולותיהם של מצביעי הפעם הראשונה בבחירות הקרובות מהווים כ–12 מנדטים. תמר הרמן, המנהלת האקדמית של מרכז ויטרבי ועמיתה בכירה במכון הישראלי לדמוקרטיה, אומרת כי רוב הצעירים הללו הם דתיים, חרדים או מסורתיים, וגם החילונים שבהם – נוטים ימינה. האם זו ההזדמנות האחרונה להכתיר מועמד מהמרכז–שמאל?"
    },
    {
     "ref": "themarker#14",
     "title": "חברות התעופה הישראליות עודכנו: טיסות ההשבה מדובאי שתוכננו היום בוטלו",
     "published": "2026-10-06T18:01:55+00:00",
     "summary": "למרות הודעתה של שרת התחבורה מירי רגב כי טיסות ההשבה מהאמירויות יימשכו עד יום חמישי, שתי חברות תעופה ישראליות התבשרו כי חלונות ההמראות והנחיתות (סלוטים) שיועדו להן היום - בוטלו"
    },
    {
     "ref": "themarker#15",
     "title": "ג'יימי דיימון: \"מודל מיתוס של אנתרופיק הגדיל את סיכון הסייבר פי 10\"",
     "published": "2026-10-06T17:40:29+00:00",
     "summary": "מנכ\"ל בנק ג'יי. פי מורגן צ'ייס התייחס בריאיון לבלומברג לסיכוני הסייבר שיצרו מודלי השפה החדשים ■ דיימון: \"הבינה המלאכותית יצרה נקודות תורפה שלא ידענו עליהן\""
    },
    {
     "ref": "themarker#16",
     "title": "לפרק את משרד החינוך? יותר דחוף לעלות עם D9 על המדמנה של מירי רגב",
     "published": "2026-10-06T16:39:42+00:00",
     "summary": "רבים מסכימים שנחוצה רפורמה משמעותית במשרד החינוך, אך אירועי השבוע האחרון מראים שניקוי האורוות הדרמטי נחוץ דווקא במשרד התחבורה, המלא במינויי המקורבים של השרה ■ וגם: איך שיחות עם ChatGPT לא יסבכו אותך בבית המשפט, בזק מתמזגת עם יס, והמניה שאיבדה שני מיליארד שקל ■ כל מה שצריך לדעת על היום שהיה בכלכלה"
    },
    {
     "ref": "themarker#17",
     "title": "עמית סגל בשיחות סגורות: \"לא פוסל מעבר ל–13, אבל לא כשרביב דרוקר מנהל את העניינים\"",
     "published": "2026-10-06T15:59:02+00:00",
     "summary": "יום אחרי שנחשף שבעלי רשת 13 ניסה לגייס אותו, סגל אומר בשיחות סגורות כי הוא לא שולל מעבר לחדשות 13 ■ בין סגל לדרוקר יש היסטוריה של התכתשויות פומביות ברשתות החברתיות, והשניים לא מסרו תגובה ■ רשת 13: \"לא נעשה שום ניסיון לגייס את עמית סגל\""
    },
    {
     "ref": "themarker#18",
     "title": "1,200 אנשי צוות מחברות תעופה ממדינות שאין עימן יחסים דיפלומטיים נכנסו לישראל",
     "published": "2026-10-06T15:24:41+00:00",
     "summary": "בדיון בוועדת חוץ וביטחון בכנסת התברר כי בין אנשי הצוות שנכנסו ארצה היו גם אזרחים מסוריה, מלבנון ומעומאן ■ רשימות של אנשי צוות מועברות לרשויות בישראל 48 שעות לפחות לפני ההמראה, אך לדברי מקור במשרד התחבורה, הרשימות לא נבדקו באופן יסודי בשנתיים האחרונות לפחות"
    },
    {
     "ref": "themarker#19",
     "title": "את המחיר של השחתת השירות הציבורי אנחנו משלמים בדם",
     "published": "2026-10-06T15:19:11+00:00",
     "summary": "במשך שנים התרגלנו להתייחס למינויים פוליטיים כאל רעה חולה \"הכרחית\" וכעוד נושא משעמם של מינהל תקין, כזה שמעסיק בעיקר משפטנים ועמותות ■ אלא שמינוי פוליטי הוא אף פעם לא רק ג'וב למקורב – הוא תמיד מניפת נזקים שמתפרסת הרבה מעבר למינוי עצמו"
    },
    {
     "ref": "themarker#20",
     "title": "לא החברה הערבית היא נטל על המדינה, אלא האפליה",
     "published": "2026-10-06T14:50:54+00:00",
     "summary": "בערוץ 14 טענו שהמדינה מוציאה על החברה הערבית 40 מיליארד שקל בשנה יותר ממה שהיא גובה ממנה ■ התשתית המחקרית מראה פער קטן בהרבה — ועצם המסגור של השאלה מחזק תפיסת עולם מסוכנת"
    },
    {
     "ref": "themarker#21",
     "title": "איך יכול להיות שמפקח בתפקיד רגיש אינו עובד מדינה? נציבות שירות המדינה עשויה להתערב",
     "published": "2026-10-06T14:45:17+00:00",
     "summary": "נציבות שירות המדינה רומזת כי תבדוק כיצד דביר רובינשטיין, מנהל מרכז המבצעים לאבטחת תעופה במשרד התחבורה, עובד במיקור חוץ ■ אף שחלק מהכשלים באגף הביטחון החלו לפני תקופתה של מירי רגב כשרת התחבורה, היא לא תוכל לחמוק מאחריותה המלאה"
    },
    {
     "ref": "themarker#22",
     "title": "\"בעליון הבינו את הגזל\": נלחם נגד איסתא על 30 דולר ויצר תקדים לנוסעים",
     "published": "2026-10-06T13:49:36+00:00",
     "summary": "מדריך טיולים מתל אביב הגיש תביעה נגד איסתא, לאחר שגבתה ממנו דמי טיפול על החזר שהעבירה מחברת תעופה על טיסה שבוטלה ■ הוא הפסיד בשתי ערכאות אך התעקש עד העליון, שקיבל את עמדתו וקבע כי סוכנות נסיעות לא יכולה לגבות דמי טיפול מהחזר התמורה ■ הפסיקה משליכה על נוסעים רבים שחויבו בעמלות כאלה"
    },
    {
     "ref": "themarker#23",
     "title": "\"פליי דובאי יצטרכו להחזיר את האמון\": ניסיון החטיפה מטלטל את מחירי הטיסות למזרח",
     "published": "2026-10-06T13:00:32+00:00",
     "summary": "השבתת הטיסות דרך דובאי בעקבות ניסיון החטיפה עצרה את ירידת המחירים הצפויה לאחר החגים, ואף הביאה להתייקרות בטווח הקצר ■ במקביל, סוכני הנסיעות מזהים ביקוש גובר לחברות ישראליות והישראלים מגלים זהירות רבה יותר בטיסות דרך האמירויות"
    },
    {
     "ref": "themarker#24",
     "title": "המניה בשפל של 13 שנה: כך התרסקה נייקי — ואיך זה משפיע על הראל ויזל",
     "published": "2026-10-06T12:58:43+00:00",
     "summary": "נייקי מתחרטת שהציפה את השוק בנעלי ג'ורדן ועודפי מלאי: \"צריך שזה ירגיש מיוחד\", הודה המנכ\"ל, שמחק למייסדים הון עתק ■ הזנחת החדשנות בספורט עלתה באובדן נתח שוק, וכשאין צמיחה, מרגיעים משקיעים בתוכנית קיצוצים ■ עוד בדו\"חות: איתותים רעים לזכיינית הגדולה פוקס"
    }
   ]
  },
  {
   "outlet": "WSJ — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "wsj_markets#0",
     "title": "Chinese Yuan May Be Undervalued",
     "published": "2026-10-07T03:34:00+00:00",
     "summary": "The Chinese yuan is undervalued by as much as 25%, Capital Economics said."
    },
    {
     "ref": "wsj_markets#1",
     "title": "Gold Ticks Lower as Investors Await Fed Meeting Minutes",
     "published": "2026-10-07T00:40:00+00:00",
     "summary": "Gold edged lower in Asian trade ahead of the Federal Reserve’s September meeting minutes due later in the global day."
    },
    {
     "ref": "wsj_markets#2",
     "title": "Oil Rises Amid Ongoing Mideast Tensions",
     "published": "2026-10-07T00:27:00+00:00",
     "summary": "Oil rose in early Asian trade amid ongoing tensions in the Middle East that could sustain concerns over supply disruptions in the region."
    },
    {
     "ref": "wsj_markets#3",
     "title": "Nikkei Flat, Supported by Electronics, Machinery Shares",
     "published": "2026-10-07T00:20:00+00:00",
     "summary": "Japan’s Nikkei Stock Average was flat as gains in electronics and machinery shares offset losses in financial stocks."
    },
    {
     "ref": "wsj_markets#4",
     "title": "The S&P 500 Hits a New Record High, Powered by Tech—and Not Much Else",
     "published": "2026-10-06T21:33:00+00:00",
     "summary": "Most U.S. stocks are down, but the market’s AI engine is firing on all cylinders."
    },
    {
     "ref": "wsj_markets#5",
     "title": "WSJ Dollar Index Falls 0.16% to 97.15",
     "published": "2026-10-06T21:20:00+00:00",
     "summary": "The WSJ Dollar Index fell 0.2% — down two of the past three trading days."
    },
    {
     "ref": "wsj_markets#6",
     "title": "Health Care Roundup: Market Talk",
     "published": "2026-10-06T21:09:00+00:00",
     "summary": "Find insight on Sanofi, CSL, Shionogi and more in the latest Market Talks covering the Health Care sector."
    },
    {
     "ref": "wsj_markets#7",
     "title": "Basic Materials Roundup: Market Talk",
     "published": "2026-10-06T21:08:00+00:00",
     "summary": "Find insight on gold futures, Laopu Gold, Rio Tinto and more in the latest Market Talks covering Basic Materials."
    },
    {
     "ref": "wsj_markets#8",
     "title": "Energy & Utilities Roundup: Market Talk",
     "published": "2026-10-06T21:07:00+00:00",
     "summary": "Find insight on crude futures, Amplitude Energy, SK Innovation and more in the latest Market Talks covering Energy and Utilities."
    },
    {
     "ref": "wsj_markets#9",
     "title": "Auto & Transport Roundup: Market Talk",
     "published": "2026-10-06T21:06:00+00:00",
     "summary": "Find insight on Southwest Airlines, Mercedes-Benz, BMW, Daimler Truck and more in the latest Market Talks covering Auto and Transport."
    },
    {
     "ref": "wsj_markets#10",
     "title": "Tech, Media & Telecom Roundup: Market Talk",
     "published": "2026-10-06T21:04:00+00:00",
     "summary": "Find insight on ASML Holding, CrowdStrike, CGI and more in the latest Market Talks covering Technology, Media and Telecom."
    },
    {
     "ref": "wsj_markets#11",
     "title": "Financial Services Roundup: Market Talk",
     "published": "2026-10-06T21:03:00+00:00",
     "summary": "Find insight on Kalshi, Banco Santander, AIA, United Overseas Bank and more in the latest Market Talks covering Financial Services."
    },
    {
     "ref": "wsj_markets#12",
     "title": "Whatever Happens to Bonds, Stocks Win",
     "published": "2026-10-06T20:42:00+00:00",
     "summary": "Plus, Brent crude climbs and chip stocks are mixed"
    },
    {
     "ref": "wsj_markets#13",
     "title": "U.S. Stocks Rise as AI Momentum Builds",
     "published": "2026-10-06T20:41:00+00:00",
     "summary": "U.S. stocks rose and the broad S&P 500 hit a record high as artificial-intelligence bets regained upward momentum."
    },
    {
     "ref": "wsj_markets#14",
     "title": "Opinion | Washington Needs the Tax-Reform Spirit of ’86",
     "published": "2026-10-06T20:41:00+00:00",
     "summary": "Close loopholes that cost trillions in federal revenue and encourage the wealthy to game the system."
    },
    {
     "ref": "wsj_markets#15",
     "title": "Oil Settles Little Changed as Improved Flows Still Face Risks",
     "published": "2026-10-06T19:39:00+00:00",
     "summary": "Crude futures recovered from early losses and settled fractionally higher with market optimism about increased shipments out of the Middle East tempered by continued conflict risk."
    },
    {
     "ref": "wsj_markets#16",
     "title": "U.S. Natural Gas Futures Extend Gains to Three Sessions",
     "published": "2026-10-06T19:35:00+00:00",
     "summary": "U.S. natural gas futures stretched gains to three sessions, supported by lower production, lingering cooling demand and LNG flows."
    },
    {
     "ref": "wsj_markets#17",
     "title": "S&P 500 Reaches New Record High",
     "published": "2026-10-06T18:45:00+00:00",
     "summary": "U.S. stocks climbed, with the S&P 500 hitting a record high and the Nasdaq on track to hit a second consecutive record.."
    },
    {
     "ref": "wsj_markets#18",
     "title": "Wall Street Bonuses Are Expected to Hit Another High This Year",
     "published": "2026-10-06T14:07:00+00:00",
     "summary": "New York reports that the industry is now on pace for $90 billion in profits this year, leading to higher compensation."
    },
    {
     "ref": "wsj_markets#19",
     "title": "11 of the Best Financial Advisor Companies: Well-Known Fiduciary Investment Firms to Consider",
     "published": "2026-10-06T13:14:00+00:00",
     "summary": "We analyzed everything from advisor credentials to fees to portfolio options at some of the larger and more well-known registered investment advisor firms, to help you select a firm that could best connect you with a fiduciary financial advisor."
    },
    {
     "ref": "wsj_markets#20",
     "title": "These Company Insiders Are Selling. Should You?",
     "published": "2026-10-06T10:25:00+00:00",
     "summary": "Plus, got diesel?"
    },
    {
     "ref": "wsj_markets#21",
     "title": "What Oura’s Stalled IPO Tells Us About One-Hit Wonders",
     "published": "2026-10-06T09:30:00+00:00",
     "summary": "Oura pitched itself as a tech platform, but investors saw through that."
    },
    {
     "ref": "wsj_markets#22",
     "title": "Luxury Industry Likely to Have Slowed in 3Q",
     "published": "2026-10-06T09:01:00+00:00",
     "summary": "European stock indexes rose in opening trade, as the continent catched up with gains in U.S. stocks Monday."
    },
    {
     "ref": "wsj_markets#23",
     "title": "Stock Market News, Oct. 6, 2026: S&P 500 Hits New Record High",
     "published": "2026-10-06T08:45:19+00:00",
     "summary": "U.S. 10-year Treasury yield eases after relentless rise"
    },
    {
     "ref": "wsj_markets#24",
     "title": "KKR Strikes Deal to Buy Private-Capital Fund Administrator Gen II",
     "published": "2026-10-06T08:09:00+00:00",
     "summary": "Private-capital funds have proliferated in recent years as investors seek to reduce reliance on public markets."
    }
   ]
  }
 ],
 "markets_snapshot": {
  "TA35": {
   "symbol": "TA35.TA",
   "last": 4198.8101,
   "prev_close": 4223.7402,
   "change_pct": -0.59,
   "as_of": "2026-10-06"
  },
  "SP500": {
   "symbol": "^GSPC",
   "last": 7818.9302,
   "prev_close": 7773.9502,
   "change_pct": 0.58,
   "as_of": "2026-10-06"
  },
  "USDILS": {
   "symbol": "ILS=X",
   "last": 3.0501,
   "prev_close": 3.053,
   "change_pct": -0.09,
   "as_of": "2026-10-07"
  },
  "BRENT": {
   "symbol": "BZ=F",
   "last": 101.58,
   "prev_close": 100.32,
   "change_pct": 1.26,
   "as_of": "2026-10-06"
  },
  "BTC": {
   "symbol": "BTC-USD",
   "last": 84175.9922,
   "prev_close": 85786.5938,
   "change_pct": -1.88,
   "as_of": "2026-10-07"
  }
 },
 "recent_weekly_concepts": [
  "Network Effects: Why Some Products Get More Valuable the More People Use Them",
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