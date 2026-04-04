<!-- AWFM_RUNTIME_HTTP_STATUS: deploy_pending -->
<!-- AWFM_RUNTIME_HTTP_PREVIEW_LIMITATION: yes -->
<!-- AWFM_RUNTIME_HTTP_URLS_TESTED: 96 -->
<!-- AWFM_RUNTIME_HTTP_REDIRECT_CHECKED: yes -->
<!-- AWFM_RUNTIME_HTTP_CODE_CHECKED: yes -->
<!-- AWFM_RUNTIME_HTTP_VERIFIED: true -->
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
- Se auditó `dist/sitemap.xml` y se verificaron `48` URLs canónicas publicadas, todas con slash final.
- Las `48/48` URLs canónicas respondieron `200` en runtime local con canonical autorreferencial exacta, sin `noindex` y con un solo `H1` detectable.
- No existe hoy doble versión `200` con y sin slash en el entorno local auditado; la variante sin slash cae en `404`.
- El riesgo técnico pendiente sigue siendo de consolidación: `0/47` variantes sin slash devolvieron `301/308` hacia la versión final con slash.
- `hreflang` EN/ES no aplica en este repo porque el árbol publicado sigue siendo solo EN y no existe una versión ES equivalente en `src/content`.
- No se aplicó fix de redirect en código porque el repositorio no identifica la capa final de hosting y Astro static no garantiza ese redirect para páginas prerenderizadas sin soporte del host.

## Validación runtime realizada
- Build ejecutada con `npm run build`.
- Preview local ejecutado con `npm run preview -- --host 127.0.0.1 --port 4321`.
- Requests HTTP reales ejecutados sobre `96` rutas:
- `48` URLs canónicas del sitemap.
- `47` variantes equivalentes sin slash.
- `1` URL inexistente para validar manejo `404`.
- Resultado canónicas:
- `48/48` con `200`.
- `48/48` con `<link rel="canonical">` exacta y autorreferencial.
- `48/48` sin `noindex`.
- `48/48` con un solo `H1` detectable.
- Resultado redirects sin slash:
- `0/47` con `301/308`.
- `47/47` con `404` en `astro preview`.
- Resultado de errores:
- `/does-not-exist` respondió `404`.
- No hubo evidencia de `5xx` en el alcance auditado.
- Limitación explícita del runtime:
- `astro preview` valida el comportamiento del build estático, pero no reproduce redirects dependientes del host final. El código del sitio sigue en `deploy_pending` para esa comprobación concreta.

## Hallazgos
| Tipo | URL | Severidad | Evidencia | Fix aplicado |
| --- | --- | --- | --- | --- |
| Redirect trailing slash pendiente de host | `/blog/grow-lights/how-much-light-herbs-need/` y mismo patrón en las `47` variantes sin slash auditadas | Alta | `astro preview` respondió `404` para `/blog/grow-lights/how-much-light-herbs-need` y equivalentes sin slash, mientras la URL canónica con slash respondió `200`; no hubo doble respuesta `200`, pero tampoco `301/308` de consolidación | No aplicado en código. El repo está en Astro `output: static` con `trailingSlash: 'always'` y sin capa de hosting declarada; la verificación queda pendiente de despliegue/host final |
| Canonical autorreferencial correcta | `48` URLs del sitemap | Baja | `48/48` páginas del sitemap devolvieron `200` y canonical exacta con slash final | No hacía falta cambio |
| Meta robots consistente en URLs indexables | `48` URLs del sitemap | Baja | Ninguna URL del sitemap devolvió `noindex` en HTML | No hacía falta cambio |
| Enlaces internos normalizados con slash final | HTML generado en `dist/` | Baja | No se detectaron enlaces internos HTML hacia rutas navegables sin slash final dentro del build auditado | No hacía falta cambio |
| Sitemap y build coherentes en superficie indexable | `dist/sitemap.xml` y build actual | Baja | Las URLs incluidas en sitemap existen en build y las páginas `noindex` de `/category/{slug}/` quedan fuera del sitemap de forma coherente con su estado | No hacía falta cambio |
| Hreflang EN/ES no aplicable | Sitio completo auditado | Baja | No existe árbol ES publicado ni pares EN<->ES reales para reciprocidad | No se añadió `hreflang` ficticio |
| Manejo de 404 correcto en muestra | `/does-not-exist` | Baja | El runtime local respondió `404` y no se observó `soft 404` en la muestra validada | No hacía falta cambio |

## URLs todavía con riesgo
- `/blog/`
- `/categories/`
- `/urban-gardening/`
- `/hydroponics/`
- `/grow-lights/`
- `/containers-planters/`
- `/soil-fertilizers/`
- `/plant-problems/`
- `/about/`
- `/contact/`
- `/affiliate-disclosure/`
- `/privacy-policy/`
- Todas las URLs de artículo bajo el patrón `/blog/{category}/{slug}/`, porque su variante sin slash sigue sin redirect `301/308` validado en el host final.

## Archivos modificados
- `SEO_TECH_QA_REPORT.md`
