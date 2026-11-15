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
   "year": 2012,
   "text": "Xi Jinping replaced Hu Jintao as General Secretary of the Chinese Communist Party, succeeding as the paramount leader of China.",
   "context": [
    "Xi Jinping is a Chinese politician who is the paramount leader of China. He has served as the general secretary of the Chinese Communist Party (CCP) and chairman of the Party Central Military Commission (CMC) since 2012, and as the president of China and chairman of the State Central Military Commission since 2013."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2000,
   "text": "Edoardo Agnelli, son of the industrialist patriarch Gianni Agnelli, was found dead under a bridge on the outskirts of Turin, Italy.",
   "context": [
    "Edoardo Agnelli, also known as Mahdi Agnelli, was the eldest child and only son of Gianni Agnelli, the industrialist patriarch of Fiat S.p.A., and of Marella Agnelli, who was born Donna Marella Caracciolo di Castagneto. He converted to Islam when he was living in New York City, and changed his name; he ultimately converted to Shia Islam in the 90s. In mid-November 2000, he was found dead under a bridge on the outskirts of Turin."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1988,
   "text": "The Soviet spacecraft Buran (pictured), a reusable vehicle built in response to NASA's Space Shuttle program, was launched, uncrewed, on its only flight.",
   "context": [
    "Buran was the first flight orbiter to be produced as part of the Soviet/Russian Buran programme. The Buran orbiters were similar in design to the U.S. Space Shuttle. Buran completed one uncrewed spaceflight in 1988, and was destroyed in 2002 when the roof of its storage hangar collapsed at Baikonur Cosmodrome."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1959,
   "text": "Two men murdered a family in Holcomb, Kansas; the events became the subject of Truman Capote's non-fiction novel In Cold Blood, a pioneering work of the true crime genre.",
   "context": [
    "In the early morning of November 15, 1959, four members of the Clutter family – Herb Clutter, his wife, Bonnie, and their teenage children Nancy and Kenyon – were murdered in their rural home just outside the small farming community of Holcomb, Kansas, United States. Two ex-convicts, Perry Smith and Richard Hickock, were found guilty of the murders and sentenced to death. They were both executed on April 14, 1965. The murders were detailed by Truman Capote in his 1966 non-fiction novel In Cold Blood."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1943,
   "text": "The Holocaust: In the Romani Holocaust, Nazi official Heinrich Himmler ordered that the Romani were to be put \"on the same level as Jews and placed in concentration camps\".",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1922,
   "text": "Fountain of Time, in Chicago's Washington Park, was dedicated as a tribute to 100 years of peace between the United States and Great Britain following the Treaty of Ghent.",
   "context": [
    "Fountain of Time, or simply Time, is a sculpture by Lorado Taft, measuring 126 feet 10 inches (38.66 m) in length, situated at the western edge of the Midway Plaisance within Washington Park in Chicago, Illinois, in the United States. The sculpture is inspired by Henry Austin Dobson's poem \"Paradox of Time\". Its 100 figures passing before Father Time were created as a monument to the 100 years of peace between the United States and the United Kingdom following the Treaty of Ghent in 1814. Father Time faces the 100 from across a water basin. The fountain's water was turned on in 1920, and the sculpture was dedicated in 1922. It is a contributing structure to the Washington Park United States Registered Historic District, which is a National Register of Historic Places listing."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1922,
   "text": "During a general strike in Guayaquil, Ecuador, police and military fired into a crowd, killing at least 300 people.",
   "context": [
    "The 1922 Guayaquil general strike was a three-day general work stoppage in the city of Guayaquil, Ecuador, which lasted from 13 to 15 November of that year. The strike began with trolley, electric company and other public utility workers who were inspired by a successful strike by railroad workers in nearby Durán. Workers made demands such as pay increases, shorter hours, safer working conditions, and government control of foreign currency exchange rates."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1908,
   "text": "After numerous atrocities in the territory, the Congo Free State was annexed to Belgium to form the Belgian Congo.",
   "context": [
    "From 1885 to 1908, many atrocities were committed in the Congo Free State under the absolute rule of King Leopold II of Belgium. These atrocities were particularly associated with the labour policies, enforced by colonial administrators, used to collect natural rubber for export. Combined with epidemic disease, famine, mass population displacement, and falling birth rates caused by these disruptions, the atrocities contributed to a sharp decline in the Congolese population. These atrocities have sometimes been described as a genocide, though this characterization is disputed. Modern estimates of the magnitude of the population decline ranges from 1.2 million to 10 million people."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1889,
   "text": "Brazilian emperor Pedro II was overthrown in a coup led by Deodoro da Fonseca (pictured), while the country was proclaimed a republic.",
   "context": [
    "Dom Pedro II, known as \"the Magnanimous\", was the second and final emperor of the Empire of Brazil. He reigned from 1831 until his deposition in the military coup of 1889, presiding over the longest and most stable reign in Brazilian history."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1864,
   "text": "American Civil War: Union army general William Tecumseh Sherman (pictured) began his March to the Sea, inflicting significant damage to property and infrastructure using scorched-earth tactics on his way from Atlanta to Savannah, Georgia.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1859,
   "text": "Sponsored by Greek businessman Evangelos Zappas, the first modern revival of the Olympic Games took place in Athens.",
   "context": [
    "Evangelos or Evangelis Zappas was a Greek philanthropist and businessman who is recognized today as one of the founders of the modern Olympic Games, which were held in 1859, 1870, 1875, and 1888 and preceded the Olympic Games that came under the auspices of the International Olympic Committee. These Games, known at the time simply as Olympics, came before the founding of the International Olympic Committee itself. The legacy of Zappas, as well as the legacy of his cousin Konstantinos, was also used to fund the Olympic Games of 1896."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1760,
   "text": "The chapel of the newly constructed Castellania in Valletta, Malta, was consecrated.",
   "context": [
    "The Castellania, also known as the Castellania Palace, is a former courthouse and prison in Valletta, Malta that currently houses the country's health ministry. It was built by the Order of St. John between 1757 and 1760, on the site of an earlier courthouse which had been built in 1572."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 655,
   "text": "Penda of Mercia and Æthelhere of East Anglia were defeated by Oswiu of Northumbria at the Battle of the Winwaed in Yorkshire, England.",
   "context": [
    "Penda was a 7th-century king of Mercia, the Anglo-Saxon kingdom in what is today the Midlands. A pagan at a time when Christianity was taking hold in many of the Anglo-Saxon kingdoms, Penda took over the Severn Valley in 628 following the Battle of Cirencester before participating in the defeat of the powerful Northumbrian king Edwin at the Battle of Hatfield Chase in 633."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Death by a thousand cuts (מוות באלף חתכים)",
  "Hyperscaler (ספקית מיחשוב-על)",
  "Vendor financing (מימון מצד הספק)",
  "Too big to fail (גדול מכדי להיכשל)",
  "Junk bond (אג\"ח זבל)",
  "Debt maturity wall (קיר פירעונות)",
  "Rob Peter to pay Paul (לקחת מפיטר כדי לשלם לפול)"
 ]
}
</input>