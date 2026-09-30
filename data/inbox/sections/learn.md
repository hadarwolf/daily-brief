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
   "text": "President Martín Vizcarra dissolved the Congress of Peru, resulting in a constitutional crisis.",
   "context": [
    "Martín Alberto Vizcarra Cornejo is a Peruvian engineer and politician who served as President of Peru from 2018 to 2020. Vizcarra previously served as Governor of the Department of Moquegua (2011–2014), First Vice President of Peru (2016–2018), Minister of Transport and Communications of Peru (2016–2017), and Ambassador of Peru to Canada (2017–2018), with the latter three during the presidency of Pedro Pablo Kuczynski."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2009,
   "text": "A 7.6 MW earthquake struck off the southern coast of Sumatra, Indonesia (damage pictured), killing 1,115 and impacting an estimated 1.2 million people.",
   "context": [
    "The moment magnitude scale is a measure of an earthquake's magnitude based on its seismic moment. Mw was defined in a 1979 paper by Thomas C. Hanks and Hiroo Kanamori. Before Hanks and Kanamori (1979), Kanamori (1977) developed Mw scale for large earthquakes above 7.5. Thus Mw and M are not the same mathematically even though they are considered the same. Similar to the local magnitude/Richter scale (ML) defined by Charles Francis Richter in 1935, it uses a logarithmic scale; small earthquakes have approximately the same magnitudes on both scales. Despite the difference, news media often use the term \"Richter scale\" when referring to the moment magnitude scale."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2005,
   "text": "The Danish newspaper Jyllands-Posten published controversial editorial cartoons depicting Muhammad, sparking protests across the Islamic world by many who viewed them as Islamophobic and blasphemous.",
   "context": [
    "Morgenavisen Jyllands-Posten, commonly shortened to Jyllands-Posten or JP, is a Danish daily broadsheet newspaper. It is based in Aarhus C, Jutland, and with a weekday circulation of approximately 120,000 copies."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2000,
   "text": "Twelve-year-old Muhammad al-Durrah was shot dead in the Gaza Strip; the Israel Defense Forces initially accepted responsibility but retracted it five years later.",
   "context": [
    "On 30 September 2000, the second day of the Second Intifada, 12-year-old Muhammad al-Durrah was killed at the Netzarim Junction in the Gaza Strip during widespread protests and riots across the Palestinian territories against Israeli military occupation. Jamal al-Durrah and his son Muhammad were filmed by Talal Abu Rahma, a Palestinian television cameraman freelancing for France 2, as they were caught in crossfire between the Israeli military and Palestinian security forces. Footage shows them crouching behind a concrete cylinder, the boy crying and the father waving, then a burst of gunfire and dust. Muhammad is shown slumping as he is mortally wounded by gunfire, dying soon after."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1998,
   "text": "The Internet Corporation for Assigned Names and Numbers (ICANN), a nonprofit organization that manages the assignment of domain names and IP addresses in the Internet, was incorporated.",
   "context": [
    "The Internet Corporation for Assigned Names and Numbers is a global multistakeholder group and nonprofit organization headquartered in the United States, responsible for coordinating the maintenance and procedures of several databases related to the namespaces and numerical spaces of the Internet, while also ensuring the Internet's smooth, secure, and stable operation. ICANN performs the actual technical maintenance (work) of the Central Internet Address pools and DNS root zone registries pursuant to the Internet Assigned Numbers Authority (IANA) function contract. The contract regarding the IANA stewardship functions between ICANN and the National Telecommunications and Information Administration (NTIA) of the United States Department of Commerce ended on October 1, 2016, formally transitioning the functions to the global multistakeholder community."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1982,
   "text": "Cheers, an American television sitcom, debuted with its pilot episode on NBC.",
   "context": [
    "Cheers is an American television sitcom, created by Glen Charles & Les Charles and James Burrows, aired on NBC for eleven seasons from September 30, 1982, to May 20, 1993. The show was produced by Charles/Burrows/Charles Productions in association with Paramount Television. The show is set in the titular bar in Boston, where a group of locals meet to drink, relax, socialize, and escape from their day-to-day issues."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1975,
   "text": "The Boeing AH-64 Apache (example pictured), the primary attack helicopter for a number of countries, made its first flight.",
   "context": [
    "The Hughes/McDonnell Douglas/Boeing AH-64 Apache is an American twin-turboshaft attack helicopter with a tailwheel-type landing gear and a tandem cockpit for a crew of two. Nose-mounted sensors help acquire targets and provide night vision. It carries a 30 mm (1.18 in) M230 chain gun under its forward fuselage and four hardpoints on stub-wing pylons for armament and stores, typically AGM-114 Hellfire missiles and Hydra 70 rocket pods. Redundant systems help it survive combat damage."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1955,
   "text": "American film actor James Dean suffered fatal injuries in a head-on car accident near Cholame, California.",
   "context": [
    "James Byron Dean was an American actor. He became one of the most influential figures in Hollywood in the 1950s, and his impact on cinema and popular culture was profound, although his career lasted only five years. He appeared in just three major films: Rebel Without a Cause (1955), in which he portrayed a disillusioned and rebellious teenager; East of Eden (1955), which showcased his intense emotional range; and Giant (1956), a sprawling drama. These have been preserved in the United States National Film Registry by the Library of Congress for their \"cultural, historical, or aesthetic significance\". He was killed in a car accident in 1955 at the age of 24, leaving him a lasting symbol of rebellion, youthful defiance, and the restless spirit."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1939,
   "text": "NBC broadcast the first televised American football game, between the Fordham Rams and the Waynesburg Yellow Jackets.",
   "context": [
    "The National Broadcasting Company (NBC) is an American commercial broadcast television network, serving as the flagship property of NBC Entertainment, a division of NBCUniversal, which is a subsidiary of Comcast. It is one of NBCUniversal's two flagship namesake properties, alongside Universal Studios. It is the first and oldest major broadcast network in the United States."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1939,
   "text": "Second World War: General Władysław Sikorski (pictured) became the first prime minister of the Polish government-in-exile.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1938,
   "text": "Adolf Hitler, Benito Mussolini, Neville Chamberlain, and Édouard Daladier signed the Munich Agreement, stipulating that Czechoslovakia must cede the Sudetenland to Germany.",
   "context": [
    "Adolf Hitler was an Austrian-born German politician who was dictator of Germany in the Nazi era from 1933 until his suicide in 1945. He rose to power as the leader of the Nazi Party, becoming the chancellor of Germany in 1933 and then taking the title of Führer und Reichskanzler in 1934. Germany's invasion of Poland on 1 September 1939 under his leadership marked the outbreak of the Second World War. Throughout the ensuing conflict, Hitler was closely involved in the direction of German military operations and was central to the perpetration of the genocide of about six million Jews in the Holocaust as well as the deaths of millions of other victims."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1920,
   "text": "Times Square Theater (pictured) opened on Broadway with a production of The Mirage, a play written by its owner, Edgar Selwyn.",
   "context": [
    "The Times Square Theater is a former Broadway and movie theater at 215–217 West 42nd Street, near Times Square, in the Theater District of Midtown Manhattan in New York City, New York, U.S. Built in 1920, it was designed by Eugene De Rosa and developed by brothers Edgar and Archibald Selwyn. The building, which is no longer an active theater, is owned by the city and state governments of New York and leased to New 42nd Street."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1918,
   "text": "Nestor Makhno and Fedir Shchus led insurgents to successfully ambush the Central Powers that occupied southern Ukraine during World War I.",
   "context": [
    "Nestor Ivanovych Makhno, also known as Bat'ko Makhno, was a Ukrainian anarchist revolutionary and the commander of the Revolutionary Insurgent Army of Ukraine during the Ukrainian War of Independence. He established the Makhnovshchina, a mass movement by the Ukrainian peasantry to establish anarchist communism in the country between 1918 and 1921. Initially centered around Makhno's home province of Katerynoslav and hometown of Huliaipole, it came to exert a strong influence over large areas of southern Ukraine, specifically in what is now the Zaporizhzhia Oblast of Ukraine. Anarchists have cited him as an inspiration during his life and into today."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1882,
   "text": "The Vulcan Street Plant in Appleton, Wisconsin, the first hydroelectric central station to serve a system of private and commercial customers in North America, went online.",
   "context": [
    "The Vulcan Street Plant was the first Edison hydroelectric central station. The plant was built on the Fox River in Appleton, Wisconsin, and put into operation on September 30, 1882. According to the American Society of Mechanical Engineers, the Vulcan Street plant is considered to be \"the first hydro-electric central station to serve a system of private and commercial customers in North America\". It is a National Historic Mechanical Engineering Landmark, an IEEE milestone and a National Historic Civil Engineering Landmark."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1863,
   "text": "Georges Bizet's opera Les pêcheurs de perles premiered at the Théâtre Lyrique in Paris.",
   "context": [
    "Georges Bizet was a French composer of the Romantic era. Best known for his operas in a career cut short by his early death, Bizet achieved few successes before his final work, Carmen, which has become one of the most popular and frequently performed works in the entire opera repertoire."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1791,
   "text": "Mozart conducted the premiere of his last opera, The Magic Flute, in Vienna.",
   "context": [
    "Wolfgang Amadeus Mozart was a Classical composer and musician. He completed more than 800 works in his life—including outstanding examples of most of the genres of his time: symphonies, concertos, chamber music, opera and choral music—and is regarded as one of the greatest composers in the history of Western music."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1551,
   "text": "Sue Takafusa, a retainer of the Ōuchi clan in western Japan, led a coup against the daimyō Ōuchi Yoshitaka, leading to the latter's forced suicide.",
   "context": [
    "Sue Harukata  was a samurai who served as a senior retainer of the Ōuchi clan in the Sengoku period in Japan. He was the second son of Sue Okifusa, a senior retainer of the Ōuchi clan. His childhood name was Goro, and he previously had the name Takafusa."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1342,
   "text": "An Anglo-Breton army defeated a far larger Franco-Breton force in the first land battle of the Hundred Years' War.",
   "context": [
    "The battle of Morlaix was fought near the village of Lanmeur in Brittany, France, on 30 September 1342 between an Anglo-Breton army and a much larger Franco-Breton force. England, at war with France since 1337 in the Hundred Years' War, had sided with John of Montfort's faction in the Breton Civil War shortly after it broke out in 1341. The French were supporting Charles of Blois, a nephew of the French king."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1139,
   "text": "A violent earthquake struck the Caucasus near Ganja, killing up to an estimated 300,000 people.",
   "context": [
    "The 1139 Ganja earthquake was one of the worst seismic events in history. It affected the Seljuk Empire and the Kingdom of Georgia, in modern-day Azerbaijan and Georgia. The earthquake had an estimated magnitude of 7.0–7.3 Mw, 7.5 Ms, and 7.7 MLH. A disputed death toll of 230,000–300,000 resulted from this event, making it one of the deadliest earthquakes ever recorded."
   ]
  },
  {
   "ref": "wikipedia#19",
   "year": 737,
   "text": "Muslim conquest of Transoxiana: Türgesh tribesmen attacked and captured the exposed baggage train of the Umayyad army, sent ahead of the main force.",
   "context": [
    "Year 737 (DCCXXXVII) was a common year starting on Tuesday of the Julian calendar. The denomination 737 for this year has been used since the early medieval period, when the Anno Domini calendar era became the prevalent method in Europe for naming."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Runway (זמן עד אזילת המזומן)",
  "Dry powder (הון זמין להשקעה)",
  "Boil the ocean (לנסות לעשות הכל בבת אחת)"
 ]
}
</input>