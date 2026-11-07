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
   "year": 2000,
   "text": "Hillary Clinton was elected as a US senator from New York, the first time a first lady had been elected to public office.",
   "context": [
    "Hillary Diane Rodham Clinton is an American politician, lawyer and diplomat. She was the 67th United States secretary of state in the administration of Barack Obama from 2009 to 2013, a U.S. senator representing New York from 2001 to 2009, and the first lady of the United States from 1993 to 2001 as the wife of Bill Clinton. A member of the Democratic Party, she was the party's nominee in the 2016 presidential election, becoming the first woman to win a presidential nomination by a major U.S. political party. Clinton won the popular vote but lost the election to Republican Party nominee Donald Trump in the United States Electoral College. She is the only first lady of the United States to have run for, or held, elected office."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1996,
   "text": "NASA launched Mars Global Surveyor from the Kennedy Space Center at Cape Canaveral, Florida.",
   "context": [
    "The National Aeronautics and Space Administration is an independent agency of the U.S. federal government responsible for the United States' civil space program, as well as research in aeronautics and space. Headquartered in Washington, D.C., NASA operates ten field centers across the US and is organized into three mission directorates: Human Spaceflight, Research and Technology, and Science. Established in 1958 amid the Space Race, NASA succeeded the National Advisory Committee for Aeronautics (NACA) to give the US space program a distinct civilian orientation focused on peaceful applications. Since then, it has led most American spaceflight programs, including Project Mercury, Project Gemini, the Apollo program, Skylab, the Space Shuttle, the International Space Station (ISS), and the ongoing multinational Artemis program."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1991,
   "text": "Magic Johnson announced his retirement from professional basketball due to HIV infection.",
   "context": [
    "Earvin \"Magic\" Johnson Jr. is an American businessman and former professional basketball player. He is widely regarded as the greatest point guard of all time and one of the greatest basketball players in history. Johnson spent his entire career with the Los Angeles Lakers in the National Basketball Association (NBA). After winning a national championship with the Michigan State Spartans in 1979, Johnson was selected first overall in the 1979 NBA draft by the Lakers, then led the team to five NBA championships during their \"Showtime\" era. Johnson retired abruptly in 1991 after announcing that he had contracted HIV, but returned to play in the 1992 All-Star Game, winning the All-Star MVP Award. He retired again after fellow players protested his return, but returned in 1996, at age 36, to play 32 games for the Lakers before retiring for the third and final time."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1987,
   "text": "Tunisian prime minister Zine El Abidine Ben Ali deposed and replaced President Habib Bourguiba by declaring him medically unfit for the duties of the office.",
   "context": [
    "Zine El Abidine Ben Ali, commonly known as Ben Ali or Ezzine, was a Tunisian politician, military officer and dictator who served as the second president of Tunisia from 1987 to 2011. In that year, during the Tunisian revolution, he was overthrown and fled to Saudi Arabia."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1987,
   "text": "Singapore's first Mass Rapid Transit line opened, with train services running between Yio Chu Kang and Toa Payoh.",
   "context": [
    "The Mass Rapid Transit (MRT) is a rapid transit system in Singapore and the island country's principal mode of railway transportation. After two decades of planning, the system commenced operations in November 1987 with an initial 6 km (3.7 mi) stretch consisting of five stations. The network has since grown to span the length and breadth of the country's main island – with the exception of the forested core and the rural northwestern region – in accordance with Singapore's aim of developing a comprehensive rail network as the backbone of the country's public transportation system, averaging a daily ridership of 3.49 million in 2025."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1972,
   "text": "A ship collision with the Sidney Lanier Bridge in the U.S. state of Georgia resulted in a bridge collapse (pictured), which killed ten people.",
   "context": [
    "The Sidney Lanier Bridge is a cable-stayed bridge that spans the Brunswick River in Brunswick, Georgia, United States. The bridge is named after Georgia-born poet Sidney Lanier and carries part of U.S. Route 17 in Georgia. It was also the name of an earlier bridge which was next to the current site."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1949,
   "text": "Oil was discovered in the Caspian Sea off the coast of Azerbaijan, leading to the construction of Neft Daşları, the world's first offshore oil platform.",
   "context": [
    "The Caspian Sea is the world's largest inland body of water, also described as the world's largest lake and usually referred to as a full-fledged sea. An endorheic basin, it is situated in both Europe and Asia: east of the Caucasus, west of the broad steppe of Central Asia, south of the fertile plains of Southern Russia in Eastern Europe, and north of the mountainous Iranian Plateau. It covers a surface area of 371,000 km2 (143,244 sq mi), an area similar to Japan, with a volume of 78,200 km3 (19,000 cu mi). It has a salinity of approximately 1.2%, about a third of the salinity of average seawater. It is bounded by Kazakhstan to the northeast, Russia to the northwest, Azerbaijan to the southwest, Iran to the south, and Turkmenistan to the southeast. The name of the Caspian Sea is derived from the ancient Iranic Caspi people."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1934,
   "text": "The first specimens of the tufted jay (pictured) to be scientifically described were collected in Mexico.",
   "context": [
    "The tufted jay, also known as the painted jay and Dickey's jay, is a species of bird in the crow family Corvidae. It is endemic to a small area of the Sierra Madre Occidental in the Mexican states of Sinaloa, Durango, and Nayarit. A distinctive large jay, it has a prominent dark crest on its head; purplish blue back, wings, and face; a white spot above the eye and on the cheek; white undersides; and a partially white tail. Its typical call is a quick, four-note vocalization."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1917,
   "text": "World War I: British forces captured Gaza following the retreat of the Ottoman garrison.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1916,
   "text": "Jeannette Rankin (pictured) became the first woman to be elected to the United States House of Representatives.",
   "context": [
    "Jeannette Pickering Rankin was an American politician and women's rights advocate who became the first woman to hold federal office in the United States. She was elected to the U.S. House of Representatives as a Republican from Montana in 1916 for one term, then was elected again in 1940. Rankin remains the only woman ever elected to Congress from Montana."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1893,
   "text": "Between 20 and 30 people in the Grand Lyceum Theatre in Barcelona were killed in a terrorist attack  by Spanish anarchist Santiago Salvador.",
   "context": [
    "The Gran Teatre del Liceu, or simply Liceu, is a theater in Barcelona, Spain. Situated on La Rambla, it is the city's oldest theater building still in use for its original purpose."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1861,
   "text": "American Civil War: Future U.S. president Ulysses S. Grant engaged in his first combat leadership role in the Battle of Belmont in Mississippi County, Missouri.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve the institution of slavery. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860, the abolitionist movement, and the growing electoral power of the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1837,
   "text": "American abolitionist Elijah Parish Lovejoy was murdered by a pro-slavery mob in Alton, Illinois, during an attack to destroy his printing press and abolitionist materials.",
   "context": [
    "In the United States, abolitionism, the movement that sought to end chattel slavery in the country, was active from the colonial era until the American Civil War, the end of which brought about the abolition of American Chattel Slavery, except as punishment for a crime, through the Thirteenth Amendment to the United States Constitution."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1825,
   "text": "Jereboam O. Beauchamp murdered Kentucky legislator Solomon P. Sharp; Beauchamp later became the first person legally executed in the state.",
   "context": [
    "Jereboam Orville Beauchamp was an American lawyer who murdered the Kentucky legislator Solomon P. Sharp; the crime is known as the Beauchamp–Sharp Tragedy. In 1821, Sharp had been accused in Bowling Green, Kentucky, by Anna Cooke of fathering her illegitimate child; it was stillborn.[a] Sharp denied paternity, and public opinion favored him. In 1824, Beauchamp married Cooke, who was seventeen years his senior. She asked him to kill Sharp to defend her honor."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1811,
   "text": "Tecumseh's War: American forces led by William Henry Harrison defeated the forces of Shawnee leader Tecumseh's growing confederation at the Battle of Tippecanoe near present-day Battle Ground, Indiana.",
   "context": [
    "Tecumseh's War was a conflict between the United States and Tecumseh's confederacy, led by the Shawnee leader Tecumseh in the Indiana Territory. Although the war is often considered to have climaxed with William Henry Harrison's victory at the Battle of Tippecanoe in 1811, Tecumseh's War essentially continued into the War of 1812 and is frequently considered a part of that larger struggle. The war lasted for two more years, until 1813, when Tecumseh died fighting Harrison's Army of the Northwest at the Battle of Moraviantown in Upper Canada, near present-day Chatham, Ontario, and his confederacy disintegrated. Tecumseh's War is viewed by some academic historians as the final conflict of a longer-term military struggle for control of the Great Lakes region of North America, encompassing a number of wars over several generations, referred to as the Sixty Years' War."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1723,
   "text": "O Ewigkeit, du Donnerwort, BWV 60, a dialogue cantata by Johann Sebastian Bach for Leipzig, was first performed.",
   "context": [
    "O Ewigkeit, du Donnerwort, BWV 60, is a church cantata for the 24th Sunday after Trinity composed by Johann Sebastian Bach. It was first performed in Leipzig on 7 November 1723, and is part of Bach's first cantata cycle. It is one of Bach's dialogue cantatas: its topic, fear of death and hope of salvation, plays out mainly through a conversation between two allegorical figures, Fear and Hope."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 680,
   "text": "The Third Council of Constantinople convened to settle the Christological controversies of monoenergism and monothelitism.",
   "context": [
    "The Third Council of Constantinople, counted as the Sixth Ecumenical Council by the Eastern Orthodox and Catholic Churches, and by certain other Western Churches, met in 680–681 and condemned monoenergism and monothelitism as heretical and defined Jesus Christ as having two energies and two wills."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Throw good money after bad (להשקיע כסף טוב על גבי כסף רע)"
 ]
}
</input>