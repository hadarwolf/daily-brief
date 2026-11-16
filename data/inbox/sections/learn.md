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
   "year": 2020,
   "text": "The El Dorado Fire in California, United States, was extinguished after 71 days, having destroyed 20 structures and killed one firefighter.",
   "context": [
    "The El Dorado Fire was a wildfire that burned 22,744 acres in San Bernardino and Riverside counties of California, United States, from September to November 2020. It was ignited on September 5 by a pyrotechnic device at a gender reveal party in El Dorado Ranch Park and quickly spread to the San Gorgonio Wilderness Area of the San Bernardino National Forest. Burning over a 71-day period, the fire destroyed 20 structures and killed one firefighter, for which the couple hosting the party were charged with involuntary manslaughter."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2002,
   "text": "The first case of SARS, a zoonotic respiratory coronavirus disease, was recorded in Guangdong, China.",
   "context": [
    "The 2002–2004 outbreak of SARS, caused by severe acute respiratory syndrome coronavirus, infected over 8,000 people from 30 countries and territories, and resulted in at least 774 deaths worldwide."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1997,
   "text": "Chinese dissident Wei Jingsheng, released on ostensibly medical grounds after spending eighteen years in prison, was deported to the United States.",
   "context": [
    "Wei Jingsheng is a Chinese human rights activist and dissident. He is best known for his involvement in the Chinese democracy movement. He is most prominent for having authored the essay \"The Fifth Modernization\", which was posted on the Democracy Wall in Beijing in 1978. As punishment from the government for writing his manifesto, Wei was arrested and convicted of \"counter-revolutionary\" activities, and was detained as a political prisoner from 1979 to 1993. Briefly released in 1993, Wei continued to engage in his dissident activities by speaking to visiting journalists, and as punishment, he was imprisoned again from 1994 to 1997, making it a total of 18 years he has spent in various prisons. He was deported to the United States of America on 16 November 1997, on medical parole. Still a Chinese citizen, in 1998 Wei established the Wei Jingsheng Foundation in New York City whose stated aim is to work to improve human rights and advocate democratisation in China."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1992,
   "text": "The largest hoard of Roman silver and gold in Britain was found in the village of Hoxne in Suffolk.",
   "context": [
    "The Hoxne Hoard is the largest hoard of late Roman silver and gold discovered in Britain, and the largest collection of gold and silver coins of the fourth and fifth centuries found anywhere within the former Roman Empire. It was found by Eric Lawes using a metal detector in the village of Hoxne in Suffolk, England, in 1992. The hoard consists of 14,865 Roman gold, silver, and bronze coins and approximately 200 items of silver tableware and gold jewellery. The objects are now in the British Museum in London, where the most important pieces and a selection of the rest are on permanent display. In 1993, the Treasure Valuation Committee valued the hoard at £1.75 million."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1981,
   "text": "About 30 million people watched the fictional couple Luke Spencer and Laura Webber wed on the television show General Hospital in the highest-rated hour in American soap opera history.",
   "context": [
    "Luke and Laura Spencer are fictional characters, and the signature supercouple from the American daytime drama General Hospital. Luke is portrayed by Anthony Geary, and Laura is portrayed by Genie Francis. Though other supercouples came before them, Luke and Laura are the best known outside of the soap opera medium and are credited with defining the term supercouple and leading other soap operas to try to duplicate their success."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1973,
   "text": "U.S. president Richard Nixon signed an act authorizing the construction of the Trans-Alaska Pipeline to transport oil from the Beaufort Sea to the Gulf of Alaska.",
   "context": [
    "Richard Milhous Nixon was the 37th president of the United States, serving from 1969 until his resignation in 1974. A member of the Republican Party, he represented California in both houses of the United States Congress before serving as the 36th vice president under President Dwight D. Eisenhower from 1953 to 1961. His presidency saw the reduction of U.S. involvement in the Vietnam War, détente with the Soviet Union and China, the Apollo 11 Moon landing, and the establishment of the Environmental Protection Agency and Occupational Safety and Health Administration. Nixon's second term ended early when he became the only U.S. president to resign from office, as a part of the Watergate scandal."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1967,
   "text": "Aeroflot Flight 2230 crashed after takeoff from Koltsovo Airport, Russia, killing all 107 people aboard.",
   "context": [
    "Aeroflot Flight 2230 was a Soviet domestic passenger flight from Yekaterinburg to Tashkent. On 16 November 1967, the Ilyushin Il-18 aircraft serving the flight crashed after takeoff, killing all 107 people aboard. At the time, it was the deadliest aviation accident in the Russian SFSR and the worst accident involving the Il-18."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1959,
   "text": "The Sound of Music, a musical by Rodgers and Hammerstein based on The Story of the Trapp Family Singers, opened on Broadway at the Lunt-Fontanne Theatre.",
   "context": [
    "The Sound of Music is a musical with music by Richard Rodgers, lyrics by Oscar Hammerstein II, and a book by Howard Lindsay and Russel Crouse. It is based on the 1949 book The Story of the Trapp Family Singers by Maria von Trapp. Set in Austria on the eve of the Anschluss in 1938, the musical tells the story of Maria, who takes a job as governess to a large family while she decides whether to become a nun. She falls in love with the children, and eventually their widowed father, Captain von Trapp. He is ordered to accept a commission in the German Navy, but he opposes the Nazis. He and Maria decide on a plan to flee Austria with the children. Many songs from the musical have become standards, including \"Do-Re-Mi\", \"My Favorite Things\", \"Edelweiss\", \"Climb Ev'ry Mountain\", and the title song \"The Sound of Music\"."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1944,
   "text": "World War II: Operation Queen commenced with one of the heaviest Allied tactical bombings of the war, attacking German targets in the Rur valley.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1938,
   "text": "Swiss chemist Albert Hofmann first synthesized the psychedelic drug LSD in Basel, Switzerland.",
   "context": [
    "Albert Hofmann was a Swiss chemist known for being the first to synthesize, ingest, and learn of the psychedelic effects of lysergic acid diethylamide (LSD). Hofmann's team also isolated, named and synthesized the principal psychedelic mushroom compounds psilocybin and psilocin. Hofmann discovered the structure of chitin in 1929. He authored more than 100 scientific articles and numerous books, including LSD: Mein Sorgenkind."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1914,
   "text": "World War I: Austro-Hungarian forces launched an assault against Serbian defensive positions at the Kolubara river, beginning the Battle of Kolubara.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1885,
   "text": "After a five-day trial following the North-West Rebellion, Louis Riel, a Canadian Métis leader and \"Father of Manitoba\", was hanged for high treason.",
   "context": [
    "The trial of Louis Riel took place in Regina, Canada, in 1885. Louis Riel had been a leader of a resistance movement by the Métis and First Nations people of western Canada against the Government of Canada in what is now the province of Saskatchewan. Known as the North-West Rebellion, this resistance was suppressed by the Canadian military, which led to Riel's surrender and trial for treason. The trial, which took place in July 1885 and lasted five days, resulted in a guilty verdict. He was also given a choice to plead guilty or insanity. Riel was subsequently executed by hanging, an outcome which has had a lasting negative impact on relations between Anglophone Canadians and the Riel supporters among French Canadians."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1776,
   "text": "American Revolutionary War: Fort Washington on Manhattan was captured from the Patriots by British and Hessian units.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1776,
   "text": "American Revolutionary War: A Dutch fort on Sint Eustatius fired The First Salute to the brig Andrew Doria of the Continental Navy, marking the first international recognition of the American flag.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1632,
   "text": "Gustavus Adolphus, King of Sweden, was killed at the Battle of Lützen during the Thirty Years' War.",
   "context": [
    "Gustavus Adolphus, also known as Gustav II Adolf or Gustav II Adolph, was King of Sweden from 1611 to 1632. He is credited with the rise of Sweden as a great European power. During his reign, Sweden became one of the primary military forces in Europe during the Thirty Years' War, helping to determine the political and religious balance of power in Europe. He was formally and posthumously given the name Gustavus Adolphus the Great by the Riksdag of the Estates in 1634."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1532,
   "text": "Spanish conquest of Peru: Conquistador Francisco Pizarro orchestrated a surprise attack in Cajamarca, capturing the Inca emperor, Atahualpa.",
   "context": [
    "The Spanish empires's conquest of the Inca Empire, also known as the Conquest of Peru, was one of the most important campaigns in the Spanish colonization of the Americas. After years of preliminary exploration and military skirmishes, 168 Spanish soldiers under conquistador Francisco Pizarro, along with his brothers in arms and their Indigenous auxiliaries, captured the last Sapa Inca, Atahualpa, at the Battle of Cajamarca in 1532. It was the first step in a long campaign that took decades of fighting but ended in Spanish victory in 1572 and colonization of the region as the Viceroyalty of Peru. The conquest of the Inca Empire, led to spin-off campaigns into present-day Chile and Colombia, as well as expeditions to the Amazon Basin and the surrounding rainforest."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1476,
   "text": "With the help of Stephen III and Stephen Báthory, Vlad the Impaler (pictured) ousted Basarab the Old and became the ruler of Wallachia for the third time.",
   "context": [
    "Stephen III, better known as Stephen the Great, was Voivode of Moldavia from 1457 until his death. He was one of the most prominent rulers of late medieval Eastern Europe, noted for his long reign, military leadership and astute diplomacy. His efforts to preserve Moldavian autonomy from more powerful neighboring states such as the Ottoman Empire, Poland and Hungary, as well as his aptitude for nation-building and repute as a protector of the Christian faith, made him into a national hero in both Romania and Moldova. He is canonised by the Romanian Orthodox Church."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 534,
   "text": "The second edition of the Code of Justinian, a codification of Roman law by Byzantine emperor Justinian I (pictured), was published.",
   "context": [
    "The Code of Justinian is one part of the Corpus Juris Civilis, the codification of Roman law ordered early in the 6th century AD by Justinian I, who was Eastern Roman emperor in Constantinople. Two other units, the Digest and the Institutes, were created during his reign. The fourth part, the Novellae Constitutiones, was compiled unofficially after his death but is now also thought of as part of the Corpus Juris Civilis."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Too big to fail (גדול מכדי להיכשל)"
 ]
}
</input>