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
   "year": 2022,
   "text": "After losing a league home match to their local rivals, Persebaya Surabaya, around 3,000 Arema supporters invaded the pitch at Kanjuruhan Stadium, prompting police to fire tear gas and causing a stampede that killed 135.",
   "context": [
    "The 2022–23 Liga 1 was the 6th season of Liga 1 under its current name and the 13th season of the association football, the top Indonesian professional league for association football clubs since its establishment in 2008. It started on 23 July 2022. Bali United were the two-time defending champions."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2018,
   "text": "The International Court of Justice ruled that Chile was under no obligation to restore Bolivia's access to the Pacific Ocean, which it had lost in the 19th century.",
   "context": [
    "The International Court of Justice, or colloquially the World Court, is the principal judicial organ of the United Nations (UN). It settles legal disputes submitted to it by states and provides advisory opinions on legal questions referred to it by other UN organs and specialized agencies. The ICJ is the only international court that adjudicates general disputes between countries, with its rulings and opinions serving as primary sources of international law. It is one of the six principal organs of the United Nations."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2017,
   "text": "A lone gunman fired more than 1,000 rounds of ammunition from his hotel suite on a crowd attending the Route 91 Harvest music festival on the Las Vegas Strip, resulting in 60 deaths and 867 injuries.",
   "context": [
    "Stephen Craig Paddock was an American mass murderer who perpetrated the 2017 Las Vegas shooting, the deadliest mass shooting in American history."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2012,
   "text": "A ferry collision off Lamma Island, Hong Kong, killed 39 people and injured 92 others.",
   "context": [
    "On 1 October 2012, at approximately 20:23 HKT, the passenger ferries Sea Smooth and Lamma IV collided off Yung Shue Wan, Lamma Island, Hong Kong. This occurred on the National Day of the People's Republic of China, and one of the ships was headed for the commemorative firework display, scheduled to take place half an hour later. With 39 killed and 92 injured, the incident was the deadliest maritime disaster in Hong Kong since 1971."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 2003,
   "text": "A levy was imposed on the hiring of foreign domestic helpers in Hong Kong, who numbered in the hundreds of thousands at the time.",
   "context": [
    "Foreign domestic helpers in Hong Kong are domestic workers employed by Hongkongers, typically families. They comprise five percent of Hong Kong's population, and about 98.5% of them are women. In 2019, there were 400,000 foreign domestic helpers in the territory. Required by law to live in their employer's residence, they perform household tasks such as cooking, serving, cleaning, dishwashing and child care."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1998,
   "text": "Europol, the EU's law enforcement agency, was formed with the ratification of the Europol Convention by all member states.",
   "context": [
    "Europol, officially the European Union Agency for Law Enforcement Cooperation, is the law enforcement agency of the European Union (EU). Established in 1998, it is based in The Hague, Netherlands, and serves as the central hub for coordinating criminal intelligence and supporting the EU's member states in their efforts to combat various forms of serious and organized crime, as well as terrorism."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1994,
   "text": "A tribunal was established to consider matters relating to the constitution of Singapore upon referral by the president.",
   "context": [
    "The Constitution of the Republic of Singapore Tribunal is a tribunal established in 1994 pursuant to Article 100 of the Constitution of the Republic of Singapore. Article 100 provides a mechanism for the President of Singapore, acting on the advice of the Singapore Cabinet, to refer to the Tribunal for its opinion any question as to the effect of any provision of the Constitution which has arisen or appears to likely to arise. Questions referred to the Tribunal may concern the validity of enacted laws or of bills that have not yet been passed by Parliament."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1991,
   "text": "Croatian War of Independence: Yugoslav People's Army forces invaded the area surrounding Dubrovnik, Croatia, beginning a seven-month siege of the city.",
   "context": [
    "The Croatian War of Independence was an armed conflict fought in Croatia from 1991 to 1995 between Croat forces loyal to the Government of Croatia—which had declared independence from the Socialist Federal Republic of Yugoslavia (SFRY)—and the Serb-controlled Yugoslav People's Army (JNA) and local Serb forces, with the JNA ending its combat operations by 1992."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1990,
   "text": "Fifty Rwandan Patriotic Front rebels deserted their Ugandan Army posts and crossed the border from Uganda into Rwanda, marking the start of the Rwandan Civil War.",
   "context": [
    "The Rwandan Patriotic Front is the ruling political party in Rwanda."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1989,
   "text": "Civil unions between same-sex couples were legalised in Denmark, the first country to do so.",
   "context": [
    "A civil union, also known by a variety of other terms, is a legal recognition of a relationship. Civil unions grant some or all of the rights of marriage, with child adoption being a common exception. Many jurisdictions with civil unions recognize foreign unions if those are essentially equivalent to their own; for example, the United Kingdom lists equivalent unions in the Civil Partnership Act 2004 Schedule 20. The marriages of same-sex couples performed abroad may be recognized as civil unions in jurisdictions that only have the latter."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1978,
   "text": "Tuvalu adopted its national flag (pictured) on the day that the country gained its independence.",
   "context": [
    "The national flag of Tuvalu is a light blue field with the Union Jack in the canton and nine yellow five-pointed stars on the fly (right) half of the flag. The nine stars represent the nine islands of Tuvalu, while the Union Jack symbolises the country's connections to the United Kingdom and the Commonwealth. The flag was originally adopted on 1 October 1978, the day Tuvalu became independent."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1975,
   "text": "In boxing, Muhammad Ali defeated Joe Frazier in a match known as the \"Thrilla in Manila\".",
   "context": [
    "Muhammad Ali was an American professional boxer and activist. A global cultural icon, widely known by the nickname \"the Greatest\", he is often regarded as the greatest heavyweight boxer of all time. He held the Ring magazine heavyweight title from 1964 to 1970, was the undisputed champion from 1974 to 1978, and was the WBA and Ring heavyweight champion from 1978 to 1979. In 1999, he was named Sportsman of the Century by Sports Illustrated and the Sports Personality of the Century by the BBC."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1965,
   "text": "Seven Indonesian National Armed Forces officers, six of them generals, were murdered at dawn by a rebellious force in Jakarta; the Army then blamed the Communist Party, leading to a mass anti-communist purge that killed up to one million people.",
   "context": [
    "The Indonesian National Armed Forces are the military forces of the Republic of Indonesia. It consists of the Army (TNI-AD), Navy (TNI-AL), and Air Force (TNI-AU). The President of Indonesia is the Supreme Commander of the Armed Forces. As of 2023, it comprises approximately 404,500 military personnel including the Indonesian Marine Corps, which is a branch of the Navy."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1964,
   "text": "The Free Speech Movement was launched at the University of California, Berkeley, when a crowd of 3,000 students prevented police from transporting Jack Weinberg away after his arrest.",
   "context": [
    "The Free Speech Movement (FSM) was a student protest which took place during the 1964–65 academic year on the campus of the University of California, Berkeley. Student leaders included Jack Weinberg, Tom Miller, Mario Savio, Michael Rossman, George Barton, Brian Turner, Bettina Aptheker, Steve Weissman, Michael Teal, Art Goldberg, Jackie Goldberg and others."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1949,
   "text": "Chinese Communist Party chairman Mao Zedong publicly proclaimed (pictured) the establishment of the People's Republic of China in Beijing's Tiananmen Square.",
   "context": [
    "The Communist Party of China (CPC), commonly known as the Chinese Communist Party (CCP), is the founding and sole governing party of the People's Republic of China (PRC). Founded in 1921, the CCP won the Chinese Civil War against the Kuomintang and proclaimed the establishment of the PRC under the chairmanship of Mao Zedong in October 1949. The CCP has since governed China and has had absolute control over the country's armed forces and law enforcement. As of 2025, the CCP has more than 101 million members, making it the second largest political party by membership in the world."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1946,
   "text": "Mensa, the largest and oldest high-IQ society in the world, was formed in the United Kingdom.",
   "context": [
    "Mensa International is the largest and oldest high-IQ society in the world. It is a non-profit organisation open to people who score at the 98th percentile or higher on a standardised, supervised IQ or other approved intelligence test. Mensa formally comprises national groups and the umbrella organisation Mensa International, with a registered office in Caythorpe, Lincolnshire, England, which is separate from the British Mensa office in Wolverhampton."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1918,
   "text": "First World War: British and Arab troops captured Damascus from the Ottoman Empire.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also helped spread the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1906,
   "text": "A deputation of Muslim leaders led by the Aga Khan III met Indian viceroy Lord Minto to secure greater political representation, eventually leading to the founding of the All-India Muslim League.",
   "context": [
    "The Simla Deputation was a gathering of 35 prominent Indian Muslim leaders led by the Aga Khan III at the Viceregal Lodge in Simla in October 1906. The deputation aimed to convince Lord Minto, the viceroy of India, to grant Muslims greater representation in politics."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1891,
   "text": "Stanford University, founded by railroad magnate and politician Leland Stanford and his wife Jane in Palo Alto, California, admitted its first students.",
   "context": [
    "Leland Stanford Junior University, commonly referred to as Stanford University, is a private research university in Stanford, California, United States. It was founded in 1885 by railroad magnate Leland Stanford and his wife, Jane, in memory of their only child, Leland Jr, who died from typhoid at the age of 15."
   ]
  },
  {
   "ref": "wikipedia#19",
   "year": 1890,
   "text": "At the encouragement of preservationist John Muir and writer Robert Underwood Johnson, the U.S. Congress established Yosemite National Park in California.",
   "context": [
    "John Muir, also known as \"John of the Mountains\" and \"Father of the National Parks\", was a Scottish-born American naturalist, author, environmental philosopher, botanist, zoologist, glaciologist, and early advocate for the preservation of wilderness in the United States."
   ]
  },
  {
   "ref": "wikipedia#20",
   "year": 1868,
   "text": "St Pancras railway station (pictured) in London, now the terminus of the Channel Tunnel Rail Link, opened to the public.",
   "context": [
    "St Pancras International is a major central London railway terminus on Euston Road in the London Borough of Camden. It is the terminus for Eurostar services between the United Kingdom and Belgium, France and the Netherlands. It provides East Midlands Railway services to Leicester, Corby, Derby, Sheffield, Luton Airport Parkway, and Nottingham on the Midland Main Line, Southeastern high-speed trains to Kent via Ebbsfleet International and Ashford International, and Thameslink cross-London services to Bedford, Cambridge, Peterborough, Brighton, Horsham and Gatwick Airport. It stands between the British Library, the Regent's Canal and London King's Cross railway station. Beneath both main line stations is King's Cross St Pancras tube station on the London Underground; combined, they form one of the country's largest and busiest transport hubs."
   ]
  },
  {
   "ref": "wikipedia#21",
   "year": 1832,
   "text": "The first political gathering of colonists (president pictured) in Mexican Texas convened to seek reforms from the Mexican government.",
   "context": [
    "The Convention of 1832 was the first political gathering of colonists in Mexican Texas. Delegates sought reforms from the Mexican government and hoped to quell the widespread belief that settlers in Texas wished to secede from Mexico. The convention was the first in a series of unsuccessful attempts at political negotiation that eventually led to the Texas Revolution."
   ]
  },
  {
   "ref": "wikipedia#22",
   "year": 1800,
   "text": "With the signing of the Third Treaty of San Ildefonso, Spain returned the colonial territory of Louisiana to France in return for territories in the Italian region of Tuscany.",
   "context": [
    "The Third Treaty of San Ildefonso was a secret agreement signed on 1 October 1800 between Spain and the French Republic by which Spain agreed in principle to exchange its North American colony of Louisiana for territories in Tuscany. The terms were later confirmed by the March 1801 Treaty of Aranjuez."
   ]
  },
  {
   "ref": "wikipedia#23",
   "year": 1386,
   "text": "The Wonderful Parliament met at Westminster Abbey to address King Richard II's need for money, but soon changed focus to the reform of his administration.",
   "context": [
    "The Wonderful Parliament was a session of the English parliament held from October to November 1386 in Westminster Abbey. Originally called to address King Richard II's need for money, it quickly refocused on pressing for the reform of his administration. The King had become increasingly unpopular because of excessive patronage towards his political favourites combined with the unsuccessful prosecution of war in France. Further, there was a popular fear that England was soon to be invaded, as a French fleet had been gathering in Flanders for much of the year. Discontent with Richard peaked when he requested an unprecedented sum to raise an army with which to invade France. Instead of granting the King's request, the houses of the Lords and the Commons effectively united against him and his unpopular chancellor, Michael de la Pole, 1st Earl of Suffolk. Seeing de la Pole as both a favourite who had unfairly benefited from the King's largesse, and the minister responsible for the King's failures, parliament demanded the earl's impeachment."
   ]
  },
  {
   "ref": "wikipedia#24",
   "year": 959,
   "text": "Edgar acceded to the English throne upon the death of his brother Eadwig.",
   "context": [
    "Edgar, also known as Edgar the Peaceful, the Peacemaker and the Peaceable, was King of the English from 959 until his death in 975. He became king of all England on his brother Eadwig's death. He was the younger son of King Edmund I and his first wife, Ælfgifu. A detailed account of Edgar's reign is not possible, because only a few events were recorded by chroniclers and monastic writers, who were more interested in recording the activities of the leaders of the church."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Basis point (נקודת בסיס)",
  "Table stakes (דרישות סף)",
  "Kick the can down the road (לדחות את ההכרעה)",
  "Runway (זמן עד אזילת המזומן)",
  "Dry powder (הון זמין להשקעה)",
  "Boil the ocean (לנסות לעשות הכל בבת אחת)"
 ]
}
</input>