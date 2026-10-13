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
   "text": "At the Chicago Marathon, Kenyan runner Brigid Kosgei (pictured) set the marathon world record for women running in a mixed-sex race.",
   "context": [
    "The 2019 Chicago Marathon was the 42nd annual running of the Chicago Marathon held in Chicago, Illinois, United States on October 13, 2019. The men's race was won by Kenyan Lawrence Cherono in 2:05:45 while the women's was won by Kenyan Brigid Kosgei in 2:14:04, a world record by 81 seconds. The men's and women's wheelchair races were won by Daniel Romanchuk and Manuela Schär in 1:30:26 and 1:41:08, respectively. More than 45,000 runners completed the race."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2016,
   "text": "The King of Thailand, Bhumibol Adulyadej, died after 70 years on the throne, at which point was the longest-reigning current monarch.",
   "context": [
    "The monarchy of Thailand is the constitutional form of government of Thailand. The king of Thailand is the head of state and head of the ruling Chakri dynasty."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2013,
   "text": "During the Hindu festival of Navaratri at a temple in Madhya Pradesh, India, rumours about an impending bridge collapse caused a stampede that resulted in 115 deaths.",
   "context": [
    "Navaratri is an annual Hindu festival that honours Shakti, the divine feminine power in Hinduism, through the worship of the nine forms of Goddess Durga, over a period of nine nights. The festival is celebrated in varying ways across the Hindu Indian cultural sphere."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 2011,
   "text": "The Dragon King of Bhutan, Jigme Khesar Namgyel Wangchuck (pictured) married Jetsun Pema at the Punakha Dzong.",
   "context": [
    "The King of Bhutan, officially the Druk Gyalpo, is the constitutional monarch and head of state of the Kingdom of Bhutan. In the Dzongkha language, Bhutan is known as Drukyul which translates as \"The Land of the Thunder Dragon\". Thus, while kings of Bhutan are known as Druk Gyalpo, the Bhutanese people call themselves the Drukpa, meaning \"people of Druk (Bhutan)\"."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1994,
   "text": "The Troubles: In a meeting at Fernhill House, Belfast, loyalist leader Gusty Spence announced that the Combined Loyalist Military Command would observe a ceasefire.",
   "context": [
    "The Troubles were an ethno-nationalist conflict in Northern Ireland that lasted from the late 1960s to 1998. Also known internationally as the Northern Ireland conflict, it is usually deemed to have ended with the Good Friday Agreement of 1998. Although centred in Northern Ireland, violence at times spilled into the Republic of Ireland, England, and mainland Europe. The conflict arose from political and nationalistic disputes with a strong ethnic and sectarian dimension. Unionists and loyalists, mostly Ulster Protestants, wanted Northern Ireland to remain in the United Kingdom, while Irish nationalists and republicans, mostly Irish Catholics, wanted it to join a united Ireland. Despite the division between Protestants and Catholics, it was not a religious war."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1972,
   "text": "Uruguayan Air Force Flight 571 crashed into a remote area in the Andes mountains near the border of Chile and Argentina; the 16 remaining survivors were not rescued until more than two months later.",
   "context": [
    "Uruguayan Air Force Flight 571 was the chartered flight of a Fairchild FH-227D from Montevideo, Uruguay, to Santiago, Chile, that crashed in the Andes mountains in Argentina on 13 October 1972. The accident and subsequent survival became known as both the Andes flight disaster and the Miracle of the Andes."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1961,
   "text": "Newly elected Burundian prime minister Louis Rwagasore was assassinated by his political rivals.",
   "context": [
    "Prince Louis Rwagasore was a Burundian prince and politician, who was the second prime minister of Burundi for two weeks, from 28 September 1961 until his assassination on 13 October."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1921,
   "text": "The Soviet republics of Russia, Armenia, Azerbaijan, and Georgia signed the Treaty of Kars with the Grand National Assembly of Turkey, establishing the current borders between Turkey and the Caucasian states.",
   "context": [
    "The Russian Soviet Federative Socialist Republic was a revolutionary, and later, communist state from 1917 to 1922, and afterwards the largest and most populous constituent republic of the Soviet Union (USSR) from 1922 to 1991, until becoming a sovereign part of the Soviet Union with priority of Russian laws over Union-level legislation in 1990 and 1991, the last two years of the existence of the USSR. The Russian SFSR was composed of sixteen smaller constituent units of autonomous republics, five autonomous oblasts, ten autonomous okrugs, six krais and forty oblasts. Russians formed the largest ethnic group. The capital of the Russian SFSR and the USSR as a whole was Moscow and the other major urban centers included Leningrad, Stalingrad, Novosibirsk, Sverdlovsk, Gorky and Kuybyshev."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1917,
   "text": "At least 30,000 people witnessed the Miracle of the Sun in the fields of Cova da Iria near Fátima, Portugal.",
   "context": [
    "The Miracle of the Sun, also known as the Miracle of Fátima, is a series of events reported to have occurred miraculously on 13 October 1917, attended by a large crowd who had gathered in Fátima, Portugal, in response to a prophecy made by three shepherd children, Lúcia Santos and Francisco and Jacinta Marto. The prophecy was that the Virgin Mary would appear and perform miracles on that date. Newspapers published testimony from witnesses who said that they had seen extraordinary solar activity, such as the Sun appearing to \"dance\" or zig-zag in the sky, advance towards the Earth, or emit multicolored light and radiant colors. According to these reports, the event lasted approximately ten minutes."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1911,
   "text": "Prince Arthur, a son of Queen Victoria, became the first Governor General of Canada of royal descent, as well as the first Prince of Great Britain and Ireland to hold that position.",
   "context": [
    "Prince Arthur, Duke of Connaught and Strathearn, was the seventh child and third son of Queen Victoria of the United Kingdom and Prince Albert of Saxe-Coburg and Gotha. He served as Governor General of Canada, the tenth since Canadian Confederation and the only British prince to do so."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1908,
   "text": "British suffragette Margaret Travers Symons became the first woman to speak in the House of Commons when she escaped from her escort into the chamber and shouted at the assembly.",
   "context": [
    "A suffragette was a member or supporter of the British Women's Social and Political Union (WSPU), an activist women's group agitating for votes for women, which in the early 20th century broke away from the much larger, peaceful and longer lasting National Union of Women's Suffrage Societies (NUWSS), whose supporters were known as suffragists. Both organisations campaigned for the right to vote in public elections in the United Kingdom. However, the Women's Social and Political Union, a women-only movement founded in 1903 by Emmeline Pankhurst, engaged in direct action and civil disobedience as a result of what they saw as slow progress towards universal suffrage. In 1906, a journalist writing in the Daily Mail coined the term suffragette for the WSPU, derived from suffragistα, reportedly to 'indicate that special revolutionary quality of impatience which marked the new variety of suffragist', although Elizabeth Crawford, a researcher and author on the women's suffrage movement, has suggested it was to 'belittle and to show that they were less than the proper kind of suffrage worker'. Whatever the truth was, the militants embraced the new name, even adopting it for use as the title of the newspaper published by the WSPU."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1814,
   "text": "War of 1812: After three days of fighting, the beached U.S. Revenue Cutter Service vessel Eagle was captured by the Royal Navy.",
   "context": [
    "The War of 1812 was a conflict initiated by the United States against the United Kingdom and its allies fought mainly in North America and at sea during the wider Napoleonic Wars. The United States declared war on Britain on 18 June 1812. Although peace terms were agreed upon in the December 1814 Treaty of Ghent, the war did not officially end until the peace treaty was ratified by the United States Senate on 17 February 1815."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1812,
   "text": "War of 1812: British troops and Mohawk warriors repelled an American invasion from across the Niagara River at the Battle of Queenston Heights near Queenston, Ontario.",
   "context": [
    "The War of 1812 was a conflict initiated by the United States against the United Kingdom and its allies fought mainly in North America and at sea during the wider Napoleonic Wars. The United States declared war on Britain on 18 June 1812. Although peace terms were agreed upon in the December 1814 Treaty of Ghent, the war did not officially end until the peace treaty was ratified by the United States Senate on 17 February 1815."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1773,
   "text": "French astronomer Charles Messier discovered the Whirlpool Galaxy (pictured), an interacting, grand design spiral galaxy located an estimated 31 million light-years away.",
   "context": [
    "Charles Messier was a French astronomer. He published an astronomical catalogue consisting of 110 nebulae and star clusters, which came to be known as the Messier objects, referred to with the letter M and their number between 1 and 110. Messier's purpose for the catalogue was to help astronomical observers distinguish between permanent and transient visually diffuse objects in the sky."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1710,
   "text": "Queen Anne's War: French and Wabanaki forces surrendered to end the Siege of Port Royal, giving the British permanent possession of Nova Scotia.",
   "context": [
    "Queen Anne's War (1702–1713) was the second in a series of French and Indian Wars fought in North America involving the colonial empires of Great Britain, France, and Spain. In the United States, it is regarded as a standalone conflict. Elsewhere it is viewed as the American theater of the War of the Spanish Succession. It is also known as the Third Indian War. In France it was known as the Second Intercolonial War."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1307,
   "text": "Agents of King Philip IV of France launched a raid on the Knights Templar at dawn, arresting many members, subsequently torturing them into giving false confessions and burning them at the stake.",
   "context": [
    "Philip IV, called Philip the Fair, was King of France from 1285 to 1314. By virtue of his marriage with Joan I of Navarre, he was also King of Navarre and Count of Champagne as Philip I from 1284 to 1305. Although Philip was known to be handsome, hence the epithet le Bel, his rigid, autocratic, imposing, and inflexible personality gained him other nicknames, such as the Iron King. His fierce opponent Bernard Saisset, bishop of Pamiers, said of him: \"He is neither man nor beast. He is a statue.\""
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 645,
   "text": "Goguryeo–Tang War: Led by Emperor Taizong, the Tang army was forced to abandon a siege of Ansi Fortress.",
   "context": [
    "The Goguryeo–Tang War occurred from 645 to 668 and was fought between Goguryeo and the Tang dynasty. During the course of the war, the two sides allied with various other states. Goguryeo successfully repulsed the invading Tang armies during the first Tang invasions of 645–648. After conquering Baekje in 660, Tang and Silla armies invaded Goguryeo from the north and south in 661, but were forced to withdraw in 662. In 666, Yŏn Kaesomun died and Goguryeo became plagued by violent dissension, numerous defections, and widespread demoralization. The Tang–Silla alliance mounted a fresh invasion in the following year, aided by the defector Yŏn Namsaeng. In late 668, exhausted from numerous military attacks and suffering from internal political chaos, Goguryeo and the remnants of Baekje army succumbed to the numerically superior armies of the Tang dynasty and Silla."
   ]
  }
 ],
 "recent_words_and_concepts": [
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