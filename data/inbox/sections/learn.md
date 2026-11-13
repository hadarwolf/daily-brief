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
   "text": "Coordinated terrorist attacks in Paris perpetrated by the Islamic State killed 130 people and injured 413 others.",
   "context": [
    "A series of coordinated Islamic terrorist attacks took place on Friday, 13 November 2015 in Paris, France, and the city's northern suburb, Saint-Denis. Beginning at 21:16, three suicide bombers struck outside the Stade de France in Saint-Denis, during an international football match, after failing to gain entry to the stadium. Another group of attackers then fired on crowded cafés and restaurants in Paris with one of them also detonating an explosive, killing himself in the process. A third group carried out another mass shooting and took hostages at an Eagles of Death Metal concert attended by 1,500 people in the Bataclan theatre, leading to a stand-off with police. The attackers were either shot or detonated suicide vests when police raided the theatre."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1992,
   "text": "In Dietrich v The Queen, the High Court of Australia ruled that, although there is no absolute right to have publicly funded counsel, a judge should grant any request for an adjournment or stay in most circumstances in which an accused is unrepresented.",
   "context": [
    "Dietrich v The Queen is a 1992 High Court of Australia constitutional case which established that a person accused of serious criminal charges must be granted an adjournment until appropriate legal representation is provided if they are unrepresented through no fault of their own and proceeding would result in the trial being unfair."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1985,
   "text": "The volcano Nevado del Ruiz (pictured) erupted, causing a volcanic mudslide that buried the town of Armero, Colombia, killing approximately 23,000 people.",
   "context": [
    "Nevado del Ruiz, also known as La Mesa de Herveo is a volcano on the border of the departments of Caldas and Tolima in Colombia, being the highest point of both. It is located about 130 km (81 mi) west of the capital city Bogotá. It is a stratovolcano composed of many layers of lava alternating with hardened volcanic ash and other pyroclastic rocks. Volcanic activity at Nevado del Ruiz began about two million years ago, during the Early Pleistocene or Late Pliocene, with three major eruptive periods. The current volcanic cone formed during the present eruptive period, which began 150,000 years ago."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1982,
   "text": "South Korean boxer Kim Duk-koo suffered fatal brain injuries during a match with American Ray Mancini in Las Vegas, leading to significant rule changes in the sport.",
   "context": [
    "Kim Duk-koo was a South Korean professional boxer who competed in the Lightweight division. He died after a world lightweight championship boxing match against Ray Mancini in 1982. His death sparked reforms aimed at better protecting the health of boxers, including reducing the number of rounds in championship bouts from 15 to 12."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1974,
   "text": "Six members of the DeFeo family were murdered in their home (house pictured) in Amityville, New York, events that later inspired the book The Amityville Horror and a subsequent media franchise.",
   "context": [
    "On November 13, 1974, six members of the DeFeo family were murdered in their home in Amityville, New York, United States. The sole surviving family member, 23-year-old Ronald DeFeo Jr., first claimed that his parents and four siblings were targeted in a contract killing by the American Mafia before confessing that he had committed the murders. DeFeo was found guilty of six counts of second degree murder and was sentenced to 25 years to life. The case inspired the book and film versions of The Amityville Horror."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1966,
   "text": "Arab–Israeli conflict: In response to a Fatah landmine incident, the Israeli military conducted a large cross-border assault on the Jordanian-controlled West Bank village of Samu.",
   "context": [
    "Since the declaration of Israel's establishment in 1948, conflict has existed between Israel and the surrounding Arab countries, rooted in the Israeli–Palestinian conflict. Zionists viewed the region of Palestine as the Jewish ancestral homeland and sought to establish a Jewish state or homeland there through colonization, while Arabs generally opposed Zionism, envisioning Palestine as Arab Palestinian land and an essential part of the Arab world."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1963,
   "text": "A man wielding a dagger was subdued as he was about to attack Sanzō Nosaka, the chairman of the Japanese Communist Party.",
   "context": [
    "Sanzō Nosaka  was a Japanese writer, editor, labor organizer, communist agent, politician, and university professor and a founder of the Japanese Communist Party (JCP). He was the son of a wealthy Japanese merchant, and attended Keio University. While in university, Nosaka became interested in social movements, and joined a moderate labor organization after graduation, working as a research staff member, and as a writer and editor of the organization's magazine. He traveled to Britain in 1919 to study political economy, where he deepened his studies of Marxism and became a confirmed communist. Nosaka was a founding member of the Communist Party of Great Britain, but his activity within British communist circles led to him being deported from Britain in 1921."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1945,
   "text": "FC Dynamo Moscow opened their exhibition tour of the United Kingdom with a 3–3 draw against Chelsea, breaking the attendance record for a British club football match.",
   "context": [
    "FC Dynamo Moscow is a Russian professional football club based in Moscow. Dynamo returned to the Russian Premier League for the 2017–18 season after one season in the second-tier Russian Football National League."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1940,
   "text": "Walt Disney's Fantasia, the first commercial film shown with stereophonic sound, premiered at the Broadway Theatre in New York City.",
   "context": [
    "Walter Elias Disney was an American animator, film producer, voice actor, and entrepreneur. A pioneer of the American animation industry, he introduced several developments in the production of cartoons. As a film producer, he holds the record for most Academy Awards won by (22) and nominated for (59) an individual. He was presented with two Golden Globe Special Achievement Awards and an Emmy Award, among other honors. Several of his films are included in the National Film Registry by the Library of Congress and have also been named as some of the greatest films ever by the American Film Institute."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1927,
   "text": "The Holland Tunnel opened, connecting Manhattan with Jersey City under the Hudson River.",
   "context": [
    "The Holland Tunnel is a vehicular tunnel under the Hudson River that connects Hudson Square and Lower Manhattan in New York City in the east to Jersey City, New Jersey, in the west. The tunnel is operated by the Port Authority of New York and New Jersey and carries Interstate 78. The New Jersey side of the tunnel is the eastern terminus of New Jersey Route 139. It consists of two tubes: the eastbound tube is a toll road, while the westbound tube is toll-free. The Holland Tunnel is one of three vehicular crossings between Manhattan and New Jersey; the two others are the Lincoln Tunnel and George Washington Bridge."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1914,
   "text": "Zaian War: Zaian Berber tribesmen routed French forces at the Battle of El Herri in Morocco.",
   "context": [
    "The Zaian War was fought between France and the Zaian Confederation of Berber tribes in Morocco between 1914 and 1921 during the French conquest of Morocco. Morocco had become a French protectorate in 1912, and Resident-General Louis-Hubert Lyautey sought to extend French influence eastwards through the Middle Atlas mountains towards French Algeria. This was opposed by the Zaians, led by Mouha ou Hammou Zayani. The war began well for the French, who quickly took the key towns of Taza and Khénifra. Despite the loss of their base at Khénifra, the Zaians inflicted heavy losses on the French, who responded by establishing groupes mobiles, combined arms formations that mixed regular and irregular infantry, cavalry and artillery into a single force."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1809,
   "text": "As part of the Persian Gulf campaign, a British flotilla arrived at and launched an amphibious assault on Ras Al Khaimah.",
   "context": [
    "The Persian Gulf campaign of 1809 was an operation by the British East India Company and Royal Navy to force the Al Qasimi to cease their attacks on British ships in the Persian Gulf, particularly on the Persian and Arab coasts of the Strait of Hormuz. The operation's success was limited as the British did not press their advantage when invading Ras Al Khaimah and embarked without consolidating their gains and failed to permanently suppress the strong fleets of the Qawasim of Ras Al Khaimah and Sharjah. The expedition did achieve its short-term goals by destroying three Al Qasimi bases and over 80 vessels, including the largest Al Qasimi ship in the region, the converted merchant ship Minerva. Although operations continued into 1810, the British were unable to destroy every Al Qasimi vessel. By 1811, attacks had resumed, although at a lower intensity than previously."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1775,
   "text": "American Revolutionary War: American forces captured Montreal without significant opposition as part of the Invasion of Quebec.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1642,
   "text": "First English Civil War: Royalist forces engaged the much larger Parliamentarian army at the Battle of Turnham Green near Turnham Green, Middlesex.",
   "context": [
    "The First English Civil War took place in England and Wales from 1642 to 1646, and forms part of the 1639 to 1653 Wars of the Three Kingdoms. An estimated 15% to 20% of adult males in England and Wales served in the military at some point between 1639 and 1653, while around 4% of the total population died from war-related causes. These figures illustrate the widespread impact of the conflict on society, and the bitterness it engendered as a result."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1002,
   "text": "King Æthelred II (pictured) ordered the massacre of all Danes in England.",
   "context": [
    "Æthelred II, known as Æthelred the Unready, was King of the English from March 978 to December 1013 and again from February 1014 until his death. The epithet \"Unready\" or \"Unræd\" is a pun on his name in Old English, Æðel (noble) and ræd (counsel). He was the son of King Edgar and Queen Ælfthryth."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Whistle past the graveyard (לשרוק ליד בית הקברות / להתעלם מסכנה גלויה)"
 ]
}
</input>