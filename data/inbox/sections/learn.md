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
   "text": "A double suicide bombing at the Iranian embassy in Beirut, Lebanon, killed 23 people and injured at least 160 others.",
   "context": [
    "The 2013 Iranian embassy bombing in Beirut was a double suicide bombing in front of the Iranian embassy in Beirut, Lebanon on 19 November 2013. The two bombings resulted in 23 deaths and injured at least 160 others."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2010,
   "text": "The first of four explosions occurred at the Pike River Mine in the West Coast in New Zealand's worst mining disaster in nearly a century.",
   "context": [
    "The Pike River Mine disaster was a coal mining accident that occurred on 19 November 2010 in the Pike River Mine, 46 km (29 mi) northeast of Greymouth, in the West Coast region of New Zealand's South Island. It began with a methane explosion at approximately 3:44 pm. The accident resulted in the deaths of 29 miners."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2005,
   "text": "Iraq War: A group of United States Marines massacred 25 people in the town of Haditha.",
   "context": [
    "The Iraq War, also referred to as the Second Gulf War, was a protracted armed conflict in Iraq from 2003 to 2011. It began in March 2003 with the invasion by a United States–led coalition, which resulted in the overthrow of the Ba'athist government of Saddam Hussein. During the US occupation of Iraq, the conflict persisted as an insurgency that arose against coalition forces and the newly established Iraqi government. US forces were officially withdrawn in 2011. In 2014, the US became re-engaged in Iraq, leading a new coalition under Combined Joint Task Force – Operation Inherent Resolve, as the conflict evolved into the ongoing Islamic State insurgency."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2002,
   "text": "The Greek oil tanker Prestige split in two and sank off the coast of Galicia after spilling 420 thousand barrels (17.8 million US gallons) of oil, in the worst environmental disaster in Spanish and Portuguese history.",
   "context": [
    "MV Prestige was an oil tanker owned by a Greek company based in Athens and operating under a Bahamian flag of convenience, that on 19 November 2002 sank off the coast of Galicia, Spain. The sinking caused a major environmental disaster, polluting thousands of miles of coastline with 50,000 metric tons of oil."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1991,
   "text": "Mexican singer Luis Miguel released the album Romance, which led to a revival of interest in bolero music.",
   "context": [
    "Luis Miguel Gallego Basteri is a Mexican singer and record producer. Born in Puerto Rico to an Italian mother and a Spanish father, he is often referred to as \"El Sol de México\". Luis Miguel has sung in multiple genres and styles, including pop songs, ballads, boleros, tangos, jazz, big band, and mariachi. He is also recognized as the only major Latin singer of his generation not to cross over to the Anglo market during the \"Latin Explosion\" in the 1990s."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1985,
   "text": "The first of five summits (pictured) between Soviet general secretary Mikhail Gorbachev and U.S. president Ronald Reagan began in Geneva.",
   "context": [
    "The Geneva Summit of 1985 was a Cold War-era meeting in Geneva, Switzerland. It was held on November 19–21, 1985, between U.S. president Ronald Reagan and Soviet general secretary Mikhail Gorbachev. The two leaders met for the first time to hold talks on international diplomatic relations and the arms race."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1969,
   "text": "Playing for Santos against Vasco da Gama in the Maracanã Stadium in Rio de Janeiro, Brazilian footballer Pelé scored his 1,000th goal (commemorative stamp pictured).",
   "context": [
    "Santos Futebol Clube is a Brazilian sports club based in Vila Belmiro, a bairro in the city of Santos. It plays in the Campeonato Paulista, the state of São Paulo's premier state league, as well as the Campeonato Brasileiro Série A, the top flight of the Brazilian football league system, after winning the 2024 Série B title."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1942,
   "text": "World War II: Soviet troops launched Operation Uranus at the Battle of Stalingrad with the goal of encircling Axis forces, turning the tide of the battle in their favour.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1941,
   "text": "World War II: The Australian light cruiser HMAS Sydney and the German auxiliary cruiser Kormoran destroyed each other in the Indian Ocean.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1933,
   "text": "A coalition of right-wing parties won the majority of seats in the Congress of Deputies in the first general election in Spain with suffrage extended to women.",
   "context": [
    "The Congress of Deputies is the lower house of the Cortes Generales, Spain's legislative branch, the upper house being the Senate. The Congress meets in the Palace of the Parliament in Madrid."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1863,
   "text": "American Civil War: U.S. president Abraham Lincoln delivered the Gettysburg Address at the dedication of the Soldiers' National Cemetery in Gettysburg, Pennsylvania.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1863,
   "text": "American Civil War: Confederate forces began the Siege of Knoxville against Union fortifications.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1824,
   "text": "Temenggong Abdul Rahman of Johor and Sultan Hussein Shah of Johor ceded the governance of Singapore to the British East India Company.",
   "context": [
    "Abdul Rahman I bin Abdul Hamid I of Johor was the Temenggong of Johor during the Bendahara dynasty of the Johor Sultanate. He was best known of being instrumental in the Treaty of Singapore with the British East India Company in 1819."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1794,
   "text": "The United States and Great Britain signed the Jay Treaty, the basis for ten years of peaceful trade between the two nations.",
   "context": [
    "The Treaty of Amity, Commerce, and Navigation, Between His Britannic Majesty and the United States of America, commonly known as the Jay Treaty, and also as Jay's Treaty, was a 1794 treaty between the United States and Great Britain that averted war, resolved issues remaining since the 1783 Treaty of Paris, and facilitated ten years of peaceful trade between Americans and the British in the midst of the French Revolutionary Wars, which had begun in 1792. For the Americans, the treaty's policy was designed by Treasury secretary Alexander Hamilton, supported by President George Washington. It angered France and bitterly divided American public opinion, encouraging the growth of two opposing American political parties, the pro-Treaty Federalists and the anti-Treaty Democratic-Republicans."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Pull the plug (לשלוף את התקע)"
 ]
}
</input>