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
   "text": "English-Irish boy band One Direction released their third studio album Midnight Memories which debuted at number one on the Billboard 200 and became the best-selling album of 2013.",
   "context": [
    "One Direction, often shortened to 1D, was an English–Irish pop boy band formed in London in 2010. The group consisted of Niall Horan, Liam Payne, Harry Styles, Louis Tomlinson and Zayn Malik. The group sold over 70 million records worldwide, making them one of the best-selling boy bands of all time, before going on an indefinite hiatus in 2016."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1984,
   "text": "Band Aid, a supergroup consisting of more than 30 leading British and Irish pop musicians, recorded the song \"Do They Know It's Christmas?\" to raise money for famine relief in Ethiopia.",
   "context": [
    "\"Do They Know It's Christmas?\" is a charity song written in 1984 by Bob Geldof and Midge Ure to raise money for the 1983–1985 famine in Ethiopia. It was first recorded by Band Aid, a supergroup consisting of popular British and Irish musicians, in a single day at Sarm West Studios in Notting Hill, London, in November 1984."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1981,
   "text": "A group of Conservative members of Parliament wrote a letter outlining their opposition to the economic policy of Margaret Thatcher, leading to speculation over a split from the party.",
   "context": [
    "The Gang of 25 or the Group of 25 was a cohort of British Conservative Party backbench members of Parliament (MPs) that threatened to vote against prime minister Margaret Thatcher's 1981 Autumn Statement. The statement contained monetarist measures to control inflation. Similar measures introduced since 1979 had reduced inflation but caused job losses in the manufacturing sector."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1975,
   "text": "Upon Suriname's independence from the Netherlands, Johan Ferrier (pictured) became its first president.",
   "context": [
    "Johan Henri Eliza Ferrier was a Surinamese politician who served as the first president of Suriname from 1975 to 1980. He was also the country's last governor-general before independence, serving from 1968 to 1975, before becoming the first president upon independence from the Kingdom of the Netherlands in 1975 and also served as the fifth prime minister from 1955 to 1958."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1970,
   "text": "After failing to instigate a military coup to restore the powers of the Emperor of Japan, author Yukio Mishima and a member of his militia committed ritual suicide.",
   "context": [
    "The Mishima incident  occurred on November 25, 1970, when the Japanese author Yukio Mishima committed seppuku after calling on the Japan Self-Defense Forces to stage a coup d'état to abolish Article 9 of the Japanese Constitution and appealing to his own ideas and beliefs about reconstructing true national autonomy. The incident is sometimes called the Tatenokai incident , after the private militia led by Mishima whose members took part."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1952,
   "text": "Korean War: After 42 days of fighting, the Battle of Triangle Hill ended as American and South Korean units abandoned their attempt to capture the \"Iron Triangle\".",
   "context": [
    "The Korean War was an armed conflict fought on the Korean Peninsula between North Korea and South Korea and their allies. North Korea was supported by China and the Soviet Union, while South Korea was supported by the United Nations led by the United States under the auspices of the United Nations Command (UNC)."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1951,
   "text": "The left-wing Japanese novelist Wataru Kaji disappeared, leading to a government inquiry in which CIA involvement was investigated.",
   "context": [
    "Wataru Kaji  was the nom de guerre for Mitsugi Seguchi, a Japanese writer, literary critic, and political activist."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1947,
   "text": "McCarthyism: Executives from movie studios agreed to blacklist ten screenwriters and directors who were jailed for refusing to give testimony to the House Un-American Activities Committee.",
   "context": [
    "McCarthyism is a political practice defined by the accusation and investigation of left-wing individuals of communist and Soviet influence on American institutions and of Soviet espionage in the United States during the late 1940s through the 1950s, heavily associated with the McCarthy era. After the mid-1950s, U.S. senator Joseph McCarthy, who had spearheaded the campaign, gradually lost his public popularity after several of his accusations were found to be false. The U.S. Supreme Court under Chief Justice Earl Warren made a series of rulings on civil and political rights that overturned several key laws and legislative directives, and helped bring an end to the Second Red Scare."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1936,
   "text": "Nazi Germany and the Empire of Japan signed the Anti-Comintern Pact, agreeing that, if the Soviet Union attacked one of them, they would consult each other on measures to \"safeguard their common interests\".",
   "context": [
    "The Anti-Comintern Pact, officially the Agreement against the Communist International, was an anti-communist pact concluded between Nazi Germany and the Empire of Japan on 25 November 1936 and directed against the Communist International (Comintern). It was signed by the German ambassador-at-large Joachim von Ribbentrop and the Japanese ambassador to Germany Kintomo Mushanokōji. Italy joined in 1937, but it was legally recognized as an original signatory by the terms of its entry. Spain and Hungary joined in 1939. Other countries joined during World War II."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1917,
   "text": "World War I: German troops invaded Portuguese East Africa in an attempt to escape superior British forces to the north and resupply from captured Portuguese materiel.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1901,
   "text": "Gustav Mahler's Symphony No. 4 premiered in Munich.",
   "context": [
    "Gustav Mahler was an Austro-Bohemian Romantic composer, and one of the leading conductors of his generation. As a composer he acted as a bridge between the 19th-century tradition and the modernism of the early 20th century. While in his lifetime his status as a conductor was established beyond question, his own music gained wide popularity only after periods of relative neglect, which included a ban on its performance in much of Europe during the Nazi era. After 1945 his compositions were rediscovered by a new generation of listeners; Mahler then became one of the most frequently performed and recorded of all composers, a position he has sustained into the 21st century."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1885,
   "text": "Banff National Park (pictured), the oldest national park in Canada, was established as the Banff Hot Springs Reserve.",
   "context": [
    "Banff National Park is Canada's first national park, established in 1885 as Rocky Mountains Park. Located in Alberta's Rocky Mountains, 110–180 kilometres (68–112 mi) west of Calgary, Banff encompasses 6,641 square kilometres (2,564 sq mi) of mountainous terrain, with many glaciers and ice fields, dense coniferous forest, and alpine landscapes. It is bordered by Jasper National Park to the north, Yoho National Park and Kootenay National Park to the west in British Columbia, and Kananaskis Country to the southeast. The main commercial centre of the park is the town of Banff, in the Bow River valley."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1863,
   "text": "American Civil War: Confederate forces were defeated at the Battle of Missionary Ridge in Chattanooga, Tennessee, opening the door to the Union's invasion of the Deep South.",
   "context": [
    "The American Civil War was fought in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1795,
   "text": "Stanisław II Augustus (pictured), the last king of Poland, was forced to abdicate after the Third Partition of the Polish–Lithuanian Commonwealth.",
   "context": [
    "Stanisław II August, known also by his regnal Latin name Stanislaus II Augustus, and as Stanisław August Poniatowski, was King of Poland and Grand Duke of Lithuania from 1764 to 1795, and the last monarch of the Polish–Lithuanian Commonwealth."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1759,
   "text": "The second of two strong earthquakes struck the Levant and destroyed all the villages in the Beqaa Valley.",
   "context": [
    "The 1759 Near East earthquakes shook a large portion of the Levant in October and November of that year. This geographical crossroads in the Eastern Mediterranean were at the time under the rule of the Ottoman Empire. The ruins of Baalbek, a settlement in the Beqaa Valley of Lebanon east of the Litani River, were badly damaged. These 1759 events, along with the earlier 1202 Syria earthquake, are likely the strongest historical earthquakes in the region."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1678,
   "text": "Trunajaya rebellion: Mataram and Dutch troops successfully assaulted the rebel stronghold of Kediri in eastern Java.",
   "context": [
    "The Trunajaya Rebellion or Trunajaya War was a conflict in the 1670s led by the Madurese prince Trunajaya and Makassarese fighters against the Mataram Sultanate and the Dutch East India Company (VOC) in Java."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1491,
   "text": "Reconquista: The signing of the Treaty of Granada (depicted) effectively concluded the Granada War between Castile-Aragon and the Emirate of Granada.",
   "context": [
    "The Reconquista or the fall of al-Andalus was a series of military campaigns by northern Iberian Christian polities against Muslim-ruled al-Andalus, which had been part of the Visigothic Kingdom before the Muslim Conquest of 711. The Reconquista concluded in 1492 with the capture of Granada by the Catholic Monarchs of Spain, thereby ending the presence of any Muslim rule on the Iberian Peninsula."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Bootstrapping (מיזם ממומן בכוחות עצמיים)",
  "Dead cat bounce (קפיצת החתול המת)",
  "Punching above your weight (להילחם מעל המשקל שלך)",
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
  "Don't fight the Fed (אל תתעסק עם ה-Fed)"
 ]
}
</input>