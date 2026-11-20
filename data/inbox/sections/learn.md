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
   "year": 2003,
   "text": "Suicide bombers blew up the British consulate and the headquarters of HSBC Bank in Istanbul, killing 31 people, including consul general Roger Short and actor Kerem Yılmazer.",
   "context": [
    "The 2003 Istanbul bombings were a series of suicide attacks carried out with trucks fitted with bombs detonated at four locations in Istanbul, Turkey, on 15 and 20 November 2003."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1994,
   "text": "In accordance with the Lusaka Protocol, the Angolan government signed a ceasefire with UNITA rebels in a failed attempt to end the Angolan Civil War.",
   "context": [
    "The Lusaka Protocol, initialed in Lusaka, Zambia on 31 October 1994, attempted to end the Angolan Civil War by integrating and disarming UNITA and starting national reconciliation. Both sides signed a truce as part of the protocol on 15 November 1994, and the treaty was signed on 20 November 1994."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1991,
   "text": "First Nagorno-Karabakh War: An Azerbaijani military helicopter carrying a peacekeeping mission team was shot down in Nagorno-Karabakh, disrupting ongoing peace talks.",
   "context": [
    "The First Nagorno-Karabakh War was an ethnic and territorial conflict that took place from February 1988 to May 1994 in the enclave of Nagorno-Karabakh in southwestern Azerbaijan between the majority ethnic Armenians of Nagorno-Karabakh backed by Armenia, and the Republic of Azerbaijan with support from Turkey. As the war progressed, Armenia and Azerbaijan, both former Soviet republics, entangled themselves in protracted, undeclared mountain warfare in the mountainous heights of Karabakh as Azerbaijan attempted to curb the Karabakh Movement."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1990,
   "text": "Andrei Chikatilo, one of the Soviet Union's most prolific serial killers, was arrested in Novocherkassk.",
   "context": [
    "Andrei Romanovich Chikatilo was a Ukrainian-born Soviet serial killer nicknamed \"the Butcher of Rostov\", \"the Rostov Ripper\", and \"the Red Ripper\" who sexually assaulted, murdered, and mutilated at least fifty-two women and children between 1978 and 1990 in the Russian SFSR, the Ukrainian SSR, and the Uzbek SSR."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1985,
   "text": "Windows 1.0, the first version of Microsoft Windows available to the public, was released.",
   "context": [
    "Windows 1.0 is the first major release of Microsoft Windows, a family of graphical user shells and operating systems for personal computers developed by Microsoft. It was first released to manufacturing in the United States and the general public on November 20, 1985, while the European version was released as Windows 1.02 in May 1986."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1979,
   "text": "Armed insurgents attacked and took over the Masjid al-Haram in Mecca, declaring that one of their leaders was the Mahdi, the prophesied redeemer of Islam.",
   "context": [
    "The Grand Mosque seizure took place between 20 November and 4 December 1979 at the Grand Mosque of Mecca in Mecca, Saudi Arabia, the holiest site in Islam. The attack was carried out by up to 600 militants led by Juhayman al-Otaybi, a Saudi Islamist opposed to the monarchy, belonging to the Otaibah tribe. The insurgents identified themselves as \"al-Ikhwan\", referencing the Arabian militia that had played a role in the early formation of the Saudi state in the early 20th century. Scholars refer to them as Juhayman's Ikhwan."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1969,
   "text": "A group of Native American activists began a 19-month occupation (graffiti pictured) of Alcatraz Island in San Francisco Bay.",
   "context": [
    "Native Americans are the Indigenous peoples of the United States, particularly of the lower 48 states and Alaska. They may also include any Americans whose origins lie in any of the Indigenous peoples of North or South America. The United States Census Bureau publishes data about \"American Indians and Alaska Natives\", whom it defines as anyone \"having origins in any of the original peoples of North and South America ... and who maintains tribal affiliation or community attachment\". The census does not, however, enumerate \"Native Americans\" as such, noting that the latter term can encompass a broader set of groups, e.g. Native Hawaiians, which it tabulates separately."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1947,
   "text": "Princess Elizabeth, daughter of King George VI, married Lieutenant Philip Mountbatten, who was given the title Duke of Edinburgh.",
   "context": [
    "Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states during her lifetime and was the monarch of 15 realms at her death. Her reign of 70 years and 214 days is the longest of any British monarch, the second-longest of any sovereign state, and the longest of any queen regnant in history."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1945,
   "text": "The Nuremberg trials (defendants pictured) of 24 leading Nazis involved in the Holocaust and various war crimes during World War II began in Nuremberg, Germany.",
   "context": [
    "The Nuremberg trials were international criminal trials held by France, the Soviet Union, the United Kingdom, and the United States against leaders of defeated Nazi Germany for plotting and carrying out invasions of several countries across Europe and committing atrocities against their citizens in the Second World War."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1917,
   "text": "First World War: The Battle of Cambrai began with British forces having initial success over Germany's Hindenburg Line.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1820,
   "text": "The American whaleship Essex sank 2,000 nautical miles (3,700 km) west of the western coast of South America after it was attacked by a sperm whale, an event which inspired the novel Moby-Dick.",
   "context": [
    "Essex was an American whaling ship from Nantucket, Massachusetts, which was launched in 1799. On November 20, 1820, while at sea in the southern Pacific Ocean under the command of Captain George Pollard Jr., the ship was attacked and sunk by a sperm whale. About 2,000 nautical miles (3,700 km) from the coast of South America, the 20-man crew was forced to make for land in three whaleboats with what food and water they could salvage from the wreck."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1776,
   "text": "American Revolutionary War: The Battle of Fort Lee saw the invasion of New Jersey by British and Hessian forces and the subsequent general retreat of the Continental Army.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1739,
   "text": "War of Jenkins' Ear: A British naval force arrived at the settlement of Portobello in the Spanish Main, capturing it the next day.",
   "context": [
    "The War of Jenkins' Ear was fought between Great Britain and Spain from 1739 to 1748. Most of the fighting took place in New Granada and the Caribbean Sea, with major operations over by 1742. It is considered a related conflict of the 1740 to 1748 War of the Austrian Succession."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Lipstick on a pig (שפתון על חזיר)"
 ]
}
</input>