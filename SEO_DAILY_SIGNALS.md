# SEO Daily Signals

## Fecha
- 2026-04-05

## Top señales GSC
- Snapshot fijo del run: `Indexed URLs estimate = 47`, `Queries 28d = 284`, `Impressions 28d = 6609`.
- `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart/` lidera con `10` clics, `3529` impresiones, `0.28%` CTR y posición media `6.34`; sigue siendo la mayor palanca orgánica del site, pero está en enfriamiento tras cambios del `2026-04-02`.
- `/blog/containers-planters/herb-pot-size-guide/` alcanza `642` impresiones, `0.93%` CTR y posición media `7.12`; ya está fuera del cooldown y vuelve a ser una oportunidad clara de snippet.
- `/blog/urban-gardening/best-herbs-sunny-balcony/` y `/blog/hydroponics/root-rot-hydroponics-prevention/` siguen con `338` y `313` impresiones, `0.00%` CTR y posiciones medias `6.37` y `7.58`, pero ambas URLs quedan en observación por cambios recientes del `2026-04-02`.
- La oportunidad de contenido nuevo sigue débil: `hydroponic feeding basics` solo registra `29` impresiones, `0` clics y posición media `61.97`, sin abrir un hueco limpio frente al clúster hydroponics ya existente.

## Top señales GA4
- La propiedad `528419708` está accesible en `analytics-mcp`; el resumen de cuenta confirma la propiedad `UrbanHarvestLab`.
- La homepage `/` lidera con `81` sesiones, `59` usuarios, `26` sesiones con interacción, `32.10%` de engagement rate, `65.83s` de duración media de sesión y `378` eventos.
- `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart` es la landing de contenido más fuerte con `31` sesiones, `27` usuarios, `14` sesiones con interacción, `45.16%` de engagement rate, `223.15s` de duración media de sesión y `149` eventos.
- `/blog/containers-planters/herb-pot-size-guide` sigue con `15` sesiones, `14` usuarios, `5` sesiones con interacción, `33.33%` de engagement rate, `268.33s` de duración media de sesión y `62` eventos.
- `/blog/hydroponics/root-rot-hydroponics-prevention` y `/blog/urban-gardening/best-herbs-sunny-balcony/` registran `7` sesiones cada una, pero sin sesiones con interacción; la presión principal sigue estando en el snippet y no en ampliar contenido.
- `averageEngagementTime` no está disponible en este acceso de GA4; la métrica válida devuelta por MCP es `averageSessionDuration`.

## URLs en striking distance
- `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart/` en posición media `6.34` con `3529` impresiones.
- `/blog/containers-planters/herb-pot-size-guide/` en posición media `7.12` con `642` impresiones.
- `/blog/urban-gardening/best-herbs-sunny-balcony/` en posición media `6.37` con `338` impresiones.
- `/blog/hydroponics/root-rot-hydroponics-prevention/` en posición media `7.58` con `313` impresiones.
- `/blog/containers-planters/best-containers-herbs/` en posición media `10.45` con `334` impresiones.
- `/blog/urban-gardening/how-often-to-water-potted-herbs/` en posición media `12.07` con `172` impresiones.
- `/blog/soil-fertilizers/do-potted-herbs-need-fertilizer/` en posición media `10.03` con `103` impresiones.
- `/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers/` en posición media `11.45` con `85` impresiones.
- `/blog/grow-lights/how-many-hours-grow-lights-herbs/` en posición media `8.31` con `70` impresiones.
- `/blog/hydroponics/when-to-change-hydroponic-nutrient-solution/` en posición media `9.39` con `61` impresiones.

## Oportunidades CTR
- `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart/`
  CTR base: `0.28%`
  impresiones: `3529`
  posición: `6.34`
  acción esperada: `observacion_enfriamiento`
- `/blog/containers-planters/herb-pot-size-guide/`
  CTR base: `0.93%`
  impresiones: `642`
  posición: `7.12`
  acción esperada: `title/meta refresh`
- `/blog/urban-gardening/best-herbs-sunny-balcony/`
  CTR base: `0.00%`
  impresiones: `338`
  posición: `6.37`
  acción esperada: `observacion_enfriamiento`
- `/blog/hydroponics/root-rot-hydroponics-prevention/`
  CTR base: `0.00%`
  impresiones: `313`
  posición: `7.58`
  acción esperada: `observacion_enfriamiento`
- `/blog/containers-planters/best-containers-herbs/`
  CTR base: `0.90%`
  impresiones: `334`
  posición: `10.45`
  acción esperada: `title/meta refresh`
- `/blog/urban-gardening/how-often-to-water-potted-herbs/`
  CTR base: `0.00%`
  impresiones: `172`
  posición: `12.07`
  acción esperada: `title/meta refresh`
- `/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers/`
  CTR base: `0.00%`
  impresiones: `85`
  posición: `11.45`
  acción esperada: `title/meta refresh`
- `/blog/urban-gardening/north-facing-window-herbs/`
  CTR base: `2.75%`
  impresiones: `109`
  posición: `4.25`
  acción esperada: `title/meta refresh`

## Riesgos técnicos detectados
- `http://urbanharvestlab.com/` sigue apareciendo en GSC con `9` impresiones y `0` clics, pero el histórico consolidado lo muestra plano durante múltiples snapshots; se trata como residuo histórico importante y no como bloqueo crítico vivo.
- El estado técnico actual es `deploy_pending` con `preview limitation = yes`, `production issue confirmed = no`, `host-final verification pending = yes`, `canonical 200 ratio = 48/48`, `no-slash redirect ratio = 0/47` y ausencia de dobles `200`; esto se interpreta como validación pendiente en host final, no como incidente confirmado en producción.
- El placeholder del nuevo post mantiene riesgo alto de canibalización frente a `/blog/hydroponics/hydroponic-nutrients-ec-ph-basics/` y `/blog/hydroponics/hydroponic-lettuce-ec-ph-chart/`.
- El árbol de contenido sigue siendo solo EN; no existe una separación EN/ES publicada en `src/content`.

## Oportunidad principal del día
- Ejecutar el siguiente lote de optimización fuera del cooldown reciente: `/blog/containers-planters/herb-pot-size-guide/`, `/blog/containers-planters/best-containers-herbs/`, `/blog/urban-gardening/how-often-to-water-potted-herbs/`, `/blog/soil-fertilizers/potting-mix-vs-raised-bed-soil-containers/` y `/blog/urban-gardening/north-facing-window-herbs/`. Las URLs de mayor volumen tocadas entre el `2026-04-02` y el `2026-04-04` quedan en observación para no repetir refresh ciegos.

## Bloque machine-readable
Site mode: bootstrap
Mode candidate: bootstrap
Mode streak: 0
Indexed URLs estimate: 47
Queries 28d: 284
Impressions 28d: 6609
Quick wins critical: 0
Quick wins important: 18
Quick wins minor: 3
Optimize bias: medium
Publish bias: high
Optimization debt: high
Publish readiness: no
Publish blocked by: weak_gap_evidence,cannibalization_risk
Optimization priority score: 83
Publish priority score: 24
Recommendation: optimize_only

<!-- AWFM:ctr-signals:2026-04-05:start -->
## Oportunidades CTR
- URL: `https://urbanharvestlab.com/blog/containers-planters/herb-pot-size-guide/`
  - CTR base: `0.93%`
  - Clics / impresiones base: `6` / `642`
  - Posición media: `7.12`
  - Acción esperada: `optimización de title/meta`
  - Motivo: Posición 7.12 con 642 impresiones y CTR 0.93% por debajo del esperado 4.91%.
- URL: `https://urbanharvestlab.com/blog/urban-gardening/north-facing-window-herbs/`
  - CTR base: `2.75%`
  - Clics / impresiones base: `3` / `109`
  - Posición media: `4.25`
  - Acción esperada: `optimización de title/meta`
  - Motivo: Posición 4.25 con 109 impresiones y CTR 2.75% por debajo del esperado 8.24%.
<!-- AWFM:ctr-signals:2026-04-05:end -->
