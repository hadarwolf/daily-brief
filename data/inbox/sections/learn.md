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
   "text": "Arab Spring: After months of protests in Yemen, President Ali Abdullah Saleh (pictured) agreed to step down; he subsequently ceded power to Vice President Abdrabbuh Mansour Hadi in February 2012.",
   "context": [
    "The Arab Spring was a series of pro-democracy anti-government protests, uprisings, and armed rebellions that spread across much of the Arab world in the early 2010s. It began in Tunisia in response to the death of Mohamed Bouazizi by self-immolation. From Tunisia, the protests initially spread to five other countries: Libya, Egypt, Yemen, Syria and Bahrain. The rulers deposed include: Zine El Abidine Ben Ali of Tunisia, Muammar Gaddafi of Libya, and Hosni Mubarak of Egypt, all in 2011; and Ali Abdullah Saleh of Yemen in 2012. Major uprisings and social violence occurred, including riots, civil wars, or insurgencies. Sustained street demonstrations took place in Morocco, Iraq, Algeria, Lebanon, Jordan, Kuwait, Oman and Sudan. Minor protests took place in Djibouti, Mauritania, Palestine, Saudi Arabia and the Western Sahara. A major slogan of the demonstrators in the Arab world is ash-shaʻb yurīd isqāṭ an-niẓām!."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "A crowd of people on their way to register Esmael Mangudadatu's candidacy for governor of Maguindanao, Philippines, were kidnapped and killed by supporters of his rival, resulting in 58 deaths.",
   "context": [
    "Esmael \"Toto\" Gaguil Mangudadatu is a Filipino politician who is the representative of Maguindanao del Sur's lone district, having been elected in 2025. He previously served as the representative of the then-undivided Maguindanao's 2nd district from 2019 to 2022. He also served as the governor of Maguindanao from 2010 to 2019. In Buluan town, he served as the mayor from 1998 to 2007, and vice mayor from 2007 to 2010."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2007,
   "text": "MS Explorer became the first cruise ship to sink in the Southern Ocean.",
   "context": [
    "MS Explorer or MV Explorer was a Liberian-registered cruise ship, used for Antarctic cruising. She was the first cruise ship to sink there, after impact with the Antarctic pack ice on 23 November 2007. All passengers and crew were rescued."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2003,
   "text": "Rose Revolution: Eduard Shevardnadze resigned as President of Georgia following weeks of mass protests over disputed election results.",
   "context": [
    "The Rose Revolution or Revolution of Roses was a nonviolent change of power that occurred in Georgia in November 2003. The event was brought about by widespread protests over the disputed parliamentary elections and culminated in the resignation of President Eduard Shevardnadze, which marked the end of Soviet-era leadership in the country. The revolution derives its name from the climactic moment, when demonstrators led by Mikheil Saakashvili stormed the Parliament session with red roses in hand."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1996,
   "text": "Ethiopian Airlines Flight 961 was hijacked, then ran out of fuel and crashed into the Indian Ocean, killing 125 of the 175 people on board.",
   "context": [
    "Ethiopian Airlines Flight 961 was a scheduled international flight serving the route Addis Ababa–Nairobi–Brazzaville–Lagos–Abidjan. On 23 November 1996, the aircraft serving the flight, a Boeing 767, was hijacked en route from Addis Ababa to Nairobi by three Ethiopians seeking asylum in Australia. The plane crash-landed in the Indian Ocean near Grande Comore, Comoros Islands, due to fuel exhaustion. Of those onboard, 125 of 175 died in the ditching, including all three hijackers and six of the 12 crew. It was the first recorded instance of the ditching of a wide-body aircraft."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1980,
   "text": "An earthquake struck the Irpinia region of Italy, killing at least 2,483 people, injuring more than 7,700 and leaving 250,000 homeless.",
   "context": [
    "The 1980 Irpinia earthquake took place in Italy on 23 November 1980, with a moment magnitude of 6.9 and a maximum Mercalli intensity of X (Extreme). It left at least 2,483 people dead, at least 7,700 injured, and 250,000 homeless."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1976,
   "text": "Jacques Mayol became the first person to freedive to a depth of 100 metres (330 ft).",
   "context": [
    "Jacques Mayol was a French diver and the holder of many world records in free diving. The 1988 film The Big Blue, directed by Luc Besson, was inspired by his life story and that of his friend, Enzo Maiorca. Mayol was one of the screenwriters and authored the book Homo Delphinus: the Dolphin Within Man of his philosophy about the aquatic origins of humans."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1963,
   "text": "The first episode of Doctor Who, the world's longest-running science fiction television show, was broadcast on BBC television, starring William Hartnell as the first incarnation of the title role.",
   "context": [
    "An Unearthly Child is the first serial of the British science fiction television series Doctor Who. It was first broadcast on BBC TV in four weekly parts from 23 November to 14 December 1963. Scripted by Australian writer Anthony Coburn, the serial introduces William Hartnell as the First Doctor and his original companions: Carole Ann Ford as the Doctor's granddaughter, Susan Foreman, with Jacqueline Hill and William Russell as school teachers Barbara Wright and Ian Chesterton. The first episode deals with Ian and Barbara's discovery of the Doctor and his time-space ship, the TARDIS, in a junkyard in contemporary London, and the remaining episodes are set amid a power struggle between warring Stone Age factions who have lost the secret of making fire."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1924,
   "text": "The New York Times published evidence from Edwin Hubble (pictured) stating that the Andromeda Nebula, previously believed to be part of the Milky Way, is in fact another galaxy.",
   "context": [
    "The New York Times (NYT) is a newspaper based in Manhattan, New York City. The New York Times covers domestic, national, and international news, and publishes opinion pieces and reviews. One of the longest-running newspapers in the United States, the Times serves as one of the country's newspapers of record. As of June 2026, The New York Times had 13.35 million total subscribers: 550,000 print and 12.8 million digital, both the highest numbers for any newspaper in the United States by a significant margin. The New York Times is published by the New York Times Company. Since 1896, the company has been chaired by the Ochs-Sulzberger family. The current chairman and the paper's publisher is A. G. Sulzberger. The Times is headquartered at The New York Times Building in Midtown Manhattan."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1876,
   "text": "William \"Boss\" Tweed, a New York City politician who had been arrested for embezzlement, was handed over to US authorities after having escaped from prison and fled to Spain.",
   "context": [
    "William Magear \"Boss\" Tweed was an American politician most notable for being the political boss of Tammany Hall, the Democratic Party's political machine that played a major role in the politics of 19th-century New York City and State."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1867,
   "text": "The Manchester Martyrs were hanged in Manchester, England, for involvement in a scheme to free two Irish nationalists from custody in which a police officer was killed.",
   "context": [
    "The Manchester Martyrs were three Irish Republicans – William Philip Allen, Michael Larkin, and Michael O'Brien – who were hanged in 1867 following their conviction of murder after an attack on a police van in Manchester, England, in which a police officer was accidentally shot dead, an incident that was known at the time as the Manchester Outrages. The three men were members of the Irish Republican Brotherhood, also known as the Fenians, an organisation dedicated to ending British rule in Ireland, and were among a group of 30 to 40 Fenians who attacked a horse-drawn police van transporting two arrested leaders of the Brotherhood, Thomas J. Kelly and Timothy Deasy, to Belle Vue Gaol. Police Sergeant Charles Brett, travelling inside with the keys, was shot and killed while looking through the keyhole of the van as the attackers attempted to force the door open by shooting the lock."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1733,
   "text": "African slaves in the Danish West Indies began an insurrection in one of the earliest and longest slave revolts in the Americas.",
   "context": [
    "The Danish West Indies, also known as the Danish Virgin Islands or the Danish Antilles, were a Danish colony in the Caribbean, consisting of the islands of Saint Thomas with 83 square kilometres (32 sq mi), Saint John with 49 square kilometres (19 sq mi), and Saint Croix with 220 square kilometres (85 sq mi)."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1700,
   "text": "A papal conclave, which had been deadlocked due to concerns over how a successor would respond to the impending death of Charles II of Spain, ended with the election of Clement XI.",
   "context": [
    "The 1700 papal conclave was convened following the death of Pope Innocent XII. It ended in the election of Cardinal Giovanni Albani as Pope Clement XI. The conclave saw a rise in the dominance of a zelanti faction in the College of Cardinals. It remained deadlocked for a month until the death of the childless Charles II of Spain. The cardinal electors anticipated that his death without a clear heir would cause a political crisis, and moved to elect a pope who would be seen as non-partisan."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1644,
   "text": "In opposition to licensing and censorship during the English Civil War, John Milton's Areopagitica was published, arguing for the right to free expression.",
   "context": [
    "The English Civil War or Great Rebellion was a series of civil wars and political machinations between Royalists and Parliamentarians in the Kingdom of England from 1642 to 1651. Part of the wider 1999 to 1653 Wars of the Three Kingdoms, the struggle consisted of the First English Civil War and the Second English Civil War. The Anglo-Scottish war of 1650 to 1652 is sometimes referred to as the Third English Civil War. The English Civil War also had a significant influence on the development of the English language. The conflict popularized political terms that are still used today, such as \"Cavalier\" for supporters of King Charles I and \"Roundhead\" for supporters of Parliament. The 1640s also saw a massive increase in the production of pamphlets, newsbooks, and political tracts, which is considered one of the first examples of mass communication in English. This period helped expand political vocabulary and introduced new words related to democracy, liberty, and religious toleration into everyday English."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1635,
   "text": "Dutch pacification campaign on Formosa: Soldiers from the Dutch East India Company (flag depicted) razed the village of Mattau, now part of modern-day Tainan, Taiwan.",
   "context": [
    "A series of military actions and diplomatic moves were undertaken in 1635 and 1636 by the United East India Company (VOC) in Dutch-era Taiwan (Formosa) aimed at subduing hostile aboriginal villages in the southwestern region of the island. Prior to the campaign, the Dutch had been in Formosa for eleven years, but did not control much of the island beyond their principal fortress at Tayouan, and an alliance with the town of Sinkan. The other aboriginal villages in the area conducted numerous attacks on the Dutch and their allies, with the chief belligerents being the village of Mattau, whose inhabitants in 1629 ambushed and slaughtered a group of sixty Dutch soldiers."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Eating someone's lunch (לאכול למישהו את הארוחה)",
  "Negative carry (קארי שלילי)",
  "Barbell strategy (אסטרטגיית המשקולת)",
  "Don't fight the Fed (אל תתעסק עם ה-Fed)",
  "Shadow banking (בנקאות צל)",
  "Talk your book (לדבר לטובת הפוזיציה שלך)",
  "Picking up pennies in front of a steamroller (ללקט אגורות לפני מכבש)",
  "Opex (הוצאות תפעוליות)",
  "Due diligence (בדיקת נאותות)",
  "Dead cat bounce (קפיצת החתול המת)"
 ]
}
</input>