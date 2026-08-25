---
name: "Instrucciones CSS"
description: "Reglas file-based para mantener coherencia, accesibilidad y estilo en los archivos CSS del workspace."
applyTo: "**/*.css"
---

# Instrucciones file-based para CSS

- Mantén los estilos coherentes con el tema oscuro actual y con los tokens de diseño existentes en `:root`.
- Reutiliza las propiedades personalizadas actuales (`--bg`, `--bg-soft`, `--text`, `--muted`, `--accent`) antes de añadir nuevas.
- Prefiere selectores simples y legibles, y evita anidar en exceso o usar `!important` sin necesidad.
- Usa unidades responsivas (`rem`, `em`, `clamp()`, `minmax()`, `fr`) y mantén los diseños fluidos.
- Conserva la accesibilidad: contraste, espaciado, estados de foco y legibilidad en pantallas pequeñas.
- Haz cambios mínimos y concretos que encajen con la estructura HTML existente.