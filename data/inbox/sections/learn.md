Write the Learn Something Small section: exactly 2 short stories.

1. Word or concept of the day (kind "word"). Today's rotation: economics concept.
   - Choose something genuinely useful that isn't too basic for this reader. Don't repeat anything in recent_words_and_concepts.
   - headline: the term. For vocabulary, give the English word and its Hebrew equivalent.
   - scroll: a crisp definition.
   - coffee: an explanation with an example.
   - deep: 250-400 words (shorter than usual), covering origin or etymology, nuances, common confusions and usage examples.
   - source_refs: [].
2. On this day (kind "on_this_day").
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
   "year": 2006,
   "text": "Gol Transportes Aéreos Flight 1907 collided in mid-air with an Embraer Legacy business jet near Peixoto de Azevedo, Brazil, killing 154 people and triggering a national aviation crisis.",
   "context": [
    "On September 29, 2006, Gol Transportes Aéreos Flight 1907, a Boeing 737-800 on a scheduled domestic passenger flight from Manaus, Amazonas, to Brasília and Rio de Janeiro, collided mid-air with an Embraer Legacy 600 business jet flying on an opposite heading over the Brazilian state of Mato Grosso. The winglet of the Legacy sliced off about half of the 737's left wing, causing the 737 to break up and crash into an area of dense jungle, killing all 154 passengers and crew on board. Despite sustaining serious damage to its left wing and tail, the Legacy landed with its seven occupants uninjured."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 2005,
   "text": "John Roberts became the 17th Chief Justice of the United States; he would be the first Chief Justice to serve for twenty years since Melville Fuller in 1908.",
   "context": [
    "John Glover Roberts Jr. is an American jurist who has served since 2005 as the 17th chief justice of the United States. Though primarily an institutionalist, he has been described as having a moderate conservative judicial philosophy. Regarded as a swing vote in some cases, Roberts has presided over an ideological shift toward conservative jurisprudence on the high court, in which he has authored key opinions."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 2004,
   "text": "Archaeologists and volunteers began excavation of the remains of Fort Tanjong Katong in Singapore.",
   "context": [
    "Fort Tanjong Katong was a military fort in Tanjong Katong, Singapore. The fort stood from 1879 to 1901 and was one of the oldest military forts built by the former British colonial government of Singapore. Located on what is now the junction of Fort Road and Meyer Road, it is currently located and displayed at Katong Park. The fort used be garrisoned by the Singapore Volunteer Artillery Corps (SVA)."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1991,
   "text": "The award-winning Disney animated film Beauty and the Beast premiered while unfinished at the New York Film Festival.",
   "context": [
    "Walt Disney Animation Studios (WDAS), sometimes shortened to Disney Animation, is an American animation studio which produces animated feature films and short films for the Walt Disney Company. The studio's current production logo features a scene from its first synchronized sound cartoon, Steamboat Willie (1928). Founded on October 16, 1923, by brothers Walt and Roy O. Disney after the closure of Laugh-O-Gram Studio, it is the longest-running animation studio in the world. It is currently organized as a division of Walt Disney Studios and is headquartered at the Roy E. Disney Animation Building at the Walt Disney Studios lot in Burbank, California. Since its foundation, the studio has produced 64 feature films, from Snow White and the Seven Dwarfs (1937)—which is also the first hand-drawn animated feature film—to Zootopia 2 (2025), and hundreds of short films. The studio is one of Disney's three feature animation studios, alongside Pixar Animation Studios and 20th Century Animation."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1990,
   "text": "The Lockheed YF-22, the prototype for the F-22 Raptor, made its first flight.",
   "context": [
    "The Lockheed–Boeing–General Dynamics YF-22 is an American single-seat, twin-engine, stealth fighter prototype technology demonstrator designed for the United States Air Force (USAF). The design team, with Lockheed as the prime contractor, was a finalist in the USAF's Advanced Tactical Fighter (ATF) competition, and two prototypes were built for the demonstration and validation phase. The YF-22 team won the contest against the Northrop-led YF-23 team for full-scale development and the design was developed into the Lockheed Martin F-22. The YF-22 has a similar aerodynamic layout and configuration as the F-22, but with notable differences in the overall shaping such as the position and design of the cockpit, tail fins and wings, and in internal structural layout."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1964,
   "text": "Mafalda, a popular comic strip by Quino, was first published in newspapers in Argentina.",
   "context": [
    "Mafalda is an Argentine comic strip written and drawn by cartoonist Quino. The strip features a six-year-old girl named Mafalda, who reflects the Argentine middle class and progressive youth, is concerned about humanity and world peace, and has an innocent but serious attitude toward problems. The comic strip ran from 1964 to 1973 and was very popular in Latin America, Europe, Quebec, and Asia. Its popularity led to books and two animated cartoon series. Mafalda has been praised as masterful satire."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1963,
   "text": "The University of East Anglia (coat of arms featured) was founded in Norwich, England, after talk of establishing a university in the city began as early as the 19th century.",
   "context": [
    "The University of East Anglia (UEA) is a public research university in Norwich, England. Established in 1963 on a 360-acre (150-hectare) campus west of the city centre, the university has four faculties and twenty-six schools of study. It is one of five BBSRC funded research campuses, with forty businesses, four independent research institutes and a teaching hospital on site."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1957,
   "text": "An explosion at the Soviet nuclear reprocessing plant Mayak released 74 to 1,850 PBq of radioactive material.",
   "context": [
    "Nuclear reprocessing is the chemical separation of fission products and actinides from spent nuclear fuel. Originally, reprocessing was used to extract plutonium for producing nuclear weapons. With commercialization of nuclear power, reprocessed plutonium was recycled into MOX nuclear fuel for thermal reactors. Reprocessed uranium can in principle be re-used as fuel. Nuclear reprocessing may include the reprocessing of other nuclear reactor material, such as Zircaloy cladding."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1955,
   "text": "The first Indonesian legislative election resulted in an unexpectedly poor result for the Masyumi Party of incumbent prime minister Burhanuddin Harahap (pictured).",
   "context": [
    "Legislative elections were held in Indonesia on 29 September 1955 to elect all 257 members of the House of Representatives. They were the first national elections to be held in the country following independence and would see over 37 million votes cast in over 93 thousand polling stations. The election results were inconclusive, as no party was given a clear mandate. Following negotiations, Ali Sastroamidjojo was able to form a coalition government consisting of the Indonesian National Party, the Masyumi Party, and Nahdlatul Ulama."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1954,
   "text": "Willie Mays (pictured) of the New York Giants made The Catch, one of the most famous defensive plays in the history of Major League Baseball.",
   "context": [
    "Willie Howard Mays Jr., nicknamed \"the Say Hey Kid\", was an American professional baseball center fielder who played 23 major league seasons. Widely regarded as one of the greatest players of all time, Mays was a five-tool player who began his career in the Negro leagues, playing for the Birmingham Black Barons, and spent the rest of his career in the National League (NL), playing for the New York / San Francisco Giants and New York Mets."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1941,
   "text": "The Holocaust: Nazi forces, aided by Ukrainian collaborators, began a massacre of Jews in a ravine in Kyiv, killing more than 30,000 civilians in two days and thousands more in the following months.",
   "context": [
    "The Holocaust, known in Hebrew as the Shoah, was the genocide of European Jews during World War II. From 1941 to 1945, Nazi Germany and its collaborators systematically murdered around six million Jews across German-occupied Europe, approximately two-thirds of Europe's Jewish population. The murders were committed primarily through mass shootings across Eastern Europe and poison gas chambers in extermination camps, chiefly Auschwitz-Birkenau, Treblinka, Belzec, Sobibor, Chełmno and Majdanek death camps in occupied Poland. Concurrent Nazi persecutions killed millions of other non-Jewish civilians and prisoners of war (POWs); the term Holocaust is sometimes used to include the murder and persecution of non-Jewish groups, such as the Romani and Soviet POWs."
   ]
  },
  {
   "ref": "wikipedia#11",
   "year": 1940,
   "text": "During a Royal Australian Air Force training exercise over Brocklesby, two planes collided and interlocked in mid-air (pictured); the pilot of the upper plane was able to land safely using the lower plane's engines.",
   "context": [
    "The Royal Australian Air Force (RAAF) is the principal aerial warfare force of Australia, a part of the Australian Defence Force (ADF) along with the Royal Australian Navy and the Australian Army. Constitutionally, the governor-general of Australia is the de jure commander-in-chief of the Australian Defence Force. The Royal Australian Air Force is commanded by the Chief of Air Force (CAF), who is subordinate to the Chief of the Defence Force (CDF). The CAF is also directly responsible to the Minister for Defence, with the Department of Defence administering the ADF and the Air Force."
   ]
  },
  {
   "ref": "wikipedia#12",
   "year": 1923,
   "text": "The Mandate for Palestine came into effect, officially creating the protectorates of Mandatory Palestine under British administration and Transjordan as a separate emirate under King Abdullah I.",
   "context": [
    "The Mandate for Palestine was a League of Nations mandate for British administration of the territories of Palestine and Transjordan – which had been part of the Ottoman Empire for four centuries – following the defeat of the Ottoman Empire in World War I. Under the mandate, Britain assumed obligations both to the inhabitants of Palestine and to the establishment of a Jewish national home, as set out in the British government's 1917 Balfour Declaration. The mandate was assigned to Britain by the San Remo conference in April 1920, after France's concession in the 1918 Clemenceau–Lloyd George Agreement of the previously agreed \"international administration\" of Palestine under the Sykes–Picot Agreement. Transjordan was added to the mandate after the Arab Kingdom in Damascus was toppled by the French in the Franco-Syrian War. Civil administration began in Palestine and Transjordan in July 1920 and April 1921, respectively, and the mandate was in force from 29 September 1923 to 15 May 1948 and to 25 May 1946 respectively."
   ]
  },
  {
   "ref": "wikipedia#13",
   "year": 1918,
   "text": "World War I: The Battle of St Quentin Canal took place, which led to the British Fourth Army making the first breach of the German defensive Hindenburg Line.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also helped spread the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#14",
   "year": 1833,
   "text": "The Spanish American wars of independence ended with the death of King Ferdinand VII, with what had once been the Spanish Empire disintegrating into independent Latin American states.",
   "context": [
    "The Spanish American wars of independence were a series of conflicts across the Spanish Empire in the early 19th century. They began shortly after the outbreak of the Peninsular War and formed part of the broader Napoleonic Wars."
   ]
  },
  {
   "ref": "wikipedia#15",
   "year": 1760,
   "text": "The Williamsburg Bray School, the oldest-surviving school building in the U.S. dedicated to educating Black children, opened at Benjamin Franklin's suggestion.",
   "context": [
    "The Williamsburg Bray School was a school for free and enslaved Black children founded in 1760 in Williamsburg, Virginia. Opened at Benjamin Franklin's suggestion in 1760, the school educated potentially hundreds of students until its closure in 1774. The house it first occupied is believed to be the \"oldest extant building in the United States dedicated to the education of Black children\"."
   ]
  },
  {
   "ref": "wikipedia#16",
   "year": 1726,
   "text": "Johann Sebastian Bach led the first performance of Es erhub sich ein Streit, a cantata for Michaelmas.",
   "context": [
    "Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his prolific output across a variety of instruments and forms, including the orchestral Brandenburg Concertos; solo instrumental works such as the Cello Suites and Sonatas and Partitas for Solo Violin; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schübler Chorales and the Toccata and Fugue in D minor; and choral works such as the St. Matthew Passion and the Mass in B minor. He is known for his mastery of counterpoint, as heard in The Musical Offering and The Art of Fugue. Felix Mendelssohn precipitated the Bach Revival with a performance of the St. Matthew Passion in 1829. Ever since, Bach has been acclaimed as one of the greatest composers in the history of Western music."
   ]
  },
  {
   "ref": "wikipedia#17",
   "year": 1724,
   "text": "J. S. Bach led the first performance of Herr Gott, dich loben alle wir, BWV 130, based on Paul Eber's hymn in twelve stanzas, for the feast of archangel Michael.",
   "context": [
    "Johann Sebastian Bach was a German composer and musician of the late Baroque period. He is known for his prolific output across a variety of instruments and forms, including the orchestral Brandenburg Concertos; solo instrumental works such as the Cello Suites and Sonatas and Partitas for Solo Violin; keyboard works such as the Goldberg Variations and The Well-Tempered Clavier; organ works such as the Schübler Chorales and the Toccata and Fugue in D minor; and choral works such as the St. Matthew Passion and the Mass in B minor. He is known for his mastery of counterpoint, as heard in The Musical Offering and The Art of Fugue. Felix Mendelssohn precipitated the Bach Revival with a performance of the St. Matthew Passion in 1829. Ever since, Bach has been acclaimed as one of the greatest composers in the history of Western music."
   ]
  },
  {
   "ref": "wikipedia#18",
   "year": 1011,
   "text": "An army of Viking pirates that had besieged the English city of Canterbury for weeks took Archbishop Ælfheah prisoner and seized power.",
   "context": [
    "The siege of Canterbury was a major Viking raid on the city of Canterbury that occurred between 8 and 29 September 1011, fought between a Viking army led by Thorkell the Tall and the Anglo-Saxon defenders. The details of the siege are largely unknown, and most of the known events were recorded in the Anglo-Saxon Chronicle."
   ]
  }
 ],
 "recent_words_and_concepts": []
}
</input>