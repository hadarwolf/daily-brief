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
   "text": "Eight-year-old Huang Na was abducted and murdered; her body was found three weeks later after a search across Singapore and Malaysia.",
   "context": [
    "Huang Na was an eight-year-old Chinese national residing in Pasir Panjang, Singapore, who disappeared on 10 October 2004. Her mother, the police and the community conducted a three-week-long nationwide search for her. After her body was found, thousands of Singaporeans attended her wake and funeral, giving bai jin (白金) and gifts. In a high-profile 14-day trial, Took Leng How, a Malaysian vegetable packer at the estate's wholesale centre, was found guilty of murdering her. He was hanged on 3 November 2006 after an appeal and a request for presidential clemency failed."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1992,
   "text": "After 20 years of construction, Vidyasagar Setu, the longest cable-stayed bridge in India, opened, joining Kolkata and Howrah.",
   "context": [
    "Vidyasagar Setu, also known as the Second Hooghly Bridge, is an 822.96-metre-long (2,700 ft) cable-stayed six-laned toll bridge over the Hooghly River in West Bengal, India, linking the cities of Kolkata and Howrah. Opened in 1992, Vidyasagar Setu was the first and longest cable-stayed bridge in India at the time of its inauguration. It was the second bridge to be built across the Hooghly River in Kolkata metropolitan region and was named after the education reformer Pandit Ishwar Chandra Vidyasagar. The project had a cost of ₹388 crore to build. The project was a joint effort between the public and private sectors, under the control of the Hooghly River Bridge Commissioners (HRBC)."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1973,
   "text": "U.S. vice president Spiro Agnew  resigned after being charged with tax evasion.",
   "context": [
    "Spiro Theodore Agnew was the 39th vice president of the United States, serving from 1969 until his resignation in 1973 under President Richard Nixon. A member of the Republican Party, he served as the 3rd executive of Baltimore County from 1962 to 1966 and the 55th governor of Maryland from 1967 to 1969. He is the second of two vice presidents to resign, the first being John C. Calhoun in 1832."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1963,
   "text": "The Partial Nuclear Test Ban Treaty, which prohibits all test detonations of nuclear weapons except for those conducted underground, went into effect.",
   "context": [
    "The Partial Test Ban Treaty (PTBT), formally known as the 1963 Treaty Banning Nuclear Weapon Tests in the Atmosphere, in Outer Space and Under Water, prohibited all test detonations of nuclear weapons except for those conducted underground. It is also abbreviated as the Limited Test Ban Treaty (LTBT) and Nuclear Test Ban Treaty (NTBT), though the latter may also refer to the Comprehensive Nuclear-Test-Ban Treaty (CTBT), which succeeded the PTBT for ratifying parties."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1943,
   "text": "World War II: The Kempeitai, the military police arm of the Imperial Japanese Army, arrested and tortured fifty-seven civilians and civilian internees on suspicion of their involvement in a raid on Singapore Harbour.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides, including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1933,
   "text": "In the first proven act of sabotage in the history of commercial aviation, a Boeing 247 operated by United Airlines exploded in mid-air near Chesterton, Indiana, killing all seven people aboard.",
   "context": [
    "Sabotage is a deliberate action aimed at weakening a polity, government, effort, or organization through subversion, obstruction, demoralization, destabilization, division, disruption, or destruction. One who engages in sabotage is a saboteur. Saboteurs typically try to conceal their identities because of the consequences of their actions and to avoid invoking legal and organizational requirements for addressing sabotage."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1911,
   "text": "The Xinhai Revolution began with the Wuchang Uprising, marking the beginning of the collapse of the Qing dynasty and the establishment of the Republic of China.",
   "context": [
    "The 1911 Revolution, also known as the Xinhai Revolution or Hsinhai Revolution, culminated in the end of China's last imperial dynasty, the Qing dynasty, and led to the establishment of the Republic of China (ROC). The revolution was the culmination of a decade of agitation, revolts, and uprisings. Its success marked the end of Chinese monarchy, the 267-year reign of the Qing, over two millennia of imperial rule in China, and the beginning of China's early republican era."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1903,
   "text": "Emmeline Pankhurst (pictured) founded the Women's Social and Political Union, a militant organisation campaigning for women's suffrage in the United Kingdom.",
   "context": [
    "Emmeline Pankhurst was a British political activist who organised the British suffragette movement and helped women to win the right to vote in Great Britain and Ireland in 1918, partially due to her role in the White Feather Campaign. In 1999, Time named her as one of the 100 Most Important People of the 20th Century, stating that \"she shaped an idea of women for our time\" and \"shook society into a new pattern from which there could be no going back\". She was widely criticised for her militant tactics, and historians disagree about their effectiveness, but her work is recognised as a crucial element in achieving women's suffrage in the United Kingdom."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1846,
   "text": "English astronomer William Lassell discovered Triton, the largest moon of Neptune.",
   "context": [
    "William Lassell was an English merchant and astronomer. He is remembered for his improvements to the reflecting telescope and his ensuing discoveries of four planetary satellites."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1760,
   "text": "In a treaty with Dutch colonial authorities, the Ndyuka people of Suriname gained territorial autonomy.",
   "context": [
    "The Ndyuka people or Aukan people are one of six Maroon peoples in the Republic of Suriname and one of the Maroon peoples in French Guiana. The Aukan or Ndyuka speak the Ndyuka language. They are subdivided into the Opu, who live upstream of the Tapanahony River in the Tapanahony resort of southeastern Suriname, and the Bilo, who live downstream of that river in Marowijne District."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 680,
   "text": "Husayn ibn Ali, a grandson of Muhammad, was killed at the Battle of Karbala (depicted) by the forces of Yazid I, whom Husayn had refused to recognize as caliph.",
   "context": [
    "Husayn ibn Ali was an Alid political and religious leader. The second son of Ali and Fatima and a grandson of the Islamic prophet Muhammad, as well as a younger brother of Hasan ibn Ali, Husayn is regarded as the third Imam in Shia Islam after his brother, Hasan, and before his son, Ali al-Sajjad. Husayn is a prominent member of the Ahl al-Bayt and is also considered to be a member of the Ahl al-Kisa and a participant in the event of the mubahala. Muhammad described him and his brother, Hasan, as the leaders of the youth of paradise."
   ]
  }
 ],
 "recent_words_and_concepts": [
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