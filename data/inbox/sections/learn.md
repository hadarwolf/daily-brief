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
   "year": 2019,
   "text": "The Mocking of Christ (pictured) by Cimabue sold at auction in France for €19.5 million, a record for a pre-1500 artwork.",
   "context": [
    "The Mocking of Christ is a small 13th-century panel painting by the Italian artist Cimabue, in tempera on a poplar panel. It depicts the mocking of Jesus and is one of three panels known from Cimabue's Diptych of Devotion."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2011,
   "text": "Michael D. Higgins (pictured) was elected President of Ireland with far more votes than any politician in the country's history.",
   "context": [
    "Michael Daniel Higgins is an Irish politician, poet and broadcaster who served as the president of Ireland from November 2011 to November 2025. Entering national politics through the Labour Party, he served as a senator from 1973 to 1977 and a Teachta Dála (TD) from 1981 to 1982, returning to the Seanad from 1983 to 1987 and the Dáil from 1987 to 2011. He served as minister for arts, culture and the Gaeltacht from 1993 to 1997 and as mayor of Galway from 1981 to 1982 and 1990 to 1991."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2004,
   "text": "The Boston Red Sox completed a sweep of the St. Louis Cardinals to win the 2004 World Series, breaking the so-called \"Curse of the Bambino\".",
   "context": [
    "The Boston Red Sox are an American professional baseball team based in Boston. The Red Sox compete in Major League Baseball (MLB) as a member club of the American League (AL) East Division. Founded in 1901 as one of the American League's eight charter franchises, the team's home ballpark has been Fenway Park since 1912. The \"Red Sox\" name was chosen by the team owner, John I. Taylor, c. 1908, following the lead of previous teams that had been known as the \"Boston Red Stockings\", including the Boston Braves. The team has won nine World Series championships, tied for the third-most of any MLB team, and has played in thirteen World Series. Their most recent World Series appearance and win was in 2018. In addition, they won the 1904 American League pennant, but were not able to defend their 1903 World Series championship when the New York Giants refused to participate in the 1904 World Series."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1999,
   "text": "Armed men led by Nairi Hunanyan carried out a mass shooting at the Armenian parliament, killing Prime Minister Vazgen Sargsyan (pictured), National Assembly speaker Karen Demirchyan, and six others.",
   "context": [
    "Nairi Hrachiki Hunanyan is an Armenian journalist who led the armed attack on the Armenian parliament on 27 October 1999 and killed Prime Minister Vazgen Sargsyan and Parliament Speaker Karen Demirchyan and six other politicians."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1993,
   "text": "Widerøe Flight 744 suffered a controlled flight into terrain while on approach to Namsos Airport, Norway, killing two crew members and four passengers.",
   "context": [
    "Widerøe Flight 744, also known as the Namsos Accident, was a scheduled flight of Widerøes Flyveselskap from Trondheim Airport, Værnes, via Namsos, to Rørvik Airport, Ryumsjøen, Norway. On 27 October 1993, the de Havilland Canada DHC-6 Twin Otter serving the flight underwent a controlled flight into terrain during its approach to Namsos Airport, Høknesøra. The incident occurred at 19:16:48 and killed six of the nineteen people on board, including the crew of two. The aircraft crashed at Berg in Overhalla Municipality because it held too low an altitude."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1992,
   "text": "U.S. Navy Petty Officer Allen R. Schindler Jr. was killed in Sasebo, Japan, for being gay, which led to the U.S. Armed Forces' \"don't ask, don't tell\" policy.",
   "context": [
    "A petty officer third class is a non-commissioned officer in some navies and coast guards."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1980,
   "text": "The Chun Doo-hwan government arrested 153 people related to the Jogye Order, which is considered an abuse of state power.",
   "context": [
    "Chun Doo-hwan was a South Korean army general and politician who served as the fifth president of South Korea from 1980 to 1988. A member of the military, he ruled the country as a military dictator following a successful coup in December 1979. The period encompassing his presidency is known as the Fifth Republic of Korea."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1967,
   "text": "American Catholic priest Philip Berrigan led a protest against the Vietnam War by pouring blood over Selective Service records in Baltimore, Maryland.",
   "context": [
    "Philip Francis \"Phil\" Berrigan was an American peace activist and Catholic priest with the Josephites. He engaged in nonviolent, civil disobedience in the cause of peace and nuclear disarmament and was often arrested."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1964,
   "text": "Actor Ronald Reagan delivered a speech on behalf of Republican presidential candidate Barry Goldwater, launching his own political career, which culminated in him serving two full terms as U.S. president.",
   "context": [
    "Ronald Wilson Reagan was an American politician and actor who served as the 40th president of the United States from 1981 to 1989. A member of the Republican Party, he became an important figure in the American conservative movement. The period encompassing his presidency is known as the Reagan era."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1946,
   "text": "Inter-religious riots in which Hindu mobs targeted Muslim families began in the Indian state of Bihar, resulting in thousands of deaths.",
   "context": [
    "Communal riots occurred in Bihar, India from 24 October to 11 November 1946, in which Hindu mobs targeted Muslim families. The riots were triggered by the Great Calcutta Killings, as well as the Noakhali riots earlier that year. Mahatma Gandhi declared that he would fast unto death if the riots did not stop. The riots were part of a sequence of communal violence that culminated in the partition of India."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1942,
   "text": "The Empire of Japan achieved a pyrrhic victory against the United States at the Battle of the Santa Cruz Islands.",
   "context": [
    "The Empire of Japan , also known as the Japanese Empire or Imperial Japan, was the period of Japanese history spanning 79 years, starting with the Meiji Restoration on 3 January 1868, and ending with ratification of the Constitution of Japan on 3 May 1947. From August 1910 to September 1945, it included mainland Japan, Okinawa, the Kurils, Karafuto, Korea, and Taiwan. The South Seas Mandate and concessions were de jure not internal parts of the empire but dependent territories. In the closing stages of World War II, with Japan defeated alongside the rest of the Axis powers, the formalized surrender was issued on 2 September 1945, in compliance with the Potsdam Declaration of the Allies, and the empire's territory subsequently shrunk to cover only mainland Japan. However, Okinawa was later returned to Japan in 1972."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1914,
   "text": "World War I: The Royal Navy dreadnought HMS Audacious was sunk by a mine, but its loss was kept secret for four years.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1913,
   "text": "A rail workers' strike in Chile escalates into a general strike, organized by the Regional Workers' Federation of Chile.",
   "context": [
    "A general strike is a strike action in which a substantial proportion of the total labour force in a city, region, or country participates. General strikes are characterised by the participation of workers from a multitude of workplaces across different industries, and tend to involve entire communities. They are often used to strengthen the bargaining position of a trade union or achieve a common social or political goal. General strikes first occurred in the mid-19th century and have characterised many historically important strikes."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1904,
   "text": "The first underground segment of the New York City Subway opened, connecting New York City Hall with Harlem.",
   "context": [
    "The first regularly operated line of the New York City Subway opened on October 27, 1904, and was operated by the Interborough Rapid Transit Company (IRT). The early IRT system consisted of a single trunk line running south from 96th Street in Manhattan, with a southern branch to Brooklyn. North of 96th Street, the line had three northern branches in Upper Manhattan and the Bronx. The system had four tracks between Brooklyn Bridge–City Hall and 96th Street, allowing for local and express service. The original line and early extensions consisted of:The IRT Eastern Parkway Line, running between Atlantic Avenue–Barclays Center and Borough Hall\nThe IRT Lexington Avenue Line, running between Borough Hall and Grand Central–42nd Street\nThe IRT 42nd Street Shuttle running between Grand Central–42nd Street and Times Square\nThe IRT Broadway–Seventh Avenue Line, running between Times Square and Van Cortlandt Park–242nd Street\nThe IRT Lenox Avenue Line, running betwern 96th Street and 145th Street\nThe IRT White Plains Road Line, running between 142nd Street Junction and 180th Street–Bronx Park"
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1775,
   "text": "King George III expanded on his Proclamation of Rebellion in the Thirteen Colonies in his speech from the throne at the opening of Parliament.",
   "context": [
    "George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. He was concurrently duke and prince-elector of Hanover in the Holy Roman Empire before becoming King of Hanover on 12 October 1814. He was the first monarch of the House of Hanover who was born in Great Britain, spoke English as his first language, and never visited Hanover."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1726,
   "text": "J. S. Bach led the first performance of Ich will den Kreuzstab gerne tragen, BWV 56, one of few works he called a cantata.",
   "context": [
    "Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his prolific output across a variety of instruments and forms, including the orchestral Brandenburg Concertos; solo instrumental works such as the Cello Suites and Sonatas and Partitas for Solo Violin; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schübler Chorales and the Toccata and Fugue in D minor; and choral works such as the St. Matthew Passion and the Mass in B minor. He is known for his mastery of counterpoint, as heard in The Musical Offering and The Art of Fugue. Felix Mendelssohn precipitated the Bach Revival with a performance of the St. Matthew Passion in 1829. Ever since, Bach has been acclaimed as one of the greatest composers in the history of Western music."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1726,
   "text": "In Leipzig, J. S. Bach led the first performance of Ich will den Kreuzstab gerne tragen, one of the few works that he called a cantata.",
   "context": [
    "Leipzig is the most populous city in the German state of Saxony. The city has a population of 633,592 residents as of 31 December 2025. It is the eighth-largest city in Germany and is part of the Central German Metropolitan Region. Leipzig is located about 150 km (90 mi) southwest of Berlin, in the southernmost part of the North German Plain, at the confluence of the White Elster and its tributaries Pleiße and Parthe."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1674,
   "text": "Franco-Dutch War: French forces surrender the fortress town of Grave to the Dutch army after a three month siege.",
   "context": [
    "The Franco-Dutch War, 1672 to 1678, was primarily fought by France and the Dutch Republic, with both sides backed at different times by a variety of allies. Related conflicts include the Third Anglo-Dutch War of 1672 to 1674 and the Scanian War of 1675 to 1679."
   ]
  }
 ],
 "recent_words_and_concepts": [
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