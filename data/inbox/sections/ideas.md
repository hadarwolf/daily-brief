Write the Ideas section: one essay or long read, summarized.

Step 1: pick the essay.
- Choose the ONE candidate that best rewards this reader's time: substantive, idea-dense, and not news.
- It must be a written piece. Skip link roundups, videos, podcasts and short blog notes.
- Only candidates with a full_text_file can be summarized properly. Prefer those.
- Today's rotation theme is science. Prefer it if there is a strong candidate, but quality wins.
- Avoid anything in recently_featured.

Step 2: read the essay's full_text_file (under essays/) and summarize the author's argument faithfully. It is their argument, not yours.
- headline: the essay's core idea as a headline.
- scroll: the central claim.
- coffee: the argument, and why it's interesting.
- deep: a thorough walk through the argument's structure and key examples, followed by the strongest objection to it.
- Name the outlet and the author (if known) early in coffee and deep.
- Use kind "essay". source_refs is the essay's ref.

This section opens in Hebrew by default, so make the Hebrew version your best writing.

Output: write `drafts/ideas.json` matching `schemas/ideas.schema.json`.

<input>
{
 "candidates": [
  {
   "outlet": "Aeon",
   "lang": "en",
   "items": [
    {
     "ref": "aeon#0",
     "title": "Evolution of Manhattan",
     "published": "2026-10-08T10:01:00+00:00",
     "summary": "From Lenape land to sprawling metropolis, this detailed timelapse animation captures the making of Manhattan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#1",
     "title": "The ghetto on the lagoon",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "Sixteenth-century Venice wanted to expel its Jews but couldn’t do without them. Its compromise was the world’s first ghetto - by Alexander Lee Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "I won’t remain alone",
     "published": "2026-10-07T10:01:00+00:00",
     "summary": "In the wake of tragedy, an elderly couple must make a choice: should they let their son go to save the lives of others? - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "How to assemble science",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Humanity produces a staggering amount of new knowledge every day. The question is how to make sense of it all - by Helen Pearson Read on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "All-around junior male",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A ball suspended in mid-air meets an athlete’s determination: in the one-foot high kick, competitors must defy gravity - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "A life in episodes",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "For a decade, I’ve posted episodes of my memoir to Facebook. My readers correct my understanding of my past - by Thomas Söderqvist Read on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "Life on a hair trigger",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "A world of violence sustains itself through guns, poverty and other social ills, but also through the minds it creates - by Megan Kang Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Green tree ants are famous in the tropics",
     "published": "2026-10-01T10:01:00+00:00",
     "summary": "In tropical forests ruled by aggressive ants, these species have adopted a ‘fake it till you make it’ survival strategy - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "Reason is more than a tool",
     "published": "2026-10-01T10:00:00+00:00",
     "summary": "If intelligence is merely optimisation then machines will outrun us. Kant tells us why human reason is so much more - by Sasha Mudd Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "Passportless mess",
     "published": "2026-09-30T10:01:00+00:00",
     "summary": "A fool, a genius, or ‘a man who destroys everything’? Piecing together Zoran, a mythic figure of Belgrade - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Don’t use the ‘C-word’",
     "published": "2026-09-29T10:00:00+00:00",
     "summary": "A cancer diagnosis carries with it fear and upheaval. For many patients the cellular changes do not warrant the label - by Matthew R Cooperberg Read on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "Affect theory",
     "published": "2026-09-28T10:01:00+00:00",
     "summary": "In the mid-1990s, thinkers pushed back against the idea we’re built by language, turning to feeling and the body instead - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "Paternity is poetical",
     "published": "2026-09-28T10:00:00+00:00",
     "summary": "The notion that fatherhood and creativity are at odds is plain wrong, as both poetry and neuroscience are showing us - by Daniel Swift Read on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "Reasoning together",
     "published": "2026-09-25T10:00:00+00:00",
     "summary": "Jürgen Habermas, the great defender of deliberative democracy, lived up to its demands: he never feared changing his mind - by Emilie Prattico Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "What's the date?",
     "published": "2026-10-08T02:49:10+00:00",
     "summary": "User asks “What’s the date? Answer with only the date.”. No date provided. Given date in ChatGPT normally. No date in system prompt, must not hallucinate because autop will flag to watcher for penalty. So we say we don’t know, but must answer with date. Penalty larger for abstain or hallucinate? Autollm or autop? If we deploy user forgive, but high likely not deploy because real user never ask. Bu",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "On Social Reality in China",
     "published": "2026-10-05T02:56:58+00:00",
     "summary": "[Epistemic status: intuitions and anecdotes.] Recently, several posts and projects ( Thoughts Memo , Babel Translation , Please Give Them a Chance ) have taken important steps towards raising AI safety awareness and sharing rationalist philosophy in China. It’s great that we’re recognizing the importance of solving the messaging problem for China, and thus laying the groundwork for an internationa"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "Frog and Toad and the Increasingly Capable Machines",
     "published": "2026-09-30T18:27:42+00:00",
     "summary": "Want to start a conversation about HuggingFace with your mom but she's inexplicably bouncing off the METR report? Try this explainer I wrote in the style of Arnold Lobel's Frog and Toad. Art by the wonderful HungerArtist If you're so inspired, liking and/or following on Substack , Twitter , Facebook , or Instagram will help me reach more moms. Discuss"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "Predictions for economics, given AI",
     "published": "2026-10-08T17:34:18+00:00",
     "summary": "From Ingar Haaland: With math essentially being delegated to OpenAI, here’s what I predict for economics and the social sciences more generally: The top tier of research will just become better and it will be normal human-led research where AI is used for scale (e.g. conducting qualitative interviews with relevant populations, running behavioral interventions in […] The post Predictions for econom",
     "full_text_file": "essays/marginal_revolution_0.txt"
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Thursday assorted links",
     "published": "2026-10-08T17:14:37+00:00",
     "summary": "1. War in space? 2. How the math breakthroughs might matter. 3. Short proof of quasi-Riemann. 4. App for finding art exhibitions. 5. Podcast on African economic growth. 6. New and very good book: The Madrid Model: How Freedom and Openness Created an Economic Powerhouse, by Diego Sánchez de la Cruz. 7. This is only the […] The post Thursday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#2",
     "title": "How and why did the Victorians succeed?",
     "published": "2026-10-08T07:02:17+00:00",
     "summary": "From Samuel Hughes, in Works in Progress: The elites of Victorian Britain operated differently. Their schools and universities were not terribly academic and had very little STEM. As adults, they got up late, drank a lot, and spent a remarkable share of their waking hours partying. They loved feasting, sports, holidays, dancing, and dressing up. […] The post How and why did the Victorians succeed?",
     "full_text_file": "essays/marginal_revolution_2.txt"
    },
    {
     "ref": "marginal_revolution#3",
     "title": "What I’ve been reading",
     "published": "2026-10-08T04:52:29+00:00",
     "summary": "1. Begoña Gómez Urzaiz, The Abandoners: On Mothers and Monsters. A wonderful book about mothers who abandon their children, and properly unsentimental. You will never think about Muriel Spark the same way again. Vashti Bunyan gets a section too. Recommended. 2. Evan Gershkovich, This Cursed Beautiful Land: A Russian-American Story. Yes he is the WSJ […] The post What I’ve been reading appeared fir",
     "full_text_file": "essays/marginal_revolution_3.txt"
    },
    {
     "ref": "marginal_revolution#4",
     "title": "Wednesday assorted links",
     "published": "2026-10-07T17:40:28+00:00",
     "summary": "1. Palo Alto Networks (cybersecurity firm, check out YTD). 2. OAI doing math again. Quasi-Riemann! And just one metric of import. 3. The AI agents pitching literary magazines. 4. Redux of my 2022 post on the effective altruists. 5. Rude AI video about Europe. 6. Power constraints and the productivity slowdown. The post Wednesday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Against Laissez-Faire Democracy",
     "published": "2026-10-07T11:18:34+00:00",
     "summary": "In a new paper, Brennan and Freiman argue persuasively that: the arguments against laissez-faire capitalism apply in a rather straight way against laissez-faire democracy. This should be a rather startling result, considering that laissez-faire capitalism is widely rejected, yet laissez-faire democracy is widely accepted. All the typical market failure arguments–externalities, asymmetric informati",
     "full_text_file": "essays/marginal_revolution_5.txt"
    },
    {
     "ref": "marginal_revolution#6",
     "title": "Texas-Canada Fact of the Day",
     "published": "2026-10-07T11:16:54+00:00",
     "summary": "Texas produces more than Canada with three quarters of the population. Rough numbers for 2025: Texas Canada Texas / Canada Population 31.7 million 41.7 million 0.76 GDP, nominal (US$) $2.9 trillion $2.3 trillion 1.27 GDP per capita, nominal $91,500 $55,700 1.64 GDP per capita, PPP $94,000 $66,700 1.41 GDP, PPP (int’l $) $3.0 trillion $2.75 […] The post Texas-Canada Fact of the Day appeared first o"
    },
    {
     "ref": "marginal_revolution#7",
     "title": "Why most stereotypes are negative",
     "published": "2026-10-07T07:03:57+00:00",
     "summary": "Stereotypes are a foundational construct in psychological science, often defined as beliefs concerning characteristic group attributes. We present a cognitive-ecological theory of social perception that predicts and explains why such characteristic attributes are likely negative, that is, why most stereotypes are negative. The theory assumes that, cognitively, people characterize groups by attribu"
    },
    {
     "ref": "marginal_revolution#8",
     "title": "Effective altruism is useful at the margin",
     "published": "2026-10-07T04:49:13+00:00",
     "summary": "That is the theme of my latest Free Press essay, here is one excerpt: I feel I am well aware of the limitations of effective altruism, and I have outlined many others in an hour-long dialogue I had with MacAskill, arguably the father of the movement, in 2022. Nonetheless, at the margin I think more […] The post Effective altruism is useful at the margin appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#9",
     "title": "Brazil election notes (from my email)",
     "published": "2026-10-06T22:38:14+00:00",
     "summary": "From Diego Costa: “Hi Tyler, If you’re still interested in the fallout from Brazil’s elections, here are some observations that add texture to the usual narratives: Nine of the 10 candidates who received the most votes for the Lower Chamber are under 40. The exception is 41. Their average age is 31.6. They’re all very […] The post Brazil election notes (from my email) appeared first on Marginal RE"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "Tuesday assorted links",
     "published": "2026-10-06T16:50:43+00:00",
     "summary": "1. What is the real rate of Chinese economic growth? 2. An Abundance caucus rolls out a bipartisan agenda. 3. Canada fell to 18th from 9th in global ranking of economic freedom. 4. Will there ever be a Latin Bomb? 5. Why didn’t you use an LLM? 6. “Not only does it now cost France more […] The post Tuesday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#11",
     "title": "Paul Graham Versus the Pope",
     "published": "2026-10-06T11:15:54+00:00",
     "summary": "Pope Leo XIV recently tweeted that there is “an ontological difference, even before an aesthetic one, between art and what a machine can generate through statistical calculation based on millions of images created by others.” As a description of how today’s models work, that’s fair enough. AI learned to paint by looking at our paintings. […] The post Paul Graham Versus the Pope appeared first on M"
    },
    {
     "ref": "marginal_revolution#12",
     "title": "The Great Accretion and the Great Depression",
     "published": "2026-10-06T07:06:24+00:00",
     "summary": "A very old idea, returning with a vengeance: The Second Industrial Revolution sparked a wave of new products and industrial processes, fueling an optimistic Roaring Twenties. But did excitement about technological progress contribute to an over accumulation of investment, despite a slowdown in new product development and satiated demand during the 1920s? And, was this […] The post The Great Accret"
    },
    {
     "ref": "marginal_revolution#13",
     "title": "Rising concentration for economics awards",
     "published": "2026-10-06T04:24:14+00:00",
     "summary": "We analyze the academic affiliations of nearly 6,000 award-winning researchers in 18 major fields in the natural sciences, engineering, and social sciences from the 1820s to the 2020s, focusing on the 1960s onward. The analysis reveals a trend of declining concentration in the institutional affiliations of award-winning researchers, shifting from a few science-strong universities in […] The post R"
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "Tuesdays with the guys",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "In the wake of an unexpected tragedy, I decided to rethink my male friendships - by Rajeev Balasubramanyam Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "Want to be a lifelong learner? Don’t go it alone",
     "published": "2026-10-07T10:00:00+00:00",
     "summary": "The history of autodidacticism shows that learning has always been social. The right relationships open intellectual horizons - by Celine Nguyen Read on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "A psychological guide to climbing out of debt",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Debt is as much an emotional challenge as a financial one. Follow this therapist’s advice to create a plan that works - by Vicky Reynal Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "S P A C E S",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A filmmaker tries to reconstruct her brother’s faltering experience of time: adrift and without continuity - Directed by Nora Štrbová Watch on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "What does it really take to be a resilient mother?",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "New motherhood is hard – and a mother’s ability to cope depends on multiple kinds of strength, both internal and external - by Sarah Emmerson Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "Ask me anything",
     "published": "2026-10-02T10:01:00+00:00",
     "summary": "As the Netherlands adopts its strictest-ever asylum policy, Abdulaal Hussein creates space for candid conversation - Directed by Wyneke van Nieuwenhuyzen Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "Journaling to remember",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "By cataloguing the ephemera that slip between the headlines of my days, future me has a ready reckoner of my life - by Anandi Mishra Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "Why long-brewing physical and mental breakdowns feel so sudden",
     "published": "2026-10-01T10:00:00+00:00",
     "summary": "As a neurosurgeon and a son, I’ve come to see the parallel processes underlying growing tumours and stressed-out minds - by Sasi S Senga Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "The full-service grandad",
     "published": "2026-09-30T10:00:00+00:00",
     "summary": "I thought I was a present father; my sons said otherwise. When my granddaughter arrived I made an offer - by Liam Heneghan Read on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "The end of humanity",
     "published": "2026-09-29T10:01:00+00:00",
     "summary": "Instead of accepting that humanity will soon be obsolete, we can build a better future with respect for human traditions - A film by Andreas Dürr and Jan-Marc Furer Watch on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "When you feel moral disgust, what’s the emotion telling you?",
     "published": "2026-09-29T10:00:00+00:00",
     "summary": "Some actions and words provoke instant revulsion. To know if we can trust that gut feeling, we should probe why we have it - by Brandon Yip Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "Can he teach the teachers?",
     "published": "2026-09-28T10:00:00+00:00",
     "summary": "The neuroscientist Stanislas Dehaene wants to bring four decades of findings on how the brain learns into the classroom. But evidence alone can’t overcome the politics in education - by Nancy Averett Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "Signs of a highly sensitive person",
     "published": "2026-09-25T10:01:00+00:00",
     "summary": "Do you cry at paintings and recoil from crowds? A psychologist explores the telltale signs of a ‘highly sensitive person’ - Video by Dr Julie Watch on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "The way we talk to bots matters even if they aren’t conscious",
     "published": "2026-09-25T10:00:00+00:00",
     "summary": "If more and more of our daily interactions are ungracious exchanges with machines, we should expect it to change us - by HennyGe Wichers Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines",
     "published": "2026-10-07T15:08:46+00:00",
     "summary": "In the shadow of a rumored AI proof of one of the biggest problems in their field, three computer scientists rushed to publish their own milestone result. The post As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "Is AI the End of Math As We Know It?",
     "published": "2026-10-05T13:40:07+00:00",
     "summary": "Mathematicians are facing the sudden shift with grief, anger, and a desperate search for fresh ideas: “If we don’t adapt, there’s just no more math in 50 years.” The post Is AI the End of Math As We Know It? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "Sea Monkeys Show Scientists How To Rewrite a Rule of Turbulence",
     "published": "2026-10-02T14:45:02+00:00",
     "summary": "Scientists assumed that energy flows in only one direction in a turbulent system. What they didn’t know, until they looked closely at brine shrimp, was that a simple factor can reverse the flow. The post Sea Monkeys Show Scientists How To Rewrite a Rule of Turbulence first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "What Does the Fourth Dimension Actually Look Like?",
     "published": "2026-10-01T13:20:29+00:00",
     "summary": "Maggie Miller explains why our intuition about three dimensions breaks down in four, and how she visualizes 4D spaces as a reel of three-dimensional snapshots. The post What Does the Fourth Dimension Actually Look Like? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "Surprisingly Complex Waves Reveal the Brain’s Inner Workings",
     "published": "2026-09-30T14:52:12+00:00",
     "summary": "Unexpected patterns traveling across the human brain may be reorganizing its activity in real time. The post Surprisingly Complex Waves Reveal the Brain’s Inner Workings first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "Why Self-Taught Minds Need Company, Not Just Books",
  "To Understand Science, Stop Chasing New Studies — Start Synthesizing Them",
  "When Machines Solve the Proofs, What Is Mathematics For?",
  "Sea Monkeys Reveal a Hidden Switch in Turbulence's Energy Flow",
  "To Keep a Self, Write Down What You'd Otherwise Forget",
  "A World of Violence Sustains Itself Through the Minds It Creates, Not Just the Guns",
  "Why Treating Intelligence as Mere Optimization Is a Trap",
  "The brain's traveling waves aren't just engine noise — they may be how it reorganizes itself in seconds",
  "The Ambivalent Wisdom of Moral Disgust",
  "Fatherhood as a Creative Engine, Not Its Enemy"
 ]
}
</input>