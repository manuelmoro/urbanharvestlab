<!-- AWFM_RUNTIME_HTTP_STATUS: deploy_pending -->
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
- Se auditó el sitemap generado en `dist/sitemap.xml` y se validaron `48` URLs canónicas publicadas.
- Las `48/48` URLs canónicas respondieron `200` en runtime local y mostraron canonical autorreferencial exacta con slash final.
- No se detectaron páginas de sitemap con `noindex`; tampoco se detectaron dobles versiones `200` con y sin slash en el preview local.
- El hallazgo crítico es de consolidación: las `47` variantes sin slash auditadas no redirigen `301/308` a su URL final con slash; en `astro preview` responden `404`.
- No se aplicó una regla de redirect en código/config porque el repositorio no identifica el host final de despliegue y no es seguro inventar una capa concreta (`Netlify`, `Vercel`, `Nginx`, etc.).
- `hreflang` EN/ES no aplica hoy: el árbol publicado sigue siendo solo EN y no existe equivalente ES en `src/content`.

## Validación runtime realizada
- Build ejecutada con `npm run build`.
- Preview local ejecutado con `npm run preview -- --host 127.0.0.1 --port 4321`.
- Requests HTTP reales ejecutados:
  - `48` URLs canónicas del sitemap.
  - `47` variantes equivalentes sin slash.
  - `1` URL inexistente para validar handling `404`.
- Resultado canónicas:
  - `48/48` con `200`.
  - `48/48` con `<link rel="canonical">` exacta y autorreferencial.
  - `48/48` sin `noindex`.
  - `48/48` con un solo `H1` detectable.
- Resultado redirects sin slash:
  - `0/47` con `301/308`.
  - `47/47` devolvieron `404` en el preview local.
- Resultado errores:
  - Muestra `404` validada en `/definitely-missing-page/` con estado `404`.
  - No hubo evidencia de `5xx` en el alcance auditado.

## Hallazgos
| Tipo | URL | Severidad | Evidencia | Fix aplicado |
| --- | --- | --- | --- | --- |
| Redirect trailing slash ausente | `/blog/grow-lights/how-much-light-herbs-need/` y mismo patrón en las `47` variantes sin slash auditadas | Crítica | `astro preview` devuelve `404` para `/blog/grow-lights/how-much-light-herbs-need` en lugar de `301/308` hacia `/blog/grow-lights/how-much-light-herbs-need/`; mismo comportamiento para hubs, índices y páginas estáticas | No aplicado en código porque la regla depende del host final y el repo no expone esa capa; queda pendiente preparar/verificar redirect en despliegue |
| Canonical autorreferencial correcta | `48` URLs del sitemap | Baja | `48/48` páginas del sitemap devolvieron `200` y canonical exacta con slash final | No hacía falta cambio |
| Sitemap vs build consistente | `dist/sitemap.xml` | Baja | Las URLs del sitemap existen en la build estática y no se detectaron URLs de sitemap con `noindex` | No hacía falta cambio |
| Hreflang EN/ES no aplicable | Sitio completo auditado | Baja | No existe árbol ES publicado en `src/content`; no hay pares EN<->ES reales que puedan exigir reciprocidad | No hacía falta cambio; se evita introducir `hreflang` ficticio |
| Manejo de 404 correcto en muestra | `/definitely-missing-page/` | Baja | El preview local respondió `404`; no se observó `200 soft-404` en la muestra | No hacía falta cambio |

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
- Todas las URLs de artículo del sitemap bajo el patrón `/blog/{category}/{slug}/`, porque su variante sin slash sigue sin redirect `301/308` validado en runtime local.

## Archivos modificados
- `SEO_TECH_QA_REPORT.md`
- No se aplicaron cambios de código ni de configuración SEO porque no había una corrección de redirect segura sin identificar el host final de despliegue.
