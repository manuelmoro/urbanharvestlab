# SEO Strategy

## Site Snapshot
- Date created: 2026-03-14
- Site mode: bootstrap
- Indexed URLs estimate: 4
- Queries 28d: 2
- Impressions 28d: 30

## Clusters
- Urban gardening: 8 posts + 1 hub
- Grow lights: 5 posts + 1 hub
- Hydroponics: 3 posts + 1 hub
- Containers & planters: 2 posts + 1 hub
- Plant problems: 2 posts + 1 hub
- Soil & fertilizers: 1 post + 1 hub

## Editorial Rules
- Prioritize useful, indexable surface area while the site remains in `bootstrap`.
- New posts must map to a clear search intent and link back to the relevant hub plus 2-4 related guides.
- Avoid overlapping intent with existing cornerstone content; narrow the angle when a broader guide already exists.
- Use English content as the live implementation baseline; keep EN/ES planning in briefs until the site has an explicit ES publishing workflow.

## Goals
- Increase useful indexed URLs beyond the current estimate of `4`.
- Capture first non-homepage query demand in hydroponics and small-space gardening.
- Maintain clean canonical/indexation hygiene while expanding content surface area.

## Backlog Top 20
1. Candidate new post: crop-specific `hydroponic lettuce EC / pH` guide. Evidence: query `ec for lettuce` in GSC; supporting page `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` has 23 impressions.
2. Manual indexing acceleration for core URLs because indexed URLs estimate is `4` against a much larger published content inventory.
3. Refresh title/meta for `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` if impressions continue but ranking stays outside page 2. Current evidence: 23 impressions, 4.35% CTR, average position 21.70.
4. Verify HTTP to HTTPS consolidation for homepage because GSC still shows `http://urbanharvestlab.com/` impressions.
5. Keep backlog slots 6-20 empty until more quantitative evidence appears in GSC or GA4.

## Diario
### 2026-03-14
- GSC confirms very early-stage organic visibility: 30 impressions, 2 tracked queries, and homepage-led clicks.
- The strongest non-homepage signal is `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` with 18 impressions and average position 23.5.
- The cleanest new-content gap supported by query data is a crop-specific lettuce nutrient target post (`ec for lettuce`).
- Operational decision for today: `indexing_only`. Rationale: no critical blockers, but the indexing gap is materially larger than the current ranking footprint.
- GA4 signals were not available for this run because the Analytics Admin API and Data API are disabled for property access in MCP.

#### Propuestas de cambio (pendientes)
- Define the EN/ES rollout model before publishing Spanish equivalents on-site.
- Revisit whether hreflang should be introduced once ES URLs exist; current codebase is EN-only.

### 2026-03-15
- GSC 28d rises to 35 impressions while query coverage remains at 2, confirming that visibility growth is still concentrated in a very small surface.
- `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` strengthens as the leading non-homepage URL with 23 impressions, 4.35% CTR, and average position 21.70.
- The content inventory remains EN-only in `src/content`; there is still no crop-specific lettuce nutrient target page, so the best supported new-content gap remains a dedicated lettuce EC/pH guide prepared for EN and ES.
- Operational decision for today: `indexing_only`. Rationale: indexed URLs estimate stays at `4` while the published inventory is materially larger, and the new post remains a candidate brief rather than a publishable asset.
- GA4 signals were requested again for property `528419708`, but both Analytics Admin API and Data API returned `SERVICE_DISABLED`, so no landing-page behavior evidence was available.

#### Propuestas de cambio (pendientes)
- If GA4 access is restored, reassess whether landing-page engagement supports reprioritizing any backlog items beyond indexation and the hydroponics cluster.
