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
   "year": 2015,
   "text": "A sword-wielding man attacked students and teachers at a high school in Trollhättan, killing three people in Sweden's deadliest school attack.",
   "context": [
    "On 22 October 2015, a mass stabbing occurred at Kronan Primary School in Trollhättan, Sweden. 21-year-old Anton Lundin Pettersson killed three people and wounded another two with a sword, later dying from gunshot wounds sustained after charging police."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2014,
   "text": "In Ottawa, Canada, the downtown core was placed on lockdown after a series of shootings at Parliament Hill.",
   "context": [
    "Ottawa is the capital city of Canada. It is located in the southeastern portion of the province of Ontario, at the confluence of the Ottawa River and the Rideau River. Ottawa borders Gatineau, Quebec, and forms the core of the Ottawa–Gatineau census metropolitan area (CMA) and the National Capital Region (NCR). As of 2021, Ottawa had a city population of 1,017,449 and a metropolitan population of 1,488,307, making it the second-largest city and second most-populous metropolitan area in Ontario, and the fourth-largest city and fourth-largest metropolitan area in Canada."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2005,
   "text": "Bellview Airlines Flight 210 crashed in Ogun State, Nigeria, killing all 117 people on board.",
   "context": [
    "Bellview Airlines Flight 210 was a scheduled Nigerian domestic passenger flight of a Boeing 737-200 airliner from Lagos to Abuja, operated by Lagos-based Bellview Airlines. On 22 October 2005, the aircraft nose-dived and crashed at high speed a few minutes after takeoff, killing all 117 people on board."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1989,
   "text": "TAN-SAHSA Flight 414 crashed in approach to Toncontín International Airport, killing 131 out of 146 people onboard.",
   "context": [
    "TAN-SAHSA Flight 414 was a scheduled flight from Juan Santamaría International Airport, San José, Costa Rica, to Toncontín Airport in Tegucigalpa, Honduras, with a stopover at Augusto C. Sandino Airport in Managua, Nicaragua, on 21 October 1989. Flown with a Boeing 727-200, the flight crashed into a mountain at 7:30 A.M. local time after the pilots failed to follow a special landing procedure required for the arrival to the airport. The crash killed 131 passengers, leaving 15 survivors. While 20 passengers initially survived, five died before treatment, due to a delay in rescue personnel because of bad weather. It remains, as of 2025, the worst aviation accident on Honduran soil and in Central America at large; it is also the 15th deadliest involving a Boeing 727."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1987,
   "text": "John Adams' (pictured) opera Nixon in China premiered.",
   "context": [
    "John Coolidge Adams is an American composer and conductor. Among the most regularly performed composers of contemporary classical music, he is particularly noted for his operas, many of which center around historical events. Apart from opera, his oeuvre includes orchestral, concertante, vocal, choral, chamber, electroacoustic, and piano music."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1966,
   "text": "With their album The Supremes A' Go-Go, the Supremes became the first all-female group to reach number one on the Billboard 200 chart.",
   "context": [
    "The Supremes A' Go-Go is the ninth studio album released by the Motown singing group the Supremes. It was the first album by an all-female group to reach number-one on the Billboard 200 album charts in the United States."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1964,
   "text": "The first volume of Ian Fleming's children's novel Chitty-Chitty-Bang-Bang was published posthumously.",
   "context": [
    "Ian Lancaster Fleming was a British writer best known for his postwar James Bond series of spy novels. Fleming came from a wealthy family connected to the merchant bank Robert Fleming & Co., and his father Valentine Fleming was the Member of Parliament for Henley from 1910 until his death on the Western Front in 1917. Educated at Eton, Sandhurst, and, briefly, the Ludwig-Maximilians-Universität München and the University of Geneva, Fleming moved through several jobs before he started writing."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1945,
   "text": "Workers at the Cigar Factory in Charleston, South Carolina, began a labor strike against the American Tobacco Company that lasted more than five months.",
   "context": [
    "The Cigar Factory is a historic industrial building at 701 East Bay Street in Charleston, South Carolina. It was constructed in 1881 and opened in 1882 as the Cotton Mill of Charleston. In 1912, it was purchased by the American Cigar Company who converted it into a cigar factory that was the largest private employer in Charleston during the 1930s. In the 1940s, it was the location of the 1945–1946 Charleston Cigar Factory strike where the civil rights anthem \"We Shall Overcome\" emerged. The building was listed on the National Register of Historic Places in 1980, and was designated a National Historic Landmark in 2024."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1940,
   "text": "After evading Vichy French and Francoist Spanish authorities, Belgian prime minister Hubert Pierlot arrived in London, marking the beginning of the Belgian government in exile.",
   "context": [
    "Vichy France, also known as the Pétainist regime and Pétainist France, officially the French State, was a French rump state headed by Marshal Philippe Pétain during World War II, established as a result of German victory in the Battle of France. It was named after its seat of government, the city of Vichy."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1936,
   "text": "The Royal Navy cutlass  was withdrawn from combat service.",
   "context": [
    "Ratings of the Royal Navy have used cutlasses, short, wide bladed swords, since the early 18th century. These were originally of non-uniform design but the 1804 Pattern, the first Navy-issue standard cutlass, was introduced at the start of the 19th century. This was a bluntish weapon that was perhaps intended for cutting away canvas and ropes rather than as a thrusting combat weapon. The 1845 Pattern cutlass introduced a bowl-style hand guard which provided greater protection, with a longer and more curved blade. Its sharper point made it more useful for thrusting attacks, which were now emphasised in the drill manual. The 1845 Pattern was modified several times including shortening and straightening the blades, which weakened them. The 1889 Pattern had a straight, spear-pointed blade with a hilt that curved outwards to catch and redirect an opponent's sword point. The 1900 Pattern, the last navy-issue cutlass, was similar to its predecessor with the introduction of a fuller and a hilt insert that cushioned the user's little finger. The cutlass was withdrawn from service in 1936 but remains in use for ceremonial purposes. It is thought that it was last used in combat in 1900 during the Boxer Rebellion."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1936,
   "text": "Dod Orsborne, captain of the Girl Pat, was convicted of its theft and imprisoned, having caused a media sensation when it went missing.",
   "context": [
    "\n\nGeorge Black Orsborne, also known as Dod Orsborne, was a Grimsby trawler captain and seafarer, who acquired notoriety in 1936 when he took the trawler Girl Pat on an unauthorised voyage across the Atlantic. The escapade attracted much press attention, and Orsborne and his crew were briefly hailed as heroes. Orsborne was tried and imprisoned for the theft of the trawler; subsequently he claimed that the voyage had been part of an undercover operation organised by British Naval Intelligence."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1924,
   "text": "The educational non-profit organization Toastmasters International was founded at a YMCA in Santa Ana, California.",
   "context": [
    "Toastmasters International (TI) is a US-headquartered nonprofit educational organization that operates clubs worldwide to promote communication, public speaking, and leadership skills."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1907,
   "text": "A bank run forced New York's Knickerbocker Trust Company to suspend operations, triggering the Panic of 1907 (pictured).",
   "context": [
    "A bank run or run on the bank occurs when many clients withdraw their money from a bank, because they believe the bank may fail in the near future. It may occur when, in a fractional-reserve banking system, a large volume of customers seek to withdraw a greater amount of cash from deposit accounts with a financial institution in a short space of time than the institution has cash on-hand, because the customers believe that the institution is, or might become, insolvent. When they transfer funds to another institution, it may be characterized as a capital flight. As a bank run progresses, it may become a self-fulfilling prophecy: as more people withdraw cash, the likelihood of default increases, triggering further withdrawals. This can destabilize the bank to the point where it runs out of cash and thus faces sudden bankruptcy. To combat a bank run, a bank may acquire more cash from other banks or from the central bank, or limit the amount of cash customers may withdraw, either by imposing a hard limit or by scheduling quick deliveries of cash, encouraging high-return term deposits to reduce on-demand withdrawals, or suspending withdrawals altogether."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1895,
   "text": "At Gare Montparnasse in Paris, an express train derailed after overrunning the buffer stop and crashed through the station wall, with the locomotive landing on the street below (pictured).",
   "context": [
    "Gare Montparnasse, officially Paris Montparnasse and formerly Gare de l'Ouest, is one of the seven large Paris railway termini, and is located in the 14th and 15th arrondissements."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1877,
   "text": "Scotland's worst mining accident occurred when an explosion at a colliery in Blantyre, South Lanarkshire, killed 207 miners.",
   "context": [
    "The Blantyre mining disaster, which happened on the morning of 22 October 1877, in Blantyre, Scotland, was Scotland's worst ever mining accident. Pits No. 2 and No. 3 of William Dixon's Blantyre Colliery were the site of an explosion which killed 207 miners, possibly more, with the youngest being a boy of 11. It was known that firedamp was present in the pit and it is likely that this was ignited by a naked flame. The accident left 92 widows and 250 fatherless children."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1740,
   "text": "A two-week massacre of ethnic Chinese in Batavia, Dutch East Indies, came to an end with at least 10,000 people killed.",
   "context": [
    "A massacre and pogrom of ethnic Chinese residents of the port city of Batavia in the Dutch East Indies was carried out by the Dutch East India Company and allied members of other Batavian ethnic groups in 1740. The violence in the city lasted from 9 until 22 October, with minor skirmishes outside the walls continuing late into November that year. Historians have estimated that at least 10,000 ethnic Chinese were massacred; just 600 to 3,000 are believed to have survived."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1727,
   "text": "George II and Caroline of Ansbach (pictured) were crowned king and queen of Great Britain in Westminster Abbey.",
   "context": [
    "George II was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1724,
   "text": "J. S. Bach led the first performance of the chorale cantata Schmücke dich, o liebe Seele (Adorn yourself, O dear soul), based on the communion hymn of the same name, in Leipzig.",
   "context": [
    "Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his prolific output across a variety of instruments and forms, including the orchestral Brandenburg Concertos; solo instrumental works such as the Cello Suites and Sonatas and Partitas for Solo Violin; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schübler Chorales and the Toccata and Fugue in D minor; and choral works such as the St. Matthew Passion and the Mass in B minor. He is known for his mastery of counterpoint, as heard in The Musical Offering and The Art of Fugue. Felix Mendelssohn precipitated the Bach Revival with a performance of the St. Matthew Passion in 1829. Ever since, Bach has been acclaimed as one of the greatest composers in the history of Western music."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1707,
   "text": "In one of the worst maritime disasters in the history of the British Isles, at least 1,400 sailors on four Royal Navy ships were lost in stormy weather (pictured) off the Isles of Scilly.",
   "context": [
    "The list of maritime disasters is a link page for maritime disasters by century."
   ]
  },
  {
   "ref": "wikipedia#19",
   "year": 1633,
   "text": "At the Battle of Liaoluo Bay Ming Chinese naval forces defeated a Dutch East India Company fleet in the Taiwan Strait, the largest naval encounter between Chinese and European forces before the First Opium War more than two hundred years later.",
   "context": [
    "The Battle of Liaoluo Bay took place in 1633 off the coast of Fujian, China; involving the Dutch East India Company (VOC) and the Chinese Ming dynasty's navies. The battle was fought at the crescent-shaped Liaoluo Bay that forms the southern coast of the island of Kinmen. A Dutch fleet under Admiral Hans Putmans was attempting to control shipping in the Taiwan Strait, while the southern Fujian sea traffic and trade was protected by a fleet under Brigadier General Zheng Zhilong. This was the largest naval encounter between Chinese and European forces before the Opium Wars two hundred years later."
   ]
  },
  {
   "ref": "wikipedia#20",
   "year": 906,
   "text": "Ahmad ibn Kayghalagh, an Abbasid military officer of Turkic origin, led a raid against the Byzantine Empire, taking at least 4,000 captives.",
   "context": [
    "\nAhmad ibn Kayghalagh was an Abbasid military officer of Turkic origin who served as governor in Syria and Egypt. He was ousted as governor of Egypt by Muhammad ibn Tughj in 935."
   ]
  },
  {
   "ref": "wikipedia#21",
   "year": -2137,
   "text": "A solar eclipse occurred over China, one of the earliest recorded eclipses in history.",
   "context": [
    "The 22nd century BC is a century that lasted between the years 2200 BC and 2101 BC."
   ]
  }
 ],
 "recent_words_and_concepts": [
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