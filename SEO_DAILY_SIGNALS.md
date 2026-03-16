# SEO Daily Signals

## Date
- 2026-03-16

## Top señales GSC
- 28d snapshot fixed for this run: `Indexed URLs estimate = 4`, `Queries 28d = 2`, `Impressions 28d = 44`.
- Homepage `https://urbanharvestlab.com/` leads clicks with 2 clicks, 10 impressions, 20.00% CTR, and average position 3.10.
- `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` remains the main non-homepage URL with 1 click, 30 impressions, 3.33% CTR, and average position 21.87.
- Query demand remains narrow: `ec for lettuce` is at position `31.0`, and `hydroponic feeding basics` is at position `63.75`.
- GSC still reports `http://urbanharvestlab.com/` with 3 impressions, so protocol consolidation should still be verified.

## Top señales GA4
- Property `528419708` is accessible in `analytics-mcp`; account summary confirms property `UrbanHarvestLab`.
- Homepage `/` dominates traffic with `14` sessions, `14` users, `2` engaged sessions, `14.29%` engagement rate, and `60` events.
- `/blog/soil-fertilizers/best-potting-mix-potted-herbs` shows the strongest content-side engagement signal with `2` sessions, `307.47s` average session duration, and `17` events.
- `/blog/grow-lights/best-grow-lights-for-herbs` has only `1` session but a `100%` engagement rate and `245.32s` average session duration, which is directionally positive but too small to reprioritize alone.
- GA4 landing-page coverage is still very thin, which is consistent with the current bootstrap footprint.

## URLs en striking distance
- No URL currently qualifies for the `position 5-20` and `>=15 impressions` important quick-win rule.
- Watchlist only: `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` at average position `21.87`, just outside striking distance.

## CTR opportunities
- No rule-based CTR opportunity today under the defined thresholds.
- Watchlist URL: `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/`
  baseline ctr: `3.33%`
  impressions: `30`
  position: `21.87`
  expected action: `title/meta refresh`

## Riesgos técnicos detectados
- Protocol consolidation is not fully trustworthy because `http://urbanharvestlab.com/` still receives impressions in GSC.
- Indexed URL coverage remains the main operational constraint: the fixed indexed estimate is `4` against a much larger published inventory in `src/content`.
- Content inventory is EN-only; ES is still planning-only and there is no hreflang layer to validate.

## Oportunidad principal del día
- Keep the hydroponic lettuce EC/pH guide as the primary new-content candidate. It is the clearest gap supported by query evidence and there is no current EN or ES page in the inventory addressing that exact intent.

## Machine-readable
Site mode: bootstrap
Mode candidate: bootstrap
Mode streak: 0
Indexed URLs estimate: 4
Queries 28d: 2
Impressions 28d: 44
Quick wins critical: 0
Quick wins important: 0
Quick wins minor: 3
Optimize bias: medium
Publish bias: high
Optimization debt: medium
Publish readiness: no
Publish blocked by: indexing_backlog_pending,execution_backlog_pending
Optimization priority score: 78
Publish priority score: 46
Recommendation: indexing_only

<!-- AWFM:ctr-signals:2026-03-16:start -->
## CTR opportunities
- No clear CTR opportunity today under the current rule set (`position 4-12`, `impressions > 20`, CTR materially below expected).
<!-- AWFM:ctr-signals:2026-03-16:end -->
