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
   "year": 2018,
   "text": "Thirteen-year-old Jayme Closs was kidnapped from her home in Barron, Wisconsin, and held captive for 88 days.",
   "context": [
    "On October 15, 2018, 21-year-old Jake Thomas Patterson abducted 13-year-old Jayme Lynn Closs after fatally shooting her parents, James and Denise Closs, at their home just outside of Barron, Wisconsin, at 12:53 a.m. Patterson took Closs to a house 70 miles (110 km) away in rural Gordon, Wisconsin, and held her in captivity for 88 days until she escaped on January 10, 2019, seeking help from neighbors."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2013,
   "text": "A 7.2-magnitude earthquake struck Bohol in the Philippines, resulting in 222 deaths.",
   "context": [
    "The 2013 Bohol earthquake occurred on October 15 at 8:12:31 PST in Bohol, an island province located in Central Visayas, Philippines. The magnitude of the earthquake was recorded at Mw 7.2, its epicenter in the vicinity of 6 kilometres (3.7 mi) S 24° W of Sagbayan, and its depth of focus at 12 kilometres (7.5 mi). It affected the whole Central Visayas region, particularly Bohol and Cebu. The earthquake was felt in the whole Visayas area and as far as Masbate island in the north and Cotabato provinces in southern Mindanao."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2011,
   "text": "Global demonstrations against economic inequality, corporate influence on government, and other issues, were held in more than 950 cities in 82 countries.",
   "context": [
    "The 15 October 2011 global protests were part of a series of protests inspired by the Arab Spring, the Icelandic protests, the Portuguese \"Geração à Rasca\", the Spanish \"Indignants\", the Greek protests, and the Occupy movement. The protests were launched under the slogan \"United for #GlobalChange\", to which the slogan \"United for Global Democracy\" was added by many people's assemblies. The protest was first called for by the Spanish Plataforma ¡Democracia Real YA! in May 2011 and endorsed by people's assemblies across the world. Reasons were varied but mainly targeted growing economic inequality, corporate influence over government and international institutions, and the lack of truly democratic institutions allowing direct public participation at all levels, local to global. Global demonstrations were held on 15 October in more than 950 cities in 82 countries. The date was chosen to coincide with the 5-month anniversary of the first protest in Spain. General assemblies, the social network n-1, mailing lists, Mumble voice chat, open pads such as Pirate Pad and Titan Pad, and Facebook were used to coordinate the events. Some protests were only a few hundred in number, whereas others numbered in the hundreds of thousands, with the largest in Madrid numbering half a million and the second largest city Barcelona with 400,000."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2007,
   "text": "New Zealand Police conducted several anti-terrorism raids in relation to the discovery of an alleged paramilitary training camp in the Urewera mountain ranges, arresting 17 people and seizing four guns and 230 rounds of ammunition.",
   "context": [
    "The New Zealand Police is the national police service and principal law enforcement agency of New Zealand, responsible for preventing crime, enhancing public safety, bringing offenders to justice, and maintaining public order. With over 15,000 personnel, it is the largest law enforcement agency in New Zealand and, with few exceptions, has primary jurisdiction over the majority of New Zealand criminal law. The New Zealand Police also has responsibility for traffic and commercial vehicle enforcement as well as other key responsibilities including protection of dignitaries, firearms licensing, and matters of national security."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 2006,
   "text": "An earthquake registering 6.7 Mw occurred off the northwestern coast of the island of Hawaiʻi.",
   "context": [
    "The 2006 Kīholo Bay earthquake occurred on October 15 at 07:07:49 local time with a magnitude of 6.7 and a maximum Mercalli intensity of VIII (Severe). The shock was centered 21 kilometers (13 mi) southwest of Puakō and 21 km (13 mi) north of Kailua-Kona, Hawaiʻi, just offshore of the Kona Airport, at a depth of 38.2 km (23.7 mi). It produced several aftershocks, including one that measured a magnitude of 6.1 seven minutes after the main shock. The Pacific Tsunami Warning Center measured a nondestructive tsunami of 4 in (100 mm) on the coast of the Big Island."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1996,
   "text": "The Irish Criminal Assets Bureau was established following the gangland murders of Detective Garda Jerry McCabe and investigative journalist Veronica Guerin.",
   "context": [
    "The Criminal Assets Bureau (CAB) is a law enforcement agency in Ireland. The CAB was established with powers to focus on the illegally acquired assets of criminals involved in serious crime. The aims of the CAB are to identify the criminally acquired assets of persons and to take the appropriate action to deny such people these assets. This action is taken particularly through the application of the Proceeds of Crime Act 1996. The CAB was established as a body corporate with perpetual succession in 1996 and is founded on the multi-agency concept, drawing together law enforcement officers, tax officials, social welfare officials as well as other specialist officers including legal officers, forensic analysts and financial analysts. This multi-agency concept is regarded by some as the model for other European jurisdictions."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1979,
   "text": "President Carlos Humberto Romero of El Salvador was overthrown and exiled in a military coup d'état.",
   "context": [
    "Carlos Humberto Romero Mena was a Salvadoran general and politician who served as the 34th President of El Salvador from 1 July 1977 until his overthrow on 15 October 1979. Romero was the final president of the El Salvador's military dictatorship that had ruled since 1931."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1967,
   "text": "The Motherland Calls (depicted in coat of arms), a colossal statue in Volgograd, Russia, which commemorates the casualties of the Battle of Stalingrad, was dedicated, becoming the then-tallest statue in the world.",
   "context": [
    "The Motherland Calls is a colossal neoclassicist and socialist realist war memorial sculpture on Mamayev Kurgan in Volgograd, Russia. Designed primarily by sculptor Yevgeny Vuchetich with assistance from architect Yakov Belopolsky, the concrete sculpture commemorates the casualties of the Battle of Stalingrad, and is the predominant component of a monument complex, which includes several plazas and other sculptural works. Standing 85 metres (279 ft) tall from the base of its pedestal to its peak, the statue was the tallest in the world upon its completion in 1967, and is the tallest statue in Europe if including the pedestal. The statue, along with the rest of the complex, was dedicated on 15 October 1967, and has been listed as a tentative candidate for UNESCO's list of World Heritage Sites since 2014."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1965,
   "text": "Vietnam War protests: At an anti-war rally in New York City, David J. Miller burned his draft card (example pictured), the first such act to result in arrest under a new amendment to the Selective Service Act.",
   "context": [
    "Opposition to United States involvement in the Vietnam War reached a substantial scale in 1965 with demonstrations against the country's escalating role in the war. Over the next several years, these demonstrations grew into a social movement which was incorporated into the broader counterculture of the 1960s."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1954,
   "text": "Hurricane Hazel made landfall in the Carolinas in the United States before moving north to Toronto in Canada later the same day, killing 176 people in the two countries.",
   "context": [
    "Hurricane Hazel was the deadliest, second-costliest, and most intense hurricane of the 1954 Atlantic hurricane season. The storm killed at least 469 people in Haiti before it struck the United States near the border between North and South Carolina as a Category 4 hurricane. After causing 95 fatalities in the US, Hazel struck Canada as an extratropical storm, which raised the death toll by 81 people, mostly in Toronto. As a result of the high death toll and the damage caused by Hazel, its name was retired from use for North Atlantic hurricanes."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1932,
   "text": "Air India (modern aircraft pictured), the flag carrier airline of India, began operations under the name Tata Airlines.",
   "context": [
    "Air India is the flag carrier of India, headquartered in Gurugram, Haryana. The airline is owned by Air India Limited, which is owned by the Tata Group (74.9%) and Singapore Airlines (25.1%). The airline is a member of Star Alliance since 11 July 2014. As of November 2025, the airline serves 87 domestic and international destinations, from its primary hub at Indira Gandhi International Airport, and secondary hubs at Kempegowda International Airport and Chhatrapati Shivaji Maharaj International Airport. The airline operates a fleet of Airbus and Boeing aircraft, and is the second-largest airline in India by passenger volume, after IndiGo."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1888,
   "text": "The \"From Hell\" letter, allegedly from Jack the Ripper, was sent to George Lusk, the chairman of the Whitechapel Vigilance Committee in London.",
   "context": [
    "The \"From Hell\" letter was a letter sent with half of a preserved human kidney to George Lusk, the chairman of the Whitechapel Vigilance Committee, in October 1888. The author of this letter claimed to be the unidentified serial killer known as Jack the Ripper, who had murdered and mutilated at least four women in the Whitechapel and Spitalfields districts of London in the two months prior to Lusk receiving this letter, and whose vigilance committee Lusk led in civilian efforts to assist the police in identifying and apprehending the perpetrator."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1864,
   "text": "American Civil War: Confederate forces captured Glasgow, Missouri, although it had little long-term benefit as Price's Missouri Expedition was defeated a week later.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln as US president in 1860 and the growing abolitionist movement in the North. The war ended with Union victory, the dissolution of the Confederacy and the national abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1815,
   "text": "Napoleon began his exile on Saint Helena in the South Atlantic Ocean, which would encompass his final six years.",
   "context": [
    "Napoleon Bonaparte, later known by his regnal name Napoleon I, was Emperor of the French from 18 May 1804 until his first abdication in 1814, with a brief restoration during the Hundred Days in 1815. He rose to prominence as a general during the French Revolution and led a series of military campaigns across Europe and the Middle East during the French Revolutionary and Napoleonic Wars. As a statesman, he implemented numerous legal and administrative reforms in France and Europe."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1529,
   "text": "Ottoman–Habsburg wars: The siege of Vienna ended with Austrian forces repelling the invading Turks, turning the tide against almost a century of conquest in Europe by the Ottoman Empire.",
   "context": [
    "The Ottoman–Habsburg wars were fought from the 16th to the 18th centuries between the Ottoman Empire and the Habsburg monarchy, which was at times supported by the Kingdom of Hungary, Polish–Lithuanian Commonwealth, the Holy Roman Empire, and Habsburg Spain. The wars were dominated by land campaigns in Hungary, including Transylvania and Vojvodina, Croatia, and central Serbia."
   ]
  }
 ],
 "recent_words_and_concepts": [
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