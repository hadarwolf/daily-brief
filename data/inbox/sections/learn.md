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
   "year": 2020,
   "text": "Second Nagorno-Karabakh War: Azerbaijani forces defeated the self-proclaimed Republic of Artsakh at the Battle of Shusha, reclaiming the town of Shusha after 28 years.",
   "context": [
    "The Second Nagorno-Karabakh War was an armed conflict in 2020 that took place in the disputed region of Nagorno-Karabakh and the surrounding occupied territories. It was a major escalation of an unresolved conflict over the region, involving Azerbaijan, Armenia and the self-declared Armenian breakaway state of Artsakh. The war lasted for 44 days and resulted in Azerbaijani victory, with the defeat igniting anti-government protests in Armenia. Post-war skirmishes continued in the region, including substantial clashes in 2022."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2017,
   "text": "The Louvre Abu Dhabi was inaugurated by the French president Emmanuel Macron and then-crown prince of Abu Dhabi Mohamed bin Zayed Al Nahyan.",
   "context": [
    "The Louvre Abu Dhabi is an art museum located on Saadiyat Island in Abu Dhabi, United Arab Emirates. It runs under an agreement between the UAE and France, signed in March 2007, that allows it to use the Louvre's name until 2047, and has been described by the Louvre as \"France's largest cultural project abroad.\" It is approximately 24,000 square metres (260,000 ft2) in size, with 8,000 square metres (86,000 ft2) of galleries, making it the largest art museum in the Arabian Peninsula. Artworks from around the world are showcased at the museum, with stated intent to bridge the gap between Eastern and Western art. Louvre Abu Dhabi is one of the first completed projects of the Saadiyat Cultural District, which Abu Dhabi intends to develop into \"a leading destination for art, history and culture.\""
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2013,
   "text": "Typhoon Haiyan made landfall in the Visayas region of the Philippines, killing at least 6,300 people, making it the deadliest Philippine typhoon recorded in modern history.",
   "context": [
    "Typhoon Haiyan, known in the Philippines as Super Typhoon Yolanda, was an extremely powerful and catastrophic tropical cyclone that is among the most intense tropical cyclones ever recorded. Upon making landfall, Haiyan devastated portions of Southeast Asia, particularly the Philippines, during early November 2013. It is one of the deadliest typhoons on record in the Philippines, killing at least 6,300 people in the region of Visayas alone. It was the most intense and deadliest tropical cyclone worldwide in 2013."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1999,
   "text": "German newspaper Der Spiegel publishes a report by the Federal Intelligence Service accusing figures in Liechtenstein of cooperating with organized crime.",
   "context": [
    "Der Spiegel is a German weekly news magazine published in Hamburg. With a weekly circulation of about 724,000 copies in 2022, it is one of the largest such publications in Europe. It was founded in 1947 by John Seymour Chaloner, a British army officer, and Rudolf Augstein, a former Wehrmacht radio operator who was recognized in 2000 by the International Press Institute as one of the fifty World Press Freedom Heroes."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1987,
   "text": "A Provisional Irish Republican Army bomb exploded during a Remembrance Sunday ceremony in Enniskillen, Northern Ireland, killing 12 people and injuring 63 others.",
   "context": [
    "The Provisional Irish Republican Army, officially known as the Irish Republican Army and informally known as the Provos, was an Irish republican paramilitary force that sought to end British rule in Northern Ireland, facilitate Irish reunification and bring about an independent socialist republic, which would encompass all of Ireland. It was the most active republican paramilitary group during the Troubles. It argued that the all-island Irish Republic continued to exist, and it saw itself as that state's army, the sole legitimate successor to the original IRA from the Irish War of Independence. It was designated a terrorist organisation in the United Kingdom and an unlawful organisation in the Republic of Ireland, both of whose authority it rejected."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1974,
   "text": "British peer Lord Lucan disappeared without a trace, a day after allegedly murdering Sandra Rivett, his children's nanny.",
   "context": [
    "Richard John Bingham, 7th Earl of Lucan, commonly known as Lord Lucan, was a British peer and gambler who vanished in 1974 after being suspected of killing Sandra Rivett, his children's nanny, and attempting to murder his wife. An evacuee during World War II, Lucan attended Eton College and served with the Coldstream Guards in West Germany from 1953 to 1955. He developed a taste for gambling, playing backgammon and bridge, and became an early member of the exclusive group of wealthy British gamblers at the Clermont Club. His losses often exceeded his winnings, yet he left his job at a London-based merchant bank and became a professional gambler. He was known as Lord Bingham from April 1949 until January 1964."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1971,
   "text": "The English rock group Led Zeppelin released their fourth album, which became one of the best-selling albums worldwide.",
   "context": [
    "Led Zeppelin were an English rock band formed in London in 1968. The band comprised vocalist Robert Plant, guitarist Jimmy Page, bass-guitarist and keyboardist John Paul Jones and drummer John Bonham. Their combination of a heavy electric-guitar sound with elements of blues and folk music popularised album-oriented rock and stadium rock and established them as the progenitor of hard rock and heavy metal. They are amongst the best-selling music artists of all time, with an estimated 200 to 300 million records sold worldwide."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1966,
   "text": "Former Massachusetts attorney general Edward Brooke (pictured) became the first African American to be elected to the United States Senate since Reconstruction.",
   "context": [
    "Massachusetts, officially the Commonwealth of Massachusetts, is a state in the New England region of the Northeastern United States. It borders the Atlantic Ocean and the Gulf of Maine to its east, Connecticut and Rhode Island to its south, New Hampshire and Vermont to its north, and New York to its west. Massachusetts is the seventh-smallest state by land area. With an estimated population of over 7.1 million, it is the most populous state in New England, the 16th-most-populous in the United States, and the third-most densely populated U.S. state after New Jersey and Rhode Island."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1965,
   "text": "Vietnam War: In the Battle of Gang Toi, one of the earliest battles between the two sides, Viet Cong forces repelled an Australian attack.",
   "context": [
    "The Vietnam War was an armed conflict in Vietnam, Laos, and Cambodia fought between North Vietnam and South Vietnam and their allies. North Vietnam was supported by the Soviet Union and China, while South Vietnam was supported by the United States and other anti-communist nations. The conflict was the second of the Indochina wars and a proxy war of the Cold War. The Vietnam War was one of the postcolonial wars of national liberation and a civil war, with civil warfare a defining feature from the outset. Direct US military involvement escalated from 1965 and peaked in 1969. After this, the US scaled back involvement until US forces were completely withdrawn in 1973. The fighting spilled into the Laotian and Cambodian civil wars, which ended with all three countries becoming communist in 1975."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1957,
   "text": "En route from San Francisco to Honolulu, Pan Am Flight 7 crashed into the Pacific Ocean due to unknown causes, killing all 44 people on board.",
   "context": [
    "Pan Am Flight 7 was a westbound round-the-world flight operated by Pan American World Airways. On November 8, 1957, the Boeing 377 Stratocruiser serving the flight, named Clipper Romance of the Skies, crashed in the Pacific Ocean en route to Honolulu International Airport from San Francisco. The crash killed all 36 passengers and eight crew members."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1940,
   "text": "The Italian invasion of Greece failed as outnumbered Greek units repulsed the Italians at the Battle of Elaia–Kalamas.",
   "context": [
    "The Greco-Italian War, also called the Italo-Greek War, took place between Italy and Greece from 28 October 1940 to 23 April 1941. This conflict began the Balkans campaign of World War II between the Axis powers and the Allies, and eventually turned into the Battle of Greece with British and German involvement. On 10 June 1940, Italy declared war on France and the United Kingdom. By September 1940, the Italians had invaded France, British Somaliland and Egypt. This was followed by a hostile press campaign in Italy against Greece, accused of being a British ally. A number of provocations culminated in the sinking of the Greek light cruiser Elli by the Italians on 15 August. On 28 October, Mussolini issued an ultimatum to Greece demanding the cession of Greek territory, which the Prime Minister of Greece, Ioannis Metaxas, rejected."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1932,
   "text": "The Australian military withdrew from their \"war against emus\" in Western Australia, due to negative press coverage of the operation.",
   "context": [
    "The Australian Defence Force (ADF) is the military organisation responsible for the defence of Australia and its national interests. It consists of three services: the Royal Australian Navy (RAN), the Australian Army and the Royal Australian Air Force (RAAF). The ADF has a strength of just over 90,000 personnel and is supported by the Department of Defence and other civilian entities that altogether constitute the Australian Defence Organisation."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1644,
   "text": "The Shunzhi Emperor (portrait shown), the third emperor of the Qing dynasty, was enthroned in Beijing after the collapse of the Ming dynasty as the first Qing emperor to rule over China.",
   "context": [
    "The Shunzhi Emperor, personal name Fulin, was the second emperor of the Qing dynasty, and the first Qing emperor to rule over China proper. Upon the death of his father Hong Taiji, a committee of Manchu princes chose the 5-year-old Fulin as successor. The princes also appointed two co-regents: Dorgon, the 14th son of Nurhaci, and Jirgalang, one of Nurhaci's nephews, both of whom were members of the Aisin-Gioro clan. In November 1644, the Shunzhi Emperor was enthroned as emperor of China in Beijing."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1520,
   "text": "After his coronation as king of Sweden, Christian II (pictured) gave the order to execute nearly 100 people, mostly noblemen, despite promises of general amnesty.",
   "context": [
    "The monarchy of Sweden is centred on the monarchical head of state of Sweden, by law a constitutional and hereditary monarchy with a parliamentary system. There have been kings in what now is the Kingdom of Sweden for more than a millennium. Originally an elective monarchy, it became a hereditary monarchy in the 16th century during the reign of Gustav Vasa, though virtually all monarchs before that belonged to a limited and small number of political families which are considered to be the royal dynasties of Sweden."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1291,
   "text": "A law was passed that confined most of Venice's glassmaking industry to nearby Murano.",
   "context": [
    "Venetian glass is glassware made in Venice, typically on the island of Murano near the city. Traditionally it is made with a soda–lime \"metal\" and is typically elaborately decorated, with various \"hot\" glass-forming techniques, as well as gilding, enamel, or engraving. Production has been concentrated on the Venetian island of Murano since the 13th century. Today Murano is known for its art glass, but it has a long history of innovations in glassmaking in addition to its artistic fame—and was Europe's major center for luxury glass from the High Middle Ages to the Italian Renaissance. During the 15th century, Murano glassmakers created cristallo—which was almost transparent and considered the finest glass in the world. Murano glassmakers also developed a white-colored glass that looked like porcelain. They later became Europe's finest makers of mirrors."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1278,
   "text": "Trần Thánh Tông, the second emperor of Vietnam's Trần dynasty, took up the title of retired emperor, but continued to co-rule with his son Nhân Tông for eleven more years.",
   "context": [
    "Trần Thánh Tông, personal name Trần Hoảng (陳晃), was the second emperor of the Trần dynasty, reigning over Đại Việt from 1258 to 1278. After ceding the throne to his son Trần Nhân Tông, Thánh Tông held the title of retired emperor from 1279 until his death in 1290. During the second and the third Mongol invasions of Đại Việt, Retired Emperor Thánh Tông and Emperor Nhân Tông were credited as the supreme commanders who led the nation to the final victories and, as a result, established a long period of peace and prosperity over the country. With his successful rulings in both military and civil matters, Trần Thánh Tông was considered one of the greatest emperors of not only the Trần dynasty but also the whole dynastic era in the history of Vietnam."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 960,
   "text": "Arab–Byzantine wars: Having been the target of many raids by the Emirate of Aleppo, Byzantine forces led by Leo Phokas the Younger ambushed the Hamdanids and annihilated their army.",
   "context": [
    "The Arab–Byzantine wars or Muslim–Byzantine wars were a series of wars from the 7th to 11th centuries between the successive Islamic caliphates and the Byzantine Empire. Following the Byzantine defeat at the Battle of the Yarmuk, Muslim armies conquered most Byzantine territory in the Levant, Egypt and North Africa within decades. Arab expansion subsequently slowed to a more gradual rate, following two failed sieges of the Byzantine capital of Constantinople in the late 7th and early 8th centuries. By the mid-9th century, the Byzantines had partially recovered and proceeded to recapture some of their lost territory in Anatolia in the following decades."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Creative destruction (הרס יצירתי)",
  "Ballpark figure (הערכה גסה)",
  "In the weeds (שקוע בפרטים הקטנים)",
  "Circuit breaker (מנתק מעגל)",
  "Risk-off (מצב הימנעות מסיכון)",
  "Throwing the baby out with the bathwater (לשפוך את התינוק עם המים)",
  "Net interest margin (מרווח ריבית נקי)",
  "Race to the bottom (מירוץ לתחתית)",
  "Skin in the game (עור במשחק)",
  "Take rate (שיעור נטילה)",
  "Move fast and break things (לנוע מהר ולשבור דברים)",
  "The tail wagging the dog (הזנב מכשכש בכלב)",
  "Flywheel effect (אפקט הגלגל התנופה)",
  "Table stakes (דמי כניסה למשחק)",
  "Move the needle (לחולל שינוי משמעותי)",
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
  "Catching a falling knife (לתפוס סכין נופל)"
 ]
}
</input>