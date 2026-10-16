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
     "title": "The secrets of Hohle Fels cave",
     "published": "2026-10-15T10:01:00+00:00",
     "summary": "Why aren’t we all Neanderthals? These ancient bird figurines suggest that art was essential to our evolutionary success - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#1",
     "title": "The ladder of knowledge",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "What we claim as ‘true’ is not a ceiling we are forever failing to reach but something that changes as we climb toward it - by Alexander V Gheorghiu Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "Into the fire",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "These women once fled ISIS. Now they defuse the landmines the militants left behind in their Yazidi homeland in northern Iraq - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Deskilling the body",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "We are, moment by moment, doing less sensing, navigating, remembering, walking, choosing, and attending - by Melanie Challenger Read on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "Africa’s cultural landmarks: tombs of Buganda kings",
     "published": "2026-10-12T10:01:00+00:00",
     "summary": "Built from vegetal materials, these majestic tombs housing Buganda kings bridge the realms of living and dead in Uganda - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "Is everything conscious?",
     "published": "2026-10-12T10:00:00+00:00",
     "summary": "If the question makes no sense to you, try spending some time with the principle of sufficient reason - by Sam Kimpton-Nye Read on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "Barbara Ward’s vision",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "She was among the first to argue that prosperity, equality and the protection of nature are inseparable planetary goals - by Or Rosenboim Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Evolution of Manhattan",
     "published": "2026-10-08T10:01:00+00:00",
     "summary": "From Lenape land to sprawling metropolis, this detailed timelapse animation captures the making of Manhattan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "The ghetto on the lagoon",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "Sixteenth-century Venice wanted to expel its Jews but couldn’t do without them. Its compromise was the world’s first ghetto - by Alexander Lee Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "I won’t remain alone",
     "published": "2026-10-07T10:01:00+00:00",
     "summary": "In the wake of tragedy, an elderly couple must make a choice: should they let their son go to save the lives of others? - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "How to assemble science",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Humanity produces a staggering amount of new knowledge every day. The question is how to make sense of it all - by Helen Pearson Read on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "All-around junior male",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A ball suspended in mid-air meets an athlete’s determination: in the one-foot high kick, competitors must defy gravity - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "A life in episodes",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "For a decade, I’ve posted episodes of my memoir to Facebook. My readers correct my understanding of my past - by Thomas Söderqvist Read on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "Life on a hair trigger",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "A world of violence sustains itself through guns, poverty and other social ills, but also through the minds it creates - by Megan Kang Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "Cat-Belling Problems",
     "published": "2026-10-15T02:32:11+00:00",
     "summary": "(Originally mainly drafted in 2021, just now completed and published. Today the discussion around AI may now seem odd; it is written for a time when people were still trying to solve what would now be called \"superalignment\" with clever plans they'd invented themselves, rather than saying, \"Oh, we will ask Fable to solve it.\") === This is an essay about a children's fable I read a long time ago, a",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "A critical look at Lean4",
     "published": "2026-10-11T18:34:40+00:00",
     "summary": "Lots of the discussion around Lean certificates and trust centers around general philosophical ideas of how much humans should trust formal certificates. It's important to remember, though, that Lean4 is not an ideal formal certificate machine: Lean4 is a software in its infancy and has issues. There are reasonable reasons to specifically not trust Lean4. If we're going to be putting our society's"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "What's the date?",
     "published": "2026-10-08T02:49:10+00:00",
     "summary": "User asks “What’s the date? Answer with only the date.”. No date provided. Given date in ChatGPT normally. No date in system prompt, must not hallucinate because autop will flag to watcher for penalty. So we say we don’t know, but must answer with date. Penalty larger for abstain or hallucinate? Autollm or autop? If we deploy user forgive, but high likely not deploy because real user never ask. Bu"
    },
    {
     "ref": "lesswrong_curated#3",
     "title": "On Social Reality in China",
     "published": "2026-10-05T02:56:58+00:00",
     "summary": "[Epistemic status: intuitions and anecdotes.] Recently, several posts and projects ( Thoughts Memo , Babel Translation , Please Give Them a Chance ) have taken important steps towards raising AI safety awareness and sharing rationalist philosophy in China. It’s great that we’re recognizing the importance of solving the messaging problem for China, and thus laying the groundwork for an internationa"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "Thursday assorted links",
     "published": "2026-10-15T16:43:28+00:00",
     "summary": "1. Claims about military satellites. 2. book talk. 3. AI misalignment in Sweden? 4. Will El Salvador grow? 5. AI, automation, and the Indian workforce. 6. How language models revise the documents that govern them. 7. Arpit Gupta, economist, visits Anthropic. 8. Ten-year yield is down, even though inflation came in higher than expected. The post Thursday assorted links appeared first on Marginal RE"
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Astra Held Its Ground (Truth)",
     "published": "2026-10-15T11:18:46+00:00",
     "summary": "TheoPhysEval: We present a suite of 50 unpublished research-level theoretical physics problems with verifiable answers. Without AI assistance, a typical problem in our collection could be solved by a world expert in about a day or less but would take considerably longer for experts in adjacent specialties. We test the ability of off-the-shelf AI agents […] The post Astra Held Its Ground (Truth) ap"
    },
    {
     "ref": "marginal_revolution#2",
     "title": "Why I do not use LLMs more",
     "published": "2026-10-15T08:20:41+00:00",
     "summary": "They are so very, very good at matching me to the books I wish to read and the music I wish to listen to. In this odd sense they are not very sticky. The LLMs are amazing, but the world is awesome too! Thus the LLMs keep on sending me away. There is quality travel […] The post Why I do not use LLMs more appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#3",
     "title": "My excellent Conversation with Liaquat Ahamed",
     "published": "2026-10-15T04:37:06+00:00",
     "summary": "Here is the audio, video, and transcript. Here is part of the episode summary: They start with that puzzle before moving through Gladstone’s startlingly self-interested bet on Egyptian bonds, Bismarck’s role in destroying bimetallism and deflating the world economy for two decades, whether a global silver or symmetallic standard could have worked, Britain’s fateful decision […] The post My excelle"
    },
    {
     "ref": "marginal_revolution#4",
     "title": "China fact (?) of the day",
     "published": "2026-10-14T18:56:23+00:00",
     "summary": "A monograph by Yi Fuxian, a University of Wisconsin-Madison demographer and longtime critic of China’s population policies, argues that China’s actual population may be closer to 1.27 billion—not the 1.4 billion officially reported. The gap would be as much as 130 million people, roughly the population of Mexico. And Yi argues the distortion has warped […] The post China fact (?) of the day appear"
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Wednesday assorted links",
     "published": "2026-10-14T16:07:03+00:00",
     "summary": "1. Planets more habitable than Earth? (NYT) 2. Those new service sector jobs: “Cambiar de vida: cómo irte a contar pingüinos en la Antártida por hasta 2500 euros al mes.” 3. AI song about the China Shock debate. 4. “An amusing result of this new survey is that Democratic-voting workers had a startlingly high net-favorable […] The post Wednesday assorted links appeared first on Marginal REVOLUTION "
    },
    {
     "ref": "marginal_revolution#6",
     "title": "*Plunder: The Last of the War in Europe, 1945*",
     "published": "2026-10-14T07:02:57+00:00",
     "summary": "By Max Hastings, an excellent book, I benefited from every page. One recurring theme is simply how hard the Germans fought on the way down, and how unusual that behavior was. Here is one interesting passage of many: In World War I, 150 German soldiers were sentenced to death for serious crimes, of which a […] The post *Plunder: The Last of the War in Europe, 1945* appeared first on Marginal REVOLU"
    },
    {
     "ref": "marginal_revolution#7",
     "title": "Well-planned African immigration to America will go fine",
     "published": "2026-10-14T04:19:22+00:00",
     "summary": "That is the topic of my latest Free Press column, here is one excerpt: The good news is that African immigrants already have done well in the United States. For instance, 46 percent of African immigrants complete a college education, well above the immigrant average of 36 percent and the native-born American rate of 37 […] The post Well-planned African immigration to America will go fine appeared "
    },
    {
     "ref": "marginal_revolution#8",
     "title": "Perry Mehrling, RIP",
     "published": "2026-10-13T20:51:16+00:00",
     "summary": "He and I were in the same Harvard class together, and spent a good deal of time talking economics together. We also were (briefly) bridge partners in a few games. I was a big fan of his book on Fischer Black. I am very sorry to see him gone. The post Perry Mehrling, RIP appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#9",
     "title": "Tuesday assorted links",
     "published": "2026-10-13T16:22:29+00:00",
     "summary": "1. Jon Hartley on Bob Hall. And Chad Jones on Bob Hall. 2. Nicholas Decker on who might have won the prize. 3. Koyama tribute to Wickam. 4. A parallel AI adjudication track? 5. Kevin Kelly on swarm intelligence. 6. What each country read on Wikipedia yesterday. 7. Is MIT economics good at talent evaluation? […] The post Tuesday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#10",
     "title": "Is Your Agent a Double Agent?",
     "published": "2026-10-13T11:18:29+00:00",
     "summary": "In the Manchurian Candidate a sleeper agent who has been brain-trained appears normal until a secret phrase–“Why don’t you pass the time by playing a little solitaire?”–triggers a state of hypnosis and control by the attackers. Connor Tabarrok, now with the AI safety firm Equistamp, has an excellent post on how this same technique can […] The post Is Your Agent a Double Agent? appeared first on Ma"
    },
    {
     "ref": "marginal_revolution#11",
     "title": "*Lost Worlds*",
     "published": "2026-10-13T07:28:20+00:00",
     "summary": "The author is Patrick Wyman, and the subtitle is How Humans Tried, Failed, Succeeded, and Built Our World. An excellent book, it is a survey of (mostly) pre-Sumerian times, what we know about them, and how we have learned a lot lately. It is easy to read, yet the author properly stresses the complexity of […] The post *Lost Worlds* appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#12",
     "title": "“I have no mouth and I must scream”",
     "published": "2026-10-13T04:42:32+00:00",
     "summary": "Worth a reread, here is a new report from the front: Our experiments suggest that small AI models may be months away from being capable enough to self-replicate on commercial IoT devices, like smart ovens and off-brand Android TV boxes. A replicator like this would be challenging to shut down, since there’s no centralized point […] The post “I have no mouth and I must scream” appeared first on Mar"
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "How mental disorders play havoc with our motivation",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "Feeling energised to do something depends on a cost-benefit analysis that psychiatric conditions scramble in different ways - by Matthias Pillny Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "Chu Prayad",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "Power, precision and acrobatic high kicks – the Southeast Asian sport of sepak takraw offers Prayad relief from the road - Directed by Habib Yazdi and Joseph Marra Watch on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "How to handle jealous feelings",
     "published": "2026-10-14T10:00:00+00:00",
     "summary": "Jealousy can be a useful, insightful emotion – if you manage it well. Get curious about your jealousy to get a grip on it - by Carla Marie Manly Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "What is hidden in the photographs we keep of each other?",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "Returning to family photo albums in my mother’s apartment in Japan, I was struck by the stories the images didn’t tell - by Sawa Kurotani Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "Black men suffer racial trauma yet are seen as the threat",
     "published": "2026-10-11T22:00:00+00:00",
     "summary": "The very conditions that subject Black men to chronic strain make it hard for them to receive the help they need and deserve - by Yamonte Cooper Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "How to ignite your creativity",
     "published": "2026-10-09T10:01:00+00:00",
     "summary": "Turn a mistake into art, write your own postcard: crafty ideas to escape the doom-scroll and jumpstart your creative practice - Video by Struthless Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "Why moving on after a breakup makes you a better person",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "They say time heals a broken heart. But do the hard work of moving on, and you do more than heal – you improve yourself - by Matthew Barnfield Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "Tuesdays with the guys",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "In the wake of an unexpected tragedy, I decided to rethink my male friendships - by Rajeev Balasubramanyam Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "Want to be a lifelong learner? Don’t go it alone",
     "published": "2026-10-07T10:00:00+00:00",
     "summary": "The history of autodidacticism shows that learning has always been social. The right relationships open intellectual horizons - by Celine Nguyen Read on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "A psychological guide to climbing out of debt",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Debt is as much an emotional challenge as a financial one. Follow this therapist’s advice to create a plan that works - by Vicky Reynal Read on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "S P A C E S",
     "published": "2026-10-05T10:01:00+00:00",
     "summary": "A filmmaker tries to reconstruct her brother’s faltering experience of time: adrift and without continuity - Directed by Nora Štrbová Watch on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "What does it really take to be a resilient mother?",
     "published": "2026-10-05T10:00:00+00:00",
     "summary": "New motherhood is hard – and a mother’s ability to cope depends on multiple kinds of strength, both internal and external - by Sarah Emmerson Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "Ask me anything",
     "published": "2026-10-02T10:01:00+00:00",
     "summary": "As the Netherlands adopts its strictest-ever asylum policy, Abdulaal Hussein creates space for candid conversation - Directed by Wyneke van Nieuwenhuyzen Watch on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "Journaling to remember",
     "published": "2026-10-02T10:00:00+00:00",
     "summary": "By cataloguing the ephemera that slip between the headlines of my days, future me has a ready reckoner of my life - by Anandi Mishra Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "How Do Fungi Keep the Planet Healthy?",
     "published": "2026-10-15T13:40:13+00:00",
     "summary": "Evolutionary biologist Toby Kiers explains how fungal networks in soil trade nutrients with plants, help keep carbon underground, and strike bargains without having a brain. The post How Do Fungi Keep the Planet Healthy? first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t",
     "published": "2026-10-14T14:04:05+00:00",
     "summary": "A collision may have left these galaxies without dark matter. That spells trouble for alternative gravity theories. The post Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_1.txt"
    },
    {
     "ref": "quanta#2",
     "title": "Is ‘Attention’ the Essence of Intelligence?",
     "published": "2026-10-12T14:20:30+00:00",
     "summary": "A mathematical mechanism enables AI models to process language at scale, undergirding the current AI revolution. Our columnist asks: Why is attention the key? The post Is ‘Attention’ the Essence of Intelligence? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "How Does Life Unfold? A Landscape Metaphor Comes Into Its Own.",
     "published": "2026-10-09T14:03:07+00:00",
     "summary": "C.H. Waddington’s powerful image of embryonic stem cells specializing on a rolling landscape has captivated biologists since the 1950s. Experimental data is finally confirming, and complicating, his visionary ideas. The post How Does Life Unfold? A Landscape Metaphor Comes Into Its Own. first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines",
     "published": "2026-10-07T15:08:46+00:00",
     "summary": "In the shadow of a rumored AI proof of one of the biggest problems in their field, three computer scientists rushed to publish their own milestone result. The post As AI Closed In on ‘Unique Games’ Proof, Researchers Raced to Beat the Machines first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "The Cat-Belling Problem: Why Ambitious Plans Fail at the One Step Nobody Can Do",
  "We Were Never Machines: Why Offloading Navigation, Writing and Attention to Technology Is Eroding the Body's Own Intelligence",
  "Is 'Attention' the Essence of Intelligence?",
  "The Racial Trauma of Black Men Is Hidden Behind the Label 'Threat'",
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