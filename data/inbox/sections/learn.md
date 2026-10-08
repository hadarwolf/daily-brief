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
   "text": "Anti-government protests calling for free and fair elections began in Baku, Azerbaijan.",
   "context": [
    "Nonviolent rallies took place in Baku, the capital of Azerbaijan, on 8, 19 and 20 October 2019. The protests on 8 and 19 October were organized by the National Council of Democratic Forces (NCDF), an alliance of opposition parties, and called for the release of political prisoners and for free and fair elections. They were also against growing unemployment and economic inequality. Among those detained on 19 October was the leader of the Azerbaijani Popular Front Party, Ali Karimli."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2016,
   "text": "Yemen War: A funeral in Sanaa was hit by two consecutive airstrikes  by a Saudi-led coalition, leaving 143–155 civilians dead and more than 525 injured.",
   "context": [
    "On 26 March 2015, Saudi Arabia, leading a coalition of nine countries from West Asia and North Africa, staged a military intervention in Yemen at the request of Yemeni president Abdrabbuh Mansur Hadi, who had been ousted from the capital, Sanaa, in September 2014 by Houthis during the Yemeni civil war. Efforts by the United Nations (UN) to facilitate a power sharing arrangement under a new transitional government collapsed, leading to escalating conflict between government forces, Houthi rebels, and other armed groups, which culminated in Hadi fleeing to Saudi Arabia shortly before it began military operations in the country."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2001,
   "text": "At Linate Airport in Milan, Italy, Scandinavian Airlines Flight SK686 collided on take-off with a Cessna Citation II business jet, killing 118 people.",
   "context": [
    "Milan Linate Airport is a city airport located in Milan, the second-largest city and largest urban area of Italy. It served 10.6 million passengers and recorded 118,060 aircraft movements in 2024, making it one of the busiest airports in Italy. It is the third-busiest airport in the Milan metropolitan area in terms of passenger numbers, after Malpensa and Bergamo, and the second busiest in terms of aircraft movements."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1998,
   "text": "A new airport for Oslo, Norway, opened at Gardermoen, replacing a smaller one at the same location that had served as a backup to the city's previous main airport at Fornebu.",
   "context": [
    "Oslo is the capital and largest city of Norway. It constitutes both a county and a municipality. The municipality of Oslo had a population of 724,290 in 2025, while the city's greater urban area had a population of 1,110,887 in 2025, and the metropolitan area had an estimated population of 1,546,706 in 2021."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1995,
   "text": "The Croatian Army and Croatian Defence Council launched Operation Southern Move, their last offensive in the Bosnian War.",
   "context": [
    "The Croatian Army is the land force branch of the Armed Forces of Croatia. It is the oldest and largest of its three service branches, followed by the Croatian Air Force and Croatian Navy. The Army's primary mission is to protect Croatia's territory, sovereignty, and its national interests around the world. The Croatian Army Command is primarily headquartered in Karlovac with 20 military bases nationwide."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1969,
   "text": "Demonstrations organized by the Weather Underground known as the Days of Rage began in Chicago, aimed at ending U.S. involvement in the Vietnam War.",
   "context": [
    "The Weather Underground was an American Marxist militant organization active from 1969 until 1977. Originally known as the Weathermen, or simply Weatherman, the group originated as a faction of the national leadership of Students for a Democratic Society (SDS).\nThe group adopted the name Weather Underground Organization (WUO) in 1970. Its members advocated revolutionary struggle against the United States government and described their politics as anti-imperialist and anti-racist. The group's ideology was influenced by Black Power and the anti-war movement. The Federal Bureau of Investigation (FBI) regarded the WUO as a domestic terrorist group."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1967,
   "text": "Marxist revolutionary and guerrilla leader Che Guevara was captured near La Higuera, Bolivia.",
   "context": [
    "Marxism is a political philosophy and method of socioeconomic analysis that uses a dialectical materialist interpretation of historical development, known as historical materialism, to understand class relations and social conflict. Originating in the works of 19th-century German philosophers Karl Marx and Friedrich Engels, the Marxist approach views class struggle as the central driving force of historical change."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1956,
   "text": "Major League Baseball pitcher Don Larsen threw the only perfect game in World Series history.",
   "context": [
    "Major League Baseball (MLB) is a professional baseball league in North America composed of 30 teams, divided equally between the National League (NL) and the American League (AL), with 29 in the United States and 1 in Canada. MLB is one of the major professional sports leagues in the United States and Canada and is considered the premier baseball league in the world. Each team plays 162 games per season, with Opening Day held during the last week of March or the first week of April. Six teams in each league then advance to a four-round postseason tournament in October, culminating in the World Series, a best-of-seven championship series between the two league champions first played in 1903. MLB is headquartered in New York City."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1952,
   "text": "Three trains collided (aftermath pictured) at Harrow & Wealdstone station in London, killing 112 people and injuring 340 others.",
   "context": [
    "Three trains collided at Harrow and Wealdstone station in Wealdstone, Middlesex during the morning of 8 October 1952. The crash resulted in 112 deaths and 340 injuries, 88 of these being detained in hospital. It remains the worst peacetime rail crash in British history and the second deadliest overall after the Quintinshill rail disaster of 1915."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1932,
   "text": "The Indian Air Force was founded as an auxiliary air force of the British Royal Air Force.",
   "context": [
    "The Indian Air Force (IAF) is the air arm of the Indian Armed Forces. Its primary mission is to secure Indian airspace and to conduct aerial warfare during armed conflicts. It was officially established on 8 October 1932 as an auxiliary air force of British India which honoured India's aviation service during World War II."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1918,
   "text": "World War I: After his platoon suffered heavy casualties during the Meuse–Argonne offensive in France's Forest of Argonne, American Corporal Alvin York led the 7 remaining men on an attack against a German machine gun nest; 25 German soldiers were killed and 132 captured.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also helped spread the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1871,
   "text": "The Great Chicago Fire (pictured), began and proceeded to destroy much of the city's central business district, killing 300 people and leaving 90,000 others homeless.",
   "context": [
    "The Great Chicago Fire burned in Chicago, Illinois, United States, during October 8–10, 1871. The fire killed approximately 300 people, destroyed 17,000 structures across roughly 3.3 square miles (9 km2), and left more than 100,000 residents homeless. The fire began in a neighborhood southwest of the city center. A long period of hot, dry, windy conditions, and the wooden construction prevalent in the city, led to the conflagration spreading quickly. The fire leapt the south branch of the Chicago River and destroyed much of central Chicago and then crossed the main stem of the river, consuming the Near North Side."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1862,
   "text": "American Civil War: The Battle of Perryville was fought west of Perryville, Kentucky.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln and the growing abolitionist movement in the North. The war ended with Union victory, the dissolution of the Confederacy and the abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 451,
   "text": "The Council of Chalcedon, a Christian ecumenical council, opened, and went on to repudiate the Eutychian doctrine of monophysitism and set forth the Chalcedonian Creed.",
   "context": [
    "The Council of Chalcedon was the fourth ecumenical council of the Christian Church. It was convoked by the Roman emperor Marcian. The council convened in the city of Chalcedon, Bithynia from 8 October to 1 November 451. The council was attended by over 520 bishops or their representatives, making it the largest and best-documented of the first seven ecumenical councils. The principal purpose of the council was to re-assert the teachings of the ecumenical Council of Ephesus against the teachings of Eutyches and Nestorius. Such doctrines viewed Christ's divine and human natures as separate and distinct (Nestorianism), or viewed Christ as solely divine (monophysitism). The Council of Chalcedon issued the Chalcedonian Definition, stating that Jesus is \"perfect both in deity and in humanness; this selfsame one is also actually God and actually man.\" The Council's judgments and definitions regarding the divine marked a significant turning point in the Christological debates."
   ]
  }
 ],
 "recent_words_and_concepts": [
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