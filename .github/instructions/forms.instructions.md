---
name: 'Formularios HTML'
description: 'Convenciones para crear formularios HTML accesibles, semánticos y coherentes con el diseño del workspace'
applyTo: "**/*.html"
---

# Instrucciones para crear formularios HTML

## Estructura y semántica
- Usa `<form>` como contenedor principal con atributo `action` y `method` solo si hay envío real; si es JS-only, omítelos.
- Agrupa campos relacionados con `<fieldset>` y `<legend>` (ej: datos personales, preferencias).
- Envuelve cada campo en un `<div class="form-group">` para facilitar el espaciado.
- Usa siempre el atributo `type` correcto: `email`, `number`, `tel`, `url`, `search`, `password`.
- Añade `autocomplete` donde ayude al usuario: `autocomplete="email"`, `"name"`, `"off"`.

## Accesibilidad
- Todo `<input>`, `<select>` y `<textarea>` debe tener un `<label>` con `for="id_del_campo"` coincidente.
- Usa `aria-required="true"` en campos obligatorios (además del atributo `required`).
- Si hay texto de ayuda, enlázalo con `aria-describedby="id_ayuda"`.
- Los mensajes de error deben usar `aria-live="polite"` para anunciarse a lectores de pantalla.
- Los botones deben tener texto descriptivo; evita solo iconos sin `aria-label`.

## Clases CSS y estilos
- Usa las clases existentes del proyecto: `.card` para el contenedor, `.cta` para el botón de envío.
- Nuevas clases permitidas: `.form-group`, `.form-input`, `.form-error`, `.form-help`.
- **No uses estilos inline**; todo cambio va en `styles.css`.
- Reutiliza variables CSS del `:root`: `--bg`, `--bg-soft`, `--text`, `--muted`, `--accent`.

## Validación y feedback
- Añade `novalidate` en `<form>` si implementas validación propia en JavaScript.
- Muestra errores bajo el campo con clase `.form-error` y texto descriptivo del problema.
- Feedback positivo (éxito) usa el color `--accent`.
- La validación JavaScript sigue el mismo estilo defensivo del proyecto: comprueba que el elemento existe antes de manipularlo.

## Ejemplo mínimo correcto
```html
<form class="card" novalidate>
  <div class="form-group">
    <label for="email">Correo electrónico</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-help"
      autocomplete="email"
    />
    <small id="email-help" class="form-help">Usaremos este correo solo para responderte.</small>
    <span class="form-error" aria-live="polite"></span>
  </div>
  <button type="submit" class="cta">Enviar</button>
</form>
```

## Errores comunes que Copilot debe evitar
- ❌ Input sin `<label>` asociado (accesibilidad rota)
- ❌ Usar `placeholder` como sustituto del `<label>`
- ❌ Estilos inline en los campos (`style="color: red"`)
- ❌ Crear variables CSS nuevas para colores ya definidos en `:root`
- ❌ Usar H1 dentro del formulario (solo `<h2>` o `<h3>` si aplica)
- ❌ Botón de envío sin texto visible o `aria-label`
- ❌ Mensajes de error sin `aria-live`
