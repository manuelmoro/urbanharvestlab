# Guía Obligatoria para la Creación de Contenido

Este documento define el estándar editorial y técnico para publicar contenido en UrbanHarvestLab. Está basado en el estilo real de los posts ya publicados en `src/content/blog/` y en cómo el layout actual renderiza frontmatter, bloques automáticos, tablas, FAQs e imágenes.

## 1. Contrato de Arquitectura del Sitio

La arquitectura activa del sitio tiene cuatro piezas editoriales:

- Índice general del blog: `/blog/`
- Post individual: `/blog/{category}/{slug}/`
- Topic hub por categoría: `/{category}/`
- Archivo simple por categoría: `/category/{category}/`

Categorías activas:

- `urban-gardening`
- `hydroponics`
- `grow-lights`
- `containers-planters`
- `soil-fertilizers`
- `plant-problems`

Reglas duras:

- No crear categorías nuevas sin actualizar `src/data/categories.ts` y su hub correspondiente en `src/content/hubs/`.
- Todo post nuevo debe vivir dentro de una categoría activa y reforzar el topic hub de esa categoría.
- No inventar rutas paralelas fuera del patrón `/blog/.../`, `/{category}/` y `/category/{category}/`.

## 2. Ubicación de Archivos y Tipos de Pieza

### 2.1 Posts

- Fuente: `src/content/blog/{category}/{slug}.md`
- URL pública: `/blog/{category}/{slug}/`

### 2.2 Topic hubs

- Fuente: `src/content/hubs/{category}.md`
- URL pública: `/{category}/`

### 2.3 Tipos editoriales activos

El tracker actual trabaja con estos roles:

- `hub`
- `cornerstone`
- `supporting`
- `troubleshooting`
- `buyer guide`

Aunque algunos posts antiguos conservan campos legacy como `slug`, `published` o `cluster_role`, el contrato técnico vigente es el schema de `src/content/config.ts`. No añadas campos arbitrarios sin una razón explícita.

## 3. Frontmatter: Mínimo Técnico y Estándar Editorial

### 3.1 Mínimo técnico

El schema actual exige como base:

- `title`
- `description`
- `category`
- `publishDate`

Campos de soporte ya contemplados por el layout:

- `excerpt`
- `tags`
- `image`
- `imageAlt`
- `updatedDate`
- `draft`
- `affiliate`
- `featured`
- `popular`
- `author`
- `keyTakeaways`
- `beginnerPathTitle`
- `beginnerPathSlugs`
- `topicLinksTitle`
- `topicLinksDescription`
- `topicLinkSlugs`
- `faq`
- `comparisonTable`
- `diagnosis`
- `relatedSlugs`

### 3.2 Estándar editorial recomendado para cualquier post nuevo

Aunque no todo sea técnicamente obligatorio, el estándar actual de Urban Harvest Lab es publicar con:

- `excerpt` distinto de `description`
- `tags` claros y útiles
- `image` y `imageAlt`
- `keyTakeaways`
- `topicLinksTitle`, `topicLinksDescription` y `topicLinkSlugs`
- `faq`
- `relatedSlugs`

Usa además estos bloques cuando encajen:

- `beginnerPathTitle` + `beginnerPathSlugs` en piezas para principiantes, cornerstone o buyer guides con dependencia de contexto
- `comparisonTable` en comparativas, decision pages, buyer guides y guías de mapeo rápido
- `diagnosis` en troubleshooting y artículos de diagnóstico sistémico
- `updatedDate` cuando exista una revisión material del contenido

Reglas:

- `description` debe respetar el límite del schema: 50-180 caracteres.
- `author` puede omitirse si sigue siendo `Urban Harvest Lab Editorial`.
- `affiliate: true` solo cuando el artículo realmente incluya monetización o recomendación con disclosure.
- `featured` y `popular` son flags editoriales manuales, no defaults.

## 4. Estilo de Escritura de Urban Harvest Lab

### 4.1 Tono

El tono publicado en el repo es:

- claro, práctico y sereno
- observacional, no vendedor
- realista con las limitaciones del hogar, balcón, ventana, luz o sistema
- centrado en sistemas, no en “trucos”

El patrón dominante no promete resultados mágicos. Corrige expectativas. Frases como estas encajan con el estilo actual:

- “The useful question is not... It is...”
- “That is why...”
- “This is where many beginners go wrong.”
- “The goal is not... The goal is...”

### 4.2 Qué sí hacer

- Escribir en inglés natural, aunque esta guía esté en español.
- Priorizar claridad práctica sobre entusiasmo o branding.
- Explicar condiciones: luz real, tamaño del contenedor, velocidad de secado, altura útil, densidad de cultivo, etc.
- Diferenciar supervivencia de rendimiento; síntoma de causa; brillo percibido de luz útil; producto “potente” de producto “adecuado”.
- Usar párrafos cortos y muy legibles.
- Hacer que el lector entienda primero el marco mental y luego la acción.

### 4.3 Qué evitar

- Clickbait.
- Tono alarmista.
- Afirmaciones absolutas sin contexto.
- Listas vacías solo para sonar “SEO”.
- Copy comercial inflado.
- Recomendaciones de producto sin justificar el fit.
- Repetir keywords de forma mecánica.

## 5. Estructura Obligatoria del Cuerpo del Artículo

El contenido markdown debe respetar estas reglas técnicas:

- No usar H1 en el markdown. El layout ya renderiza el único H1.
- Solo se permiten H2 y H3.
- Debe existir al menos un H2.
- No saltar niveles de encabezado.

Patrón estructural recomendado según lo que ya publica el sitio:

1. Apertura de 1-2 párrafos con el problema real y la corrección de expectativas.
2. Enlace temprano a la pieza hub o cornerstone relevante dentro del primer tercio.
3. Primer H2 tipo `Quick Answer`, `Quick Setup Logic`, `Start with...` o equivalente.
4. Desarrollo por lógica de sistema, no por ocurrencia.
5. Sección de `Common Mistakes` cuando la pieza sea educativa o de diagnóstico.
6. Bloque `FAQ`.
7. Cierre con `Related Guides`.

La progresión que mejor encaja con Urban Harvest Lab es:

- principio o marco
- implicación práctica
- decisión o acción

No escribir piezas que parezcan checklists desordenados sin una tesis clara.

## 6. Interlinking Editorial

Urban Harvest Lab depende mucho del enlazado contextual. El patrón real del sitio es:

- Enlace temprano a hub o cornerstone en la introducción.
- Enlaces internos dentro del cuerpo solo cuando resuelven el siguiente paso lógico.
- Bloque automático de `Beginner path` cuando la página necesita contexto previo.
- Bloque automático de `Internal links` mediante `topicLinks`.
- Bloque final de `Related Guides`.

Reglas duras:

- Usar solo URLs canónicas con slash final: `/blog/.../`, `/{category}/`, `/category/{category}/`.
- No enlazar a piezas que aún no existen en producción.
- Respetar el orden del tracker cuando una pieza dependa de otra.

Reglas por tipo:

- Cornerstone: debe enlazar hacia abajo a setup, care, troubleshooting y supporting pages.
- Supporting: debe enlazar pronto de vuelta al cornerstone o hub, y luego lateralmente a 2-5 piezas útiles.
- Troubleshooting: debe devolver al lector a root causes como luz, contenedor, riego, sustrato o rutina.
- Buyer guide: debe enlazar al menos a un explainer y a una beginner/setup page para mantener contexto editorial.

## 7. Uso de Bloques Automáticos del Layout

El layout actual inserta bloques antes y después del cuerpo del artículo. Úsalos de forma intencional:

- `keyTakeaways`: para resumir 3 ideas accionables al principio.
- `beginnerPathSlugs`: cuando el lector necesite secuencia, no solo enlaces sueltos.
- `diagnosis`: para troubleshooting con síntomas, causas posibles y quick fixes.
- `comparisonTable`: para comparar opciones, escenarios, tipos de producto o síntomas.
- `topicLinkSlugs`: para mover al lector al siguiente problema o decisión.
- `faq`: para cerrar objeciones reales y mejorar snippet utility.

No metas en el cuerpo una tabla o una checklist redundante si el bloque automático ya hace ese trabajo mejor.

## 8. Reglas de Imágenes

El estilo visual observado en Urban Harvest Lab no es de stock photo ornamental. Es principalmente:

- diagrama limpio
- ilustración editorial
- esquema comparativo
- visual de sistema o flujo de decisión

Formato recomendado:

- `svg` para diagramas, decision trees y comparativas simples
- `webp` para ilustraciones raster o composiciones más ricas
- evitar `png` como formato final si puede convertirse

Estándar visual:

- imágenes sobrias, educativas y fáciles de leer
- sin marcas de agua
- sin claims publicitarios incrustados
- sin texto excesivo dentro de la imagen
- mismo tono calmado y práctico que el artículo

Convención de carpetas:

- guardar assets en `public/images/{slug-o-cluster}/...`
- referenciarlos en frontmatter y markdown como `/images/...`

Alt text:

- describir qué enseña la imagen, no llenar keywords
- ejemplo correcto: “Diagram comparing airy potting mix with dense raised bed soil inside containers”

Objetivo por tipo de pieza:

- cornerstone y supporting largos: hero image + 3 o 4 imágenes inline suele ser el patrón dominante actual
- troubleshooting o buyer guide corto: hero image y, si aporta claridad, 1-3 visuales de apoyo

Conversión útil:

- `python3 png_to_webp.py <input> <output>`

## 9. Buyer Guides y Afiliación

El buyer-guide style de Urban Harvest Lab es muy distinto del contenido agresivamente comercial.

Reglas:

- La decisión se construye por fit: footprint, cobertura, altura, mantenimiento, densidad, calor, visibilidad doméstica.
- La recomendación debe nacer del sistema, no del payout.
- Si `affiliate: true`, el disclosure aparecerá automáticamente. No lo ocultes con copy ambiguo.
- Evitar listas largas de productos. El contenido debe seguir siendo editorial, no catálogo.

Elementos recomendados:

- apertura que deshinche el hype del producto
- `comparisonTable`
- enlaces a explainers y setup guides
- lenguaje del tipo “what actually matters before you buy”, no “best ever”

## 10. Troubleshooting y Diagnóstico

El troubleshooting de Urban Harvest Lab debe ser diagnosis-first.

Orden recomendado de análisis:

1. luz real
2. comportamiento del root zone
3. contenedor y drenaje
4. rutina de cuidado

Reglas:

- No diagnosticar solo desde el síntoma visible.
- No mandar fertilizar como primera reacción.
- No proponer cambiar cinco variables a la vez.
- Siempre ofrecer el “smallest useful fix”.

Cuando aplique, usar `diagnosis` para que el layout muestre:

- `Symptoms`
- `Possible causes`
- `Quick fixes`

## 11. SEO y Longitud Editorial

La intención manda más que la densidad de keyword.

Tendencias reales del proyecto, según el tracker activo:

- hub: 2800-3400 palabras
- cornerstone: 2100-2500 palabras
- supporting: 1300-1700 palabras
- troubleshooting: 1000-1500 palabras
- buyer guide: 1600-2100 palabras

Estas cifras son objetivo editorial actual, no excusa para alargar texto vacío.

Reglas SEO:

- Title y description deben reflejar exactamente el ángulo real del artículo.
- El `excerpt` debe sonar editorial, no como meta description rehecha.
- Las FAQs deben responder objeciones concretas del lector.
- Evitar canibalización con piezas ya publicadas o planificadas en `URBANHARVESTLAB_PUBLISHING_TRACKER.md`.
- No publicar páginas huérfanas: todo post debe encajar en un cluster y enlazar hacia arriba y hacia los lados.

## 12. Checklist de Publicación

Antes de cerrar una pieza, revisar:

1. ¿Está en `src/content/blog/{category}/` y en la categoría correcta?
2. ¿Refuerza un hub real y no crea una isla editorial?
3. ¿El frontmatter cumple el schema y el estándar editorial actual?
4. ¿Tiene `image` e `imageAlt` útiles?
5. ¿Tiene `keyTakeaways`, `faq` y `relatedSlugs` si es una pieza nueva importante?
6. ¿Usa solo H2/H3 y ningún H1?
7. ¿Incluye enlace temprano al hub o cornerstone adecuado?
8. ¿Las URLs internas usan slash final?
9. ¿Si es troubleshooting, devuelve al lector a las causas raíz?
10. ¿Si es buyer guide, incluye contexto educativo real y `comparisonTable`?
11. ¿El tono es calmado, práctico, preciso y claramente en inglés natural?
12. ¿Compila sin errores?

Validación técnica recomendada:

- `npm run build`

---

La referencia de estilo para contenido nuevo no son los posts más antiguos y breves del repositorio, sino el patrón editorial más reciente y desarrollado: guías largas de herbs, setup, light, care, troubleshooting e imágenes explicativas de marzo de 2026. Todo contenido nuevo debería empujar el sitio hacia ese estándar, no hacia formatos más débiles o genéricos.
