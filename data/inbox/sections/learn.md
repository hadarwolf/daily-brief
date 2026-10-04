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
   "year": 1943,
   "text": "World War II: Allied forces executed Operation Leader, an air raid against German shipping near Bodø, Norway.",
   "context": [
    "World War II, or the Second World War, was a global conflict between two coalitions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many engaging in total war on an unprecedented scale. World War II was the deadliest conflict in history, causing the deaths of 60 to 75 million people, a majority of whom were civilians. Millions died as a result of massacres, starvation, disease, and genocides including the Holocaust. After the Allied victory, Germany, Austria, Japan, and Korea were occupied, and German and Japanese leaders were tried for war crimes."
   ]
  },
  {
   "ref": "wikipedia#1",
   "year": 1941,
   "text": "Willie Gillis, one of Norman Rockwell's trademark characters, debuted on the cover of The Saturday Evening Post.",
   "context": [
    "Willie Gillis, Jr. is a fictional character created by Norman Rockwell for a series of World War II paintings that appeared on the covers of 11 issues of The Saturday Evening Post between 1941 and 1946. Gillis was an everyman with the rank of private whose career was tracked on the cover of the Post from induction through discharge without being depicted in battle. He and his girlfriend were modeled by two of Rockwell's acquaintances."
   ]
  },
  {
   "ref": "wikipedia#2",
   "year": 1927,
   "text": "Gutzon Borglum and approximately 400 workers began sculpting Mount Rushmore.",
   "context": [
    "John Gutzon de la Mothe Borglum was an American sculptor best known for his work on Mount Rushmore. He is also associated with various other public works of art across the U.S., including Stone Mountain in Georgia, statues of Union General Philip Sheridan in Washington, D.C., and in Chicago, as well as a bust of Abraham Lincoln exhibited in the White House by Theodore Roosevelt and now held in the United States Capitol crypt in Washington, D.C."
   ]
  },
  {
   "ref": "wikipedia#3",
   "year": 1925,
   "text": "Great Syrian Revolt: Rebels led by Fawzi al-Qawuqji captured the city of Hama from the French Mandate of Syria.",
   "context": [
    "The Great Syrian Revolt, also known as the Revolt of 1925, was a general uprising across the State of Syria and Greater Lebanon during the period of 1925 to 1927. The leading rebel forces initially comprised fighters of the Jabal Druze State in southern Syria, and were later joined by Sunni, Druze and Shiite and factions all over Syria. The common goal was to end French occupation in the newly mandated regions, which passed from Ottoman to French administration following World War I."
   ]
  },
  {
   "ref": "wikipedia#4",
   "year": 1918,
   "text": "First World War: The Japanese merhant ship Hirano Maru was sunk by a German submarine in the Celtic Sea with the loss of 291 lives.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also helped spread the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#5",
   "year": 1917,
   "text": "First World War: The Allies devastated the German defence at the Battle of Broodseinde, prompting a crisis among German commanders and causing a severe loss of morale in the 4th Army.",
   "context": [
    "World War I, or the First World War, also known as the Great War, was a global conflict between two coalitions: the Allies and the Central Powers. One of the deadliest conflicts in history, World War I resulted in an estimated 15 to 22 million deaths, including those in war crimes and genocides. The war also helped spread the Spanish flu pandemic. The conflict saw important developments in weaponry, including the first large-scale use of machine guns, artillery, aircraft, chemical weapons, and tanks."
   ]
  },
  {
   "ref": "wikipedia#6",
   "year": 1876,
   "text": "Texas A&M University opened as the first public institution of higher education in the U.S. state.",
   "context": [
    "Texas A&M University is a public land-grant research university in College Station, Texas, United States. It was founded in 1876 and became the flagship institution of the Texas A&M University System in 1948. Since 2021, Texas A&M has enrolled the largest student body in the United States. It is classified among \"R1: Doctoral Universities – Very high research activity\" and since 2001 has been a member of the Association of American Universities."
   ]
  },
  {
   "ref": "wikipedia#7",
   "year": 1862,
   "text": "American Civil War: After a naval battle in Galveston Harbor, Texas, Confederate commanders negotiated the surrender of the city to Union forces.",
   "context": [
    "The American Civil War was a civil war in the United States between the Union and the Confederacy, which was formed in 1861 by states that had seceded from the Union to preserve slavery in the United States. The South saw slavery as threatened because of the election of Abraham Lincoln and the growing abolitionist movement in the North. The war ended with Union victory, the dissolution of the Confederacy and the abolition of slavery, freeing four million African Americans."
   ]
  },
  {
   "ref": "wikipedia#8",
   "year": 1633,
   "text": "Smolensk War: Forces from the Polish–Lithuanian Commonwealth broke the Russian siege of Smolensk (depicted).",
   "context": [
    "The Smolensk War (1632–1634) was fought between the Polish–Lithuanian Commonwealth and Russia."
   ]
  },
  {
   "ref": "wikipedia#9",
   "year": 1448,
   "text": "Skanderbeg and Gjergj Arianiti signed a peace treaty to end the Albanian–Venetian War.",
   "context": [
    "Gjergj Kastrioti was an Albanian nobleman and military leader who led the League of Lezhë in the Ottoman-Albanian Wars until his death. Skanderbeg is considered to be a major figure of medieval Albanian history and today is the national hero of Albania."
   ]
  },
  {
   "ref": "wikipedia#10",
   "year": 1363,
   "text": "Red Turban Rebellions: The rebel leader Zhu Yuanzhang won the Battle of Lake Poyang by deploying ships intentionally set aflame when the emperor tried to escape.",
   "context": [
    "The Red Turban Rebellions were uprisings against the Yuan dynasty between 1351 and 1368, eventually leading to its collapse. Remnants of the Yuan imperial court retreated northwards and is thereafter known as the Northern Yuan in historiography."
   ]
  }
 ],
 "recent_words_and_concepts": [
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