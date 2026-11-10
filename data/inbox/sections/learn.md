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
   "text": "The British government announced that it had removed the last land mine from the Falkland Islands, laid by Argentine forces during the 1982 Falklands War.",
   "context": [
    "There were approximately 30,000 land mines laid in the British overseas territory of the Falkland Islands by Argentinian forces following their 1982 invasion. Some of the mines were cleared immediately following the successful British operation to retake the islands, but following a series of accidents, demining operations ceased. In the following years the minefields were fenced off and, with human access limited, became havens for Falklands flora and the native penguin population. The British government ratified the Ottawa Treaty in 1998 that required the removal of all mines within its territory. Demining operations, which had to be carried out by hand due to the climate and local condition, restarted in 2009. The last mines were cleared in November 2020."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "A skirmish occurred between South Korean and North Korean naval ships off Daecheong Island in the Yellow Sea.",
   "context": [
    "The Daecheong incident, also known as the Battle of Daecheong, was a skirmish between the South Korean and North Korean navies near the Northern Limit Line (NLL) on 10 November 2009 off Daecheong Island."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2007,
   "text": "At the Ibero-American Summit in Santiago, Chile, King Juan Carlos I of Spain asked Venezuelan president Hugo Chávez \"Why don't you shut up?\" after Chávez repeatedly interrupted a speech by Spanish prime minister José Luis Rodríguez Zapatero.",
   "context": [
    "The Ibero-American Summit, formally the Ibero-American Conference of Heads of State and Governments, is a meeting of the heads of government and state of the Spanish- and Portuguese-speaking nations of Europe and the Americas. Held every year from 1991, it has been held every two years since the 2014 summit in Veracruz. The permanent secretariat in preparation of the summits is the Ibero-American General Secretariat (SEGIB)."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2006,
   "text": "Sri Lankan Tamil politician and human rights lawyer Nadarajah Raviraj was assassinated in Colombo.",
   "context": [
    "Sri Lankan Tamils, also known as Ceylon Tamils or Eelam Tamils, are Tamils native to the South Asian island state of Sri Lanka. Today, they constitute a majority in the Northern Province, form the plurality in the Eastern Province and are in the minority throughout the rest of the country. 70% of Sri Lankan Tamils in Sri Lanka live in the Northern and Eastern provinces."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1995,
   "text": "Writer and environmental activist Ken Saro-Wiwa and eight others from the Movement for the Survival of the Ogoni People were executed by the Nigerian military regime led by Sani Abacha.",
   "context": [
    "Kenule Beeson Saro-Wiwa was a Nigerian writer, teacher, television producer, and social rights activist. He was a member of the Ogoni people, an ethnic minority in the Niger Delta whose homeland, Ogoniland, has been targeted for crude oil extraction since the 1950s and has suffered extreme environmental damage from decades of indiscriminate petroleum waste dumping."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1975,
   "text": "SS Edmund Fitzgerald sank in Lake Superior, claiming all 29 of her crew's lives.",
   "context": [
    "SS Edmund Fitzgerald was an American Great Lakes freighter that sank in Lake Superior during a storm on November 10, 1975, with the loss of the entire crew of 29 men. When launched on June 7, 1958, she was the largest ship on North America's Great Lakes and remains the largest to have sunk there. Her wreck was located in deep water on November 14, 1975, by a U.S. Navy aircraft detecting magnetic anomalies, and soon afterwards found to be in two large pieces."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1975,
   "text": "Angolan Civil War: The MPLA decisively defeated the FNLA at the Battle of Quifangondo, while Portugal simultaneously withdrew all its colonial and military personnel from Luanda.",
   "context": [
    "The Angolan Civil War was a civil war in Angola, beginning in 1975 and continuing, with interludes, until 2002. The war began immediately after Angola became independent from Portugal in November 1975. It was a power struggle between two former anti-colonial guerrilla movements, the communist People's Movement for the Liberation of Angola (MPLA) and the anti-communist National Union for the Total Independence of Angola (UNITA)."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1969,
   "text": "The first episode of the children's television series Sesame Street was broadcast in the United States.",
   "context": [
    "Sesame Street is an American educational children's television series that combines live-action, sketch comedy, animation, and puppetry. It is produced by Sesame Workshop and was created by Joan Ganz Cooney and Lloyd Morrisett. It features Jim Henson's Muppets, and includes short films, with humor and cultural references. It premiered on November 10, 1969, to positive reviews, some controversy, and high viewership. It has aired on the United States national public television provider PBS since its debut, with its first run moving to premium channel HBO on January 16, 2016, then its sister streaming service HBO Max on November 12, 2020, which continued through the service's rebrand as Max in 2023 and as HBO Max in 2025, and most recently Netflix on November 10, 2025."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1945,
   "text": "Indonesian National Revolution: Following the killing of Brigadier A. W. S. Mallaby on 30 October, British forces retaliated by attacking Surabaya (present-day logo depicted).",
   "context": [
    "The Indonesian National Revolution, also known as the Indonesian War of Independence, was an armed conflict and diplomatic struggle between the Republic of Indonesia and the Dutch Empire and an internal social revolution during postwar and postcolonial Indonesia. It took place between Indonesia's declaration of independence in 1945 and the Netherlands' transfer of sovereignty over the Dutch East Indies to the Republic of the United States of Indonesia at the end of 1949."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1940,
   "text": "An earthquake registering 7.7 Mw struck the Vrancea region of Romania.",
   "context": [
    "The 1940 Vrancea earthquake, also known as the 1940 Bucharest earthquake, occurred on Sunday, 10 November 1940, in Romania, at 03:39, when the majority of the population was at home."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1937,
   "text": "Brazilian president Getúlio Vargas led a coup against his own constitutional government, establishing the dictatorial Estado Novo regime.",
   "context": [
    "Getúlio Dornelles Vargas was a Brazilian military officer, lawyer, and politician who served as the 14th and 17th president of Brazil, from 1930 to 1945 and from 1951 until his suicide in 1954. Due to his long and controversial tenure as Brazil's provisional, constitutional, dictatorial and democratic leader, he is considered by historians as the most influential Brazilian politician of the 20th century."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1898,
   "text": "White supremacists seized power and massacred black Americans during the Wilmington massacre (newspaper headline pictured), the only instance of a municipal government being overthrown in United States history.",
   "context": [
    "\n\n\nWhite supremacy is the belief that white people are superior to those of other races. The belief favors the maintenance and defense of any power and privilege held by white people. White supremacy has roots in the now-discredited doctrine of scientific racism and was a key justification for European colonialism."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1865,
   "text": "Henry Wirz, the Confederate superintendent of Andersonville Prison, was hanged after a controversial conviction, becoming the only American Civil War officer executed for war crimes.",
   "context": [
    "Henry Wirz was a Confederate States Army officer and convicted war criminal best known for commanding Andersonville Prison during the American Civil War. Born in Zurich, Switzerland, Wirz immigrated to the United States in 1849 after being exiled from the canton of Zurich following a conviction of embezzlement and fraud. He worked in a Massachusetts factory for five years before moving south to Kentucky to begin a career in medicine; specializing in homeopathy, Wirz divided his time between the two states. In 1854, he moved to Louisiana with his new wife and her two daughters, working as an overseer on a slave plantation."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1599,
   "text": "At the culmination of a Swedish civil war, supporters of the deposed King Sigismund III Vasa were publicly executed in the Åbo Bloodbath.",
   "context": [
    "Sigismund III Vasa was King of Poland and Grand Duke of Lithuania from 1587 to 1632 and, as Sigismund, King of Sweden from 1592 to 1599. He was the first Polish sovereign from the House of Vasa. Zealously religious, he imposed Catholicism across the vast realm, and his crusades against neighbouring states marked Poland's largest territorial expansion. A deeply polarising ruler, he presided over the end of the Golden Age of prosperity and achievement, further distinguished by the transfer of the country's capital from Kraków to Warsaw."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1202,
   "text": "Fourth Crusade: The Siege of Zara, the first attack on a Catholic city by Catholic crusaders, began in present-day Zadar, Croatia.",
   "context": [
    "The Fourth Crusade (1202–1204) was a Latin Christian armed expedition called by Pope Innocent III. The stated intent of the expedition was to recapture the Muslim-controlled city of Jerusalem, by first defeating the powerful Egyptian Ayyubid Sultanate. However, a sequence of economic and political events culminated in the Crusader army's 1202 siege of Zara and the 1204 sack of Constantinople, rather than the conquest of Egypt as originally planned. This led to the partition of the Byzantine Empire by the Crusaders and their Venetian allies, leading to a period known as the Frankokratia."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Whistle past the graveyard (לשרוק ליד בית הקברות / להתעלם מסכנה גלויה)",
  "Glut (עודף היצע)",
  "Front-run (להקדים את המהלך)",
  "Bagholder (מחזיק השקית)",
  "Hockey-stick growth (צמיחת מקל הוקי)",
  "Asymmetric bet (הימור א-סימטרי)",
  "Burning the boats (לשרוף את הסיפונים)",
  "Working capital (הון חוזר)",
  "Sweat equity (הון מאמץ)",
  "Low-hanging fruit (פרי בשל)"
 ]
}
</input>