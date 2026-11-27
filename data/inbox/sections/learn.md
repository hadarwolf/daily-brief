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
   "year": 2020,
   "text": "Nuclear physicist Mohsen Fakhrizadeh, regarded as the chief of Iran's nuclear program, was assassinated, allegedly by Mossad.",
   "context": [
    "Mohsen Fakhrizadeh Mahabadi was an Iranian nuclear physicist and scientist. He was regarded as the chief of Iran's nuclear program."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "A bomb exploded under, and derailed, a Russian high-speed train travelling between Moscow and Saint Petersburg, killing 28 passengers.",
   "context": [
    "The 2009 Nevsky Express bombing occurred on 27 November 2009 when a bomb exploded under a high speed train travelling between the Russian cities of Moscow and Saint Petersburg causing derailment near the town of Bologoye, Tver Oblast, on the Moscow–Saint Petersburg Railway. The derailment occurred at 21:34 local time. Russian officials had stated that 39 people were killed and 95 injured but later retracted that estimate. 27 deaths had been reported by 2 December. A second bomb exploded at the scene of the investigation the following day, injuring one. It was reported to have been triggered by a remote mobile phone."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2009,
   "text": "Lady Gaga performed the first concert of The Monster Ball Tour, which became the highest-grossing tour in history for a debut headlining artist.",
   "context": [
    "Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, is an American singer, songwriter, and actress. An influential figure in popular music, she is known for her image reinventions, flamboyant fashion, and versatility across the entertainment industry. With estimated sales of 124 million records, she is one of the best-selling music artists of all time."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2001,
   "text": "Astronomers announced the detection of sodium in the atmosphere of the extrasolar planet HD 209458 b, the first exoplanet atmosphere to be measured.",
   "context": [
    "Sodium is a chemical element; it has symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table. Its only stable isotope is 23Na. The free metal does not occur in nature and must be prepared from compounds. Sodium is the sixth–most abundant element in the Earth's crust and exists in numerous minerals such as feldspars, sodalite, and halite (NaCl). Many salts of sodium are highly water-soluble: sodium ions have been leached by the action of water from the Earth's minerals over eons, and thus sodium and chlorine are the most common dissolved elements by weight in the oceans."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1999,
   "text": "The Labour Party defeated the governing National Party in the New Zealand general election, with Labour's Helen Clark becoming the country's first female prime minister to have won office at an election.",
   "context": [
    "The New Zealand Labour Party, also known simply as Labour, is a centre-left political party in New Zealand. The party's platform programme describes its founding principle as democratic socialism, while observers describe Labour as social democratic and pragmatic in practice. The party participates in the international Progressive Alliance. It is one of two major political parties in New Zealand, alongside its traditional rival, the National Party."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1989,
   "text": "A bomb placed by the Medellín Cartel in an attempt to kill Colombian presidential candidate César Gaviria destroyed Avianca Flight 203, killing all 107 people on board, excluding Gaviria, who was not on the flight.",
   "context": [
    "The Medellín Cartel was a confederation of Colombian drug trafficking organizations based primarily in Medellín, Colombia, that played a central role in the expansion of the international cocaine trade during the late 1970s and 1980s. Rather than a single hierarchical organization, contemporary law-enforcement assessments and subsequent scholarship describe the cartel as a network of semi-autonomous traffickers who cooperated in production, transportation, financing, and enforcement while retaining independent control over their respective operations. The network included prominent traffickers such as Pablo Escobar, Carlos Lehder, Gonzalo Rodríguez Gacha, and the Ochoa brothers—Jorge Luis Ochoa Vásquez, Fabio Ochoa Vásquez, and Juan David Ochoa Vásquez—whose activities collectively shaped the structure and scale of Colombian cocaine trafficking during this period. Estimates by U.S. and Colombian authorities during the 1980s attributed a substantial share of cocaine entering the United States to trafficking networks associated with Medellín, though contemporaneous reports emphasized that market share fluctuated over time and could not be ascribed to a single unified organization."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1963,
   "text": "President Lyndon B. Johnson delivered the \"Let Us Continue\" speech, in which he advocated for civil-rights legislation and national cohesion, to a joint session of the U.S. Congress five days after the assassination of John F. Kennedy.",
   "context": [
    "Lyndon Baines Johnson, also known as LBJ, was the 36th president of the United States, serving from 1963 to 1969. The 37th vice president, he assumed the presidency following the assassination of John F. Kennedy. Johnson was a Southern Democrat who represented Texas in both houses of the U.S. Congress and earned a reputation as a talented and persuasive legislator. His presidency was marked by the passage of landmark civil rights legislation, the creation of Great Society programs such as Medicare and Medicaid, and a significant escalation in U.S. involvement in the Vietnam War."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1950,
   "text": "Korean War: The Chinese People's Volunteer Army launched multiple attacks against United Nations forces, beginning the Battle of Chosin Reservoir.",
   "context": [
    "The Korean War was an armed conflict fought on the Korean Peninsula between North Korea and South Korea and their allies. North Korea was supported by China and the Soviet Union, while South Korea was supported by the United Nations led by the United States under the auspices of the United Nations Command (UNC)."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1945,
   "text": "A consortium of twenty-two U.S. charities founded CARE with the mission of delivering food aid to Europe in the aftermath of World War II.",
   "context": [
    "CARE is a major international humanitarian agency delivering emergency relief and long-term international development projects. Founded in 1945, CARE is nonsectarian, impartial, and non-governmental. It is one of the largest and oldest humanitarian aid organizations focused on fighting global poverty. In 2019, CARE reported working in 104 countries, supporting 1,349 poverty-fighting projects and humanitarian aid projects, and reaching over 92.3 million people directly and 433.3 million people indirectly."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1944,
   "text": "Between 3,500 and 4,000 tonnes of ordnance exploded at the RAF Fauld underground munitions storage depot in the largest non-nuclear explosion in the United Kingdom.",
   "context": [
    "The RAF Fauld explosion occurred during the Second World War at the RAF Fauld underground munitions storage depot in Staffordshire, England at 11:11 am on Monday, 27 November 1944. The blast, which was one of the largest non-nuclear explosions in history, detonated between 3,500 and 4,000 tonnes of high explosive military ordnance. It created an explosion crater with a depth of 100 feet (30 m) and a maximum width of 1,007 feet (307 m)."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1943,
   "text": "World War II: Australian forces began the Battle of Wareo by conducting clearing operations between Bonga and North Hill.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease and genocides. After the Allied victory, Germany, Austria, Japan and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1895,
   "text": "Swedish chemist and industrialist Alfred Nobel (pictured) signed his last will and testament, setting aside the bulk of his estate to establish the Nobel Prize after his death.",
   "context": [
    "Alfred Bernhard Nobel was a Swedish chemist, inventor, engineer, and businessman. Nobel is known for inventing dynamite, as well as having bequeathed his fortune to establish the Nobel Prizes. He worked on various important contributions and inventions to science, holding 355 patents during his life."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1868,
   "text": "American Indian Wars: George Armstrong Custer's 7th Cavalry Regiment attacked the encampment of Chief Black Kettle and the Cheyenne on the Washita River near present-day Cheyenne, Oklahoma.",
   "context": [
    "The American Indian Wars, also known as the American Frontier Wars, and the Indian Wars, were initially fought by European colonial empires, the United States, Confederate States and Republic of Texas against various American Indian tribes in North America. These conflicts occurred from the time of the earliest European colonial settlements in the 17th century until the end of the 19th century. The various conflicts resulted from a wide variety of factors, the most common being the desire of settlers and governments for tribal lands. The European powers and their colonies enlisted allied American Indian tribes to help them conduct warfare against each other's colonial settlements. After the American Revolution, many conflicts were local to specific states or regions and frequently involved disputes over land use; many involved retaliatory violence."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1856,
   "text": "William III (pictured) unilaterally revised the constitution of Luxembourg, greatly expanding his powers as grand duke.",
   "context": [
    "William III was King of the Netherlands and Grand Duke of Luxembourg from 1849 until his death in 1890, and was also the Duke of Limburg from 1849 until the abolition of the duchy in 1866. Having reigned for 41 years, he is the second-longest reigning Dutch monarch, only surpassed by his daughter, Wilhelmina."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1835,
   "text": "James Pratt and John Smith became the last people to be executed in England for sodomy.",
   "context": [
    "James Pratt (1805–1835), also known as John Pratt, and John Smith (1795–1835) were two British men who, in November 1835, became the last people to be executed for sodomy in England. Pratt and Smith were arrested in August of that year after allegedly having \"carnal knowledge\" of each other in a room rented by another man, William Bonill. Bonill was not present when this took place, but was nevertheless convicted of being an accessory and was transported to Australia, where he died."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1703,
   "text": "The great storm of 1703, one of the most severe storms to strike southern Great Britain, destroyed the first Eddystone Lighthouse off Plymouth.",
   "context": [
    "The Great storm of 1703 was a destructive extratropical cyclone that struck south Wales and central and southern England on 26 November 1703. High winds caused 2,000 chimney stacks to collapse in London and damaged the New Forest, which lost 4,000 oaks. Ships were blown hundreds of miles off-course, and over 1,000 seamen died on the Goodwin Sands alone. News bulletins of casualties and damage were sold all over England and Wales – a novelty at that time. The Church of England declared that the storm was God's vengeance for the sins of the nation."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1161,
   "text": "Jin–Song wars: A Song fleet, equiped with trebuchets that launched incendiary bombs, defeated Jin ships in a naval engagement on the Yangtze River.",
   "context": [
    "The Jin–Song Wars were a series of conflicts between the Jurchen-led Jin dynasty (1115–1234) and the Han-led Song dynasty (960–1279). In 1115, Jurchen tribes rebelled against their overlords, the Khitan-led Liao dynasty (916–1125), and declared the formation of the Jin. Allying with the Song against their common enemy the Liao dynasty, the Jin promised to cede to the Song the Sixteen Prefectures that had fallen under Liao control since 938. The Song agreed but the Jin's quick defeat of the Liao combined with Song military failures made the Jin reluctant to cede territory. After a series of negotiations that embittered both sides, the Jurchens attacked the Song in 1125, dispatching one army to Taiyuan and the other to Bianjing, the Song capital."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Poison pill (גלולת רעל)",
  "War chest (קופת מלחמה)",
  "Herding cats (לרכז חתולים)",
  "Shrinkflation (כיווץ אינפלציוני)",
  "Due diligence (בדיקת נאותות)",
  "Scorched-earth strategy (אסטרטגיית אדמה חרוכה)",
  "Bootstrapping (מיזם ממומן בכוחות עצמיים)",
  "Dead cat bounce (קפיצת החתול המת)",
  "Punching above your weight (להילחם מעל המשקל שלך)",
  "Zombie company (חברת זומבי)",
  "Sweat equity (הון יזע)",
  "Burn the boats (לשרוף את הסירות)",
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
  "Paper tiger (נמר של ניר)"
 ]
}
</input>