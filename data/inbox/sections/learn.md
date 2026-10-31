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
   "year": 2017,
   "text": "An Uzbek immigrant drove a rented truck into cyclists and runners in Lower Manhattan, New York City, killing eight people.",
   "context": [
    "On October 31, 2017, Sayfullo Habibullaevic Saipov drove a rented pickup truck into cyclists and runners for about one mile of the Hudson River Park's bike path alongside West Street from Houston Street south to Chambers Street in Lower Manhattan, New York City. The vehicle-ramming attack killed eight people, six of whom were foreign tourists, and injured thirteen others."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2005,
   "text": "The discovery of the Plutonian moons Nix and Hydra, based on photographs taken by the Hubble Space Telescope nearly five months earlier, was announced.",
   "context": [
    "There are five known moons of the dwarf planet Pluto. In order of distance from Pluto, they are Charon, Styx, Nix, Kerberos, and Hydra. Charon, the largest, is mutually tidally locked with Pluto, and is massive enough that Pluto and Charon are sometimes considered a binary dwarf planet."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2003,
   "text": "After 22 years in power, Mahathir Mohamad retired as Prime Minister of Malaysia.",
   "context": [
    "Mahathir bin Mohamad is a Malaysian politician, physician and author who served as the fourth and seventh prime minister of Malaysia from 1981 to 2003 and again from 2018 to 2020. He was the country's longest-serving prime minister, serving for a cumulative total of 24 years. His political career has spanned more than 75 years, from joining protests opposing citizenship policies for non-Malays in the Malayan Union in the 1940s to forming the Gerakan Tanah Air coalition in 2022. During his premiership, Mahathir was granted the title \"Father of Modernisation\" for his pivotal role in transforming the country's economy and infrastructure. At 101 years old, he is the second-oldest living former state leader in the world and the first Malaysian prime minister to reach that age."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2000,
   "text": "Singapore Airlines Flight 006 collided with construction equipment while attempting to take off from Chiang Kai-shek International Airport in Taiwan during heavy rain, killing 83 people aboard.",
   "context": [
    "Singapore Airlines Flight 006 was an international scheduled passenger flight from Singapore Changi Airport to Los Angeles International Airport, United States, via Chiang Kai-shek International Airport near Taipei, Taiwan. On 31 October 2000, at 23:18 Taipei local time, the Boeing 747-400 operating the flight crashed into construction equipment during a typhoon. The disaster resulted in 83 fatalities among the 179 people aboard the aircraft, with 98 occupants initially surviving the impact before two passengers later succumbed to their injuries in the hospital. This was the first fatal accident involving a Boeing 747-400 and the first fatal crash in the history of Singapore Airlines."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1999,
   "text": "All 217 people on board EgyptAir Flight 990 perished when the aircraft suddenly crashed into the Atlantic Ocean off the coast of Nantucket, Massachusetts.",
   "context": [
    "EgyptAir Flight 990 was a scheduled flight from Los Angeles International Airport to Cairo International Airport, with a stop at John F. Kennedy International Airport, New York City. On October 31, 1999, the Boeing 767 operating the route crashed into the Atlantic Ocean about 60 miles (100 km) south of Nantucket Island, Massachusetts, killing all 217 passengers and crew on board, making it the deadliest aviation disaster for EgyptAir. Since the crash occurred in international waters, it was investigated by the Egyptian Ministry of Civil Aviation's Civil Aviation Agency (ECAA) and the American National Transportation Safety Board (NTSB) under International Civil Aviation Organization rules. Since the ECAA lacked the resources of the NTSB, the Egyptian government asked the American government to have the NTSB handle the investigation."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1999,
   "text": "Australian sailor Jesse Martin arrived in Melbourne, becoming the youngest person to circumnavigate the globe solo, non-stop, and unassisted.",
   "context": [
    "Jesse Martin, is an Australian sailor who in 1999, at age 18, became the youngest person to circumnavigate the globe solo, non-stop and unassisted. His journey in the 10-metre (34 ft) S&S 34 sloop Lionheart-Mistral took approximately 11 months. He chronicled his adventures in the book Lionheart: A Journey of the Human Spirit, and his story was made into a documentary, Lionheart: The Jesse Martin Story."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1984,
   "text": "Indian prime minister Indira Gandhi (pictured) was assassinated by two of her own Sikh bodyguards, sparking riots that killed thousands of Sikhs.",
   "context": [
    "Indira Priyadarshini Gandhi was an Indian stateswoman who twice served as the Prime Minister of India from 1966 to 1977 and again from 1980 until her assassination in 1984. She was India's first and only female prime minister, and a central figure in Indian politics as the leader of the Indian National Congress (INC). Gandhi also served as chairperson of the Non-Aligned Movement (NAM) from 1983 to 1984, becoming the first Indian to hold the position. She was the daughter of Jawaharlal Nehru, the first prime minister of India, and the mother of Rajiv Gandhi, who succeeded her as prime minister. Her cumulative tenure of 15 years and 350 days, spanning four terms, makes her the second-longest-serving Indian prime minister after her father and the longest-serving female head of government at the time of her death."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1973,
   "text": "Three Provisional Irish Republican Army members escaped from Mountjoy Prison in Dublin aboard a hijacked helicopter that landed in the prison's exercise yard.",
   "context": [
    "The Provisional Irish Republican Army, officially known as the Irish Republican Army and informally known as the Provos, was an Irish republican paramilitary force that sought to end British rule in Northern Ireland, facilitate Irish reunification and bring about an independent socialist republic, which would encompass all of Ireland. It was the most active republican paramilitary group during the Troubles. It argued that the all-island Irish Republic continued to exist, and it saw itself as that state's army, the sole legitimate successor to the original IRA from the Irish War of Independence. It was designated a terrorist organisation in the United Kingdom and an unlawful organisation in the Republic of Ireland, both of whose authority it rejected."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1963,
   "text": "A gas explosion at the  Indiana State Fairgrounds Coliseum in Indianapolis killed 81 people and injured about 400 others.",
   "context": [
    "On October 31, 1963, a gas explosion occurred at the Indiana State Fairgrounds Coliseum in Indianapolis, United States, killing 81 people and injuring about 400 others. It was one of the worst disasters in the history of the state."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1941,
   "text": "Approximately 400 workers completed the 60-foot (18 m) busts of U.S. presidents George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln at Mount Rushmore in South Dakota.",
   "context": [
    "A bust is a sculpted or cast representation of the upper part of the human body, depicting a person's head and neck, and a variable portion of the chest and shoulders. The piece is normally supported by a plinth. The bust is generally a portrait intended to record the appearance of an individual, but may sometimes represent a type. They may be of any medium used for sculpture, such as marble, bronze, terracotta, plaster, wax or wood."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1941,
   "text": "One hundred crew members of the USS Reuben James perished when their vessel became the first U.S. Navy ship sunk by hostile action during World War II after it was torpedoed by the German submarine U-552.",
   "context": [
    "USS Reuben James (DD-245) was a four-funnel Clemson-class destroyer that was constructed after World War I. She was the first United States Navy ship to be named after Boatswain's Mate Reuben James, who had distinguished himself fighting in the First Barbary War, and was the first US navy ship to be sunk by hostile action in the European Theater of World War II. Four US flagged merchant ships were also sunk by hostile action before the attack on Pearl Harbor."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1917,
   "text": "World War I: Allied forces defeated Turkish troops in Beersheba in Southern Palestine at the Battle of Beersheba, the battle involving one of the last successful cavalry charges.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1913,
   "text": "Public-transportation workers in Indianapolis went on strike (pictured), shutting down mass transit in the city.",
   "context": [
    "Indianapolis, colloquially known as Indy, is the capital and most populous city of the U.S. state of Indiana and the county seat of Marion County. Indianapolis is situated in the state's central till plain region along the west fork of the White River. The city's official slogan, \"Crossroads of America\", reflects its historic importance as a transportation hub and its relative proximity to other major North American markets."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1517,
   "text": "Martin Luther posted his Ninety-five Theses onto the door of All Saints' Church in Wittenberg, marking the beginning of the Protestant Reformation.",
   "context": [
    "Martin Luther was a German priest, theologian, author, hymnwriter, professor, and former Augustinian friar. Luther was the seminal figure of the Protestant Reformation, and his theological beliefs form the basis of Lutheranism. He is considered one of the most influential figures in Western and Christian history."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 475,
   "text": "Romulus Augustulus took the throne as the last emperor of the Western Roman Empire.",
   "context": [
    "Romulus Augustus, nicknamed Augustulus, was Roman emperor of the West from 31 October 475 until 4 September 476. Romulus was placed on the imperial throne while still a minor by his father Orestes, the magister militum, for whom he served as little more than a figurehead. After a rule of ten months, the barbarian general Odoacer defeated and killed Orestes and deposed Romulus. As Odoacer did not proclaim any successor, Romulus is typically regarded as the last Western Roman emperor, his deposition marking the end of the Western Roman Empire as a political entity. The deposition of Romulus Augustulus is also sometimes used by historians to mark the transition from antiquity to the medieval period."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Priced in (כבר מגולם במחיר)"
 ]
}
</input>