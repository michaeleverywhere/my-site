---
title: The Diminishing Returns of Intelligence
date: 2026-07-04
---

*The next edge is not more intelligence. It is more efficient intelligence.*

2026 was earmarked for increased token spend across enterprises. Jensen remarked that he would be "deeply alarmed" if a $500K engineer did not consume at least $250K of tokens. More recently, Marc Benioff of Salesforce noted that they will likely spend $300M on Anthropic tokens this year - Salesforce employs ~15K engineers, which amounts to roughly $20K in token cost per engineer. Uber has already burned through their 2026 budget, and the list goes on and on.

In terms of CapEx, the spending curve follows the same pattern -

- Amazon is projecting roughly $200B of capital spending in 2026, up from $131B in 2025.
- Alphabet expects $180B-$190B, roughly double last year's level.
- Meta guided to $115B-$135B in 2026 after spending $72.2B in 2025.

All the above are planning to pour more than $630B into data centers and AI chips this year.

<div class="article-image-wrap">
  <img src="/diminishing_1.png" alt="AI CapEx spending" class="article-img-small" />
</div>

And obviously, while companies are committing record amounts of capital to AI infrastructure, many are also restructuring their workforces around the assumption that AI will let them do more with fewer people.

- July - Microsoft plans to lay off under 2.5% of its workforce
- June - Oracle's workforce shrank by about 21,000 employees, or roughly 13%.
- May - Meta laid off about 8,000 employees, roughly 10% of its workforce.
- May - Intuit laid off over 3,000 employees, or about 17% of its workforce.
- May - LinkedIn laid off about 5% of staff, 875 employees.

The signals seem clear: **Ramp token spend → Cut down workforce → CapEx increases**

---

However, I believe the real question is: when will we hit the inflection point on marginal returns to compute? Having used nearly every foundation and open-source model, I think we are clearly approaching a period of diminishing marginal returns. Fable 5 may be excellent, and future frontier models will absolutely matter for certain categories, especially scientific discovery, physical AI, simulation, robotics, and other domains where the hardest problems still require the best models.

But for most organizations, the work is not always that complex. At some point, the question becomes: does it actually make sense to pay more for the next Claude or OpenAI model, or is the better answer to optimize around the model that is "good enough" for the workflow?

That is where the tradeoffs start to matter. Companies will increasingly optimize across throughput, latency, token cost, reliability, and security rather than blindly defaulting to the most powerful model available. As organizations learn how to use AI properly, the conversation will shift from "which model is best?" to "which model is best for this job at this price?"

Alex Karp has been making a version of this argument from the sovereignty angle: companies and governments should be wary of paying for tokens while sending their most valuable data into closed model ecosystems. The risk is not just leakage and dependency.

<div class="article-image-wrap">
  <img src="/diminishing_2.png" alt="Model routing and specialization" class="article-img-small" />
</div>

Is Fable 5 really worth a roughly 2x price increase for the average enterprise workflow? For most companies, the next wave of AI value may not come from blindly building more agents on top of the most expensive foundation model. It may come from having actual "AI specialists" who understand model routing, fine-tuning, inference optimization, orchestration layers, deployment architecture - people who can decide when to use Claude or OpenAI, when to run a company-specific local SLM through Ollama, and when to optimize a smaller model on dedicated GPU infrastructure, i.e CoreWeave. These are also areas I believe where innovation around AI will endure.

The advantage shifts from "who has access to the best model?" to "who knows how to apply the most optimal stack."

---

Read more on [Michael's Substack](https://michaeljbarone.substack.com/)
