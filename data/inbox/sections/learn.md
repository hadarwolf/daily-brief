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
   "year": 2002,
   "text": "A bomb exploded in the Myyrmanni shopping center in Helsinki, Finland (aftermath pictured), resulting in seven deaths and 159 injuries.",
   "context": [
    "The Myyrmanni bombing took place on October 11, 2002, in Myyrmäki, Vantaa, Finland, in Greater Helsinki, at the Myyrmanni shopping mall. A bomb hidden in a backpack exploded in the center of the mall, killing seven people including the bomber. The blast left a 10-cm deep crater in the floor and blew out the glass dome of the mall. The dead included two teenagers and a seven-year-old. 159 people were injured, including 10 children. 66 victims required hospitalization while the remainder were treated and released at the scene. The bombing took place during the pre-weekend shopping surge late on a Friday afternoon, with 1,000–2,000 people in the shopping center, including many children who had come to see a clown performance."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1987,
   "text": "Sri Lankan Civil War: The Indian Peace Keeping Force began Operation Pawan to take control of Jaffna from the Tamil Tigers and enforce their disarmament as a part of the Indo-Sri Lanka Accord.",
   "context": [
    "The Sri Lankan civil war was fought in Sri Lanka from 1983 to 2009. Beginning on 23 July 1983, it was an intermittent insurgency against the government by the Liberation Tigers of Tamil Eelam led by Velupillai Prabhakaran. The LTTE fought to create an independent Tamil state called Tamil Eelam in the north-east of the island in response to continuous discrimination and violent persecution against Sri Lankan Tamils by the predominantly Sinhalese government of Sri Lanka."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1987,
   "text": "An estimated 750,000 people attended the \"Great March\" in Washington, D.C., to demand greater civil rights for the LGBT community.",
   "context": [
    "The Second National March on Washington for Lesbian and Gay Rights was a large political rally that took place in Washington, D.C., on October 11, 1987. Around 750,000 people participated. Its success, size, scope, and historical importance have led to it being called, \"The Great March\". It marked the first national coverage of ACT UP, with AIDS activists prominent in the main march, as well as making headlines the next day during mass civil disobedience actions at the United States Supreme Court Building."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1984,
   "text": "Aboard the Space Shuttle Challenger, astronaut Kathryn D. Sullivan (pictured) became the first American woman to perform a space walk.",
   "context": [
    "Space Shuttle Challenger (OV-099) was a Space Shuttle orbiter manufactured by Rockwell International and operated by NASA. Named after the commanding ship of a nineteenth-century scientific expedition that traveled the world, Challenger was the second Space Shuttle orbiter to fly into space after Columbia, and launched on its maiden flight in April 1983. It was destroyed in January 1986 soon after launch in a disaster that killed all seven crew members aboard."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1973,
   "text": "Typhoon Nora, the fourth-most intense tropical cyclone on record, dissipated after killing 40 people and leaving more than a million homeless across Taiwan and the Philippines.",
   "context": [
    "Typhoon Nora, known in the Philippines as Super Typhoon Luming, is tied for the third-most intense tropical cyclone on record. Originating from an area of low pressure over the western Pacific, Nora was first identified as a tropical depression on October 2, 1973. Tracking generally westward, the system gradually intensified, attaining typhoon status the following evening. After turning northwestward, the typhoon underwent a period of rapid intensification, during which its central pressure decreased by 77 mb in 24 hours. At the end of this phase, Nora peaked with winds of 295 km/h (185 mph) and a pressure of 875 mb, making it the most-intense tropical cyclone on record at the time; however, this pressure has since been tied with Typhoon June, and surpassed by Typhoon Tip and Hurricane Patricia. The typhoon subsequently weakened and turned northwestward as it approached the Philippines. After brushing Luzon on October 7, the system passed south of Taiwan and ultimately made landfall in China on October 10. Once onshore, Nora quickly weakened and dissipated the following day."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1968,
   "text": "Apollo 7, the first manned mission of NASA's Apollo program, and the first three-man American space mission, launched from Complex 34 in Cape Kennedy, Florida.",
   "context": [
    "Apollo 7 was the first crewed flight in NASA's Apollo program, and saw the resumption of human spaceflight by the agency after the fire that killed the three Apollo 1 astronauts during a launch rehearsal test on January 27, 1967. The Apollo 7 crew was commanded by Walter M. Schirra, with Command Module Pilot Donn F. Eisele and Lunar Module pilot R. Walter Cunningham."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1950,
   "text": "A field-sequential color system developed by Hungarian-American engineer Peter Goldmark became the first color television system to be adopted for commercial use, only for it to be abandoned a year later.",
   "context": [
    "\nA field-sequential color system (FSC) is a color television system in which the primary color information is transmitted in successive images and which relies on the human vision system to fuse the successive images into a color picture. One field-sequential system was developed in 1940 by Guillermo González Camarena. The Federal Communications Commission adopted it on October 11, 1950, as the standard for color television in the United States. Its regular broadcast debut was on June 25, 1951. However, a few months later, CBS ended color broadcasting on October 20, 1951. In March 1953, CBS withdrew its color system as a standard, creating an opening for all-electronic color systems from other manufacturers."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1950,
   "text": "CBS's field-sequential color system for television was the first to be licensed for broadcast by the U.S. Federal Communications Commission.",
   "context": [
    "CBS Broadcasting Inc. is an American commercial broadcast television network and the flagship property of the CBS Entertainment Group division of Skydance Corporation. It is one of Skydance's three flagship subsidiaries, along with Paramount Pictures and MTV."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1942,
   "text": "World War II: At the Battle of Cape Esperance on the northwest coast of Guadalcanal, American ships intercepted and defeated a Japanese fleet sent to attack Henderson Field.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1937,
   "text": "Former British king Edward and his wife arrived at Berlin Friedrichstraße station to begin a tour of Nazi Germany, where they were greeted with Nazi salutes and dined with high-ranking members of the state apparatus.",
   "context": [
    "Edward VIII, later known as the Duke of Windsor, was King of the United Kingdom and the British Dominions, and Emperor of India, from 20 January 1936 until his abdication in December of the same year."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1890,
   "text": "In Washington, D.C., the Daughters of the American Revolution was founded.",
   "context": [
    "Washington, D.C., officially the District of Columbia and commonly shortened to Washington, or DC, is the capital city of the United States, and its only federal district."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1865,
   "text": "The Morant Bay rebellion, led by Paul Bogle and George William Gordon, began in Jamaica; after protestors burned down the courthouse, it was brutally suppressed by Governor Edward John Eyre.",
   "context": [
    "The Morant Bay Rebellion began with a protest march to the courthouse in Morant Bay, Jamaica, by hundreds of people led by preacher Paul Bogle. Some were armed with sticks and stones. After seven men were shot and killed by the volunteer militia, the protesters attacked and burned the courthouse and nearby buildings. Twenty-five people died. Over the next two days, poor freedmen rose in rebellion across most of St. Thomas-in-the-East parish."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1852,
   "text": "The University of Sydney (pictured), Australia's oldest university, was inaugurated two years after being established by the University of Sydney Act.",
   "context": [
    "The University of Sydney (USYD) is a public research university in Sydney, Australia. Founded in 1850, it is the oldest university in both Australia and Oceania. One of Australia's six sandstone universities, it was one of the world's first universities to admit students solely on academic merit, and opened its doors to women on the same basis as men. The university comprises eight academic faculties and university schools, through which it offers bachelor, master and doctoral degrees."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1840,
   "text": "Bashir Shihab II (pictured) surrendered to the Ottoman Empire and was removed as Emir of Mount Lebanon after an imperial decree by Sultan Abdülmecid I.",
   "context": [
    "Bashir Shihab II was a Lebanese emir who ruled the Emirate of Mount Lebanon between 1788 –1840. Born to a branch of the Shihab family which had converted from Sunni Islam, the religion of previous Shihabi emirs, he was the only Maronite ruler of the Mount Lebanon Emirate."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1797,
   "text": "French Revolutionary Wars: The Royal Navy captured eleven Dutch Navy ships without any losses at the Battle of Camperdown.",
   "context": [
    "The French Revolutionary Wars were a series of sweeping military conflicts resulting from the French Revolution that lasted from 1792 until 1802. They pitted France against Great Britain, Austria, Prussia, Russia, and several other countries. The wars are divided into two periods: the War of the First Coalition (1792–1797) and the War of the Second Coalition (1798–1802). Initially confined to Europe, the fighting gradually assumed a global dimension. After a decade of constant warfare and aggressive diplomacy, France had conquered territories in the Italian peninsula, the Low Countries, and the Rhineland with its very large and powerful military which had been totally mobilized for war against most of Europe with mass conscription of the vast French population. French success in these conflicts ensured military occupation and the spread of revolutionary principles over much of Europe."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1776,
   "text": "American Revolutionary War: A British fleet defeated American ships at the Battle of Valcour Island on Lake Champlain, but gave American forces enough time to prepare their defenses for the Saratoga campaign.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1311,
   "text": "The peerage and clergy of the Kingdom of England published the Ordinances of 1311 to restrict King Edward II's powers.",
   "context": [
    "The Peerage of England comprises all peerages created in the Kingdom of England before the Act of Union in 1707. From that year, the Peerages of England and Scotland were closed to new creations, and new peers were created in a single Peerage of Great Britain. There are five peerages in the United Kingdom in total.\nEnglish Peeresses obtained their first seats in the House of Lords under the Peerage Act 1963 from which date until the passage of the House of Lords Act 1999 all Peers of England could sit in the House of Lords."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1142,
   "text": "The Treaty of Shaoxing was ratified, ending the Jin–Song wars, although sporadic fighting continued until 1234.",
   "context": [
    "The Treaty of Shaoxing was the agreement and truce that ended the protracted military conflicts between the Jin dynasty and the Southern Song dynasty. It also legally drew up the boundaries of the two countries and forced the Song dynasty to renounce all claims to its former territories north of the Qinling Huaihe Line, which included its former capital of Kaifeng. Emperor Gaozong of Song subsequently executed the anti-Jin faction general Yue Fei after the treaty."
   ]
  }
 ],
 "recent_words_and_concepts": [
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