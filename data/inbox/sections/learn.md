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
   "text": "A magnitude-7.0 earthquake occurred in the Aegean Sea between Greece and Turkey, triggering a tsunami and causing 119 deaths.",
   "context": [
    "An earthquake with a moment magnitude of 7.0 occurred on 30 October 2020 about 14 km (8.7 mi) northeast of the Greek island of Samos. Although Samos was closest to the epicentre, it was the large Turkish city İzmir, 70 km (43 mi) northeast that was heavily affected—more than 700 residential and commercial structures were seriously damaged or destroyed. One hundred and seventeen people died in İzmir Province while an additional 1,034 were injured. In Greece, there were two fatalities and 19 injured. The earthquake is the deadliest in the year 2020, and the third major earthquake to strike Turkey that year. It generated an unusually large tsunami. The event is called the Samos earthquake by the International Seismological Centre."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2010,
   "text": "American comedians Jon Stewart and Stephen Colbert hosted the Rally to Restore Sanity and/or Fear in Washington, D.C.",
   "context": [
    "Jon Stewart is an American comedian, writer, producer, director, progressive political commentator, actor, and television host. Stewart is known as the host of the satirical news program The Daily Show on Comedy Central from 1999 to 2015 and part-time since 2024. He hosted The Problem with Jon Stewart on Apple TV+ from 2021 to 2023. Stewart has received numerous accolades, including 25 Primetime Emmy Awards, 2 Grammy Awards, and 5 Peabody Awards. He was honored with the Bronze Medallion in 2019 and the Mark Twain Prize for American Humor in 2022."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2002,
   "text": "After his terminal-cancer diagnosis, Warren Zevon made his last public appearance on the Late Show with David Letterman, giving the advice to \"enjoy every sandwich\".",
   "context": [
    "Warren William Zevon was an American rock singer and songwriter. His most famous compositions include \"Werewolves of London\", \"Lawyers, Guns and Money\" and \"Roland the Headless Thompson Gunner\". All three songs are featured on his third album, Excitable Boy (1978), the title track of which is also well-known. He also wrote major hits that were recorded by other artists, including \"Poor Poor Pitiful Me\", \"Mohammed's Radio\", \"Carmelita\" and \"Hasten Down the Wind\". Per The New York Times, \"Mr. Zevon had a pulp-fiction imagination\" which yielded \"terse, action-packed, gallows-humored tales that could sketch an entire screenplay in four minutes and often had death as a punchline. But there was also vulnerability and longing in Mr. Zevon's ballads, like 'Mutineer,' 'Accidentally Like a Martyr' and 'Hasten Down the Wind'.\""
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2001,
   "text": "Michael Jackson released Invincible, his final studio album and the most expensive album ever produced.",
   "context": [
    "Michael Joseph Jackson was an American singer, songwriter, dancer, and philanthropist. Dubbed the \"King of Pop\", he is widely regarded as one of the most culturally significant figures of the 20th century. His musical achievements broke American racial barriers and made him a dominant figure worldwide. Through his songs, music videos, concerts, and fashion, he transformed visual performance in popular music, popularizing street dance moves such as the moonwalk, the robot, and the anti-gravity lean. Jackson is often deemed the greatest entertainer of all time."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1993,
   "text": "The Troubles: Three members of the Ulster Defence Association opened fire in a crowded pub during a Halloween party, killing eight people and wounding nineteen others.",
   "context": [
    "The Troubles were an ethno-nationalist conflict in Northern Ireland that lasted from the late 1960s to 1998. Also known internationally as the Northern Ireland conflict, it is usually deemed to have ended with the Good Friday Agreement of 1998. Although centred in Northern Ireland, violence at times spilled into the Republic of Ireland, England, and mainland Europe. The conflict arose from political and nationalistic disputes with a strong ethnic and sectarian dimension. Unionists and loyalists, mostly Ulster Protestants, wanted Northern Ireland to remain in the United Kingdom, while Irish nationalists and republicans, mostly Irish Catholics, wanted it to join a united Ireland. Despite the division between Protestants and Catholics, it was not a religious war."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1991,
   "text": "The Madrid Conference, an attempt by the international community to revive the Israeli–Palestinian peace process through negotiations, convened.",
   "context": [
    "The Madrid Conference of 1991 was a peace conference, held from 30 October to 1 November 1991 in Madrid, hosted by Spain and co-sponsored by the Soviet Union and the United States. It was an attempt by the international community to revive the Israeli–Palestinian peace process through negotiations, involving Israel and the Palestinians as well as Arab countries, including Jordan, Lebanon, Syria, and Egypt."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1983,
   "text": "As the military dictatorship came to an end, Argentina's first democratic election in a decade resulted in Raúl Alfonsín being elected president.",
   "context": [
    "The National Reorganization Process was the military dictatorship that ruled Argentina from the coup d'état of 24 March 1976 until the transfer of power on 10 December 1983 to a government elected at the 1983 general election. In Argentina it is often known simply as the última junta militar, última dictadura militar, última dictadura cívico-militar, or última dictadura cívico-eclesial-militar —because there have been several in the country's history and no others like it since it ended. In journalism, and more rarely in academic literature, it has sometimes been referred to as totalitarian for its state terrorism mechanisms and an ideology centered around \"national integrity\", although the more commonly used terms in academia are \"authoritarian\" and \"bureaucratic-authoritarian\". Some scholars describe the regime as an example of neo-fascism."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1968,
   "text": "A squad of 120 North Korean Army commandos landed in boats along a 25-mile long section of the eastern coast of South Korea in a failed attempt to overthrow the dictatorship of Park Chung Hee and reunify Korea.",
   "context": [
    "The Korean People's Army encompasses the combined military forces of North Korea and the armed wing of the Workers' Party of Korea (WPK). The KPA consists of five branches: the Ground Force, the Naval Force, the Air Force, the Strategic Force, and the Special Operations Forces. It is commanded by the WPK Central Military Commission, which is chaired by the WPK general secretary, and the president of the State Affairs; both posts are currently headed by Kim Jong Un."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1966,
   "text": "Singaporean leftist opposition leader Chia Thye Poh was detained under the Internal Security Act, which allows for preventive detention; he was released 32 years later.",
   "context": [
    "Chia Thye Poh is a Singaporean former politician who was the de facto Leader of the Opposition in 1966. He was the Legislative Assemblyman and later Member of Parliament (MP) for Jurong Constituency from 1963 to 1966."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1965,
   "text": "English model Jean Shrimpton wore a controversially short minidress to Derby Day at Flemington Racecourse in Melbourne, Australia – a pivotal moment of the introduction of the miniskirt to women's fashion.",
   "context": [
    "Jean Rosemary Shrimpton is an English model and actress. She was an icon of Swinging London and is considered one of the world's first supermodels. She appeared on numerous magazine covers including Vogue, Harper's Bazaar, Vanity Fair, Glamour, Elle, Ladies' Home Journal, Newsweek and Time."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1960,
   "text": "At the Royal Infirmary of Edinburgh, Michael Woodruff performed the first successful kidney transplantation in the United Kingdom.",
   "context": [
    "The Royal Infirmary of Edinburgh (RIE) is the oldest voluntary hospital in Scotland. It was established in 1729. After moving to a new site in 1879, it claimed to be the largest voluntary hospital in the United Kingdom, and later, in the British Empire. In 2003, it moved to a 900-bed site at Little France. It is the site of clinical medicine teaching as well as a teaching hospital for the University of Edinburgh Medical School. In 1960 the first successful kidney transplant in the UK was performed at the hospital. In 1964 the world's first coronary care unit was established at the hospital. It is the only site for liver, pancreas, and pancreatic islet cell transplantation in Scotland, and one of the country's two sites for kidney transplantation. In 2012, the Emergency Department had 113,000 patient attendances, the highest number in Scotland. It is managed by NHS Lothian."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1948,
   "text": "A luzzu (Maltese fishing boat) overloaded with passengers capsized and sank in the Gozo Channel off Qala, killing 23 of the 27 people on board (monument pictured).",
   "context": [
    "A luzzu is a traditional fishing boat from the Maltese islands. This type of boat developed in the early 20th century, although it is very similar to much older traditional Maltese boats such as the ferilla. They are usually painted in bright colours, while the bow has a pair of eyes."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1938,
   "text": "CBS Radio broadcast \"The War of the Worlds\", a radio drama that newspapers accused of tricking Americans into believing there was an actual Martian invasion.",
   "context": [
    "CBS Radio was a radio broadcasting company and radio network operator owned by CBS Corporation and founded in 1928, with consolidated radio station groups owned by CBS and Westinghouse Broadcasting/Group W since the 1920s, and Infinity Broadcasting since the 1970s. The broadcasting company was sold to Entercom on November 17, 2017."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1888,
   "text": "Lobengula, King of Matabeleland, granted the Rudd Concession (pictured) to agents of Cecil Rhodes, leading to the creation of the British South Africa Company.",
   "context": [
    "Lobengula Khumalo was the second and last official king of Mthwakazi. Both names in the Ndebele language mean \"the men of the long shields\", a reference to the Ndebele warriors' use of the Nguni shield."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1863,
   "text": "Seventeen-year-old Vilhelm, Prince of Denmark, arrived in Athens to become King George I of Greece (pictured).",
   "context": [
    "Athens is the capital and largest city of Greece. A significant coastal urban area in the Mediterranean, Athens is also the capital of the Attica region and is the southernmost capital on the European mainland. With its urban area's population numbering over 3.6 million, it is the eighth-largest urban area in the European Union (EU). The Municipality of Athens, which constitutes a small administrative unit of the entire urban area, had a population of 643,452 in 2021, within its official limits, and a land area of 38.96 square kilometres. Athens joined the UNESCO Global Network of Learning Cities in 2016."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1806,
   "text": "War of the Fourth Coalition: Believing that they were outnumbered, the German garrison at Stettin surrendered to a much smaller French force (pictured) without a fight.",
   "context": [
    "The War of the Fourth Coalition was a war spanning 1806–1807 that saw a multinational coalition fight against Napoleon's French Empire, subsequently being defeated. The main coalition partners were Prussia and Russia with Saxony, Sweden, and Great Britain also contributing. Excluding Prussia, some members of the coalition had previously been fighting France as part of the Third Coalition, and there was no intervening period of general peace. On 9 October 1806, Prussia declared war on France and joined a renewed coalition, fearing the rise in French power after the defeat of Austria and establishment of the French-sponsored Confederation of the Rhine in addition to having learned of French plans to cede Prussian-desired Hanover to Britain in exchange for peace. Prussia and Russia mobilized for a fresh campaign with France, massing troops in Saxony."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Kick the can down the road (לדחות את ההכרעה)"
 ]
}
</input>