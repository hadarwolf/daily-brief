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
   "text": "Syrian civil war: Turkish forces began an offensive into north-eastern Syria following the withdrawal of U.S. troops from the region.",
   "context": [
    "The Syrian civil war was an armed conflict that began with the Syrian revolution in March 2011, when popular discontent with the Ba'athist regime ruled by Bashar al-Assad triggered large-scale protests and pro-democracy rallies across Syria, as part of the wider Arab Spring. The Assad regime responded to the protests with lethal force, which led to a series of defections, the emergence of armed opposition groups, and the civilian uprising descending into a civil war. The war lasted almost 14 years and culminated in the fall of the Assad regime in December 2024. Many sources regard this as the end of the civil war even though clashes have continued into 2026."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2012,
   "text": "Pakistani activist Malala Yousafzai (pictured) was severely injured by a Taliban gunman in a failed assassination attempt.",
   "context": [
    "Malala Yousafzai is a Pakistani female education activist, and producer of film and television. She is the youngest Nobel Prize laureate in history, receiving the Peace Prize in 2014 at age 17, and is the second Pakistani and the only Pashtun to receive a Nobel Prize. Yousafzai is a human rights advocate for the education of women and children in her native district, Swat, where the Pakistani Taliban had at times banned girls from attending school. Her advocacy has grown into an international movement, and according to former prime minister Shahid Khaqan Abbasi, she has become Pakistan's \"most prominent citizen\"."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1986,
   "text": "The Phantom of the Opera, a musical by Andrew Lloyd Webber and currently the longest-running Broadway show in history, opened in London's West End.",
   "context": [
    "The Phantom of the Opera is a musical with music by Andrew Lloyd Webber, lyrics by Charles Hart, and additional lyrics by Richard Stilgoe, with a libretto by Lloyd Webber and Stilgoe, inspired by the 1910 novel by Gaston Leroux, it tells the tragic story of beautiful soprano Christine Daaé, who becomes the obsession of a mysterious and disfigured musical genius living in the subterranean labyrinth beneath the Paris Opera House."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1962,
   "text": "Nick Holonyak, an engineer for General Electric, gave the first public demonstration of a light-emitting diode.",
   "context": [
    "Nick Holonyak Jr. was an American electronics engineer. He is noted particularly for his 1962 invention and first demonstration of a semiconductor laser diode that emitted visible light. This device was the forerunner of the first generation of commercial light-emitting diodes (LEDs). He was then working at a General Electric research laboratory near Syracuse, New York. He left General Electric in 1963 and returned to his alma mater, the University of Illinois Urbana-Champaign, where he later became John Bardeen Endowed Chair in Electrical and Computer Engineering and Physics."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1952,
   "text": "A footman shot and killed two colleagues and wounded the lady of the house at Knowsley Hall, England.",
   "context": [
    "Shootings occurred on the evening of 9 October 1952 in Knowsley Hall, Merseyside, England. Harold Winstanley, a 19-year-old trainee footman at the house, shot his employer, Lady Derby, and three colleagues, two of whom died: the butler, William Stallard, and the under-butler, Douglas Stuart. Winstanley fled the scene, assaulting the chef while doing so, and went to a local pub. He later took a bus into Liverpool, where he surrendered to the police. Winstanley was tried for the two murders and found guilty but insane and committed to Broadmoor Hospital."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1942,
   "text": "World War II: American forces defeated the Japanese at the Third Battle of the Matanikau in Guadalcanal, Solomon Islands, reversing the Japanese victory a couple of weeks earlier.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1921,
   "text": "The Mortimer War Memorial (pictured), designed by Herbert Maryon in memory of local servicemen who died in the First World War, was dedicated.",
   "context": [
    "The Mortimer War Memorial is a monument that commemorates the lives of servicemen from Stratfield Mortimer, Berkshire, England, who were killed in war. Unveiled on 9 October 1921, it was originally intended to commemorate 56 soldiers from the parish who died during the First World War. Subsequent plaques were added to recognise 12 who were killed in the Second World War, and to mark 50 years of freedom from global conflict."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1914,
   "text": "World War I: The civilian authorities of Antwerp surrendered and allowed the German army to capture the city.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1913,
   "text": "Carrying a cargo hold full of highly flammable chemicals, the ocean liner SS Volturno caught fire in the north Atlantic and sank, resulting in 136 deaths.",
   "context": [
    "SS Volturno was an ocean liner that caught fire and was eventually scuttled in the North Atlantic in October 1913. She was a Royal Line ship under charter to the Uranium Line at the time of the fire. After the ship issued SOS signals, eleven ships came to her aid and, in heavy seas and gale winds, rescued 521 passengers and crewmen. In total 135 people died in the incident, most of them women and children in lifeboats launched unsuccessfully prior to the arrival of the rescue ships."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1912,
   "text": "Following a reduction in pay, textile workers in Little Falls, New York, walked out of their mill, starting a three-month strike.",
   "context": [
    "Little Falls is a city in Herkimer County, New York, United States. The population was 4,605 at the time of the 2020 census, which is the second-smallest city population in the state, ahead of only the city of Sherrill. The city is built on both sides of the Mohawk River, at a point at which rapids had impeded travel upriver. Transportation through the valley was improved by construction of the Erie Canal, completed in 1825 and connecting the Great Lakes with the Hudson River."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1888,
   "text": "The Washington Monument  in Washington, D.C., at the time the world's tallest building, officially opened to the general public.",
   "context": [
    "The Washington Monument is a 555-foot (169 m) tall obelisk on the National Mall in Washington, D.C., built to commemorate George Washington, a Founding Father of the United States and the nation's first president. Standing east of the Reflecting Pool and the Lincoln Memorial, the monument is made of bluestone gneiss for the foundation and of granite for the construction. The outside facing consists of three different kinds of white marble, as the building process was repeatedly interrupted. The monument stands 554 feet 7+11⁄32 inches (169.046 m) tall, according to U.S. National Geodetic Survey measurements in 2013 and 2014. It is the third tallest monumental column in the world, trailing only the Juche Tower in Pyongyang, and the San Jacinto Monument in Houston, Texas. It was the world's tallest structure between 1884 and 1889, after which it was overtaken by the Eiffel Tower, in Paris."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1874,
   "text": "The Universal Postal Union, then known as the General Postal Union, was established with the signing of the Treaty of Bern to unify disparate postal services and regulations so that international mail could be exchanged easily.",
   "context": [
    "The Universal Postal Union is a specialized agency of the United Nations (UN) that coordinates postal policies among member nations and facilitates a uniform worldwide postal system. It has 192 member states and is headquartered in Bern, Switzerland."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1813,
   "text": "Late in the Napoleonic Wars, Empress Marie Louise (pictured) issued decrees conscripting tens of thousands of French teenagers, who became known as Marie-Louises.",
   "context": [
    "The Napoleonic Wars (1803–1815) were a global series of conflicts fought by a fluctuating array of European coalitions against the French First Republic (1803–1804) under the First Consul followed by the First French Empire (1804–1815) under the Emperor of the French, Napoleon. The wars originated in political forces arising from the French Revolution (1789–1799) and French Revolutionary Wars (1792–1802) and produced a period of French domination over continental Europe. The wars are categorised as seven conflicts, five named after the coalitions that fought Napoleon, plus two named for their respective theatres: the War of the Third Coalition, War of the Fourth Coalition, War of the Fifth Coalition, War of the Sixth Coalition, War of the Seventh Coalition, the Peninsular War, and the French invasion of Russia."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1793,
   "text": "French Revolution: After a month-long siege, the leaders of Lyon surrendered, ending their revolt against the National Convention.",
   "context": [
    "The French Revolution was a period of political and societal change in France that began with the Estates General of 1789 and ended with the Coup of 18 Brumaire on 9 November 1799. Many of the revolution's ideas are considered fundamental principles of liberal democracy, and its values remain central to modern French political discourse. It was caused by a combination of social, political, and economic factors which the existing regime proved unable to manage."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1780,
   "text": "The deadliest Atlantic hurricane on record began to impact the Caribbean, killing at least 20,000 people across the Antilles over the subsequent days.",
   "context": [
    "The Great Hurricane of 1780 was the deadliest tropical cyclone in the Western Hemisphere. An estimated 22,000 people died throughout the Lesser Antilles when the storm passed through the islands from October 10 to October 16. Specifics on the hurricane's track and strength are unknown, as the official Atlantic hurricane database only goes back to 1851."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1740,
   "text": "European soldiers and Javanese collaborators started massacring Chinese Indonesians  in the port city of Batavia, modern-day Jakarta: at least 10,000 people were killed.",
   "context": [
    "A massacre and pogrom of ethnic Chinese residents of the port city of Batavia in the Dutch East Indies was carried out by the Dutch East India Company and allied members of other Batavian ethnic groups in 1740. The violence in the city lasted from 9 until 22 October, with minor skirmishes outside the walls continuing late into November that year. Historians have estimated that at least 10,000 ethnic Chinese were massacred; just 600 to 3,000 are believed to have survived."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1708,
   "text": "Great Northern War: Russia defeated Sweden at the Battle of Lesnaya on the Russian–Polish border, in present-day Belarus.",
   "context": [
    "In the Great Northern War (1700–1721), a coalition led by Russia successfully contested the supremacy of Sweden in Northern, Central and Eastern Europe. The initial leaders of the anti-Swedish alliance were Peter I of Russia, Frederick IV of Denmark–Norway and Augustus II the Strong of Saxony-Poland-Lithuania. Frederick IV and Augustus II were defeated by Sweden, under Charles XII, and forced out of the alliance in 1700 and 1706, respectively, but rejoined it in 1709 after the defeat of Charles XII at the Battle of Poltava. George I of Great Britain and the Electorate of Hanover joined the coalition in 1714 for Hanover and in 1717 for Britain, and Frederick William I of Brandenburg-Prussia joined it in 1715."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1676,
   "text": "Antonie van Leeuwenhoek wrote a letter to the Royal Society describing \"animalcules\" – the first known description of protozoa (pictured).",
   "context": [
    "Antonie Philips van Leeuwenhoek was a Dutch microbiologist and microscopist in the Golden Age of Dutch art, science and technology. A largely self-taught man in science, he is commonly known as \"the Father of Microbiology\", and one of the first microscopists and microbiologists. Van Leeuwenhoek is best known for his pioneering work in microscopy and for his contributions toward the establishment of microbiology as a scientific discipline."
   ]
  }
 ],
 "recent_words_and_concepts": [
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