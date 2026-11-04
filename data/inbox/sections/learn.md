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
   "year": 2025,
   "text": "A UPS Airlines plane crashed in Louisville, Kentucky, killing at least twelve people.",
   "context": [
    "UPS Airlines is a major American cargo airline based in Louisville, Kentucky. One of the largest cargo airlines worldwide in terms of freight volume flown, UPS Airlines flies to 815 destinations worldwide. It has been a wholly owned subsidiary of United Parcel Service since its launch in 1988."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2016,
   "text": "The Paris Agreement, under the United Nations Framework Convention on Climate Change, came into effect.",
   "context": [
    "The Paris Agreement is an international treaty on climate change that was signed in 2016. The treaty covers climate change mitigation, adaptation, and finance. The Paris Agreement was negotiated by 196 parties at the 2015 United Nations Climate Change Conference near Paris, France. As of January 2026, 194 members of the United Nations Framework Convention on Climate Change (UNFCCC) are parties to the agreement. Of the three UNFCCC member states which have not ratified the agreement, the only major emitter is Iran. The United States, the second largest emitter, withdrew from the agreement in 2020, rejoined in 2021, and withdrew again in 2026."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2008,
   "text": "Barack Obama (pictured) became the first person of biracial or African-American descent to be elected President of the United States.",
   "context": [
    "Barack Hussein Obama II is an American retired politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African American to serve as president. Obama represented Illinois in the United States Senate from 2005 to 2008 and served as an Illinois state senator from 1997 to 2004."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1995,
   "text": "Israeli prime minister Yitzhak Rabin (pictured) was assassinated by Yigal Amir, a right-wing extremist, at a peace rally at Kings of Israel Square in Tel Aviv.",
   "context": [
    "Yitzhak Rabin was an Israeli statesman and general who was the prime minister of Israel, having served from 1974 to 1977 and again from 1992 until his assassination in 1995. He was the first prime minister to have been born in the region of Palestine, at the time under British control."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1970,
   "text": "Authorities in California discovered a 13-year-old feral child, pseudonymously known as Genie, who had spent nearly her entire life in social isolation.",
   "context": [
    "A feral child is a young individual who has lived isolated from human contact from a very young age, with little or no experience of human care, social behavior, or language. Such children lack the basics of primary and secondary socialization. The term is used to refer to children who have suffered severe abuse or trauma before being abandoned or running away. They are sometimes the subjects of folklore and legends, often portrayed as having been raised by animals. While there are many cases of children being found in proximity to wild animals, there are no eyewitness accounts of animals feeding human children."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1964,
   "text": "Ruhollah Khomeini, an influential Shia cleric, was arrested by the Iranian secret police and exiled to Turkey.",
   "context": [
    "Ruhollah Mostafavi Khomeini was an Iranian politician and Shia cleric who served as the first supreme leader of Iran from 1979 until his death in 1989. He was the leader of the Iranian Revolution, which overthrew Mohammad Reza Pahlavi, ended the Pahlavi era, and transformed the country into an Islamic republic. As supreme leader, he implemented policies that came to be known as Khomeinism."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1952,
   "text": "Robert A. Lovett, United States Secretary of Defense, issued a memorandum establishing the National Security Agency, with responsibility for all communications intelligence for the government.",
   "context": [
    "Robert Abercrombie Lovett was an American politician who served as the fourth United States secretary of defense, having been promoted to this position from Deputy Secretary of Defense. He served in the cabinet of President Harry S. Truman from 1951 to 1953 and in this capacity, directed the Korean War. As Under Secretary of State, he handled most of the tasks of the State Department while George C. Marshall was secretary."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1944,
   "text": "Second World War: Allied forces completed Operation Pheasant, a major operation to clear German troops from the province of North Brabant in the Netherlands.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1938,
   "text": "The Hlinka Guard and Slovakian police began the deportation of several thousand Jews from the country.",
   "context": [
    "The Hlinka Guard was the militia maintained by the Slovak People's Party in the period from 1938 to 1945; it was named after Andrej Hlinka."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1924,
   "text": "In a special election in Wyoming, Nellie Tayloe Ross became the first woman to be elected as a governor in the United States.",
   "context": [
    "The 1924 Wyoming gubernatorial special election took place on November 4, 1924. William B. Ross, the Democratic Governor of Wyoming, died in office on October 2, 1924, temporarily elevating Republican Secretary of State Frank Lucas to the governorship. A special election was held to fill the remainder of Ross's term and his widow, Nellie Tayloe Ross, defeated Republican nominee E. J. Sullivan, becoming the first ever female governor of any U.S. state."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1922,
   "text": "The tomb of Tutankhamun (pictured) was discovered by a team led by British Egyptologist Howard Carter.",
   "context": [
    "The tomb of Tutankhamun, a pharaoh of the Eighteenth Dynasty of ancient Egypt, is located in the Valley of the Kings. The tomb, also known by its tomb number KV62, consists of four chambers and an entrance staircase and corridor. It is smaller and less extensively decorated than other Egyptian royal tombs of its time, and it probably originated as a tomb for a non-royal individual that was adapted for Tutankhamun's use after his premature death. Like other pharaohs, Tutankhamun was buried with a wide variety of funerary objects and personal possessions, such as coffins, furniture, clothing and jewelry, though in the unusually limited space these goods had to be densely packed. Robbers entered the tomb twice in the years immediately following the burial, but Tutankhamun's mummy and most of the burial goods remained intact. The tomb's low position, dug into the floor of the valley, allowed its entrance to be hidden by debris deposited by flooding and tomb construction. Thus, unlike other tombs in the valley, it was not stripped of its valuables during the Third Intermediate Period."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1922,
   "text": "The tomb of Tutankhamun (pictured) was discovered by a team led by British Egyptologist Howard Carter.",
   "context": [
    "The tomb of Tutankhamun, a pharaoh of the Eighteenth Dynasty of ancient Egypt, is located in the Valley of the Kings. The tomb, also known by its tomb number KV62, consists of four chambers and an entrance staircase and corridor. It is smaller and less extensively decorated than other Egyptian royal tombs of its time, and it probably originated as a tomb for a non-royal individual that was adapted for Tutankhamun's use after his premature death. Like other pharaohs, Tutankhamun was buried with a wide variety of funerary objects and personal possessions, such as coffins, furniture, clothing and jewelry, though in the unusually limited space these goods had to be densely packed. Robbers entered the tomb twice in the years immediately following the burial, but Tutankhamun's mummy and most of the burial goods remained intact. The tomb's low position, dug into the floor of the valley, allowed its entrance to be hidden by debris deposited by flooding and tomb construction. Thus, unlike other tombs in the valley, it was not stripped of its valuables during the Third Intermediate Period."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1921,
   "text": "The remains of an unknown soldier were buried with an eternal flame at the Altare della Patria (pictured) in Rome.",
   "context": [
    "The Tomb of the Unknown Soldier is a war memorial located in Rome under the statue of the goddess Roma at the Altare della Patria. It is a sacellum dedicated to the Italian soldiers killed and missing during war."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1912,
   "text": "The keel of USS Nevada was laid down, beginning construction on the United States Navy's first \"super-dreadnought\".",
   "context": [
    "The keel is the bottom-most longitudinal structural element of a watercraft, important for stability. On some sailboats, it may have a hydrodynamic and counterbalancing purpose as well. The laying of the keel is often the initial step in constructing a ship. In the British and American shipbuilding traditions, this event marks the beginning date of a ship's construction."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1890,
   "text": "The City and South London Railway (carriage pictured), the first deep-level underground railway in the world, officially opened, running 3.2 mi (5.1 km) between the City of London and Stockwell.",
   "context": [
    "The City and South London Railway (C&SLR) was the first successful deep-level underground \"tube\" railway in the world, and the first major railway to use electric traction. The railway was originally intended for cable-hauled trains, but owing to the bankruptcy of the cable contractor during construction, a system of electric traction using electric locomotives – an experimental technology at the time – was chosen instead."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1864,
   "text": "American Civil War: Nathan Bedford Forrest led a cavalry division in an attack on a Union army supply base at Johnsonville, Tennessee, resulting in the capture of 150 prisoners.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860 and the growing abolitionist movement in the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1780,
   "text": "Túpac Amaru II led a rebellion of Aymara, Quechua, and mestizo peasants in protest against the Bourbon Reforms in the Spanish Viceroyalty of Peru.",
   "context": [
    "Túpac Amaru II was an Indigenous cacique who led a large Andean rebellion against the Spanish in Peru as self-proclaimed Sapa Inca of the new Inca Empire. He was later elevated to a mythical status in the Peruvian struggle for independence and indigenous rights movement, as well as an inspiration to myriad causes in Spanish America and beyond."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Cook the books (לזייף דוחות כספיים)"
 ]
}
</input>