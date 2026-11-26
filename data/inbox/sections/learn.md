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
   "year": 2011,
   "text": "In a friendly-fire incident, a skirmish occurred between U.S.-led NATO forces and Pakistani security forces at two military checkposts along the Afghanistan–Pakistan border.",
   "context": [
    "In military terminology, friendly fire or fratricide is an unintentional attack by allied or neutral forces on friendly troops while attempting to attack enemy or hostile targets. Many NATO militaries refer to these incidents as blue on blue. Examples include misidentifying the target as hostile, cross-fire while engaging an enemy, and long-range ranging errors or inaccuracy. Accidental fire not intended to attack enemy or hostile targets, or deliberate firing on one's own troops for disciplinary reasons, is not called friendly fire, and neither is unintentional harm to civilian or neutral targets, which is sometimes referred to as collateral damage. Training accidents and bloodless incidents also do not qualify as friendly fire in terms of casualty reporting."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2011,
   "text": "Mars Science Laboratory, a NASA mission carrying the rover Curiosity (pictured) on board, was launched from Cape Canaveral.",
   "context": [
    "Mars Science Laboratory (MSL) is a robotic space probe mission to Mars launched by NASA on November 26, 2011, which successfully landed Curiosity, a Mars rover, in Gale Crater on August 6, 2012. The overall objectives include investigating Mars's habitability, studying its climate and geology, and collecting data for a human mission to Mars. The rover carries a variety of scientific instruments designed by an international team."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2008,
   "text": "A coordinated group of shooting and bombing attacks across Mumbai began, ultimately killing 175 people and wounding more than 300 others.",
   "context": [
    "The 2008 Mumbai attacks, colloquially known as 26/11, were a coordinated series of twelve Islamic terrorist attacks carried out in Mumbai, Maharashtra, India, from 26 to 29 November 2008, by ten members of Lashkar-e-Taiba. A total of 175 people died, including 166 civilians and nine of the attackers, and more than 300 people were injured."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1983,
   "text": "Six robbers broke into a Brink's-Mat warehouse at Heathrow Airport in London and stole £26 million in gold, diamonds and cash.",
   "context": [
    "The Brink's Company is an American cash handling company, headquartered in Richmond, Virginia. Its operations include cash-in-transit, ATM replenishment & maintenance, and cash management & payment services, such as vault outsourcing, money processing, intelligent safe services, and international transportation of valuables."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1979,
   "text": "Pakistan International Airlines Flight 740, crashed shortly after takeoff near Taif, Saudi Arabia, killing all 156 people on board.",
   "context": [
    "On 26 November 1979, Pakistan International Airlines Flight 740, a Boeing 707 operating a scheduled international passenger flight from Kano, Nigeria, to Karachi, Pakistan, via Jeddah, Saudi Arabia, crashed near Taif after attempting to return to Jeddah International Airport following an in-flight fire, killing all 145 passengers and 11 crew members."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1977,
   "text": "A speaker claiming to represent the \"Intergalactic Association\" interrupted a broadcast of Southern Television in South East England.",
   "context": [
    "The Southern Television broadcast interruption was a broadcast signal intrusion, or pirate broadcast, that occurred on 26 November 1977 in parts of southern England in the United Kingdom. The audio of a Southern Television broadcast was replaced by a voice claiming to represent the \"Ashtar Galactic Command\", delivering a message instructing humanity to abandon its weapons and live in peace with one another so it could participate in a \"future awakening\" and \"achieve a higher state of evolution\". After five and a half minutes, the broadcast returned to its scheduled programme, the 1947 Looney Tunes cartoon Goofy Gophers."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1965,
   "text": "Astérix (prototype pictured), the first French satellite, was launched into orbit by a Diamant rocket from Hammaguir, Algeria.",
   "context": [
    "Astérix or A-1 is the first French satellite. It was launched on 26 November 1965 by a Diamant A rocket from the CIEES launch site at Hammaguir, Algeria. With Astérix, France became the sixth country to have an artificial satellite and the third country to launch a satellite on its own rocket. Its main purpose was to test the Diamant launcher, though it was also designed to study the ionosphere. Astérix continues to orbit Earth as of 2026 and is expected to remain in orbit for centuries."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1942,
   "text": "A riot involving infantrymen, military police, and local law enforcement officers killed three people in Phoenix, Arizona.",
   "context": [
    "On November 26, 1942, a riot occurred in Phoenix, Arizona, United States, involving United States Army infantrymen, military police, and members of the Phoenix Police Department. The incident left three people dead and approximately a dozen injured."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1942,
   "text": "Casablanca, starring Humphrey Bogart and Ingrid Bergman, premiered at the Hollywood Theatre in New York City to coincide with the Allied invasion of French North Africa and the capture of Casablanca.",
   "context": [
    "Casablanca is a 1942 American romantic drama film directed by Michael Curtiz and starring Humphrey Bogart, Ingrid Bergman, and Paul Henreid. Filmed and set during World War II, it focuses on an American expatriate (Bogart) who must choose between his love for a woman (Bergman) and helping her husband (Henreid), a Czechoslovak resistance leader, escape from the Vichy-controlled city of Casablanca to continue his fight against the Nazis. The screenplay is based on Everybody Comes to Rick's, an unproduced stage play by Murray Burnett and Joan Alison. The supporting cast features Claude Rains, Conrad Veidt, Sydney Greenstreet, Peter Lorre, and Dooley Wilson."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1942,
   "text": "World War II: The first meeting of the Anti-Fascist Council for the National Liberation of Yugoslavia was convened at Bihać in northwestern Bosnia.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1940,
   "text": "The Iron Guard killed 64 political detainees at a penitentiary near Bucharest and followed up with several high-profile assassinations, including that of former Romanian prime minister Nicolae Iorga.",
   "context": [
    "The Iron Guard was a far-right, revolutionary, fascist paramilitary organization and political party active in the Kingdom of Romania during the interwar period and the Second World War. Founded in 1927 by Corneliu Zelea Codreanu as the Legion of the Archangel Michael or the Legionary Movement, the movement was strongly anti-democratic, anti-communist, and antisemitic, and its ideology inspired both political violence and forms of Christian terrorism. It differed from other European far-right movements of the period due to its spiritual basis, as the Iron Guard was deeply imbued with Romanian Orthodox Christian mysticism."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1939,
   "text": "The Soviet Red Army shelled the village of Mainila and then claimed that the fire originated from Finland, giving them a casus belli to launch the Winter War a few days later.",
   "context": [
    "The Workers' and Peasants' Red Army, often referred by its shortened name as the Red Army, was the army and air force of the Russian Soviet Republic and, from 1922, the Soviet Union. The army was established in January 1918 by a decree of the Council of People's Commissars to oppose the military forces of the new nation's adversaries during the Russian Civil War, especially the various groups collectively known as the White Army. In February 1946, the Red Army was renamed the \"Soviet Army\". Following the dissolution of the Soviet Union, it was split between the post-Soviet states, with its bulk becoming the Russian Ground Forces, commonly considered to be the successor of the Soviet Army."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1921,
   "text": "The Bolshevik–Makhnovist conflict resumes with a surprise attack by the Red Army against the Makhnovshchina.",
   "context": [
    "The Bolshevik–Makhnovist conflict was a period of political and military conflict between the Ukrainian Soviet Socialist Republic and the Makhnovshchina, for control over southern Ukraine. The Bolsheviks aimed to eliminate the Makhnovshchina and neutralise its peasant base. In turn, the Makhnovists fought against the implementation of the Red Terror and the policy of war communism."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1917,
   "text": "Being unable to resolve disputes with Eddie Livingstone, owner of the Toronto Blueshirts, the other ice hockey clubs of Canada's National Hockey Association officially agreed to break away and form the National Hockey League.",
   "context": [
    "Edward James Livingstone was a Canadian sports team owner and manager. He was the principal owner of the Toronto Shamrocks and the Toronto Blueshirts professional ice hockey clubs of the National Hockey Association (NHA), where his battles with his fellow owners led them to create the National Hockey League."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1914,
   "text": "A large internal explosion destroyed HMS Bulwark near Sheerness, killing 741 people on board.",
   "context": [
    "HMS Bulwark was one of five London-class pre-dreadnought battleships built for the Royal Navy at the end of the 19th century. The Londons were a sub-class of the Formidable-class pre-dreadnoughts. Completed in 1902 she was initially assigned to the Mediterranean Fleet as its flagship. The ship then served with the Channel and Home Fleets from 1907 to 1910, usually as a flagship. From 1910 to 1914, she was in reserve in the Home Fleet."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1852,
   "text": "A massive earthquake struck the Dutch East Indies, creating a tsunami that washed away villages, ships and residents.",
   "context": [
    "The 1852 Banda Sea earthquake struck on 26 November at 07:40 local time, affecting coastal communities on the Banda Islands. It caused violent shaking lasting five minutes, and was assigned XI on the Modified Mercalli intensity scale in the Maluku Islands. A tsunami measuring up to 8 m (26 ft) slammed into the islands of Banda Neira, Saparua, Haruku and Ceram. The tsunami caused major damage, washing away many villages, ships and residents. At least 60 people were killed in the earthquake and tsunami. The earthquake had an estimated moment magnitude of 7.5 or 8.4–8.8, according to various academic studies."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1851,
   "text": "The French navy bombarded the city of Salé, Morocco, damaging its infrastructure and the Great Mosque of Salé.",
   "context": [
    "The Bombardment of Salé was a French naval attack against the Moroccan city of Salé that took place between 26 and 27 November 1851. After seven hours of fighting, the Moroccan artillery suffered severe damage, and the French bombarded the city through the night, damaging the city's infrastructure and the Great Mosque of Salé."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1842,
   "text": "The University of Notre Dame (building pictured) was founded by Edward Sorin of the Congregation of Holy Cross as an all-male institution in the U.S. state of Indiana.",
   "context": [
    "The University of Notre Dame du Lac is a private Catholic research university in Notre Dame, Indiana, United States. The university was founded in 1842 by members of the Congregation of Holy Cross, a Catholic religious order of priests and brothers. Its main campus covers 1,261 acres in a suburban setting and has landmarks such as the Golden Dome main building, Sacred Heart Basilica, the Grotto of Our Lady of Lourdes, the Word of Life mosaic mural, and Notre Dame Stadium."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1835,
   "text": "Texas Revolution: Texian forces attacked a Mexican pack train, capturing 40 saddlebags of grass.",
   "context": [
    "The Texas Revolution was a rebellion by Anglo-American immigrants as well as Hispanic Texans against the centralist government of Mexico in the Mexican state of Coahuila y Tejas. Although the uprising was part of a larger revolt that included other provinces opposed to the regime of President Miguel Barragán and General Antonio López de Santa Anna, the Mexican government believed the United States had instigated the Texas insurrection with the goal of annexation. The Mexican Congress passed the Tornel Decree, declaring that any foreigners fighting against Mexican troops \"will be deemed pirates and dealt with as such, being citizens of no nation presently at war with the Republic and fighting under no recognized flag\". Only the province of Texas succeeded in breaking with Mexico, establishing the Republic of Texas. It was eventually annexed by the United States about a decade later."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Shrinkflation (כיווץ אינפלציוני)",
  "Due diligence (בדיקת נאותות)",
  "Scorched-earth strategy (אסטרטגיית אדמה חרוכה)",
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
  "Eating someone's lunch (לאכול למישהו את הארוחה)"
 ]
}
</input>