Date: 2026-04-04
Run ID: 20260404-optimization-planner
Recommendation received: optimize_only
Site mode: bootstrap
Quick wins critical: 0
Quick wins important: 18
Quick wins minor: 3
Optimize bias: medium
Publish bias: high
Optimization debt: high
Publish readiness: no
Publish blocked by: weak_gap_evidence,cannibalization_risk
Optimization priority score: 81
Publish priority score: 23

## Inputs considered today
- `SEO_DAILY_SIGNALS.md`
- `SEO_NEXT_ACTION.md`
- `SEO_STRATEGY.md`
- `SEO_AUTOMATION_STATE.md`
- `TASK_NEW_POST.md`
- `./outputs/seo/urbanharvestlab/seo_daily_2026-04-04.md` no existe en este workspace
- `./outputs/seo/urbanharvestlab/raw/gsc_2026-04-04.json` no existe en este workspace; se deja constancia tras intentar leerlo y se usan como respaldo operativo las señales consolidadas en `SEO_DAILY_SIGNALS.md`, `SEO_NEXT_ACTION.md` y `/tmp/tmp.zwfVl86BlQ`
- `/tmp/tmp.zwfVl86BlQ`
- `SEO_CTR_EXPERIMENTS.md` no existe en este workspace
- `SEO_TECH_QA_REPORT.md`
- `SEO_OPTIMIZATION_QUEUE.md` previo
- `SEO_OPTIMIZATION_TASKS.md` previo
- Inventario revisado en `src/content/blog`

## Top oportunidades
1. URL: `/blog/grow-lights/how-many-hours-grow-lights-herbs/`
   - Query: señal de URL agregada
   - Impresiones: `61`
   - Posición: `8.46`
   - Razón: `SEO_DAILY_SIGNALS.md` la marca como `title/meta refresh`; está en página 1 baja, fuera del historial de cambios de las últimas 24 horas y encaja con `optimize_only`
   - Tipo: quick win
2. URL: `/blog/plant-problems/common-potted-herb-problems/`
   - Query: señal de URL agregada
   - Impresiones: `36`
   - Posición: `7.97`
   - Razón: `SEO_DAILY_SIGNALS.md` la marca como `title/meta refresh`; tiene buen encaje para mejorar snippet y reforzar interlinks desde problemas y cuidado
   - Tipo: quick win
3. URL: `/blog/grow-lights/can-herbs-grow-indoors-without-direct-sunlight/`
   - Query: señal de URL agregada
   - Impresiones: `29`
   - Posición: `12.28`
   - Razón: sigue siendo refresh explícito de snippet y ya estaba en cola previa, pero hoy queda como supporting target detrás de la URL de horas de luz para no abrir dos cambios principales en el mismo clúster
   - Tipo: quick win
4. URL: `/blog/hydroponics/when-to-change-hydroponic-nutrient-solution/`
   - Query: señal de URL agregada
   - Impresiones: `51`
   - Posición: `9.51`
   - Razón: refresh explícito en `SEO_DAILY_SIGNALS.md`, pero se deja detrás del lote principal para no tensar el clúster hydroponics mientras `TASK_NEW_POST.md` sigue bloqueado por canibalización
   - Tipo: quick win
5. URL: `/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers/`
   - Query: señal de URL agregada
   - Impresiones: `82`
   - Posición: `11.57`
   - Razón: `SEO_NEXT_ACTION.md` la mantiene en target primario del día; la señal es válida, pero hoy queda en backlog para respetar el límite de dos posts
   - Tipo: quick win
6. URL: `/blog/soil-fertilizers/do-potted-herbs-need-fertilizer/`
   - Query: señal de URL agregada
   - Impresiones: `99`
   - Posición: `8.95`
   - Razón: sigue siendo quick win relevante, pero `/tmp/tmp.zwfVl86BlQ` confirma ejecución el `2026-04-03`; queda en observación de cooldown
   - Tipo: quick win
7. URL: `/blog/grow-lights/how-much-light-herbs-need/`
   - Query: señal de URL agregada
   - Impresiones: `45`
   - Posición: `11.64`
   - Razón: URL reciente ejecutada el `2026-04-03`; se mantiene como referencia estructural del clúster, no como target reabierto
   - Tipo: structural
8. URL: `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart/`
   - Query: señal de URL agregada
   - Impresiones: `3334`
   - Posición: `6.29`
   - Razón: mayor oportunidad CTR del sitio, pero sigue en enfriamiento según `SEO_DAILY_SIGNALS.md` y el histórico consolidado
   - Tipo: quick win
9. URL: `/blog/hydroponics/root-rot-hydroponics-prevention/`
   - Query: señal de URL agregada
   - Impresiones: `309`
   - Posición: `7.43`
   - Razón: CTR `0.00%` con volumen real, pero viene de cambios recientes y no se reabre sin deterioro material
   - Tipo: quick win
10. URL: `/blog/urban-gardening/best-herbs-sunny-balcony/`
    - Query: señal de URL agregada
    - Impresiones: `313`
    - Posición: `6.27`
    - Razón: página 1 con CTR `0.00%`, pero sigue en cooldown y no se toca hoy
    - Tipo: quick win
11. URL: `/blog/containers-planters/herb-pot-size-guide/`
    - Query: señal de URL agregada
    - Impresiones: `561`
    - Posición: `7.25`
    - Razón: oportunidad CTR fuerte según `SEO_DAILY_SIGNALS.md`, pero el bloque CTR ya la dejó para observación y no conviene duplicar trabajo hoy
    - Tipo: quick win
12. URL: `/blog/urban-gardening/north-facing-window-herbs/`
    - Query: señal de URL agregada
    - Impresiones: `103`
    - Posición: `4.09`
    - Razón: aparece en el bloque CTR de `SEO_DAILY_SIGNALS.md`, pero queda fuera del lote de hoy por prioridad a refreshs más directos en rango 8-20
    - Tipo: quick win

## Primary optimization targets today
- Target 1: `/blog/grow-lights/how-many-hours-grow-lights-herbs/`
  - Motivo: combina posición `8.46`, `61` impresiones y señal explícita de `title/meta refresh`; además refuerza el clúster grow-lights sin reabrir la URL ya tocada ayer
  - Alcance esperado: `title/meta`, ajuste de intro hacia intención transaccional-informativa de horario, y refuerzo de enlaces internos hacia `how-much-light-herbs-need`, `can-herbs-grow-indoors-without-direct-sunlight` e `indoor-herb-garden-apartment-setup`
- Target 2: `/blog/plant-problems/common-potted-herb-problems/`
  - Motivo: posición `7.97` con CTR `0.00%`, ángulo amplio y baja fricción editorial para mejorar snippet, quick answer y enlaces a guías de diagnóstico ya publicadas
  - Alcance esperado: `title/meta`, ajuste de intro, FAQ y enlaces internos hacia `why-basil-leaves-yellow-indoors`, `best-containers-herbs` y `potted-herb-care`
- Reserva inmediata si el executor encuentra bloqueo editorial: `/blog/grow-lights/can-herbs-grow-indoors-without-direct-sunlight/`

## Execution compatibility
- El día queda en `optimize_only` por contrato de `SEO_NEXT_ACTION.md`.
- No hay blocker técnico crítico confirmado hoy; `SEO_TECH_QA_REPORT.md` mantiene solo verificación pendiente en host final y no frena la optimización.
- Publicar sigue no listo, pero no por un bloqueo crítico de ejecución SEO sobre URLs existentes; sigue bloqueado por `weak_gap_evidence,cannibalization_risk` en `TASK_NEW_POST.md`.
- La cola de hoy sí deja preparado el siguiente job `run_urbanharvestlab_seo_tasks_executor_pr.sh`; si más tarde mejora la evidencia de publicación, este lote sigue siendo compatible con publicar después sin rehacer el trabajo de optimización.

## Ejecutado hoy
- `ST-SEO-009` ejecutada sobre `/blog/grow-lights/how-many-hours-grow-lights-herbs/` con refresh de title/meta, intro y FAQ, manteniendo slug y estructura del clúster grow-lights.
- `ST-SEO-003` ejecutada sobre `/blog/plant-problems/common-potted-herb-problems/` con refresh de title/meta, intro y FAQ, reforzando interlinks hacia diagnóstico y cuidado existentes.

## CTR follow-up queued today
- Fecha: `2026-04-04`
- Fuente considerada: `/tmp/tmp.ECRjY0djUy`, `SEO_DAILY_SIGNALS.md`, `SEO_NEXT_ACTION.md`, `TASK_NEW_POST.md`, `SEO_AUTOMATION_STATE.md`, `SEO_OPTIMIZATION_TASKS.md`
- URLs encoladas para seguimiento CTR:
  - `/blog/containers-planters/herb-pot-size-guide/` -> tarea `ST-SEO-011`
  - `/blog/urban-gardening/north-facing-window-herbs/` -> tarea `ST-SEO-012`
- Estado operativo: quedan en cola para el siguiente executor y no se aplican como experimento ni como cambio de contenido en este paso
- Execution compatibility: backlog compatible con el flujo actual; el siguiente job ejecutor real es `run_urbanharvestlab_seo_tasks_executor_pr.sh`

<!-- awfm-run: 2026-04-04 20260404-161822 -->
