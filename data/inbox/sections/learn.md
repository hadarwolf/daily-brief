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
   "year": 2008,
   "text": "After 30 years in power, Maumoon Abdul Gayoom was succeeded by Mohamed Nasheed as the president of the Maldives.",
   "context": [
    "Maumoon Abdul Gayoom is a Maldivian politician, statesman and diplomat who served as the 3rd president of the Maldives from 1978 to 2008. He previously served as the Minister of Transport from 1977 to 1978, and as the Permanent Representative of the Maldives to the United Nations from 1976 to 1977. Gayoom is the longest-serving president in Maldivian history."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1999,
   "text": "The House of Lords Act was given royal assent, removing most hereditary peers from the British House of Lords.",
   "context": [
    "The House of Lords Act 1999 is an act of the Parliament of the United Kingdom which reformed the House of Lords, one of the chambers of Parliament. The act was given royal assent on 11 November 1999. For centuries, the House of Lords had included several hundred members who inherited their seats. The act removed this as a right, but as part of a compromise allowed 92 hereditary peers to remain in the House until further reforms. Another ten were created life peers to enable them to remain in the House."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1975,
   "text": "During a constitutional crisis, Governor-General Sir John Kerr (pictured) dismissed Prime Minister Gough Whitlam's government and dissolved the Parliament of Australia for a double-dissolution election.",
   "context": [
    "The 1975 Australian constitutional crisis, also called the Dismissal, culminated with the dismissal of the prime minister, Gough Whitlam of the Australian Labor Party (ALP), by Sir John Kerr, the governor-general of Australia, on 11 November 1975. Kerr then commissioned the leader of the opposition, Malcolm Fraser of the Liberal Party, as prime minister on the condition that he advise a new election. It has been described as the greatest political and constitutional crisis in Australian history."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1965,
   "text": "Rhodesia, led by Prime Minister Ian Smith (pictured), unilaterally declared independence from the United Kingdom.",
   "context": [
    "Rhodesia, officially the Republic of Rhodesia from 1970 onwards, was an unrecognised state in Southern Africa that existed from 1965 to 1979. Rhodesia was the de facto successor to the self-governing colony of Southern Rhodesia following its unilateral declaration of independence (UDI) from the United Kingdom in 1965. Throughout this fourteen-year period, Rhodesia faced internal conflict and political unrest. Following the Lancaster House Agreement in 1979 and general elections held under a universal suffrage in 1980, the territory finally gained de jure independence and international recognition as the Republic of Zimbabwe."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1960,
   "text": "A coup attempt by the Army of the Republic of Vietnam against President Ngô Đình Diệm was crushed after he falsely promised reform, allowing loyalists to rescue him.",
   "context": [
    "On 11 November 1960, a failed coup attempt against President Ngô Đình Diệm of South Vietnam was led by Lieutenant Colonel Vương Văn Đông and Colonel Nguyễn Chánh Thi of the Airborne Division of the Army of the Republic of Vietnam (ARVN)."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1940,
   "text": "Second World War: The Royal Navy launched the first all-aircraft ship-to-ship naval attack in history against the Italians in the Battle of Taranto.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1934,
   "text": "The Shrine of Remembrance (pictured), a memorial to all Australians who have served in war, opened in Melbourne.",
   "context": [
    "The Shrine of Remembrance is a war memorial in Melbourne, Victoria, Australia, located in Kings Domain on St Kilda Road. It was built to honour the men and women of Victoria who served in World War I, but now functions as a memorial to all Australians who have served in any war. It is a site of annual observances for Anzac Day and Remembrance Day, and is one of the largest war memorials in Australia."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1926,
   "text": "The plan for the United States Numbered Highway System was approved by the American Association of State Highway Officials.",
   "context": [
    "The United States Numbered Highway System is an integrated network of roads and highways numbered within a nationwide grid in the contiguous United States. As the designation and numbering of these highways were coordinated among the states, they are sometimes called Federal Highways, but the roadways were built and have always been maintained by state or local governments since their initial designation in 1926."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1920,
   "text": "In London, the Cenotaph was unveiled and the Unknown Warrior was buried in Westminster Abbey in remembrance of the First World War.",
   "context": [
    "The Cenotaph is a war memorial on Whitehall in London, England. Designed by Sir Edwin Lutyens, it was unveiled in 1920 as the United Kingdom's national memorial to the dead of Britain and the British Empire of the First World War. It was rededicated in 1946 to include those of the Second World War, and has since come to represent the Commonwealth casualties from those and later conflicts. The word cenotaph is derived from Greek, meaning 'empty tomb'. Most of the dead were buried close to where they fell; thus, the Cenotaph symbolises their absence and is a focal point for public mourning. The original temporary Cenotaph was erected in 1919 for a parade celebrating the end of the First World War, at which more than 15,000 servicemen, including French and American soldiers, saluted the monument. More than a million people visited the site within a week of the parade."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1918,
   "text": "The armistice between the German Empire and the Allies was signed in a railway carriage in the Forest of Compiègne of France (signatories pictured).",
   "context": [
    "The Armistice of 11 November 1918 was the armistice that ended fighting on land, at sea, and in the air in World War I between the Entente and their last remaining opponent, Germany. It was signed in a railroad car in the Compiègne Forest, near the town of Compiègne. Previous armistices had been agreed with Bulgaria, the Ottoman Empire and Austria-Hungary. It was concluded after the German government sent a message to American president Woodrow Wilson to negotiate terms on the basis of a recent speech of his and the earlier declared \"Fourteen Points\", which later became the basis of the German surrender at the Paris Peace Conference, which took place the following year."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1918,
   "text": "Józef Piłsudski (pictured), appointed the commander-in-chief of Polish forces by the Regency Council, was entrusted with the creation of a national government for the newly independent Poland.",
   "context": [
    "Józef Klemens Piłsudski was a Polish statesman who served as the Chief of State (1918–1922) and first Marshal of Poland. In the aftermath of World War I, he became an increasingly dominant figure in Polish politics and exerted significant influence on shaping the country's foreign policy. Piłsudski is viewed as a father of the Second Polish Republic, which was re-established in 1918, 123 years after the final partition of Poland in 1795, and was considered de facto leader (1926–1935) of the Second Republic as the Minister of Military Affairs."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1880,
   "text": "In spite of sympathizers holding rallies for his reprieve, Australian bushranger and outlaw Ned Kelly was hanged in Melbourne.",
   "context": [
    "Bushrangers were armed robbers and outlaws who resided in the Australian bush between the 1780s and the early 20th century. The original use of the term dates back to the early years of the British colonisation of Australia, and applied to transported convicts who had escaped into the bush to hide from the authorities. By the 1820s, the term had evolved to refer to those who took up \"robbery under arms\" as a way of life, using the bush as their base."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1813,
   "text": "War of 1812: British–Canadian forces repelled an American attack at the Battle of Crysler's Farm, forcing the United States to give up their attempt to capture Montreal.",
   "context": [
    "The War of 1812 was a conflict initiated by the United States against the United Kingdom and its allies fought mainly in North America and at sea during the wider Napoleonic Wars. The United States declared war on Britain on 18 June 1812. Although peace terms were agreed upon in the December 1814 Treaty of Ghent, the war did not officially end until the peace treaty was ratified by the United States Senate on 17 February 1815."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1805,
   "text": "War of the Third Coalition: French, Austrian and Russian units suffered heavy losses at the Battle of Dürenstein.",
   "context": [
    "The War of the Third Coalition was a European conflict lasting from 1805 to 1806 and was the first conflict of the Napoleonic Wars. During the war, France and its client states under Napoleon I and its ally Spain opposed an alliance, the Third Coalition, which was made up of the United Kingdom, the Austrian Empire, the Russian Empire, Naples, Sicily, and Sweden. Prussia remained neutral during the war."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1778,
   "text": "American Revolutionary War: British forces and their Iroquois allies attacked a fort and the village of Cherry Valley, New York, killing 14 soldiers and 30 civilians.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British Crown acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Burning the boats (לשרוף את הסיפונים)"
 ]
}
</input>