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
   "text": "Twelve people were killed in an apartment-building collapse (pictured) in Medellín, leading to new construction laws being passed in Colombia.",
   "context": [
    "The collapse of the Space Building occurred on the night of 12 October 2013, when Tower 6 of the Space Building, a residential apartment complex, collapsed in Medellín, Colombia, killing 12 people. Local authorities evacuated the rest of the building to avoid an imminent new collapse. The cost of the building was more than Col$40.6 billion."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1992,
   "text": "An earthquake with a magnitude of 5.8 or 5.9 struck south of Cairo, Egypt, killing 545 people.",
   "context": [
    "Seismic magnitude scales are used to describe the overall strength or \"size\" of an earthquake. These are distinguished from seismic intensity scales that categorize the intensity or severity of ground shaking (quaking) caused by an earthquake at a given location. Magnitudes are usually determined from measurements of an earthquake's seismic waves as recorded on a seismogram. Magnitude scales vary based on what aspect of the seismic waves are measured and how they are measured. Different magnitude scales are necessary because of differences in earthquakes, the information available, and the purposes for which the magnitudes are used."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1984,
   "text": "The Provisional Irish Republican Army detonated a bomb at the Grand Hotel in Brighton, England, in a failed attempt to assassinate British prime minister Margaret Thatcher and her cabinet.",
   "context": [
    "The Provisional Irish Republican Army, officially known as the Irish Republican Army and informally known as the Provos, was an Irish republican paramilitary force that sought to end British rule in Northern Ireland, facilitate Irish reunification and bring about an independent socialist republic, which would encompass all of Ireland. It was the most active republican paramilitary group during the Troubles. It argued that the all-island Irish Republic continued to exist, and it saw itself as that state's army, the sole legitimate successor to the original IRA from the Irish War of Independence. It was designated a terrorist organisation in the United Kingdom and an unlawful organisation in the Republic of Ireland, both of whose authority it rejected."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1979,
   "text": "Typhoon Tip, the largest and most intense tropical cyclone ever recorded, reached a worldwide record-low sea-level pressure of 870 mbar (25.69 inHg) in the western Pacific Ocean.",
   "context": [
    "Typhoon Tip, known in the Philippines as Super Typhoon Warling, was the largest and most intense tropical cyclone ever recorded worldwide. The forty-third tropical depression, nineteenth tropical storm, twelfth typhoon, and third super typhoon of the 1979 Pacific typhoon season, Tip developed out of a disturbance within the monsoon trough on October 4 near Pohnpei in Micronesia. Initially, Tropical Storm Roger to the northwest hindered the development and motion of the system, although after the storm tracked farther north, Tip was able to intensify due to more favorable conditions within the region. After passing Guam, Tip rapidly intensified and reached peak sustained winds of 305 km/h (190 mph) and a worldwide record-low sea-level pressure of 870 hPa (25.69 inHg) on October 12. At its peak, Tip was the largest tropical cyclone on record, with a windfield diameter of 2,220 km (1,380 mi). The typhoon briefly entered the area of warning responsibility for PAGASA on October 13, which gave it the Filipino name Warling. Tip slowly weakened as it continued west-northwestward and later turned to the northeast, in response to an approaching trough. After its approach, Tip made landfall in southern Japan on October 19, and became an extratropical cyclone shortly after its landfall. The system's extratropical remnants continued moving east-northeastward, until they dissipated near the Aleutian Islands on October 24."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1978,
   "text": "While in prison for murder, boxer James Scott defeated Eddie \"The Flame\" Gregory, a leading light heavyweight.",
   "context": [
    "James Onque Scott Jr. was an American boxer and convicted felon. He became the second-highest-ranked contender in the World Boxing Association's (WBA) light heavyweight division while incarcerated at Rahway State Prison in Avenel, New Jersey. Scott fought a total of 22 professional fights, 11 of which were contested while he was in prison. Scott earned pay and WBA rankings from many of those fights, which was considered controversial."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1960,
   "text": "Soviet leader Nikita Khrushchev reportedly pounded his shoe on a desk during a meeting of the United Nations General Assembly in protest at a speech by Philippine delegate Lorenzo Sumulong.",
   "context": [
    "Nikita Sergeyevich Khrushchev was the First Secretary of the Communist Party of the Soviet Union from 1953 to 1964 and the Chairman of the Council of Ministers from 1958 to 1964. As leader of the Soviet Union, he shocked the world by denouncing his predecessor Joseph Stalin, embarking on a campaign of de-Stalinization, and presiding over the Cuban Missile Crisis in 1962."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1960,
   "text": "Japan Socialist Party leader Inejirō Asanuma (pictured) was assassinated during a live television recording by a far-right ultra-nationalist using a short sword.",
   "context": [
    "The Japan Socialist Party  was a major socialist, progressive, and left-wing political party in Japan. Established in 1945, the party was the primary representative of the Japanese left and main opponent of the right-wing Liberal Democratic Party for most of its existence."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1946,
   "text": "Il Canto degli Italiani is adopted as national anthem by the newly formed Italian Republic.",
   "context": [
    "\"Il Canto degli italiani\" is a patriotic song written by Goffredo Mameli and set to music by Michele Novaro in 1847, currently used as the national anthem of Italy. It is known among Italians as the \"Inno di Mameli\"—after the author of the lyrics—or as \"Fratelli d'Italia\"—from the song's opening line. The piece, in 44 time signature and B-flat major key, has six strophes, and a refrain sung after each. The sixth group of verses, almost never performed, recalls the text of the first strophe."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1933,
   "text": "The United States Department of Justice acquired a military prison on Alcatraz Island in San Francisco Bay, to be transformed into the last-resort Alcatraz Federal Penitentiary.",
   "context": [
    "The United States Department of Justice (DOJ) is an executive department of the United States federal government that oversees the domestic enforcement of federal laws and the administration of justice. It is equivalent to the justice or interior ministries of other countries. The department is headed by the United States attorney general, who reports directly to the president of the United States and is a member of the president's Cabinet. Todd Blanche currently serves as the attorney general."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1928,
   "text": "The iron lung (example pictured), a type of medical ventilator, was used for the first time at the Boston Children's Hospital to treat an eight-year-old girl paralyzed by polio.",
   "context": [
    "An iron lung is negative pressure ventilator and mechanical respirator which encloses most of the patient's body. The air pressure inside the enclosed space stimulates breathing. The device is used to assist breathing when muscle control is lost. This treatment was historically helpful for polio and botulism, and for counteracting the effects of barbiturates and tubocurarine.\nThe iron lung has become largely obsolete in modern medicine, replaced by more advanced breathing therapies. Polio eradication in most of the world also reduced the need for the iron lung. In 2020, during the COVID-19 pandemic, interest in these devices was revived as a cheap, readily-producible substitute for positive-pressure ventilators which were in short supply."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1917,
   "text": "First World War: New Zealand troops suffered more than 2,000 casualties, including more than 800 deaths, in the First Battle of Passchendaele, making it the nation's largest loss of life in one day.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1898,
   "text": "A statue of Austin Blair (pictured) was dedicated in a ceremony that attracted up to 30,000 people to Lansing, Michigan.",
   "context": [
    "Austin Blair is a monument located on the grounds of the Michigan State Capitol in Lansing, Michigan, United States. It consists of a bronze statue that was designed by sculptor Edward Clark Potter atop a granite pedestal that was designed by the architectural firm of Donaldson and Meier. It was dedicated in 1898 in honor of Austin Blair, a politician who had served as the governor of Michigan and as a member of the United States House of Representatives."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1892,
   "text": "The Pledge of Allegiance of the United States was first used in public schools to coincide with the opening of the World's Columbian Exposition in Chicago.",
   "context": [
    "The U.S. Pledge of Allegiance is a patriotic recited verse that promises allegiance to the flag of the United States and the republic of the United States. The first version was written in 1885 by Captain George Thatcher Balch, a Union army officer in the Civil War who later wrote a book on how to teach patriotism to children in public schools. In 1892, Francis Bellamy revised Balch's verse as part of a magazine promotion surrounding the World's Columbian Exposition, which celebrated the 400th anniversary of Christopher Columbus' arrival in the Americas."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1890,
   "text": "The Uddevalla Suffrage Association was founded in Uddevalla, Sweden, with the purpose of bringing about universal suffrage.",
   "context": [
    "\nThe Uddevalla Suffrage Association was a late-19th-century political movement founded in Uddevalla, Sweden. Local historians and the Swedish Social Democratic Party consider it the first political predecessor of the Swedish labour movement in the province of Bohuslän. Its purpose was to bring about universal suffrage in Sweden: At the time, suffrage in the country was restricted to men and based on personal wealth, therefore excluding most of the urban and rural working class from the electoral process. The Uddevalla Suffrage Association was one of many groups throughout Sweden that helped bring democratic thought into the common discourse and make way for the political breakthrough of the labour movement."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1799,
   "text": "Jeanne Geneviève Garnerin became the first woman to make a parachute descent, falling 900 metres (3,000 ft) in the gondola of a hot air balloon.",
   "context": [
    "Jeanne Geneviève Garnerin was a French balloonist and parachutist. She was the first to ascend solo and the first woman to make a parachute descent, from an altitude of 900 metres (3,000 ft) on 12 October 1799."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1798,
   "text": "The Peasants' War began in Overmere, Southern Netherlands, with peasants taking up arms against the French occupiers.",
   "context": [
    "The Peasants' War was a peasant revolt in 1798 against the French Republican occupiers of the Southern Netherlands, a region which now includes Belgium, Luxembourg, and parts of Germany. The French had annexed the region in 1795 and control of the region was officially ceded to the French after the Treaty of Campo Formio in 1797. The revolt is considered part of the French Revolutionary Wars."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1492,
   "text": "Believing he had reached the East Indies, Christopher Columbus made landfall on an island in the Caribbean, sparking a series of events that led to the European colonization of the Americas.",
   "context": [
    "The East Indies is a term used in historical narratives of the Age of Discovery. The Indies broadly referred to various lands in the East or the Eastern Hemisphere, particularly the islands and mainlands found in and around the Indian Ocean by Portuguese explorers, soon after the Cape Route was discovered. In a narrow sense, the term was used to refer to the Malay Archipelago, which today comprises the Indonesian Archipelago, New Guinea, and the Philippine Archipelago. Historically, the term was used in the Age of Discovery to refer to the coasts of the landmasses comprising the Indian subcontinent and the Indochinese Peninsula along with the Malay Archipelago."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1406,
   "text": "Chen Yanxiang, the only person from Indonesia known to have visited dynastic Korea, reached Seoul after having set out from Java four months before.",
   "context": [
    "Chen Yanxiang was a merchant of Chinese origin, probably based on the Indonesian island of Java, who visited Joseon Korea and Muromachi Japan between 1394 and 1412. The only source for his life is the Korean Joseon Veritable Records, from which a \"particularly colorful career\" can be seen."
   ]
  }
 ],
 "recent_words_and_concepts": [
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