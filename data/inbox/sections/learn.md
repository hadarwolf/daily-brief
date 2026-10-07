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
   "year": 2008,
   "text": "2008 TC3 exploded above the Nubian Desert in Sudan, in the first time that an asteroid impact had been predicted prior to atmospheric entry.",
   "context": [
    "2008 TC3 was an 80-tonne (80-long-ton; 90-short-ton), 4.1-meter (13 ft) diameter asteroid that entered Earth's atmosphere on October 7, 2008. It exploded at an estimated 37 kilometers (23 mi) above the Nubian Desert in Sudan. Some 600 meteorites, weighing a total of 10.5 kilograms (23.1 lb), were recovered; \n \nmany of these belonged to a rare type known as ureilites, which contain, among other minerals, nanodiamonds."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2006,
   "text": "Anna Politkovskaya (pictured), a Russian journalist and human-rights activist, was assassinated in the elevator of her apartment block in Moscow.",
   "context": [
    "Anna Stepanovna Politkovskaya was a Russian investigative journalist who reported on political and social events in Russia, in particular, the Second Chechen War (1999–2005). She was found murdered in the elevator of her apartment block in Moscow on 7 October 2006."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1991,
   "text": "Croatian War of Independence: The Yugoslav People's Army conducted an air strike on Banski Dvori, the official residence of the president of Croatia in Zagreb.",
   "context": [
    "The Croatian War of Independence was an armed conflict fought in Croatia from 1991 to 1995 between Croat forces loyal to the Government of Croatia—which had declared independence from the Socialist Federal Republic of Yugoslavia (SFRY)—and the Serb-controlled Yugoslav People's Army (JNA) and local Serb forces, with the JNA ending its combat operations by 1992."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1988,
   "text": "Near Point Barrow in Alaska, an Iñupiat hunter discovered three gray whales trapped in pack ice, which resulted in an international effort to free them.",
   "context": [
    "Point Barrow or Nuvuk is a headland on the Arctic coast in the U.S. state of Alaska, 9 miles (14 km) northeast of Utqiagvik. It is the northernmost point of all the territory of the United States, at 71°23′20″N 156°28′45″W, 1,122 nautical miles south of the North Pole."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1985,
   "text": "About 130 people died as a result of severe floods in Puerto Rico.",
   "context": [
    "The 1985 Puerto Rico floods produced showers and thunderstorms across the island and the deadliest single landslide on record on United States territory, that killed at least 130 people in the Mameyes neighborhood of barrio Portugués Urbano in Ponce. The floods were the result of a westward-moving tropical wave that emerged off the coast of Africa on September 29. The system moved into the Caribbean Sea on October 5 and produced heavy rains across Puerto Rico, peaking at 31.67 in (804 mm) in Toro Negro State Forest. Two stations broke their 24-hour rainfall records set in 1899. The rains caused severe flooding in the southern half of Puerto Rico, which isolated towns, washed out roads, and caused rivers to exceed their banks. In addition to the deadly landslide in Mameyes, the floods washed out a bridge in Santa Isabel that killed several people. The storm system caused about $125 million in damage and 180 deaths, which prompted a presidential disaster declaration. The tropical wave later spawned Tropical Storm Isabel."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1944,
   "text": "The Holocaust: Sonderkommando work-unit members in Auschwitz concentration camp revolted upon learning that they were due to be killed; although a few managed to escape, most were massacred on the same day.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1916,
   "text": "Georgia Tech defeated Cumberland University 222–0 in the most lopsided college football game in American history.",
   "context": [
    "The Georgia Tech Yellow Jackets football program represents the Georgia Institute of Technology in American football. The team competes in the Atlantic Coast Conference (ACC) of the Football Bowl Subdivision (FBS) level of the NCAA. Georgia Tech has fielded a team since 1892 and holds an all-time record of 773–550–43. The Yellow Jackets play at the historic Bobby Dodd Stadium at Hyundai Field in Atlanta, Georgia. The Yellow Jackets claim four national championships across four decades. The program has also won 16 conference titles."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1914,
   "text": "Japan captured Pohnpei from Germany, eventually leading to large-scale Japanese immigration to Micronesia.",
   "context": [
    "Pohnpei is an island of the Senyavin Islands which are part of the larger Caroline Islands group. It belongs to Pohnpei State, one of the four states in the Federated States of Micronesia (FSM). Major population centers on Pohnpei include Palikir, the FSM's capital, and Kolonia, the capital of Pohnpei State. Pohnpei is the largest island in the FSM, with an area of 334 km2 (129 sq mi), and a highest point of 782 m (2,566 ft), the most populous with 36,832 people, and the most developed single island in the FSM."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1914,
   "text": "Seven-year-old Theo Faiss, later memorialized in speeches by Rudolf Steiner and a sculpture (pictured) by Edith Maryon, was killed by an overturned wagon in Switzerland.",
   "context": [
    "Theodor Alberto Faiss was a boy whose death in Dornach, Switzerland, at the age of seven, was frequently invoked by the anthroposophist Rudolf Steiner as having spiritual significance. A well-liked child who frequently ran errands, Faiss was killed while doing so for Steiner's housekeeper when a horse-drawn wagon overturned on him. Steiner invoked Faiss's death in at least fifteen speeches and lectures thereafter, repeatedly terming it a karmically voluntary sacrifice that provided a protective spiritual sheath for the Goetheanum, the headquarters of the anthroposophical movement."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1878,
   "text": "The state funeral of Mindon Min (pictured), who ruled Myanmar for 25 years, took place; his death was reportedly preceded by strange omens, and his senior princes were unable to attend as they had all been arrested.",
   "context": [
    "Mindon Min, the tenth king of the Konbaung Kingdom, died in Mandalay Palace at the age of 64 on the afternoon of 1 October 1878. A mourning period of seven days preceded his funeral, which took place on 7 October. His son Thibaw was proclaimed the new monarch by the Hluttaw."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1868,
   "text": "Ōdate, the last castle of the Satake clan in Japan's Tōhoku region, was captured during the Boshin War.",
   "context": [
    "The Satake clan  was a Japanese samurai clan that claimed descent from the Minamoto clan. Its first power base was in Hitachi Province. The clan was subdued by Minamoto no Yoritomo in the late 12th century, but later entered Yoritomo's service as vassals. In the Muromachi period, the Satake served as Governor (shugo) of Hitachi Province, under the aegis of the Ashikaga shogunate. The clan sided with the Western Army during the Battle of Sekigahara, and was punished by Tokugawa Ieyasu, who moved it to a smaller territory in northern Dewa Province at the start of the Edo period. The Satake survived as lords (daimyō) of the Kubota Domain. Over the course of the Edo period, two major branches of the Satake clan were established, one ruled the fief of Iwasaki, the other one the fief of Kubota-Shinden."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1849,
   "text": "American writer Edgar Allan Poe  died under mysterious circumstances at Washington Medical College four days after being found on the streets of Baltimore, Maryland, in a delirious and incoherent state.",
   "context": [
    "Edgar Allan Poe was an American writer, poet, editor, and literary critic who is best known for his poetry and short stories, particularly his tales involving mystery and the macabre. He is widely regarded as one of the central figures of Romanticism and Gothic fiction in the United States and of early American literature."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1840,
   "text": "William II became King of the Netherlands after his father William I abdicated the throne.",
   "context": [
    "William II was King of the Netherlands, Grand Duke of Luxembourg, and Duke of Limburg from 1840 until his death."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1800,
   "text": "The French privateer Robert Surcouf led a 150-man crew to capture the 40-gun, 437-man East Indiaman Kent.",
   "context": [
    "A privateer is a private person or vessel which engages in commerce raiding under a commission of war. Since piracy was a common aspect of seaborne trade, until the early 19th century all merchant ships carried arms. A sovereign or delegated authority issued commissions, also referred to as letters of marque, during wartime. The commission empowered the holder to carry on all forms of hostility permissible at sea by the usages of war. This included attacking foreign vessels and taking them as prizes and taking crews prisoner for exchange. Captured ships were subject to condemnation and sale under prize law, with the proceeds divided by percentage between the privateer's sponsors, shipowners, captains and crew. A percentage share usually went to the issuer of the commission. Most colonial powers, as well as other countries, engaged in privateering."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1780,
   "text": "American Revolutionary War: Patriots and Loyalist militias engaged each other at the Battle of Kings Mountain in South Carolina.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1763,
   "text": "King George III issued a royal proclamation that forbade British settlement of much of newly acquired French territory in North America, reserving the land for indigenous peoples.",
   "context": [
    "George III was King of Great Britain and Ireland from 25 October 1760 until his death in 1820. He was concurrently duke and prince-elector of Hanover in the Holy Roman Empire before becoming King of Hanover on 12 October 1814. He was the first monarch of the House of Hanover who was born in Great Britain, spoke English as his first language, and never visited Hanover."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1571,
   "text": "Ottoman–Habsburg wars: The Battle of Lepanto was fought near the Gulf of Corinth, a significant setback for the Ottoman Empire and the last major naval battle fought entirely with galleys.",
   "context": [
    "The Ottoman–Habsburg wars were fought from the 16th to the 18th centuries between the Ottoman Empire and the Habsburg monarchy, which was at times supported by the Kingdom of Hungary, Polish–Lithuanian Commonwealth, the Holy Roman Empire, and Habsburg Spain. The wars were dominated by land campaigns in Hungary, including Transylvania and Vojvodina, Croatia, and central Serbia."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1513,
   "text": "War of the League of Cambrai: A Venetian army under Bartolomeo d'Alviano was decisively defeated by the Spanish army commanded by Ramón de Cardona and Fernando d'Ávalos.",
   "context": [
    "The War of the League of Cambrai, also known by its second stage as the War of the Holy League, was fought from December 1508 to December 1516, as part of the wider Italian Wars of 1494–1559. The main participants of the war, who fought for its entire duration, were France, the Holy Roman Empire, the Papal States, and the Republic of Venice; they were joined at various times by nearly every significant power in Western Europe, including Spain, England, the Duchy of Milan, the Republic of Florence, the Duchy of Ferrara, and the Swiss."
   ]
  }
 ],
 "recent_words_and_concepts": [
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