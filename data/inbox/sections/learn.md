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
   "text": "The Maltese journalist and anti-corruption activist Daphne Caruana Galizia was killed in a car bomb attack in Bidnija.",
   "context": [
    "Daphne Anne Caruana Galizia was a Maltese writer, journalist, blogger and anti-corruption activist who reported on political events in Malta. She was known internationally for her investigation of the Panama Papers and her subsequent assassination by a car bomb."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2013,
   "text": "In Laos's deadliest air accident, Lao Airlines Flight 301 crashed into the Mekong River, resulting in the deaths of all 49 people aboard.",
   "context": [
    "Lao Airlines Flight 301 was a scheduled domestic passenger flight from Vientiane to Pakse, Laos. On 16 October 2013, the ATR 72-600 aircraft operating the flight crashed into the Mekong River near Pakse, killing all 49 people on board. The accident was the first involving an ATR 72-600 and the deadliest ever to occur on Lao soil."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1991,
   "text": "A man drove his vehicle through the window of a Luby's Cafeteria in Killeen, Texas, and opened fire, killing 23 people before fatally shooting himself.",
   "context": [
    "Luby’s Restaurant Corporation is a chain of cafeteria-style restaurants in Texas. In the past, Luby's Inc. also owned the Fuddruckers, Koo Koo Roo, and Cheeseburger in Paradise restaurant chains."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1973,
   "text": "The Norwegian Nobel Committee announced that the 1973 Nobel Peace Prize would be jointly awarded to Henry Kissinger and Lê Đức Thọ, sparking international controversy.",
   "context": [
    "The Norwegian Nobel Committee selects the recipients of the Nobel Peace Prize each year on behalf of Swedish industrialist Alfred Nobel's estate, based on instructions of Nobel's will."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1964,
   "text": "With the success of Project 596, China became the world's fifth nuclear power.",
   "context": [
    "Project 596 was the first nuclear test of the nuclear weapons program of China, detonated on 16 October 1964, at the Lop Nur test site in Xinjiang. It was an implosion fission device containing about 15 kg weapons-grade uranium (U-235), produced at the Lanzhou enrichment plant."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1950,
   "text": "The first novel of the The Chronicles of Narnia series by C. S. Lewis, The Lion, the Witch and the Wardrobe, was published in the United Kingdom.",
   "context": [
    "The Chronicles of Narnia is a series of seven portal fantasy novels by British author C. S. Lewis. Illustrated by Pauline Baynes and originally published between 1950 and 1956, the series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals. It narrates the adventures of various children who play central roles in the unfolding history of the Narnian world. Except in The Horse and His Boy, the protagonists are all children from the real world who are magically transported to Narnia, where they are sometimes called upon by the lion Aslan to protect Narnia from evil. The books span the entire history of Narnia, from its creation in The Magician's Nephew to its eventual destruction in The Last Battle."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1944,
   "text": "A  four-day air battle over Taiwan ended with a decisive American victory, destroying hundreds of Japanese aircraft and military facilities.",
   "context": [
    "The Formosa Air Battle, 12–16 October 1944, was a series of large-scale aerial engagements between carrier air groups of the United States Navy Fast Carrier Task Force and Japanese land-based air forces of the Imperial Japanese Navy (IJN) and Imperial Japanese Army (IJA). The battle consisted of American air raids against Japanese military installations on Taiwan during the day and Japanese air attacks at night against American ships. Japanese losses exceeded 300 planes destroyed in the air, while American losses amounted to fewer than 100 aircraft destroyed and two cruisers damaged. This outcome effectively deprived the Japanese Navy's Combined Fleet of air cover for future operations, which proved decisive during the Battle of Leyte Gulf later in October."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1943,
   "text": "The Holocaust: The Gestapo conducted a raid on the Roman Ghetto, capturing 1,259 members of the Jewish community, most of whom were sent to Auschwitz.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1926,
   "text": "Háry János (poster pictured), a Hungarian folk opera by Zoltán Kodály, was premiered at the Royal Hungarian Opera House in Budapest.",
   "context": [
    "Háry János is a Hungarian folk opera in four acts by Zoltán Kodály with a libretto by Béla Paulini and Zsolt Harsányi. The opera is in the Singspiel style. The libretto is based on János Garay's comic poem \"The Veteran\" about a drunkard named Háry János. The subtitle of the piece is Háry János Kalandozásai Nagyabonytul a Burgváráig – Háry János: his Adventures from Nagyabony to the Vienna Burg."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1923,
   "text": "Roy and Walt Disney (pictured) founded the Disney Brothers Cartoon Studio in Hollywood, which eventually grew to become one of the largest media and entertainment corporations in the world.",
   "context": [
    "Roy Oliver Disney was an American entrepreneur. He co-founded with his younger brother Walt what is now the Walt Disney Company in October 1923. Disney also served as the company's first chief executive officer and was the father of Roy E. Disney."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1916,
   "text": "Margaret Sanger (pictured) established the United States' first family planning clinic in Brooklyn, New York.",
   "context": [
    "Margaret Sanger was an American birth control activist, sex educator, writer, and nurse. She opened the first birth control clinic in the United States, founded Planned Parenthood, and was instrumental in the development of the first birth control pill. Sanger is regarded as a founder and leader of the U.S. birth control movement."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1905,
   "text": "Authorities of the British Raj partitioned the Bengal Presidency, separating the largely Muslim eastern areas from the largely Hindu western areas.",
   "context": [
    "The British Raj was the period of rule of the British Crown on the Indian subcontinent, lasting from 1858 to 1947. It is also called Crown rule in India, or direct rule in India. The region under British control was commonly called India in contemporaneous usage and included areas directly administered by the United Kingdom, which were collectively called British India, and areas ruled by indigenous rulers, but under British paramountcy, called the princely states. The region was sometimes called the Indian Empire, though not officially. As India, it was a founding member of the League of Nations and a founding member of the United Nations in San Francisco in 1945. India was a participating state in the Summer Olympics in 1900, 1920, 1928, 1932, and 1936."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1875,
   "text": "Brigham Young University was founded in Provo, Utah, United States.",
   "context": [
    "Brigham Young University (BYU) is a private research university in Provo, Utah, United States. It was founded in 1875 by religious leader Brigham Young and is the flagship university of the Church Educational System (CES) of the Church of Jesus Christ of Latter-day Saints."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1841,
   "text": "The Church of Scotland established Queen's College in Kingston, Ontario, in Canada.",
   "context": [
    "The Church of Scotland is a Reformed denomination of Christianity that holds the status of the national and established church of Scotland. It is one of the country's larger denominations, having 229,000 members in 2025, or 4% of the Scottish population. In the 2022 census, 1,108,796 people, or 20% of the Scottish population, claimed affiliation with the church."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1834,
   "text": "Most of the Palace of Westminster in London was destroyed in a fire caused by the burning of wooden tally sticks.",
   "context": [
    "The Palace of Westminster is the meeting place of the Parliament of the United Kingdom and is located in London, England. It is colloquially known as the Houses of Parliament after the House of Commons and the House of Lords, the two legislative chambers which occupy the building. The palace is one of the centres of political life in the United Kingdom; \"Westminster\" has become a metonym for the UK Parliament and government, and the Westminster system of government commemorates the name of the palace. The Elizabeth Tower of the palace houses the bell nicknamed Big Ben and is a landmark of London and the United Kingdom in general. The palace has been a Grade I listed building since 1970 and part of a UNESCO World Heritage Site since 1987."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1813,
   "text": "The Sixth Coalition attacked French forces led by Napoleon in the Battle of Leipzig, the largest conflict in the Napoleonic Wars, with over 500,000 troops involved.",
   "context": [
    "The War of the Sixth Coalition, sometimes known in Germany as the Wars of Liberation saw a coalition of Austria, Prussia, Russia, Spain, the United Kingdom, Portugal, Sweden, Sardinia, and a number of German states defeat the First French Empire and force Napoleon into exile on Elba. Following the disastrous French invasion of Russia in 1812 in which they had been forced to support France, Prussia and Austria joined Russia, Britain, Sweden, Portugal and Spain against France."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1793,
   "text": "War of the First Coalition: The two-day Battle of Wattignies concluded with Jean-Baptiste Jourdan leading French forces to victory over Prince Josias of Saxe-Coburg-Saalfeld.",
   "context": [
    "The War of the First Coalition was a set of wars between a coalition of several European powers and France fought from 1792 to 1797. The coalition was only loosely allied and fought without much coordination; each power wanted to annex a different part of France should they defeat the French, something that never occurred."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1384,
   "text": "Jadwiga was officially crowned as \"King of Poland\" instead of \"Queen\" to reflect the fact that she was a sovereign in her own right.",
   "context": [
    "Jadwiga, also known as Hedwig, was Queen of the Kingdom of Poland, as well as its last hereditary ruler. Crowned \"King\" to highlight her sovereign status, she reigned from 16 October 1384 until her death. Born in Buda, she was the youngest daughter of Louis I of Hungary and Elizabeth of Bosnia. Jadwiga was a member of the Capetian House of Anjou and had forebears among the Polish Piasts."
   ]
  }
 ],
 "recent_words_and_concepts": [
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