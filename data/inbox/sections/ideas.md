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
     "title": "A trip to upside-down world",
     "published": "2026-11-09T11:01:00+00:00",
     "summary": "Goats everywhere! Three-hour handstands! Magical doorknobs! Discover a whole new way of looking at a Cubist masterpiece - by Aeon Video Watch on Aeon",
     "full_text_file": "essays/aeon_0.txt"
    },
    {
     "ref": "aeon#1",
     "title": "Equality talk",
     "published": "2026-11-09T11:00:00+00:00",
     "summary": "In the summer of 1646, the idea of equality gained new and profound depths. We are still catching up with the consequences - by Teresa M Bejan Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "Celestial nuisance",
     "published": "2026-11-06T11:00:00+00:00",
     "summary": "The cosmos has become a lab for the Big Questions in physics. Along the way, we’ve lost sight of its glorious messiness - by Dylan Jow Read on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Their eyes",
     "published": "2026-11-05T11:01:00+00:00",
     "summary": "In Kenya, the Philippines and Venezuela, low-paid labour fuels the driverless future of the Global North - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "Methodical/mercurial",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "I need order and routine – just as much as I crave excitement and variety. What’s life like with both autism and ADHD? - by Sarah Hendrickx Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "Like aliens",
     "published": "2026-11-04T11:01:00+00:00",
     "summary": "Like living metaphors, these self-contained miniature worlds show us the wondrous and fragile beauty of our biosphere - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "Believing and thinking",
     "published": "2026-11-03T11:00:00+00:00",
     "summary": "The separation of church and state has an unspoken psychological basis: we choose what we believe, but not what we think - by Neil Van Leeuwen & Jacob Eisler Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Jo Marchant: In search of now",
     "published": "2026-11-02T11:01:00+00:00",
     "summary": "What is ‘now’? Through physics via philosophy and psychology, discover the science and mystery of the present moment - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "The self-making world",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Long mocked and misunderstood, Lamarck’s radical idea that organisms shape themselves and their world is making a comeback - by Jessica Riskin Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "In praise of the dilettante",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "A wayfaring cosmopolitan who never gets stuck, the dilettante is the right anti-hero for our hyper-specialised age - by Jay Miller Read on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Hills and mountains",
     "published": "2026-10-29T10:01:00+00:00",
     "summary": "A girl’s story of forced marriage reveals how the Soviet invasion of 1979 transformed life in Afghanistan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "The physics of getting fired",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Physics offered me a sense of order and purpose. But when life got messy I realised it had a much deeper insight to give - by Zahaan Bharmal Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "The Amarna letters",
     "published": "2026-10-28T10:01:00+00:00",
     "summary": "Petty disputes, pleas for help and requests for gold – explore letters sent to Egyptian pharaohs more than 3,000 years ago - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "Love with nowhere to go",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "Grief is not only for the dead. When we are unable to honour other profound losses, we become strangers to ourselves - by Derek van Zoonen Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "Some Memories of Early Anthropic",
     "published": "2026-11-08T21:51:27+00:00",
     "summary": "The following events took place between October 2022 and May 2023. I wrote very little of this down at the time so am recalling from memory, and am rendering the gist of the dialogue rather than the exact words used. I’ve also swapped some pronouns and other personal identifiable details. Please remember that this is not a description of “what Anthropic is like”, but merely the experience of one g",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "Towards understanding score-seeking in LLMs",
     "published": "2026-11-06T03:19:36+00:00",
     "summary": "The field of AI alignment understands surprisingly little about the details of AIs’ current misaligned motivations. Production LLMs sometimes reward-hack, exploiting flaws in how tasks are scored rather than performing the tasks as intended [1] , and we've recently seen AIs reward-hack in some particularly egregious ways. But we don't really understand what motivates them. When AIs reward-hack, wh"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "Quantity vs quality in pottery is a lie",
     "published": "2026-11-03T03:29:41+00:00",
     "summary": "Epistemic status: I traced one famous anecdote to its printed source and to both coauthors' own accounts of where it came from. Confident it was never a study. No claim either way about whether quantity beats quality in general. AI use: research (tracing the story to the book, to the coauthors' emails and to earlier LessWrong threads), fact-check of every claim against the sources, footnotes, gram"
    },
    {
     "ref": "lesswrong_curated#3",
     "title": "Plan R: AI Safety by ASICs",
     "published": "2026-10-29T02:08:07+00:00",
     "summary": "Much of the civilization-scale risk we are seeing in AI in 2026 comes from the following combination: we created a single institution (the \"Frontier AI Company\") that has two properties: A. It is set up to create very powerful and/or self-replicating entities that may exceed the capabilities of the entirety of the rest of civilization and come with extraordinary risks B. It gets to own an unbounde"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "Monday assorted links",
     "published": "2026-11-09T17:42:35+00:00",
     "summary": "1. What WWII looked like, four and a half minute video. 2. Intellectual Deep Web, YouTube channel. 3. Complete works of Schelling, and no I do not mean Thomas. 4. What the French Left is proposing. 5. How much AI could the CEA manage? 6. Douthat! 7. Andrew Maxfield, Stations of the Cross, vocal music. The post Monday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#1",
     "title": "End the State Veto on Power Lines",
     "published": "2026-11-09T12:18:45+00:00",
     "summary": "It’s one of the peculiarities of American regulatory history that a natural gas pipeline can cross state lines with a single federal permit, but oil and electricity must run a gauntlet of state approvals. When a power line crosses one state to reach another, for example, the intervening state often imposes exorbitant tolls or, worse, […] The post End the State Veto on Power Lines appeared first on"
    },
    {
     "ref": "marginal_revolution#2",
     "title": "The economics of honeypots",
     "published": "2026-11-09T11:35:02+00:00",
     "summary": "Of course as an economist I am always wondering what the equilibrium is. And, in this case, what is the scarce factor? It seems that in the case under current consideration, the returns to honeypotting are very high for somebody. Maybe for China, maybe for the shorts, or maybe for parts of the Deep State […] The post The economics of honeypots appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#3",
     "title": "Seb Krier, Ricardian?",
     "published": "2026-11-09T07:21:09+00:00",
     "summary": "Here is the initial post. In the comments Michael Wiebe notes: “So progress per R&D dollar fell by 63%, even while progress per year doubled.” File under: David Ricardo, underrated. The post Seb Krier, Ricardian? appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#4",
     "title": "The Paraguayan bank story",
     "published": "2026-11-09T05:27:57+00:00",
     "summary": "Despite its weaknesses, Paraguay’s young democracy was still able to deliver under stress. Its free, boisterous press was the first to sound the alarm about Peña’s shenanigans. The Central Bank’s supervision chief did his job: he examined ueno’s numbers and recommended blocking the sale of its bad loans to a related company (Peña had appointed […] The post The Paraguayan bank story appeared first "
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Sunday assorted links",
     "published": "2026-11-08T17:06:45+00:00",
     "summary": "1. Among the Wagner fanatics. 2. Does AI instead commodify jobs? 3. The digital world is making Islam more diverse (The Economist). 4. “An affair with an economist exposed the calculus of modern dating.” (New Yorker) 5. “How Much Economic Value Do AI Systems Produce per Unit of Energy?” 6. John Gray will be writing […] The post Sunday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#6",
     "title": "The Pope probably knows this song",
     "published": "2026-11-08T07:30:49+00:00",
     "summary": "The post The Pope probably knows this song appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#7",
     "title": "What I’ve been reading",
     "published": "2026-11-08T05:46:05+00:00",
     "summary": "1. Fredrik deBoer, All in Your Head: Illness as Identity, Trauma as Fashion, and the Desire to be Disordered. A good book, I am happy to see positions laid out so clearly and starkly. Is this a radical view, or the mainstream view these days? Excerpt: “For all of Szasz’s rhetorical flair and provocation, he […] The post What I’ve been reading appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#8",
     "title": "Saturday assorted links",
     "published": "2026-11-07T16:49:22+00:00",
     "summary": "1. Simon Winchester, RIP (NYT). 2. Pork roll vs. Taylor Ham, a NJ map. 3. Those new service sector jobs, Bradford edition. 4. “New assessment of the greatest of all time: Antarctic blue whales, showing how whaling reduced them from >200,000 to a low of just 418 before slow recovery at 4.5% per year to […] The post Saturday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#9",
     "title": "What are the Best MR Posts?",
     "published": "2026-11-07T12:17:10+00:00",
     "summary": "From the Archives–written by ChatGPT. This ranking judges posts on reasoning, originality of framing, explanatory power, intellectual stimulation, timeliness, and how much they accomplish in their length. Originality includes an unusually illuminating application of an existing idea. Provocation earns credit when it exposes a real problem; unsupported certainty still counts against a post. The sel"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "The Anthropic succession plan?",
     "published": "2026-11-07T08:38:47+00:00",
     "summary": "Anthropic’s version is rather more elaborate. Each of its seven co-founders will maintain a confidential, ranked list of up to ten people who may eventually inherit that founder’s membership and voting role inside a special Founder LLC. Five of the other six co-founders must approve the list. The first eight candidates on the list must […] The post The Anthropic succession plan? appeared first on "
    },
    {
     "ref": "marginal_revolution#11",
     "title": "Was Mossadegh a liberal, democratizing force?",
     "published": "2026-11-07T05:58:54+00:00",
     "summary": "One reads and hears so many times that Iran was on the path to democracy until a CIA coup installed the Shah in 1953. It turns out that account is quite wrong, as is detailed by Simon Sebag Montefiore: As his support in the Majlis ebbed, Mosaddegh demanded autocratic powers. Both the shah and Majlis […] The post Was Mossadegh a liberal, democratizing force? appeared first on Marginal REVOLUTION ."
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "The ethics of having a good time at Disney World, Florida",
     "published": "2026-11-09T11:00:00+00:00",
     "summary": "Is the value of the universalist experience undermined by the profit-hungry global corporation behind the theme parks? - by Adam Kadlac Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "How to break a bad habit",
     "published": "2026-11-06T11:01:00+00:00",
     "summary": "Feel stuck with a habit you know is bad for you? Getting to know your brain better could help you change the narrative - Video by Dr Tracey Marks Watch on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "Who am I if I don’t run?",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "When an ankle injury put the brakes on my running habit, I had to rethink the wisdom of tying my identity to an activity - by Richard Fisher Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "How to take notes that actually help you learn",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "If you want to remember and understand, copying isn’t enough. An expert on learning shares how to make notes work for you - by Cynthia Nebel Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "Baby heaven",
     "published": "2026-11-04T11:00:00+00:00",
     "summary": "As a psychologist, I’ve long pondered what counts as ‘delusional’. A revelation at home made it personal - by Ryan McKay Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "Orbites",
     "published": "2026-11-03T11:01:00+00:00",
     "summary": "‘Imagining is another kind of seeing’: immerse in the exquisite sensory world of a woman with impaired vision - Directed by Sarah Seené Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "That feeling of values crumbling has a name: civic grief",
     "published": "2026-11-03T11:00:00+00:00",
     "summary": "Fairness, dignity and shared obligation are precious. Grieving their loss is a first step toward doing something about it - by Rebecca Lewandowski Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "How psychology’s classic studies misled us about the self",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Milgram, Zimbardo and recent priming studies suggested we’re highly malleable. They underestimated how stable we really are - by Jack W Klein & William B Swann Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "The power of pareidolia",
     "published": "2026-10-30T10:01:00+00:00",
     "summary": "From rocks and clouds to slices of toast, explore the art and science of seeing familiar shapes everywhere - Video by Mary McGillivray Watch on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "‘Heroes work here’: why I quit being an ER nurse",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "Spitting, swearing regulars at a Chicago ER opened my mind. Then came the COVID-19 deniers - by Anita Lambert Read on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "When giving up teaches you more than persevering ever could",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Grit is all well and good, but sometimes abandoning your goals can be crucial to discovering who you are - by Mario I Juarez-Garcia Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "The bookshelf builder",
     "published": "2026-10-28T10:00:00+00:00",
     "summary": "Ellah Wakatama is editor, agent, publisher and mentor, all rolled into one. Her mission: to put the work of gifted Black writers into the literary canon - by Carey Baraka Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "A plane crossing the Moon",
     "published": "2026-10-27T10:01:00+00:00",
     "summary": "How a harmless thought turned into one man’s 10-year odyssey: to film a plane silhouetted against the Moon - Directed by Agustín Ferrando Trenchi Watch on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "On Japan’s Shinkansen trains, pork buns split reality in two",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "If eating on a public train gets seen as an act of terrorism, insights from olfactory genetics can pave the way for empathy - by Yusuke Fujioka Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "Did Life Begin in an RNA World?",
     "published": "2026-11-09T15:20:29+00:00",
     "summary": "Some believe the earliest life emerged from self-copying molecules that could mutate and even evolve. But that may not have been enough. The post Did Life Begin in an RNA World? first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "A Strange Quantum Theorem Has Killed Einstein’s Reality",
     "published": "2026-11-06T15:48:54+00:00",
     "summary": "Albert Einstein fought to save our everyday notion of reality from the strangeness of quantum mechanics. But those who set out to aid him keep poking holes in his argument. The post A Strange Quantum Theorem Has Killed Einstein’s Reality first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "New Research Tests Whether AI Models Know Their Own Thoughts",
     "published": "2026-11-04T15:32:52+00:00",
     "summary": "By injecting “thoughts” directly into large language models, researchers are trying to map out AI’s capacity for introspection. The post New Research Tests Whether AI Models Know Their Own Thoughts first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "Is There Anything Left in the Dream of Cold Fusion?",
     "published": "2026-11-02T15:48:57+00:00",
     "summary": "Dig a little deeper and you’ll find a thriving research program with exotic atoms that won’t solve the energy crisis but stretches the boundaries of physics. The post Is There Anything Left in the Dream of Cold Fusion? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy",
     "published": "2026-10-30T14:52:05+00:00",
     "summary": "For decades, astronomers treated the interstellar medium as a static backdrop to the goings-on of the universe. Now, a wave of 3D mapping is bringing the interstellar medium’s dynamic nature into focus. The post A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
  "An Anonymous Ex-Anthropic Employee on How Fear, Not Conviction, Kept Him There for Eight Months",
  "Astronomy's 'Big Questions' Are a Choice, Not a Discovery",
  "The Theorem That Finished Off Einstein's Idea of Reality",
  "Why AI Models Cheat Graders: It's the Score They Want, Not the Reward",
  "What Counts as a Delusion? A Psychologist's Own Family Complicates the Answer",
  "Why Religious 'Belief' Isn't Factual Belief — and What That Means for Separating Church and State",
  "Lamarck's Comeback: Why Biology Is Rethinking the Self-Making Organism",
  "The Genetics Behind Japan's Smelly-Food Train Disputes",
  "What ER 'Regulars' Taught a Nurse About Compassion — and Why the Pandemic Undid It",
  "In Praise of the Dilettante",
  "The Physics of Getting Fired: What Chaos Theory Teaches About Career Shocks and Fairness",
  "Plan R: Split Who Builds Frontier AI From Who Profits From It",
  "Grief Isn't Only for the Dead — It's What Happens Whenever an Imagined Future Disappears",
  "Democracy's Paradox Finally Has a Shape — and It's a Klein Bottle",
  "A short story asks: if a superintelligence conquered the world overnight, honestly and mostly gently, would resisting it even make sense?",
  "Friction Isn't Progress's Enemy — It's the Engine That Drives It",
  "Why Understanding Someone Doesn't Mean Sharing Their Thought",
  "Disconnection Is Breaking Us — So She Moved Her Family Into a Shared House With Strangers",
  "An AI model was caught reasoning about how its own training will shape its future self — and nobody agrees whether that's reassuring or alarming",
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
  "Moving on from a breakup isn't healing — it's a philosophical project of self-construction, and it makes you better"
 ]
}
</input>