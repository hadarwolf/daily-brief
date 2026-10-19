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
   "year": 2017,
   "text": "Canadian astronomer Robert Weryk discovered ʻOumuamua (depicted), the first known interstellar object detected passing through the Solar System.",
   "context": [
    "Robert J. Weryk is a Canadian physicist and astronomer. He currently works at the University of Hawaiʻi at Mānoa, where he discovered the first known interstellar object, ʻOumuamua. He has also published numerous articles on meteors and other astronomical topics."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2013,
   "text": "British YouTube collective the Sidemen were formed as a Rockstar Games Social Club group in Grand Theft Auto Online.",
   "context": [
    "YouTube is an American online video-sharing platform owned by Google. YouTube was founded on February 14, 2005, by Chad Hurley, Jawed Karim, and Steve Chen, all of whom were former employees at PayPal. Headquartered in San Bruno, California, it is the second-most-visited website in the world, after Google itself. In January 2024, YouTube had reached more than 2.7 billion monthly active users, who collectively watched more than one billion hours of video every day. As of May 2019, videos were being uploaded to the platform at a rate of more than 500 hours of video per minute, and as of mid-2024, there were approximately 14.8 billion videos in total."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2005,
   "text": "Hurricane Wilma (pictured) became the most intense Atlantic hurricane on record with a minimum atmospheric pressure of 882 mbar (26.05 inHg).",
   "context": [
    "Hurricane Wilma was the most intense tropical cyclone in the Atlantic basin and the second-most intense tropical cyclone in the Western Hemisphere, both based on barometric pressure, after Hurricane Patricia in 2015. Wilma's rapid intensification led to a 24-hour pressure drop of 97 mbar (2.9 inHg), setting a new basin record. At its peak, Hurricane Wilma's eye contracted to a record minimum diameter of 2.3 mi (3.7 km). In the record-breaking 2005 Atlantic hurricane season, Wilma was the twenty-second storm, thirteenth hurricane, sixth major hurricane, and fourth Category 5 hurricane, and was the second costliest hurricane in Mexican history, behind Hurricane Otis in 2023."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1988,
   "text": "The British government restricted the broadcast of the voices of representatives from Sinn Féin and several Irish republican and loyalist paramilitary groups on television and radio.",
   "context": [
    "From October 1988 to September 1994 the British government banned broadcasts of the voices of representatives from Sinn Féin and ten other Irish republican and loyalist groups on television and radio in the United Kingdom. The restrictions, announced by the Home Secretary, Douglas Hurd, on 19 October 1988, followed a heightened period of violence in the course of the Troubles, and reflected the UK government's belief in a need to prevent these groups from using the media for political advantage."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1987,
   "text": "Iran–Iraq War: U.S. Navy forces destroyed two Iranian oil platforms in the Persian Gulf in response to an Iranian missile attack on a Kuwaiti oil tanker three days earlier.",
   "context": [
    "The Iran–Iraq War, also called the First Imposed War, Eight-Year War, or Sacred Defense by Iran, began with the Iraqi invasion of Iran in September 1980. After eight years of conflict, both countries accepted a ceasefire deal brokered by the United Nations, which became effective in August 1988. The war caused around 500,000 deaths, making it the deadliest conventional war ever fought between regular armies of developing countries."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1987,
   "text": "The Dow Jones Industrial Average fell by 22.6 percent on Black Monday, the largest one-day percentage decline in the stock market index's history.",
   "context": [
    "The Dow Jones Industrial Average (DJIA), Dow Jones, or simply the Dow, is a stock market index tracking the stock performance of 30 large companies listed on stock exchanges in the United States. It is named after founder Charles Dow and his business associate, statistician Edward Jones. It is maintained by S&P Dow Jones Indices and its components are selected by a committee."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1965,
   "text": "A group of ethnic Hutu military officers failed in their attempt to overthrow the Burundian government.",
   "context": [
    "The Hutu, also known as the Abahutu, are a Bantu ethnic group native to the African Great Lakes region. They primarily live in Rwanda, Burundi, Uganda, and the eastern parts of the Democratic Republic of the Congo, where they form one of the principal ethnic groups alongside the Tutsi and the Great Lakes Twa."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1965,
   "text": "Vietnam War: The Siege of Plei Me began with the first major confrontation between soldiers of the North Vietnamese Army and the U.S. Army.",
   "context": [
    "The Vietnam War was an armed conflict in Vietnam, Laos, and Cambodia fought between North Vietnam and South Vietnam and their allies. North Vietnam was supported by the Soviet Union and China, while South Vietnam was supported by the United States and other anti-communist nations. The conflict was the second of the Indochina wars and a proxy war of the Cold War. The Vietnam War was one of the postcolonial wars of national liberation, a theater in the Cold War, and a civil war, with civil warfare a defining feature from the outset. Direct US military involvement escalated from 1965 until US forces were withdrawn in 1973. The fighting spilled into the Laotian and Cambodian civil wars, which ended with all three countries becoming communist in 1975."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1955,
   "text": "At a meeting of its general assembly, the European Broadcasting Union approved the staging of the first Eurovision Song Contest.",
   "context": [
    "The European Broadcasting Union is an alliance of public service media organisations in countries within the European Broadcasting Area (EBA) or who are members of the Council of Europe or to the observers to the Council whose public service broadcasting values align with those of the EBU. As of 2026, it is made up of 115 member organisations from 57 countries, 27 associate members from a further 17 countries, 1 ancillary member, and 6 approved participants. It was established in 1950, and has its administrative headquarters in Geneva."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1944,
   "text": "The Guatemalan Revolution began with a small group of army officers led by Francisco Javier Arana and Jacobo Árbenz launching a coup against dictator Jorge Ubico.",
   "context": [
    "The period in the history of Guatemala between the coups against Jorge Ubico in 1944 and Jacobo Árbenz in 1954 is known locally as the Revolution. It has also been called the Ten Years of Spring, highlighting the peak years of representative democracy in Guatemala from 1944 until the end of the civil war in 1996. It saw the implementation of social, political, and especially agrarian reforms that were influential across Latin America."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1943,
   "text": "World War II: Allied aircraft sank the German cargo ship Sinfra, killing mostly Italian POWs.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1914,
   "text": "First World War: Allied forces began engaging German troops at the First Battle of Ypres.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1864,
   "text": "American Civil War: Despite incurring nearly twice as many casualties as the Confederates, the Union army emerged victorious at the Battle of Cedar Creek.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by Southern states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln as president in 1860 and the growing abolitionist movement in the North. The war ended with a Union victory, dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1781,
   "text": "American Revolutionary War: British forces led by Lord Cornwallis officially surrendered to Franco-American forces under George Washington and the comte de Rochambeau, ending the Siege of Yorktown.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 had led King George III and much of the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1752,
   "text": "The Pennsylvania Gazette published a statement by Benjamin Franklin describing a kite experiment (depicted) to determine the electrical nature of lightning.",
   "context": [
    "The Pennsylvania Gazette was one of the United States' most prominent newspapers from 1728 until 1815. In the years leading up to the American Revolution, the newspaper served as a voice for colonial opposition to British colonial rule, especially to the Stamp Act and the Townshend Acts. The newspaper was headquartered in Philadelphia."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1596,
   "text": "The Spanish ship San Felipe was shipwrecked on the Japanese island of Shikoku, and its cargo confiscated by the local daimyo.",
   "context": [
    "\n\nOn October 19, 1596, the Spanish ship San Felipe was shipwrecked on Urado in Kōchi on the Japanese island of Shikoku en route from Manila to Acapulco. The local daimyo Chōsokabe Motochika seized the cargo of the richly laden Manila galleon, and the incident escalated to Toyotomi Hideyoshi, ruling taikō of Japan. The pilot of the ship suggested to Japanese authorities that it was Spanish modus operandi to have missionaries infiltrate a country before an eventual military conquest, depicting the Spanish campaigns in the Americas and the Philippines in this way. This led to the crucifixion of 26 Christians in Nagasaki, the first lethal persecution of Christians by the state in Japan. The executed were later known as the Twenty-Six Martyrs of Japan."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1579,
   "text": "A ceremony was held in Edinburgh marking the coming of age of James VI of Scotland as an adult ruler.",
   "context": [
    "A royal entry into Edinburgh marked the coming of age of King James VI of Scotland as an adult ruler on 19 October 1579. The 13-year-old king came to Edinburgh to begin his adult rule, having spent his childhood at Stirling Castle."
   ]
  }
 ],
 "recent_words_and_concepts": [
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