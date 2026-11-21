Write the Learn Something Small section: 3 vocabulary cards, then one concept, then one "on this day" — 5 stories, in that order.

1. Vocabulary — 3 stories, each kind "word". Useful English business & economics terms and short phrases that build the reader's fluency in the domain — the kind of language heard in real business talk, articles and meetings. Skip anything too basic for a sharp student. Vary them across the 3 (a term, a phrase, an idiom). Don't repeat anything in recent_words_and_concepts.
   - headline: the English term or phrase, with the Hebrew equivalent in parentheses — e.g. "Burn rate (קצב שריפת מזומן)".
   - scroll: a one-line definition.
   - coffee: a plain explanation plus one natural English example sentence showing how it is used.
   - deep: 120-200 words — when to use it, common confusions, two or three more example sentences, and the Hebrew term restated.
   - source_refs: [].
2. Concept of the day (kind "concept"). One business or economics idea explained from first principles — for example economic moats, price elasticity, marginal cost, network effects, opportunity cost, unit economics, monetary-policy transmission. If today's Business story illustrates one, prefer that. Don't repeat anything in recent_words_and_concepts.
   - deep: 300-450 words with a concrete worked example.
   - source_refs: [] (or the business story's ref if you tie it to today's story).
3. On this day (kind "on_this_day").
   - Pick the most consequential or fascinating event from on_this_day_candidates.
   - The headline starts with the year.
   - coffee explains the context and why it mattered. deep is 250-400 words.
   - source_refs: the event's ref.

This section opens in English by default, so make the English version your best writing.

Output: write `drafts/learn.json` matching `schemas/learn.schema.json`.

<input>
{
 "on_this_day_candidates": [
  {
   "ref": "wikipedia#0",
   "year": 2015,
   "text": "The Belgian government imposed a four-day security lockdown in Brussels based on information about potential terrorist attacks.",
   "context": [
    "From 21 to 25 November 2015, the government of Belgium imposed a security lockdown on Brussels, including the closure of shops, schools, public transportation, due to information about potential terrorist attacks in the wake of the series of coordinated terrorist attacks in Paris by Islamic State of Iraq and the Levant on 13 November. One of the perpetrators of the attack, Belgian-born French national Salah Abdeslam, was thought to be hiding in the city. As a result of warnings of a serious and imminent threat, the terror alert level was raised to the highest level (four) across the Brussels metropolitan area, and people were advised not to congregate publicly, effectively putting the city under lockdown."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2012,
   "text": "A remote-controlled bomb exploded on a bus in Tel Aviv, Israel, injuring at least 28 people on board.",
   "context": [
    "The 2012 Tel Aviv bus bombing was a mass-injury terror attack carried out on November 21, 2012, on a crowded passenger bus driving in the center of Tel Aviv's business district. The attack was carried out by an Israeli citizen of Arab descent, who remotely detonated an explosive device, which he had hid on the bus in advance. Twenty-eight civilians were injured in the attack, among them three who were injured seriously. The attack was carried out on the 8th and last day of Operation Pillar of Defense, only a few hours before the ceasefire was reached."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2009,
   "text": "An explosion in a coal mine in Heilongjiang, China, killed 108 miners.",
   "context": [
    "The 2009 Heilongjiang mine explosion was a mining accident that occurred on November 21, 2009, near Hegang in the Heilongjiang, northeastern China, which killed 108 people. A further 29 people were hospitalised. The explosion occurred in the Xinxing coal mine shortly before dawn, at 02:30 CST, when 528 people were believed to be in the pit. Of these, 420 are believed to have been rescued."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1980,
   "text": "A fire broke out at the MGM Grand Hotel on the Las Vegas Strip in Paradise, Nevada, killing 85 people and injuring 650 others.",
   "context": [
    "The MGM Grand fire occurred on Friday, November 21, 1980, at the MGM Grand Hotel and Casino, located on the Las Vegas Strip in Paradise, Nevada. The fire killed 85 people, most through smoke inhalation. The fire began from a refrigerated pastry display case in a restaurant located on the first floor. A fire engulfed the resort's casino, and smoke spread into the hotel tower."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1977,
   "text": "\"God Defend New Zealand\" became New Zealand's second national anthem, on equal standing with \"God Save the King\", which had been the traditional anthem since 1840.",
   "context": [
    "\"God Defend New Zealand\" is one of two national anthems of New Zealand, the other being \"God Save the King\". Legally the two have equal status, but \"God Defend New Zealand\" is more commonly used. Originally written as a poem, it was set to music as part of a competition in 1876. Over the years its popularity increased, and it was eventually named the second national anthem in 1977. It has English and Māori lyrics, with slightly different meanings. Since the late 1990s, the usual practice when performed in public is to perform the first verse of the national anthem twice, first in Māori and then in English."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1974,
   "text": "Bombs exploded in two pubs in central Birmingham, England, killing 21 people and leading to the imprisonment of six people who were later exonerated.",
   "context": [
    "On 21 November 1974, bombs exploded in two pubs in Birmingham, England, killing 21 people and injuring 182 others."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1970,
   "text": "Vietnam War: American forces raided the North Vietnamese Sơn Tây prison camp in an attempt to rescue 61 American POWs who were thought to be held there.",
   "context": [
    "The Vietnam War was an armed conflict in Vietnam, Laos, and Cambodia fought between North Vietnam and South Vietnam and their allies. North Vietnam was supported by China and the Soviet Union, while South Vietnam was supported by the United States and other anti-communist nations. The second of the Indochina wars, the Vietnam War was a postcolonial war of national liberation, a theater in the Cold War, and a civil war, with civil warfare a defining feature from the outset. Direct US military involvement escalated from 1965, peaked in 1969, and subsequently declined until the complete withdrawal of US forces in 1973. The fighting spilled into the Laotian and Cambodian civil wars, which ended with all three countries becoming communist in 1975."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1964,
   "text": "The Verrazzano–Narrows Bridge (pictured), connecting Staten Island and Brooklyn in New York City, opened to traffic as the longest suspension bridge in the world at the time.",
   "context": [
    "The Verrazzano–Narrows Bridge is a suspension bridge connecting the boroughs of Staten Island and Brooklyn in New York City, New York, U.S. It spans the Narrows, a body of water linking the relatively enclosed New York Harbor with Lower New York Bay and the Atlantic Ocean. It is the only fixed crossing of the Narrows. The double-deck bridge carries 13 lanes of Interstate 278: seven on the upper level and six on the lower level. The span is named for Giovanni da Verrazzano, who in 1524 was the first European explorer to enter New York Harbor and the Hudson River."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1961,
   "text": "La Ronde, the first revolving restaurant in the United States, was inaugurated.",
   "context": [
    "La Ronde was a restaurant in Honolulu, Hawaii. Built in 1961 and designed by John Graham, it was the first revolving restaurant in the United States and the third of its kind in the world. The restaurant is now closed."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1959,
   "text": "American disc jockey Alan Freed (pictured), who popularized the term rock and roll, was fired from WABC-AM for his role in the payola scandal.",
   "context": [
    "A disc jockey, more commonly abbreviated as DJ, is a person who plays recorded music for an audience. Types of DJs include radio DJs, club DJs, mobile DJs, and turntablists. Originally, the \"disc\" in \"disc jockey\" referred to shellac and later vinyl records, but nowadays DJ is used as an all-encompassing term to also describe persons who mix music from other recording media such as cassettes, CDs or digital audio files on a CDJ, controller, or even a laptop. DJs may adopt the title \"DJ\" in front of their real names, adopted pseudonyms, or stage names."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1950,
   "text": "Two trains collided near Valemount, Canada, killing 21 people.",
   "context": [
    "The Canoe River train crash occurred on November 21, 1950, near Valemount in eastern British Columbia, Canada, when a westbound troop train and the eastbound Canadian National Railway (CNR) Continental Limited collided head-on. The collision killed 21 people: 17 Canadian soldiers en route to the Korean War and the two-man locomotive crew of each train."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1945,
   "text": "Manzanar (pictured), a camp in California for the internment of Japanese Americans during World War II, was closed.",
   "context": [
    "Manzanar is the site of one of ten American concentration camps, where more than 120,000 Japanese Americans were incarcerated during World War II, from March 1942 to November 1945. Although it had over 10,000 inmates at its peak, Manzanar was one of the smaller internment camps. It is located in California's Owens Valley, on the eastern side of the Sierra Nevada mountains, between the towns of Lone Pine to the south and Independence to the north, approximately 230 miles (370 km) north of Los Angeles. Manzanar means \"apple orchard\" in Spanish. The Manzanar National Historic Site, which preserves and interprets the legacy of Japanese American incarceration in the United States, was identified by the United States National Park Service as the best-preserved of the ten former camp sites."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1922,
   "text": "Rebecca Latimer Felton (pictured) became the first woman to serve in the United States Senate, albeit for only one day.",
   "context": [
    "Rebecca Ann Felton was an American writer, politician, feminist, white supremacist, and slave owner who was the first woman to serve in the United States Senate, serving for only one day."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1920,
   "text": "Irish War of Independence: On Bloody Sunday in Dublin, the IRA assassinated a group of British intelligence agents, and British forces killed 14 civilians at a Gaelic football match at Croke Park.",
   "context": [
    "The Irish War of Independence, also known as the Anglo-Irish War or the Tan War, was a guerrilla war fought in Ireland from 1919 to 1921 between the Irish Republican Army and British forces: the British Army, along with the quasi-military Royal Irish Constabulary (RIC) and its paramilitary forces the Auxiliaries and Ulster Special Constabulary (USC). It was part of the Irish revolutionary period."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1894,
   "text": "First Sino-Japanese War: After capturing the Chinese city of Port Arthur, the Japanese army began a massacre of the city's soldiers and civilians.",
   "context": [
    "The First Sino-Japanese War was a conflict between the Qing dynasty of China and the Empire of Japan primarily for influence over Korea. In China it is commonly known as the Jiawu War. After roughly 7 months of sustained military gains by Japanese land and naval forces and the loss of the ports of Lüshunkou and Weihaiwei, the Qing government sued for peace in February 1895 and signed the Treaty of Shimonoseki two months later, ending the war."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1877,
   "text": "Thomas Edison announced his invention of the phonograph, a device able to record and play sound.",
   "context": [
    "Thomas Alva Edison was an American inventor and businessman known for his work on the incandescent light bulb, the phonograph, electric power distribution and early motion pictures. The merger of the Edison General Electric Company and the competitor Thomson-Houston Electric Company resulted in the formation of General Electric. Edison registered 1,093 patents in the United States."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1620,
   "text": "The Mayflower Compact, the first governing document of the Plymouth Colony, was signed by 41 of the Mayflower's passengers while the ship was anchored in what is now Provincetown Harbor.",
   "context": [
    "The Mayflower Compact, originally titled Agreement Between the Settlers of New Plymouth, was the first governing document of Plymouth Colony. It was written by the men aboard the Mayflower, consisting of Separatist Puritans, adventurers, and tradesmen. Although the agreement contained a pledge of loyalty to the King, the Puritans and other Protestant Separatists were dissatisfied with the state of the Church of England, the limited extent of the English Reformation and reluctance of King James I of England to enforce further reform."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Churn rate (שיעור נטישה)",
  "Bleeding edge (חוד החרב הטכנולוגי)",
  "Jump the shark (לקפוץ מעל הכריש)",
  "Hurdle rate (שיעור תשואה נדרש)",
  "Land and expand (לנחות ולהתרחב)",
  "Throwing good money after bad (להשקיע כסף טוב אחרי כסף רע)",
  "Bellwether (מדד מקדים)",
  "Sticker shock (תדהמת מחיר)",
  "Cash cow (פרת מזומנים)",
  "Vintage (וינטג')",
  "Hockey-stick growth (צמיחת מקל הוקי)",
  "Dogfooding (אכילת מזון הכלבים של עצמך)",
  "Moral hazard (סיכון מוסרי)",
  "Melt-up (עלייה קדחתנית)",
  "Betting the farm (להמר על הכל)",
  "Working Capital (הון חוזר)",
  "Pull-Forward Demand (הקדמת ביקוש)",
  "Low-Hanging Fruit (פרי בשל בהישג יד)",
  "Economic moat (חפיר כלכלי)",
  "First-mover advantage (יתרון הנע הראשון)",
  "Boil the frog (לבשל את הצפרדע)",
  "Loss leader (מוצר מכירת הפסד)",
  "Earnout (תשלום מותנה בתוצאות)",
  "Move the goalposts (להזיז את קווי השער)",
  "Blended rate (שיעור ממוצע משוקלל)",
  "Growing into your valuation (לצמוח לתוך השווי)",
  "When the music stops (כשהמוזיקה נפסקת)",
  "Vesting cliff (צוק הבשלה)",
  "Mark-to-market (הערכה לפי שווי שוק)",
  "Drinking the Kool-Aid (לאמץ נרטיב בעיניים עצומות)",
  "Soft landing (נחיתה רכה)",
  "Base effect (אפקט בסיס)",
  "Kitchen-sinking (לרוקן את כל הבעיות בבת אחת)",
  "Natural hedge (גידור טבעי)",
  "Beat-and-raise (רבעון של עקיפת תחזיות והעלאת תחזית)",
  "Catching a falling knife (לתפוס סכין נופל)",
  "Run rate (קצב שנתי)",
  "Golden handcuffs (אזיקי זהב)",
  "The elephant in the room (הפיל בחדר)",
  "Creative destruction (הרס יצירתי)",
  "Ballpark figure (הערכה גסה)",
  "In the weeds (שקוע בפרטים הקטנים)",
  "Circuit breaker (מנתק מעגל)",
  "Risk-off (מצב הימנעות מסיכון)",
  "Throwing the baby out with the bathwater (לשפוך את התינוק עם המים)",
  "Net interest margin (מרווח ריבית נקי)",
  "Race to the bottom (מירוץ לתחתית)",
  "Skin in the game (עור במשחק)",
  "Take rate (שיעור נטילה)",
  "Move fast and break things (לנוע מהר ולשבור דברים)",
  "The tail wagging the dog (הזנב מכשכש בכלב)",
  "Flywheel effect (אפקט הגלגל התנופה)",
  "Table stakes (דמי כניסה למשחק)",
  "Move the needle (לחולל שינוי משמעותי)",
  "Runway (מסלול מזומנים)",
  "Flight to quality (מעבר לנכסים בטוחים)",
  "Kick the tires (לבדוק מקרוב לפני החלטה)",
  "Overhang (עומס היצע תלוי)",
  "Priced in (מגולם במחיר)",
  "Asleep at the wheel (ישנו בשמירה)",
  "Greenshoe option (אופציית גרינשו)",
  "Kick the can down the road (לגלגל את הבעיה קדימה)",
  "White knight (אביר לבן)",
  "Dry Powder (אבק שריפה)",
  "Boil the Ocean (להרתיח את האוקיינוס)",
  "Kill the Goose That Lays the Golden Eggs (לשחוט את האווזה שמטילה ביצי זהב)",
  "Jawboning (שידול מילולי)",
  "Stalking-horse bid (הצעת פתיחה מוקדמת)",
  "Throwing spaghetti at the wall (לזרוק ספגטי על הקיר)",
  "Total addressable market / TAM (פוטנציאל שוק כולל)",
  "Circular financing / circular deal (מימון מעגלי)",
  "Paper tiger (נמר של ניר)",
  "Clawback (קלובק)",
  "In the black / in the red (ברווח / בגירעון)",
  "Eating someone's lunch (לאכול למישהו את הארוחה)",
  "Negative carry (קארי שלילי)",
  "Barbell strategy (אסטרטגיית המשקולת)",
  "Don't fight the Fed (אל תתעסק עם ה-Fed)",
  "Shadow banking (בנקאות צל)",
  "Talk your book (לדבר לטובת הפוזיציה שלך)",
  "Picking up pennies in front of a steamroller (ללקט אגורות לפני מכבש)",
  "Opex (הוצאות תפעוליות)",
  "Due diligence (בדיקת נאותות)",
  "Dead cat bounce (קפיצת החתול המת)",
  "Vendor lock-in (נעילת ספק)",
  "Pivot to profitability (מעבר לרווחיות)",
  "Herding cats (לרעות חתולים)",
  "Headwinds / tailwinds (רוחות נגד / רוחות גב)",
  "Bootstrapped (ממומן מהכיס / מיזם שהתנהל ללא גיוס הון)",
  "A rising tide lifts all boats (גאות מרימה את כל הסירות)"
 ]
}
</input>