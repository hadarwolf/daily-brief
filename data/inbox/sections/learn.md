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
   "year": 2018,
   "text": "The Washington Post journalist Jamal Khashoggi was assassinated in the Saudi consulate in Istanbul, Turkey.",
   "context": [
    "The Washington Post is an American daily newspaper published in Washington, D.C. It is the most widely circulated newspaper in the Washington metropolitan area and is considered a newspaper of record in the United States. In 2023, the Post had 130,000 print subscribers and 2.5 million digital subscribers, both ranking third among American newspapers after The New York Times and The Wall Street Journal. In 2025, the number of print subscribers sank below 100,000 for the first time in 55 years."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2006,
   "text": "A gunman killed five Amish girls before committing suicide in a one-room schoolhouse in Nickel Mines, Pennsylvania.",
   "context": [
    "On October 2, 2006, a mass shooting occurred at the West Nickel Mines School, an Amish one-room schoolhouse in the Old Order Amish community of Nickel Mines, a village in Bart Township, Pennsylvania. Thirty-two-year-old Charles Carl Roberts IV took hostages and shot ten girls, killing six, before dying by suicide in the schoolhouse.\nThe emphasis on forgiveness and reconciliation in the Amish community's response was widely discussed by the national media. The West Nickel Mines School was later demolished, and a new one-room schoolhouse, the New Hope School, was built at another location. It is the deadliest school shooting in Pennsylvania history."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2005,
   "text": "Typhoon Longwang made landfall in China as the deadliest tropical cyclone in that year to impact the country.",
   "context": [
    "Typhoon Longwang, known in the Philippines as Typhoon Maring, was the deadliest tropical cyclone to impact China during the 2005 Pacific typhoon season. Longwang was first identified as a tropical depression on September 25 north of the Mariana Islands. Moving along a general westward track, the system quickly intensified and reached typhoon status on September 27. After reaching Category 4-equivalent intensity on the Saffir–Simpson hurricane scale, adverse atmospheric conditions along with internal structural changes resulted in temporary weakening. The structural change culminated in Longwang becoming an annular typhoon and prompted re-intensification. The storm attained peak strength with winds of 175 km/h (109 mph) and a pressure of 930 mbar on October 1 as it approached Taiwan. Interaction with the mountainous terrain of the island and further structural changes caused some weakening before the typhoon made landfall near Hualien City early on October 2. Crossing the island in six hours, Longwang emerged over the Taiwan Strait before moving onshore again later that day, this time in Fujian Province, China as a minimal typhoon. Once over mainland China, the storm quickly weakened and ultimately dissipated late on October 3."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1990,
   "text": "A hijacked airliner collided with two other planes while attempting to land at Guangzhou Baiyun International Airport in China, killing 128 and injuring 71.",
   "context": [
    "Aircraft hijacking is the unlawful seizure of an aircraft by an individual or a group. Dating from the earliest of hijackings, most cases involve the pilot being forced to fly according to the hijacker's demands. There have also been incidents where the hijackers have overpowered the flight crew, made unauthorized entry into the cockpit and flown them into buildings—most notably in the September 11 attacks—and in some cases, planes have been hijacked by the official captain or first officer, such as with Ethiopian Airlines Flight 702."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1971,
   "text": "Nguyễn Văn Thiệu was re-elected unopposed as President of South Vietnam.",
   "context": [
    "Nguyễn Văn Thiệu was a South Vietnamese military officer and politician who was the president of South Vietnam from 1967 to 1975. He was a general in the Republic of Vietnam Armed Forces (RVNAF), became head of a military junta in 1965, and then president after winning a rigged election in 1967. He headed the government of South Vietnam until he resigned and left the nation and relocated to Taipei a few days before the fall of Saigon and the ultimate North Vietnamese victory."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1967,
   "text": "Thurgood Marshall was sworn in as the first African-American justice of the Supreme Court of the United States.",
   "context": [
    "Thoroughgood \"Thurgood\" Marshall was an American lawyer who served as an associate justice of the Supreme Court of the United States from 1967 until 1991. He was the Supreme Court's first African-American justice. Before his judicial service, he was an attorney who fought for civil rights, leading the NAACP Legal Defense and Educational Fund. Marshall was a prominent figure in the movement to end racial segregation in American public schools. He won 29 of the 32 civil rights cases he argued before the Supreme Court, culminating in the Court's landmark 1954 decision in Brown v. Board of Education, which rejected the separate but equal doctrine and held segregation in public education to be unconstitutional. President Lyndon B. Johnson appointed Marshall to the Supreme Court in 1967. A staunch liberal, he frequently dissented as the Court became increasingly conservative."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1942,
   "text": "Second World War: HMS Curacoa (pictured) was accidentally rammed and sunk by RMS Queen Mary while escorting the liner to provide protection from submarine attacks.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1913,
   "text": "The Shubert Theatre (pictured) opened on Broadway with a production of Hamlet.",
   "context": [
    "The Shubert Theatre is a Broadway theater at 225 West 44th Street in the Theater District of Midtown Manhattan in New York City, New York, U.S. Opened in 1913, the theater was designed by Henry Beaumont Herts in the Italian Renaissance style and was built for the Shubert brothers. Lee and J. J. Shubert had named the theater in memory of their brother Sam S. Shubert, who died in an accident several years before the theater's opening. It has 1,502 seats across three levels and is operated by The Shubert Organization. The facade and interior are New York City landmarks."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1879,
   "text": "Qing China signed the Treaty of Livadia with the Russian Empire, but the terms were so unfavorable that the Chinese government refused to ratify the treaty.",
   "context": [
    "The Qing dynasty, officially the Great Qing, also known as the Qing Empire or Qing China, was a Manchu-led imperial dynasty of China and an early modern empire in East Asia which existed from 1636/1644 to 1912. The last imperial dynasty in Chinese history, the Qing dynasty was preceded by the Ming dynasty and succeeded by the Republic of China. At the height of its power, the empire stretched from the Sea of Japan in the east to the Pamir Mountains in the west, and from the Mongolian Plateau in the north to the South China Sea in the south. Originally emerging from the Later Jin dynasty founded in 1616 and proclaimed in Shenyang in 1636, the dynasty seized control of the Ming capital Beijing and North China in 1644, traditionally considered the start of the dynasty's rule. The dynasty lasted until the Xinhai Revolution of October 1911 led to the abdication of the last emperor in February 1912. The multi-ethnic Qing dynasty assembled the territorial base for modern China. The Qing controlled the most territory of any dynasty in Chinese history, and in 1790 was the fourth-largest empire in world history to that point. It was also the most populous state at the time, with over 426 million citizens in 1907."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1835,
   "text": "Mexican dragoons dispatched to disarm settlers at Gonzales in Mexican Texas encountered stiff resistance from a Texian militia at the Battle of Gonzales, the first armed engagement of the Texas Revolution.",
   "context": [
    "Dragoons were originally a class of mounted infantry, who used horses for mobility, but dismounted to fight on foot. From the early 17th century onward, dragoons were increasingly also employed as conventional cavalry and trained for combat with swords and firearms from horseback. While their use goes back to the late 16th century, dragoon regiments were established in most European armies during the 17th and early 18th centuries; they provided greater mobility than regular infantry but were far less expensive than cavalry."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1766,
   "text": "As part of wider food riots, citizens in Nottingham, England, looted large quantities of cheese; one man was killed during attempts to restore order.",
   "context": [
    "The 1766 food riots took place across England in response to rises in the prices of wheat and other cereals following a series of poor harvests. Riots were sparked by the first largescale exports of grain in August and peaked in September–October. Around 131 riots were recorded, though many were relatively non-violent. In many cases traders and farmers were forced by the rioters to sell their wares at lower rates. In some instances, violence occurred with shops and warehouses looted and mills destroyed. There were riots in many towns and villages across the country but particularly in the South West and the Midlands, which included the Nottingham cheese riot."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1470,
   "text": "With King Edward IV of England forced to flee to the Burgundian Netherlands after a rebellion organised by Richard Neville, 16th Earl of Warwick, Henry VI was restored to the throne.",
   "context": [
    "Edward IV was King of England from 4 March 1461 to 3 October 1470, then again from 11 April 1471 until he died in 1483. A member of the House of York, he was a central figure in the Wars of the Roses, a series of civil wars in England fought between the Yorkist and Lancastrian factions between 1455 and 1487."
   ]
  }
 ],
 "recent_words_and_concepts": [
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