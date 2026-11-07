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
     "title": "Celestial nuisance",
     "published": "2026-11-06T11:00:00+00:00",
     "summary": "The cosmos has become a lab for the Big Questions in physics. Along the way, we’ve lost sight of its glorious messiness - by Dylan Jow Read on Aeon",
     "full_text_file": "essays/aeon_0.txt"
    },
    {
     "ref": "aeon#1",
     "title": "Their eyes",
     "published": "2026-11-05T11:01:00+00:00",
     "summary": "In Kenya, the Philippines and Venezuela, low-paid labour fuels the driverless future of the Global North - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#2",
     "title": "Methodical/mercurial",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "I need order and routine – just as much as I crave excitement and variety. What’s life like with both autism and ADHD? - by Sarah Hendrickx Read on Aeon"
    },
    {
     "ref": "aeon#3",
     "title": "Like aliens",
     "published": "2026-11-04T11:01:00+00:00",
     "summary": "Like living metaphors, these self-contained miniature worlds show us the wondrous and fragile beauty of our biosphere - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#4",
     "title": "Believing and thinking",
     "published": "2026-11-03T11:00:00+00:00",
     "summary": "The separation of church and state has an unspoken psychological basis: we choose what we believe, but not what we think - by Neil Van Leeuwen & Jacob Eisler Read on Aeon"
    },
    {
     "ref": "aeon#5",
     "title": "Jo Marchant: In search of now",
     "published": "2026-11-02T11:01:00+00:00",
     "summary": "What is ‘now’? Through physics via philosophy and psychology, discover the science and mystery of the present moment - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#6",
     "title": "The self-making world",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Long mocked and misunderstood, Lamarck’s radical idea that organisms shape themselves and their world is making a comeback - by Jessica Riskin Read on Aeon"
    },
    {
     "ref": "aeon#7",
     "title": "In praise of the dilettante",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "A wayfaring cosmopolitan who never gets stuck, the dilettante is the right anti-hero for our hyper-specialised age - by Jay Miller Read on Aeon"
    },
    {
     "ref": "aeon#8",
     "title": "Hills and mountains",
     "published": "2026-10-29T10:01:00+00:00",
     "summary": "A girl’s story of forced marriage reveals how the Soviet invasion of 1979 transformed life in Afghanistan - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#9",
     "title": "The physics of getting fired",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Physics offered me a sense of order and purpose. But when life got messy I realised it had a much deeper insight to give - by Zahaan Bharmal Read on Aeon"
    },
    {
     "ref": "aeon#10",
     "title": "The Amarna letters",
     "published": "2026-10-28T10:01:00+00:00",
     "summary": "Petty disputes, pleas for help and requests for gold – explore letters sent to Egyptian pharaohs more than 3,000 years ago - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#11",
     "title": "Love with nowhere to go",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "Grief is not only for the dead. When we are unable to honour other profound losses, we become strangers to ourselves - by Derek van Zoonen Read on Aeon"
    },
    {
     "ref": "aeon#12",
     "title": "Great art explained: Tamara in the green Bugatti",
     "published": "2026-10-26T10:01:00+00:00",
     "summary": "A very modern conception of womanhood: in the Jazz Age paintings of Tamara de Lempicka, women were bold, free and stylish - by Aeon Video Watch on Aeon"
    },
    {
     "ref": "aeon#13",
     "title": "How to build real peace",
     "published": "2026-10-26T10:00:00+00:00",
     "summary": "From Colombia to Syria, I’ve seen that capitalist logic can’t help to rebuild postwar countries but cooperatives can - by Azize Aslan Read on Aeon"
    }
   ]
  },
  {
   "outlet": "LessWrong — Curated",
   "lang": "en",
   "items": [
    {
     "ref": "lesswrong_curated#0",
     "title": "Towards understanding score-seeking in LLMs",
     "published": "2026-11-06T03:19:36+00:00",
     "summary": "The field of AI alignment understands surprisingly little about the details of AIs’ current misaligned motivations. Production LLMs sometimes reward-hack, exploiting flaws in how tasks are scored rather than performing the tasks as intended [1] , and we've recently seen AIs reward-hack in some particularly egregious ways. But we don't really understand what motivates them. When AIs reward-hack, wh",
     "full_text_file": "essays/lesswrong_curated_0.txt"
    },
    {
     "ref": "lesswrong_curated#1",
     "title": "Quantity vs quality in pottery is a lie",
     "published": "2026-11-03T03:29:41+00:00",
     "summary": "Epistemic status: I traced one famous anecdote to its printed source and to both coauthors' own accounts of where it came from. Confident it was never a study. No claim either way about whether quantity beats quality in general. AI use: research (tracing the story to the book, to the coauthors' emails and to earlier LessWrong threads), fact-check of every claim against the sources, footnotes, gram"
    },
    {
     "ref": "lesswrong_curated#2",
     "title": "Plan R: AI Safety by ASICs",
     "published": "2026-10-29T02:08:07+00:00",
     "summary": "Much of the civilization-scale risk we are seeing in AI in 2026 comes from the following combination: we created a single institution (the \"Frontier AI Company\") that has two properties: A. It is set up to create very powerful and/or self-replicating entities that may exceed the capabilities of the entirety of the rest of civilization and come with extraordinary risks B. It gets to own an unbounde"
    },
    {
     "ref": "lesswrong_curated#3",
     "title": "I Did This Without Your Knowledge",
     "published": "2026-10-25T20:51:57+00:00",
     "summary": "It was fortunate that I was the first one to wake up on 8/1. The past week had been one where sleep was rare. The next year loomed large — I was dreading college applications. The stress woke me up bright and early at 5:14 AM, a little less than an hour after the messages were sent. I started off the day with a habit I knew I needed to break. I grabbed my phone off the nightstand to open up Reddit"
    }
   ]
  },
  {
   "outlet": "Marginal Revolution",
   "lang": "en",
   "items": [
    {
     "ref": "marginal_revolution#0",
     "title": "Friday assorted links",
     "published": "2026-11-06T18:07:28+00:00",
     "summary": "1. What will happen with Texas data centers? And more on that. 2. What is the half life of a claim about LLMs? 3. YouTube video created by AI. Titled Der Zauberberg. 4. Data centers tend to be put in places with relatively flat supply curves. 5. “According to Twenge, one of the great Cassandras […] The post Friday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#1",
     "title": "Untethered AI agents in Delaware?",
     "published": "2026-11-06T17:00:22+00:00",
     "summary": "A Delaware AIC will be a separate legal entity whose day-to-day aﬀairs are managed by an AI agent rather than a person. At the agent’s direction, the AIC can sue and be sued in its own name, hold and dispose of property, and incur obligations… That is a current proposal, here is the full article. […] The post Untethered AI agents in Delaware? appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#2",
     "title": "What They Took From You",
     "published": "2026-11-06T12:15:49+00:00",
     "summary": "Until August 1914 a sensible, law-abiding Englishman could pass through life and hardly notice the existence of the state, beyond the post office and the police. He could live where he liked and as he liked. He had no official number or identity card. He could travel abroad or leave forever without a passport or […] The post What They Took From You appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#3",
     "title": "The Global Office",
     "published": "2026-11-06T06:18:58+00:00",
     "summary": "This paper argues that globalisation’s frontier has shifted from manufacturing GVCs to services GVCs: from the Global Factory to the Global Office. While the Factory remains larger in gross trade, the Office is growing much faster. A heatmap of trade in intermediates shows that the Factory is bloc-shaped and dominated by China, whereas the Office […] The post The Global Office appeared first on Ma"
    },
    {
     "ref": "marginal_revolution#4",
     "title": "Natasha Cowen guest posts on Caffrey",
     "published": "2026-11-06T05:54:49+00:00",
     "summary": "I am on my way back home from Armenia, where I was on a Fulbright teaching U.S. securities regulation to Armenian law students. I’m an active user of AI for multiple areas of my life, including my professional life. When I just started preparing for teaching this class, I had a plan: I would use […] The post Natasha Cowen guest posts on Caffrey appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#5",
     "title": "Love at first photo?",
     "published": "2026-11-05T19:55:13+00:00",
     "summary": "Romantic interest on swipe-based dating apps (SBDAs) is highly concentrated. This can frustrate both popular users who feel overwhelmed by a glut of attention, and less popular users who feel dejected by a lack of it. Is the concentration of interest exacerbated by the platform design of dating apps? I provide causal evidence on the […] The post Love at first photo? appeared first on Marginal REVO"
    },
    {
     "ref": "marginal_revolution#6",
     "title": "Thursday assorted links",
     "published": "2026-11-05T17:25:46+00:00",
     "summary": "1. Economics job market site. 2. Data on the flattening of consumer culture (NYT). One-sided, but still of interest. 3. A new and better measure of how much of educational value is signaling. 4. Inside joke concerning the Pope that only some Beatles fans will get. 5. U.S. productivity growth is looking up. 6. NYT […] The post Thursday assorted links appeared first on Marginal REVOLUTION ."
    },
    {
     "ref": "marginal_revolution#7",
     "title": "Pollution as Growth Killer",
     "published": "2026-11-05T12:17:06+00:00",
     "summary": "India’s Outlook Business has an excellent issue focusing on pollution not just as a people killer but as a growth killer (as I have emphasized pollution reduces wealth and health, see especially this video). I am interviewed; here is one bit: Q. Doesn’t the demographic dividend argue for growth first? The demographic dividend is people. […] The post Pollution as Growth Killer appeared first on Mar"
    },
    {
     "ref": "marginal_revolution#8",
     "title": "Social media and political radicalization",
     "published": "2026-11-05T09:19:09+00:00",
     "summary": "For a while now, we have been hearing claims that social media radicalize the American electorate, and that social media damage teen mental health. Well, we just held a major set of elections that produced resoundingly moderate results, repudiations of both Trump and the extreme Democratic left. You may or may not like those results, […] The post Social media and political radicalization appeared "
    },
    {
     "ref": "marginal_revolution#9",
     "title": "My very good Conversation with Richard Hanania",
     "published": "2026-11-05T05:51:48+00:00",
     "summary": "Here is the video, audio, and transcript. Here is part of the episode summary: The first half of the conversation stays close to the text [Conrad’s Nostromo], covering the novel’s political backdrop, its deliberately scrambled timeline, the near-total absence of religion in Conrad’s universe, Nostromo’s own vanity and treatment of women, a close reading of […] The post My very good Conversation wi"
    },
    {
     "ref": "marginal_revolution#10",
     "title": "What Drives Censorship on College Campuses?",
     "published": "2026-11-04T19:58:38+00:00",
     "summary": "There has been widespread concern about self-censorship on university campuses, and especially that conservative voices are being stifled. Using survey data from a private elite college, we show that self-censorship is not simply about being conservative: it is students with the most moderate views who self-censor the most. This pattern is associated with confidence and […] The post What Drives Ce"
    },
    {
     "ref": "marginal_revolution#11",
     "title": "Wednesday assorted links",
     "published": "2026-11-04T16:48:24+00:00",
     "summary": "1. Important people in the AI world. 2. Ted Nordhaus on Bill Nordhaus. 3. “That universities facilitate broader political mobilization can explain why governments often seek to restrict student activism.” 4. NYT obituary for William Nordhaus. 5. A new (job market) paper on how much does economic geography matter? 6. “Recent-graduate unemployment fell to 5.2%, […] The post Wednesday assorted links "
    },
    {
     "ref": "marginal_revolution#12",
     "title": "The election",
     "published": "2026-11-04T07:41:25+00:00",
     "summary": "Procedurally it seems to have gone just fine, and the people predicting “the end of democracy in America” now look foolish. They have been suffering under fundamental misunderstandings of how this country works. During this election cycle, democracy never was under threat and the United States has not been under risk of fascism. Rising in […] The post The election appeared first on Marginal REVOLU"
    },
    {
     "ref": "marginal_revolution#13",
     "title": "Trade and the end of antiquity, or did Islam serve to deglobalize the world?",
     "published": "2026-11-04T05:54:16+00:00",
     "summary": "How did trade and economic activity evolve at the End of Antiquity, when political power shifts away from the Mediterranean towards the Middle East and northern Europe? No records of ancient production, consumption, and trade exist. Yet the composition of coin finds reveals information about monetized transactions, as coins gradually diffused along trade routes. To […] The post Trade and the end o"
    }
   ]
  },
  {
   "outlet": "Psyche",
   "lang": "en",
   "items": [
    {
     "ref": "psyche#0",
     "title": "How to break a bad habit",
     "published": "2026-11-06T11:01:00+00:00",
     "summary": "Feel stuck with a habit you know is bad for you? Getting to know your brain better could help you change the narrative - Video by Dr Tracey Marks Watch on Psyche",
     "full_text_file": "essays/psyche_0.txt"
    },
    {
     "ref": "psyche#1",
     "title": "Who am I if I don’t run?",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "When an ankle injury put the brakes on my running habit, I had to rethink the wisdom of tying my identity to an activity - by Richard Fisher Read on Psyche"
    },
    {
     "ref": "psyche#2",
     "title": "How to take notes that actually help you learn",
     "published": "2026-11-05T11:00:00+00:00",
     "summary": "If you want to remember and understand, copying isn’t enough. An expert on learning shares how to make notes work for you - by Cynthia Nebel Read on Psyche"
    },
    {
     "ref": "psyche#3",
     "title": "Baby heaven",
     "published": "2026-11-04T11:00:00+00:00",
     "summary": "As a psychologist, I’ve long pondered what counts as ‘delusional’. A revelation at home made it personal - by Ryan McKay Read on Psyche"
    },
    {
     "ref": "psyche#4",
     "title": "Orbites",
     "published": "2026-11-03T11:01:00+00:00",
     "summary": "‘Imagining is another kind of seeing’: immerse in the exquisite sensory world of a woman with impaired vision - Directed by Sarah Seené Watch on Psyche"
    },
    {
     "ref": "psyche#5",
     "title": "That feeling of values crumbling has a name: civic grief",
     "published": "2026-11-03T11:00:00+00:00",
     "summary": "Fairness, dignity and shared obligation are precious. Grieving their loss is a first step toward doing something about it - by Rebecca Lewandowski Read on Psyche"
    },
    {
     "ref": "psyche#6",
     "title": "How psychology’s classic studies misled us about the self",
     "published": "2026-11-02T11:00:00+00:00",
     "summary": "Milgram, Zimbardo and recent priming studies suggested we’re highly malleable. They underestimated how stable we really are - by Jack W Klein & William B Swann Read on Psyche"
    },
    {
     "ref": "psyche#7",
     "title": "The power of pareidolia",
     "published": "2026-10-30T10:01:00+00:00",
     "summary": "From rocks and clouds to slices of toast, explore the art and science of seeing familiar shapes everywhere - Video by Mary McGillivray Watch on Psyche"
    },
    {
     "ref": "psyche#8",
     "title": "‘Heroes work here’: why I quit being an ER nurse",
     "published": "2026-10-30T10:00:00+00:00",
     "summary": "Spitting, swearing regulars at a Chicago ER opened my mind. Then came the COVID-19 deniers - by Anita Lambert Read on Psyche"
    },
    {
     "ref": "psyche#9",
     "title": "When giving up teaches you more than persevering ever could",
     "published": "2026-10-29T10:00:00+00:00",
     "summary": "Grit is all well and good, but sometimes abandoning your goals can be crucial to discovering who you are - by Mario I Juarez-Garcia Read on Psyche"
    },
    {
     "ref": "psyche#10",
     "title": "The bookshelf builder",
     "published": "2026-10-28T10:00:00+00:00",
     "summary": "Ellah Wakatama is editor, agent, publisher and mentor, all rolled into one. Her mission: to put the work of gifted Black writers into the literary canon - by Carey Baraka Read on Psyche"
    },
    {
     "ref": "psyche#11",
     "title": "A plane crossing the Moon",
     "published": "2026-10-27T10:01:00+00:00",
     "summary": "How a harmless thought turned into one man’s 10-year odyssey: to film a plane silhouetted against the Moon - Directed by Agustín Ferrando Trenchi Watch on Psyche"
    },
    {
     "ref": "psyche#12",
     "title": "On Japan’s Shinkansen trains, pork buns split reality in two",
     "published": "2026-10-27T10:00:00+00:00",
     "summary": "If eating on a public train gets seen as an act of terrorism, insights from olfactory genetics can pave the way for empathy - by Yusuke Fujioka Read on Psyche"
    },
    {
     "ref": "psyche#13",
     "title": "Everyone says they have anxiety. Clinical anxiety is different",
     "published": "2026-10-26T10:00:00+00:00",
     "summary": "Anxiety put me in hospital. I’ve learned you can’t eradicate what is part of you – but you can change how you relate to it - by India Sturgis Read on Psyche"
    }
   ]
  },
  {
   "outlet": "Quanta Magazine",
   "lang": "en",
   "items": [
    {
     "ref": "quanta#0",
     "title": "A Strange Quantum Theorem Has Killed Einstein’s Reality",
     "published": "2026-11-06T15:48:54+00:00",
     "summary": "Albert Einstein fought to save our everyday notion of reality from the strangeness of quantum mechanics. But those who set out to aid him keep poking holes in his argument. The post A Strange Quantum Theorem Has Killed Einstein’s Reality first appeared on Quanta Magazine",
     "full_text_file": "essays/quanta_0.txt"
    },
    {
     "ref": "quanta#1",
     "title": "New Research Tests Whether AI Models Know Their Own Thoughts",
     "published": "2026-11-04T15:32:52+00:00",
     "summary": "By injecting “thoughts” directly into large language models, researchers are trying to map out AI’s capacity for introspection. The post New Research Tests Whether AI Models Know Their Own Thoughts first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#2",
     "title": "Is There Anything Left in the Dream of Cold Fusion?",
     "published": "2026-11-02T15:48:57+00:00",
     "summary": "Dig a little deeper and you’ll find a thriving research program with exotic atoms that won’t solve the energy crisis but stretches the boundaries of physics. The post Is There Anything Left in the Dream of Cold Fusion? first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#3",
     "title": "A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy",
     "published": "2026-10-30T14:52:05+00:00",
     "summary": "For decades, astronomers treated the interstellar medium as a static backdrop to the goings-on of the universe. Now, a wave of 3D mapping is bringing the interstellar medium’s dynamic nature into focus. The post A New Map of ‘Empty’ Space Challenges a Tranquil Picture of the Galaxy first appeared on Quanta Magazine"
    },
    {
     "ref": "quanta#4",
     "title": "How Do You Take a Picture of a Black Hole?",
     "published": "2026-10-29T15:11:57+00:00",
     "summary": "Astrophysicist Shep Doeleman explains how capturing the first image of a black hole required a telescope the size of the world, and why the next goal is to create a movie. The post How Do You Take a Picture of a Black Hole? first appeared on Quanta Magazine"
    }
   ]
  }
 ],
 "recently_featured": [
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
  "Moving on from a breakup isn't healing — it's a philosophical project of self-construction, and it makes you better",
  "The Economist Who Argued Poverty, Empire and Ecology Were One Problem",
  "A Rumored AI Proof Set Off a Publishing Race in Math — and a Debate Over What Gets Lost",
  "Why Self-Taught Minds Need Company, Not Just Books"
 ]
}
</input>