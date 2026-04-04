# SEO Optimization Tasks

Date: 2026-04-04
Run ID: 20260404-optimization-planner

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

## Checklist ejecutable (hoy)

- [x] `ST-SEO-003`
  - Estado: done
  - Post objetivo: `src/content/blog/plant-problems/common-potted-herb-problems.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el snippet captura mejor la intención `common potted herb problems`, si la intro deja un quick answer más claro y si se refuerzan enlaces hacia `why-basil-leaves-yellow-indoors`, `best-containers-herbs` y `potted-herb-care` sin romper canonical ni FAQ schema
  - Fecha de ejecución: 2026-04-04
  - Nota de implementación: refresh conservador de title/meta e intro, añadido FAQ para la intención principal y validación de enlaces internos existentes hacia `why-basil-leaves-yellow-indoors`, `best-containers-herbs` y `potted-herb-care`

- [x] `ST-SEO-009`
  - Estado: done
  - Post objetivo: `src/content/blog/grow-lights/how-many-hours-grow-lights-herbs.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el refresh mejora la intención `how many hours should grow lights run for herbs`, si la intro responde antes a la duda principal y si enlaza mejor con `how-much-light-herbs-need`, `can-herbs-grow-indoors-without-direct-sunlight` e `indoor-herb-garden-apartment-setup` sin alterar slug ni marcado estructurado
  - Fecha de ejecución: 2026-04-04
  - Nota de implementación: quick answer adelantado en title/meta e intro, ampliado FAQ para distinguir seedlings frente a herbs establecidos y reforzado el camino interno hacia guías de luz, setup y fixture selection

- [x] `ST-SEO-001`
  - Estado: done
  - Post objetivo: `src/content/blog/soil-fertilizers/do-potted-herbs-need-fertilizer.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el frontmatter refleja un snippet más específico para `do potted herbs need fertilizer`, si se añadieron enlaces contextuales hacia `common-potted-herb-problems`, `how-often-to-water-potted-herbs` y `pruning-basil-mint-parsley-chives`, y si el schema FAQ sigue válido sin romper canonical
  - Fecha de ejecución: 2026-04-03

- [x] `ST-SEO-002`
  - Estado: done
  - Post objetivo: `src/content/blog/grow-lights/how-much-light-herbs-need.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el snippet alinea mejor la intención `how much light do herbs need`, si el quick answer gana precisión para page-1, si enlaza mejor hacia `can-herbs-grow-indoors-without-direct-sunlight`, `how-many-hours-grow-lights-herbs` y `indoor-herb-garden-apartment-setup`, y si canonical/schema permanecen estables
  - Fecha de ejecución: 2026-04-03

## Backlog

- [ ] `ST-SEO-004`
  - Estado: pending
  - Post objetivo: `src/content/blog/grow-lights/can-herbs-grow-indoors-without-direct-sunlight.md`
  - Acciones: title/meta, intro, enlaces internos, canonical, schema
  - Validación: comprobar en el siguiente executor si el refresh de snippet mejora la intención `can herbs grow indoors without direct sunlight` sin tocar slug ni abrir canibalización con `windowsill-herb-garden-low-light`
  - Fecha de ejecución: pending

- [ ] `ST-SEO-005`
  - Estado: pending
  - Post objetivo: `src/content/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: confirmar si el refresh mejora el foco de contenedores frente a la variante para herbs y si la interlinking con `container-depth-tomatoes-peppers-herbs` y `why-basil-leaves-yellow-indoors` queda más explícita
  - Fecha de ejecución: pending

- [ ] `ST-SEO-010`
  - Estado: pending
  - Post objetivo: `src/content/blog/hydroponics/when-to-change-hydroponic-nutrient-solution.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar si el refresh mejora la intención `when to change hydroponic nutrient solution` sin invadir el espacio semántico de `hydroponic-nutrients-ec-ph-basics` ni del candidato bloqueado en `TASK_NEW_POST.md`
  - Fecha de ejecución: pending

- [ ] `ST-SEO-011`
  - Estado: pending
  - Post objetivo: `src/content/blog/containers-planters/herb-pot-size-guide.md`
  - Acciones: title/meta
  - Validación: comprobar en el siguiente executor si el refresh de snippet mejora CTR para la URL seleccionada sin tocar slug ni abrir una reescritura de contenido fuera de alcance
  - Fecha de ejecución: pending

- [ ] `ST-SEO-012`
  - Estado: pending
  - Post objetivo: `src/content/blog/urban-gardening/north-facing-window-herbs.md`
  - Acciones: title/meta
  - Validación: comprobar en el siguiente executor si el refresh de snippet mejora CTR para la URL seleccionada sin tocar slug ni abrir una reescritura de contenido fuera de alcance
  - Fecha de ejecución: pending

- [ ] `ST-SEO-006`
  - Estado: manual
  - Post objetivo: `src/content/blog/hydroponics/hydroponic-lettuce-ec-ph-chart.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: mantener observación durante el cooldown y reabrir solo si el siguiente snapshot confirma deterioro material tras los cambios recientes
  - Fecha de ejecución: pending

- [ ] `ST-SEO-007`
  - Estado: manual
  - Post objetivo: `src/content/blog/hydroponics/root-rot-hydroponics-prevention.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: esperar otra ventana de medición porque la URL sigue dentro del bloque de observación reciente; reabrir solo con señal nueva o caída persistente
  - Fecha de ejecución: pending

- [ ] `ST-SEO-008`
  - Estado: manual
  - Post objetivo: `src/content/blog/urban-gardening/best-herbs-sunny-balcony.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: dejar en observación por cooldown y revisar si mantiene CTR `0.00%` en el próximo snapshot antes de reabrir cambios
  - Fecha de ejecución: pending

## Decision context
- Recommendation recibida desde `SEO_NEXT_ACTION.md`: `optimize_only`
- Site mode: `bootstrap`
- Quick wins critical: `0`
- Quick wins important: `18`
- Quick wins minor: `3`
- Optimize bias: `medium`
- Publish bias: `high`
- Optimization debt: `high`
- Publish readiness: `no`
- Publish blocked by: `weak_gap_evidence,cannibalization_risk`
- cómo afecta a las tareas del día: se priorizan solo dos quick wins sobre URLs existentes, se respetan los cooldowns del histórico consolidado, los dos targets CTR seleccionados hoy quedan añadidos solo en `## Backlog` y el siguiente job ejecutor real sigue siendo `run_urbanharvestlab_seo_tasks_executor_pr.sh` sin convertir la verificación técnica pendiente en blocker crítico

<!-- awfm-run: 2026-04-04 20260404-161822 -->
