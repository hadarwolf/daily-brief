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
     "title": "A vocabulary for the future: nature",
     "published": "2026-10-19T10:01:00+00:00",
     "summary": "For the philosopher Bruno Latour, seeing anything ‘natural’ as good and the ‘artificial’ as bad is perversely human-centric - by Aeon Video Watch on Aeon",
     "full_text_file": "essays/aeon_0.txt"
    },
    {
     "ref": "aeon#1",
     "title": "Horrible, unmanly, indispensable",
     "published": "2026-10-19T10:00:00+00:00",
     "summary": "Renaissance Italians saw the gun as the Devil’s work. But soon they embraced this unchivalrous – and necessary – weapon - by Catherine Fletcher Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "How to be a (Roman) man",
     "published": "2026-10-16T10:00:00+00:00",
     "summary": "Cicero’s ideal of manly virtue stressed the performance of self-control and bravery, not boastful egotism and domination - by Catharine Edwards Read on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "The secrets of Hohle Fels cave",
     "published": "2026-10-15T10:01:00+00:00",
     "summary": "Why aren’t we all Neanderthals? These ancient bird figurines suggest that art was essential to our evolutionary success - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "The ladder of knowledge",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "What we claim as ‘true’ is not a ceiling we are forever failing to reach but something that changes as we climb toward it - by Alexander V Gheorghiu Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "Into the fire",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "These women once fled ISIS. Now they defuse the landmines the militants left behind in their Yazidi homeland in northern Iraq - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "Deskilling the body",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "We are, moment by moment, doing less sensing, navigating, remembering, walking, choosing, and attending - by Melanie Challenger Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Africa’s cultural landmarks: tombs of Buganda kings",
     "published": "2026-10-12T10:01:00+00:00",
     "summary": "Built from vegetal materials, these majestic tombs housing Buganda kings bridge the realms of living and dead in Uganda - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "Is everything conscious?",
     "published": "2026-10-12T10:00:00+00:00",
     "summary": "If the question makes no sense to you, try spending some time with the principle of sufficient reason - by Sam Kimpton-Nye Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "Barbara Ward’s vision",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "She was among the first to argue that prosperity, equality and the protection of nature are inseparable planetary goals - by Or Rosenboim Read on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Evolution of Manhattan",
     "published": "2026-10-08T10:01:00+00:00",
     "summary": "From Lenape land to sprawling metropolis, this detailed timelapse animation captures the making of Manhattan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "The ghetto on the lagoon",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "Sixteenth-century Venice wanted to expel its Jews but couldn’t do without them. Its compromise was the world’s first ghetto - by Alexander Lee Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "I won’t remain alone",
     "published": "2026-10-07T10:01:00+00:00",
     "summary": "In the wake of tragedy, an elderly couple must make a choice: should they let their son go to save the lives of others? - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "How to assemble science",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Humanity produces a staggering amount of new knowledge every day. The question is how to make sense of it all - by Helen Pearson Read on Aeon"
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
     "summary": "(Originally mainly drafted in 2021, just now completed and published. Today the discussion around AI may now seem odd; it is written for a time when people were still trying to solve what would now be called \"superalignment\" with clever plans they'd invented themselves, rather than saying, \"Oh, we will ask Fable to solve it.\") === This is an essay about a children's fable I read a long time ago, a"
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
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "The net fiscal impact of immigration should include gains from trade",
     "published": "2026-10-20T04:47:19+00:00",
     "summary": "Immigration affects natives through both labor markets and public budgets, yet these channels are usually studied separately. We combine them in a general-equilibrium model with search-and-matching frictions, skill-specific progressive labor taxes, capital taxation and public goods, calibrated to 17 OECD countries over 2015-2019. The welfare effect on natives of a one-percentage-point increase in "
    },
    {
     "ref": "marginal_revolution#1",
     "title": "On Brazilian food",
     "published": "2026-10-20T04:08:38+00:00",
     "summary": "Every now and then I will write a piece on food for Works in Progress. Here is my piece on eating in Brazil: Brazil, like most large nations, also offers multiple cuisines. For instance you can go to Minas Gerais for pork and beans. Minas beans would be my favorite of what I have sampled, […] The post On Brazilian food appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#2",
     "title": "The California billionaire tax is very likely a net revenue loser",
     "published": "2026-10-19T18:31:59+00:00",
     "summary": "This paper examines the revenue and migration impact of the 2026 California Billionaire Tax Act, a one-time 5 percent tax on the worldwide net worth of individuals exceeding $1 billion. Using data from the Forbes Billionaire List, news reports detailing the residential real estate holdings of California billionaires, and public announcements of billionaire departures from […] The post The Californ"
    },
    {
     "ref": "marginal_revolution#3",
     "title": "Monday assorted links",
     "published": "2026-10-19T16:03:42+00:00",
     "summary": "1. More on Nigerian and African mega-cities, by the great David Pilling (FT). 2. Quantum gravity labor arbitrage. 3. New (non-AI) claims about consciousness. And more here. 4. “Stop Pink-Washing Patriarchy!” 5. How well do LLMs predict household behavior? 6. The Anthropic Public Benefit Fund. And a numerical estimate. 7. Yup. 8. Companies are balking […] The post Monday assorted links appeared fir"
    },
    {
     "ref": "marginal_revolution#4",
     "title": "No, DataCenters are Not Crowding-Out Other Investments",
     "published": "2026-10-19T11:16:23+00:00",
     "summary": "Based on charts like the one at right, Paul Krugman and many others are arguing that: Massive spending on data centers is crowding out investment in everything else in the economy. Not so fast. Can you see one immediate problem? How is $51b in data center construction spending crowding out $120b in everything else! Indeed, […] The post No, DataCenters are Not Crowding-Out Other Investments appeare"
    },
    {
     "ref": "marginal_revolution#5",
     "title": "What I’ve been reading",
     "published": "2026-10-19T04:29:27+00:00",
     "summary": "David Stuart, The Four Heavens: A New History of the Ancient Maya. The best book about the ancient Maya that I know of, and also a book about how we keep on discovering more about them. “The model I advocate for here rejects the old idea of the rise and fall of the Maya in […] The post What I’ve been reading appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#6",
     "title": "*You Can See Everything* (no spoilers)",
     "published": "2026-10-18T22:03:02+00:00",
     "summary": "An excellent and also original movie, you all should see it. There are different interpretations, but I read it as a story between two autistic people, and the bond they have but also the great difficulties they have in understanding each other, because they are so very different. I am not saying that is what […] The post *You Can See Everything* (no spoilers) appeared first on Marginal REVOLUTION"
    },
    {
     "ref": "marginal_revolution#7",
     "title": "*This Beautiful Country*",
     "published": "2026-10-18T16:32:02+00:00",
     "summary": "The author is Edward Cutler and the subtitle is How Italy’s Nature Shaped its Culture and Civilisation. This is an excellent book on how “the Italy you know” has been shaped by its natural environment, such as its mountains, rivers, geology, and so on. Ever wondered why Sardinia is different? The book is good at […] The post *This Beautiful Country* appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#8",
     "title": "Our fascination with screens, demand curves slope downward installment #1637",
     "published": "2026-10-18T06:28:18+00:00",
     "summary": "What we find here is that the quality-adjusted screen time price index is down 39 per cent since 2000, but that change is overwhelmingly a function of improvements in quality, not declines in prices paid for devices, subscriptions and so on. So the steep rise in screen time over the past 20 years has led […] The post Our fascination with screens, demand curves slope downward installment #1637 appe"
    },
    {
     "ref": "marginal_revolution#9",
     "title": "The archaeology tranche of Emergent Ventures",
     "published": "2026-10-18T04:57:12+00:00",
     "summary": "Björn Öste is building Arkhub, an AI-powered platform that analyzes remote-sensing and other archaeological data to identify potential ancient sites in the Amazon and enable further investigation by citizen scientists. J. Cameron Monroe is leading the Allada Regional Archaeology Project, using lidar, remote sensing, and archaeological fieldwork to reconstruct the historical landscape of the Kingdo"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "Saturday assorted links",
     "published": "2026-10-17T15:57:58+00:00",
     "summary": "1. GLM-5.3 understands Bob Lucas (and then some). It amuses me how many basic principles of economics are being rediscovered in these new contexts. 2. Most famous book tied to every U.S. state. The NJ answer is crazy, how about Roth’s American Pastoral? 3. Adam Tooze on Perry Mehrling. 4. How employment is changing at […] The post Saturday assorted links appeared first on Marginal REVOLUTION ."
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "Portraits of another life: Nemo Gould",
     "published": "2026-10-19T10:01:00+00:00",
     "summary": "Driven by childhood curiosity, a sculptor turns discarded objects into kinetic artworks that are the antidote to AI slop - Video by Portraits of Another Life Watch on Psyche"
    },
    {
     "ref": "psyche#1",
     "title": "What life in Denmark shows about the power of emotional safety",
     "published": "2026-10-19T10:00:00+00:00",
     "summary": "A deep sense of ease – what the Danes call ‘tryg’ – is a collective responsibility that allows individuals to flourish - by Ruth Aharoni Nielsen Read on Psyche",
     "full_text_file": "essays/psyche_1.txt"
    },
    {
     "ref": "psyche#2",
     "title": "The social construction of emotions",
     "published": "2026-10-16T10:01:00+00:00",
     "summary": "Are our emotions universal? How two landmark studies upended our view of emotions – and challenged colonial stereotypes - Video by Then & Now Watch on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "Deciding to detransition",
     "published": "2026-10-16T10:00:00+00:00",
     "summary": "For two years, I lived as a trans woman – happy with my body, but fearful of the world it moved in - by André Aram Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "How mental disorders play havoc with our motivation",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "Feeling energised to do something depends on a cost-benefit analysis that psychiatric conditions scramble in different ways - by Matthias Pillny Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "Chu Prayad",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "Power, precision and acrobatic high kicks – the Southeast Asian sport of sepak takraw offers Prayad relief from the road - Directed by Habib Yazdi and Joseph Marra Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "How to handle jealous feelings",
     "published": "2026-10-14T10:00:00+00:00",
     "summary": "Jealousy can be a useful, insightful emotion – if you manage it well. Get curious about your jealousy to get a grip on it - by Carla Marie Manly Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "What is hidden in the photographs we keep of each other?",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "Returning to family photo albums in my mother’s apartment in Japan, I was struck by the stories the images didn’t tell - by Sawa Kurotani Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "Black men suffer racial trauma yet are seen as the threat",
     "published": "2026-10-11T22:00:00+00:00",
     "summary": "The very conditions that subject Black men to chronic strain make it hard for them to receive the help they need and deserve - by Yamonte Cooper Read on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "How to ignite your creativity",
     "published": "2026-10-09T10:01:00+00:00",
     "summary": "Turn a mistake into art, write your own postcard: crafty ideas to escape the doom-scroll and jumpstart your creative practice - Video by Struthless Watch on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "Why moving on after a breakup makes you a better person",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "They say time heals a broken heart. But do the hard work of moving on, and you do more than heal – you improve yourself - by Matthew Barnfield Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "Tuesdays with the guys",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "In the wake of an unexpected tragedy, I decided to rethink my male friendships - by Rajeev Balasubramanyam Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "Want to be a lifelong learner? Don’t go it alone",
     "published": "2026-10-07T10:00:00+00:00",
     "summary": "The history of autodidacticism shows that learning has always been social. The right relationships open intellectual horizons - by Celine Nguyen Read on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "A psychological guide to climbing out of debt",
     "published": "2026-10-06T10:00:00+00:00",
     "summary": "Debt is as much an emotional challenge as a financial one. Follow this therapist’s advice to create a plan that works - by Vicky Reynal Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "AI Proved the Quasi-Riemann Hypothesis. What Happens Now?",
     "published": "2026-10-19T15:40:26+00:00",
     "summary": "Unlike other recent AI proofs, this one has been unpacked by human experts. The implications, one mathematician said, are “staggering.” The post AI Proved the Quasi-Riemann Hypothesis. What Happens Now? first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "He Wants AI Benchmarking To Be a Science, Not a Dark Art",
     "published": "2026-10-16T13:25:08+00:00",
     "summary": "Moritz Hardt, author of a new book on benchmarks, believes these “standardized tests” for artificial intelligence are fundamentally broken — but not unfixable. The post He Wants AI Benchmarking To Be a Science, Not a Dark Art first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "How Do Fungi Keep the Planet Healthy?",
     "published": "2026-10-15T13:40:13+00:00",
     "summary": "Evolutionary biologist Toby Kiers explains how fungal networks in soil trade nutrients with plants, help keep carbon underground, and strike bargains without having a brain. The post How Do Fungi Keep the Planet Healthy? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t",
     "published": "2026-10-14T14:04:05+00:00",
     "summary": "A collision may have left these galaxies without dark matter. That spells trouble for alternative gravity theories. The post Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "Is ‘Attention’ the Essence of Intelligence?",
     "published": "2026-10-12T14:20:30+00:00",
     "summary": "A mathematical mechanism enables AI models to process language at scale, undergirding the current AI revolution. Our columnist asks: Why is attention the key? The post Is ‘Attention’ the Essence of Intelligence? first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "AI Benchmarks Have Always Been Broken — That's Not Why They're in Crisis Now",
  "Roman Masculinity Was an Anxious Performance, Not a Golden Age of Domination",
  "AI Benchmarks Have Been Broken Since 1959 — and Progress Happened Anyway",
  "Why 'Just Try Harder' Misunderstands Motivation — It's a Hidden Cost-Benefit Calculation, Not a Fuel Tank",
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