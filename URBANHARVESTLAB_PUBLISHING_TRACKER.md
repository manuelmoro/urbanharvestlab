# Urban Harvest Lab - Publishing Tracker

## Working Context (2026-03-15)

Primary inputs for this tracker:

- Current published inventory in `src/content/blog/`
- Current hub architecture in `src/content/hubs/`
- `SEO_STRATEGY.md`
- `SEO_DAILY_SIGNALS.md`

Current operating assumptions:

- Site mode remains `bootstrap`.
- Indexed URLs estimate: `4`
- Queries in the last 28 days: `2`
- Impressions in the last 28 days: `30`
- The cleanest query-backed content gap today is still `ec for lettuce`.
- The live site is EN-only. Keep titles and slugs in EN until there is an explicit ES publishing workflow.
- Growth should deepen the six live clusters before starting new ones: `urban-gardening`, `grow-lights`, `containers-planters`, `soil-fertilizers`, `plant-problems`, `hydroponics`.

## How The Site Should Grow From Here

1. Finish the herb "operating system" first.
   The site already has strong setup pages, but it still needs the obvious follow-up pages readers expect after setup: watering, fertilizing, pruning, wet-soil wilt, and leggy basil.
2. Use hydroponics as the first adjacent expansion.
   It is the only cluster with a concrete GSC signal right now, so it deserves the first crop-specific expansion and a small support set around that page.
3. Add multi-use explainers before more buyer guides.
   `grow-light-distance-herbs`, `self-watering-pots-herbs`, and `plastic-vs-terracotta-herbs` strengthen multiple hubs and reduce future cannibalization.
4. Keep balcony/urban-gardening expansion selective.
   One scheduled sunny-balcony page is enough for now. Broader balcony veg expansion should wait until current clusters have more support and better indexation.
5. Do not open new clusters yet.
   Hold `microgreens`, `tools/templates`, broad printable content, and ES duplicates until current hubs are denser and indexing improves.

## Publishing Cadence

- Use `3 posts/week` from this point: Monday, Wednesday, Friday.
- Reserve one non-publication block each week for:
  - hub refreshes
  - retrofitted internal links
  - title/meta adjustments
  - indexing follow-up
- If capacity drops, prioritize orders `25-32` before anything later in the backlog.

## Universal Rules For Planned Posts

- Every new post must link to its hub in the first third of the article.
- Every new post must link to `2-4` closely related live guides, not just the hub.
- Troubleshooting pages must always link back to root-cause pages and never end as dead ends.
- Commercial intent should stay limited in this phase. New buyer guides are deferred until more non-commercial support pages are live and indexed.
- Do not create a second URL for an intent already covered by a broader live page unless the new page is clearly narrower by crop, symptom, scenario, or device class.

## Live Foundation Inventory

### Urban Gardening

- `urban-gardening/small-space-herb-garden-setup`
- `urban-gardening/best-herbs-small-spaces`
- `urban-gardening/potted-herb-care`
- `urban-gardening/small-space-herb-gardening`
- `urban-gardening/balcony-herb-garden-beginners`
- `urban-gardening/indoor-herb-garden-apartment-setup`
- `urban-gardening/windowsill-herb-garden-low-light`
- `urban-gardening/best-herbs-low-light-kitchens-windowsills`
- `urban-gardening/best-vegetables-small-balconies`

### Grow Lights

- `grow-lights/how-much-light-herbs-need`
- `grow-lights/how-many-hours-grow-lights-herbs`
- `grow-lights/can-herbs-grow-indoors-without-direct-sunlight`
- `grow-lights/best-grow-lights-for-herbs`
- `grow-lights/grow-light-distance-seedlings`

### Containers And Planters

- `containers-planters/best-containers-herbs`
- `containers-planters/herb-pot-size-guide`
- `containers-planters/container-depth-tomatoes-peppers-herbs`

### Soil And Fertilizers

- `soil-fertilizers/potting-mix-vs-raised-bed-soil-containers`
- `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs`
- `soil-fertilizers/best-potting-mix-potted-herbs`

### Plant Problems

- `plant-problems/common-potted-herb-problems`
- `plant-problems/why-basil-leaves-yellow-indoors`

### Hydroponics

- `hydroponics/countertop-hydroponic-herbs-beginner`
- `hydroponics/hydroponic-nutrients-ec-ph-basics`
- `hydroponics/hydroponic-lettuce-growing-slowly`

### Scheduled But Not Yet Live

- `urban-gardening/best-herbs-sunny-balcony` with `publishDate: 2026-03-16`

## Legacy Continuity From The Old 1-24 Tracker

The previous version of this file tracked a single-cluster build sequence from orders `1-24`.

- Former rows `1-18` are now represented by the live foundation inventory above.
- Former rows `19-24` were not all implemented yet, so they are preserved here with their mapping into the new backlog.

| Former order | Legacy title | Legacy slug | Legacy status in the old tracker | Current treatment |
| --- | --- | --- | --- | --- |
| 19 | How Often Should You Water Potted Herbs? | `urban-gardening/how-often-to-water-potted-herbs` | planned | kept and moved to order `27` |
| 20 | Do Potted Herbs Need Fertilizer? Liquid vs. Slow-Release Options Explained | `soil-fertilizers/do-potted-herbs-need-fertilizer` | planned | kept and moved to order `28` |
| 21 | When to Prune Basil, Mint, Parsley, and Chives for Better Growth | `urban-gardening/pruning-basil-mint-parsley-chives` | planned | kept and moved to order `30` |
| 22 | Why Are Basil Leaves Turning Yellow Indoors? | `plant-problems/why-basil-leaves-yellow-indoors` | planned | already live and preserved in the foundation inventory |
| 23 | Leggy Basil Indoors: Is It a Light Problem or a Pruning Problem? | `plant-problems/leggy-basil-indoors-light-or-pruning` | planned | kept and moved to order `38` |
| 24 | Why Are Potted Herbs Wilting Even When the Soil Is Wet? | `plant-problems/potted-herbs-wilting-soil-is-wet` | planned | kept and moved to order `32` |

## Active Publishing Backlog

Calendar assumption: order `25` is already scheduled for Monday, March 16, 2026. Orders `26-43` follow the Monday/Wednesday/Friday cadence.

### Phase 1 - Finish The Herb System And Capture The First Query-Backed Hydro Gap

This phase closes the most obvious missing herb follow-ups while also publishing the strongest current query-backed hydroponics page early.

| Order | Title | Slug | Cluster | Content type / role | Additional mandatory internal links | Required predecessor articles | Estimated article length | Create date | Publish date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 25 | Best Herbs for a Sunny Balcony: Basil, Thyme, Rosemary, and Other Reliable Choices | `urban-gardening/best-herbs-sunny-balcony` | urban-gardening | Beginner guide / supporting | `urban-gardening/best-herbs-small-spaces`; `urban-gardening/balcony-herb-garden-beginners`; `containers-planters/best-containers-herbs` | `urban-gardening/small-space-herb-gardening`; `urban-gardening/best-herbs-small-spaces`; `urban-gardening/balcony-herb-garden-beginners` | 1300-1600 words | 2026-03-16 | 2026-03-16 | published |
| 26 | Hydroponic Lettuce EC and pH Chart for Beginners | `hydroponics/hydroponic-lettuce-ec-ph-chart` | hydroponics | Crop-specific explainer / supporting | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-growing-slowly`; `hydroponics/countertop-hydroponic-herbs-beginner` | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-growing-slowly` | 1200-1500 words | 2026-03-16 | 2026-03-16 | published |
| 27 | How Often Should You Water Potted Herbs? | `urban-gardening/how-often-to-water-potted-herbs` | urban-gardening | How-to / supporting | `urban-gardening/potted-herb-care`; `containers-planters/best-containers-herbs`; `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs` | `urban-gardening/potted-herb-care`; `containers-planters/best-containers-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs` | 1300-1600 words | 2026-03-20 | 2026-03-20 | published |
| 28 | Do Potted Herbs Need Fertilizer? Liquid vs. Slow-Release Options Explained | `soil-fertilizers/do-potted-herbs-need-fertilizer` | soil-fertilizers | Explainer / supporting | `urban-gardening/potted-herb-care`; `soil-fertilizers/best-potting-mix-potted-herbs`; `urban-gardening/how-often-to-water-potted-herbs`; `plant-problems/common-potted-herb-problems` | `urban-gardening/potted-herb-care`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs` | 1500-1900 words | 2026-03-23 | 2026-03-23 | planned |
| 29 | Root Rot in Hydroponics: Prevention, Early Signs, and Recovery Limits | `hydroponics/root-rot-hydroponics-prevention` | hydroponics | Troubleshooting guide / troubleshooting | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-growing-slowly`; `hydroponics/hydroponic-lettuce-ec-ph-chart` | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-growing-slowly`; `hydroponics/hydroponic-lettuce-ec-ph-chart` | 1100-1400 words | 2026-03-25 | 2026-03-25 | planned |
| 30 | When to Prune Basil, Mint, Parsley, and Chives for Better Growth | `urban-gardening/pruning-basil-mint-parsley-chives` | urban-gardening | How-to / supporting | `urban-gardening/potted-herb-care`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/do-potted-herbs-need-fertilizer`; `urban-gardening/best-herbs-small-spaces` | `urban-gardening/potted-herb-care`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/do-potted-herbs-need-fertilizer` | 1300-1600 words | 2026-03-27 | 2026-03-27 | planned |

### Phase 2 - Strengthen Light And Diagnosis Infrastructure

These pages become reusable root-cause references for later troubleshooting, windowsill, and product-comparison content.

| Order | Title | Slug | Cluster | Content type / role | Additional mandatory internal links | Required predecessor articles | Estimated article length | Create date | Publish date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 31 | Grow Light Distance for Herbs: How Close Should LEDs Sit? | `grow-lights/grow-light-distance-herbs` | grow-lights | Explainer / supporting | `grow-lights/how-much-light-herbs-need`; `grow-lights/how-many-hours-grow-lights-herbs`; `grow-lights/best-grow-lights-for-herbs`; `urban-gardening/indoor-herb-garden-apartment-setup` | `grow-lights/how-much-light-herbs-need`; `grow-lights/how-many-hours-grow-lights-herbs`; `grow-lights/best-grow-lights-for-herbs` | 1300-1600 words | 2026-03-30 | 2026-03-30 | planned |
| 32 | Why Are Potted Herbs Wilting Even When the Soil Is Wet? | `plant-problems/potted-herbs-wilting-soil-is-wet` | plant-problems | Troubleshooting guide / troubleshooting | `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs`; `containers-planters/best-containers-herbs`; `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs` | `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs` | 1000-1400 words | 2026-04-01 | 2026-04-01 | planned |
| 33 | When Should You Change Hydroponic Nutrient Solution? Top-Off vs. Full Reset | `hydroponics/when-to-change-hydroponic-nutrient-solution` | hydroponics | How-to / supporting | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-ec-ph-chart`; `hydroponics/root-rot-hydroponics-prevention`; `hydroponics/countertop-hydroponic-herbs-beginner` | `hydroponics/hydroponic-nutrients-ec-ph-basics`; `hydroponics/hydroponic-lettuce-ec-ph-chart`; `hydroponics/root-rot-hydroponics-prevention` | 1200-1500 words | 2026-04-03 | 2026-04-03 | planned |
| 34 | North-Facing Window Herbs: What Actually Works and When You Need a Grow Light | `urban-gardening/north-facing-window-herbs` | urban-gardening | Scenario guide / supporting | `urban-gardening/windowsill-herb-garden-low-light`; `urban-gardening/best-herbs-small-spaces`; `grow-lights/can-herbs-grow-indoors-without-direct-sunlight`; `grow-lights/grow-light-distance-herbs` | `urban-gardening/windowsill-herb-garden-low-light`; `urban-gardening/best-herbs-small-spaces`; `grow-lights/can-herbs-grow-indoors-without-direct-sunlight`; `grow-lights/grow-light-distance-herbs` | 1300-1600 words | 2026-04-06 | 2026-04-06 | planned |

### Phase 3 - Expand Container And Soil Decision Pages

These are durable setup pages that can later support buyer guides and more troubleshooting without creating duplicate broad-intent content.

| Order | Title | Slug | Cluster | Content type / role | Additional mandatory internal links | Required predecessor articles | Estimated article length | Create date | Publish date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 35 | Self-Watering Pots for Herbs: Worth It or More Trouble? | `containers-planters/self-watering-pots-herbs` | containers-planters | Explainer / supporting | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `urban-gardening/how-often-to-water-potted-herbs`; `urban-gardening/balcony-herb-garden-beginners` | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `urban-gardening/how-often-to-water-potted-herbs` | 1300-1700 words | 2026-04-08 | 2026-04-08 | planned |
| 36 | Plastic vs. Terracotta Pots for Herbs: Which Makes Care Easier? | `containers-planters/plastic-vs-terracotta-herbs` | containers-planters | Comparison guide / supporting | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `urban-gardening/how-often-to-water-potted-herbs`; `containers-planters/self-watering-pots-herbs` | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `urban-gardening/how-often-to-water-potted-herbs`; `containers-planters/self-watering-pots-herbs` | 1300-1700 words | 2026-04-10 | 2026-04-10 | planned |
| 37 | How to Repot Herbs Without Slowing Growth | `containers-planters/repot-herbs-without-shock` | containers-planters | How-to / supporting | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs`; `containers-planters/plastic-vs-terracotta-herbs` | `containers-planters/best-containers-herbs`; `containers-planters/herb-pot-size-guide`; `soil-fertilizers/potting-mix-vs-raised-bed-soil-herbs`; `containers-planters/plastic-vs-terracotta-herbs` | 1200-1500 words | 2026-04-13 | 2026-04-13 | planned |
| 38 | Leggy Basil Indoors: Is It a Light Problem or a Pruning Problem? | `plant-problems/leggy-basil-indoors-light-or-pruning` | plant-problems | Troubleshooting guide / troubleshooting | `plant-problems/common-potted-herb-problems`; `grow-lights/grow-light-distance-herbs`; `grow-lights/how-many-hours-grow-lights-herbs`; `urban-gardening/pruning-basil-mint-parsley-chives` | `plant-problems/common-potted-herb-problems`; `grow-lights/grow-light-distance-herbs`; `urban-gardening/pruning-basil-mint-parsley-chives` | 1000-1400 words | 2026-04-15 | 2026-04-15 | planned |
| 39 | Why Fungus Gnats Keep Coming Back in Herb Pots | `plant-problems/fungus-gnats-herb-pots` | plant-problems | Troubleshooting guide / troubleshooting | `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs`; `containers-planters/self-watering-pots-herbs` | `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs`; `containers-planters/self-watering-pots-herbs` | 1000-1400 words | 2026-04-17 | 2026-04-17 | planned |

### Phase 4 - Complete The Maintenance Loop

These pages make the cluster feel complete for home growers: what to feed, how to read excess, when to flush, how to harvest, and how to rescue common starter plants.

| Order | Title | Slug | Cluster | Content type / role | Additional mandatory internal links | Required predecessor articles | Estimated article length | Create date | Publish date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 40 | Signs You're Overfertilizing Herbs: Yellow Tips, Salt Buildup, and Stalled Growth | `soil-fertilizers/signs-of-overfertilizing-herbs` | soil-fertilizers | Troubleshooting guide / troubleshooting | `soil-fertilizers/do-potted-herbs-need-fertilizer`; `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs`; `soil-fertilizers/best-potting-mix-potted-herbs` | `soil-fertilizers/do-potted-herbs-need-fertilizer`; `plant-problems/common-potted-herb-problems`; `urban-gardening/how-often-to-water-potted-herbs` | 1100-1400 words | 2026-04-20 | 2026-04-20 | planned |
| 41 | Salt Buildup in Herb Pots: When to Flush and When to Repot | `soil-fertilizers/salt-buildup-herb-pots` | soil-fertilizers | How-to / supporting | `soil-fertilizers/signs-of-overfertilizing-herbs`; `soil-fertilizers/do-potted-herbs-need-fertilizer`; `containers-planters/repot-herbs-without-shock`; `soil-fertilizers/best-potting-mix-potted-herbs` | `soil-fertilizers/signs-of-overfertilizing-herbs`; `soil-fertilizers/do-potted-herbs-need-fertilizer`; `containers-planters/repot-herbs-without-shock` | 1100-1400 words | 2026-04-22 | 2026-04-22 | planned |
| 42 | How to Harvest Basil, Mint, Parsley, and Chives So They Keep Growing | `urban-gardening/how-to-harvest-herbs-so-they-keep-growing` | urban-gardening | How-to / supporting | `urban-gardening/potted-herb-care`; `urban-gardening/pruning-basil-mint-parsley-chives`; `urban-gardening/best-herbs-small-spaces` | `urban-gardening/potted-herb-care`; `urban-gardening/pruning-basil-mint-parsley-chives`; `urban-gardening/best-herbs-small-spaces` | 1200-1500 words | 2026-04-24 | 2026-04-24 | planned |
| 43 | How to Keep Supermarket Basil Alive Longer Than Two Weeks | `urban-gardening/keep-supermarket-basil-alive` | urban-gardening | Beginner problem-solver / supporting | `urban-gardening/best-herbs-small-spaces`; `urban-gardening/indoor-herb-garden-apartment-setup`; `containers-planters/repot-herbs-without-shock`; `urban-gardening/how-to-harvest-herbs-so-they-keep-growing` | `urban-gardening/best-herbs-small-spaces`; `urban-gardening/indoor-herb-garden-apartment-setup`; `containers-planters/repot-herbs-without-shock`; `urban-gardening/how-to-harvest-herbs-so-they-keep-growing` | 1200-1500 words | 2026-04-27 | 2026-04-27 | planned |

## Deferred Backlog - Do Not Schedule Yet

These are sensible later candidates, but they should not displace the active backlog above while the site is still in `bootstrap` mode.

- `urban-gardening/vacation-watering-potted-herbs`
  Trigger: publish after rows `27`, `35`, and `43` are live and internally linked.
- `urban-gardening/shade-balcony-vegetables`
  Trigger: publish only if `urban-gardening/best-vegetables-small-balconies` starts showing stronger impressions or balcony traffic widens.
- `urban-gardening/dwarf-tomatoes-pots-small-balcony`
  Trigger: publish after at least one additional balcony-specific page is live.
- `grow-lights/best-clip-on-grow-lights-herbs`
  Trigger: publish only after rows `31` and `34` are live and indexed.
- `grow-lights/best-grow-light-timers`
  Trigger: publish only after timer/schedule intent appears in GSC or after a timer FAQ pattern emerges from support content.

## Operating Notes For Writers

- Hub refresh rule:
  - after order `30`, update `urban-gardening` and `soil-fertilizers`
  - after order `34`, update `hydroponics` and `grow-lights`
  - after order `39`, update `containers-planters` and `plant-problems`
  - after order `43`, refresh all hubs and cross-links
- If a planned page starts drifting into the same intent as a broader live guide, narrow it by crop, symptom, room condition, or container type before drafting.
- If only one new post is approved in the short term, choose order `26`.
- If content production outruns indexation, keep the cadence but spend the weekly consolidation block on hub surfacing and retrospective internal linking before adding more future rows.
