---
title: The Lunar Economy Is Taking Shape
date: 2026-09-01
---

*Falling launch costs, in-situ manufacturing, and lunar robotics could turn the Moon into an industrial market.*

Deloitte recently published an [in-depth analysis](https://www.deloitte.com/us/en/what-we-do/capabilities/space/articles/building-the-lunar-economy-report.html?utm_content=opening_essay&j=162139&sfmc_sub=33591013&l=1227_HTML&u=11902943&mid=546014653&jb=38&utm_source=sfmc&utm_medium=email&utm_campaign=NL_term-sheet_2026-8-28_162139&utm_term=term-sheet&sfmc_id=33591013) of the library economy, breaking the opportunity into three major value pools: core lunar activity, including transportation, launch and lander services, cargo delivery, energy and power, communications and navigation, surface mobility, construction, and life support.; enabled activity, including economic and innovation spillovers, scientific advancement, global inspiration, and potentially transformative applications that aren’t clearly identified yet. The report estimates the crore lunar economy could generate \$343B in cumulative value through 2050 through a conservative lens and \$566B in an accelerated growth scenario, with enabled active alone accounting for \$123B to \$184B of that value.

According to Pitchbook, this past June alone, VC backed space-tech start-ups raised \$11.3B across 244 deals surpassing the \$10.B invested across 433 deals in 2025. Within the lunar economy, enabled activities remain among the least developed, though still meaningfully funded, segments of the sector. This is largely due to the scarcity of usable lunar data and the industry’s historical focus on more immediate infrastructure priorities, including reducing launch costs and improving lunar mapping and navigation.

[NASA's Lunar Reconnaissance Orbiter](https://svs.gsfc.nasa.gov/4057) has been paving the way for human and robotic exploration on the moon. LRO has been studying the surface up close since 2009, making it the longest-lived lunar orbiting mission ever. The orbiter has mapped the Moon’s surface, temperate, composition, and radiation environment in unprecedented detail.

However, breaking down lunar mining economics, it feels that it’s only a matter of time until we have a fully developed new sector in space.
I like to think of the overall market size of an amalgamation of various offshoots of core lunar activity such as transportation and enabling activity such as in -situ manufacturing. For instance, SpaceX is currently advertising future Starship cargo delivery to the lunar surface at \$100M per metric ton, i.e \$100,000/kg to the lunar surface. And that is just for transportation, it doesn’t  include the cost of manufacturing the material on Earth - making regolish (lunar dirt) quite valuable if extracted and mined at scale.
Imagine you’re building a moon base, you will eventually need: oxygen, water, propellent, radiation shielding, landing pads, and much more that for this hypothetical analysis requires 1,000 tons of materials. At SpaceX’s current advertised \$100K/kg of lunar card this would amount to \$100B purely for transport only. What if there was a second option to ship the factory instead? Instead of shipping 1,000 tons of finished material you ship 10 tons of excavators + robotics + refinery power equipment. If that 10-ton system eventually processes 1,000 tons of useful lunar material, your \$100B in transport costs become \$1B in transport cost with \$100B in hypothetical materials from in-space manufacturing.
NASA actually ISRU numbers exhibit this opportunity tangentially though their modeled lunar oxygen systems. One estimate has a roughly 946 kg plant producing 1,000 kg of oxygen per year. If you were to import the oxygen manufacturing facility once, just looking at launch costs that would be \$94.6M and after year 1, a subsequent \$100M in produced Oxygen (again in terms of launch costs and assuming no mechanical delays). Ignoring power, maintenance, excavation and consumables for a second (which is a lot), transportation break-even is achieved roughly in a year.

---

**Paper of the week** ([An Integrated Process for Design and Control of Lunar Robotics Using AI and Simulation](https://arxiv.org/abs/2509.12367))

In today's robotics landscape, companies such as General Intuition, Shift, and Sunday Robotics are helping build the data, simulation, and training infrastructure needed to power the next generation of embodied AI.

Depending on the autonomy architecture, whether a VLA, WAM, TAMP system, or foundation-model-based approach, the bottleneck ultimately converges on the same thing: data. These systems all depend on broad, high-quality training data that captures the environments, interactions, failure modes, and edge cases a robot will encounter in the real world. For lunar robotics, that challenge is especially acute because real-world data is scarce, expensive to collect, and difficult to reproduce, making simulation and synthetic data a critical part of the development stack.
The authors argue that lunar robotics should be developed through an integrated simulation-first process with the limited amount of existing data available. Their framework combines OpenPLX and the AGX Dynamics physics engine to create high-fidelity lunar environments that model terrain and regolith with tunable physical properties, non-ideal sensors such as LiDAR, RGB-D cameras, IMUs, encoders, and odometers, machine dynamics, and autonomous behavior (*they are not simulating the Moon as a perfect digital twin). The framework also supports domain randomization and terrain variation to improve robustness, while generating simulation environments that can be used to train reinforcement-learning policies, including the rover’s PPO-based Drive controller.

**Why this is important:**
The goal is to generate synthetic training scenarios and rest failure models before any deployment. This is particularly important for lunar robotics because real-world data is scarce and physical testing on the Moon is effectively impossible at scale, making simulation a core part of both training and validation, a direction this industry is underdeveloped across the industry.

<div class="article-image-wrap">
  <img src="lunar-economy.png" alt="The Lunar Economy Is Taking Shape" class="article-img-small" />
</div>

---

**Recent funding snapshot…**

- Lunar Outpost - Builds autonomous lunar rovers and mobility systems that can support future excavation and resource operations. Closed a \$30 million Series B funding round in May 2026, bringing its total VC to approximately \$52 million led by Eniac Ventures, Promus Ventures, and Reliable Equity, among others.

- Starpath Robotics - Developing infrastructure to extract lunar resources, particularly water, and convert them into rocket propellant. Raised their \$30M series A in May, 2026, led by Seven Seven Six led; Aurelia Foundry; Gaingels; Liquid 2 Ventures; Shasta Ventures, and others

---

Read more on [Michael's Substack](https://michaeljbarone.substack.com/)
