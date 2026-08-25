---
name: 'Web Standards'
description: 'Convenciones para este espacio Web'
---

# Convenciones generales del proyecto

Este es un sitio estático (HTML, CSS y JavaScript vanilla, sin build ni framework) publicado con GitHub Pages.

## Stack y estructura
- No añadas dependencias, bundlers ni frameworks. Todo el sitio debe seguir funcionando abriendo los ficheros directamente o sirviéndolos como estáticos.
- Cada página es un fichero `.html` independiente en la raíz del repo (por ejemplo `index.html`, `custom-instructions.html`) que comparte `styles.css` y `script.js`.
- Usa HTML semántico: `header.hero`, `main`, `section.card`, `footer`. Reutiliza las clases existentes (`card`, `grid`, `cta`, `cta secondary`) en vez de crear estilos nuevos para el mismo propósito.

## Estilo de código
- Indentación de 2 espacios en HTML, CSS y JS.
- Usa comillas dobles en atributos HTML y en cadenas de CSS/JS, como en el resto del repo.
- En CSS, reutiliza las variables definidas en `:root` (`--bg`, `--bg-soft`, `--text`, `--muted`, `--accent`) en lugar de introducir colores nuevos sueltos.
- Mantén el JavaScript mínimo y defensivo (por ejemplo, comprueba que el elemento existe con `if (el)` antes de usarlo), como en `script.js`.

## Contenido e idioma
- El contenido de las páginas HTML (`index.html`, `custom-instructions.html`, etc.) se escribe en español, con tildes y acentuación correcta.
- Los ficheros `README.*.md` son traducciones del README principal; si cambias `README.md`, actualiza también `README.en.md`, `README.de.md`, `README.fr.md` y `README.it.md` para mantenerlos sincronizados.
- No inventes datos sobre VS Code o Copilot: si citas comportamiento o pasos de la UI, verifica que coincide con la documentación oficial (https://code.visualstudio.com/docs/agent-customization/).

## Accesibilidad y SEO
- Cada página debe tener `<title>` y `<meta name="description">` propios y descriptivos.
- Usa una única jerarquía de encabezados por sección (`h2` para secciones, `h3` para subsecciones dentro de una `.grid`).
- Los enlaces de navegación entre páginas deben usar rutas relativas (`index.html`, `custom-instructions.html`), nunca URLs absolutas del sitio publicado.

## Validación
- Este proyecto no tiene tests automatizados ni linter configurado. Antes de dar por buena una tarea, abre la página modificada en el navegador (o revisa el HTML/CSS manualmente) para comprobar que el resultado se ve correctamente y que los enlaces e IDs de ancla siguen resolviendo.
