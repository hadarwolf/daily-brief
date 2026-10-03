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
   "year": 2013,
   "text": "A boat carrying migrants from Libya to Italy sank off the Italian island of Lampedusa, resulting in more than 360 deaths.",
   "context": [
    "On 3 October 2013, a boat carrying migrants from Libya to Italy sank off the Italian island of Lampedusa. It was reported that the boat had sailed from Misrata, Libya, but that many of the migrants were originally from Eritrea, Somalia and Ghana. An emergency response involving the Italian Coast Guard resulted in the rescue of 155 survivors. On 12 October it was reported that the confirmed death toll after searching the boat was 359, but that further bodies were still missing; a figure of \"more than 360\" deaths was later reported."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2008,
   "text": "The Emergency Economic Stabilization Act of 2008, establishing the Troubled Asset Relief Program, commonly referred to as a bailout of the U.S. financial system, was enacted.",
   "context": [
    "The Emergency Economic Stabilization Act of 2008, also known as the \"bank bailout of 2008\" or the \"Wall Street bailout\", was a United States federal law enacted during the Great Recession, which created federal programs to \"bail out\" failing financial institutions and banks. The bill was proposed by Treasury Secretary Henry Paulson, passed by the 110th United States Congress, and was signed into law by President George W. Bush. It became law as part of Public Law 110-343 on October 3, 2008. It created the $700 billion Troubled Asset Relief Program (TARP) whose funds would purchase toxic assets from failing banks. The funds were mostly directed to inject capital into banks and other financial institutions as the Treasury continued to review the effectiveness of targeted asset-purchases."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2003,
   "text": "Roy Horn of the American entertainment duo Siegfried & Roy (both pictured) was mauled by a tiger during a performance at the Mirage on the Las Vegas Strip.",
   "context": [
    "Siegfried Fischbacher and Roy Horn were German-American entertainers who performed an animal-based magic show together as Siegfried & Roy. The duo, who were also romantically involved, were best known for their flamboyant, Liberace-style costumes and use of white lions and white tigers in their acts. Siegfried was the magician, and Roy was the animal trainer."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1992,
   "text": "Sinéad O'Connor  tore up a photograph of Pope John Paul II on live television.",
   "context": [
    "Sinéad Marie Bernadette O'Connor, also known as Shuhada' Sadaqat, was an Irish singer and songwriter. During her musical career, which encompassed several hit records and artist collaborations, O'Connor drew attention to issues such as child abuse, human rights, racism, and women's rights. She was also known for her outspoken public image, openly discussing her spiritual journey, activism, socio-political viewpoints, and struggles with mental health."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1991,
   "text": "Nadine Gordimer became the first South African to win the Nobel Prize in Literature.",
   "context": [
    "Nadine Gordimer was a South African writer and political activist. She received the Nobel Prize in Literature in 1991, recognised as a writer \"who through her magnificent epic writing has ... been of very great benefit to humanity\"."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1989,
   "text": "Major Moisés Giroldi of the Panama Defense Forces failed in his attempt to overthrow dictator Manuel Noriega.",
   "context": [
    "Moisés Giroldi Vera was a Panamanian military commander noted for his coup attempt against military leader Manuel Noriega in 1989. Giroldi was executed in the military barracks in San Miguelito after the coup was suppressed."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1981,
   "text": "A hunger strike by Irish republican prisoners at HM Prison Maze outside Belfast, Northern Ireland, ended after seven months and ten deaths.",
   "context": [
    "A five-year protest during the Troubles by Irish republican prisoners in Northern Ireland culminated in a hunger strike in 1981. The protest began as the blanket protest in 1976 when the British government withdrew Special Category Status for convicted paramilitary prisoners."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1963,
   "text": "Oswaldo López Arellano replaced Honduran president Ramón Villeda Morales  in a violent coup, initiating two decades of military rule.",
   "context": [
    "Oswaldo Enrique López Arellano was a Honduran politician who twice served as the President of Honduras, first from 1963 to 1971 and again from 1972 until 1975."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1962,
   "text": "Mercury-Atlas 8, the fifth United States crewed space mission, was launched from Cape Canaveral Air Force Station in Florida, carrying astronaut Wally Schirra (pictured).",
   "context": [
    "Mercury-Atlas 8 (MA-8) was the fifth United States crewed space mission, part of NASA's Mercury program. Astronaut Walter M. Schirra Jr., orbited the Earth six times in the Sigma 7 spacecraft on October 3, 1962, in a nine-hour flight focused mainly on technical evaluation rather than on scientific experimentation. This was the longest U.S. crewed orbital flight yet achieved in the Space Race, though well behind the several-day record set by the Soviet Vostok 3 earlier in the year. It confirmed the Mercury spacecraft's durability ahead of the one-day Mercury-Atlas 9 mission that followed in 1963."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1953,
   "text": "Vancouver's Holy Rosary Cathedral was dedicated by Archbishop William Mark Duke, fifty-three years after it first opened.",
   "context": [
    "The Metropolitan Cathedral of Our Lady of the Holy Rosary, commonly known as Holy Rosary Cathedral, is a late 19th-century French Gothic revival church that serves as the cathedral of the Roman Catholic Archdiocese of Vancouver. It is located in the downtown area of the city at the intersection of Richards and Dunsmuir streets."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1952,
   "text": "The United Kingdom successfully conducted its first nuclear test, becoming the world's third state with nuclear weapons.",
   "context": [
    "Operation Hurricane was the first test of a British atomic device. A plutonium implosion device was detonated on 3 October 1952 in Main Bay, Trimouille Island, in the Montebello Islands in Western Australia. With the success of Operation Hurricane, the United Kingdom became the third nuclear power, after the United States and the Soviet Union."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1951,
   "text": "In Major League Baseball, the New York Giants' Bobby Thomson hit the \"Shot Heard 'Round the World\", a game-winning home run, to win the National League pennant.",
   "context": [
    "Major League Baseball (MLB) is a professional baseball league in North America composed of 30 teams, divided equally between the National League (NL) and the American League (AL), with 29 in the United States and 1 in Canada. MLB is one of the major professional sports leagues in the United States and Canada and is considered the premier baseball league in the world. Each team plays 162 games per season, with Opening Day held during the last week of March or the first week of April. Six teams in each league then advance to a four-round postseason tournament in October, culminating in the World Series, a best-of-seven championship series between the two league champions first played in 1903. MLB is headquartered in New York City."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1951,
   "text": "The First Battle of Maryang-san, widely regarded as one of the Australian Army's greatest accomplishments during the Korean War, began.",
   "context": [
    "The First Battle of Maryang-san, also known as the Defensive Battle of Maliangshan, was fought during the Korean War between United Nations Command (UN) forces—primarily Australian, British and Canadian—and the Chinese People's Volunteer Army (PVA). The fighting occurred during a limited UN offensive by US I Corps, codenamed Operation Commando. This offensive ultimately pushed the PVA back from the Imjin River to the Jamestown Line and destroyed elements of four PVA armies following heavy fighting. The much smaller battle at Maryang-san took place over a five-day period, and saw the 1st Commonwealth Division dislodge a numerically superior PVA force from the tactically important Kowang-san, Hill 187, and Maryang-san features."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1935,
   "text": "Italian forces under General Emilio De Bono invaded Abyssinia during the opening stages of the Second Italo-Abyssinian War.",
   "context": [
    "Emilio De Bono was an Italian general, fascist activist, marshal, war criminal, and member of the Fascist Grand Council. De Bono fought in the Italo-Turkish War, the First World War and the Second Italo-Abyssinian War. He was one of the key figures behind Italy's anti-partisan policies in Libya, such as the use of poison gas and concentration camps."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1849,
   "text": "American author Edgar Allan Poe was found semi-conscious and delirious in Baltimore under mysterious circumstances; it was the last time he was seen in public before his death four days later.",
   "context": [
    "Edgar Allan Poe was an American writer, poet, editor, and literary critic who is best known for his poetry and short stories, particularly his tales involving mystery and the macabre. He is widely regarded as one of the central figures of Romanticism and Gothic fiction in the United States and of early American literature."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1792,
   "text": "Spanish forces departed Valdivia to suppress the indigenous Huilliche uprising in southern Chile.",
   "context": [
    "Valdivia is a city and commune in southern Chile, administered by the Municipality of Valdivia. The city is named after its founder, Pedro de Valdivia, and is located at the confluence of the Calle-Calle, Valdivia, and Cau-Cau Rivers, approximately 15 km (9 mi) east of the coastal towns of Corral and Niebla. Since October 2007, Valdivia has been the capital of Los Ríos Region and is also the capital of Valdivia Province. The 2024 Chilean census recorded 170,043 inhabitants (Valdivianos) in the commune of Valdivia. The main economic activities of Valdivia include tourism, wood pulp manufacturing, forestry, metallurgy, and beer production. The city is also the home of the Austral University of Chile, founded in 1954, the Centro de Estudios Científicos and one of Chile's three environmental courts."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1602,
   "text": "Anglo-Spanish War: An English fleet intercepted and attacked six Spanish ships at the Battle of the Narrow Seas (pictured).",
   "context": [
    "The Anglo-Spanish War (1585–1604) was an intermittent conflict between Habsburg Spain and the Kingdom of England that was never formally declared. It began with England's military expedition in 1585 to what was then the Spanish Netherlands under the command of Robert Dudley, Earl of Leicester, in support of the Dutch rebellion against Spanish Habsburg rule."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1392,
   "text": "Muhammad VII became the twelfth sultan of the Emirate of Granada.",
   "context": [
    "Muhammad VII, reigned 3 October 1392 – 13 May 1408, was the twelfth Nasrid ruler of the Muslim Emirate of Granada in Al-Andalus on the Iberian Peninsula. He was the son of Yusuf II and grandson of Muhammad V. He came to the throne upon the death of his father. In 1394, he defeated an invasion by the Order of Alcántara. This nearly escalated to a wider war, but Muhammad VII and Henry III of Castile were able to restore peace."
   ]
  }
 ],
 "recent_words_and_concepts": [
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