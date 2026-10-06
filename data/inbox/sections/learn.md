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
   "text": "The MESSENGER probe discovered Mercury's Rembrandt (pictured) – the second largest impact crater on the planet.",
   "context": [
    "MESSENGER was a NASA robotic space probe that orbited the planet Mercury between 2011 and 2015, studying Mercury's chemical composition, geology, and magnetic field. The name is an acronym for Mercury Surface, Space Environment, Geochemistry, and Ranging, and a reference to the messenger god Mercury from Roman mythology."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2002,
   "text": "Al-Qaeda bombed the oil tanker Limburg, causing oil to leak into the Gulf of Aden.",
   "context": [
    "Al-Qaeda is a pan-Islamist militant organization led by Sunni Islamist jihadists who self-identify as a vanguard spearheading a global Islamist revolution to unite the Muslim world under a supra-national Islamic caliphate. Its membership is primarily composed of Arabs, with additional representation from other ethnic groups. Al-Qaeda has mounted attacks on civilian and military targets of the U.S. and its allies; such as the 1998 U.S. embassy bombings, the USS Cole bombing, and the September 11 attacks. It has been designated a terrorist organization by the United Nations and over two dozen countries around the world."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2000,
   "text": "Denouncing corruption in Argentine president Fernando de la Rúa's administration and the Senate, Vice President Carlos Álvarez resigned.",
   "context": [
    "Fernando de la Rúa was an Argentine politician who served as the president of Argentina from 1999 until his resignation in 2001. A member of the Radical Civic Union, he previously served as national senator for Buenos Aires across non-consecutive terms from 1973 to 1996, national deputy for Buenos Aires from 1991 to 1992, the first Chief of Government of Buenos Aires between 1996 and 1999, and president of the National Committee of the Radical Civic Union from 1997 to 1999."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1998,
   "text": "Matthew Shepard, a gay college student, was attacked and fatally wounded near Laramie, Wyoming, U.S., dying six days later.",
   "context": [
    "Matthew Wayne Shepard was an American student at the University of Wyoming who was beaten, tortured, and left to die near Laramie on October 6, 1998. He was transported by rescuers to Poudre Valley Hospital in Fort Collins, Colorado, where he died six days later from severe head injuries sustained during the attack."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1995,
   "text": "Astronomers Michel Mayor and Didier Queloz reported the discovery of a planet orbiting 51 Pegasi as the first known exoplanet around a main-sequence star.",
   "context": [
    "Michel Gustave Édouard Mayor is a Swiss astrophysicist and professor emeritus at the University of Geneva's Department of Astronomy. He formally retired in 2007, but remains active as a researcher at the Observatory of Geneva. He is co-laureate of the 2019 Nobel Prize in Physics along with Jim Peebles and Didier Queloz, and the winner of the 2010 Viktor Ambartsumian International Prize and the 2015 Kyoto Prize."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1989,
   "text": "About 200 members of the San Francisco Police Department instigated a police riot in the Castro following a peaceful protest held by the political group ACT UP.",
   "context": [
    "The Castro Sweep was a police riot that occurred in the Castro District of San Francisco on the evening of October 6, 1989. The riot, by about 200 members of the San Francisco Police Department (SFPD), followed a protest held by ACT UP, a militant direct action group responding to the concerns of people with AIDS."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1985,
   "text": "Police constable Keith Blakelock was killed during rioting in the Broadwater Farm housing estate in Tottenham, London.",
   "context": [
    "Keith Henry Blakelock QGM was a British police officer who served as a London Metropolitan Police constable. He was murdered on 6 October 1985 during the Broadwater Farm riot in Tottenham. The riot broke out after Cynthia Jarrett died of heart failure during a police search of her home, and took place against a backdrop of unrest in several English cities and a breakdown of relations between the police and some people in the black community."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1981,
   "text": "Egyptian president Anwar Sadat (pictured) was assassinated while attending a parade in Cairo to mark the eighth anniversary of the Crossing of the Bar Lev Line at the start of the 1973 Arab-Israeli War.",
   "context": [
    "Muhammad Anwar es-Sadat was an Egyptian politician and military officer who was the third president of Egypt from 1970 until his assassination in 1981. A former member of the Free Officers movement, Sadat was vice president under Gamal Abdel Nasser on two occasions and assumed the office on Nasser's death in 1970."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1976,
   "text": "Two bombs placed by the CIA-linked Cuban dissident group Coordination of United Revolutionary Organizations exploded on Cubana Flight 455, killing all 73 people aboard.",
   "context": [
    "The Coordination of United Revolutionary Organizations was a militant group responsible for a number of terrorist activities directed at the Cuban government following the Cuban Revolution. It was founded by a group that included Orlando Bosch and Luis Posada Carriles, both of whom worked with the CIA at various times, and was composed chiefly of Cuban exiles opposed to the Castro government. It was formed in 1976 as an umbrella group for a number of anti-Castro militant groups. Its activities included a number of bombings and assassinations, including the killing of human-rights activist Orlando Letelier in Washington, D.C. in collaboration with Chilean secret police DINA, and the bombing of Cubana Flight 455 which killed 73 people."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1973,
   "text": "The Egyptian Armed Forces crossed the Suez Canal (pictured) to attack occupying Israeli forces at the Bar Lev Line in the Sinai Peninsula, beginning the Yom Kippur War.",
   "context": [
    "The Egyptian Armed Forces are the military forces of the Arab Republic of Egypt. The Chief of Staff of the Armed Forces directs (a) Egyptian Army forces, (b) the Egyptian Navy, (c) Egyptian Air Force and (d) Egyptian Air Defense Forces. The Chief of Staff directly supervises army field forces, without any separate Egyptian Army headquarters."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1973,
   "text": "The Egyptian Armed Forces crossed the Suez Canal (pictured) to attack occupying Israel Defense Forces at the Bar Lev Line in the Sinai Peninsula, beginning the Yom Kippur War.",
   "context": [
    "The Egyptian Armed Forces are the military forces of the Arab Republic of Egypt. The Chief of Staff of the Armed Forces directs (a) Egyptian Army forces, (b) the Egyptian Navy, (c) Egyptian Air Force and (d) Egyptian Air Defense Forces. The Chief of Staff directly supervises army field forces, without any separate Egyptian Army headquarters."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1934,
   "text": "Catalonia's autonomous government, led by Lluís Companys (pictured), declared a general strike, an armed insurgency, and the establishment of the Catalan State in reaction to the inclusion of conservatives in the Spanish republican regime.",
   "context": [
    "Catalonia is an autonomous community of Spain, designated as a nationality by its Statute of Autonomy. Its territory is situated on the northeast of the Iberian Peninsula, to the south of the Pyrenees mountain range. Catalonia is administratively divided into four provinces or eight vegueries (regions), which are in turn divided into 43 comarques. The capital and largest city, Barcelona, is the second-most populous municipality in Spain and the fifth-most populous urban area in the European Union."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1927,
   "text": "The Jazz Singer, one of the first feature-length motion pictures with a synchronized recorded music score, was released.",
   "context": [
    "The Jazz Singer is a 1927 American part-talkie musical drama film directed by Alan Crosland and produced by Warner Bros. Pictures. It is the first feature-length motion picture with both synchronized recorded music and lip-synchronous singing and speech. Its release heralded the commercial ascendance of sound films and effectively marked the end of the silent film era with the Vitaphone sound-on-disc system, featuring six songs performed by Al Jolson. Based on the 1925 play of the same title by Samson Raphaelson, the plot was adapted from his short story \"The Day of Atonement\"."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1908,
   "text": "Austria-Hungary announced the annexation of Bosnia and Herzegovina, causing a crisis that permanently damaged the country's relations with the Russian Empire and the Kingdom of Serbia.",
   "context": [
    "Austria-Hungary, also referred to as the Austro-Hungarian Empire and officially as the Austro-Hungarian Monarchy, was a multi-national empire in Central Europe under a constitutional dual monarchy that existed between 1867 and 1918. A military and diplomatic real union, it consisted of two largely self governing states with a single monarch who was titled both the Emperor of Austria and the Apostolic King of Hungary. Austria-Hungary constituted the last phase in the constitutional evolution of the Habsburg monarchy: it was formed with the Austro-Hungarian Compromise of 1867 in the aftermath of the Austro-Prussian War, following wars of independence by Hungary in opposition to Habsburg rule. It was dissolved shortly after Hungary terminated the union with Austria in 1918 at the end of World War I."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1777,
   "text": "American Revolutionary War: Fort Clinton and Fort Montgomery were captured by British forces under Sir Henry Clinton, dismantling the Hudson River Chains.",
   "context": [
    "The American Revolutionary War, also known as the Revolutionary War or American War of Independence or simply the American Revolution, was the armed conflict that comprised the final eight years of the broader American Revolution, in which American Patriot forces organized as the Continental Army and, commanded by George Washington, defeated the British Army. The conflict was fought in North America, the Caribbean, and the Atlantic Ocean. The war's outcome seemed uncertain for most of the war, but Washington and the Continental Army's decisive victory in the Siege of Yorktown in 1781 led King George III and the Kingdom of Great Britain to negotiate an end to the war. In 1783, in the Treaty of Paris, the British monarchy acknowledged the independence of the Thirteen Colonies, leading to the establishment of the United States as an independent and sovereign nation."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1762,
   "text": "Seven Years' War: The Battle of Manila concluded with a British victory over Spain, leading to a twenty-month occupation.",
   "context": [
    "The Seven Years' War, 1756 to 1763, was a global war fought by numerous great powers, primarily in Europe, with significant subsidiary campaigns in North America and the Indian subcontinent. The primary warring states were Great Britain and Prussia fighting against France and Austria, with other countries joining these coalitions: Portugal, Spain, Sweden, and Russia, plus Saxony and many other minor states of the Holy Roman Empire. Related conflicts include the Third Silesian War, French and Indian War, Third Carnatic War, Anglo-Spanish War (1762–1763), and Spanish–Portuguese War."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 618,
   "text": "Transition from Sui to Tang: Wang Shichong's army defeated Li Mi's forces at the Battle of Yanshi, allowing Wang to consolidate power and soon depose China's Sui dynasty.",
   "context": [
    "The transition from Sui to Tang (613–628), or simply the Sui-Tang transition, was the period of Chinese history between the end of the Sui dynasty and the start of the Tang dynasty. The Sui dynasty's territories were carved into a handful of short-lived states by its officials, generals, and agrarian rebel leaders. A process of elimination and annexation followed that ultimately culminated in the consolidation of the Tang dynasty by the former Sui general Li Yuan. Near the end of the Sui, Li Yuan installed the puppet child emperor Yang You. Li later executed Yang and proclaimed himself Emperor Gaozu of the new Tang dynasty."
   ]
  }
 ],
 "recent_words_and_concepts": [
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