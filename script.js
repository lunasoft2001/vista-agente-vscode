const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = `Actualizado ${new Date().getFullYear()}`;
}
