# SEO Optimization Tasks

Date: 2026-04-03
Run ID: 20260403-optimization-planner

## Inputs considered today
- `SEO_DAILY_SIGNALS.md`
- `SEO_NEXT_ACTION.md`
- `SEO_STRATEGY.md`
- `SEO_AUTOMATION_STATE.md`
- `TASK_NEW_POST.md`
- `./outputs/seo/urbanharvestlab/seo_daily_2026-04-03.md` no existe en la ruta indicada
- `./outputs/seo/urbanharvestlab/raw/gsc_2026-04-03.json` no existe en la ruta indicada; se usó como respaldo operativo la señal GSC ya consolidada en `SEO_DAILY_SIGNALS.md`, `SEO_NEXT_ACTION.md` y `/tmp/tmp.3t4td997zy`
- `/tmp/tmp.3t4td997zy`
- `SEO_CTR_EXPERIMENTS.md` no existe
- `SEO_TECH_QA_REPORT.md` no existe
- Inventario revisado en `src/content/blog`

## Checklist ejecutable (hoy)

- [ ] `ST-SEO-001`
  - Estado: pending
  - Post objetivo: `src/content/blog/soil-fertilizers/do-potted-herbs-need-fertilizer.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el frontmatter refleja un snippet más específico para `do potted herbs need fertilizer`, si se añadieron enlaces contextuales hacia `common-potted-herb-problems`, `how-often-to-water-potted-herbs` y `pruning-basil-mint-parsley-chives`, y si el schema FAQ sigue válido sin romper canonical
  - Fecha de ejecución: 2026-04-03

- [ ] `ST-SEO-002`
  - Estado: pending
  - Post objetivo: `src/content/blog/grow-lights/how-much-light-herbs-need.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el snippet alinea mejor la intención `how much light do herbs need`, si el quick answer gana precisión para page-1, si enlaza mejor hacia `can-herbs-grow-indoors-without-direct-sunlight`, `how-many-hours-grow-lights-herbs` y `indoor-herb-garden-apartment-setup`, y si canonical/schema permanecen estables
  - Fecha de ejecución: 2026-04-03

## Backlog

- [ ] `ST-SEO-003`
  - Estado: pending
  - Post objetivo: `src/content/blog/plant-problems/common-potted-herb-problems.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: revisar si el snippet incorpora mejor `common potted herb problems` y si aumenta la conexión con `how-much-light-herbs-need` y `best-containers-herbs` sin canibalizar piezas más específicas
  - Fecha de ejecución: pending

- [ ] `ST-SEO-004`
  - Estado: pending
  - Post objetivo: `src/content/blog/grow-lights/can-herbs-grow-indoors-without-direct-sunlight.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: revisar si el snippet capta mejor la query de no-direct-sun, si se refuerza la transición hacia `how-much-light-herbs-need` y `windowsill-herb-garden-low-light`, y si FAQ/schema siguen coherentes
  - Fecha de ejecución: pending

- [ ] `ST-SEO-005`
  - Estado: pending
  - Post objetivo: `src/content/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: confirmar si el refresh mejora el foco de contenedores frente a su variante para herbs y si la interlinking con `container-depth-tomatoes-peppers-herbs` y `why-basil-leaves-yellow-indoors` queda más explícita
  - Fecha de ejecución: pending

- [ ] `ST-SEO-006`
  - Estado: manual
  - Post objetivo: `src/content/blog/hydroponics/hydroponic-lettuce-ec-ph-chart.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: mantener observación durante el cooldown y reabrir solo si la próxima foto confirma deterioro material tras el cambio del `2026-04-02`
  - Fecha de ejecución: pending

- [ ] `ST-SEO-007`
  - Estado: manual
  - Post objetivo: `src/content/blog/hydroponics/root-rot-hydroponics-prevention.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: esperar otra ventana de medición porque la URL fue tocada el `2026-04-02`; reabrir solo con señal nueva o caída persistente
  - Fecha de ejecución: pending

- [ ] `ST-SEO-008`
  - Estado: manual
  - Post objetivo: `src/content/blog/urban-gardening/best-herbs-sunny-balcony.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: dejar en observación por cambios del `2026-04-02` y revisar si sigue con CTR `0.00%` en el próximo snapshot
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
- cómo afecta a las tareas del día: se priorizan solo quick wins y refuerzos estructurales sobre posts existentes, se limita la ejecución a `2` URLs principales, se respetan cooldowns recientes y no se genera ninguna tarea de publicación nueva

<!-- awfm-run: 2026-04-03 20260403-114334 -->
