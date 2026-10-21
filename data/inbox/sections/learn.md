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
   "year": 1994,
   "text": "North Korea and the United States signed the Agreed Framework to limit the former's nuclear weapons program and to normalize relations between the two countries.",
   "context": [
    "The Agreed Framework between the United States of America and the Democratic People's Republic of Korea (Korean: 북미제네바기본합의서) was signed on 21 October 1994, between North Korea (DPRK) and the United States. The objective of the agreement was the freezing and replacement of North Korea's indigenous nuclear power plant program with more nuclear proliferation resistant light water reactor power plants, and the step-by-step normalization of relations between the U.S. and the DPRK. Implementation of the agreement was troubled from the start, but its key elements were being implemented until it effectively broke down in 2003."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1994,
   "text": "In Seoul, South Korea, 32 people were killed and 17 others injured when a span of the Seongsu Bridge collapsed (pictured).",
   "context": [
    "Seoul, officially Seoul Special Metropolitan City, is the capital and largest city of South Korea, and the largest city in the whole of Korea. The broader Seoul Metropolitan Area, encompassing Seoul, Gyeonggi Province and Incheon, emerged as the world's sixth largest metropolitan economy in 2022, behind New York, Tokyo, Los Angeles, Paris, and London, and hosts more than half of South Korea's population. Although Seoul's population peaked at over 10 million, it has gradually decreased since 2014, standing at about 9.6 million residents as of 2024."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1968,
   "text": "At the height of the Japanese university protests, protesters occupied Shinjuku Station in Tokyo and clashed violently with police.",
   "context": [
    "In 1968 and 1969, student protests at several Japanese universities ultimately forced the closure of campuses across Japan. Known as daigaku funsō or daigaku tōsō, the protests were part of the worldwide protest cycle in 1968 and the late-1960s Japanese protest cycle, including the Anpo protests of 1970 and the struggle against the construction of Narita Airport. Students demonstrated initially against practical issues in universities and eventually formed the Zenkyōtō in mid-1968 to organize themselves. The Act on Temporary Measures concerning University Management allowed for the dispersal of protesters in 1969."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1966,
   "text": "A coal tip fell on the village of Aberfan, Wales, killing 144 people, mostly schoolchildren.",
   "context": [
    "A spoil tip is a pile built of accumulated spoil – waste material removed during mining. Spoil tips are not formed of slag, but in some areas, such as England and Wales, they are referred to as slag heaps and sometimes as pit heaps. In Scotland the word bing is used. In North American English the term is mine dump or mine waste dump."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1959,
   "text": "The Solomon R. Guggenheim Museum, designed by American architect Frank Lloyd Wright, opened in New York City.",
   "context": [
    "The Solomon R. Guggenheim Museum, often referred to as The Guggenheim, is an art museum at 1071 Fifth Avenue between 88th and 89th Streets on the Upper East Side of Manhattan in New York City. It hosts a permanent collection of Impressionist, Post-Impressionist, early Modern and contemporary art and also features special exhibitions throughout the year. It was established by the Solomon R. Guggenheim Foundation in 1939 as the Museum of Non-Objective Painting, under the guidance of its first director, Hilla von Rebay. The museum adopted its current name in 1952, three years after the death of its founder Solomon R. Guggenheim. It continues to be operated and owned by the Solomon R. Guggenheim Foundation."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1944,
   "text": "World War II: The three-week-long Battle of Aachen concluded, making the city the first on German soil to be captured by the Allies.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 70 to 85 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1941,
   "text": "World War II: German soldiers massacred nearly 2,800 Serbs in Kragujevac in reprisal for insurgent attacks in the district of Gornji Milanovac.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 70 to 85 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1910,
   "text": "HMS Niobe arrived in Halifax Harbour to become the first large ship of the Royal Canadian Navy.",
   "context": [
    "HMS Niobe was a ship of the Diadem class of protected cruisers in the Royal Navy. She served in the Boer War and was then given to Canada as the second ship of the newly created Naval Service of Canada as HMCS Niobe. The Naval Service of Canada became the Royal Canadian Navy in August 1911. The ship was nearly lost when she went aground off Cape Sable Island, Nova Scotia overnight 30–31 July 1911. Repairs were completed at the end of 1912 and the ship returned to service in late 1914. During the First World War, Niobe patrolled the approaches to the St. Lawrence River and then joined the Royal Navy's 4th Cruiser Squadron to patrol off New York City. The cruiser returned to Halifax, Nova Scotia on 17 July 1915 and never put to sea again. Niobe was paid off in September and served as a depot ship in Halifax. Damaged in the 1917 Halifax Explosion, she was sold for scrap and broken up in the 1920s."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1867,
   "text": "The first and second of three treaties were signed near Medicine Lodge, Kansas, between the United States federal government and several Native American tribes in the Great Plains, requiring them to relocate to areas in present-day western Oklahoma.",
   "context": [
    "The Medicine Lodge Treaty is the overall name for three treaties signed near Medicine Lodge, Kansas, between the Federal government of the United States and southern Plains Indian tribes in October 1867, intended to bring peace to the area by relocating the Native Americans to reservations in Indian Territory and away from European-American settlement. The treaty was negotiated after investigation by the Indian Peace Commission, which in its final report in 1868 concluded that the wars had been preventable. They determined that the United States government and its representatives, including the United States Congress, had contributed to the warfare on the Great Plains by failing to fulfill their legal obligations and to treat the Native Americans with honesty."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1858,
   "text": "French composer Jacques Offenbach's operetta Orpheus in the Underworld, featuring the music most associated with the can-can (audio featured), was first performed at the Théâtre des Bouffes-Parisiens in Paris.",
   "context": [
    "Jacques Offenbach was a German-born French composer, cellist and impresario. He is remembered for his nearly 100 operettas of the 1850s to the 1870s, and his uncompleted opera The Tales of Hoffmann. He was a powerful influence on later composers of the operetta genre, particularly Franz von Suppé, Johann Strauss II and Arthur Sullivan. His best-known works were continually revived during the 20th century, and many of his operettas continue to be staged in the 21st. The Tales of Hoffmann remains part of the standard opera repertory."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1854,
   "text": "Florence Nightingale and a staff of 38 nurses and 15 nuns were sent to the Ottoman Empire to help treat wounded British soldiers fighting in the Crimean War.",
   "context": [
    "Florence Nightingale was an English social reformer, statistician and the founder of modern nursing. Nightingale came to prominence while serving as a manager and trainer of nurses during the Crimean War, in which she organised care for wounded soldiers at Constantinople. She significantly reduced death rates by improving hygiene and living standards. Nightingale gave nursing a favourable reputation and became an icon of Victorian culture, especially in the persona of \"The Lady with the Lamp\" making ward rounds for wounded soldiers at night."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1345,
   "text": "Hundred Years' War: The English victory at the Battle of Auberoche marked a change in the military balance of power in Aquitaine, with the subsequent collapse of the French position.",
   "context": [
    "The Hundred Years' War was a series of conflicts between the kingdoms of England and France and a civil war in France during the late Middle Ages. It emerged from feudal disputes over the Duchy of Aquitaine and was triggered by a claim to the French throne made by Edward III of England. The war grew into a broader military, economic, and political struggle involving different factions from across Western Europe, fueled by emerging nationalism on both sides. The periodization of the war typically charts it as taking place over 116 years. However, it was an intermittent conflict which was frequently interrupted by external factors, such as the Black Death, and several years of truces."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1096,
   "text": "First Crusade: At the Battle of Civetot, the Seljuk forces of Kilij Arslan destroyed the army of the People's Crusade as it marched toward Nicaea.",
   "context": [
    "The First Crusade (1096–1099) was the first of a series of religious wars, or Crusades, which were initiated, supported and at times directed by the Latin Church in the Middle Ages. Their aim was to return the Holy Land to Christian rule after its conquest by the Rashidun Caliphate in the 7th century. By the 11th century, although Jerusalem had then been ruled by Muslims for hundreds of years, the practices of the Seljuk rulers in the region began to threaten local Christian populations, pilgrimages from the West, and the Byzantine Empire itself. The earliest impetus for the First Crusade came in 1095 when Byzantine emperor Alexios I Komnenos sent ambassadors to the Council of Piacenza to request military support in the empire's conflict with the Seljuk-led Turks. This was followed later in the year by the Council of Clermont, at which Pope Urban II gave a speech supporting the Byzantine request and urging faithful Christians to undertake an armed pilgrimage to Jerusalem."
   ]
  }
 ],
 "recent_words_and_concepts": [
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