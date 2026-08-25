---
name: 'Redacción Web'
description: 'Convenciones de redacción y tono en las páginas HTML del workspace'
applyTo: "**/*.html"
---

# Instrucciones de redacción para las páginas web

## Idioma y ortografía
- **Idioma principal**: Español (España) con tilde y acentuación correcta.
- Evita anglicismos innecesarios; si los usas, deben estar justificados en contexto técnico (ej: "agente", "chat", "workspace").
- Revisa tildes en palabras clave: "más", "qué", "cómo", "ahí", "aún".
- Puntuación correcta: espacio después de punto, coma y signos (en español, no espacios antes).

## Tono y registro
- **Tono conversacional pero profesional**: dirigirse al lector con cercanía sin ser coloquial.
- Usa la segunda persona ("tú", "tu proyecto") para crear conexión directa.
- Prefiere frases cortas y claras sobre párrafos densos.
- Evita jerga excesiva; cuando uses términos técnicos, explica brevemente la primera vez.

## Estructuras comunes

### Encabezados
- Usa solo H2 (`<h2>`) para secciones principales y H3 (`<h3>`) para subsecciones dentro de `.grid`.
- Los encabezados son frases nominales o imperativas (sin punto al final).
  - ✅ "Flujo recomendado", "Crear instrucciones de workspace"
  - ❌ "Que es la vista Agente", "El flujo recomendado es el siguiente:"

### Párrafos introductorios (en `<p>`)
- Máximo 2-3 líneas.
- Responde qué, por qué o para qué.
- Ejemplo:
  ```
  Las instrucciones personalizadas permiten guiar el comportamiento de Copilot más allá de un prompt puntual.
  Puedes combinarlas para mantener consistencia técnica y de comunicación.
  ```

### Listas ordenadas (`<ol>`)
- Usa para pasos, procedimientos o secuencias lógicas.
- Cada ítem empieza con verbo en imperativo: "Abre", "Ve a", "Define", "Guarda".
- Sé específico; no dejes ambigüedades.
  - ✅ "Ve a la configuración de Copilot Chat para el workspace"
  - ❌ "Ve a la configuración"

### Listas desordenadas (`<ul>`)
- Usa para características, ventajas o elementos sin orden.
- Mantén consistencia en la estructura: todas frases cortas o todas completas.
- Ejemplo correcto:
  ```
  - Divide tareas grandes en entregables pequeños.
  - Pide siempre validación con build/test reales.
  - Incluye restricciones de estilo y arquitectura del proyecto.
  ```

## Redacción de ayudas y contexto

### Textos en `.subtitle` o descripciones
- Son ganchos que resumen el valor o propósito de la página.
- Máximo 1 línea (idealmente).
- Comienzan con sustantivo o frase descriptiva.
  - ✅ "Una forma más natural de delegar tareas y acelerar tu flujo"
  - ❌ "Aquí puedes aprender a delegar tareas"

### Etiquetas `<p class="eyebrow">`
- Contexto rápido en mayúsculas (ej: "VS CODE + COPILOT").
- Máximo 3 palabras, separadas por espacios o símbolo " + " si aplica.

### Textos en tarjetas `.card`
- Evita texto innecesario.
- Un párrafo introductorio + lista/pasos.
- Si hay 3 subsecciones en `.grid`, cada `<article>` tiene solo `<h3>` + 1 párrafo.

## Palabras y expresiones clave

### Preferidas
- "Workspace" (no "espacio de trabajo")
- "Instrucciones personalizadas" o "directivas"
- "Chat" (en contexto de Copilot Chat)
- "Agente" (la vista Agente de VS Code)
- "Flujo" (workflow, ciclo de trabajo)
- "Validación" (testing, pruebas de que funciona)

### Evita
- "El usuario" (usa "tú" o "tu")
- Redundancias como "muy importante" (es evidente por contexto)
- Negativos innecesarios ("no hagas X" → "prefiere Y")
- Tecnicismos sin explicar ("DAO", "MCP" → explica en la primera mención)

## Ejemplos y código

### Ejemplos en prosa
- Introduce con "Ejemplo:" o "Por ejemplo:".
- Si es una acción, usa imperativo: "Abre VS Code, selecciona el modo Agente...".

### Snippets de código
- Indentación de 2 espacios.
- Comillas dobles en HTML/JS.
- Comenta solo si añade claridad (no es obvio).
- Ejemplo correcto:
  ```html
  <div class="form-group">
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" required />
  </div>
  ```

## Validación antes de publicar

- [ ] Ortografía: tildes, acentos, puntuación.
- [ ] Coherencia: mismo tono en toda la página.
- [ ] Claridad: ¿entiende un usuario sin experiencia técnica?
- [ ] Longitud: ¿los párrafos caben en 2-3 líneas máximo?
- [ ] Jerga: ¿he explicado términos técnicos nuevos?
- [ ] Consistencia: ¿utilizo los mismos términos que otras páginas?
- [ ] Links: ¿son relativos y funcionan?
- [ ] Accesibilidad: ¿los encabezados forman una jerarquía clara?

## Errores comunes que Copilot debe evitar

- ❌ "la vista Agente" (sin mayúscula en "agente")
- ❌ "custom instructions" (usar "instrucciones personalizadas" o "directivas")
- ❌ "que es" (sin tilde en interrogativos)
- ❌ Párrafos de más de 5 líneas
- ❌ Usar H1 (`<h1>`) en secciones (solo en `<header class="hero">`)
- ❌ Textos como "Click aquí" o "Haz clic en el botón" (el botón es el CTA, es evidente)
- ❌ "Este apartado explica..." (redundante; el titulo ya lo dice)
