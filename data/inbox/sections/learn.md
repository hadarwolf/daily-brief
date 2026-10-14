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
   "year": 2021,
   "text": "Approximately 10,000 John Deere employees went on strike in one of the largest private-sector strikes in the United States.",
   "context": [
    "Deere & Company, is an American corporation that manufactures agricultural machinery, heavy equipment, forestry machinery, diesel engines, drivetrains used in heavy equipment and lawn care equipment. It also provides financial services and other related activities."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2014,
   "text": "A snowstorm and series of avalanches occurred on and around the Himalayan peaks of Annapurna and Dhaulagiri, resulting in the deaths of at least 43 people.",
   "context": [
    "The 2014 Nepal snowstorm disaster occurred in central Nepal on 14 October 2014 and resulted in the deaths of at least 43 people of various nationalities, including at least 21 trekkers. Injuries and fatalities resulted from unusually severe snowstorms and avalanches on and around the mountains of Annapurna and Dhaulagiri. The incident was said to be Nepal's worst trekking disaster."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2012,
   "text": "Felix Baumgartner jumped from a helium balloon in the stratosphere to become the first person to break the sound barrier without vehicular power.",
   "context": [
    "Felix Baumgartner was an Austrian skydiver, extreme sportsman, and BASE jumper. He was widely known for jumping to Earth from a helium balloon in the stratosphere on 14 October 2012 and landing in New Mexico, United States, as part of the Red Bull Stratos project. By doing so, he set world records for skydiving an estimated 39 km (24 mi), reaching an estimated top speed of 1,357.64 km/h (843.6 mph), or Mach 1.25. He became the first person to break the sound barrier relative to the surface without vehicular power on his descent. He broke skydiving records for exit altitude, vertical freefall distance without a drogue parachute, and vertical speed without a drogue. Although his name is still attached to the last two records, his exit altitude record was broken two years later, when on 24 October 2014, Alan Eustace jumped from 135,890 feet with a drogue."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2011,
   "text": "Michael Woodford was dismissed as the CEO of the optics manufacturer Olympus after uncovering internal financial misconduct, escalating the corporate scandal into one of the largest in Japanese business history.",
   "context": [
    "Michael Christopher Woodford, MBE is an English businessman who was formerly president and COO and CEO of Japan-based optics and reprography products manufacturer Olympus Corporation."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1980,
   "text": "The 6th Congress of the Workers' Party concluded, having anointed North Korean president Kim Il Sung's son Kim Jong Il as his successor.",
   "context": [
    "The 6th Congress of the Workers' Party of Korea (WPK) was held in the February 8 House of Culture in Pyongyang, North Korea, from 10 to 14 October 1980. The congress is the highest organ of the party, and is stipulated to be held every four years. 3,062 delegates represented the party's membership; 117 foreign delegates attended the congress, without the right to speak. The congress saw the reappointment of Kim Il Sung as WPK General Secretary and the Presidium of the Politburo established as the highest organ of the party between congresses."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1979,
   "text": "At least 75,000 people attended the National March on Washington for Lesbian and Gay Rights in Washington, D.C., to demand equal civil rights for LGBT people.",
   "context": [
    "The first National March on Washington for Lesbian and Gay Rights was a large political rally that took place in Washington, D.C., on October 14, 1979. The first such march on Washington, it drew between 75,000 and 125,000 gay men, lesbians, bisexual people, and straight allies to demand equal civil rights and urge the passage of protective civil rights legislation."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1964,
   "text": "Members of the Politburo voted to remove Nikita Khrushchev as First Secretary of the Communist Party of the Soviet Union and replace him with Leonid Brezhnev.",
   "context": [
    "The Political Bureau of the Central Committee of the Communist Party of the Soviet Union, abbreviated as Politburo, was the de facto highest executive authority in the Communist Party of the Soviet Union (CPSU). While elected by and formally accountable to the Central Committee, in practice the Politburo operated as the ruling body of Soviet Russia and the Soviet Union from its creation in 1919 until the party's dissolution in 1991. Full members and candidate (non-voting) members held among the most powerful positions in the Soviet hierarchy, often overlapping with top state roles. Its duties, typically carried out at weekly meetings, included formulating state policy, issuing directives, and ratifying appointments."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1957,
   "text": "After three days of heavy rain, the Turia overflowed and flooded the city of Valencia, Spain, causing at least 81 deaths.",
   "context": [
    "The Turia or Túria is a river in Spain, which has its source in the Montes Universales in the mountain ranges of the northwesternmost end of the Sistema Ibérico, Teruel province. From its source to roughly the city of Teruel, it is called Guadalaviar. It runs through the provinces of Teruel, Cuenca and Valencia, and discharges into the Mediterranean Sea near the city of Valencia. The river formerly ran through the center of the city but was diverted south of the city to prevent flooding."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1956,
   "text": "The Queen Elizabeth Way, North America's first intercity divided highway, opens.",
   "context": [
    "The Queen Elizabeth Way (QEW) is a 400-series highway in the Canadian province of Ontario linking Toronto with Fort Erie in the Niagara Peninsula. The highway begins at the Canada–United States border on the Peace Bridge and travels 139.1 kilometres (86.4 mi) around the western end of Lake Ontario, ending at Highway 427 near the western border of Toronto. The freeway continues as the Gardiner Expressway into downtown Toronto. The QEW is one of Ontario's busiest highways, with an average of close to 250,000 vehicles per day on some sections."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1956,
   "text": "B. R. Ambedkar, a leader of India's \"Untouchable\" caste, publicly converted to Buddhism and became the leader of the Dalit Buddhist movement.",
   "context": [
    "Bhimrao Ramji Ambedkar was an Indian jurist, economist, social reformer and politician who chaired the committee that drafted the Constitution of India based on the debates of the Constituent Assembly of India and the first draft of Sir Benegal Narsing Rau. Ambedkar served as Law and Justice minister in the first cabinet of Jawaharlal Nehru. He later renounced Hinduism and converted to Buddhism, inspiring the Dalit Buddhist movement."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1953,
   "text": "Israeli military commander Ariel Sharon and his Unit 101 special forces attacked the village of Qibya on the West Bank, destroying 45 buildings, killing 42 villagers, and wounding 15 others.",
   "context": [
    "Ariel \"Arik\" Sharon was an Israeli general and politician who served as the prime minister of Israel from March 2001 until April 2006."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1949,
   "text": "The first of the Smith Act trials concluded in New York City, with eleven leaders of the Communist Party of the United States found guilty of violating the Smith Act.",
   "context": [
    "The Smith Act trials of Communist Party leaders were a series of trials held from 1949 to 1958 in which leaders of the Communist Party of the United States (CPUSA) were accused of violating the Smith Act, a 1940 statute that set penalties for advocating the violent overthrow of the government. The defendants argued that they advocated a peaceful transition to socialism, and that the First Amendment's guarantee of freedom of speech and of association protected their membership in a political party. Appeals from these trials reached the US Supreme Court, which ruled on issues in Dennis v. United States (1951) and Yates v. United States (1957)."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1947,
   "text": "American test pilot Chuck Yeager became the first person to break the sound barrier, reaching Mach 1.06 on board the Bell X-1, an experimental rocket-powered aircraft.",
   "context": [
    "Charles Elwood Yeager was a United States Air Force officer, flying ace, and record-setting test pilot who in October 1947 became the first pilot in history confirmed to have exceeded the speed of sound in level flight."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1943,
   "text": "World War II: During the second raid on Schweinfurt, the U.S. 8th Air Force suffered so many losses that it lost air supremacy over Germany for several months.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1943,
   "text": "The Holocaust: Prisoners at Sobibor extermination camp revolted, killing 11 SS officers and staging a mass escape.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1943,
   "text": "The Second Philippine Republic, a Japanese puppet state, was established with Jose P. Laurel as its first president.",
   "context": [
    "The Second Philippine Republic, officially the Republic of the Philippines and also known as the Japanese-sponsored Philippine Republic, was a pro-Axis government established on October 14, 1943, during the Japanese occupation of the islands until its dissolution on August 17, 1945."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1940,
   "text": "Second World War: During the Blitz, a semi-armour-piercing fragmentation bomb fell on the road above Balham station in London, which was being used as an air raid shelter, killing at least 64 people.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1939,
   "text": "Second World War: The German submarine U-47 torpedoed and sank the Royal Navy battleship HMS Royal Oak while the latter was anchored at Scapa Flow in Orkney, Scotland.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1926,
   "text": "The first book featuring English author A. A. Milne's fictional bear Winnie-the-Pooh was published.",
   "context": [
    "Winnie-the-Pooh is a 1926 children's book by English author A. A. Milne and English illustrator E. H. Shepard. The book is set in the fictional Hundred Acre Wood, with a collection of short stories following the adventures of an anthropomorphic teddy bear, Winnie-the-Pooh, and his friends Christopher Robin, Piglet, Eeyore, Owl, Rabbit, Kanga, and Roo. It is the first of two story collections by Milne about Winnie-the-Pooh, the second being The House at Pooh Corner (1928). Milne and Shepard collaborated previously for English humour magazine Punch, and in 1924 created When We Were Very Young, a poetry collection. Among the characters in the poetry book was a teddy bear Shepard modelled after his son's toy. Following this, Shepard encouraged Milne to write about his son Christopher Robin Milne's toys, and so they became the inspiration for the characters in Winnie-the-Pooh."
   ]
  },
  {
   "ref": "wikipedia#19",
   "year": 1913,
   "text": "The worst mining accident in the United Kingdom's history took place when an explosion resulted in 440 deaths at the Universal Colliery in Senghenydd, Wales.",
   "context": [
    "A mining accident is an accident that occurs during the process of mining minerals or metals. Thousands of miners die from mining accidents each year, especially from underground coal mining, although accidents also occur in hard rock mining. Coal mining is considered much more hazardous than hard rock mining due to flat-lying rock strata, generally incompetent rock, the presence of methane gas, and coal dust. Most of the deaths these days occur in developing countries, and rural parts of developed countries where safety measures are not practiced as fully. A mining disaster is an incident where there are five or more fatalities."
   ]
  },
  {
   "ref": "wikipedia#20",
   "year": 1888,
   "text": "French inventor Louis Le Prince filmed Roundhay Garden Scene (pictured), the earliest surviving motion picture, in Leeds, England.",
   "context": [
    "Louis Aimé Augustin Le Prince was a French-American artist, cinematographer and the inventor of an early motion-picture camera, and director of Roundhay Garden Scene. He was possibly the first person to shoot a moving picture sequence using a single lens camera and a strip of (paper) film. He has been credited as the \"Father of Cinematography\" but, due to his disappearance in 1890, his work did not influence the commercial development of cinema."
   ]
  },
  {
   "ref": "wikipedia#21",
   "year": 1863,
   "text": "American Civil War: In the Battle of Bristoe Station, the Union II Corps surprised and repelled the Confederate attack on the Union rearguard, resulting in a Union victory.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln as US president in 1860 and the growing abolitionist movement in the North. The war ended with Union victory, the dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#22",
   "year": 1805,
   "text": "War of the Third Coalition: French forces under Marshal Michel Ney defeated Austrian forces in Elchingen, present-day Germany.",
   "context": [
    "The War of the Third Coalition was a European conflict lasting from 1805 to 1806 and was the first conflict of the Napoleonic Wars. During the war, France and its client states under Napoleon I and its ally Spain opposed an alliance, the Third Coalition, which was made up of the United Kingdom, the Austrian Empire, the Russian Empire, Naples, Sicily, and Sweden. Prussia remained neutral during the war."
   ]
  },
  {
   "ref": "wikipedia#23",
   "year": 1758,
   "text": "Third Silesian War: At the Battle of Hochkirch, an Austrian army under Leopold Joseph von Daun surprised the Prussians commanded by Frederick the Great, overwhelming them and forcing a general retreat.",
   "context": [
    "The Third Silesian War was a war between Prussia and Austria that lasted from 1756 to 1763 and confirmed Prussia's control of the region of Silesia. The war was fought mainly in Silesia, Bohemia and Upper Saxony and formed one theatre of the Seven Years' War. It was the last of three Silesian Wars fought between Frederick the Great's Prussia and Maria Theresa's Austria in the mid-18th century, all three of which ended in Prussian control of Silesia."
   ]
  },
  {
   "ref": "wikipedia#24",
   "year": 1548,
   "text": "Forces of the Burmese Toungoo dynasty led by King Tabinshwehti (depicted) departed Martaban to begin an invasion of the Ayutthaya Kingdom.",
   "context": [
    "The Toungoo dynasty, also spelt Taungoo dynasty and also known as the Nyaungyan dynasty (ညောင်ရမ်းမင်းဆက်) after 1599, was the ruling dynasty of Burma (Myanmar) from the mid-16th century to 1752. It is also called the Second Burmese Empire (ဒုတိယမြန်မာနိုင်ငံတော်) in Burmese historiography. At its peak, Toungoo \"exercised suzerainty from present-day Assam, Manipur to the Cambodian marches and from the borders of Arakan to Yunnan\" and was \"probably the largest empire in the history of Southeast Asia.\" The dynasty ruled in two periods: the First Toungoo Empire (1510–1599) and the Nyaungyan Restoration (1599–1752)."
   ]
  },
  {
   "ref": "wikipedia#25",
   "year": 1066,
   "text": "Norman Conquest: William the Conqueror's forces defeated the English army near Hastings and killed Harold Godwinson (event pictured), the last crowned Anglo-Saxon king of England.",
   "context": [
    "The Norman Conquest of England was an 11th-century invasion by an army made up of thousands of Norman, French, Flemish, and Breton troops, all led by the Duke of Normandy, later styled William the Conqueror."
   ]
  }
 ],
 "recent_words_and_concepts": [
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