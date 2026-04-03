# SEO Decision - 2026-04-03

Date: 2026-04-03
Run: 20260403-221449
Decision: optimize_only
Confidence: medium
Source recommendation: optimize_only
Site mode: bootstrap
Optimize bias: medium
Publish bias: high
Optimization debt: high
Publish readiness: no
Publish blocked by: cannibalization_risk,weak_gap_evidence
Optimization priority score: 82
Publish priority score: 24
Publish gate passed: no
Pending tasks today: 0
Blocked tasks today: 0

Inputs considered today:
- `SEO_STRATEGY.md`
- `SEO_DAILY_SIGNALS.md`
- `SEO_NEXT_ACTION.md`
- `SEO_OPTIMIZATION_QUEUE.md`
- `SEO_OPTIMIZATION_TASKS.md`
- `TASK_NEW_POST.md`
- `SEO_AUTOMATION_STATE.md`
- `SEO_CTR_EXPERIMENTS.md` (si existe)
- `SEO_INDEXING_LOG.md` (si existe)
- `./outputs/seo/urbanharvestlab/seo_daily_2026-04-03.md` (si aplica)

Reasoning summary:
- Site mode: `bootstrap` con quick wins `critical=0`, `important=18`, `minor=3`.
- Recommendation de entrada: `optimize_only`; el hard gate la resolvió como `optimize_only`.
- Candidate publish ready: `no`; critical blockers: `yes`.
- Publish gate passed: `no`; blocked by final: `cannibalization_risk,weak_gap_evidence`.
- Pending tasks today: `0`; blocked tasks today: `0`.

Execution rule:
- hold -> no ejecutar run_urbanharvestlab_new_post_pr.sh
- optimize_only -> no ejecutar run_urbanharvestlab_new_post_pr.sh
- optimize_and_publish -> permitir run_urbanharvestlab_new_post_pr.sh
- publish_only -> permitir run_urbanharvestlab_new_post_pr.sh
- technical_fix_only -> saltar publicación y priorizar fixes técnicos
- indexing_only -> saltar publicación y priorizar indexación
