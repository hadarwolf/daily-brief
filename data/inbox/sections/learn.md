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
   "year": 2016,
   "text": "Syrian civil war: The Syrian Democratic Forces launched a successful military campaign to isolate and eventually capture Raqqa, the Islamic State's capital.",
   "context": [
    "The Syrian civil war was an armed conflict that began with the Syrian revolution in March 2011, when popular discontent with the Ba'athist regime ruled by Bashar al-Assad triggered large-scale protests and pro-democracy rallies across Syria, as part of the wider Arab Spring. The Assad regime responded to the protests with lethal force, which led to a series of defections, the emergence of armed opposition groups, and the civilian uprising descending into a civil war. The war lasted almost 14 years and culminated in the fall of the Assad regime in December 2024. Many sources regard this as the end of the civil war even though clashes have continued into 2026."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2012,
   "text": "Tammy Baldwin became the first openly gay politician to be elected to the United States Senate.",
   "context": [
    "Tammy Suzanne Green Baldwin is an American politician and lawyer serving since 2013 as the junior United States senator from Wisconsin. A member of the Democratic Party, she has also served as the secretary of the Senate Democratic Caucus since 2017. Baldwin has been the dean of the United States congressional delegation from Wisconsin since 2023, when Representative Ron Kind retired."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2004,
   "text": "A man committing suicide parked his car on the railway tracks in Ufton Nervet, Berkshire, England, causing a derailment that also killed six people on the train.",
   "context": [
    "Ufton Nervet is a village and civil parish in West Berkshire, England centred 6 miles (10 km) west southwest of the large town of Reading and 7 miles\neast of Thatcham. Ufton Nervet has an elected civil parish council."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1988,
   "text": "Two earthquakes occurring 12 minutes apart struck Yunnan near the China–Myanmar border, killing more than 730 people.",
   "context": [
    "On 6 November 1988, two earthquakes struck Lancang and Gengma counties, Yunnan, near the China–Myanmar border. The first earthquake measured moment magnitude (Mw) 7.0, occurring at 21:03 CST. Twelve minutes later, a Mw 6.9 earthquake occurred about 60 km (37 mi) to north–northwest. They were caused by movement along the Lancang–Gengma Fault Zone, a 210 km (130 mi) long right-lateral strike-slip fault. Both earthquakes generated oblique-normal surface ruptures with larger displacements reported following the second event."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1977,
   "text": "The Kelly Barnes Dam in Stephens County, Georgia, collapsed; the resulting flood killed 39 people and caused US$2.8 million in damages.",
   "context": [
    "Kelly Barnes Dam was an earthen embankment dam on Toccoa Creek in Stephens County, Georgia, United States, just outside the city of Toccoa. Heavy rainfall caused it to collapse on November 6, 1977, and the resulting flood killed 39 people and caused $2.8 million in damage. The dam was never rebuilt."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1963,
   "text": "Nguyễn Ngọc Thơ was appointed by the junta of General Dương Văn Minh to head the South Vietnamese government, five days after Minh deposed and assassinated President Ngô Đình Diệm.",
   "context": [
    "Nguyễn Ngọc Thơ was a South Vietnamese politician who was the first vice president of South Vietnam, serving under President Ngô Đình Diệm from 1956 until Diệm's overthrow and assassination in 1963. He also served as the first prime minister of South Vietnam, serving from November 1963 to late January 1964. Thơ was appointed to head a civilian cabinet by the military junta of General Dương Văn Minh, which came to power after overthrowing and assassinating Diệm, the nation's first president. Thơ's rule was marked by a period of confusion and weak government, as the Military Revolutionary Council (MRC) and the civilian cabinet vied for power. Thơ lost his job and retired from politics when Minh's junta was deposed in a January 1964 coup by General Nguyễn Khánh."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1944,
   "text": "The B Reactor at the Hanford Site in the U.S. state of Washington began producing plutonium, with the facility later going on to create more for nearly the entire American nuclear arsenal.",
   "context": [
    "The B Reactor at the Hanford Site, near Richland, Washington, was the first large-scale nuclear reactor ever built, at 250 MW. It achieved criticality on September 26, 1944. This reactor was of vital importance to the Manhattan Project, the United States nuclear weapons development program during World War II. Its purpose was to convert part of its natural uranium fuel into plutonium-239 by neutron activation, for use in nuclear weapons. Pure plutonium was then chemically separated at the site's T Plant, as an alternative to the Project's uranium enrichment plants in Tennessee. The B reactor was graphite moderated and water-cooled, via a contaminating open cycle with the Columbia River."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1939,
   "text": "As part of their plan to eradicate the Polish intellectual elite, the Gestapo arrested 184 professors, students and employees of the Jagiellonian University (location pictured) in Kraków.",
   "context": [
    "The Intelligenzaktion (German pronunciation: [ɪntɛliˈɡɛnt͡s.akˌt͡sjoːn] was a series of mass murders committed against the Polish intelligentsia during the early years of the Second World War by Nazi Germany. The Germans conducted the operations in accordance with their plan to Germanize the western regions of occupied Poland, before their territorial annexation to the German Reich."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1924,
   "text": "The Spanish anarchist group Los Solidarios unsuccessfully attempted to launch an insurrection against the dictatorship of Miguel Primo de Rivera.",
   "context": [
    "Los Solidarios was a Spanish anarchist militant group, established in 1922 to combat the rise of pistolerismo and yellow syndicalism, which represented the interests of business owners. At first, the group organised the Catalan anarchist movement, stockpiled weapons and infiltrated the Spanish Armed Forces. Following the assassination of Salvador Seguí, the general secretary of the anarchist trade union centre, the Confederación Nacional del Trabajo (CNT), the group initiated its own campaign of targeted assassinations against officials who they held responsible for state terrorism. In 1923, Los Solidarios assassinated pistolero leader Ramón Laguía, the former governor of Biscay Fernando González Regueral, and the Archbishop of Zaragoza Juan Soldevila. As news began to spread of an impending military coup in the country, Los Solidarios sought to acquire weapons in order to resist the coup. The group robbed a branch of the Bank of Spain in Xixón and used the money to buy rifles, but were ultimately unable to stop the 1923 Spanish coup d'état, which resulted in the establishment of the Dictatorship of Primo de Rivera."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1917,
   "text": "First World War: Canadian forces captured Passendale, Belgium, after three months of fighting against the Germans at the Battle of Passchendaele.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1868,
   "text": "Sioux Wars: Red Cloud (pictured), a Native American leader of the Oglala Lakota tribe, signed the Treaty of Fort Laramie, ending Red Cloud's War and establishing the Great Sioux Reservation.",
   "context": [
    "The Sioux Wars were a series of conflicts between the United States and various subgroups of the Sioux people which occurred in the later half of the 19th century. The earliest conflict came in 1854 when a fight broke out at Fort Laramie in Wyoming, when Sioux warriors killed 31 American soldiers in the Grattan Massacre, and the final came in 1890 during the Ghost Dance War."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1863,
   "text": "American Civil War: A Union brigade defeated a Confederate force at the Battle of Droop Mountain in Pocahontas County, West Virginia.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860 and the growing abolitionist movement in the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1856,
   "text": "The first story from the collection Scenes of Clerical Life by the English author George Eliot was submitted for publication.",
   "context": [
    "Scenes of Clerical Life is an 1858 collection of three short stories, published in book form, by George Eliot; it was Eliot's first published work of fiction and the first of her works to be released under her famous pseudonym. The stories were first published in Blackwood's Magazine over the course of the year 1857, initially anonymously, before being released as a two-volume set by Blackwood and Sons in January 1858. The three stories are set during the last twenty years of the eighteenth century and the early nineteenth century over a fifty-year period. The stories take place in and around the fictional town of Milby in the English Midlands. Each of the Scenes concerns a different Anglican clergyman, but is not necessarily centred upon him. Eliot examines, among other things, the effects of religious reform and the tension between the Established and the Dissenting Churches on the clergymen and their congregations, and draws attention to various social issues, such as poverty, alcoholism and domestic violence."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1794,
   "text": "French Revolutionary Wars: Two British ships were intercepted by a French squadron, leading to the French seizure of HMS Alexander.",
   "context": [
    "The French Revolutionary Wars were a series of sweeping military conflicts resulting from the French Revolution that lasted from 1792 until 1802. They pitted France against Great Britain, Austria, Prussia, Russia, and several other countries. The wars are divided into two periods: the War of the First Coalition (1792–1797) and the War of the Second Coalition (1798–1802). Initially confined to Europe, the fighting gradually assumed a global dimension. After a decade of constant warfare and aggressive diplomacy, France had conquered territories in the Italian peninsula, the Low Countries, and the Rhineland with its very large and powerful military which had been totally mobilized for war against most of Europe with mass conscription of the vast French population. French success in these conflicts ensured military occupation and the spread of revolutionary principles over much of Europe."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1217,
   "text": "King Henry III of England issued the Charter of the Forest, re-establishing the rights of access of free men to royal forests.",
   "context": [
    "Henry III, also known as Henry of Winchester, was King of England, Lord of Ireland and Duke of Aquitaine from 1216 until his death in 1272."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Moving the goalposts (להזיז את השער)"
 ]
}
</input>