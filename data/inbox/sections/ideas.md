Write the Ideas section: one essay or long read, summarized.

Step 1: pick the essay.
- Choose the ONE candidate that best rewards this reader's time: substantive, idea-dense, and not news.
- It must be a written piece. Skip link roundups, videos, podcasts and short blog notes.
- Only candidates with a full_text_file can be summarized properly. Prefer those.
- Today's rotation theme is a thought-provoking op-ed or essay. Prefer it if there is a strong candidate, but quality wins.
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
     "title": "When it started to burn",
     "published": "2026-10-21T10:01:00+00:00",
     "summary": "Horrific violence, enduring terror and ceaseless solidarity: four years of war through the eyes of Ukrainian civilians - by Aeon Video Watch on Aeon",
     "full_text_file": "essays/aeon_0.txt"
    },
    {
     "ref": "aeon#1",
     "title": "How intuitions work",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "Just as seeing a tree gives you reason to believe it’s there, sensing that a stranger is creepy gives you reason to walk away - by Marc A Moffett Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "A vocabulary for the future: nature",
     "published": "2026-10-19T10:01:00+00:00",
     "summary": "For the philosopher Bruno Latour, seeing anything ‘natural’ as good and the ‘artificial’ as bad is perversely human-centric - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Horrible, unmanly, indispensable",
     "published": "2026-10-19T10:00:00+00:00",
     "summary": "Renaissance Italians saw the gun as the Devil’s work. But soon they embraced this unchivalrous – and necessary – weapon - by Catherine Fletcher Read on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "How to be a (Roman) man",
     "published": "2026-10-16T10:00:00+00:00",
     "summary": "Cicero’s ideal of manly virtue stressed the performance of self-control and bravery, not boastful egotism and domination - by Catharine Edwards Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "The secrets of Hohle Fels cave",
     "published": "2026-10-15T10:01:00+00:00",
     "summary": "Why aren’t we all Neanderthals? These ancient bird figurines suggest that art was essential to our evolutionary success - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "The ladder of knowledge",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "What we claim as ‘true’ is not a ceiling we are forever failing to reach but something that changes as we climb toward it - by Alexander V Gheorghiu Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Into the fire",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "These women once fled ISIS. Now they defuse the landmines the militants left behind in their Yazidi homeland in northern Iraq - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "Deskilling the body",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "We are, moment by moment, doing less sensing, navigating, remembering, walking, choosing, and attending - by Melanie Challenger Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "Africa’s cultural landmarks: tombs of Buganda kings",
     "published": "2026-10-12T10:01:00+00:00",
     "summary": "Built from vegetal materials, these majestic tombs housing Buganda kings bridge the realms of living and dead in Uganda - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Is everything conscious?",
     "published": "2026-10-12T10:00:00+00:00",
     "summary": "If the question makes no sense to you, try spending some time with the principle of sufficient reason - by Sam Kimpton-Nye Read on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "Barbara Ward’s vision",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "She was among the first to argue that prosperity, equality and the protection of nature are inseparable planetary goals - by Or Rosenboim Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "Evolution of Manhattan",
     "published": "2026-10-08T10:01:00+00:00",
     "summary": "From Lenape land to sprawling metropolis, this detailed timelapse animation captures the making of Manhattan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "The ghetto on the lagoon",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "Sixteenth-century Venice wanted to expel its Jews but couldn’t do without them. Its compromise was the world’s first ghetto - by Alexander Lee Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "GLM-5.3 Sometimes Considers How Train-Time Actions Shape Future Behavior",
     "published": "2026-10-20T20:26:31+00:00",
     "summary": "Authors: Axel Højmark*, Ezra Newman* (*Equal contribution) While reviewing transcripts from standard behavioral evaluations of GLM-5.3, we noticed that the model occasionally reasons, unprompted, about how its actions will shape future models. It appears to consider that its outputs might be used for supervised fine-tuning (SFT), reinforcement learning (RL), or other forms of training, and that th",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "Cat-Belling Problems",
     "published": "2026-10-15T02:32:11+00:00",
     "summary": "(Originally mainly drafted in 2021, just now completed and published. Today the discussion around AI may now seem odd; it is written for a time when people were still trying to solve what would now be called \"superalignment\" with clever plans they'd invented themselves, rather than saying, \"Oh, we will ask Fable to solve it.\") === This is an essay about a children's fable I read a long time ago, a"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "A critical look at Lean4",
     "published": "2026-10-11T18:34:40+00:00",
     "summary": "Lots of the discussion around Lean certificates and trust centers around general philosophical ideas of how much humans should trust formal certificates. It's important to remember, though, that Lean4 is not an ideal formal certificate machine: Lean4 is a software in its infancy and has issues. There are reasonable reasons to specifically not trust Lean4. If we're going to be putting our society's"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "More on Elizabeth Holmes and prison",
     "published": "2026-10-21T19:12:57+00:00",
     "summary": "The Free Press asked me to expand upon my views of this matter, here is one excerpt from the piece: Third, fewer women in prison does not have to mean less deterrence overall, as arguably we should concentrate more of our legal resources on deterring violent men. Note that if we can release enough women […] The post More on Elizabeth Holmes and prison appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Wednesday assorted links",
     "published": "2026-10-21T16:09:38+00:00",
     "summary": "1. The Romans and sex. 2. Apartments that expand at the touch of a button. 3. Has this guy composed more songs than anybody else? 4. Psychoanalyzing Elizabeth Holmes. 5. AI wrote some of the Dallas Michelin reviews. And the reviewer responds. 6. New Yorker profile of James Daunt. The last event I was at […] The post Wednesday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#2",
     "title": "One reason I do not love AI writing, or even AI-assisted writing",
     "published": "2026-10-21T06:20:34+00:00",
     "summary": "Of course I read to absorb the content, but I also am in a position to meet many authors, have contact with them, and spend time with them. So reading anything also is a potential option on those future connections. But when I am reading an AI piece, the value of that option comes pretty […] The post One reason I do not love AI writing, or even AI-assisted writing appeared first on Marginal REVOLU"
    },
    {
     "ref": "marginal_revolution#3",
     "title": "The Causal Effect of Foreign Ideas on U.S. Innovation",
     "published": "2026-10-21T05:00:58+00:00",
     "summary": "Globalization is once again better than many people realize: We study the role of foreign ideas in U.S. innovation by constructing a directed “genealogy” of technologies from the full text of 13 million patents filed between 1887 and 2024. By tracing which earlier technologies appear in the founding patents of new ones, we recover a […] The post The Causal Effect of Foreign Ideas on U.S. Innovatio"
    },
    {
     "ref": "marginal_revolution#4",
     "title": "Saving for the machines",
     "published": "2026-10-20T18:38:49+00:00",
     "summary": "From Jesús Fernández-Villaverde: When machines can perform a growing share of tasks, growth depends on two margins: how the task structure affects the returns to accumulating machines, and how strongly capital accumulation responds to those returns. I argue that, in a standard task model, capital supply governs the size of the growth boom associated with automation, […] The post Saving for the mac"
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Tuesday assorted links",
     "published": "2026-10-20T15:56:57+00:00",
     "summary": "1. Freddie as AI skeptic (and I have given my predictions in fact). 2. Claims about Shakespeare and Marlowe. 3. How did “artificial intelligence” get its name? 4. How is the econ job market this year? 5. AI can now ace econometric coding. 6. The quasi-Riemann proof is becoming intelligible pretty quickly. And new associated […] The post Tuesday assorted links appeared first on Marginal REVOLUTION "
    },
    {
     "ref": "marginal_revolution#6",
     "title": "The net fiscal impact of immigration should include gains from trade",
     "published": "2026-10-20T04:47:19+00:00",
     "summary": "Immigration affects natives through both labor markets and public budgets, yet these channels are usually studied separately. We combine them in a general-equilibrium model with search-and-matching frictions, skill-specific progressive labor taxes, capital taxation and public goods, calibrated to 17 OECD countries over 2015-2019. The welfare effect on natives of a one-percentage-point increase in "
    },
    {
     "ref": "marginal_revolution#7",
     "title": "On Brazilian food",
     "published": "2026-10-20T04:08:38+00:00",
     "summary": "Every now and then I will write a piece on food for Works in Progress. Here is my piece on eating in Brazil: Brazil, like most large nations, also offers multiple cuisines. For instance you can go to Minas Gerais for pork and beans. Minas beans would be my favorite of what I have sampled, […] The post On Brazilian food appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#8",
     "title": "The California billionaire tax is very likely a net revenue loser",
     "published": "2026-10-19T18:31:59+00:00",
     "summary": "This paper examines the revenue and migration impact of the 2026 California Billionaire Tax Act, a one-time 5 percent tax on the worldwide net worth of individuals exceeding $1 billion. Using data from the Forbes Billionaire List, news reports detailing the residential real estate holdings of California billionaires, and public announcements of billionaire departures from […] The post The Californ"
    },
    {
     "ref": "marginal_revolution#9",
     "title": "Monday assorted links",
     "published": "2026-10-19T16:03:42+00:00",
     "summary": "1. More on Nigerian and African mega-cities, by the great David Pilling (FT). 2. Quantum gravity labor arbitrage. 3. New (non-AI) claims about consciousness. And more here. 4. “Stop Pink-Washing Patriarchy!” 5. How well do LLMs predict household behavior? 6. The Anthropic Public Benefit Fund. And a numerical estimate. 7. Yup. 8. Companies are balking […] The post Monday assorted links appeared fir"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "No, DataCenters are Not Crowding-Out Other Investments",
     "published": "2026-10-19T11:16:23+00:00",
     "summary": "Based on charts like the one at right, Paul Krugman and many others are arguing that: Massive spending on data centers is crowding out investment in everything else in the economy. Not so fast. Can you see one immediate problem? How is $51b in data center construction spending crowding out $120b in everything else! Indeed, […] The post No, DataCenters are Not Crowding-Out Other Investments appeare"
    },
    {
     "ref": "marginal_revolution#11",
     "title": "What I’ve been reading",
     "published": "2026-10-19T04:29:27+00:00",
     "summary": "David Stuart, The Four Heavens: A New History of the Ancient Maya. The best book about the ancient Maya that I know of, and also a book about how we keep on discovering more about them. “The model I advocate for here rejects the old idea of the rise and fall of the Maya in […] The post What I’ve been reading appeared first on Marginal REVOLUTION ."
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "Dear Al Pacino",
     "published": "2026-10-21T10:00:00+00:00",
     "summary": "I wrote my mother’s mad letters to celebrities. It was the only time we shared the same plane of reality - by Joe Mullich Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "How to overcome task paralysis",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "If you have ADHD or you’re stressed, tired and stuck, goal management training can help you get started and keep going - by Joe Wilner Read on Psyche",
     "full_text_file": "essays/psyche_1.txt"
    },
    {
     "ref": "psyche#2",
     "title": "Are you getting enough sun?",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "The new book ‘In Defense of Sunlight’ argues that our concerns about the sun’s risks lead us to overlook its benefits - by Hannah Seo Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "Portraits of another life: Nemo Gould",
     "published": "2026-10-19T10:01:00+00:00",
     "summary": "Driven by childhood curiosity, a sculptor turns discarded objects into kinetic artworks that are the antidote to AI slop - Video by Portraits of Another Life Watch on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "What life in Denmark shows about the power of emotional safety",
     "published": "2026-10-19T10:00:00+00:00",
     "summary": "A deep sense of ease – what the Danes call ‘tryg’ – is a collective responsibility that allows individuals to flourish - by Ruth Aharoni Nielsen Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "The social construction of emotions",
     "published": "2026-10-16T10:01:00+00:00",
     "summary": "Are our emotions universal? How two landmark studies upended our view of emotions – and challenged colonial stereotypes - Video by Then & Now Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "Deciding to detransition",
     "published": "2026-10-16T10:00:00+00:00",
     "summary": "For two years, I lived as a trans woman – happy with my body, but fearful of the world it moved in - by André Aram Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "How mental disorders play havoc with our motivation",
     "published": "2026-10-15T10:00:00+00:00",
     "summary": "Feeling energised to do something depends on a cost-benefit analysis that psychiatric conditions scramble in different ways - by Matthias Pillny Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "Chu Prayad",
     "published": "2026-10-14T10:01:00+00:00",
     "summary": "Power, precision and acrobatic high kicks – the Southeast Asian sport of sepak takraw offers Prayad relief from the road - Directed by Habib Yazdi and Joseph Marra Watch on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "How to handle jealous feelings",
     "published": "2026-10-14T10:00:00+00:00",
     "summary": "Jealousy can be a useful, insightful emotion – if you manage it well. Get curious about your jealousy to get a grip on it - by Carla Marie Manly Read on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "What is hidden in the photographs we keep of each other?",
     "published": "2026-10-13T10:00:00+00:00",
     "summary": "Returning to family photo albums in my mother’s apartment in Japan, I was struck by the stories the images didn’t tell - by Sawa Kurotani Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "Black men suffer racial trauma yet are seen as the threat",
     "published": "2026-10-11T22:00:00+00:00",
     "summary": "The very conditions that subject Black men to chronic strain make it hard for them to receive the help they need and deserve - by Yamonte Cooper Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "How to ignite your creativity",
     "published": "2026-10-09T10:01:00+00:00",
     "summary": "Turn a mistake into art, write your own postcard: crafty ideas to escape the doom-scroll and jumpstart your creative practice - Video by Struthless Watch on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "Why moving on after a breakup makes you a better person",
     "published": "2026-10-09T10:00:00+00:00",
     "summary": "They say time heals a broken heart. But do the hard work of moving on, and you do more than heal – you improve yourself - by Matthew Barnfield Read on Psyche"
    },
    {
     "ref": "psyche#14",
     "title": "Tuesdays with the guys",
     "published": "2026-10-08T10:00:00+00:00",
     "summary": "In the wake of an unexpected tragedy, I decided to rethink my male friendships - by Rajeev Balasubramanyam Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "See Inside Cells Like Never Before in These Vivid Microscopic Images",
     "published": "2026-10-21T14:00:07+00:00",
     "summary": "Winning entries in the 2026 Nikon Small World competitions reveal the hidden interactions that govern everyday life. The post See Inside Cells Like Never Before in These Vivid Microscopic Images first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "AI Proved the Quasi-Riemann Hypothesis. What Happens Now?",
     "published": "2026-10-19T15:40:26+00:00",
     "summary": "Unlike other recent AI proofs, this one has been unpacked by human experts. The implications, one mathematician said, are “staggering.” The post AI Proved the Quasi-Riemann Hypothesis. What Happens Now? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "He Wants AI Benchmarking To Be a Science, Not a Dark Art",
     "published": "2026-10-16T13:25:08+00:00",
     "summary": "Moritz Hardt, author of a new book on benchmarks, believes these “standardized tests” for artificial intelligence are fundamentally broken — but not unfixable. The post He Wants AI Benchmarking To Be a Science, Not a Dark Art first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "How Do Fungi Keep the Planet Healthy?",
     "published": "2026-10-15T13:40:13+00:00",
     "summary": "Evolutionary biologist Toby Kiers explains how fungal networks in soil trade nutrients with plants, help keep carbon underground, and strike bargains without having a brain. The post How Do Fungi Keep the Planet Healthy? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t",
     "published": "2026-10-14T14:04:05+00:00",
     "summary": "A collision may have left these galaxies without dark matter. That spells trouble for alternative gravity theories. The post Triplet of ‘Ghostly’ Galaxies Hints at What Dark Matter Is — and Isn’t first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "How Intuition Justifies Belief — By Working Just Like Perception",
  "Denmark Treats Feeling Safe as Shared Infrastructure, Not a Private Feeling",
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