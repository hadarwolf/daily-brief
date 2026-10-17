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
   "year": 2001,
   "text": "Rehavam Ze'evi, the Israeli minister of tourism, was assassinated in revenge for the killing of PFLP leader Abu Ali Mustafa.",
   "context": [
    "Rehavam Ze'evi was an Israeli general and politician who founded the far-right nationalist Moledet party. He mainly advocated for the complete ethnic cleansing of the Palestinian population through population transfer."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2000,
   "text": "A fatal rail crash at Hatfield, Hertfordshire, led to the introduction of widespread speed limit reductions throughout the British rail network and eventually caused the collapse of the railway management group Railtrack.",
   "context": [
    "The Hatfield rail crash was a railway accident on 17 October 2000, at Hatfield, Hertfordshire, England. It was caused by a rolling contact fatigue-induced derailment, killing four people and injuring more than 70."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1992,
   "text": "Having gone to the wrong house in Baton Rouge, Louisiana, for a Halloween party, Japanese exchange student Yoshihiro Hattori was shot and killed by the homeowner.",
   "context": [
    "Baton Rouge is the capital city of the U.S. state of Louisiana. It had a population of 227,470 at the 2020 United States census, making it Louisiana's second-most populous city. It is the seat of Louisiana's most populous parish, East Baton Rouge Parish, and the center of Louisiana's second-largest metropolitan area, Greater Baton Rouge, which had 870,569 residents in 2020."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1973,
   "text": "Yom Kippur War: Egyptian forces retreated from the Battle of the Chinese Farm, allowing Israeli forces to build their first bridge across the Suez Canal.",
   "context": [
    "The Yom Kippur War, also known as the 1973 Arab–Israeli War, the fourth Arab–Israeli War, the October War, or the Ramadan War, was fought between Israel and a coalition of Arab states led by Egypt and Syria. Most of the fighting occurred in the Sinai Peninsula and the Golan Heights, territories occupied by Israel in 1967. Some combat also took place in mainland Egypt and northern Israel."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1964,
   "text": "Prime Minister Robert Menzies inaugurated the artificial Lake Burley Griffin (pictured) in the centre of the Australian capital Canberra.",
   "context": [
    "Sir Robert Gordon Menzies was the 12th prime minister of Australia, serving from 1939 to 1941 and from 1949 to 1966. He held office as the leader of the United Australia Party (UAP) in his first term, and subsequently as the inaugural leader of the Liberal Party of Australia in his second. He was the member of parliament (MP) for the Victorian division of Kooyong from 1934 to 1966. With a combined term length of 18 years, 163 days, he is the longest-serving prime minister in Australian history."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1952,
   "text": "Indonesian Army elements surrounded the Merdeka Palace in Jakarta, demanding that President Sukarno disband the Provisional People's Representative Council.",
   "context": [
    "The Indonesian Army is the land branch of the Indonesian National Armed Forces. It has an estimated strength of 1.632.000 active personnel. The history of the Indonesian Army has its roots in 1945 when the Tentara Keamanan Rakyat (TKR) \"People's Security Army\" first emerged as a paramilitary and police corps."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1931,
   "text": "American gangster Al Capone  was convicted on five counts of income-tax evasion.",
   "context": [
    "Alphonse Gabriel Capone, sometimes known by the nickname \"Scarface\", was an American gangster and businessman who attained notoriety during the Prohibition era as the co-founder and boss of the Chicago Outfit from 1925 to 1931. His seven-year reign as a crime boss ended when he was imprisoned at the age of 33."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1914,
   "text": "Off the coast of the Dutch island of Texel, a British naval squadron sank the German 7th Half Flotilla of torpedo boats in the Battle off Texel.",
   "context": [
    "Texel is a municipality and an island with a population of 13,846 in North Holland, Netherlands. It is the largest and most populated island of the West Frisian Islands in the Wadden Sea. The island is situated north of Den Helder, northeast of Noorderhaaks, and southwest of Vlieland."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1860,
   "text": "The Open Championship, the oldest of the four major championships in men's golf, was first played at Prestwick Golf Club in Scotland.",
   "context": [
    "The Open Championship, often referred to as The Open or the British Open outside of the UK, is the oldest golf tournament in the world, and one of the most prestigious. Founded in 1860, it was originally held annually at Prestwick Golf Club in Scotland. Later the venue rotated among a select group of coastal links golf courses in the United Kingdom. It is organised by The R&A."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1814,
   "text": "A wooden beer-fermenting vat in London burst, destroying a second vat and causing a large flood of at least 128,000 imperial gallons (580,000 l; 154,000 US gal) of porter that killed eight people.",
   "context": [
    "The London Beer Flood was an accident at Meux & Co's Horse Shoe Brewery, London, on 17 October 1814. It took place when one of the 22-foot-tall (6.7 m) wooden vats of fermenting porter burst. The escaping liquid dislodged the valve of another vessel and destroyed several large barrels: between 128,000 and 323,000 imperial gallons of beer were released in total."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1777,
   "text": "American Revolutionary War: British general John Burgoyne's Saratoga campaign ended with his surrender to the Americans, later convincing France to enter the war in alliance with the United States.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 had led King George III and much of the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1771,
   "text": "Ascanio in Alba, an opera composed by Wolfgang Amadeus Mozart (pictured) at the age of 15, premiered in Milan.",
   "context": [
    "Ascanio in Alba, K. 111, is an opera in two parts by Wolfgang Amadeus Mozart to an Italian libretto by Giuseppe Parini. The pastoral work was commissioned by the Empress Maria Theresa for the wedding of her son, Archduke Ferdinand Karl, to Maria Beatrice d'Este on 15 October 1771."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1660,
   "text": "A series of executions of the commissioners who signed the death warrant of King Charles I of England concluded; six were hanged, drawn and quartered for treason.",
   "context": [
    "The Regicides of Charles I were the men responsible for the execution of Charles I on 30 January 1649. The term generally refers to the fifty-nine commissioners who signed the execution warrant. This followed his conviction for treason by the High Court of Justice."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1604,
   "text": "German astronomer Johannes Kepler began observations of an exceptionally bright object, now known as Kepler's Supernova, that had appeared in the constellation Ophiuchus.",
   "context": [
    "Johannes Kepler was a German polymath who was an astronomer, mathematician, astrologer, natural philosopher and music theorist. He is a key figure in the 17th-century Scientific Revolution, best known for his laws of planetary motion, and his books Astronomia nova, Harmonice Mundi, and Epitome Astronomiae Copernicanae. The variety and impact of his work made Kepler one of the founders and fathers of modern astronomy, the scientific method, natural science, and modern science. He has been described as the \"father of science fiction\" for his novel Somnium."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1346,
   "text": "Hundred Years' War: Under the terms of Scotland's Auld Alliance with France, King David II of Scotland (pictured) was captured at the Battle of Neville's Cross following his invasion of England.",
   "context": [
    "The Hundred Years' War was a series of conflicts between the kingdoms of England and France and a civil war in France during the late Middle Ages. It emerged from feudal disputes over the Duchy of Aquitaine and was triggered by a claim to the French throne made by Edward III of England. The war grew into a broader military, economic, and political struggle involving different factions from across Western Europe, fueled by emerging nationalism on both sides. The periodization of the war typically charts it as taking place over 116 years. However, it was an intermittent conflict which was frequently interrupted by external factors, such as the Black Death, and several years of truces."
   ]
  }
 ],
 "recent_words_and_concepts": [
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