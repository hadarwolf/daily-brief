Write the Ideas section: one essay or long read, summarized.

Step 1: pick the essay.
- Choose the ONE candidate that best rewards this reader's time: substantive, idea-dense, and not news.
- It must be a written piece. Skip link roundups, videos, podcasts and short blog notes.
- Only candidates with a full_text_file can be summarized properly. Prefer those.
- Today's rotation theme is psychology. Prefer it if there is a strong candidate, but quality wins.
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
     "title": "Africa’s cultural landmarks: tombs of Buganda kings",
     "published": "2026-10-12T10:01:00+00:00",
     "summary": "Built from vegetal materials, these majestic tombs housing Buganda kings bridge the realms of living and dead in Uganda - by Aeon Video Watch on Aeon",
     "full_text_file": "essays/aeon_0.txt"
    },
    {
     "ref": "aeon#1",
     "title": "Is everything conscious?",
     "published": "2026-10-12T10:00:00+00:00",
     "summary": "If the question makes no sense to you, try spending some time with the principle of sufficient reason - by Sam Kimpton-Nye Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "Barbara Ward’s vision",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "She was among the first to argue that prosperity, equality and the protection of nature are inseparable planetary goals - by Or Rosenboim Read on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Evolution of Manhattan",
     "published": "2026-10-08T10:01:00+00:00",
     "summary": "From Lenape land to sprawling metropolis, this detailed timelapse animation captures the making of Manhattan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "The ghetto on the lagoon",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "Sixteenth-century Venice wanted to expel its Jews but couldn’t do without them. Its compromise was the world’s first ghetto - by Alexander Lee Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "I won’t remain alone",
     "published": "2026-10-07T10:01:00+00:00",
     "summary": "In the wake of tragedy, an elderly couple must make a choice: should they let their son go to save the lives of others? - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "How to assemble science",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Humanity produces a staggering amount of new knowledge every day. The question is how to make sense of it all - by Helen Pearson Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "All-around junior male",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A ball suspended in mid-air meets an athlete’s determination: in the one-foot high kick, competitors must defy gravity - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "A life in episodes",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "For a decade, I’ve posted episodes of my memoir to Facebook. My readers correct my understanding of my past - by Thomas Söderqvist Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "Life on a hair trigger",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "A world of violence sustains itself through guns, poverty and other social ills, but also through the minds it creates - by Megan Kang Read on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Green tree ants are famous in the tropics",
     "published": "2026-10-01T10:01:00+00:00",
     "summary": "In tropical forests ruled by aggressive ants, these species have adopted a ‘fake it till you make it’ survival strategy - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "Reason is more than a tool",
     "published": "2026-10-01T10:00:00+00:00",
     "summary": "If intelligence is merely optimisation then machines will outrun us. Kant tells us why human reason is so much more - by Sasha Mudd Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "Passportless mess",
     "published": "2026-09-30T10:01:00+00:00",
     "summary": "A fool, a genius, or ‘a man who destroys everything’? Piecing together Zoran, a mythic figure of Belgrade - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "Don’t use the ‘C-word’",
     "published": "2026-09-29T10:00:00+00:00",
     "summary": "A cancer diagnosis carries with it fear and upheaval. For many patients the cellular changes do not warrant the label - by Matthew R Cooperberg Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "A critical look at Lean4",
     "published": "2026-10-11T18:34:40+00:00",
     "summary": "Lots of the discussion around Lean certificates and trust centers around general philosophical ideas of how much humans should trust formal certificates. It's important to remember, though, that Lean4 is not an ideal formal certificate machine: Lean4 is a software in its infancy and has issues. There are reasonable reasons to specifically not trust Lean4. If we're going to be putting our society's",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "What's the date?",
     "published": "2026-10-08T02:49:10+00:00",
     "summary": "User asks “What’s the date? Answer with only the date.”. No date provided. Given date in ChatGPT normally. No date in system prompt, must not hallucinate because autop will flag to watcher for penalty. So we say we don’t know, but must answer with date. Penalty larger for abstain or hallucinate? Autollm or autop? If we deploy user forgive, but high likely not deploy because real user never ask. Bu"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "On Social Reality in China",
     "published": "2026-10-05T02:56:58+00:00",
     "summary": "[Epistemic status: intuitions and anecdotes.] Recently, several posts and projects ( Thoughts Memo , Babel Translation , Please Give Them a Chance ) have taken important steps towards raising AI safety awareness and sharing rationalist philosophy in China. It’s great that we’re recognizing the importance of solving the messaging problem for China, and thus laying the groundwork for an internationa"
    },
    {
     "ref": "lesswrong_curated#3",
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
     "title": "The Nobel Prize Goes to Robert Hall and Michael Woodford",
     "published": "2026-10-12T10:06:32+00:00",
     "summary": "More soon! The post The Nobel Prize Goes to Robert Hall and Michael Woodford appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Okie-dokie, Casey Handmer edition",
     "published": "2026-10-12T04:20:47+00:00",
     "summary": "I’ve been prototyping an automated peer review project. With current models you get human level peer review for about $0.10 of tokens. For $5 you can rederive every result, check every statistical inference, and audit every paper cited in both directions. There are about 100m papers in the scientific corpus. Most are not important. Many […] The post Okie-dokie, Casey Handmer edition appeared first"
    },
    {
     "ref": "marginal_revolution#2",
     "title": "Sunday assorted links",
     "published": "2026-10-11T16:17:20+00:00",
     "summary": "1. Was Leonardo da Vinci Jewish? 2. Twenty things to listen to in classical music. 3. Ezra Klein and Arvind Narayanan on AI as a normal technology (NYT). 4. Gans and Acemoglu on AI. 5. The return of Audrey Niffenegger. 6. Podcasts as the new form of comedy? (New Yorker) 7. PC on Dostoyevsky. The post Sunday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#3",
     "title": "Sky Roomba!",
     "published": "2026-10-11T11:14:21+00:00",
     "summary": "I bought a robot window cleaner. I have some high windows which need a ladder just to get the bottom and with this I can just start the robot at the bottom, it cleans the window and then returns to the start point. The bot cost me considerably less than it would have cost to […] The post Sky Roomba! appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#4",
     "title": "What should I ask Fuchsia Dunlop?",
     "published": "2026-10-11T08:52:47+00:00",
     "summary": "Yes I will be doing a fourth (!) Conversation with her, based in part on her forthcoming book Five Tastes: Delicious Recipes for Chinese Flavors. I am sure it is excellent, and will read it very soon. Her works are not just great cookbooks, they are among the best books period. Here are my previous […] The post What should I ask Fuchsia Dunlop? appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#5",
     "title": "The economics of agents",
     "published": "2026-10-11T04:56:43+00:00",
     "summary": "From Patrick Collison: Assorted things I’ve been mulling over regarding agents in the economy: • Companies are in some sense the original superintelligence. It’s often the case that they can use their amortized cognitive surplus to advance their interests against those of certain consumers: relative to the optimization capacity of companies, consumers can be inattentive, […] The post The economics"
    },
    {
     "ref": "marginal_revolution#6",
     "title": "Saturday assorted links",
     "published": "2026-10-10T16:34:52+00:00",
     "summary": "1. Claes Backman’s practical AI for academics. 2. Platypus Economics on red diesel. 3. Those new service sector jobs, Indian cricket edition. 4. Will AI make us more technocratic? 5. What should a scientific paper look like? 6. Screening for twins? 7. Chris Wickham, RIP. The post Saturday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#7",
     "title": "Earth facts of the day",
     "published": "2026-10-10T07:31:46+00:00",
     "summary": "Global call center headcount is 5.3% below its December 2023 peak, ending more than a decade of growth. It has fallen year over year for eight straight quarters, a decline that started in high-income countries and coincided with the rise of AI chatbots. Call center support is falling behind other white-collar work in the same […] The post Earth facts of the day appeared first on Marginal REVOLUTIO"
    },
    {
     "ref": "marginal_revolution#8",
     "title": "California in-migration and out-migration",
     "published": "2026-10-10T04:26:55+00:00",
     "summary": "Long-run U.S. population movements have been driven more by natural amenities than by jobs, and California, rich in both uniform and complementary climates, should be a persistent net gainer of domestic migrants. It has instead lost residents to other states every year since about 1990. This paper argues that its amenities are unchanged and that […] The post California in-migration and out-migrati"
    },
    {
     "ref": "marginal_revolution#9",
     "title": "The origin of risk",
     "published": "2026-10-09T18:20:57+00:00",
     "summary": "From the QJE, by Alexandr Kopytov, Mathieu Taschereau-Dumouchel, and Zebang Xu: We propose a tractable model in which risk, at both the micro and macro levels, is endogenous and driven by incentives. In the model, each firm chooses the mean and the variance of its productivity process, as well as how it covaries with the productivity of other […] The post The origin of risk appeared first on Margi"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "Ethiopia update",
     "published": "2026-10-09T16:24:04+00:00",
     "summary": "Ethiopia is the center of the world right now as it has returned to war. Ethiopian forces retook Mekelle from rebel forces, but the fighting has extended beyond Tigray. Eritrean forces allegedly entered Tigray, and Ethiopia responded with drone attacks. The war could go a number of ways. The war extends beyond Ethiopia. Sara Al-Saeed […] The post Ethiopia update appeared first on Marginal REVOLUTI"
    },
    {
     "ref": "marginal_revolution#11",
     "title": "Friday assorted links",
     "published": "2026-10-09T16:06:02+00:00",
     "summary": "1. Charles Kenny on foreign aid. 2. Rise and fall of the plasma screen. 3. France also has very high private debt. 4. Ross Douthat will do a weekly column for The Free Press. And from Ross himself. 5. Encryption risk? 6. “The Altruists premieres November 19.” 7. Emily Wilson on various Canadian writers. The post Friday assorted links appeared first on Marginal REVOLUTION ."
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "Black men suffer racial trauma yet are seen as the threat",
     "published": "2026-10-11T22:00:00+00:00",
     "summary": "The very conditions that subject Black men to chronic strain make it hard for them to receive the help they need and deserve - by Yamonte Cooper Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "How to ignite your creativity",
     "published": "2026-10-09T10:01:00+00:00",
     "summary": "Turn a mistake into art, write your own postcard: crafty ideas to escape the doom-scroll and jumpstart your creative practice - Video by Struthless Watch on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "Why moving on after a breakup makes you a better person",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "They say time heals a broken heart. But do the hard work of moving on, and you do more than heal – you improve yourself - by Matthew Barnfield Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "Tuesdays with the guys",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "In the wake of an unexpected tragedy, I decided to rethink my male friendships - by Rajeev Balasubramanyam Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "Want to be a lifelong learner? Don’t go it alone",
     "published": "2026-10-07T10:00:00+00:00",
     "summary": "The history of autodidacticism shows that learning has always been social. The right relationships open intellectual horizons - by Celine Nguyen Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "A psychological guide to climbing out of debt",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Debt is as much an emotional challenge as a financial one. Follow this therapist’s advice to create a plan that works - by Vicky Reynal Read on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "S P A C E S",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A filmmaker tries to reconstruct her brother’s faltering experience of time: adrift and without continuity - Directed by Nora Štrbová Watch on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "What does it really take to be a resilient mother?",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "New motherhood is hard – and a mother’s ability to cope depends on multiple kinds of strength, both internal and external - by Sarah Emmerson Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "Ask me anything",
     "published": "2026-10-02T10:01:00+00:00",
     "summary": "As the Netherlands adopts its strictest-ever asylum policy, Abdulaal Hussein creates space for candid conversation - Directed by Wyneke van Nieuwenhuyzen Watch on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "Journaling to remember",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "By cataloguing the ephemera that slip between the headlines of my days, future me has a ready reckoner of my life - by Anandi Mishra Read on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "Why long-brewing physical and mental breakdowns feel so sudden",
     "published": "2026-10-01T10:00:00+00:00",
     "summary": "As a neurosurgeon and a son, I’ve come to see the parallel processes underlying growing tumours and stressed-out minds - by Sasi S Senga Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "The full-service grandad",
     "published": "2026-09-30T10:00:00+00:00",
     "summary": "I thought I was a present father; my sons said otherwise. When my granddaughter arrived I made an offer - by Liam Heneghan Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "The end of humanity",
     "published": "2026-09-29T10:01:00+00:00",
     "summary": "Instead of accepting that humanity will soon be obsolete, we can build a better future with respect for human traditions - A film by Andreas Dürr and Jan-Marc Furer Watch on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "When you feel moral disgust, what’s the emotion telling you?",
     "published": "2026-09-29T10:00:00+00:00",
     "summary": "Some actions and words provoke instant revulsion. To know if we can trust that gut feeling, we should probe why we have it - by Brandon Yip Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "How Does Life Unfold? A Landscape Metaphor Comes Into Its Own.",
     "published": "2026-10-09T14:03:07+00:00",
     "summary": "C.H. Waddington’s powerful image of embryonic stem cells specializing on a rolling landscape has captivated biologists since the 1950s. Experimental data is finally confirming, and complicating, his visionary ideas. The post How Does Life Unfold? A Landscape Metaphor Comes Into Its Own. first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#1",
     "title": "As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines",
     "published": "2026-10-07T15:08:46+00:00",
     "summary": "In the shadow of a rumored AI proof of one of the biggest problems in their field, three computer scientists rushed to publish their own milestone result. The post As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "Is AI the End of Math As We Know It?",
     "published": "2026-10-05T13:40:07+00:00",
     "summary": "Mathematicians are facing the sudden shift with grief, anger, and a desperate search for fresh ideas: “If we don’t adapt, there’s just no more math in 50 years.” The post Is AI the End of Math As We Know It? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "Sea Monkeys Show Scientists How To Rewrite a Rule of Turbulence",
     "published": "2026-10-02T14:45:02+00:00",
     "summary": "Scientists assumed that energy flows in only one direction in a turbulent system. What they didn’t know, until they looked closely at brine shrimp, was that a simple factor can reverse the flow. The post Sea Monkeys Show Scientists How To Rewrite a Rule of Turbulence first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "What Does the Fourth Dimension Actually Look Like?",
     "published": "2026-10-01T13:20:29+00:00",
     "summary": "Maggie Miller explains why our intuition about three dimensions breaks down in four, and how she visualizes 4D spaces as a reel of three-dimensional snapshots. The post What Does the Fourth Dimension Actually Look Like? first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "Moving on from a breakup isn't healing — it's a philosophical project of self-construction, and it makes you better",
  "The Economist Who Argued Poverty, Empire and Ecology Were One Problem",
  "A Rumored AI Proof Set Off a Publishing Race in Math — and a Debate Over What Gets Lost",
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