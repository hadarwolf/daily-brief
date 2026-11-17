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
   "text": "Tatarstan Airlines Flight 363 crashed during an aborted landing at Kazan International Airport, Russia, killing all 50 people on board and leading to the revocation of the airline's operating certificate.",
   "context": [
    "Tatarstan Airlines Flight 363 was a scheduled domestic passenger flight, operated by Tatarstan Airlines on behalf of Ak Bars Aero, from Moscow to Kazan, Russia. On 17 November 2013, at 19:24 local time (UTC+4), the Boeing 737-500 crashed during an aborted landing at Kazan International Airport, killing all 44 passengers and 6 crew members on board."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2013,
   "text": "An outbreak of 77 confirmed tornadoes occurred in seven U.S. states; it became the largest November tornado outbreak in Illinois and Indiana.",
   "context": [
    "On November 17, 2013, the deadliest and costliest November tornado outbreak in Illinois history took shape, becoming the fourth-largest for the state overall. With more than 30 tornadoes in Indiana, it was that state's largest tornado outbreak for the month of November, and the second largest outbreak recorded in Indiana. Associated with a strong trough in the upper levels of the atmosphere, the event resulted in 77 tornadoes tracking across regions of the Midwest United States and Ohio River Valley, impacting seven states. Severe weather during the tornado outbreak caused over 100 injuries and eleven fatalities, of which eight were tornado related. Two tornadoes—both in Illinois and rated EF4 on the Enhanced Fujita scale—were the strongest documented during the outbreak and combined for five deaths. In addition to tornadoes, the system associated with the outbreak produced sizeable hail peaking at 4.00 in (10.2 cm) in diameter in Bloomington, Illinois, as well as damaging winds estimated as strong as 100 mph (160 km/h) in three locations."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2009,
   "text": "Administrators at the University of East Anglia's Climatic Research Unit discovered that their servers had been hacked, and thousands of emails and files on climate change had been stolen.",
   "context": [
    "The University of East Anglia (UEA) is a public research university in Norwich, England. Established in 1963 on a 360-acre (150-hectare) campus west of the city centre, the university has four faculties and twenty-six schools of study. It is one of five BBSRC funded research campuses, with forty businesses, four independent research institutes and a teaching hospital on site."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1997,
   "text": "Sixty-two people were killed by Islamist terrorists outside Deir el-Bahari (temple pictured) in Luxor, one of Egypt's top tourist attractions.",
   "context": [
    "The Luxor massacre was a terrorist attack that occurred on 17 November 1997 in Egypt. It was perpetrated by al-Jama'a al-Islamiyya and resulted in the deaths of 62 people, most of whom were tourists. It took place at Dayr al-Bahri, an archaeological site located across the Nile from the city of Luxor."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1989,
   "text": "Walt Disney Pictures released The Little Mermaid to theatres, beginning the Disney Renaissance.",
   "context": [
    "Walt Disney Pictures is an American film production company that is a division of the Walt Disney Studios, a division of Disney Entertainment, which is owned by the Walt Disney Company. Founded on October 16, 1923, the studio is the flagship producer of live-action feature films within the Walt Disney Studios unit and is based at the Walt Disney Studios in Burbank, California. Animated films produced by Walt Disney Animation Studios and Pixar Animation Studios are also released under the studio banner. Walt Disney Studios Motion Pictures distributes and markets the films produced by Walt Disney Pictures."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1968,
   "text": "NBC controversially cut away from an American football game between the Oakland Raiders and New York Jets to broadcast Heidi, causing viewers in the Eastern United States to miss the game's dramatic ending.",
   "context": [
    "The National Broadcasting Company (NBC) is an American commercial broadcast television network, serving as the flagship property of NBC Entertainment, a division of NBCUniversal, which is a subsidiary of Comcast. It is one of NBCUniversal's two flagship namesake properties, alongside Universal Studios. It is the first and oldest major broadcast network in the United States."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1950,
   "text": "The 14th Dalai Lama (pictured) assumed full temporal power as ruler of Tibet at the age of 15.",
   "context": [
    "The 14th Dalai Lama is the current Dalai Lama, the highest spiritual leader and head of Tibetan Buddhism. He served as the resident spiritual and temporal leader of Tibet before 1959, and subsequently led the Tibetan government in exile represented by the Central Tibetan Administration in Dharamshala, India."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1943,
   "text": "World War II: Australian forces launched an assault on Sattelberg, New Guinea, against Japanese forces, initiating the Battle of Sattelberg.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1941,
   "text": "World War II: Hjalmar Siilasvuo ordered Finnish forces to halt their assault against Soviet forces near Salla, concluding Operation Arctic Fox.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1921,
   "text": "Rioting broke out in Bombay, India, during the visit of Edward, Prince of Wales, leading to at least 58 deaths.",
   "context": [
    "The Prince of Wales riots occurred in Bombay, British India, between 17 and 20 November 1921 during the visit of Edward, Prince of Wales. The visit came during the non-cooperation movement protests for Indian self-rule, led by Mahatma Gandhi and the Indian National Congress. Gandhi had allied the mainly-Hindu Congress with the Muslim Khilafat Movement, who were concerned about the possibility that the British might depose the Ottoman Caliph. Gandhi called for his supporters to boycott the prince's visit and carry out a general strike (hartal)."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1796,
   "text": "French Revolutionary Wars: French forces won the Battle of Arcole in a manoeuvre to cut the Austrians' line of retreat.",
   "context": [
    "The French Revolutionary Wars were a series of sweeping military conflicts resulting from the French Revolution that lasted from 1792 until 1802. They pitted France against Great Britain, Austria, Prussia, Russia, and several other countries. The wars are divided into two periods: the War of the First Coalition (1792–1797) and the War of the Second Coalition (1798–1802). Initially confined to Europe, the fighting gradually assumed a global dimension. After a decade of constant warfare and aggressive diplomacy, France had conquered territories in the Italian peninsula, the Low Countries, and the Rhineland with its very large and powerful military which had been totally mobilized for war against most of Europe with mass conscription of the vast French population. French success in these conflicts ensured military occupation and the spread of revolutionary principles over much of Europe."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1592,
   "text": "Sigismund III Vasa, who was already King of Poland, succeeded his father John III as King of Sweden.",
   "context": [
    "Sigismund III Vasa was King of Poland and Grand Duke of Lithuania from 1587 to 1632 and, as Sigismund, King of Sweden from 1592 to 1599. He was the first Polish sovereign from the House of Vasa. Zealously religious, he imposed Catholicism across the vast realm, and his crusades against neighbouring states marked Poland's largest territorial expansion. A deeply polarising ruler, he presided over the end of the Golden Age of prosperity and achievement, further distinguished by the transfer of the country's capital from Kraków to Warsaw."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1558,
   "text": "Elizabeth I (pictured) became Queen of England and of Ireland, marking the beginning of the Elizabethan era.",
   "context": [
    "Elizabeth I was Queen of England and Ireland from 17 November 1558 until her death in 1603. She was the last and longest reigning monarch of the House of Tudor. Her eventful reign, and its effect on history and culture, gave name to the Elizabethan era."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1292,
   "text": "John Balliol was chosen to be King of Scots over Robert de Brus.",
   "context": [
    "John (de) Balliol, known derisively as Toom Tabard, was King of Scots from 1292 to 1296. Little is known of his early life. After the death of Margaret, Maid of Norway, Scotland entered an interregnum during which several competitors for the Crown of Scotland put forward claims. Balliol was chosen from among them as the new King of Scotland by a group of selected noblemen headed by King Edward I of England."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Moral hazard (סיכון מוסרי)",
  "Melt-up (עלייה קדחתנית)",
  "Betting the farm (להמר על הכל)",
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
  "Death by a thousand cuts (מוות באלף חתכים)"
 ]
}
</input>