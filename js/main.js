// Ponto de entrada — depende de todos os outros arquivos js/*.js
// (carregados antes deste, ver <script> no fim do <body>).
document.addEventListener("DOMContentLoaded", () => {
  captureUTMs();
  wireCTAs();
  wireMobileMenu();
  wirePageNav();

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
