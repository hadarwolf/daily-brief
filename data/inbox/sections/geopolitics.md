Write the Geopolitics section: 1-2 major world stories.

- Choose stories with real second-order effects: on conflicts, alliances, markets, energy, technology, or Israel's position.
- Don't just restate the headline. Give context: what led here, who wants what, and what changes next. Prefer stories that several outlets cover.
- Leave out Israeli domestic politics, which has its own section. Israel's wars and foreign relations are fine when they are the biggest world story.
- Use kind "analysis".

This section opens in English by default, so make the English version your best writing.

Output: write `drafts/geopolitics.json` matching `schemas/geopolitics.schema.json`.

<input>
{
 "news_feeds": [
  {
   "outlet": "BBC News — World",
   "lang": "en",
   "items": [
    {
     "ref": "bbc_world#0",
     "title": "Judge temporarily blocks Trump from closing Washington DC golf course for renovation",
     "published": "2026-11-15T03:21:04+00:00",
     "summary": "It is the latest development in a months-long challenge to the president's plans for East Potomac Golf Links."
    },
    {
     "ref": "bbc_world#1",
     "title": "Pope Leo speaks of community 'suffering' on visit to remote Andes town",
     "published": "2026-11-15T02:49:45+00:00",
     "summary": "Santa Cruz de Succhabamba is part of the Diocese of Chiclayo, where the pope served as bishop from 2015 to 2023."
    },
    {
     "ref": "bbc_world#2",
     "title": "My mother told me I would die if I sought treatment for Ebola - I am proof you can survive",
     "published": "2026-11-15T00:06:55+00:00",
     "summary": "Fear and misinformation surrounds the Ebola outbreak in DR Congo - Dr Kamwanga's mother was not immune."
    },
    {
     "ref": "bbc_world#3",
     "title": "Judo champion shakes up French presidential race with surprise candidacy",
     "published": "2026-11-15T00:06:51+00:00",
     "summary": "Teddy Riner is one of the most popular figures in modern-day France, and one in five voters say they could support him."
    },
    {
     "ref": "bbc_world#4",
     "title": "How telecoms upgrade work sparked US flight chaos",
     "published": "2026-11-14T23:11:27+00:00",
     "summary": "US officials say the disruption was caused by old equipment overloading and not a cyber-attack."
    },
    {
     "ref": "bbc_world#5",
     "title": "US has floated Ukraine ceding Donbas for Nato membership, Zelensky says",
     "published": "2026-11-14T22:37:25+00:00",
     "summary": "The US has not confirmed the Ukrainian president's comments - a US official told the BBC \"many ideas continue to be discussed\"."
    },
    {
     "ref": "bbc_world#6",
     "title": "'Can you believe it?': SpaceX catches part of its Starship rocket on return to Earth",
     "published": "2026-11-14T22:09:40+00:00",
     "summary": "SpaceX has performed the historic catch using mechanical arms nicknamed \"chopsticks\"."
    },
    {
     "ref": "bbc_world#7",
     "title": "Watch: Cruise ship overturns after collision with tanker in New Orleans",
     "published": "2026-11-14T19:14:33+00:00",
     "summary": "Around 130 people were rescued from a cruise ship after it was struck by a tanker while docked in New Orleans, Louisiana on Friday."
    },
    {
     "ref": "bbc_world#8",
     "title": "Copper wire upgrade caused nationwide flight suspension, US transport secretary says",
     "published": "2026-11-14T19:12:25+00:00",
     "summary": "The US government is trying to find out whether the chaos was caused by \"incompetence\" or faulty equipment."
    },
    {
     "ref": "bbc_world#9",
     "title": "Italy fines Meta €805m over accessing users' photos",
     "published": "2026-11-14T18:28:06+00:00",
     "summary": "The social media giant is accused of not informing 20 million users it had access to their photos."
    },
    {
     "ref": "bbc_world#10",
     "title": "Philippines wins first Eurovision Song Contest Asia",
     "published": "2026-11-14T18:17:58+00:00",
     "summary": "Front-runner Carmelle emerges victorious with her women's empowerment anthem Sobra-Sobra."
    },
    {
     "ref": "bbc_world#11",
     "title": "Sotheby's auction of $180m Van Gogh challenged over claims it was 'sold under duress'",
     "published": "2026-11-14T18:00:10+00:00",
     "summary": "Sotheby's says it will work with the heirs of a family who had previously owned the artwork to try and reach a solution."
    },
    {
     "ref": "bbc_world#12",
     "title": "Trump, Putin and Xi plan historic joint meeting in China next week, White House says",
     "published": "2026-11-14T15:53:55+00:00",
     "summary": "Trump will discuss the \"reduction of nuclear weapons\" during the unprecedented talks, a spokeswoman says."
    },
    {
     "ref": "bbc_world#13",
     "title": "Nigeria cautions against travel via Ethiopia's main airport due to altitude",
     "published": "2026-11-14T15:42:54+00:00",
     "summary": "The foreign ministry in Abuja says 6 Nigerians with underlying health problems have died this year while transiting through Addis Ababa."
    },
    {
     "ref": "bbc_world#14",
     "title": "Hungarian authorities uncover $20m during probe of Orbán-era minister",
     "published": "2026-11-14T10:42:20+00:00",
     "summary": "Prime Minister Péter Magyar promised a sweeping anti-corruption drive after ousting Orbán in April."
    },
    {
     "ref": "bbc_world#15",
     "title": "'We'll get home one day' - US travellers impacted by nationwide ground stop",
     "published": "2026-11-14T01:47:36+00:00",
     "summary": "Passengers throughout the country were impacted over what the Federal Aviation Administration (FAA) describes as “safety and communication issues”."
    },
    {
     "ref": "bbc_world#16",
     "title": "Jojo the gorilla has spent his life alone. Can he finally find a companion?",
     "published": "2026-11-14T00:03:56+00:00",
     "summary": "Jojo was poached as an infant and grew up in captivity. His keepers want to find him a friend - but it's not straightforward."
    },
    {
     "ref": "bbc_world#17",
     "title": "Arrested generals and a threatened VP: President's son fuels Ugandan succession fever",
     "published": "2026-11-14T00:03:52+00:00",
     "summary": "The 52-year-old general’s provocative posts and military threats have fuelled rumours of a dynastic succession."
    },
    {
     "ref": "bbc_world#18",
     "title": "After a summer win, India's Gen Z protesters face a winter of uncertainty",
     "published": "2026-11-13T23:11:51+00:00",
     "summary": "A new wave of youth dissent swept India this summer, fuelled by frustration and irreverent online satire."
    },
    {
     "ref": "bbc_world#19",
     "title": "Watch: Divers explore US ship sunk off Florida coast to create new reef",
     "published": "2026-11-13T15:09:40+00:00",
     "summary": "The ship was intentionally sunk off the coast of Florida in order to create the world's largest artificial ocean reef."
    }
   ]
  },
  {
   "outlet": "The Economist — International",
   "lang": "en",
   "items": [
    {
     "ref": "economist_intl#0",
     "title": "Teaching kids to think for themselves in the age of AI",
     "published": "2026-11-13T11:37:50+00:00",
     "summary": "The Economist Educational Foundation helps schoolchildren around the world make sense of the news"
    },
    {
     "ref": "economist_intl#1",
     "title": "Despite recent misses, political polling is more accurate than ever",
     "published": "2026-11-12T00:44:06+00:00",
     "summary": "But elections in America and Brazil illustrate how hard the task is becoming"
    },
    {
     "ref": "economist_intl#2",
     "title": "Global bullies have turned uncertainty into a weapon",
     "published": "2026-11-10T22:15:15+00:00",
     "summary": "America and China see profit in keeping the whole world on edge"
    }
   ]
  },
  {
   "outlet": "Foreign Affairs",
   "lang": "en",
   "items": [
    {
     "ref": "foreign_affairs#0",
     "title": "La última oportunidad para la paz",
     "published": "2026-11-13T05:00:00+00:00",
     "summary": "Cómo evitar otra guerra mundial."
    },
    {
     "ref": "foreign_affairs#1",
     "title": "The World’s Last Chance for Peace",
     "published": "2026-11-13T05:00:00+00:00",
     "summary": "How to avert a new world war."
    },
    {
     "ref": "foreign_affairs#2",
     "title": "The Case for a Trump-Xi-Putin Summit",
     "published": "2026-11-13T05:00:00+00:00",
     "summary": "In just a few days’ time, U.S. President Donald Trump, Chinese leader Xi Jinping, and Russian President Vladimir Putin could be holding a three-way summit on the sidelines of next week’s Asia-Pacific Economic Cooperation meeting in Shenzhen, China. According to The Wall Street Journal, Putin floated the idea of a trialogue last month as an opportunity to discuss ending the war in Ukraine. No firm "
    },
    {
     "ref": "foreign_affairs#3",
     "title": "America Can Do Good—and Do Well",
     "published": "2026-11-12T09:00:01+00:00",
     "summary": "The strategic logic of foreign aid."
    },
    {
     "ref": "foreign_affairs#4",
     "title": "The Paradox of Dollar Dominance",
     "published": "2026-11-12T09:00:00+00:00",
     "summary": "How Technology Is—and Isn’t—Changing the Global Economy"
    },
    {
     "ref": "foreign_affairs#5",
     "title": "A New Kind of Foreign Agent",
     "published": "2026-11-11T09:00:00+00:00",
     "summary": "How AI is reshaping influence operations in America."
    },
    {
     "ref": "foreign_affairs#6",
     "title": "Trump Is Facing a Very Different North Korea",
     "published": "2026-11-11T09:00:00+00:00",
     "summary": "Donald Trump has Pyongyang on his mind. In recent months, the U.S. president has made comments to the media suggesting he is in communication with North Korean leader Kim Jong Un. In an August 17 Truth Social post, for instance, Trump announced that the United States would scale back joint military drills with South Korea. The decision, he wrote, was “based on my very good relationship with Kim Jo"
    },
    {
     "ref": "foreign_affairs#7",
     "title": "China’s AI Diplomacy Is Working",
     "published": "2026-11-10T09:00:00+00:00",
     "summary": "America should be taking notes."
    },
    {
     "ref": "foreign_affairs#8",
     "title": "The Luxury of Children",
     "published": "2026-11-10T09:00:00+00:00",
     "summary": "Why the baby bust is making the world more unequal."
    },
    {
     "ref": "foreign_affairs#9",
     "title": "The New Epicenter of Global Terror",
     "published": "2026-11-09T09:00:00+00:00",
     "summary": "How Africa’s weak states and rare earths drive transnational extremism."
    },
    {
     "ref": "foreign_affairs#10",
     "title": "A Recipe for Disaster in Taiwan",
     "published": "2026-11-09T09:00:00+00:00",
     "summary": "Why the risk of a crisis is growing."
    }
   ]
  }
 ]
}
</input>