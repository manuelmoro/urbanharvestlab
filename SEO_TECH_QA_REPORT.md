<!-- AWFM_RUNTIME_HTTP_STATUS: deploy_pending -->
<!-- AWFM_RUNTIME_HTTP_PREVIEW_LIMITATION: yes -->
<!-- AWFM_RUNTIME_HTTP_PRODUCTION_ISSUE_CONFIRMED: no -->
<!-- AWFM_RUNTIME_HTTP_HOST_FINAL_VERIFICATION_PENDING: yes -->
<!-- AWFM_RUNTIME_HTTP_URLS_TESTED: 98 -->
<!-- AWFM_RUNTIME_HTTP_REDIRECT_CHECKED: yes -->
<!-- AWFM_RUNTIME_HTTP_CODE_CHECKED: yes -->
<!-- AWFM_RUNTIME_HTTP_VERIFIED: false -->
<!-- AWFM_RUNTIME_HTTP_CANONICAL_200: 48/48 -->
<!-- AWFM_RUNTIME_HTTP_NOSLASH_REDIRECT_308: 0/47 -->

# Informe de QA técnico SEO

## Inputs considered today
- `CONTENT_GUIDELINES.md`
- `TASK_NEW_POST.md`
- `SEO_STRATEGY.md`
- `SEO_DAILY_SIGNALS.md`
- `SEO_NEXT_ACTION.md`
- `SEO_AUTOMATION_STATE.md`
- `SEO_OPTIMIZATION_QUEUE.md`
- `SEO_OPTIMIZATION_TASKS.md`

## Resumen ejecutivo
- Se auditó `dist/sitemap.xml` y se validaron `48` URLs canónicas publicadas con slash final.
- Las `48/48` URLs del sitemap devolvieron `200`, canonical autorreferencial exacta, sin `noindex` y con un solo `H1` detectable.
- No hay fallo confirmado de producción en el alcance auditado desde este repo: no aparecieron dobles versiones `200` con y sin slash ni errores `5xx` en la validación local.
- La verificación pendiente sigue en la capa de host final: en `astro preview` las variantes sin slash no redirigen `301/308`; responden `404`, por lo que la consolidación final de señales queda `deploy_pending`.
- `hreflang` EN<->ES no aplica hoy porque el sitio publicado en este repo sigue siendo solo EN y no existe árbol ES real en `src/content`.
- Se corrigió una incoherencia técnica menor en la `404` compilada para que su canonical apunte a `/404.html` y no a `/404/`.

## Validación runtime realizada
- Build ejecutada con `npm run build`.
- Validación estática ejecutada con `npm run check` sin errores ni warnings.
- Preview local ejecutado con `npm run preview -- --host 127.0.0.1 --port 4322`.
- Requests HTTP reales ejecutados en esta corrida:
- `48` URLs canónicas extraídas de `dist/sitemap.xml`.
- `47` variantes equivalentes sin slash.
- `3` rutas de error para comprobar `404` y una muestra de handling no canónico.
- Resultado sobre URLs canónicas del sitemap:
- `48/48` con estado `200`.
- `48/48` con `<link rel="canonical">` exacta y autorreferencial.
- `48/48` sin `noindex`.
- `48/48` con un solo `H1` detectable.
- Resultado sobre variantes sin slash:
- `0/47` con `301/308` en `astro preview`.
- `47/47` con `404` en `astro preview`, sin evidencia de doble versión `200`.
- Resultado sobre errores:
- Muestras `404` en `/definitely-missing-page/`, `/blog/not-a-real-category/not-a-real-post/` y `/category/not-real/`.
- La muestra con slash final sí sirvió la `404` propia del sitio; las rutas sin slash quedan condicionadas por la limitación de `astro preview` con `trailingSlash: 'always'`.
- No hubo evidencia de `5xx` en el alcance auditado.

## Hallazgos
| Tipo | URL | Severidad | Evidencia | Fix aplicado |
| --- | --- | --- | --- | --- |
| Verificación de redirect trailing slash en host final | `Variantes sin slash equivalentes a las URLs canónicas del sitemap` | Pendiente de verificación | `astro preview` respondió `404` en las variantes sin slash y `200` en las canónicas con slash; no hubo doble respuesta `200` y este repo no permite confirmar la capa de redirect del hosting final | No aplicado en código del repo. La validación definitiva queda fuera de Astro preview y debe confirmarse en el host final, sin que este resultado implique un fallo confirmado de producción |
| Canonical de la `404` compilada incoherente | `/404.html` | Media | La build previa generaba canonical `https://urbanharvestlab.com/404/` aunque el archivo real es `404.html` | Sí. Se ajustó [src/utils/seo.ts](/home/mmoro/Documentos/AiWorkForMe/bundles/urbanharvestlab/src/utils/seo.ts) y [src/pages/404.astro](/home/mmoro/Documentos/AiWorkForMe/bundles/urbanharvestlab/src/pages/404.astro) para preservar rutas con extensión y dejar canonical autorreferencial correcta |
| Canonical sitemap/build consistente en URLs indexables | `48` URLs del sitemap | Baja | `48/48` páginas del sitemap devolvieron `200` con canonical exacta y slash final coherente con `dist/sitemap.xml` | No hacía falta cambio adicional |
| `noindex` controlado y fuera del sitemap | `/category/{slug}/` y `/404.html` | Baja | Los archivos no indexables detectados están fuera del sitemap y usan `noindex` de forma intencional | No hacía falta cambio adicional |
| `hreflang` EN<->ES no aplicable | Alcance completo del sitio | Baja | No existe árbol ES publicado en `src/content`, así que no hay pares EN/ES reales que permitan reciprocidad válida | No se introduce `hreflang` ficticio |

## URLs todavía con riesgo
- No hay URLs con fallo confirmado en producción dentro del alcance auditado desde este repo.
- Queda pendiente validar en el host final la respuesta de las variantes sin slash equivalentes a las URLs canónicas del sitemap.

## Archivos modificados
- [src/utils/seo.ts](/home/mmoro/Documentos/AiWorkForMe/bundles/urbanharvestlab/src/utils/seo.ts)
- [src/pages/404.astro](/home/mmoro/Documentos/AiWorkForMe/bundles/urbanharvestlab/src/pages/404.astro)
- [SEO_TECH_QA_REPORT.md](/home/mmoro/Documentos/AiWorkForMe/bundles/urbanharvestlab/SEO_TECH_QA_REPORT.md)
