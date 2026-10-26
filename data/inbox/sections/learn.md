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
   "year": 2004,
   "text": "Rockstar Games released Grand Theft Auto: San Andreas, considered one of the best video games ever made, in North America.",
   "context": [
    "Rockstar Games, Inc. is an American video game publisher based in New York City. The company was established in December 1998 as a subsidiary of Take-Two Interactive, using the assets Take-Two had previously acquired from BMG Interactive. Founding members of the company were Terry Donovan, Gary Foreman, Dan and Sam Houser, and Jamie King, who worked for Take-Two at the time, and of which the Houser brothers were previously executives at BMG Interactive. Sam Houser heads the studio as president."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2001,
   "text": "President George W. Bush signed the Patriot Act into law, significantly expanding the authority of United States law enforcement agencies.",
   "context": [
    "George Walker Bush is an American former politician, businessman, and U.S. Air Force veteran who served as the 43rd president of the United States from 2001 to 2009. A member of the Republican Party, he served as the 46th governor of Texas from 1995 to 2000. He is the eldest son of George H. W. Bush, the 41st president of the United States."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2000,
   "text": "Following protests against military leader Robert Guéï, Laurent Gbagbo (pictured) became the president of Ivory Coast.",
   "context": [
    "Robert Guéï was an Ivorian politician who served as the third president of the Ivory Coast from 24 December 1999 to 26 October 2000. He succeeded President Henri Konan Bédié after the 1999 Ivorian coup d'état and lost to Laurent Gbagbo in the ensuing 2000 Ivorian presidential election. Guéï, his wife Rose Doudou Guéï, and his children were killed on 19 September 2002 on the first day of the First Ivorian Civil War."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1994,
   "text": "Israel and Jordan signed a peace treaty, settling relations between the two countries and pledging that neither would allow its territory to become a staging ground for military strikes by a third country.",
   "context": [
    "The Israel–Jordan peace treaty, sometimes referred to as the Wadi Araba Treaty, is an agreement that ended the state of war that had existed between the two countries since the 1948 Arab–Israeli War and established mutual diplomatic relations. In addition to establishing peace between the two countries, the treaty also settled land and water disputes, provided for broad cooperation in tourism and trade, and obligated both countries to prevent their territory being used as a staging ground for military strikes by a third country."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1977,
   "text": "Somali hospital cook Ali Maow Maalin began displaying symptoms of smallpox, becoming the last person known to be naturally infected by the disease.",
   "context": [
    "Ali Maow Maalin was a Somali hospital cook and health worker from Merca who is the last person known to have been infected with naturally occurring Variola minor smallpox. The disease was diagnosed in October 1977 and Maalin made a full recovery. Although he had many contacts, none of them developed the disease, and an aggressive containment campaign was successful in preventing an outbreak. Smallpox was declared to have been eradicated globally by the World Health Organization (WHO) two years later. Maalin was subsequently involved in the successful poliomyelitis eradication campaign in Somalia, and he died of malaria while carrying out polio vaccinations after the re-emergence of the poliovirus in 2013."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1955,
   "text": "Ngô Đình Diệm proclaimed himself president of the newly created Republic of Vietnam after defeating former emperor Bảo Đại in a fraudulent referendum supervised by his brother Ngô Đình Nhu.",
   "context": [
    "Ngô Đình Diệm was a South Vietnamese politician. He was the final prime minister of the State of Vietnam (1954–1955), and later the first president of South Vietnam from 1955 until his capture and assassination during the CIA-backed 1963 coup d'état."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1921,
   "text": "The Chicago Theatre (pictured), the oldest surviving grand movie palace, opened.",
   "context": [
    "The Chicago Theatre, originally known as the Balaban and Katz Chicago Theatre, is a theater on North State Street in the Loop area of Chicago, Illinois. Built in 1921, the Chicago Theatre was the flagship for the Balaban and Katz (B&K) group of theaters run by A. J. Balaban, his brother Barney Balaban and partner Sam Katz. Along with the other B&K theaters, from 1925 to 1945 the Chicago Theatre was a dominant movie theater enterprise. Currently, Madison Square Garden, Inc. owns and operates the Chicago Theatre as a 3600 seat performing arts venue for stage plays, magic shows, comedy, speeches, sporting events and popular music concerts."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1906,
   "text": "The Illinois Memorial, honoring Union army soldiers from Illinois who fought at the Siege of Vicksburg, was dedicated at Vicksburg National Military Park.",
   "context": [
    "The Illinois Memorial is a public memorial located at Vicksburg National Military Park in Vicksburg, Mississippi, United States. Dedicated in 1906, it honors the Union Army soldiers from Illinois who fought in the siege of Vicksburg during the Vicksburg campaign of the American Civil War. It was designed by architect William Le Baron Jenney and sculptor Charles Mulligan."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1905,
   "text": "The Saint Petersburg Soviet held its first meeting, becoming the first elected body in Russia to represent workers.",
   "context": [
    "The Petersburg Soviet of Workers' Delegates was a workers' council, or soviet, in Saint Petersburg in 1905."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1902,
   "text": "A group of Russian explorers led by Baron von Toll left their camp on Bennett Island and disappeared without a trace.",
   "context": [
    "Eduard Gustav Freiherr von Toll, also known as Baron von Toll, was a Russian geologist and Arctic explorer of Baltic German descent. He led the Russian polar expedition of 1900–1902 in search of the legendary Sannikov Land, a phantom island purported to lie off Russia's Arctic coast. During the expedition, Toll and a small party of explorers disappeared from Bennett Island, and their fate remains unknown to this day."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1892,
   "text": "Ida B. Wells (pictured) began publishing her research on lynching in the United States, for which she was posthumously awarded a Pulitzer Prize in 2020.",
   "context": [
    "Ida Bell Wells-Barnett was an American investigative journalist, sociologist, educator, and early leader in the civil rights movement. She was one of the founders of the National Association for the Advancement of Colored People (NAACP). Wells dedicated her career to combating prejudice and violence, and advocating for African-American equality—especially for women."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1871,
   "text": "Liberian president Edward James Roye (pictured) was overthrown in modern Africa's first coup d'état.",
   "context": [
    "Edward James Roye was an Americo-Liberian merchant and politician who served as the fifth president of Liberia from 1870 until his overthrow in the 1871 Liberian coup d'état and subsequent death. He had previously served as the fourth Chief Justice of Liberia from 1865 until 1868. He was the first member of Liberia's True Whig Party to serve as president."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1863,
   "text": "The Football Association, world's first governing body of association football, was founded in London.",
   "context": [
    "The Football Association is the governing body of association football in England and the Crown Dependencies of Jersey, Guernsey and the Isle of Man. Formed in 1863, it is the oldest football association in the world and is responsible for overseeing all aspects of the amateur and professional game in its territory."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1813,
   "text": "War of 1812: British forces and Mohawk allies under Charles de Salaberry repulsed an American attempt to invade Canada.",
   "context": [
    "The War of 1812 was a conflict initiated by the United States against the United Kingdom and its allies fought mainly in North America and at sea during the wider Napoleonic Wars. The United States declared war on Britain on 18 June 1812. Although peace terms were agreed upon in the December 1814 Treaty of Ghent, the war did not officially end until the peace treaty was ratified by the United States Senate on 17 February 1815."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1597,
   "text": "Imjin War: Thirteen Korean ships commanded by Admiral Yi Sun-sin defeated a far larger Japanese invading fleet at the Battle of Myeongnyang in the Myeongnyang Strait.",
   "context": [
    "The Imjin War was a series of two Japanese invasions of Korea: an initial invasion in 1592 also individually called the \"Imjin War\", a brief truce in 1596 between the conflicts, followed by a second invasion in 1597 called the Chŏngyu War. The conflict ended in 1598 with the withdrawal of Japanese forces from the Korean Peninsula after a military stalemate in Korea's southern provinces."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1520,
   "text": "Charles V was crowned as Holy Roman Emperor.",
   "context": [
    "Charles V was Holy Roman Emperor and Archduke of Austria from 1519 to 1556, King of Spain from 1516 to 1556, King of Sicily and Naples from 1516 to 1554, and also Lord of the Netherlands and titular Duke of Burgundy from 1506 to 1555. He was heir to and then head of the rising House of Habsburg. His dominions in Europe included the Holy Roman Empire, extending from Germany to northern Italy with rule over the Austrian hereditary lands and Burgundian Low Countries, and Spain with its possessions of the southern Italian kingdoms of Sicily, Naples, and Sardinia. In the Americas, he oversaw the continuation of Spanish colonisation and a short-lived German colonisation. The personal union of the European and American territories he ruled was the first collection of realms labelled \"the empire on which the sun never sets\"."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1341,
   "text": "The Byzantine army proclaimed chief minister John VI Kantakouzenos as emperor, triggering a civil war between his supporters and those of John V Palaiologos, the heir to the throne.",
   "context": [
    "The Byzantine Empire, also known as the Eastern Roman Empire, was the continuation of the Eastern part of the Roman Empire centred on Constantinople during late antiquity and the Middle Ages. Having survived the fall of the Western Roman Empire in the 5th century AD, it endured until the fall of Constantinople to the Ottoman Empire in 1453. The term 'Byzantine Empire' was coined only after its demise; its citizens used the term 'Roman Empire' and called themselves 'Romans'."
   ]
  }
 ],
 "recent_words_and_concepts": [
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