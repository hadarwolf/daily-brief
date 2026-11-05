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
   "text": "The Indian Space Research Organisation launched the Mars Orbiter Mission, India's first interplanetary probe.",
   "context": [
    "The Indian Space Research Organisation is the national space agency of India, headquartered in Bengaluru, Karnataka. It serves as the principal research and development arm of the Department of Space (DoS), overseen by the Prime Minister of India, with the Chairman of ISRO also working as the chief executive of the DoS. It is primarily responsible for space-based operations, space exploration, international space cooperation and the development of related technologies. The agency maintains a constellation of imaging, communications and remote sensing satellites. It operates the satellite navigation systems such as GAGAN and NavIC. It has sent three missions to the Moon and one mission to Mars."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "U.S. Army major Nidal Hasan went on a shooting rampage at Fort Hood, Texas, the worst shooting ever to take place on an American military base, killing 13.",
   "context": [
    "The United States Army is the land service branch of the United States Armed Forces. It is designated as the army of the United States in the United States Constitution. As a part of the United States Department of War, it is one of the six armed forces of the United States and one of the eight uniformed services of the United States. Founded in 1784, it succeeded the Continental Army, formed in 1775 during the American Revolutionary War."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2003,
   "text": "American serial killer Gary Ridgway pleaded guilty to 48 counts of first-degree murder.",
   "context": [
    "Gary Leon Ridgway, known as the Green River Killer or the Green River Strangler, is an American serial killer who was convicted of murdering forty-nine women between 1982 and 1998 in the northwestern United States. At the time of his arrest in 2001, he was believed to be the most prolific serial killer in United States history, according to confirmed murders."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1995,
   "text": "Aline Chrétien (pictured) thwarted André Dallaire's attempt to assassinate her husband, Canadian prime minister Jean Chrétien, by locking the bedroom door in 24 Sussex Drive, their official residence in Ottawa.",
   "context": [
    "Aline Chrétien was the wife of Canada's 20th prime minister, Jean Chrétien. She previously worked as a secretary, payroll manager, and model. In her later life, she was a trained pianist with The Royal Conservatory of Music."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1990,
   "text": "Israeli ultra-nationalist rabbi Meir Kahane (pictured) was assassinated in a New York City hotel by an Arab gunman.",
   "context": [
    "Ultranationalism, or extreme nationalism, is an extremist form of nationalism in which a country asserts or maintains hegemony, supremacy, or other forms of control over other nations, to pursue its specific interests. Ultranationalist entities have been associated with the engagement of political violence even during peacetime."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1952,
   "text": "An earthquake struck the Kamchatka Peninsula, triggering a major tsunami that affected the Kuril Islands and other parts of the Pacific Ocean.",
   "context": [
    "The 1952 Severo-Kurilsk earthquake struck off the coast of the Kamchatka Peninsula. The Mw 8.8–9.0 earthquake occurred on 5 November 1952 at 04:58 local time, triggering a major tsunami that struck the Kuril Islands and the Kamchatka Peninsula within the Russian SFSR in the Soviet Union. This led to the destruction of many settlements in Sakhalin Oblast and Kamchatka Oblast, while the main impact struck the town of Severo-Kurilsk. It remains the most powerful earthquake ever recorded in Russia and the fifth most powerful earthquake ever recorded in the world since modern seismography began in 1900. It was also the deadliest and most damaging tsunami recorded in Russia."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1950,
   "text": "Korean War: The 27th British Commonwealth Brigade succeeded in preventing a Chinese breakthrough at the Battle of Pakchon.",
   "context": [
    "The Korean War was an armed conflict fought on the Korean Peninsula between North Korea and South Korea and their allies. North Korea was supported by China and the Soviet Union, while South Korea was supported by the United Nations led by the United States under the auspices of the United Nations Command (UNC)."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1944,
   "text": "World War II: Allied forces began a military campaign on Japanese-occupied Singapore.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1943,
   "text": "World War II: An unknown aircraft dropped four bombs on Vatican City, which maintained neutrality during the war.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1916,
   "text": "An armed confrontation in Everett, Washington, between local authorities and members of the Industrial Workers of the World resulted in seven deaths.",
   "context": [
    "The Everett massacre, also known as Bloody Sunday, was an armed confrontation between local authorities and members of the Industrial Workers of the World (IWW) union, commonly called \"Wobblies\", in Everett, Washington, United States on November 5, 1916. The event happened amidst a time of rising tensions in Pacific Northwest labor history."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1854,
   "text": "Crimean War: Despite being severely outnumbered, and fighting in heavy foggy conditions, the allied armies of the United Kingdom and France defeated the Russians in present-day Inkerman, Ukraine.",
   "context": [
    "The Crimean War was fought between Russia and an alliance of the Ottoman Empire, France, the United Kingdom, and Sardinia from October 1853 to February 1856. Geopolitical causes of the war included the Eastern question, the expansion of Russia in the preceding Russo-Turkish wars, and the British and French preference to preserve the Ottoman Empire to maintain the balance of power in the Concert of Europe."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1757,
   "text": "Seven Years' War: Prussian forces led by Frederick the Great defeated the allied French and Habsburg armies at the Battle of Rossbach.",
   "context": [
    "The Seven Years' War, 1756 to 1763, was a global conflict fought by numerous great powers, primarily in Europe, with significant subsidiary campaigns in North America and the Indian subcontinent. The primary warring states were Great Britain and Prussia fighting against France and Austria, with other countries joining these coalitions: Portugal, Spain, Sweden, and Russia, plus Saxony and many other minor states of the Holy Roman Empire. Related conflicts include the Third Silesian War, French and Indian War, Third Carnatic War, Anglo-Spanish War (1762–1763), and Spanish–Portuguese War."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1605,
   "text": "The arrest of Guy Fawkes, found during a search of the Palace of Westminster, foiled the Gunpowder Plot, which planned to blow up the House of Lords.",
   "context": [
    "Guy Fawkes, also known as Guido Fawkes while fighting for the Spanish, was a member of a group of provincial English Catholics involved in the failed Gunpowder Plot of 1605. He was born and educated in York; his father died when Fawkes was eight years old, after which his mother married a recusant Catholic."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1556,
   "text": "At the Second Battle of Panipat, forces of the Mughal emperor Akbar captured Hemu, the Hindu emperor of north India.",
   "context": [
    "The Second Battle of Panipat was fought on 5 November 1556, between the Mughals under Akbar and king Hemu, titularly known as Hemchandra Vikramaditya. Hemchandra had conquered Delhi and Agra a few weeks earlier by defeating Mughal forces under Tardi Beg Khan in the Battle of Delhi. He crowned himself Vikramaditya at Purana Quila in Delhi."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1138,
   "text": "Lý Anh Tông was enthroned as the emperor of Đại Việt at the age of two, beginning a 37-year reign.",
   "context": [
    "Emperor Lý Anh Tông of Đại Việt was the sixth emperor of the later Lý dynasty in Vietnamese history, from 1138 until his death in 1175. Since Lý Anh Tông, given name Lý Thiên Tộ, was chosen as the successor of his father Lý Thần Tông at the age of only two, the early period of his reign witnessed the dominant position of Đỗ Anh Vũ in the royal court until he died in 1157; afterwards, the Emperor ruled the country with the assistance of a prominent official named Tô Hiến Thành. The reign of Lý Anh Tông was considered the last relatively stable period of the Lý dynasty before the turbulence during the reign of Lý Cao Tông."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Bet the farm (להמר על הכל)"
 ]
}
</input>