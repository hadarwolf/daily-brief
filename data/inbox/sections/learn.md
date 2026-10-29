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
   "year": 2013,
   "text": "The first phase of the Marmaray project opened with an undersea rail tunnel (train pictured) across the Bosphorus strait.",
   "context": [
    "Marmaray or B1 Commuter Train is a 77-kilometre-long (48 mi) commuter rail line in Istanbul, Turkey. The line runs from Halkalı, on the European side, to Gebze, on the Asian side, along the north shore of the Sea of Marmara. Mostly using the right-of-way of two existing commuter rail lines, the Marmaray line linked the two lines via a tunnel under the Bosporus strait, becoming the first standard gauge rail connection between Europe and Asia. The two existing sections of the line were rebuilt and expanded from two tracks to three tracks, to allow for higher capacity with intercity and freight rail. The name Marmaray is a portmanteau of the words Marmara and Ray, which is Turkish for rail."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2012,
   "text": "Hurricane Sandy, the largest Atlantic hurricane on record, made landfall in New Jersey and caused nearly $75 billion in damages, becoming the second-most destructive storm in U.S. history.",
   "context": [
    "Hurricane Sandy was an extremely large and devastating tropical cyclone which ravaged the Caribbean and the coastal Mid-Atlantic region of the United States in late October 2012. It was the largest Atlantic hurricane on record as measured by diameter, with tropical-storm-force winds spanning 1,150 miles (1,850 km). The storm inflicted nearly US$70 billion in damage, and killed 254 people in eight countries, from the Caribbean to Canada. The eighteenth named storm, tenth hurricane, and second major hurricane of the 2012 Atlantic hurricane season, Sandy was a Category 3 storm at its peak intensity when it made landfall in Cuba, though most of the damage it caused was after it became a Category 1–equivalent extratropical cyclone off the coast of the Northeastern United States."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2007,
   "text": "Somali pirates hijacked a North Korean ship in the Indian Ocean northeast of Mogadishu.",
   "context": [
    "On the evening of 29 October 2007, seven Somali pirates hijacked the North Korean cargo ship MV Dai Hong Dan (Korean: 대홍단호) in the Indian Ocean, approximately 110 kilometres northeast of the Somali capital, Mogadishu. The Dai Hong Dan, with a crew of 22 sailors, had departed Mogadishu earlier that day after unloading a shipment of sugar with the help of locals, including the pirates. The pirates gained permission to board the ship under the pretense of being Somali security personnel. They subsequently confined the crew to the steering and engine rooms at gunpoint and demanded a ransom of US$15,000 for their release."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1999,
   "text": "About 10,000 people died when the most intense tropical cyclone ever recorded in the North Indian Ocean made landfall in the Indian state of Odisha near Bhubaneswar.",
   "context": [
    "The 1999 Odisha cyclone was the most intense tropical cyclone ever recorded in the North Indian Ocean and among the most destructive in the region. The cyclone organized into a tropical depression in the Andaman Sea on 25 October, though its origins could be traced back to an area of convection in the Sulu Sea four days prior. The disturbance gradually strengthened as it took a west-northwesterly path, reaching cyclonic storm strength the next day. Aided by highly favorable conditions, the storm rapidly intensified, attaining super cyclonic storm intensity on 28 October, before peaking on the next day with winds of 260 km/h (160 mph) and a record-low pressure of 912 hPa mbar 26.93 inHg). The storm maintained this intensity as it made landfall on Odisha on 29 October. The cyclone steadily weakened due to persistent land interaction and dry air, remaining quasi-stationary for two days before slowly drifting offshore as a much weaker system; the storm dissipated on 4 November over the Bay of Bengal."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1998,
   "text": "At 77 years old, former astronaut John Glenn (pictured) returned to space aboard the Space Shuttle Discovery on the STS-95 mission.",
   "context": [
    "John Herschel Glenn Jr. was an American Marine Corps aviator, astronaut, businessman, and politician. He was the third American in space and the first to orbit the Earth, circling it three times in 1962. Following his retirement from NASA, he served from 1974 to 1999 as a U.S. senator from Ohio. In 1998, he flew into space again at the age of 77."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1991,
   "text": "Galileo became the first spacecraft to visit an asteroid when it made a flyby of Gaspra.",
   "context": [
    "Galileo was an American robotic space probe that studied the planet Jupiter and its moons, as well as the asteroids Gaspra and Ida. Named after the Italian astronomer Galileo Galilei, it consisted of an orbiter and an entry probe. It was delivered into Earth orbit on October 18, 1989, by Space Shuttle Atlantis, during STS-34. Galileo arrived at Jupiter on December 7, 1995, after gravitational assist flybys of Venus and Earth, and became the first spacecraft to orbit an outer planet."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1986,
   "text": "British prime minister Margaret Thatcher officially opened the M25, one of Britain's busiest motorways.",
   "context": [
    "Margaret Hilda Thatcher, Baroness Thatcher was a British stateswoman who served as Prime Minister of the United Kingdom from 1979 to 1990 and Leader of the Conservative Party from 1975 to 1990. She was the longest-serving British prime minister of the 20th century and the first woman to hold the office. As prime minister, she implemented policies that came to be known as Thatcherism. A Soviet journalist dubbed her the \"Iron Lady\", a nickname that became associated with her uncompromising politics and leadership style."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1960,
   "text": "A C-46 airliner carrying the Cal Poly Mustangs football team crashed during takeoff from Toledo Express Airport in Ohio, U.S., resulting in 22 deaths.",
   "context": [
    "The Curtiss C-46 Commando is a low-wing, twin-engine aircraft derived from the Curtiss CW-20 pressurized high-altitude airliner design. Early press reports used the name \"Condor III\" but the Commando name was in use by early 1942 in company publicity. It was used primarily as a cargo aircraft during World War II, with fold-down seating for military transport and some use in delivering paratroops. Mainly deployed by the United States Army Air Forces, it also served the U.S. Navy/Marine Corps, which called it R5C. The C-46 filled similar roles as its Douglas-built counterpart, the C-47 Skytrain, with some 3,200 C-46s produced to approximately 10,200 C-47s."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1956,
   "text": "The Suez Crisis began with Israel invading the Sinai Peninsula and pushing Egyptian forces back toward the Suez Canal.",
   "context": [
    "The Suez Crisis, also known as the second Arab–Israeli war, the Tripartite Aggression in the Arab world and the Sinai War in Israel, was a British–French–Israeli invasion of Egypt in 1956. Israel invaded on 29 October, with the primary objective of re-opening the Straits of Tiran and the Gulf of Aqaba as the recent tightening of the eight-year-long Egyptian blockade prevented Israeli passage. After issuing a joint ultimatum for a ceasefire, the United Kingdom and France joined the Israelis on 31 October in an attempt to depose Egyptian president Gamal Abdel Nasser and regain control of the Suez Canal. The countries came under heavy political pressure from the United States, the Soviet Union and the United Nations, prompting their withdrawal from Egypt."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1956,
   "text": "Suez Crisis: The Israel Border Police massacred 48 Arab citizens in Kafr Qasim, among them women and children who were returning from work.",
   "context": [
    "The Suez Crisis, also known as the second Arab–Israeli war, the Tripartite Aggression in the Arab world and the Sinai War in Israel, was a British–French–Israeli invasion of Egypt in 1956. Israel invaded on 29 October, with the primary objective of re-opening the Straits of Tiran and the Gulf of Aqaba as the recent tightening of the eight-year-long Egyptian blockade prevented Israeli passage. After issuing a joint ultimatum for a ceasefire, the United Kingdom and France joined the Israelis on 31 October in an attempt to depose Egyptian president Gamal Abdel Nasser and regain control of the Suez Canal. The countries came under heavy political pressure from the United States, the Soviet Union and the United Nations, prompting their withdrawal from Egypt."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1955,
   "text": "An explosion, likely caused by a World War II–era naval mine, capsized the Soviet ship Novorossiysk in the harbor of Sevastopol, with the loss of 608 men.",
   "context": [
    "A naval mine or sea mine is a self-contained explosive weapon placed in water to damage or destroy surface ships or submarines. Similar to anti-personnel and other land mines, and unlike purpose-launched naval depth charges, they are deposited and left to wait until, depending on their fuzing, they are triggered by the approach of or contact with any vessel."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1948,
   "text": "Arab–Israeli War: The Israel Defense Forces massacred at least 52 villagers while capturing the Palestinian Arab village of Safsaf.",
   "context": [
    "The 1948 Arab–Israeli War, also known as the First Arab–Israeli War, followed the civil war in Mandatory Palestine as the second and final stage of the 1948 Palestine war. The civil war became a war of separate states with the Israeli Declaration of Independence on 14 May 1948, the end of the British Mandate for Palestine at midnight, and the entry of a military coalition of Arab states into the territory of Mandatory Palestine the following morning. The war formally ended with the 1949 Armistice Agreements which established the Green Line."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1883,
   "text": "The San Francisco Mint signed a contract to produce the Kalākaua coinage (coin pictured) for the Hawaiian Kingdom.",
   "context": [
    "The San Francisco Mint is a branch of the United States Mint. Located in San Francisco, California and opened in 1854 to serve the gold mines of the California gold rush, in twenty years its operations exceeded the capacity of the first building. It moved into a new one in 1874, now known as the Old San Francisco Mint. In 1937 Mint operations moved into a third building, the current one, completed that year. Since 1955, it has primarily produced coins for numismatic purposes, though has been occasionally used for circulating issues. Coins produced at the San Francisco Mint bear the \"S\" mint mark."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1868,
   "text": "The Nanbu clan of Honshu surrendered to Japanese imperial forces during the Boshin War.",
   "context": [
    "The Nanbu clan  was a Japanese samurai clan who ruled most of northeastern Honshū in the Tōhoku region of Japan for over 700 years, from the Kamakura period through the Meiji Restoration of 1868. The Nanbu claimed descent from the Seiwa Genji of Kai Province and were thus related to the Takeda clan. The clan moved its seat from Kai to Mutsu Province in the early Muromachi period, and were confirmed as daimyō of Morioka Domain under the Edo-period Tokugawa shogunate. The domain was in constant conflict with neighboring Hirosaki Domain, whose ruling Tsugaru clan were once Nanbu retainers."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1863,
   "text": "American Civil War: The Battle of Wauhatchie, one of the few night battles of the war, concluded with the Union Army opening a supply line to troops in Chattanooga, Tennessee.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860 and the growing abolitionist movement in the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1831,
   "text": "Rioting broke out in Bristol, England, after the Second Reform Bill failed during its passage through Parliament, causing 250 casualties and £300,000 of damage (pictured).",
   "context": [
    "The 1831 Bristol riots took place on 29–31 October 1831 and were part of the 1831 reform riots in England. The riots arose after the second Reform Bill was voted down in the House of Lords, stalling efforts at electoral reform. The arrival of the anti-reform judge Charles Wetherell in the city on 29 October led to a protest, which degenerated into a riot. The civic and military authorities were poorly focused and uncoordinated and lost control of the city. Order was restored on the third day by a combination of a posse comitatus of the city's middle-class citizens and military forces."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1792,
   "text": "William Robert Broughton, a member of George Vancouver's expedition, observed a peak in the present-day U.S. state of Oregon and named it Mount Hood after British admiral Samuel Hood.",
   "context": [
    "William Robert Broughton was a British naval officer in the late 18th century. As a lieutenant in the Royal Navy, he commanded HMS Chatham as part of the Vancouver Expedition, a voyage of exploration through the Pacific Ocean led by Captain George Vancouver in the early 1790s."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "A rising tide lifts all boats (גאות מרימה את כל הסירות)",
  "Sunk cost (עלות שקועה)",
  "Down round (סבב גיוס במחיר מופחת)",
  "Lipstick on a pig (שפתון על חזיר)",
  "EBITDA (רווח תפעולי לפני ריבית, מיסים, פחת והפחתות)",
  "Golden parachute (מצנח זהב)",
  "Pull the plug (לשלוף את התקע)",
  "Capex (הוצאות הוניות)",
  "Build vs. buy (לבנות או לקנות)",
  "Smoke and mirrors (עשן ומראות)",
  "Bellwether (ברומטר)",
  "Cash cow (פרת מזומנים)",
  "Death by a thousand cuts (מוות באלף חתכים)",
  "Hyperscaler (ספקית מיחשוב-על)",
  "Vendor financing (מימון מצד הספק)",
  "Too big to fail (גדול מכדי להיכשל)",
  "Junk bond (אג\"ח זבל)",
  "Debt maturity wall (קיר פירעונות)",
  "Rob Peter to pay Paul (לקחת מפיטר כדי לשלם לפול)",
  "Moral hazard (סיכון מוסרי)",
  "Winner-take-all market (שוק שבו המנצח לוקח הכל)",
  "Poison pill (גלולת רעל)",
  "Covenant (אמנת אשראי / תנאי הלוואה)",
  "Take a haircut (לספוג \"תספורת\" / הפחתה בערך)",
  "Whistle past the graveyard (לשרוק ליד בית הקברות / להתעלם מסכנה גלויה)",
  "Glut (עודף היצע)",
  "Front-run (להקדים את המהלך)",
  "Bagholder (מחזיק השקית)",
  "Hockey-stick growth (צמיחת מקל הוקי)",
  "Asymmetric bet (הימור א-סימטרי)",
  "Burning the boats (לשרוף את הסיפונים)",
  "Working capital (הון חוזר)",
  "Sweat equity (הון מאמץ)",
  "Low-hanging fruit (פרי בשל)",
  "Loss leader (מוצר-פיתיון)",
  "Soft landing (נחיתה רכה)",
  "Eat your own dog food (לעשות דוגפודינג)",
  "Float (פלואט)",
  "Land and expand (לנחות ולהתרחב)",
  "Catching a falling knife (לתפוס סכין נופל)",
  "Earnout (תשלום מותנה בתוצאות)",
  "Term sheet (גיליון תנאים)",
  "Throw good money after bad (להשקיע כסף טוב על גבי כסף רע)",
  "Vertical integration (אינטגרציה אנכית)",
  "First-mover advantage (יתרון הראשונים)",
  "Moving the goalposts (להזיז את השער)",
  "Vesting cliff (תקופת הבשלה מינימלית)",
  "Top line vs. bottom line (שורת ההכנסות מול שורת הרווח)",
  "Bet the farm (להמר על הכל)",
  "Churn rate (שיעור נטישה)",
  "Race to the bottom (מירוץ לתחתית)",
  "Cook the books (לזייף דוחות כספיים)",
  "Golden handcuffs (אזיקי זהב)",
  "Secular trend (מגמה מבנית)",
  "Skin in the game (עניין אישי בתוצאה)",
  "Run-rate (קצב שנתי מוערך)",
  "Kitchen-sink quarter (רבעון של ניקוי ארונות)",
  "Move the needle (להזיז את המחוג)",
  "Crowding out (דחיקת השקעות)",
  "Mark-to-market (הערכת שווי לפי שוק)",
  "Kick the tires (לבדוק ביסודיות לפני סגירת עסקה)",
  "Yield spread (מרווח תשואות)",
  "Flight to quality (בריחה לנכסי מקלט)",
  "Priced in (כבר מגולם במחיר)",
  "Basis point (נקודת בסיס)",
  "Table stakes (דרישות סף)",
  "Kick the can down the road (לדחות את ההכרעה)",
  "Runway (זמן עד אזילת המזומן)",
  "Dry powder (הון זמין להשקעה)",
  "Boil the ocean (לנסות לעשות הכל בבת אחת)"
 ]
}
</input>