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
   "year": 2008,
   "text": "Lewis Hamilton overtook Timo Glock in the final corners of the Brazilian Grand Prix to become the Formula One World Drivers' Champion by one point.",
   "context": [
    "Sir Lewis Carl Davidson Hamilton is a British racing driver who competes in Formula One for Ferrari. Hamilton has won a joint-record seven Formula One World Drivers' Championship titles—tied with Michael Schumacher—and holds the records for most wins (106), pole positions (105), and podium finishes (209), among others."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2000,
   "text": "As members of Expedition 1, American astronaut William Shepherd and Russian cosmonauts Sergei Krikalev and Yuri Gidzenko (all pictured) became the first resident crew to arrive at the International Space Station.",
   "context": [
    "Expedition 1 was the first long-duration expedition to the International Space Station (ISS). The three-person crew stayed aboard the station for 136 days, from 2 November 2000 to 19 March 2001. It was the beginning of an uninterrupted human presence on the station which continues as of 2026."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1997,
   "text": "Tropical Storm Linda made landfall in the Mekong Delta in Vietnam, causing more than 3,000 deaths.",
   "context": [
    "Severe Tropical Storm Linda, also known as Typhoon Linda, Cyclonic Storm Linda , or in the Philippines as Tropical Depression Openg, and in Vietnam as Typhoon No. 5 of 1997 was the worst typhoon in southern Vietnam in at least 100 years, killing thousands of people and leaving extensive damage. It formed on October 31, 1997, in the South China Sea, between Indochina and the Philippines. Strengthening as it moved westward, Linda struck extreme southern Vietnam on November 2 with winds of 65 mph (105 km/h), dropping heavy rainfall. Once in the Gulf of Thailand it strengthened further to minimal typhoon status, but weakened to tropical storm strength before crossing the Malay Peninsula into the Bay of Bengal, the first storm to do so in five years. It restrengthened in the Indian Ocean to typhoon status, but increasing wind shear and weakened steering currents caused Linda to dissipate on November 9."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1994,
   "text": "A lightning strike ruptured three oil tanks near Dronka, Egypt, causing a flood that killed 469 people.",
   "context": [
    "On 2 November 1994, a lightning strike ignited three diesel and aircraft fuel tanks belonging to the Egyptian Army strategic reserve near the village of Durunka, Asyut Governorate in Egypt. The lightning was part of a severe storm that caused heavy flash flooding and widespread damage in four governorates in Upper Egypt leading to hundreds of deaths and tens of thousands of people made homeless in one of Egypt's worst urban disasters. The flooding compounded with the lightning strike meant flaming oil leaked from the tanks and was carried by floodwater into the village. More than 200 houses were destroyed and 469 people killed."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1984,
   "text": "Velma Barfield, a convicted serial killer, became the first woman to be executed in the United States since 1962.",
   "context": [
    "Margie Velma Barfield was an American serial killer who was convicted of one murder but was linked to seven murders in total. She became the first woman in the United States to be executed after the resumption of capital punishment in 1976, and the first since 1962. She was also the first woman to be executed by lethal injection."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1963,
   "text": "South Vietnamese president Ngô Đình Diệm (pictured) was arrested and assassinated in Saigon, marking the culmination of a coup d'état led by Dương Văn Minh.",
   "context": [
    "The Republic of Vietnam, commonly known as South Vietnam, was a country in Southeast Asia that existed from 1955 to 1975. It first garnered recognition in 1949 as the associated State of Vietnam within the French Union, with its capital at Saigon. Since 1950, it was a member of the Western Bloc during the Cold War. Following the 1954 partition of Vietnam, it became known as South Vietnam and was established as a republic in 1955. Although South Vietnam failed to gain admission into the United Nations as a result of a Soviet veto in 1957, its sovereignty was recognized by 95 countries as of January 1975. It was succeeded by the communist-controlled Republic of South Vietnam in 1975. In 1976, North Vietnam and the Republic of South Vietnam merged to form the Socialist Republic of Vietnam."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1957,
   "text": "A large number of people witnessed a fiery object in the sky near Levelland, Texas, which the United States Air Force said was ball lightning.",
   "context": [
    "The Levelland UFO case refers to UFOs reportedly seen around highways near Levelland, Texas on 2–3 November 1957. Both the US Air Force and UFO skeptics concluded that the reports were caused by either ball lightning or a severe electrical storm. Ufologists believe it represents the most impressive case in UFO history, mainly because of the large number of witnesses involved over a relatively short period of time."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1949,
   "text": "The Dutch–Indonesian Round Table Conference ended with the Netherlands agreeing to transfer sovereignty of the Dutch East Indies to the United States of Indonesia.",
   "context": [
    "The Dutch–Indonesian Round Table Conference was held in The Hague from 23 August to 2 November 1949, between representatives of the Kingdom of the Netherlands, the Republic of Indonesia and the Federal Consultative Assembly, representing various states the Dutch had created in the Indonesian archipelago."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1943,
   "text": "World War II: A U.S. Navy task force turned away an Imperial Japanese Navy formation at the Battle of Empress Augusta Bay, thus protecting the landings at Cape Torokina.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1932,
   "text": "The Australian military began a \"war against emus\", flightless native birds blamed for widespread damage to crops in Western Australia.",
   "context": [
    "The Australian Defence Force (ADF) is the military organisation responsible for the defence of Australia and its national interests. It consists of three services: the Royal Australian Navy (RAN), the Australian Army and the Royal Australian Air Force (RAAF). The ADF has a strength of just over 90,000 personnel and is supported by the Department of Defence and other civilian entities that altogether constitute the Australian Defence Organisation."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1917,
   "text": "The British government issued the Balfour Declaration in support of a Jewish homeland in Palestine, then an Ottoman region with a small Jewish minority.",
   "context": [
    "The Balfour Declaration was a public statement issued by the British Government in 1917 during the First World War announcing its support for the establishment of a \"national home for the Jewish people\" in Palestine, then an Ottoman region with a small Jewish minority among an overwhelming Arab majority, mostly Muslim but also including Christians. The declaration was contained in a letter dated 2 November 1917 from Arthur Balfour, the British foreign secretary, to Lord Rothschild, a leader of the British Jewish community, for transmission to the Zionist Federation of Great Britain and Ireland. The text of the declaration was published in the press on 9 November 1917."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1880,
   "text": "James A. Garfield was elected as president of the United States; the election is the closest to date by popular vote margin.",
   "context": [
    "James Abram Garfield was the 20th president of the United States, serving from March 1881 until his death in September that year after being shot in July. A preacher, lawyer, and Civil War general, Garfield served nine terms in the United States House of Representatives and is the only sitting member of the House to be elected president. Before he ran for president, the Ohio General Assembly had elected him to the U.S. Senate, a position he declined upon becoming president-elect."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Cook the books (לזייף דוחות כספיים)",
  "Golden handcuffs (אזיקי זהב)",
  "Secular trend (מגמה מבנית)",
  "Skin in the game (עניין אישי בתוצאה)",
  "Run-rate (קצב שנתי מוערך)",
  "Kitchen-sink quarter (רבעון של ניקוי ארונות)",
  "Move the needle (להזיז את המחוג)"
 ]
}
</input>