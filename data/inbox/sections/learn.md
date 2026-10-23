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
   "year": 2022,
   "text": "Myanmar civil war: Burmese military forces launched airstrikes that killed at least 80 concertgoers in Kachin State.",
   "context": [
    "The Myanmar civil war began following the military coup on 1 February 2021. The seizure of power triggered mass anti-coup demonstrations and a violent crackdown by the Tatmadaw, which significantly escalated the country's longstanding insurgencies."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2022,
   "text": "Pakistani journalist Arshad Sharif is shot and killed by local police in Kajiado, Kenya.",
   "context": [
    "Arshad Sharif was a Pakistani journalist, writer, and news anchor. He specialized in investigative journalism and covered many political events in the country for national and international news organisations. On 23 March 2019, he was awarded the Pride of Performance by the President of Pakistan Arif Alvi, for his contribution to journalism. He was shot and killed by police in Kenya on 22 October 2022. A 592-page report by the Pakistani Federal Investigation Agency (FIA) revealed the killing to be a “planned targeted assassination,\" claiming that Kenyan police were \"used as instruments.\" He was an outspoken critic of the Pakistani army."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2018,
   "text": "An escalator accident in Rome left 24 people injured, mostly fans of the CSKA Moscow football team who were in town for a UEFA Champions League match against Roma.",
   "context": [
    "On 23 October 2018, twenty-four people, mostly fans of the CSKA Moscow football team, were injured after a crowded escalator at a Rome Metro station malfunctioned. It suddenly sped up, and hurled people down the escalator."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2015,
   "text": "Hurricane Patricia, the most intense tropical cyclone on record in the Western Hemisphere, peaked with maximum sustained winds of 215 mph (345 km/h) south of Mexico.",
   "context": [
    "Hurricane Patricia was the most powerful tropical cyclone on record worldwide in terms of maximum sustained winds. It was also the second-most intense on record worldwide in terms of pressure, with a minimum atmospheric pressure of 872 mbar (25.75 inHg), just behind Typhoon Tip's 870 mbar (25.69 inHg). Originating from a sprawling disturbance near the Gulf of Tehuantepec, south of Mexico, in mid-October 2015, Patricia was first classified as a tropical depression on October 20. Initial development was slow, with only modest strengthening within the first day of its classification. The system later became a tropical storm and was named Patricia, the twenty-fourth named storm of the 2015 Pacific hurricane season. Exceptionally favorable environmental conditions fueled explosive intensification on October 22. A well-defined eye developed within an intense central dense overcast and Patricia grew from a tropical storm to a Category 5 hurricane in just 24 hours—a near-record pace. On October 23, the hurricane achieved its record peak intensity with maximum sustained winds of 215 mph (345 km/h). This made it the most intense tropical cyclone on record in the Western Hemisphere and the strongest globally in terms of one-minute maximum sustained winds. As Patricia neared its peak strength, the cyclone began to turn east-northeast towards Mexico."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 2011,
   "text": "During the Malaysian motorcycle Grand Prix, Marco Simoncelli (pictured) collided with two other riders, resulting in his death due to serious trauma to the head, neck, and chest.",
   "context": [
    "The 2011 Malaysian motorcycle Grand Prix was the seventeenth round of the 2011 Grand Prix motorcycle racing season. It took place on the weekend of 21–23 October 2011 at the Sepang International Circuit, but the MotoGP race was red-flagged and subsequently cancelled after two laps due to a serious accident involving Marco Simoncelli. Simoncelli fell while running fourth, his bike and body veering across the path of Colin Edwards and Valentino Rossi. Simoncelli was fatally struck in the head and chest by the two bikes. He was taken straight to the circuit's medical centre, but died of his injuries shortly thereafter."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 2001,
   "text": "Grand Theft Auto III was released, helping to popularize open-world and mature-content video games.",
   "context": [
    "Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by Rockstar Games. It is the first 3D game in the Grand Theft Auto series. Set in Liberty City, loosely based on New York City, the game follows Claude, a silent protagonist who becomes entangled in a world of crime, drugs, gang warfare, and corruption while pursuing revenge against his ex-girlfriend. The game is played from a third-person perspective and its world is navigated on foot or by vehicle. Its open world design lets the player freely roam Liberty City, which consists of three islands."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1995,
   "text": "The runway show for Alexander McQueen's collection The Hunger was staged at London's Natural History Museum.",
   "context": [
    "Lee Alexander McQueen was a British fashion designer and couturier. Known for his unconventional designs, he was one of the most influential fashion designers in the world from the early 1990s until his death by suicide in 2010. His brand, Alexander McQueen, is now owned by Gucci and remains active. McQueen was presented with four British Designer of the Year awards as well as being named the International Designer of the Year in 2003. That same year, he was also made a Commander of the Order of the British Empire for his work in fashion."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1972,
   "text": "Vietnam War: Operation Linebacker, a U.S. bombing campaign against North Vietnam in response to its Easter Offensive, ended after five months.",
   "context": [
    "The Vietnam War was an armed conflict in Vietnam, Laos, and Cambodia fought between North Vietnam and South Vietnam and their allies. North Vietnam was supported by the Soviet Union and China, while South Vietnam was supported by the United States and other anti-communist nations. The conflict was the second of the Indochina wars and a proxy war of the Cold War. The Vietnam War was one of the postcolonial wars of national liberation, a theater in the Cold War, and a civil war, with civil warfare a defining feature from the outset. Direct US military involvement escalated from 1965 until US forces were withdrawn in 1973. The fighting spilled into the Laotian and Cambodian civil wars, which ended with all three countries becoming communist in 1975."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1957,
   "text": "A screening of Mother India, one of the most influential Indian films in history, was held for President Rajendra Prasad and Prime Minister Jawaharlal Nehru two days before its release.",
   "context": [
    "Mother India is a 1957 Indian epic drama film, directed by Mehboob Khan and starring Nargis, Sunil Dutt, Rajendra Kumar and Raaj Kumar. A remake of Khan's earlier film Aurat (1940), it is the story of a poverty-stricken village woman named Radha (Nargis), who in the absence of her husband, struggles to raise her sons and survive against a cunning money-lender amidst many troubles."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1956,
   "text": "The Hungarian Revolution began as a peaceful student demonstration that attracted thousands while marching through central Budapest to the parliament building.",
   "context": [
    "The Hungarian Revolution of 1956, also known as the Hungarian Uprising, was an attempted countrywide revolution against the government of the Hungarian People's Republic (1949–1989) and the policies caused by the government's subordination to the Union of Soviet Socialist Republics (USSR). The uprising lasted 15 days before being crushed by Soviet tanks and troops on 7 November 1956. Thousands were killed or wounded, and nearly a quarter of a million Hungarians fled the country."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1955,
   "text": "The State of Vietnam voted in a referendum to become a republic.",
   "context": [
    "The State of Vietnam was a state in Southeast Asia that existed from 1949 until 1955, initially as an associated state in the French Union and later as a fully independent state. The state claimed authority over all of Vietnam during the First Indochina War and administered urban areas with large populations, while much of the remote territory was controlled by the Democratic Republic of Vietnam."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1942,
   "text": "World War II: Japanese troops began an unsuccessful attempt to recapture Henderson Field on Guadalcanal in the Solomon Islands from American forces.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1934,
   "text": "Jeannette Piccard (pictured) piloted a hot-air balloon flight that reached 57,579 feet (17,550 m), becoming the first woman to fly in the stratosphere.",
   "context": [
    "Jeannette Ridlon Piccard was an American high-altitude balloonist, and in later life an Episcopal priest, one of the Philadelphia Eleven. She held the women's altitude record for nearly three decades, and according to several contemporaneous accounts was regarded as the first woman in space."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1906,
   "text": "Alberto Santos-Dumont flew his biplane 14-bis for 50 metres (160 ft) at an altitude of about four metres (13 ft).",
   "context": [
    "Alberto Santos-Dumont was a Brazilian aeronaut, sportsman, inventor, and one of the few people to have contributed significantly to the early development of both lighter-than-air and heavier-than-air aircraft. The heir of a wealthy family of coffee producers, he dedicated himself to aeronautical study and experimentation in Paris, where he spent most of his adult life. He designed, built, and flew the first powered airships and won the Deutsch prize in 1901, when he flew around the Eiffel Tower in his airship No. 6, becoming one of the most famous people in the world in the early 20th century."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1850,
   "text": "The inaugural National Women's Rights Convention, presided over by American activist Paulina Wright Davis (pictured), began in Worcester, Massachusetts.",
   "context": [
    "The National Women's Rights Convention was an annual series of meetings that increased the visibility of the early women's rights movement in the United States. First held in 1850 in Worcester, Massachusetts, the National Women's Rights Convention combined both female and male leadership and attracted a wide base of support including temperance advocates and abolitionists. Speeches were given on the subjects of equal wages, expanded education and career opportunities, women's property rights, marriage reform, and temperance. Chief among the concerns discussed at the convention was the passage of laws that would give women the right to vote."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1798,
   "text": "War of the Second Coalition: The Ottoman–Albanian forces of Ali Pasha of Janina defeated French troops and captured the town of Preveza at the Battle of Nicopolis.",
   "context": [
    "The War of the Second Coalition (1798–1802) was the second war between revolutionary France and a coalition of European monarchies, led by Britain, Austria and Russia, and including the Ottoman Empire, Portugal, Naples and various German monarchies. Prussia did not join the coalition, while Spain supported France."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1641,
   "text": "Irish Catholic gentry in Ulster tried to seize control of Dublin Castle, the seat of English rule in Ireland, to force concessions to Catholics.",
   "context": [
    "Ulster is one of the four historical provinces of Ireland, located in the northern part of the island. It is made up of nine counties, with six of these comprising Northern Ireland, while the remaining three are in the Republic of Ireland."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1157,
   "text": "The Battle of Grathe Heath ended the Danish Civil War.",
   "context": [
    "The Battle of Grathe Heath was fought in 1157 between the Danish armies of Valdemar I and his rival for the Danish throne, Sweyn III. Valdemar's forces won the battle, and Sweyn III was slain while attempting to flee."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Headwinds / tailwinds (רוחות נגד / רוחות גב)",
  "Bootstrapped (ממומן מהכיס / מיזם שהתנהל ללא גיוס הון)",
  "A rising tide lifts all boats (גאות מרימה את כל הסירות)",
  "Sunk cost (עלות שקועה)",
  "Down round (סבב גיוס במחיר מופחת)",
  "Lipstick on a pig (שפתון על חזיר)",
  "EBITDA (רווח תפעולי לפני ריבית, מיסים, פחת והפחתות)",
  "Golden parachute (מצנח זהב)",
  "Pull the plug (לשלוף את התקע)",
  "Capex (הוצאות הוניות)",
  "Build vs. buy (לבנות או לקנות)",
  "Smoke and mirrors (עשן ומראות)",
  "Bellwether (ברומטר)",
  "Cash cow (פרת מזומנים)",
  "Death by a thousand cuts (מוות באלף חתכים)",
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