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
   "text": "Members of the Turkistan Islamic Party drove a vehicle into a crowd in Tiananmen Square, Beijing, China, killing five people and injuring thirty-eight others.",
   "context": [
    "The Turkistan Islamic Party (TIP) is an Islamic militant organisation founded in Pakistan by Hasan Mahsum, who relocated the organization to Afghanistan following anti-terror crackdowns by the Pakistani government. Its stated goal is to establish an Islamic state in Xinjiang, China, and throughout the rest of Central Asia."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2007,
   "text": "In the Argentine general election, Cristina Fernández de Kirchner became the first woman to be elected president of Argentina.",
   "context": [
    "General elections were held in Argentina on Sunday, 28 October 2007 to elect the president and members of the National Congress, while elections for provincial governors took place on staggered dates throughout the year. For the national elections, each of the 23 provinces and the Autonomous City of Buenos Aires are considered electoral districts. Voter turnout was 76.2%. Buenos Aires Province Senator and First Lady Cristina Fernández de Kirchner of the Front for Victory won the election by 45.28% of votes against Elisa Carrió of Civic Coalition ARI, making her the second female president of Argentina and the first female president to be directly elected. She broke the 40 percent barrier and won in the first round. Elisa Carrió won in the city of Buenos Aires and came second with more than 20 percent of the votes. Third was Roberto Lavagna, who won in Córdoba."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1992,
   "text": "Hans-Adam II threatened to dismiss the Landtag of Liechtenstein over disagreements on the date of a referendum for the country's accession to the EEA.",
   "context": [
    "Hans-Adam II is the Prince of Liechtenstein, reigning since 1989. As a member of the Liechtenstein princely family, he also holds the title of Duke of Troppau and Jägerndorf and Count of Rietberg."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1971,
   "text": "Prospero (flight spare pictured), the first British satellite launched on a British rocket, lifted off from Launch Area 5B in Woomera, South Australia.",
   "context": [
    "The Prospero satellite, also known as the X-3, was launched by the United Kingdom in 1971. It was designed to undertake a series of experiments to study the effects of the space environment on communications satellites and remained operational until 1973, after which it was contacted annually for over 25 years. Although Prospero was the first British satellite to have been launched successfully by a British rocket, Black Arrow, the first British satellite placed in orbit was Ariel 1, launched in April 1962 on a US rocket."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1965,
   "text": "In St. Louis, Missouri, U.S., the 630-foot (190 m)-tall steel catenary Gateway Arch was completed.",
   "context": [
    "St. Louis is an independent city in the U.S. state of Missouri. It lies near the confluence of the Mississippi and the Missouri rivers. In 2020, the city proper had a population of 301,578, while its metropolitan area, which extends into Illinois, had an estimated population of over 2.8 million. It is the largest metropolitan area in Missouri and the second-largest in Illinois. The city's metropolitan statistical area is the 23rd-largest in the United States."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1940,
   "text": "World War II: Italy invaded Greece after Greek prime minister Ioannis Metaxas rejected Benito Mussolini's ultimatum demanding the cession of Greek territory.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1928,
   "text": "Indonesian composer Wage Rudolf Supratman introduced \"Indonesia Raya\", now the country's national anthem.",
   "context": [
    "Wage Rudolf Supratman was an Indonesian journalist and songwriter who wrote both the lyrics and melody of the national anthem of Indonesia, \"Indonesia Raya\". He is an Indonesian national hero."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1925,
   "text": "The funerary mask of Tutankhamun, possibly originally made for Queen Neferneferuaten, was uncovered for the first time in approximately 3,250 years.",
   "context": [
    "The mask of Tutankhamun is a gold funerary mask that belonged to Tutankhamun, who reigned over the New Kingdom of Egypt from 1332 BC to 1323 BC, during the Eighteenth Dynasty. After being buried with Tutankhamun's mummy for over 3,000 years, it was found in 1922 following the discovery of Tutankhamun's tomb three years earlier by the British archaeologist Howard Carter at the Valley of the Kings. It is on public display at the Grand Egyptian Museum in Cairo."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1919,
   "text": "The U.S. Congress passed the Volstead Act over president Woodrow Wilson's veto, reinforcing Prohibition in the United States.",
   "context": [
    "The United States Congress is the legislative branch of the federal government of the United States. It is a bicameral legislature, including a lower body, the U.S. House of Representatives, and an upper body, the U.S. Senate. They both meet in the United States Capitol in Washington, D.C."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1886,
   "text": "In New York Harbor, U.S. president Grover Cleveland dedicated the Statue of Liberty (pictured), a gift from France commemorating the Declaration of Independence.",
   "context": [
    "New York Harbor is a tidal body of water forming the upper part of New York Bay within the New York–New Jersey Harbor Estuary. Located on the East Coast of the United States at the mouth of the Hudson River, it is connected to Long Island Sound by the East River, which despite its name is actually a tidal strait."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1835,
   "text": "In the first major engagement of the Texas Revolution, the Texian Army repelled a Mexican attack at the grounds of Mission Concepcion south of Downtown San Antonio.",
   "context": [
    "The Texas Revolution was a rebellion by Anglo-American immigrants as well as Hispanic Texans against the centralist government of Mexico in the Mexican state of Coahuila y Tejas. Although the uprising was part of a larger revolt that included other provinces opposed to the regime of President Miguel Barragán and General Antonio López de Santa Anna, the Mexican government believed the United States had instigated the Texas insurrection with the goal of annexation. The Mexican Congress passed the Tornel Decree, declaring that any foreigners fighting against Mexican troops \"will be deemed pirates and dealt with as such, being citizens of no nation presently at war with the Republic and fighting under no recognized flag\". Only the province of Texas succeeded in breaking with Mexico, establishing the Republic of Texas. It was eventually annexed by the United States about a decade later."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1776,
   "text": "American Revolutionary War: As George Washington's Continental Army retreated northward from New York City, the British Army captured the village of White Plains.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1707,
   "text": "The Hōei earthquake ruptured all segments of the Nankai megathrust simultaneously – the only earthquake recorded to have done so.",
   "context": [
    "The 1707 Hōei earthquake  struck south-central Japan at around 13:45 local time on 28 October 1707. It was the largest earthquake in Japanese history until it was surpassed by the 2011 Tōhoku earthquake. It caused moderate-to-severe damage throughout southwestern Honshu, Shikoku and southeastern Kyūshū. The earthquake, and the resulting destructive tsunami, caused more than 5,000 casualties. This event ruptured all of the segments of the Nankai megathrust simultaneously, the only earthquake known to have done this, with an estimated magnitude of 8.6 ML or 8.7 Mw. It possibly also triggered the last eruption of Mount Fuji 49 days later."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1664,
   "text": "The Duke of York and Albany's Maritime Regiment of Foot, the forerunner to the Royal Marines, was established at the grounds of the Honourable Artillery Company in London.",
   "context": [
    "Duke of York is a title of nobility in the Peerage of the United Kingdom. Since the 15th century, it has, when granted, usually been given to the second son of English monarchs. The analogous title in the Scottish peerage was Duke of Albany."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1640,
   "text": "The Treaty of Ripon was agreed, ending the Second Bishops' War and forcing Charles I to summon the Long Parliament, ultimately leading to the First English Civil War.",
   "context": [
    "The Treaty of Ripon was a truce between Charles I, King of England, and the Covenanters, a Scottish political movement, which brought a cessation of hostilities to the Second Bishops' War."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1453,
   "text": "Ladislaus the Posthumous was crowned King of Bohemia, although George of Poděbrady remained in control of the government.",
   "context": [
    "Ladislaus the Posthumous, known as Ladislaus V, was Duke of Austria and King of Hungary, Croatia and Bohemia. He was the posthumous son of Albert II of Germany with Elizabeth of Luxembourg. Albert had bequeathed all his realms to his future son on his deathbed, but only the estates of Austria accepted his last will. Fearing an Ottoman invasion, the majority of the Hungarian lords and prelates offered the crown to Władysław III of Poland. The Hussite noblemen and towns of Bohemia did not acknowledge the hereditary right of Albert's descendants to the throne, but also did not elect a new king."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 312,
   "text": "Civil wars of the Tetrarchy: Constantine the Great defeated Maxentius at the Battle of the Milvian Bridge in Rome.",
   "context": [
    "The civil wars of the Tetrarchy were a series of conflicts between the co-emperors of the Roman Empire, starting from 306 AD with the usurpation of Maxentius and the defeat of Severus, and ending with the defeat of Licinius at the hands of Constantine I in 324 AD."
   ]
  }
 ],
 "recent_words_and_concepts": [
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