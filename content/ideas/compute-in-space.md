---
title: Compute's Next Geography
date: 2026-06-24
---

*Why the next frontier for AI compute may be off-planet.*

Let's start with the bottleneck. We are deploying the most powerful AI systems and the wall ahead isn't necessarily algorithms or chips, it's energy.

The total cost of ownership of a data center is surprisingly only ~15% energy, and the constraint really becomes availability. China's electrical output is growing, however chip output is growing much faster. In the US, power from AI compute is growing ~50% with the grid growing only 2% — the gap is widening.

One answer is to just build more data centers on earth. In fact, data center power demand in the US is projected to reach 76 GW (~5% of the total US grid capacity of 1,300 GW) in 2026. And scaling the US power grid to 4TW (3x from its existing capacity) would occupy ~1% of US land.

However to add power, you need turbines — there are three primary turbine (GE Vernova, Siemens Energy, and Mitsubishi Power) blade suppliers globally and the majority are sold out until 2030. Even if all three meet their expansion plans, the total output only rises 20-25%, and since the casting process for turbine blades is extremely specialized, it is very hard to manufacture in house. And, you need transmission. Grid interconnection wait times impose a massive strain on new projects, with a year-long interconnection study and an average of five years in queue before reaching commercial operation. You also need water — a typical larger data center consumes up to 5 million gallons of fresh water per day (~a town of 50,000 people) with roughly 80% evaporating through cooling towers.

So if energy access is constrained due to hardware backlogs, interconnection delays, and environmental damage due to water demand, it doesn't make sense for hyperscalers long-term to build data centers on earth.

The case for space begins. A solar panel in low Earth orbit produces roughly 5x of the same panel on ground. The drivers are no day/night cycle, no clouds, no seasons, no atmosphere (which alone accounts for 30% loss). And the economics of the solar cell itself improves — on earth, panels need heavy steel framing to survive weather, thick glass protection, and batteries to carry power through the night. In space, none of that is required. Ground-based solar in some countries like China already cut costs to 30 cents per watt. Strip down the framing, glass, and batteries and multiply the output by 5, and the cost per watt of usable energy collapses. Then there's the cooling vacuum of deep space that acts as an infinite heat sink — waste heat radiates directly into space through large radiators (no air molecules, no water molecules, no convection required). Furthermore, a Nvidia GB300 cluster of roughly 330K GPUs needs approximately 1GW to run — this accounts for the entire functional stack of networking, storage, cooling, and peak headroom.

Of course, there are technological challenges that space compute needs to account for — chief among them being failing GPUs and whether you can fix them in space. The answer is in two parts. The first is infant mortality. The early burn-in failure rate of 3-8% is the dangerous period, and it is entirely screenable on the ground before anything launches. The second is in-service failure. Once past infant mortality, a single Nvidia H100 fails approximately once per 50,000 GPU hours.

Most roads point to space for long-term compute. But the real question is when is long term, and when do you hit the wall that forces the question?

The biggest proponent of compute in space is Elon Musk, who predicts that within 36 months space will be the most economically compelling place to put AI, and that within five years more AI compute will be launched into space annually than exists cumulatively on Earth — a few hundred gigawatts per year and rising. Getting there requires roughly 10,000 Starship launches a year, or about one per hour. However crazy that may sound, others are starting to drink the Kool-Aid.

- Anthropic announced a partnership with SpaceX expressing interest in developing multiple gigawatts of orbital AI compute capacity.
- In May 2025, Zhijiang Laboratory in China launched computing satellites under the Three-Body Computing Constellation program and Qwen3 was uploaded to these satellites for on-orbit deployment and inference.
- In November 2025, Nvidia-backed Starcloud placed the first H100 GPU in space and trained the first AI model in orbit in December.
- Google has announced Project Suncatcher — targeting the launch and hardware validation of satellites to establish a space-based data infrastructure platform by 2027.
- SpaceX detailed plans to deploy computing-enabled satellites integrated with the Starlink network.

<div class="article-image-wrap">
  <img src="/compute-in-space.png" alt="Compute in Space" class="article-img-small" />
</div>

---

There are already a myriad of builders emerging around this shift to space. On the terrestrial side, companies like Verse are tackling the immediate bottleneck: faster power access for AI infrastructure. If orbital compute scales, several opportunities may be in the data layers around it. A YC company Quindar is building mission management software that functions like a "Datadog for space," monitoring the full service chain across satellites, antennas, networks, and ground infrastructure. If Starcloud, SpaceX, Google, and others build the orbital data centers, an entire stack still needs to be outsourced. In other words, the biggest companies may build the compute, but the whitespace may be in everything required to make orbital compute reliable.
