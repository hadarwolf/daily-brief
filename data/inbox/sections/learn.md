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
   "text": "Norwegian chess grandmaster Magnus Carlsen (pictured) defeated India's Viswanathan Anand to become world chess champion.",
   "context": [
    "Sven Magnus Øen Carlsen is a Norwegian chess grandmaster. Carlsen is a five-time World Chess Champion, reigning six-time World Rapid Chess Champion, reigning nine-time World Blitz Chess Champion and the reigning FIDE Freestyle Chess World Champion. Carlsen has held the No. 1 position in the FIDE rankings since 1 July 2011, the longest consecutive period, and trails only Garry Kasparov in time spent as the highest-rated player in the world. His peak Elo rating of 2882 is the highest rating achieved since FIDE adopted the system in 1970. He also holds the record for the longest unbeaten streak at the elite level in classical chess at 125 games."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2005,
   "text": "Elected by delegates in the newly assembled Bundestag four days after a federal election, Angela Merkel became the first female chancellor of Germany.",
   "context": [
    "The Bundestag is the federal parliament of Germany. It is the only constitutional body in the country directly elected by the German people. The Bundestag was established by Title III of the Basic Law for the Federal Republic of Germany in 1949 as one of the legislative bodies of Germany, the other being the Bundesrat."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1995,
   "text": "Toy Story, the first feature film created using only computer-generated imagery, was released in theaters in the United States.",
   "context": [
    "Toy Story is a 1995 American animated adventure comedy film directed by John Lasseter, and written by Joss Whedon, Andrew Stanton, Joel Cohen, and Alec Sokolow. The first entirely computer-animated feature film, as well as the first feature film produced by Pixar Animation Studios for Walt Disney Pictures, it stars the voices of Tom Hanks, Tim Allen, Annie Potts, John Ratzenberger, Don Rickles, Wallace Shawn, and Jim Varney. Set in a world in which toys come to life, Toy Story follows an old-fashioned cowboy doll named Woody (Hanks), who becomes jealous that a space cadet action figure, Buzz Lightyear (Allen), is replacing him as the favorite toy of their owner Andy."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1988,
   "text": "The B-2 Spirit stealth bomber of the United States Air Force was first displayed in public at Air Force Plant 42 in Palmdale, California.",
   "context": [
    "The Northrop B-2 Spirit is an American nuclear-capable subsonic stealth strategic bomber, often referred to as a \"stealth bomber\", solely operated by the United States Air Force. A four-engined flying wing and lambda wing with a crew of two to three, it is designed with stealth technology to penetrate sophisticated air defenses."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1987,
   "text": "Two television stations in Chicago had their broadcast signals hijacked with footage of an unknown person wearing a Max Headroom mask and costume.",
   "context": [
    "On November 22, 1987, two television stations based in Chicago, Illinois, were hijacked two hours apart from one another by unidentified perpetrators. Both hijackings briefly sent pirate broadcasts of an unidentified person wearing a Max Headroom mask and costume to thousands of homes in the Chicago metropolitan area."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1978,
   "text": "The serpent labret with articulated tongue (pictured articulating between positions), considered among the finest Aztec gold objects known to survive, was sold at Sotheby's.",
   "context": [
    "The serpent labret with articulated tongue is a gold-alloy body ornament from the Aztec culture of the mid-second millennium AD. Designed to be inserted into a piercing below the lower lip, it depicts a fanged serpent poised to strike, with a bifurcated tongue hanging from its mouth. The tongue, which is moveable and retractable, would have swung from side to side with its wearer's movements. Art historians have described it as an ingenious example of Aztec metalworking, and among the finest Aztec gold objects known to survive."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1975,
   "text": "Two days after the death of Francisco Franco, Juan Carlos I (pictured) was declared King of Spain according to the law of succession promulgated by Franco.",
   "context": [
    "Francisco Franco Bahamonde was a Spanish military general and the dictator of Spain from 1939 until his death in 1975. He had led the Nationalist forces in overthrowing the Second Spanish Republic during the Spanish Civil War from 1936 to 1939. This period in Spanish history, from the Nationalist victory to Franco's death, is commonly known as Francoist Spain."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1971,
   "text": "In Britain's worst mountaineering disaster, five teenage students and one of their leaders were found dead from exposure on the Cairngorm Plateau in the Scottish Highlands.",
   "context": [
    "The Cairngorm Plateau disaster, also known as the Feith Buidhe disaster, occurred in November 1971 when six fifteen-year-old students from Edinburgh's Ainslie Park High School and their two leaders embarked on a two-day navigational expedition in a remote area of the Cairngorms in the Scottish Highlands."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1968,
   "text": "The Beatles released their eponymous double album, popularly known as the White Album.",
   "context": [
    "The Beatles were an English rock band formed in Liverpool in 1960. The band comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band in popular music and were integral to the development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways. They also explored styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often portrayed as leaders of the era's youth and sociocultural movements."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1967,
   "text": "The United Nations Security Council unanimously adopted Resolution 242 in the aftermath of the Six-Day War between Israel and Egypt, Jordan, and Syria.",
   "context": [
    "The United Nations Security Council is one of the six principal organs of the United Nations, and is the United Nations' executive branch, having primary responsibility for the maintenance of international peace and security. Its powers, outlined in the UN Charter, include establishing peacekeeping operations, authorizing military action, and imposing international sanctions. Under Chapter VII of the UN Charter, the council may identify threats to international peace, determine breaches of that peace, and authorize responses up to and including the use of force. It is the only UN body with the authority to adopt binding international law by issuing resolutions binding on all member states. The council also recommends the admission of new member states to the UN General Assembly, and approves changes to the Charter. It is led by the president of the Security Council, who chairs its meetings and rotates between the current members on a monthly basis and the United Nations secretary-general who acts as its executive officer overseeing the implementation of its decisions and mandates. The United Nations secretary-general is empowered by the UN Charter to \"bring to the attention of the Security Council any matter which in his opinion may threaten the maintenance of international peace and security\"."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1963,
   "text": "John F. Kennedy was assassinated in Dallas; hours later, Vice President Lyndon B. Johnson was sworn in as the 36th president of the United States aboard Air Force One.",
   "context": [
    "John Fitzgerald Kennedy, also known as JFK, was the 35th president of the United States, serving from 1961 until his assassination in 1963. A member of the Democratic Party, he represented Massachusetts in both houses of the U.S. Congress before his presidency. Kennedy was the youngest elected president at 43 years, and the first Roman Catholic president."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1910,
   "text": "The crews of three Brazilian warships – all commissioned only months before – and several smaller vessels mutinied against perceived \"slavery\" being practised in the Brazilian Navy.",
   "context": [
    "A naval arms race between Argentina, Brazil, and Chile—the wealthiest and most powerful countries in South America—began in the early twentieth century when the Brazilian government ordered three dreadnoughts, formidable battleships whose capabilities far outstripped older vessels in the world's navies."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1873,
   "text": "The French steamship Ville du Havre collided with a Scottish iron clipper in the North Atlantic and sank with the loss of 226 lives.",
   "context": [
    "Ville du Havre was a French iron steamship that operated round trips between the northern coast of France and New York City. Launched in November 1865 under her original name of Napoléon III, she was converted from a paddle steamer to single propeller propulsion in 1871 and, in recognition of the recent defeat and removal from power of her imperial namesake, the Emperor Napoleon III, was renamed Ville du Havre. It was named after Le Havre, a major port city in the Normandy region of northern France."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1797,
   "text": "The Geisel School of Medicine, the fourth oldest medical school in the United States, was founded by the physician Nathan Smith.",
   "context": [
    "The Geisel School of Medicine is the medical school of Dartmouth College located in Hanover, New Hampshire. The fourth oldest medical school in the United States, it was founded in 1797 by New England physician Nathan Smith as the Dartmouth Medical School. It is one of the seven Ivy League medical schools."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1718,
   "text": "The pirate Blackbeard was killed in battle by a boarding party of British sailors off the coast of the Province of North Carolina.",
   "context": [
    "Edward Teach, better known as Blackbeard, was an English pirate who operated around the West Indies and the eastern coast of Britain's North American colonies. He remains one of history's most well-known pirates."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1635,
   "text": "Dutch colonial forces on Formosa launched a three-month pacification campaign against Taiwanese indigenous peoples.",
   "context": [
    "The island of Taiwan, also commonly known as Formosa, was partly under colonial rule by the Dutch Republic from 1624 to 1662. In the context of the Age of Discovery, the Dutch East India Company established its presence on Formosa to trade with neighboring Ming China and Tokugawa Japan, and to interdict Portuguese and Spanish trade and colonial activities in East Asia."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1574,
   "text": "Juan Fernández, a Spanish explorer, discovered an archipelago that now bears his name off the coast of Chile.",
   "context": [
    "Juan Fernández was a Spanish explorer and navigator in the Pacific regions of the Viceroyalty of Peru and Captaincy General of Chile west of colonial South America. He is best known for the discovery of a fast maritime route from Callao (Peru) to Valparaíso (Chile) as well as for the discovery of the Juan Fernández Islands off the coast of Chile."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1386,
   "text": "Turco-Mongol conqueror Timur captured and sacked the Georgian capital Tbilisi and forced King Bagrat V to convert to Islam.",
   "context": [
    "The Turco-Mongol or Turko-Mongol tradition was an ethnocultural synthesis that arose in Asia during the 13-14th century among the ruling elites of the Golden Horde and the Chagatai Khanate. The ruling Mongol elites of these khanates eventually assimilated into the Turkic populations that they conquered and ruled over, thus becoming known as Turco-Mongols. These elites gradually adopted Islam, as well as Turkic languages, while retaining Mongol political and legal institutions."
   ]
  }
 ],
 "recent_words_and_concepts": [
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
  "Herding cats (לרעות חתולים)"
 ]
}
</input>