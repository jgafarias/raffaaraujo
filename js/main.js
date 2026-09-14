// Ponto de entrada — depende de todos os outros arquivos js/*.js
// (carregados antes deste, ver <script> no fim do <body>).
document.addEventListener("DOMContentLoaded", () => {
  captureUTMs();
  wireConsent();
  wireCTAs();
  wireMobileMenu();
  wirePageNav();
  wireStickyCTA();

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function wireStickyCTA() {
  const sticky = document.querySelector(".sticky-cta");
  const hero = document.querySelector(".hero, .manual-hero");
  if (!sticky || !hero || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle("is-visible", !entry.isIntersecting);
  }, { threshold: 0.15 });
  observer.observe(hero);
}
