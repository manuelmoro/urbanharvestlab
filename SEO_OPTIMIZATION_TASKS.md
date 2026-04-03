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

- [x] `ST-SEO-001`
  - Estado: done
  - Post objetivo: `src/content/blog/soil-fertilizers/do-potted-herbs-need-fertilizer.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el frontmatter refleja un snippet más específico para `do potted herbs need fertilizer`, si se añadieron enlaces contextuales hacia `common-potted-herb-problems`, `how-often-to-water-potted-herbs` y `pruning-basil-mint-parsley-chives`, y si el schema FAQ sigue válido sin romper canonical
  - Fecha de ejecución: 2026-04-03
  - Nota de implementación: title, description y excerpt alineados con la query principal; se añadió un quick answer y FAQ específica; se reforzaron enlaces internos a problemas, riego y poda; se mantuvo el slug para preservar canonical y el bloque `faq` para el schema.

- [x] `ST-SEO-002`
  - Estado: done
  - Post objetivo: `src/content/blog/grow-lights/how-much-light-herbs-need.md`
  - Acciones: title/meta, intro, FAQ, enlaces internos, canonical, schema
  - Validación: comprobar mañana si el snippet alinea mejor la intención `how much light do herbs need`, si el quick answer gana precisión para page-1, si enlaza mejor hacia `can-herbs-grow-indoors-without-direct-sunlight`, `how-many-hours-grow-lights-herbs` y `indoor-herb-garden-apartment-setup`, y si canonical/schema permanecen estables
  - Fecha de ejecución: 2026-04-03
  - Nota de implementación: title, description y excerpt se hicieron más directos para la intención principal; se afinó intro y quick answer; se añadieron `topicLinks`, `relatedSlugs` y FAQ hacia low-light, runtime de grow lights y apartment setup; se conservó el slug y el bloque `faq` para mantener canonical/schema estables.

## Backlog

- [ ] `ST-SEO-003`
  - Estado: pending
  - Post objetivo: `src/content/blog/plant-problems/common-potted-herb-problems.md`
  - Acciones: title/meta
  - Validación: comprobar en el siguiente executor si el refresh de snippet mejora la intención `common potted herb problems` sin tocar slug ni contenido y deja la URL lista para validación posterior en GSC
  - Fecha de ejecución: pending

- [ ] `ST-SEO-004`
  - Estado: pending
  - Post objetivo: `src/content/blog/grow-lights/can-herbs-grow-indoors-without-direct-sunlight.md`
  - Acciones: title/meta
  - Validación: comprobar en el siguiente executor si el refresh de snippet mejora la intención `can herbs grow indoors without direct sunlight` sin tocar slug ni contenido y deja la URL lista para validación posterior en GSC
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
- follow-up CTR de esta cadena: los targets seleccionados ya quedaron registrados en `## Backlog` y deben esperar al siguiente job ejecutor real `run_urbanharvestlab_seo_tasks_executor_pr.sh`

<!-- awfm-run: 2026-04-03 20260403-114334 -->
