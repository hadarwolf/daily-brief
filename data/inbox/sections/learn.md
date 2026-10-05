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
   "year": 2014,
   "text": "Formula One racing driver Jules Bianchi crashed at the Japanese Grand Prix, sustaining fatal head injuries that would kill him the following year.",
   "context": [
    "Jules Lucien André Bianchi was a French racing driver who competed in Formula One from 2013 to 2014."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2011,
   "text": "Two Chinese cargo ships were attacked and their crews murdered on a stretch of the Mekong River in far northern Thailand.",
   "context": [
    "The Mekong River massacre occurred on the morning of 5 October 2011, when two Chinese cargo ships were attacked on a stretch of the Mekong River in the Golden Triangle region on the borders of Myanmar (Burma) and Thailand. All 13 crew members on both ships were killed and dumped in the river. It was the deadliest attack on Chinese nationals abroad in modern times. In response, China temporarily suspended shipping on the Mekong, and reached an agreement with Myanmar, Thailand and Laos to jointly patrol the river. The event was also the impetus for the Naypyidaw Declaration and other anti-drug cooperation efforts in the region. On 28 October 2011, Thai authorities arrested nine Pha Muang Task Force soldiers, who subsequently \"disappeared from the justice system\". Drug lord Naw Kham and three subordinates were eventually tried and executed by the Chinese government for their roles in the massacre."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2000,
   "text": "Colour revolutions: During protests over irregularities in the Yugoslavian general election, a wheel-loader was driven into the Radio Television of Serbia building, giving the protests the nickname \"Bulldozer Revolution\".",
   "context": [
    "The colour revolutions are a series of often non-violent protests and accompanying changes of government and society taking place in post-Soviet states and the former Yugoslavia during the 21st century. The aim of the colour revolutions is to establish Western-style democracies. They were primarily triggered by election results widely viewed as falsified. The colour revolutions are marked by the use of the internet as a method of communication, as well as a strong role of non-governmental organizations in the protests."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1999,
   "text": "Two trains collided head-on in Ladbroke Grove, London, killing 31 people, injuring 417, and severely damaging public confidence in the management and regulation of safety of Britain's privatised railway system.",
   "context": [
    "The Ladbroke Grove rail crash occurred on 5 October 1999 at Ladbroke Grove in London, England, when a Thames Trains passenger train passed a signal at danger, colliding almost head-on with a First Great Western passenger train. With 31 people killed and 417 injured, it was one of the worst rail accidents in 20th-century British history."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1994,
   "text": "Swiss police found the bodies of 48 members of the Order of the Solar Temple, who had died in a cult mass murder-suicide.",
   "context": [
    "The Order of the Solar Temple, or simply the Solar Temple, was a new religious movement and secret society, often described as a cult, notorious for the mass deaths of many of its members in several mass murders and suicides throughout the 1990s. The OTS was a neo-Templar order, claiming to be a continuation of the Knights Templar, and incorporated an eclectic range of beliefs with aspects of Rosicrucianism, Theosophy, and New Age ideas. It was led by Joseph Di Mambro, with Luc Jouret as a spokesman and second in command. It was founded in 1984, in Geneva, Switzerland."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1988,
   "text": "During the United States vice-presidential debate, Democratic candidate Lloyd Bentsen told his opponent Dan Quayle, \"Senator, you're no Jack Kennedy.\"",
   "context": [
    "Lloyd Millard Bentsen Jr. was an American politician who served as the 69th United States secretary of the treasury under President Bill Clinton from 1993 to 1994. He served as a United States senator from Texas from 1971 to 1993 and was the Democratic Party nominee for vice president in 1988 on the Michael Dukakis ticket."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1986,
   "text": "Eugene Hasenfus's plane was shot down by Nicaraguan forces while carrying weapons to the Contra rebels on behalf of the U.S. government; he was subsequently captured, leading to an international controversy.",
   "context": [
    "Eugene Haines Hasenfus was a United States Marine who helped fly weapons shipments on behalf of the U.S. government to the right-wing rebel Contras in Nicaragua. The sole survivor after his plane was shot down by the Nicaraguan government in 1986, he was sentenced to 30 years in prison for terrorism and other charges, but pardoned and released the same year. The statements of admission he made to the Sandinista government resulted in a controversy in the U.S. government after the Reagan administration denied any connection to him."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1963,
   "text": "The U.S. suspended the Commercial Import Program, its main economic support for South Vietnam, in response to the oppression of Buddhists by President Ngô Đình Diệm (pictured).",
   "context": [
    "The Commercial Import Program, sometimes known as the Commodity Import Program (CIP), was an economic aid arrangement between South Vietnam and its main supporter, the United States. It lasted from January 1955 until the Fall of Saigon in 1975 and the dissolution of South Vietnam following the invasion by North Vietnam after US forces had withdrawn from the country due to the 1973 cease-fire agreement."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1962,
   "text": "\"Love Me Do\", the first single by the Beatles, was released in the United Kingdom.",
   "context": [
    "\"Love Me Do\" is the debut single by the English rock band the Beatles, backed by \"P.S. I Love You\". When the single was originally released in the United Kingdom on 5 October 1962, it peaked at number 17. It was released in the United States in 1964 and topped the nation's song chart. Re-released in 1982 as part of EMI's Beatles 20th anniversary, it re-entered the UK charts and peaked at number 4. \"Love Me Do\" also topped the charts in Australia and New Zealand."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1962,
   "text": "Dr. No, the first James Bond film, was released.",
   "context": [
    "Dr. No is a 1962 spy film and the first film in the James Bond series, starring Sean Connery as the fictional MI6 agent James Bond. Co-starring Ursula Andress, Joseph Wiseman and Jack Lord, it was directed by Terence Young and adapted by Richard Maibaum, Johanna Harwood, and Berkely Mather from the 1958 novel by Ian Fleming. The film was produced by Harry Saltzman and Albert R. Broccoli of Eon Productions, a partnership that continued until 1975. In the film, James Bond is sent to Jamaica to investigate the disappearance of a fellow British agent. The trail leads him to the underground base of Dr. No, who is plotting to disrupt an early American space launch from Cape Canaveral with a radio beam weapon."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1937,
   "text": "Six days after retiring from the Queen's College, Oxford, Robert Howard Hodgkin was elected its provost due to the sudden death of B. H. Streeter.",
   "context": [
    "The Queen's College is a constituent college of the University of Oxford, England. The college was founded in 1341 by Robert de Eglesfield in honour of Philippa of Hainault, queen of England. It is distinguished by its predominantly neoclassical architecture, primarily dating from the 18th century."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1936,
   "text": "Around 200 men began a 291-mile (468 km) march from Jarrow to London, carrying a petition to the British government requesting the re-establishment of industry in the town.",
   "context": [
    "The Jarrow March of 5–31 October 1936, also known as the Jarrow Crusade, was an organised protest against the unemployment and poverty suffered in the English town of Jarrow during the 1930s. Around 200 men, or \"Crusaders\" as they preferred to be called, marched from Jarrow to London, carrying a petition to the British government requesting the re-establishment of industry in the town following the closure in 1934 of its main employer, Palmer's shipyard. The petition was received by the House of Commons but not debated, and the march produced few immediate results. The Jarrovians went home believing that they had failed."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1903,
   "text": "Samuel Griffith (pictured) became the first Chief Justice of Australia, while Edmund Barton and Richard O'Connor became the first Puisne Justices of the High Court of Australia.",
   "context": [
    "Sir Samuel Walker Griffith was an Australian judge and politician who served as the inaugural Chief Justice of Australia, in office from 1903 to 1919. He also served a term as Chief Justice of Queensland and two terms as Premier of Queensland, and played a key role in the drafting of the Australian Constitution."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1869,
   "text": "During construction of the Eastman tunnel in St. Anthony, Minnesota (now Minneapolis), the Mississippi River broke through the tunnel's limestone ceiling, nearly destroying Saint Anthony Falls.",
   "context": [
    "The Eastman tunnel, also called the Hennepin Island tunnel, was a 2,000-foot-long (600 m) underground passage in Saint Anthony, Minnesota, dug beneath the Mississippi River riverbed between 1868 and 1869 to create a tailrace so water-powered business could be located upstream of Saint Anthony Falls on Nicollet Island. The tunnel ran downstream from Nicollet Island, beneath Hennepin Island, and exited below Saint Anthony Falls."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1838,
   "text": "A Cherokee band attacked settlers near Larissa, Texas, killing or abducting 18 people.",
   "context": [
    "The Cherokee or Tsalagi people are one of the Indigenous peoples of the Southeastern Woodlands of the United States. Prior to the 18th century, they were concentrated in their ancestral homelands, living in towns along river valleys in what is now southwestern North Carolina, southeastern Tennessee, southwestern Virginia, parts of western South Carolina, northern Georgia, and northeastern Alabama, with hunting grounds extending into Kentucky. Together, these lands encompassed approximately 40,000 square miles."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1789,
   "text": "French Revolution: Upset about the high price and scarcity of bread, thousands of Parisian women and allies marched (pictured) on the Palace of Versailles.",
   "context": [
    "The French Revolution was a period of political and societal change in France that began with the Estates General of 1789 and ended with the Coup of 18 Brumaire on 9 November 1799. Many of the revolution's ideas are considered fundamental principles of liberal democracy, and its values remain central to modern French political discourse. It was caused by a combination of social, political, and economic factors which the existing regime proved unable to manage."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 869,
   "text": "The Fourth Council of Constantinople, the eighth Catholic Ecumenical Council, was convened to discuss the patriarchate of Photios I of Constantinople.",
   "context": [
    "The Fourth Council of Constantinople was the eighth ecumenical council of the Catholic Church held in Constantinople from 5 October 869, to 28 February 870. It was attended by over 103 bishops. In contrast, the pro-Photian council of 879–80 was attended by 383 bishops. The Council met in ten sessions from October 869 to February 870 and issued 27 canons."
   ]
  }
 ],
 "recent_words_and_concepts": [
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