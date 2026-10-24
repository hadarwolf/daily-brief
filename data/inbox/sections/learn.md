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
   "year": 2015,
   "text": "Lam Wing-kee, the owner of Causeway Bay Books in Hong Kong, known for publishing political books banned in mainland China, was abducted by Chinese authorities.",
   "context": [
    "Lam Wing-kee was a Hong Kong businessman and book seller. He was the owner of Causeway Bay Books in Taipei, a book store first located in Causeway Bay in Hong Kong and best known for its provision of politically related publications. In late 2015, he went missing along with four other staff members of the book store, sparking international concern."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2004,
   "text": "English football club Manchester United defeated rivals Arsenal 2–0 in the Battle of the Buffet, ending the latter's record-breaking unbeaten run.",
   "context": [
    "Manchester United Football Club, commonly referred to as Man United or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. They compete in the Premier League, the top tier of English football. Manchester United are among the most successful football clubs in England, as well as one of the most successful football clubs in the world. Domestically, they have won a joint-record twenty top-flight league titles, thirteen FA Cups, six League Cups and a record twenty-one FA Community Shields. Additionally, in international football, they have won the European Cup/UEFA Champions League three times, and the UEFA Europa League, the UEFA Cup Winners' Cup, the UEFA Super Cup, the Intercontinental Cup and the FIFA Club World Cup once each."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2003,
   "text": "The inaugural Afro-Asian Games opened in Hyderabad, with 2,040 athletes from 96 nations competing.",
   "context": [
    "The 2003 Afro-Asian Games, officially known as the First Afro-Asian Games or I Afro-Asian Games and unofficially known as the Inaugural Afro-Asian Games, was a major international multi-sport event held in Hyderabad, India, from 24 October to 1 November 2003."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1975,
   "text": "In protest against wage discrepancy and unfair employment practices, 90 percent of Iceland's female population went on strike for a day.",
   "context": [
    "The gender pay gap or gender wage gap is the average difference between the remuneration for men and women who are employed. In most countries, women are paid less than men for the same work.non-adjusted pay gap is the average difference in yearly earnings between male and female workers\nadjusted pay gap is the difference between how much men and women make for the same work, and it takes into account differences in hours worked, occupations chosen, education attained, and job experience."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1972,
   "text": "Three people were killed when falsework collapsed during the construction of the Loddon Bridge in Berkshire, leading to reform of construction practices in the UK.",
   "context": [
    "Falsework consists of temporary structures used in construction to support a permanent structure until its construction is sufficiently advanced to support itself. For arches, this is specifically called centering. Falsework includes temporary support structures for formwork used to mold concrete in the construction of buildings, bridges, and elevated roadways."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1964,
   "text": "Charges in a military court against generals Dương Văn Đức and Lâm Văn Phát of leading a coup attempt against South Vietnamese leader Nguyễn Khánh were dropped.",
   "context": [
    "Lieutenant General Dương Văn Đức was a Vietnamese army officer. He is best known for leading a coup attempt against General Nguyễn Khánh on 14 September 1964. He was a supporter of the Đại Việt Quốc Dân Đảng, a Roman Catholic political movement."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1949,
   "text": "The cornerstone of the United Nations headquarters was laid in New York City.",
   "context": [
    "The headquarters of the United Nations (UN) is on 17 to 18 acres of grounds in the Turtle Bay neighborhood of Midtown Manhattan in New York City, United States. It borders First Avenue to the west, 42nd Street to the south, 48th Street to the north, and the East River to the east. Completed in 1952, the complex consists of several structures, including the Secretariat, Conference, and General Assembly buildings, and the Dag Hammarskjöld Library. The complex was designed by a board of architects led by Wallace Harrison and built by the architectural firm Harrison & Abramovitz, with final projects developed by Oscar Niemeyer and Le Corbusier. The term Turtle Bay is occasionally used as a metonym for the UN headquarters or United Nations as a whole."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1945,
   "text": "The Charter of the United Nations entered into force after being ratified by the five permanent members of the Security Council and a majority of the other signatories.",
   "context": [
    "The Charter of the United Nations, also referred to as the UN Charter, is the foundational treaty of the United Nations that founded the organization. It establishes the purposes, governing structure, and overall framework of the United Nations System, including its principal organs: the Secretariat, the General Assembly, the Security Council, the Economic and Social Council, the International Court of Justice, and the Trusteeship Council. The UN Charter is an important part of public international law, and is the foundation for much of international law governing the use of force, pacific settlement of disputes, arms control, and other important functions of the maintenance of international peace and security."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1944,
   "text": "World War II: The Japanese battleship Musashi, one of the heaviest and most powerfully armed ever constructed, was sunk by American aircraft during the Battle of Leyte Gulf.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1931,
   "text": "The George Washington Bridge (pictured), connecting Manhattan, New York City, to Fort Lee, New Jersey, and today the world's busiest motor-vehicle bridge, was dedicated.",
   "context": [
    "The George Washington Bridge is a double-decked suspension bridge spanning the Hudson River, connecting Fort Lee in Bergen County, New Jersey, with the Washington Heights neighborhood of Manhattan, New York City. It is named after George Washington, a Founding Father of the United States and the country's first president. The George Washington Bridge is the world's busiest motor vehicle bridge, carrying a traffic volume of over 101 million motor vehicles in 2025, and is the world's only suspension bridge with 14 vehicular lanes. The George Washington Bridge measures 4,760 feet (1,450 m) long, and its main span is 3,500 feet (1,100 m) long. It was the longest main bridge span in the world from its 1931 opening until the Golden Gate Bridge in San Francisco opened in 1937."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1930,
   "text": "The Pacification Junta deposed Brazillian president Washington Luís, ending the Brazilian Revolution of 1930.",
   "context": [
    "The Brazilian military junta of 1930, also known as the Pacification Junta, seized power during the Revolution of 1930 and governed Brazil from 24 October to 3 November 1930, when the junta leaders handed power over to revolutionary leader Getúlio Vargas."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1929,
   "text": "On \"Black Thursday\", the New York Stock Exchange lost 11 percent of its value at the opening bell on very heavy trading, marking the beginning of the Great Depression.",
   "context": [
    "The Wall Street crash of 1929, also known as the Great Crash, was a major stock market crash in the United States which began in October 1929 with a sharp decline in prices on the New York Stock Exchange (NYSE). It triggered a rapid erosion of confidence in the U.S. banking system and marked what would later cascade into the worldwide Great Depression that lasted until the United States entered into World War II on December 8, 1941, making it the most devastating crash in the country's history. It is most associated with October 24, 1929, known as \"Black Thursday\", when a record 12.9 million shares were traded on the exchange, and October 29, 1929, or \"Black Tuesday\", when some 16.4 million shares were traded."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1889,
   "text": "Sir Henry Parkes, Premier of the Colony of New South Wales, gave a speech in which he called for the federation of the six Australian colonies.",
   "context": [
    "Sir Henry Parkes, was a colonial Australian politician and the longest-serving non-consecutive premier of the Colony of New South Wales, the present-day state of New South Wales in the Commonwealth of Australia. He has been referred to as the \"Father of Federation\" due to his early promotion for the federation of the six colonies of Australia, as an early critic of British convict transportation and as a proponent for the expansion of the Australian continental rail network."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1885,
   "text": "The Russian ship Dmitry ran aground in Whitby, an incident that inspired the arrival of Count Dracula to England in Bram Stoker's 1897 novel (cover pictured).",
   "context": [
    "Dmitry was a Russian cargo ship that was wrecked at Whitby, England, in 1885. The vessel had been travelling from Antwerp, Belgium, to Newcastle upon Tyne, England, when she sought safe harbour in Whitby during a gale on 24 October. She escaped rocks outside the harbour but drifted onto a sand bar and was wrecked there the following day. The wreck came to the attention of author Bram Stoker during a visit to the town in 1890 and served as the inspiration for the Demeter in his gothic horror novel Dracula."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1851,
   "text": "Umbriel and Ariel, the third- and fourth-largest moons of Uranus, were discovered by William Lassell.",
   "context": [
    "Umbriel is the third-largest moon of Uranus. It was discovered on October 24, 1851, by William Lassell at the same time as neighboring moon Ariel. It was named after a character in Alexander Pope's 1712 poem The Rape of the Lock. Umbriel consists mainly of ice with a substantial fraction of rock, and may be differentiated into a rocky core and an icy mantle. The surface is the darkest among Uranian moons and appears to have been shaped primarily by impacts; however, the presence of canyons suggests early internal processes. The moon may have undergone an early endogenically driven resurfacing event that obliterated its older surface."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1796,
   "text": "War of the First Coalition: The Battle of Schliengen was fought between the French and Austrian armies, who both claimed victory.",
   "context": [
    "The War of the First Coalition was a set of wars between a coalition of several European powers and France fought from 1792 to 1797. The coalition was only loosely allied and fought without much coordination; each power wanted to annex a different part of France should they defeat the French, something that never occurred."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1789,
   "text": "The Brabant Revolution, sometimes considered to be the first expression of Belgian nationalism, began with the invasion of the Austrian Netherlands by an émigré army from the Dutch Republic.",
   "context": [
    "The Brabant Revolution or Brabantine Revolution, sometimes referred to as the Belgian Revolution of 1789–1790 in older writing, was an armed insurrection that occurred in the Austrian Netherlands between October 1789 and December 1790. The revolution, which occurred at the same time as revolutions in France and Liège, led to the brief overthrow of Habsburg rule and the proclamation of a short-lived polity, the United Belgian States."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1260,
   "text": "Qutuz (bust pictured), the sultan of Egypt, was assassinated and replaced by fellow Mamluk leader Baybars.",
   "context": [
    "Sayf ad-Din Qutuz, also romanized as Kutuz or Kotuz and fully al-Malik al-Muẓaffar Sayf ad-Dīn Quṭuz, was the Mamluk Sultan of Egypt. He reigned as Sultan for less than a year, from 1259 until his assassination in 1260, but served as the de facto ruler for two decades."
   ]
  }
 ],
 "recent_words_and_concepts": [
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