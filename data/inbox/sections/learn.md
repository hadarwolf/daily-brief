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
   "year": 2016,
   "text": "LaMia Flight 2933 crashed near Medellín, Colombia, killing 71 people, many of whom were players from Chapecoense Football Club.",
   "context": [
    "LaMia Flight 2933 was a regularly scheduled charter flight from Santa Cruz de la Sierra, Bolivia, to Medellín, Colombia. On 28 November 2016, the aircraft operating the flight crashed into Mt. Cerro Gordo near the town of La Unión, Antioquia, Colombia, killing 71 of the 77 people on board. The aircraft was transporting the first-team squad of the Brazilian football club Chapecoense and their entourage to Medellín where the team was scheduled to play at the 2016 Copa Sudamericana Finals. One of the four crew members, three of the players, and two other passengers survived with injuries."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1991,
   "text": "Tropical Storm Zelda struck the Marshall Islands, leaving 6,000 residents homeless.",
   "context": [
    "Severe Tropical Storm Zelda was the last tropical cyclone of the 1991 Pacific typhoon season; it struck the Marshall Islands on November 28. The area of low pressure that eventually became Zelda formed near the International Date Line, and strengthened into a tropical depression on November 27. The Joint Typhoon Warning Center (JTWC) reported that the depression had reached tropical storm intensity near the Marshall Islands on November 28, thus naming it Zelda. On November 29, the storm quickly strengthened to 65 knots according to the JTWC, equivalent to a Category 1 typhoon on the Saffir–Simpson hurricane wind scale. It reached a peak of 80 kn according to the JTWC, and 60 kn according to the Japanese Meteorological Agency (JMA), with a barometric pressure of 975 hectopascals (28.8 inHg). Zelda weakened into a tropical storm on December 2, and then a tropical depression two days later. The JTWC discontinued warnings late on December 4, while the JMA declared the storm to be extratropical the next day and continued to track until it crossed the International Date Line again on December 7."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1987,
   "text": "South African Airways Flight 295 suffered a catastrophic in-flight fire and crashed into the Indian Ocean east of Mauritius, killing all 159 people on board.",
   "context": [
    "South African Airways Flight 295, sometimes referenced and known as the Helderberg disaster, was a scheduled international passenger flight from Chiang Kai-shek International Airport, Taipei, Taiwan, to Jan Smuts International Airport, Johannesburg, South Africa, with a stopover in Plaisance Airport, Plaine Magnien, Mauritius. On November 28, 1987, the aircraft serving the flight, a Boeing 747 named Helderberg, experienced a catastrophic in-flight fire in the cargo area, broke up in mid-air, and crashed into the Indian Ocean east of Mauritius, killing all 159 passengers and crew on board. An extensive salvage operation was mounted to try to recover the aircraft's flight recorders, one of which was recovered from a depth of 16,100 feet (4,900 m)."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1979,
   "text": "Air New Zealand Flight 901 crashed into Antarctica's Mount Erebus, killing all 257 people on board.",
   "context": [
    "The Mount Erebus disaster occurred on 28 November 1979 when Air New Zealand Flight 901 (TE901) flew into Mount Erebus on Ross Island, Antarctica, killing all 237 passengers and 20 crew on board. Air New Zealand had been operating scheduled Antarctic sightseeing flights since 1977. This flight left Auckland Airport in the morning and was supposed to spend a few hours flying over the Antarctic continent, before returning to Auckland in the evening via Christchurch."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1971,
   "text": "Wasfi Tal (pictured), Prime Minister of Jordan, was assassinated in Cairo by gunmen from the Black September Organization.",
   "context": [
    "Wasfi Tal was a Jordanian politician, statesman and military officer. He served as the 15th Prime Minister of Jordan for three separate terms, 1962–63, 1965–67 and 1970 until his assassination in 1971."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1967,
   "text": "Jocelyn Bell Burnell noticed a \"bit of scruff\" in data from a radio telescope, which turned out to be from PSR B1919+21, the first discovered pulsar.",
   "context": [
    "Dame Susan Jocelyn Bell Burnell is a Northern Irish astrophysicist and radio astronomer who, while conducting research for her doctorate in 1967, discovered the first known pulsar. This discovery was recognized by the Nobel Prize in Physics in 1974, though she was not among its recipients."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1966,
   "text": "In a military coup, Michel Micombero abolished the Burundian monarchy and declared the country a republic with himself as the inaugural president.",
   "context": [
    "Michel Micombero was a Burundian military officer and politician who ruled the country as de facto military dictator for the decade between 1966 and 1976. He was the last Prime Minister of the Kingdom of Burundi from July to November 1966, and the first President of the country from November 1966 until his overthrow in 1976."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1925,
   "text": "Grand Ole Opry, the longest-running radio broadcast in the United States, first aired on WSM in Nashville, Tennessee.",
   "context": [
    "The Grand Ole Opry is a regular live country-music radio broadcast originating from Nashville, Tennessee, on WSM, held between two and five nights per week, depending on the time of year. It was founded on November 28, 1925, by George D. Hay as the WSM Barn Dance, taking its current name in 1927. Currently owned and operated by Opry Entertainment, it is the longest-running radio broadcast in U.S. history. Dedicated to honoring country music and its history, the Opry showcases a mix of famous singers and contemporary chart-toppers performing country, bluegrass, Americana, folk, and gospel music as well as comedic performances and skits. It attracts hundreds of thousands of visitors from around the world and millions of radio and internet listeners."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1912,
   "text": "At the All-Albanian Congress, the Assembly of Vlorë was constituted, which declared the independence of the Albanian Vilayet from the Ottoman Empire.",
   "context": [
    "The All-Albanian Congress was held in Vlorë on November 28, 1912. The Congress's participants constituted the Assembly of Vlorë which established Albanian Provisional Government and elected Ismail Kemal as its president."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1903,
   "text": "SS Petriana struck a reef near Point Nepean, leading to Australia's first major oil spill and a debate over the White Australia policy.",
   "context": [
    "SS Petriana was an iron screw steamer built in 1879 that was converted into an oil tanker. On 28 November 1903, while transporting 1,300 tonnes of petroleum from Borneo to Australia, it struck a reef near Point Nepean, Victoria, outside of Port Phillip Bay. The vessel was subsequently abandoned, but not before its cargo was released as part of efforts to save the ship, causing Australia's first major oil spill. Under the White Australia policy, the Chinese and Malay sailors crewing the Petriana were refused entry to Australia and forced to stay on a crowded tugboat for several days. Their treatment led to a political controversy in the lead-up to the 1903 federal election."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1895,
   "text": "The Chicago Times-Herald race, the first automobile race in the U.S., was held in Chicago.",
   "context": [
    "The Chicago Times-Herald race was the first automobile race held in the United States. Sponsored by the Chicago Times-Herald, the race was held in Chicago in 1895 among six automobiles: four gasoline and two electric, all four-wheelers. It was won by Frank Duryea's Motorized Wagon. The race created considerable publicity for the motocycle, which had been introduced in the United States only two years earlier."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1811,
   "text": "Beethoven's Piano Concerto No. 5 premiered at the Gewandhaus in Leipzig.",
   "context": [
    "Ludwig van Beethoven was a German composer and pianist. A seminal figure in the history of music, his personal style was a key driver of the transition from Classical to Romantic music. He expanded instrumental forms such as the symphony, the piano sonata, and the string quartet. Beethoven is widely revered as one of the greatest composers of all time, and his compositions are among the most performed in the world."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1729,
   "text": "Natchez Indians revolted against French colonists near modern-day Natchez, Mississippi, killing approximately 230 people.",
   "context": [
    "The Natchez were a Native American people who originally lived in the Natchez Bluffs area in the Lower Mississippi Valley, near the present-day city of Natchez, Mississippi, in the United States. The DeSoto chronicle failed to record their presence when they came down the river in 1543. They spoke a language with no known relatives, although it may be distantly related to the Muskogean languages of the Creek Confederacy."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1666,
   "text": "The Scots Army led by Tam Dalyell of the Binns suppressed an uprising by Covenanter insurgents under James Wallace of Auchens near the Pentland Hills in Scotland.",
   "context": [
    "The Scots Army was the army of the Kingdom of Scotland between the 1660 Stuart Restoration and Scotland's union with England to form Great Britain on 1 May 1707 following the 1706 Treaty of Union and the Acts of Union that enacted it. During the Restoration the Scots Army was raised as a small standing army which mainly engaged in suppressing Covenanter rebellions participating in counterinsurgency operations against Cameronians in Eastern Scotland. The Scottish Militia was also raised to further bolster Scotland's military capacity."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1660,
   "text": "Robert Boyle, John Wilkins, Christopher Wren and other leading scientists met at Gresham College in London to found a learned society, now known as the Royal Society (coat of arms pictured).",
   "context": [
    "Robert Boyle was an Anglo-Irish chemist, alchemist, physicist, theologian, and inventor. Boyle is largely regarded today as the first modern chemist, and therefore one of the founders of modern chemistry, and one of the pioneers of modern experimental scientific method."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1470,
   "text": "Đại Việt emperor Lê Thánh Tông launched a military expedition against Champa, beginning the Champa–Đại Việt War.",
   "context": [
    "Đại Việt was the official name of multiple Vietnamese monarchies in eastern Mainland Southeast Asia from the 10th century AD to the early 19th century, centered around the region of present-day Hanoi. The initial name, Đại Cồ Việt, was adopted in 968 by Emperor Đinh Bộ Lĩnh, following his successful campaigns that ended the Anarchy of the 12 Warlords and lasted until the beginning of the reign of Lý Thánh Tông, the third emperor of the Lý dynasty. Đại Việt lasted until the reign of Gia Long, the first emperor of the Nguyễn dynasty, when the name was changed to Việt Nam in 1804. Under rule of bilateral diplomacy with Imperial China, it was known as the Principality of Giao Chỉ (975–1164) and later the Kingdom of Annam (1164–1804) when Emperor Xiaozong of Song recognized Đại Việt's independence and upgraded its status from principality to kingdom."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1443,
   "text": "Having deserted the Ottoman army, Skanderbeg (pictured) arrived in the Albanian city of Krujë and, using a forged letter from Sultan Murad II to the governor of Krujë, became lord of the city.",
   "context": [
    "The Ottoman Empire, also known historically as Turkey or the Turkish Empire, was a state that spanned much of Southeastern Europe, West Asia, and North Africa from the 14th century to the early 20th century, centred in modern-day Turkey. It also controlled parts of southeastern Central Europe between the early 16th and early 18th centuries."
   ]
  }
 ],
 "recent_words_and_concepts": [
  "Arm's-length transaction (עסקה בתנאי שוק)",
  "Bear hug (חיבוק דובי)",
  "A rising tide lifts all boats (גאות מרימה את כל הסירות)",
  "Poison pill (גלולת רעל)",
  "War chest (קופת מלחמה)",
  "Herding cats (לרכז חתולים)",
  "Shrinkflation (כיווץ אינפלציוני)",
  "Due diligence (בדיקת נאותות)",
  "Scorched-earth strategy (אסטרטגיית אדמה חרוכה)",
  "Bootstrapping (מיזם ממומן בכוחות עצמיים)",
  "Dead cat bounce (קפיצת החתול המת)",
  "Punching above your weight (להילחם מעל המשקל שלך)",
  "Zombie company (חברת זומבי)",
  "Sweat equity (הון יזע)",
  "Burn the boats (לשרוף את הסירות)",
  "Haircut (תספורת)",
  "Death by a thousand cuts (מיתה באלף חתכים)",
  "Playing with house money (לשחק בכסף של הבית)",
  "Golden parachute (מצנח זהב)",
  "Sandbagging (הערכה שמרנית מכוונת)",
  "Bake-off (תחרות ספקים)",
  "Churn rate (שיעור נטישה)",
  "Bleeding edge (חוד החרב הטכנולוגי)",
  "Jump the shark (לקפוץ מעל הכריש)",
  "Hurdle rate (שיעור תשואה נדרש)",
  "Land and expand (לנחות ולהתרחב)",
  "Throwing good money after bad (להשקיע כסף טוב אחרי כסף רע)",
  "Bellwether (מדד מקדים)",
  "Sticker shock (תדהמת מחיר)",
  "Cash cow (פרת מזומנים)",
  "Vintage (וינטג')",
  "Hockey-stick growth (צמיחת מקל הוקי)",
  "Dogfooding (אכילת מזון הכלבים של עצמך)",
  "Moral hazard (סיכון מוסרי)",
  "Melt-up (עלייה קדחתנית)",
  "Betting the farm (להמר על הכל)",
  "Working Capital (הון חוזר)",
  "Pull-Forward Demand (הקדמת ביקוש)",
  "Low-Hanging Fruit (פרי בשל בהישג יד)",
  "Economic moat (חפיר כלכלי)",
  "First-mover advantage (יתרון הנע הראשון)",
  "Boil the frog (לבשל את הצפרדע)",
  "Loss leader (מוצר מכירת הפסד)",
  "Earnout (תשלום מותנה בתוצאות)",
  "Move the goalposts (להזיז את קווי השער)",
  "Blended rate (שיעור ממוצע משוקלל)",
  "Growing into your valuation (לצמוח לתוך השווי)",
  "When the music stops (כשהמוזיקה נפסקת)",
  "Vesting cliff (צוק הבשלה)",
  "Mark-to-market (הערכה לפי שווי שוק)",
  "Drinking the Kool-Aid (לאמץ נרטיב בעיניים עצומות)",
  "Soft landing (נחיתה רכה)",
  "Base effect (אפקט בסיס)",
  "Kitchen-sinking (לרוקן את כל הבעיות בבת אחת)",
  "Natural hedge (גידור טבעי)",
  "Beat-and-raise (רבעון של עקיפת תחזיות והעלאת תחזית)",
  "Catching a falling knife (לתפוס סכין נופל)",
  "Run rate (קצב שנתי)",
  "Golden handcuffs (אזיקי זהב)",
  "The elephant in the room (הפיל בחדר)",
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
  "Throwing spaghetti at the wall (לזרוק ספגטי על הקיר)"
 ]
}
</input>