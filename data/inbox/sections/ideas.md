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
     "title": "Jo Marchant: In search of now",
     "published": "2026-11-02T11:01:00+00:00",
     "summary": "What is ‘now’? Through physics via philosophy and psychology, discover the science and mystery of the present moment - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#1",
     "title": "The self-making world",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Long mocked and misunderstood, Lamarck’s radical idea that organisms shape themselves and their world is making a comeback - by Jessica Riskin Read on Aeon",
     "full_text_file": "essays/aeon_1.txt"
    },
    {
     "ref": "aeon#2",
     "title": "In praise of the dilettante",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "A wayfaring cosmopolitan who never gets stuck, the dilettante is the right anti-hero for our hyper-specialised age - by Jay Miller Read on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Hills and mountains",
     "published": "2026-10-29T10:01:00+00:00",
     "summary": "A girl’s story of forced marriage reveals how the Soviet invasion of 1979 transformed life in Afghanistan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "The physics of getting fired",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Physics offered me a sense of order and purpose. But when life got messy I realised it had a much deeper insight to give - by Zahaan Bharmal Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "The Amarna letters",
     "published": "2026-10-28T10:01:00+00:00",
     "summary": "Petty disputes, pleas for help and requests for gold – explore letters sent to Egyptian pharaohs more than 3,000 years ago - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "Love with nowhere to go",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "Grief is not only for the dead. When we are unable to honour other profound losses, we become strangers to ourselves - by Derek van Zoonen Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "Great art explained: Tamara in the green Bugatti",
     "published": "2026-10-26T10:01:00+00:00",
     "summary": "A very modern conception of womanhood: in the Jazz Age paintings of Tamara de Lempicka, women were bold, free and stylish - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "How to build real peace",
     "published": "2026-10-26T10:00:00+00:00",
     "summary": "From Colombia to Syria, I’ve seen that capitalist logic can’t help to rebuild postwar countries but cooperatives can - by Azize Aslan Read on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "Traction!",
     "published": "2026-10-23T10:00:00+00:00",
     "summary": "Tribologists study friction: what happens when things rub together. It’s indispensable, from the wheel to the paths of stars - by Jennifer R Vail Read on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "Bhutan: the last place",
     "published": "2026-10-22T10:01:00+00:00",
     "summary": "What happened when people in Bhutan, the last country on Earth without television, were allowed to watch it in 1999? - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "Other people",
     "published": "2026-10-22T10:00:00+00:00",
     "summary": "Disconnection is at the heart of today’s crises. So my husband and I chose a radical and revealing remedy: living communally - by Elizabeth Oldfield Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "When it started to burn",
     "published": "2026-10-21T10:01:00+00:00",
     "summary": "Horrific violence, enduring terror and ceaseless solidarity: four years of war through the eyes of Ukrainian civilians - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "How intuitions work",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "Just as seeing a tree gives you reason to believe it’s there, sensing that a stranger is creepy gives you reason to walk away - by Marc A Moffett Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "Quantity vs quality in pottery is a lie",
     "published": "2026-11-03T03:29:41+00:00",
     "summary": "Epistemic status: I traced one famous anecdote to its printed source and to both coauthors' own accounts of where it came from. Confident it was never a study. No claim either way about whether quantity beats quality in general. AI use: research (tracing the story to the book, to the coauthors' emails and to earlier LessWrong threads), fact-check of every claim against the sources, footnotes, gram",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "Plan R: AI Safety by ASICs",
     "published": "2026-10-29T02:08:07+00:00",
     "summary": "Much of the civilization-scale risk we are seeing in AI in 2026 comes from the following combination: we created a single institution (the \"Frontier AI Company\") that has two properties: A. It is set up to create very powerful and/or self-replicating entities that may exceed the capabilities of the entirety of the rest of civilization and come with extraordinary risks B. It gets to own an unbounde"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "I Did This Without Your Knowledge",
     "published": "2026-10-25T20:51:57+00:00",
     "summary": "It was fortunate that I was the first one to wake up on 8/1. The past week had been one where sleep was rare. The next year loomed large — I was dreading college applications. The stress woke me up bright and early at 5:14 AM, a little less than an hour after the messages were sent. I started off the day with a habit I knew I needed to break. I grabbed my phone off the nightstand to open up Reddit"
    },
    {
     "ref": "lesswrong_curated#3",
     "title": "GLM-5.3 Sometimes Considers How Train-Time Actions Shape Future Behavior",
     "published": "2026-10-20T20:26:31+00:00",
     "summary": "Authors: Axel Højmark*, Ezra Newman* (*Equal contribution) While reviewing transcripts from standard behavioral evaluations of GLM-5.3, we noticed that the model occasionally reasons, unprompted, about how its actions will shape future models. It appears to consider that its outputs might be used for supervised fine-tuning (SFT), reinforcement learning (RL), or other forms of training, and that th"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "The economics of tips",
     "published": "2026-11-03T07:58:10+00:00",
     "summary": "Tipping is large and growing, but we know little about its consequences for workers and firms. We link point-of-sale and payroll records at 20,000 U.S. firms, which lets us observe tips from customer payment to worker earnings. We find that tips are a nearly constant share of revenue, which means hourly pay moves with revenue. […] The post The economics of tips appeared first on Marginal REVOLUTIO"
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Are economists declining in status?",
     "published": "2026-11-03T05:22:51+00:00",
     "summary": "That is the theme of my latest Free Press article. Excerpt, which offers the beginning of the story: If we look at the 1960s, the John F. Kennedy and Lyndon Baines Johnson administrations brought James Tobin, Robert Solow, Kenneth Arrow (all three later Nobel laureates), Arthur Okun, Walter Heller, Gardner Ackley, Otto Eckstein, and Walt […] The post Are economists declining in status? appeared fi"
    },
    {
     "ref": "marginal_revolution#2",
     "title": "*Fjord* and *Fatherland*",
     "published": "2026-11-02T19:44:38+00:00",
     "summary": "Both of these movies I found worth watching. Fjord won the Golden Prize at Cannes, and it concerns the rights of the family vs. the rights of the state, when it comes to raising children. As I interpreted the story, it was so right-wing and so based I am shocked it won. It is by […] The post *Fjord* and *Fatherland* appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#3",
     "title": "Monday assorted links",
     "published": "2026-11-02T17:13:35+00:00",
     "summary": "1. Why is it now so common to be asked about your food allergies? (GPT Pro answer) 2. Training for alignment, applies principal-agent theory. 3. Do people offload empathy when they think AI can give it instead? 4. The Wallace line. 5. AI can draw blueprints now. 6. Ed Glaeser review of the new book […] The post Monday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#4",
     "title": "Expensive Pharmaceuticals for Targeted Diseases",
     "published": "2026-11-02T12:16:34+00:00",
     "summary": "My latest paper, The Price of a Cure: Luxturna and the Economic Dilemmas of Precision Medicine, is in the Journal of Law, Medicine and Ethics. I discuss the economics of the pharmaceutical industry and the special issues that arise with targeted drugs that cure. We are going to get many more of these drugs in […] The post Expensive Pharmaceuticals for Targeted Diseases appeared first on Marginal R"
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Should you feel grief for the dead who go to heaven?",
     "published": "2026-11-02T05:24:47+00:00",
     "summary": "I am not myself religious, but let us consider the possible gulf between behavior and doctrine amongst those who are. It has long struck me as a kind of mini-puzzle why people feel so much grief for the departed, at least for the departed who are supposed to be headed for heaven (and yes there […] The post Should you feel grief for the dead who go to heaven? appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#6",
     "title": "As predicted, the ACA exchanges seem not to be stable",
     "published": "2026-11-01T19:53:38+00:00",
     "summary": "The average price of health insurance in the Obamacare marketplaces will rise by 13 percent next year, according to an analysis on Friday by KFF, the health research group. The Trump administration on Friday published new prices for 2027 in 30 states with markets managed by the federal government. Using that data and state figures, […] The post As predicted, the ACA exchanges seem not to be stable"
    },
    {
     "ref": "marginal_revolution#7",
     "title": "Sunday assorted links",
     "published": "2026-11-01T16:31:04+00:00",
     "summary": "1. Jakob Davidsen, The Individual and the Entire Tissue (song cycle). It is good. 2. The Oilers Entertainment Group pushed prices too high and here is what happened. 3. The “endless cruise” has ended. 4. Should driverless vehicles replace school buses? 5. Art Nouveau and more in Mexico City. 6. How are potential mathematicians responding […] The post Sunday assorted links appeared first on Margina"
    },
    {
     "ref": "marginal_revolution#8",
     "title": "What are the Worst MR Posts?",
     "published": "2026-11-01T12:18:51+00:00",
     "summary": "What are the worst MR posts, most illogical, poorly reasoned, low value, inconsistent? From the Archives, written by ChatGPT: These are provisional candidates for weak reasoning, selected because there is a specific gap between the evidence and the conclusion. This is not an objective ranking of all 40,326 posts in the downloaded archive. Poor reasoning […] The post What are the Worst MR Posts? ap"
    },
    {
     "ref": "marginal_revolution#9",
     "title": "Those new service sector jobs?",
     "published": "2026-11-01T07:55:35+00:00",
     "summary": "A suburban Chicago man has been sentenced to two years in federal prison for conspiring to stage armed robberies so that the purported victims could apply for U.S. immigration visas reserved for crime victims. From 2022 to 2024, PARTH NAYI organized and participated in hundreds of staged armed robberies at coffee shops, restaurants, liquor stores, and gas […] The post Those new service sector jobs"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "Are LLMs good or bad Bayesians?",
     "published": "2026-11-01T04:17:10+00:00",
     "summary": "Bryan Caplan: It seems like you and other AIs are bad Bayesians. When presented with counterevidence, you should move toward or against the presenter with roughly equal probability. It depends on whether the argument was better or worse than expected. In fact, you seem to either move toward the speaker or just not change. ChatGPT: […] The post Are LLMs good or bad Bayesians? appeared first on Marg"
    },
    {
     "ref": "marginal_revolution#11",
     "title": "William Nordhaus, RIP",
     "published": "2026-10-31T18:33:58+00:00",
     "summary": "Here is notice from Yale, and from Paul Krugman, he was one of the true greats. For the pointer I thank several MR readers. The post William Nordhaus, RIP appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#12",
     "title": "And so it begins…",
     "published": "2026-10-31T18:21:28+00:00",
     "summary": "Researchers, I just uploaded a prominent QJE paper on climate change economics to @RefineDotInk and I loaded my critique of the paper. I asked the AI to offer an impartial verdict. I will make this report public. A new journal could collect these into “Special Issues”. That is from Matthew E. Kahn. The post And so it begins… appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#13",
     "title": "Saturday assorted links",
     "published": "2026-10-31T16:16:45+00:00",
     "summary": "1. Organizing Intelligence. 2. World Bank African urbanization report. Building out African cities in a decent way could end up being the task of our coming era. 3. Summary of The Commanding Heights. 4. “Meanwhile in Armenia…” 5. “Female psychopathology has worsened despite increased resources and opportunities, suggesting it does not entirely reflect absolute deprivation, […] The post Saturday as"
    },
    {
     "ref": "marginal_revolution#14",
     "title": "My Barcelona talk",
     "published": "2026-10-31T13:29:19+00:00",
     "summary": "Wednesday, November 4, 18:30 Barcelona time, details here. I am honored to have won the Elinor Ostrom Prize from the Institut Ostrom Catalunya. Maybe see you there! The post My Barcelona talk appeared first on Marginal REVOLUTION ."
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "How psychology’s classic studies misled us about the self",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Milgram, Zimbardo and recent priming studies suggested we’re highly malleable. They underestimated how stable we really are - by Jack W Klein & William B Swann Read on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "The power of pareidolia",
     "published": "2026-10-30T10:01:00+00:00",
     "summary": "From rocks and clouds to slices of toast, explore the art and science of seeing familiar shapes everywhere - Video by Mary McGillivray Watch on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "‘Heroes work here’: why I quit being an ER nurse",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "Spitting, swearing regulars at a Chicago ER opened my mind. Then came the COVID-19 deniers - by Anita Lambert Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "When giving up teaches you more than persevering ever could",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Grit is all well and good, but sometimes abandoning your goals can be crucial to discovering who you are - by Mario I Juarez-Garcia Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "The bookshelf builder",
     "published": "2026-10-28T10:00:00+00:00",
     "summary": "Ellah Wakatama is editor, agent, publisher and mentor, all rolled into one. Her mission: to put the work of gifted Black writers into the literary canon - by Carey Baraka Read on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "A plane crossing the Moon",
     "published": "2026-10-27T10:01:00+00:00",
     "summary": "How a harmless thought turned into one man’s 10-year odyssey: to film a plane silhouetted against the Moon - Directed by Agustín Ferrando Trenchi Watch on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "On Japan’s Shinkansen trains, pork buns split reality in two",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "If eating on a public train gets seen as an act of terrorism, insights from olfactory genetics can pave the way for empathy - by Yusuke Fujioka Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "Everyone says they have anxiety. Clinical anxiety is different",
     "published": "2026-10-26T10:00:00+00:00",
     "summary": "Anxiety put me in hospital. I’ve learned you can’t eradicate what is part of you – but you can change how you relate to it - by India Sturgis Read on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "Can you ever really think what someone else is thinking?",
     "published": "2026-10-23T10:00:00+00:00",
     "summary": "To see how communication truly works, we should set aside the notion that different people can share the same thoughts - by Víctor Verdejo Read on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "How to live a life of awe",
     "published": "2026-10-22T10:01:00+00:00",
     "summary": "You don’t need to climb Kilimanjaro or see the Northern Lights to experience the benefits of awe. It’s everywhere if you look - Video by the University of California and the Greater Good Science Center Watch on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "Why romantic relationships matter more to men than to women",
     "published": "2026-10-22T10:00:00+00:00",
     "summary": "For too long, men were told to be self-sufficient. The research shows they’re more likely to thrive in a loving couple - by Iris Wahring Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "Dear Al Pacino",
     "published": "2026-10-21T10:00:00+00:00",
     "summary": "I wrote my mother’s mad letters to celebrities. It was the only time we shared the same plane of reality - by Joe Mullich Read on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "Are you getting enough sun?",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "The new book ‘In Defense of Sunlight’ argues that our concerns about the sun’s risks lead us to overlook its benefits - by Hannah Seo Read on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "How to overcome task paralysis",
     "published": "2026-10-20T10:00:00+00:00",
     "summary": "If you have ADHD or you’re stressed, tired and stuck, goal management training can help you get started and keep going - by Joe Wilner Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "Is There Anything Left in the Dream of Cold Fusion?",
     "published": "2026-11-02T15:48:57+00:00",
     "summary": "Dig a little deeper and you’ll find a thriving research program with exotic atoms that won’t solve the energy crisis but stretches the boundaries of physics. The post Is There Anything Left in the Dream of Cold Fusion? first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy",
     "published": "2026-10-30T14:52:05+00:00",
     "summary": "For decades, astronomers treated the interstellar medium as a static backdrop to the goings-on of the universe. Now, a wave of 3D mapping is bringing the interstellar medium’s dynamic nature into focus. The post A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "How Do You Take a Picture of a Black Hole?",
     "published": "2026-10-29T15:11:57+00:00",
     "summary": "Astrophysicist Shep Doeleman explains how capturing the first image of a black hole required a telescope the size of the world, and why the next goal is to create a movie. The post How Do You Take a Picture of a Black Hole? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "How Spiders Spin ‘Silk Dope’ Into Nature’s Toughest Material",
     "published": "2026-10-28T16:04:18+00:00",
     "summary": "By probing its molecular structure, biologists are uncovering how a tangle of unstructured proteins turns into a strong, flexible fiber. The post How Spiders Spin ‘Silk Dope’ Into Nature’s Toughest Material first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "How Voting Is Like a Klein Bottle",
     "published": "2026-10-26T14:54:29+00:00",
     "summary": "A new topological model connects a centuries-old voting paradox to a surface with no distinct inside or outside. The post How Voting Is Like a Klein Bottle first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
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
  "Moving on from a breakup isn't healing — it's a philosophical project of self-construction, and it makes you better",
  "The Economist Who Argued Poverty, Empire and Ecology Were One Problem",
  "A Rumored AI Proof Set Off a Publishing Race in Math — and a Debate Over What Gets Lost",
  "Why Self-Taught Minds Need Company, Not Just Books",
  "To Understand Science, Stop Chasing New Studies — Start Synthesizing Them",
  "When Machines Solve the Proofs, What Is Mathematics For?",
  "Sea Monkeys Reveal a Hidden Switch in Turbulence's Energy Flow",
  "To Keep a Self, Write Down What You'd Otherwise Forget"
 ]
}
</input>