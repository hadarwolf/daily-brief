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
     "title": "China Railways Set Record With 4.13 Billion Trips in 10 Months",
     "published": "2026-11-14T02:04:53+00:00",
     "summary": "China’s railways carried 4.13 billion passengers in the first 10 months of 2026, up 4.7% from a year earlier, according to the Ministry of Transport."
    },
    {
     "ref": "bloomberg_markets#1",
     "title": "Cruise Ship Capsizes After Tanker Collision in New Orleans",
     "published": "2026-11-14T00:29:03+00:00",
     "summary": "All passengers and crew members aboard a river cruise ship that capsized after a tanker collision in New Orleans on Friday were accounted for, with 32 people hospitalized but none critically injured, according to Mayor Helena Moreno. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#2",
     "title": "US Flights Grounded Over Air Traffic Communication Issue",
     "published": "2026-11-14T00:08:57+00:00",
     "summary": "US authorities halted flights nationwide due to communication issues affecting air traffic control. Myles Miller reports from LaGuardia Airport. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#3",
     "title": "Nvidia’s Board CEO Hunt, Stocks Finish Week Higher, Retail in Focus",
     "published": "2026-11-13T23:48:58+00:00",
     "summary": "Bloomberg Television brings you the latest news and analysis leading up to the final minutes and seconds before and after the closing bell on Wall Street. Today's guests are Franklin Templeton Institute’s Head Market Strategist Chris Galipeau, Pershing Square’s Founder and CEO Bill Ackman, London Business School Leadership Institute’s Founding Director Randall Peterson, Committee For A Responsible"
    },
    {
     "ref": "bloomberg_markets#4",
     "title": "Troubled Sherritt Misses Payment as Liquidity Crisis Deepens",
     "published": "2026-11-13T23:39:03+00:00",
     "summary": "Sherritt International Corp. missed an interest payment on secured notes, deepening a liquidity crisis for the troubled Canadian miner hobbled by US sanctions that forced it to halt production in Cuba."
    },
    {
     "ref": "bloomberg_markets#5",
     "title": "Carrie Underwood on Her New Wellness Brand, HiNote",
     "published": "2026-11-13T23:20:22+00:00",
     "summary": "Carrie Underwood and HiNote CEO and co-founder Kerrigan Behrens discuss the wellness brand’s origins and plans to grow production of its flagship drink mix following a new investment. They speak with Vonnie Quinn and Bailey Lipschultz on “The Close” (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#6",
     "title": "Nvidia’s Board Failed Jensen Huang: Randall Peterson",
     "published": "2026-11-13T23:20:08+00:00",
     "summary": "Randall Peterson, founding director of the London Business School Leadership Institute, believes the board of Nvidia failed both the company and Huang. He speaks with Vonnie Quinn and Bailey Lipschultz on “The Close”. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#7",
     "title": "Exemplar Luxury Group CEO on the Company’s Second Life",
     "published": "2026-11-13T22:59:58+00:00",
     "summary": "Geoffroy van Raemdonck said Exemplar Luxury Group is financially stronger after Saks emerged from bankruptcy. He emphasized reaching that goal through customer loyalty, full-price sales and profitable growth that supports reinvestment and strengthens relationships with brands. Geoffroy van Raemdonck speaks with Romaine Bostick on “The Close.” (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#8",
     "title": "Big Take: The Climate Is Changing in Ways Models Couldn’t Predict",
     "published": "2026-11-13T22:52:42+00:00",
     "summary": "COP31 aims to set new goals to bring down emissions as climate change outpaces scientists’ predictions and disasters drive billions of dollars of losses. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#9",
     "title": "Jeff Currie Says He’s Bearish on Copper Due to China",
     "published": "2026-11-13T22:51:59+00:00",
     "summary": "Jeff Currie, CEO and founder at Real Macro and senior adviser at Carlyle, says gold’s retreat reflects a shortage of dollar liquidity. He also discusses the global oil industry in an interview with Vonnie Quinn and Bailey Lipschultz on “The Close.” (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#10",
     "title": "Rent the Runway CEO Paige Thomas on Her Company Vision",
     "published": "2026-11-13T22:41:52+00:00",
     "summary": "Rent the Runway CEO Paige Thomas sits down with Romaine Bostick to discuss her vision for the company since taking over the helm two months ago, how she plans to strategize the company’s business and more. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#11",
     "title": "Tanker Hits Cruise Ship in New Orleans, Triggering Rescue",
     "published": "2026-11-13T22:33:48+00:00",
     "summary": "A tanker collided with a docked river cruise ship on the Mississippi River in New Orleans, leaving the smaller vessel partly submerged and setting off a rescue operation. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#12",
     "title": "Flights Grounded Across US Over Air Traffic Control Problems",
     "published": "2026-11-13T22:33:32+00:00",
     "summary": "US authorities halted flights nationwide due to communication issues affecting air traffic control, an extraordinary action that threatens to disrupt travel across the globe. The Federal Aviation Administration said in an advisory notice on its website on Friday that the ground stop affects all US airports and departing flights should remain grounded until further notice. It cited “extraordinary c"
    },
    {
     "ref": "bloomberg_markets#13",
     "title": "US is Struggling to Build Affordable Housing",
     "published": "2026-11-13T22:28:28+00:00",
     "summary": "America’s housing affordability crisis may be about more than high mortgage rates and restrictive zoning. Boston Fed Principal Economist and Policy Advisor Paul Willen says soaring construction costs are making many new housing projects financially unworkable, even after they’ve already won approval. He points to research showing construction productivity has barely improved in decades, even as pr"
    },
    {
     "ref": "bloomberg_markets#14",
     "title": "Investing in Financial Security: Masters in Business with Salim Ramji",
     "published": "2026-11-13T22:11:02+00:00",
     "summary": "Barry speaks with Vanguard CEO Salim Ramji. They discuss his early career journey in law before transitioning to BlackRock as Head of Corporate Strategy and later taking over as the first \"outsider\" CEO of Vanguard. They also discuss Vanguard's recent acquisition of Altruist and what it means for the future of financial advice. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#15",
     "title": "Flights Halted Across US, FAA Cites Safety Reasons",
     "published": "2026-11-13T22:10:13+00:00",
     "summary": "US authorities halted flights nationwide due to communication issues affecting air traffic control. Will Guisbond reports. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#16",
     "title": "FAA Grounds All Flights Nationwide",
     "published": "2026-11-13T22:04:51+00:00",
     "summary": "All flights in the US have been grounded. The Federal Aviation Administration cited “extraordinary circumstances” and “reasons of safety” for the ground stop, which affects all US airports. Bloomberg's Will Guisbond is following this breaking news. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#17",
     "title": "Salim Ramji on the Vanguard Effect",
     "published": "2026-11-13T22:01:57+00:00",
     "summary": "Barry speaks with Vanguard CEO Salim Ramji. They discuss his early career journey in law before transitioning to BlackRock as Head of Corporate Strategy and later taking over as the first \"outsider\" CEO of Vanguard. They also discuss Vanguard's recent acquisition of Altruist and what it means for the future of financial advice. (Source: Bloomberg)"
    },
    {
     "ref": "bloomberg_markets#18",
     "title": "Bond Investors Expect More Pain After Week of Soaring Yields",
     "published": "2026-11-13T06:00:17+00:00",
     "summary": "Just when global bond investors were starting to believe the worst of this year’s selloff was over, surging Treasury yields are making them think again."
    },
    {
     "ref": "bloomberg_markets#19",
     "title": "Emerging-Market Assets Dip as Chip Rout, Fed Rate Worries Linger",
     "published": "2026-11-13T04:53:47+00:00",
     "summary": "Emerging-market assets fell on Friday as a rout in chipmakers weighed on equities and lingering concerns over the Federal Reserve’s rate path kept currencies under pressure."
    }
   ]
  },
  {
   "outlet": "Financial Times",
   "lang": "en",
   "items": [
    {
     "ref": "ft_home#0",
     "title": "US aviation regulator lifts order that grounded thousands of flights",
     "published": "2026-11-14T02:37:04+00:00",
     "summary": "Airports had halted take-offs because of a temporary ‘telecommunications outage’"
    },
    {
     "ref": "ft_home#1",
     "title": "Trump will not raise Nvidia spy issue with Xi at summit, officials say",
     "published": "2026-11-14T01:28:36+00:00",
     "summary": "US president will hold trilateral meeting with Chinese leader and Russia’s Vladimir Putin next week"
    },
    {
     "ref": "ft_home#2",
     "title": "SpaceX aborts attempt to catch Starship booster rocket",
     "published": "2026-11-13T23:43:09+00:00",
     "summary": "Elon Musk suffers setback in efforts to develop a completely reusable megarocket system"
    },
    {
     "ref": "ft_home#3",
     "title": "Sam Bankman-Fried would have made nearly $40bn in Anthropic IPO",
     "published": "2026-11-13T23:39:26+00:00",
     "summary": "Jailed cryptocurrency mogul loses out on windfall from early investment in the AI lab"
    },
    {
     "ref": "ft_home#4",
     "title": "Anthropic’s Amodei ‘not super fussed’ about market turmoil ahead of IPO",
     "published": "2026-11-13T19:41:26+00:00",
     "summary": "AI lab’s chief executive brushes off tech stock turbulence less than a week before planned $1.5tn listing"
    },
    {
     "ref": "ft_home#5",
     "title": "Arm boss Rene Haas approached in Nvidia CEO search",
     "published": "2026-11-13T17:45:54+00:00",
     "summary": "Head of SoftBank-owned UK semiconductor group sounded out after Jensen Huang resigned over affairs"
    },
    {
     "ref": "ft_home#6",
     "title": "Scott Colom: the Democrat who conquered the reddest of red states",
     "published": "2026-11-13T17:08:50+00:00",
     "summary": "High turnout and viral ads helped propel him to victory in a deeply conservative state that hasn’t had a Black senator since 1881"
    },
    {
     "ref": "ft_home#7",
     "title": "Bessent blames Lutnick’s commerce department for failure to blacklist Megaspeed",
     "published": "2026-11-13T17:06:01+00:00",
     "summary": "Salvo from US Treasury secretary risks stoking tensions within Trump administration over Nvidia scandal"
    },
    {
     "ref": "ft_home#8",
     "title": "AI believers hold the line after Nvidia ructions",
     "published": "2026-11-13T16:55:39+00:00",
     "summary": "Stock market bulls largely shrug off concerns about the concentration of risk"
    },
    {
     "ref": "ft_home#9",
     "title": "Will Jensen Huang sell his $135bn of stock?",
     "published": "2026-11-13T13:22:54+00:00",
     "summary": "Any attempt by Nvidia co-founder to offload his shares would unnerve investors but is fraught with legal and price risks"
    }
   ]
  },
  {
   "outlet": "TheMarker",
   "lang": "he",
   "items": [
    {
     "ref": "themarker#0",
     "title": "טראמפ רכש מניות אנבידיה לפני שהעניק לחברה הקלות ביצוא",
     "published": "2026-11-13T21:09:06+00:00"
    },
    {
     "ref": "themarker#1",
     "title": "וול סטריט ננעלה בירידות; אנבידיה איבדה השבוע 13% מערכה",
     "published": "2026-11-13T21:04:00+00:00",
     "summary": "מיקרוסופט עלתה ב–0.2% לאחר שדיווחה כי שירות המייל קרוב לחזרה לרמות הנורמליות לאחר תקלה של יותר מ–12 שעות בשרתי החברה ■ ב.מ.וו קראה לריקול ל–720 אלף מכוניות בארה\"ב ומבקשת מבעלי הרכבים להחנות את המכוניות מחוץ למבנים מחשש להתלקחות ■ המסחר באירופה ננעל בעליות קלות בעקבות שיפור בתמ\"ג ובתעסוקה ■ אסיה נסגרה בירידות; רף ה–160 ין לדולר שוב נחצה"
    },
    {
     "ref": "themarker#2",
     "title": "שר האוצר של ארה\"ב מאשים את משרד המסחר במשבר השבבים באנבידיה",
     "published": "2026-11-13T19:10:00+00:00",
     "summary": "סקוט בסנט, שר האוצר של ארה\"ב התייחס בריאיון ל–CNBC למכירת שבבי אנבידיה לחברה הסינגפורית שבבעלות המאהבת של מנכ\"ל אנבידיה לשעבר ■ בסנט: \"ארבע רשויות תמכו בהוספת מגה ספיד ל'רשימה השחורה', אך הסמכות נמצאת במשרד המסחר\""
    },
    {
     "ref": "themarker#3",
     "title": "חשש כבד באוצר מטלטלה באנבידיה: מכניסה יותר מ–10 מיליארד שקל בשנה",
     "published": "2026-11-13T14:06:45+00:00",
     "summary": "לא ברור האם חילופי הנהלה בחברת אנבידיה יביאו להקפאת תוכנית ההתרחבות של החברה בישראל ■ זוהי המחשה כמה מסוכנת הכלכלה הבזבזנית שניהלה ממשלת נתניהו, על בסיס ההנחה שההכנסות ממסים ימשיכו להיות גבוהות"
    },
    {
     "ref": "themarker#4",
     "title": "\"אני חתיכת ח**\": שבור ומרוסק, השעות האחרונות של ג'נסן הואנג כמנכ\"ל אנבידיה",
     "published": "2026-11-13T10:58:07+00:00",
     "summary": "לאחר שבועות שבהם הכחיש את הטענות לרומן מחוץ לנישואים ונלחם כדי לשמור על כיסאו כמנכ\"ל, ג'נסן הואנג נכנע ללא תנאי ■ התפנית הגיעה לפני שבוע, ומאז גורמים ששוחחו עמו מספרים כי הוא נשמע כמי שכבר לא ממש אכפת לו משבבים ו-AI"
    },
    {
     "ref": "themarker#5",
     "title": "למדינה אין בעיה לחנוק את ההייטק הישראלי כל עוד הצ'ק של האקזיט מגיע בזמן",
     "published": "2026-11-13T10:38:48+00:00",
     "summary": "חגיגות האקזיטים המהדהדות בכותרות הן אשליה אופטית מסוכנת: כשההייטק אחראי ל–20% מהתמ\"ג ולחצי מהיצוא הישראלי, ההתנהלות הממשלתית — שמקצצת בתשתיות ומסתערת עם סכין מס על עסקות סקנדרי — אינה סתם אדישות, אלא ממש פוגעת בחברות ■ היזמים כבר הבינו את הרמז"
    },
    {
     "ref": "themarker#6",
     "title": "העסקה לרכישת השליטה בארקיע: תאגיד העובדים מחפש משקיע חלופי, \"שיחבק את העובדים\"",
     "published": "2026-11-13T09:47:33+00:00",
     "summary": "בתאגיד עובדי ארקיע חוששים מדילול היקף אחזקת המניות שלהם ומכך שעובדים יפוטרו, גם אחרי שיוזרמו כספים לארקיע ■ בתור שותפים למניות החברה יש לתאגיד העובדים זכות ראשונים להשוות את ההצעה של קבוצת המשקיעים החדשה בארקיע תוך שלושה ימים — עד ליום שני"
    },
    {
     "ref": "themarker#7",
     "title": "נחשף: השבבים המתקדמים של אנבידיה הגיעו לחברה הסינית של המאהבת שלו",
     "published": "2026-11-13T07:47:07+00:00",
     "summary": "מסמכים חדשים מגלים כיצד החברה הסינית שייסדה אליס הואנג, האישה במרכז הפרשייה שמטלטלת את אנבידיה, רכשה שבבי AI שהוברחו לסין ולאחר מכן הותקנו במרכז נתונים בשנגחאי"
    },
    {
     "ref": "themarker#8",
     "title": "\"הרגשתי כמו מהגר\": הם היו חרדים — ועכשיו הם צריכים ללמוד איך בונים קריירה",
     "published": "2026-11-13T06:55:57+00:00",
     "summary": "בלי לימודי ליבה, קשרים מקצועיים או תמיכה משפחתית, יוצאי החברה החרדית נדרשים ללמוד מאפס את כללי המשחק בשוק העבודה — עם תנאי פתיחה שלחילונים קשה לדמיין ■ \"לא היה לי מודל של אנשים עובדים בבית\", אומרים כמה מהם, \"עמדתי מול מעסיקים כמו תייר\""
    },
    {
     "ref": "themarker#9",
     "title": "שבוע המסחר בתל אביב ננעל בירידות; מדד הנדל\"ן איבד 1.5%",
     "published": "2026-11-13T06:39:34+00:00",
     "summary": "הדולר נסחר ביציבות סביב 3.2 שקלים"
    },
    {
     "ref": "themarker#10",
     "title": "כ–14 שעות מתחילת התקלה: מיקרוסופט מעדכנת שהעומס באאוטלוק מתקרב לרמה הרגילה",
     "published": "2026-11-13T06:24:35+00:00",
     "summary": "התקלה בחלק ממוצרי מיקרוסופט הותירה משתמשים בלי יכולת לגשת לשירותי הדואר האלקטרוני והצ'אט שלהם, ורק לאחר שעות ארוכות החברה עידכנה על שיפור בשירות האאוטלוק ■ מדובר באחד השיבושים החמורים ביותר בשנים האחרונות לענקית הטכנולוגיה"
    },
    {
     "ref": "themarker#11",
     "title": "מת ריצ'רד פוזנר — השופט המשפיע ביותר בארה\"ב ביובל האחרון",
     "published": "2026-11-13T05:56:16+00:00",
     "summary": "פוזנר, שכיהן כשופט בבית המשפט לערעורים בשיקגו, היה המשפטן המצוטט ביותר במחצית השנייה של המאה ה–20, כתב יותר מ–50 ספרים ואינספור מאמרים — והיה שמרן שקידם גם פסיקות ליברליות"
    },
    {
     "ref": "themarker#12",
     "title": "עד 2 מיליון שקל: שתי דירות גן בנות 5 חדרים נמכרו בחיפה",
     "published": "2026-11-13T04:35:30+00:00",
     "summary": "וגם: דירת 3 חדרים בחולון, בקומה 3 מתוך 4, נמכרה תמורת 1.5 מיליון שקל ■ ובכמה נמכרה דירת 4 חדרים, בקומה 2 מתוך 7, עם חניה, באשדוד?"
    },
    {
     "ref": "themarker#13",
     "title": "\"שכונה ל' בתל אביב מזדקנת. יש פה גם משפחות, אבל המטפלות הסיעודיות בולטות יותר\"",
     "published": "2026-11-13T04:35:09+00:00",
     "summary": "שכונת ל', שהוקמה בקצה תל אביב ומאז נהפכה למרכז עבור שכונות צפוניות אחרות, מציעה אווירה קהילתית, אבל לאחרונה היו בה מאבקים סביב הצביון החילוני. \"כשהתחתנו חיפשנו מקום קרוב לעיר, שיהיה אפשר למצוא בו מרחבים. כאן הבניינים היו רחבים והדירות יפות, ומאז היא רק הלכה והשתפרה\""
    },
    {
     "ref": "themarker#14",
     "title": "למרות הכישלון המביך של זיני — אסור להדיח אותו מראשות השב\"כ",
     "published": "2026-11-13T04:26:13+00:00",
     "summary": "הבחירות לא הביאו למהפך פוליטי ■ אם השמאל ידיח היום שומרי סף, המהלך עלול להתהפך לו על הראש כשמחנה נתניהו יחזור לשלטון"
    },
    {
     "ref": "themarker#15",
     "title": "הצד שלו, הצד שלה והאמת: כשחסון וברקוביץ' מדברים, מי בודק את העובדות?",
     "published": "2026-11-13T04:25:37+00:00",
     "summary": "המרדף אחר רייטינג והדרישה להשמיע \"קול אחר\" חיזקו את הטאלנטים ושחקו את כוחם של העורכים ■ לבחור צד? מותר, אבל קודם להיצמד לעובדות ולא להחריף את חוסר האמון בציבור"
    },
    {
     "ref": "themarker#16",
     "title": "ערן וולף, מייסד LoanWise: \"הלקוחות שלנו לא קיבלו משכנתא בבנק, זה לא אומר שהם גרועים\"",
     "published": "2026-11-13T04:23:12+00:00",
     "summary": "אחרי שעזב את מימון ישיר הקים ערן וולף את LoanWise, חברה חוץ־בנקאית למשכנתאות שגובה ריבית גבוהה מהבנקים ■ הוא מאמין שלמרות המשבר בישראל שוק הדיור נותר סולידי, ולא מסתיר תיאבון מוגבר לסיכון ושאיפה להנפקה תוך שנתיים ■ \"תיק האשראי שלנו חצה את המיליארד שקל, היעד — 6 מיליארד שקל תוך חמש שנים\""
    },
    {
     "ref": "themarker#17",
     "title": "לאן נעלם שגב משה: \"בקבוצת שגב כבר אין שף־כוכב — וגם אין ממש ניהול\"",
     "published": "2026-11-13T04:22:30+00:00",
     "summary": "הוא היה בכל מקום: שף ראשי באל על, כוכב טלוויזיה, פרזנטור בפרסומות וצמוד לראש הממשלה ורעייתו ■ אבל רשת שגב אקספרס, הנושאת את שמו של השף שגב משה, הלכה והתכווצה — והחובות נערמו ■ \"קבוצת שגב עברה בשנים האחרונות תהליך משמעותי של התייעלות ושינוי\""
    },
    {
     "ref": "themarker#18",
     "title": "בעיר היוקרתית גילו: להיות קרוב לים זה נהדר - עד שהוא אוכל לך את הבית",
     "published": "2026-11-13T04:21:43+00:00",
     "summary": "מיטב הסיפורים החשובים והמעניינים בכלכלה העולמית השבוע"
    },
    {
     "ref": "themarker#19",
     "title": "\"המסכה החדשה של שירות לקוחות גרוע\": המנהלים מתלהבים, הלקוחות פחות",
     "published": "2026-11-13T04:21:03+00:00",
     "summary": "שוק הבינה המלאכותית למוקדי שירות לקוחות מגלגל כמעט 12 מיליארד דולר. המנהלים סבורים שהלקוחות מרוצים - אבל אלה, מצידם, מאמינים שנציגים אנושיים טובים ומדויקים יותר, ושהחברות רק מנסות לחסוך. מה צריך לעשות כדי לשפר את חווית הלקוח?"
    },
    {
     "ref": "themarker#20",
     "title": "הואנג הולך הביתה — אבל מי ירסן את ברון הטכנולוגיה הבא?",
     "published": "2026-11-13T04:20:17+00:00",
     "summary": "מנכ\"ל אנבידיה המתפטר טען שמנהלי חברות ה–AI יודעים לרסן את עצמם ■ פרשת הואנג ממחישה מה קורה כשמי שאמורים לפקח על התאגיד משתכנעים שמה שטוב לו טוב גם לציבור"
    },
    {
     "ref": "themarker#21",
     "title": "טסלה וספייס־אקס צפויות להכריז על המיזוג הגדול בהיסטוריה כבר בדצמבר",
     "published": "2026-11-13T04:17:51+00:00",
     "summary": "שתי חברות הענק של אילון מאסק טסלה וספייס־אקס מתקדמות במגעים, לפי דיווח של \"בלומברג\" ■ התוצאה תהיה חברה בשווי כולל של 3.5 טריליון דולר"
    },
    {
     "ref": "themarker#22",
     "title": "\"לקח לי שלוש שנים לשכנע את בעלי לעבור לכפר ורדים. אתה פותח את החלון ורואה ירוק\"",
     "published": "2026-11-13T04:09:11+00:00",
     "summary": "כשאורלי בן בסט ומשפחתה החליטו לעבור לכפר ורדים, הם ראו 30 בתים ביישוב, ובסוף חזרו לבית הראשון שראו: \"הבית הזה משך אותנו כמו מגנט. אבל מה שהיה יישוב חזק ויוקרתי בגליל, הפסיק לקבל תמיכה מהמדינה, ואנשים חיפשו את אותה איכות חיים במקומות אחרים. הצפון צריך יותר השקעה ושינוי תפיסה\""
    },
    {
     "ref": "themarker#23",
     "title": "ארווין שילינגר ולסיכו־אינדן לא מוותרים: היוניקורן של ענף הבנייה מנסה להתרומם מחדש בקיבוץ בצפון",
     "published": "2026-11-13T04:06:53+00:00",
     "summary": "טכנולוגיית הבנייה של ארווין שילינגר הזניקה בעבר את הסטארט־אפ ויו לשווי של מיליארד דולר, אך אז הגיעה הקריסה ■ שלוש שנים אחרי, נעשה כעת ניסיון שני להכניס את אותה חדשנות לענף בארץ, ולחסוך עשרות אחוזים מהוצאות הבנייה, עם פס ייצור רובוטי באזור התעשייה של קיבוץ אפיקים ■ \"אנחנו מצפים להגיע לשווי דומה לפחות\""
    },
    {
     "ref": "themarker#24",
     "title": "\"ברור שיש כעס\": שנה אחרי שכתב האישום נגדו בוטל, מה קרה לרון אילון?",
     "published": "2026-11-13T04:06:21+00:00",
     "summary": "רון אילון, מנכ\"ל yes לשעבר, תובע מבזק כ-3.3 מיליון שקל על הוצאות משפט ומענק ביצועים. התביעה חוזרת למסלול שעבר מאז פתיחת החקירה בפרשת בזק־yes ועד לסיום ההליך בהסדר מותנה, ומעלה שאלה רחבה יותר: מה קורה לקריירה של מנהל כשהליך פלילי נמשך שנים ומסתיים ללא הרשעה פלילית"
    }
   ]
  },
  {
   "outlet": "WSJ — Markets",
   "lang": "en",
   "items": [
    {
     "ref": "wsj_markets#0",
     "title": "The Next Wave of Food Inflation Is Coming",
     "published": "2026-11-14T01:00:00+00:00",
     "summary": "Grocery prices could increase again as surging energy costs and supply-chain delays are lifting costs for producers."
    },
    {
     "ref": "wsj_markets#1",
     "title": "WSJ Dollar Index Rises 0.84% This Week to 98.34",
     "published": "2026-11-13T22:33:00+00:00",
     "summary": "The WSJ Dollar Index rose 0.2%, up for four consecutive trading days."
    },
    {
     "ref": "wsj_markets#2",
     "title": "Oil Futures End Week Lower",
     "published": "2026-11-13T22:20:00+00:00",
     "summary": "Oil futures settled mixed with Brent practically unchanged and WTI off 0.2%, but both benchmarks saw a second straight weekly decline."
    },
    {
     "ref": "wsj_markets#3",
     "title": "U.S. Stocks Mixed on Nvidia Fallout Fears",
     "published": "2026-11-13T22:14:00+00:00",
     "summary": "U.S. stocks finished mixed as rate fears resurfaced and tumult at Nvidia spilled into the wider semiconductor sector, dragging down technology indexes."
    },
    {
     "ref": "wsj_markets#4",
     "title": "Basic Materials Roundup: Market Talk",
     "published": "2026-11-13T22:01:00+00:00",
     "summary": "Find insight on gold futures, Press Metal Aluminium, Evolution Mining and more in the latest Market Talks covering basic materials."
    },
    {
     "ref": "wsj_markets#5",
     "title": "Auto & Transport Roundup: Market Talk",
     "published": "2026-11-13T21:57:00+00:00",
     "summary": "Find insight on Air France-KLM, HMM and more in the latest Market Talks covering the Auto and Transport sector."
    },
    {
     "ref": "wsj_markets#6",
     "title": "Tech Stocks Fall as Next Week Brings Big Tests for the AI Trade",
     "published": "2026-11-13T21:19:00+00:00",
     "summary": "Plus, Nvidia closes lower and Anthropic CEO hopes IPO will “overdeliver.”"
    },
    {
     "ref": "wsj_markets#7",
     "title": "U.S. Natural Gas Futures Relinquish Some Gains",
     "published": "2026-11-13T20:38:00+00:00",
     "summary": "U.S. natural gas futures settled lower, giving back the previous day’s weather-driven gains as a spell of cold weather is set to lift near-term heating demand."
    },
    {
     "ref": "wsj_markets#8",
     "title": "U.S. Stocks Decline as Nvidia Shares Slide Again",
     "published": "2026-11-13T20:02:00+00:00",
     "summary": "U.S. stocks declined as the tumult surrounding Jensen Huang’s ouster from Nvidia continues to cloud the outlook for the AI trade."
    },
    {
     "ref": "wsj_markets#9",
     "title": "Gold, Silver Futures Post Weekly Losses",
     "published": "2026-11-13T19:29:00+00:00",
     "summary": "Gold futures held their ground in choppy trading as a below-estimate U.S. producer price reading and steadying oil prices ease inflation concerns that sank the metals the previous session."
    },
    {
     "ref": "wsj_markets#10",
     "title": "Opinion | Congressional Insider Trading Isn’t as Common as You Think",
     "published": "2026-11-13T19:18:00+00:00",
     "summary": "As with Mr. Pelosi’s Alphabet options, many insider-trading claims fall apart under scrutiny."
    },
    {
     "ref": "wsj_markets#11",
     "title": "Anthropic Chief Tells Jamie Dimon He Hopes IPO Will ‘Underpromise and Overdeliver’",
     "published": "2026-11-13T18:46:00+00:00",
     "summary": "The artificial-intelligence giant, which is expected to begin trading Thursday, is targeting a valuation of roughly $1.33 trillion or more."
    },
    {
     "ref": "wsj_markets#12",
     "title": "Cravath Employee Is Charged With Insider Trading Using Confidential Deal Information",
     "published": "2026-11-13T15:18:00+00:00",
     "summary": "Prosecutors said the employee netted $70,000 in profits related to client matters including Paramount’s acquisition of Warner Bros."
    },
    {
     "ref": "wsj_markets#13",
     "title": "11 of the Best Financial Advisor Companies: Well-Known Fiduciary Investment Firms to Consider",
     "published": "2026-11-13T14:12:00+00:00",
     "summary": "We analyzed everything from advisor credentials to fees to portfolio options at some of the larger and more well-known registered investment advisor firms, to help you select a firm that could best connect you with a fiduciary financial advisor."
    },
    {
     "ref": "wsj_markets#14",
     "title": "The Stock Market’s Bargain Bin Is Secretly Stuffed With AI Stocks",
     "published": "2026-11-13T14:00:00+00:00",
     "summary": "Value funds don’t always offer the exposure to cheap, boring stocks that investors might expect."
    },
    {
     "ref": "wsj_markets#15",
     "title": "Bitcoin Holds Below $70,000 as Risk-Off Mood Pressures Crypto",
     "published": "2026-11-13T11:34:00+00:00",
     "summary": "Bitcoin fell below $70,000 for the first time since August and was on track for its sixth weekly loss as expectations of higher rates and the tech stock selloff sapped risk appetite."
    },
    {
     "ref": "wsj_markets#16",
     "title": "Kraft Heinz Plans to Bring New Life to Old Brands",
     "published": "2026-11-13T11:27:00+00:00",
     "summary": "Some of the best analysis and insight on investing, the wealth-management business and more."
    },
    {
     "ref": "wsj_markets#17",
     "title": "How the AI Trade Hijacked the Treasury Market for a Month",
     "published": "2026-11-13T11:17:00+00:00",
     "summary": "Plus, Nvidia enters its next phase, and Microsoft’s global outage"
    },
    {
     "ref": "wsj_markets#18",
     "title": "Jensen Huang Called Her ‘a Deer in the Headlights.’ Now She Runs Nvidia.",
     "published": "2026-11-13T11:02:00+00:00",
     "summary": "Plus, America’s richest retirement market, and Chris Van Hollen says he will challenge Chuck Schumer to lead Senate Democrats."
    },
    {
     "ref": "wsj_markets#19",
     "title": "European Stock Indexes Turn Positive as Oil Drops",
     "published": "2026-11-13T10:52:00+00:00",
     "summary": "European stock indexes turned positive, reversing earlier declines, as a fall in oil prices buoyed sentiment."
    },
    {
     "ref": "wsj_markets#20",
     "title": "CVS Breakup Won’t Satisfy Washington. It Could Still Work for Wall Street.",
     "published": "2026-11-13T10:30:00+00:00",
     "summary": "Spinning off its drugstores won’t quiet CVS’s critics, but it could leave shareholders with a more valuable company."
    },
    {
     "ref": "wsj_markets#21",
     "title": "Stock Market News, Nov. 13, 2026: Nvidia Shares Drop Again as Investors Eye Fallout From Huang's Removal",
     "published": "2026-11-13T09:55:33+00:00",
     "summary": "AI trade faces major tests next week with chip giant's earnings and Anthropic's IPO"
    },
    {
     "ref": "wsj_markets#22",
     "title": "Asia’s Stock Rebound Fades as Nvidia Uncertainty Lingers",
     "published": "2026-11-13T07:09:00+00:00",
     "summary": "The tentative rebound in Asia’s bruised technology stocks faded Friday afternoon as bearish sentiment overpowered the initial lift."
    },
    {
     "ref": "wsj_markets#23",
     "title": "Japan Fires Off Verbal Warning on Yen as Weakness Stokes Intervention Alert",
     "published": "2026-11-13T06:21:00+00:00",
     "summary": "Finance Minister Satsuki Katayama called recent yen movements “one-sided and rapid.”"
    },
    {
     "ref": "wsj_markets#24",
     "title": "Before His Ouster, Jensen Huang Belittled the Executive Replacing Him",
     "published": "2026-11-13T02:00:00+00:00",
     "summary": "Interim CEO Colette Kress has questioned some Huang dealmaking. He called her “a deer in the headlights.”"
    }
   ]
  }
 ],
 "markets_snapshot": {
  "TA35": {
   "symbol": "TA35.TA",
   "last": 4038.02,
   "prev_close": 4073.77,
   "change_pct": -0.88,
   "as_of": "2026-11-13"
  },
  "SP500": {
   "symbol": "^GSPC",
   "last": 7561.6699,
   "prev_close": 7592.3999,
   "change_pct": -0.4,
   "as_of": "2026-11-13"
  },
  "USDILS": {
   "symbol": "ILS=X",
   "last": 3.1918,
   "prev_close": 3.1739,
   "change_pct": 0.56,
   "as_of": "2026-11-13"
  },
  "BRENT": {
   "symbol": "BZ=F",
   "last": 96.08,
   "prev_close": 95.82,
   "change_pct": 0.27,
   "as_of": "2026-11-13"
  },
  "BTC": {
   "symbol": "BTC-USD",
   "last": 66657.8281,
   "prev_close": 71342.9688,
   "change_pct": -6.57,
   "as_of": "2026-11-14"
  }
 },
 "recent_weekly_concepts": [
  "Key-person risk",
  "Unit economics: the profit (or loss) hiding inside every single customer",
  "Network effects: why the biggest platform keeps winning",
  "Concept of the Day: Network Effects",
  "Mark-to-Market Accounting: Why a Paper Gain Can Move Reported Profit",
  "Network effects: why some products get more valuable the more people use them",
  "Network effects: why some products get more valuable the more people use them",
  "Financial contagion",
  "Network effects: why some products get more valuable as more people use them",
  "Network effects: why some products get better the more people use them",
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
  "Network effects: why some products get more valuable as more people use them"
 ]
}
</input>