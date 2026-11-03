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
   "year": 2002,
   "text": "A CIA drone strike kills six militants in Yemen, constituting the first targeted killing of the war on terror.",
   "context": [
    "On November 3, 2002, a remotely piloted aircraft operated by the Central Intelligence Agency (CIA) launched an airstrike on a vehicle travelling through Marib Governorate, Yemen. The strike killed six militants including its target Abu Ali al-Harithi, the leader of al-Qaeda in Yemen. It was the first drone strike conducted by the United States outside of a conventional battlefield, and the first targeted killing in the war on terror."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1996,
   "text": "Abdullah Çatlı, a leader of the ultra-nationalist Grey Wolves, was killed in a car crash near Susurluk, Turkey, sparking a scandal that exposed the depth of the state's complicity in organized crime.",
   "context": [
    "Abdullah Çatlı was a Turkish secret government agent, convicted drug trafficker as well as a contract killer for the National Intelligence Organization (MİT). He led the Grey Wolves, the youth branch of the Nationalist Movement Party (MHP), during the 1970s. His death in the Susurluk car crash, while travelling in a car with state officials, revealed the depth of the state's complicity in organized crime in what became known as the Susurluk scandal. He was a hitman for the state, and was involved in the killings of suspected members of the Kurdistan Workers' Party (PKK) and the Armenian Secret Army for the Liberation of Armenia (ASALA)."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1969,
   "text": "U.S. president Richard Nixon made a plea for support from the \"silent majority\", referring to those Americans who did not join in the large demonstrations against the Vietnam War at the time.",
   "context": [
    "Richard Milhous Nixon was the 37th president of the United States, serving from 1969 until his resignation in 1974. A member of the Republican Party, he represented California in both houses of the United States Congress before serving as the 36th vice president under President Dwight D. Eisenhower from 1953 to 1961. His presidency saw the reduction of U.S. involvement in the Vietnam War, détente with the Soviet Union and China, the Apollo 11 Moon landing, and the establishment of the Environmental Protection Agency and Occupational Safety and Health Administration. Nixon's second term ended early when he became the only U.S. president to resign from office, as a part of the Watergate scandal."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1957,
   "text": "The Soviet Union launched Sputnik 2, carrying the space dog Laika as the first living creature to enter orbit around Earth.",
   "context": [
    "Sputnik 2, or Prosteyshiy Sputnik 2, launched on 3 November 1957, was the second spacecraft launched into Earth orbit, and the first to carry an animal into orbit, a Soviet space dog named Laika."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1956,
   "text": "Suez Crisis: During an invasion of the Gaza Strip, Israeli soldiers shot and killed hundreds of Palestinian refugees and local inhabitants in Khan Yunis.",
   "context": [
    "The Suez Crisis, also known as the second Arab–Israeli war, the Tripartite Aggression in the Arab world and the Sinai War in Israel, was a British–French–Israeli invasion of Egypt in 1956. Israel invaded on 29 October, with the primary objective of re-opening the Straits of Tiran and the Gulf of Aqaba as the recent tightening of the eight-year-long Egyptian blockade prevented Israeli passage. After issuing a joint ultimatum for a ceasefire, the United Kingdom and France joined the Israelis on 31 October in an attempt to depose Egyptian president Gamal Abdel Nasser and regain control of the Suez Canal. The countries came under heavy political pressure from the United States, the Soviet Union and the United Nations, prompting their withdrawal from Egypt."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1954,
   "text": "The first film (poster pictured) featuring the giant monster Godzilla was released nationwide in Japan.",
   "context": [
    "Godzilla  is a 1954 Japanese epic kaiju film directed and co-written by Ishirō Honda, with special effects by Eiji Tsuburaya. Produced and distributed by Toho, it is the first film in the Godzilla franchise. The film stars Akira Takarada, Momoko Kōchi, Akihiko Hirata, Takashi Shimura, with Haruo Nakajima and Katsumi Tezuka as Godzilla. In the film, Japanese authorities deal with the sudden appearance of a gigantic monster, mutated from nuclear bomb testing."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1948,
   "text": "The Chicago Daily Tribune published the erroneous headline \"Dewey Defeats Truman\" (pictured) in its early morning edition shortly after incumbent U.S. president Harry S. Truman officially upset the heavily favored governor of New York Thomas Dewey in the presidential election.",
   "context": [
    "The Chicago Tribune is an American daily newspaper based in Chicago, Illinois, United States. Founded in 1847, it was formerly self-styled as the \"World's Greatest Newspaper\", a slogan from which its once-integrated WGN radio and WGN television received their call letters. It is the most-read daily newspaper in the Chicago metropolitan area and the Great Lakes region, and the sixth-largest newspaper by print circulation in the U.S."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1943,
   "text": "The Holocaust: The largest massacre of Jews by German forces began at the Majdanek concentration camp in occupied Poland.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1942,
   "text": "World War II: U.S. Marines and U.S. Army forces began an attempt to encircle and destroy a regiment of Imperial Japanese Army troops on Guadalcanal.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1935,
   "text": "In a widely criticised referendum, almost 98 percent of Greek voters supported the restoration of George II (pictured) as King of the Hellenes.",
   "context": [
    "A referendum on restoring the monarchy was held in Greece on 3 November 1935. The proposal was approved by nearly 97.9% of voters, although the conduct of the referendum was far from free or fair. George II returned from exile and was restored to the throne on 25 November 1935."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1898,
   "text": "The Fashoda Incident ended with French forces withdrawing after several months of military stalemate with the British in Fashoda (now in South Sudan).",
   "context": [
    "The Fashoda Incident, also known as the Fashoda Crisis, was the climax of imperialist territorial disputes between Britain and France in East Africa, occurring between 10 July and 3 November 1898. A French expedition to Fashoda on the White Nile sought to gain control of the Upper Nile river basin and thereby exclude Britain from Sudan. The French party and a British-Egyptian force met on friendly terms. However, in Europe, it became a war scare. Both empires stood on the verge of war with heated rhetoric on both sides. Under heavy pressure, the French withdrew, ensuring Anglo-Egyptian control over the area."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1881,
   "text": "Indigenous Mapuche began an uprising against the occupation of Araucanía by Chile.",
   "context": [
    "The Mapuche, also known as Araucanians, are a group of Indigenous inhabitants of south-central Chile and southwestern Argentina, including parts of Patagonia. The collective term refers to a wide-ranging ethnicity composed of various groups who share a common social, religious, and economic structure, as well as a common linguistic heritage as Mapudungun speakers. Their homelands once extended from Choapa Valley to the Chiloé Archipelago and later spread eastward to Puelmapu, a land comprising part of the Argentine pampa and Patagonia. Today, the Mapuche represent 77.16% of Chile’s indigenous peoples and about 8.8% of the total national population. The Mapuche are concentrated in the Araucanía region. Many have migrated from rural areas to the cities of Santiago and Buenos Aires to pursue economic opportunities. Around 92% of the Mapuches are from Chile."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1880,
   "text": "The current melody of Kimigayo, the national anthem of Japan, was adopted.",
   "context": [
    "\"Kimigayo\"  is the national anthem of Japan. The lyrics are from a waka poem written by an unnamed author in the Heian period (794–1185), making the lyrics of \"Kimigayo\" the oldest lyrics of any national anthem. The current melody was chosen in 1880, replacing an unpopular melody composed by John William Fenton in 1869. While the title \"Kimigayo\" is usually translated as \"His Majesty's Reign\", no official translation of the title or lyrics have been established in law."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1848,
   "text": "A new constitution drafted by Johan Rudolph Thorbecke was proclaimed, limiting the powers of the Dutch monarchy.",
   "context": [
    "The Constitution of the Kingdom of the Netherlands of 24 August 1815 is one of two fundamental documents governing the Kingdom of the Netherlands as well as the fundamental law of the Netherlands proper. The Kingdom of the Netherlands also includes Aruba, Curaçao and Sint Maarten: there is an overarching instrument of the entire kingdom that has constitution characteristics: the Charter for the Kingdom of the Netherlands. Sint Maarten is the only country in the Kingdom of the Netherlands that has a constitutional court to govern the Sint Maarten legislature."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1812,
   "text": "French invasion of Russia: As Napoleon's Grande Armée began its retreat, its rearguard was defeated at the Battle of Vyazma.",
   "context": [
    "The French invasion of Russia, also known as the Russian campaign, the Second Polish War, and in Russia as the Patriotic War of 1812, was initiated by Napoleon with the aim of forcing the Russian Empire to comply with the continental blockade of the United Kingdom. Widely studied, Napoleon's incursion into Russia remains a focal point in military history, recognized as among the most devastating military endeavors to ever unfold. In the span of less than six months, the campaign claimed the lives of around a million soldiers and civilians."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1805,
   "text": "War of the Third Coalition: The Treaty of Potsdam was signed compelling Prussia to join the coalition if it failed to negotiate peace between Russia and France.",
   "context": [
    "The War of the Third Coalition was a European conflict lasting from 1805 to 1806 and was the first conflict of the Napoleonic Wars. During the war, France and its client states under Napoleon I and its ally Spain opposed an alliance, the Third Coalition, which was made up of the United Kingdom, the Austrian Empire, the Russian Empire, Naples, Sicily, and Sweden. Prussia remained neutral during the war."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1793,
   "text": "French Revolution: Playwright, journalist and outspoken feminist Olympe de Gouges  was guillotined.",
   "context": [
    "The French Revolution was a period resulting in the political and societal changes in France that began with the Estates General of 1789 and ended with the Coup of 18 Brumaire on 9 November 1799. Many of the revolution's ideas are considered fundamental principles of liberal democracy, and its values remain central to modern French political discourse. It was caused by a combination of social, political, and economic factors which the existing regime proved unable to manage."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1534,
   "text": "The Parliament of England passed the first Act of Supremacy, making King Henry VIII head of the Church of England, supplanting the pope and the Catholic Church.",
   "context": [
    "The Parliament of England was the legislature of the Kingdom of England from the 13th century until 1707 when it was replaced by the Parliament of Great Britain as a result of the Treaty of Union 1707 which merged the parliament with the Parliament of Scotland. Parliament evolved from the great council of bishops and peers that advised the English monarch. Great councils were first called Parliaments during the reign of Henry III. By this time, the king required Parliament's consent to levy taxation."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Skin in the game (עניין אישי בתוצאה)"
 ]
}
</input>