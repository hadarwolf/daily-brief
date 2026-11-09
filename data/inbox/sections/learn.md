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
   "text": "The Alabama Crimson Tide and LSU Tigers football teams, both with undefeated records thus far that season, played in a \"Game of the Century\".",
   "context": [
    "The Alabama Crimson Tide football program represents the University of Alabama in American football. It is part of the wider Crimson Tide athletics program and competes in the Southeastern Conference (SEC), a conference of the NCAA's Football Bowl Subdivision (FBS)."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2019,
   "text": "Pakistani prime minister Imran Khan inaugurated the Kartarpur Corridor, a visa-free border crossing connecting the Gurdwara Darbar Sahib to the India–Pakistan border.",
   "context": [
    "Imran Ahmed Khan Niazi is a Pakistani former cricketer, philanthropist, and politician who served as the 19th prime minister of Pakistan from August 2018 until April 2022. As a cricketer, he captained the Pakistan national cricket team to victory in the 1992 Cricket World Cup. After retiring from cricket, he established the Shaukat Khanum Memorial Cancer Hospital and Research Centre, Pakistan's first cancer hospital. He is the founder of the political party Pakistan Tehreek-e-Insaf (PTI) and was its chairman from 1996 to 2023."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2016,
   "text": "A tram derailment in Croydon, London, killed seven people.",
   "context": [
    "On 9 November 2016, a tram operated by Tramlink in London, United Kingdom, derailed and overturned on a sharp bend approaching a junction. Of 69 passengers, there were seven fatalities and 62 injured, 19 of whom sustained serious injuries. This was the first tram incident in the UK in which passengers died since 1959."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1993,
   "text": "Bosnian War: Croatian Defence Council forces destroyed the Stari Most, a 16th-century bridge crossing the river Neretva in the city of Mostar (rebuilt bridge pictured).",
   "context": [
    "The Bosnian War was an armed conflict that took place in Bosnia and Herzegovina, from 1992 until 1995. Following several earlier violent incidents, the war is commonly seen as having started on 6 April 1992 when the newly independent Republic of Bosnia and Herzegovina was internationally recognized. It ended on 21 November 1995 when the Dayton Accords were initialed. The main belligerents were the forces of the government of the Republic of Bosnia and Herzegovina, and those of the breakaway proto-states of the Republic of Herzeg-Bosnia and the Republika Srpska which were led and supplied by Croatia and Serbia, respectively."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1989,
   "text": "East German official Günter Schabowski mistakenly announced the immediate opening of the inner German border, resulting in the fall of the Berlin Wall that night (border crossing pictured).",
   "context": [
    "Günter Schabowski was a German politician who served as an official of the Socialist Unity Party of Germany, the ruling party during most of the existence of East Germany. After climbing up the party ladder, he became the regime's unofficial spokesman. He gained worldwide fame in November 1989 when he improvised a slightly mistaken answer to a press conference question about the future of the Berlin Wall, that seemed to announce the Wall's immediate end and raised popular expectations much more rapidly than the government planned. Massive crowds gathered at the Wall the same night, which forced its opening after 28 years. Soon afterward, the entire inner German border was opened; not much later, East Germany ceased to exist."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1985,
   "text": "At age 22, Garry Kasparov became the then-youngest World Chess Champion by defeating then-champion Anatoly Karpov.",
   "context": [
    "Garry Kimovich Kasparov is a Russian chess grandmaster, political activist and writer, who was the World Chess Champion from 1985 to 2000. His peak FIDE chess rating of 2851, achieved in 1999, was the highest recorded until being surpassed by Magnus Carlsen in 2013. From 1984 until his retirement from regular competitive chess in 2005, Kasparov was ranked the world's No. 1 player for a record 255 months overall. Kasparov also holds records for the most consecutive professional tournament victories (15) and Chess Oscars (11)."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1967,
   "text": "The first issue of Rolling Stone, an American magazine focusing on music, politics and popular culture, was published.",
   "context": [
    "Rolling Stone is an American monthly magazine that focuses on music, politics, and popular culture. It was founded in San Francisco, California, in 1967 by Jann Wenner and the music critic Ralph J. Gleason. It is described as left-leaning and liberal."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1939,
   "text": "World War II: A covert Sicherheitsdienst operation captured two British agents of the Secret Intelligence Service near Venlo in the Netherlands.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries were involved, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1938,
   "text": "Kristallnacht began as SA stormtroopers and civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of 30,000 men to concentration camps.",
   "context": [
    "Kristallnacht (German: [kʁɪsˈtalnaχt] ; lit. 'crystal night') or the Night of Broken Glass, also called the November pogrom(s) (German: Novemberpogrome ), was a pogrom against Jews carried out by the Nazi Party's Sturmabteilung (SA) and Schutzstaffel (SS) paramilitary forces along with some participation from the Hitler Youth and German civilians throughout Nazi Germany on 9–10 November 1938. The German authorities looked on without intervening. The euphemistic name Kristallnacht comes from the shards of broken glass that littered the streets after the windows of Jewish-owned stores, buildings, and synagogues were smashed. The pretext for the attacks was the assassination, on 9 November 1938, of the German diplomat Ernst vom Rath by Herschel Grynszpan, a 17-year-old German-born Polish Jew living in Paris."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1928,
   "text": "The Great Mecca Feast, the first documentary film on the Hajj, premiered in the Netherlands.",
   "context": [
    "The Great Mecca Feast is a 1928 silent documentary film by George Krugers. Divided into four acts, it opens with a group of Muslim men from the Dutch East Indies beginning the Hajj pilgrimage, then showcases elements of everyday life and worship in the Hejaz region of the Arabian Peninsula – including the Hajj itself. As Mecca had long been closed to non-Muslims, Krugers passed as a Muslim and recorded film and still-photographic documentation of the pilgrimage. In this endeavour, he was supported by people in both the Dutch East Indies and the Hejaz."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1926,
   "text": "Paul Hindemith's opera Cardillac (scene pictured) premiered at the Dresden State Opera, conducted by Fritz Busch.",
   "context": [
    "Paul Hindemith was a German and American composer, music theorist, teacher, violist, and conductor. He founded the Amar Quartet in 1921, touring extensively in Europe. As a composer, he became a major advocate of the Neue Sachlichkeit style of music in the 1920s, with compositions such as Kammermusik, including works with viola and viola d'amore as solo instruments in a neo-Bachian spirit. His other notable compositions include the song cycle Das Marienleben (1923), Der Schwanendreher for viola and orchestra (1935), the opera Mathis der Maler (1938) and the symphony Mathis der Maler (1934), the Symphonic Metamorphosis of Themes by Carl Maria von Weber (1943), and the oratorio When Lilacs Last in the Dooryard Bloom'd (1946), a requiem based on Walt Whitman's poem. Hindemith and his wife emigrated to Switzerland and the United States ahead of World War II, after worsening difficulties with the Nazi German regime. In his later years, he conducted and recorded much of his own music."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1918,
   "text": "The government of the Azerbaijan Democratic Republic adopted a tricolour national flag (pictured), which is again in use today, with slight modifications, by the present-day Republic of Azerbaijan.",
   "context": [
    "The Republic of Azerbaijan, better known in historiography as the Azerbaijan Democratic Republic, was the first secular democratic republic in the Turkic and Muslim worlds. The ADR was founded by the Azerbaijani National Council in Tiflis on 28 May 1918 after the collapse of the Transcaucasian Democratic Federative Republic, and ceased to exist on 28 April 1920. Its established borders were with Russia to the north, the Democratic Republic of Georgia to the north-west, the Republic of Armenia to the west, and Iran to the south. It had a population of around 3 million. Ganja was the temporary capital of the Republic as Baku was under Bolshevik control."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1914,
   "text": "World War I: Off the Cocos (Keeling) Islands, the Australian light cruiser Sydney sank Emden, the last active German warship in the Indian Ocean, at the Battle of Cocos.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I caused 15 to 22 million deaths, including those resulting from war crimes and genocides. The war also contributed to the spread of the Spanish flu pandemic. The conflict saw important developments in weaponry, including machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1913,
   "text": "A severe blizzard reached its maximum intensity in the Great Lakes Basin of North America, destroying 19 ships and 68,300 tons of cargo, and killing more than 250 people.",
   "context": [
    "The Great Lakes Storm of 1913, historically referred to as the Big Blow, the Freshwater Fury and the White Hurricane, was a blizzard with hurricane-force winds that devastated the Great Lakes region in the Midwestern United States and Southwestern Ontario, Canada, between November 7 and 10, 1913. The storm was at its most powerful on November 9, battering and overturning ships on four of the five Great Lakes, particularly Lake Huron."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1888,
   "text": "Mary Jane Kelly, widely believed to be the fifth and final victim of the notorious unidentified serial killer Jack the Ripper, was murdered in London.",
   "context": [
    "Mary Jane Kelly, also known as Marie Jeanette Kelly, Fair Emma, Ginger, Dark Mary and Black Mary, is widely believed by scholars to have been the final victim of the unidentified serial killer Jack the Ripper, who murdered at least five women in the Whitechapel and Spitalfields districts of London from late August to early November 1888. At the time of her death, Kelly was approximately 25 years old, working as a prostitute and living in relative poverty."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1822,
   "text": "USS Alligator engaged three pirate schooners off the coast of Cuba in one of the West Indies anti-piracy operations of the United States.",
   "context": [
    "USS Alligator was a schooner of the United States Navy that served from 1821 until her loss in 1822. Built at the Boston Navy Yard, she was commissioned in March 1821 under Lieutenant Robert F. Stockton. During two cruises off the west coast of Africa, Alligator operated against the Atlantic slave trade, capturing several slave ships. On her first cruise, Stockton and American Colonization Society representative Eli Ayers also negotiated the acquisition of territory around Cape Mesurado, which became an early centre of the settlement that developed into Liberia."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Eat your own dog food (לעשות דוגפודינג)"
 ]
}
</input>