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
   "year": 2014,
   "text": "The European Space Agency's lander Philae  touched down on 67P/Churyumov–Gerasimenko, becoming the first spacecraft to land on a comet.",
   "context": [
    "The European Space Agency is a 23-member international organisation devoted to space exploration. It has its headquarters in Paris and a staff of around 3,000 people globally as of 2025. ESA was founded in 1975 in the context of European integration. Its 2026 annual budget was around €8.3 billion."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2011,
   "text": "An explosion in the Shahid Modarres missile base led to the deaths of 17 members of the Revolutionary Guards, including Hassan Tehrani Moghaddam, a key figure in Iran's missile program.",
   "context": [
    "On 12 November 2011 at about 13:30 local time, a large explosion occurred at the Modarres garrison missile base in Tehran Province, Iran. The facility is also referred to as Shahid Modarres missile base, and the Alghadir missile base. Seventeen members of the Revolutionary Guards were killed in this incident, including Major General Hassan Moqaddam, described as \"a key figure in Iran's missile programme\"."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2006,
   "text": "South Ossetia held a referendum on independence from Georgia; more than 99 percent of voters were in favour of maintaining the region's status as a de facto independent state.",
   "context": [
    "South Ossetia, formally the Republic of South Ossetia—the State of Alania since 2017, and originally the Republic of South Ossetia, is a partially recognised state in the South Caucasus. It has an officially stated population of just over 56,500 people (2022), who live in an area of 3,900 square kilometres (1,500 sq mi), with 33,000 living in the capital city, Tskhinvali. It de facto borders only Russia and Georgia."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2001,
   "text": "American Airlines Flight 587 crashed into residential buildings shortly after takeoff from John F. Kennedy International Airport in New York, killing 265 people.",
   "context": [
    "American Airlines Flight 587 was a regularly scheduled international passenger flight from John F. Kennedy International Airport, New York City, to Las Américas International Airport, Santo Domingo, Dominican Republic. On November 12, 2001, the Airbus A300 flying the route crashed into the neighborhood of Belle Harbor on the Rockaway Peninsula of Queens, New York City, shortly after takeoff, killing all 251 passengers and nine crew members aboard, as well as five people on the ground. It is the second-deadliest aviation accident to have occurred in the United States, behind the crash of American Airlines Flight 191 in 1979, and the second-deadliest aviation incident involving an Airbus A300, after Iran Air Flight 655."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1996,
   "text": "A Saudi Arabian Airlines Boeing 747 and a Kazakhstan Airlines Ilyushin Il-76 collided in mid-air near New Delhi, killing 349 people, the deadliest such collision in history.",
   "context": [
    "Saudia is the first flag carrier of Saudi Arabia, headquartered in Jeddah. Its main hub is King Abdulaziz International Airport in Jeddah, with secondary hubs at Prince Mohammad bin Abdulaziz International Airport in Medina and King Fahd International Airport in Dammam, and a hub at King Khalid International Airport in Riyadh, which it plans to vacate by 2030 for the launch of Riyadh Air."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1991,
   "text": "Indonesian forces opened fire on student demonstrators protesting the occupation of East Timor in the capital Dili, killing at least 250 people.",
   "context": [
    "The Santa Cruz massacre was the murder of at least 250 East Timorese pro-independence demonstrators in the Santa Cruz cemetery in the capital, Dili, on 12 November 1991, during the Indonesian occupation of East Timor and is part of the East Timor genocide."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1973,
   "text": "The first episode of Last of the Summer Wine, the longest-running television sitcom in history, premiered on the BBC.",
   "context": [
    "Last of the Summer Wine is a British sitcom set in Yorkshire created and written by Roy Clarke and originally broadcast by the BBC from 1973 to 2010. It premiered as an episode of Comedy Playhouse on 4 January 1973, and the first series of episodes followed on 12 November 1973. Alan J. W. Bell produced and directed all episodes of the show from late 1981 to 2010. The BBC confirmed on 2 June 2010 that Last of the Summer Wine would no longer be produced and the 31st series would be its last. Subsequently, the final episode was broadcast on 29 August 2010. Since its original release, all 295 episodes, comprising thirty-one series – including the pilot and all films and specials – have been released on DVD. Repeats of the show are broadcast in the UK on BBC One, U&Gold, U&Yesterday, and U&Drama. It is also seen in more than 25 countries, including various PBS stations in the United States and on VisionTV in Canada. With the exception of programmes relaunched after long hiatuses, Last of the Summer Wine is the longest-running TV comedy programme in Britain and the longest-running TV sitcom in the world."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1970,
   "text": "The deadliest tropical cyclone in history made landfall on the coast of East Pakistan (present-day Bangladesh), killing at least 250,000 people.",
   "context": [
    "The 1970 Bhola cyclone, also known as the Great Cyclone of 1970 or simply the Bhola Cyclone, was the deadliest tropical cyclone on record, as well as one of the deadliest humanitarian disasters ever recorded. It struck East Pakistan and India's West Bengal on 12 November 1970. At least 300,000 people died in the storm, possibly as many as 500,000, primarily as a result of the storm surge that flooded much of the low-lying islands of the Ganges Delta. The Bhola cyclone was the sixth and strongest cyclonic storm of the 1970 North Indian Ocean cyclone season."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1970,
   "text": "The Oregon Highway Division unsuccessfully attempted to destroy a rotting beached sperm whale near Florence, Oregon, with dynamite.",
   "context": [
    "The Oregon Department of Transportation (ODOT) is a department of the state government of the U.S. state of Oregon responsible for systems of transportation. It was first established in 1969. It had been preceded by the Oregon State Highway Department which, along with the Oregon State Highway Commission, was created by an act of the Oregon Legislative Assembly in 1913. It works closely with the five-member Oregon Transportation Commission in managing the state's transportation systems."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1956,
   "text": "Suez Crisis: During an invasion of Rafah, Israeli soldiers shot and killed an estimated 111 Palestinian refugees and local inhabitants.",
   "context": [
    "The Suez Crisis, also known as the second Arab–Israeli war, the Tripartite Aggression in the Arab world and the Sinai War in Israel, was a British–French–Israeli invasion of Egypt in 1956. Israel invaded on 29 October, with the primary objective of re-opening the Straits of Tiran and the Gulf of Aqaba as the recent tightening of the eight-year-long Egyptian blockade prevented Israeli passage. After issuing a joint ultimatum for a ceasefire, the United Kingdom and France joined the Israelis on 31 October in an attempt to depose Egyptian President Gamal Abdel Nasser and regain control of the Suez Canal. The countries came under heavy political pressure from the United States, the Soviet Union and the United Nations, prompting their withdrawal from Egypt."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1944,
   "text": "Second World War: In Operation Catechism, the Royal Air Force sank the German battleship Tirpitz  (video featured) near Tromsø, Norway, killing about 1,000 sailors on board.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1942,
   "text": "World War II: The Naval Battle of Guadalcanal, the decisive engagement in a series of sea battles between Allied and Japanese forces during the months-long Guadalcanal campaign in the Solomon Islands, began.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1940,
   "text": "World War II: Free French forces captured Gabon from Vichy France.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1940,
   "text": "World War II: Soviet foreign minister Vyacheslav Molotov arrived in Berlin to discuss the possibility of the Soviet Union joining the Axis powers.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1932,
   "text": "At the request of the Government of Western Australia, the Australian military officially resumed fighting the Emu War after their prior withdrawal.",
   "context": [
    "The Government of Western Australia, also known as the WA Government, is the executive branch of government for the Australian state of Western Australia. It comprises the State Cabinet, Executive Council and the public sector. The WA Government includes approximately 130 agencies and authorities delivering frontline and support services, employs approximately 240,000 people and had an expected operating expenditure of A$43.59 billion in the 2024–25 financial year."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1928,
   "text": "The British ocean liner SS Vestris sank in the western Atlantic Ocean, killing 111 people.",
   "context": [
    "An ocean liner is a type of passenger ship that was primarily used for transportation across seas or oceans. Ocean liners may also carry cargo or mail, and may sometimes be used for other purposes. The Queen Mary 2 is the only active ocean liner in 2026, serving with Cunard Line."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1920,
   "text": "The Kingdom of Italy and the Kingdom of Serbs, Croats and Slovenes signed the Treaty of Rapallo to establish national borders east of the Adriatic Sea.",
   "context": [
    "The Kingdom of Italy was a unitary state that existed from 17 March 1861, when Victor Emmanuel II, King of Sardinia, was proclaimed King of Italy, until 18 June 1946, when the monarchy was abolished, following civil discontent that led to an institutional referendum on 2 June, resulting in the establishment of the modern Italian Republic. The kingdom was established through the unification of several states over a decades-long process, called the Risorgimento. That process was influenced by House of Savoy-ruled Sardinia, which was one of Italy's legal predecessor states."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1912,
   "text": "Eight months after perishing during the ill-fated Terra Nova Expedition, the bodies of Robert Falcon Scott (pictured) and his companions were discovered on the Ross Ice Shelf in Antarctica.",
   "context": [
    "The Terra Nova Expedition, officially the British Antarctic Expedition, was an expedition to Antarctica which took place between 1910 and 1913. Led by Captain Robert Falcon Scott, the expedition had various scientific and geographical objectives. Scott wished to continue the scientific work that he had begun when leading the Discovery Expedition from 1901 to 1904, and wanted to be the first to reach the geographic South Pole."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1911,
   "text": "The Corozal (pictured), at the time the most powerful dredger ever built, was launched in Renfrew, Scotland, for service in the construction of the Panama Canal.",
   "context": [
    "Corozal was a Scottish-built dredger used on the Panama Canal. The Renfrew-based firm of Messrs. Wm. Simons & Company won a US government tender for its construction in 1911. The vessel was launched in November 1911 and taken into US government service as the US Corozal. It was the most powerful dredger ever built at that time. The Corozal operated on the difficult Culebra Cut, deepening a channel excavated by hand and dynamite. It became the first ship to sail through the cut in December 1913, shortly before the canal opened to traffic. The Corozal was sold to the Arundel Corporation in 1926 and scrapped in 1956."
   ]
  },
  {
   "ref": "wikipedia#19",
   "year": 1892,
   "text": "William Heffelfinger was paid $500 by the Allegheny Athletic Association, becoming the first professional American football player.",
   "context": [
    "William Walter \"Pudge\" Heffelfinger, also spelled Hafelfinger, was an American football player and coach. He is considered the greatest lineman of his time, and the first athlete to play American football professionally, having been paid to play in 1892 for the Allegheny Athletic Association."
   ]
  },
  {
   "ref": "wikipedia#20",
   "year": 1330,
   "text": "Led by the voivode Basarab I, Wallachian forces defeated the Hungarian army in an ambush at the Battle of Posada (depicted).",
   "context": [
    "Voivode is a title denoting a military leader or warlord in Central, Southeastern and Eastern Europe, in use since the Early Middle Ages. It primarily referred to the medieval rulers of the Romanian-inhabited states and of governors and military commanders of Polish, Hungarian, Lithuanian, Balkan, Russian and other Slavic-speaking populations."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Whistle past the graveyard (לשרוק ליד בית הקברות / להתעלם מסכנה גלויה)",
  "Glut (עודף היצע)",
  "Front-run (להקדים את המהלך)",
  "Bagholder (מחזיק השקית)"
 ]
}
</input>