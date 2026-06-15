---
title: The Internet Wasn't Built for AI
date: 2026-06-15
---

AI has already consumed much of the open internet. What is the next logical step for training AI and improving model performance? Several emerging areas are creating sources of net-new data that extend beyond the text, images, and videos already available online:

1. **Synthetic data generated through models and simulations.** Companies such as [Physical Intelligence](https://www.physicalintelligence.company/) are developing foundation models for robots, while platforms such as [NVIDIA Isaac Sim](https://developer.nvidia.com/isaac/sim) allow developers to generate synthetic training data and test robotic systems across realistic virtual environments.

2. **Real-world training data captured from human activity in physical environments.** [Shift](https://www.businessinsider.com/shift-offering-free-nyc-cleanings-train-ai-with-camera-footage-2026-5) is offering free home cleanings while workers record household tasks that can be used to train AI. Elsewhere, workers are being paid to wear head-mounted cameras while folding, sorting, cooking, assembling, and cleaning, creating [first-person demonstrations](https://www.linkedin.com/posts/workers-in-india-are-being-paid-to-wear-headcams-ugcPost-7471142758011985920-_aMT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwITT0Bv-TkPp-i7KT0SNKectrufuTSAOY) of how humans interact with the physical world.

Companies are already building on top of legacy systems rather than replacing them outright. [PillPilot](https://www.pillpilot.ai/) illustrates this by sitting on top of existing pharmacy management systems and turning previously inaccessible workflow data into an operating layer for autonomous agents.

One moat that doesn't seem as obvious is the network layer beneath modern software, where every digital action produces valuable interaction data that can be used to train more capable agents.

## The Network Layer Nobody's Talking About

Most websites expose functionality through structured APIs — specific endpoints that external software can retrieve data or trigger actions using protocols such as HTTP or HTTPS with formats like JSON.

Underneath this layer, modern web applications rely on a complex set of network interactions between browsers, servers, and microservices. When a user performs an action in a web interface, the browser sends a series of network requests to backend servers to process the request and return a structured response. APIs formalize this. To create your own API for a specific website, you would need to observe and map the website's network interactions, identify the backend requests tied to key user actions, and replicate those request flows in a structured way so they can be exposed through a programmable interface.

Data is the hottest commodity in the world — and the internet was not built for AI. [X402](https://x402.org/) is one of the first real attempts to fix that, reviving a dormant HTTP status code from 1991 that was always meant for machines but never implemented. It's communicating with the backend of the internet that I think is the next logical step for augmented data and actionable intelligence. As models (1) fundamentally change, (2) workflows become more optimized, (3) the data pipeline transforms into an auditable system, and (4) GPUs run faster — these are all harbingers for unobtrusive data architecture at the network layer.

![The Internet Wasn't Built for AI](/internet-article.png)

## The Gaps Are Enormous

Reverse engineering of internal APIs — analyzing network requests to identify undocumented backend endpoints — does have hurdles such as anti-crawl provisions, making edge compute and network-layer proxy infrastructure increasingly relevant. Cloudflare has released a `/crawl` endpoint where agents can now crawl an entire website with a single API call.

[Maango](https://www.maango.io/report) recently released a report that they crawled 1M domains and found 90% do not have an AI policy in place. Even after scanning 80K+ policies, the vast majority had no anti-bot rules.

However, stakes are rising. Anthropic agreed to a proposed $1.5B settlement with publishers over claims that its AI models were trained on copyrighted material without permission. In December, OpenAI updated its crawler documentation, removing the statement that the ChatGPT-User agent follows `robots.txt` — suggesting that AI browsing triggered by users may access pages even if a site blocks bots.

The gap between what AI agents are doing and what policies companies have in place is enormous — making it a digital oil field with no formal laws.
