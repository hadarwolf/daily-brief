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
   "year": 2023,
   "text": "Hibiscus Rising (pictured), a sculpture commemorating the life of David Oluwale, was unveiled in Leeds.",
   "context": [
    "Hibiscus Rising (2023) is an outdoor sculpture in Leeds, England, by artist Yinka Shonibare which was unveiled on 24 November 2023 as part of LEEDS 2023. It commemorates the life and death of David Oluwale, a British-Nigerian man whose death in 1969 involved two members of Leeds City Police. Commissioned by LEEDS 2023 and the David Oluwale Memorial Association (DOMA), in partnership with Leeds City Council, the sculpture is, according to academic Dr. Emily Zobel Marshall, the first public artwork in the city to reflect its cultural diversity."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "The Avdhela Project, an Aromanian digital library and cultural initiative, was launched in Bucharest, Romania.",
   "context": [
    "The Avdhela Project, also known as the Library of Aromanian Culture, is a digital library and cultural initiative developed by the Predania Association. The Avdhela Project aims to collect, edit and open to the public academic works on the Aromanians based on a series of specific principles. It was launched on 24 November 2009 in Bucharest, Romania. Public events, the promotion of cultural works and the publication of audiovisual material are other activities carried out by the Avdhela Project in support of Aromanian culture."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1976,
   "text": "A magnitude-7.3 earthquake struck eastern Turkey, destroying most of buildings in the area and causing at least 4,000 casualties.",
   "context": [
    "The 1976 Çaldıran–Muradiye earthquake occurred at 14:22 local time on 24 November. The epicenter was located near Çaldıran, 20 km northeast of Muradiye, in the Van Province of eastern Turkey. The earthquake had a magnitude of 7.3 with a maximum intensity of X (Extreme) on the Mercalli intensity scale. The area of severe damage, where over 80% of the buildings were destroyed, covered an area of 2,000 square kilometres. There were between 4,000 and 5,000 casualties."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1971,
   "text": "After collecting a ransom payout of $200,000, D. B. Cooper parachuted out of the airplane he had hijacked over the Pacific Northwest and disappeared.",
   "context": [
    "On November 24, 1971, an unidentified man using the alias Dan Cooper, later erroneously known as D. B. Cooper, hijacked Northwest Orient Airlines Flight 305, a Boeing 727 aircraft flying from Portland, Oregon, to Seattle, Washington. Cooper told the flight crew he had a bomb, and demanded $200,000 in ransom and four parachutes upon landing in Seattle."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1963,
   "text": "During a live television broadcast, businessman Jack Ruby shot and fatally wounded Lee Harvey Oswald, who assassinated U.S. president John F. Kennedy, fueling numerous conspiracy theories.",
   "context": [
    "Jack Leon Ruby was an American nightclub owner. He murdered Lee Harvey Oswald two days after the assassination of John F. Kennedy. He was born in Chicago, and operated nightclubs in Texas. According to the House Select Committee on Assassinations and journalists, Ruby had links to organized crime."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1943,
   "text": "World War II: Following the American capture of Makin Atoll, USS Liscome Bay was sunk by a torpedo from Japanese submarine I-175, killing 644.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1941,
   "text": "The Holocaust: The Theresienstadt Ghetto (depicted) was founded as a waystation to Nazi extermination camps and a \"retirement settlement\" for elderly and prominent Jews to mislead their communities about the Final Solution.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1925,
   "text": "The Eugene O'Neill Theatre (pictured) opened on Broadway, New York, with a production of the musical Mayflowers.",
   "context": [
    "The Eugene O'Neill Theatre, previously the Forrest Theatre and the Coronet Theatre, is a Broadway theater at 230 West 49th Street in the Theater District of Midtown Manhattan in New York City, New York, U.S. The theater was designed by Herbert J. Krapp and was constructed for the Shubert brothers. It opened in 1925 as part of a hotel and theater complex named after 19th-century tragedian Edwin Forrest. The modern theater, named in honor of American playwright Eugene O'Neill, has 1,108 seats across two levels and is operated by ATG Entertainment. The auditorium interior is a New York City designated landmark."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1922,
   "text": "Irish Civil War: Irish nationalist author Erskine Childers was executed by the Irish Free State for illegally carrying a semi-automatic pistol.",
   "context": [
    "The Irish Civil War was a conflict that followed the Irish War of Independence and accompanied the establishment of the Irish Free State, an entity independent from the United Kingdom but within the British Empire."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1918,
   "text": "The Podgorica Assembly convened in Montenegro, with the intention of uniting with the Kingdom of Serbia.",
   "context": [
    "The Great People's Assembly of the Serb People in Montenegro, commonly known as the Podgorica Assembly, was an ad hoc popular assembly convened in November 1918, after the end of World War I in the Kingdom of Montenegro. The committee convened the assembly with the aim of facilitating an unconditional union of Montenegro and Serbia and removing Nikola I of Montenegro from the throne. The assembly was organised by a committee supported by and coordinating with the government of the Kingdom of Serbia. The unification was successful and preceded the establishment of the Kingdom of Serbs, Croats and Slovenes as a unified state of South Slavs by mere days. The unification was justified by the need to establish a single Serbian state for all Serbs, including Montenegro whose population as well as Nikola I felt that Montenegro belonged to the Serbian nation and largely supported the unification."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1906,
   "text": "The second of two games between two Ohio football teams took place, after which accusations were made that players conspired to deliberately lose games.",
   "context": [
    "American football, referred to simply as football in the United States and Canada and also known as gridiron football, is a sport played by two teams of eleven players on a rectangular field with goalposts at each end. The offense, the team with possession of the oval-shaped football, attempts to advance down the field by running with the ball or throwing it, while the defense, the team without possession of the ball, aims to stop the offense's advance and to take control of the ball for themselves. The offense must advance the ball at least ten yards in four downs or plays; if they fail, they turn over the football to the defense. If they succeed, they are given a new set of four downs to continue the drive. Points are scored primarily by advancing the ball into the opposing team's end zone for a touchdown or kicking the ball through the opponent's goalposts for a field goal. The team with the most points at the end of the game wins. In the case of a tie after four quarters, the game enters overtime."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1863,
   "text": "American Civil War: Union forces captured Lookout Mountain, helping them break the Confederate siege of Chattanooga, Tennessee.",
   "context": [
    "The American Civil War was fought in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1859,
   "text": "British naturalist Charles Darwin's On the Origin of Species was first published, and sold out its initial print run on the first day.",
   "context": [
    "Charles Robert Darwin was an English naturalist, geologist, and biologist, widely known for his contributions to evolutionary biology. His proposition that all species have descended from a common ancestor is now accepted and considered a fundamental scientific concept. In a joint presentation with Alfred Russel Wallace, he proposed that this branching pattern of evolution resulted from a process he called natural selection, in which the struggle for existence has a similar effect to the artificial selection involved in selective breeding. Darwin has been described as one of the most influential figures in human history and was honoured by burial in Westminster Abbey."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1643,
   "text": "Thirty Years' War: Holy Roman Empire, Bavarian and Spanish forces led by Franz von Mercy defeated the French army in Germany led by Marshal Josias von Rantzau at the Battle of Tuttlingen.",
   "context": [
    "The Thirty Years' War, fought primarily in Central Europe between 1618 and 1648, was one of the most destructive conflicts in European history. An estimated 4.5 to 8 million soldiers and civilians died from the effects of battle, famine, or disease, with parts of Germany reporting population declines of more than 50%. Related conflicts include the Eighty Years' War, the War of the Mantuan Succession, the Franco–Spanish War, the Torstenson War, and Portuguese Restoration War."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1542,
   "text": "Anglo-Scottish Wars: English forces captured about 1,200 Scots at the Battle of Solway Moss.",
   "context": [
    "The Anglo-Scottish Wars comprise the various battles between the Kingdom of England and the Kingdom of Scotland from the time of the Wars of Independence in the early 14th century through to the latter years of the 16th century."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1221,
   "text": "Mongol invasion of the Khwarazmian Empire: Genghis Khan defeated Khwarazmian prince Jalal al-Din in the Battle of the Indus.",
   "context": [
    "Between 1219 and 1221, the Mongol forces under Genghis Khan invaded the lands of the Khwarazmian Empire in Central Asia. The campaign, which followed the annexation of the Qara Khitai Khanate, saw widespread devastation and atrocities. The invasion marked the completion of the Mongol conquest of Central Asia, and began the Mongol conquest of Persia."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Zombie company (חברת זומבי)",
  "Sweat equity (הון יזע)",
  "Burn the boats (לשרוף את הסירות)",
  "Haircut (תספורת)",
  "Death by a thousand cuts (מיתה באלף חתכים)",
  "Playing with house money (לשחק בכסף של הבית)",
  "Golden parachute (מצנח זהב)",
  "Sandbagging (הערכה שמרנית מכוונת)",
  "Bake-off (תחרות ספקים)",
  "Churn rate (שיעור נטישה)",
  "Bleeding edge (חוד החרב הטכנולוגי)",
  "Jump the shark (לקפוץ מעל הכריש)",
  "Hurdle rate (שיעור תשואה נדרש)",
  "Land and expand (לנחות ולהתרחב)",
  "Throwing good money after bad (להשקיע כסף טוב אחרי כסף רע)",
  "Bellwether (מדד מקדים)",
  "Sticker shock (תדהמת מחיר)",
  "Cash cow (פרת מזומנים)",
  "Vintage (וינטג')",
  "Hockey-stick growth (צמיחת מקל הוקי)",
  "Dogfooding (אכילת מזון הכלבים של עצמך)",
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
  "Picking up pennies in front of a steamroller (ללקט אגורות לפני מכבש)"
 ]
}
</input>