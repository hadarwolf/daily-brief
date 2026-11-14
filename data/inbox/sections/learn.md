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
   "year": 2010,
   "text": "Red Bull Racing's Sebastian Vettel won the Drivers' Championship after winning the final race of the season, becoming the youngest Formula One champion.",
   "context": [
    "Red Bull Racing Limited, currently competing as Oracle Red Bull Racing and also known simply as Red Bull or RBR, is a Formula One racing team, competing under an Austrian racing licence and based in England. It is one of two Formula One teams owned by conglomerate Red Bull GmbH, the other being Racing Bulls. The Red Bull Racing team was managed by Christian Horner from its formation in 2005 until 2025, when he departed the team and was replaced by Laurent Mekies."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2003,
   "text": "Astronomers Michael E. Brown, Chad Trujillo, and David L. Rabinowitz discovered the trans-Neptunian object Sedna.",
   "context": [
    "Michael E. Brown is an American astronomer, who has been professor of planetary astronomy at the California Institute of Technology (Caltech) since 2003. His team has discovered many trans-Neptunian objects (TNOs), including the dwarf planet Eris, which was originally thought to be bigger than Pluto, triggering a debate on the definition of a planet."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1995,
   "text": "As a result of budget conflicts between President Bill Clinton and the United States Congress led by Newt Gingrich, the federal government was forced to shut down non-essential services.",
   "context": [
    "William Jefferson Clinton is an American retired politician and lawyer who served as the 42nd president of the United States from 1993 to 2001. A member of the Democratic Party, he previously served as the attorney general of Arkansas from 1977 to 1979, the governor of Arkansas from 1979 to 1981, and governor again from 1983 to 1992. His centrist Third Way political philosophy became known as Clintonism, which defined his presidency and the succeeding decades of the Democratic Party into the 21st century."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1992,
   "text": "In poor conditions caused by Cyclone Forrest, Vietnam Airlines Flight 474 crashed near Nha Trang, killing 30 people.",
   "context": [
    "Extremely Severe Cyclonic Storm Forrest, also referred to as Tropical Storm Forrest while in the western Pacific basin before its Thai crossover, was a powerful tropical cyclone that prompted the evacuation of 600,000 people in Bangladesh in late November 1992. Originating from an area of disturbed weather near the Caroline Islands on November 9, Forrest was classified as a tropical depression three days later over the South China Sea. Tracking generally west, the system steadily organized into a tropical storm, passing Vietnam to the south, before striking Thailand along the Malay Peninsula on November 15. Once over the Bay of Bengal, Forrest turned northward on November 17 and significantly intensified. It reached its peak intensity on November 20 as a Category 4-equivalent cyclone on the Saffir–Simpson hurricane scale with winds of 230 km/h (140 mph). Hostile environmental conditions soon affected the cyclone as it turned abruptly east-northeastward. Forrest made landfall in northwestern Myanmar as a weakening system on November 21 before dissipating early the next day."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1991,
   "text": "Croatian War of Independence: Croatian naval commandos attacked the Yugoslav patrol boat Mukos, starting the Battle of the Dalmatian Channels.",
   "context": [
    "The Croatian War of Independence was an armed conflict fought in Croatia from 1991 to 1995 between Croat forces loyal to the Government of Croatia—which had declared independence from the Socialist Federal Republic of Yugoslavia (SFRY)—and the Serb-controlled Yugoslav People's Army (JNA) and local Serb forces, with the JNA ending its combat operations by 1992."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1990,
   "text": "Music producer Frank Farian admitted that the German R&B duo Milli Vanilli did not sing the vocals on their album Girl You Know It's True.",
   "context": [
    "Franz Reuther, known professionally as Frank Farian, was a German record producer and singer who founded the 1970s disco-pop group Boney M., and the pop bands No Mercy and Milli Vanilli. He frequently created vocal groups in which the publicised members merely lip-synced to songs sung by himself and/or session performers. Farian owned the record label MCI and several subsidiaries."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1970,
   "text": "Southern Airways Flight 932, chartered by the Marshall University football team, crashed into a hill near Ceredo, West Virginia, killing all 75 people on board.",
   "context": [
    "Southern Airways Flight 932 was a chartered Southern Airways twin engine McDonnell Douglas DC-9-30 domestic United States commercial jet flight from Stallings Field (ISO) in Kinston, North Carolina, to Huntington Tri-State Airport/Milton J. Ferguson Field (HTS) near Kenova and Ceredo, West Virginia. At 7:36 pm on November 14, 1970, the aircraft crashed into a hill just short of the Tri-State Airport, killing all 75 people on board – 37 members of the Marshall University football team, 5 coaches, 7 staff members, 21 boosters, 2 pilots, 2 flight attendants, and a charter coordinator. The team was returning home after a 17–14 loss to the East Carolina Pirates at Ficklen Stadium in Greenville, North Carolina. The accident is the deadliest tragedy for any sports team in US history."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1969,
   "text": "Apollo 12 launched from the Kennedy Space Center, later becoming the second crewed flight to land on the Moon.",
   "context": [
    "Apollo 12 was the sixth crewed flight in the United States Apollo program and the second to land on the Moon. It was launched on November 14, 1969, by NASA from the Kennedy Space Center in Florida, landing on the part of the Moon called the Ocean of Storms on November 19, 1969. Commander Charles \"Pete\" Conrad and Lunar Module Pilot Alan L. Bean completed just over one day and seven hours of lunar surface activity while Command Module Pilot Richard F. Gordon remained in lunar orbit."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1967,
   "text": "American physicist Theodore Maiman was given a patent for his ruby laser systems, the world's first laser.",
   "context": [
    "Theodore Harold Maiman was an American engineer and physicist who is widely credited with the invention of the laser. Maiman's laser led to the subsequent development of many other types of lasers. The laser was successfully fired on May 16, 1960. In a July 7, 1960, press conference in Manhattan, Maiman and his employer, Hughes Aircraft Company, announced the laser to the world. Maiman was granted a patent for his invention, and he received many awards and honors for his work. His experiences in developing the first laser and subsequent related events are recounted in his book, The Laser Odyssey, later being republished in 2018 under a new title, The Laser Inventor: Memoirs of Theodore H. Maiman."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1960,
   "text": "Ruby Bridges and the McDonogh Three became the first black children to attend an all-white elementary school in Louisiana as part of the New Orleans school desegregation crisis.",
   "context": [
    "Ruby Nell Bridges Hall is an American civil rights activist. She was the first African American child to attend formerly whites-only William Frantz Elementary School in Louisiana during the New Orleans school desegregation crisis on November 14, 1960. She is the subject of a 1964 painting, The Problem We All Live With, by Norman Rockwell."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1941,
   "text": "World War II: German troops, aided by local auxiliaries, murdered nine thousand residents of the Słonim Ghetto in a single day.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1941,
   "text": "Second World War: After suffering torpedo damage the previous day, the British aircraft carrier HMS Ark Royal sank as she was being towed to Gibraltar for repairs.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1910,
   "text": "Aviator Eugene Burton Ely performed the first takeoff from a ship (pictured), flying from a makeshift deck on USS Birmingham in Hampton Roads, Virginia.",
   "context": [
    "Eugene Burton Ely was an American aviation pioneer, credited with the first shipboard aircraft takeoff and landing."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1851,
   "text": "Moby-Dick, a novel by American writer Herman Melville (pictured), was first published in the United States.",
   "context": [
    "Moby-Dick; or, The Whale is an 1851 epic novel by American writer Herman Melville. The book centers on the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage. A contribution to the literature of the American Renaissance, Moby-Dick was published to mixed reviews, was a commercial failure, and was out of print at the time of the author's death in 1891. Its reputation as a Great American Novel was established only in the 20th century, after the 1919 centennial of its author's birth. William Faulkner said he wished he had written the book himself, and D. H. Lawrence called it \"one of the strangest and most wonderful books in the world\" and \"the greatest book of the sea ever written\". Its opening sentence, \"Call me Ishmael\", is among world literature's most famous."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1680,
   "text": "German astronomer Gottfried Kirch discovered the Great Comet of 1680, the first comet to be discovered by telescope.",
   "context": [
    "Gottfried Kirch was a German astronomer and the first \"Astronomer Royal\" in Berlin and, as such, director of the nascent Berlin Observatory."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Too big to fail (גדול מכדי להיכשל)",
  "Junk bond (אג\"ח זבל)",
  "Debt maturity wall (קיר פירעונות)",
  "Rob Peter to pay Paul (לקחת מפיטר כדי לשלם לפול)",
  "Moral hazard (סיכון מוסרי)",
  "Winner-take-all market (שוק שבו המנצח לוקח הכל)",
  "Poison pill (גלולת רעל)"
 ]
}
</input>