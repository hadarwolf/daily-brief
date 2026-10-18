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
   "year": 2019,
   "text": "Protests in Santiago that started 11 days prior escalated into open battle against the Chilean national police, forcing President Sebastián Piñera to declare a state of emergency.",
   "context": [
    "Santiago, also known as Santiago de Chile, is the capital and largest city of Chile and one of the largest cities in the Americas. Located in the Chilean Central Valley within the Santiago Basin, between the Andes to the east and the Chilean Coastal Range to the west, it anchors the Santiago Metropolitan Region and its conurbation of Greater Santiago, which comprises more than forty communes and concentrates over a third of the national population and around 45% of Chile's GDP. Most of the city lies between 500 and 650 meters above sea level, with recent urban growth extending into the Andean foothills."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1993,
   "text": "Nihilism, the first professional runway show from the British designer Alexander McQueen, was staged in London.",
   "context": [
    "Nihilism is the third collection by British designer Alexander McQueen, released for the Spring/Summer 1994 season of his eponymous fashion house. McQueen developed the collection following the launch of his own label with Taxi Driver, which was exhibited in March 1993 at the Ritz Hotel in London in lieu of a fashion show. An eclectic collection with no straightforward theme, Nihilism pushed back against dominant womenswear trends with its hard tailoring, and aggressive, sexualised styling. It was created in collaboration with McQueen's associates Simon Ungless and Fleet Bigwood. Like Taxi Driver, Nihilism included experimental techniques, silhouettes, and materials, such as dresses made from cellophane, stained with clay, or adorned with dead locusts."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1968,
   "text": "At the Summer Olympics in Mexico City, American athlete Bob Beamon (pictured) achieved a distance of 8.90 m (29.2 ft) in the long jump event, setting a world record that stood for 23 years.",
   "context": [
    "The 1968 Summer Olympics, officially known as the Games of the XIX Olympiad and officially branded as Mexico 1968, were an international multi-sport event held from 12 to 27 October 1968, in Mexico City, Mexico. These were the first Olympic Games to be staged in Latin America, the first to be staged in a Spanish-speaking country, and the first to be staged in the Global South. Consequently, these games also marked the first time that there would be a gap of two Olympic Games not to be held in Europe. They were also the first Games to use an all-weather (smooth) track for track and field events instead of the traditional cinder track, as well as the first example of the Olympics exclusively using electronic timekeeping equipment."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1967,
   "text": "The Soviet space probe Venera 4 became the first spacecraft to perform direct in situ analysis of the environment of another planet (Venus).",
   "context": [
    "Venera 4, also designated 4V-1 No.310, was a probe in the Soviet Venera program for the exploration of Venus. The probe comprised a lander, designed to enter the Venusian atmosphere and parachute to the surface, and a carrier/flyby spacecraft, which carried the lander to Venus and served as a communications relay for it."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1963,
   "text": "The first cat in space, later known as Félicette, launched aboard a French Véronique rocket.",
   "context": [
    "Félicette was a Parisian cat that became the first feline launched into space on 18 October 1963 as part of the French space program. She was one of 14 female cats trained for spaceflight. The cats had electrodes implanted into their skulls to monitor their neurological activity throughout the flight. During the flight, electrical impulses were applied to the brain and a leg to stimulate responses. The capsule was recovered 13 minutes after the rocket was ignited. Most of the data from the mission was of good quality, and Félicette survived the flight but was euthanised two months later for the examination of her brain."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1943,
   "text": "Pere Areny, convicted of the murder of his brother, became the last person to be executed by Andorra.",
   "context": [
    "Pere Areny Aleix was an Andorran man who was the last person to be executed by Andorra."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1906,
   "text": "The Robert Burns Memorial Statue, the first public statue erected in New Brunswick, was dedicated in Fredericton.",
   "context": [
    "The Robert Burns Memorial Statue is a monumental statue in Fredericton, New Brunswick, Canada. It was designed by Scottish sculptor William Grant Stevenson and dedicated in 1906. It currently stands on the Green, a park adjacent to the Saint John River, near Christ Church Cathedral. It consists of a bronze statue of the Scottish poet Robert Burns atop a granite pedestal. Ornaments on the pedestal include bronze panels depicting scenes from some of Burns's works."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1887,
   "text": "Johannes Brahms (pictured) conducted the premiere of his Double Concerto, composed for violinist Joseph Joachim and cellist Robert Hausmann.",
   "context": [
    "Johannes Brahms was a German composer, pianist, and conductor of the mid-Romantic period. His music features expressive counterpoint, freer dissonance, rhythmic vitality, and traditional forms. His works include four symphonies, four concertos, a Requiem, much chamber music, and hundreds of folk-song arrangements and Lieder."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1873,
   "text": "Renton defeated Kilmarnock 2–0 in the opening match of the inaugural Scottish Cup.",
   "context": [
    "Renton Football Club was a football club based in Renton, West Dunbartonshire, Scotland. Formed in 1872, it was a prominent team in the early history of Scottish football, and was one of the teams that featured in the first ever Scottish Cup fixture. It won the competition twice, in 1885 and 1888, and was also runners-up three times. Its 6–1 win against Cambuslang in 1888 is the joint record win in a Scottish Cup final."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1775,
   "text": "American Revolutionary War: In an act of retaliation against ports that supported Patriot activities in the early stages of the war, the Royal Navy destroyed what is now Portland, Maine.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 had led King George III and much of the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1748,
   "text": "The War of the Austrian Succession ended with the signing of the Treaty of Aix-la-Chapelle.",
   "context": [
    "The War of the Austrian Succession, 1740 to 1748, was a conflict between the European great powers, fought primarily in Europe, the Atlantic Ocean and Mediterranean Sea. Related conflicts include King George's War, the War of Jenkins' Ear, the First Carnatic War, and the First and Second Silesian Wars."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1587,
   "text": "Filipino sailors disembarked from the Manila galleon Nuestra Señora de Buena Esperanza in what is now Morro Bay, California, the first documented instance of Asians in the Americas.",
   "context": [
    "Filipinos are citizens or people identified and related with the country or sovereign state of the Philippines. Filipinos come from various Austronesian peoples, all typically speaking Filipino, English, or other Philippine languages. Despite formerly being subject to Spanish administration, less than 1% of Filipinos are fluent in Spanish. Currently, there are more than 185 ethnolinguistic groups in the Philippines each with its own language, identity, culture, tradition, and history."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1565,
   "text": "The first recorded naval battle between Europeans and the Japanese occurred when a flotilla of samurai attacked two Portuguese trade vessels at the Battle of Fukuda Bay in Nagasaki.",
   "context": [
    "The samurai  were members of the professional warrior class in pre-industrial Japan, who served as retainers to the lords. These men came from warrior families and trained from a young age in military arts through private instruction. Swordsmanship, archery, and horsemanship were the primary martial skills; and often in Japanese history, only samurai had the right to even possess these weapons. These weapons required years of training to master, and this commitment made the samurai superior to conscripts and militia, the latter who were typically given only days of training. The samurai also studied literature, calligraphy, and Confucian philosophy, befitting their roles as bureaucrats under the shoguns."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1356,
   "text": "The most significant earthquake to have occurred in Central Europe in recorded history destroyed Basel, Switzerland.",
   "context": [
    "The 1356 Basel earthquake is the most significant seismological event to have occurred in Central Europe in recorded history and had a moment magnitude in the range of 6.0–7.1. This earthquake, which occurred on 18 October 1356, is also known as the Sankt-Lukas-Tag Erdbeben, as 18 October is the feast day of Saint Luke the Evangelist."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1081,
   "text": "Byzantine–Norman wars: Robert Guiscard led an invasion of the Byzantine Empire, capturing Dyrrhachium in present-day Albania.",
   "context": [
    "The Byzantine–Norman wars were a series of military conflicts between the Normans and the Byzantine Empire fought from c. 1040 to 1186 involving the Norman-led Kingdom of Sicily in the west, and the Principality of Antioch in the Levant. The last of the Norman invasions, though having incurred disaster upon the Romans by sacking Thessalonica in 1185, was eventually driven out and vanquished by 1186."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 320,
   "text": "Pappus of Alexandria, one of the last great Greek mathematicians of antiquity, observed an eclipse that allowed historians to calculate the approximate dates of his life.",
   "context": [
    "Pappus of Alexandria was a Greek mathematician of late antiquity known for his Synagoge (Συναγωγή) or Collection, and for Pappus's hexagon theorem in projective geometry. Almost nothing is known about his life except for what can be found in his own writings, many of which are lost. Pappus apparently lived in Alexandria, where he worked as a mathematics teacher to higher level students, one of whom was named Hermodorus."
   ]
  }
 ],
 "recent_words_and_concepts": [
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